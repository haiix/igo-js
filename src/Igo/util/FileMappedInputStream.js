const fileData = {}
let fetched = false;
let le = false;

export async function prefetch(url, filenames, littleEndian = false) {
  if (fetched) throw new Error('Already fetched')
  fetched = true
  const res = await Promise.all(filenames.map(filename => fetch(url + filename)))
  for (let i = 0; i < filenames.length; i++) {
    const buf = await res[i].arrayBuffer()
    fileData[filenames[i]] = buf
  }
  le = littleEndian;
}

/**
 * ファイルにマッピングされた入力ストリーム<br />
 * net.reduls.igo以下のパッケージではファイルからバイナリデータを取得する場合、必ずこのクラスが使用される
 */
export default class FileMappedInputStream {
  /**
   * 入力ストリームを作成する
   * 
   * @param filepath マッピングするファイルのパス
   */
  constructor(filepath) {
    this.fileData = fileData[filepath]
    this.cur = 0
  }

  read(len) {
    const data = new DataView(this.fileData, this.cur, len)
    this.cur += len
    return data
  }

  getInt() {
    return this.read(4).getInt32(0, le)
  }

  getIntArray(elementCount) {
    const data = this.read(elementCount * 4)
    function fn(p) {
      return data.getInt32(p * 4, le)
    }
    fn.size = elementCount
    return fn
  }

  static getIntArray(filepath) {
    const fmis = new FileMappedInputStream(filepath)
    try {
      return fmis.getIntArray(fmis.size() / 4)
    } finally {
      fmis.close()
    }
  }

  getShortArray(elementCount) {
    const data = this.read(elementCount * 2)
    function fn(p) {
      return data.getInt16(p * 2, le)
    }
    fn.size = elementCount
    return fn
  }

  getCharArray(elementCount) {
    const data = this.read(elementCount * 2)
    function fn(p) {
      return data.getUint16(p * 2, le)
    }
    fn.size = elementCount
    return fn
  }

  static getString(filepath) {
    const fmis = new FileMappedInputStream(filepath)
    try {
      return fmis.getCharArray(fmis.size() / 2)
    } finally {
      fmis.close()
    }
  }

  size() {
    return this.fileData.byteLength
  }

  close() {
  }
}