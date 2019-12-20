import Searcher from '../trie/Searcher.js'
import ViterbiNode from './ViterbiNode.js'
import FileMappedInputStream from '../util/FileMappedInputStream.js'

export default class WordDic {
  constructor(dataDir) {
    this.trie    = new Searcher(dataDir + '/word2id')
    this.data    = FileMappedInputStream.getString(dataDir + '/word.dat')
    this.indices = FileMappedInputStream.getIntArray(dataDir + '/word.ary.idx')

    {
      const fmis = new FileMappedInputStream(dataDir + '/word.inf')
      const wordCount = fmis.size() / (4 + 2 + 2 + 2)

      try {
        this.dataOffsets = fmis.getIntArray(wordCount)   //単語の素性データの開始位置
        this.leftIds     = fmis.getShortArray(wordCount) //単語の左文脈ID
        this.rightIds    = fmis.getShortArray(wordCount) //単語の右文脈ID
        this.costs       = fmis.getShortArray(wordCount) //単語のコスト
      } finally {
        fmis.close()
      }
    }
  }

  search(text, start, fn) {
    this.trie.eachCommonPrefix(text, start, new WordDicCallbackCaller(this, fn))
  }

  searchFromTrieId(trieId, start, wordLength, isSpace, fn) {
    const end = this.indices(trieId + 1)
    for (let i = this.indices(trieId); i < end; i++) {
      fn.call(new ViterbiNode(i, start, wordLength, this.costs(i), this.leftIds(i), this.rightIds(i), isSpace))
    }
  }

  wordData(wordId) {
    const begin = this.dataOffsets(wordId)
    const end = this.dataOffsets(wordId + 1)
    const text = new Uint16Array(end - begin)
    for (let i = 0; i < text.length; i++) {
      text[i] = this.data(begin + i)
    }
    return text
  }
}

class WordDicCallbackCaller {
  constructor(wordDic, fn) {
    this.wordDic = wordDic
    this.fn = fn
  }

  call(start, offset, trieId) {
    const end = this.wordDic.indices(trieId + 1)
    for (let i = this.wordDic.indices(trieId); i < end; i++) {
      this.fn.call(new ViterbiNode(i, start, offset, this.wordDic.costs(i), this.wordDic.leftIds(i), this.wordDic.rightIds(i), false))
    }
  }
}