(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["igo"] = factory();
	else
		root["igo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Igo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Igo.js":
/*!********************!*\
  !*** ./src/Igo.js ***!
  \********************/
/*! exports provided: fetchDic, parse, wakati */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDic", function() { return fetchDic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wakati", function() { return wakati; });
/* harmony import */ var _Igo_Tagger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Igo/Tagger.js */ "./src/Igo/Tagger.js");
/* harmony import */ var _Igo_util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Igo/util/FileMappedInputStream.js */ "./src/Igo/util/FileMappedInputStream.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function fetchDic(_x) {
  return _fetchDic.apply(this, arguments);
}

function _fetchDic() {
  _fetchDic = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var le,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            le = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            _context.next = 3;
            return Object(_Igo_util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_1__["prefetch"])(url, ['/word2id', '/word.dat', '/word.ary.idx', '/word.inf', '/char.category', '/code2category', '/matrix.bin'], le);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchDic.apply(this, arguments);
}

function parse(str) {
  var text = new Uint16Array(str.length);

  for (var i = 0; i < str.length; i++) {
    text[i] = str.charCodeAt(i);
  }

  var tagger = new _Igo_Tagger_js__WEBPACK_IMPORTED_MODULE_0__["default"]('');
  var result = tagger.parse(text);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var morpheme = _step.value;
      morpheme.surface = morpheme.surface.reduce(function (str, charCode) {
        return str + String.fromCharCode(charCode);
      }, '');
      morpheme.feature = morpheme.feature.reduce(function (str, charCode) {
        return str + String.fromCharCode(charCode);
      }, '');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}
function wakati(str) {
  var text = new Uint16Array(str.length);

  for (var i = 0; i < str.length; i++) {
    text[i] = str.charCodeAt(i);
  }

  var tagger = new _Igo_Tagger_js__WEBPACK_IMPORTED_MODULE_0__["default"]('');
  var result = tagger.wakati(text);
  return result.map(function (arr) {
    return arr.reduce(function (str, charCode) {
      return str + String.fromCharCode(charCode);
    }, '');
  });
}

/***/ }),

/***/ "./src/Igo/Morpheme.js":
/*!*****************************!*\
  !*** ./src/Igo/Morpheme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Morpheme; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 形態素クラス
 */
var Morpheme = function Morpheme(surface, feature, start) {
  _classCallCheck(this, Morpheme);

  /**
   * 形態素の表層形
   */
  this.surface = surface;
  /**
   * 形態素の素性
   */

  this.feature = feature;
  /**
   * テキスト内での形態素の出現開始位置
   */

  this.start = start;
};



/***/ }),

/***/ "./src/Igo/Tagger.js":
/*!***************************!*\
  !*** ./src/Igo/Tagger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tagger; });
/* harmony import */ var _dictionary_Matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary/Matrix.js */ "./src/Igo/dictionary/Matrix.js");
/* harmony import */ var _dictionary_WordDic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary/WordDic.js */ "./src/Igo/dictionary/WordDic.js");
/* harmony import */ var _dictionary_Unknown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictionary/Unknown.js */ "./src/Igo/dictionary/Unknown.js");
/* harmony import */ var _dictionary_ViterbiNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dictionary/ViterbiNode.js */ "./src/Igo/dictionary/ViterbiNode.js");
/* harmony import */ var _Morpheme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Morpheme.js */ "./src/Igo/Morpheme.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var BOS_NODES = [];
BOS_NODES.push(_dictionary_ViterbiNode_js__WEBPACK_IMPORTED_MODULE_3__["default"].makeBOSEOS());
/**
 * 形態素解析を行うクラス
 */

var Tagger =
/*#__PURE__*/
function () {
  /**
   * バイナリ辞書を読み込んで、形態素解析器のインスタンスを作成する
   *
   * @param dataDir バイナリ辞書があるディレクトリ
   */
  function Tagger(dataDir) {
    _classCallCheck(this, Tagger);

    this.wdc = new _dictionary_WordDic_js__WEBPACK_IMPORTED_MODULE_1__["default"](dataDir);
    this.unk = new _dictionary_Unknown_js__WEBPACK_IMPORTED_MODULE_2__["default"](dataDir);
    this.mtx = new _dictionary_Matrix_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataDir);
  }
  /**
   * 形態素解析を行う
   *
   * @param text 解析対象テキスト
   * @param result 解析結果の形態素が追加されるリスト
   * @return 解析結果の形態素リスト. {@code parse(text,result)=result}
   */


  _createClass(Tagger, [{
    key: "parse",
    value: function parse(text) {
      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var vn = this.parseImpl(text); vn != null; vn = vn.prev) {
        var surface = text.slice(vn.start, vn.start + vn.length);
        var feature = this.wdc.wordData(vn.wordId);
        result.push(new _Morpheme_js__WEBPACK_IMPORTED_MODULE_4__["default"](surface, feature, vn.start));
      }

      return result;
    }
    /**
     * 分かち書きを行う
     *
     * @param text 分かち書きされるテキスト
     * @param result 分かち書き結果の文字列が追加されるリスト
     * @return 分かち書きされた文字列のリスト.
     */

  }, {
    key: "wakati",
    value: function wakati(text) {
      var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var vn = this.parseImpl(text); vn != null; vn = vn.prev) {
        result.push(text.slice(vn.start, vn.start + vn.length));
      }

      return result;
    }
  }, {
    key: "parseImpl",
    value: function parseImpl(text) {
      var len = text.length;
      var nodesAry = new Array(len + 1);
      nodesAry[0] = BOS_NODES;
      var fn = new MakeLattice(this, nodesAry);

      for (var i = 0; i < len; i++) {
        if (nodesAry[i] != null) {
          fn.set(i);
          this.wdc.search(text, i, fn); // 単語辞書から形態素を検索

          this.unk.search(text, i, this.wdc, fn); // 未知語辞書から形態素を検索

          delete nodesAry[i];
        }
      }

      var cur = this.setMincostNode(_dictionary_ViterbiNode_js__WEBPACK_IMPORTED_MODULE_3__["default"].makeBOSEOS(), nodesAry[len]).prev; // reverse

      var head = null;

      while (cur.prev !== null) {
        var tmp = cur.prev;
        cur.prev = head;
        head = cur;
        cur = tmp;
      }

      return head;
    }
  }, {
    key: "setMincostNode",
    value: function setMincostNode(vn, prevs) {
      var f = vn.prev = prevs[0];
      var minCost = f.cost + this.mtx.linkCost(f.rightId, vn.leftId);

      for (var i = 1; i < prevs.length; i++) {
        var p = prevs[i];
        var cost = p.cost + this.mtx.linkCost(p.rightId, vn.leftId);

        if (cost < minCost) {
          minCost = cost;
          vn.prev = p;
        }
      }

      vn.cost += minCost;
      return vn;
    }
  }]);

  return Tagger;
}();



var MakeLattice =
/*#__PURE__*/
function () {
  function MakeLattice(tagger, nodesAry) {
    _classCallCheck(this, MakeLattice);

    this.empty = true;
    this.tagger = tagger;
    this.nodesAry = nodesAry;
  }

  _createClass(MakeLattice, [{
    key: "set",
    value: function set(i) {
      this.i = i;
      this.prevs = this.nodesAry[i];
      this.empty = true;
    }
  }, {
    key: "call",
    value: function call(vn) {
      this.empty = false;
      var end = this.i + vn.length;

      if (this.nodesAry[end] == null) {
        this.nodesAry[end] = [];
      }

      if (vn.isSpace) {
        var _this$nodesAry$end;

        (_this$nodesAry$end = this.nodesAry[end]).push.apply(_this$nodesAry$end, _toConsumableArray(this.prevs));
      } else {
        this.nodesAry[end].push(this.tagger.setMincostNode(vn, this.prevs));
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.empty;
    }
  }]);

  return MakeLattice;
}();

/***/ }),

/***/ "./src/Igo/dictionary/CharCategory.js":
/*!********************************************!*\
  !*** ./src/Igo/dictionary/CharCategory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharCategory; });
/* harmony import */ var _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/FileMappedInputStream.js */ "./src/Igo/util/FileMappedInputStream.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CharCategory =
/*#__PURE__*/
function () {
  function CharCategory(dataDir) {
    _classCallCheck(this, CharCategory);

    this.categories = this.readCategorys(dataDir);
    var fmis = new _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataDir + '/code2category');

    try {
      this.char2id = fmis.getIntArray(fmis.size() / 4 / 2);
      this.eqlMasks = fmis.getIntArray(fmis.size() / 4 / 2);
    } finally {
      fmis.close();
    }
  }

  _createClass(CharCategory, [{
    key: "category",
    value: function category(code) {
      return this.categories[this.char2id(code)];
    }
  }, {
    key: "isCompatible",
    value: function isCompatible(code1, code2) {
      return (this.eqlMasks(code1) & this.eqlMasks(code2)) !== 0;
    }
  }, {
    key: "readCategorys",
    value: function readCategorys(dataDir) {
      var data = _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__["default"].getIntArray(dataDir + '/char.category');
      var size = data.size / 4;
      var ary = [];

      for (var i = 0; i < size; i++) {
        ary[i] = new Category(data(i * 4), data(i * 4 + 1), data(i * 4 + 2) === 1, data(i * 4 + 3) === 1);
      }

      return ary;
    }
  }]);

  return CharCategory;
}();



var Category = function Category(i, l, iv, g) {
  _classCallCheck(this, Category);

  this.id = i;
  this.length = l;
  this.invoke = iv;
  this.group = g;
};

