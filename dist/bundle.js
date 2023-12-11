'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var HeadwayWidgetClassName = "HW_widget_component";
var HeadwayWidgetSelector = "." + HeadwayWidgetClassName;
var HeadwayWidgetTriggerClassName = "HW_trigger";
var HeadwayWidgetTriggerSelector = "." + HeadwayWidgetTriggerClassName;

var HeadwayWidgetTrigger = function HeadwayWidgetTrigger(_ref) {
  var widgetId = _ref.widgetId,
      component = _ref.component,
      children = _ref.children;
  var Component = component || "div";
  var className = HeadwayWidgetTriggerClassName + "_".concat(widgetId);
  return /*#__PURE__*/React__default.createElement(Component, {
    className: className
  }, children);
};

HeadwayWidgetTrigger.defaultProps = {
  widgetId: "widget-1"
};

var HeadwayWidget = function HeadwayWidget(_ref2) {
  var id = _ref2.id,
      account = _ref2.account,
      children = _ref2.children,
      widgetPosition = _ref2.widgetPosition,
      badgePosition = _ref2.badgePosition,
      component = _ref2.component,
      trigger = _ref2.trigger,
      onWidgetReady = _ref2.onWidgetReady,
      onShowWidget = _ref2.onShowWidget,
      onShowDetails = _ref2.onShowDetails,
      onReadMore = _ref2.onReadMore,
      onHideWidget = _ref2.onHideWidget,
      styles = _ref2.styles,
      options = _ref2.options,
      translations = _ref2.translations,
      rest = _objectWithoutProperties(_ref2, ["id", "account", "children", "widgetPosition", "badgePosition", "component", "trigger", "onWidgetReady", "onShowWidget", "onShowDetails", "onReadMore", "onHideWidget", "styles", "options", "translations"]);

  var onWidgetReadyRef = React.useRef(onWidgetReady);
  var onShowWidgetRef = React.useRef(onShowWidget);
  var onShowDetailsRef = React.useRef(onShowDetails);
  var onReadMoreRef = React.useRef(onReadMore);
  var onHideWidgetRef = React.useRef(onHideWidget);
  var optionsRef = React.useRef(options);
  React.useEffect(function () {
    onWidgetReadyRef.current = onWidgetReady || options.callbacks && options.callbacks.onWidgetReady;
    onShowWidgetRef.current = onShowWidget || options.callbacks && options.callbacks.onShowWidget;
    onShowDetailsRef.current = onShowDetails || options.callbacks && options.callbacks.onShowDetails;
    onReadMoreRef.current = onReadMore || options.callbacks && options.callbacks.onReadMore;
    onHideWidgetRef.current = onHideWidget || options.callbacks && options.callbacks.onHideWidget;
    optionsRef.current = options;
  });
  var handleWidgetReady = React.useCallback(function () {
    return onWidgetReadyRef.current && onWidgetReadyRef.current();
  }, []);
  var handleShowWidget = React.useCallback(function () {
    return onShowWidgetRef.current && onShowWidgetRef.current();
  }, []);
  var handleShowDetails = React.useCallback(function () {
    return onShowDetailsRef.current && onShowDetailsRef.current();
  }, []);
  var handleReadMore = React.useCallback(function () {
    return onReadMoreRef.current && onReadMoreRef.current();
  }, []);
  var handleHideWidget = React.useCallback(function () {
    return onHideWidgetRef.current && onHideWidgetRef.current();
  }, []);
  var initHeadway = React.useCallback(function () {
    var hwConfig = _objectSpread2({
      selector: HeadwayWidgetSelector + "_".concat(id),
      account: account || options.account,
      trigger: trigger ? HeadwayWidgetSelector + "_".concat(id) : options.trigger || HeadwayWidgetTriggerSelector + "_".concat(id),
      callbacks: {
        onWidgetReady: handleWidgetReady,
        onShowWidget: handleShowWidget,
        onShowDetails: handleShowDetails,
        onReadMore: handleReadMore,
        onHideWidget: handleHideWidget
      },
      translations: translations,
      widgetPosition: widgetPosition,
      badgePosition: badgePosition,
      __component: true,
      styles: styles
    }, options);

    var widget = window.Headway.getNewWidget();
    widget.init(hwConfig);
    return function () {
      widget.destroy();
    };
  }, [account, trigger, handleWidgetReady, handleShowWidget, handleShowDetails, handleReadMore, handleHideWidget, badgePosition, widgetPosition, translations]);
  React.useEffect(function () {
    var destroy;

    if (window.Headway) {
      destroy = initHeadway();
    } else {
      var head = document.getElementsByTagName("head")[0];
      var script = document.createElement("script");
      script.type = "text/javascript";
      var p = new Promise(function (resolve) {
        script.onload = function () {
          var d = initHeadway();
          resolve(d);
        };
      });

      destroy = function destroy() {
        p.then(function (d) {
          return d();
        });
      };

      script.src = "https://cdn.headwayapp.co/widget.js"; // "https://cdn.headwaystaging.com/widget.js"; //;

      head.appendChild(script);
    }

    return destroy;
  }, [initHeadway]);
  var Component = component || "div";
  return /*#__PURE__*/React__default.createElement(Component, _extends({
    className: HeadwayWidgetClassName + "_".concat(id)
  }, rest, {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }), children);
};
HeadwayWidget.propTypes = {
  /**
   * account of your Headway.
   */
  account: PropTypes.string.isRequired,

  /**
   * id of the Widget. It is required if you have more than one widget instance on the page.
   */
  id: PropTypes.string,

  /**
   * position of a badge
   */
  badgePosition: PropTypes.oneOf(["top-left", "top-center", "top-right", "center-left", "center", "center-right", "bottom-left", "bottom-center", "bottom-right"]),

  /**
   * badge relative widget position
   */
  widgetPosition: PropTypes.oneOf(["top-left", "top-right", "center-left", "center-right", "bottom-left", "bottom-right"]),

  /**
   * callback fired when widget has loaded
   */
  onWidgetReady: PropTypes.func,

  /**
   * callback fired when widget is shown
   */
  onShowWidget: PropTypes.func,

  /**
   * callback fired when an item in the widget is clicked
   */
  onShowDetails: PropTypes.func,

  /**
   * callback fired when user clicks on readMore link
   */
  onReadMore: PropTypes.func,

  /**
   * callback fired when user closes the widget
   */
  onHideWidget: PropTypes.func,

  /**
   * Translating the text inside of the widget
   * */
  translations: PropTypes.shape({
    title: PropTypes.string,
    labels: PropTypes.shape({
      "new": PropTypes.string,
      update: PropTypes.string,
      improvement: PropTypes.string
    }),
    readMore: PropTypes.string,
    footer: PropTypes.string
  }),

  /**
   * options defined in classic object format. Read more at https://docs.headwayapp.co/widget
   */
  options: PropTypes.shape({
    account: PropTypes.string,
    callbacks: PropTypes.shape({
      onWidgetReady: PropTypes.func,
      onShowWidget: PropTypes.func,
      onShowDetails: PropTypes.func,
      onReadMore: PropTypes.func,
      onHideWidget: PropTypes.func
    }),
    translations: PropTypes.shape({
      title: PropTypes.string,
      labels: PropTypes.shape({
        "new": PropTypes.string,
        update: PropTypes.string,
        improvement: PropTypes.string
      }),
      readMore: PropTypes.string,
      footer: PropTypes.string
    })
  })
};
HeadwayWidget.defaultProps = {
  account: "",
  id: "widget-1",
  badgePosition: "bottom-right",
  widgetPosition: "bottom-right",
  styles: {},
  translations: {},
  options: {}
};

exports.HeadwayWidgetTrigger = HeadwayWidgetTrigger;
exports.default = HeadwayWidget;
