import FileMappedInputStream from '../util/FileMappedInputStream.js'

export default class CharCategory {
  constructor(dataDir) {
    this.categories = this.readCategorys(dataDir)

    const fmis = new FileMappedInputStream(dataDir + '/code2category')
    try {
      this.char2id  = fmis.getIntArray(fmis.size() / 4 / 2)
      this.eqlMasks = fmis.getIntArray(fmis.size() / 4 / 2)
    } finally {
      fmis.close()
    }
  }

  category(code) {
    return this.categories[this.char2id(code)]
  }

  isCompatible(code1, code2) {
    return (this.eqlMasks(code1) & this.eqlMasks(code2)) !== 0
  }

  readCategorys(dataDir) {
    const data = FileMappedInputStream.getIntArray(dataDir + '/char.category')
    const size = data.size / 4

    const ary = []
    for (let i = 0; i < size; i++) {
      ary[i] = new Category(data(i * 4), data(i * 4 + 1), data(i * 4 + 2) === 1, data(i * 4 + 3) === 1)
    }
    return ary
  }
}

class Category {
  constructor(i, l, iv, g) {
    this.id     = i
    this.length = l
    this.invoke = iv
    this.group  = g
  }
}