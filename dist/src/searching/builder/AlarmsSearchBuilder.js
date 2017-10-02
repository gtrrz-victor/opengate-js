'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ExecutionsSearchBuilder2 = require('./ExecutionsSearchBuilder');

var _ExecutionsSearchBuilder3 = _interopRequireDefault(_ExecutionsSearchBuilder2);

var _utilSearchingFieldsFieldFinder = require('../../util/searchingFields/FieldFinder');

var _utilSearchingFieldsFieldFinder2 = _interopRequireDefault(_utilSearchingFieldsFieldFinder);

/**
 * Defined a search over Alarms	
 * @example ogapi.alarmsSearchBuilder()
 */

var AlarmsSearchBuilder = (function (_ExecutionsSearchBuilder) {
  _inherits(AlarmsSearchBuilder, _ExecutionsSearchBuilder);

  /**
   *	@param {!InternalOpenGateAPI} parent - Instance of our InternalOpenGateAPI
   */

  function AlarmsSearchBuilder(parent) {
    _classCallCheck(this, AlarmsSearchBuilder);

    _get(Object.getPrototypeOf(AlarmsSearchBuilder.prototype), 'constructor', this).call(this, parent, new _utilSearchingFieldsFieldFinder2['default'](parent, '/alarms'));
    this._url = '/entities' + _ExecutionsSearchBuilder2.TOKEN_URL + '/alarms';
  }

  return AlarmsSearchBuilder;
})(_ExecutionsSearchBuilder3['default']);

exports['default'] = AlarmsSearchBuilder;
module.exports = exports['default'];
//# sourceMappingURL=AlarmsSearchBuilder.js.map