/***/ }),

/***/ "./src/Igo/dictionary/Matrix.js":
/*!**************************************!*\
  !*** ./src/Igo/dictionary/Matrix.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/FileMappedInputStream.js */ "./src/Igo/util/FileMappedInputStream.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * 形態素の連接コスト表を扱うクラス
 */

var Matrix =
/*#__PURE__*/
function () {
  function Matrix(dataDir) {
    _classCallCheck(this, Matrix);

    var fmis = new _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataDir + '/matrix.bin');

    try {
      this.leftSize = fmis.getInt();
      this.rightSize = fmis.getInt();
      this.matrix = fmis.getShortArray(this.leftSize * this.rightSize);
    } finally {
      fmis.close();
    }
  }
  /**
   * 形態素同士の連接コストを求める
   */


  _createClass(Matrix, [{
    key: "linkCost",
    value: function linkCost(leftId, rightId) {
      return this.matrix(rightId * this.leftSize + leftId);
    }
  }]);

  return Matrix;
}();



/***/ }),

/***/ "./src/Igo/dictionary/Unknown.js":
/*!***************************************!*\
  !*** ./src/Igo/dictionary/Unknown.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unknown; });
/* harmony import */ var _CharCategory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharCategory.js */ "./src/Igo/dictionary/CharCategory.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * 未知語の検索を行うクラス
 */

var Unknown =
/*#__PURE__*/
function () {
  function Unknown(dataDir) {
    _classCallCheck(this, Unknown);

    this.category = new _CharCategory_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataDir); // 文字カテゴリ管理クラス

    this.spaceId = this.category.category(32).id; // 文字カテゴリがSPACEの文字のID  NOTE: ' 'の文字カテゴリはSPACEに予約されている
  }

  _createClass(Unknown, [{
    key: "search",
    value: function search(text, start, wdic, fn) {
      var ch = text[start];
      var ct = this.category.category(ch);

      if (fn.isEmpty() === false && ct.invoke === false) {
        return;
      }

      var isSpace = ct.id === this.spaceId;
      var limit = Math.min(text.length, ct.length + start);
      var i = start;

      for (; i < limit; i++) {
        wdic.searchFromTrieId(ct.id, start, i - start + 1, isSpace, fn);

        if (i + 1 !== limit && this.category.isCompatible(ch, text[i + 1]) === false) {
          return;
        }
      }

      if (ct.group && i < text.length) {
        limit = text.length;

        for (; i < limit; i++) {
          if (this.category.isCompatible(ch, text[i]) === false) {
            wdic.searchFromTrieId(ct.id, start, i - start, isSpace, fn);
            return;
          }
        }

        wdic.searchFromTrieId(ct.id, start, text.length - start, isSpace, fn);
      }
    }
  }]);

  return Unknown;
}();



/***/ }),

/***/ "./src/Igo/dictionary/ViterbiNode.js":
/*!*******************************************!*\
  !*** ./src/Igo/dictionary/ViterbiNode.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViterbiNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Viterbiアルゴリズムで使用されるノード
 */
var ViterbiNode =
/*#__PURE__*/
function () {
  function ViterbiNode(wid, beg, len, wordCost, l, r, space) {
    _classCallCheck(this, ViterbiNode);

    this.prev = null; // コスト最小の前方のノードへのリンク

    this.wordId = wid; // 単語ID

    this.leftId = l; // 左文脈ID

    this.rightId = r; // 右文脈ID

    this.length = len; // 形態素の表層形の長さ(文字数)

    this.cost = wordCost; // 始点からノードまでの総コスト

    this.isSpace = space; // 形態素の文字種(文字カテゴリ)が空白文字かどうか

    this.start = beg; // 入力テキスト内での形態素の開始位置
  }

  _createClass(ViterbiNode, null, [{
    key: "makeBOSEOS",
    value: function makeBOSEOS() {
      return new ViterbiNode(0, 0, 0, 0, 0, 0, false);
    }
  }]);

  return ViterbiNode;
}();



/***/ }),

/***/ "./src/Igo/dictionary/WordDic.js":
/*!***************************************!*\
  !*** ./src/Igo/dictionary/WordDic.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WordDic; });
/* harmony import */ var _trie_Searcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trie/Searcher.js */ "./src/Igo/trie/Searcher.js");
/* harmony import */ var _ViterbiNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViterbiNode.js */ "./src/Igo/dictionary/ViterbiNode.js");
/* harmony import */ var _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/FileMappedInputStream.js */ "./src/Igo/util/FileMappedInputStream.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var WordDic =
/*#__PURE__*/
function () {
  function WordDic(dataDir) {
    _classCallCheck(this, WordDic);

    this.trie = new _trie_Searcher_js__WEBPACK_IMPORTED_MODULE_0__["default"](dataDir + '/word2id');
    this.data = _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_2__["default"].getString(dataDir + '/word.dat');
    this.indices = _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_2__["default"].getIntArray(dataDir + '/word.ary.idx');
    {
      var fmis = new _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](dataDir + '/word.inf');
      var wordCount = fmis.size() / (4 + 2 + 2 + 2);

      try {
        this.dataOffsets = fmis.getIntArray(wordCount); //単語の素性データの開始位置

        this.leftIds = fmis.getShortArray(wordCount); //単語の左文脈ID

        this.rightIds = fmis.getShortArray(wordCount); //単語の右文脈ID

        this.costs = fmis.getShortArray(wordCount); //単語のコスト
      } finally {
        fmis.close();
      }
    }
  }

  _createClass(WordDic, [{
    key: "search",
    value: function search(text, start, fn) {
      this.trie.eachCommonPrefix(text, start, new WordDicCallbackCaller(this, fn));
    }
  }, {
    key: "searchFromTrieId",
    value: function searchFromTrieId(trieId, start, wordLength, isSpace, fn) {
      var end = this.indices(trieId + 1);

      for (var i = this.indices(trieId); i < end; i++) {
        fn.call(new _ViterbiNode_js__WEBPACK_IMPORTED_MODULE_1__["default"](i, start, wordLength, this.costs(i), this.leftIds(i), this.rightIds(i), isSpace));
      }
    }
  }, {
    key: "wordData",
    value: function wordData(wordId) {
      var begin = this.dataOffsets(wordId);
      var end = this.dataOffsets(wordId + 1);
      var text = new Uint16Array(end - begin);

      for (var i = 0; i < text.length; i++) {
        text[i] = this.data(begin + i);
      }

      return text;
    }
  }]);

  return WordDic;
}();



var WordDicCallbackCaller =
/*#__PURE__*/
function () {
  function WordDicCallbackCaller(wordDic, fn) {
    _classCallCheck(this, WordDicCallbackCaller);

    this.wordDic = wordDic;
    this.fn = fn;
  }

  _createClass(WordDicCallbackCaller, [{
    key: "call",
    value: function call(start, offset, trieId) {
      var end = this.wordDic.indices(trieId + 1);

      for (var i = this.wordDic.indices(trieId); i < end; i++) {
        this.fn.call(new _ViterbiNode_js__WEBPACK_IMPORTED_MODULE_1__["default"](i, start, offset, this.wordDic.costs(i), this.wordDic.leftIds(i), this.wordDic.rightIds(i), false));
      }
    }
  }]);

  return WordDicCallbackCaller;
}();

/***/ }),

/***/ "./src/Igo/trie/KeyStream.js":
/*!***********************************!*\
  !*** ./src/Igo/trie/KeyStream.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyStream; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 文字列を文字のストリームとして扱うためのクラス。
 * readメソッドで個々の文字を順に読み込み、文字列の終端に達した場合には{@code Node.Chck.TERMINATE_CODE}が返される。
 * XXX: クラス名は不適切
 */
var KeyStream =
/*#__PURE__*/
function () {
  function KeyStream(key) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, KeyStream);

    this.s = key;
    this.cur = start;
  }
  /**
   * このメソッドは動作的には、{@code rest().startsWith(prefix.substring(beg, len))}、と等価。
   * ほんの若干だが、パフォーマンスを改善するために導入。
   * 簡潔性のためになくしても良いかもしれない。
   */


  _createClass(KeyStream, [{
    key: "startsWith",
    value: function startsWith(prefix, beg, len) {
      if (this.s.length - this.cur < len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        if (this.s[this.cur + i] !== prefix(beg + i)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "read",
    value: function read() {
      var c = this.eos() ? 0 : this.s[this.cur++];
      return c;
    }
  }, {
    key: "eos",
    value: function eos() {
      return this.cur === this.s.length;
    }
  }]);

  return KeyStream;
}();



/***/ }),

/***/ "./src/Igo/trie/Searcher.js":
/*!**********************************!*\
  !*** ./src/Igo/trie/Searcher.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Searcher; });
/* harmony import */ var _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/FileMappedInputStream.js */ "./src/Igo/util/FileMappedInputStream.js");
/* harmony import */ var _KeyStream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KeyStream.js */ "./src/Igo/trie/KeyStream.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * DoubleArray検索用のクラス
 */

