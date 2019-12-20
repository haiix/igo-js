import FileMappedInputStream from '../util/FileMappedInputStream.js'
import KeyStream from './KeyStream.js'

/**
 * DoubleArray検索用のクラス
 */
export default class Searcher {
  /**
   * 保存されているDoubleArrayを読み込んで、このクラスのインスタンスを作成する
   *
   * @param filepath DoubleArrayが保存されているファイルのパス
   * @throws IOException filepathで示されるファイルの読み込みに失敗した場合に送出される
   */
  constructor(filePath) {
    const fmis = new FileMappedInputStream(filePath)

    const nodeSz = fmis.getInt()
    const tindSz = fmis.getInt()
    const tailSz = fmis.getInt()
    //this.keySetSize = tindSz
    this.begs = fmis.getIntArray(tindSz)
    this.base = fmis.getIntArray(nodeSz)
    this.lens = fmis.getShortArray(tindSz)
    this.chck = fmis.getCharArray(nodeSz)
    this.tail = fmis.getCharArray(tailSz)

    fmis.close()
  }

  /**
   * common-prefix検索を行う
   * 条件に一致するキーが見つかる度に、fn.call(...)メソッドが呼び出される
   *
   * @param key 検索対象のキー文字列
   * @param start 検索対象となるキー文字列の最初の添字
   * @param fn 一致を検出した場合に呼び出されるメソッドを定義したコールバッククラス
   */
  eachCommonPrefix(key, start, fn) {
    let node = this.base(0)
    let offset = 0
    const _in = new KeyStream(key, start)

    for (let code = _in.read();; code = _in.read(), offset++) {
      const terminalIdx = node
      if (this.chck(terminalIdx) === 0) {
        fn.call(start, offset, nodeBaseId(this.base(terminalIdx)))
        if (code === 0) {
          return
        }
      }

      const idx = node + code
      node = this.base(idx)
      if (this.chck(idx) === code) {
        if (node >= 0) {
          continue
        } else {
          this.call_if_keyIncluding(_in, node, start, offset, fn)
        }
      }
      return
    }
  }

  call_if_keyIncluding(_in, node, start, offset, fn) {
    const id = nodeBaseId(node)
    if (_in.startsWith(this.tail, this.begs(id), this.lens(id))) {
      fn.call(start, offset + this.lens(id) + 1, id)
    }
  }

}

function nodeBaseId(id) {
  return id * -1 - 1
}