(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  /* private vars */
  var abstractComponent = {};
  abstractComponent._callbacks = {};

  abstractComponent.addEventListener = function (eventName, callback) {
    if (!this._callbacks[eventName]) {
      this._callbacks[eventName] = [];
    }
    this._callbacks[eventName].push(callback);
  };

  abstractComponent.removeEventListener = function (eventName, callback) {
    if (this._callbacks[eventName]) {
      var index = this._callbacks[eventName].indexOf(callback);
      if (index > -1) {
        this._callbacks.splice(index, 1);
      }
    }
  };

  abstractComponent.sendEvent = function (eventName) {
    if (!this._callbacks[eventName]) {
      return;
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._callbacks[eventName][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var callback = _step.value;

        callback();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  abstractComponent.getCopy = function () {
    return (0, _copy2.default)(this);
  };

  return abstractComponent;
};

var _copy = require(69);

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"69":69}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path_magic = require(10);

var _path_magic2 = _interopRequireDefault(_path_magic);

var _square_group_stuff = require(16);

var _square_group_stuff2 = _interopRequireDefault(_square_group_stuff);

var _zoom_stuff = require(18);

var _zoom_stuff2 = _interopRequireDefault(_zoom_stuff);

var _moving_backgrounds = require(3);

var _moving_backgrounds2 = _interopRequireDefault(_moving_backgrounds);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pathMagic: _path_magic2.default,
  squareGroupStuff: _square_group_stuff2.default,
  zoomStuff: _zoom_stuff2.default,
  movingBackgrounds: _moving_backgrounds2.default
};


},{"10":10,"16":16,"18":18,"3":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_rect_mover_background = require(4);

var _random_rect_mover_background2 = _interopRequireDefault(_random_rect_mover_background);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomRectMoverBackground: _random_rect_mover_background2.default
};


},{"4":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'amount', true);
  (0, _check_parameter2.default)(options, 'width', true);
  (0, _check_parameter2.default)(options, 'height', true);
  (0, _check_parameter2.default)(options, 'component', true);

  var randomRectMoveBackground = {};
  randomRectMoveBackground.amount = options.amount;
  randomRectMoveBackground.width = options.width;
  randomRectMoveBackground.height = options.height;
  randomRectMoveBackground.sourceComponent = options.component;
  randomRectMoveBackground.view = (0, _container2.default)();

  randomRectMoveBackground._movers = [];
  randomRectMoveBackground._squares = [];

  for (var i = 0; i < randomRectMoveBackground.amount; i++) {
    var square = this.sourceComponent.getCopy();
    this._movers.push(square);

    this._squares.push((0, _random_in_rect_mover2.default)({ subject: square.view, speed: 100, width: this.width, height: this.height }));
    randomRectMoveBackground.view.addChild(square.view);
  }

  randomRectMoveBackground.start = function () {
    for (var j = 0; j < this.amount; j++) {
      this._movers[j].start();
    }
  };

  randomRectMoveBackground.stop = function () {
    for (var j = 0; j < this.amount; j++) {
      this._movers[j].stop();
    }
  };

  return randomRectMoveBackground;
};

var _random_in_rect_mover = require(80);

var _random_in_rect_mover2 = _interopRequireDefault(_random_in_rect_mover);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"68":68,"80":80}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swinging_line = require(8);

var _swinging_line2 = _interopRequireDefault(_swinging_line);

var _curve = require(7);

var _curve2 = _interopRequireDefault(_curve);

var _wave = require(9);

var _wave2 = _interopRequireDefault(_wave);

var _cpoint_spinner = require(6);

var _cpoint_spinner2 = _interopRequireDefault(_cpoint_spinner);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  swingingLine: _swinging_line2.default,
  curve: _curve2.default,
  cpointSpinner: _cpoint_spinner2.default,
  wave: _wave2.default
};


},{"6":6,"7":7,"8":8,"9":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var spinner = {};

  (0, _check_parameter2.default)(options, 'length', true);
  (0, _check_parameter2.default)(options, 'radius', true);
  (0, _check_parameter2.default)(options, 'time', true);

  spinner.length = options.length;
  spinner.radius = options.radius;
  spinner.time = options.time;

  spinner.pulsar = (0, _transition_loop2.default)(spinner.time, 1);
  spinner.view = (0, _container2.default)();
  spinner.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: spinner.length, y: 0 }, cpoint1: { x: spinner.length / 2 - spinner.radius, y: 0 }, cpoint2: { x: spinner.length / 2 + spinner.radius, y: 0 } });
  spinner.pathView = (0, _path2.default)({ path: spinner.bezierCurve });

  spinner.start = function () {
    this.pulsar.start(spinner.handle);
    this.view.addChild(spinner.pathView.view);
  };

  spinner.stop = function () {
    this.pulsar.stop();
    this.view.removeChild(spinner.pathView.view);
  };

  spinner.handle = function (current) {
    var coordinates = (0, _degrees_to_coordinates2.default)(current * 360, this.radius);
    this.bezierCurve.cpoint1.x = this.length / 2 - coordinates.x;
    this.bezierCurve.cpoint1.y = -coordinates.y;
    this.bezierCurve.cpoint2.x = this.length / 2 + coordinates.x;
    this.bezierCurve.cpoint2.y = coordinates.y;
    this.pathView.draw();
  };

  return spinner;
};

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(58);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(56);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"27":27,"56":56,"58":58,"68":68,"91":91}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var curve = {};

  (0, _check_parameter2.default)(options, 'length', true);
  (0, _check_parameter2.default)(options, 'amplitude', true);
  (0, _check_parameter2.default)(options, 'time', true);

  curve.length = options.length;
  curve.amplitude = options.amplitude;
  curve.time = options.time;

  curve.pulsar = (0, _transition_loop2.default)(curve.time, 0.5);
  curve.view = (0, _container2.default)();
  curve.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: curve.length, y: 0 }, cpoint1: { x: 0, y: 0 }, cpoint2: { x: curve.length / 2, y: 0 } });
  curve.pathView = (0, _path2.default)({ path: curve.bezierCurve });

  curve.start = function () {
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  curve.stop = function () {
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  curve.handle = function (current) {
    this.bezierCurve.end.y = (current - 0.5) * this.amplitude;
    this.bezierCurve.cpoint1.x = Math.abs(current - 0.5) * this.length;
    this.bezierCurve.cpoint2.x = (Math.abs(current - 0.5) + 0.5) * this.length;
    this.bezierCurve.cpoint2.y = (current - 0.5) / 2 * this.amplitude;
    this.pathView.draw();
  };

  return curve;
};

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(58);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"27":27,"58":58,"68":68,"91":91}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var swingLine = {};

  (0, _check_parameter2.default)(options, 'length', true);
  (0, _check_parameter2.default)(options, 'amplitude', true);
  (0, _check_parameter2.default)(options, 'time', true);

  swingLine.length = options.length;
  swingLine.amplitude = options.amplitude;
  swingLine.time = options.time;

  swingLine.pulsar = (0, _transition_loop2.default)(swingLine.time, 0.5);
  swingLine.view = (0, _container2.default)();
  swingLine.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: swingLine.length, y: 0 }, cpoint1: { x: swingLine.length / 2, y: 0 } });
  swingLine.pathView = (0, _path2.default)({ path: swingLine.bezierCurve });

  swingLine.start = function () {
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  swingLine.stop = function () {
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  swingLine.handle = function (current) {
    this.bezierCurve.cpoint1.y = (current - 0.5) * this.amplitude;
    this.pathView.draw();
  };

  return swingLine;
};

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(58);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"27":27,"58":58,"68":68,"91":91}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var wave = {};

  (0, _check_parameter2.default)(options, 'length', true);
  (0, _check_parameter2.default)(options, 'amplitude', true);
  (0, _check_parameter2.default)(options, 'stretch', false, 0);
  (0, _check_parameter2.default)(options, 'time', true);

  wave.length = options.length;
  wave.amplitude = options.amplitude;
  wave.time = options.time;
  wave.stretch = options.stretch;

  wave.pulsar = (0, _transition_loop2.default)(wave.time, 0.5);
  wave.view = (0, _container2.default)();
  wave.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: wave.length, y: 0 }, cpoint1: { x: wave.length / 2 - wave.stretch, y: 0 }, cpoint2: { x: wave.length / 2 + wave.stretch, y: 0 } });
  wave.pathView = (0, _path2.default)({ path: wave.bezierCurve });

  wave.start = function () {
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  wave.stop = function () {
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  wave.handle = function (current) {
    this.bezierCurve.end.y = (current - 0.5) * this.amplitude;
    this.bezierCurve.cpoint2.y = (this.pulsar.getRelativeCurrent(-0.25) - 0.5) * 1.5 * this.amplitude;
    this.bezierCurve.cpoint1.y = (this.pulsar.getRelativeCurrent(-0.5) - 0.5) * 1.5 * this.amplitude;
    this.bezierCurve.start.y = (this.pulsar.getRelativeCurrent(-0.75) - 0.5) * this.amplitude;
    this.pathView.draw();
  };

  return wave;
};

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(58);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"27":27,"58":58,"68":68,"91":91}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition_path_drawer = require(12);

var _transition_path_drawer2 = _interopRequireDefault(_transition_path_drawer);

var _random_part_path_drawer = require(11);

var _random_part_path_drawer2 = _interopRequireDefault(_random_part_path_drawer);

var _bezier = require(5);

var _bezier2 = _interopRequireDefault(_bezier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  transitionPathDrawer: _transition_path_drawer2.default,
  randomPartPathDrawer: _random_part_path_drawer2.default,
  bezier: _bezier2.default
};


},{"11":11,"12":12,"5":5}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var pathDrawer = {};

  // Handle parameters:
  (0, _check_parameter2.default)(options, 'path', true);
  (0, _check_parameter2.default)(options, 'pathOptions', false, {});
  pathDrawer.path = options.path;
  options.pathOptions.path = pathDrawer.path;

  // Init
  pathDrawer.pathView = (0, _path2.default)(options.pathOptions);
  pathDrawer.view = (0, _container2.default)();

  pathDrawer.start = function () {
    _loop2.default.addAnimation(this.handle);
    this.view.addChild(this.pathView.view);
  };

  pathDrawer.stop = function () {
    _loop2.default.removeAnimation(this.handle);
    this.view.removeChild(this.pathView.view);
  };

  pathDrawer.handle = function () {
    this.pathView.completePath = this.path.getPartPath(Math.random());
    this.pathView.draw();
  };

  return pathDrawer;
};

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"27":27,"68":68,"71":71}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var pathDrawer = {};

  // Handle Parameters
  (0, _check_parameter2.default)(options, 'path', true);
  (0, _check_parameter2.default)(options, 'pathOptions', true);
  options.pathOptions.path = options.path;
  pathDrawer.path = options.path;

  // Init
  pathDrawer.pulsar = (0, _transition_loop2.default)(1000, 1);
  pathDrawer.pathView = (0, _path2.default)(options.pathOptions);
  pathDrawer.view = (0, _container2.default)();

  pathDrawer.start = function () {
    this.pulsar.start(this.handle);
    this.view.addChild(this.pathView.view);
  };

  pathDrawer.stop = function () {
    this.pulsar.stop();
    this.view.removeChild(this.pathView.view);
  };

  pathDrawer.handle = function (current) {
    this.pathView.completePath = this.path.getPartPath(current);
    this.pathView.draw();
  };

  return pathDrawer;
};

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"21":21,"27":27,"68":68,"91":91}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'columns', true);
  (0, _check_parameter2.default)(options, 'visible', true);
  (0, _check_parameter2.default)(options, 'spacing', false);
  (0, _check_parameter2.default)(options, 'children', false, []);

  var randomKaroSwitch = {};
  randomKaroSwitch.children = options.children;
  randomKaroSwitch.visible = options.visible;
  randomKaroSwitch.spacing = options.spacing;
  randomKaroSwitch.columns = options.columns;
  randomKaroSwitch._group = (0, _rectangle_group2.default)({ 'children': randomKaroSwitch.children, 'columns': randomKaroSwitch.columns, 'spacing': randomKaroSwitch.spacing });

  randomKaroSwitch.view = randomKaroSwitch._group.view;

  randomKaroSwitch.switch = function () {
    var randomNumbers = [];
    for (var i = 0; i < this.children.length; i++) {
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for (var j = 0; j < this.children.length; j++) {
      if (j < this.visible) {
        this._group.children[randomNumbers[j]].view.alpha = 0;
      } else {
        this._group.children[randomNumbers[j]].view.alpha = 1;
      }
    }
  };

  function shuffle(a) {
    for (var i = a.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      var _ref = [a[j], a[i - 1]];
      a[i - 1] = _ref[0];
      a[j] = _ref[1];
    }
  }

  return randomKaroSwitch;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(40);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"68":68}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'interval', true);
  (0, _check_parameter2.default)(options, 'columns', true);
  (0, _check_parameter2.default)(options, 'visible', true);
  (0, _check_parameter2.default)(options, 'spacing', false);
  (0, _check_parameter2.default)(options, 'children', false, []);

  var switchInterval = {};

  switchInterval._groupSwitch = (0, _random_square_switch2.default)(options);
  switchInterval._groupSwitchTimer = (0, _interval_timer2.default)(options.interval);

  switchInterval.start = function () {
    this._groupSwitchTimer.addListener(this.handle);
    this._groupSwitchTimer.start();
  };

  switchInterval.stop = function () {
    this._groupSwitchTimer.stop();
    this._groupSwitchTimer.removeListener(this.handle);
  };

  switchInterval.view = switchInterval._groupSwitch.view;

  switchInterval.handle = function () {
    this._groupSwitch.switch();
  };

  return switchInterval;
};

var _random_square_switch = require(13);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _interval_timer = require(90);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"13":13,"68":68,"90":90}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'columns', true);
  (0, _check_parameter2.default)(options, 'visible', true);
  (0, _check_parameter2.default)(options, 'spacing', false);
  (0, _check_parameter2.default)(options, 'zoomSpeed', true);
  (0, _check_parameter2.default)(options, 'children', false, []);

  var randomKaroSwitch = {};
  randomKaroSwitch.columns = options.columns;
  randomKaroSwitch.visible = options.visible;
  randomKaroSwitch.spacing = options.spacing;
  randomKaroSwitch.zoomSpeed = options.zoomSpeed;
  randomKaroSwitch.children = options.children;
  randomKaroSwitch._zoomOutComponents = [];

  var group = (0, _rectangle_group2.default)({ 'children': randomKaroSwitch.children, 'columns': randomKaroSwitch.columns, 'spacing': randomKaroSwitch.spacing });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = group.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      randomKaroSwitch._zoomOutComponents.push((0, _zoom_out2.default)({ subject: child, speed: randomKaroSwitch.zoomSpeed }));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  randomKaroSwitch.view = group.view;

  randomKaroSwitch.zoomOut = function () {
    var randomNumbers = [];
    for (var i = 0; i < this.children.length; i++) {
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for (var j = 0; j < this.children.length; j++) {
      if (j < this.visible) {
        this._zoomOutComponents[randomNumbers[j]].start();
      }
    }
  };

  function shuffle(a) {
    for (var i = a.length; i; i--) {
      var j = Math.floor(Math.random() * i);
      var _ref = [a[j], a[i - 1]];
      a[i - 1] = _ref[0];
      a[j] = _ref[1];
    }
  }

  return randomKaroSwitch;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(40);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _zoom_out = require(17);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"40":40,"68":68}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_square_switch = require(13);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _random_square_switch_interval = require(14);

var _random_square_switch_interval2 = _interopRequireDefault(_random_square_switch_interval);

var _random_square_zoom_out = require(15);

var _random_square_zoom_out2 = _interopRequireDefault(_random_square_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomSquareSwitch: _random_square_switch2.default,
  randomSquareSwitchInterval: _random_square_switch_interval2.default,
  randomSquareZoomOut: _random_square_zoom_out2.default
};


},{"13":13,"14":14,"15":15}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);
  (0, _check_parameter2.default)(options, 'speed', true);

  options.numberOfIntervals = 1;
  options.limit = 0;
  options.rising = true;
  options.centerIfPossible = true;

  var zoomOut = {};
  zoomOut._zoomer = (0, _linear_pulsar2.default)(options);

  zoomOut.start = function () {
    this._zoomer.start();
  };

  zoomOut.stop = function () {
    this._zoomer.stop();
  };

  return zoomOut;
};

var _linear_pulsar = require(81);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"81":81}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoom_out = require(17);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  zoomOut: _zoom_out2.default
};


},{"17":17}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function () {

      /* Private vars */
      var component = (0, _abstract_component2.default)();

      /* public methods */
      component.view = new createjs.Shape();
      component.scale = 1;

      return component;
};

var _abstract_component = require(1);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"1":1}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      /* Parameters */
      (0, _check_parameter2.default)(options, 'circleShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      /* Private vars */
      var circle = (0, _abstract_shape2.default)();

      /* public properties */
      circle.circleShape = options.circleShape;
      circle.color = options.color;

      /* public methods */
      circle.draw = function () {
            this.view.graphics.clear();
            this.view.graphics.beginFill(this.color).drawCircle(0, 0, this.circleShape.radius * this.scale);
      };

      circle.getWidth = function () {
            return this.circleShape.radius * this.scale * 2;
      };

      circle.getHeight = function () {
            return this.circleShape.radius * this.scale * 2;
      };

      /* init */
      circle.draw();
      return circle;
};

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"68":68}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};


},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  var custom = (0, _abstract_shape2.default)();
  (0, _check_parameter2.default)(options, 'customShape', true);
  (0, _check_parameter2.default)(options, 'color', false, '#000');
  custom.customShape = options.customShape;
  custom.color = options.color;

  custom.draw = function () {
    this.view.graphics.clear();
    this.view.graphics.beginFill(this.color).beginStroke('#00F').moveTo(0, 0);
    var current = {
      x: 0,
      y: 0
    };
    var i = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.customShape.path.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var path = _step.value;

        _path_drawer2.default[path.type](this.view.graphics, path, current);
        current = (0, _add_up_points2.default)(current, path.getEdgePoint());
        i++;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  custom.draw();
  return custom;
};

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(23);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(53);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"23":23,"53":53,"68":68}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(55);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/*eslint-disable camelcase*/
function pathDrawer() {}

pathDrawer.line = function (graphics, path, current) {
  graphics.lineTo(current.x + path.getEdgePoint().x, current.y + path.getEdgePoint().y);
};

pathDrawer.arc = function (graphics, path, current) {
  graphics.moveTo(current.x + path.start.x, current.y + path.start.y);
  if (path.degrees < 0) {
    graphics.arc(path.start.x, path.start.y - path.radius, path.radius, (0, _angle_to_radians2.default)(90), (0, _angle_to_radians2.default)(90 + path.degrees), true);
  } else {
    graphics.arc(path.start.x, path.start.y + path.radius, path.radius, (0, _angle_to_radians2.default)(-90), (0, _angle_to_radians2.default)(path.degrees - 90));
  }
};

pathDrawer.sine_wave = function (graphics, path, current) {
  graphics.moveTo(current.x + path.start.x, current.y + path.start.y);
  for (var x = 0; x < path.getLength(); x += 5) {
    var point = path.getPoint(x / path.getLength());
    graphics.lineTo(point.x, point.y);
  }
};

pathDrawer.bezier_curve = function (graphics, path, current) {
  graphics.moveTo(current.x + path.start.x, current.y + path.start.y);
  if (path.cpoint2) {
    graphics.bezierCurveTo(path.cpoint1.x, path.cpoint1.y, path.cpoint2.x, path.cpoint2.y, path.end.x, path.end.y);
  } else {
    graphics.quadraticCurveTo(path.cpoint1.x, path.cpoint1.y, path.end.x, path.end.y);
  }
};

exports.default = pathDrawer;


},{"55":55}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'source', true);

  var image = (0, _abstract_shape2.default)();
  image.view = new createjs.Bitmap(options.source);

  image.draw = function () {
    this.view.scaleX = this.scale;
    this.view.scaleY = this.scale;
  };

  image.draw();
  return image;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"68":68}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {
      var line = (0, _abstract_shape2.default)();

      (0, _check_parameter2.default)(options, 'linePath', true);
      (0, _check_parameter2.default)(options, 'thickness', false, 1);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      line.path = options.linePath;
      line.color = options.color;
      line.thickness = options.thickness;

      line.draw = function () {
            this.view.graphics.clear().beginStroke(this.color).setStrokeStyle(this.thickness * this.scale).moveTo(this.path.start.x * this.scale, this.path.start.y * this.scale).lineTo(this.path.end.x * this.scale, this.path.end.y * this.scale);
      };

      line.getWidth = function () {
            return (this.path.end.x - this.path.start.x) * this.scale;
      };

      line.getHeight = function () {
            return (this.path.end.y - this.path.start.y) * this.scale;
      };

      line.draw();
      return line;
};

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"68":68}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (id) {
    var stage = new createjs.Stage(id);

    var container = {};

    container.add = function (child) {
        stage.addChild(child.view);
    };

    container.remove = function (child) {
        stage.removeChild(child.view);
    };

    container.removeAll = function () {
        stage.removeAllChildren();
    };

    container.stage = stage;

    return container;
};


},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {
      if (!options) {
            options = {};
      }

      (0, _check_parameter2.default)(options, 'path', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');
      (0, _check_parameter2.default)(options, 'width', false, 1);

      var custom = (0, _abstract_shape2.default)();
      custom.completePath = options.path;
      custom.color = options.color;
      custom.width = options.width;

      custom.draw = function () {
            this.view.graphics.clear();
            this.view.graphics.beginStroke(this.color).setStrokeStyle(this.width).moveTo(0, 0);
            var current = { x: 0, y: 0 };
            var i = 1;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                  for (var _iterator = this.completePath.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var path = _step.value;

                        _path_drawer2.default[path.type](this.view.graphics, path, current);
                        current = (0, _add_up_points2.default)(current, path.getEdgePoint());
                        i++;
                  }
            } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
            } finally {
                  try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                        }
                  } finally {
                        if (_didIteratorError) {
                              throw _iteratorError;
                        }
                  }
            }
      };

      custom.draw();
      return custom;
};

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(23);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(53);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"23":23,"53":53,"68":68}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'rectangleShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var rect = (0, _abstract_shape2.default)();
      rect.width = options.rectangleShape.width;
      rect.height = options.rectangleShape.height;
      rect.color = options.color;

      rect.draw = function () {
            this.view.graphics.clear();
            this.view.graphics.beginFill(this.color).drawRect(0, 0, this.width * this.scale, this.height * this.scale);
      };

      rect.getWidth = function () {
            return this.width * this.scale;
      };

      rect.getHeight = function () {
            return this.height * this.scale;
      };

      rect.draw();
      return rect;
};

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"68":68}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}

function squareConstructor(options) {

      (0, _check_parameter2.default)(options, 'squareShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var square = (0, _abstract_shape2.default)();
      square.squareShape = options.squareShape;
      square.color = options.color;

      square.draw = function () {
            this.view.graphics.clear();
            this.view.graphics.beginFill(this.color).drawRect(0, 0, this.squareShape.sidelength * this.scale, this.squareShape.sidelength * this.scale);
      };

      square.getWidth = function () {
            return this.squareShape.sidelength * this.scale;
      };

      square.getHeight = function () {
            return this.squareShape.sidelength * this.scale;
      };

      square.draw();
      return square;
}

exports.default = squareConstructor;


},{"19":19,"68":68}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      /* Parameters */
      (0, _check_parameter2.default)(options, 'source', true);
      // If the source is a string, convert it to a video
      handleVideoSource();

      /* private vars */
      var video = (0, _abstract_shape2.default)();

      /* public properties */
      video.view = new createjs.Bitmap(options.source);
      video.source = options.source;
      /* public methods */
      video.draw = function () {
            this.view.scaleX = video.scale;
            this.view.scaleY = video.scale;
      };

      video.play = function () {
            this.source.play();
      };

      video.stop = function () {
            this.source.pause();
            this.source.currentTime = 0;
      };

      video.pause = function () {
            this.source.pause();
      };

      /* private functions */
      function handleVideoSource() {
            if (typeof options.source === 'string') {
                  var source = document.createElement('source');
                  source.setAttribute('src', options.source);
                  var videoElement = document.createElement('video');
                  videoElement.appendChild(source);
                  options.source = videoElement;
            }
      }

      /* init */
      video.draw();
      return video;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"19":19,"68":68}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(21);

var _container2 = _interopRequireDefault(_container);

var _square = require(29);

var _square2 = _interopRequireDefault(_square);

var _circle = require(20);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(28);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(26);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(25);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(22);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(24);

var _image2 = _interopRequireDefault(_image);

var _video = require(30);

var _video2 = _interopRequireDefault(_video);

var _path = require(27);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    container: _container2.default,
    square: _square2.default,
    circle: _circle2.default,
    rectangle: _rectangle2.default,
    line: _line2.default,
    customObject: _custom_object2.default,
    mainContainer: _main_container2.default,
    image: _image2.default,
    video: _video2.default,
    path: _path2.default
};


},{"20":20,"21":21,"22":22,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var filter = (0, _abstract_component2.default)();

    filter.view = _factory2.default.container();

    /* Public functions */
    function start() {
        _loop2.default.addAnimation(this.handle);
    }

    function stop() {
        _loop2.default.removeAnimation(this.handle);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
};

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_component = require(1);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"1":1,"31":31,"71":71}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter) {

    /* Public functions */
    function start() {
        _loop2.default.addAnimation(this.handle);
    }

    function stop() {
        _loop2.default.removeAnimation(this.handle);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
};

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children) {
    var abstractGroup = (0, _abstract_filter2.default)();

    abstractGroup.children = children ? children : [];

    abstractGroup.add = function (child) {
        this.children.push(child);
        this.refresh();
    };

    abstractGroup.remove = function (child) {
        this.children.splice(this.children.indexOf(child), 1);
        this.refresh();
    };

    return abstractGroup;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'children', true);
    (0, _check_parameter2.default)(options, 'width', false, false);
    (0, _check_parameter2.default)(options, 'height', false, false);

    var centerGroup = (0, _abstract_group2.default)(options.children);
    centerGroup.width = options.width;
    centerGroup.height = options.height;

    centerGroup.refresh = function () {
        this.view.removeAllChildren();
        for (var i = 0; i < this.children.length; i++) {
            var container = _factory2.default.container();
            container.addChild(this.children[i].view);

            if (this.width) {
                container.x = container.x = (i + 1) * this.width / (this.children.length + 1);
            }

            if (this.height) {
                container.y = container.x = (i + 1) * this.height / (this.children.length + 1);
            }

            this.view.addChild(container);
        }
    };

    centerGroup.refresh();
    return centerGroup;
};

var _abstract_group = require(34);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"31":31,"34":34,"68":68}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'children', true);
    (0, _check_parameter2.default)(options, 'radius', false, 10);
    var circleGroup = (0, _abstract_group2.default)(options.children);
    circleGroup.radius = options.radius;

    var angle = 360 / circleGroup.children.length;
    for (var i = 0; i < circleGroup.children.length; i++) {
        var container = _factory2.default.container();
        var innerContainer = _factory2.default.container();
        container.rotation = angle * i;
        innerContainer.y = -circleGroup.radius;
        innerContainer.addChild(circleGroup.children[i].view);
        container.addChild(innerContainer);
        circleGroup.view.addChild(container);
    }

    return circleGroup;
};

var _abstract_group = require(34);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"31":31,"34":34,"68":68}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(40);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(39);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(36);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(41);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(38);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(35);

var _center_group2 = _interopRequireDefault(_center_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangleGroup: _rectangle_group2.default,
  randomRectangleGroup: _random_rectangle_group2.default,
  circleGroup: _circle_group2.default,
  spiralCircleGroup: _spiral_circle_group2.default,
  randomCircleGroup: _random_circle_group2.default,
  centerGroup: _center_group2.default
};


},{"35":35,"36":36,"38":38,"39":39,"40":40,"41":41}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'children', true);
    (0, _check_parameter2.default)(options, 'radius', false, 10);
    (0, _check_parameter2.default)(options, 'randomRange', false, 10);
    var circleGroup = (0, _abstract_group2.default)(options.children);
    circleGroup.radius = options.radius;
    circleGroup.randomRange = options.randomRange;

    var angle = 360 / circleGroup.children.length;
    for (var i = 0; i < circleGroup.children.length; i++) {
        var container = _factory2.default.container();
        var innerContainer = _factory2.default.container();
        container.rotation = angle * i;
        innerContainer.y = -circleGroup.radius + Math.floor(Math.random() * circleGroup.randomRange - circleGroup.randomRange * 0.5);
        innerContainer.addChild(circleGroup.children[i].view);
        container.addChild(innerContainer);
        circleGroup.view.addChild(container);
    }

    return circleGroup;
};

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(34);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"31":31,"34":34,"68":68}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'children', true);
    (0, _check_parameter2.default)(options, 'width', false, 10);
    (0, _check_parameter2.default)(options, 'height', false, 10);

    var rectangleGroup = (0, _abstract_group2.default)(options.children);
    rectangleGroup.width = options.width;
    rectangleGroup.height = options.height;

    rectangleGroup.refresh = function () {
        this.view.removeAllChildren();
        for (var i = 0; i < this.children.length; i++) {
            var container = _factory2.default.container();
            container.addChild(this.children[i].view);
            container.x = Math.floor(this.width * Math.random());
            container.y = Math.floor(this.height * Math.random());
            this.view.addChild(container);
        }
    };

    rectangleGroup.refresh();
    return rectangleGroup;
};

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(34);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"31":31,"34":34,"68":68}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'children', true);
    (0, _check_parameter2.default)(options, 'columns', false, 3);
    (0, _check_parameter2.default)(options, 'spacing', false, 10);

    var rectangleGroup = (0, _abstract_group2.default)(options.children);

    rectangleGroup.columns = options.columns;
    rectangleGroup.spacing = options.spacing;

    for (var i = 0; i < rectangleGroup.children.length; i++) {
        var container = _factory2.default.container();
        container.addChild(rectangleGroup.children[i].view);
        container.x = i % rectangleGroup.columns * rectangleGroup.spacing;
        container.y = Math.floor(i / rectangleGroup.columns) * rectangleGroup.spacing;
        rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
};

var _abstract_group = require(34);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"31":31,"34":34,"68":68}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'children', true);
  (0, _check_parameter2.default)(options, 'startRadius', false, 10);
  (0, _check_parameter2.default)(options, 'endRadius', false, 1);
  (0, _check_parameter2.default)(options, 'rounds', false, 1);

  var spiralCircleGroup = (0, _abstract_group2.default)(options.children);
  spiralCircleGroup.startRadius = options.startRadius;
  spiralCircleGroup.endRadius = options.endRadius;
  spiralCircleGroup.rounds = options.rounds;

  var angle = 360 * spiralCircleGroup.rounds / spiralCircleGroup.children.length;
  var radiusIncreaseAmount = (spiralCircleGroup.endRadius - spiralCircleGroup.startRadius) / spiralCircleGroup.children.length;
  for (var i = 0; i < spiralCircleGroup.children.length; i++) {
    var container = _factory2.default.container();
    var innerContainer = _factory2.default.container();
    container.rotation = angle * i;
    innerContainer.y = -(spiralCircleGroup.startRadius + radiusIncreaseAmount * i);
    innerContainer.addChild(spiralCircleGroup.children[i].view);
    container.addChild(innerContainer);
    spiralCircleGroup.view.addChild(container);
  }

  return spiralCircleGroup;
};

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(34);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"31":31,"34":34,"68":68}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter) {

    /* Public functions */
    function start() {
        this.modificator.start();
    }

    function stop() {
        this.modificator.stop();
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
};


},{}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'width', true);
    (0, _check_parameter2.default)(options, 'height', true);

    /* Private vars */
    var centerFilter = (0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options);

    /* public vars */
    centerFilter.width = options.width;
    centerFilter.height = options.height;

    /* Callbacks */
    centerFilter.onPropertyChange = function () {
        if (this.getChild().getWidth) {
            this.view.x = this.width / 2 - this.getChild().getWidth() / 2;
        }
        if (this.getChild().getHeight) {
            this.view.y = this.height / 2 - this.getChild().getHeight() / 2;
        }
    };

    centerFilter.onPropertyChange();
    /* return */
    return centerFilter;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(51);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"51":51,"68":68}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _centralizer = require(43);

var _centralizer2 = _interopRequireDefault(_centralizer);

var _pathMover = require(45);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _linear = require(46);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(47);

var _linear_shake2 = _interopRequireDefault(_linear_shake);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  center: {
    centralizer: _centralizer2.default
  },
  path: {
    pathMover: _pathMover2.default
  },
  linear: {
    linear: _linear2.default,
    linearShake: _linear_shake2.default
  }
};


},{"43":43,"45":45,"46":46,"47":47}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'path', true);

  var pathMover = (0, _transition_filter2.default)((0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options), options);
  pathMover.path = options.path;

  /* Public functions */
  pathMover.handle = function (current) {
    var point = this.path.getPoint(current);
    this.view.x = point.x;
    this.view.y = point.y;
  };

  return pathMover;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_filter = require(52);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

var _single_child_filter = require(51);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"51":51,"52":52,"68":68}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Private vars */
    var linearP2PMover = (0, _single_child_filter2.default)((0, _modificator_filter2.default)((0, _abstract_filter2.default)(options)), options);

    options.subject = linearP2PMover.view;
    linearP2PMover.modificator = (0, _line_mover2.default)(options);

    return linearP2PMover;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(42);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(51);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_mover = require(77);

var _line_mover2 = _interopRequireDefault(_line_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"42":42,"51":51,"77":77}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Private vars */
    var linearP2PMover = (0, _single_child_filter2.default)((0, _modificator_filter2.default)((0, _abstract_filter2.default)(options)), options);

    options.subject = linearP2PMover.view;
    linearP2PMover.modificator = (0, _line_shake_mover2.default)(options);

    return linearP2PMover;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(42);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(51);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_shake_mover = require(78);

var _line_shake_mover2 = _interopRequireDefault(_line_shake_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"42":42,"51":51,"78":78}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    var fader = (0, _transition_filter2.default)((0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options), options);

    fader.handle = function (current) {
        this.view.alpha = current;
    };

    return fader;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(51);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _transition_filter = require(52);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"51":51,"52":52}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    var flasher = (0, _animation_filter2.default)((0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options), options);

    flasher.handle = function () {
        console.log(this);
        this.view.visible = Math.random() > 0.5;
    };

    return flasher;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(51);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _animation_filter = require(33);

var _animation_filter2 = _interopRequireDefault(_animation_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"33":33,"51":51}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'child', true);
  (0, _check_parameter2.default)(options, 'speed', false, 1);
  var linearRotator = (0, _abstract_filter2.default)();
  linearRotator.speed = options.speed;
  linearRotator.view.addChild(options.child.view);

  function handle(event) {
    this.view.rotation = this.view.rotation + this.speed * (event.delta / 1000);
  }

  linearRotator.handle = handle;

  return linearRotator;
};

var _abstract_filter = require(32);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"68":68}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter, options) {
    var _this = this;

    /* Parameters */
    (0, _check_parameter2.default)(options, 'child', true);

    /* private vars */
    filter._child = options.child;

    /* callbacks */
    filter.__onPropertyChange = function () {
        if (_this.onPropertyChange) {
            _this.onPropertyChange();
        }
        _this.sendEvent('property_change');
    };

    /* methods */
    filter.setChild = function (newChild) {
        if (this._child.removeEventListener) {
            this._child.removeEventListener('property_change', this.__onPropertyChange);
        }
        this._child = newChild;
        if (this._child.addEventListener) {
            this._child.addEventListener('property_change', this.__onPropertyChange);
        }
        this.view.addChild(this._child.view);
    };

    filter.getChild = function () {
        return this._child;
    };

    /* init */
    filter.setChild(options.child);
    return filter;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'interval', true);

    /* private vars */
    filter._filterTransition = (0, _transition_loop2.default)(options.interval, 0.5);

    /* Public methods */
    filter.start = function () {
        this._filterTransition.start(this.handle);
    };

    filter.stop = function () {
        this._filterTransition.stop();
    };

    return filter;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"91":91}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point1, point2) {
  var point = {};
  point.x = point1.x + point2.x;
  point.y = point1.y + point2.y;
  return point;
};


},{}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vector1, vector2) {
  if (vector1.length !== vector2.length) {
    throw 'Cannot calculate distance of vectors with different numbers of dimensions';
  }
  var distance = 0;
  for (var i = 0; i < vector1.length; i++) {
    distance += Math.pow(vector1[i] - vector2[i], 2);
  }
  return Math.sqrt(distance);
};


},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};


},{}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(55);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"55":55}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(55);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function arcConstructor(options) {

  // Parameters
  (0, _check_parameter2.default)(options, 'start', false, { x: 0, y: 0 });
  (0, _check_parameter2.default)(options, 'degrees', true);
  (0, _check_parameter2.default)(options, 'radius', true);

  // private vars
  var arc = {};

  arc.start = options.start;
  arc.degrees = options.degrees;
  arc.radius = options.radius;
  arc.type = 'arc';

  // public functions
  arc.getEdgePoint = function () {
    return this.getPoint(1);
  };

  arc.getLength = function () {
    return Math.abs(2 * Math.PI * this.radius * (this.degrees / 360));
  };

  arc.getPoint = function (progress) {
    var origin = { x: this.start.x, y: this.start.y };
    var partOfDegrees = this.degrees * progress;

    if (this.degrees < 0) {
      return {
        x: origin.x + this.radius * Math.sin((0, _angle_to_radians2.default)(-partOfDegrees)),
        y: origin.y - this.radius + this.radius * Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
      };
    }

    return {
      x: origin.x + this.radius * Math.sin((0, _angle_to_radians2.default)(partOfDegrees)),
      y: origin.y + this.radius + this.radius * -Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
    };
  };

  arc.subPaths = [arc];

  arc.getAngle = function (progress) {
    return (0, _angle_to_radians2.default)(this.degrees * progress);
  };

  arc.getPartPath = function (progress) {
    var partOfDegrees = this.degrees * progress;
    return arcConstructor({ start: this.start, degrees: partOfDegrees, radius: this.radius });
  };

  return arc;
}


},{"55":55,"68":68}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'start', false, { x: 0, y: 0 });
  (0, _check_parameter2.default)(options, 'end', true);
  (0, _check_parameter2.default)(options, 'cpoint1', true);
  (0, _check_parameter2.default)(options, 'cpoint2', false);

  var bezierCurve = {};
  bezierCurve.start = options.start;
  bezierCurve.end = options.end;
  bezierCurve.cpoint1 = options.cpoint1;
  bezierCurve.cpoint2 = options.cpoint2;
  bezierCurve.type = 'bezier_curve';

  if (bezierCurve.cpoint2) {
    bezierCurve.internalBezier = new _bezierJs2.default(bezierCurve.start, bezierCurve.cpoint1, bezierCurve.cpoint2, bezierCurve.end);
  } else {
    bezierCurve.internalBezier = new _bezierJs2.default(bezierCurve.start, bezierCurve.cpoint1, bezierCurve.end);
  }

  bezierCurve.subPaths = [bezierCurve];

  bezierCurve.getEdgePoint = function () {
    return this.end;
  };

  bezierCurve.getLength = function () {
    return this.internalBezier.length();
  };

  bezierCurve.getPoint = function (progress) {
    return this.internalBezier.get(progress);
  };

  //TODO Add get part path function

  return bezierCurve;
};

var _bezierJs = require(93);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"93":93}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(67);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(54);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function lineConstructor(options) {

  (0, _check_parameter2.default)(options, 'start', false, { x: 0, y: 0 });
  (0, _check_parameter2.default)(options, 'end', true);

  var line = {};
  line.start = options.start;
  line.end = options.end;
  line.type = 'line';

  line.getEdgePoint = function () {
    return this.end;
  };

  line.getLength = function () {
    return (0, _distance2.default)((0, _to_vector2.default)(this.start), (0, _to_vector2.default)(this.end));
  };

  line.getPoint = function (progress) {
    return {
      x: this.start.x + (this.end.x - this.start.x) * progress,
      y: this.start.y + (this.end.y - this.start.y) * progress
    };
  };

  line.getPartPath = function (progress) {
    var newEnd = { x: this.end.x * progress, y: this.end.y * progress };
    var pathPart = lineConstructor({ start: this.start, end: newEnd });
    return pathPart;
  };

  return line;
}


},{"54":54,"67":67,"68":68}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(53);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function pathConstructor() {

  var path = {};

  path.subPaths = [];

  path.getEdgePoints = function () {
    var edgePoints = [];
    edgePoints.push({ x: 0, y: 0 });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var subPath = _step.value;

        edgePoints.push((0, _add_up_points2.default)(edgePoints[edgePoints.length - 1], subPath.getEdgePoint()));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return edgePoints;
  };

  path.getStartPointOf = function (subPath) {
    var startPoint = { x: 0, y: 0 };

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.subPaths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var currentPath = _step2.value;

        if (currentPath === subPath) {
          return startPoint;
        } else {
          startPoint = (0, _add_up_points2.default)(startPoint, currentPath.getEdgePoint());
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  path.getPoint = function (progress) {
    var lengthPoint = progress * this.getLength();
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = this.subPaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var subPath = _step3.value;

        if (lengthPoint > subPath.getLength()) {
          lengthPoint -= subPath.getLength();
        } else {
          return (0, _add_up_points2.default)(subPath.getPoint(lengthPoint / subPath.getLength()), this.getStartPointOf(subPath));
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  };

  path.getLength = function () {
    var length = 0;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = this.subPaths[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var subPath = _step4.value;

        length += subPath.getLength();
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return length;
  };

  path.getPartPath = function (progress) {
    var newSubPaths = [];
    var lengthPoint = progress * this.getLength();
    var subPathsRetrieved = false;
    var currentPath = 0;

    while (!subPathsRetrieved) {
      if (lengthPoint > this.subPaths[currentPath].getLength()) {
        lengthPoint -= this.subPaths[currentPath].getLength();
        newSubPaths.push(this.subPaths[currentPath].getPartPath(1));
        currentPath = currentPath + 1;
      } else {
        newSubPaths.push(this.subPaths[currentPath].getPartPath(lengthPoint / this.subPaths[currentPath].getLength()));
        subPathsRetrieved = true;
      }
    }

    var partPath = pathConstructor();
    partPath.subPaths = newSubPaths;
    return partPath;
  };

  return path;
}


},{"53":53}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(57);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(59);

var _line2 = _interopRequireDefault(_line);

var _path = require(60);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(58);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  arc: _arc2.default,
  line: _line2.default,
  path: _path2.default,
  bezierCurve: _bezier_curve2.default
};


},{"57":57,"58":58,"59":59,"60":60}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (point, angle) {
    return {
        x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
        y: point.x * Math.sin(angle) + point.y * Math.cos(angle)
    };
};


},{}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'radius', true);

  var circle = {};
  circle.radius = options.radius;

  circle.path = (0, _path2.default)();
  circle.path.subPaths.push((0, _arc2.default)({ start: { x: 0, y: -circle.radius }, degrees: 360, radius: circle.radius }));

  return circle;
};

var _path = require(60);

var _path2 = _interopRequireDefault(_path);

var _arc = require(57);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"57":57,"60":60,"68":68}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'width', true);
  (0, _check_parameter2.default)(options, 'height', true);

  var rectangle = {};
  rectangle.width = options.width;
  rectangle.height = options.height;

  rectangle.path = (0, _path2.default)();
  rectangle.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: rectangle.width, y: 0 } }));
  rectangle.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: 0, y: rectangle.height } }));
  rectangle.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: -rectangle.width, y: 0 } }));
  rectangle.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: 0, y: -rectangle.height } }));

  return rectangle;
};

var _path = require(60);

var _path2 = _interopRequireDefault(_path);

var _line = require(59);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"60":60,"68":68}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(64);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(66);

var _square2 = _interopRequireDefault(_square);

var _circle = require(63);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"63":63,"64":64,"66":66}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'sidelength', true);

  var square = {};
  square.sidelength = options.sidelength;

  square.path = (0, _path2.default)();
  square.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: square.sidelength, y: 0 } }));
  square.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: 0, y: square.sidelength } }));
  square.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: -square.sidelength, y: 0 } }));
  square.path.subPaths.push((0, _line2.default)({ start: { x: 0, y: 0 }, end: { x: 0, y: -square.sidelength } }));

  return square;
};

var _path = require(60);

var _path2 = _interopRequireDefault(_path);

var _line = require(59);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"60":60,"68":68}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};


},{}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (parameterObject, option, required, defaultValue) {
  if (!required) {
    parameterObject[option] = parameterObject.hasOwnProperty(option) ? parameterObject[option] : defaultValue;
  } else {
    if (!parameterObject.hasOwnProperty(option)) {
      throw new Error('Missing required option:' + option);
    }
  }
};


},{}],69:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = function (originalObject, circular) {
    // First create an empty object with
    // same prototype of our original source

    var propertyIndex,
        descriptor,
        keys,
        current,
        nextSource,
        indexOf,
        copies = [{
        source: originalObject,
        target: Object.create(Object.getPrototypeOf(originalObject))
    }],
        cloneObject = copies[0].target,
        sourceReferences = [originalObject],
        targetReferences = [cloneObject];

    // First in, first out
    /* eslint-disable */
    while (current = copies.shift()) {
        /* eslint-enable */
        keys = Object.getOwnPropertyNames(current.source);

        for (propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            // Save the source's descriptor
            descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);

            if (!descriptor.value || _typeof(descriptor.value) !== 'object') {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            // CUSTOM: We don't neet to deep copy objects, which got a clone method
            if (typeof descriptor.value.clone !== 'undefined') {
                descriptor.value = descriptor.value.clone(true);
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            nextSource = descriptor.value;

            descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));

            if (circular) {
                indexOf = sourceReferences.indexOf(nextSource);

                if (indexOf !== -1) {
                    // The source is already referenced, just assign reference
                    descriptor.value = targetReferences[indexOf];
                    Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                    continue;
                }

                sourceReferences.push(nextSource);
                targetReferences.push(descriptor.value);
            }

            Object.defineProperty(current.target, keys[propertyIndex], descriptor);

            copies.push({ source: nextSource, target: descriptor.value });
        }
    }

    return cloneObject;
};


},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element, property, value, doNotChain) {
  if (!doNotChain) {
    if (element.hasOwnProperty('setProp')) {
      return element.setProp(property, value);
    }
  }

  if (element.hasOwnProperty(property)) {
    element[property] = value;
    if (element.sendEvent) {
      element.sendEvent('property_change');
    }
  } else {
    console.log(element);
    throw new Error('Cannot set property of object. Object hasn\'t the property: ' + property);
  }
};


},{}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addAnimation: function addAnimation(handle) {
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener('tick', handle);
  },
  removeAnimation: function removeAnimation(handle) {
    createjs.Ticker.removeEventListener('tick', handle);
  }
};


},{}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(49);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(48);

var _fader2 = _interopRequireDefault(_fader);

var _group = require(37);

var _group2 = _interopRequireDefault(_group);

var _mover = require(44);

var _mover2 = _interopRequireDefault(_mover);

var _linear_rotator = require(50);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _randomColor = require(108);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(65);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(61);

var _paths2 = _interopRequireDefault(_paths);

var _compositions = require(2);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(87);

var _proxies2 = _interopRequireDefault(_proxies);

var _interval = require(89);

var _interval2 = _interopRequireDefault(_interval);

var _modificators = require(76);

var _modificators2 = _interopRequireDefault(_modificators);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//TODO Organize imports

function create(canvasId) {
  var mainContainer = _factory2.default.mainContainer(canvasId);
  _loop2.default.addAnimation(mainContainer.stage);
  return {
    version: '0.0.1',
    mainContainer: mainContainer,
    factory: _factory2.default,
    loop: _loop2.default,
    interval: _interval2.default,
    utils: {
      randomColor: _randomColor2.default
    },
    geometry: {
      shapes: _shapes2.default,
      paths: _paths2.default
    },
    filters: {
      opacity: {
        flasher: _flasher2.default,
        fader: _fader2.default
      },
      mover: _mover2.default,
      group: _group2.default,
      rotator: {
        linearRotator: _linear_rotator2.default
      }
    },
    modificators: _modificators2.default,
    compositions: _compositions2.default,
    proxies: _proxies2.default
  };
}


},{"108":108,"2":2,"31":31,"37":37,"44":44,"48":48,"49":49,"50":50,"61":61,"65":65,"71":71,"76":76,"87":87,"89":89}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    var modificator = {};

    (0, _check_parameter2.default)(options, 'subject', true);
    modificator.subject = options.subject;

    return modificator;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);
  (0, _check_parameter2.default)(options, 'speed', true);
  (0, _check_parameter2.default)(options, 'color1', true);
  (0, _check_parameter2.default)(options, 'color2', true);

  var colorFader = {};
  colorFader.subject = options.subject;
  colorFader.speed = options.speed;
  colorFader.color1 = (0, _color2.default)(options.color1);
  colorFader.color2 = (0, _color2.default)(options.color2);
  colorFader.currentColor = (0, _color2.default)(options.color1);
  colorFader.pulsar = (0, _transition_loop2.default)(colorFader.speed, 0.5);

  colorFader.colorRange = {
    r: colorFader.color2.red() - colorFader.color1.red(),
    g: colorFader.color2.green() - colorFader.color1.green(),
    b: colorFader.color2.blue() - colorFader.color1.blue()
  };

  colorFader.start = function () {
    this.pulsar.start(colorFader.handle);
  };

  colorFader.stop = function () {
    this.pulsar.stop();
  };

  colorFader.handle = function (current) {
    this.currentColor.red(this.color1.red() + current * this.colorRange.r);
    this.currentColor.green(this.color1.green() + current * this.colorRange.g);
    this.currentColor.blue(this.color1.blue() + current * this.colorRange.b);
    (0, _set_prop2.default)(this.subject, 'color', this.currentColor.rgbString());
    this.subject.draw();
  };

  return colorFader;
};

var _color = require(102);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(70);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"68":68,"70":70,"91":91}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);

  var randomColorChanger = {};
  randomColorChanger.subject = options.subject;

  randomColorChanger.start = function () {
    _loop2.default.addAnimation(this.handle);
  };

  randomColorChanger.stop = function () {
    _loop2.default.removeAnimation(this.handle);
  };

  randomColorChanger.handle = function () {
    (0, _set_prop2.default)(this.subject, 'color', (0, _randomColor2.default)());
    this.subject.draw();
  };

  return randomColorChanger;
};

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(108);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(70);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"108":108,"68":68,"70":70,"71":71}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_color_changer = require(75);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(74);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(81);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _random_arc_mover = require(79);

var _random_arc_mover2 = _interopRequireDefault(_random_arc_mover);

var _random_in_rect_mover = require(80);

var _random_in_rect_mover2 = _interopRequireDefault(_random_in_rect_mover);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  color: {
    randomColorChanger: _random_color_changer2.default,
    colorFader: _color_fader2.default
  },
  scale: {
    linearPulsar: _linear_pulsar2.default
  },
  position: {
    randomArcMover: _random_arc_mover2.default,
    randomInRectMover: _random_in_rect_mover2.default
  }
};


},{"74":74,"75":75,"79":79,"80":80,"81":81}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'goalPoint', true);
    (0, _check_parameter2.default)(options, 'startPoint', false, { x: 0, y: 0 });

    /* private vars */
    var p2PMover = (0, _transition_modificator2.default)((0, _abstract_modificator2.default)(options), options);

    /* Params and defaults */
    p2PMover.goalPoint = options.goalPoint;
    p2PMover.startPoint = options.startPoint;

    /* Public functions */
    p2PMover.handle = function (current) {
        var amountX = (this.goalPoint.x - this.startPoint.x) * current;
        var amountY = (this.goalPoint.y - this.startPoint.y) * current;

        this.subject.x = this.startPoint.x + amountX;
        this.subject.y = this.startPoint.y + amountY;
    };

    /* Init */
    return p2PMover;
};

var _abstract_modificator = require(73);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(82);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"73":73,"82":82}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'goalPoint', true);
    (0, _check_parameter2.default)(options, 'startPoint', false, { x: 0, y: 0 });
    (0, _check_parameter2.default)(options, 'shakeFactor', false, 1);

    /* private vars */
    var shakeMover = (0, _transition_modificator2.default)((0, _abstract_modificator2.default)(options), options);

    // Params and defaults
    shakeMover.shakeFactor = options.shakeFactor;
    shakeMover.goalPoint = options.goalPoint;
    shakeMover.startPoint = options.startPoint;

    /* Public functions */
    shakeMover.handle = function (current) {
        var randomFactor = Math.random() * this.shakeFactor - this.shakeFactor / 2;
        var distX = this.goalPoint.x - this.startPoint.x;
        var distY = this.goalPoint.y - this.startPoint.y;
        var randomX = randomFactor * distX / (distX + distY);
        var randomY = randomFactor * distY / (distX + distY);
        var amountX = distX * current + randomX;
        var amountY = distY * current + randomY;

        this.subject.x = this.startPoint.x + amountX;
        this.subject.y = this.startPoint.y + amountY;
    };

    return shakeMover;
};

var _abstract_modificator = require(73);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(82);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"73":73,"82":82}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);
  (0, _check_parameter2.default)(options, 'speed', true);

  var randomArcMover = {};

  // private vars
  randomArcMover._currentArc = null;
  randomArcMover._currentStartPosition = { x: 0, y: 0 };
  randomArcMover._currentMs = 0;
  randomArcMover._currentAngle = 0;
  randomArcMover.subject = options.subject;
  randomArcMover.speed = options.speed;

  // private functions
  randomArcMover._createRandomArc = function () {
    return (0, _arc2.default)({ degrees: Math.random() * 360 - 180, radius: 25 });
  };

  randomArcMover.start = function () {
    _loop2.default.addAnimation(this.handle);
  };

  randomArcMover.stop = function () {
    _loop2.default.removeAnimation(this.handle);

    // Reset everything
    this._currentArc = randomArcMover._createRandomArc();
    this._currentStartPosition = { x: 0, y: 0 };
    this._currentMs = 0;
    this._currentAngle = 0;
  };

  randomArcMover.handle = function (event) {
    var ms = event.delta;
    this._currentMs += ms;

    while (this._currentMs / 1000 * this.speed >= this.getLength()) {
      var rotatedPoint = (0, _rotate_point2.default)(this._currentArc.getPoint(1), this._currentAngle);
      this._currentStartPosition.x = this._currentStartPosition.x + rotatedPoint.x;
      this._currentStartPosition.y = this._currentStartPosition.y + rotatedPoint.y;
      this._currentMs = this._currentMs - this._currentArc.getLength() * 1000 / this.speed;
      this._currentAngle = this._currentAngle + this._currentArc.getAngle(1);
      this._currentArc = randomArcMover._createRandomArc();
    }
    var progress = this._currentMs / 1000 * this.speed / this._currentArc.getLength();

    var position = (0, _rotate_point2.default)(this._currentArc.getPoint(progress), this._currentAngle);
    (0, _set_prop2.default)(this.subject, 'x', this._currentStartPosition.x + position.x);
    (0, _set_prop2.default)(this.subject, 'y', this._currentStartPosition.y + position.y);
    //randomArcMover.subject.draw();
  };

  randomArcMover._currentArc = randomArcMover._createRandomArc();
  return randomArcMover;
};

var _arc = require(57);

var _arc2 = _interopRequireDefault(_arc);

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rotate_point = require(62);

var _rotate_point2 = _interopRequireDefault(_rotate_point);

var _set_prop = require(70);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"57":57,"62":62,"68":68,"70":70,"71":71}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  /* Parameters */
  (0, _check_parameter2.default)(options, 'speed', true);
  (0, _check_parameter2.default)(options, 'width', true);
  (0, _check_parameter2.default)(options, 'height', true);

  /* create object and set properties */
  var randomInRectMover = (0, _abstract_modificator2.default)(options);
  randomInRectMover.speed = options.speed;
  randomInRectMover.width = options.width;
  randomInRectMover.height = options.heigth;

  // callbacks
  randomInRectMover.__onCurrentGoalReached = function () {
    this._lineMover.stop();
    this._lineMover.startPoint.x = this._lineMover.goalPoint.x;
    this._lineMover.startPoint.y = this._lineMover.goalPoint.y;

    this._lineMover.goalPoint.x = Math.random() * this.width;
    this._lineMover.goalPoint.y = Math.random() * this.height;

    this._interval.ms = this._calculateIntervalTime();

    this._lineMover.start();
  };

  // Private vars
  randomInRectMover._interval = (0, _interval2.default)({ type: 'ms', ms: 1 });
  randomInRectMover._lineMover = (0, _line_mover2.default)({
    subject: randomInRectMover.subject,
    goalPoint: { x: 0, y: 0 },
    onFinishedInterval: randomInRectMover.__onCurrentGoalReached,
    interval: randomInRectMover._interval,
    steepness: 1
  });

  /* Public functions */
  randomInRectMover.start = function () {
    this.__onCurrentGoalReached();
  };

  randomInRectMover.stop = function () {
    this._lineMover.stop();
  };

  /* Private functions */
  randomInRectMover._calculateIntervalTime = function () {
    var dist = (0, _distance2.default)((0, _to_vector2.default)(this._lineMover.goalPoint), (0, _to_vector2.default)(this._lineMover.startPoint));
    return dist / this.speed * 1000;
  };

  return randomInRectMover;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line_mover = require(77);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(89);

var _interval2 = _interopRequireDefault(_interval);

var _abstract_modificator = require(73);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _to_vector = require(67);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(54);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"54":54,"67":67,"68":68,"73":73,"77":77,"89":89}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);
  (0, _check_parameter2.default)(options, 'speed', true);
  (0, _check_parameter2.default)(options, 'limit', true);
  (0, _check_parameter2.default)(options, 'numberOfIntervals', false);
  (0, _check_parameter2.default)(options, 'rising', false, true);
  (0, _check_parameter2.default)(options, 'centerIfPossible', false, true);

  var linearPulsar = {};
  linearPulsar.subject = options.subject;
  linearPulsar.speed = options.speed;
  linearPulsar.limit = options.limit;
  if (!options.rising) {
    linearPulsar.pulsar = (0, _transition_loop.pulsarTransition)(linearPulsar.speed, 0, options.numberOfIntervals);
  } else {
    linearPulsar.pulsar = (0, _transition_loop.risingTransition)(linearPulsar.speed, 0, options.numberOfIntervals);
  }

  linearPulsar.start = function () {
    this.pulsar.start(this.handle);
  };

  linearPulsar.stop = function () {
    this.pulsar.stop();
  };

  linearPulsar.handle = function (current) {
    (0, _set_prop2.default)(this.subject, 'scale', 1 + current * (this.limit - 1));
    this.subject.draw();
  };

  return linearPulsar;
};

var _transition_loop = require(91);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(70);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"70":70,"91":91}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (modificator, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'interval', true);
    (0, _check_parameter2.default)(options, 'steepness', false, 0.5);

    /* private vars */
    modificator.transition = (0, _transition_loop2.default)(options.interval, options.steepness, 0, 0, options.onFinishedInterval);

    /* Public methods */
    modificator.start = function () {
        this.transition.start(this.handle);
    };

    modificator.stop = function () {
        this.transition.stop();
    };

    return modificator;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(91);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"91":91}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var proxy = {};
  proxy.group = [];

  proxy.addElement = function (element) {
    this.group.push(element);
  };

  proxy.removeElement = function (element) {
    this.group.splice(this.group.indexOf(element), 1);
  };

  proxy.draw = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        element.draw();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  proxy._setPropOfElement = function (element, property, value) {
    (0, _set_prop2.default)(element, property, value, false);
  };

  return proxy;
};

var _set_prop = require(70);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"70":70}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var proxy = (0, _abstract_proxy2.default)();

  proxy.setProp = function (name, value) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;

        this._setPropOfElement(obj, name, value);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  return proxy;
};

var _abstract_proxy = require(83);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"83":83}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'shuffle', false, false);

  var proxy = (0, _abstract_proxy2.default)();
  proxy.currentElementIndex = 0;

  proxy.setProp = function (name, value) {
    if (this.shuffle && this.currentElementIndex === 0) {
      this.shuffleGroup();
    }
    this._setPropOfElement(this.group[this.currentElementIndex], name, value);

    this.currentElementIndex++;
    if (this.currentElementIndex >= this.group.length) {
      this.currentElementIndex = 0;
    }
  };

  proxy.shuffleGroup = function () {
    //TODO implement shuffle algorithm
  };

  return proxy;
};

var _abstract_proxy = require(83);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"83":83}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'interval', true);

  var proxy = (0, _abstract_proxy2.default)();
  proxy.interval = options.interval;
  proxy.timer = (0, _interval_timer2.default)(proxy.interval);

  proxy.setProp = function (name, value) {
    var p = (0, _increment_proxy2.default)({});
    p.group = this.group;
    var timer = this.timer;
    var changePropCallback = function changePropCallback() {
      p.setProp(name, value);
      p.draw();
      if (p.currentElementIndex === 0) {
        timer.removeListener(changePropCallback);
        p.group = null;
      }
    };
    this.timer.addListener(changePropCallback);
  };

  proxy.timer.start();
  return proxy;
};

var _interval_timer = require(90);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(85);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(83);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68,"83":83,"85":85,"90":90}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_proxy = require(84);

var _default_proxy2 = _interopRequireDefault(_default_proxy);

var _increment_proxy = require(85);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _interval_proxy = require(86);

var _interval_proxy2 = _interopRequireDefault(_interval_proxy);

var _random_proxy = require(88);

var _random_proxy2 = _interopRequireDefault(_random_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  defaultProxy: _default_proxy2.default,
  incrementProxy: _increment_proxy2.default,
  intervalProxy: _interval_proxy2.default,
  randomProxy: _random_proxy2.default
};


},{"84":84,"85":85,"86":86,"88":88}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var proxy = (0, _abstract_proxy2.default)();

  proxy.setProp = function (name, value) {
    var randomElementIndex = Math.floor(Math.random() * this.group.length);
    proxy._setPropOfElement(this.group[randomElementIndex], name, value);
  };

  return proxy;
};

var _abstract_proxy = require(83);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"83":83}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var interval = {};

  (0, _check_parameter2.default)(options, 'type', true);
  (0, _check_parameter2.default)(options, 'bpm', false, 0);
  (0, _check_parameter2.default)(options, 'ms', false, 0);
  (0, _check_parameter2.default)(options, 'divisor', false, 1);

  interval.type = options.type;
  interval.bpm = options.bpm;
  interval.ms = options.ms;
  interval.divisor = options.divisor;

  if (interval.bpm === 0 && interval.ms === 0) {
    throw 'Illegal state: BPM and MS cannot both be 0';
  }

  interval.generateHalfInterval = function () {
    var halfInterval = {};
    halfInterval.type = this.type;
    halfInterval.bpm = this.bpm;
    halfInterval.ms = this.ms;
    halfInterval.divisor = this.divisor * 2;

    return halfInterval;
  };

  interval.bisect = function () {
    this.divisor = this.divisor * 2;
  };

  interval.getMs = function () {
    if (this.type === 'ms') {
      return this.ms;
    } else {
      return 60000 / this.bpm;
    }
  };

  return interval;
};

var _check_parameter = require(68);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (interval) {
  var timer = {};
  timer.currentTime = 0;
  timer.interval = interval;
  timer.listeners = [];

  timer.handle = function (event) {
    this.currentTime += event.delta;

    while (this.currentTime > this.interval) {
      this._callListeners();
      this.currentTime -= this.interval;
    }
  };

  timer.addListener = function (listener) {
    this.listeners.push(listener);
  };

  timer.removeListener = function (listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  };

  timer.start = function () {
    _loop2.default.addAnimation(this.handle);
  };

  timer.stop = function () {
    _loop2.default.removeAnimation(this.handle);
  };

  timer._callListeners = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var listener = _step.value;

        listener();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  return timer;
};

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(71);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function transitionLoop(interval, steepness, current, numberOfIntervals, onFinishedInterval) {
  var pulsar = {};
  pulsar.interval = interval;
  pulsar.currentInterval = 0;
  pulsar.steepness = typeof steepness !== 'undefined' ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increase = true;
  pulsar.currentMseconds = current ? current * interval.getMs() : 0;
  pulsar.numberOfIntervals = numberOfIntervals ? numberOfIntervals : 0;
  pulsar.onFinishedInterval = onFinishedInterval;

  pulsar.start = function (callback) {
    this.callback = callback;
    this.currentInterval = 0;
    this.currentMseconds = current ? current * this.interval.getMs() : 0;
    _loop2.default.addAnimation(this.handle);
  };

  pulsar.stop = function () {
    _loop2.default.removeAnimation(this.handle);
    this.reset();
  };

  pulsar.reset = function () {
    this.current = 0;
    this.increase = true;
    this.currentMseconds = 0;
    this.currentInterval = 0;
  };

  pulsar.handle = function (event) {

    // First sum current ms
    this.currentMseconds = this.currentMseconds + event.delta;

    // store current current
    var lastCurrent = this.current;

    // calculate new current
    var newCurrent = this.calculateCurrent(this.currentMseconds);

    // check if interval is finished and set it to 1 if it was the last interval
    newCurrent = this._intervalPostProcessing(newCurrent);

    // calculate current value and compare it with last value
    var currentValue = this.calculateCurrentValue(newCurrent);
    this.increase = this.calculateCurrentValue(lastCurrent) < currentValue;

    if (this.callback) {
      this.callback(currentValue, event);
    }
  };

  pulsar.calculateCurrent = function (ms) {
    var relativeCurrent;
    if (this.interval.type === 'ms') {
      relativeCurrent = ms / this.interval.ms % 1;
    }
    if (this.interval.type === 'bpm') {
      relativeCurrent = ms * this.interval.bpm / 60000 % 1;
    }
    return relativeCurrent;
  };

  pulsar.calculateCurrentValue = function (currentToCalculate) {
    if (currentToCalculate <= this.steepness) {
      return currentToCalculate / this.steepness;
    } else {
      return 1 - (currentToCalculate - this.steepness) / (1 - this.steepness);
    }
  };

  pulsar.getRelativeCurrent = function (factor) {

    // First prepare the value which is passed to the calculateCurrent function:
    var factorInMs;
    if (this.interval.type === 'ms') {
      factorInMs = factor * this.interval.ms;
    }
    if (this.interval.type === 'bpm') {
      factorInMs = factor * (60000 / this.interval.bpm);
    }
    var msToCheck = factorInMs + this.currentMseconds;

    if (msToCheck < 0) {
      if (this.interval.type === 'ms') {
        msToCheck = msToCheck + this.interval.ms * Math.ceil(Math.abs(msToCheck) / this.interval.ms);
      }
      if (this.interval.type === 'bpm') {
        msToCheck = msToCheck + 60000 / this.interval.bpm * Math.ceil(Math.abs(msToCheck) / (60000 / this.interval.bpm));
      }
    }

    return this.calculateCurrentValue(this.calculateCurrent(msToCheck));
  };

  pulsar._intervalPostProcessing = function (tempCurrent) {
    var currentInterval;
    if (this.interval.type === 'ms') {
      currentInterval = Math.floor(this.currentMseconds / this.interval.ms);
    }
    if (this.interval.type === 'bpm') {
      currentInterval = Math.floor(this.currentMseconds * this.interval.bpm / 60000);
    }
    if (this.currentInterval < currentInterval) {
      this.currentInterval = currentInterval;
      return this._handleIntervalFinished(tempCurrent);
    }
    return tempCurrent;
  };

  pulsar._handleIntervalFinished = function (tempCurrent) {
    if (this.onFinishedInterval) {
      this.onFinishedInterval();
    }
    if (this.numberOfIntervals > 0 && this.currentInterval === this.numberOfIntervals) {
      this.stop();
      tempCurrent = 1;
    }
    return tempCurrent;
  };

  return pulsar;
}

function risingTransition(time, current, numberOfIntervals, onFinishedInterval) {
  return transitionLoop(time, 1, current, numberOfIntervals, onFinishedInterval);
}

function pulsarTransition(time, current, numberOfIntervals, onFinishedInterval) {
  return transitionLoop(time, 0, current, numberOfIntervals, onFinishedInterval);
}

exports.default = transitionLoop;


},{"71":71}],92:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],93:[function(require,module,exports){
module.exports = require(94);

},{"94":94}],94:[function(require,module,exports){
/**
  A javascript Bezier curve library by Pomax.

  Based on http://pomax.github.io/bezierinfo

  This code is MIT licensed.
**/
(function() {
  "use strict";

  // math-inlining.
  var abs = Math.abs,
      min = Math.min,
      max = Math.max,
      acos = Math.acos,
      sqrt = Math.sqrt,
      pi = Math.PI,
      // a zero coordinate, which is surprisingly useful
      ZERO = {x:0,y:0,z:0};

  // quite needed
  var utils = require(96);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(95);

  /**
   * Bezier curve constructor. The constructor argument can be one of three things:
   *
   * 1. array/4 of {x:..., y:..., z:...}, z optional
   * 2. numerical array/8 ordered x1,y1,x2,y2,x3,y3,x4,y4
   * 3. numerical array/12 ordered x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
   *
   */
  var Bezier = function(coords) {
    var args = (coords && coords.forEach) ? coords : [].slice.call(arguments);
    var coordlen = false;
    if(typeof args[0] === "object") {
      coordlen = args.length;
      var newargs = [];
      args.forEach(function(point) {
        ['x','y','z'].forEach(function(d) {
          if(typeof point[d] !== "undefined") {
            newargs.push(point[d]);
          }
        });
      });
      args = newargs;
    }
    var higher = false;
    var len = args.length;
    if (coordlen) {
      if(coordlen>4) {
        if (arguments.length !== 1) {
          throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        }
        higher = true;
      }
    } else {
      if(len!==6 && len!==8 && len!==9 && len!==12) {
        if (arguments.length !== 1) {
          throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        }
      }
    }
    var _3d = (!higher && (len === 9 || len === 12)) || (coords && coords[0] && typeof coords[0].z !== "undefined");
    this._3d = _3d;
    var points = [];
    for(var idx=0, step=(_3d ? 3 : 2); idx<len; idx+=step) {
      var point = {
        x: args[idx],
        y: args[idx+1]
      };
      if(_3d) { point.z = args[idx+2] };
      points.push(point);
    }
    this.order = points.length - 1;
    this.points = points;
    var dims = ['x','y'];
    if(_3d) dims.push('z');
    this.dims = dims;
    this.dimlen = dims.length;

    (function(curve) {
      var order = curve.order;
      var points = curve.points;
      var a = utils.align(points, {p1:points[0], p2:points[order]});
      for(var i=0; i<a.length; i++) {
        if(abs(a[i].y) > 0.0001) {
          curve._linear = false;
          return;
        }
      }
      curve._linear = true;
    }(this));

    this._t1 = 0;
    this._t2 = 1;
    this.update();
  };

  Bezier.fromSVG = function(svgString) {
    var list = svgString.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g).map(parseFloat);
    var relative = /[cq]/.test(svgString);
    if(!relative) return new Bezier(list);
    list = list.map(function(v,i) {
      return i < 2 ? v : v + list[i % 2];
    });
    return new Bezier(list);
  };

  function getABC(n,S,B,E,t) {
    if(typeof t === "undefined") { t = 0.5; }
    var u = utils.projectionratio(t,n),
        um = 1-u,
        C = {
          x: u*S.x + um*E.x,
          y: u*S.y + um*E.y
        },
        s = utils.abcratio(t,n),
        A = {
          x: B.x + (B.x-C.x)/s,
          y: B.y + (B.y-C.y)/s
        };
    return { A:A, B:B, C:C };
  }

  Bezier.quadraticFromPoints = function(p1,p2,p3, t) {
    if(typeof t === "undefined") { t = 0.5; }
    // shortcuts, although they're really dumb
    if(t===0) { return new Bezier(p2,p2,p3); }
    if(t===1) { return new Bezier(p1,p2,p2); }
    // real fitting.
    var abc = getABC(2,p1,p2,p3,t);
    return new Bezier(p1, abc.A, p3);
  };

  Bezier.cubicFromPoints = function(S,B,E, t,d1) {
    if(typeof t === "undefined") { t = 0.5; }
    var abc = getABC(3,S,B,E,t);
    if(typeof d1 === "undefined") { d1 = utils.dist(B,abc.C); }
    var d2 = d1 * (1-t)/t;

    var selen = utils.dist(S,E),
        lx = (E.x-S.x)/selen,
        ly = (E.y-S.y)/selen,
        bx1 = d1 * lx,
        by1 = d1 * ly,
        bx2 = d2 * lx,
        by2 = d2 * ly;
    // derivation of new hull coordinates
    var e1  = { x: B.x - bx1, y: B.y - by1 },
        e2  = { x: B.x + bx2, y: B.y + by2 },
        A = abc.A,
        v1  = { x: A.x + (e1.x-A.x)/(1-t), y: A.y + (e1.y-A.y)/(1-t) },
        v2  = { x: A.x + (e2.x-A.x)/(t), y: A.y + (e2.y-A.y)/(t) },
        nc1 = { x: S.x + (v1.x-S.x)/(t), y: S.y + (v1.y-S.y)/(t) },
        nc2 = { x: E.x + (v2.x-E.x)/(1-t), y: E.y + (v2.y-E.y)/(1-t) };
    // ...done
    return new Bezier(S,nc1,nc2,E);
  };

  var getUtils = function() {
    return utils;
  };

  Bezier.getUtils = getUtils;

  Bezier.prototype = {
    getUtils: getUtils,
    valueOf: function() {
      return this.toString();
    },
    toString: function() {
      return utils.pointsToString(this.points);
    },
    toSVG: function(relative) {
      if(this._3d) return false;
      var p = this.points,
          x = p[0].x,
          y = p[0].y,
          s = ["M", x, y, (this.order===2 ? "Q":"C")];
      for(var i=1, last=p.length; i<last; i++) {
        s.push(p[i].x);
        s.push(p[i].y);
      }
      return s.join(" ");
    },
    update: function() {
      // one-time compute derivative coordinates
      this.dpoints = [];
      for(var p=this.points, d=p.length, c=d-1; d>1; d--, c--) {
        var list = [];
        for(var j=0, dpt; j<c; j++) {
          dpt = {
            x: c * (p[j+1].x - p[j].x),
            y: c * (p[j+1].y - p[j].y)
          };
          if(this._3d) {
            dpt.z = c * (p[j+1].z - p[j].z);
          }
          list.push(dpt);
        }
        this.dpoints.push(list);
        p = list;
      };
      this.computedirection();
    },
    computedirection: function() {
      var points = this.points;
      var angle = utils.angle(points[0], points[this.order], points[1]);
      this.clockwise = angle > 0;
    },
    length: function() {
      return utils.length(this.derivative.bind(this));
    },
    _lut: [],
    getLUT: function(steps) {
      steps = steps || 100;
      if (this._lut.length === steps) { return this._lut; }
      this._lut = [];
      for(var t=0; t<=steps; t++) {
        this._lut.push(this.compute(t/steps));
      }
      return this._lut;
    },
    on: function(point, error) {
      error = error || 5;
      var lut = this.getLUT(), hits = [], c, t=0;
      for(var i=0; i<lut.length; i++) {
        c = lut[i];
        if (utils.dist(c,point) < error) {
          hits.push(c)
          t += i / lut.length;
        }
      }
      if(!hits.length) return false;
      return t /= hits.length;
    },
    project: function(point) {
      // step 1: coarse check
      var LUT = this.getLUT(), l = LUT.length-1,
          closest = utils.closest(LUT, point),
          mdist = closest.mdist,
          mpos = closest.mpos;
      if (mpos===0 || mpos===l) {
        var t = mpos/l, pt = this.compute(t);
        pt.t = t;
        pt.d = mdist;
        return pt;
      }

      // step 2: fine check
      var ft, t, p, d,
          t1 = (mpos-1)/l,
          t2 = (mpos+1)/l,
          step = 0.1/l;
      mdist += 1;
      for(t=t1,ft=t; t<t2+step; t+=step) {
        p = this.compute(t);
        d = utils.dist(point, p);
        if (d<mdist) {
          mdist = d;
          ft = t;
        }
      }
      p = this.compute(ft);
      p.t = ft;
      p.d = mdist;
      return p;
    },
    get: function(t) {
      return this.compute(t);
    },
    point: function(idx) {
      return this.points[idx];
    },
    compute: function(t) {
      // shortcuts
      if(t===0) { return this.points[0]; }
      if(t===1) { return this.points[this.order]; }

      var p = this.points;
      var mt = 1-t;

      // linear?
      if(this.order===1) {
        ret = {
          x: mt*p[0].x + t*p[1].x,
          y: mt*p[0].y + t*p[1].y
        };
        if (this._3d) { ret.z = mt*p[0].z + t*p[1].z; }
        return ret;
      }

      // quadratic/cubic curve?
      if(this.order<4) {
        var mt2 = mt*mt,
            t2 = t*t,
            a,b,c,d = 0;
        if(this.order===2) {
          p = [p[0], p[1], p[2], ZERO];
          a = mt2;
          b = mt*t*2;
          c = t2;
        }
        else if(this.order===3) {
          a = mt2*mt;
          b = mt2*t*3;
          c = mt*t2*3;
          d = t*t2;
        }
        var ret = {
          x: a*p[0].x + b*p[1].x + c*p[2].x + d*p[3].x,
          y: a*p[0].y + b*p[1].y + c*p[2].y + d*p[3].y
        };
        if(this._3d) {
          ret.z = a*p[0].z + b*p[1].z + c*p[2].z + d*p[3].z;
        }
        return ret;
      }

      // higher order curves: use de Casteljau's computation
      var dCpts = JSON.parse(JSON.stringify(this.points));
      while(dCpts.length > 1) {
        for (var i=0; i<dCpts.length-1; i++) {
          dCpts[i] = {
            x: dCpts[i].x + (dCpts[i+1].x - dCpts[i].x) * t,
            y: dCpts[i].y + (dCpts[i+1].y - dCpts[i].y) * t
          };
          if (typeof dCpts[i].z !== "undefined") {
            dCpts[i] = dCpts[i].z + (dCpts[i+1].z - dCpts[i].z) * t
          }
        }
        dCpts.splice(dCpts.length-1, 1);
      }
      return dCpts[0];
    },
    raise: function() {
      var p = this.points, np = [p[0]], i, k=p.length, pi, pim;
      for (var i=1; i<k; i++) {
        pi = p[i];
        pim = p[i-1];
        np[i] = {
          x: (k-i)/k * pi.x + i/k * pim.x,
          y: (k-i)/k * pi.y + i/k * pim.y
        };
      }
      np[k] = p[k-1];
      return new Bezier(np);
    },
    derivative: function(t) {
      var mt = 1-t,
          a,b,c=0,
          p = this.dpoints[0];
      if(this.order===2) { p = [p[0], p[1], ZERO]; a = mt; b = t; }
      if(this.order===3) { a = mt*mt; b = mt*t*2; c = t*t; }
      var ret = {
        x: a*p[0].x + b*p[1].x + c*p[2].x,
        y: a*p[0].y + b*p[1].y + c*p[2].y
      };
      if(this._3d) {
        ret.z = a*p[0].z + b*p[1].z + c*p[2].z;
      }
      return ret;
    },
    inflections: function() {
      return utils.inflections(this.points);
    },
    normal: function(t) {
      return this._3d ? this.__normal3(t) : this.__normal2(t);
    },
    __normal2: function(t) {
      var d = this.derivative(t);
      var q = sqrt(d.x*d.x + d.y*d.y)
      return { x: -d.y/q, y: d.x/q };
    },
    __normal3: function(t) {
      // see http://stackoverflow.com/questions/25453159
      var r1 = this.derivative(t),
          r2 = this.derivative(t+0.01),
          q1 = sqrt(r1.x*r1.x + r1.y*r1.y + r1.z*r1.z),
          q2 = sqrt(r2.x*r2.x + r2.y*r2.y + r2.z*r2.z);
      r1.x /= q1; r1.y /= q1; r1.z /= q1;
      r2.x /= q2; r2.y /= q2; r2.z /= q2;
      // cross product
      var c = {
        x: r2.y*r1.z - r2.z*r1.y,
        y: r2.z*r1.x - r2.x*r1.z,
        z: r2.x*r1.y - r2.y*r1.x
      };
      var m = sqrt(c.x*c.x + c.y*c.y + c.z*c.z);
      c.x /= m; c.y /= m; c.z /= m;
      // rotation matrix
      var R = [   c.x*c.x,   c.x*c.y-c.z, c.x*c.z+c.y,
                c.x*c.y+c.z,   c.y*c.y,   c.y*c.z-c.x,
                c.x*c.z-c.y, c.y*c.z+c.x,   c.z*c.z    ];
      // normal vector:
      var n = {
        x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
        y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
        z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
      };
      return n;
    },
    hull: function(t) {
      var p = this.points,
          _p = [],
          pt,
          q = [],
          idx = 0,
          i=0,
          l=0;
      q[idx++] = p[0];
      q[idx++] = p[1];
      q[idx++] = p[2];
      if(this.order === 3) { q[idx++] = p[3]; }
      // we lerp between all points at each iteration, until we have 1 point left.
      while(p.length>1) {
        _p = [];
        for(i=0, l=p.length-1; i<l; i++) {
          pt = utils.lerp(t,p[i],p[i+1]);
          q[idx++] = pt;
          _p.push(pt);
        }
        p = _p;
      }
      return q;
    },
    split: function(t1, t2) {
      // shortcuts
      if(t1===0 && !!t2) { return this.split(t2).left; }
      if(t2===1) { return this.split(t1).right; }

      // no shortcut: use "de Casteljau" iteration.
      var q = this.hull(t1);
      var result = {
        left: this.order === 2 ? new Bezier([q[0],q[3],q[5]]) : new Bezier([q[0],q[4],q[7],q[9]]),
        right: this.order === 2 ? new Bezier([q[5],q[4],q[2]]) : new Bezier([q[9],q[8],q[6],q[3]]),
        span: q
      };

      // make sure we bind _t1/_t2 information!
      result.left._t1  = utils.map(0,  0,1, this._t1,this._t2);
      result.left._t2  = utils.map(t1, 0,1, this._t1,this._t2);
      result.right._t1 = utils.map(t1, 0,1, this._t1,this._t2);
      result.right._t2 = utils.map(1,  0,1, this._t1,this._t2);

      // if we have no t2, we're done
      if(!t2) { return result; }

      // if we have a t2, split again:
      t2 = utils.map(t2,t1,1,0,1);
      var subsplit = result.right.split(t2);
      return subsplit.left;
    },
    extrema: function() {
      var dims = this.dims,
          result={},
          roots=[],
          p, mfn;
      dims.forEach(function(dim) {
        mfn = function(v) { return v[dim]; };
        p = this.dpoints[0].map(mfn);
        result[dim] = utils.droots(p);
        if(this.order === 3) {
          p = this.dpoints[1].map(mfn);
          result[dim] = result[dim].concat(utils.droots(p));
        }
        result[dim] = result[dim].filter(function(t) { return (t>=0 && t<=1); });
        roots = roots.concat(result[dim].sort());
      }.bind(this));
      roots = roots.sort().filter(function(v,idx) { return (roots.indexOf(v) === idx); });
      result.values = roots;
      return result;
    },
    bbox: function() {
      var extrema = this.extrema(), result = {};
      this.dims.forEach(function(d) {
        result[d] = utils.getminmax(this, d, extrema[d]);
      }.bind(this));
      return result;
    },
    overlaps: function(curve) {
      var lbbox = this.bbox(),
          tbbox = curve.bbox();
      return utils.bboxoverlap(lbbox,tbbox);
    },
    offset: function(t, d) {
      if(typeof d !== "undefined") {
        var c = this.get(t);
        var n = this.normal(t);
        var ret = {
          c: c,
          n: n,
          x: c.x + n.x * d,
          y: c.y + n.y * d
        };
        if(this._3d) {
          ret.z = c.z + n.z * d;
        };
        return ret;
      }
      if(this._linear) {
        var nv = this.normal(0);
        var coords = this.points.map(function(p) {
          var ret = {
            x: p.x + t * nv.x,
            y: p.y + t * nv.y
          };
          if(p.z && n.z) { ret.z = p.z + t * nv.z; }
          return ret;
        });
        return [new Bezier(coords)];
      }
      var reduced = this.reduce();
      return reduced.map(function(s) {
        return s.scale(t);
      });
    },
    simple: function() {
      if(this.order===3) {
        var a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
        var a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
        if(a1>0 && a2<0 || a1<0 && a2>0) return false;
      }
      var n1 = this.normal(0);
      var n2 = this.normal(1);
      var s = n1.x*n2.x + n1.y*n2.y;
      if(this._3d) { s += n1.z*n2.z; }
      var angle = abs(acos(s));
      return angle < pi/3;
    },
    reduce: function() {
      var i, t1=0, t2=0, step=0.01, segment, pass1=[], pass2=[];
      // first pass: split on extrema
      var extrema = this.extrema().values;
      if(extrema.indexOf(0)===-1) { extrema = [0].concat(extrema); }
      if(extrema.indexOf(1)===-1) { extrema.push(1); }

      for(t1=extrema[0], i=1; i<extrema.length; i++) {
        t2 = extrema[i];
        segment = this.split(t1,t2);
        segment._t1 = t1;
        segment._t2 = t2;
        pass1.push(segment);
        t1 = t2;
      }

      // second pass: further reduce these segments to simple segments
      pass1.forEach(function(p1) {
        t1=0;
        t2=0;
        while(t2 <= 1) {
          for(t2=t1+step; t2<=1+step; t2+=step) {
            segment = p1.split(t1,t2);
            if(!segment.simple()) {
              t2 -= step;
              if(abs(t1-t2)<step) {
                // we can never form a reduction
                return [];
              }
              segment = p1.split(t1,t2);
              segment._t1 = utils.map(t1,0,1,p1._t1,p1._t2);
              segment._t2 = utils.map(t2,0,1,p1._t1,p1._t2);
              pass2.push(segment);
              t1 = t2;
              break;
            }
          }
        }
        if(t1<1) {
          segment = p1.split(t1,1);
          segment._t1 = utils.map(t1,0,1,p1._t1,p1._t2);
          segment._t2 = p1._t2;
          pass2.push(segment);
        }
      });
      return pass2;
    },
    scale: function(d) {
      var order = this.order;
      var distanceFn = false
      if(typeof d === "function") { distanceFn = d; }
      if(distanceFn && order === 2) { return this.raise().scale(distanceFn); }

      // TODO: add special handling for degenerate (=linear) curves.
      var clockwise = this.clockwise;
      var r1 = distanceFn ? distanceFn(0) : d;
      var r2 = distanceFn ? distanceFn(1) : d;
      var v = [ this.offset(0,10), this.offset(1,10) ];
      var o = utils.lli4(v[0], v[0].c, v[1], v[1].c);
      if(!o) { throw new Error("cannot scale this curve. Try reducing it first."); }
      // move all points by distance 'd' wrt the origin 'o'
      var points=this.points, np=[];

      // move end points by fixed distance along normal.
      [0,1].forEach(function(t) {
        var p = np[t*order] = utils.copy(points[t*order]);
        p.x += (t?r2:r1) * v[t].n.x;
        p.y += (t?r2:r1) * v[t].n.y;
      }.bind(this));

      if (!distanceFn) {
        // move control points to lie on the intersection of the offset
        // derivative vector, and the origin-through-control vector
        [0,1].forEach(function(t) {
          if(this.order===2 && !!t) return;
          var p = np[t*order];
          var d = this.derivative(t);
          var p2 = { x: p.x + d.x, y: p.y + d.y };
          np[t+1] = utils.lli4(p, p2, o, points[t+1]);
        }.bind(this));
        return new Bezier(np);
      }

      // move control points by "however much necessary to
      // ensure the correct tangent to endpoint".
      [0,1].forEach(function(t) {
        if(this.order===2 && !!t) return;
        var p = points[t+1];
        var ov = {
          x: p.x - o.x,
          y: p.y - o.y
        };
        var rc = distanceFn ? distanceFn((t+1)/order) : d;
        if(distanceFn && !clockwise) rc = -rc;
        var m = sqrt(ov.x*ov.x + ov.y*ov.y);
        ov.x /= m;
        ov.y /= m;
        np[t+1] = {
          x: p.x + rc*ov.x,
          y: p.y + rc*ov.y
        }
      }.bind(this));
      return new Bezier(np);
    },
    outline: function(d1, d2, d3, d4) {
      d2 = (typeof d2 === "undefined") ? d1 : d2;
      var reduced = this.reduce(),
          len = reduced.length,
          fcurves = [],
          bcurves = [],
          p,
          alen = 0,
          tlen = this.length();

      var graduated = (typeof d3 !== "undefined" && typeof d4 !== "undefined");

      function linearDistanceFunction(s,e, tlen,alen,slen) {
        return function (v) {
          var f1 = alen/tlen, f2 = (alen+slen)/tlen, d = e-s;
          return utils.map(v, 0,1, s+f1*d, s+f2*d);
        };
      };

      // form curve oulines
      reduced.forEach(function(segment) {
        slen = segment.length();
        if (graduated) {
          fcurves.push(segment.scale(  linearDistanceFunction( d1, d3, tlen,alen,slen)  ));
          bcurves.push(segment.scale(  linearDistanceFunction(-d2,-d4, tlen,alen,slen)  ));
        } else {
          fcurves.push(segment.scale( d1));
          bcurves.push(segment.scale(-d2));
        }
        alen += slen;
      });

      // reverse the "return" outline
      bcurves = bcurves.map(function(s) {
        p = s.points;
        if(p[3]) { s.points = [p[3],p[2],p[1],p[0]]; }
        else { s.points = [p[2],p[1],p[0]]; }
        return s;
      }).reverse();

      // form the endcaps as lines
      var fs = fcurves[0].points[0],
          fe = fcurves[len-1].points[fcurves[len-1].points.length-1],
          bs = bcurves[len-1].points[bcurves[len-1].points.length-1],
          be = bcurves[0].points[0],
          ls = utils.makeline(bs,fs),
          le = utils.makeline(fe,be),
          segments = [ls].concat(fcurves).concat([le]).concat(bcurves),
          slen = segments.length;

      return new PolyBezier(segments);
    },
    outlineshapes: function(d1, d2, curveIntersectionThreshold) {
      d2 = d2 || d1;
      var outline = this.outline(d1,d2).curves;
      var shapes = [];
      for(var i=1, len=outline.length; i < len/2; i++) {
        var shape = utils.makeshape(outline[i], outline[len-i], curveIntersectionThreshold);
        shape.startcap.virtual = (i > 1);
        shape.endcap.virtual = (i < len/2-1);
        shapes.push(shape);
      }
      return shapes;
    },
    intersects: function(curve, curveIntersectionThreshold) {
      if(!curve) return this.selfintersects(curveIntersectionThreshold);
      if(curve.p1 && curve.p2) {
        return this.lineIntersects(curve);
      }
      if(curve instanceof Bezier) { curve = curve.reduce(); }
      return this.curveintersects(this.reduce(), curve, curveIntersectionThreshold);
    },
    lineIntersects: function(line) {
      var mx = min(line.p1.x, line.p2.x),
          my = min(line.p1.y, line.p2.y),
          MX = max(line.p1.x, line.p2.x),
          MY = max(line.p1.y, line.p2.y),
          self=this;
      return utils.roots(this.points, line).filter(function(t) {
        var p = self.get(t);
        return utils.between(p.x, mx, MX) && utils.between(p.y, my, MY);
      });
    },
    selfintersects: function(curveIntersectionThreshold) {
      var reduced = this.reduce();
      // "simple" curves cannot intersect with their direct
      // neighbour, so for each segment X we check whether
      // it intersects [0:x-2][x+2:last].
      var i,len=reduced.length-2,results=[],result,left,right;
      for(i=0; i<len; i++) {
        left = reduced.slice(i,i+1);
        right = reduced.slice(i+2);
        result = this.curveintersects(left, right, curveIntersectionThreshold);
        results = results.concat( result );
      }
      return results;
    },
    curveintersects: function(c1, c2, curveIntersectionThreshold) {
      var pairs = [];
      // step 1: pair off any overlapping segments
      c1.forEach(function(l) {
        c2.forEach(function(r) {
          if(l.overlaps(r)) {
            pairs.push({ left: l, right: r });
          }
        });
      });
      // step 2: for each pairing, run through the convergence algorithm.
      var intersections = [];
      pairs.forEach(function(pair) {
        var result = utils.pairiteration(pair.left, pair.right, curveIntersectionThreshold);
        if(result.length > 0) {
          intersections = intersections.concat(result);
        }
      });
      return intersections;
    },
    arcs: function(errorThreshold) {
      errorThreshold = errorThreshold || 0.5;
      var circles = [];
      return this._iterate(errorThreshold, circles);
    },
    _error: function(pc, np1, s, e) {
      var q = (e - s) / 4,
          c1 = this.get(s + q),
          c2 = this.get(e - q),
          ref = utils.dist(pc, np1),
          d1  = utils.dist(pc, c1),
          d2  = utils.dist(pc, c2);
      return abs(d1-ref) + abs(d2-ref);
    },
    _iterate: function(errorThreshold, circles) {
      var s = 0, e = 1, safety;
      // we do a binary search to find the "good `t` closest to no-longer-good"
      do {
        safety=0;

        // step 1: start with the maximum possible arc
        e = 1;

        // points:
        var np1 = this.get(s), np2, np3, arc, prev_arc;

        // booleans:
        var curr_good = false, prev_good = false, done;

        // numbers:
        var m = e, prev_e = 1, step = 0;

        // step 2: find the best possible arc
        do {
          prev_good = curr_good;
          prev_arc = arc;
          m = (s + e)/2;
          step++;

          np2 = this.get(m);
          np3 = this.get(e);

          arc = utils.getccenter(np1, np2, np3);
          
          //also save the t values
          arc.interval = {
            start: s,
            end: e
          };

          var error = this._error(arc, np1, s, e);
          curr_good = (error <= errorThreshold);

          done = prev_good && !curr_good;
          if(!done) prev_e = e;

          // this arc is fine: we can move 'e' up to see if we can find a wider arc
          if(curr_good) {
            // if e is already at max, then we're done for this arc.
            if (e >= 1) {
              prev_e = 1;
              prev_arc = arc;
              break;
            }
            // if not, move it up by half the iteration distance
            e = e + (e-s)/2;
          }

          // this is a bad arc: we need to move 'e' down to find a good arc
          else {
            e = m;
          }
        }
        while(!done && safety++<100);

        if(safety>=100) {
          console.error("arc abstraction somehow failed...");
          break;
        }

        // console.log("[F] arc found", s, prev_e, prev_arc.x, prev_arc.y, prev_arc.s, prev_arc.e);

        prev_arc = (prev_arc ? prev_arc : arc);
        circles.push(prev_arc);
        s = prev_e;
      }
      while(e < 1);
      return circles;
    }
  };

  module.exports = Bezier;

}());

},{"95":95,"96":96}],95:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(96);

  /**
   * Poly Bezier
   * @param {[type]} curves [description]
   */
  var PolyBezier = function(curves) {
    this.curves = [];
    this._3d = false;
    if(!!curves) {
      this.curves = curves;
      this._3d = this.curves[0]._3d;
    }
  }

  PolyBezier.prototype = {
    valueOf: function() {
      return this.toString();
    },
    toString: function() {
      return utils.pointsToString(this.points);
    },
    addCurve: function(curve) {
      this.curves.push(curve);
      this._3d = this._3d || curve._3d;
    },
    length: function() {
      return this.curves.map(function(v) { return v.length(); }).reduce(function(a,b) { return a+b; });
    },
    curve: function(idx) {
      return this.curves[idx];
    },
    bbox: function() {
      var c = this.curves;
      var bbox = c[0].bbox();
      for(var i=1; i<c.length; i++) {
        utils.expandbox(bbox, c[i].bbox());
      }
      return bbox;
    },
    offset: function(d) {
      var offset = [];
      this.curves.forEach(function(v) {
        offset = offset.concat(v.offset(d));
      });
      return new PolyBezier(offset);
    }
  };

  module.exports = PolyBezier;
}());

},{"96":96}],96:[function(require,module,exports){
(function() {
  "use strict";

  // math-inlining.
  var abs = Math.abs,
      cos = Math.cos,
      sin = Math.sin,
      acos = Math.acos,
      atan2 = Math.atan2,
      sqrt = Math.sqrt,
      pow = Math.pow,
      // cube root function yielding real roots
      crt = function(v) { return (v<0) ? -pow(-v,1/3) : pow(v,1/3); },
      // trig constants
      pi = Math.PI,
      tau = 2*pi,
      quart = pi/2,
      // float precision significant decimal
      epsilon = 0.000001;

  // Bezier utility functions
  var utils = {
    // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
    Tvalues: [
      -0.0640568928626056260850430826247450385909,
       0.0640568928626056260850430826247450385909,
      -0.1911188674736163091586398207570696318404,
       0.1911188674736163091586398207570696318404,
      -0.3150426796961633743867932913198102407864,
       0.3150426796961633743867932913198102407864,
      -0.4337935076260451384870842319133497124524,
       0.4337935076260451384870842319133497124524,
      -0.5454214713888395356583756172183723700107,
       0.5454214713888395356583756172183723700107,
      -0.6480936519369755692524957869107476266696,
       0.6480936519369755692524957869107476266696,
      -0.7401241915785543642438281030999784255232,
       0.7401241915785543642438281030999784255232,
      -0.8200019859739029219539498726697452080761,
       0.8200019859739029219539498726697452080761,
      -0.8864155270044010342131543419821967550873,
       0.8864155270044010342131543419821967550873,
      -0.9382745520027327585236490017087214496548,
       0.9382745520027327585236490017087214496548,
      -0.9747285559713094981983919930081690617411,
       0.9747285559713094981983919930081690617411,
      -0.9951872199970213601799974097007368118745,
       0.9951872199970213601799974097007368118745
    ],

    // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
    Cvalues: [
      0.1279381953467521569740561652246953718517,
      0.1279381953467521569740561652246953718517,
      0.1258374563468282961213753825111836887264,
      0.1258374563468282961213753825111836887264,
      0.1216704729278033912044631534762624256070,
      0.1216704729278033912044631534762624256070,
      0.1155056680537256013533444839067835598622,
      0.1155056680537256013533444839067835598622,
      0.1074442701159656347825773424466062227946,
      0.1074442701159656347825773424466062227946,
      0.0976186521041138882698806644642471544279,
      0.0976186521041138882698806644642471544279,
      0.0861901615319532759171852029837426671850,
      0.0861901615319532759171852029837426671850,
      0.0733464814110803057340336152531165181193,
      0.0733464814110803057340336152531165181193,
      0.0592985849154367807463677585001085845412,
      0.0592985849154367807463677585001085845412,
      0.0442774388174198061686027482113382288593,
      0.0442774388174198061686027482113382288593,
      0.0285313886289336631813078159518782864491,
      0.0285313886289336631813078159518782864491,
      0.0123412297999871995468056670700372915759,
      0.0123412297999871995468056670700372915759
    ],

    arcfn: function(t, derivativeFn) {
      var d = derivativeFn(t);
      var l = d.x*d.x + d.y*d.y;
      if(typeof d.z !== "undefined") {
        l += d.z*d.z;
      }
      return sqrt(l);
    },

    between: function(v, m, M) {
      return (m <= v && v <= M) || utils.approximately(v, m) || utils.approximately(v, M);
    },

    approximately: function(a,b,precision) {
      return abs(a-b) <= (precision || epsilon);
    },

    length: function(derivativeFn) {
      var z=0.5,sum=0,len=utils.Tvalues.length,i,t;
      for(i=0; i<len; i++) {
        t = z * utils.Tvalues[i] + z;
        sum += utils.Cvalues[i] * utils.arcfn(t,derivativeFn);
      }
      return z * sum;
    },

    map: function(v, ds,de, ts,te) {
      var d1 = de-ds, d2 = te-ts, v2 =  v-ds, r = v2/d1;
      return ts + d2*r;
    },

    lerp: function(r, v1, v2) {
      var ret = {
        x: v1.x + r*(v2.x-v1.x),
        y: v1.y + r*(v2.y-v1.y)
      };
      if(!!v1.z && !!v2.z) {
        ret.z =  v1.z + r*(v2.z-v1.z);
      }
      return ret;
    },

    pointToString: function(p) {
      var s = p.x+"/"+p.y;
      if(typeof p.z !== "undefined") {
        s += "/"+p.z;
      }
      return s;
    },

    pointsToString: function(points) {
      return "[" + points.map(utils.pointToString).join(", ") + "]";
    },

    copy: function(obj) {
      return JSON.parse(JSON.stringify(obj));
    },

    angle: function(o,v1,v2) {
      var dx1 = v1.x - o.x,
          dy1 = v1.y - o.y,
          dx2 = v2.x - o.x,
          dy2 = v2.y - o.y,
          cross = dx1*dy2 - dy1*dx2,
          m1 = sqrt(dx1*dx1+dy1*dy1),
          m2 = sqrt(dx2*dx2+dy2*dy2),
          dot;
      dx1/=m1; dy1/=m1; dx2/=m2; dy2/=m2;
      dot = dx1*dx2 + dy1*dy2;
      return atan2(cross, dot);
    },

    // round as string, to avoid rounding errors
    round: function(v, d) {
      var s = '' + v;
      var pos = s.indexOf(".");
      return parseFloat(s.substring(0,pos+1+d));
    },

    dist: function(p1, p2) {
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y;
      return sqrt(dx*dx+dy*dy);
    },

    closest: function(LUT, point) {
      var mdist = pow(2,63), mpos, d;
      LUT.forEach(function(p, idx) {
        d = utils.dist(point, p);
        if (d<mdist) {
          mdist = d;
          mpos = idx;
        }
      });
      return { mdist:mdist, mpos:mpos };
    },

    abcratio: function(t, n) {
      // see ratio(t) note on http://pomax.github.io/bezierinfo/#abc
      if (n!==2 && n!==3) {
        return false;
      }
      if (typeof t === "undefined") {
        t = 0.5;
      } else if (t===0 || t===1) {
        return t;
      }
      var bottom = pow(t,n) + pow(1-t,n), top = bottom - 1;
      return abs(top/bottom);
    },

    projectionratio: function(t, n) {
      // see u(t) note on http://pomax.github.io/bezierinfo/#abc
      if (n!==2 && n!==3) {
        return false;
      }
      if (typeof t === "undefined") {
        t = 0.5;
      } else if (t===0 || t===1) {
        return t;
      }
      var top = pow(1-t, n), bottom = pow(t,n) + top;
      return top/bottom;
    },

    lli8: function(x1,y1,x2,y2,x3,y3,x4,y4) {
      var nx=(x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4),
          ny=(x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4),
          d=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
      if(d==0) { return false; }
      return { x: nx/d, y: ny/d };
    },

    lli4: function(p1,p2,p3,p4) {
      var x1 = p1.x, y1 = p1.y,
          x2 = p2.x, y2 = p2.y,
          x3 = p3.x, y3 = p3.y,
          x4 = p4.x, y4 = p4.y;
      return utils.lli8(x1,y1,x2,y2,x3,y3,x4,y4);
    },

    lli: function(v1, v2) {
      return utils.lli4(v1,v1.c,v2,v2.c);
    },

    makeline: function(p1,p2) {
      var Bezier = require(94);
      var x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, dx = (x2-x1)/3, dy = (y2-y1)/3;
      return new Bezier(x1, y1, x1+dx, y1+dy, x1+2*dx, y1+2*dy, x2, y2);
    },

    findbbox: function(sections) {
      var mx=99999999,my=mx,MX=-mx,MY=MX;
      sections.forEach(function(s) {
        var bbox = s.bbox();
        if(mx > bbox.x.min) mx = bbox.x.min;
        if(my > bbox.y.min) my = bbox.y.min;
        if(MX < bbox.x.max) MX = bbox.x.max;
        if(MY < bbox.y.max) MY = bbox.y.max;
      });
      return {
        x: { min: mx, mid:(mx+MX)/2, max: MX, size:MX-mx },
        y: { min: my, mid:(my+MY)/2, max: MY, size:MY-my }
      }
    },

    shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
      if(!utils.bboxoverlap(bbox1, bbox2)) return [];
      var intersections = [];
      var a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
      var a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
      a1.forEach(function(l1) {
        if(l1.virtual) return;
        a2.forEach(function(l2) {
          if(l2.virtual) return;
          var iss = l1.intersects(l2, curveIntersectionThreshold);
          if(iss.length>0) {
            iss.c1 = l1;
            iss.c2 = l2;
            iss.s1 = s1;
            iss.s2 = s2;
            intersections.push(iss);
          }
        });
      });
      return intersections;
    },

    makeshape: function(forward, back, curveIntersectionThreshold) {
      var bpl = back.points.length;
      var fpl = forward.points.length;
      var start  = utils.makeline(back.points[bpl-1], forward.points[0]);
      var end    = utils.makeline(forward.points[fpl-1], back.points[0]);
      var shape  = {
        startcap: start,
        forward: forward,
        back: back,
        endcap: end,
        bbox: utils.findbbox([start, forward, back, end])
      };
      var self = utils;
      shape.intersections = function(s2) {
        return self.shapeintersections(shape,shape.bbox,s2,s2.bbox, curveIntersectionThreshold);
      };
      return shape;
    },

    getminmax: function(curve, d, list) {
      if(!list) return { min:0, max:0 };
      var min=0xFFFFFFFFFFFFFFFF, max=-min,t,c;
      if(list.indexOf(0)===-1) { list = [0].concat(list); }
      if(list.indexOf(1)===-1) { list.push(1); }
      for(var i=0,len=list.length; i<len; i++) {
        t = list[i];
        c = curve.get(t);
        if(c[d] < min) { min = c[d]; }
        if(c[d] > max) { max = c[d]; }
      }
      return { min:min, mid:(min+max)/2, max:max, size:max-min };
    },

    align: function(points, line) {
      var tx = line.p1.x,
          ty = line.p1.y,
          a = -atan2(line.p2.y-ty, line.p2.x-tx),
          d = function(v) {
            return {
              x: (v.x-tx)*cos(a) - (v.y-ty)*sin(a),
              y: (v.x-tx)*sin(a) + (v.y-ty)*cos(a)
            };
          };
      return points.map(d);
    },

    roots: function(points, line) {
      line = line || {p1:{x:0,y:0},p2:{x:1,y:0}};
      var order = points.length - 1;
      var p = utils.align(points, line);
      var reduce = function(t) { return 0<=t && t <=1; };

      if (order === 2) {
        var a = p[0].y,
            b = p[1].y,
            c = p[2].y,
            d = a - 2*b + c;
        if(d!==0) {
          var m1 = -sqrt(b*b-a*c),
              m2 = -a+b,
              v1 = -( m1+m2)/d,
              v2 = -(-m1+m2)/d;
          return [v1, v2].filter(reduce);
        }
        else if(b!==c && d===0) {
          return [ (2*b-c)/2*(b-c) ].filter(reduce);
        }
        return [];
      }

      // see http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
      var pa = p[0].y,
          pb = p[1].y,
          pc = p[2].y,
          pd = p[3].y,
          d = (-pa + 3*pb - 3*pc + pd),
          a = (3*pa - 6*pb + 3*pc) / d,
          b = (-3*pa + 3*pb) / d,
          c = pa / d,
          p = (3*b - a*a)/3,
          p3 = p/3,
          q = (2*a*a*a - 9*a*b + 27*c)/27,
          q2 = q/2,
          discriminant = q2*q2 + p3*p3*p3,
          u1,v1,x1,x2,x3;
       if (discriminant < 0) {
        var mp3 = -p/3,
            mp33 = mp3*mp3*mp3,
            r = sqrt( mp33 ),
            t = -q/(2*r),
            cosphi = t<-1 ? -1 : t>1 ? 1 : t,
            phi = acos(cosphi),
            crtr = crt(r),
            t1 = 2*crtr;
        x1 = t1 * cos(phi/3) - a/3;
        x2 = t1 * cos((phi+tau)/3) - a/3;
        x3 = t1 * cos((phi+2*tau)/3) - a/3;
        return [x1, x2, x3].filter(reduce);
      } else if(discriminant === 0) {
        u1 = q2 < 0 ? crt(-q2) : -crt(q2);
        x1 = 2*u1-a/3;
        x2 = -u1 - a/3;
        return [x1,x2].filter(reduce);
      } else {
        var sd = sqrt(discriminant);
        u1 = crt(-q2+sd);
        v1 = crt(q2+sd);
        return [u1-v1-a/3].filter(reduce);;
      }
    },

    droots: function(p) {
      // quadratic roots are easy
      if(p.length === 3) {
        var a = p[0],
            b = p[1],
            c = p[2],
            d = a - 2*b + c;
        if(d!==0) {
          var m1 = -sqrt(b*b-a*c),
              m2 = -a+b,
              v1 = -( m1+m2)/d,
              v2 = -(-m1+m2)/d;
          return [v1, v2];
        }
        else if(b!==c && d===0) {
          return [(2*b-c)/(2*(b-c))];
        }
        return [];
      }

      // linear roots are even easier
      if(p.length === 2) {
        var a = p[0], b = p[1];
        if(a!==b) {
          return [a/(a-b)];
        }
        return [];
      }
    },

    inflections: function(points) {
      if (points.length<4) return [];

      // FIXME: TODO: add in inflection abstraction for quartic+ curves?

      var p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }),
          a = p[2].x * p[1].y,
          b = p[3].x * p[1].y,
          c = p[1].x * p[2].y,
          d = p[3].x * p[2].y,
          v1 = 18 * (-3*a + 2*b + 3*c - d),
          v2 = 18 * (3*a - b - 3*c),
          v3 = 18 * (c - a);

      if (utils.approximately(v1,0)) return [];

      var trm = v2*v2 - 4*v1*v3,
          sq = Math.sqrt(trm),
          d = 2 * v1;

      if (utils.approximately(d,0)) return [];

      return [(sq-v2)/d, -(v2+sq)/d].filter(function(r) {
        return (0 <= r && r <= 1);
      });
    },

    bboxoverlap: function(b1,b2) {
      var dims=['x','y'],len=dims.length,i,dim,l,t,d
      for(i=0; i<len; i++) {
        dim = dims[i];
        l = b1[dim].mid;
        t = b2[dim].mid;
        d = (b1[dim].size + b2[dim].size)/2;
        if(abs(l-t) >= d) return false;
      }
      return true;
    },

    expandbox: function(bbox, _bbox) {
      if(_bbox.x.min < bbox.x.min) { bbox.x.min = _bbox.x.min; }
      if(_bbox.y.min < bbox.y.min) { bbox.y.min = _bbox.y.min; }
      if(_bbox.z && _bbox.z.min < bbox.z.min) { bbox.z.min = _bbox.z.min; }
      if(_bbox.x.max > bbox.x.max) { bbox.x.max = _bbox.x.max; }
      if(_bbox.y.max > bbox.y.max) { bbox.y.max = _bbox.y.max; }
      if(_bbox.z && _bbox.z.max > bbox.z.max) { bbox.z.max = _bbox.z.max; }
      bbox.x.mid = (bbox.x.min + bbox.x.max)/2;
      bbox.y.mid = (bbox.y.min + bbox.y.max)/2;
      if(bbox.z) { bbox.z.mid = (bbox.z.min + bbox.z.max)/2; }
      bbox.x.size = bbox.x.max - bbox.x.min;
      bbox.y.size = bbox.y.max - bbox.y.min;
      if(bbox.z) { bbox.z.size = bbox.z.max - bbox.z.min; }
    },

    pairiteration: function(c1, c2, curveIntersectionThreshold) {
      var c1b = c1.bbox(),
          c2b = c2.bbox(),
          r = 100000,
          threshold = curveIntersectionThreshold || 0.5;
      if(c1b.x.size + c1b.y.size < threshold && c2b.x.size + c2b.y.size < threshold) {
        return [ ((r * (c1._t1+c1._t2)/2)|0)/r + "/" + ((r * (c2._t1+c2._t2)/2)|0)/r ];
      }
      var cc1 = c1.split(0.5),
          cc2 = c2.split(0.5),
          pairs = [
            {left: cc1.left, right: cc2.left },
            {left: cc1.left, right: cc2.right },
            {left: cc1.right, right: cc2.right },
            {left: cc1.right, right: cc2.left }];
      pairs = pairs.filter(function(pair) {
        return utils.bboxoverlap(pair.left.bbox(),pair.right.bbox());
      });
      var results = [];
      if(pairs.length === 0) return results;
      pairs.forEach(function(pair) {
        results = results.concat(
          utils.pairiteration(pair.left, pair.right, threshold)
        );
      })
      results = results.filter(function(v,i) {
        return results.indexOf(v) === i;
      });
      return results;
    },

    getccenter: function(p1,p2,p3) {
      var dx1 = (p2.x - p1.x),
          dy1 = (p2.y - p1.y),
          dx2 = (p3.x - p2.x),
          dy2 = (p3.y - p2.y);
      var dx1p = dx1 * cos(quart) - dy1 * sin(quart),
          dy1p = dx1 * sin(quart) + dy1 * cos(quart),
          dx2p = dx2 * cos(quart) - dy2 * sin(quart),
          dy2p = dx2 * sin(quart) + dy2 * cos(quart);
      // chord midpoints
      var mx1 = (p1.x + p2.x)/2,
          my1 = (p1.y + p2.y)/2,
          mx2 = (p2.x + p3.x)/2,
          my2 = (p2.y + p3.y)/2;
      // midpoint offsets
      var mx1n = mx1 + dx1p,
          my1n = my1 + dy1p,
          mx2n = mx2 + dx2p,
          my2n = my2 + dy2p;
      // intersection of these lines:
      var arc = utils.lli8(mx1,my1,mx1n,my1n, mx2,my2,mx2n,my2n),
          r = utils.dist(arc,p1),
          // arc start/end values, over mid point:
          s = atan2(p1.y - arc.y, p1.x - arc.x),
          m = atan2(p2.y - arc.y, p2.x - arc.x),
          e = atan2(p3.y - arc.y, p3.x - arc.x),
          _;
      // determine arc direction (cw/ccw correction)
      if (s<e) {
        // if s<m<e, arc(s, e)
        // if m<s<e, arc(e, s + tau)
        // if s<e<m, arc(e, s + tau)
        if (s>m || m>e) { s += tau; }
        if (s>e) { _=e; e=s; s=_; }
      } else {
        // if e<m<s, arc(e, s)
        // if m<e<s, arc(s, e + tau)
        // if e<s<m, arc(s, e + tau)
        if (e<m && m<s) { _=e; e=s; s=_; } else { e += tau; }
      }
      // assign and done.
      arc.s = s;
      arc.e = e;
      arc.r = r;
      return arc;
    }
  };

  module.exports = utils;
}());

},{"94":94}],97:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(92)
var ieee754 = require(107)
var isArray = require(98)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"107":107,"92":92,"98":98}],98:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],99:[function(require,module,exports){
(function (Buffer){
var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

}).call(this,require(97).Buffer)

},{"97":97}],100:[function(require,module,exports){
module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};
},{}],101:[function(require,module,exports){
/* MIT license */
var colorNames = require(100);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/,
       hex =  /^#([a-fA-F0-9]{6})$/,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
       keyword = /(\D+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"100":100}],102:[function(require,module,exports){
/* MIT license */
var clone = require(99);
var convert = require(105);
var string = require(101);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		} else {
			throw new Error('Unable to parse color from string "' + obj + '"');
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		} else {
			throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
		}
	}
};

Color.prototype = {
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		if (this.values.alpha !== 1) {
			return this.values.hwb.concat([this.values.alpha]);
		}
		return this.values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var rgb = this.values.rgb;
		return rgb.concat([this.values.alpha]);
	},
	hslaArray: function () {
		var hsl = this.values.hsl;
		return hsl.concat([this.values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		this.values.hsl[2] += this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	darken: function (ratio) {
		this.values.hsl[2] -= this.values.hsl[2] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	saturate: function (ratio) {
		this.values.hsl[1] += this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	desaturate: function (ratio) {
		this.values.hsl[1] -= this.values.hsl[1] * ratio;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	whiten: function (ratio) {
		this.values.hwb[1] += this.values.hwb[1] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	blacken: function (ratio) {
		this.values.hwb[2] += this.values.hwb[2] * ratio;
		this.setValues('hwb', this.values.hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		this.setValues('alpha', this.values.alpha - (this.values.alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		this.setValues('alpha', this.values.alpha + (this.values.alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hue = this.values.hsl[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		this.values.hsl[0] = hue;
		this.setValues('hsl', this.values.hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		var col = new Color();
		col.values = clone(this.values);
		return col;
	}
};

Color.prototype.getValues = function (space) {
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = this.values[space][i];
	}

	if (this.values.alpha !== 1) {
		vals.a = this.values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var spaces = {
		rgb: ['red', 'green', 'blue'],
		hsl: ['hue', 'saturation', 'lightness'],
		hsv: ['hue', 'saturation', 'value'],
		hwb: ['hue', 'whiteness', 'blackness'],
		cmyk: ['cyan', 'magenta', 'yellow', 'black']
	};

	var maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	};

	var i;
	var alpha = 1;
	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		this.values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			this.values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	this.values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? this.values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
		this.values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			this.values[sname] = convert[space][sname](this.values[space]);
		}

		// cap values
		for (i = 0; i < sname.length; i++) {
			capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
			this.values[sname][i] = Math.round(capped);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	if (val === undefined) {
		// color.red()
		return this.values[space][index];
	} else if (val === this.values[space][index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	this.values[space][index] = val;
	this.setValues(space, this.values[space]);

	return this;
};

module.exports = Color;

},{"101":101,"105":105,"99":99}],103:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(104);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3},
	hsl: {channels: 3},
	hsv: {channels: 3},
	hwb: {channels: 3},
	cmyk: {channels: 4},
	xyz: {channels: 3},
	lab: {channels: 3},
	lch: {channels: 3},
	hex: {channels: 1},
	keyword: {channels: 1},
	ansi16: {channels: 1},
	ansi256: {channels: 1},
	hcg: {channels: 3},
	apple: {channels: 3}
};

// hide .channels property
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		var channels = convert[model].channels;
		delete convert[model].channels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;

	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	v = ((max / 255) * 1000) / 10;

	return [h, s, v];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var integer = parseInt(match[0], 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

},{"104":104}],104:[function(require,module,exports){
module.exports = {
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0],
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255],
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30],
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255],
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0],
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0],
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0],
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255],
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0],
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0],
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255],
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0],
	yellowgreen: [154, 205, 50]
};


},{}],105:[function(require,module,exports){
var conversions = require(103);
var route = require(106);

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;

},{"103":103,"106":106}],106:[function(require,module,exports){
var conversions = require(103);

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

// https://jsperf.com/object-keys-vs-for-in-with-closure/3
var models = Object.keys(conversions);

function buildGraph() {
	var graph = {};

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};


},{"103":103}],107:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],108:[function(require,module,exports){
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support AMD
  if (typeof define === 'function' && define.amd) {
    define([], factory);

  // Support CommonJS
  } else if (typeof exports === 'object') {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if (typeof module === 'object' && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support vanilla script loading
  } else {
    root.randomColor = factory();
  }

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];

      options.count = null;

      while (totalColors > colors.length) {

        // Since we're generating multiple colors,
        // incremement the seed. Otherwise we'd just
        // generate the same color each time...
        if (seed && options.seed) options.seed += 1;

        colors.push(randomColor(options));
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue (options) {

    var hueRange = getHueRange(options.hue),
        hue = randomWithin(hueRange);

    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (hue < 0) {hue = 360 + hue;}

    return hue;

  }

  function pickSaturation (hue, options) {

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    if (options.hue === 'monochrome') {
      return 0;
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + Math.random() + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        return 'rgba(' + rgbColor.join(', ') + ', ' + Math.random() + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      return Math.floor(range[0] + Math.random()*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
    }
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  return randomColor;
}));

},{}]},{},[72])(72)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxhYnN0cmFjdF9jb21wb25lbnQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcbW92aW5nX2JhY2tncm91bmRzXFxtb3ZpbmdfYmFja2dyb3VuZHMuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXG1vdmluZ19iYWNrZ3JvdW5kc1xccmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxiZXppZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3BvaW50X3NwaW5uZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcc3dpbmdpbmdfbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFx3YXZlLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxwYXRoX21hZ2ljLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxyYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcdHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3pvb21fb3V0LmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHNxdWFyZV9ncm91cF9zdHVmZi5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcem9vbV9zdHVmZlxcem9vbV9vdXQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHpvb21fc3R1ZmZcXHpvb21fc3R1ZmYuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9zaGFwZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNpcmNsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGN1c3RvbV9vYmplY3QuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxoZWxwZXJcXHBhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcaW1hZ2UuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxsaW5lLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbWFpbl9jb250YWluZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxwYXRoLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcdmlkZW8uanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcYWJzdHJhY3RfZmlsdGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcYW5pbWF0aW9uX2ZpbHRlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxhYnN0cmFjdF9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxjZW50ZXJfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGdyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJhbmRvbV9jaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmFuZG9tX3JlY3RhbmdsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyZWN0YW5nbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcc3BpcmFsX2NpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vZGlmaWNhdG9yX2ZpbHRlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxjZW50ZXJcXGNlbnRyYWxpemVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXG1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBhdGhcXHBhdGgtbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcbGluZWFyX3NoYWtlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmFkZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxvcGFjaXR5XFxmbGFzaGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xccm90YXRvclxcbGluZWFyX3JvdGF0b3IuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxzaW5nbGVfY2hpbGRfZmlsdGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcdHJhbnNpdGlvbl9maWx0ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcYWRkX3VwX3BvaW50cy5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxkaXN0YW5jZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcaGVscGVyXFxkZWdyZWVzX3RvX2Nvb3JkaW5hdGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxhcmMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aHMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccm90YXRlX3BvaW50LmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcY2lyY2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc2hhcGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHRvX3ZlY3Rvci5qcyIsIi50bXBcXHNjcmlwdHNcXGludGVybmFsXFxjaGVja19wYXJhbWV0ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxpbnRlcm5hbFxcY29weS5qcyIsIi50bXBcXHNjcmlwdHNcXGludGVybmFsXFxzZXRfcHJvcC5qcyIsIi50bXBcXHNjcmlwdHNcXGxvb3AuanMiLCIudG1wXFxzY3JpcHRzXFxtYWluLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxhYnN0cmFjdF9tb2RpZmljYXRvci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXGNvbG9yX2ZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxccmFuZG9tX2NvbG9yX2NoYW5nZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXG1vZGlmaWNhdG9ycy5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHBvc2l0aW9uXFxsaW5lX3NoYWtlX21vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxwb3NpdGlvblxccmFuZG9tX2FyY19tb3Zlci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXHJhbmRvbV9pbl9yZWN0X21vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxzY2FsZVxcbGluZWFyX3B1bHNhci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcdHJhbnNpdGlvbl9tb2RpZmljYXRvci5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGFic3RyYWN0X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcZGVmYXVsdF9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGluY3JlbWVudF9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGludGVydmFsX3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xccHJveGllcy5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXHJhbmRvbV9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWwuanMiLCIudG1wXFxzY3JpcHRzXFx0aW1lcnNcXGludGVydmFsX3RpbWVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcdHJhbnNpdGlvbnNcXHRyYW5zaXRpb25fbG9vcC5qcyIsIm5vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvYmV6aWVyLmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvcG9seS1iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Nsb25lL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jc3Mta2V5d29yZHMuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW5kb21Db2xvci9yYW5kb21Db2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixZQUFZOzs7QUFHNUIsTUFBSSxvQkFBb0IsRUFBeEI7QUFDQSxvQkFBa0IsVUFBbEIsR0FBK0IsRUFBL0I7O0FBRUEsb0JBQWtCLGdCQUFsQixHQUFxQyxVQUFVLFNBQVYsRUFBcUIsUUFBckIsRUFBK0I7QUFDbEUsUUFBSSxDQUFDLEtBQUssVUFBTCxDQUFnQixTQUFoQixDQUFMLEVBQWlDO0FBQy9CLFdBQUssVUFBTCxDQUFnQixTQUFoQixJQUE2QixFQUE3QjtBQUNEO0FBQ0QsU0FBSyxVQUFMLENBQWdCLFNBQWhCLEVBQTJCLElBQTNCLENBQWdDLFFBQWhDO0FBQ0QsR0FMRDs7QUFPQSxvQkFBa0IsbUJBQWxCLEdBQXdDLFVBQVUsU0FBVixFQUFxQixRQUFyQixFQUErQjtBQUNyRSxRQUFJLEtBQUssVUFBTCxDQUFnQixTQUFoQixDQUFKLEVBQWdDO0FBQzlCLFVBQUksUUFBUSxLQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsQ0FBbUMsUUFBbkMsQ0FBWjtBQUNBLFVBQUksUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZCxhQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsRUFBOEIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2gxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3h5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgdmFyIGFic3RyYWN0Q29tcG9uZW50ID0ge307XG4gIGFic3RyYWN0Q29tcG9uZW50Ll9jYWxsYmFja3MgPSB7fTtcblxuICBhYnN0cmFjdENvbXBvbmVudC5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdKSB7XG4gICAgICB0aGlzLl9jYWxsYmFja3NbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsYmFja3NbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgfTtcblxuICBhYnN0cmFjdENvbXBvbmVudC5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGFic3RyYWN0Q29tcG9uZW50LnNlbmRFdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV1bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGFic3RyYWN0Q29tcG9uZW50LmdldENvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfY29weTIuZGVmYXVsdCkodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIGFic3RyYWN0Q29tcG9uZW50O1xufTtcblxudmFyIF9jb3B5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9jb3B5Jyk7XG5cbnZhciBfY29weTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb3B5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2NvbXBvbmVudC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wYXRoX21hZ2ljID0gcmVxdWlyZSgnLi9wYXRoX21hZ2ljL3BhdGhfbWFnaWMnKTtcblxudmFyIF9wYXRoX21hZ2ljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhfbWFnaWMpO1xuXG52YXIgX3NxdWFyZV9ncm91cF9zdHVmZiA9IHJlcXVpcmUoJy4vc3F1YXJlX2dyb3VwX3N0dWZmL3NxdWFyZV9ncm91cF9zdHVmZicpO1xuXG52YXIgX3NxdWFyZV9ncm91cF9zdHVmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcXVhcmVfZ3JvdXBfc3R1ZmYpO1xuXG52YXIgX3pvb21fc3R1ZmYgPSByZXF1aXJlKCcuL3pvb21fc3R1ZmYvem9vbV9zdHVmZicpO1xuXG52YXIgX3pvb21fc3R1ZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbV9zdHVmZik7XG5cbnZhciBfbW92aW5nX2JhY2tncm91bmRzID0gcmVxdWlyZSgnLi9tb3ZpbmdfYmFja2dyb3VuZHMvbW92aW5nX2JhY2tncm91bmRzJyk7XG5cbnZhciBfbW92aW5nX2JhY2tncm91bmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vdmluZ19iYWNrZ3JvdW5kcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcGF0aE1hZ2ljOiBfcGF0aF9tYWdpYzIuZGVmYXVsdCxcbiAgc3F1YXJlR3JvdXBTdHVmZjogX3NxdWFyZV9ncm91cF9zdHVmZjIuZGVmYXVsdCxcbiAgem9vbVN0dWZmOiBfem9vbV9zdHVmZjIuZGVmYXVsdCxcbiAgbW92aW5nQmFja2dyb3VuZHM6IF9tb3ZpbmdfYmFja2dyb3VuZHMyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NpdGlvbnMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZCA9IHJlcXVpcmUoJy4vcmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZCcpO1xuXG52YXIgX3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmFuZG9tUmVjdE1vdmVyQmFja2dyb3VuZDogX3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZpbmdfYmFja2dyb3VuZHMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbW91bnQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbXBvbmVudCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21SZWN0TW92ZUJhY2tncm91bmQgPSB7fTtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLmFtb3VudCA9IG9wdGlvbnMuYW1vdW50O1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5zb3VyY2VDb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuX21vdmVycyA9IFtdO1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuX3NxdWFyZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5hbW91bnQ7IGkrKykge1xuICAgIHZhciBzcXVhcmUgPSB0aGlzLnNvdXJjZUNvbXBvbmVudC5nZXRDb3B5KCk7XG4gICAgdGhpcy5fbW92ZXJzLnB1c2goc3F1YXJlKTtcblxuICAgIHRoaXMuX3NxdWFyZXMucHVzaCgoMCwgX3JhbmRvbV9pbl9yZWN0X21vdmVyMi5kZWZhdWx0KSh7IHN1YmplY3Q6IHNxdWFyZS52aWV3LCBzcGVlZDogMTAwLCB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCB9KSk7XG4gICAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnZpZXcuYWRkQ2hpbGQoc3F1YXJlLnZpZXcpO1xuICB9XG5cbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdGhpcy5fbW92ZXJzW2pdLnN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdGhpcy5fbW92ZXJzW2pdLnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZDtcbn07XG5cbnZhciBfcmFuZG9tX2luX3JlY3RfbW92ZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcnMvcG9zaXRpb24vcmFuZG9tX2luX3JlY3RfbW92ZXInKTtcblxudmFyIF9yYW5kb21faW5fcmVjdF9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21faW5fcmVjdF9tb3Zlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N3aW5naW5nX2xpbmUgPSByZXF1aXJlKCcuL3N3aW5naW5nX2xpbmUnKTtcblxudmFyIF9zd2luZ2luZ19saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N3aW5naW5nX2xpbmUpO1xuXG52YXIgX2N1cnZlID0gcmVxdWlyZSgnLi9jdXJ2ZScpO1xuXG52YXIgX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnZlKTtcblxudmFyIF93YXZlID0gcmVxdWlyZSgnLi93YXZlJyk7XG5cbnZhciBfd2F2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXZlKTtcblxudmFyIF9jcG9pbnRfc3Bpbm5lciA9IHJlcXVpcmUoJy4vY3BvaW50X3NwaW5uZXInKTtcblxudmFyIF9jcG9pbnRfc3Bpbm5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcG9pbnRfc3Bpbm5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgc3dpbmdpbmdMaW5lOiBfc3dpbmdpbmdfbGluZTIuZGVmYXVsdCxcbiAgY3VydmU6IF9jdXJ2ZTIuZGVmYXVsdCxcbiAgY3BvaW50U3Bpbm5lcjogX2Nwb2ludF9zcGlubmVyMi5kZWZhdWx0LFxuICB3YXZlOiBfd2F2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHNwaW5uZXIgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzcGlubmVyLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBzcGlubmVyLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICBzcGlubmVyLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3Bpbm5lci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3Bpbm5lci50aW1lLCAxKTtcbiAgc3Bpbm5lci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHNwaW5uZXIuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzcGlubmVyLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHNwaW5uZXIubGVuZ3RoIC8gMiAtIHNwaW5uZXIucmFkaXVzLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3Bpbm5lci5sZW5ndGggLyAyICsgc3Bpbm5lci5yYWRpdXMsIHk6IDAgfSB9KTtcbiAgc3Bpbm5lci5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzcGlubmVyLmJlemllckN1cnZlIH0pO1xuXG4gIHNwaW5uZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQoc3Bpbm5lci5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZChzcGlubmVyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHNwaW5uZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHNwaW5uZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3Bpbm5lci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHZhciBjb29yZGluYXRlcyA9ICgwLCBfZGVncmVlc190b19jb29yZGluYXRlczIuZGVmYXVsdCkoY3VycmVudCAqIDM2MCwgdGhpcy5yYWRpdXMpO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gdGhpcy5sZW5ndGggLyAyIC0gY29vcmRpbmF0ZXMueDtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDEueSA9IC1jb29yZGluYXRlcy55O1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50Mi54ID0gdGhpcy5sZW5ndGggLyAyICsgY29vcmRpbmF0ZXMueDtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDIueSA9IGNvb3JkaW5hdGVzLnk7XG4gICAgdGhpcy5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHNwaW5uZXI7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvaGVscGVyL2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMnKTtcblxudmFyIF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3BvaW50X3NwaW5uZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBjdXJ2ZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1wbGl0dWRlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIGN1cnZlLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBjdXJ2ZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgY3VydmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBjdXJ2ZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoY3VydmUudGltZSwgMC41KTtcbiAgY3VydmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBjdXJ2ZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IGN1cnZlLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IDAsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBjdXJ2ZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIGN1cnZlLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IGN1cnZlLmJlemllckN1cnZlIH0pO1xuXG4gIGN1cnZlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0YXJ0KHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBjdXJ2ZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBjdXJ2ZS5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuZW5kLnkgPSAoY3VycmVudCAtIDAuNSkgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDEueCA9IE1hdGguYWJzKGN1cnJlbnQgLSAwLjUpICogdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQyLnggPSAoTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKyAwLjUpICogdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSAoY3VycmVudCAtIDAuNSkgLyAyICogdGhpcy5hbXBsaXR1ZGU7XG4gICAgdGhpcy5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGN1cnZlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXJ2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHN3aW5nTGluZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1wbGl0dWRlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBzd2luZ0xpbmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHN3aW5nTGluZS50aW1lLCAwLjUpO1xuICBzd2luZ0xpbmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzd2luZ0xpbmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIsIHk6IDAgfSB9KTtcbiAgc3dpbmdMaW5lLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IHN3aW5nTGluZS5iZXppZXJDdXJ2ZSB9KTtcblxuICBzd2luZ0xpbmUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDEueSA9IChjdXJyZW50IC0gMC41KSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aW5naW5nX2xpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciB3YXZlID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdHJldGNoJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICB3YXZlLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICB3YXZlLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICB3YXZlLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIHdhdmUuc3RyZXRjaCA9IG9wdGlvbnMuc3RyZXRjaDtcblxuICB3YXZlLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KSh3YXZlLnRpbWUsIDAuNSk7XG4gIHdhdmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICB3YXZlLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogd2F2ZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiB3YXZlLmxlbmd0aCAvIDIgLSB3YXZlLnN0cmV0Y2gsIHk6IDAgfSwgY3BvaW50MjogeyB4OiB3YXZlLmxlbmd0aCAvIDIgKyB3YXZlLnN0cmV0Y2gsIHk6IDAgfSB9KTtcbiAgd2F2ZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiB3YXZlLmJlemllckN1cnZlIH0pO1xuXG4gIHdhdmUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHdhdmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgd2F2ZS5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuZW5kLnkgPSAoY3VycmVudCAtIDAuNSkgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDIueSA9ICh0aGlzLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuMjUpIC0gMC41KSAqIDEuNSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gKHRoaXMucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC41KSAtIDAuNSkgKiAxLjUgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLmJlemllckN1cnZlLnN0YXJ0LnkgPSAodGhpcy5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjc1KSAtIDAuNSkgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gd2F2ZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2F2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uX3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyKTtcblxudmFyIF9yYW5kb21fcGFydF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXInKTtcblxudmFyIF9yYW5kb21fcGFydF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fcGFydF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYmV6aWVyID0gcmVxdWlyZSgnLi9iZXppZXIvYmV6aWVyJyk7XG5cbnZhciBfYmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNpdGlvblBhdGhEcmF3ZXI6IF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyMi5kZWZhdWx0LFxuICByYW5kb21QYXJ0UGF0aERyYXdlcjogX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyMi5kZWZhdWx0LFxuICBiZXppZXI6IF9iZXppZXIyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoX21hZ2ljLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgcGF0aERyYXdlciA9IHt9O1xuXG4gIC8vIEhhbmRsZSBwYXJhbWV0ZXJzOlxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoT3B0aW9ucycsIGZhbHNlLCB7fSk7XG4gIHBhdGhEcmF3ZXIucGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgb3B0aW9ucy5wYXRoT3B0aW9ucy5wYXRoID0gcGF0aERyYXdlci5wYXRoO1xuXG4gIC8vIEluaXRcbiAgcGF0aERyYXdlci5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkob3B0aW9ucy5wYXRoT3B0aW9ucyk7XG4gIHBhdGhEcmF3ZXIudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuXG4gIHBhdGhEcmF3ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBhdGhWaWV3LmNvbXBsZXRlUGF0aCA9IHRoaXMucGF0aC5nZXRQYXJ0UGF0aChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcGF0aERyYXdlcjtcbn07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uLy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgcGF0aERyYXdlciA9IHt9O1xuXG4gIC8vIEhhbmRsZSBQYXJhbWV0ZXJzXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGhPcHRpb25zJywgdHJ1ZSk7XG4gIG9wdGlvbnMucGF0aE9wdGlvbnMucGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgcGF0aERyYXdlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIC8vIEluaXRcbiAgcGF0aERyYXdlci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoMTAwMCwgMSk7XG4gIHBhdGhEcmF3ZXIucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKG9wdGlvbnMucGF0aE9wdGlvbnMpO1xuICBwYXRoRHJhd2VyLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBwYXRoRHJhd2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0YXJ0KHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RvcCgpO1xuICAgIHRoaXMudmlldy5yZW1vdmVDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB0aGlzLnBhdGhWaWV3LmNvbXBsZXRlUGF0aCA9IHRoaXMucGF0aC5nZXRQYXJ0UGF0aChjdXJyZW50KTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcGF0aERyYXdlcjtcbn07XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd2aXNpYmxlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIGZhbHNlLCBbXSk7XG5cbiAgdmFyIHJhbmRvbUthcm9Td2l0Y2ggPSB7fTtcbiAgcmFuZG9tS2Fyb1N3aXRjaC5jaGlsZHJlbiA9IG9wdGlvbnMuY2hpbGRyZW47XG4gIHJhbmRvbUthcm9Td2l0Y2gudmlzaWJsZSA9IG9wdGlvbnMudmlzaWJsZTtcbiAgcmFuZG9tS2Fyb1N3aXRjaC5zcGFjaW5nID0gb3B0aW9ucy5zcGFjaW5nO1xuICByYW5kb21LYXJvU3dpdGNoLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gIHJhbmRvbUthcm9Td2l0Y2guX2dyb3VwID0gKDAsIF9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQpKHsgJ2NoaWxkcmVuJzogcmFuZG9tS2Fyb1N3aXRjaC5jaGlsZHJlbiwgJ2NvbHVtbnMnOiByYW5kb21LYXJvU3dpdGNoLmNvbHVtbnMsICdzcGFjaW5nJzogcmFuZG9tS2Fyb1N3aXRjaC5zcGFjaW5nIH0pO1xuXG4gIHJhbmRvbUthcm9Td2l0Y2gudmlldyA9IHJhbmRvbUthcm9Td2l0Y2guX2dyb3VwLnZpZXc7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC5zd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhbmRvbU51bWJlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhbmRvbU51bWJlcnMucHVzaChpKTtcbiAgICB9XG4gICAgc2h1ZmZsZShyYW5kb21OdW1iZXJzKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChqIDwgdGhpcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuX2dyb3VwLmNoaWxkcmVuW3JhbmRvbU51bWJlcnNbal1dLnZpZXcuYWxwaGEgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZ3JvdXAuY2hpbGRyZW5bcmFuZG9tTnVtYmVyc1tqXV0udmlldy5hbHBoYSA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNodWZmbGUoYSkge1xuICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aDsgaTsgaS0tKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xuICAgICAgdmFyIF9yZWYgPSBbYVtqXSwgYVtpIC0gMV1dO1xuICAgICAgYVtpIC0gMV0gPSBfcmVmWzBdO1xuICAgICAgYVtqXSA9IF9yZWZbMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUthcm9Td2l0Y2g7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4uLy4uL2ZpbHRlcnMvZ3JvdXAvcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZV9ncm91cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3N3aXRjaC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Zpc2libGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgZmFsc2UsIFtdKTtcblxuICB2YXIgc3dpdGNoSW50ZXJ2YWwgPSB7fTtcblxuICBzd2l0Y2hJbnRlcnZhbC5fZ3JvdXBTd2l0Y2ggPSAoMCwgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMi5kZWZhdWx0KShvcHRpb25zKTtcbiAgc3dpdGNoSW50ZXJ2YWwuX2dyb3VwU3dpdGNoVGltZXIgPSAoMCwgX2ludGVydmFsX3RpbWVyMi5kZWZhdWx0KShvcHRpb25zLmludGVydmFsKTtcblxuICBzd2l0Y2hJbnRlcnZhbC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9ncm91cFN3aXRjaFRpbWVyLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLl9ncm91cFN3aXRjaFRpbWVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9ncm91cFN3aXRjaFRpbWVyLnN0b3AoKTtcbiAgICB0aGlzLl9ncm91cFN3aXRjaFRpbWVyLnJlbW92ZUxpc3RlbmVyKHRoaXMuaGFuZGxlKTtcbiAgfTtcblxuICBzd2l0Y2hJbnRlcnZhbC52aWV3ID0gc3dpdGNoSW50ZXJ2YWwuX2dyb3VwU3dpdGNoLnZpZXc7XG5cbiAgc3dpdGNoSW50ZXJ2YWwuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2dyb3VwU3dpdGNoLnN3aXRjaCgpO1xuICB9O1xuXG4gIHJldHVybiBzd2l0Y2hJbnRlcnZhbDtcbn07XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2ggPSByZXF1aXJlKCcuL3JhbmRvbV9zcXVhcmVfc3dpdGNoJyk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV9zd2l0Y2gpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyID0gcmVxdWlyZSgnLi4vLi4vdGltZXJzL2ludGVydmFsX3RpbWVyJyk7XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfdGltZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2x1bW5zJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndmlzaWJsZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnem9vbVNwZWVkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCBmYWxzZSwgW10pO1xuXG4gIHZhciByYW5kb21LYXJvU3dpdGNoID0ge307XG4gIHJhbmRvbUthcm9Td2l0Y2guY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgcmFuZG9tS2Fyb1N3aXRjaC52aXNpYmxlID0gb3B0aW9ucy52aXNpYmxlO1xuICByYW5kb21LYXJvU3dpdGNoLnNwYWNpbmcgPSBvcHRpb25zLnNwYWNpbmc7XG4gIHJhbmRvbUthcm9Td2l0Y2guem9vbVNwZWVkID0gb3B0aW9ucy56b29tU3BlZWQ7XG4gIHJhbmRvbUthcm9Td2l0Y2guY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuO1xuICByYW5kb21LYXJvU3dpdGNoLl96b29tT3V0Q29tcG9uZW50cyA9IFtdO1xuXG4gIHZhciBncm91cCA9ICgwLCBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0KSh7ICdjaGlsZHJlbic6IHJhbmRvbUthcm9Td2l0Y2guY2hpbGRyZW4sICdjb2x1bW5zJzogcmFuZG9tS2Fyb1N3aXRjaC5jb2x1bW5zLCAnc3BhY2luZyc6IHJhbmRvbUthcm9Td2l0Y2guc3BhY2luZyB9KTtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gZ3JvdXAuY2hpbGRyZW5bU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgY2hpbGQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgcmFuZG9tS2Fyb1N3aXRjaC5fem9vbU91dENvbXBvbmVudHMucHVzaCgoMCwgX3pvb21fb3V0Mi5kZWZhdWx0KSh7IHN1YmplY3Q6IGNoaWxkLCBzcGVlZDogcmFuZG9tS2Fyb1N3aXRjaC56b29tU3BlZWQgfSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByYW5kb21LYXJvU3dpdGNoLnZpZXcgPSBncm91cC52aWV3O1xuXG4gIHJhbmRvbUthcm9Td2l0Y2guem9vbU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmFuZG9tTnVtYmVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgcmFuZG9tTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgICBzaHVmZmxlKHJhbmRvbU51bWJlcnMpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGogPCB0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5fem9vbU91dENvbXBvbmVudHNbcmFuZG9tTnVtYmVyc1tqXV0uc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgZm9yICh2YXIgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICB2YXIgX3JlZiA9IFthW2pdLCBhW2kgLSAxXV07XG4gICAgICBhW2kgLSAxXSA9IF9yZWZbMF07XG4gICAgICBhW2pdID0gX3JlZlsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFuZG9tS2Fyb1N3aXRjaDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwID0gcmVxdWlyZSgnLi4vLi4vZmlsdGVycy9ncm91cC9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlX2dyb3VwKTtcblxudmFyIF96b29tX291dCA9IHJlcXVpcmUoJy4uL3pvb21fc3R1ZmYvem9vbV9vdXQnKTtcblxudmFyIF96b29tX291dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3pvb21fb3V0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3N3aXRjaCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfc3dpdGNoKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbCk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV96b29tX291dCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV96b29tX291dCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfem9vbV9vdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmFuZG9tU3F1YXJlU3dpdGNoOiBfcmFuZG9tX3NxdWFyZV9zd2l0Y2gyLmRlZmF1bHQsXG4gIHJhbmRvbVNxdWFyZVN3aXRjaEludGVydmFsOiBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwyLmRlZmF1bHQsXG4gIHJhbmRvbVNxdWFyZVpvb21PdXQ6IF9yYW5kb21fc3F1YXJlX3pvb21fb3V0Mi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlX2dyb3VwX3N0dWZmLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgb3B0aW9ucy5udW1iZXJPZkludGVydmFscyA9IDE7XG4gIG9wdGlvbnMubGltaXQgPSAwO1xuICBvcHRpb25zLnJpc2luZyA9IHRydWU7XG4gIG9wdGlvbnMuY2VudGVySWZQb3NzaWJsZSA9IHRydWU7XG5cbiAgdmFyIHpvb21PdXQgPSB7fTtcbiAgem9vbU91dC5fem9vbWVyID0gKDAsIF9saW5lYXJfcHVsc2FyMi5kZWZhdWx0KShvcHRpb25zKTtcblxuICB6b29tT3V0LnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3pvb21lci5zdGFydCgpO1xuICB9O1xuXG4gIHpvb21PdXQuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl96b29tZXIuc3RvcCgpO1xuICB9O1xuXG4gIHJldHVybiB6b29tT3V0O1xufTtcblxudmFyIF9saW5lYXJfcHVsc2FyID0gcmVxdWlyZSgnLi4vLi4vbW9kaWZpY2F0b3JzL3NjYWxlL2xpbmVhcl9wdWxzYXInKTtcblxudmFyIF9saW5lYXJfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9wdWxzYXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbV9vdXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfem9vbV9vdXQgPSByZXF1aXJlKCcuL3pvb21fb3V0Jyk7XG5cbnZhciBfem9vbV9vdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbV9vdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHpvb21PdXQ6IF96b29tX291dDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb21fc3R1ZmYuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgICAgdmFyIGNvbXBvbmVudCA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgY29tcG9uZW50LnZpZXcgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICAgIGNvbXBvbmVudC5zY2FsZSA9IDE7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3Rfc2hhcGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NpcmNsZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgICAgdmFyIGNpcmNsZSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG5cbiAgICAgIC8qIHB1YmxpYyBwcm9wZXJ0aWVzICovXG4gICAgICBjaXJjbGUuY2lyY2xlU2hhcGUgPSBvcHRpb25zLmNpcmNsZVNoYXBlO1xuICAgICAgY2lyY2xlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgLyogcHVibGljIG1ldGhvZHMgKi9cbiAgICAgIGNpcmNsZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdDaXJjbGUoMCwgMCwgdGhpcy5jaXJjbGVTaGFwZS5yYWRpdXMgKiB0aGlzLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIGNpcmNsZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUgKiAyO1xuICAgICAgfTtcblxuICAgICAgY2lyY2xlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUgKiAyO1xuICAgICAgfTtcblxuICAgICAgLyogaW5pdCAqL1xuICAgICAgY2lyY2xlLmRyYXcoKTtcbiAgICAgIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IGNyZWF0ZWpzLkNvbnRhaW5lcigpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjdXN0b21TaGFwZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG4gIGN1c3RvbS5jdXN0b21TaGFwZSA9IG9wdGlvbnMuY3VzdG9tU2hhcGU7XG4gIGN1c3RvbS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmNvbG9yKS5iZWdpblN0cm9rZSgnIzAwRicpLm1vdmVUbygwLCAwKTtcbiAgICB2YXIgY3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmN1c3RvbVNoYXBlLnBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0odGhpcy52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY3VzdG9tLmRyYXcoKTtcbiAgcmV0dXJuIGN1c3RvbTtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9oZWxwZXIvcGF0aF9kcmF3ZXInKTtcblxudmFyIF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tX29iamVjdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKmVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSovXG5mdW5jdGlvbiBwYXRoRHJhd2VyKCkge31cblxucGF0aERyYXdlci5saW5lID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLmxpbmVUbyhjdXJyZW50LnggKyBwYXRoLmdldEVkZ2VQb2ludCgpLngsIGN1cnJlbnQueSArIHBhdGguZ2V0RWRnZVBvaW50KCkueSk7XG59O1xuXG5wYXRoRHJhd2VyLmFyYyA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBpZiAocGF0aC5kZWdyZWVzIDwgMCkge1xuICAgIGdyYXBoaWNzLmFyYyhwYXRoLnN0YXJ0LngsIHBhdGguc3RhcnQueSAtIHBhdGgucmFkaXVzLCBwYXRoLnJhZGl1cywgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSg5MCksICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoOTAgKyBwYXRoLmRlZ3JlZXMpLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBncmFwaGljcy5hcmMocGF0aC5zdGFydC54LCBwYXRoLnN0YXJ0LnkgKyBwYXRoLnJhZGl1cywgcGF0aC5yYWRpdXMsICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoLTkwKSwgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXRoLmRlZ3JlZXMgLSA5MCkpO1xuICB9XG59O1xuXG5wYXRoRHJhd2VyLnNpbmVfd2F2ZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHBhdGguZ2V0TGVuZ3RoKCk7IHggKz0gNSkge1xuICAgIHZhciBwb2ludCA9IHBhdGguZ2V0UG9pbnQoeCAvIHBhdGguZ2V0TGVuZ3RoKCkpO1xuICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfVxufTtcblxucGF0aERyYXdlci5iZXppZXJfY3VydmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgaWYgKHBhdGguY3BvaW50Mikge1xuICAgIGdyYXBoaWNzLmJlemllckN1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmNwb2ludDIueCwgcGF0aC5jcG9pbnQyLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xuICB9IGVsc2Uge1xuICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aERyYXdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XG5cbiAgdmFyIGltYWdlID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgaW1hZ2UudmlldyA9IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpO1xuXG4gIGltYWdlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy52aWV3LnNjYWxlWCA9IHRoaXMuc2NhbGU7XG4gICAgdGhpcy52aWV3LnNjYWxlWSA9IHRoaXMuc2NhbGU7XG4gIH07XG5cbiAgaW1hZ2UuZHJhdygpO1xuICByZXR1cm4gaW1hZ2U7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBsaW5lID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsaW5lUGF0aCcsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aGlja25lc3MnLCBmYWxzZSwgMSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIGxpbmUucGF0aCA9IG9wdGlvbnMubGluZVBhdGg7XG4gICAgICBsaW5lLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGxpbmUudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3M7XG5cbiAgICAgIGxpbmUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMudGhpY2tuZXNzICogdGhpcy5zY2FsZSkubW92ZVRvKHRoaXMucGF0aC5zdGFydC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLnN0YXJ0LnkgKiB0aGlzLnNjYWxlKS5saW5lVG8odGhpcy5wYXRoLmVuZC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLmVuZC55ICogdGhpcy5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnBhdGguZW5kLnggLSB0aGlzLnBhdGguc3RhcnQueCkgKiB0aGlzLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgbGluZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucGF0aC5lbmQueSAtIHRoaXMucGF0aC5zdGFydC55KSAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmRyYXcoKTtcbiAgICAgIHJldHVybiBsaW5lO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGlkKTtcblxuICAgIHZhciBjb250YWluZXIgPSB7fTtcblxuICAgIGNvbnRhaW5lci5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UucmVtb3ZlQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YWdlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5zdGFnZSA9IHN0YWdlO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluX2NvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEpO1xuXG4gICAgICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgICAgIGN1c3RvbS5jb21wbGV0ZVBhdGggPSBvcHRpb25zLnBhdGg7XG4gICAgICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgY3VzdG9tLndpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgICAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpblN0cm9rZSh0aGlzLmNvbG9yKS5zZXRTdHJva2VTdHlsZSh0aGlzLndpZHRoKS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmNvbXBsZXRlUGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXRoX2RyYXdlcjIuZGVmYXVsdFtwYXRoLnR5cGVdKHRoaXMudmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGN1c3RvbS5kcmF3KCk7XG4gICAgICByZXR1cm4gY3VzdG9tO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL2hlbHBlci9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhfZHJhd2VyKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cycpO1xuXG52YXIgX2FkZF91cF9wb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkX3VwX3BvaW50cyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyZWN0YW5nbGVTaGFwZScsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICB2YXIgcmVjdCA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcbiAgICAgIHJlY3QuaGVpZ2h0ID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS5oZWlnaHQ7XG4gICAgICByZWN0LmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgcmVjdC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZHJhdygpO1xuICAgICAgcmV0dXJuIHJlY3Q7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzcXVhcmVDb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3F1YXJlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgdmFyIHNxdWFyZSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICBzcXVhcmUuc3F1YXJlU2hhcGUgPSBvcHRpb25zLnNxdWFyZVNoYXBlO1xuICAgICAgc3F1YXJlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgc3F1YXJlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd1JlY3QoMCwgMCwgdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZSwgdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHNxdWFyZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHNxdWFyZS5kcmF3KCk7XG4gICAgICByZXR1cm4gc3F1YXJlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBzcXVhcmVDb25zdHJ1Y3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cbiAgICAgIGhhbmRsZVZpZGVvU291cmNlKCk7XG5cbiAgICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgICAgdmFyIHZpZGVvID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgLyogcHVibGljIHByb3BlcnRpZXMgKi9cbiAgICAgIHZpZGVvLnZpZXcgPSBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKTtcbiAgICAgIHZpZGVvLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICAgICAgLyogcHVibGljIG1ldGhvZHMgKi9cbiAgICAgIHZpZGVvLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NhbGVYID0gdmlkZW8uc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NhbGVZID0gdmlkZW8uc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICB2aWRlby5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UucGxheSgpO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8uc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICB9O1xuXG4gICAgICB2aWRlby5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnBhdXNlKCk7XG4gICAgICB9O1xuXG4gICAgICAvKiBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgICAgICAgICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBpbml0ICovXG4gICAgICB2aWRlby5kcmF3KCk7XG4gICAgICByZXR1cm4gdmlkZW87XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZGVvLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX21haW5fY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJyk7XG5cbnZhciBfbWFpbl9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbl9jb250YWluZXIpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY3VzdG9tX29iamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0Jyk7XG5cbnZhciBfY3VzdG9tX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21fb2JqZWN0KTtcblxudmFyIF9pbWFnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbWFnZScpO1xuXG52YXIgX2ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlKTtcblxudmFyIF92aWRlbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlbycpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY29udGFpbmVyOiBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHQsXG4gICAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICAgIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICAgIGN1c3RvbU9iamVjdDogX2N1c3RvbV9vYmplY3QyLmRlZmF1bHQsXG4gICAgbWFpbkNvbnRhaW5lcjogX21haW5fY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIGltYWdlOiBfaW1hZ2UyLmRlZmF1bHQsXG4gICAgdmlkZW86IF92aWRlbzIuZGVmYXVsdCxcbiAgICBwYXRoOiBfcGF0aDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWx0ZXIgPSAoMCwgX2Fic3RyYWN0X2NvbXBvbmVudDIuZGVmYXVsdCkoKTtcblxuICAgIGZpbHRlci52aWV3ID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG5cbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2ZpbHRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XG5cbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25fZmlsdGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgIHZhciBhYnN0cmFjdEdyb3VwID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gICAgYWJzdHJhY3RHcm91cC5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfTtcblxuICAgIGFic3RyYWN0R3JvdXAucmVtb3ZlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCksIDEpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFic3RyYWN0R3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIGZhbHNlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICB2YXIgY2VudGVyR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjZW50ZXJHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgY2VudGVyR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpZXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGhpcy5jaGlsZHJlbltpXS52aWV3KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIueCA9IGNvbnRhaW5lci54ID0gKGkgKyAxKSAqIHRoaXMud2lkdGggLyAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnkgPSBjb250YWluZXIueCA9IChpICsgMSkgKiB0aGlzLmhlaWdodCAvICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIGNlbnRlckdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlbnRlcl9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgZmFsc2UsIDEwKTtcbiAgICB2YXIgY2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjaXJjbGVHcm91cC5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcblxuICAgIHZhciBhbmdsZSA9IDM2MCAvIGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgdmFyIGlubmVyQ29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5yb3RhdGlvbiA9IGFuZ2xlICogaTtcbiAgICAgICAgaW5uZXJDb250YWluZXIueSA9IC1jaXJjbGVHcm91cC5yYWRpdXM7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKGNpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBjaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNpcmNsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfY2lyY2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vc3BpcmFsX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3NwaXJhbF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BpcmFsX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfY2VudGVyX2dyb3VwID0gcmVxdWlyZSgnLi9jZW50ZXJfZ3JvdXAnKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudGVyX2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGVHcm91cDogX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCxcbiAgcmFuZG9tUmVjdGFuZ2xlR3JvdXA6IF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICBjaXJjbGVHcm91cDogX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgc3BpcmFsQ2lyY2xlR3JvdXA6IF9zcGlyYWxfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21DaXJjbGVHcm91cDogX3JhbmRvbV9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNlbnRlckdyb3VwOiBfY2VudGVyX2dyb3VwMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYW5kb21SYW5nZScsIGZhbHNlLCAxMCk7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2lyY2xlR3JvdXAucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gICAgY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgPSBvcHRpb25zLnJhbmRvbVJhbmdlO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpcmNsZUdyb3VwLnJhbmRvbVJhbmdlIC0gY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgKiAwLjUpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgY2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjaXJjbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCBmYWxzZSwgMTApO1xuXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgcmVjdGFuZ2xlR3JvdXAud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHJlY3RhbmdsZUdyb3VwLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgICAgICBjb250YWluZXIueCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZWN0YW5nbGVHcm91cC5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9yZWN0YW5nbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCBmYWxzZSwgMyk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UsIDEwKTtcblxuICAgIHZhciByZWN0YW5nbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICByZWN0YW5nbGVHcm91cC5zcGFjaW5nID0gb3B0aW9ucy5zcGFjaW5nO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLnggPSBpICUgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XG4gICAgICAgIGNvbnRhaW5lci55ID0gTWF0aC5mbG9vcihpIC8gcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xuICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnRSYWRpdXMnLCBmYWxzZSwgMTApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZFJhZGl1cycsIGZhbHNlLCAxKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyb3VuZHMnLCBmYWxzZSwgMSk7XG5cbiAgdmFyIHNwaXJhbENpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzID0gb3B0aW9ucy5zdGFydFJhZGl1cztcbiAgc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzID0gb3B0aW9ucy5lbmRSYWRpdXM7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyA9IG9wdGlvbnMucm91bmRzO1xuXG4gIHZhciBhbmdsZSA9IDM2MCAqIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgdmFyIHJhZGl1c0luY3JlYXNlQW1vdW50ID0gKHNwaXJhbENpcmNsZUdyb3VwLmVuZFJhZGl1cyAtIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzKSAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgaW5uZXJDb250YWluZXIueSA9IC0oc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMgKyByYWRpdXNJbmNyZWFzZUFtb3VudCAqIGkpO1xuICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgc3BpcmFsQ2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIHNwaXJhbENpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwaXJhbF9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XG5cbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubW9kaWZpY2F0b3Iuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB0aGlzLm1vZGlmaWNhdG9yLnN0b3AoKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGlmaWNhdG9yX2ZpbHRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIGNlbnRlckZpbHRlciA9ICgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpO1xuXG4gICAgLyogcHVibGljIHZhcnMgKi9cbiAgICBjZW50ZXJGaWx0ZXIud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIGNlbnRlckZpbHRlci5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNlbnRlckZpbHRlci5vblByb3BlcnR5Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcueCA9IHRoaXMud2lkdGggLyAyIC0gdGhpcy5nZXRDaGlsZCgpLmdldFdpZHRoKCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcueSA9IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuZ2V0Q2hpbGQoKS5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2VudGVyRmlsdGVyLm9uUHJvcGVydHlDaGFuZ2UoKTtcbiAgICAvKiByZXR1cm4gKi9cbiAgICByZXR1cm4gY2VudGVyRmlsdGVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jZW50cmFsaXplci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jZW50cmFsaXplciA9IHJlcXVpcmUoJy4vY2VudGVyL2NlbnRyYWxpemVyJyk7XG5cbnZhciBfY2VudHJhbGl6ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudHJhbGl6ZXIpO1xuXG52YXIgX3BhdGhNb3ZlciA9IHJlcXVpcmUoJy4vcGF0aC9wYXRoLW1vdmVyJyk7XG5cbnZhciBfcGF0aE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhNb3Zlcik7XG5cbnZhciBfbGluZWFyID0gcmVxdWlyZSgnLi9wb2ludDJwb2ludC9saW5lYXInKTtcblxudmFyIF9saW5lYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyKTtcblxudmFyIF9saW5lYXJfc2hha2UgPSByZXF1aXJlKCcuL3BvaW50MnBvaW50L2xpbmVhcl9zaGFrZScpO1xuXG52YXIgX2xpbmVhcl9zaGFrZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfc2hha2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNlbnRlcjoge1xuICAgIGNlbnRyYWxpemVyOiBfY2VudHJhbGl6ZXIyLmRlZmF1bHRcbiAgfSxcbiAgcGF0aDoge1xuICAgIHBhdGhNb3ZlcjogX3BhdGhNb3ZlcjIuZGVmYXVsdFxuICB9LFxuICBsaW5lYXI6IHtcbiAgICBsaW5lYXI6IF9saW5lYXIyLmRlZmF1bHQsXG4gICAgbGluZWFyU2hha2U6IF9saW5lYXJfc2hha2UyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuXG4gIHZhciBwYXRoTW92ZXIgPSAoMCwgX3RyYW5zaXRpb25fZmlsdGVyMi5kZWZhdWx0KSgoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIHBhdGhNb3Zlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgcGF0aE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5wYXRoLmdldFBvaW50KGN1cnJlbnQpO1xuICAgIHRoaXMudmlldy54ID0gcG9pbnQueDtcbiAgICB0aGlzLnZpZXcueSA9IHBvaW50Lnk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9uX2ZpbHRlcicpO1xuXG52YXIgX3RyYW5zaXRpb25fZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLW1vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAvKiBQcml2YXRlIHZhcnMgKi9cbiAgICB2YXIgbGluZWFyUDJQTW92ZXIgPSAoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfbW9kaWZpY2F0b3JfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkob3B0aW9ucykpLCBvcHRpb25zKTtcblxuICAgIG9wdGlvbnMuc3ViamVjdCA9IGxpbmVhclAyUE1vdmVyLnZpZXc7XG4gICAgbGluZWFyUDJQTW92ZXIubW9kaWZpY2F0b3IgPSAoMCwgX2xpbmVfbW92ZXIyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxpbmVhclAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcl9maWx0ZXInKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kaWZpY2F0b3JfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfbGluZV9tb3ZlciA9IHJlcXVpcmUoJy4uLy4uLy4uL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9saW5lX21vdmVyJyk7XG5cbnZhciBfbGluZV9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lX21vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIGxpbmVhclAyUE1vdmVyID0gKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX21vZGlmaWNhdG9yX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKG9wdGlvbnMpKSwgb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLnN1YmplY3QgPSBsaW5lYXJQMlBNb3Zlci52aWV3O1xuICAgIGxpbmVhclAyUE1vdmVyLm1vZGlmaWNhdG9yID0gKDAsIF9saW5lX3NoYWtlX21vdmVyMi5kZWZhdWx0KShvcHRpb25zKTtcblxuICAgIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfbW9kaWZpY2F0b3JfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vbW9kaWZpY2F0b3JfZmlsdGVyJyk7XG5cbnZhciBfbW9kaWZpY2F0b3JfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGlmaWNhdG9yX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJy4uLy4uL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX2xpbmVfc2hha2VfbW92ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9tb2RpZmljYXRvcnMvcG9zaXRpb24vbGluZV9zaGFrZV9tb3ZlcicpO1xuXG52YXIgX2xpbmVfc2hha2VfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZV9zaGFrZV9tb3Zlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfc2hha2UuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBmYWRlciA9ICgwLCBfdHJhbnNpdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIGZhZGVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHRoaXMudmlldy5hbHBoYSA9IGN1cnJlbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBmYWRlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJy4uL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX3RyYW5zaXRpb25fZmlsdGVyID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGZsYXNoZXIgPSAoMCwgX2FuaW1hdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIGZsYXNoZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgdGhpcy52aWV3LnZpc2libGUgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xuICAgIH07XG5cbiAgICByZXR1cm4gZmxhc2hlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJy4uL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX2FuaW1hdGlvbl9maWx0ZXIgPSByZXF1aXJlKCcuLi9hbmltYXRpb25fZmlsdGVyJyk7XG5cbnZhciBfYW5pbWF0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmltYXRpb25fZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsYXNoZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgZmFsc2UsIDEpO1xuICB2YXIgbGluZWFyUm90YXRvciA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuICBsaW5lYXJSb3RhdG9yLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgbGluZWFyUm90YXRvci52aWV3LmFkZENoaWxkKG9wdGlvbnMuY2hpbGQudmlldyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgdGhpcy52aWV3LnJvdGF0aW9uID0gdGhpcy52aWV3LnJvdGF0aW9uICsgdGhpcy5zcGVlZCAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICB9XG5cbiAgbGluZWFyUm90YXRvci5oYW5kbGUgPSBoYW5kbGU7XG5cbiAgcmV0dXJuIGxpbmVhclJvdGF0b3I7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3JvdGF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZpbHRlciwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXG4gICAgZmlsdGVyLl9jaGlsZCA9IG9wdGlvbnMuY2hpbGQ7XG5cbiAgICAvKiBjYWxsYmFja3MgKi9cbiAgICBmaWx0ZXIuX19vblByb3BlcnR5Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMub25Qcm9wZXJ0eUNoYW5nZSkge1xuICAgICAgICAgICAgX3RoaXMub25Qcm9wZXJ0eUNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnNlbmRFdmVudCgncHJvcGVydHlfY2hhbmdlJyk7XG4gICAgfTtcblxuICAgIC8qIG1ldGhvZHMgKi9cbiAgICBmaWx0ZXIuc2V0Q2hpbGQgPSBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoaWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5X2NoYW5nZScsIHRoaXMuX19vblByb3BlcnR5Q2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICBpZiAodGhpcy5fY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcigncHJvcGVydHlfY2hhbmdlJywgdGhpcy5fX29uUHJvcGVydHlDaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLl9jaGlsZC52aWV3KTtcbiAgICB9O1xuXG4gICAgZmlsdGVyLmdldENoaWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGQ7XG4gICAgfTtcblxuICAgIC8qIGluaXQgKi9cbiAgICBmaWx0ZXIuc2V0Q2hpbGQob3B0aW9ucy5jaGlsZCk7XG4gICAgcmV0dXJuIGZpbHRlcjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW5nbGVfY2hpbGRfZmlsdGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmaWx0ZXIsIG9wdGlvbnMpIHtcblxuICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XG5cbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICBmaWx0ZXIuX2ZpbHRlclRyYW5zaXRpb24gPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkob3B0aW9ucy5pbnRlcnZhbCwgMC41KTtcblxuICAgIC8qIFB1YmxpYyBtZXRob2RzICovXG4gICAgZmlsdGVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9maWx0ZXJUcmFuc2l0aW9uLnN0YXJ0KHRoaXMuaGFuZGxlKTtcbiAgICB9O1xuXG4gICAgZmlsdGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlclRyYW5zaXRpb24uc3RvcCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25fZmlsdGVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwb2ludDEsIHBvaW50Mikge1xuICB2YXIgcG9pbnQgPSB7fTtcbiAgcG9pbnQueCA9IHBvaW50MS54ICsgcG9pbnQyLng7XG4gIHBvaW50LnkgPSBwb2ludDEueSArIHBvaW50Mi55O1xuICByZXR1cm4gcG9pbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRkX3VwX3BvaW50cy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZlY3RvcjEsIHZlY3RvcjIpIHtcbiAgaWYgKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCkge1xuICAgIHRocm93ICdDYW5ub3QgY2FsY3VsYXRlIGRpc3RhbmNlIG9mIHZlY3RvcnMgd2l0aCBkaWZmZXJlbnQgbnVtYmVycyBvZiBkaW1lbnNpb25zJztcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICBkaXN0YW5jZSArPSBNYXRoLnBvdyh2ZWN0b3IxW2ldIC0gdmVjdG9yMltpXSwgMik7XG4gIH1cbiAgcmV0dXJuIE1hdGguc3FydChkaXN0YW5jZSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlzdGFuY2UuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFuZ2xlKSB7XG4gIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5nbGVfdG9fcmFkaWFucy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFuZ2xlLCBsZW5ndGgpIHtcbiAgdmFyIHJhZCA9ICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoYW5nbGUpO1xuICByZXR1cm4geyB4OiBNYXRoLmNvcyhyYWQpICogbGVuZ3RoLCB5OiBNYXRoLnNpbihyYWQpICogbGVuZ3RoIH07XG59O1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMgPSByZXF1aXJlKCcuL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVncmVlc190b19jb29yZGluYXRlcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFyY0NvbnN0cnVjdG9yO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMgPSByZXF1aXJlKCcuLi9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFyY0NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAvLyBQYXJhbWV0ZXJzXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2RlZ3JlZXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcblxuICAvLyBwcml2YXRlIHZhcnNcbiAgdmFyIGFyYyA9IHt9O1xuXG4gIGFyYy5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gIGFyYy5kZWdyZWVzID0gb3B0aW9ucy5kZWdyZWVzO1xuICBhcmMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gIGFyYy50eXBlID0gJ2FyYyc7XG5cbiAgLy8gcHVibGljIGZ1bmN0aW9uc1xuICBhcmMuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFBvaW50KDEpO1xuICB9O1xuXG4gIGFyYy5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKDIgKiBNYXRoLlBJICogdGhpcy5yYWRpdXMgKiAodGhpcy5kZWdyZWVzIC8gMzYwKSk7XG4gIH07XG5cbiAgYXJjLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG9yaWdpbiA9IHsgeDogdGhpcy5zdGFydC54LCB5OiB0aGlzLnN0YXJ0LnkgfTtcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IHRoaXMuZGVncmVlcyAqIHByb2dyZXNzO1xuXG4gICAgaWYgKHRoaXMuZGVncmVlcyA8IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IG9yaWdpbi54ICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKC1wYXJ0T2ZEZWdyZWVzKSksXG4gICAgICAgIHk6IG9yaWdpbi55IC0gdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIE1hdGguY29zKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGFydE9mRGVncmVlcykpXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBvcmlnaW4ueCArIHRoaXMucmFkaXVzICogTWF0aC5zaW4oKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSksXG4gICAgICB5OiBvcmlnaW4ueSArIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiAtTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICB9O1xuICB9O1xuXG4gIGFyYy5zdWJQYXRocyA9IFthcmNdO1xuXG4gIGFyYy5nZXRBbmdsZSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHRoaXMuZGVncmVlcyAqIHByb2dyZXNzKTtcbiAgfTtcblxuICBhcmMuZ2V0UGFydFBhdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IHRoaXMuZGVncmVlcyAqIHByb2dyZXNzO1xuICAgIHJldHVybiBhcmNDb25zdHJ1Y3Rvcih7IHN0YXJ0OiB0aGlzLnN0YXJ0LCBkZWdyZWVzOiBwYXJ0T2ZEZWdyZWVzLCByYWRpdXM6IHRoaXMucmFkaXVzIH0pO1xuICB9O1xuXG4gIHJldHVybiBhcmM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcmMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZW5kJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3BvaW50MScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Nwb2ludDInLCBmYWxzZSk7XG5cbiAgdmFyIGJlemllckN1cnZlID0ge307XG4gIGJlemllckN1cnZlLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgYmV6aWVyQ3VydmUuZW5kID0gb3B0aW9ucy5lbmQ7XG4gIGJlemllckN1cnZlLmNwb2ludDEgPSBvcHRpb25zLmNwb2ludDE7XG4gIGJlemllckN1cnZlLmNwb2ludDIgPSBvcHRpb25zLmNwb2ludDI7XG4gIGJlemllckN1cnZlLnR5cGUgPSAnYmV6aWVyX2N1cnZlJztcblxuICBpZiAoYmV6aWVyQ3VydmUuY3BvaW50Mikge1xuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IF9iZXppZXJKczIuZGVmYXVsdChiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuY3BvaW50MiwgYmV6aWVyQ3VydmUuZW5kKTtcbiAgfSBlbHNlIHtcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBfYmV6aWVySnMyLmRlZmF1bHQoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmVuZCk7XG4gIH1cblxuICBiZXppZXJDdXJ2ZS5zdWJQYXRocyA9IFtiZXppZXJDdXJ2ZV07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmVuZDtcbiAgfTtcblxuICBiZXppZXJDdXJ2ZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxCZXppZXIubGVuZ3RoKCk7XG4gIH07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJlemllci5nZXQocHJvZ3Jlc3MpO1xuICB9O1xuXG4gIC8vVE9ETyBBZGQgZ2V0IHBhcnQgcGF0aCBmdW5jdGlvblxuXG4gIHJldHVybiBiZXppZXJDdXJ2ZTtcbn07XG5cbnZhciBfYmV6aWVySnMgPSByZXF1aXJlKCdiZXppZXItanMnKTtcblxudmFyIF9iZXppZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJKcyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXppZXJfY3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5lQ29uc3RydWN0b3I7XG5cbnZhciBfdG9fdmVjdG9yID0gcmVxdWlyZSgnLi4vdG9fdmVjdG9yJyk7XG5cbnZhciBfdG9fdmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvX3ZlY3Rvcik7XG5cbnZhciBfZGlzdGFuY2UgPSByZXF1aXJlKCcuLi9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbGluZUNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcblxuICB2YXIgbGluZSA9IHt9O1xuICBsaW5lLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgbGluZS5lbmQgPSBvcHRpb25zLmVuZDtcbiAgbGluZS50eXBlID0gJ2xpbmUnO1xuXG4gIGxpbmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmVuZDtcbiAgfTtcblxuICBsaW5lLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkoKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKHRoaXMuc3RhcnQpLCAoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkodGhpcy5lbmQpKTtcbiAgfTtcblxuICBsaW5lLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMuc3RhcnQueCArICh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAqIHByb2dyZXNzLFxuICAgICAgeTogdGhpcy5zdGFydC55ICsgKHRoaXMuZW5kLnkgLSB0aGlzLnN0YXJ0LnkpICogcHJvZ3Jlc3NcbiAgICB9O1xuICB9O1xuXG4gIGxpbmUuZ2V0UGFydFBhdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbmV3RW5kID0geyB4OiB0aGlzLmVuZC54ICogcHJvZ3Jlc3MsIHk6IHRoaXMuZW5kLnkgKiBwcm9ncmVzcyB9O1xuICAgIHZhciBwYXRoUGFydCA9IGxpbmVDb25zdHJ1Y3Rvcih7IHN0YXJ0OiB0aGlzLnN0YXJ0LCBlbmQ6IG5ld0VuZCB9KTtcbiAgICByZXR1cm4gcGF0aFBhcnQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aENvbnN0cnVjdG9yO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCcuLi9hZGRfdXBfcG9pbnRzJyk7XG5cbnZhciBfYWRkX3VwX3BvaW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRfdXBfcG9pbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGF0aENvbnN0cnVjdG9yKCkge1xuXG4gIHZhciBwYXRoID0ge307XG5cbiAgcGF0aC5zdWJQYXRocyA9IFtdO1xuXG4gIHBhdGguZ2V0RWRnZVBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWRnZVBvaW50cyA9IFtdO1xuICAgIGVkZ2VQb2ludHMucHVzaCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGVkZ2VQb2ludHMucHVzaCgoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGVkZ2VQb2ludHNbZWRnZVBvaW50cy5sZW5ndGggLSAxXSwgc3ViUGF0aC5nZXRFZGdlUG9pbnQoKSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUG9pbnRzO1xuICB9O1xuXG4gIHBhdGguZ2V0U3RhcnRQb2ludE9mID0gZnVuY3Rpb24gKHN1YlBhdGgpIHtcbiAgICB2YXIgc3RhcnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICB2YXIgY3VycmVudFBhdGggPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQYXRoID09PSBzdWJQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0UG9pbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRQb2ludCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoc3RhcnRQb2ludCwgY3VycmVudFBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXRoLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiB0aGlzLmdldExlbmd0aCgpO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IHRoaXMuc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgaWYgKGxlbmd0aFBvaW50ID4gc3ViUGF0aC5nZXRMZW5ndGgoKSkge1xuICAgICAgICAgIGxlbmd0aFBvaW50IC09IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoc3ViUGF0aC5nZXRQb2ludChsZW5ndGhQb2ludCAvIHN1YlBhdGguZ2V0TGVuZ3RoKCkpLCB0aGlzLmdldFN0YXJ0UG9pbnRPZihzdWJQYXRoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IHRoaXMuc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgbGVuZ3RoICs9IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG5cbiAgcGF0aC5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBuZXdTdWJQYXRocyA9IFtdO1xuICAgIHZhciBsZW5ndGhQb2ludCA9IHByb2dyZXNzICogdGhpcy5nZXRMZW5ndGgoKTtcbiAgICB2YXIgc3ViUGF0aHNSZXRyaWV2ZWQgPSBmYWxzZTtcbiAgICB2YXIgY3VycmVudFBhdGggPSAwO1xuXG4gICAgd2hpbGUgKCFzdWJQYXRoc1JldHJpZXZlZCkge1xuICAgICAgaWYgKGxlbmd0aFBvaW50ID4gdGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gdGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCk7XG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2godGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoMSkpO1xuICAgICAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRQYXRoICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2godGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgobGVuZ3RoUG9pbnQgLyB0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkpO1xuICAgICAgICBzdWJQYXRoc1JldHJpZXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBhcnRQYXRoID0gcGF0aENvbnN0cnVjdG9yKCk7XG4gICAgcGFydFBhdGguc3ViUGF0aHMgPSBuZXdTdWJQYXRocztcbiAgICByZXR1cm4gcGFydFBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJy4vYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnLi9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBhcmM6IF9hcmMyLmRlZmF1bHQsXG4gIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICBwYXRoOiBfcGF0aDIuZGVmYXVsdCxcbiAgYmV6aWVyQ3VydmU6IF9iZXppZXJfY3VydmUyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRocy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwb2ludCwgYW5nbGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2ludC54ICogTWF0aC5jb3MoYW5nbGUpIC0gcG9pbnQueSAqIE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgeTogcG9pbnQueCAqIE1hdGguc2luKGFuZ2xlKSArIHBvaW50LnkgKiBNYXRoLmNvcyhhbmdsZSlcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdGF0ZV9wb2ludC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuXG4gIHZhciBjaXJjbGUgPSB7fTtcbiAgY2lyY2xlLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuXG4gIGNpcmNsZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICBjaXJjbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfYXJjMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IC1jaXJjbGUucmFkaXVzIH0sIGRlZ3JlZXM6IDM2MCwgcmFkaXVzOiBjaXJjbGUucmFkaXVzIH0pKTtcblxuICByZXR1cm4gY2lyY2xlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi4vcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuXG4gIHZhciByZWN0YW5nbGUgPSB7fTtcbiAgcmVjdGFuZ2xlLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgcmVjdGFuZ2xlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gIHJlY3RhbmdsZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiByZWN0YW5nbGUud2lkdGgsIHk6IDAgfSB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IDAsIHk6IHJlY3RhbmdsZS5oZWlnaHQgfSB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IC1yZWN0YW5nbGUud2lkdGgsIHk6IDAgfSB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IDAsIHk6IC1yZWN0YW5nbGUuaGVpZ2h0IH0gfSkpO1xuXG4gIHJldHVybiByZWN0YW5nbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi4vcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWN0YW5nbGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9yZWN0YW5nbGUnKTtcblxudmFyIF9yZWN0YW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlKTtcblxudmFyIF9zcXVhcmUgPSByZXF1aXJlKCcuL3NxdWFyZScpO1xuXG52YXIgX3NxdWFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcXVhcmUpO1xuXG52YXIgX2NpcmNsZSA9IHJlcXVpcmUoJy4vY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICBzcXVhcmU6IF9zcXVhcmUyLmRlZmF1bHQsXG4gIGNpcmNsZTogX2NpcmNsZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoYXBlcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NpZGVsZW5ndGgnLCB0cnVlKTtcblxuICB2YXIgc3F1YXJlID0ge307XG4gIHNxdWFyZS5zaWRlbGVuZ3RoID0gb3B0aW9ucy5zaWRlbGVuZ3RoO1xuXG4gIHNxdWFyZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzcXVhcmUuc2lkZWxlbmd0aCwgeTogMCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogc3F1YXJlLnNpZGVsZW5ndGggfSB9KSk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IC1zcXVhcmUuc2lkZWxlbmd0aCwgeTogMCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogLXNxdWFyZS5zaWRlbGVuZ3RoIH0gfSkpO1xuXG4gIHJldHVybiBzcXVhcmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi4vcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcXVhcmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9fdmVjdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocGFyYW1ldGVyT2JqZWN0LCBvcHRpb24sIHJlcXVpcmVkLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKCFyZXF1aXJlZCkge1xuICAgIHBhcmFtZXRlck9iamVjdFtvcHRpb25dID0gcGFyYW1ldGVyT2JqZWN0Lmhhc093blByb3BlcnR5KG9wdGlvbikgPyBwYXJhbWV0ZXJPYmplY3Rbb3B0aW9uXSA6IGRlZmF1bHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIXBhcmFtZXRlck9iamVjdC5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgb3B0aW9uOicgKyBvcHRpb24pO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrX3BhcmFtZXRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yaWdpbmFsT2JqZWN0LCBjaXJjdWxhcikge1xuICAgIC8vIEZpcnN0IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3Qgd2l0aFxuICAgIC8vIHNhbWUgcHJvdG90eXBlIG9mIG91ciBvcmlnaW5hbCBzb3VyY2VcblxuICAgIHZhciBwcm9wZXJ0eUluZGV4LFxuICAgICAgICBkZXNjcmlwdG9yLFxuICAgICAgICBrZXlzLFxuICAgICAgICBjdXJyZW50LFxuICAgICAgICBuZXh0U291cmNlLFxuICAgICAgICBpbmRleE9mLFxuICAgICAgICBjb3BpZXMgPSBbe1xuICAgICAgICBzb3VyY2U6IG9yaWdpbmFsT2JqZWN0LFxuICAgICAgICB0YXJnZXQ6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsT2JqZWN0KSlcbiAgICB9XSxcbiAgICAgICAgY2xvbmVPYmplY3QgPSBjb3BpZXNbMF0udGFyZ2V0LFxuICAgICAgICBzb3VyY2VSZWZlcmVuY2VzID0gW29yaWdpbmFsT2JqZWN0XSxcbiAgICAgICAgdGFyZ2V0UmVmZXJlbmNlcyA9IFtjbG9uZU9iamVjdF07XG5cbiAgICAvLyBGaXJzdCBpbiwgZmlyc3Qgb3V0XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICB3aGlsZSAoY3VycmVudCA9IGNvcGllcy5zaGlmdCgpKSB7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQuc291cmNlKTtcblxuICAgICAgICBmb3IgKHByb3BlcnR5SW5kZXggPSAwOyBwcm9wZXJ0eUluZGV4IDwga2V5cy5sZW5ndGg7IHByb3BlcnR5SW5kZXgrKykge1xuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgc291cmNlJ3MgZGVzY3JpcHRvclxuICAgICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudC5zb3VyY2UsIGtleXNbcHJvcGVydHlJbmRleF0pO1xuXG4gICAgICAgICAgICBpZiAoIWRlc2NyaXB0b3IudmFsdWUgfHwgX3R5cGVvZihkZXNjcmlwdG9yLnZhbHVlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VycmVudC50YXJnZXQsIGtleXNbcHJvcGVydHlJbmRleF0sIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ1VTVE9NOiBXZSBkb24ndCBuZWV0IHRvIGRlZXAgY29weSBvYmplY3RzLCB3aGljaCBnb3QgYSBjbG9uZSBtZXRob2RcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZS5jbG9uZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5jbG9uZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VycmVudC50YXJnZXQsIGtleXNbcHJvcGVydHlJbmRleF0sIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dFNvdXJjZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBBcnJheS5pc0FycmF5KG5leHRTb3VyY2UpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXh0U291cmNlKSk7XG5cbiAgICAgICAgICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgICAgICAgICAgIGluZGV4T2YgPSBzb3VyY2VSZWZlcmVuY2VzLmluZGV4T2YobmV4dFNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHNvdXJjZSBpcyBhbHJlYWR5IHJlZmVyZW5jZWQsIGp1c3QgYXNzaWduIHJlZmVyZW5jZVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gdGFyZ2V0UmVmZXJlbmNlc1tpbmRleE9mXTtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1cnJlbnQudGFyZ2V0LCBrZXlzW3Byb3BlcnR5SW5kZXhdLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc291cmNlUmVmZXJlbmNlcy5wdXNoKG5leHRTb3VyY2UpO1xuICAgICAgICAgICAgICAgIHRhcmdldFJlZmVyZW5jZXMucHVzaChkZXNjcmlwdG9yLnZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1cnJlbnQudGFyZ2V0LCBrZXlzW3Byb3BlcnR5SW5kZXhdLCBkZXNjcmlwdG9yKTtcblxuICAgICAgICAgICAgY29waWVzLnB1c2goeyBzb3VyY2U6IG5leHRTb3VyY2UsIHRhcmdldDogZGVzY3JpcHRvci52YWx1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbG9uZU9iamVjdDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3B5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBkb05vdENoYWluKSB7XG4gIGlmICghZG9Ob3RDaGFpbikge1xuICAgIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdzZXRQcm9wJykpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnNldFByb3AocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICBlbGVtZW50W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGlmIChlbGVtZW50LnNlbmRFdmVudCkge1xuICAgICAgZWxlbWVudC5zZW5kRXZlbnQoJ3Byb3BlcnR5X2NoYW5nZScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgcHJvcGVydHkgb2Ygb2JqZWN0LiBPYmplY3QgaGFzblxcJ3QgdGhlIHByb3BlcnR5OiAnICsgcHJvcGVydHkpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2V0X3Byb3AuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFkZEFuaW1hdGlvbjogZnVuY3Rpb24gYWRkQW5pbWF0aW9uKGhhbmRsZSkge1xuICAgIGNyZWF0ZWpzLlRpY2tlci5zZXRGUFMoNjApO1xuICAgIGNyZWF0ZWpzLlRpY2tlci5hZGRFdmVudExpc3RlbmVyKCd0aWNrJywgaGFuZGxlKTtcbiAgfSxcbiAgcmVtb3ZlQW5pbWF0aW9uOiBmdW5jdGlvbiByZW1vdmVBbmltYXRpb24oaGFuZGxlKSB7XG4gICAgY3JlYXRlanMuVGlja2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9vcC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9mbGFzaGVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL29wYWNpdHkvZmxhc2hlcicpO1xuXG52YXIgX2ZsYXNoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxhc2hlcik7XG5cbnZhciBfZmFkZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvb3BhY2l0eS9mYWRlcicpO1xuXG52YXIgX2ZhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhZGVyKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJy4vZmlsdGVycy9ncm91cC9ncm91cCcpO1xuXG52YXIgX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyb3VwKTtcblxudmFyIF9tb3ZlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9tb3Zlci9tb3ZlcicpO1xuXG52YXIgX21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vdmVyKTtcblxudmFyIF9saW5lYXJfcm90YXRvciA9IHJlcXVpcmUoJy4vZmlsdGVycy9yb3RhdG9yL2xpbmVhcl9yb3RhdG9yJyk7XG5cbnZhciBfbGluZWFyX3JvdGF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3JvdGF0b3IpO1xuXG52YXIgX3JhbmRvbUNvbG9yID0gcmVxdWlyZSgncmFuZG9tQ29sb3InKTtcblxudmFyIF9yYW5kb21Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21Db2xvcik7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfc2hhcGVzID0gcmVxdWlyZSgnLi9nZW9tZXRyeS9zaGFwZXMvc2hhcGVzJyk7XG5cbnZhciBfc2hhcGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYXBlcyk7XG5cbnZhciBfcGF0aHMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3BhdGhzL3BhdGhzJyk7XG5cbnZhciBfcGF0aHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aHMpO1xuXG52YXIgX2NvbXBvc2l0aW9ucyA9IHJlcXVpcmUoJy4vY29tcG9zaXRpb25zL2NvbXBvc2l0aW9ucycpO1xuXG52YXIgX2NvbXBvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGlvbnMpO1xuXG52YXIgX3Byb3hpZXMgPSByZXF1aXJlKCcuL3Byb3hpZXMvcHJveGllcycpO1xuXG52YXIgX3Byb3hpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJveGllcyk7XG5cbnZhciBfaW50ZXJ2YWwgPSByZXF1aXJlKCcuL3RpbWVycy9pbnRlcnZhbCcpO1xuXG52YXIgX2ludGVydmFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsKTtcblxudmFyIF9tb2RpZmljYXRvcnMgPSByZXF1aXJlKCcuL21vZGlmaWNhdG9ycy9tb2RpZmljYXRvcnMnKTtcblxudmFyIF9tb2RpZmljYXRvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kaWZpY2F0b3JzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy9UT0RPIE9yZ2FuaXplIGltcG9ydHNcblxuZnVuY3Rpb24gY3JlYXRlKGNhbnZhc0lkKSB7XG4gIHZhciBtYWluQ29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQubWFpbkNvbnRhaW5lcihjYW52YXNJZCk7XG4gIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbihtYWluQ29udGFpbmVyLnN0YWdlKTtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgIG1haW5Db250YWluZXI6IG1haW5Db250YWluZXIsXG4gICAgZmFjdG9yeTogX2ZhY3RvcnkyLmRlZmF1bHQsXG4gICAgbG9vcDogX2xvb3AyLmRlZmF1bHQsXG4gICAgaW50ZXJ2YWw6IF9pbnRlcnZhbDIuZGVmYXVsdCxcbiAgICB1dGlsczoge1xuICAgICAgcmFuZG9tQ29sb3I6IF9yYW5kb21Db2xvcjIuZGVmYXVsdFxuICAgIH0sXG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHNoYXBlczogX3NoYXBlczIuZGVmYXVsdCxcbiAgICAgIHBhdGhzOiBfcGF0aHMyLmRlZmF1bHRcbiAgICB9LFxuICAgIGZpbHRlcnM6IHtcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgZmxhc2hlcjogX2ZsYXNoZXIyLmRlZmF1bHQsXG4gICAgICAgIGZhZGVyOiBfZmFkZXIyLmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICBtb3ZlcjogX21vdmVyMi5kZWZhdWx0LFxuICAgICAgZ3JvdXA6IF9ncm91cDIuZGVmYXVsdCxcbiAgICAgIHJvdGF0b3I6IHtcbiAgICAgICAgbGluZWFyUm90YXRvcjogX2xpbmVhcl9yb3RhdG9yMi5kZWZhdWx0XG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RpZmljYXRvcnM6IF9tb2RpZmljYXRvcnMyLmRlZmF1bHQsXG4gICAgY29tcG9zaXRpb25zOiBfY29tcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHByb3hpZXM6IF9wcm94aWVzMi5kZWZhdWx0XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIG1vZGlmaWNhdG9yID0ge307XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcbiAgICBtb2RpZmljYXRvci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuXG4gICAgcmV0dXJuIG1vZGlmaWNhdG9yO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X21vZGlmaWNhdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3IxJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3IyJywgdHJ1ZSk7XG5cbiAgdmFyIGNvbG9yRmFkZXIgPSB7fTtcbiAgY29sb3JGYWRlci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuICBjb2xvckZhZGVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgY29sb3JGYWRlci5jb2xvcjEgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMSk7XG4gIGNvbG9yRmFkZXIuY29sb3IyID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjIpO1xuICBjb2xvckZhZGVyLmN1cnJlbnRDb2xvciA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IxKTtcbiAgY29sb3JGYWRlci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoY29sb3JGYWRlci5zcGVlZCwgMC41KTtcblxuICBjb2xvckZhZGVyLmNvbG9yUmFuZ2UgPSB7XG4gICAgcjogY29sb3JGYWRlci5jb2xvcjIucmVkKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5yZWQoKSxcbiAgICBnOiBjb2xvckZhZGVyLmNvbG9yMi5ncmVlbigpIC0gY29sb3JGYWRlci5jb2xvcjEuZ3JlZW4oKSxcbiAgICBiOiBjb2xvckZhZGVyLmNvbG9yMi5ibHVlKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ibHVlKClcbiAgfTtcblxuICBjb2xvckZhZGVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0YXJ0KGNvbG9yRmFkZXIuaGFuZGxlKTtcbiAgfTtcblxuICBjb2xvckZhZGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RvcCgpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRDb2xvci5yZWQodGhpcy5jb2xvcjEucmVkKCkgKyBjdXJyZW50ICogdGhpcy5jb2xvclJhbmdlLnIpO1xuICAgIHRoaXMuY3VycmVudENvbG9yLmdyZWVuKHRoaXMuY29sb3IxLmdyZWVuKCkgKyBjdXJyZW50ICogdGhpcy5jb2xvclJhbmdlLmcpO1xuICAgIHRoaXMuY3VycmVudENvbG9yLmJsdWUodGhpcy5jb2xvcjEuYmx1ZSgpICsgY3VycmVudCAqIHRoaXMuY29sb3JSYW5nZS5iKTtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KSh0aGlzLnN1YmplY3QsICdjb2xvcicsIHRoaXMuY3VycmVudENvbG9yLnJnYlN0cmluZygpKTtcbiAgICB0aGlzLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBjb2xvckZhZGVyO1xufTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJ2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xvcl9mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcblxuICB2YXIgcmFuZG9tQ29sb3JDaGFuZ2VyID0ge307XG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuICB9O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KSh0aGlzLnN1YmplY3QsICdjb2xvcicsICgwLCBfcmFuZG9tQ29sb3IyLmRlZmF1bHQpKCkpO1xuICAgIHRoaXMuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHJhbmRvbUNvbG9yQ2hhbmdlcjtcbn07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uLy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3JhbmRvbUNvbG9yID0gcmVxdWlyZSgncmFuZG9tQ29sb3InKTtcblxudmFyIF9yYW5kb21Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21Db2xvcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9jb2xvcl9jaGFuZ2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JhbmRvbV9jb2xvcl9jaGFuZ2VyID0gcmVxdWlyZSgnLi9jb2xvci9yYW5kb21fY29sb3JfY2hhbmdlcicpO1xuXG52YXIgX3JhbmRvbV9jb2xvcl9jaGFuZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9jb2xvcl9jaGFuZ2VyKTtcblxudmFyIF9jb2xvcl9mYWRlciA9IHJlcXVpcmUoJy4vY29sb3IvY29sb3JfZmFkZXInKTtcblxudmFyIF9jb2xvcl9mYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcl9mYWRlcik7XG5cbnZhciBfbGluZWFyX3B1bHNhciA9IHJlcXVpcmUoJy4vc2NhbGUvbGluZWFyX3B1bHNhcicpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3B1bHNhcik7XG5cbnZhciBfcmFuZG9tX2FyY19tb3ZlciA9IHJlcXVpcmUoJy4vcG9zaXRpb24vcmFuZG9tX2FyY19tb3ZlcicpO1xuXG52YXIgX3JhbmRvbV9hcmNfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2FyY19tb3Zlcik7XG5cbnZhciBfcmFuZG9tX2luX3JlY3RfbW92ZXIgPSByZXF1aXJlKCcuL3Bvc2l0aW9uL3JhbmRvbV9pbl9yZWN0X21vdmVyJyk7XG5cbnZhciBfcmFuZG9tX2luX3JlY3RfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2luX3JlY3RfbW92ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNvbG9yOiB7XG4gICAgcmFuZG9tQ29sb3JDaGFuZ2VyOiBfcmFuZG9tX2NvbG9yX2NoYW5nZXIyLmRlZmF1bHQsXG4gICAgY29sb3JGYWRlcjogX2NvbG9yX2ZhZGVyMi5kZWZhdWx0XG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgbGluZWFyUHVsc2FyOiBfbGluZWFyX3B1bHNhcjIuZGVmYXVsdFxuICB9LFxuICBwb3NpdGlvbjoge1xuICAgIHJhbmRvbUFyY01vdmVyOiBfcmFuZG9tX2FyY19tb3ZlcjIuZGVmYXVsdCxcbiAgICByYW5kb21JblJlY3RNb3ZlcjogX3JhbmRvbV9pbl9yZWN0X21vdmVyMi5kZWZhdWx0XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RpZmljYXRvcnMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2dvYWxQb2ludCcsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnRQb2ludCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG5cbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICB2YXIgcDJQTW92ZXIgPSAoMCwgX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyLmRlZmF1bHQpKG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIC8qIFBhcmFtcyBhbmQgZGVmYXVsdHMgKi9cbiAgICBwMlBNb3Zlci5nb2FsUG9pbnQgPSBvcHRpb25zLmdvYWxQb2ludDtcbiAgICBwMlBNb3Zlci5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xuXG4gICAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICAgIHAyUE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHZhciBhbW91bnRYID0gKHRoaXMuZ29hbFBvaW50LnggLSB0aGlzLnN0YXJ0UG9pbnQueCkgKiBjdXJyZW50O1xuICAgICAgICB2YXIgYW1vdW50WSA9ICh0aGlzLmdvYWxQb2ludC55IC0gdGhpcy5zdGFydFBvaW50LnkpICogY3VycmVudDtcblxuICAgICAgICB0aGlzLnN1YmplY3QueCA9IHRoaXMuc3RhcnRQb2ludC54ICsgYW1vdW50WDtcbiAgICAgICAgdGhpcy5zdWJqZWN0LnkgPSB0aGlzLnN0YXJ0UG9pbnQueSArIGFtb3VudFk7XG4gICAgfTtcblxuICAgIC8qIEluaXQgKi9cbiAgICByZXR1cm4gcDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfbW9kaWZpY2F0b3InKTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9tb2RpZmljYXRvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9tb2RpZmljYXRvciA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb25fbW9kaWZpY2F0b3InKTtcblxudmFyIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZV9tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZ29hbFBvaW50JywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydFBvaW50JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NoYWtlRmFjdG9yJywgZmFsc2UsIDEpO1xuXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIHNoYWtlTW92ZXIgPSAoMCwgX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyLmRlZmF1bHQpKG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIC8vIFBhcmFtcyBhbmQgZGVmYXVsdHNcbiAgICBzaGFrZU1vdmVyLnNoYWtlRmFjdG9yID0gb3B0aW9ucy5zaGFrZUZhY3RvcjtcbiAgICBzaGFrZU1vdmVyLmdvYWxQb2ludCA9IG9wdGlvbnMuZ29hbFBvaW50O1xuICAgIHNoYWtlTW92ZXIuc3RhcnRQb2ludCA9IG9wdGlvbnMuc3RhcnRQb2ludDtcblxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgICBzaGFrZU1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHZhciByYW5kb21GYWN0b3IgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zaGFrZUZhY3RvciAtIHRoaXMuc2hha2VGYWN0b3IgLyAyO1xuICAgICAgICB2YXIgZGlzdFggPSB0aGlzLmdvYWxQb2ludC54IC0gdGhpcy5zdGFydFBvaW50Lng7XG4gICAgICAgIHZhciBkaXN0WSA9IHRoaXMuZ29hbFBvaW50LnkgLSB0aGlzLnN0YXJ0UG9pbnQueTtcbiAgICAgICAgdmFyIHJhbmRvbVggPSByYW5kb21GYWN0b3IgKiBkaXN0WCAvIChkaXN0WCArIGRpc3RZKTtcbiAgICAgICAgdmFyIHJhbmRvbVkgPSByYW5kb21GYWN0b3IgKiBkaXN0WSAvIChkaXN0WCArIGRpc3RZKTtcbiAgICAgICAgdmFyIGFtb3VudFggPSBkaXN0WCAqIGN1cnJlbnQgKyByYW5kb21YO1xuICAgICAgICB2YXIgYW1vdW50WSA9IGRpc3RZICogY3VycmVudCArIHJhbmRvbVk7XG5cbiAgICAgICAgdGhpcy5zdWJqZWN0LnggPSB0aGlzLnN0YXJ0UG9pbnQueCArIGFtb3VudFg7XG4gICAgICAgIHRoaXMuc3ViamVjdC55ID0gdGhpcy5zdGFydFBvaW50LnkgKyBhbW91bnRZO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2hha2VNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9tb2RpZmljYXRvcicpO1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X21vZGlmaWNhdG9yKTtcblxudmFyIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbl9tb2RpZmljYXRvcicpO1xuXG52YXIgX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9tb2RpZmljYXRvcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lX3NoYWtlX21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgdmFyIHJhbmRvbUFyY01vdmVyID0ge307XG5cbiAgLy8gcHJpdmF0ZSB2YXJzXG4gIHJhbmRvbUFyY01vdmVyLl9jdXJyZW50QXJjID0gbnVsbDtcbiAgcmFuZG9tQXJjTW92ZXIuX2N1cnJlbnRTdGFydFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gIHJhbmRvbUFyY01vdmVyLl9jdXJyZW50TXMgPSAwO1xuICByYW5kb21BcmNNb3Zlci5fY3VycmVudEFuZ2xlID0gMDtcbiAgcmFuZG9tQXJjTW92ZXIuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcbiAgcmFuZG9tQXJjTW92ZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuXG4gIC8vIHByaXZhdGUgZnVuY3Rpb25zXG4gIHJhbmRvbUFyY01vdmVyLl9jcmVhdGVSYW5kb21BcmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfYXJjMi5kZWZhdWx0KSh7IGRlZ3JlZXM6IE1hdGgucmFuZG9tKCkgKiAzNjAgLSAxODAsIHJhZGl1czogMjUgfSk7XG4gIH07XG5cbiAgcmFuZG9tQXJjTW92ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG5cbiAgICAvLyBSZXNldCBldmVyeXRoaW5nXG4gICAgdGhpcy5fY3VycmVudEFyYyA9IHJhbmRvbUFyY01vdmVyLl9jcmVhdGVSYW5kb21BcmMoKTtcbiAgICB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgIHRoaXMuX2N1cnJlbnRNcyA9IDA7XG4gICAgdGhpcy5fY3VycmVudEFuZ2xlID0gMDtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgbXMgPSBldmVudC5kZWx0YTtcbiAgICB0aGlzLl9jdXJyZW50TXMgKz0gbXM7XG5cbiAgICB3aGlsZSAodGhpcy5fY3VycmVudE1zIC8gMTAwMCAqIHRoaXMuc3BlZWQgPj0gdGhpcy5nZXRMZW5ndGgoKSkge1xuICAgICAgdmFyIHJvdGF0ZWRQb2ludCA9ICgwLCBfcm90YXRlX3BvaW50Mi5kZWZhdWx0KSh0aGlzLl9jdXJyZW50QXJjLmdldFBvaW50KDEpLCB0aGlzLl9jdXJyZW50QW5nbGUpO1xuICAgICAgdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24ueCA9IHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uLnggKyByb3RhdGVkUG9pbnQueDtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uLnkgPSB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbi55ICsgcm90YXRlZFBvaW50Lnk7XG4gICAgICB0aGlzLl9jdXJyZW50TXMgPSB0aGlzLl9jdXJyZW50TXMgLSB0aGlzLl9jdXJyZW50QXJjLmdldExlbmd0aCgpICogMTAwMCAvIHRoaXMuc3BlZWQ7XG4gICAgICB0aGlzLl9jdXJyZW50QW5nbGUgPSB0aGlzLl9jdXJyZW50QW5nbGUgKyB0aGlzLl9jdXJyZW50QXJjLmdldEFuZ2xlKDEpO1xuICAgICAgdGhpcy5fY3VycmVudEFyYyA9IHJhbmRvbUFyY01vdmVyLl9jcmVhdGVSYW5kb21BcmMoKTtcbiAgICB9XG4gICAgdmFyIHByb2dyZXNzID0gdGhpcy5fY3VycmVudE1zIC8gMTAwMCAqIHRoaXMuc3BlZWQgLyB0aGlzLl9jdXJyZW50QXJjLmdldExlbmd0aCgpO1xuXG4gICAgdmFyIHBvc2l0aW9uID0gKDAsIF9yb3RhdGVfcG9pbnQyLmRlZmF1bHQpKHRoaXMuX2N1cnJlbnRBcmMuZ2V0UG9pbnQocHJvZ3Jlc3MpLCB0aGlzLl9jdXJyZW50QW5nbGUpO1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKHRoaXMuc3ViamVjdCwgJ3gnLCB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbi54ICsgcG9zaXRpb24ueCk7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkodGhpcy5zdWJqZWN0LCAneScsIHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uLnkgKyBwb3NpdGlvbi55KTtcbiAgICAvL3JhbmRvbUFyY01vdmVyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJhbmRvbUFyY01vdmVyLl9jdXJyZW50QXJjID0gcmFuZG9tQXJjTW92ZXIuX2NyZWF0ZVJhbmRvbUFyYygpO1xuICByZXR1cm4gcmFuZG9tQXJjTW92ZXI7XG59O1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJy4uLy4uL2dlb21ldHJ5L3BhdGhzL2FyYycpO1xuXG52YXIgX2FyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmMpO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuLi8uLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yb3RhdGVfcG9pbnQgPSByZXF1aXJlKCcuLi8uLi9nZW9tZXRyeS9yb3RhdGVfcG9pbnQnKTtcblxudmFyIF9yb3RhdGVfcG9pbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm90YXRlX3BvaW50KTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX2FyY19tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAvKiBQYXJhbWV0ZXJzICovXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuXG4gIC8qIGNyZWF0ZSBvYmplY3QgYW5kIHNldCBwcm9wZXJ0aWVzICovXG4gIHZhciByYW5kb21JblJlY3RNb3ZlciA9ICgwLCBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyLmRlZmF1bHQpKG9wdGlvbnMpO1xuICByYW5kb21JblJlY3RNb3Zlci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIHJhbmRvbUluUmVjdE1vdmVyLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgcmFuZG9tSW5SZWN0TW92ZXIuaGVpZ2h0ID0gb3B0aW9ucy5oZWlndGg7XG5cbiAgLy8gY2FsbGJhY2tzXG4gIHJhbmRvbUluUmVjdE1vdmVyLl9fb25DdXJyZW50R29hbFJlYWNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fbGluZU1vdmVyLnN0b3AoKTtcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RhcnRQb2ludC54ID0gdGhpcy5fbGluZU1vdmVyLmdvYWxQb2ludC54O1xuICAgIHRoaXMuX2xpbmVNb3Zlci5zdGFydFBvaW50LnkgPSB0aGlzLl9saW5lTW92ZXIuZ29hbFBvaW50Lnk7XG5cbiAgICB0aGlzLl9saW5lTW92ZXIuZ29hbFBvaW50LnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aDtcbiAgICB0aGlzLl9saW5lTW92ZXIuZ29hbFBvaW50LnkgPSBNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQ7XG5cbiAgICB0aGlzLl9pbnRlcnZhbC5tcyA9IHRoaXMuX2NhbGN1bGF0ZUludGVydmFsVGltZSgpO1xuXG4gICAgdGhpcy5fbGluZU1vdmVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgLy8gUHJpdmF0ZSB2YXJzXG4gIHJhbmRvbUluUmVjdE1vdmVyLl9pbnRlcnZhbCA9ICgwLCBfaW50ZXJ2YWwyLmRlZmF1bHQpKHsgdHlwZTogJ21zJywgbXM6IDEgfSk7XG4gIHJhbmRvbUluUmVjdE1vdmVyLl9saW5lTW92ZXIgPSAoMCwgX2xpbmVfbW92ZXIyLmRlZmF1bHQpKHtcbiAgICBzdWJqZWN0OiByYW5kb21JblJlY3RNb3Zlci5zdWJqZWN0LFxuICAgIGdvYWxQb2ludDogeyB4OiAwLCB5OiAwIH0sXG4gICAgb25GaW5pc2hlZEludGVydmFsOiByYW5kb21JblJlY3RNb3Zlci5fX29uQ3VycmVudEdvYWxSZWFjaGVkLFxuICAgIGludGVydmFsOiByYW5kb21JblJlY3RNb3Zlci5faW50ZXJ2YWwsXG4gICAgc3RlZXBuZXNzOiAxXG4gIH0pO1xuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fX29uQ3VycmVudEdvYWxSZWFjaGVkKCk7XG4gIH07XG5cbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RvcCgpO1xuICB9O1xuXG4gIC8qIFByaXZhdGUgZnVuY3Rpb25zICovXG4gIHJhbmRvbUluUmVjdE1vdmVyLl9jYWxjdWxhdGVJbnRlcnZhbFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc3QgPSAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkodGhpcy5fbGluZU1vdmVyLmdvYWxQb2ludCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KSh0aGlzLl9saW5lTW92ZXIuc3RhcnRQb2ludCkpO1xuICAgIHJldHVybiBkaXN0IC8gdGhpcy5zcGVlZCAqIDEwMDA7XG4gIH07XG5cbiAgcmV0dXJuIHJhbmRvbUluUmVjdE1vdmVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9saW5lX21vdmVyID0gcmVxdWlyZSgnLi9saW5lX21vdmVyJyk7XG5cbnZhciBfbGluZV9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lX21vdmVyKTtcblxudmFyIF9pbnRlcnZhbCA9IHJlcXVpcmUoJy4uLy4uL3RpbWVycy9pbnRlcnZhbCcpO1xuXG52YXIgX2ludGVydmFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsKTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X21vZGlmaWNhdG9yJyk7XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfbW9kaWZpY2F0b3IpO1xuXG52YXIgX3RvX3ZlY3RvciA9IHJlcXVpcmUoJy4uLy4uL2dlb21ldHJ5L3RvX3ZlY3RvcicpO1xuXG52YXIgX3RvX3ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b192ZWN0b3IpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvZGlzdGFuY2UnKTtcblxudmFyIF9kaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXN0YW5jZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21faW5fcmVjdF9tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xpbWl0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbnVtYmVyT2ZJbnRlcnZhbHMnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmlzaW5nJywgZmFsc2UsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NlbnRlcklmUG9zc2libGUnLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgdmFyIGxpbmVhclB1bHNhciA9IHt9O1xuICBsaW5lYXJQdWxzYXIuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcbiAgbGluZWFyUHVsc2FyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgbGluZWFyUHVsc2FyLmxpbWl0ID0gb3B0aW9ucy5saW1pdDtcbiAgaWYgKCFvcHRpb25zLnJpc2luZykge1xuICAgIGxpbmVhclB1bHNhci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcC5wdWxzYXJUcmFuc2l0aW9uKShsaW5lYXJQdWxzYXIuc3BlZWQsIDAsIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMpO1xuICB9IGVsc2Uge1xuICAgIGxpbmVhclB1bHNhci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcC5yaXNpbmdUcmFuc2l0aW9uKShsaW5lYXJQdWxzYXIuc3BlZWQsIDAsIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMpO1xuICB9XG5cbiAgbGluZWFyUHVsc2FyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0YXJ0KHRoaXMuaGFuZGxlKTtcbiAgfTtcblxuICBsaW5lYXJQdWxzYXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gIH07XG5cbiAgbGluZWFyUHVsc2FyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkodGhpcy5zdWJqZWN0LCAnc2NhbGUnLCAxICsgY3VycmVudCAqICh0aGlzLmxpbWl0IC0gMSkpO1xuICAgIHRoaXMuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhclB1bHNhcjtcbn07XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9wdWxzYXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG1vZGlmaWNhdG9yLCBvcHRpb25zKSB7XG5cbiAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RlZXBuZXNzJywgZmFsc2UsIDAuNSk7XG5cbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICBtb2RpZmljYXRvci50cmFuc2l0aW9uID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKG9wdGlvbnMuaW50ZXJ2YWwsIG9wdGlvbnMuc3RlZXBuZXNzLCAwLCAwLCBvcHRpb25zLm9uRmluaXNoZWRJbnRlcnZhbCk7XG5cbiAgICAvKiBQdWJsaWMgbWV0aG9kcyAqL1xuICAgIG1vZGlmaWNhdG9yLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIH07XG5cbiAgICBtb2RpZmljYXRvci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uc3RvcCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gbW9kaWZpY2F0b3I7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbl9tb2RpZmljYXRvci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSB7fTtcbiAgcHJveHkuZ3JvdXAgPSBbXTtcblxuICBwcm94eS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB0aGlzLmdyb3VwLnB1c2goZWxlbWVudCk7XG4gIH07XG5cbiAgcHJveHkucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdGhpcy5ncm91cC5zcGxpY2UodGhpcy5ncm91cC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgfTtcblxuICBwcm94eS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmdyb3VwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgb2JqID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgdGhpcy5fc2V0UHJvcE9mRWxlbWVudChvYmosIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9hYnN0cmFjdF9wcm94eSA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfcHJveHknKTtcblxudmFyIF9hYnN0cmFjdF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9wcm94eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0X3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2h1ZmZsZScsIGZhbHNlLCBmYWxzZSk7XG5cbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcbiAgcHJveHkuY3VycmVudEVsZW1lbnRJbmRleCA9IDA7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNodWZmbGUgJiYgdGhpcy5jdXJyZW50RWxlbWVudEluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLnNodWZmbGVHcm91cCgpO1xuICAgIH1cbiAgICB0aGlzLl9zZXRQcm9wT2ZFbGVtZW50KHRoaXMuZ3JvdXBbdGhpcy5jdXJyZW50RWxlbWVudEluZGV4XSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgdGhpcy5jdXJyZW50RWxlbWVudEluZGV4Kys7XG4gICAgaWYgKHRoaXMuY3VycmVudEVsZW1lbnRJbmRleCA+PSB0aGlzLmdyb3VwLmxlbmd0aCkge1xuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcbiAgICB9XG4gIH07XG5cbiAgcHJveHkuc2h1ZmZsZUdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgIC8vVE9ETyBpbXBsZW1lbnQgc2h1ZmZsZSBhbGdvcml0aG1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluY3JlbWVudF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XG5cbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcbiAgcHJveHkuaW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsO1xuICBwcm94eS50aW1lciA9ICgwLCBfaW50ZXJ2YWxfdGltZXIyLmRlZmF1bHQpKHByb3h5LmludGVydmFsKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHAgPSAoMCwgX2luY3JlbWVudF9wcm94eTIuZGVmYXVsdCkoe30pO1xuICAgIHAuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgIHZhciB0aW1lciA9IHRoaXMudGltZXI7XG4gICAgdmFyIGNoYW5nZVByb3BDYWxsYmFjayA9IGZ1bmN0aW9uIGNoYW5nZVByb3BDYWxsYmFjaygpIHtcbiAgICAgIHAuc2V0UHJvcChuYW1lLCB2YWx1ZSk7XG4gICAgICBwLmRyYXcoKTtcbiAgICAgIGlmIChwLmN1cnJlbnRFbGVtZW50SW5kZXggPT09IDApIHtcbiAgICAgICAgdGltZXIucmVtb3ZlTGlzdGVuZXIoY2hhbmdlUHJvcENhbGxiYWNrKTtcbiAgICAgICAgcC5ncm91cCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRpbWVyLmFkZExpc3RlbmVyKGNoYW5nZVByb3BDYWxsYmFjayk7XG4gIH07XG5cbiAgcHJveHkudGltZXIuc3RhcnQoKTtcbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9pbnRlcnZhbF90aW1lciA9IHJlcXVpcmUoJy4uL3RpbWVycy9pbnRlcnZhbF90aW1lcicpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsX3RpbWVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkgPSByZXF1aXJlKCcuL2luY3JlbWVudF9wcm94eScpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmNyZW1lbnRfcHJveHkpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsX3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmF1bHRfcHJveHkgPSByZXF1aXJlKCcuL2RlZmF1bHRfcHJveHknKTtcblxudmFyIF9kZWZhdWx0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRfcHJveHkpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfaW50ZXJ2YWxfcHJveHkgPSByZXF1aXJlKCcuL2ludGVydmFsX3Byb3h5Jyk7XG5cbnZhciBfaW50ZXJ2YWxfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfcHJveHkpO1xuXG52YXIgX3JhbmRvbV9wcm94eSA9IHJlcXVpcmUoJy4vcmFuZG9tX3Byb3h5Jyk7XG5cbnZhciBfcmFuZG9tX3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wcm94eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3h5OiBfZGVmYXVsdF9wcm94eTIuZGVmYXVsdCxcbiAgaW5jcmVtZW50UHJveHk6IF9pbmNyZW1lbnRfcHJveHkyLmRlZmF1bHQsXG4gIGludGVydmFsUHJveHk6IF9pbnRlcnZhbF9wcm94eTIuZGVmYXVsdCxcbiAgcmFuZG9tUHJveHk6IF9yYW5kb21fcHJveHkyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm94aWVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciByYW5kb21FbGVtZW50SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmdyb3VwLmxlbmd0aCk7XG4gICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQodGhpcy5ncm91cFtyYW5kb21FbGVtZW50SW5kZXhdLCBuYW1lLCB2YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9hYnN0cmFjdF9wcm94eSA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfcHJveHknKTtcblxudmFyIF9hYnN0cmFjdF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9wcm94eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBpbnRlcnZhbCA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndHlwZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2JwbScsIGZhbHNlLCAwKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdtcycsIGZhbHNlLCAwKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdkaXZpc29yJywgZmFsc2UsIDEpO1xuXG4gIGludGVydmFsLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gIGludGVydmFsLmJwbSA9IG9wdGlvbnMuYnBtO1xuICBpbnRlcnZhbC5tcyA9IG9wdGlvbnMubXM7XG4gIGludGVydmFsLmRpdmlzb3IgPSBvcHRpb25zLmRpdmlzb3I7XG5cbiAgaWYgKGludGVydmFsLmJwbSA9PT0gMCAmJiBpbnRlcnZhbC5tcyA9PT0gMCkge1xuICAgIHRocm93ICdJbGxlZ2FsIHN0YXRlOiBCUE0gYW5kIE1TIGNhbm5vdCBib3RoIGJlIDAnO1xuICB9XG5cbiAgaW50ZXJ2YWwuZ2VuZXJhdGVIYWxmSW50ZXJ2YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbGZJbnRlcnZhbCA9IHt9O1xuICAgIGhhbGZJbnRlcnZhbC50eXBlID0gdGhpcy50eXBlO1xuICAgIGhhbGZJbnRlcnZhbC5icG0gPSB0aGlzLmJwbTtcbiAgICBoYWxmSW50ZXJ2YWwubXMgPSB0aGlzLm1zO1xuICAgIGhhbGZJbnRlcnZhbC5kaXZpc29yID0gdGhpcy5kaXZpc29yICogMjtcblxuICAgIHJldHVybiBoYWxmSW50ZXJ2YWw7XG4gIH07XG5cbiAgaW50ZXJ2YWwuYmlzZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGl2aXNvciA9IHRoaXMuZGl2aXNvciAqIDI7XG4gIH07XG5cbiAgaW50ZXJ2YWwuZ2V0TXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIHRoaXMubXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA2MDAwMCAvIHRoaXMuYnBtO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaW50ZXJ2YWw7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWwuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICB2YXIgdGltZXIgPSB7fTtcbiAgdGltZXIuY3VycmVudFRpbWUgPSAwO1xuICB0aW1lci5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aW1lci5saXN0ZW5lcnMgPSBbXTtcblxuICB0aW1lci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGV2ZW50LmRlbHRhO1xuXG4gICAgd2hpbGUgKHRoaXMuY3VycmVudFRpbWUgPiB0aGlzLmludGVydmFsKSB7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmN1cnJlbnRUaW1lIC09IHRoaXMuaW50ZXJ2YWw7XG4gICAgfVxuICB9O1xuXG4gIHRpbWVyLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIH07XG5cbiAgdGltZXIucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UodGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xuICB9O1xuXG4gIHRpbWVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gIH07XG5cbiAgdGltZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuICB9O1xuXG4gIHRpbWVyLl9jYWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5saXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aW1lcjtcbn07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxfdGltZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJpc2luZ1RyYW5zaXRpb24gPSByaXNpbmdUcmFuc2l0aW9uO1xuZXhwb3J0cy5wdWxzYXJUcmFuc2l0aW9uID0gcHVsc2FyVHJhbnNpdGlvbjtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25Mb29wKGludGVydmFsLCBzdGVlcG5lc3MsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpIHtcbiAgdmFyIHB1bHNhciA9IHt9O1xuICBwdWxzYXIuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgcHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9IDA7XG4gIHB1bHNhci5zdGVlcG5lc3MgPSB0eXBlb2Ygc3RlZXBuZXNzICE9PSAndW5kZWZpbmVkJyA/IHN0ZWVwbmVzcyA6IDAuNTtcbiAgcHVsc2FyLmN1cnJlbnQgPSBjdXJyZW50ID8gY3VycmVudCA6IDA7XG4gIHB1bHNhci5pbmNyZWFzZSA9IHRydWU7XG4gIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSBjdXJyZW50ID8gY3VycmVudCAqIGludGVydmFsLmdldE1zKCkgOiAwO1xuICBwdWxzYXIubnVtYmVyT2ZJbnRlcnZhbHMgPSBudW1iZXJPZkludGVydmFscyA/IG51bWJlck9mSW50ZXJ2YWxzIDogMDtcbiAgcHVsc2FyLm9uRmluaXNoZWRJbnRlcnZhbCA9IG9uRmluaXNoZWRJbnRlcnZhbDtcblxuICBwdWxzYXIuc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSAwO1xuICAgIHRoaXMuY3VycmVudE1zZWNvbmRzID0gY3VycmVudCA/IGN1cnJlbnQgKiB0aGlzLmludGVydmFsLmdldE1zKCkgOiAwO1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gIH07XG5cbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH07XG5cbiAgcHVsc2FyLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3VycmVudCA9IDA7XG4gICAgdGhpcy5pbmNyZWFzZSA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50TXNlY29uZHMgPSAwO1xuICAgIHRoaXMuY3VycmVudEludGVydmFsID0gMDtcbiAgfTtcblxuICBwdWxzYXIuaGFuZGxlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAvLyBGaXJzdCBzdW0gY3VycmVudCBtc1xuICAgIHRoaXMuY3VycmVudE1zZWNvbmRzID0gdGhpcy5jdXJyZW50TXNlY29uZHMgKyBldmVudC5kZWx0YTtcblxuICAgIC8vIHN0b3JlIGN1cnJlbnQgY3VycmVudFxuICAgIHZhciBsYXN0Q3VycmVudCA9IHRoaXMuY3VycmVudDtcblxuICAgIC8vIGNhbGN1bGF0ZSBuZXcgY3VycmVudFxuICAgIHZhciBuZXdDdXJyZW50ID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50KHRoaXMuY3VycmVudE1zZWNvbmRzKTtcblxuICAgIC8vIGNoZWNrIGlmIGludGVydmFsIGlzIGZpbmlzaGVkIGFuZCBzZXQgaXQgdG8gMSBpZiBpdCB3YXMgdGhlIGxhc3QgaW50ZXJ2YWxcbiAgICBuZXdDdXJyZW50ID0gdGhpcy5faW50ZXJ2YWxQb3N0UHJvY2Vzc2luZyhuZXdDdXJyZW50KTtcblxuICAgIC8vIGNhbGN1bGF0ZSBjdXJyZW50IHZhbHVlIGFuZCBjb21wYXJlIGl0IHdpdGggbGFzdCB2YWx1ZVxuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZShuZXdDdXJyZW50KTtcbiAgICB0aGlzLmluY3JlYXNlID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VmFsdWUobGFzdEN1cnJlbnQpIDwgY3VycmVudFZhbHVlO1xuXG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soY3VycmVudFZhbHVlLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHB1bHNhci5jYWxjdWxhdGVDdXJyZW50ID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgdmFyIHJlbGF0aXZlQ3VycmVudDtcbiAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICByZWxhdGl2ZUN1cnJlbnQgPSBtcyAvIHRoaXMuaW50ZXJ2YWwubXMgJSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnYnBtJykge1xuICAgICAgcmVsYXRpdmVDdXJyZW50ID0gbXMgKiB0aGlzLmludGVydmFsLmJwbSAvIDYwMDAwICUgMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlbGF0aXZlQ3VycmVudDtcbiAgfTtcblxuICBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudFZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnRUb0NhbGN1bGF0ZSkge1xuICAgIGlmIChjdXJyZW50VG9DYWxjdWxhdGUgPD0gdGhpcy5zdGVlcG5lc3MpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VG9DYWxjdWxhdGUgLyB0aGlzLnN0ZWVwbmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDEgLSAoY3VycmVudFRvQ2FsY3VsYXRlIC0gdGhpcy5zdGVlcG5lc3MpIC8gKDEgLSB0aGlzLnN0ZWVwbmVzcyk7XG4gICAgfVxuICB9O1xuXG4gIHB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQgPSBmdW5jdGlvbiAoZmFjdG9yKSB7XG5cbiAgICAvLyBGaXJzdCBwcmVwYXJlIHRoZSB2YWx1ZSB3aGljaCBpcyBwYXNzZWQgdG8gdGhlIGNhbGN1bGF0ZUN1cnJlbnQgZnVuY3Rpb246XG4gICAgdmFyIGZhY3RvckluTXM7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwudHlwZSA9PT0gJ21zJykge1xuICAgICAgZmFjdG9ySW5NcyA9IGZhY3RvciAqIHRoaXMuaW50ZXJ2YWwubXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmludGVydmFsLnR5cGUgPT09ICdicG0nKSB7XG4gICAgICBmYWN0b3JJbk1zID0gZmFjdG9yICogKDYwMDAwIC8gdGhpcy5pbnRlcnZhbC5icG0pO1xuICAgIH1cbiAgICB2YXIgbXNUb0NoZWNrID0gZmFjdG9ySW5NcyArIHRoaXMuY3VycmVudE1zZWNvbmRzO1xuXG4gICAgaWYgKG1zVG9DaGVjayA8IDApIHtcbiAgICAgIGlmICh0aGlzLmludGVydmFsLnR5cGUgPT09ICdtcycpIHtcbiAgICAgICAgbXNUb0NoZWNrID0gbXNUb0NoZWNrICsgdGhpcy5pbnRlcnZhbC5tcyAqIE1hdGguY2VpbChNYXRoLmFicyhtc1RvQ2hlY2spIC8gdGhpcy5pbnRlcnZhbC5tcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnYnBtJykge1xuICAgICAgICBtc1RvQ2hlY2sgPSBtc1RvQ2hlY2sgKyA2MDAwMCAvIHRoaXMuaW50ZXJ2YWwuYnBtICogTWF0aC5jZWlsKE1hdGguYWJzKG1zVG9DaGVjaykgLyAoNjAwMDAgLyB0aGlzLmludGVydmFsLmJwbSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZSh0aGlzLmNhbGN1bGF0ZUN1cnJlbnQobXNUb0NoZWNrKSk7XG4gIH07XG5cbiAgcHVsc2FyLl9pbnRlcnZhbFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKHRlbXBDdXJyZW50KSB7XG4gICAgdmFyIGN1cnJlbnRJbnRlcnZhbDtcbiAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudE1zZWNvbmRzIC8gdGhpcy5pbnRlcnZhbC5tcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmludGVydmFsLnR5cGUgPT09ICdicG0nKSB7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudE1zZWNvbmRzICogdGhpcy5pbnRlcnZhbC5icG0gLyA2MDAwMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRJbnRlcnZhbCA8IGN1cnJlbnRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSBjdXJyZW50SW50ZXJ2YWw7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlSW50ZXJ2YWxGaW5pc2hlZCh0ZW1wQ3VycmVudCk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wQ3VycmVudDtcbiAgfTtcblxuICBwdWxzYXIuX2hhbmRsZUludGVydmFsRmluaXNoZWQgPSBmdW5jdGlvbiAodGVtcEN1cnJlbnQpIHtcbiAgICBpZiAodGhpcy5vbkZpbmlzaGVkSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMub25GaW5pc2hlZEludGVydmFsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm51bWJlck9mSW50ZXJ2YWxzID4gMCAmJiB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9PT0gdGhpcy5udW1iZXJPZkludGVydmFscykge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0ZW1wQ3VycmVudCA9IDE7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wQ3VycmVudDtcbiAgfTtcblxuICByZXR1cm4gcHVsc2FyO1xufVxuXG5mdW5jdGlvbiByaXNpbmdUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpIHtcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDEsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBwdWxzYXJUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpIHtcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDAsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uTG9vcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25fbG9vcC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIHBsYWNlSG9sZGVyc0NvdW50IChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHJldHVybiBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgcmV0dXJuIGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVyc0NvdW50KGI2NClcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBwbGFjZUhvbGRlcnMgPSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG5cbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlblxuXG4gIHZhciBMID0gMFxuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9PSdcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz0nXG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dClcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSg5NCk7XG4iLCIvKipcbiAgQSBqYXZhc2NyaXB0IEJlemllciBjdXJ2ZSBsaWJyYXJ5IGJ5IFBvbWF4LlxuXG4gIEJhc2VkIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mb1xuXG4gIFRoaXMgY29kZSBpcyBNSVQgbGljZW5zZWQuXG4qKi9cbihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gbWF0aC1pbmxpbmluZy5cbiAgdmFyIGFicyA9IE1hdGguYWJzLFxuICAgICAgbWluID0gTWF0aC5taW4sXG4gICAgICBtYXggPSBNYXRoLm1heCxcbiAgICAgIGFjb3MgPSBNYXRoLmFjb3MsXG4gICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgLy8gYSB6ZXJvIGNvb3JkaW5hdGUsIHdoaWNoIGlzIHN1cnByaXNpbmdseSB1c2VmdWxcbiAgICAgIFpFUk8gPSB7eDowLHk6MCx6OjB9O1xuXG4gIC8vIHF1aXRlIG5lZWRlZFxuICB2YXIgdXRpbHMgPSByZXF1aXJlKDk2KTtcblxuICAvLyBub3QgcXVpdGUgbmVlZGVkLCBidXQgZXZlbnR1YWxseSB0aGlzJ2xsIGJlIHVzZWZ1bC4uLlxuICB2YXIgUG9seUJlemllciA9IHJlcXVpcmUoOTUpO1xuXG4gIC8qKlxuICAgKiBCZXppZXIgY3VydmUgY29uc3RydWN0b3IuIFRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRocmVlIHRoaW5nczpcbiAgICpcbiAgICogMS4gYXJyYXkvNCBvZiB7eDouLi4sIHk6Li4uLCB6Oi4uLn0sIHogb3B0aW9uYWxcbiAgICogMi4gbnVtZXJpY2FsIGFycmF5Lzggb3JkZXJlZCB4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NFxuICAgKiAzLiBudW1lcmljYWwgYXJyYXkvMTIgb3JkZXJlZCB4MSx5MSx6MSx4Mix5Mix6Mix4Myx5Myx6Myx4NCx5NCx6NFxuICAgKlxuICAgKi9cbiAgdmFyIEJlemllciA9IGZ1bmN0aW9uKGNvb3Jkcykge1xuICAgIHZhciBhcmdzID0gKGNvb3JkcyAmJiBjb29yZHMuZm9yRWFjaCkgPyBjb29yZHMgOiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGNvb3JkbGVuID0gZmFsc2U7XG4gICAgaWYodHlwZW9mIGFyZ3NbMF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvb3JkbGVuID0gYXJncy5sZW5ndGg7XG4gICAgICB2YXIgbmV3YXJncyA9IFtdO1xuICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIFsneCcsJ3knLCd6J10uZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgaWYodHlwZW9mIHBvaW50W2RdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBuZXdhcmdzLnB1c2gocG9pbnRbZF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGFyZ3MgPSBuZXdhcmdzO1xuICAgIH1cbiAgICB2YXIgaGlnaGVyID0gZmFsc2U7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIGlmIChjb29yZGxlbikge1xuICAgICAgaWYoY29vcmRsZW4+NCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgbmV3IEJlemllcihwb2ludFtdKSBpcyBhY2NlcHRlZCBmb3IgNHRoIGFuZCBoaWdoZXIgb3JkZXIgY3VydmVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGxlbiE9PTYgJiYgbGVuIT09OCAmJiBsZW4hPT05ICYmIGxlbiE9PTEyKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXNcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF8zZCA9ICghaGlnaGVyICYmIChsZW4gPT09IDkgfHwgbGVuID09PSAxMikpIHx8IChjb29yZHMgJiYgY29vcmRzWzBdICYmIHR5cGVvZiBjb29yZHNbMF0ueiAhPT0gXCJ1bmRlZmluZWRcIik7XG4gICAgdGhpcy5fM2QgPSBfM2Q7XG4gICAgdmFyIHBvaW50cyA9IFtdO1xuICAgIGZvcih2YXIgaWR4PTAsIHN0ZXA9KF8zZCA/IDMgOiAyKTsgaWR4PGxlbjsgaWR4Kz1zdGVwKSB7XG4gICAgICB2YXIgcG9pbnQgPSB7XG4gICAgICAgIHg6IGFyZ3NbaWR4XSxcbiAgICAgICAgeTogYXJnc1tpZHgrMV1cbiAgICAgIH07XG4gICAgICBpZihfM2QpIHsgcG9pbnQueiA9IGFyZ3NbaWR4KzJdIH07XG4gICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgfVxuICAgIHRoaXMub3JkZXIgPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcbiAgICB2YXIgZGltcyA9IFsneCcsJ3knXTtcbiAgICBpZihfM2QpIGRpbXMucHVzaCgneicpO1xuICAgIHRoaXMuZGltcyA9IGRpbXM7XG4gICAgdGhpcy5kaW1sZW4gPSBkaW1zLmxlbmd0aDtcblxuICAgIChmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgdmFyIG9yZGVyID0gY3VydmUub3JkZXI7XG4gICAgICB2YXIgcG9pbnRzID0gY3VydmUucG9pbnRzO1xuICAgICAgdmFyIGEgPSB1dGlscy5hbGlnbihwb2ludHMsIHtwMTpwb2ludHNbMF0sIHAyOnBvaW50c1tvcmRlcl19KTtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoYWJzKGFbaV0ueSkgPiAwLjAwMDEpIHtcbiAgICAgICAgICBjdXJ2ZS5fbGluZWFyID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdXJ2ZS5fbGluZWFyID0gdHJ1ZTtcbiAgICB9KHRoaXMpKTtcblxuICAgIHRoaXMuX3QxID0gMDtcbiAgICB0aGlzLl90MiA9IDE7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcblxuICBCZXppZXIuZnJvbVNWRyA9IGZ1bmN0aW9uKHN2Z1N0cmluZykge1xuICAgIHZhciBsaXN0ID0gc3ZnU3RyaW5nLm1hdGNoKC9bLStdP1xcZCpcXC4/XFxkKyg/OltlRV1bLStdP1xcZCspPy9nKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgdmFyIHJlbGF0aXZlID0gL1tjcV0vLnRlc3Qoc3ZnU3RyaW5nKTtcbiAgICBpZighcmVsYXRpdmUpIHJldHVybiBuZXcgQmV6aWVyKGxpc3QpO1xuICAgIGxpc3QgPSBsaXN0Lm1hcChmdW5jdGlvbih2LGkpIHtcbiAgICAgIHJldHVybiBpIDwgMiA/IHYgOiB2ICsgbGlzdFtpICUgMl07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBCZXppZXIobGlzdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QUJDKG4sUyxCLEUsdCkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICB2YXIgdSA9IHV0aWxzLnByb2plY3Rpb25yYXRpbyh0LG4pLFxuICAgICAgICB1bSA9IDEtdSxcbiAgICAgICAgQyA9IHtcbiAgICAgICAgICB4OiB1KlMueCArIHVtKkUueCxcbiAgICAgICAgICB5OiB1KlMueSArIHVtKkUueVxuICAgICAgICB9LFxuICAgICAgICBzID0gdXRpbHMuYWJjcmF0aW8odCxuKSxcbiAgICAgICAgQSA9IHtcbiAgICAgICAgICB4OiBCLnggKyAoQi54LUMueCkvcyxcbiAgICAgICAgICB5OiBCLnkgKyAoQi55LUMueSkvc1xuICAgICAgICB9O1xuICAgIHJldHVybiB7IEE6QSwgQjpCLCBDOkMgfTtcbiAgfVxuXG4gIEJlemllci5xdWFkcmF0aWNGcm9tUG9pbnRzID0gZnVuY3Rpb24ocDEscDIscDMsIHQpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgLy8gc2hvcnRjdXRzLCBhbHRob3VnaCB0aGV5J3JlIHJlYWxseSBkdW1iXG4gICAgaWYodD09PTApIHsgcmV0dXJuIG5ldyBCZXppZXIocDIscDIscDMpOyB9XG4gICAgaWYodD09PTEpIHsgcmV0dXJuIG5ldyBCZXppZXIocDEscDIscDIpOyB9XG4gICAgLy8gcmVhbCBmaXR0aW5nLlxuICAgIHZhciBhYmMgPSBnZXRBQkMoMixwMSxwMixwMyx0KTtcbiAgICByZXR1cm4gbmV3IEJlemllcihwMSwgYWJjLkEsIHAzKTtcbiAgfTtcblxuICBCZXppZXIuY3ViaWNGcm9tUG9pbnRzID0gZnVuY3Rpb24oUyxCLEUsIHQsZDEpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgdmFyIGFiYyA9IGdldEFCQygzLFMsQixFLHQpO1xuICAgIGlmKHR5cGVvZiBkMSA9PT0gXCJ1bmRlZmluZWRcIikgeyBkMSA9IHV0aWxzLmRpc3QoQixhYmMuQyk7IH1cbiAgICB2YXIgZDIgPSBkMSAqICgxLXQpL3Q7XG5cbiAgICB2YXIgc2VsZW4gPSB1dGlscy5kaXN0KFMsRSksXG4gICAgICAgIGx4ID0gKEUueC1TLngpL3NlbGVuLFxuICAgICAgICBseSA9IChFLnktUy55KS9zZWxlbixcbiAgICAgICAgYngxID0gZDEgKiBseCxcbiAgICAgICAgYnkxID0gZDEgKiBseSxcbiAgICAgICAgYngyID0gZDIgKiBseCxcbiAgICAgICAgYnkyID0gZDIgKiBseTtcbiAgICAvLyBkZXJpdmF0aW9uIG9mIG5ldyBodWxsIGNvb3JkaW5hdGVzXG4gICAgdmFyIGUxICA9IHsgeDogQi54IC0gYngxLCB5OiBCLnkgLSBieTEgfSxcbiAgICAgICAgZTIgID0geyB4OiBCLnggKyBieDIsIHk6IEIueSArIGJ5MiB9LFxuICAgICAgICBBID0gYWJjLkEsXG4gICAgICAgIHYxICA9IHsgeDogQS54ICsgKGUxLngtQS54KS8oMS10KSwgeTogQS55ICsgKGUxLnktQS55KS8oMS10KSB9LFxuICAgICAgICB2MiAgPSB7IHg6IEEueCArIChlMi54LUEueCkvKHQpLCB5OiBBLnkgKyAoZTIueS1BLnkpLyh0KSB9LFxuICAgICAgICBuYzEgPSB7IHg6IFMueCArICh2MS54LVMueCkvKHQpLCB5OiBTLnkgKyAodjEueS1TLnkpLyh0KSB9LFxuICAgICAgICBuYzIgPSB7IHg6IEUueCArICh2Mi54LUUueCkvKDEtdCksIHk6IEUueSArICh2Mi55LUUueSkvKDEtdCkgfTtcbiAgICAvLyAuLi5kb25lXG4gICAgcmV0dXJuIG5ldyBCZXppZXIoUyxuYzEsbmMyLEUpO1xuICB9O1xuXG4gIHZhciBnZXRVdGlscyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfTtcblxuICBCZXppZXIuZ2V0VXRpbHMgPSBnZXRVdGlscztcblxuICBCZXppZXIucHJvdG90eXBlID0ge1xuICAgIGdldFV0aWxzOiBnZXRVdGlscyxcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgdG9TVkc6IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gICAgICBpZih0aGlzLl8zZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cyxcbiAgICAgICAgICB4ID0gcFswXS54LFxuICAgICAgICAgIHkgPSBwWzBdLnksXG4gICAgICAgICAgcyA9IFtcIk1cIiwgeCwgeSwgKHRoaXMub3JkZXI9PT0yID8gXCJRXCI6XCJDXCIpXTtcbiAgICAgIGZvcih2YXIgaT0xLCBsYXN0PXAubGVuZ3RoOyBpPGxhc3Q7IGkrKykge1xuICAgICAgICBzLnB1c2gocFtpXS54KTtcbiAgICAgICAgcy5wdXNoKHBbaV0ueSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcy5qb2luKFwiIFwiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBvbmUtdGltZSBjb21wdXRlIGRlcml2YXRpdmUgY29vcmRpbmF0ZXNcbiAgICAgIHRoaXMuZHBvaW50cyA9IFtdO1xuICAgICAgZm9yKHZhciBwPXRoaXMucG9pbnRzLCBkPXAubGVuZ3RoLCBjPWQtMTsgZD4xOyBkLS0sIGMtLSkge1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IodmFyIGo9MCwgZHB0OyBqPGM7IGorKykge1xuICAgICAgICAgIGRwdCA9IHtcbiAgICAgICAgICAgIHg6IGMgKiAocFtqKzFdLnggLSBwW2pdLngpLFxuICAgICAgICAgICAgeTogYyAqIChwW2orMV0ueSAtIHBbal0ueSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgICBkcHQueiA9IGMgKiAocFtqKzFdLnogLSBwW2pdLnopO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0LnB1c2goZHB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRwb2ludHMucHVzaChsaXN0KTtcbiAgICAgICAgcCA9IGxpc3Q7XG4gICAgICB9O1xuICAgICAgdGhpcy5jb21wdXRlZGlyZWN0aW9uKCk7XG4gICAgfSxcbiAgICBjb21wdXRlZGlyZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLnBvaW50cztcbiAgICAgIHZhciBhbmdsZSA9IHV0aWxzLmFuZ2xlKHBvaW50c1swXSwgcG9pbnRzW3RoaXMub3JkZXJdLCBwb2ludHNbMV0pO1xuICAgICAgdGhpcy5jbG9ja3dpc2UgPSBhbmdsZSA+IDA7XG4gICAgfSxcbiAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLmxlbmd0aCh0aGlzLmRlcml2YXRpdmUuYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBfbHV0OiBbXSxcbiAgICBnZXRMVVQ6IGZ1bmN0aW9uKHN0ZXBzKSB7XG4gICAgICBzdGVwcyA9IHN0ZXBzIHx8IDEwMDtcbiAgICAgIGlmICh0aGlzLl9sdXQubGVuZ3RoID09PSBzdGVwcykgeyByZXR1cm4gdGhpcy5fbHV0OyB9XG4gICAgICB0aGlzLl9sdXQgPSBbXTtcbiAgICAgIGZvcih2YXIgdD0wOyB0PD1zdGVwczsgdCsrKSB7XG4gICAgICAgIHRoaXMuX2x1dC5wdXNoKHRoaXMuY29tcHV0ZSh0L3N0ZXBzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fbHV0O1xuICAgIH0sXG4gICAgb246IGZ1bmN0aW9uKHBvaW50LCBlcnJvcikge1xuICAgICAgZXJyb3IgPSBlcnJvciB8fCA1O1xuICAgICAgdmFyIGx1dCA9IHRoaXMuZ2V0TFVUKCksIGhpdHMgPSBbXSwgYywgdD0wO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGMgPSBsdXRbaV07XG4gICAgICAgIGlmICh1dGlscy5kaXN0KGMscG9pbnQpIDwgZXJyb3IpIHtcbiAgICAgICAgICBoaXRzLnB1c2goYylcbiAgICAgICAgICB0ICs9IGkgLyBsdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZighaGl0cy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0IC89IGhpdHMubGVuZ3RoO1xuICAgIH0sXG4gICAgcHJvamVjdDogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgIC8vIHN0ZXAgMTogY29hcnNlIGNoZWNrXG4gICAgICB2YXIgTFVUID0gdGhpcy5nZXRMVVQoKSwgbCA9IExVVC5sZW5ndGgtMSxcbiAgICAgICAgICBjbG9zZXN0ID0gdXRpbHMuY2xvc2VzdChMVVQsIHBvaW50KSxcbiAgICAgICAgICBtZGlzdCA9IGNsb3Nlc3QubWRpc3QsXG4gICAgICAgICAgbXBvcyA9IGNsb3Nlc3QubXBvcztcbiAgICAgIGlmIChtcG9zPT09MCB8fCBtcG9zPT09bCkge1xuICAgICAgICB2YXIgdCA9IG1wb3MvbCwgcHQgPSB0aGlzLmNvbXB1dGUodCk7XG4gICAgICAgIHB0LnQgPSB0O1xuICAgICAgICBwdC5kID0gbWRpc3Q7XG4gICAgICAgIHJldHVybiBwdDtcbiAgICAgIH1cblxuICAgICAgLy8gc3RlcCAyOiBmaW5lIGNoZWNrXG4gICAgICB2YXIgZnQsIHQsIHAsIGQsXG4gICAgICAgICAgdDEgPSAobXBvcy0xKS9sLFxuICAgICAgICAgIHQyID0gKG1wb3MrMSkvbCxcbiAgICAgICAgICBzdGVwID0gMC4xL2w7XG4gICAgICBtZGlzdCArPSAxO1xuICAgICAgZm9yKHQ9dDEsZnQ9dDsgdDx0MitzdGVwOyB0Kz1zdGVwKSB7XG4gICAgICAgIHAgPSB0aGlzLmNvbXB1dGUodCk7XG4gICAgICAgIGQgPSB1dGlscy5kaXN0KHBvaW50LCBwKTtcbiAgICAgICAgaWYgKGQ8bWRpc3QpIHtcbiAgICAgICAgICBtZGlzdCA9IGQ7XG4gICAgICAgICAgZnQgPSB0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwID0gdGhpcy5jb21wdXRlKGZ0KTtcbiAgICAgIHAudCA9IGZ0O1xuICAgICAgcC5kID0gbWRpc3Q7XG4gICAgICByZXR1cm4gcDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZSh0KTtcbiAgICB9LFxuICAgIHBvaW50OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvaW50c1tpZHhdO1xuICAgIH0sXG4gICAgY29tcHV0ZTogZnVuY3Rpb24odCkge1xuICAgICAgLy8gc2hvcnRjdXRzXG4gICAgICBpZih0PT09MCkgeyByZXR1cm4gdGhpcy5wb2ludHNbMF07IH1cbiAgICAgIGlmKHQ9PT0xKSB7IHJldHVybiB0aGlzLnBvaW50c1t0aGlzLm9yZGVyXTsgfVxuXG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzO1xuICAgICAgdmFyIG10ID0gMS10O1xuXG4gICAgICAvLyBsaW5lYXI/XG4gICAgICBpZih0aGlzLm9yZGVyPT09MSkge1xuICAgICAgICByZXQgPSB7XG4gICAgICAgICAgeDogbXQqcFswXS54ICsgdCpwWzFdLngsXG4gICAgICAgICAgeTogbXQqcFswXS55ICsgdCpwWzFdLnlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuXzNkKSB7IHJldC56ID0gbXQqcFswXS56ICsgdCpwWzFdLno7IH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgLy8gcXVhZHJhdGljL2N1YmljIGN1cnZlP1xuICAgICAgaWYodGhpcy5vcmRlcjw0KSB7XG4gICAgICAgIHZhciBtdDIgPSBtdCptdCxcbiAgICAgICAgICAgIHQyID0gdCp0LFxuICAgICAgICAgICAgYSxiLGMsZCA9IDA7XG4gICAgICAgIGlmKHRoaXMub3JkZXI9PT0yKSB7XG4gICAgICAgICAgcCA9IFtwWzBdLCBwWzFdLCBwWzJdLCBaRVJPXTtcbiAgICAgICAgICBhID0gbXQyO1xuICAgICAgICAgIGIgPSBtdCp0KjI7XG4gICAgICAgICAgYyA9IHQyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5vcmRlcj09PTMpIHtcbiAgICAgICAgICBhID0gbXQyKm10O1xuICAgICAgICAgIGIgPSBtdDIqdCozO1xuICAgICAgICAgIGMgPSBtdCp0MiozO1xuICAgICAgICAgIGQgPSB0KnQyO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgeDogYSpwWzBdLnggKyBiKnBbMV0ueCArIGMqcFsyXS54ICsgZCpwWzNdLngsXG4gICAgICAgICAgeTogYSpwWzBdLnkgKyBiKnBbMV0ueSArIGMqcFsyXS55ICsgZCpwWzNdLnlcbiAgICAgICAgfTtcbiAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICByZXQueiA9IGEqcFswXS56ICsgYipwWzFdLnogKyBjKnBbMl0ueiArIGQqcFszXS56O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGhpZ2hlciBvcmRlciBjdXJ2ZXM6IHVzZSBkZSBDYXN0ZWxqYXUncyBjb21wdXRhdGlvblxuICAgICAgdmFyIGRDcHRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvaW50cykpO1xuICAgICAgd2hpbGUoZENwdHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8ZENwdHMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgIGRDcHRzW2ldID0ge1xuICAgICAgICAgICAgeDogZENwdHNbaV0ueCArIChkQ3B0c1tpKzFdLnggLSBkQ3B0c1tpXS54KSAqIHQsXG4gICAgICAgICAgICB5OiBkQ3B0c1tpXS55ICsgKGRDcHRzW2krMV0ueSAtIGRDcHRzW2ldLnkpICogdFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHR5cGVvZiBkQ3B0c1tpXS56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBkQ3B0c1tpXSA9IGRDcHRzW2ldLnogKyAoZENwdHNbaSsxXS56IC0gZENwdHNbaV0ueikgKiB0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRDcHRzLnNwbGljZShkQ3B0cy5sZW5ndGgtMSwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZENwdHNbMF07XG4gICAgfSxcbiAgICByYWlzZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLCBucCA9IFtwWzBdXSwgaSwgaz1wLmxlbmd0aCwgcGksIHBpbTtcbiAgICAgIGZvciAodmFyIGk9MTsgaTxrOyBpKyspIHtcbiAgICAgICAgcGkgPSBwW2ldO1xuICAgICAgICBwaW0gPSBwW2ktMV07XG4gICAgICAgIG5wW2ldID0ge1xuICAgICAgICAgIHg6IChrLWkpL2sgKiBwaS54ICsgaS9rICogcGltLngsXG4gICAgICAgICAgeTogKGstaSkvayAqIHBpLnkgKyBpL2sgKiBwaW0ueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgbnBba10gPSBwW2stMV07XG4gICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgfSxcbiAgICBkZXJpdmF0aXZlOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgbXQgPSAxLXQsXG4gICAgICAgICAgYSxiLGM9MCxcbiAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdO1xuICAgICAgaWYodGhpcy5vcmRlcj09PTIpIHsgcCA9IFtwWzBdLCBwWzFdLCBaRVJPXTsgYSA9IG10OyBiID0gdDsgfVxuICAgICAgaWYodGhpcy5vcmRlcj09PTMpIHsgYSA9IG10Km10OyBiID0gbXQqdCoyOyBjID0gdCp0OyB9XG4gICAgICB2YXIgcmV0ID0ge1xuICAgICAgICB4OiBhKnBbMF0ueCArIGIqcFsxXS54ICsgYypwWzJdLngsXG4gICAgICAgIHk6IGEqcFswXS55ICsgYipwWzFdLnkgKyBjKnBbMl0ueVxuICAgICAgfTtcbiAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgIHJldC56ID0gYSpwWzBdLnogKyBiKnBbMV0ueiArIGMqcFsyXS56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGluZmxlY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5pbmZsZWN0aW9ucyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICBub3JtYWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLl8zZCA/IHRoaXMuX19ub3JtYWwzKHQpIDogdGhpcy5fX25vcm1hbDIodCk7XG4gICAgfSxcbiAgICBfX25vcm1hbDI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpO1xuICAgICAgdmFyIHEgPSBzcXJ0KGQueCpkLnggKyBkLnkqZC55KVxuICAgICAgcmV0dXJuIHsgeDogLWQueS9xLCB5OiBkLngvcSB9O1xuICAgIH0sXG4gICAgX19ub3JtYWwzOiBmdW5jdGlvbih0KSB7XG4gICAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTQ1MzE1OVxuICAgICAgdmFyIHIxID0gdGhpcy5kZXJpdmF0aXZlKHQpLFxuICAgICAgICAgIHIyID0gdGhpcy5kZXJpdmF0aXZlKHQrMC4wMSksXG4gICAgICAgICAgcTEgPSBzcXJ0KHIxLngqcjEueCArIHIxLnkqcjEueSArIHIxLnoqcjEueiksXG4gICAgICAgICAgcTIgPSBzcXJ0KHIyLngqcjIueCArIHIyLnkqcjIueSArIHIyLnoqcjIueik7XG4gICAgICByMS54IC89IHExOyByMS55IC89IHExOyByMS56IC89IHExO1xuICAgICAgcjIueCAvPSBxMjsgcjIueSAvPSBxMjsgcjIueiAvPSBxMjtcbiAgICAgIC8vIGNyb3NzIHByb2R1Y3RcbiAgICAgIHZhciBjID0ge1xuICAgICAgICB4OiByMi55KnIxLnogLSByMi56KnIxLnksXG4gICAgICAgIHk6IHIyLnoqcjEueCAtIHIyLngqcjEueixcbiAgICAgICAgejogcjIueCpyMS55IC0gcjIueSpyMS54XG4gICAgICB9O1xuICAgICAgdmFyIG0gPSBzcXJ0KGMueCpjLnggKyBjLnkqYy55ICsgYy56KmMueik7XG4gICAgICBjLnggLz0gbTsgYy55IC89IG07IGMueiAvPSBtO1xuICAgICAgLy8gcm90YXRpb24gbWF0cml4XG4gICAgICB2YXIgUiA9IFsgICBjLngqYy54LCAgIGMueCpjLnktYy56LCBjLngqYy56K2MueSxcbiAgICAgICAgICAgICAgICBjLngqYy55K2MueiwgICBjLnkqYy55LCAgIGMueSpjLnotYy54LFxuICAgICAgICAgICAgICAgIGMueCpjLnotYy55LCBjLnkqYy56K2MueCwgICBjLnoqYy56ICAgIF07XG4gICAgICAvLyBub3JtYWwgdmVjdG9yOlxuICAgICAgdmFyIG4gPSB7XG4gICAgICAgIHg6IFJbMF0gKiByMS54ICsgUlsxXSAqIHIxLnkgKyBSWzJdICogcjEueixcbiAgICAgICAgeTogUlszXSAqIHIxLnggKyBSWzRdICogcjEueSArIFJbNV0gKiByMS56LFxuICAgICAgICB6OiBSWzZdICogcjEueCArIFJbN10gKiByMS55ICsgUls4XSAqIHIxLnpcbiAgICAgIH07XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuICAgIGh1bGw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsXG4gICAgICAgICAgX3AgPSBbXSxcbiAgICAgICAgICBwdCxcbiAgICAgICAgICBxID0gW10sXG4gICAgICAgICAgaWR4ID0gMCxcbiAgICAgICAgICBpPTAsXG4gICAgICAgICAgbD0wO1xuICAgICAgcVtpZHgrK10gPSBwWzBdO1xuICAgICAgcVtpZHgrK10gPSBwWzFdO1xuICAgICAgcVtpZHgrK10gPSBwWzJdO1xuICAgICAgaWYodGhpcy5vcmRlciA9PT0gMykgeyBxW2lkeCsrXSA9IHBbM107IH1cbiAgICAgIC8vIHdlIGxlcnAgYmV0d2VlbiBhbGwgcG9pbnRzIGF0IGVhY2ggaXRlcmF0aW9uLCB1bnRpbCB3ZSBoYXZlIDEgcG9pbnQgbGVmdC5cbiAgICAgIHdoaWxlKHAubGVuZ3RoPjEpIHtcbiAgICAgICAgX3AgPSBbXTtcbiAgICAgICAgZm9yKGk9MCwgbD1wLmxlbmd0aC0xOyBpPGw7IGkrKykge1xuICAgICAgICAgIHB0ID0gdXRpbHMubGVycCh0LHBbaV0scFtpKzFdKTtcbiAgICAgICAgICBxW2lkeCsrXSA9IHB0O1xuICAgICAgICAgIF9wLnB1c2gocHQpO1xuICAgICAgICB9XG4gICAgICAgIHAgPSBfcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxO1xuICAgIH0sXG4gICAgc3BsaXQ6IGZ1bmN0aW9uKHQxLCB0Mikge1xuICAgICAgLy8gc2hvcnRjdXRzXG4gICAgICBpZih0MT09PTAgJiYgISF0MikgeyByZXR1cm4gdGhpcy5zcGxpdCh0MikubGVmdDsgfVxuICAgICAgaWYodDI9PT0xKSB7IHJldHVybiB0aGlzLnNwbGl0KHQxKS5yaWdodDsgfVxuXG4gICAgICAvLyBubyBzaG9ydGN1dDogdXNlIFwiZGUgQ2FzdGVsamF1XCIgaXRlcmF0aW9uLlxuICAgICAgdmFyIHEgPSB0aGlzLmh1bGwodDEpO1xuICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgbGVmdDogdGhpcy5vcmRlciA9PT0gMiA/IG5ldyBCZXppZXIoW3FbMF0scVszXSxxWzVdXSkgOiBuZXcgQmV6aWVyKFtxWzBdLHFbNF0scVs3XSxxWzldXSksXG4gICAgICAgIHJpZ2h0OiB0aGlzLm9yZGVyID09PSAyID8gbmV3IEJlemllcihbcVs1XSxxWzRdLHFbMl1dKSA6IG5ldyBCZXppZXIoW3FbOV0scVs4XSxxWzZdLHFbM11dKSxcbiAgICAgICAgc3BhbjogcVxuICAgICAgfTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlIGJpbmQgX3QxL190MiBpbmZvcm1hdGlvbiFcbiAgICAgIHJlc3VsdC5sZWZ0Ll90MSAgPSB1dGlscy5tYXAoMCwgIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LmxlZnQuX3QyICA9IHV0aWxzLm1hcCh0MSwgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQucmlnaHQuX3QxID0gdXRpbHMubWFwKHQxLCAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5yaWdodC5fdDIgPSB1dGlscy5tYXAoMSwgIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuXG4gICAgICAvLyBpZiB3ZSBoYXZlIG5vIHQyLCB3ZSdyZSBkb25lXG4gICAgICBpZighdDIpIHsgcmV0dXJuIHJlc3VsdDsgfVxuXG4gICAgICAvLyBpZiB3ZSBoYXZlIGEgdDIsIHNwbGl0IGFnYWluOlxuICAgICAgdDIgPSB1dGlscy5tYXAodDIsdDEsMSwwLDEpO1xuICAgICAgdmFyIHN1YnNwbGl0ID0gcmVzdWx0LnJpZ2h0LnNwbGl0KHQyKTtcbiAgICAgIHJldHVybiBzdWJzcGxpdC5sZWZ0O1xuICAgIH0sXG4gICAgZXh0cmVtYTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGltcyA9IHRoaXMuZGltcyxcbiAgICAgICAgICByZXN1bHQ9e30sXG4gICAgICAgICAgcm9vdHM9W10sXG4gICAgICAgICAgcCwgbWZuO1xuICAgICAgZGltcy5mb3JFYWNoKGZ1bmN0aW9uKGRpbSkge1xuICAgICAgICBtZm4gPSBmdW5jdGlvbih2KSB7IHJldHVybiB2W2RpbV07IH07XG4gICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMF0ubWFwKG1mbik7XG4gICAgICAgIHJlc3VsdFtkaW1dID0gdXRpbHMuZHJvb3RzKHApO1xuICAgICAgICBpZih0aGlzLm9yZGVyID09PSAzKSB7XG4gICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1sxXS5tYXAobWZuKTtcbiAgICAgICAgICByZXN1bHRbZGltXSA9IHJlc3VsdFtkaW1dLmNvbmNhdCh1dGlscy5kcm9vdHMocCkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uZmlsdGVyKGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0Pj0wICYmIHQ8PTEpOyB9KTtcbiAgICAgICAgcm9vdHMgPSByb290cy5jb25jYXQocmVzdWx0W2RpbV0uc29ydCgpKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByb290cyA9IHJvb3RzLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24odixpZHgpIHsgcmV0dXJuIChyb290cy5pbmRleE9mKHYpID09PSBpZHgpOyB9KTtcbiAgICAgIHJlc3VsdC52YWx1ZXMgPSByb290cztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBiYm94OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBleHRyZW1hID0gdGhpcy5leHRyZW1hKCksIHJlc3VsdCA9IHt9O1xuICAgICAgdGhpcy5kaW1zLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICByZXN1bHRbZF0gPSB1dGlscy5nZXRtaW5tYXgodGhpcywgZCwgZXh0cmVtYVtkXSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIG92ZXJsYXBzOiBmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgdmFyIGxiYm94ID0gdGhpcy5iYm94KCksXG4gICAgICAgICAgdGJib3ggPSBjdXJ2ZS5iYm94KCk7XG4gICAgICByZXR1cm4gdXRpbHMuYmJveG92ZXJsYXAobGJib3gsdGJib3gpO1xuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbih0LCBkKSB7XG4gICAgICBpZih0eXBlb2YgZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0KHQpO1xuICAgICAgICB2YXIgbiA9IHRoaXMubm9ybWFsKHQpO1xuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIGM6IGMsXG4gICAgICAgICAgbjogbixcbiAgICAgICAgICB4OiBjLnggKyBuLnggKiBkLFxuICAgICAgICAgIHk6IGMueSArIG4ueSAqIGRcbiAgICAgICAgfTtcbiAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICByZXQueiA9IGMueiArIG4ueiAqIGQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICBpZih0aGlzLl9saW5lYXIpIHtcbiAgICAgICAgdmFyIG52ID0gdGhpcy5ub3JtYWwoMCk7XG4gICAgICAgIHZhciBjb29yZHMgPSB0aGlzLnBvaW50cy5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICB4OiBwLnggKyB0ICogbnYueCxcbiAgICAgICAgICAgIHk6IHAueSArIHQgKiBudi55XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZihwLnogJiYgbi56KSB7IHJldC56ID0gcC56ICsgdCAqIG52Lno7IH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtuZXcgQmV6aWVyKGNvb3JkcyldO1xuICAgICAgfVxuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpO1xuICAgICAgcmV0dXJuIHJlZHVjZWQubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuc2NhbGUodCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNpbXBsZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZih0aGlzLm9yZGVyPT09Mykge1xuICAgICAgICB2YXIgYTEgPSB1dGlscy5hbmdsZSh0aGlzLnBvaW50c1swXSwgdGhpcy5wb2ludHNbM10sIHRoaXMucG9pbnRzWzFdKTtcbiAgICAgICAgdmFyIGEyID0gdXRpbHMuYW5nbGUodGhpcy5wb2ludHNbMF0sIHRoaXMucG9pbnRzWzNdLCB0aGlzLnBvaW50c1syXSk7XG4gICAgICAgIGlmKGExPjAgJiYgYTI8MCB8fCBhMTwwICYmIGEyPjApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBuMSA9IHRoaXMubm9ybWFsKDApO1xuICAgICAgdmFyIG4yID0gdGhpcy5ub3JtYWwoMSk7XG4gICAgICB2YXIgcyA9IG4xLngqbjIueCArIG4xLnkqbjIueTtcbiAgICAgIGlmKHRoaXMuXzNkKSB7IHMgKz0gbjEueipuMi56OyB9XG4gICAgICB2YXIgYW5nbGUgPSBhYnMoYWNvcyhzKSk7XG4gICAgICByZXR1cm4gYW5nbGUgPCBwaS8zO1xuICAgIH0sXG4gICAgcmVkdWNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpLCB0MT0wLCB0Mj0wLCBzdGVwPTAuMDEsIHNlZ21lbnQsIHBhc3MxPVtdLCBwYXNzMj1bXTtcbiAgICAgIC8vIGZpcnN0IHBhc3M6IHNwbGl0IG9uIGV4dHJlbWFcbiAgICAgIHZhciBleHRyZW1hID0gdGhpcy5leHRyZW1hKCkudmFsdWVzO1xuICAgICAgaWYoZXh0cmVtYS5pbmRleE9mKDApPT09LTEpIHsgZXh0cmVtYSA9IFswXS5jb25jYXQoZXh0cmVtYSk7IH1cbiAgICAgIGlmKGV4dHJlbWEuaW5kZXhPZigxKT09PS0xKSB7IGV4dHJlbWEucHVzaCgxKTsgfVxuXG4gICAgICBmb3IodDE9ZXh0cmVtYVswXSwgaT0xOyBpPGV4dHJlbWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdDIgPSBleHRyZW1hW2ldO1xuICAgICAgICBzZWdtZW50ID0gdGhpcy5zcGxpdCh0MSx0Mik7XG4gICAgICAgIHNlZ21lbnQuX3QxID0gdDE7XG4gICAgICAgIHNlZ21lbnQuX3QyID0gdDI7XG4gICAgICAgIHBhc3MxLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHQxID0gdDI7XG4gICAgICB9XG5cbiAgICAgIC8vIHNlY29uZCBwYXNzOiBmdXJ0aGVyIHJlZHVjZSB0aGVzZSBzZWdtZW50cyB0byBzaW1wbGUgc2VnbWVudHNcbiAgICAgIHBhc3MxLmZvckVhY2goZnVuY3Rpb24ocDEpIHtcbiAgICAgICAgdDE9MDtcbiAgICAgICAgdDI9MDtcbiAgICAgICAgd2hpbGUodDIgPD0gMSkge1xuICAgICAgICAgIGZvcih0Mj10MStzdGVwOyB0Mjw9MStzdGVwOyB0Mis9c3RlcCkge1xuICAgICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgICAgIGlmKCFzZWdtZW50LnNpbXBsZSgpKSB7XG4gICAgICAgICAgICAgIHQyIC09IHN0ZXA7XG4gICAgICAgICAgICAgIGlmKGFicyh0MS10Mik8c3RlcCkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBuZXZlciBmb3JtIGEgcmVkdWN0aW9uXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSx0Mik7XG4gICAgICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICAgICAgc2VnbWVudC5fdDIgPSB1dGlscy5tYXAodDIsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICB0MSA9IHQyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodDE8MSkge1xuICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSwxKTtcbiAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgc2VnbWVudC5fdDIgPSBwMS5fdDI7XG4gICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFzczI7XG4gICAgfSxcbiAgICBzY2FsZTogZnVuY3Rpb24oZCkge1xuICAgICAgdmFyIG9yZGVyID0gdGhpcy5vcmRlcjtcbiAgICAgIHZhciBkaXN0YW5jZUZuID0gZmFsc2VcbiAgICAgIGlmKHR5cGVvZiBkID09PSBcImZ1bmN0aW9uXCIpIHsgZGlzdGFuY2VGbiA9IGQ7IH1cbiAgICAgIGlmKGRpc3RhbmNlRm4gJiYgb3JkZXIgPT09IDIpIHsgcmV0dXJuIHRoaXMucmFpc2UoKS5zY2FsZShkaXN0YW5jZUZuKTsgfVxuXG4gICAgICAvLyBUT0RPOiBhZGQgc3BlY2lhbCBoYW5kbGluZyBmb3IgZGVnZW5lcmF0ZSAoPWxpbmVhcikgY3VydmVzLlxuICAgICAgdmFyIGNsb2Nrd2lzZSA9IHRoaXMuY2xvY2t3aXNlO1xuICAgICAgdmFyIHIxID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oMCkgOiBkO1xuICAgICAgdmFyIHIyID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oMSkgOiBkO1xuICAgICAgdmFyIHYgPSBbIHRoaXMub2Zmc2V0KDAsMTApLCB0aGlzLm9mZnNldCgxLDEwKSBdO1xuICAgICAgdmFyIG8gPSB1dGlscy5sbGk0KHZbMF0sIHZbMF0uYywgdlsxXSwgdlsxXS5jKTtcbiAgICAgIGlmKCFvKSB7IHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBzY2FsZSB0aGlzIGN1cnZlLiBUcnkgcmVkdWNpbmcgaXQgZmlyc3QuXCIpOyB9XG4gICAgICAvLyBtb3ZlIGFsbCBwb2ludHMgYnkgZGlzdGFuY2UgJ2QnIHdydCB0aGUgb3JpZ2luICdvJ1xuICAgICAgdmFyIHBvaW50cz10aGlzLnBvaW50cywgbnA9W107XG5cbiAgICAgIC8vIG1vdmUgZW5kIHBvaW50cyBieSBmaXhlZCBkaXN0YW5jZSBhbG9uZyBub3JtYWwuXG4gICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHAgPSBucFt0Km9yZGVyXSA9IHV0aWxzLmNvcHkocG9pbnRzW3Qqb3JkZXJdKTtcbiAgICAgICAgcC54ICs9ICh0P3IyOnIxKSAqIHZbdF0ubi54O1xuICAgICAgICBwLnkgKz0gKHQ/cjI6cjEpICogdlt0XS5uLnk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICBpZiAoIWRpc3RhbmNlRm4pIHtcbiAgICAgICAgLy8gbW92ZSBjb250cm9sIHBvaW50cyB0byBsaWUgb24gdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgb2Zmc2V0XG4gICAgICAgIC8vIGRlcml2YXRpdmUgdmVjdG9yLCBhbmQgdGhlIG9yaWdpbi10aHJvdWdoLWNvbnRyb2wgdmVjdG9yXG4gICAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgIGlmKHRoaXMub3JkZXI9PT0yICYmICEhdCkgcmV0dXJuO1xuICAgICAgICAgIHZhciBwID0gbnBbdCpvcmRlcl07XG4gICAgICAgICAgdmFyIGQgPSB0aGlzLmRlcml2YXRpdmUodCk7XG4gICAgICAgICAgdmFyIHAyID0geyB4OiBwLnggKyBkLngsIHk6IHAueSArIGQueSB9O1xuICAgICAgICAgIG5wW3QrMV0gPSB1dGlscy5sbGk0KHAsIHAyLCBvLCBwb2ludHNbdCsxXSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBjb250cm9sIHBvaW50cyBieSBcImhvd2V2ZXIgbXVjaCBuZWNlc3NhcnkgdG9cbiAgICAgIC8vIGVuc3VyZSB0aGUgY29ycmVjdCB0YW5nZW50IHRvIGVuZHBvaW50XCIuXG4gICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYodGhpcy5vcmRlcj09PTIgJiYgISF0KSByZXR1cm47XG4gICAgICAgIHZhciBwID0gcG9pbnRzW3QrMV07XG4gICAgICAgIHZhciBvdiA9IHtcbiAgICAgICAgICB4OiBwLnggLSBvLngsXG4gICAgICAgICAgeTogcC55IC0gby55XG4gICAgICAgIH07XG4gICAgICAgIHZhciByYyA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKCh0KzEpL29yZGVyKSA6IGQ7XG4gICAgICAgIGlmKGRpc3RhbmNlRm4gJiYgIWNsb2Nrd2lzZSkgcmMgPSAtcmM7XG4gICAgICAgIHZhciBtID0gc3FydChvdi54Km92LnggKyBvdi55Km92LnkpO1xuICAgICAgICBvdi54IC89IG07XG4gICAgICAgIG92LnkgLz0gbTtcbiAgICAgICAgbnBbdCsxXSA9IHtcbiAgICAgICAgICB4OiBwLnggKyByYypvdi54LFxuICAgICAgICAgIHk6IHAueSArIHJjKm92LnlcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICB9LFxuICAgIG91dGxpbmU6IGZ1bmN0aW9uKGQxLCBkMiwgZDMsIGQ0KSB7XG4gICAgICBkMiA9ICh0eXBlb2YgZDIgPT09IFwidW5kZWZpbmVkXCIpID8gZDEgOiBkMjtcbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKSxcbiAgICAgICAgICBsZW4gPSByZWR1Y2VkLmxlbmd0aCxcbiAgICAgICAgICBmY3VydmVzID0gW10sXG4gICAgICAgICAgYmN1cnZlcyA9IFtdLFxuICAgICAgICAgIHAsXG4gICAgICAgICAgYWxlbiA9IDAsXG4gICAgICAgICAgdGxlbiA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIHZhciBncmFkdWF0ZWQgPSAodHlwZW9mIGQzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBkNCAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgICAgIGZ1bmN0aW9uIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24ocyxlLCB0bGVuLGFsZW4sc2xlbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICB2YXIgZjEgPSBhbGVuL3RsZW4sIGYyID0gKGFsZW4rc2xlbikvdGxlbiwgZCA9IGUtcztcbiAgICAgICAgICByZXR1cm4gdXRpbHMubWFwKHYsIDAsMSwgcytmMSpkLCBzK2YyKmQpO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLy8gZm9ybSBjdXJ2ZSBvdWxpbmVzXG4gICAgICByZWR1Y2VkLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICBzbGVuID0gc2VnbWVudC5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGdyYWR1YXRlZCkge1xuICAgICAgICAgIGZjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKCAgbGluZWFyRGlzdGFuY2VGdW5jdGlvbiggZDEsIGQzLCB0bGVuLGFsZW4sc2xlbikgICkpO1xuICAgICAgICAgIGJjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKCAgbGluZWFyRGlzdGFuY2VGdW5jdGlvbigtZDIsLWQ0LCB0bGVuLGFsZW4sc2xlbikgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKCBkMSkpO1xuICAgICAgICAgIGJjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKC1kMikpO1xuICAgICAgICB9XG4gICAgICAgIGFsZW4gKz0gc2xlbjtcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXZlcnNlIHRoZSBcInJldHVyblwiIG91dGxpbmVcbiAgICAgIGJjdXJ2ZXMgPSBiY3VydmVzLm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgIHAgPSBzLnBvaW50cztcbiAgICAgICAgaWYocFszXSkgeyBzLnBvaW50cyA9IFtwWzNdLHBbMl0scFsxXSxwWzBdXTsgfVxuICAgICAgICBlbHNlIHsgcy5wb2ludHMgPSBbcFsyXSxwWzFdLHBbMF1dOyB9XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSkucmV2ZXJzZSgpO1xuXG4gICAgICAvLyBmb3JtIHRoZSBlbmRjYXBzIGFzIGxpbmVzXG4gICAgICB2YXIgZnMgPSBmY3VydmVzWzBdLnBvaW50c1swXSxcbiAgICAgICAgICBmZSA9IGZjdXJ2ZXNbbGVuLTFdLnBvaW50c1tmY3VydmVzW2xlbi0xXS5wb2ludHMubGVuZ3RoLTFdLFxuICAgICAgICAgIGJzID0gYmN1cnZlc1tsZW4tMV0ucG9pbnRzW2JjdXJ2ZXNbbGVuLTFdLnBvaW50cy5sZW5ndGgtMV0sXG4gICAgICAgICAgYmUgPSBiY3VydmVzWzBdLnBvaW50c1swXSxcbiAgICAgICAgICBscyA9IHV0aWxzLm1ha2VsaW5lKGJzLGZzKSxcbiAgICAgICAgICBsZSA9IHV0aWxzLm1ha2VsaW5lKGZlLGJlKSxcbiAgICAgICAgICBzZWdtZW50cyA9IFtsc10uY29uY2F0KGZjdXJ2ZXMpLmNvbmNhdChbbGVdKS5jb25jYXQoYmN1cnZlcyksXG4gICAgICAgICAgc2xlbiA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICAgICAgcmV0dXJuIG5ldyBQb2x5QmV6aWVyKHNlZ21lbnRzKTtcbiAgICB9LFxuICAgIG91dGxpbmVzaGFwZXM6IGZ1bmN0aW9uKGQxLCBkMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGQyID0gZDIgfHwgZDE7XG4gICAgICB2YXIgb3V0bGluZSA9IHRoaXMub3V0bGluZShkMSxkMikuY3VydmVzO1xuICAgICAgdmFyIHNoYXBlcyA9IFtdO1xuICAgICAgZm9yKHZhciBpPTEsIGxlbj1vdXRsaW5lLmxlbmd0aDsgaSA8IGxlbi8yOyBpKyspIHtcbiAgICAgICAgdmFyIHNoYXBlID0gdXRpbHMubWFrZXNoYXBlKG91dGxpbmVbaV0sIG91dGxpbmVbbGVuLWldLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIHNoYXBlLnN0YXJ0Y2FwLnZpcnR1YWwgPSAoaSA+IDEpO1xuICAgICAgICBzaGFwZS5lbmRjYXAudmlydHVhbCA9IChpIDwgbGVuLzItMSk7XG4gICAgICAgIHNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGFwZXM7XG4gICAgfSxcbiAgICBpbnRlcnNlY3RzOiBmdW5jdGlvbihjdXJ2ZSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGlmKCFjdXJ2ZSkgcmV0dXJuIHRoaXMuc2VsZmludGVyc2VjdHMoY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgaWYoY3VydmUucDEgJiYgY3VydmUucDIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUludGVyc2VjdHMoY3VydmUpO1xuICAgICAgfVxuICAgICAgaWYoY3VydmUgaW5zdGFuY2VvZiBCZXppZXIpIHsgY3VydmUgPSBjdXJ2ZS5yZWR1Y2UoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuY3VydmVpbnRlcnNlY3RzKHRoaXMucmVkdWNlKCksIGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgfSxcbiAgICBsaW5lSW50ZXJzZWN0czogZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIG14ID0gbWluKGxpbmUucDEueCwgbGluZS5wMi54KSxcbiAgICAgICAgICBteSA9IG1pbihsaW5lLnAxLnksIGxpbmUucDIueSksXG4gICAgICAgICAgTVggPSBtYXgobGluZS5wMS54LCBsaW5lLnAyLngpLFxuICAgICAgICAgIE1ZID0gbWF4KGxpbmUucDEueSwgbGluZS5wMi55KSxcbiAgICAgICAgICBzZWxmPXRoaXM7XG4gICAgICByZXR1cm4gdXRpbHMucm9vdHModGhpcy5wb2ludHMsIGxpbmUpLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBwID0gc2VsZi5nZXQodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5iZXR3ZWVuKHAueCwgbXgsIE1YKSAmJiB1dGlscy5iZXR3ZWVuKHAueSwgbXksIE1ZKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2VsZmludGVyc2VjdHM6IGZ1bmN0aW9uKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7XG4gICAgICAvLyBcInNpbXBsZVwiIGN1cnZlcyBjYW5ub3QgaW50ZXJzZWN0IHdpdGggdGhlaXIgZGlyZWN0XG4gICAgICAvLyBuZWlnaGJvdXIsIHNvIGZvciBlYWNoIHNlZ21lbnQgWCB3ZSBjaGVjayB3aGV0aGVyXG4gICAgICAvLyBpdCBpbnRlcnNlY3RzIFswOngtMl1beCsyOmxhc3RdLlxuICAgICAgdmFyIGksbGVuPXJlZHVjZWQubGVuZ3RoLTIscmVzdWx0cz1bXSxyZXN1bHQsbGVmdCxyaWdodDtcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgbGVmdCA9IHJlZHVjZWQuc2xpY2UoaSxpKzEpO1xuICAgICAgICByaWdodCA9IHJlZHVjZWQuc2xpY2UoaSsyKTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5jdXJ2ZWludGVyc2VjdHMobGVmdCwgcmlnaHQsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KCByZXN1bHQgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG4gICAgY3VydmVpbnRlcnNlY3RzOiBmdW5jdGlvbihjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICAgIC8vIHN0ZXAgMTogcGFpciBvZmYgYW55IG92ZXJsYXBwaW5nIHNlZ21lbnRzXG4gICAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgYzIuZm9yRWFjaChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgaWYobC5vdmVybGFwcyhyKSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7IGxlZnQ6IGwsIHJpZ2h0OiByIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHN0ZXAgMjogZm9yIGVhY2ggcGFpcmluZywgcnVuIHRocm91Z2ggdGhlIGNvbnZlcmdlbmNlIGFsZ29yaXRobS5cbiAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gW107XG4gICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHV0aWxzLnBhaXJpdGVyYXRpb24ocGFpci5sZWZ0LCBwYWlyLnJpZ2h0LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuY29uY2F0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gICAgfSxcbiAgICBhcmNzOiBmdW5jdGlvbihlcnJvclRocmVzaG9sZCkge1xuICAgICAgZXJyb3JUaHJlc2hvbGQgPSBlcnJvclRocmVzaG9sZCB8fCAwLjU7XG4gICAgICB2YXIgY2lyY2xlcyA9IFtdO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXJhdGUoZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpO1xuICAgIH0sXG4gICAgX2Vycm9yOiBmdW5jdGlvbihwYywgbnAxLCBzLCBlKSB7XG4gICAgICB2YXIgcSA9IChlIC0gcykgLyA0LFxuICAgICAgICAgIGMxID0gdGhpcy5nZXQocyArIHEpLFxuICAgICAgICAgIGMyID0gdGhpcy5nZXQoZSAtIHEpLFxuICAgICAgICAgIHJlZiA9IHV0aWxzLmRpc3QocGMsIG5wMSksXG4gICAgICAgICAgZDEgID0gdXRpbHMuZGlzdChwYywgYzEpLFxuICAgICAgICAgIGQyICA9IHV0aWxzLmRpc3QocGMsIGMyKTtcbiAgICAgIHJldHVybiBhYnMoZDEtcmVmKSArIGFicyhkMi1yZWYpO1xuICAgIH0sXG4gICAgX2l0ZXJhdGU6IGZ1bmN0aW9uKGVycm9yVGhyZXNob2xkLCBjaXJjbGVzKSB7XG4gICAgICB2YXIgcyA9IDAsIGUgPSAxLCBzYWZldHk7XG4gICAgICAvLyB3ZSBkbyBhIGJpbmFyeSBzZWFyY2ggdG8gZmluZCB0aGUgXCJnb29kIGB0YCBjbG9zZXN0IHRvIG5vLWxvbmdlci1nb29kXCJcbiAgICAgIGRvIHtcbiAgICAgICAgc2FmZXR5PTA7XG5cbiAgICAgICAgLy8gc3RlcCAxOiBzdGFydCB3aXRoIHRoZSBtYXhpbXVtIHBvc3NpYmxlIGFyY1xuICAgICAgICBlID0gMTtcblxuICAgICAgICAvLyBwb2ludHM6XG4gICAgICAgIHZhciBucDEgPSB0aGlzLmdldChzKSwgbnAyLCBucDMsIGFyYywgcHJldl9hcmM7XG5cbiAgICAgICAgLy8gYm9vbGVhbnM6XG4gICAgICAgIHZhciBjdXJyX2dvb2QgPSBmYWxzZSwgcHJldl9nb29kID0gZmFsc2UsIGRvbmU7XG5cbiAgICAgICAgLy8gbnVtYmVyczpcbiAgICAgICAgdmFyIG0gPSBlLCBwcmV2X2UgPSAxLCBzdGVwID0gMDtcblxuICAgICAgICAvLyBzdGVwIDI6IGZpbmQgdGhlIGJlc3QgcG9zc2libGUgYXJjXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBwcmV2X2dvb2QgPSBjdXJyX2dvb2Q7XG4gICAgICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgICAgICAgbSA9IChzICsgZSkvMjtcbiAgICAgICAgICBzdGVwKys7XG5cbiAgICAgICAgICBucDIgPSB0aGlzLmdldChtKTtcbiAgICAgICAgICBucDMgPSB0aGlzLmdldChlKTtcblxuICAgICAgICAgIGFyYyA9IHV0aWxzLmdldGNjZW50ZXIobnAxLCBucDIsIG5wMyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy9hbHNvIHNhdmUgdGhlIHQgdmFsdWVzXG4gICAgICAgICAgYXJjLmludGVydmFsID0ge1xuICAgICAgICAgICAgc3RhcnQ6IHMsXG4gICAgICAgICAgICBlbmQ6IGVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXJyb3IoYXJjLCBucDEsIHMsIGUpO1xuICAgICAgICAgIGN1cnJfZ29vZCA9IChlcnJvciA8PSBlcnJvclRocmVzaG9sZCk7XG5cbiAgICAgICAgICBkb25lID0gcHJldl9nb29kICYmICFjdXJyX2dvb2Q7XG4gICAgICAgICAgaWYoIWRvbmUpIHByZXZfZSA9IGU7XG5cbiAgICAgICAgICAvLyB0aGlzIGFyYyBpcyBmaW5lOiB3ZSBjYW4gbW92ZSAnZScgdXAgdG8gc2VlIGlmIHdlIGNhbiBmaW5kIGEgd2lkZXIgYXJjXG4gICAgICAgICAgaWYoY3Vycl9nb29kKSB7XG4gICAgICAgICAgICAvLyBpZiBlIGlzIGFscmVhZHkgYXQgbWF4LCB0aGVuIHdlJ3JlIGRvbmUgZm9yIHRoaXMgYXJjLlxuICAgICAgICAgICAgaWYgKGUgPj0gMSkge1xuICAgICAgICAgICAgICBwcmV2X2UgPSAxO1xuICAgICAgICAgICAgICBwcmV2X2FyYyA9IGFyYztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBub3QsIG1vdmUgaXQgdXAgYnkgaGFsZiB0aGUgaXRlcmF0aW9uIGRpc3RhbmNlXG4gICAgICAgICAgICBlID0gZSArIChlLXMpLzI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdGhpcyBpcyBhIGJhZCBhcmM6IHdlIG5lZWQgdG8gbW92ZSAnZScgZG93biB0byBmaW5kIGEgZ29vZCBhcmNcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGUgPSBtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSghZG9uZSAmJiBzYWZldHkrKzwxMDApO1xuXG4gICAgICAgIGlmKHNhZmV0eT49MTAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcImFyYyBhYnN0cmFjdGlvbiBzb21laG93IGZhaWxlZC4uLlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiW0ZdIGFyYyBmb3VuZFwiLCBzLCBwcmV2X2UsIHByZXZfYXJjLngsIHByZXZfYXJjLnksIHByZXZfYXJjLnMsIHByZXZfYXJjLmUpO1xuXG4gICAgICAgIHByZXZfYXJjID0gKHByZXZfYXJjID8gcHJldl9hcmMgOiBhcmMpO1xuICAgICAgICBjaXJjbGVzLnB1c2gocHJldl9hcmMpO1xuICAgICAgICBzID0gcHJldl9lO1xuICAgICAgfVxuICAgICAgd2hpbGUoZSA8IDEpO1xuICAgICAgcmV0dXJuIGNpcmNsZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgdXRpbHMgPSByZXF1aXJlKDk2KTtcblxuICAvKipcbiAgICogUG9seSBCZXppZXJcbiAgICogQHBhcmFtIHtbdHlwZV19IGN1cnZlcyBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB2YXIgUG9seUJlemllciA9IGZ1bmN0aW9uKGN1cnZlcykge1xuICAgIHRoaXMuY3VydmVzID0gW107XG4gICAgdGhpcy5fM2QgPSBmYWxzZTtcbiAgICBpZighIWN1cnZlcykge1xuICAgICAgdGhpcy5jdXJ2ZXMgPSBjdXJ2ZXM7XG4gICAgICB0aGlzLl8zZCA9IHRoaXMuY3VydmVzWzBdLl8zZDtcbiAgICB9XG4gIH1cblxuICBQb2x5QmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgYWRkQ3VydmU6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB0aGlzLmN1cnZlcy5wdXNoKGN1cnZlKTtcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5fM2QgfHwgY3VydmUuXzNkO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi5sZW5ndGgoKTsgfSkucmVkdWNlKGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYStiOyB9KTtcbiAgICB9LFxuICAgIGN1cnZlOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlc1tpZHhdO1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuY3VydmVzO1xuICAgICAgdmFyIGJib3ggPSBjWzBdLmJib3goKTtcbiAgICAgIGZvcih2YXIgaT0xOyBpPGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXRpbHMuZXhwYW5kYm94KGJib3gsIGNbaV0uYmJveCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYm94O1xuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gW107XG4gICAgICB0aGlzLmN1cnZlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0LmNvbmNhdCh2Lm9mZnNldChkKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihvZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFBvbHlCZXppZXI7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBjb3MgPSBNYXRoLmNvcyxcbiAgICAgIHNpbiA9IE1hdGguc2luLFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIGF0YW4yID0gTWF0aC5hdGFuMixcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwb3cgPSBNYXRoLnBvdyxcbiAgICAgIC8vIGN1YmUgcm9vdCBmdW5jdGlvbiB5aWVsZGluZyByZWFsIHJvb3RzXG4gICAgICBjcnQgPSBmdW5jdGlvbih2KSB7IHJldHVybiAodjwwKSA/IC1wb3coLXYsMS8zKSA6IHBvdyh2LDEvMyk7IH0sXG4gICAgICAvLyB0cmlnIGNvbnN0YW50c1xuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgdGF1ID0gMipwaSxcbiAgICAgIHF1YXJ0ID0gcGkvMixcbiAgICAgIC8vIGZsb2F0IHByZWNpc2lvbiBzaWduaWZpY2FudCBkZWNpbWFsXG4gICAgICBlcHNpbG9uID0gMC4wMDAwMDE7XG5cbiAgLy8gQmV6aWVyIHV0aWxpdHkgZnVuY3Rpb25zXG4gIHZhciB1dGlscyA9IHtcbiAgICAvLyBMZWdlbmRyZS1HYXVzcyBhYnNjaXNzYWUgd2l0aCBuPTI0ICh4X2kgdmFsdWVzLCBkZWZpbmVkIGF0IGk9biBhcyB0aGUgcm9vdHMgb2YgdGhlIG50aCBvcmRlciBMZWdlbmRyZSBwb2x5bm9taWFsIFBuKHgpKVxuICAgIFR2YWx1ZXM6IFtcbiAgICAgIC0wLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAgMC4wNjQwNTY4OTI4NjI2MDU2MjYwODUwNDMwODI2MjQ3NDUwMzg1OTA5LFxuICAgICAgLTAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgICAwLjE5MTExODg2NzQ3MzYxNjMwOTE1ODYzOTgyMDc1NzA2OTYzMTg0MDQsXG4gICAgICAtMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgIDAuMzE1MDQyNjc5Njk2MTYzMzc0Mzg2NzkzMjkxMzE5ODEwMjQwNzg2NCxcbiAgICAgIC0wLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAgMC40MzM3OTM1MDc2MjYwNDUxMzg0ODcwODQyMzE5MTMzNDk3MTI0NTI0LFxuICAgICAgLTAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgICAwLjU0NTQyMTQ3MTM4ODgzOTUzNTY1ODM3NTYxNzIxODM3MjM3MDAxMDcsXG4gICAgICAtMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgIDAuNjQ4MDkzNjUxOTM2OTc1NTY5MjUyNDk1Nzg2OTEwNzQ3NjI2NjY5NixcbiAgICAgIC0wLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAgMC43NDAxMjQxOTE1Nzg1NTQzNjQyNDM4MjgxMDMwOTk5Nzg0MjU1MjMyLFxuICAgICAgLTAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgICAwLjgyMDAwMTk4NTk3MzkwMjkyMTk1Mzk0OTg3MjY2OTc0NTIwODA3NjEsXG4gICAgICAtMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgIDAuODg2NDE1NTI3MDA0NDAxMDM0MjEzMTU0MzQxOTgyMTk2NzU1MDg3MyxcbiAgICAgIC0wLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAgMC45MzgyNzQ1NTIwMDI3MzI3NTg1MjM2NDkwMDE3MDg3MjE0NDk2NTQ4LFxuICAgICAgLTAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgICAwLjk3NDcyODU1NTk3MTMwOTQ5ODE5ODM5MTk5MzAwODE2OTA2MTc0MTEsXG4gICAgICAtMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1LFxuICAgICAgIDAuOTk1MTg3MjE5OTk3MDIxMzYwMTc5OTk3NDA5NzAwNzM2ODExODc0NVxuICAgIF0sXG5cbiAgICAvLyBMZWdlbmRyZS1HYXVzcyB3ZWlnaHRzIHdpdGggbj0yNCAod19pIHZhbHVlcywgZGVmaW5lZCBieSBhIGZ1bmN0aW9uIGxpbmtlZCB0byBpbiB0aGUgQmV6aWVyIHByaW1lciBhcnRpY2xlKVxuICAgIEN2YWx1ZXM6IFtcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OVxuICAgIF0sXG5cbiAgICBhcmNmbjogZnVuY3Rpb24odCwgZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgZCA9IGRlcml2YXRpdmVGbih0KTtcbiAgICAgIHZhciBsID0gZC54KmQueCArIGQueSpkLnk7XG4gICAgICBpZih0eXBlb2YgZC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGwgKz0gZC56KmQuejtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzcXJ0KGwpO1xuICAgIH0sXG5cbiAgICBiZXR3ZWVuOiBmdW5jdGlvbih2LCBtLCBNKSB7XG4gICAgICByZXR1cm4gKG0gPD0gdiAmJiB2IDw9IE0pIHx8IHV0aWxzLmFwcHJveGltYXRlbHkodiwgbSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBNKTtcbiAgICB9LFxuXG4gICAgYXBwcm94aW1hdGVseTogZnVuY3Rpb24oYSxiLHByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIGFicyhhLWIpIDw9IChwcmVjaXNpb24gfHwgZXBzaWxvbik7XG4gICAgfSxcblxuICAgIGxlbmd0aDogZnVuY3Rpb24oZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgej0wLjUsc3VtPTAsbGVuPXV0aWxzLlR2YWx1ZXMubGVuZ3RoLGksdDtcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IHogKiB1dGlscy5UdmFsdWVzW2ldICsgejtcbiAgICAgICAgc3VtICs9IHV0aWxzLkN2YWx1ZXNbaV0gKiB1dGlscy5hcmNmbih0LGRlcml2YXRpdmVGbik7XG4gICAgICB9XG4gICAgICByZXR1cm4geiAqIHN1bTtcbiAgICB9LFxuXG4gICAgbWFwOiBmdW5jdGlvbih2LCBkcyxkZSwgdHMsdGUpIHtcbiAgICAgIHZhciBkMSA9IGRlLWRzLCBkMiA9IHRlLXRzLCB2MiA9ICB2LWRzLCByID0gdjIvZDE7XG4gICAgICByZXR1cm4gdHMgKyBkMipyO1xuICAgIH0sXG5cbiAgICBsZXJwOiBmdW5jdGlvbihyLCB2MSwgdjIpIHtcbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IHYxLnggKyByKih2Mi54LXYxLngpLFxuICAgICAgICB5OiB2MS55ICsgcioodjIueS12MS55KVxuICAgICAgfTtcbiAgICAgIGlmKCEhdjEueiAmJiAhIXYyLnopIHtcbiAgICAgICAgcmV0LnogPSAgdjEueiArIHIqKHYyLnotdjEueik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwb2ludFRvU3RyaW5nOiBmdW5jdGlvbihwKSB7XG4gICAgICB2YXIgcyA9IHAueCtcIi9cIitwLnk7XG4gICAgICBpZih0eXBlb2YgcC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHMgKz0gXCIvXCIrcC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSxcblxuICAgIHBvaW50c1RvU3RyaW5nOiBmdW5jdGlvbihwb2ludHMpIHtcbiAgICAgIHJldHVybiBcIltcIiArIHBvaW50cy5tYXAodXRpbHMucG9pbnRUb1N0cmluZykuam9pbihcIiwgXCIpICsgXCJdXCI7XG4gICAgfSxcblxuICAgIGNvcHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgfSxcblxuICAgIGFuZ2xlOiBmdW5jdGlvbihvLHYxLHYyKSB7XG4gICAgICB2YXIgZHgxID0gdjEueCAtIG8ueCxcbiAgICAgICAgICBkeTEgPSB2MS55IC0gby55LFxuICAgICAgICAgIGR4MiA9IHYyLnggLSBvLngsXG4gICAgICAgICAgZHkyID0gdjIueSAtIG8ueSxcbiAgICAgICAgICBjcm9zcyA9IGR4MSpkeTIgLSBkeTEqZHgyLFxuICAgICAgICAgIG0xID0gc3FydChkeDEqZHgxK2R5MSpkeTEpLFxuICAgICAgICAgIG0yID0gc3FydChkeDIqZHgyK2R5MipkeTIpLFxuICAgICAgICAgIGRvdDtcbiAgICAgIGR4MS89bTE7IGR5MS89bTE7IGR4Mi89bTI7IGR5Mi89bTI7XG4gICAgICBkb3QgPSBkeDEqZHgyICsgZHkxKmR5MjtcbiAgICAgIHJldHVybiBhdGFuMihjcm9zcywgZG90KTtcbiAgICB9LFxuXG4gICAgLy8gcm91bmQgYXMgc3RyaW5nLCB0byBhdm9pZCByb3VuZGluZyBlcnJvcnNcbiAgICByb3VuZDogZnVuY3Rpb24odiwgZCkge1xuICAgICAgdmFyIHMgPSAnJyArIHY7XG4gICAgICB2YXIgcG9zID0gcy5pbmRleE9mKFwiLlwiKTtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHMuc3Vic3RyaW5nKDAscG9zKzErZCkpO1xuICAgIH0sXG5cbiAgICBkaXN0OiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnk7XG4gICAgICByZXR1cm4gc3FydChkeCpkeCtkeSpkeSk7XG4gICAgfSxcblxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKExVVCwgcG9pbnQpIHtcbiAgICAgIHZhciBtZGlzdCA9IHBvdygyLDYzKSwgbXBvcywgZDtcbiAgICAgIExVVC5mb3JFYWNoKGZ1bmN0aW9uKHAsIGlkeCkge1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIG1wb3MgPSBpZHg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgbWRpc3Q6bWRpc3QsIG1wb3M6bXBvcyB9O1xuICAgIH0sXG5cbiAgICBhYmNyYXRpbzogZnVuY3Rpb24odCwgbikge1xuICAgICAgLy8gc2VlIHJhdGlvKHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgYm90dG9tID0gcG93KHQsbikgKyBwb3coMS10LG4pLCB0b3AgPSBib3R0b20gLSAxO1xuICAgICAgcmV0dXJuIGFicyh0b3AvYm90dG9tKTtcbiAgICB9LFxuXG4gICAgcHJvamVjdGlvbnJhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgdSh0KSBub3RlIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mby8jYWJjXG4gICAgICBpZiAobiE9PTIgJiYgbiE9PTMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHQgPSAwLjU7XG4gICAgICB9IGVsc2UgaWYgKHQ9PT0wIHx8IHQ9PT0xKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IHBvdygxLXQsIG4pLCBib3R0b20gPSBwb3codCxuKSArIHRvcDtcbiAgICAgIHJldHVybiB0b3AvYm90dG9tO1xuICAgIH0sXG5cbiAgICBsbGk4OiBmdW5jdGlvbih4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCkge1xuICAgICAgdmFyIG54PSh4MSp5Mi15MSp4MikqKHgzLXg0KS0oeDEteDIpKih4Myp5NC15Myp4NCksXG4gICAgICAgICAgbnk9KHgxKnkyLXkxKngyKSooeTMteTQpLSh5MS15MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBkPSh4MS14MikqKHkzLXk0KS0oeTEteTIpKih4My14NCk7XG4gICAgICBpZihkPT0wKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgcmV0dXJuIHsgeDogbngvZCwgeTogbnkvZCB9O1xuICAgIH0sXG5cbiAgICBsbGk0OiBmdW5jdGlvbihwMSxwMixwMyxwNCkge1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LFxuICAgICAgICAgIHgyID0gcDIueCwgeTIgPSBwMi55LFxuICAgICAgICAgIHgzID0gcDMueCwgeTMgPSBwMy55LFxuICAgICAgICAgIHg0ID0gcDQueCwgeTQgPSBwNC55O1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTgoeDEseTEseDIseTIseDMseTMseDQseTQpO1xuICAgIH0sXG5cbiAgICBsbGk6IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTQodjEsdjEuYyx2Mix2Mi5jKTtcbiAgICB9LFxuXG4gICAgbWFrZWxpbmU6IGZ1bmN0aW9uKHAxLHAyKSB7XG4gICAgICB2YXIgQmV6aWVyID0gcmVxdWlyZSg5NCk7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksIHgyID0gcDIueCwgeTIgPSBwMi55LCBkeCA9ICh4Mi14MSkvMywgZHkgPSAoeTIteTEpLzM7XG4gICAgICByZXR1cm4gbmV3IEJlemllcih4MSwgeTEsIHgxK2R4LCB5MStkeSwgeDErMipkeCwgeTErMipkeSwgeDIsIHkyKTtcbiAgICB9LFxuXG4gICAgZmluZGJib3g6IGZ1bmN0aW9uKHNlY3Rpb25zKSB7XG4gICAgICB2YXIgbXg9OTk5OTk5OTksbXk9bXgsTVg9LW14LE1ZPU1YO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciBiYm94ID0gcy5iYm94KCk7XG4gICAgICAgIGlmKG14ID4gYmJveC54Lm1pbikgbXggPSBiYm94LngubWluO1xuICAgICAgICBpZihteSA+IGJib3gueS5taW4pIG15ID0gYmJveC55Lm1pbjtcbiAgICAgICAgaWYoTVggPCBiYm94LngubWF4KSBNWCA9IGJib3gueC5tYXg7XG4gICAgICAgIGlmKE1ZIDwgYmJveC55Lm1heCkgTVkgPSBiYm94LnkubWF4O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB7IG1pbjogbXgsIG1pZDoobXgrTVgpLzIsIG1heDogTVgsIHNpemU6TVgtbXggfSxcbiAgICAgICAgeTogeyBtaW46IG15LCBtaWQ6KG15K01ZKS8yLCBtYXg6IE1ZLCBzaXplOk1ZLW15IH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcGVpbnRlcnNlY3Rpb25zOiBmdW5jdGlvbihzMSwgYmJveDEsIHMyLCBiYm94MiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGlmKCF1dGlscy5iYm94b3ZlcmxhcChiYm94MSwgYmJveDIpKSByZXR1cm4gW107XG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgdmFyIGExID0gW3MxLnN0YXJ0Y2FwLCBzMS5mb3J3YXJkLCBzMS5iYWNrLCBzMS5lbmRjYXBdO1xuICAgICAgdmFyIGEyID0gW3MyLnN0YXJ0Y2FwLCBzMi5mb3J3YXJkLCBzMi5iYWNrLCBzMi5lbmRjYXBdO1xuICAgICAgYTEuZm9yRWFjaChmdW5jdGlvbihsMSkge1xuICAgICAgICBpZihsMS52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgIGEyLmZvckVhY2goZnVuY3Rpb24obDIpIHtcbiAgICAgICAgICBpZihsMi52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgICAgdmFyIGlzcyA9IGwxLmludGVyc2VjdHMobDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgICBpZihpc3MubGVuZ3RoPjApIHtcbiAgICAgICAgICAgIGlzcy5jMSA9IGwxO1xuICAgICAgICAgICAgaXNzLmMyID0gbDI7XG4gICAgICAgICAgICBpc3MuczEgPSBzMTtcbiAgICAgICAgICAgIGlzcy5zMiA9IHMyO1xuICAgICAgICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKGlzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gICAgfSxcblxuICAgIG1ha2VzaGFwZTogZnVuY3Rpb24oZm9yd2FyZCwgYmFjaywgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBicGwgPSBiYWNrLnBvaW50cy5sZW5ndGg7XG4gICAgICB2YXIgZnBsID0gZm9yd2FyZC5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIHN0YXJ0ICA9IHV0aWxzLm1ha2VsaW5lKGJhY2sucG9pbnRzW2JwbC0xXSwgZm9yd2FyZC5wb2ludHNbMF0pO1xuICAgICAgdmFyIGVuZCAgICA9IHV0aWxzLm1ha2VsaW5lKGZvcndhcmQucG9pbnRzW2ZwbC0xXSwgYmFjay5wb2ludHNbMF0pO1xuICAgICAgdmFyIHNoYXBlICA9IHtcbiAgICAgICAgc3RhcnRjYXA6IHN0YXJ0LFxuICAgICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgICBiYWNrOiBiYWNrLFxuICAgICAgICBlbmRjYXA6IGVuZCxcbiAgICAgICAgYmJveDogdXRpbHMuZmluZGJib3goW3N0YXJ0LCBmb3J3YXJkLCBiYWNrLCBlbmRdKVxuICAgICAgfTtcbiAgICAgIHZhciBzZWxmID0gdXRpbHM7XG4gICAgICBzaGFwZS5pbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oczIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2hhcGVpbnRlcnNlY3Rpb25zKHNoYXBlLHNoYXBlLmJib3gsczIsczIuYmJveCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9LFxuXG4gICAgZ2V0bWlubWF4OiBmdW5jdGlvbihjdXJ2ZSwgZCwgbGlzdCkge1xuICAgICAgaWYoIWxpc3QpIHJldHVybiB7IG1pbjowLCBtYXg6MCB9O1xuICAgICAgdmFyIG1pbj0weEZGRkZGRkZGRkZGRkZGRkYsIG1heD0tbWluLHQsYztcbiAgICAgIGlmKGxpc3QuaW5kZXhPZigwKT09PS0xKSB7IGxpc3QgPSBbMF0uY29uY2F0KGxpc3QpOyB9XG4gICAgICBpZihsaXN0LmluZGV4T2YoMSk9PT0tMSkgeyBsaXN0LnB1c2goMSk7IH1cbiAgICAgIGZvcih2YXIgaT0wLGxlbj1saXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0gbGlzdFtpXTtcbiAgICAgICAgYyA9IGN1cnZlLmdldCh0KTtcbiAgICAgICAgaWYoY1tkXSA8IG1pbikgeyBtaW4gPSBjW2RdOyB9XG4gICAgICAgIGlmKGNbZF0gPiBtYXgpIHsgbWF4ID0gY1tkXTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbWluOm1pbiwgbWlkOihtaW4rbWF4KS8yLCBtYXg6bWF4LCBzaXplOm1heC1taW4gfTtcbiAgICB9LFxuXG4gICAgYWxpZ246IGZ1bmN0aW9uKHBvaW50cywgbGluZSkge1xuICAgICAgdmFyIHR4ID0gbGluZS5wMS54LFxuICAgICAgICAgIHR5ID0gbGluZS5wMS55LFxuICAgICAgICAgIGEgPSAtYXRhbjIobGluZS5wMi55LXR5LCBsaW5lLnAyLngtdHgpLFxuICAgICAgICAgIGQgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiAodi54LXR4KSpjb3MoYSkgLSAodi55LXR5KSpzaW4oYSksXG4gICAgICAgICAgICAgIHk6ICh2LngtdHgpKnNpbihhKSArICh2LnktdHkpKmNvcyhhKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgcmV0dXJuIHBvaW50cy5tYXAoZCk7XG4gICAgfSxcblxuICAgIHJvb3RzOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIGxpbmUgPSBsaW5lIHx8IHtwMTp7eDowLHk6MH0scDI6e3g6MSx5OjB9fTtcbiAgICAgIHZhciBvcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIGxpbmUpO1xuICAgICAgdmFyIHJlZHVjZSA9IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIDA8PXQgJiYgdCA8PTE7IH07XG5cbiAgICAgIGlmIChvcmRlciA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0ueSxcbiAgICAgICAgICAgIGIgPSBwWzFdLnksXG4gICAgICAgICAgICBjID0gcFsyXS55LFxuICAgICAgICAgICAgZCA9IGEgLSAyKmIgKyBjO1xuICAgICAgICBpZihkIT09MCkge1xuICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIqYi1hKmMpLFxuICAgICAgICAgICAgICBtMiA9IC1hK2IsXG4gICAgICAgICAgICAgIHYxID0gLSggbTErbTIpL2QsXG4gICAgICAgICAgICAgIHYyID0gLSgtbTErbTIpL2Q7XG4gICAgICAgICAgcmV0dXJuIFt2MSwgdjJdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYiE9PWMgJiYgZD09PTApIHtcbiAgICAgICAgICByZXR1cm4gWyAoMipiLWMpLzIqKGItYykgXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnRyYW5zNG1pbmQuY29tL3BlcnNvbmFsX2RldmVsb3BtZW50L21hdGhlbWF0aWNzL3BvbHlub21pYWxzL2N1YmljQWxnZWJyYS5odG1cbiAgICAgIHZhciBwYSA9IHBbMF0ueSxcbiAgICAgICAgICBwYiA9IHBbMV0ueSxcbiAgICAgICAgICBwYyA9IHBbMl0ueSxcbiAgICAgICAgICBwZCA9IHBbM10ueSxcbiAgICAgICAgICBkID0gKC1wYSArIDMqcGIgLSAzKnBjICsgcGQpLFxuICAgICAgICAgIGEgPSAoMypwYSAtIDYqcGIgKyAzKnBjKSAvIGQsXG4gICAgICAgICAgYiA9ICgtMypwYSArIDMqcGIpIC8gZCxcbiAgICAgICAgICBjID0gcGEgLyBkLFxuICAgICAgICAgIHAgPSAoMypiIC0gYSphKS8zLFxuICAgICAgICAgIHAzID0gcC8zLFxuICAgICAgICAgIHEgPSAoMiphKmEqYSAtIDkqYSpiICsgMjcqYykvMjcsXG4gICAgICAgICAgcTIgPSBxLzIsXG4gICAgICAgICAgZGlzY3JpbWluYW50ID0gcTIqcTIgKyBwMypwMypwMyxcbiAgICAgICAgICB1MSx2MSx4MSx4Mix4MztcbiAgICAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xuICAgICAgICB2YXIgbXAzID0gLXAvMyxcbiAgICAgICAgICAgIG1wMzMgPSBtcDMqbXAzKm1wMyxcbiAgICAgICAgICAgIHIgPSBzcXJ0KCBtcDMzICksXG4gICAgICAgICAgICB0ID0gLXEvKDIqciksXG4gICAgICAgICAgICBjb3NwaGkgPSB0PC0xID8gLTEgOiB0PjEgPyAxIDogdCxcbiAgICAgICAgICAgIHBoaSA9IGFjb3MoY29zcGhpKSxcbiAgICAgICAgICAgIGNydHIgPSBjcnQociksXG4gICAgICAgICAgICB0MSA9IDIqY3J0cjtcbiAgICAgICAgeDEgPSB0MSAqIGNvcyhwaGkvMykgLSBhLzM7XG4gICAgICAgIHgyID0gdDEgKiBjb3MoKHBoaSt0YXUpLzMpIC0gYS8zO1xuICAgICAgICB4MyA9IHQxICogY29zKChwaGkrMip0YXUpLzMpIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLCB4MiwgeDNdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgfSBlbHNlIGlmKGRpc2NyaW1pbmFudCA9PT0gMCkge1xuICAgICAgICB1MSA9IHEyIDwgMCA/IGNydCgtcTIpIDogLWNydChxMik7XG4gICAgICAgIHgxID0gMip1MS1hLzM7XG4gICAgICAgIHgyID0gLXUxIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLHgyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZCA9IHNxcnQoZGlzY3JpbWluYW50KTtcbiAgICAgICAgdTEgPSBjcnQoLXEyK3NkKTtcbiAgICAgICAgdjEgPSBjcnQocTIrc2QpO1xuICAgICAgICByZXR1cm4gW3UxLXYxLWEvM10uZmlsdGVyKHJlZHVjZSk7O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkcm9vdHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgIC8vIHF1YWRyYXRpYyByb290cyBhcmUgZWFzeVxuICAgICAgaWYocC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLFxuICAgICAgICAgICAgYiA9IHBbMV0sXG4gICAgICAgICAgICBjID0gcFsyXSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsoMipiLWMpLygyKihiLWMpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBsaW5lYXIgcm9vdHMgYXJlIGV2ZW4gZWFzaWVyXG4gICAgICBpZihwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0sIGIgPSBwWzFdO1xuICAgICAgICBpZihhIT09Yikge1xuICAgICAgICAgIHJldHVybiBbYS8oYS1iKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24ocG9pbnRzKSB7XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aDw0KSByZXR1cm4gW107XG5cbiAgICAgIC8vIEZJWE1FOiBUT0RPOiBhZGQgaW4gaW5mbGVjdGlvbiBhYnN0cmFjdGlvbiBmb3IgcXVhcnRpYysgY3VydmVzP1xuXG4gICAgICB2YXIgcCA9IHV0aWxzLmFsaWduKHBvaW50cywgeyBwMTogcG9pbnRzWzBdLCBwMjogcG9pbnRzLnNsaWNlKC0xKVswXSB9KSxcbiAgICAgICAgICBhID0gcFsyXS54ICogcFsxXS55LFxuICAgICAgICAgIGIgPSBwWzNdLnggKiBwWzFdLnksXG4gICAgICAgICAgYyA9IHBbMV0ueCAqIHBbMl0ueSxcbiAgICAgICAgICBkID0gcFszXS54ICogcFsyXS55LFxuICAgICAgICAgIHYxID0gMTggKiAoLTMqYSArIDIqYiArIDMqYyAtIGQpLFxuICAgICAgICAgIHYyID0gMTggKiAoMyphIC0gYiAtIDMqYyksXG4gICAgICAgICAgdjMgPSAxOCAqIChjIC0gYSk7XG5cbiAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KHYxLDApKSByZXR1cm4gW107XG5cbiAgICAgIHZhciB0cm0gPSB2Mip2MiAtIDQqdjEqdjMsXG4gICAgICAgICAgc3EgPSBNYXRoLnNxcnQodHJtKSxcbiAgICAgICAgICBkID0gMiAqIHYxO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLDApKSByZXR1cm4gW107XG5cbiAgICAgIHJldHVybiBbKHNxLXYyKS9kLCAtKHYyK3NxKS9kXS5maWx0ZXIoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gKDAgPD0gciAmJiByIDw9IDEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGJib3hvdmVybGFwOiBmdW5jdGlvbihiMSxiMikge1xuICAgICAgdmFyIGRpbXM9Wyd4JywneSddLGxlbj1kaW1zLmxlbmd0aCxpLGRpbSxsLHQsZFxuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBkaW0gPSBkaW1zW2ldO1xuICAgICAgICBsID0gYjFbZGltXS5taWQ7XG4gICAgICAgIHQgPSBiMltkaW1dLm1pZDtcbiAgICAgICAgZCA9IChiMVtkaW1dLnNpemUgKyBiMltkaW1dLnNpemUpLzI7XG4gICAgICAgIGlmKGFicyhsLXQpID49IGQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBleHBhbmRib3g6IGZ1bmN0aW9uKGJib3gsIF9iYm94KSB7XG4gICAgICBpZihfYmJveC54Lm1pbiA8IGJib3gueC5taW4pIHsgYmJveC54Lm1pbiA9IF9iYm94LngubWluOyB9XG4gICAgICBpZihfYmJveC55Lm1pbiA8IGJib3gueS5taW4pIHsgYmJveC55Lm1pbiA9IF9iYm94LnkubWluOyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWluIDwgYmJveC56Lm1pbikgeyBiYm94LnoubWluID0gX2Jib3guei5taW47IH1cbiAgICAgIGlmKF9iYm94LngubWF4ID4gYmJveC54Lm1heCkgeyBiYm94LngubWF4ID0gX2Jib3gueC5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnkubWF4ID4gYmJveC55Lm1heCkgeyBiYm94LnkubWF4ID0gX2Jib3gueS5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnogJiYgX2Jib3guei5tYXggPiBiYm94LnoubWF4KSB7IGJib3guei5tYXggPSBfYmJveC56Lm1heDsgfVxuICAgICAgYmJveC54Lm1pZCA9IChiYm94LngubWluICsgYmJveC54Lm1heCkvMjtcbiAgICAgIGJib3gueS5taWQgPSAoYmJveC55Lm1pbiArIGJib3gueS5tYXgpLzI7XG4gICAgICBpZihiYm94LnopIHsgYmJveC56Lm1pZCA9IChiYm94LnoubWluICsgYmJveC56Lm1heCkvMjsgfVxuICAgICAgYmJveC54LnNpemUgPSBiYm94LngubWF4IC0gYmJveC54Lm1pbjtcbiAgICAgIGJib3gueS5zaXplID0gYmJveC55Lm1heCAtIGJib3gueS5taW47XG4gICAgICBpZihiYm94LnopIHsgYmJveC56LnNpemUgPSBiYm94LnoubWF4IC0gYmJveC56Lm1pbjsgfVxuICAgIH0sXG5cbiAgICBwYWlyaXRlcmF0aW9uOiBmdW5jdGlvbihjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYzFiID0gYzEuYmJveCgpLFxuICAgICAgICAgIGMyYiA9IGMyLmJib3goKSxcbiAgICAgICAgICByID0gMTAwMDAwLFxuICAgICAgICAgIHRocmVzaG9sZCA9IGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIGlmKGMxYi54LnNpemUgKyBjMWIueS5zaXplIDwgdGhyZXNob2xkICYmIGMyYi54LnNpemUgKyBjMmIueS5zaXplIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiBbICgociAqIChjMS5fdDErYzEuX3QyKS8yKXwwKS9yICsgXCIvXCIgKyAoKHIgKiAoYzIuX3QxK2MyLl90MikvMil8MCkvciBdO1xuICAgICAgfVxuICAgICAgdmFyIGNjMSA9IGMxLnNwbGl0KDAuNSksXG4gICAgICAgICAgY2MyID0gYzIuc3BsaXQoMC41KSxcbiAgICAgICAgICBwYWlycyA9IFtcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEubGVmdCwgcmlnaHQ6IGNjMi5sZWZ0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIubGVmdCB9XTtcbiAgICAgIHBhaXJzID0gcGFpcnMuZmlsdGVyKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKHBhaXIubGVmdC5iYm94KCkscGFpci5yaWdodC5iYm94KCkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgaWYocGFpcnMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0cztcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIHRocmVzaG9sZClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24odixpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmluZGV4T2YodikgPT09IGk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG5cbiAgICBnZXRjY2VudGVyOiBmdW5jdGlvbihwMSxwMixwMykge1xuICAgICAgdmFyIGR4MSA9IChwMi54IC0gcDEueCksXG4gICAgICAgICAgZHkxID0gKHAyLnkgLSBwMS55KSxcbiAgICAgICAgICBkeDIgPSAocDMueCAtIHAyLngpLFxuICAgICAgICAgIGR5MiA9IChwMy55IC0gcDIueSk7XG4gICAgICB2YXIgZHgxcCA9IGR4MSAqIGNvcyhxdWFydCkgLSBkeTEgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MXAgPSBkeDEgKiBzaW4ocXVhcnQpICsgZHkxICogY29zKHF1YXJ0KSxcbiAgICAgICAgICBkeDJwID0gZHgyICogY29zKHF1YXJ0KSAtIGR5MiAqIHNpbihxdWFydCksXG4gICAgICAgICAgZHkycCA9IGR4MiAqIHNpbihxdWFydCkgKyBkeTIgKiBjb3MocXVhcnQpO1xuICAgICAgLy8gY2hvcmQgbWlkcG9pbnRzXG4gICAgICB2YXIgbXgxID0gKHAxLnggKyBwMi54KS8yLFxuICAgICAgICAgIG15MSA9IChwMS55ICsgcDIueSkvMixcbiAgICAgICAgICBteDIgPSAocDIueCArIHAzLngpLzIsXG4gICAgICAgICAgbXkyID0gKHAyLnkgKyBwMy55KS8yO1xuICAgICAgLy8gbWlkcG9pbnQgb2Zmc2V0c1xuICAgICAgdmFyIG14MW4gPSBteDEgKyBkeDFwLFxuICAgICAgICAgIG15MW4gPSBteTEgKyBkeTFwLFxuICAgICAgICAgIG14Mm4gPSBteDIgKyBkeDJwLFxuICAgICAgICAgIG15Mm4gPSBteTIgKyBkeTJwO1xuICAgICAgLy8gaW50ZXJzZWN0aW9uIG9mIHRoZXNlIGxpbmVzOlxuICAgICAgdmFyIGFyYyA9IHV0aWxzLmxsaTgobXgxLG15MSxteDFuLG15MW4sIG14MixteTIsbXgybixteTJuKSxcbiAgICAgICAgICByID0gdXRpbHMuZGlzdChhcmMscDEpLFxuICAgICAgICAgIC8vIGFyYyBzdGFydC9lbmQgdmFsdWVzLCBvdmVyIG1pZCBwb2ludDpcbiAgICAgICAgICBzID0gYXRhbjIocDEueSAtIGFyYy55LCBwMS54IC0gYXJjLngpLFxuICAgICAgICAgIG0gPSBhdGFuMihwMi55IC0gYXJjLnksIHAyLnggLSBhcmMueCksXG4gICAgICAgICAgZSA9IGF0YW4yKHAzLnkgLSBhcmMueSwgcDMueCAtIGFyYy54KSxcbiAgICAgICAgICBfO1xuICAgICAgLy8gZGV0ZXJtaW5lIGFyYyBkaXJlY3Rpb24gKGN3L2NjdyBjb3JyZWN0aW9uKVxuICAgICAgaWYgKHM8ZSkge1xuICAgICAgICAvLyBpZiBzPG08ZSwgYXJjKHMsIGUpXG4gICAgICAgIC8vIGlmIG08czxlLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgLy8gaWYgczxlPG0sIGFyYyhlLCBzICsgdGF1KVxuICAgICAgICBpZiAocz5tIHx8IG0+ZSkgeyBzICs9IHRhdTsgfVxuICAgICAgICBpZiAocz5lKSB7IF89ZTsgZT1zOyBzPV87IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGU8bTxzLCBhcmMoZSwgcylcbiAgICAgICAgLy8gaWYgbTxlPHMsIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICAvLyBpZiBlPHM8bSwgYXJjKHMsIGUgKyB0YXUpXG4gICAgICAgIGlmIChlPG0gJiYgbTxzKSB7IF89ZTsgZT1zOyBzPV87IH0gZWxzZSB7IGUgKz0gdGF1OyB9XG4gICAgICB9XG4gICAgICAvLyBhc3NpZ24gYW5kIGRvbmUuXG4gICAgICBhcmMucyA9IHM7XG4gICAgICBhcmMuZSA9IGU7XG4gICAgICBhcmMuciA9IHI7XG4gICAgICByZXR1cm4gYXJjO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xufSgpKTtcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwidmFyIGNsb25lID0gKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsb25lcyAoY29waWVzKSBhbiBPYmplY3QgdXNpbmcgZGVlcCBjb3B5aW5nLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gc3VwcG9ydHMgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBkZWZhdWx0LCBidXQgaWYgeW91IGFyZSBjZXJ0YWluXG4gKiB0aGVyZSBhcmUgbm8gY2lyY3VsYXIgcmVmZXJlbmNlcyBpbiB5b3VyIG9iamVjdCwgeW91IGNhbiBzYXZlIHNvbWUgQ1BVIHRpbWVcbiAqIGJ5IGNhbGxpbmcgY2xvbmUob2JqLCBmYWxzZSkuXG4gKlxuICogQ2F1dGlvbjogaWYgYGNpcmN1bGFyYCBpcyBmYWxzZSBhbmQgYHBhcmVudGAgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlcyxcbiAqIHlvdXIgcHJvZ3JhbSBtYXkgZW50ZXIgYW4gaW5maW5pdGUgbG9vcCBhbmQgY3Jhc2guXG4gKlxuICogQHBhcmFtIGBwYXJlbnRgIC0gdGhlIG9iamVjdCB0byBiZSBjbG9uZWRcbiAqIEBwYXJhbSBgY2lyY3VsYXJgIC0gc2V0IHRvIHRydWUgaWYgdGhlIG9iamVjdCB0byBiZSBjbG9uZWQgbWF5IGNvbnRhaW5cbiAqICAgIGNpcmN1bGFyIHJlZmVyZW5jZXMuIChvcHRpb25hbCAtIHRydWUgYnkgZGVmYXVsdClcbiAqIEBwYXJhbSBgZGVwdGhgIC0gc2V0IHRvIGEgbnVtYmVyIGlmIHRoZSBvYmplY3QgaXMgb25seSB0byBiZSBjbG9uZWQgdG9cbiAqICAgIGEgcGFydGljdWxhciBkZXB0aC4gKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gSW5maW5pdHkpXG4gKiBAcGFyYW0gYHByb3RvdHlwZWAgLSBzZXRzIHRoZSBwcm90b3R5cGUgdG8gYmUgdXNlZCB3aGVuIGNsb25pbmcgYW4gb2JqZWN0LlxuICogICAgKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gcGFyZW50IHByb3RvdHlwZSkuXG4qL1xuZnVuY3Rpb24gY2xvbmUocGFyZW50LCBjaXJjdWxhciwgZGVwdGgsIHByb3RvdHlwZSkge1xuICB2YXIgZmlsdGVyO1xuICBpZiAodHlwZW9mIGNpcmN1bGFyID09PSAnb2JqZWN0Jykge1xuICAgIGRlcHRoID0gY2lyY3VsYXIuZGVwdGg7XG4gICAgcHJvdG90eXBlID0gY2lyY3VsYXIucHJvdG90eXBlO1xuICAgIGZpbHRlciA9IGNpcmN1bGFyLmZpbHRlcjtcbiAgICBjaXJjdWxhciA9IGNpcmN1bGFyLmNpcmN1bGFyXG4gIH1cbiAgLy8gbWFpbnRhaW4gdHdvIGFycmF5cyBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcywgd2hlcmUgY29ycmVzcG9uZGluZyBwYXJlbnRzXG4gIC8vIGFuZCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGluZGV4XG4gIHZhciBhbGxQYXJlbnRzID0gW107XG4gIHZhciBhbGxDaGlsZHJlbiA9IFtdO1xuXG4gIHZhciB1c2VCdWZmZXIgPSB0eXBlb2YgQnVmZmVyICE9ICd1bmRlZmluZWQnO1xuXG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT0gJ3VuZGVmaW5lZCcpXG4gICAgY2lyY3VsYXIgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZGVwdGggPT0gJ3VuZGVmaW5lZCcpXG4gICAgZGVwdGggPSBJbmZpbml0eTtcblxuICAvLyByZWN1cnNlIHRoaXMgZnVuY3Rpb24gc28gd2UgZG9uJ3QgcmVzZXQgYWxsUGFyZW50cyBhbmQgYWxsQ2hpbGRyZW5cbiAgZnVuY3Rpb24gX2Nsb25lKHBhcmVudCwgZGVwdGgpIHtcbiAgICAvLyBjbG9uaW5nIG51bGwgYWx3YXlzIHJldHVybnMgbnVsbFxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcblxuICAgIGlmIChkZXB0aCA9PSAwKVxuICAgICAgcmV0dXJuIHBhcmVudDtcblxuICAgIHZhciBjaGlsZDtcbiAgICB2YXIgcHJvdG87XG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGNsb25lLl9faXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IFtdO1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc1JlZ0V4cChwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBSZWdFeHAocGFyZW50LnNvdXJjZSwgX19nZXRSZWdFeHBGbGFncyhwYXJlbnQpKTtcbiAgICAgIGlmIChwYXJlbnQubGFzdEluZGV4KSBjaGlsZC5sYXN0SW5kZXggPSBwYXJlbnQubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc0RhdGUocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgRGF0ZShwYXJlbnQuZ2V0VGltZSgpKTtcbiAgICB9IGVsc2UgaWYgKHVzZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgQnVmZmVyKHBhcmVudC5sZW5ndGgpO1xuICAgICAgcGFyZW50LmNvcHkoY2hpbGQpO1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHByb3RvdHlwZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpO1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgICBwcm90byA9IHByb3RvdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2lyY3VsYXIpIHtcbiAgICAgIHZhciBpbmRleCA9IGFsbFBhcmVudHMuaW5kZXhPZihwYXJlbnQpO1xuXG4gICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGFsbFBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgYWxsQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSBpbiBwYXJlbnQpIHtcbiAgICAgIHZhciBhdHRycztcbiAgICAgIGlmIChwcm90bykge1xuICAgICAgICBhdHRycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cnMgJiYgYXR0cnMuc2V0ID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjaGlsZFtpXSA9IF9jbG9uZShwYXJlbnRbaV0sIGRlcHRoIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcmV0dXJuIF9jbG9uZShwYXJlbnQsIGRlcHRoKTtcbn1cblxuLyoqXG4gKiBTaW1wbGUgZmxhdCBjbG9uZSB1c2luZyBwcm90b3R5cGUsIGFjY2VwdHMgb25seSBvYmplY3RzLCB1c2VmdWxsIGZvciBwcm9wZXJ0eVxuICogb3ZlcnJpZGUgb24gRkxBVCBjb25maWd1cmF0aW9uIG9iamVjdCAobm8gbmVzdGVkIHByb3BzKS5cbiAqXG4gKiBVU0UgV0lUSCBDQVVUSU9OISBUaGlzIG1heSBub3QgYmVoYXZlIGFzIHlvdSB3aXNoIGlmIHlvdSBkbyBub3Qga25vdyBob3cgdGhpc1xuICogd29ya3MuXG4gKi9cbmNsb25lLmNsb25lUHJvdG90eXBlID0gZnVuY3Rpb24gY2xvbmVQcm90b3R5cGUocGFyZW50KSB7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIGMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgYy5wcm90b3R5cGUgPSBwYXJlbnQ7XG4gIHJldHVybiBuZXcgYygpO1xufTtcblxuLy8gcHJpdmF0ZSB1dGlsaXR5IGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBfX29ialRvU3RyKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn07XG5jbG9uZS5fX29ialRvU3RyID0gX19vYmpUb1N0cjtcblxuZnVuY3Rpb24gX19pc0RhdGUobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5jbG9uZS5fX2lzRGF0ZSA9IF9faXNEYXRlO1xuXG5mdW5jdGlvbiBfX2lzQXJyYXkobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuY2xvbmUuX19pc0FycmF5ID0gX19pc0FycmF5O1xuXG5mdW5jdGlvbiBfX2lzUmVnRXhwKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5jbG9uZS5fX2lzUmVnRXhwID0gX19pc1JlZ0V4cDtcblxuZnVuY3Rpb24gX19nZXRSZWdFeHBGbGFncyhyZSkge1xuICB2YXIgZmxhZ3MgPSAnJztcbiAgaWYgKHJlLmdsb2JhbCkgZmxhZ3MgKz0gJ2cnO1xuICBpZiAocmUuaWdub3JlQ2FzZSkgZmxhZ3MgKz0gJ2knO1xuICBpZiAocmUubXVsdGlsaW5lKSBmbGFncyArPSAnbSc7XG4gIHJldHVybiBmbGFncztcbn07XG5jbG9uZS5fX2dldFJlZ0V4cEZsYWdzID0gX19nZXRSZWdFeHBGbGFncztcblxucmV0dXJuIGNsb25lO1xufSkoKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07IiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgxMDApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIGdldFJnYmE6IGdldFJnYmEsXG4gICBnZXRIc2xhOiBnZXRIc2xhLFxuICAgZ2V0UmdiOiBnZXRSZ2IsXG4gICBnZXRIc2w6IGdldEhzbCxcbiAgIGdldEh3YjogZ2V0SHdiLFxuICAgZ2V0QWxwaGE6IGdldEFscGhhLFxuXG4gICBoZXhTdHJpbmc6IGhleFN0cmluZyxcbiAgIHJnYlN0cmluZzogcmdiU3RyaW5nLFxuICAgcmdiYVN0cmluZzogcmdiYVN0cmluZyxcbiAgIHBlcmNlbnRTdHJpbmc6IHBlcmNlbnRTdHJpbmcsXG4gICBwZXJjZW50YVN0cmluZzogcGVyY2VudGFTdHJpbmcsXG4gICBoc2xTdHJpbmc6IGhzbFN0cmluZyxcbiAgIGhzbGFTdHJpbmc6IGhzbGFTdHJpbmcsXG4gICBod2JTdHJpbmc6IGh3YlN0cmluZyxcbiAgIGtleXdvcmQ6IGtleXdvcmRcbn1cblxuZnVuY3Rpb24gZ2V0UmdiYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgYWJiciA9ICAvXiMoW2EtZkEtRjAtOV17M30pJC8sXG4gICAgICAgaGV4ID0gIC9eIyhbYS1mQS1GMC05XXs2fSkkLyxcbiAgICAgICByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAga2V5d29yZCA9IC8oXFxEKykvO1xuXG4gICB2YXIgcmdiID0gWzAsIDAsIDBdLFxuICAgICAgIGEgPSAxLFxuICAgICAgIG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdKTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcbiAgICAgIGlmIChtYXRjaFsxXSA9PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG4gICAgICByZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcbiAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICB9XG5cbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZ2JbaV0gPSBzY2FsZShyZ2JbaV0sIDAsIDI1NSk7XG4gICB9XG4gICBpZiAoIWEgJiYgYSAhPSAwKSB7XG4gICAgICBhID0gMTtcbiAgIH1cbiAgIGVsc2Uge1xuICAgICAgYSA9IHNjYWxlKGEsIDAsIDEpO1xuICAgfVxuICAgcmdiWzNdID0gYTtcbiAgIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGdldEhzbGEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHMgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBsID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHMsIGwsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRId2Ioc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcbiAgIGlmIChtYXRjaCkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgdyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGIgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgdywgYiwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldFJnYihzdHJpbmcpIHtcbiAgIHZhciByZ2JhID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgcmV0dXJuIHJnYmEgJiYgcmdiYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsKHN0cmluZykge1xuICB2YXIgaHNsYSA9IGdldEhzbGEoc3RyaW5nKTtcbiAgcmV0dXJuIGhzbGEgJiYgaHNsYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxwaGEoc3RyaW5nKSB7XG4gICB2YXIgdmFscyA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIGlmICh2YWxzKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRIc2xhKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEh3YihzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbn1cblxuLy8gZ2VuZXJhdG9yc1xuZnVuY3Rpb24gaGV4U3RyaW5nKHJnYikge1xuICAgcmV0dXJuIFwiI1wiICsgaGV4RG91YmxlKHJnYlswXSkgKyBoZXhEb3VibGUocmdiWzFdKVxuICAgICAgICAgICAgICArIGhleERvdWJsZShyZ2JbMl0pO1xufVxuXG5mdW5jdGlvbiByZ2JTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2IoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl0gKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKHJnYmFbM10gIT09IHVuZGVmaW5lZCA/IHJnYmFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl1cbiAgICAgICAgICAgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50U3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcblxuICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUsIFwiICsgKGFscGhhIHx8IHJnYmFbM10gfHwgMSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gaHNsU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChoc2xhWzNdICYmIGhzbGFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGhzbGFbM10gIT09IHVuZGVmaW5lZCA/IGhzbGFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlLCBcIlxuICAgICAgICAgICArIGFscGhhICsgXCIpXCI7XG59XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5mdW5jdGlvbiBod2JTdHJpbmcoaHdiLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGh3YlszXSAhPT0gdW5kZWZpbmVkID8gaHdiWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJod2IoXCIgKyBod2JbMF0gKyBcIiwgXCIgKyBod2JbMV0gKyBcIiUsIFwiICsgaHdiWzJdICsgXCIlXCJcbiAgICAgICAgICAgKyAoYWxwaGEgIT09IHVuZGVmaW5lZCAmJiBhbHBoYSAhPT0gMSA/IFwiLCBcIiArIGFscGhhIDogXCJcIikgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24ga2V5d29yZChyZ2IpIHtcbiAgcmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBzY2FsZShudW0sIG1pbiwgbWF4KSB7XG4gICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG4gIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gXCIwXCIgKyBzdHIgOiBzdHI7XG59XG5cblxuLy9jcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuICAgcmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY2xvbmUgPSByZXF1aXJlKDk5KTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgxMDUpO1xudmFyIHN0cmluZyA9IHJlcXVpcmUoMTAxKTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24gKG9iaikge1xuXHRpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRyZXR1cm4gb2JqO1xuXHR9XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaik7XG5cdH1cblxuXHR0aGlzLnZhbHVlcyA9IHtcblx0XHRyZ2I6IFswLCAwLCAwXSxcblx0XHRoc2w6IFswLCAwLCAwXSxcblx0XHRoc3Y6IFswLCAwLCAwXSxcblx0XHRod2I6IFswLCAwLCAwXSxcblx0XHRjbXlrOiBbMCwgMCwgMCwgMF0sXG5cdFx0YWxwaGE6IDFcblx0fTtcblxuXHQvLyBwYXJzZSBDb2xvcigpIGFyZ3VtZW50XG5cdHZhciB2YWxzO1xuXHRpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YWxzID0gc3RyaW5nLmdldFJnYmEob2JqKTtcblx0XHRpZiAodmFscykge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscyA9IHN0cmluZy5nZXRIc2xhKG9iaikpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHdiKG9iaikpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB2YWxzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmcgXCInICsgb2JqICsgJ1wiJyk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0dmFscyA9IG9iajtcblx0XHRpZiAodmFscy5yICE9PSB1bmRlZmluZWQgfHwgdmFscy5yZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5sICE9PSB1bmRlZmluZWQgfHwgdmFscy5saWdodG5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy52ICE9PSB1bmRlZmluZWQgfHwgdmFscy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHN2JywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLncgIT09IHVuZGVmaW5lZCB8fCB2YWxzLndoaXRlbmVzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLmMgIT09IHVuZGVmaW5lZCB8fCB2YWxzLmN5YW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2NteWsnLCB2YWxzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3QgJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblx0fVxufTtcblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHRyZ2I6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgncmdiJywgYXJndW1lbnRzKTtcblx0fSxcblx0aHNsOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2hzbCcsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzdjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc3YnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRod2I6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHdiJywgYXJndW1lbnRzKTtcblx0fSxcblx0Y215azogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdjbXlrJywgYXJndW1lbnRzKTtcblx0fSxcblxuXHRyZ2JBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5yZ2I7XG5cdH0sXG5cdGhzbEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzbDtcblx0fSxcblx0aHN2QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHN2O1xuXHR9LFxuXHRod2JBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzLmh3Yi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2I7XG5cdH0sXG5cdGNteWtBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5jbXlrO1xuXHR9LFxuXHRyZ2JhQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHJldHVybiByZ2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHR9LFxuXHRoc2xhQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaHNsID0gdGhpcy52YWx1ZXMuaHNsO1xuXHRcdHJldHVybiBoc2wuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHR9LFxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzLmFscGhhO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB2YWwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDAsIHZhbCk7XG5cdH0sXG5cdGdyZWVuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMSwgdmFsKTtcblx0fSxcblx0Ymx1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDIsIHZhbCk7XG5cdH0sXG5cdGh1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHZhbCAlPSAzNjA7XG5cdFx0XHR2YWwgPSB2YWwgPCAwID8gMzYwICsgdmFsIDogdmFsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAwLCB2YWwpO1xuXHR9LFxuXHRzYXR1cmF0aW9uOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMSwgdmFsKTtcblx0fSxcblx0bGlnaHRuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMiwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbnY6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAxLCB2YWwpO1xuXHR9LFxuXHR3aGl0ZW5lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdod2InLCAxLCB2YWwpO1xuXHR9LFxuXHRibGFja25lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdod2InLCAyLCB2YWwpO1xuXHR9LFxuXHR2YWx1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzdicsIDIsIHZhbCk7XG5cdH0sXG5cdGN5YW46IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMCwgdmFsKTtcblx0fSxcblx0bWFnZW50YTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAxLCB2YWwpO1xuXHR9LFxuXHR5ZWxsb3c6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMiwgdmFsKTtcblx0fSxcblx0YmxhY2s6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMywgdmFsKTtcblx0fSxcblxuXHRoZXhTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhleFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IpO1xuXHR9LFxuXHRyZ2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYlN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0cmdiYVN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucmdiYVN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucGVyY2VudFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHNsU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbGFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhzbGFTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGh3YlN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHdiU3RyaW5nKHRoaXMudmFsdWVzLmh3YiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRrZXl3b3JkOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5rZXl3b3JkKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAodGhpcy52YWx1ZXMucmdiWzBdIDw8IDE2KSB8ICh0aGlzLnZhbHVlcy5yZ2JbMV0gPDwgOCkgfCB0aGlzLnZhbHVlcy5yZ2JbMl07XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0ZGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRsaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5kYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSAyNTUgLSB0aGlzLnZhbHVlcy5yZ2JbaV07XG5cdFx0fVxuXHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCByZ2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsyXSArPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsyXSAtPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzFdICs9IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSAtPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmh3YlsxXSArPSB0aGlzLnZhbHVlcy5od2JbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdGhpcy52YWx1ZXMuaHdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMl0gKz0gdGhpcy52YWx1ZXMuaHdiWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z3JleXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgW3ZhbCwgdmFsLCB2YWxdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRjbGVhcmVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB0aGlzLnZhbHVlcy5hbHBoYSAtICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgKyAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHVlID0gdGhpcy52YWx1ZXMuaHNsWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdHRoaXMudmFsdWVzLmhzbFswXSA9IGh1ZTtcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHQvKipcblx0ICogUG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHQgKi9cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0dmFyIGNvbG9yMSA9IHRoaXM7XG5cdFx0dmFyIGNvbG9yMiA9IG1peGluQ29sb3I7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpXG5cdFx0XHQpXG5cdFx0XHQuYWxwaGEoY29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZ2IoKTtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjb2wgPSBuZXcgQ29sb3IoKTtcblx0XHRjb2wudmFsdWVzID0gY2xvbmUodGhpcy52YWx1ZXMpO1xuXHRcdHJldHVybiBjb2w7XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbiAoc3BhY2UpIHtcblx0dmFyIHZhbHMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsc1tzcGFjZS5jaGFyQXQoaSldID0gdGhpcy52YWx1ZXNbc3BhY2VdW2ldO1xuXHR9XG5cblx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0dmFscy5hID0gdGhpcy52YWx1ZXMuYWxwaGE7XG5cdH1cblxuXHQvLyB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NSwgYTogMC40fVxuXHRyZXR1cm4gdmFscztcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAoc3BhY2UsIHZhbHMpIHtcblx0dmFyIHNwYWNlcyA9IHtcblx0XHRyZ2I6IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSxcblx0XHRoc2w6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJ10sXG5cdFx0aHN2OiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ3ZhbHVlJ10sXG5cdFx0aHdiOiBbJ2h1ZScsICd3aGl0ZW5lc3MnLCAnYmxhY2tuZXNzJ10sXG5cdFx0Y215azogWydjeWFuJywgJ21hZ2VudGEnLCAneWVsbG93JywgJ2JsYWNrJ11cblx0fTtcblxuXHR2YXIgbWF4ZXMgPSB7XG5cdFx0cmdiOiBbMjU1LCAyNTUsIDI1NV0sXG5cdFx0aHNsOiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0aHN2OiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0aHdiOiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0Y215azogWzEwMCwgMTAwLCAxMDAsIDEwMF1cblx0fTtcblxuXHR2YXIgaTtcblx0dmFyIGFscGhhID0gMTtcblx0aWYgKHNwYWNlID09PSAnYWxwaGEnKSB7XG5cdFx0YWxwaGEgPSB2YWxzO1xuXHR9IGVsc2UgaWYgKHZhbHMubGVuZ3RoKSB7XG5cdFx0Ly8gWzEwLCAxMCwgMTBdXG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdID0gdmFscy5zbGljZSgwLCBzcGFjZS5sZW5ndGgpO1xuXHRcdGFscGhhID0gdmFsc1tzcGFjZS5sZW5ndGhdO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2UuY2hhckF0KDApXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8ge3I6IDEwLCBnOiAxMCwgYjogMTB9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW3NwYWNlLmNoYXJBdChpKV07XG5cdFx0fVxuXG5cdFx0YWxwaGEgPSB2YWxzLmE7XG5cdH0gZWxzZSBpZiAodmFsc1tzcGFjZXNbc3BhY2VdWzBdXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8ge3JlZDogMTAsIGdyZWVuOiAxMCwgYmx1ZTogMTB9XG5cdFx0dmFyIGNoYW5zID0gc3BhY2VzW3NwYWNlXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tjaGFuc1tpXV07XG5cdFx0fVxuXG5cdFx0YWxwaGEgPSB2YWxzLmFscGhhO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoYWxwaGEgPT09IHVuZGVmaW5lZCA/IHRoaXMudmFsdWVzLmFscGhhIDogYWxwaGEpKSk7XG5cblx0aWYgKHNwYWNlID09PSAnYWxwaGEnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGNhcHBlZDtcblxuXHQvLyBjYXAgdmFsdWVzIG9mIHRoZSBzcGFjZSBwcmlvciBjb252ZXJ0aW5nIGFsbCB2YWx1ZXNcblx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc3BhY2VdW2ldLCB0aGlzLnZhbHVlc1tzcGFjZV1baV0pKTtcblx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG5cdH1cblxuXHQvLyBjb252ZXJ0IHRvIGFsbCB0aGUgb3RoZXIgY29sb3Igc3BhY2VzXG5cdGZvciAodmFyIHNuYW1lIGluIHNwYWNlcykge1xuXHRcdGlmIChzbmFtZSAhPT0gc3BhY2UpIHtcblx0XHRcdHRoaXMudmFsdWVzW3NuYW1lXSA9IGNvbnZlcnRbc3BhY2VdW3NuYW1lXSh0aGlzLnZhbHVlc1tzcGFjZV0pO1xuXHRcdH1cblxuXHRcdC8vIGNhcCB2YWx1ZXNcblx0XHRmb3IgKGkgPSAwOyBpIDwgc25hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NuYW1lXVtpXSwgdGhpcy52YWx1ZXNbc25hbWVdW2ldKSk7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0U3BhY2UgPSBmdW5jdGlvbiAoc3BhY2UsIGFyZ3MpIHtcblx0dmFyIHZhbHMgPSBhcmdzWzBdO1xuXG5cdGlmICh2YWxzID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBjb2xvci5yZ2IoKVxuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlcyhzcGFjZSk7XG5cdH1cblxuXHQvLyBjb2xvci5yZ2IoMTAsIDEwLCAxMClcblx0aWYgKHR5cGVvZiB2YWxzID09PSAnbnVtYmVyJykge1xuXHRcdHZhbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcblx0fVxuXG5cdHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB2YWxzKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIChzcGFjZSwgaW5kZXgsIHZhbCkge1xuXHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBjb2xvci5yZWQoKVxuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSkge1xuXHRcdC8vIGNvbG9yLnJlZChjb2xvci5yZWQoKSlcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIGNvbG9yLnJlZCgxMDApXG5cdHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0gPSB2YWw7XG5cdHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB0aGlzLnZhbHVlc1tzcGFjZV0pO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKDEwNCk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogM30sXG5cdGhzbDoge2NoYW5uZWxzOiAzfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDN9LFxuXHRod2I6IHtjaGFubmVsczogM30sXG5cdGNteWs6IHtjaGFubmVsczogNH0sXG5cdHh5ejoge2NoYW5uZWxzOiAzfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDN9LFxuXHRsY2g6IHtjaGFubmVsczogM30sXG5cdGhleDoge2NoYW5uZWxzOiAxfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDF9LFxuXHRoY2c6IHtjaGFubmVsczogM30sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDN9XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBwcm9wZXJ0eVxuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgdjtcblxuXHRpZiAobWF4ID09PSAwKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IChkZWx0YSAvIG1heCAqIDEwMDApIC8gMTA7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn0vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChtYXRjaFswXSwgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTVdLFxuXHRhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1XSxcblx0YXF1YTogWzAsIDI1NSwgMjU1XSxcblx0YXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTJdLFxuXHRhenVyZTogWzI0MCwgMjU1LCAyNTVdLFxuXHRiZWlnZTogWzI0NSwgMjQ1LCAyMjBdLFxuXHRiaXNxdWU6IFsyNTUsIDIyOCwgMTk2XSxcblx0YmxhY2s6IFswLCAwLCAwXSxcblx0YmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1XSxcblx0Ymx1ZTogWzAsIDAsIDI1NV0sXG5cdGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjZdLFxuXHRicm93bjogWzE2NSwgNDIsIDQyXSxcblx0YnVybHl3b29kOiBbMjIyLCAxODQsIDEzNV0sXG5cdGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MF0sXG5cdGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMF0sXG5cdGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMF0sXG5cdGNvcmFsOiBbMjU1LCAxMjcsIDgwXSxcblx0Y29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3XSxcblx0Y29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwXSxcblx0Y3JpbXNvbjogWzIyMCwgMjAsIDYwXSxcblx0Y3lhbjogWzAsIDI1NSwgMjU1XSxcblx0ZGFya2JsdWU6IFswLCAwLCAxMzldLFxuXHRkYXJrY3lhbjogWzAsIDEzOSwgMTM5XSxcblx0ZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMV0sXG5cdGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtncmVlbjogWzAsIDEwMCwgMF0sXG5cdGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDddLFxuXHRkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5XSxcblx0ZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0N10sXG5cdGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMF0sXG5cdGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDRdLFxuXHRkYXJrcmVkOiBbMTM5LCAwLCAwXSxcblx0ZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjJdLFxuXHRkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzXSxcblx0ZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5XSxcblx0ZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOV0sXG5cdGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMV0sXG5cdGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3XSxcblx0ZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NV0sXG5cdGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZGltZ3JleTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1XSxcblx0ZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzRdLFxuXHRmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDBdLFxuXHRmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0XSxcblx0ZnVjaHNpYTogWzI1NSwgMCwgMjU1XSxcblx0Z2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMF0sXG5cdGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1XSxcblx0Z29sZDogWzI1NSwgMjE1LCAwXSxcblx0Z29sZGVucm9kOiBbMjE4LCAxNjUsIDMyXSxcblx0Z3JheTogWzEyOCwgMTI4LCAxMjhdLFxuXHRncmVlbjogWzAsIDEyOCwgMF0sXG5cdGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3XSxcblx0Z3JleTogWzEyOCwgMTI4LCAxMjhdLFxuXHRob25leWRldzogWzI0MCwgMjU1LCAyNDBdLFxuXHRob3RwaW5rOiBbMjU1LCAxMDUsIDE4MF0sXG5cdGluZGlhbnJlZDogWzIwNSwgOTIsIDkyXSxcblx0aW5kaWdvOiBbNzUsIDAsIDEzMF0sXG5cdGl2b3J5OiBbMjU1LCAyNTUsIDI0MF0sXG5cdGtoYWtpOiBbMjQwLCAyMzAsIDE0MF0sXG5cdGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MF0sXG5cdGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1XSxcblx0bGF3bmdyZWVuOiBbMTI0LCAyNTIsIDBdLFxuXHRsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1XSxcblx0bGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMF0sXG5cdGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4XSxcblx0bGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NV0sXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMF0sXG5cdGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NF0sXG5cdGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzXSxcblx0bGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyXSxcblx0bGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MF0sXG5cdGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTBdLFxuXHRsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjJdLFxuXHRsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjRdLFxuXHRsaW1lOiBbMCwgMjU1LCAwXSxcblx0bGltZWdyZWVuOiBbNTAsIDIwNSwgNTBdLFxuXHRsaW5lbjogWzI1MCwgMjQwLCAyMzBdLFxuXHRtYWdlbnRhOiBbMjU1LCAwLCAyNTVdLFxuXHRtYXJvb246IFsxMjgsIDAsIDBdLFxuXHRtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MF0sXG5cdG1lZGl1bWJsdWU6IFswLCAwLCAyMDVdLFxuXHRtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTFdLFxuXHRtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5XSxcblx0bWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTNdLFxuXHRtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4XSxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NF0sXG5cdG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNF0sXG5cdG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzM10sXG5cdG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyXSxcblx0bWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MF0sXG5cdG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjVdLFxuXHRtb2NjYXNpbjogWzI1NSwgMjI4LCAxODFdLFxuXHRuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzNdLFxuXHRuYXZ5OiBbMCwgMCwgMTI4XSxcblx0b2xkbGFjZTogWzI1MywgMjQ1LCAyMzBdLFxuXHRvbGl2ZTogWzEyOCwgMTI4LCAwXSxcblx0b2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1XSxcblx0b3JhbmdlOiBbMjU1LCAxNjUsIDBdLFxuXHRvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwXSxcblx0b3JjaGlkOiBbMjE4LCAxMTIsIDIxNF0sXG5cdHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwXSxcblx0cGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1Ml0sXG5cdHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4XSxcblx0cGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDddLFxuXHRwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxM10sXG5cdHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODVdLFxuXHRwZXJ1OiBbMjA1LCAxMzMsIDYzXSxcblx0cGluazogWzI1NSwgMTkyLCAyMDNdLFxuXHRwbHVtOiBbMjIxLCAxNjAsIDIyMV0sXG5cdHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwXSxcblx0cHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuXHRyZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzXSxcblx0cmVkOiBbMjU1LCAwLCAwXSxcblx0cm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0M10sXG5cdHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNV0sXG5cdHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTldLFxuXHRzYWxtb246IFsyNTAsIDEyOCwgMTE0XSxcblx0c2FuZHlicm93bjogWzI0NCwgMTY0LCA5Nl0sXG5cdHNlYWdyZWVuOiBbNDYsIDEzOSwgODddLFxuXHRzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzhdLFxuXHRzaWVubmE6IFsxNjAsIDgyLCA0NV0sXG5cdHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuXHRza3libHVlOiBbMTM1LCAyMDYsIDIzNV0sXG5cdHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNV0sXG5cdHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c25vdzogWzI1NSwgMjUwLCAyNTBdLFxuXHRzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3XSxcblx0c3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwXSxcblx0dGFuOiBbMjEwLCAxODAsIDE0MF0sXG5cdHRlYWw6IFswLCAxMjgsIDEyOF0sXG5cdHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2XSxcblx0dG9tYXRvOiBbMjU1LCA5OSwgNzFdLFxuXHR0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDhdLFxuXHR2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4XSxcblx0d2hlYXQ6IFsyNDUsIDIyMiwgMTc5XSxcblx0d2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcblx0d2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDVdLFxuXHR5ZWxsb3c6IFsyNTUsIDI1NSwgMF0sXG5cdHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwXVxufTtcblxuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgxMDMpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgxMDYpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKDEwMyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIi8vIHJhbmRvbUNvbG9yIGJ5IERhdmlkIE1lcmZpZWxkIHVuZGVyIHRoZSBDQzAgbGljZW5zZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkbWVyZmllbGQvcmFuZG9tQ29sb3IvXG5cbjsoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gIC8vIFN1cHBvcnQgQU1EXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuXG4gIC8vIFN1cHBvcnQgQ29tbW9uSlNcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG5cbiAgICAvLyBTdXBwb3J0IE5vZGVKUyAmIENvbXBvbmVudCwgd2hpY2ggYWxsb3cgbW9kdWxlLmV4cG9ydHMgdG8gYmUgYSBmdW5jdGlvblxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgQ29tbW9uSlMgMS4xLjEgc3BlY1xuICAgIGV4cG9ydHMucmFuZG9tQ29sb3IgPSByYW5kb21Db2xvcjtcblxuICAvLyBTdXBwb3J0IHZhbmlsbGEgc2NyaXB0IGxvYWRpbmdcbiAgfSBlbHNlIHtcbiAgICByb290LnJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgLy8gU2VlZCB0byBnZXQgcmVwZWF0YWJsZSBjb2xvcnNcbiAgdmFyIHNlZWQgPSBudWxsO1xuXG4gIC8vIFNoYXJlZCBjb2xvciBkaWN0aW9uYXJ5XG4gIHZhciBjb2xvckRpY3Rpb25hcnkgPSB7fTtcblxuICAvLyBQb3B1bGF0ZSB0aGUgY29sb3IgZGljdGlvbmFyeVxuICBsb2FkQ29sb3JCb3VuZHMoKTtcblxuICB2YXIgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNlZWQgYW5kIGVuc3VyZSBpdCdzIGFuXG4gICAgLy8gaW50ZWdlci4gT3RoZXJ3aXNlLCByZXNldCB0aGUgc2VlZCB2YWx1ZS5cbiAgICBpZiAob3B0aW9ucy5zZWVkICYmIG9wdGlvbnMuc2VlZCA9PT0gcGFyc2VJbnQob3B0aW9ucy5zZWVkLCAxMCkpIHtcbiAgICAgIHNlZWQgPSBvcHRpb25zLnNlZWQ7XG5cbiAgICAvLyBBIHN0cmluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuc2VlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlZWQgPSBzdHJpbmdUb0ludGVnZXIob3B0aW9ucy5zZWVkKTtcblxuICAgIC8vIFNvbWV0aGluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZCBidXQgaXQgd2Fzbid0IGFuIGludGVnZXIgb3Igc3RyaW5nXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlZWQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNlZWQgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzZWVkIHZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciBvciBzdHJpbmcnKTtcblxuICAgIC8vIE5vIHNlZWQsIHJlc2V0IHRoZSB2YWx1ZSBvdXRzaWRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgSCxTLEI7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGdlbmVyYXRlIG11bHRpcGxlIGNvbG9yc1xuICAgIGlmIChvcHRpb25zLmNvdW50ICE9PSBudWxsICYmIG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICB2YXIgdG90YWxDb2xvcnMgPSBvcHRpb25zLmNvdW50LFxuICAgICAgICAgIGNvbG9ycyA9IFtdO1xuXG4gICAgICBvcHRpb25zLmNvdW50ID0gbnVsbDtcblxuICAgICAgd2hpbGUgKHRvdGFsQ29sb3JzID4gY29sb3JzLmxlbmd0aCkge1xuXG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdlbmVyYXRpbmcgbXVsdGlwbGUgY29sb3JzLFxuICAgICAgICAvLyBpbmNyZW1lbWVudCB0aGUgc2VlZC4gT3RoZXJ3aXNlIHdlJ2QganVzdFxuICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgc2FtZSBjb2xvciBlYWNoIHRpbWUuLi5cbiAgICAgICAgaWYgKHNlZWQgJiYgb3B0aW9ucy5zZWVkKSBvcHRpb25zLnNlZWQgKz0gMTtcblxuICAgICAgICBjb2xvcnMucHVzaChyYW5kb21Db2xvcihvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuY291bnQgPSB0b3RhbENvbG9ycztcblxuICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBwaWNrIGEgaHVlIChIKVxuICAgIEggPSBwaWNrSHVlKG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgSCB0byBkZXRlcm1pbmUgc2F0dXJhdGlvbiAoUylcbiAgICBTID0gcGlja1NhdHVyYXRpb24oSCwgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHVzZSBTIGFuZCBIIHRvIGRldGVybWluZSBicmlnaHRuZXNzIChCKS5cbiAgICBCID0gcGlja0JyaWdodG5lc3MoSCwgUywgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHdlIHJldHVybiB0aGUgSFNCIGNvbG9yIGluIHRoZSBkZXNpcmVkIGZvcm1hdFxuICAgIHJldHVybiBzZXRGb3JtYXQoW0gsUyxCXSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGlja0h1ZSAob3B0aW9ucykge1xuXG4gICAgdmFyIGh1ZVJhbmdlID0gZ2V0SHVlUmFuZ2Uob3B0aW9ucy5odWUpLFxuICAgICAgICBodWUgPSByYW5kb21XaXRoaW4oaHVlUmFuZ2UpO1xuXG4gICAgLy8gSW5zdGVhZCBvZiBzdG9yaW5nIHJlZCBhcyB0d28gc2VwZXJhdGUgcmFuZ2VzLFxuICAgIC8vIHdlIGdyb3VwIHRoZW0sIHVzaW5nIG5lZ2F0aXZlIG51bWJlcnNcbiAgICBpZiAoaHVlIDwgMCkge2h1ZSA9IDM2MCArIGh1ZTt9XG5cbiAgICByZXR1cm4gaHVlO1xuXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrU2F0dXJhdGlvbiAoaHVlLCBvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9ucy5sdW1pbm9zaXR5ID09PSAncmFuZG9tJykge1xuICAgICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbMCwxMDBdKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5odWUgPT09ICdtb25vY2hyb21lJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIHNhdHVyYXRpb25SYW5nZSA9IGdldFNhdHVyYXRpb25SYW5nZShodWUpO1xuXG4gICAgdmFyIHNNaW4gPSBzYXR1cmF0aW9uUmFuZ2VbMF0sXG4gICAgICAgIHNNYXggPSBzYXR1cmF0aW9uUmFuZ2VbMV07XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdicmlnaHQnOlxuICAgICAgICBzTWluID0gNTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgc01pbiA9IHNNYXggLSAxMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgc01heCA9IDU1O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiByYW5kb21XaXRoaW4oW3NNaW4sIHNNYXhdKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja0JyaWdodG5lc3MgKEgsIFMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBiTWluID0gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUyksXG4gICAgICAgIGJNYXggPSAxMDA7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgYk1heCA9IGJNaW4gKyAyMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgYk1pbiA9IChiTWF4ICsgYk1pbikvMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgIGJNaW4gPSAwO1xuICAgICAgICBiTWF4ID0gMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtiTWluLCBiTWF4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtYXQgKGhzdiwgb3B0aW9ucykge1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmZvcm1hdCkge1xuXG4gICAgICBjYXNlICdoc3ZBcnJheSc6XG4gICAgICAgIHJldHVybiBoc3Y7XG5cbiAgICAgIGNhc2UgJ2hzbEFycmF5JzpcbiAgICAgICAgcmV0dXJuIEhTVnRvSFNMKGhzdik7XG5cbiAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgIHZhciBoc2wgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbCgnK2hzbFswXSsnLCAnK2hzbFsxXSsnJSwgJytoc2xbMl0rJyUpJztcblxuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIHZhciBoc2xDb2xvciA9IEhTVnRvSFNMKGhzdik7XG4gICAgICAgIHJldHVybiAnaHNsYSgnK2hzbENvbG9yWzBdKycsICcraHNsQ29sb3JbMV0rJyUsICcraHNsQ29sb3JbMl0rJyUsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b1JHQihoc3YpO1xuXG4gICAgICBjYXNlICdyZ2InOlxuICAgICAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYi5qb2luKCcsICcpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JhJzpcbiAgICAgICAgdmFyIHJnYkNvbG9yID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JDb2xvci5qb2luKCcsICcpICsgJywgJyArIE1hdGgucmFuZG9tKCkgKyAnKSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBIU1Z0b0hleChoc3YpO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUykge1xuXG4gICAgdmFyIGxvd2VyQm91bmRzID0gZ2V0Q29sb3JJbmZvKEgpLmxvd2VyQm91bmRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb3dlckJvdW5kcy5sZW5ndGggLSAxOyBpKyspIHtcblxuICAgICAgdmFyIHMxID0gbG93ZXJCb3VuZHNbaV1bMF0sXG4gICAgICAgICAgdjEgPSBsb3dlckJvdW5kc1tpXVsxXTtcblxuICAgICAgdmFyIHMyID0gbG93ZXJCb3VuZHNbaSsxXVswXSxcbiAgICAgICAgICB2MiA9IGxvd2VyQm91bmRzW2krMV1bMV07XG5cbiAgICAgIGlmIChTID49IHMxICYmIFMgPD0gczIpIHtcblxuICAgICAgICAgdmFyIG0gPSAodjIgLSB2MSkvKHMyIC0gczEpLFxuICAgICAgICAgICAgIGIgPSB2MSAtIG0qczE7XG5cbiAgICAgICAgIHJldHVybiBtKlMgKyBiO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIdWVSYW5nZSAoY29sb3JJbnB1dCkge1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZUludChjb2xvcklucHV0KSA9PT0gJ251bWJlcicpIHtcblxuICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KGNvbG9ySW5wdXQpO1xuXG4gICAgICBpZiAobnVtYmVyIDwgMzYwICYmIG51bWJlciA+IDApIHtcbiAgICAgICAgcmV0dXJuIFtudW1iZXIsIG51bWJlcl07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9ySW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgIGlmIChjb2xvckRpY3Rpb25hcnlbY29sb3JJbnB1dF0pIHtcbiAgICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdO1xuICAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UpIHtyZXR1cm4gY29sb3IuaHVlUmFuZ2U7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbMCwzNjBdO1xuXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXR1cmF0aW9uUmFuZ2UgKGh1ZSkge1xuICAgIHJldHVybiBnZXRDb2xvckluZm8oaHVlKS5zYXR1cmF0aW9uUmFuZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb2xvckluZm8gKGh1ZSkge1xuXG4gICAgLy8gTWFwcyByZWQgY29sb3JzIHRvIG1ha2UgcGlja2luZyBodWUgZWFzaWVyXG4gICAgaWYgKGh1ZSA+PSAzMzQgJiYgaHVlIDw9IDM2MCkge1xuICAgICAgaHVlLT0gMzYwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNvbG9yTmFtZSBpbiBjb2xvckRpY3Rpb25hcnkpIHtcbiAgICAgICB2YXIgY29sb3IgPSBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UgJiZcbiAgICAgICAgICAgaHVlID49IGNvbG9yLmh1ZVJhbmdlWzBdICYmXG4gICAgICAgICAgIGh1ZSA8PSBjb2xvci5odWVSYW5nZVsxXSkge1xuICAgICAgICAgIHJldHVybiBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICB9XG4gICAgfSByZXR1cm4gJ0NvbG9yIG5vdCBmb3VuZCc7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21XaXRoaW4gKHJhbmdlKSB7XG4gICAgaWYgKHNlZWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmdlWzBdICsgTWF0aC5yYW5kb20oKSoocmFuZ2VbMV0gKyAxIC0gcmFuZ2VbMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9TZWVkZWQgcmFuZG9tIGFsZ29yaXRobSBmcm9tIGh0dHA6Ly9pbmRpZWdhbXIuY29tL2dlbmVyYXRlLXJlcGVhdGFibGUtcmFuZG9tLW51bWJlcnMtaW4tanMvXG4gICAgICB2YXIgbWF4ID0gcmFuZ2VbMV0gfHwgMTtcbiAgICAgIHZhciBtaW4gPSByYW5nZVswXSB8fCAwO1xuICAgICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgIHZhciBybmQgPSBzZWVkIC8gMjMzMjgwLjA7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBybmQgKiAobWF4IC0gbWluKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IZXggKGhzdil7XG5cbiAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gJzAnICsgaGV4IDogaGV4O1xuICAgIH1cblxuICAgIHZhciBoZXggPSAnIycgKyBjb21wb25lbnRUb0hleChyZ2JbMF0pICsgY29tcG9uZW50VG9IZXgocmdiWzFdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsyXSk7XG5cbiAgICByZXR1cm4gaGV4O1xuXG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVDb2xvciAobmFtZSwgaHVlUmFuZ2UsIGxvd2VyQm91bmRzKSB7XG5cbiAgICB2YXIgc01pbiA9IGxvd2VyQm91bmRzWzBdWzBdLFxuICAgICAgICBzTWF4ID0gbG93ZXJCb3VuZHNbbG93ZXJCb3VuZHMubGVuZ3RoIC0gMV1bMF0sXG5cbiAgICAgICAgYk1pbiA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzFdLFxuICAgICAgICBiTWF4ID0gbG93ZXJCb3VuZHNbMF1bMV07XG5cbiAgICBjb2xvckRpY3Rpb25hcnlbbmFtZV0gPSB7XG4gICAgICBodWVSYW5nZTogaHVlUmFuZ2UsXG4gICAgICBsb3dlckJvdW5kczogbG93ZXJCb3VuZHMsXG4gICAgICBzYXR1cmF0aW9uUmFuZ2U6IFtzTWluLCBzTWF4XSxcbiAgICAgIGJyaWdodG5lc3NSYW5nZTogW2JNaW4sIGJNYXhdXG4gICAgfTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZENvbG9yQm91bmRzICgpIHtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgbnVsbCxcbiAgICAgIFtbMCwwXSxbMTAwLDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdyZWQnLFxuICAgICAgWy0yNiwxOF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkyXSxbNDAsODldLFs1MCw4NV0sWzYwLDc4XSxbNzAsNzBdLFs4MCw2MF0sWzkwLDU1XSxbMTAwLDUwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnb3JhbmdlJyxcbiAgICAgIFsxOSw0Nl0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkzXSxbNDAsODhdLFs1MCw4Nl0sWzYwLDg1XSxbNzAsNzBdLFsxMDAsNzBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICd5ZWxsb3cnLFxuICAgICAgWzQ3LDYyXSxcbiAgICAgIFtbMjUsMTAwXSxbNDAsOTRdLFs1MCw4OV0sWzYwLDg2XSxbNzAsODRdLFs4MCw4Ml0sWzkwLDgwXSxbMTAwLDc1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnZ3JlZW4nLFxuICAgICAgWzYzLDE3OF0sXG4gICAgICBbWzMwLDEwMF0sWzQwLDkwXSxbNTAsODVdLFs2MCw4MV0sWzcwLDc0XSxbODAsNjRdLFs5MCw1MF0sWzEwMCw0MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2JsdWUnLFxuICAgICAgWzE3OSwgMjU3XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODZdLFs0MCw4MF0sWzUwLDc0XSxbNjAsNjBdLFs3MCw1Ml0sWzgwLDQ0XSxbOTAsMzldLFsxMDAsMzVdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwdXJwbGUnLFxuICAgICAgWzI1OCwgMjgyXSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODddLFs0MCw3OV0sWzUwLDcwXSxbNjAsNjVdLFs3MCw1OV0sWzgwLDUyXSxbOTAsNDVdLFsxMDAsNDJdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwaW5rJyxcbiAgICAgIFsyODMsIDMzNF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkwXSxbNDAsODZdLFs2MCw4NF0sWzgwLDgwXSxbOTAsNzVdLFsxMDAsNzNdXVxuICAgICk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvUkdCIChoc3YpIHtcblxuICAgIC8vIHRoaXMgZG9lc24ndCB3b3JrIGZvciB0aGUgdmFsdWVzIG9mIDAgYW5kIDM2MFxuICAgIC8vIGhlcmUncyB0aGUgaGFja3kgZml4XG4gICAgdmFyIGggPSBoc3ZbMF07XG4gICAgaWYgKGggPT09IDApIHtoID0gMTt9XG4gICAgaWYgKGggPT09IDM2MCkge2ggPSAzNTk7fVxuXG4gICAgLy8gUmViYXNlIHRoZSBoLHMsdiB2YWx1ZXNcbiAgICBoID0gaC8zNjA7XG4gICAgdmFyIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgICB2ID0gaHN2WzJdLzEwMDtcblxuICAgIHZhciBoX2kgPSBNYXRoLmZsb29yKGgqNiksXG4gICAgICBmID0gaCAqIDYgLSBoX2ksXG4gICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICBxID0gdiAqICgxIC0gZipzKSxcbiAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpKnMpLFxuICAgICAgciA9IDI1NixcbiAgICAgIGcgPSAyNTYsXG4gICAgICBiID0gMjU2O1xuXG4gICAgc3dpdGNoKGhfaSkge1xuICAgICAgY2FzZSAwOiByID0gdjsgZyA9IHQ7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHIgPSBxOyBnID0gdjsgYiA9IHA7ICBicmVhaztcbiAgICAgIGNhc2UgMjogciA9IHA7IGcgPSB2OyBiID0gdDsgIGJyZWFrO1xuICAgICAgY2FzZSAzOiByID0gcDsgZyA9IHE7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IHIgPSB0OyBnID0gcDsgYiA9IHY7ICBicmVhaztcbiAgICAgIGNhc2UgNTogciA9IHY7IGcgPSBwOyBiID0gcTsgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbTWF0aC5mbG9vcihyKjI1NSksIE1hdGguZmxvb3IoZyoyNTUpLCBNYXRoLmZsb29yKGIqMjU1KV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSFNMIChoc3YpIHtcbiAgICB2YXIgaCA9IGhzdlswXSxcbiAgICAgIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgdiA9IGhzdlsyXS8xMDAsXG4gICAgICBrID0gKDItcykqdjtcblxuICAgIHJldHVybiBbXG4gICAgICBoLFxuICAgICAgTWF0aC5yb3VuZChzKnYgLyAoazwxID8gayA6IDItaykgKiAxMDAwMCkgLyAxMDAsXG4gICAgICBrLzIgKiAxMDBcbiAgICBdO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5nVG9JbnRlZ2VyIChzdHJpbmcpIHtcbiAgICB2YXIgdG90YWwgPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvdGFsID49IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSBicmVhaztcbiAgICAgIHRvdGFsICs9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiB0b3RhbFxuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUNvbG9yO1xufSkpO1xuIl19