var Searcher =
/*#__PURE__*/
function () {
  /**
   * 保存されているDoubleArrayを読み込んで、このクラスのインスタンスを作成する
   *
   * @param filepath DoubleArrayが保存されているファイルのパス
   * @throws IOException filepathで示されるファイルの読み込みに失敗した場合に送出される
   */
  function Searcher(filePath) {
    _classCallCheck(this, Searcher);

    var fmis = new _util_FileMappedInputStream_js__WEBPACK_IMPORTED_MODULE_0__["default"](filePath);
    var nodeSz = fmis.getInt();
    var tindSz = fmis.getInt();
    var tailSz = fmis.getInt(); //this.keySetSize = tindSz

    this.begs = fmis.getIntArray(tindSz);
    this.base = fmis.getIntArray(nodeSz);
    this.lens = fmis.getShortArray(tindSz);
    this.chck = fmis.getCharArray(nodeSz);
    this.tail = fmis.getCharArray(tailSz);
    fmis.close();
  }
  /**
   * common-prefix検索を行う
   * 条件に一致するキーが見つかる度に、fn.call(...)メソッドが呼び出される
   *
   * @param key 検索対象のキー文字列
   * @param start 検索対象となるキー文字列の最初の添字
   * @param fn 一致を検出した場合に呼び出されるメソッドを定義したコールバッククラス
   */


  _createClass(Searcher, [{
    key: "eachCommonPrefix",
    value: function eachCommonPrefix(key, start, fn) {
      var node = this.base(0);
      var offset = 0;

      var _in = new _KeyStream_js__WEBPACK_IMPORTED_MODULE_1__["default"](key, start);

      for (var code = _in.read();; code = _in.read(), offset++) {
        var terminalIdx = node;

        if (this.chck(terminalIdx) === 0) {
          fn.call(start, offset, nodeBaseId(this.base(terminalIdx)));

          if (code === 0) {
            return;
          }
        }

        var idx = node + code;
        node = this.base(idx);

        if (this.chck(idx) === code) {
          if (node >= 0) {
            continue;
          } else {
            this.call_if_keyIncluding(_in, node, start, offset, fn);
          }
        }

        return;
      }
    }
  }, {
    key: "call_if_keyIncluding",
    value: function call_if_keyIncluding(_in, node, start, offset, fn) {
      var id = nodeBaseId(node);

      if (_in.startsWith(this.tail, this.begs(id), this.lens(id))) {
        fn.call(start, offset + this.lens(id) + 1, id);
      }
    }
  }]);

  return Searcher;
}();



function nodeBaseId(id) {
  return id * -1 - 1;
}

/***/ }),

/***/ "./src/Igo/util/FileMappedInputStream.js":
/*!***********************************************!*\
  !*** ./src/Igo/util/FileMappedInputStream.js ***!
  \***********************************************/
/*! exports provided: prefetch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetch", function() { return prefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileMappedInputStream; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fileData = {};
var fetched = false;
var le = false;
function prefetch(_x, _x2) {
  return _prefetch.apply(this, arguments);
}
/**
 * ファイルにマッピングされた入力ストリーム<br />
 * net.reduls.igo以下のパッケージではファイルからバイナリデータを取得する場合、必ずこのクラスが使用される
 */

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url, filenames) {
    var littleEndian,
        res,
        i,
        buf,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            littleEndian = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;

            if (!fetched) {
              _context.next = 3;
              break;
            }

            throw new Error('Already fetched');

          case 3:
            fetched = true;
            _context.next = 6;
            return Promise.all(filenames.map(function (filename) {
              return fetch(url + filename);
            }));

          case 6:
            res = _context.sent;
            i = 0;

          case 8:
            if (!(i < filenames.length)) {
              _context.next = 16;
              break;
            }

            _context.next = 11;
            return res[i].arrayBuffer();

          case 11:
            buf = _context.sent;
            fileData[filenames[i]] = buf;

          case 13:
            i++;
            _context.next = 8;
            break;

          case 16:
            le = littleEndian;

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _prefetch.apply(this, arguments);
}

