import CharCategory from './CharCategory.js'

/**
 * 未知語の検索を行うクラス
 */
export default class Unknown {
  constructor(dataDir) {
    this.category = new CharCategory(dataDir)    // 文字カテゴリ管理クラス
    this.spaceId = this.category.category(32).id // 文字カテゴリがSPACEの文字のID  NOTE: ' 'の文字カテゴリはSPACEに予約されている
  }

  search(text, start, wdic, fn) {
    const ch = text[start]
    const ct = this.category.category(ch)

    if (fn.isEmpty() === false && ct.invoke === false) {
      return
    }

    const isSpace = ct.id === this.spaceId;
    let limit = Math.min(text.length, ct.length + start);
    let i = start;
    for (; i < limit; i++) {
      wdic.searchFromTrieId(ct.id, start, (i - start) + 1, isSpace, fn)
      if (i + 1 !== limit && this.category.isCompatible(ch, text[i + 1]) === false) {
        return
      }
    }

    if (ct.group && i < text.length) {
      limit = text.length;
      for (; i < limit; i++) {
        if (this.category.isCompatible(ch, text[i]) === false) {
          wdic.searchFromTrieId(ct.id, start, i - start, isSpace, fn)
          return
        }
      }
      wdic.searchFromTrieId(ct.id, start, text.length - start, isSpace, fn);
    }
  }
}