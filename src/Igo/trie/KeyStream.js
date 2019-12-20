/**
 * 文字列を文字のストリームとして扱うためのクラス。
 * readメソッドで個々の文字を順に読み込み、文字列の終端に達した場合には{@code Node.Chck.TERMINATE_CODE}が返される。
 * XXX: クラス名は不適切
 */
export default class KeyStream {
  constructor(key, start = 0) {
    this.s = key
    this.cur = start
  }

  /**
   * このメソッドは動作的には、{@code rest().startsWith(prefix.substring(beg, len))}、と等価。
   * ほんの若干だが、パフォーマンスを改善するために導入。
   * 簡潔性のためになくしても良いかもしれない。
   */
  startsWith(prefix, beg, len) {
    if (this.s.length - this.cur < len) {
      return false
    }

    for (let i = 0; i < len; i++) {
      if (this.s[this.cur + i] !== prefix(beg + i)) {
        return false
      }
    }
    return true
  }

  read() {
    const c = this.eos() ? 0 : this.s[this.cur++]
    return c
  }

  eos() {
    return this.cur === this.s.length;
  }
}