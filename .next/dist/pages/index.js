'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var superagent = _interopRequireWildcard(_superagent);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helenyu/Desktop/React/reading-list/pages/index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  (0, _createClass3.default)(_class, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;

        var db, _list, _ref3, list;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!req) {
                  _context.next = 6;
                  break;
                }

                db = req.db;
                _context.next = 4;
                return db.collection('Book').find().sort({ createdAt: -1 }).toArray();

              case 4:
                _list = _context.sent;
                return _context.abrupt('return', { list: _list });

              case 6:
                _context.next = 8;
                return superagent.get('http://localhost:3000/api').then(function (res) {
                  return res.body;
                });

              case 8:
                _ref3 = _context.sent;
                list = _ref3.list;
                return _context.abrupt('return', { list: list });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

    _this.state = {
      formData: {
        author: '',
        title: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'setForm',
    value: function setForm(prop) {
      var _this2 = this;

      return function (ev) {
        var state = _this2.state || {};
        var formData = state.formData || {};
        _this2.setState((0, _assign2.default)({}, state, {
          formData: (0, _assign2.default)({}, formData, (0, _defineProperty3.default)({}, prop, ev.target.value))
        }));
      };
    }
  }, {
    key: 'isFormInvalid',
    value: function isFormInvalid() {
      var state = this.state || {};
      var formData = state.formData || {};
      return !formData.author || !formData.title;
    }
  }, {
    key: 'remove',
    value: function remove(_id) {
      var _this3 = this;

      return function (ev) {
        superagent.del('http://localhost:3000/api/' + _id).then(function () {
          var state = _this3.state || {};
          var list = _this3.state.list || _this3.props.list || [];
          _this3.setState((0, _assign2.default)({}, state, {
            list: list.filter(function (book) {
              return book._id !== _id;
            })
          }));
        }).catch(function (error) {
          return console.error(error.stack);
        });
      };
    }
  }, {
    key: 'add',
    value: function add() {
      var _this4 = this;

      return function (ev) {
        ev.preventDefault();
        var state = _this4.state || {};
        var formData = state.formData || {};
        _this4.setState((0, _assign2.default)({}, _this4.state, {
          formData: { author: '', title: '' }
        }));

        superagent.post('http://localhost:3000/api', formData).then(function (res) {
          var state = _this4.state || {};
          var list = _this4.state.list || _this4.props.list || {};
          _this4.setState((0, _assign2.default)({}, state, {
            list: [res.body.book].concat(list)
          }));
        }).catch(function (error) {
          return console.error(error.stack);
        });
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var list = this.state.list || this.props.list;
      var formData = this.state.formData;

      return _react2.default.createElement('div', { id: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'New Book'), _react2.default.createElement('div', { id: 'input-book', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('form', { onSubmit: this.add(), __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.setForm('title'), value: formData.title, placeholder: 'Title', style: { width: '80vw', padding: '0.5rem', fontSize: '1.2rem', fontFamily: 'Arial' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement('textarea', { style: { width: '80vw', padding: '0.5rem', fontSize: '1rem', fontFamily: 'Arial' }, type: 'text', onChange: this.setForm('author'), value: formData.author, placeholder: 'Author', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { disabled: this.isFormInvalid(), __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Post'))), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Reading List'), _react2.default.createElement('div', { id: 'reading-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, list.map(function (book) {
        return _react2.default.createElement('div', { key: book._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, className: 'remove', onClick: _this5.remove(book._id), __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, 'X'), _react2.default.createElement('span', { className: 'description', __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react2.default.createElement('i', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, book.title), ' by ', book.author));
      }))));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3VwZXJhZ2VudCIsIkhlYWRlciIsIkJ1dHRvbiIsInJlcSIsImRiIiwiY29sbGVjdGlvbiIsImZpbmQiLCJzb3J0IiwiY3JlYXRlZEF0IiwidG9BcnJheSIsImxpc3QiLCJnZXQiLCJ0aGVuIiwicmVzIiwiYm9keSIsInN0YXRlIiwiZm9ybURhdGEiLCJhdXRob3IiLCJ0aXRsZSIsInByb3AiLCJzZXRTdGF0ZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJfaWQiLCJkZWwiLCJwcm9wcyIsImZpbHRlciIsImJvb2siLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiY29uY2F0IiwiYWRkIiwic2V0Rm9ybSIsIndpZHRoIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImlzRm9ybUludmFsaWQiLCJtYXAiLCJyZW1vdmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBUyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7O1ksQUFHZ0IsVyxBQUFBOzs7Ozs7OztxQixBQUN6Qjs7O0FBQ007O0EscUIsQUFBTyxJLEFBQVA7O3VCQUNXLEdBQUEsQUFBRyxXQUFILEFBQWMsUUFBZCxBQUFzQixPQUF0QixBQUE2QixLQUFLLEVBQUMsV0FBVyxDQUE5QyxBQUFrQyxBQUFhLEssQUFBL0MsQUFBbUQ7O21CQUFoRTtBO2lEQUNDLEVBQUUsTSxBQUFGOzs7O2tDQUdjLEFBQVcsSUFBWCxBQUFlLDZCQUFmLEFBQ3BCLEtBQUssZUFBQTt5QkFBTyxJQUFQLEFBQVc7QSxBQURJLGlCQUFBOzs7aUNBQWY7QSw2QixBQUFBO2lEQUVELEVBQUUsTSxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7O29CQUFj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QVE7b0JBQVI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQWdCLEFBQUs7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjtrREFDUyxNQUFQLEFBQVksUUFBTyxVQUFVLEtBQUEsQUFBSyxRQUFsQyxBQUE2QixBQUFhLFVBQVUsT0FBTyxTQUEzRCxBQUFvRSxPQUFPLGFBQTNFLEFBQXVGLFNBQVEsT0FBTyxFQUFDLE9BQUQsQUFBUSxRQUFRLFNBQWhCLEFBQXlCLFVBQVUsVUFBbkMsQUFBNkMsVUFBVSxZQUE3SixBQUFzRyxBQUFtRTtvQkFBeks7c0JBREYsQUFDRSxBQUFvTDtBQUFwTDs7O29CQUFvTDtzQkFEdEwsQUFDc0wsQUFDcEw7QUFEb0w7QUFBQSxzREFDMUssT0FBTyxFQUFDLE9BQUQsQUFBUSxRQUFRLFNBQWhCLEFBQXlCLFVBQVUsVUFBbkMsQUFBNkMsUUFBUSxZQUF0RSxBQUFpQixBQUFpRSxXQUFVLE1BQTVGLEFBQWlHLFFBQU8sVUFBVSxLQUFBLEFBQUssUUFBdkgsQUFBa0gsQUFBYSxXQUFXLE9BQU8sU0FBakosQUFBMEosUUFBUSxhQUFsSyxBQUE4SztvQkFBOUs7c0JBRkYsQUFFRTtBQUFBO1VBQXlMOztvQkFBQTtzQkFGM0wsQUFFMkwsQUFDekw7QUFEeUw7QUFBQSwwQkFDekwsQUFBQyx5Q0FBTyxVQUFVLEtBQWxCLEFBQWtCLEFBQUs7b0JBQXZCO3NCQUFBO0FBQUE7U0FOTixBQUVFLEFBQ0UsQUFHRSxBQUdKLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRGLEFBU0UsQUFDQSxpQ0FBQSxjQUFBLFNBQUssSUFBTCxBQUFRO29CQUFSO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUVJO0FBRko7QUFBQSxjQUVJLEFBQUssSUFBSSxnQkFBQTsrQkFDUCxjQUFBLFNBQUssS0FBSyxLQUFWLEFBQWU7c0JBQWY7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFdBQWhCLEFBQTBCLFVBQVMsU0FBUyxPQUFBLEFBQUssT0FBTyxLQUF4RCxBQUE0QyxBQUFpQjtzQkFBN0Q7d0JBQUE7QUFBQTtXQURGLEFBQ0UsQUFDQSxzQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUEsQUFDSTtBQURKOzJCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUk7QUFBSjtBQUFBLGdCQURKLEFBQ0ksQUFBUyxRQUFlLGFBSnZCLEFBQ1AsQUFFRSxBQUNpQztBQWxCL0MsQUFDRSxBQVVFLEFBQ0UsQUFFSSxBQWFYOzs7OztFQTFHMEIsZ0IsQUFBTSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGVsZW55dS9EZXNrdG9wL1JlYWN0L3JlYWRpbmctbGlzdCJ9