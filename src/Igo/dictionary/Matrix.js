import FileMappedInputStream from '../util/FileMappedInputStream.js'

/**
 * 形態素の連接コスト表を扱うクラス
 */
export default class Matrix {
  constructor(dataDir) {
    const fmis = new FileMappedInputStream(dataDir + '/matrix.bin')
    try {
      this.leftSize  = fmis.getInt()
      this.rightSize = fmis.getInt()
      this.matrix    = fmis.getShortArray(this.leftSize * this.rightSize)
    } finally {
      fmis.close()
    }
  }

  /**
   * 形態素同士の連接コストを求める
   */
  linkCost(leftId, rightId) {
    return this.matrix(rightId * this.leftSize + leftId)
  }
}