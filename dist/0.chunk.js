webpackJsonp([0],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(RkFaqList1_01, _React$Component);

  function RkFaqList1_01(props) {
    _classCallCheck(this, RkFaqList1_01);

    var _this = _possibleConstructorReturn(this, (RkFaqList1_01.__proto__ || Object.getPrototypeOf(RkFaqList1_01)).call(this, props));

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


  _createClass(RkFaqList1_01, [{
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

});