import Matrix from './dictionary/Matrix.js'
import WordDic from './dictionary/WordDic.js'
import Unknown from './dictionary/Unknown.js'
import ViterbiNode from './dictionary/ViterbiNode.js'
import Morpheme from './Morpheme.js'

const BOS_NODES = []
BOS_NODES.push(ViterbiNode.makeBOSEOS())

/**
 * 形態素解析を行うクラス
 */
export default class Tagger {
  /**
   * バイナリ辞書を読み込んで、形態素解析器のインスタンスを作成する
   *
   * @param dataDir バイナリ辞書があるディレクトリ
   */
  constructor(dataDir) {
    this.wdc = new WordDic(dataDir)
    this.unk = new Unknown(dataDir)
    this.mtx = new Matrix(dataDir)
  }

  /**
   * 形態素解析を行う
   *
   * @param text 解析対象テキスト
   * @param result 解析結果の形態素が追加されるリスト
   * @return 解析結果の形態素リスト. {@code parse(text,result)=result}
   */
  parse(text, result = []) {
    for (let vn = this.parseImpl(text); vn != null; vn = vn.prev) {
      const surface = text.slice(vn.start, vn.start + vn.length);
      const feature = this.wdc.wordData(vn.wordId);
      result.push(new Morpheme(surface, feature, vn.start))
    }
    return result
  }

  /**
   * 分かち書きを行う
   *
   * @param text 分かち書きされるテキスト
   * @param result 分かち書き結果の文字列が追加されるリスト
   * @return 分かち書きされた文字列のリスト.
   */
  wakati(text, result = []) {
    for (let vn = this.parseImpl(text); vn != null; vn = vn.prev) {
      result.push(text.slice(vn.start, vn.start + vn.length))
    }
    return result
  }

  parseImpl(text) {
    const len = text.length
    const nodesAry = new Array(len + 1)
    nodesAry[0] = BOS_NODES

    const fn = new MakeLattice(this, nodesAry)
    for (let i = 0; i < len; i++) {
      if (nodesAry[i] != null) {
        fn.set(i)
        this.wdc.search(text, i, fn)           // 単語辞書から形態素を検索
        this.unk.search(text, i, this.wdc, fn) // 未知語辞書から形態素を検索
        delete nodesAry[i]
      }
    }

    let cur = this.setMincostNode(ViterbiNode.makeBOSEOS(), nodesAry[len]).prev

    // reverse
    let head = null;
    while (cur.prev !== null) {
      const tmp = cur.prev
      cur.prev = head
      head = cur
      cur = tmp
    }
    return head
  }

  setMincostNode(vn, prevs) {
    const f = vn.prev = prevs[0]
    let minCost = f.cost + this.mtx.linkCost(f.rightId, vn.leftId)

    for (let i = 1; i < prevs.length; i++) {
      const p = prevs[i]
      const cost = p.cost + this.mtx.linkCost(p.rightId, vn.leftId)
      if (cost < minCost) {
        minCost = cost
        vn.prev = p
      }
    }
    vn.cost += minCost

    return vn
  }
}

class MakeLattice {
  constructor(tagger, nodesAry) {
    this.empty = true
    this.tagger = tagger
    this.nodesAry = nodesAry
  }

  set(i) {
    this.i = i
    this.prevs = this.nodesAry[i]
    this.empty = true
  }

  call(vn) {
    this.empty = false

    const end = this.i + vn.length
    if (this.nodesAry[end] == null) {
      this.nodesAry[end] = []
    }

    if (vn.isSpace) {
      this.nodesAry[end].push(...this.prevs);
    } else {
      this.nodesAry[end].push(this.tagger.setMincostNode(vn, this.prevs));
    }
  }

  isEmpty() {
    return this.empty
  }
}