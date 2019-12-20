/**
 * 形態素クラス
 */
export default class Morpheme {
  constructor(surface, feature, start) {
    /**
     * 形態素の表層形
     */
    this.surface = surface
    /**
     * 形態素の素性
     */
    this.feature = feature
    /**
     * テキスト内での形態素の出現開始位置
     */
    this.start = start
  }
}