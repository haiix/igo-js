/**
 * Viterbiアルゴリズムで使用されるノード
 */
export default class ViterbiNode {
  constructor(wid, beg, len, wordCost, l, r, space) {
    this.prev = null       // コスト最小の前方のノードへのリンク
    this.wordId = wid      // 単語ID
    this.leftId = l        // 左文脈ID
    this.rightId = r       // 右文脈ID
    this.length = len      // 形態素の表層形の長さ(文字数)
    this.cost = wordCost   // 始点からノードまでの総コスト
    this.isSpace = space   // 形態素の文字種(文字カテゴリ)が空白文字かどうか
    this.start = beg       // 入力テキスト内での形態素の開始位置
  }

  static makeBOSEOS() {
    return new ViterbiNode(0, 0, 0, 0, 0, 0, false)
  }
}