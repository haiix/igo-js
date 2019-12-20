import Tagger from './Igo/Tagger.js'
import { prefetch } from './Igo/util/FileMappedInputStream.js'

export async function fetchDic(url, le = false) {
  await prefetch(url, [
    '/word2id',
    '/word.dat',
    '/word.ary.idx',
    '/word.inf',
    '/char.category',
    '/code2category',
    '/matrix.bin',
  ], le)
}

export function parse(str) {
  const text = new Uint16Array(str.length)
  for (let i = 0; i < str.length; i++) {
    text[i] = str.charCodeAt(i)
  }

  const tagger = new Tagger('')
  const result = tagger.parse(text)

  for (const morpheme of result) {
    morpheme.surface = morpheme.surface.reduce((str, charCode) => str + String.fromCharCode(charCode), '')
    morpheme.feature = morpheme.feature.reduce((str, charCode) => str + String.fromCharCode(charCode), '')
  }

  return result
}

export function wakati(str) {
  const text = new Uint16Array(str.length)
  for (let i = 0; i < str.length; i++) {
    text[i] = str.charCodeAt(i)
  }

  const tagger = new Tagger('')
  const result = tagger.wakati(text)

  return result.map(arr => arr.reduce((str, charCode) => str + String.fromCharCode(charCode), ''))
}