var FileMappedInputStream =
/*#__PURE__*/
function () {
  /**
   * 入力ストリームを作成する
   * 
   * @param filepath マッピングするファイルのパス
   */
  function FileMappedInputStream(filepath) {
    _classCallCheck(this, FileMappedInputStream);

    this.fileData = fileData[filepath];
    this.cur = 0;
  }

  _createClass(FileMappedInputStream, [{
    key: "read",
    value: function read(len) {
      var data = new DataView(this.fileData, this.cur, len);
      this.cur += len;
      return data;
    }
  }, {
    key: "getInt",
    value: function getInt() {
      return this.read(4).getInt32(0, le);
    }
  }, {
    key: "getIntArray",
    value: function getIntArray(elementCount) {
      var data = this.read(elementCount * 4);

      function fn(p) {
        return data.getInt32(p * 4, le);
      }

      fn.size = elementCount;
      return fn;
    }
  }, {
    key: "getShortArray",
    value: function getShortArray(elementCount) {
      var data = this.read(elementCount * 2);

      function fn(p) {
        return data.getInt16(p * 2, le);
      }

      fn.size = elementCount;
      return fn;
    }
  }, {
    key: "getCharArray",
    value: function getCharArray(elementCount) {
      var data = this.read(elementCount * 2);

      function fn(p) {
        return data.getUint16(p * 2, le);
      }

      fn.size = elementCount;
      return fn;
    }
  }, {
    key: "size",
    value: function size() {
      return this.fileData.byteLength;
    }
  }, {
    key: "close",
    value: function close() {}
  }], [{
    key: "getIntArray",
    value: function getIntArray(filepath) {
      var fmis = new FileMappedInputStream(filepath);

      try {
        return fmis.getIntArray(fmis.size() / 4);
      } finally {
        fmis.close();
      }
    }
  }, {
    key: "getString",
    value: function getString(filepath) {
      var fmis = new FileMappedInputStream(filepath);

      try {
        return fmis.getCharArray(fmis.size() / 2);
      } finally {
        fmis.close();
      }
    }
  }]);

  return FileMappedInputStream;
}();



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ28vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2lnby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pZ28vLi9zcmMvSWdvLmpzIiwid2VicGFjazovL2lnby8uL3NyYy9JZ28vTW9ycGhlbWUuanMiLCJ3ZWJwYWNrOi8vaWdvLy4vc3JjL0lnby9UYWdnZXIuanMiLCJ3ZWJwYWNrOi8vaWdvLy4vc3JjL0lnby9kaWN0aW9uYXJ5L0NoYXJDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9pZ28vLi9zcmMvSWdvL2RpY3Rpb25hcnkvTWF0cml4LmpzIiwid2VicGFjazovL2lnby8uL3NyYy9JZ28vZGljdGlvbmFyeS9Vbmtub3duLmpzIiwid2VicGFjazovL2lnby8uL3NyYy9JZ28vZGljdGlvbmFyeS9WaXRlcmJpTm9kZS5qcyIsIndlYnBhY2s6Ly9pZ28vLi9zcmMvSWdvL2RpY3Rpb25hcnkvV29yZERpYy5qcyIsIndlYnBhY2s6Ly9pZ28vLi9zcmMvSWdvL3RyaWUvS2V5U3RyZWFtLmpzIiwid2VicGFjazovL2lnby8uL3NyYy9JZ28vdHJpZS9TZWFyY2hlci5qcyIsIndlYnBhY2s6Ly9pZ28vLi9zcmMvSWdvL3V0aWwvRmlsZU1hcHBlZElucHV0U3RyZWFtLmpzIl0sIm5hbWVzIjpbImZldGNoRGljIiwidXJsIiwibGUiLCJwcmVmZXRjaCIsInBhcnNlIiwic3RyIiwidGV4dCIsIlVpbnQxNkFycmF5IiwibGVuZ3RoIiwiaSIsImNoYXJDb2RlQXQiLCJ0YWdnZXIiLCJUYWdnZXIiLCJyZXN1bHQiLCJtb3JwaGVtZSIsInN1cmZhY2UiLCJyZWR1Y2UiLCJjaGFyQ29kZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImZlYXR1cmUiLCJ3YWthdGkiLCJtYXAiLCJhcnIiLCJNb3JwaGVtZSIsInN0YXJ0IiwiQk9TX05PREVTIiwicHVzaCIsIlZpdGVyYmlOb2RlIiwibWFrZUJPU0VPUyIsImRhdGFEaXIiLCJ3ZGMiLCJXb3JkRGljIiwidW5rIiwiVW5rbm93biIsIm10eCIsIk1hdHJpeCIsInZuIiwicGFyc2VJbXBsIiwicHJldiIsInNsaWNlIiwid29yZERhdGEiLCJ3b3JkSWQiLCJsZW4iLCJub2Rlc0FyeSIsIkFycmF5IiwiZm4iLCJNYWtlTGF0dGljZSIsInNldCIsInNlYXJjaCIsImN1ciIsInNldE1pbmNvc3ROb2RlIiwiaGVhZCIsInRtcCIsInByZXZzIiwiZiIsIm1pbkNvc3QiLCJjb3N0IiwibGlua0Nvc3QiLCJyaWdodElkIiwibGVmdElkIiwicCIsImVtcHR5IiwiZW5kIiwiaXNTcGFjZSIsIkNoYXJDYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJyZWFkQ2F0ZWdvcnlzIiwiZm1pcyIsIkZpbGVNYXBwZWRJbnB1dFN0cmVhbSIsImNoYXIyaWQiLCJnZXRJbnRBcnJheSIsInNpemUiLCJlcWxNYXNrcyIsImNsb3NlIiwiY29kZSIsImNvZGUxIiwiY29kZTIiLCJkYXRhIiwiYXJ5IiwiQ2F0ZWdvcnkiLCJsIiwiaXYiLCJnIiwiaWQiLCJpbnZva2UiLCJncm91cCIsImxlZnRTaXplIiwiZ2V0SW50IiwicmlnaHRTaXplIiwibWF0cml4IiwiZ2V0U2hvcnRBcnJheSIsImNhdGVnb3J5Iiwic3BhY2VJZCIsIndkaWMiLCJjaCIsImN0IiwiaXNFbXB0eSIsImxpbWl0IiwiTWF0aCIsIm1pbiIsInNlYXJjaEZyb21UcmllSWQiLCJpc0NvbXBhdGlibGUiLCJ3aWQiLCJiZWciLCJ3b3JkQ29zdCIsInIiLCJzcGFjZSIsInRyaWUiLCJTZWFyY2hlciIsImdldFN0cmluZyIsImluZGljZXMiLCJ3b3JkQ291bnQiLCJkYXRhT2Zmc2V0cyIsImxlZnRJZHMiLCJyaWdodElkcyIsImNvc3RzIiwiZWFjaENvbW1vblByZWZpeCIsIldvcmREaWNDYWxsYmFja0NhbGxlciIsInRyaWVJZCIsIndvcmRMZW5ndGgiLCJjYWxsIiwiYmVnaW4iLCJ3b3JkRGljIiwib2Zmc2V0IiwiS2V5U3RyZWFtIiwia2V5IiwicyIsInByZWZpeCIsImMiLCJlb3MiLCJmaWxlUGF0aCIsIm5vZGVTeiIsInRpbmRTeiIsInRhaWxTeiIsImJlZ3MiLCJiYXNlIiwibGVucyIsImNoY2siLCJnZXRDaGFyQXJyYXkiLCJ0YWlsIiwibm9kZSIsIl9pbiIsInJlYWQiLCJ0ZXJtaW5hbElkeCIsIm5vZGVCYXNlSWQiLCJpZHgiLCJjYWxsX2lmX2tleUluY2x1ZGluZyIsInN0YXJ0c1dpdGgiLCJmaWxlRGF0YSIsImZldGNoZWQiLCJmaWxlbmFtZXMiLCJsaXR0bGVFbmRpYW4iLCJFcnJvciIsIlByb21pc2UiLCJhbGwiLCJmaWxlbmFtZSIsImZldGNoIiwicmVzIiwiYXJyYXlCdWZmZXIiLCJidWYiLCJmaWxlcGF0aCIsIkRhdGFWaWV3IiwiZ2V0SW50MzIiLCJlbGVtZW50Q291bnQiLCJnZXRJbnQxNiIsImdldFVpbnQxNiIsImJ5dGVMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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QUcsQ0FBbEIsRUFBcUIzRCxFQUFyQixDQUFQO0FBQ0Q7O0FBQ0Q0QyxRQUFFLENBQUMwQixJQUFILEdBQVU0RixZQUFWO0FBQ0EsYUFBT3RILEVBQVA7QUFDRDs7O2lDQUVZc0gsWSxFQUFjO0FBQ3pCLFVBQU10RixJQUFJLEdBQUcsS0FBS2lFLElBQUwsQ0FBVXFCLFlBQVksR0FBRyxDQUF6QixDQUFiOztBQUNBLGVBQVN0SCxFQUFULENBQVllLENBQVosRUFBZTtBQUNiLGVBQU9pQixJQUFJLENBQUN3RixTQUFMLENBQWV6RyxDQUFDLEdBQUcsQ0FBbkIsRUFBc0IzRCxFQUF0QixDQUFQO0FBQ0Q7O0FBQ0Q0QyxRQUFFLENBQUMwQixJQUFILEdBQVU0RixZQUFWO0FBQ0EsYUFBT3RILEVBQVA7QUFDRDs7OzJCQVdNO0FBQ0wsYUFBTyxLQUFLdUcsUUFBTCxDQUFja0IsVUFBckI7QUFDRDs7OzRCQUVPLENBQ1A7OztnQ0F6Q2tCTixRLEVBQVU7QUFDM0IsVUFBTTdGLElBQUksR0FBRyxJQUFJQyxxQkFBSixDQUEwQjRGLFFBQTFCLENBQWI7O0FBQ0EsVUFBSTtBQUNGLGVBQU83RixJQUFJLENBQUNHLFdBQUwsQ0FBaUJILElBQUksQ0FBQ0ksSUFBTCxLQUFjLENBQS9CLENBQVA7QUFDRCxPQUZELFNBRVU7QUFDUkosWUFBSSxDQUFDTSxLQUFMO0FBQ0Q7QUFDRjs7OzhCQW9CZ0J1RixRLEVBQVU7QUFDekIsVUFBTTdGLElBQUksR0FBRyxJQUFJQyxxQkFBSixDQUEwQjRGLFFBQTFCLENBQWI7O0FBQ0EsVUFBSTtBQUNGLGVBQU83RixJQUFJLENBQUN1RSxZQUFMLENBQWtCdkUsSUFBSSxDQUFDSSxJQUFMLEtBQWMsQ0FBaEMsQ0FBUDtBQUNELE9BRkQsU0FFVTtBQUNSSixZQUFJLENBQUNNLEtBQUw7QUFDRDtBQUNGIiwiZmlsZSI6Imlnby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlnb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpZ29cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0lnby5qc1wiKTtcbiIsImltcG9ydCBUYWdnZXIgZnJvbSAnLi9JZ28vVGFnZ2VyLmpzJ1xuaW1wb3J0IHsgcHJlZmV0Y2ggfSBmcm9tICcuL0lnby91dGlsL0ZpbGVNYXBwZWRJbnB1dFN0cmVhbS5qcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoRGljKHVybCwgbGUgPSBmYWxzZSkge1xuICBhd2FpdCBwcmVmZXRjaCh1cmwsIFtcbiAgICAnL3dvcmQyaWQnLFxuICAgICcvd29yZC5kYXQnLFxuICAgICcvd29yZC5hcnkuaWR4JyxcbiAgICAnL3dvcmQuaW5mJyxcbiAgICAnL2NoYXIuY2F0ZWdvcnknLFxuICAgICcvY29kZTJjYXRlZ29yeScsXG4gICAgJy9tYXRyaXguYmluJyxcbiAgXSwgbGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgY29uc3QgdGV4dCA9IG5ldyBVaW50MTZBcnJheShzdHIubGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHRleHRbaV0gPSBzdHIuY2hhckNvZGVBdChpKVxuICB9XG5cbiAgY29uc3QgdGFnZ2VyID0gbmV3IFRhZ2dlcignJylcbiAgY29uc3QgcmVzdWx0ID0gdGFnZ2VyLnBhcnNlKHRleHQpXG5cbiAgZm9yIChjb25zdCBtb3JwaGVtZSBvZiByZXN1bHQpIHtcbiAgICBtb3JwaGVtZS5zdXJmYWNlID0gbW9ycGhlbWUuc3VyZmFjZS5yZWR1Y2UoKHN0ciwgY2hhckNvZGUpID0+IHN0ciArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpLCAnJylcbiAgICBtb3JwaGVtZS5mZWF0dXJlID0gbW9ycGhlbWUuZmVhdHVyZS5yZWR1Y2UoKHN0ciwgY2hhckNvZGUpID0+IHN0ciArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpLCAnJylcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdha2F0aShzdHIpIHtcbiAgY29uc3QgdGV4dCA9IG5ldyBVaW50MTZBcnJheShzdHIubGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHRleHRbaV0gPSBzdHIuY2hhckNvZGVBdChpKVxuICB9XG5cbiAgY29uc3QgdGFnZ2VyID0gbmV3IFRhZ2dlcignJylcbiAgY29uc3QgcmVzdWx0ID0gdGFnZ2VyLndha2F0aSh0ZXh0KVxuXG4gIHJldHVybiByZXN1bHQubWFwKGFyciA9PiBhcnIucmVkdWNlKChzdHIsIGNoYXJDb2RlKSA9PiBzdHIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNoYXJDb2RlKSwgJycpKVxufSIsIi8qKlxuICog5b2i5oWL57Sg44Kv44Op44K5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vcnBoZW1lIHtcbiAgY29uc3RydWN0b3Ioc3VyZmFjZSwgZmVhdHVyZSwgc3RhcnQpIHtcbiAgICAvKipcbiAgICAgKiDlvaLmhYvntKDjga7ooajlsaTlvaJcbiAgICAgKi9cbiAgICB0aGlzLnN1cmZhY2UgPSBzdXJmYWNlXG4gICAgLyoqXG4gICAgICog5b2i5oWL57Sg44Gu57Sg5oCnXG4gICAgICovXG4gICAgdGhpcy5mZWF0dXJlID0gZmVhdHVyZVxuICAgIC8qKlxuICAgICAqIOODhuOCreOCueODiOWGheOBp+OBruW9ouaFi+e0oOOBruWHuuePvumWi+Wni+S9jee9rlxuICAgICAqL1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydFxuICB9XG59IiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuL2RpY3Rpb25hcnkvTWF0cml4LmpzJ1xuaW1wb3J0IFdvcmREaWMgZnJvbSAnLi9kaWN0aW9uYXJ5L1dvcmREaWMuanMnXG5pbXBvcnQgVW5rbm93biBmcm9tICcuL2RpY3Rpb25hcnkvVW5rbm93bi5qcydcbmltcG9ydCBWaXRlcmJpTm9kZSBmcm9tICcuL2RpY3Rpb25hcnkvVml0ZXJiaU5vZGUuanMnXG5pbXBvcnQgTW9ycGhlbWUgZnJvbSAnLi9Nb3JwaGVtZS5qcydcblxuY29uc3QgQk9TX05PREVTID0gW11cbkJPU19OT0RFUy5wdXNoKFZpdGVyYmlOb2RlLm1ha2VCT1NFT1MoKSlcblxuLyoqXG4gKiDlvaLmhYvntKDop6PmnpDjgpLooYzjgYbjgq/jg6njgrlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnZ2VyIHtcbiAgLyoqXG4gICAqIOODkOOCpOODiuODqui+nuabuOOCkuiqreOBv+i+vOOCk+OBp+OAgeW9ouaFi+e0oOino+aekOWZqOOBruOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkOOBmeOCi1xuICAgKlxuICAgKiBAcGFyYW0gZGF0YURpciDjg5DjgqTjg4rjg6rovp7mm7jjgYzjgYLjgovjg4fjgqPjg6zjgq/jg4jjg6pcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGFEaXIpIHtcbiAgICB0aGlzLndkYyA9IG5ldyBXb3JkRGljKGRhdGFEaXIpXG4gICAgdGhpcy51bmsgPSBuZXcgVW5rbm93bihkYXRhRGlyKVxuICAgIHRoaXMubXR4ID0gbmV3IE1hdHJpeChkYXRhRGlyKVxuICB9XG5cbiAgLyoqXG4gICAqIOW9ouaFi+e0oOino+aekOOCkuihjOOBhlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCDop6PmnpDlr77osaHjg4bjgq3jgrnjg4hcbiAgICogQHBhcmFtIHJlc3VsdCDop6PmnpDntZDmnpzjga7lvaLmhYvntKDjgYzov73liqDjgZXjgozjgovjg6rjgrnjg4hcbiAgICogQHJldHVybiDop6PmnpDntZDmnpzjga7lvaLmhYvntKDjg6rjgrnjg4guIHtAY29kZSBwYXJzZSh0ZXh0LHJlc3VsdCk9cmVzdWx0fVxuICAgKi9cbiAgcGFyc2UodGV4dCwgcmVzdWx0ID0gW10pIHtcbiAgICBmb3IgKGxldCB2biA9IHRoaXMucGFyc2VJbXBsKHRleHQpOyB2biAhPSBudWxsOyB2biA9IHZuLnByZXYpIHtcbiAgICAgIGNvbnN0IHN1cmZhY2UgPSB0ZXh0LnNsaWNlKHZuLnN0YXJ0LCB2bi5zdGFydCArIHZuLmxlbmd0aCk7XG4gICAgICBjb25zdCBmZWF0dXJlID0gdGhpcy53ZGMud29yZERhdGEodm4ud29yZElkKTtcbiAgICAgIHJlc3VsdC5wdXNoKG5ldyBNb3JwaGVtZShzdXJmYWNlLCBmZWF0dXJlLCB2bi5zdGFydCkpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8qKlxuICAgKiDliIbjgYvjgaHmm7jjgY3jgpLooYzjgYZcbiAgICpcbiAgICogQHBhcmFtIHRleHQg5YiG44GL44Gh5pu444GN44GV44KM44KL44OG44Kt44K544OIXG4gICAqIEBwYXJhbSByZXN1bHQg5YiG44GL44Gh5pu444GN57WQ5p6c44Gu5paH5a2X5YiX44GM6L+95Yqg44GV44KM44KL44Oq44K544OIXG4gICAqIEByZXR1cm4g5YiG44GL44Gh5pu444GN44GV44KM44Gf5paH5a2X5YiX44Gu44Oq44K544OILlxuICAgKi9cbiAgd2FrYXRpKHRleHQsIHJlc3VsdCA9IFtdKSB7XG4gICAgZm9yIChsZXQgdm4gPSB0aGlzLnBhcnNlSW1wbCh0ZXh0KTsgdm4gIT0gbnVsbDsgdm4gPSB2bi5wcmV2KSB7XG4gICAgICByZXN1bHQucHVzaCh0ZXh0LnNsaWNlKHZuLnN0YXJ0LCB2bi5zdGFydCArIHZuLmxlbmd0aCkpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHBhcnNlSW1wbCh0ZXh0KSB7XG4gICAgY29uc3QgbGVuID0gdGV4dC5sZW5ndGhcbiAgICBjb25zdCBub2Rlc0FyeSA9IG5ldyBBcnJheShsZW4gKyAxKVxuICAgIG5vZGVzQXJ5WzBdID0gQk9TX05PREVTXG5cbiAgICBjb25zdCBmbiA9IG5ldyBNYWtlTGF0dGljZSh0aGlzLCBub2Rlc0FyeSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAobm9kZXNBcnlbaV0gIT0gbnVsbCkge1xuICAgICAgICBmbi5zZXQoaSlcbiAgICAgICAgdGhpcy53ZGMuc2VhcmNoKHRleHQsIGksIGZuKSAgICAgICAgICAgLy8g5Y2Y6Kqe6L6e5pu444GL44KJ5b2i5oWL57Sg44KS5qSc57SiXG4gICAgICAgIHRoaXMudW5rLnNlYXJjaCh0ZXh0LCBpLCB0aGlzLndkYywgZm4pIC8vIOacquefpeiqnui+nuabuOOBi+OCieW9ouaFi+e0oOOCkuaknOe0olxuICAgICAgICBkZWxldGUgbm9kZXNBcnlbaV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY3VyID0gdGhpcy5zZXRNaW5jb3N0Tm9kZShWaXRlcmJpTm9kZS5tYWtlQk9TRU9TKCksIG5vZGVzQXJ5W2xlbl0pLnByZXZcblxuICAgIC8vIHJldmVyc2VcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgd2hpbGUgKGN1ci5wcmV2ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0bXAgPSBjdXIucHJldlxuICAgICAgY3VyLnByZXYgPSBoZWFkXG4gICAgICBoZWFkID0gY3VyXG4gICAgICBjdXIgPSB0bXBcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRcbiAgfVxuXG4gIHNldE1pbmNvc3ROb2RlKHZuLCBwcmV2cykge1xuICAgIGNvbnN0IGYgPSB2bi5wcmV2ID0gcHJldnNbMF1cbiAgICBsZXQgbWluQ29zdCA9IGYuY29zdCArIHRoaXMubXR4LmxpbmtDb3N0KGYucmlnaHRJZCwgdm4ubGVmdElkKVxuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcmV2cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcCA9IHByZXZzW2ldXG4gICAgICBjb25zdCBjb3N0ID0gcC5jb3N0ICsgdGhpcy5tdHgubGlua0Nvc3QocC5yaWdodElkLCB2bi5sZWZ0SWQpXG4gICAgICBpZiAoY29zdCA8IG1pbkNvc3QpIHtcbiAgICAgICAgbWluQ29zdCA9IGNvc3RcbiAgICAgICAgdm4ucHJldiA9IHBcbiAgICAgIH1cbiAgICB9XG4gICAgdm4uY29zdCArPSBtaW5Db3N0XG5cbiAgICByZXR1cm4gdm5cbiAgfVxufVxuXG5jbGFzcyBNYWtlTGF0dGljZSB7XG4gIGNvbnN0cnVjdG9yKHRhZ2dlciwgbm9kZXNBcnkpIHtcbiAgICB0aGlzLmVtcHR5ID0gdHJ1ZVxuICAgIHRoaXMudGFnZ2VyID0gdGFnZ2VyXG4gICAgdGhpcy5ub2Rlc0FyeSA9IG5vZGVzQXJ5XG4gIH1cblxuICBzZXQoaSkge1xuICAgIHRoaXMuaSA9IGlcbiAgICB0aGlzLnByZXZzID0gdGhpcy5ub2Rlc0FyeVtpXVxuICAgIHRoaXMuZW1wdHkgPSB0cnVlXG4gIH1cblxuICBjYWxsKHZuKSB7XG4gICAgdGhpcy5lbXB0eSA9IGZhbHNlXG5cbiAgICBjb25zdCBlbmQgPSB0aGlzLmkgKyB2bi5sZW5ndGhcbiAgICBpZiAodGhpcy5ub2Rlc0FyeVtlbmRdID09IG51bGwpIHtcbiAgICAgIHRoaXMubm9kZXNBcnlbZW5kXSA9IFtdXG4gICAgfVxuXG4gICAgaWYgKHZuLmlzU3BhY2UpIHtcbiAgICAgIHRoaXMubm9kZXNBcnlbZW5kXS5wdXNoKC4uLnRoaXMucHJldnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGVzQXJ5W2VuZF0ucHVzaCh0aGlzLnRhZ2dlci5zZXRNaW5jb3N0Tm9kZSh2biwgdGhpcy5wcmV2cykpO1xuICAgIH1cbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1wdHlcbiAgfVxufSIsImltcG9ydCBGaWxlTWFwcGVkSW5wdXRTdHJlYW0gZnJvbSAnLi4vdXRpbC9GaWxlTWFwcGVkSW5wdXRTdHJlYW0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJDYXRlZ29yeSB7XG4gIGNvbnN0cnVjdG9yKGRhdGFEaXIpIHtcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSB0aGlzLnJlYWRDYXRlZ29yeXMoZGF0YURpcilcblxuICAgIGNvbnN0IGZtaXMgPSBuZXcgRmlsZU1hcHBlZElucHV0U3RyZWFtKGRhdGFEaXIgKyAnL2NvZGUyY2F0ZWdvcnknKVxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNoYXIyaWQgID0gZm1pcy5nZXRJbnRBcnJheShmbWlzLnNpemUoKSAvIDQgLyAyKVxuICAgICAgdGhpcy5lcWxNYXNrcyA9IGZtaXMuZ2V0SW50QXJyYXkoZm1pcy5zaXplKCkgLyA0IC8gMilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZm1pcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgY2F0ZWdvcnkoY29kZSkge1xuICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXNbdGhpcy5jaGFyMmlkKGNvZGUpXVxuICB9XG5cbiAgaXNDb21wYXRpYmxlKGNvZGUxLCBjb2RlMikge1xuICAgIHJldHVybiAodGhpcy5lcWxNYXNrcyhjb2RlMSkgJiB0aGlzLmVxbE1hc2tzKGNvZGUyKSkgIT09IDBcbiAgfVxuXG4gIHJlYWRDYXRlZ29yeXMoZGF0YURpcikge1xuICAgIGNvbnN0IGRhdGEgPSBGaWxlTWFwcGVkSW5wdXRTdHJlYW0uZ2V0SW50QXJyYXkoZGF0YURpciArICcvY2hhci5jYXRlZ29yeScpXG4gICAgY29uc3Qgc2l6ZSA9IGRhdGEuc2l6ZSAvIDRcblxuICAgIGNvbnN0IGFyeSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIGFyeVtpXSA9IG5ldyBDYXRlZ29yeShkYXRhKGkgKiA0KSwgZGF0YShpICogNCArIDEpLCBkYXRhKGkgKiA0ICsgMikgPT09IDEsIGRhdGEoaSAqIDQgKyAzKSA9PT0gMSlcbiAgICB9XG4gICAgcmV0dXJuIGFyeVxuICB9XG59XG5cbmNsYXNzIENhdGVnb3J5IHtcbiAgY29uc3RydWN0b3IoaSwgbCwgaXYsIGcpIHtcbiAgICB0aGlzLmlkICAgICA9IGlcbiAgICB0aGlzLmxlbmd0aCA9IGxcbiAgICB0aGlzLmludm9rZSA9IGl2XG4gICAgdGhpcy5ncm91cCAgPSBnXG4gIH1cbn0iLCJpbXBvcnQgRmlsZU1hcHBlZElucHV0U3RyZWFtIGZyb20gJy4uL3V0aWwvRmlsZU1hcHBlZElucHV0U3RyZWFtLmpzJ1xuXG4vKipcbiAqIOW9ouaFi+e0oOOBrumAo+aOpeOCs+OCueODiOihqOOCkuaJseOBhuOCr+ODqeOCuVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihkYXRhRGlyKSB7XG4gICAgY29uc3QgZm1pcyA9IG5ldyBGaWxlTWFwcGVkSW5wdXRTdHJlYW0oZGF0YURpciArICcvbWF0cml4LmJpbicpXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubGVmdFNpemUgID0gZm1pcy5nZXRJbnQoKVxuICAgICAgdGhpcy5yaWdodFNpemUgPSBmbWlzLmdldEludCgpXG4gICAgICB0aGlzLm1hdHJpeCAgICA9IGZtaXMuZ2V0U2hvcnRBcnJheSh0aGlzLmxlZnRTaXplICogdGhpcy5yaWdodFNpemUpXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGZtaXMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDlvaLmhYvntKDlkIzlo6vjga7pgKPmjqXjgrPjgrnjg4jjgpLmsYLjgoHjgotcbiAgICovXG4gIGxpbmtDb3N0KGxlZnRJZCwgcmlnaHRJZCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeChyaWdodElkICogdGhpcy5sZWZ0U2l6ZSArIGxlZnRJZClcbiAgfVxufSIsImltcG9ydCBDaGFyQ2F0ZWdvcnkgZnJvbSAnLi9DaGFyQ2F0ZWdvcnkuanMnXG5cbi8qKlxuICog5pyq55+l6Kqe44Gu5qSc57Si44KS6KGM44GG44Kv44Op44K5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVua25vd24ge1xuICBjb25zdHJ1Y3RvcihkYXRhRGlyKSB7XG4gICAgdGhpcy5jYXRlZ29yeSA9IG5ldyBDaGFyQ2F0ZWdvcnkoZGF0YURpcikgICAgLy8g5paH5a2X44Kr44OG44K044Oq566h55CG44Kv44Op44K5XG4gICAgdGhpcy5zcGFjZUlkID0gdGhpcy5jYXRlZ29yeS5jYXRlZ29yeSgzMikuaWQgLy8g5paH5a2X44Kr44OG44K044Oq44GMU1BBQ0Xjga7mloflrZfjga5JRCAgTk9URTogJyAn44Gu5paH5a2X44Kr44OG44K044Oq44GvU1BBQ0XjgavkuojntITjgZXjgozjgabjgYTjgotcbiAgfVxuXG4gIHNlYXJjaCh0ZXh0LCBzdGFydCwgd2RpYywgZm4pIHtcbiAgICBjb25zdCBjaCA9IHRleHRbc3RhcnRdXG4gICAgY29uc3QgY3QgPSB0aGlzLmNhdGVnb3J5LmNhdGVnb3J5KGNoKVxuXG4gICAgaWYgKGZuLmlzRW1wdHkoKSA9PT0gZmFsc2UgJiYgY3QuaW52b2tlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNTcGFjZSA9IGN0LmlkID09PSB0aGlzLnNwYWNlSWQ7XG4gICAgbGV0IGxpbWl0ID0gTWF0aC5taW4odGV4dC5sZW5ndGgsIGN0Lmxlbmd0aCArIHN0YXJ0KTtcbiAgICBsZXQgaSA9IHN0YXJ0O1xuICAgIGZvciAoOyBpIDwgbGltaXQ7IGkrKykge1xuICAgICAgd2RpYy5zZWFyY2hGcm9tVHJpZUlkKGN0LmlkLCBzdGFydCwgKGkgLSBzdGFydCkgKyAxLCBpc1NwYWNlLCBmbilcbiAgICAgIGlmIChpICsgMSAhPT0gbGltaXQgJiYgdGhpcy5jYXRlZ29yeS5pc0NvbXBhdGlibGUoY2gsIHRleHRbaSArIDFdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN0Lmdyb3VwICYmIGkgPCB0ZXh0Lmxlbmd0aCkge1xuICAgICAgbGltaXQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIGZvciAoOyBpIDwgbGltaXQ7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeS5pc0NvbXBhdGlibGUoY2gsIHRleHRbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgIHdkaWMuc2VhcmNoRnJvbVRyaWVJZChjdC5pZCwgc3RhcnQsIGkgLSBzdGFydCwgaXNTcGFjZSwgZm4pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdkaWMuc2VhcmNoRnJvbVRyaWVJZChjdC5pZCwgc3RhcnQsIHRleHQubGVuZ3RoIC0gc3RhcnQsIGlzU3BhY2UsIGZuKTtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIFZpdGVyYmnjgqLjg6vjgrTjg6rjgrrjg6Djgafkvb/nlKjjgZXjgozjgovjg47jg7zjg4lcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVml0ZXJiaU5vZGUge1xuICBjb25zdHJ1Y3Rvcih3aWQsIGJlZywgbGVuLCB3b3JkQ29zdCwgbCwgciwgc3BhY2UpIHtcbiAgICB0aGlzLnByZXYgPSBudWxsICAgICAgIC8vIOOCs+OCueODiOacgOWwj+OBruWJjeaWueOBruODjuODvOODieOBuOOBruODquODs+OCr1xuICAgIHRoaXMud29yZElkID0gd2lkICAgICAgLy8g5Y2Y6KqeSURcbiAgICB0aGlzLmxlZnRJZCA9IGwgICAgICAgIC8vIOW3puaWh+iEiElEXG4gICAgdGhpcy5yaWdodElkID0gciAgICAgICAvLyDlj7PmlofohIhJRFxuICAgIHRoaXMubGVuZ3RoID0gbGVuICAgICAgLy8g5b2i5oWL57Sg44Gu6KGo5bGk5b2i44Gu6ZW344GVKOaWh+Wtl+aVsClcbiAgICB0aGlzLmNvc3QgPSB3b3JkQ29zdCAgIC8vIOWni+eCueOBi+OCieODjuODvOODieOBvuOBp+OBrue3j+OCs+OCueODiFxuICAgIHRoaXMuaXNTcGFjZSA9IHNwYWNlICAgLy8g5b2i5oWL57Sg44Gu5paH5a2X56iuKOaWh+Wtl+OCq+ODhuOCtOODqinjgYznqbrnmb3mloflrZfjgYvjganjgYbjgYtcbiAgICB0aGlzLnN0YXJ0ID0gYmVnICAgICAgIC8vIOWFpeWKm+ODhuOCreOCueODiOWGheOBp+OBruW9ouaFi+e0oOOBrumWi+Wni+S9jee9rlxuICB9XG5cbiAgc3RhdGljIG1ha2VCT1NFT1MoKSB7XG4gICAgcmV0dXJuIG5ldyBWaXRlcmJpTm9kZSgwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSlcbiAgfVxufSIsImltcG9ydCBTZWFyY2hlciBmcm9tICcuLi90cmllL1NlYXJjaGVyLmpzJ1xuaW1wb3J0IFZpdGVyYmlOb2RlIGZyb20gJy4vVml0ZXJiaU5vZGUuanMnXG5pbXBvcnQgRmlsZU1hcHBlZElucHV0U3RyZWFtIGZyb20gJy4uL3V0aWwvRmlsZU1hcHBlZElucHV0U3RyZWFtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkRGljIHtcbiAgY29uc3RydWN0b3IoZGF0YURpcikge1xuICAgIHRoaXMudHJpZSAgICA9IG5ldyBTZWFyY2hlcihkYXRhRGlyICsgJy93b3JkMmlkJylcbiAgICB0aGlzLmRhdGEgICAgPSBGaWxlTWFwcGVkSW5wdXRTdHJlYW0uZ2V0U3RyaW5nKGRhdGFEaXIgKyAnL3dvcmQuZGF0JylcbiAgICB0aGlzLmluZGljZXMgPSBGaWxlTWFwcGVkSW5wdXRTdHJlYW0uZ2V0SW50QXJyYXkoZGF0YURpciArICcvd29yZC5hcnkuaWR4JylcblxuICAgIHtcbiAgICAgIGNvbnN0IGZtaXMgPSBuZXcgRmlsZU1hcHBlZElucHV0U3RyZWFtKGRhdGFEaXIgKyAnL3dvcmQuaW5mJylcbiAgICAgIGNvbnN0IHdvcmRDb3VudCA9IGZtaXMuc2l6ZSgpIC8gKDQgKyAyICsgMiArIDIpXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZGF0YU9mZnNldHMgPSBmbWlzLmdldEludEFycmF5KHdvcmRDb3VudCkgICAvL+WNmOiqnuOBrue0oOaAp+ODh+ODvOOCv+OBrumWi+Wni+S9jee9rlxuICAgICAgICB0aGlzLmxlZnRJZHMgICAgID0gZm1pcy5nZXRTaG9ydEFycmF5KHdvcmRDb3VudCkgLy/ljZjoqp7jga7lt6bmlofohIhJRFxuICAgICAgICB0aGlzLnJpZ2h0SWRzICAgID0gZm1pcy5nZXRTaG9ydEFycmF5KHdvcmRDb3VudCkgLy/ljZjoqp7jga7lj7PmlofohIhJRFxuICAgICAgICB0aGlzLmNvc3RzICAgICAgID0gZm1pcy5nZXRTaG9ydEFycmF5KHdvcmRDb3VudCkgLy/ljZjoqp7jga7jgrPjgrnjg4hcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGZtaXMuY2xvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCh0ZXh0LCBzdGFydCwgZm4pIHtcbiAgICB0aGlzLnRyaWUuZWFjaENvbW1vblByZWZpeCh0ZXh0LCBzdGFydCwgbmV3IFdvcmREaWNDYWxsYmFja0NhbGxlcih0aGlzLCBmbikpXG4gIH1cblxuICBzZWFyY2hGcm9tVHJpZUlkKHRyaWVJZCwgc3RhcnQsIHdvcmRMZW5ndGgsIGlzU3BhY2UsIGZuKSB7XG4gICAgY29uc3QgZW5kID0gdGhpcy5pbmRpY2VzKHRyaWVJZCArIDEpXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kaWNlcyh0cmllSWQpOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobmV3IFZpdGVyYmlOb2RlKGksIHN0YXJ0LCB3b3JkTGVuZ3RoLCB0aGlzLmNvc3RzKGkpLCB0aGlzLmxlZnRJZHMoaSksIHRoaXMucmlnaHRJZHMoaSksIGlzU3BhY2UpKVxuICAgIH1cbiAgfVxuXG4gIHdvcmREYXRhKHdvcmRJZCkge1xuICAgIGNvbnN0IGJlZ2luID0gdGhpcy5kYXRhT2Zmc2V0cyh3b3JkSWQpXG4gICAgY29uc3QgZW5kID0gdGhpcy5kYXRhT2Zmc2V0cyh3b3JkSWQgKyAxKVxuICAgIGNvbnN0IHRleHQgPSBuZXcgVWludDE2QXJyYXkoZW5kIC0gYmVnaW4pXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXh0W2ldID0gdGhpcy5kYXRhKGJlZ2luICsgaSlcbiAgICB9XG4gICAgcmV0dXJuIHRleHRcbiAgfVxufVxuXG5jbGFzcyBXb3JkRGljQ2FsbGJhY2tDYWxsZXIge1xuICBjb25zdHJ1Y3Rvcih3b3JkRGljLCBmbikge1xuICAgIHRoaXMud29yZERpYyA9IHdvcmREaWNcbiAgICB0aGlzLmZuID0gZm5cbiAgfVxuXG4gIGNhbGwoc3RhcnQsIG9mZnNldCwgdHJpZUlkKSB7XG4gICAgY29uc3QgZW5kID0gdGhpcy53b3JkRGljLmluZGljZXModHJpZUlkICsgMSlcbiAgICBmb3IgKGxldCBpID0gdGhpcy53b3JkRGljLmluZGljZXModHJpZUlkKTsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLmZuLmNhbGwobmV3IFZpdGVyYmlOb2RlKGksIHN0YXJ0LCBvZmZzZXQsIHRoaXMud29yZERpYy5jb3N0cyhpKSwgdGhpcy53b3JkRGljLmxlZnRJZHMoaSksIHRoaXMud29yZERpYy5yaWdodElkcyhpKSwgZmFsc2UpKVxuICAgIH1cbiAgfVxufSIsIi8qKlxuICog5paH5a2X5YiX44KS5paH5a2X44Gu44K544OI44Oq44O844Og44Go44GX44Gm5omx44GG44Gf44KB44Gu44Kv44Op44K544CCXG4gKiByZWFk44Oh44K944OD44OJ44Gn5YCL44CF44Gu5paH5a2X44KS6aCG44Gr6Kqt44G/6L6844G/44CB5paH5a2X5YiX44Gu57WC56uv44Gr6YGU44GX44Gf5aC05ZCI44Gr44Gve0Bjb2RlIE5vZGUuQ2hjay5URVJNSU5BVEVfQ09ERX3jgYzov5TjgZXjgozjgovjgIJcbiAqIFhYWDog44Kv44Op44K55ZCN44Gv5LiN6YGp5YiHXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleVN0cmVhbSB7XG4gIGNvbnN0cnVjdG9yKGtleSwgc3RhcnQgPSAwKSB7XG4gICAgdGhpcy5zID0ga2V5XG4gICAgdGhpcy5jdXIgPSBzdGFydFxuICB9XG5cbiAgLyoqXG4gICAqIOOBk+OBruODoeOCveODg+ODieOBr+WLleS9nOeahOOBq+OBr+OAgXtAY29kZSByZXN0KCkuc3RhcnRzV2l0aChwcmVmaXguc3Vic3RyaW5nKGJlZywgbGVuKSl944CB44Go562J5L6h44CCXG4gICAqIOOBu+OCk+OBruiLpeW5suOBoOOBjOOAgeODkeODleOCqeODvOODnuODs+OCueOCkuaUueWWhOOBmeOCi+OBn+OCgeOBq+WwjuWFpeOAglxuICAgKiDnsKHmvZTmgKfjga7jgZ/jgoHjgavjgarjgY/jgZfjgabjgoLoia/jgYTjgYvjgoLjgZfjgozjgarjgYTjgIJcbiAgICovXG4gIHN0YXJ0c1dpdGgocHJlZml4LCBiZWcsIGxlbikge1xuICAgIGlmICh0aGlzLnMubGVuZ3RoIC0gdGhpcy5jdXIgPCBsZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnNbdGhpcy5jdXIgKyBpXSAhPT0gcHJlZml4KGJlZyArIGkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVhZCgpIHtcbiAgICBjb25zdCBjID0gdGhpcy5lb3MoKSA/IDAgOiB0aGlzLnNbdGhpcy5jdXIrK11cbiAgICByZXR1cm4gY1xuICB9XG5cbiAgZW9zKCkge1xuICAgIHJldHVybiB0aGlzLmN1ciA9PT0gdGhpcy5zLmxlbmd0aDtcbiAgfVxufSIsImltcG9ydCBGaWxlTWFwcGVkSW5wdXRTdHJlYW0gZnJvbSAnLi4vdXRpbC9GaWxlTWFwcGVkSW5wdXRTdHJlYW0uanMnXG5pbXBvcnQgS2V5U3RyZWFtIGZyb20gJy4vS2V5U3RyZWFtLmpzJ1xuXG4vKipcbiAqIERvdWJsZUFycmF55qSc57Si55So44Gu44Kv44Op44K5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaGVyIHtcbiAgLyoqXG4gICAqIOS/neWtmOOBleOCjOOBpuOBhOOCi0RvdWJsZUFycmF544KS6Kqt44G/6L6844KT44Gn44CB44GT44Gu44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K544KS5L2c5oiQ44GZ44KLXG4gICAqXG4gICAqIEBwYXJhbSBmaWxlcGF0aCBEb3VibGVBcnJheeOBjOS/neWtmOOBleOCjOOBpuOBhOOCi+ODleOCoeOCpOODq+OBruODkeOCuVxuICAgKiBAdGhyb3dzIElPRXhjZXB0aW9uIGZpbGVwYXRo44Gn56S644GV44KM44KL44OV44Kh44Kk44Or44Gu6Kqt44G/6L6844G/44Gr5aSx5pWX44GX44Gf5aC05ZCI44Gr6YCB5Ye644GV44KM44KLXG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZtaXMgPSBuZXcgRmlsZU1hcHBlZElucHV0U3RyZWFtKGZpbGVQYXRoKVxuXG4gICAgY29uc3Qgbm9kZVN6ID0gZm1pcy5nZXRJbnQoKVxuICAgIGNvbnN0IHRpbmRTeiA9IGZtaXMuZ2V0SW50KClcbiAgICBjb25zdCB0YWlsU3ogPSBmbWlzLmdldEludCgpXG4gICAgLy90aGlzLmtleVNldFNpemUgPSB0aW5kU3pcbiAgICB0aGlzLmJlZ3MgPSBmbWlzLmdldEludEFycmF5KHRpbmRTeilcbiAgICB0aGlzLmJhc2UgPSBmbWlzLmdldEludEFycmF5KG5vZGVTeilcbiAgICB0aGlzLmxlbnMgPSBmbWlzLmdldFNob3J0QXJyYXkodGluZFN6KVxuICAgIHRoaXMuY2hjayA9IGZtaXMuZ2V0Q2hhckFycmF5KG5vZGVTeilcbiAgICB0aGlzLnRhaWwgPSBmbWlzLmdldENoYXJBcnJheSh0YWlsU3opXG5cbiAgICBmbWlzLmNsb3NlKClcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21tb24tcHJlZml45qSc57Si44KS6KGM44GGXG4gICAqIOadoeS7tuOBq+S4gOiHtOOBmeOCi+OCreODvOOBjOimi+OBpOOBi+OCi+W6puOBq+OAgWZuLmNhbGwoLi4uKeODoeOCveODg+ODieOBjOWRvOOBs+WHuuOBleOCjOOCi1xuICAgKlxuICAgKiBAcGFyYW0ga2V5IOaknOe0ouWvvuixoeOBruOCreODvOaWh+Wtl+WIl1xuICAgKiBAcGFyYW0gc3RhcnQg5qSc57Si5a++6LGh44Go44Gq44KL44Kt44O85paH5a2X5YiX44Gu5pyA5Yid44Gu5re75a2XXG4gICAqIEBwYXJhbSBmbiDkuIDoh7TjgpLmpJzlh7rjgZfjgZ/loLTlkIjjgavlkbzjgbPlh7rjgZXjgozjgovjg6Hjgr3jg4Pjg4njgpLlrprnvqnjgZfjgZ/jgrPjg7zjg6vjg5Djg4Pjgq/jgq/jg6njgrlcbiAgICovXG4gIGVhY2hDb21tb25QcmVmaXgoa2V5LCBzdGFydCwgZm4pIHtcbiAgICBsZXQgbm9kZSA9IHRoaXMuYmFzZSgwKVxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgY29uc3QgX2luID0gbmV3IEtleVN0cmVhbShrZXksIHN0YXJ0KVxuXG4gICAgZm9yIChsZXQgY29kZSA9IF9pbi5yZWFkKCk7OyBjb2RlID0gX2luLnJlYWQoKSwgb2Zmc2V0KyspIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsSWR4ID0gbm9kZVxuICAgICAgaWYgKHRoaXMuY2hjayh0ZXJtaW5hbElkeCkgPT09IDApIHtcbiAgICAgICAgZm4uY2FsbChzdGFydCwgb2Zmc2V0LCBub2RlQmFzZUlkKHRoaXMuYmFzZSh0ZXJtaW5hbElkeCkpKVxuICAgICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlkeCA9IG5vZGUgKyBjb2RlXG4gICAgICBub2RlID0gdGhpcy5iYXNlKGlkeClcbiAgICAgIGlmICh0aGlzLmNoY2soaWR4KSA9PT0gY29kZSkge1xuICAgICAgICBpZiAobm9kZSA+PSAwKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbGxfaWZfa2V5SW5jbHVkaW5nKF9pbiwgbm9kZSwgc3RhcnQsIG9mZnNldCwgZm4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIGNhbGxfaWZfa2V5SW5jbHVkaW5nKF9pbiwgbm9kZSwgc3RhcnQsIG9mZnNldCwgZm4pIHtcbiAgICBjb25zdCBpZCA9IG5vZGVCYXNlSWQobm9kZSlcbiAgICBpZiAoX2luLnN0YXJ0c1dpdGgodGhpcy50YWlsLCB0aGlzLmJlZ3MoaWQpLCB0aGlzLmxlbnMoaWQpKSkge1xuICAgICAgZm4uY2FsbChzdGFydCwgb2Zmc2V0ICsgdGhpcy5sZW5zKGlkKSArIDEsIGlkKVxuICAgIH1cbiAgfVxuXG59XG5cbmZ1bmN0aW9uIG5vZGVCYXNlSWQoaWQpIHtcbiAgcmV0dXJuIGlkICogLTEgLSAxXG59IiwiY29uc3QgZmlsZURhdGEgPSB7fVxubGV0IGZldGNoZWQgPSBmYWxzZTtcbmxldCBsZSA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlZmV0Y2godXJsLCBmaWxlbmFtZXMsIGxpdHRsZUVuZGlhbiA9IGZhbHNlKSB7XG4gIGlmIChmZXRjaGVkKSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgZmV0Y2hlZCcpXG4gIGZldGNoZWQgPSB0cnVlXG4gIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGZpbGVuYW1lcy5tYXAoZmlsZW5hbWUgPT4gZmV0Y2godXJsICsgZmlsZW5hbWUpKSlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBidWYgPSBhd2FpdCByZXNbaV0uYXJyYXlCdWZmZXIoKVxuICAgIGZpbGVEYXRhW2ZpbGVuYW1lc1tpXV0gPSBidWZcbiAgfVxuICBsZSA9IGxpdHRsZUVuZGlhbjtcbn1cblxuLyoqXG4gKiDjg5XjgqHjgqTjg6vjgavjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lhaXlipvjgrnjg4jjg6rjg7zjg6A8YnIgLz5cbiAqIG5ldC5yZWR1bHMuaWdv5Lul5LiL44Gu44OR44OD44Kx44O844K444Gn44Gv44OV44Kh44Kk44Or44GL44KJ44OQ44Kk44OK44Oq44OH44O844K/44KS5Y+W5b6X44GZ44KL5aC05ZCI44CB5b+F44Ga44GT44Gu44Kv44Op44K544GM5L2/55So44GV44KM44KLXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVNYXBwZWRJbnB1dFN0cmVhbSB7XG4gIC8qKlxuICAgKiDlhaXlipvjgrnjg4jjg6rjg7zjg6DjgpLkvZzmiJDjgZnjgotcbiAgICogXG4gICAqIEBwYXJhbSBmaWxlcGF0aCDjg57jg4Pjg5Tjg7PjgrDjgZnjgovjg5XjgqHjgqTjg6vjga7jg5HjgrlcbiAgICovXG4gIGNvbnN0cnVjdG9yKGZpbGVwYXRoKSB7XG4gICAgdGhpcy5maWxlRGF0YSA9IGZpbGVEYXRhW2ZpbGVwYXRoXVxuICAgIHRoaXMuY3VyID0gMFxuICB9XG5cbiAgcmVhZChsZW4pIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IERhdGFWaWV3KHRoaXMuZmlsZURhdGEsIHRoaXMuY3VyLCBsZW4pXG4gICAgdGhpcy5jdXIgKz0gbGVuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGdldEludCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkKDQpLmdldEludDMyKDAsIGxlKVxuICB9XG5cbiAgZ2V0SW50QXJyYXkoZWxlbWVudENvdW50KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZChlbGVtZW50Q291bnQgKiA0KVxuICAgIGZ1bmN0aW9uIGZuKHApIHtcbiAgICAgIHJldHVybiBkYXRhLmdldEludDMyKHAgKiA0LCBsZSlcbiAgICB9XG4gICAgZm4uc2l6ZSA9IGVsZW1lbnRDb3VudFxuICAgIHJldHVybiBmblxuICB9XG5cbiAgc3RhdGljIGdldEludEFycmF5KGZpbGVwYXRoKSB7XG4gICAgY29uc3QgZm1pcyA9IG5ldyBGaWxlTWFwcGVkSW5wdXRTdHJlYW0oZmlsZXBhdGgpXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmbWlzLmdldEludEFycmF5KGZtaXMuc2l6ZSgpIC8gNClcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZm1pcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgZ2V0U2hvcnRBcnJheShlbGVtZW50Q291bnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZWFkKGVsZW1lbnRDb3VudCAqIDIpXG4gICAgZnVuY3Rpb24gZm4ocCkge1xuICAgICAgcmV0dXJuIGRhdGEuZ2V0SW50MTYocCAqIDIsIGxlKVxuICAgIH1cbiAgICBmbi5zaXplID0gZWxlbWVudENvdW50XG4gICAgcmV0dXJuIGZuXG4gIH1cblxuICBnZXRDaGFyQXJyYXkoZWxlbWVudENvdW50KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMucmVhZChlbGVtZW50Q291bnQgKiAyKVxuICAgIGZ1bmN0aW9uIGZuKHApIHtcbiAgICAgIHJldHVybiBkYXRhLmdldFVpbnQxNihwICogMiwgbGUpXG4gICAgfVxuICAgIGZuLnNpemUgPSBlbGVtZW50Q291bnRcbiAgICByZXR1cm4gZm5cbiAgfVxuXG4gIHN0YXRpYyBnZXRTdHJpbmcoZmlsZXBhdGgpIHtcbiAgICBjb25zdCBmbWlzID0gbmV3IEZpbGVNYXBwZWRJbnB1dFN0cmVhbShmaWxlcGF0aClcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZtaXMuZ2V0Q2hhckFycmF5KGZtaXMuc2l6ZSgpIC8gMilcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZm1pcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlRGF0YS5ieXRlTGVuZ3RoXG4gIH1cblxuICBjbG9zZSgpIHtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=