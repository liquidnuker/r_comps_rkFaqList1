(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(27);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(53);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(54);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(58);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(105);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// use export default for async wrap
function ToggleIcon(props) {
  if (!props.pr_toggled) {
    return React.createElement(
      "span",
      { className: "rkFaqList101_icon" },
      React.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
      )
    );
  } else {
    return React.createElement(
      "span",
      { className: "rkFaqList101_icon" },
      React.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M19 13H5v-2h14v2z" })
      )
    );
  }
}

function Content(props) {
  if (props.pr_toggled) {
    return React.createElement(
      "p",
      { className: "rkFaqList101_ans" },
      props.pr_content
    );
  } else {
    return null;
  }
}

var RkFaqList1_01 = function (_React$Component) {
  (0, _inherits3.default)(RkFaqList1_01, _React$Component);

  function RkFaqList1_01(props) {
    (0, _classCallCheck3.default)(this, RkFaqList1_01);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RkFaqList1_01.__proto__ || (0, _getPrototypeOf2.default)(RkFaqList1_01)).call(this, props));

    _this.state = {
      faqList: [{
        title: "rkFaqList1-01_title1",
        content: "Lorem ipsum dolor sit amet1,...",
        toggled: false
      }, {
        title: "rkFaqList1-01_title2",
        content: "Lorem ipsum dolor sit amet2,...",
        toggled: true
      }]
    };

    // binders 

    return _this;
  }

  // lifecycle hooks


  (0, _createClass3.default)(RkFaqList1_01, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.toggleAllContent(false);
    }

    // methods

  }, {
    key: "toggleAllContent",
    value: function toggleAllContent(visible) {
      var faqList = this.state.faqList;
      for (var i in faqList) {
        faqList[i].toggled = visible;
      }
    }
  }, {
    key: "toggleContent",
    value: function toggleContent(index) {
      var faqList = this.state.faqList;
      faqList[index].toggled = !faqList[index].toggled;

      this.setState(function (prevState) {
        return {
          toggled: faqList[index].toggled
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var faqList = this.state.faqList;
      return React.createElement(
        "article",
        { className: "rkFaqList101" },
        React.createElement(
          "ul",
          null,
          faqList.map(function (i, index) {
            return React.createElement(
              "li",
              null,
              React.createElement(
                "h2",
                { className: "rkFaqList101_title", onClick: function onClick() {
                    _this2.toggleContent(index);
                  } },
                React.createElement(ToggleIcon, { pr_toggled: faqList[index].toggled }),
                i.title
              ),
              React.createElement(
                "section",
                null,
                React.createElement(Content, { pr_toggled: faqList[index].toggled,
                  pr_content: faqList[index].content })
              )
            );
          })
        )
      );
    }
  }]);
  return RkFaqList1_01;
}(React.Component);

exports.default = RkFaqList1_01;

/***/ })

}]);