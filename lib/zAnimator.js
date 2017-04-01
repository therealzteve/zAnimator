(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path_magic = require(7);

var _path_magic2 = _interopRequireDefault(_path_magic);

var _square_group_stuff = require(12);

var _square_group_stuff2 = _interopRequireDefault(_square_group_stuff);

var _zoom_stuff = require(14);

var _zoom_stuff2 = _interopRequireDefault(_zoom_stuff);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pathMagic: _path_magic2.default,
  squareGroupStuff: _square_group_stuff2.default,
  zoomStuff: _zoom_stuff2.default
};


},{"12":12,"14":14,"7":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swinging_line = require(5);

var _swinging_line2 = _interopRequireDefault(_swinging_line);

var _curve = require(4);

var _curve2 = _interopRequireDefault(_curve);

var _wave = require(6);

var _wave2 = _interopRequireDefault(_wave);

var _cpoint_spinner = require(3);

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


},{"3":3,"4":4,"5":5,"6":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var swingLine = {};

  (0, _check_parameter2.default)(options, 'length', true);
  (0, _check_parameter2.default)(options, 'radius', true);
  (0, _check_parameter2.default)(options, 'time', true);

  swingLine.length = options.length;
  swingLine.radius = options.radius;
  swingLine.time = options.time;

  swingLine.pulsar = (0, _transition_loop2.default)(swingLine.time, 1);
  swingLine.view = (0, _container2.default)();
  swingLine.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: swingLine.length, y: 0 }, cpoint1: { x: swingLine.length / 2 - swingLine.radius, y: 0 }, cpoint2: { x: swingLine.length / 2 + swingLine.radius, y: 0 } });
  swingLine.pathView = (0, _path2.default)({ path: swingLine.bezierCurve });

  swingLine.start = function () {
    swingLine.pulsar.start(swingLine.handle);
    swingLine.view.addChild(swingLine.pathView.view);
  };

  swingLine.stop = function () {
    swingLine.pulsar.stop();
    swingLine.view.removeChild(swingLine.pathView.view);
  };

  swingLine.handle = function (current) {
    var coordinates = (0, _degrees_to_coordinates2.default)(current * 360, swingLine.radius);
    console.log(coordinates);
    swingLine.bezierCurve.cpoint1.x = swingLine.length / 2 - coordinates.x;
    swingLine.bezierCurve.cpoint1.y = -coordinates.y;
    swingLine.bezierCurve.cpoint2.x = swingLine.length / 2 + coordinates.x;
    swingLine.bezierCurve.cpoint2.y = coordinates.y;
    swingLine.pathView.draw();
  };

  return swingLine;
};

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(92);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(90);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"71":71,"77":77,"90":90,"92":92,"97":97}],4:[function(require,module,exports){
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
  swingLine.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: swingLine.length, y: 0 }, cpoint1: { x: 0, y: 0 }, cpoint2: { x: swingLine.length / 2, y: 0 } });
  swingLine.pathView = (0, _path2.default)({ path: swingLine.bezierCurve });

  swingLine.start = function () {
    swingLine.pulsar.start(swingLine.handle);
    swingLine.view.addChild(swingLine.pathView.view);
  };

  swingLine.stop = function () {
    swingLine.pulsar.stop();
    swingLine.view.removeChild(swingLine.pathView.view);
  };

  swingLine.handle = function (current) {
    swingLine.bezierCurve.end.y = (current - 0.5) * swingLine.amplitude;
    swingLine.bezierCurve.cpoint1.x = Math.abs(current - 0.5) * swingLine.length;
    swingLine.bezierCurve.cpoint2.x = (Math.abs(current - 0.5) + 0.5) * swingLine.length;
    swingLine.bezierCurve.cpoint2.y = (current - 0.5) / 2 * swingLine.amplitude;
    swingLine.pathView.draw();
  };

  return swingLine;
};

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(92);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"71":71,"77":77,"92":92,"97":97}],5:[function(require,module,exports){
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
    swingLine.pulsar.start(swingLine.handle);
    swingLine.view.addChild(swingLine.pathView.view);
  };

  swingLine.stop = function () {
    swingLine.pulsar.stop();
    swingLine.view.removeChild(swingLine.pathView.view);
  };

  swingLine.handle = function (current) {
    swingLine.bezierCurve.cpoint1.y = (current - 0.5) * swingLine.amplitude;
    swingLine.pathView.draw();
  };

  return swingLine;
};

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(92);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"71":71,"77":77,"92":92,"97":97}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var swingLine = {};

  (0, _check_parameter2.default)(options, 'length', true);
  (0, _check_parameter2.default)(options, 'amplitude', true);
  (0, _check_parameter2.default)(options, 'stretch', false, 0);
  (0, _check_parameter2.default)(options, 'time', true);

  swingLine.length = options.length;
  swingLine.amplitude = options.amplitude;
  swingLine.time = options.time;
  swingLine.stretch = options.stretch;

  swingLine.pulsar = (0, _transition_loop2.default)(swingLine.time, 0.5);
  swingLine.view = (0, _container2.default)();
  swingLine.bezierCurve = (0, _bezier_curve2.default)({ start: { x: 0, y: 0 }, end: { x: swingLine.length, y: 0 }, cpoint1: { x: swingLine.length / 2 - swingLine.stretch, y: 0 }, cpoint2: { x: swingLine.length / 2 + swingLine.stretch, y: 0 } });
  swingLine.pathView = (0, _path2.default)({ path: swingLine.bezierCurve });

  swingLine.start = function () {
    swingLine.pulsar.start(swingLine.handle);
    swingLine.view.addChild(swingLine.pathView.view);
  };

  swingLine.stop = function () {
    swingLine.pulsar.stop();
    swingLine.view.removeChild(swingLine.pathView.view);
  };

  swingLine.handle = function (current) {
    swingLine.bezierCurve.end.y = (current - 0.5) * swingLine.amplitude;
    swingLine.bezierCurve.cpoint2.y = (swingLine.pulsar.getRelativeCurrent(-0.25) - 0.5) * 1.5 * swingLine.amplitude;
    swingLine.bezierCurve.cpoint1.y = (swingLine.pulsar.getRelativeCurrent(-0.5) - 0.5) * 1.5 * swingLine.amplitude;
    swingLine.bezierCurve.start.y = (swingLine.pulsar.getRelativeCurrent(-0.75) - 0.5) * swingLine.amplitude;
    swingLine.pathView.draw();
  };

  return swingLine;
};

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(92);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"71":71,"77":77,"92":92,"97":97}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition_path_drawer = require(9);

var _transition_path_drawer2 = _interopRequireDefault(_transition_path_drawer);

var _random_part_path_drawer = require(8);

var _random_part_path_drawer2 = _interopRequireDefault(_random_part_path_drawer);

var _bezier = require(2);

var _bezier2 = _interopRequireDefault(_bezier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  transitionPathDrawer: _transition_path_drawer2.default,
  randomPartPathDrawer: _random_part_path_drawer2.default,
  bezier: _bezier2.default
};


},{"2":2,"8":8,"9":9}],8:[function(require,module,exports){
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
    _loop2.default.addAnimation(pathDrawer.handle);
    pathDrawer.view.addChild(pathDrawer.pathView.view);
  };

  pathDrawer.stop = function () {
    _loop2.default.removeAnimation(pathDrawer.handle);
    pathDrawer.view.removeChild(pathDrawer.pathView.view);
  };

  pathDrawer.handle = function () {
    pathDrawer.pathView.completePath = pathDrawer.path.getPartPath(Math.random());
    pathDrawer.pathView.draw();
  };

  return pathDrawer;
};

var _loop = require(99);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71,"77":77,"97":97,"99":99}],9:[function(require,module,exports){
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
    pathDrawer.pulsar.start(pathDrawer.handle);
    pathDrawer.view.addChild(pathDrawer.pathView.view);
  };

  pathDrawer.stop = function () {
    pathDrawer.pulsar.stop();
    pathDrawer.view.removeChild(pathDrawer.pathView.view);
  };

  pathDrawer.handle = function (current) {
    pathDrawer.pathView.completePath = pathDrawer.path.getPartPath(current);
    pathDrawer.pathView.draw();
  };

  return pathDrawer;
};

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"71":71,"77":77,"97":97}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var randomKaroSwitch = {};

  (0, _check_parameter2.default)(options, 'columns', true);
  (0, _check_parameter2.default)(options, 'visible', true);
  (0, _check_parameter2.default)(options, 'spacing', false);
  (0, _check_parameter2.default)(options, 'children', false, []);

  var group = (0, _rectangle_group2.default)({ 'children': options.children, 'columns': options.columns, 'spacing': options.spacing });

  randomKaroSwitch.view = group.view;

  randomKaroSwitch.switch = function () {
    var randomNumbers = [];
    for (var i = 0; i < options.children.length; i++) {
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for (var j = 0; j < options.children.length; j++) {
      if (j < options.visible) {
        group.children[randomNumbers[j]].view.alpha = 0;
      } else {
        group.children[randomNumbers[j]].view.alpha = 1;
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

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(84);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"84":84,"97":97}],11:[function(require,module,exports){
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

  var groupSwitch = (0, _random_square_switch2.default)(options);
  var groupSwitchTimer = (0, _interval_timer2.default)(options.interval);
  var switchInterval = {};

  switchInterval.start = function () {
    groupSwitchTimer.addListener(handle);
    groupSwitchTimer.start();
  };

  switchInterval.stop = function () {
    groupSwitchTimer.stop();
    groupSwitchTimer.removeListener(handle);
  };

  switchInterval.view = groupSwitch.view;

  function handle() {
    groupSwitch.switch();
  }

  return switchInterval;
};

var _random_square_switch = require(10);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _interval_timer = require(101);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"101":101,"97":97}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_square_switch = require(10);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _random_square_switch_interval = require(11);

var _random_square_switch_interval2 = _interopRequireDefault(_random_square_switch_interval);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomSquareSwitch: _random_square_switch2.default,
  randomSquareSwitchInterval: _random_square_switch_interval2.default
};


},{"10":10,"11":11}],13:[function(require,module,exports){
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
  var zoomer = (0, _linear_pulsar2.default)(options);

  var zoomOut = {};
  zoomOut.start = function () {
    zoomer.start();
  };

  zoomOut.stop = function () {
    zoomer.stop();
  };

  return zoomOut;
};

var _linear_pulsar = require(100);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"97":97}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoom_out = require(13);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  zoomOut: _zoom_out2.default
};


},{"13":13}],15:[function(require,module,exports){
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

var _abstract_component = require(68);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"68":68}],16:[function(require,module,exports){
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
            circle.view.graphics.clear();
            circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.getWidth = function () {
            return circle.circleShape.radius * circle.scale * 2;
      };

      circle.getHeight = function () {
            return circle.circleShape.radius * circle.scale * 2;
      };

      /* init */
      circle.draw();
      return circle;
};

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"97":97}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};


},{}],18:[function(require,module,exports){
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
    custom.view.graphics.clear();
    custom.view.graphics.beginFill(custom.color).beginStroke('#00F').moveTo(0, 0);
    var current = {
      x: 0,
      y: 0
    };
    var i = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = custom.customShape.path.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var path = _step.value;

        _path_drawer2.default[path.type](custom.view.graphics, path, current);
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

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(19);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(87);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"19":19,"87":87,"97":97}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(89);

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


},{"89":89}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'source', true);

  var image = (0, _abstract_shape2.default)();
  image.view = new createjs.Bitmap(options.source);

  image.draw = function () {
    image.view.scaleX = image.scale;
    image.view.scaleY = image.scale;
  };

  image.draw();
  return image;
};

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"97":97}],21:[function(require,module,exports){
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
            line.view.graphics.clear().beginStroke(line.color).setStrokeStyle(line.thickness * line.scale).moveTo(line.path.start.x * line.scale, line.path.start.y * line.scale).lineTo(line.path.end.x * line.scale, line.path.end.y * line.scale);
      };

      line.getWidth = function () {
            return (line.path.end.x - line.path.start.x) * line.scale;
      };

      line.getHeight = function () {
            return (line.path.end.y - line.path.start.y) * line.scale;
      };

      line.draw();
      return line;
};

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"97":97}],22:[function(require,module,exports){
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


},{}],23:[function(require,module,exports){
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
            custom.view.graphics.clear();
            custom.view.graphics.beginStroke(custom.color).setStrokeStyle(custom.width).moveTo(0, 0);
            var current = { x: 0, y: 0 };
            var i = 1;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                  for (var _iterator = custom.completePath.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var path = _step.value;

                        _path_drawer2.default[path.type](custom.view.graphics, path, current);
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

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(19);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(87);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"19":19,"87":87,"97":97}],24:[function(require,module,exports){
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
            rect.view.graphics.clear();
            rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.getWidth = function () {
            return rect.width * rect.scale;
      };

      rect.getHeight = function () {
            return rect.height * rect.scale;
      };

      rect.draw();
      return rect;
};

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"97":97}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'squareShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var square = (0, _abstract_shape2.default)();
      square.squareShape = options.squareShape;
      square.color = options.color;

      square.draw = function () {
            square.view.graphics.clear();
            square.view.graphics.beginFill(square.color).drawRect(0, 0, square.squareShape.sidelength * square.scale, square.squareShape.sidelength * square.scale);
      };

      square.getWidth = function () {
            return square.squareShape.sidelength * square.scale;
      };

      square.getHeight = function () {
            return square.squareShape.sidelength * square.scale;
      };

      square.draw();
      return square;
};

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"97":97}],26:[function(require,module,exports){
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

      /* public methods */
      video.draw = function () {
            video.view.scaleX = video.scale;
            video.view.scaleY = video.scale;
      };

      video.play = function () {
            options.source.play();
      };

      video.stop = function () {
            options.source.pause();
            options.source.currentTime = 0;
      };

      video.pause = function () {
            options.source.pause();
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

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(15);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"97":97}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _square = require(25);

var _square2 = _interopRequireDefault(_square);

var _circle = require(16);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(24);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(22);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(21);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(18);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(20);

var _image2 = _interopRequireDefault(_image);

var _video = require(26);

var _video2 = _interopRequireDefault(_video);

var _path = require(23);

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


},{"16":16,"17":17,"18":18,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children) {
    var abstractGroup = (0, _abstract_filter2.default)();

    abstractGroup.children = children ? children : [];

    abstractGroup.add = function (child) {
        abstractGroup.children.push(child);
        abstractGroup.refresh();
    };

    abstractGroup.remove = function (child) {
        abstractGroup.children.splice(abstractGroup.children.indexOf(child), 1);
        abstractGroup.refresh();
    };

    return abstractGroup;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82}],29:[function(require,module,exports){
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
        centerGroup.view.removeAllChildren();
        for (var i = 0; i < centerGroup.children.length; i++) {
            var container = _factory2.default.container();
            container.addChild(centerGroup.children[i].view);

            if (centerGroup.width) {
                container.x = container.x = (i + 1) * centerGroup.width / (centerGroup.children.length + 1);
            }

            if (centerGroup.height) {
                container.y = container.x = (i + 1) * centerGroup.height / (centerGroup.children.length + 1);
            }

            centerGroup.view.addChild(container);
        }
    };

    centerGroup.refresh();
    return centerGroup;
};

var _abstract_group = require(28);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"81":81,"97":97}],30:[function(require,module,exports){
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

var _abstract_group = require(28);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"81":81,"97":97}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(34);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(33);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(30);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(35);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(32);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(29);

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


},{"29":29,"30":30,"32":32,"33":33,"34":34,"35":35}],32:[function(require,module,exports){
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

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(28);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"81":81,"97":97}],33:[function(require,module,exports){
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
        rectangleGroup.view.removeAllChildren();
        for (var i = 0; i < rectangleGroup.children.length; i++) {
            var container = _factory2.default.container();
            container.addChild(rectangleGroup.children[i].view);
            container.x = Math.floor(rectangleGroup.width * Math.random());
            container.y = Math.floor(rectangleGroup.height * Math.random());
            rectangleGroup.view.addChild(container);
        }
    };

    rectangleGroup.refresh();
    return rectangleGroup;
};

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(28);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"81":81,"97":97}],34:[function(require,module,exports){
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

var _abstract_group = require(28);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"81":81,"97":97}],35:[function(require,module,exports){
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

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(28);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"81":81,"97":97}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'child', true);
    (0, _check_parameter2.default)(options, 'width', true);
    (0, _check_parameter2.default)(options, 'height', true);

    /* Private vars */

    var centerFilter = (0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options);

    /* Callbacks */
    centerFilter.onPropertyChange = function () {
        if (centerFilter.getChild().getWidth) {
            centerFilter.view.x = options.width / 2 - centerFilter.getChild().getWidth() / 2;
        }
        if (centerFilter.getChild().getHeight) {
            centerFilter.view.y = options.height / 2 - centerFilter.getChild().getHeight() / 2;
        }
    };

    centerFilter.onPropertyChange();
    /* return */
    return centerFilter;
};

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(85);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"85":85,"97":97}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _centralizer = require(36);

var _centralizer2 = _interopRequireDefault(_centralizer);

var _pathMover = require(38);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _linear = require(40);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(41);

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


},{"36":36,"38":38,"40":40,"41":41}],38:[function(require,module,exports){
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
    var point = pathMover.path.getPoint(current);
    pathMover.view.x = point.x;
    pathMover.view.y = point.y;
  };

  return pathMover;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_filter = require(86);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

var _single_child_filter = require(85);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"85":85,"86":86,"97":97}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'goalPoint', true);
    (0, _check_parameter2.default)(options, 'startPoint', false, { x: 0, y: 0 });

    /* private vars */
    var p2PMover = (0, _single_child_filter2.default)((0, _transition_filter2.default)((0, _abstract_filter2.default)(), options), options);

    /* Params and defaults */
    p2PMover.goalPoint = options.goalPoint;
    p2PMover.startPoint = options.startPoint;

    /* Public functions */
    p2PMover.handle = function (current) {
        var amountX = (p2PMover.goalPoint.x - p2PMover.startPoint.x) * current;
        var amountY = (p2PMover.goalPoint.y - p2PMover.startPoint.y) * current;

        p2PMover.view.x = p2PMover.startPoint.x + amountX;
        p2PMover.view.y = p2PMover.startPoint.y + amountY;
    };

    /* Init */

    return p2PMover;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_filter = require(86);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

var _single_child_filter = require(85);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"85":85,"86":86,"97":97}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* Private vars */
    var linearP2PMover = (0, _abstractMover2.default)(options);

    /* Public functions */
    linearP2PMover.handle = function (current) {
        var amountX = (linearP2PMover.goalPoint.x - linearP2PMover.startPoint.x) * current;
        var amountY = (linearP2PMover.goalPoint.y - linearP2PMover.startPoint.y) * current;

        linearP2PMover.view.x = linearP2PMover.startPoint.x + amountX;
        linearP2PMover.view.y = linearP2PMover.startPoint.y + amountY;
    };

    return linearP2PMover;
};

var _abstractMover = require(39);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    /* PArameters */
    (0, _check_parameter2.default)(options, 'shakeFactor', false, 1);

    /* private vars */
    var shakeMover = (0, _abstractMover2.default)(options);

    shakeMover.shakeFactor = options.shakeFactor;

    /* Public functions */
    shakeMover.handle = function (current) {
        var randomFactor = Math.random() * shakeMover.shakeFactor - shakeMover.shakeFactor / 2;
        var amountX = (shakeMover.goalPoint.x - shakeMover.startPoint.x + randomFactor) * current;
        var amountY = (shakeMover.goalPoint.y - shakeMover.startPoint.y + randomFactor) * current;

        shakeMover.view.x = shakeMover.startPoint.x + amountX;
        shakeMover.view.y = shakeMover.startPoint.y + amountY;
    };

    return shakeMover;
};

var _abstractMover = require(39);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"97":97}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'child', true);
    (0, _check_parameter2.default)(options, 'speed', false, 1000);

    var fader = (0, _abstract_filter2.default)();
    fader.speed = options.speed;
    fader.pulsar = (0, _transition_loop2.default)(fader.speed, 0.5);

    fader.view.addChild(options.child.view);

    function handle(current) {
        fader.view.alpha = current;
    }

    fader.start = function () {
        fader.pulsar.start(handle);
    };

    fader.stop = function () {
        fader.pulsar.stop();
    };

    return fader;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"82":82,"97":97}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'child', true);

    var flasher = (0, _abstract_filter2.default)();

    flasher.view.addChild(options.child.view);
    flasher.handle = function () {
        flasher.view.visible = Math.random() > 0.5;
    };

    return flasher;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"97":97}],44:[function(require,module,exports){
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
    linearRotator.view.rotation = linearRotator.view.rotation + linearRotator.speed * (event.delta / 1000);
  }

  linearRotator.handle = handle;

  return linearRotator;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"97":97}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(89);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(97);

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
    return arc.getPoint(1);
  };

  arc.getLength = function () {
    return Math.abs(2 * Math.PI * arc.radius * (arc.degrees / 360));
  };

  arc.getPoint = function (progress) {
    var origin = { x: arc.start.x, y: arc.start.y };
    var partOfDegrees = arc.degrees * progress;

    if (arc.degrees < 0) {
      return {
        x: origin.x + arc.radius * Math.sin((0, _angle_to_radians2.default)(-partOfDegrees)),
        y: origin.y - arc.radius + arc.radius * Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
      };
    }

    return {
      x: origin.x + arc.radius * Math.sin((0, _angle_to_radians2.default)(partOfDegrees)),
      y: origin.y + arc.radius + arc.radius * -Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
    };
  };

  arc.subPaths = [arc];

  arc.getAngle = function (progress) {
    return (0, _angle_to_radians2.default)(arc.degrees * progress);
  };

  arc.getPartPath = function (progress) {
    var partOfDegrees = arc.degrees * progress;
    return arcConstructor({ start: arc.start, degrees: partOfDegrees, radius: arc.radius });
  };

  return arc;
}


},{"89":89,"97":97}],46:[function(require,module,exports){
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
    return bezierCurve.end;
  };

  bezierCurve.getLength = function () {
    return bezierCurve.internalBezier.length();
  };

  bezierCurve.getPoint = function (progress) {
    return bezierCurve.internalBezier.get(progress);
  };

  //TODO Add get part path function

  return bezierCurve;
};

var _bezierJs = require(103);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"97":97}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(96);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(88);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(97);

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
    return line.end;
  };

  line.getLength = function () {
    return (0, _distance2.default)((0, _to_vector2.default)(line.start), (0, _to_vector2.default)(line.end));
  };

  line.getPoint = function (progress) {
    return {
      x: line.start.x + (line.end.x - line.start.x) * progress,
      y: line.start.y + (line.end.y - line.start.y) * progress
    };
  };

  line.getPartPath = function (progress) {
    var newEnd = { x: line.end.x * progress, y: line.end.y * progress };
    var pathPart = lineConstructor({ start: line.start, end: newEnd });
    return pathPart;
  };

  return line;
}


},{"88":88,"96":96,"97":97}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(87);

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
      for (var _iterator = path.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      for (var _iterator2 = path.subPaths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
    var lengthPoint = progress * path.getLength();
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = path.subPaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var subPath = _step3.value;

        if (lengthPoint > subPath.getLength()) {
          lengthPoint -= subPath.getLength();
        } else {
          return (0, _add_up_points2.default)(subPath.getPoint(lengthPoint / subPath.getLength()), path.getStartPointOf(subPath));
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
      for (var _iterator4 = path.subPaths[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
    var lengthPoint = progress * path.getLength();
    var subPathsRetrieved = false;
    var currentPath = 0;

    while (!subPathsRetrieved) {
      if (lengthPoint > path.subPaths[currentPath].getLength()) {
        lengthPoint -= path.subPaths[currentPath].getLength();
        newSubPaths.push(path.subPaths[currentPath].getPartPath(1));
        currentPath = currentPath + 1;
      } else {
        newSubPaths.push(path.subPaths[currentPath].getPartPath(lengthPoint / path.subPaths[currentPath].getLength()));
        subPathsRetrieved = true;
      }
    }

    var partPath = pathConstructor();
    partPath.subPaths = newSubPaths;
    return partPath;
  };

  return path;
}


},{"87":87}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(45);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(47);

var _line2 = _interopRequireDefault(_line);

var _path = require(48);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(46);

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


},{"45":45,"46":46,"47":47,"48":48}],50:[function(require,module,exports){
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

var _path = require(94);

var _path2 = _interopRequireDefault(_path);

var _arc = require(91);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"91":91,"94":94,"97":97}],51:[function(require,module,exports){
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

var _path = require(94);

var _path2 = _interopRequireDefault(_path);

var _line = require(93);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"93":93,"94":94,"97":97}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(51);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(53);

var _square2 = _interopRequireDefault(_square);

var _circle = require(50);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"50":50,"51":51,"53":53}],53:[function(require,module,exports){
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

var _path = require(94);

var _path2 = _interopRequireDefault(_path);

var _line = require(93);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"93":93,"94":94,"97":97}],54:[function(require,module,exports){
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


},{}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(43);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(42);

var _fader2 = _interopRequireDefault(_fader);

var _group = require(31);

var _group2 = _interopRequireDefault(_group);

var _mover = require(37);

var _mover2 = _interopRequireDefault(_mover);

var _linear_rotator = require(44);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _randomColor = require(119);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(54);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(52);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(49);

var _paths2 = _interopRequireDefault(_paths);

var _compositions = require(1);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(65);

var _proxies2 = _interopRequireDefault(_proxies);

var _interval = require(67);

var _interval2 = _interopRequireDefault(_interval);

var _modificators = require(58);

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


},{"1":1,"119":119,"27":27,"31":31,"37":37,"42":42,"43":43,"44":44,"49":49,"52":52,"54":54,"58":58,"65":65,"67":67}],56:[function(require,module,exports){
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
    colorFader.pulsar.start(colorFader.handle);
  };

  colorFader.stop = function () {
    colorFader.pulsar.stop();
  };

  colorFader.handle = function (current) {
    colorFader.currentColor.red(colorFader.color1.red() + current * colorFader.colorRange.r);
    colorFader.currentColor.green(colorFader.color1.green() + current * colorFader.colorRange.g);
    colorFader.currentColor.blue(colorFader.color1.blue() + current * colorFader.colorRange.b);
    (0, _set_prop2.default)(colorFader.subject, 'color', colorFader.currentColor.rgbString());
    colorFader.subject.draw();
  };

  return colorFader;
};

var _color = require(111);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(98);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"111":111,"97":97,"98":98}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);

  var randomColorChanger = {};
  randomColorChanger.subject = options.subject;

  randomColorChanger.start = function () {
    _loop2.default.addAnimation(randomColorChanger.handle);
  };

  randomColorChanger.stop = function () {
    _loop2.default.removeAnimation(randomColorChanger.handle);
  };

  randomColorChanger.handle = function () {
    (0, _set_prop2.default)(randomColorChanger.subject, 'color', (0, _randomColor2.default)());
    randomColorChanger.subject.draw();
  };

  return randomColorChanger;
};

var _loop = require(99);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(119);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(98);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"119":119,"97":97,"98":98,"99":99}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_color_changer = require(57);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(56);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(60);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _random_arc_mover = require(59);

var _random_arc_mover2 = _interopRequireDefault(_random_arc_mover);

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
    randomArcMover: _random_arc_mover2.default
  }
};


},{"56":56,"57":57,"59":59,"60":60}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);
  (0, _check_parameter2.default)(options, 'speed', true);

  // private vars
  var currentArc = createRandomArc();
  var currentStartPosition = { x: 0, y: 0 };
  var currentMs = 0;
  var currentAngle = 0;

  // private functions
  function createRandomArc() {
    return (0, _arc2.default)({ degrees: Math.random() * 360 - 180, radius: 25 });
  }

  var randomArcMover = {};
  randomArcMover.subject = options.subject;
  randomArcMover.speed = options.speed;

  randomArcMover.start = function () {
    _loop2.default.addAnimation(randomArcMover.handle);
  };

  randomArcMover.stop = function () {
    _loop2.default.removeAnimation(randomArcMover.handle);

    // Reset everything
    currentArc = createRandomArc();
    currentStartPosition = { x: 0, y: 0 };
    currentMs = 0;
    currentAngle = 0;
  };

  randomArcMover.handle = function (event) {
    var ms = event.delta;
    currentMs += ms;

    while (currentMs / 1000 * randomArcMover.speed >= currentArc.getLength()) {
      var rotatedPoint = (0, _rotate_point2.default)(currentArc.getPoint(1), currentAngle);
      currentStartPosition.x = currentStartPosition.x + rotatedPoint.x;
      currentStartPosition.y = currentStartPosition.y + rotatedPoint.y;
      currentMs = currentMs - currentArc.getLength() * 1000 / randomArcMover.speed;
      currentAngle = currentAngle + currentArc.getAngle(1);
      currentArc = createRandomArc();
    }
    var progress = currentMs / 1000 * randomArcMover.speed / currentArc.getLength();

    var position = (0, _rotate_point2.default)(currentArc.getPoint(progress), currentAngle);
    (0, _set_prop2.default)(randomArcMover.subject, 'x', currentStartPosition.x + position.x);
    (0, _set_prop2.default)(randomArcMover.subject, 'y', currentStartPosition.y + position.y);
    //randomArcMover.subject.draw();
  };

  return randomArcMover;
};

var _arc = require(91);

var _arc2 = _interopRequireDefault(_arc);

var _loop = require(99);

var _loop2 = _interopRequireDefault(_loop);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rotate_point = require(95);

var _rotate_point2 = _interopRequireDefault(_rotate_point);

var _set_prop = require(98);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"91":91,"95":95,"97":97,"98":98,"99":99}],60:[function(require,module,exports){
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
    linearPulsar.pulsar.start(linearPulsar.handle);
  };

  linearPulsar.stop = function () {
    linearPulsar.pulsar.stop();
  };

  linearPulsar.handle = function (current) {
    (0, _set_prop2.default)(linearPulsar.subject, 'scale', 1 + current * (linearPulsar.limit - 1));
    linearPulsar.subject.draw();
  };

  return linearPulsar;
};

var _transition_loop = require(102);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(98);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"97":97,"98":98}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var proxy = {};
  proxy.group = [];

  proxy.addElement = function (element) {
    proxy.group.push(element);
  };

  proxy.removeElement = function (element) {
    proxy.group.splice(proxy.group.indexOf(element), 1);
  };

  proxy.draw = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = proxy.group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

var _set_prop = require(98);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"98":98}],62:[function(require,module,exports){
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
      for (var _iterator = proxy.group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var obj = _step.value;

        proxy._setPropOfElement(obj, name, value);
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

var _abstract_proxy = require(61);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"61":61}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'shuffle', false, false);

  var proxy = (0, _abstract_proxy2.default)();
  proxy.currentElementIndex = 0;

  proxy.setProp = function (name, value) {
    if (proxy.shuffle && proxy.currentElementIndex === 0) {
      proxy.shuffleGroup();
    }
    proxy._setPropOfElement(proxy.group[proxy.currentElementIndex], name, value);

    proxy.currentElementIndex++;
    if (proxy.currentElementIndex >= proxy.group.length) {
      proxy.currentElementIndex = 0;
    }
  };

  proxy.shuffleGroup = function () {
    //TODO implement shuffle algorithm
  };

  return proxy;
};

var _abstract_proxy = require(61);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"61":61,"97":97}],64:[function(require,module,exports){
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
    p.group = proxy.group;
    var changePropCallback = function changePropCallback() {
      p.setProp(name, value);
      p.draw();
      if (p.currentElementIndex === 0) {
        proxy.timer.removeListener(changePropCallback);
        p.group = null;
      }
    };
    proxy.timer.addListener(changePropCallback);
  };

  proxy.timer.start();
  return proxy;
};

var _interval_timer = require(101);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(63);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(61);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"61":61,"63":63,"97":97}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_proxy = require(62);

var _default_proxy2 = _interopRequireDefault(_default_proxy);

var _increment_proxy = require(63);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _interval_proxy = require(64);

var _interval_proxy2 = _interopRequireDefault(_interval_proxy);

var _random_proxy = require(66);

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


},{"62":62,"63":63,"64":64,"66":66}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var proxy = (0, _abstract_proxy2.default)();

  proxy.setProp = function (name, value) {
    var randomElementIndex = Math.floor(Math.random() * proxy.group.length);
    proxy._setPropOfElement(proxy.group[randomElementIndex], name, value);
  };

  return proxy;
};

var _abstract_proxy = require(61);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"61":61}],67:[function(require,module,exports){
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
    halfInterval.type = interval.type;
    halfInterval.bpm = interval.bpm;
    halfInterval.ms = interval.ms;
    halfInterval.divisor = interval.divisor * 2;

    return halfInterval;
  };

  interval.bisect = function () {
    interval.divisor = interval.divisor * 2;
  };

  interval.getMs = function () {
    if (interval.type === 'ms') {
      return interval.ms;
    } else {
      return 60000 / interval.bpm;
    }
  };

  return interval;
};

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"97":97}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  /* private vars */
  var abstractComponent = {};
  var callbacks = {};

  abstractComponent.addEventListener = function (eventName, callback) {
    if (!callbacks[eventName]) {
      callbacks[eventName] = [];
    }
    callbacks[eventName].push(callback);
  };

  abstractComponent.removeEventListener = function (eventName, callback) {
    if (callbacks[eventName]) {
      var index = callbacks[eventName].indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  };

  abstractComponent.sendEvent = function (eventName) {
    if (!callbacks[eventName]) {
      return;
    }
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = callbacks[eventName][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

  return abstractComponent;
};

},{}],69:[function(require,module,exports){
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

var _abstract_component = require(68);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"68":68}],70:[function(require,module,exports){
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
            circle.view.graphics.clear();
            circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.getWidth = function () {
            return circle.circleShape.radius * circle.scale * 2;
      };

      circle.getHeight = function () {
            return circle.circleShape.radius * circle.scale * 2;
      };

      /* init */
      circle.draw();
      return circle;
};

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"97":97}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};

},{}],72:[function(require,module,exports){
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
    custom.view.graphics.clear();
    custom.view.graphics.beginFill(custom.color).beginStroke('#00F').moveTo(0, 0);
    var current = {
      x: 0,
      y: 0
    };
    var i = 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = custom.customShape.path.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var path = _step.value;

        _path_drawer2.default[path.type](custom.view.graphics, path, current);
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

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(73);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(87);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"73":73,"87":87,"97":97}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(89);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

},{"89":89}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'source', true);

  var image = (0, _abstract_shape2.default)();
  image.view = new createjs.Bitmap(options.source);

  image.draw = function () {
    image.view.scaleX = image.scale;
    image.view.scaleY = image.scale;
  };

  image.draw();
  return image;
};

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"97":97}],75:[function(require,module,exports){
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
            line.view.graphics.clear().beginStroke(line.color).setStrokeStyle(line.thickness * line.scale).moveTo(line.path.start.x * line.scale, line.path.start.y * line.scale).lineTo(line.path.end.x * line.scale, line.path.end.y * line.scale);
      };

      line.getWidth = function () {
            return (line.path.end.x - line.path.start.x) * line.scale;
      };

      line.getHeight = function () {
            return (line.path.end.y - line.path.start.y) * line.scale;
      };

      line.draw();
      return line;
};

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"97":97}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
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
            custom.view.graphics.clear();
            custom.view.graphics.beginStroke(custom.color).setStrokeStyle(custom.width).moveTo(0, 0);
            var current = { x: 0, y: 0 };
            var i = 1;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                  for (var _iterator = custom.completePath.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var path = _step.value;

                        _path_drawer2.default[path.type](custom.view.graphics, path, current);
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

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(73);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(87);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"73":73,"87":87,"97":97}],78:[function(require,module,exports){
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
            rect.view.graphics.clear();
            rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.getWidth = function () {
            return rect.width * rect.scale;
      };

      rect.getHeight = function () {
            return rect.height * rect.scale;
      };

      rect.draw();
      return rect;
};

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"97":97}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'squareShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var square = (0, _abstract_shape2.default)();
      square.squareShape = options.squareShape;
      square.color = options.color;

      square.draw = function () {
            square.view.graphics.clear();
            square.view.graphics.beginFill(square.color).drawRect(0, 0, square.squareShape.sidelength * square.scale, square.squareShape.sidelength * square.scale);
      };

      square.getWidth = function () {
            return square.squareShape.sidelength * square.scale;
      };

      square.getHeight = function () {
            return square.squareShape.sidelength * square.scale;
      };

      square.draw();
      return square;
};

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"97":97}],80:[function(require,module,exports){
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

      /* public methods */
      video.draw = function () {
            video.view.scaleX = video.scale;
            video.view.scaleY = video.scale;
      };

      video.play = function () {
            options.source.play();
      };

      video.stop = function () {
            options.source.pause();
            options.source.currentTime = 0;
      };

      video.pause = function () {
            options.source.pause();
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

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(69);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"69":69,"97":97}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(71);

var _container2 = _interopRequireDefault(_container);

var _square = require(79);

var _square2 = _interopRequireDefault(_square);

var _circle = require(70);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(78);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(76);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(75);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(72);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(74);

var _image2 = _interopRequireDefault(_image);

var _video = require(80);

var _video2 = _interopRequireDefault(_video);

var _path = require(77);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

},{"70":70,"71":71,"72":72,"74":74,"75":75,"76":76,"77":77,"78":78,"79":79,"80":80}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var filter = (0, _abstract_component2.default)();

    filter.view = _factory2.default.container();

    /* Public functions */
    function start() {
        _loop2.default.addAnimation(filter.handle);
    }

    function stop() {
        _loop2.default.removeAnimation(filter.handle);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
};

var _loop = require(99);

var _loop2 = _interopRequireDefault(_loop);

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_component = require(68);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"68":68,"81":81,"99":99}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children) {
    var abstractGroup = (0, _abstract_filter2.default)();

    abstractGroup.children = children ? children : [];

    abstractGroup.add = function (child) {
        abstractGroup.children.push(child);
        abstractGroup.refresh();
    };

    abstractGroup.remove = function (child) {
        abstractGroup.children.splice(abstractGroup.children.indexOf(child), 1);
        abstractGroup.refresh();
    };

    return abstractGroup;
};

var _abstract_filter = require(82);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"82":82}],84:[function(require,module,exports){
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

var _abstract_group = require(83);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(81);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"81":81,"83":83,"97":97}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'child', true);

    /* private vars */
    var child = options.child;

    /* callbacks */
    var onPropertyChange = function onPropertyChange() {
        filter.onPropertyChange();
        filter.sendEvent('property_change');
    };

    /* methods */
    filter.setChild = function (newChild) {
        if (child.removeEventListener) {
            child.removeEventListener('property_change', onPropertyChange);
        }
        child = newChild;
        if (child.addEventListener) {
            child.addEventListener('property_change', onPropertyChange);
        }
        filter.view.addChild(child.view);
    };

    filter.getChild = function () {
        return child;
    };

    /* init */
    filter.setChild(options.child);
    return filter;
};

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"97":97}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'interval', true);

    /* private vars */
    var filterTransition = (0, _transition_loop2.default)(options.interval, 0.5);

    /* Public methods */
    filter.start = function () {
        filterTransition.start(filter.handle);
    };

    filter.stop = function () {
        filterTransition.stop();
    };

    return filter;
};

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"102":102,"97":97}],87:[function(require,module,exports){
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

},{}],88:[function(require,module,exports){
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

},{}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};

},{}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(89);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"89":89}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(89);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return arc.getPoint(1);
  };

  arc.getLength = function () {
    return Math.abs(2 * Math.PI * arc.radius * (arc.degrees / 360));
  };

  arc.getPoint = function (progress) {
    var origin = { x: arc.start.x, y: arc.start.y };
    var partOfDegrees = arc.degrees * progress;

    if (arc.degrees < 0) {
      return {
        x: origin.x + arc.radius * Math.sin((0, _angle_to_radians2.default)(-partOfDegrees)),
        y: origin.y - arc.radius + arc.radius * Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
      };
    }

    return {
      x: origin.x + arc.radius * Math.sin((0, _angle_to_radians2.default)(partOfDegrees)),
      y: origin.y + arc.radius + arc.radius * -Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
    };
  };

  arc.subPaths = [arc];

  arc.getAngle = function (progress) {
    return (0, _angle_to_radians2.default)(arc.degrees * progress);
  };

  arc.getPartPath = function (progress) {
    var partOfDegrees = arc.degrees * progress;
    return arcConstructor({ start: arc.start, degrees: partOfDegrees, radius: arc.radius });
  };

  return arc;
}

},{"89":89,"97":97}],92:[function(require,module,exports){
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
    return bezierCurve.end;
  };

  bezierCurve.getLength = function () {
    return bezierCurve.internalBezier.length();
  };

  bezierCurve.getPoint = function (progress) {
    return bezierCurve.internalBezier.get(progress);
  };

  //TODO Add get part path function

  return bezierCurve;
};

var _bezierJs = require(103);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"97":97}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(96);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(88);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lineConstructor(options) {

  (0, _check_parameter2.default)(options, 'start', false, { x: 0, y: 0 });
  (0, _check_parameter2.default)(options, 'end', true);

  var line = {};
  line.start = options.start;
  line.end = options.end;
  line.type = 'line';

  line.getEdgePoint = function () {
    return line.end;
  };

  line.getLength = function () {
    return (0, _distance2.default)((0, _to_vector2.default)(line.start), (0, _to_vector2.default)(line.end));
  };

  line.getPoint = function (progress) {
    return {
      x: line.start.x + (line.end.x - line.start.x) * progress,
      y: line.start.y + (line.end.y - line.start.y) * progress
    };
  };

  line.getPartPath = function (progress) {
    var newEnd = { x: line.end.x * progress, y: line.end.y * progress };
    var pathPart = lineConstructor({ start: line.start, end: newEnd });
    return pathPart;
  };

  return line;
}

},{"88":88,"96":96,"97":97}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(87);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      for (var _iterator = path.subPaths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
      for (var _iterator2 = path.subPaths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
    var lengthPoint = progress * path.getLength();
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = path.subPaths[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var subPath = _step3.value;

        if (lengthPoint > subPath.getLength()) {
          lengthPoint -= subPath.getLength();
        } else {
          return (0, _add_up_points2.default)(subPath.getPoint(lengthPoint / subPath.getLength()), path.getStartPointOf(subPath));
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
      for (var _iterator4 = path.subPaths[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
    var lengthPoint = progress * path.getLength();
    var subPathsRetrieved = false;
    var currentPath = 0;

    while (!subPathsRetrieved) {
      if (lengthPoint > path.subPaths[currentPath].getLength()) {
        lengthPoint -= path.subPaths[currentPath].getLength();
        newSubPaths.push(path.subPaths[currentPath].getPartPath(1));
        currentPath = currentPath + 1;
      } else {
        newSubPaths.push(path.subPaths[currentPath].getPartPath(lengthPoint / path.subPaths[currentPath].getLength()));
        subPathsRetrieved = true;
      }
    }

    var partPath = pathConstructor();
    partPath.subPaths = newSubPaths;
    return partPath;
  };

  return path;
}

},{"87":87}],95:[function(require,module,exports){
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

},{}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};

},{}],97:[function(require,module,exports){
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

},{}],98:[function(require,module,exports){
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

},{}],99:[function(require,module,exports){
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

},{}],100:[function(require,module,exports){
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
    linearPulsar.pulsar.start(linearPulsar.handle);
  };

  linearPulsar.stop = function () {
    linearPulsar.pulsar.stop();
  };

  linearPulsar.handle = function (current) {
    (0, _set_prop2.default)(linearPulsar.subject, 'scale', 1 + current * (linearPulsar.limit - 1));
    linearPulsar.subject.draw();
  };

  return linearPulsar;
};

var _transition_loop = require(102);

var _check_parameter = require(97);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(98);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"102":102,"97":97,"98":98}],101:[function(require,module,exports){
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
    timer.currentTime += event.delta;

    while (timer.currentTime > timer.interval) {
      callListeners();
      timer.currentTime -= timer.interval;
    }
  };

  timer.addListener = function (listener) {
    timer.listeners.push(listener);
  };

  timer.removeListener = function (listener) {
    timer.listeners.splice(timer.listeners.indexOf(listener), 1);
  };

  timer.start = function () {
    _loop2.default.addAnimation(timer.handle);
  };

  timer.stop = function () {
    _loop2.default.removeAnimation(timer.handle);
  };

  function callListeners() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = timer.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  }

  return timer;
};

var _loop = require(99);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"99":99}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(99);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    pulsar.callback = callback;
    _loop2.default.addAnimation(pulsar.handle);
  };

  pulsar.stop = function () {
    _loop2.default.removeAnimation(pulsar.handle);
    pulsar.currentInterval = 0;
  };

  pulsar.handle = function (event) {
    pulsar.currentMseconds = pulsar.currentMseconds + event.delta;

    var lastCurrent = pulsar.current;
    pulsar.current = pulsar.calculateCurrent(pulsar.currentMseconds);
    pulsar.increase = lastCurrent < pulsar.current;
    if (pulsar.callback) {
      pulsar.callback(pulsar.current, event);
    }

    intervalPostProcessing();
  };

  pulsar.calculateCurrent = function (ms) {
    var relativeCurrent;
    if (pulsar.interval.type === 'ms') {
      relativeCurrent = ms / pulsar.interval.ms % 1;
    }
    if (pulsar.interval.type === 'bpm') {
      relativeCurrent = ms * pulsar.interval.bpm / 60000 % 1;
    }

    if (relativeCurrent <= pulsar.steepness) {
      return relativeCurrent / pulsar.steepness;
    } else {
      return 1 - (relativeCurrent - pulsar.steepness) / (1 - pulsar.steepness);
    }
  };

  pulsar.getRelativeCurrent = function (factor) {

    // First prepare the value which is passed to the calculateCurrent function:
    var factorInMs;
    if (pulsar.interval.type === 'ms') {
      factorInMs = factor * pulsar.interval.ms;
    }
    if (pulsar.interval.type === 'bpm') {
      factorInMs = factor * (60000 / pulsar.interval.bpm);
    }
    var msToCheck = factorInMs + pulsar.currentMseconds;

    if (msToCheck < 0) {
      if (pulsar.interval.type === 'ms') {
        msToCheck = msToCheck + pulsar.interval.ms * Math.ceil(Math.abs(msToCheck) / pulsar.interval.ms);
      }
      if (pulsar.interval.type === 'bpm') {
        msToCheck = msToCheck + 60000 / pulsar.interval.bpm * Math.ceil(Math.abs(msToCheck) / (60000 / pulsar.interval.bpm));
      }
    }

    return pulsar.calculateCurrent(msToCheck);
  };

  function intervalPostProcessing() {
    var currentInterval;
    if (pulsar.interval.type === 'ms') {
      currentInterval = Math.floor(pulsar.currentMseconds / pulsar.interval.ms);
    }
    if (pulsar.interval.type === 'bpm') {
      currentInterval = Math.floor(pulsar.currentMseconds * pulsar.interval.bpm / 60000);
    }
    if (pulsar.currentInterval < currentInterval) {
      pulsar.currentInterval = currentInterval;
      handleIntervalFinished();
    }
  }

  function handleIntervalFinished() {
    if (pulsar.numberOfIntervals > 0) {
      if (pulsar.currentInterval === pulsar.numberOfIntervals) {
        pulsar.stop();
      }
    }
    if (pulsar.onFinishedInterval) {
      pulsar.onFinishedInterval();
    }
  }

  return pulsar;
}

function risingTransition(time, current, numberOfIntervals, onFinishedInterval) {
  return transitionLoop(time, 1, current, numberOfIntervals, onFinishedInterval);
}

function pulsarTransition(time, current, numberOfIntervals, onFinishedInterval) {
  return transitionLoop(time, 0, current, numberOfIntervals, onFinishedInterval);
}

exports.default = transitionLoop;

},{"99":99}],103:[function(require,module,exports){
module.exports = require(104);

},{"104":104}],104:[function(require,module,exports){
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
  var utils = require(106);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(105);

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

},{"105":105,"106":106}],105:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(106);

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

},{"106":106}],106:[function(require,module,exports){
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
      var Bezier = require(104);
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

},{"104":104}],107:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(108)
var ieee754 = require(109)
var isArray = require(110)

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

},{"108":108,"109":109,"110":110}],108:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
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

},{}],109:[function(require,module,exports){
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

},{}],110:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],111:[function(require,module,exports){
/* MIT license */
var clone = require(112);
var convert = require(115);
var string = require(117);

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

},{"112":112,"115":115,"117":117}],112:[function(require,module,exports){
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

}).call(this,require(107).Buffer)

},{"107":107}],113:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(114);

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key].join()] = key;
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

convert.rgb.keyword = function (rgb) {
	return reverseKeywords[rgb.join()];
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

},{"114":114}],114:[function(require,module,exports){
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


},{}],115:[function(require,module,exports){
var conversions = require(113);
var route = require(116);

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

},{"113":113,"116":116}],116:[function(require,module,exports){
var conversions = require(113);

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


},{"113":113}],117:[function(require,module,exports){
/* MIT license */
var colorNames = require(118);

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

},{"118":118}],118:[function(require,module,exports){
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
},{}],119:[function(require,module,exports){
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

},{}]},{},[55])(55)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxiZXppZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3BvaW50X3NwaW5uZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcc3dpbmdpbmdfbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFx3YXZlLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxwYXRoX21hZ2ljLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxyYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcdHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxzcXVhcmVfZ3JvdXBfc3R1ZmYuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHpvb21fc3R1ZmZcXHpvb21fb3V0LmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFx6b29tX3N0dWZmXFx6b29tX3N0dWZmLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcYWJzdHJhY3Rfc2hhcGUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjaXJjbGUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjb250YWluZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjdXN0b21fb2JqZWN0LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcaGVscGVyXFxwYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGltYWdlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXG1haW5fY29udGFpbmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHJlY3RhbmdsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHNxdWFyZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHZpZGVvLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcZmFjdG9yeS5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxhYnN0cmFjdF9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxjZW50ZXJfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGdyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJhbmRvbV9jaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmFuZG9tX3JlY3RhbmdsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyZWN0YW5nbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcc3BpcmFsX2NpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxjZW50ZXJcXGNlbnRyYWxpemVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXG1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBhdGhcXHBhdGgtbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGFic3RyYWN0LW1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBvaW50MnBvaW50XFxsaW5lYXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhcl9zaGFrZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG9wYWNpdHlcXGZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmxhc2hlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXHJvdGF0b3JcXGxpbmVhcl9yb3RhdG9yLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxhcmMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aHMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxjaXJjbGUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxyZWN0YW5nbGUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxzaGFwZXMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxzcXVhcmUuanMiLCIudG1wXFxzY3JpcHRzXFxsb29wLmpzIiwiLnRtcFxcc2NyaXB0c1xcbWFpbi5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXGNvbG9yX2ZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxccmFuZG9tX2NvbG9yX2NoYW5nZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXG1vZGlmaWNhdG9ycy5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXHJhbmRvbV9hcmNfbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcYWJzdHJhY3RfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxkZWZhdWx0X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW5jcmVtZW50X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW50ZXJ2YWxfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxwcm94aWVzLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xccmFuZG9tX3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xcdGltZXJzXFxpbnRlcnZhbC5qcyIsImFwcFxcc2NyaXB0c1xcYWJzdHJhY3RfY29tcG9uZW50LmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9zaGFwZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY2lyY2xlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjb250YWluZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGN1c3RvbV9vYmplY3QuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGhlbHBlclxccGF0aF9kcmF3ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGltYWdlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxsaW5lLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxtYWluX2NvbnRhaW5lci5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccGF0aC5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccmVjdGFuZ2xlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxzcXVhcmUuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHZpZGVvLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiYXBwXFxzY3JpcHRzXFxmaWx0ZXJzXFxhYnN0cmFjdF9maWx0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxhYnN0cmFjdF9ncm91cC5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJlY3RhbmdsZV9ncm91cC5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcc2luZ2xlX2NoaWxkX2ZpbHRlci5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcdHJhbnNpdGlvbl9maWx0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxhZGRfdXBfcG9pbnRzLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcZGlzdGFuY2UuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGRlZ3JlZXNfdG9fY29vcmRpbmF0ZXMuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcYXJjLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsImFwcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxsaW5lLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGguanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxyb3RhdGVfcG9pbnQuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFx0b192ZWN0b3IuanMiLCJhcHBcXHNjcmlwdHNcXGludGVybmFsXFxjaGVja19wYXJhbWV0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGludGVybmFsXFxzZXRfcHJvcC5qcyIsImFwcFxcc2NyaXB0c1xcbG9vcC5qcyIsImFwcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxzY2FsZVxcbGluZWFyX3B1bHNhci5qcyIsImFwcFxcc2NyaXB0c1xcdGltZXJzXFxpbnRlcnZhbF90aW1lci5qcyIsImFwcFxcc2NyaXB0c1xcdHJhbnNpdGlvbnNcXHRyYW5zaXRpb25fbG9vcC5qcyIsIm5vZGVfbW9kdWxlcy9iZXppZXItanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi9iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi9wb2x5LWJlemllci5qcyIsIm5vZGVfbW9kdWxlcy9iZXppZXItanMvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2Nsb25lL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2Nzcy1rZXl3b3Jkcy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbmRvbUNvbG9yL3JhbmRvbUNvbG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSSxjQUFjLFFBQVEseUJBQVIsQ0FBbEI7O0FBRUEsSUFBSSxlQUFlLHVCQUF1QixXQUF2QixDQUFuQjs7QUFFQSxJQUFJLHNCQUFzQixRQUFRLHlDQUFSLENBQTFCOztBQUVBLElBQUksdUJBQXVCLHVCQUF1QixtQkFBdkIsQ0FBM0I7O0FBRUEsSUFBSSxjQUFjLFFBQVEseUJBQVIsQ0FBbEI7O0FBRUEsSUFBSSxlQUFlLHVCQUF1QixXQUF2QixDQUFuQjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsUUFBUSxPQUFSLEdBQWtCO0FBQ2hCLGFBQVcsYUFBYSxPQURSO0FBRWhCLG9CQUFrQixxQkFBcUIsT0FGdkI7QUFHaEIsYUFBVyxhQUFhO0FBSFIsQ0FBbEI7QUFLQTs7O0FDekJBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksaUJBQWlCLFFBQVEsaUJBQVIsQ0FBckI7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksU0FBUyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxJQUFJLFVBQVUsdUJBQXVCLE1BQXZCLENBQWQ7O0FBRUEsSUFBSSxRQUFRLFFBQVEsUUFBUixDQUFaOztBQUVBLElBQUksU0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3dkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3R3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcGF0aF9tYWdpYyA9IHJlcXVpcmUoJy4vcGF0aF9tYWdpYy9wYXRoX21hZ2ljJyk7XG5cbnZhciBfcGF0aF9tYWdpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX21hZ2ljKTtcblxudmFyIF9zcXVhcmVfZ3JvdXBfc3R1ZmYgPSByZXF1aXJlKCcuL3NxdWFyZV9ncm91cF9zdHVmZi9zcXVhcmVfZ3JvdXBfc3R1ZmYnKTtcblxudmFyIF9zcXVhcmVfZ3JvdXBfc3R1ZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlX2dyb3VwX3N0dWZmKTtcblxudmFyIF96b29tX3N0dWZmID0gcmVxdWlyZSgnLi96b29tX3N0dWZmL3pvb21fc3R1ZmYnKTtcblxudmFyIF96b29tX3N0dWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3pvb21fc3R1ZmYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHBhdGhNYWdpYzogX3BhdGhfbWFnaWMyLmRlZmF1bHQsXG4gIHNxdWFyZUdyb3VwU3R1ZmY6IF9zcXVhcmVfZ3JvdXBfc3R1ZmYyLmRlZmF1bHQsXG4gIHpvb21TdHVmZjogX3pvb21fc3R1ZmYyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NpdGlvbnMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3dpbmdpbmdfbGluZSA9IHJlcXVpcmUoJy4vc3dpbmdpbmdfbGluZScpO1xuXG52YXIgX3N3aW5naW5nX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3dpbmdpbmdfbGluZSk7XG5cbnZhciBfY3VydmUgPSByZXF1aXJlKCcuL2N1cnZlJyk7XG5cbnZhciBfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VydmUpO1xuXG52YXIgX3dhdmUgPSByZXF1aXJlKCcuL3dhdmUnKTtcblxudmFyIF93YXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhdmUpO1xuXG52YXIgX2Nwb2ludF9zcGlubmVyID0gcmVxdWlyZSgnLi9jcG9pbnRfc3Bpbm5lcicpO1xuXG52YXIgX2Nwb2ludF9zcGlubmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nwb2ludF9zcGlubmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzd2luZ2luZ0xpbmU6IF9zd2luZ2luZ19saW5lMi5kZWZhdWx0LFxuICBjdXJ2ZTogX2N1cnZlMi5kZWZhdWx0LFxuICBjcG9pbnRTcGlubmVyOiBfY3BvaW50X3NwaW5uZXIyLmRlZmF1bHQsXG4gIHdhdmU6IF93YXZlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmV6aWVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aW1lJywgdHJ1ZSk7XG5cbiAgc3dpbmdMaW5lLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBzd2luZ0xpbmUucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gIHN3aW5nTGluZS50aW1lID0gb3B0aW9ucy50aW1lO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDEpO1xuICBzd2luZ0xpbmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzd2luZ0xpbmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgLSBzd2luZ0xpbmUucmFkaXVzLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBzd2luZ0xpbmUucmFkaXVzLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSAoMCwgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMyLmRlZmF1bHQpKGN1cnJlbnQgKiAzNjAsIHN3aW5nTGluZS5yYWRpdXMpO1xuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gc3dpbmdMaW5lLmxlbmd0aCAvIDIgLSBjb29yZGluYXRlcy54O1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAtY29vcmRpbmF0ZXMueTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi54ID0gc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBjb29yZGluYXRlcy54O1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSBjb29yZGluYXRlcy55O1xuICAgIHN3aW5nTGluZS5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHN3aW5nTGluZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfZGVncmVlc190b19jb29yZGluYXRlcyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvaGVscGVyL2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMnKTtcblxudmFyIF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcG9pbnRfc3Bpbm5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHN3aW5nTGluZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1wbGl0dWRlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBzd2luZ0xpbmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHN3aW5nTGluZS50aW1lLCAwLjUpO1xuICBzd2luZ0xpbmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzd2luZ0xpbmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogMCwgeTogMCB9LCBjcG9pbnQyOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuZW5kLnkgPSAoY3VycmVudCAtIDAuNSkgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnggPSBNYXRoLmFicyhjdXJyZW50IC0gMC41KSAqIHN3aW5nTGluZS5sZW5ndGg7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDIueCA9IChNYXRoLmFicyhjdXJyZW50IC0gMC41KSArIDAuNSkgKiBzd2luZ0xpbmUubGVuZ3RoO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSAoY3VycmVudCAtIDAuNSkgLyAyICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXJ2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHN3aW5nTGluZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1wbGl0dWRlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBzd2luZ0xpbmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHN3aW5nTGluZS50aW1lLCAwLjUpO1xuICBzd2luZ0xpbmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzd2luZ0xpbmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIsIHk6IDAgfSB9KTtcbiAgc3dpbmdMaW5lLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IHN3aW5nTGluZS5iZXppZXJDdXJ2ZSB9KTtcblxuICBzd2luZ0xpbmUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpbmdMaW5lLnB1bHNhci5zdGFydChzd2luZ0xpbmUuaGFuZGxlKTtcbiAgICBzd2luZ0xpbmUudmlldy5hZGRDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpbmdMaW5lLnB1bHNhci5zdG9wKCk7XG4gICAgc3dpbmdMaW5lLnZpZXcucmVtb3ZlQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAoY3VycmVudCAtIDAuNSkgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHN3aW5nTGluZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aW5naW5nX2xpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0cmV0Y2gnLCBmYWxzZSwgMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcbiAgc3dpbmdMaW5lLnN0cmV0Y2ggPSBvcHRpb25zLnN0cmV0Y2g7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyIC0gc3dpbmdMaW5lLnN0cmV0Y2gsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiArIHN3aW5nTGluZS5zdHJldGNoLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuZW5kLnkgPSAoY3VycmVudCAtIDAuNSkgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSAoc3dpbmdMaW5lLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuMjUpIC0gMC41KSAqIDEuNSAqIHN3aW5nTGluZS5hbXBsaXR1ZGU7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDEueSA9IChzd2luZ0xpbmUucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC41KSAtIDAuNSkgKiAxLjUgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5zdGFydC55ID0gKHN3aW5nTGluZS5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjc1KSAtIDAuNSkgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHN3aW5nTGluZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhdmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHJhbnNpdGlvbl9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vdHJhbnNpdGlvbl9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9wYXRoX2RyYXdlcik7XG5cbnZhciBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2JlemllciA9IHJlcXVpcmUoJy4vYmV6aWVyL2JlemllcicpO1xuXG52YXIgX2JlemllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRyYW5zaXRpb25QYXRoRHJhd2VyOiBfdHJhbnNpdGlvbl9wYXRoX2RyYXdlcjIuZGVmYXVsdCxcbiAgcmFuZG9tUGFydFBhdGhEcmF3ZXI6IF9yYW5kb21fcGFydF9wYXRoX2RyYXdlcjIuZGVmYXVsdCxcbiAgYmV6aWVyOiBfYmV6aWVyMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aF9tYWdpYy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHBhdGhEcmF3ZXIgPSB7fTtcblxuICAvLyBIYW5kbGUgcGFyYW1ldGVyczpcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aE9wdGlvbnMnLCBmYWxzZSwge30pO1xuICBwYXRoRHJhd2VyLnBhdGggPSBvcHRpb25zLnBhdGg7XG4gIG9wdGlvbnMucGF0aE9wdGlvbnMucGF0aCA9IHBhdGhEcmF3ZXIucGF0aDtcblxuICAvLyBJbml0XG4gIHBhdGhEcmF3ZXIucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKG9wdGlvbnMucGF0aE9wdGlvbnMpO1xuICBwYXRoRHJhd2VyLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBwYXRoRHJhd2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbihwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LmFkZENoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LnJlbW92ZUNoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5jb21wbGV0ZVBhdGggPSBwYXRoRHJhd2VyLnBhdGguZ2V0UGFydFBhdGgoTWF0aC5yYW5kb20oKSk7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhEcmF3ZXI7XG59O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgcGF0aERyYXdlciA9IHt9O1xuXG4gIC8vIEhhbmRsZSBQYXJhbWV0ZXJzXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGhPcHRpb25zJywgdHJ1ZSk7XG4gIG9wdGlvbnMucGF0aE9wdGlvbnMucGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgcGF0aERyYXdlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIC8vIEluaXRcbiAgcGF0aERyYXdlci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoMTAwMCwgMSk7XG4gIHBhdGhEcmF3ZXIucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKG9wdGlvbnMucGF0aE9wdGlvbnMpO1xuICBwYXRoRHJhd2VyLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBwYXRoRHJhd2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucHVsc2FyLnN0YXJ0KHBhdGhEcmF3ZXIuaGFuZGxlKTtcbiAgICBwYXRoRHJhd2VyLnZpZXcuYWRkQ2hpbGQocGF0aERyYXdlci5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGF0aERyYXdlci5wdWxzYXIuc3RvcCgpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5yZW1vdmVDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBwYXRoRHJhd2VyLnBhdGhWaWV3LmNvbXBsZXRlUGF0aCA9IHBhdGhEcmF3ZXIucGF0aC5nZXRQYXJ0UGF0aChjdXJyZW50KTtcbiAgICBwYXRoRHJhd2VyLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcGF0aERyYXdlcjtcbn07XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uX3BhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgcmFuZG9tS2Fyb1N3aXRjaCA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Zpc2libGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgZmFsc2UsIFtdKTtcblxuICB2YXIgZ3JvdXAgPSAoMCwgX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCkoeyAnY2hpbGRyZW4nOiBvcHRpb25zLmNoaWxkcmVuLCAnY29sdW1ucyc6IG9wdGlvbnMuY29sdW1ucywgJ3NwYWNpbmcnOiBvcHRpb25zLnNwYWNpbmcgfSk7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC52aWV3ID0gZ3JvdXAudmlldztcblxuICByYW5kb21LYXJvU3dpdGNoLnN3aXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmFuZG9tTnVtYmVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgcmFuZG9tTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgICBzaHVmZmxlKHJhbmRvbU51bWJlcnMpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGogPCBvcHRpb25zLnZpc2libGUpIHtcbiAgICAgICAgZ3JvdXAuY2hpbGRyZW5bcmFuZG9tTnVtYmVyc1tqXV0udmlldy5hbHBoYSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncm91cC5jaGlsZHJlbltyYW5kb21OdW1iZXJzW2pdXS52aWV3LmFscGhhID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgZm9yICh2YXIgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICB2YXIgX3JlZiA9IFthW2pdLCBhW2kgLSAxXV07XG4gICAgICBhW2kgLSAxXSA9IF9yZWZbMF07XG4gICAgICBhW2pdID0gX3JlZlsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFuZG9tS2Fyb1N3aXRjaDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvZ3JvdXAvcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZV9ncm91cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3N3aXRjaC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Zpc2libGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgZmFsc2UsIFtdKTtcblxuICB2YXIgZ3JvdXBTd2l0Y2ggPSAoMCwgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMi5kZWZhdWx0KShvcHRpb25zKTtcbiAgdmFyIGdyb3VwU3dpdGNoVGltZXIgPSAoMCwgX2ludGVydmFsX3RpbWVyMi5kZWZhdWx0KShvcHRpb25zLmludGVydmFsKTtcbiAgdmFyIHN3aXRjaEludGVydmFsID0ge307XG5cbiAgc3dpdGNoSW50ZXJ2YWwuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZ3JvdXBTd2l0Y2hUaW1lci5hZGRMaXN0ZW5lcihoYW5kbGUpO1xuICAgIGdyb3VwU3dpdGNoVGltZXIuc3RhcnQoKTtcbiAgfTtcblxuICBzd2l0Y2hJbnRlcnZhbC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGdyb3VwU3dpdGNoVGltZXIuc3RvcCgpO1xuICAgIGdyb3VwU3dpdGNoVGltZXIucmVtb3ZlTGlzdGVuZXIoaGFuZGxlKTtcbiAgfTtcblxuICBzd2l0Y2hJbnRlcnZhbC52aWV3ID0gZ3JvdXBTd2l0Y2gudmlldztcblxuICBmdW5jdGlvbiBoYW5kbGUoKSB7XG4gICAgZ3JvdXBTd2l0Y2guc3dpdGNoKCk7XG4gIH1cblxuICByZXR1cm4gc3dpdGNoSW50ZXJ2YWw7XG59O1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3N3aXRjaCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfc3dpdGNoKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90aW1lcnMvaW50ZXJ2YWxfdGltZXInKTtcblxudmFyIF9pbnRlcnZhbF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF90aW1lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2gnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaCk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwgPSByZXF1aXJlKCcuL3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsJyk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJhbmRvbVNxdWFyZVN3aXRjaDogX3JhbmRvbV9zcXVhcmVfc3dpdGNoMi5kZWZhdWx0LFxuICByYW5kb21TcXVhcmVTd2l0Y2hJbnRlcnZhbDogX3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlX2dyb3VwX3N0dWZmLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgb3B0aW9ucy5udW1iZXJPZkludGVydmFscyA9IDE7XG4gIG9wdGlvbnMubGltaXQgPSAwO1xuICBvcHRpb25zLnJpc2luZyA9IHRydWU7XG4gIG9wdGlvbnMuY2VudGVySWZQb3NzaWJsZSA9IHRydWU7XG4gIHZhciB6b29tZXIgPSAoMCwgX2xpbmVhcl9wdWxzYXIyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG4gIHZhciB6b29tT3V0ID0ge307XG4gIHpvb21PdXQuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgem9vbWVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgem9vbU91dC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHpvb21lci5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIHpvb21PdXQ7XG59O1xuXG52YXIgX2xpbmVhcl9wdWxzYXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9zY2FsZS9saW5lYXJfcHVsc2FyJyk7XG5cbnZhciBfbGluZWFyX3B1bHNhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcHVsc2FyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbV9vdXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfem9vbV9vdXQgPSByZXF1aXJlKCcuL3pvb21fb3V0Jyk7XG5cbnZhciBfem9vbV9vdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbV9vdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHpvb21PdXQ6IF96b29tX291dDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb21fc3R1ZmYuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgICAgdmFyIGNvbXBvbmVudCA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgY29tcG9uZW50LnZpZXcgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICAgIGNvbXBvbmVudC5zY2FsZSA9IDE7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9zaGFwZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2lyY2xlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgICB2YXIgY2lyY2xlID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgLyogcHVibGljIHByb3BlcnRpZXMgKi9cbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XG4gICAgICBjaXJjbGUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgY2lyY2xlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaXJjbGUudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgY2lyY2xlLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKGNpcmNsZS5jb2xvcikuZHJhd0NpcmNsZSgwLCAwLCBjaXJjbGUuY2lyY2xlU2hhcGUucmFkaXVzICogY2lyY2xlLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIGNpcmNsZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjaXJjbGUuY2lyY2xlU2hhcGUucmFkaXVzICogY2lyY2xlLnNjYWxlICogMjtcbiAgICAgIH07XG5cbiAgICAgIGNpcmNsZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2lyY2xlLmNpcmNsZVNoYXBlLnJhZGl1cyAqIGNpcmNsZS5zY2FsZSAqIDI7XG4gICAgICB9O1xuXG4gICAgICAvKiBpbml0ICovXG4gICAgICBjaXJjbGUuZHJhdygpO1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBjcmVhdGVqcy5Db250YWluZXIoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250YWluZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgdmFyIGN1c3RvbSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3VzdG9tU2hhcGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuICBjdXN0b20uY3VzdG9tU2hhcGUgPSBvcHRpb25zLmN1c3RvbVNoYXBlO1xuICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKGN1c3RvbS5jb2xvcikuYmVnaW5TdHJva2UoJyMwMEYnKS5tb3ZlVG8oMCwgMCk7XG4gICAgdmFyIGN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gY3VzdG9tLmN1c3RvbVNoYXBlLnBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjdXN0b20uZHJhdygpO1xuICByZXR1cm4gY3VzdG9tO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL2hlbHBlci9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhfZHJhd2VyKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJyk7XG5cbnZhciBfYWRkX3VwX3BvaW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRfdXBfcG9pbnRzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tX29iamVjdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlKi9cbmZ1bmN0aW9uIHBhdGhEcmF3ZXIoKSB7fVxuXG5wYXRoRHJhd2VyLmxpbmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubGluZVRvKGN1cnJlbnQueCArIHBhdGguZ2V0RWRnZVBvaW50KCkueCwgY3VycmVudC55ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS55KTtcbn07XG5cbnBhdGhEcmF3ZXIuYXJjID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGlmIChwYXRoLmRlZ3JlZXMgPCAwKSB7XG4gICAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55IC0gcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKDkwKSwgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSg5MCArIHBhdGguZGVncmVlcyksIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIGdyYXBoaWNzLmFyYyhwYXRoLnN0YXJ0LngsIHBhdGguc3RhcnQueSArIHBhdGgucmFkaXVzLCBwYXRoLnJhZGl1cywgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSgtOTApLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhdGguZGVncmVlcyAtIDkwKSk7XG4gIH1cbn07XG5cbnBhdGhEcmF3ZXIuc2luZV93YXZlID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGZvciAodmFyIHggPSAwOyB4IDwgcGF0aC5nZXRMZW5ndGgoKTsgeCArPSA1KSB7XG4gICAgdmFyIHBvaW50ID0gcGF0aC5nZXRQb2ludCh4IC8gcGF0aC5nZXRMZW5ndGgoKSk7XG4gICAgZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9XG59O1xuXG5wYXRoRHJhd2VyLmJlemllcl9jdXJ2ZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBpZiAocGF0aC5jcG9pbnQyKSB7XG4gICAgZ3JhcGhpY3MuYmV6aWVyQ3VydmVUbyhwYXRoLmNwb2ludDEueCwgcGF0aC5jcG9pbnQxLnksIHBhdGguY3BvaW50Mi54LCBwYXRoLmNwb2ludDIueSwgcGF0aC5lbmQueCwgcGF0aC5lbmQueSk7XG4gIH0gZWxzZSB7XG4gICAgZ3JhcGhpY3MucXVhZHJhdGljQ3VydmVUbyhwYXRoLmNwb2ludDEueCwgcGF0aC5jcG9pbnQxLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwYXRoRHJhd2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzb3VyY2UnLCB0cnVlKTtcblxuICB2YXIgaW1hZ2UgPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuICBpbWFnZS52aWV3ID0gbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSk7XG5cbiAgaW1hZ2UuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpbWFnZS52aWV3LnNjYWxlWCA9IGltYWdlLnNjYWxlO1xuICAgIGltYWdlLnZpZXcuc2NhbGVZID0gaW1hZ2Uuc2NhbGU7XG4gIH07XG5cbiAgaW1hZ2UuZHJhdygpO1xuICByZXR1cm4gaW1hZ2U7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIGxpbmUgPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xpbmVQYXRoJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RoaWNrbmVzcycsIGZhbHNlLCAxKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgbGluZS5wYXRoID0gb3B0aW9ucy5saW5lUGF0aDtcbiAgICAgIGxpbmUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgbGluZS50aGlja25lc3MgPSBvcHRpb25zLnRoaWNrbmVzcztcblxuICAgICAgbGluZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGluZS52aWV3LmdyYXBoaWNzLmNsZWFyKCkuYmVnaW5TdHJva2UobGluZS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUobGluZS50aGlja25lc3MgKiBsaW5lLnNjYWxlKS5tb3ZlVG8obGluZS5wYXRoLnN0YXJ0LnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguc3RhcnQueSAqIGxpbmUuc2NhbGUpLmxpbmVUbyhsaW5lLnBhdGguZW5kLnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguZW5kLnkgKiBsaW5lLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIGxpbmUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGxpbmUucGF0aC5lbmQueCAtIGxpbmUucGF0aC5zdGFydC54KSAqIGxpbmUuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAobGluZS5wYXRoLmVuZC55IC0gbGluZS5wYXRoLnN0YXJ0LnkpICogbGluZS5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIGxpbmUuZHJhdygpO1xuICAgICAgcmV0dXJuIGxpbmU7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShpZCk7XG5cbiAgICB2YXIgY29udGFpbmVyID0ge307XG5cbiAgICBjb250YWluZXIuYWRkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHN0YWdlLmFkZENoaWxkKGNoaWxkLnZpZXcpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIucmVtb3ZlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHN0YWdlLnJlbW92ZUNoaWxkKGNoaWxkLnZpZXcpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdGFnZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH07XG5cbiAgICBjb250YWluZXIuc3RhZ2UgPSBzdGFnZTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbl9jb250YWluZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCAxKTtcblxuICAgICAgdmFyIGN1c3RvbSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICBjdXN0b20uY29tcGxldGVQYXRoID0gb3B0aW9ucy5wYXRoO1xuICAgICAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGN1c3RvbS53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICAgIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKGN1c3RvbS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUoY3VzdG9tLndpZHRoKS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjdXN0b20uY29tcGxldGVQYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjdXN0b20uZHJhdygpO1xuICAgICAgcmV0dXJuIGN1c3RvbTtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9oZWxwZXIvcGF0aF9kcmF3ZXInKTtcblxudmFyIF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvYWRkX3VwX3BvaW50cycpO1xuXG52YXIgX2FkZF91cF9wb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkX3VwX3BvaW50cyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JlY3RhbmdsZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciByZWN0ID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgICAgIHJlY3Qud2lkdGggPSBvcHRpb25zLnJlY3RhbmdsZVNoYXBlLndpZHRoO1xuICAgICAgcmVjdC5oZWlnaHQgPSBvcHRpb25zLnJlY3RhbmdsZVNoYXBlLmhlaWdodDtcbiAgICAgIHJlY3QuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICByZWN0LmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWN0LnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHJlY3Qudmlldy5ncmFwaGljcy5iZWdpbkZpbGwocmVjdC5jb2xvcikuZHJhd1JlY3QoMCwgMCwgcmVjdC53aWR0aCAqIHJlY3Quc2NhbGUsIHJlY3QuaGVpZ2h0ICogcmVjdC5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICByZWN0LmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlY3Qud2lkdGggKiByZWN0LnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjdC5oZWlnaHQgKiByZWN0LnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5kcmF3KCk7XG4gICAgICByZXR1cm4gcmVjdDtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWN0YW5nbGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NxdWFyZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciBzcXVhcmUgPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuICAgICAgc3F1YXJlLnNxdWFyZVNoYXBlID0gb3B0aW9ucy5zcXVhcmVTaGFwZTtcbiAgICAgIHNxdWFyZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICAgIHNxdWFyZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3F1YXJlLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHNxdWFyZS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChzcXVhcmUuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHNxdWFyZS5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogc3F1YXJlLnNjYWxlLCBzcXVhcmUuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHNxdWFyZS5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3F1YXJlLnNxdWFyZVNoYXBlLnNpZGVsZW5ndGggKiBzcXVhcmUuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNxdWFyZS5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogc3F1YXJlLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgc3F1YXJlLmRyYXcoKTtcbiAgICAgIHJldHVybiBzcXVhcmU7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgLyogUGFyYW1ldGVycyAqL1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzb3VyY2UnLCB0cnVlKTtcbiAgICAgIC8vIElmIHRoZSBzb3VyY2UgaXMgYSBzdHJpbmcsIGNvbnZlcnQgaXQgdG8gYSB2aWRlb1xuICAgICAgaGFuZGxlVmlkZW9Tb3VyY2UoKTtcblxuICAgICAgLyogcHJpdmF0ZSB2YXJzICovXG4gICAgICB2YXIgdmlkZW8gPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuXG4gICAgICAvKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuICAgICAgdmlkZW8udmlldyA9IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgdmlkZW8uZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvLnZpZXcuc2NhbGVYID0gdmlkZW8uc2NhbGU7XG4gICAgICAgICAgICB2aWRlby52aWV3LnNjYWxlWSA9IHZpZGVvLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc291cmNlLnBsYXkoKTtcbiAgICAgIH07XG5cbiAgICAgIHZpZGVvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5zb3VyY2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgfTtcblxuICAgICAgLyogcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVZpZGVvU291cmNlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9wdGlvbnMuc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgICAgdmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9IHZpZGVvRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaW5pdCAqL1xuICAgICAgdmlkZW8uZHJhdygpO1xuICAgICAgcmV0dXJuIHZpZGVvO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZGVvLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX21haW5fY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJyk7XG5cbnZhciBfbWFpbl9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbl9jb250YWluZXIpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY3VzdG9tX29iamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0Jyk7XG5cbnZhciBfY3VzdG9tX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21fb2JqZWN0KTtcblxudmFyIF9pbWFnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbWFnZScpO1xuXG52YXIgX2ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlKTtcblxudmFyIF92aWRlbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlbycpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY29udGFpbmVyOiBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHQsXG4gICAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICAgIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICAgIGN1c3RvbU9iamVjdDogX2N1c3RvbV9vYmplY3QyLmRlZmF1bHQsXG4gICAgbWFpbkNvbnRhaW5lcjogX21haW5fY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIGltYWdlOiBfaW1hZ2UyLmRlZmF1bHQsXG4gICAgdmlkZW86IF92aWRlbzIuZGVmYXVsdCxcbiAgICBwYXRoOiBfcGF0aDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgdmFyIGFic3RyYWN0R3JvdXAgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcblxuICAgIGFic3RyYWN0R3JvdXAuY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgICBhYnN0cmFjdEdyb3VwLmFkZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBhYnN0cmFjdEdyb3VwLnJlZnJlc2goKTtcbiAgICB9O1xuXG4gICAgYWJzdHJhY3RHcm91cC5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5zcGxpY2UoYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSwgMSk7XG4gICAgICAgIGFic3RyYWN0R3JvdXAucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYWJzdHJhY3RHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIGZhbHNlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICB2YXIgY2VudGVyR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjZW50ZXJHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgY2VudGVyR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjZW50ZXJHcm91cC52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2VudGVyR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChjZW50ZXJHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcblxuICAgICAgICAgICAgaWYgKGNlbnRlckdyb3VwLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnggPSBjb250YWluZXIueCA9IChpICsgMSkgKiBjZW50ZXJHcm91cC53aWR0aCAvIChjZW50ZXJHcm91cC5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbnRlckdyb3VwLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci55ID0gY29udGFpbmVyLnggPSAoaSArIDEpICogY2VudGVyR3JvdXAuaGVpZ2h0IC8gKGNlbnRlckdyb3VwLmNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZW50ZXJHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2VudGVyR3JvdXAucmVmcmVzaCgpO1xuICAgIHJldHVybiBjZW50ZXJHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2VudGVyX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCBmYWxzZSwgMTApO1xuICAgIHZhciBjaXJjbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICAgIGNpcmNsZUdyb3VwLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cztcbiAgICAgICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGNpcmNsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfY2lyY2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vc3BpcmFsX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3NwaXJhbF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BpcmFsX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfY2VudGVyX2dyb3VwID0gcmVxdWlyZSgnLi9jZW50ZXJfZ3JvdXAnKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudGVyX2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGVHcm91cDogX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCxcbiAgcmFuZG9tUmVjdGFuZ2xlR3JvdXA6IF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICBjaXJjbGVHcm91cDogX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgc3BpcmFsQ2lyY2xlR3JvdXA6IF9zcGlyYWxfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21DaXJjbGVHcm91cDogX3JhbmRvbV9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNlbnRlckdyb3VwOiBfY2VudGVyX2dyb3VwMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYW5kb21SYW5nZScsIGZhbHNlLCAxMCk7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2lyY2xlR3JvdXAucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gICAgY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgPSBvcHRpb25zLnJhbmRvbVJhbmdlO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpcmNsZUdyb3VwLnJhbmRvbVJhbmdlIC0gY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgKiAwLjUpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgY2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjaXJjbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX2NpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCBmYWxzZSwgMTApO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgZmFsc2UsIDEwKTtcblxuICAgIHZhciByZWN0YW5nbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICAgIHJlY3RhbmdsZUdyb3VwLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICByZWN0YW5nbGVHcm91cC5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIHJlY3RhbmdsZUdyb3VwLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlY3RhbmdsZUdyb3VwLnZpZXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICAgICAgY29udGFpbmVyLnggPSBNYXRoLmZsb29yKHJlY3RhbmdsZUdyb3VwLndpZHRoICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb250YWluZXIueSA9IE1hdGguZmxvb3IocmVjdGFuZ2xlR3JvdXAuaGVpZ2h0ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAucmVmcmVzaCgpO1xuICAgIHJldHVybiByZWN0YW5nbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3JlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIGZhbHNlLCAzKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSwgMTApO1xuXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG5cbiAgICByZWN0YW5nbGVHcm91cC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmcgPSBvcHRpb25zLnNwYWNpbmc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIueCA9IGkgJSByZWN0YW5nbGVHcm91cC5jb2x1bW5zICogcmVjdGFuZ2xlR3JvdXAuc3BhY2luZztcbiAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKGkgLyByZWN0YW5nbGVHcm91cC5jb2x1bW5zKSAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XG4gICAgICAgIHJlY3RhbmdsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdGFuZ2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnRSYWRpdXMnLCBmYWxzZSwgMTApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZFJhZGl1cycsIGZhbHNlLCAxKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyb3VuZHMnLCBmYWxzZSwgMSk7XG5cbiAgdmFyIHNwaXJhbENpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzID0gb3B0aW9ucy5zdGFydFJhZGl1cztcbiAgc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzID0gb3B0aW9ucy5lbmRSYWRpdXM7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyA9IG9wdGlvbnMucm91bmRzO1xuXG4gIHZhciBhbmdsZSA9IDM2MCAqIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgdmFyIHJhZGl1c0luY3JlYXNlQW1vdW50ID0gKHNwaXJhbENpcmNsZUdyb3VwLmVuZFJhZGl1cyAtIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzKSAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgaW5uZXJDb250YWluZXIueSA9IC0oc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMgKyByYWRpdXNJbmNyZWFzZUFtb3VudCAqIGkpO1xuICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgc3BpcmFsQ2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIHNwaXJhbENpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGlyYWxfY2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG5cbiAgICB2YXIgY2VudGVyRmlsdGVyID0gKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKSwgb3B0aW9ucyk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjZW50ZXJGaWx0ZXIub25Qcm9wZXJ0eUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNlbnRlckZpbHRlci5nZXRDaGlsZCgpLmdldFdpZHRoKSB7XG4gICAgICAgICAgICBjZW50ZXJGaWx0ZXIudmlldy54ID0gb3B0aW9ucy53aWR0aCAvIDIgLSBjZW50ZXJGaWx0ZXIuZ2V0Q2hpbGQoKS5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VudGVyRmlsdGVyLmdldENoaWxkKCkuZ2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICBjZW50ZXJGaWx0ZXIudmlldy55ID0gb3B0aW9ucy5oZWlnaHQgLyAyIC0gY2VudGVyRmlsdGVyLmdldENoaWxkKCkuZ2V0SGVpZ2h0KCkgLyAyO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNlbnRlckZpbHRlci5vblByb3BlcnR5Q2hhbmdlKCk7XG4gICAgLyogcmV0dXJuICovXG4gICAgcmV0dXJuIGNlbnRlckZpbHRlcjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlbnRyYWxpemVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NlbnRyYWxpemVyID0gcmVxdWlyZSgnLi9jZW50ZXIvY2VudHJhbGl6ZXInKTtcblxudmFyIF9jZW50cmFsaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50cmFsaXplcik7XG5cbnZhciBfcGF0aE1vdmVyID0gcmVxdWlyZSgnLi9wYXRoL3BhdGgtbW92ZXInKTtcblxudmFyIF9wYXRoTW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aE1vdmVyKTtcblxudmFyIF9saW5lYXIgPSByZXF1aXJlKCcuL3BvaW50MnBvaW50L2xpbmVhcicpO1xuXG52YXIgX2xpbmVhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXIpO1xuXG52YXIgX2xpbmVhcl9zaGFrZSA9IHJlcXVpcmUoJy4vcG9pbnQycG9pbnQvbGluZWFyX3NoYWtlJyk7XG5cbnZhciBfbGluZWFyX3NoYWtlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9zaGFrZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgY2VudGVyOiB7XG4gICAgY2VudHJhbGl6ZXI6IF9jZW50cmFsaXplcjIuZGVmYXVsdFxuICB9LFxuICBwYXRoOiB7XG4gICAgcGF0aE1vdmVyOiBfcGF0aE1vdmVyMi5kZWZhdWx0XG4gIH0sXG4gIGxpbmVhcjoge1xuICAgIGxpbmVhcjogX2xpbmVhcjIuZGVmYXVsdCxcbiAgICBsaW5lYXJTaGFrZTogX2xpbmVhcl9zaGFrZTIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG5cbiAgdmFyIHBhdGhNb3ZlciA9ICgwLCBfdHJhbnNpdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcbiAgcGF0aE1vdmVyLnBhdGggPSBvcHRpb25zLnBhdGg7XG5cbiAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICBwYXRoTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB2YXIgcG9pbnQgPSBwYXRoTW92ZXIucGF0aC5nZXRQb2ludChjdXJyZW50KTtcbiAgICBwYXRoTW92ZXIudmlldy54ID0gcG9pbnQueDtcbiAgICBwYXRoTW92ZXIudmlldy55ID0gcG9pbnQueTtcbiAgfTtcblxuICByZXR1cm4gcGF0aE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC1tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZ29hbFBvaW50JywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydFBvaW50JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcblxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgIHZhciBwMlBNb3ZlciA9ICgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF90cmFuc2l0aW9uX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIC8qIFBhcmFtcyBhbmQgZGVmYXVsdHMgKi9cbiAgICBwMlBNb3Zlci5nb2FsUG9pbnQgPSBvcHRpb25zLmdvYWxQb2ludDtcbiAgICBwMlBNb3Zlci5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xuXG4gICAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICAgIHAyUE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHZhciBhbW91bnRYID0gKHAyUE1vdmVyLmdvYWxQb2ludC54IC0gcDJQTW92ZXIuc3RhcnRQb2ludC54KSAqIGN1cnJlbnQ7XG4gICAgICAgIHZhciBhbW91bnRZID0gKHAyUE1vdmVyLmdvYWxQb2ludC55IC0gcDJQTW92ZXIuc3RhcnRQb2ludC55KSAqIGN1cnJlbnQ7XG5cbiAgICAgICAgcDJQTW92ZXIudmlldy54ID0gcDJQTW92ZXIuc3RhcnRQb2ludC54ICsgYW1vdW50WDtcbiAgICAgICAgcDJQTW92ZXIudmlldy55ID0gcDJQTW92ZXIuc3RhcnRQb2ludC55ICsgYW1vdW50WTtcbiAgICB9O1xuXG4gICAgLyogSW5pdCAqL1xuXG4gICAgcmV0dXJuIHAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3QtbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfYWJzdHJhY3RNb3ZlcjIuZGVmYXVsdCkob3B0aW9ucyk7XG5cbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gICAgbGluZWFyUDJQTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIGFtb3VudFggPSAobGluZWFyUDJQTW92ZXIuZ29hbFBvaW50LnggLSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LngpICogY3VycmVudDtcbiAgICAgICAgdmFyIGFtb3VudFkgPSAobGluZWFyUDJQTW92ZXIuZ29hbFBvaW50LnkgLSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnkpICogY3VycmVudDtcblxuICAgICAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnggPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnggKyBhbW91bnRYO1xuICAgICAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnkgPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnkgKyBhbW91bnRZO1xuICAgIH07XG5cbiAgICByZXR1cm4gbGluZWFyUDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0TW92ZXIgPSByZXF1aXJlKCcuL2Fic3RyYWN0LW1vdmVyJyk7XG5cbnZhciBfYWJzdHJhY3RNb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdE1vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUEFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2hha2VGYWN0b3InLCBmYWxzZSwgMSk7XG5cbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICB2YXIgc2hha2VNb3ZlciA9ICgwLCBfYWJzdHJhY3RNb3ZlcjIuZGVmYXVsdCkob3B0aW9ucyk7XG5cbiAgICBzaGFrZU1vdmVyLnNoYWtlRmFjdG9yID0gb3B0aW9ucy5zaGFrZUZhY3RvcjtcblxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgICBzaGFrZU1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHZhciByYW5kb21GYWN0b3IgPSBNYXRoLnJhbmRvbSgpICogc2hha2VNb3Zlci5zaGFrZUZhY3RvciAtIHNoYWtlTW92ZXIuc2hha2VGYWN0b3IgLyAyO1xuICAgICAgICB2YXIgYW1vdW50WCA9IChzaGFrZU1vdmVyLmdvYWxQb2ludC54IC0gc2hha2VNb3Zlci5zdGFydFBvaW50LnggKyByYW5kb21GYWN0b3IpICogY3VycmVudDtcbiAgICAgICAgdmFyIGFtb3VudFkgPSAoc2hha2VNb3Zlci5nb2FsUG9pbnQueSAtIHNoYWtlTW92ZXIuc3RhcnRQb2ludC55ICsgcmFuZG9tRmFjdG9yKSAqIGN1cnJlbnQ7XG5cbiAgICAgICAgc2hha2VNb3Zlci52aWV3LnggPSBzaGFrZU1vdmVyLnN0YXJ0UG9pbnQueCArIGFtb3VudFg7XG4gICAgICAgIHNoYWtlTW92ZXIudmlldy55ID0gc2hha2VNb3Zlci5zdGFydFBvaW50LnkgKyBhbW91bnRZO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2hha2VNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RNb3ZlciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtbW92ZXInKTtcblxudmFyIF9hYnN0cmFjdE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0TW92ZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfc2hha2UuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgZmFsc2UsIDEwMDApO1xuXG4gICAgdmFyIGZhZGVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG4gICAgZmFkZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICAgIGZhZGVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShmYWRlci5zcGVlZCwgMC41KTtcblxuICAgIGZhZGVyLnZpZXcuYWRkQ2hpbGQob3B0aW9ucy5jaGlsZC52aWV3KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZShjdXJyZW50KSB7XG4gICAgICAgIGZhZGVyLnZpZXcuYWxwaGEgPSBjdXJyZW50O1xuICAgIH1cblxuICAgIGZhZGVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmYWRlci5wdWxzYXIuc3RhcnQoaGFuZGxlKTtcbiAgICB9O1xuXG4gICAgZmFkZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmFkZXIucHVsc2FyLnN0b3AoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhZGVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcblxuICAgIHZhciBmbGFzaGVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgICBmbGFzaGVyLnZpZXcuYWRkQ2hpbGQob3B0aW9ucy5jaGlsZC52aWV3KTtcbiAgICBmbGFzaGVyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmxhc2hlci52aWV3LnZpc2libGUgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xuICAgIH07XG5cbiAgICByZXR1cm4gZmxhc2hlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbGFzaGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIGZhbHNlLCAxKTtcbiAgdmFyIGxpbmVhclJvdGF0b3IgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcbiAgbGluZWFyUm90YXRvci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGxpbmVhclJvdGF0b3Iudmlldy5hZGRDaGlsZChvcHRpb25zLmNoaWxkLnZpZXcpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIGxpbmVhclJvdGF0b3Iudmlldy5yb3RhdGlvbiA9IGxpbmVhclJvdGF0b3Iudmlldy5yb3RhdGlvbiArIGxpbmVhclJvdGF0b3Iuc3BlZWQgKiAoZXZlbnQuZGVsdGEgLyAxMDAwKTtcbiAgfVxuXG4gIGxpbmVhclJvdGF0b3IuaGFuZGxlID0gaGFuZGxlO1xuXG4gIHJldHVybiBsaW5lYXJSb3RhdG9yO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9yb3RhdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXJjQ29uc3RydWN0b3I7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFyY0NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAvLyBQYXJhbWV0ZXJzXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2RlZ3JlZXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcblxuICAvLyBwcml2YXRlIHZhcnNcbiAgdmFyIGFyYyA9IHt9O1xuXG4gIGFyYy5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gIGFyYy5kZWdyZWVzID0gb3B0aW9ucy5kZWdyZWVzO1xuICBhcmMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gIGFyYy50eXBlID0gJ2FyYyc7XG5cbiAgLy8gcHVibGljIGZ1bmN0aW9uc1xuICBhcmMuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmMuZ2V0UG9pbnQoMSk7XG4gIH07XG5cbiAgYXJjLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoMiAqIE1hdGguUEkgKiBhcmMucmFkaXVzICogKGFyYy5kZWdyZWVzIC8gMzYwKSk7XG4gIH07XG5cbiAgYXJjLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG9yaWdpbiA9IHsgeDogYXJjLnN0YXJ0LngsIHk6IGFyYy5zdGFydC55IH07XG4gICAgdmFyIHBhcnRPZkRlZ3JlZXMgPSBhcmMuZGVncmVlcyAqIHByb2dyZXNzO1xuXG4gICAgaWYgKGFyYy5kZWdyZWVzIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogb3JpZ2luLnggKyBhcmMucmFkaXVzICogTWF0aC5zaW4oKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSgtcGFydE9mRGVncmVlcykpLFxuICAgICAgICB5OiBvcmlnaW4ueSAtIGFyYy5yYWRpdXMgKyBhcmMucmFkaXVzICogTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9yaWdpbi54ICsgYXJjLnJhZGl1cyAqIE1hdGguc2luKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGFydE9mRGVncmVlcykpLFxuICAgICAgeTogb3JpZ2luLnkgKyBhcmMucmFkaXVzICsgYXJjLnJhZGl1cyAqIC1NYXRoLmNvcygoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhcnRPZkRlZ3JlZXMpKVxuICAgIH07XG4gIH07XG5cbiAgYXJjLnN1YlBhdGhzID0gW2FyY107XG5cbiAgYXJjLmdldEFuZ2xlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcyk7XG4gIH07XG5cbiAgYXJjLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHBhcnRPZkRlZ3JlZXMgPSBhcmMuZGVncmVlcyAqIHByb2dyZXNzO1xuICAgIHJldHVybiBhcmNDb25zdHJ1Y3Rvcih7IHN0YXJ0OiBhcmMuc3RhcnQsIGRlZ3JlZXM6IHBhcnRPZkRlZ3JlZXMsIHJhZGl1czogYXJjLnJhZGl1cyB9KTtcbiAgfTtcblxuICByZXR1cm4gYXJjO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJjLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Nwb2ludDEnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjcG9pbnQyJywgZmFsc2UpO1xuXG4gIHZhciBiZXppZXJDdXJ2ZSA9IHt9O1xuICBiZXppZXJDdXJ2ZS5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gIGJlemllckN1cnZlLmVuZCA9IG9wdGlvbnMuZW5kO1xuICBiZXppZXJDdXJ2ZS5jcG9pbnQxID0gb3B0aW9ucy5jcG9pbnQxO1xuICBiZXppZXJDdXJ2ZS5jcG9pbnQyID0gb3B0aW9ucy5jcG9pbnQyO1xuICBiZXppZXJDdXJ2ZS50eXBlID0gJ2Jlemllcl9jdXJ2ZSc7XG5cbiAgaWYgKGJlemllckN1cnZlLmNwb2ludDIpIHtcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBfYmV6aWVySnMyLmRlZmF1bHQoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmNwb2ludDIsIGJlemllckN1cnZlLmVuZCk7XG4gIH0gZWxzZSB7XG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgX2JlemllckpzMi5kZWZhdWx0KGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5lbmQpO1xuICB9XG5cbiAgYmV6aWVyQ3VydmUuc3ViUGF0aHMgPSBbYmV6aWVyQ3VydmVdO1xuXG4gIGJlemllckN1cnZlLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYmV6aWVyQ3VydmUuZW5kO1xuICB9O1xuXG4gIGJlemllckN1cnZlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIubGVuZ3RoKCk7XG4gIH07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIuZ2V0KHByb2dyZXNzKTtcbiAgfTtcblxuICAvL1RPRE8gQWRkIGdldCBwYXJ0IHBhdGggZnVuY3Rpb25cblxuICByZXR1cm4gYmV6aWVyQ3VydmU7XG59O1xuXG52YXIgX2JlemllckpzID0gcmVxdWlyZSgnYmV6aWVyLWpzJyk7XG5cbnZhciBfYmV6aWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVySnMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXppZXJfY3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5lQ29uc3RydWN0b3I7XG5cbnZhciBfdG9fdmVjdG9yID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS90b192ZWN0b3InKTtcblxudmFyIF90b192ZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9fdmVjdG9yKTtcblxudmFyIF9kaXN0YW5jZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvZGlzdGFuY2UnKTtcblxudmFyIF9kaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXN0YW5jZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbGluZUNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcblxuICB2YXIgbGluZSA9IHt9O1xuICBsaW5lLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgbGluZS5lbmQgPSBvcHRpb25zLmVuZDtcbiAgbGluZS50eXBlID0gJ2xpbmUnO1xuXG4gIGxpbmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsaW5lLmVuZDtcbiAgfTtcblxuICBsaW5lLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkoKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKGxpbmUuc3RhcnQpLCAoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkobGluZS5lbmQpKTtcbiAgfTtcblxuICBsaW5lLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGxpbmUuc3RhcnQueCArIChsaW5lLmVuZC54IC0gbGluZS5zdGFydC54KSAqIHByb2dyZXNzLFxuICAgICAgeTogbGluZS5zdGFydC55ICsgKGxpbmUuZW5kLnkgLSBsaW5lLnN0YXJ0LnkpICogcHJvZ3Jlc3NcbiAgICB9O1xuICB9O1xuXG4gIGxpbmUuZ2V0UGFydFBhdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbmV3RW5kID0geyB4OiBsaW5lLmVuZC54ICogcHJvZ3Jlc3MsIHk6IGxpbmUuZW5kLnkgKiBwcm9ncmVzcyB9O1xuICAgIHZhciBwYXRoUGFydCA9IGxpbmVDb25zdHJ1Y3Rvcih7IHN0YXJ0OiBsaW5lLnN0YXJ0LCBlbmQ6IG5ld0VuZCB9KTtcbiAgICByZXR1cm4gcGF0aFBhcnQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aENvbnN0cnVjdG9yO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXRoQ29uc3RydWN0b3IoKSB7XG5cbiAgdmFyIHBhdGggPSB7fTtcblxuICBwYXRoLnN1YlBhdGhzID0gW107XG5cbiAgcGF0aC5nZXRFZGdlUG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlZGdlUG9pbnRzID0gW107XG4gICAgZWRnZVBvaW50cy5wdXNoKHsgeDogMCwgeTogMCB9KTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBzdWJQYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgZWRnZVBvaW50cy5wdXNoKCgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoZWRnZVBvaW50c1tlZGdlUG9pbnRzLmxlbmd0aCAtIDFdLCBzdWJQYXRoLmdldEVkZ2VQb2ludCgpKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQb2ludHM7XG4gIH07XG5cbiAgcGF0aC5nZXRTdGFydFBvaW50T2YgPSBmdW5jdGlvbiAoc3ViUGF0aCkge1xuICAgIHZhciBzdGFydFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBwYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICBpZiAoY3VycmVudFBhdGggPT09IHN1YlBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRQb2ludDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFBvaW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdGFydFBvaW50LCBjdXJyZW50UGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICBpZiAobGVuZ3RoUG9pbnQgPiBzdWJQYXRoLmdldExlbmd0aCgpKSB7XG4gICAgICAgICAgbGVuZ3RoUG9pbnQgLT0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdWJQYXRoLmdldFBvaW50KGxlbmd0aFBvaW50IC8gc3ViUGF0aC5nZXRMZW5ndGgoKSksIHBhdGguZ2V0U3RhcnRQb2ludE9mKHN1YlBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGF0aC5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICBsZW5ndGggKz0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjQgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgJiYgX2l0ZXJhdG9yNC5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICBwYXRoLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG5ld1N1YlBhdGhzID0gW107XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xuICAgIHZhciBzdWJQYXRoc1JldHJpZXZlZCA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50UGF0aCA9IDA7XG5cbiAgICB3aGlsZSAoIXN1YlBhdGhzUmV0cmlldmVkKSB7XG4gICAgICBpZiAobGVuZ3RoUG9pbnQgPiBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZW5ndGhQb2ludCAtPSBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKTtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aCgxKSk7XG4gICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aChsZW5ndGhQb2ludCAvIHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSk7XG4gICAgICAgIHN1YlBhdGhzUmV0cmlldmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGFydFBhdGggPSBwYXRoQ29uc3RydWN0b3IoKTtcbiAgICBwYXJ0UGF0aC5zdWJQYXRocyA9IG5ld1N1YlBhdGhzO1xuICAgIHJldHVybiBwYXJ0UGF0aDtcbiAgfTtcblxuICByZXR1cm4gcGF0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFyYzogX2FyYzIuZGVmYXVsdCxcbiAgbGluZTogX2xpbmUyLmRlZmF1bHQsXG4gIHBhdGg6IF9wYXRoMi5kZWZhdWx0LFxuICBiZXppZXJDdXJ2ZTogX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XG5cbiAgdmFyIGNpcmNsZSA9IHt9O1xuICBjaXJjbGUucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG5cbiAgY2lyY2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIGNpcmNsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9hcmMyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogLWNpcmNsZS5yYWRpdXMgfSwgZGVncmVlczogMzYwLCByYWRpdXM6IGNpcmNsZS5yYWRpdXMgfSkpO1xuXG4gIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG5cbiAgdmFyIHJlY3RhbmdsZSA9IHt9O1xuICByZWN0YW5nbGUud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByZWN0YW5nbGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgcmVjdGFuZ2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogcmVjdGFuZ2xlLmhlaWdodCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogLXJlY3RhbmdsZS5oZWlnaHQgfSB9KSk7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGUgPSByZXF1aXJlKCcuL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vc3F1YXJlJyk7XG5cbnZhciBfc3F1YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZSk7XG5cbnZhciBfY2lyY2xlID0gcmVxdWlyZSgnLi9jaXJjbGUnKTtcblxudmFyIF9jaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGU6IF9yZWN0YW5nbGUyLmRlZmF1bHQsXG4gIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgY2lyY2xlOiBfY2lyY2xlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhcGVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2lkZWxlbmd0aCcsIHRydWUpO1xuXG4gIHZhciBzcXVhcmUgPSB7fTtcbiAgc3F1YXJlLnNpZGVsZW5ndGggPSBvcHRpb25zLnNpZGVsZW5ndGg7XG5cbiAgc3F1YXJlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiBzcXVhcmUuc2lkZWxlbmd0aCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiAtc3F1YXJlLnNpZGVsZW5ndGggfSB9KSk7XG5cbiAgcmV0dXJuIHNxdWFyZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWRkQW5pbWF0aW9uOiBmdW5jdGlvbiBhZGRBbmltYXRpb24oaGFuZGxlKSB7XG4gICAgY3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XG4gICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xuICB9LFxuICByZW1vdmVBbmltYXRpb246IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihoYW5kbGUpIHtcbiAgICBjcmVhdGVqcy5UaWNrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb29wLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2ZsYXNoZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvb3BhY2l0eS9mbGFzaGVyJyk7XG5cbnZhciBfZmxhc2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGFzaGVyKTtcblxudmFyIF9mYWRlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZhZGVyJyk7XG5cbnZhciBfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFkZXIpO1xuXG52YXIgX2dyb3VwID0gcmVxdWlyZSgnLi9maWx0ZXJzL2dyb3VwL2dyb3VwJyk7XG5cbnZhciBfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JvdXApO1xuXG52YXIgX21vdmVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL21vdmVyJyk7XG5cbnZhciBfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW92ZXIpO1xuXG52YXIgX2xpbmVhcl9yb3RhdG9yID0gcmVxdWlyZSgnLi9maWx0ZXJzL3JvdGF0b3IvbGluZWFyX3JvdGF0b3InKTtcblxudmFyIF9saW5lYXJfcm90YXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcm90YXRvcik7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9zaGFwZXMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3NoYXBlcy9zaGFwZXMnKTtcblxudmFyIF9zaGFwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhcGVzKTtcblxudmFyIF9wYXRocyA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcGF0aHMvcGF0aHMnKTtcblxudmFyIF9wYXRoczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRocyk7XG5cbnZhciBfY29tcG9zaXRpb25zID0gcmVxdWlyZSgnLi9jb21wb3NpdGlvbnMvY29tcG9zaXRpb25zJyk7XG5cbnZhciBfY29tcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0aW9ucyk7XG5cbnZhciBfcHJveGllcyA9IHJlcXVpcmUoJy4vcHJveGllcy9wcm94aWVzJyk7XG5cbnZhciBfcHJveGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm94aWVzKTtcblxudmFyIF9pbnRlcnZhbCA9IHJlcXVpcmUoJy4vdGltZXJzL2ludGVydmFsJyk7XG5cbnZhciBfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWwpO1xuXG52YXIgX21vZGlmaWNhdG9ycyA9IHJlcXVpcmUoJy4vbW9kaWZpY2F0b3JzL21vZGlmaWNhdG9ycycpO1xuXG52YXIgX21vZGlmaWNhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2RpZmljYXRvcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL1RPRE8gT3JnYW5pemUgaW1wb3J0c1xuXG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzSWQpIHtcbiAgdmFyIG1haW5Db250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5tYWluQ29udGFpbmVyKGNhbnZhc0lkKTtcbiAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKG1haW5Db250YWluZXIuc3RhZ2UpO1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgbWFpbkNvbnRhaW5lcjogbWFpbkNvbnRhaW5lcixcbiAgICBmYWN0b3J5OiBfZmFjdG9yeTIuZGVmYXVsdCxcbiAgICBsb29wOiBfbG9vcDIuZGVmYXVsdCxcbiAgICBpbnRlcnZhbDogX2ludGVydmFsMi5kZWZhdWx0LFxuICAgIHV0aWxzOiB7XG4gICAgICByYW5kb21Db2xvcjogX3JhbmRvbUNvbG9yMi5kZWZhdWx0XG4gICAgfSxcbiAgICBnZW9tZXRyeToge1xuICAgICAgc2hhcGVzOiBfc2hhcGVzMi5kZWZhdWx0LFxuICAgICAgcGF0aHM6IF9wYXRoczIuZGVmYXVsdFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgb3BhY2l0eToge1xuICAgICAgICBmbGFzaGVyOiBfZmxhc2hlcjIuZGVmYXVsdCxcbiAgICAgICAgZmFkZXI6IF9mYWRlcjIuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgIG1vdmVyOiBfbW92ZXIyLmRlZmF1bHQsXG4gICAgICBncm91cDogX2dyb3VwMi5kZWZhdWx0LFxuICAgICAgcm90YXRvcjoge1xuICAgICAgICBsaW5lYXJSb3RhdG9yOiBfbGluZWFyX3JvdGF0b3IyLmRlZmF1bHRcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGlmaWNhdG9yczogX21vZGlmaWNhdG9yczIuZGVmYXVsdCxcbiAgICBjb21wb3NpdGlvbnM6IF9jb21wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcHJveGllczogX3Byb3hpZXMyLmRlZmF1bHRcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjEnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjInLCB0cnVlKTtcblxuICB2YXIgY29sb3JGYWRlciA9IHt9O1xuICBjb2xvckZhZGVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGNvbG9yRmFkZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBjb2xvckZhZGVyLmNvbG9yMSA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IxKTtcbiAgY29sb3JGYWRlci5jb2xvcjIgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMik7XG4gIGNvbG9yRmFkZXIuY3VycmVudENvbG9yID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjEpO1xuICBjb2xvckZhZGVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShjb2xvckZhZGVyLnNwZWVkLCAwLjUpO1xuXG4gIGNvbG9yRmFkZXIuY29sb3JSYW5nZSA9IHtcbiAgICByOiBjb2xvckZhZGVyLmNvbG9yMi5yZWQoKSAtIGNvbG9yRmFkZXIuY29sb3IxLnJlZCgpLFxuICAgIGc6IGNvbG9yRmFkZXIuY29sb3IyLmdyZWVuKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ncmVlbigpLFxuICAgIGI6IGNvbG9yRmFkZXIuY29sb3IyLmJsdWUoKSAtIGNvbG9yRmFkZXIuY29sb3IxLmJsdWUoKVxuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29sb3JGYWRlci5wdWxzYXIuc3RhcnQoY29sb3JGYWRlci5oYW5kbGUpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb2xvckZhZGVyLnB1bHNhci5zdG9wKCk7XG4gIH07XG5cbiAgY29sb3JGYWRlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLnJlZChjb2xvckZhZGVyLmNvbG9yMS5yZWQoKSArIGN1cnJlbnQgKiBjb2xvckZhZGVyLmNvbG9yUmFuZ2Uucik7XG4gICAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IuZ3JlZW4oY29sb3JGYWRlci5jb2xvcjEuZ3JlZW4oKSArIGN1cnJlbnQgKiBjb2xvckZhZGVyLmNvbG9yUmFuZ2UuZyk7XG4gICAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IuYmx1ZShjb2xvckZhZGVyLmNvbG9yMS5ibHVlKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLmIpO1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGNvbG9yRmFkZXIuc3ViamVjdCwgJ2NvbG9yJywgY29sb3JGYWRlci5jdXJyZW50Q29sb3IucmdiU3RyaW5nKCkpO1xuICAgIGNvbG9yRmFkZXIuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbG9yRmFkZXI7XG59O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yX2ZhZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21Db2xvckNoYW5nZXIgPSB7fTtcbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbihyYW5kb21Db2xvckNoYW5nZXIuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21Db2xvckNoYW5nZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24ocmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KShyYW5kb21Db2xvckNoYW5nZXIuc3ViamVjdCwgJ2NvbG9yJywgKDAsIF9yYW5kb21Db2xvcjIuZGVmYXVsdCkoKSk7XG4gICAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiByYW5kb21Db2xvckNoYW5nZXI7XG59O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3JhbmRvbUNvbG9yID0gcmVxdWlyZSgncmFuZG9tQ29sb3InKTtcblxudmFyIF9yYW5kb21Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21Db2xvcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY29sb3JfY2hhbmdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlciA9IHJlcXVpcmUoJy4vY29sb3IvcmFuZG9tX2NvbG9yX2NoYW5nZXInKTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY29sb3JfY2hhbmdlcik7XG5cbnZhciBfY29sb3JfZmFkZXIgPSByZXF1aXJlKCcuL2NvbG9yL2NvbG9yX2ZhZGVyJyk7XG5cbnZhciBfY29sb3JfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JfZmFkZXIpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIgPSByZXF1aXJlKCcuL3NjYWxlL2xpbmVhcl9wdWxzYXInKTtcblxudmFyIF9saW5lYXJfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9wdWxzYXIpO1xuXG52YXIgX3JhbmRvbV9hcmNfbW92ZXIgPSByZXF1aXJlKCcuL3Bvc2l0aW9uL3JhbmRvbV9hcmNfbW92ZXInKTtcblxudmFyIF9yYW5kb21fYXJjX21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9hcmNfbW92ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNvbG9yOiB7XG4gICAgcmFuZG9tQ29sb3JDaGFuZ2VyOiBfcmFuZG9tX2NvbG9yX2NoYW5nZXIyLmRlZmF1bHQsXG4gICAgY29sb3JGYWRlcjogX2NvbG9yX2ZhZGVyMi5kZWZhdWx0XG4gIH0sXG4gIHNjYWxlOiB7XG4gICAgbGluZWFyUHVsc2FyOiBfbGluZWFyX3B1bHNhcjIuZGVmYXVsdFxuICB9LFxuICBwb3NpdGlvbjoge1xuICAgIHJhbmRvbUFyY01vdmVyOiBfcmFuZG9tX2FyY19tb3ZlcjIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kaWZpY2F0b3JzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgLy8gcHJpdmF0ZSB2YXJzXG4gIHZhciBjdXJyZW50QXJjID0gY3JlYXRlUmFuZG9tQXJjKCk7XG4gIHZhciBjdXJyZW50U3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICB2YXIgY3VycmVudE1zID0gMDtcbiAgdmFyIGN1cnJlbnRBbmdsZSA9IDA7XG5cbiAgLy8gcHJpdmF0ZSBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlUmFuZG9tQXJjKCkge1xuICAgIHJldHVybiAoMCwgX2FyYzIuZGVmYXVsdCkoeyBkZWdyZWVzOiBNYXRoLnJhbmRvbSgpICogMzYwIC0gMTgwLCByYWRpdXM6IDI1IH0pO1xuICB9XG5cbiAgdmFyIHJhbmRvbUFyY01vdmVyID0ge307XG4gIHJhbmRvbUFyY01vdmVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIHJhbmRvbUFyY01vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblxuICByYW5kb21BcmNNb3Zlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocmFuZG9tQXJjTW92ZXIuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihyYW5kb21BcmNNb3Zlci5oYW5kbGUpO1xuXG4gICAgLy8gUmVzZXQgZXZlcnl0aGluZ1xuICAgIGN1cnJlbnRBcmMgPSBjcmVhdGVSYW5kb21BcmMoKTtcbiAgICBjdXJyZW50U3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgIGN1cnJlbnRNcyA9IDA7XG4gICAgY3VycmVudEFuZ2xlID0gMDtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgbXMgPSBldmVudC5kZWx0YTtcbiAgICBjdXJyZW50TXMgKz0gbXM7XG5cbiAgICB3aGlsZSAoY3VycmVudE1zIC8gMTAwMCAqIHJhbmRvbUFyY01vdmVyLnNwZWVkID49IGN1cnJlbnRBcmMuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIHZhciByb3RhdGVkUG9pbnQgPSAoMCwgX3JvdGF0ZV9wb2ludDIuZGVmYXVsdCkoY3VycmVudEFyYy5nZXRQb2ludCgxKSwgY3VycmVudEFuZ2xlKTtcbiAgICAgIGN1cnJlbnRTdGFydFBvc2l0aW9uLnggPSBjdXJyZW50U3RhcnRQb3NpdGlvbi54ICsgcm90YXRlZFBvaW50Lng7XG4gICAgICBjdXJyZW50U3RhcnRQb3NpdGlvbi55ID0gY3VycmVudFN0YXJ0UG9zaXRpb24ueSArIHJvdGF0ZWRQb2ludC55O1xuICAgICAgY3VycmVudE1zID0gY3VycmVudE1zIC0gY3VycmVudEFyYy5nZXRMZW5ndGgoKSAqIDEwMDAgLyByYW5kb21BcmNNb3Zlci5zcGVlZDtcbiAgICAgIGN1cnJlbnRBbmdsZSA9IGN1cnJlbnRBbmdsZSArIGN1cnJlbnRBcmMuZ2V0QW5nbGUoMSk7XG4gICAgICBjdXJyZW50QXJjID0gY3JlYXRlUmFuZG9tQXJjKCk7XG4gICAgfVxuICAgIHZhciBwcm9ncmVzcyA9IGN1cnJlbnRNcyAvIDEwMDAgKiByYW5kb21BcmNNb3Zlci5zcGVlZCAvIGN1cnJlbnRBcmMuZ2V0TGVuZ3RoKCk7XG5cbiAgICB2YXIgcG9zaXRpb24gPSAoMCwgX3JvdGF0ZV9wb2ludDIuZGVmYXVsdCkoY3VycmVudEFyYy5nZXRQb2ludChwcm9ncmVzcyksIGN1cnJlbnRBbmdsZSk7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkocmFuZG9tQXJjTW92ZXIuc3ViamVjdCwgJ3gnLCBjdXJyZW50U3RhcnRQb3NpdGlvbi54ICsgcG9zaXRpb24ueCk7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkocmFuZG9tQXJjTW92ZXIuc3ViamVjdCwgJ3knLCBjdXJyZW50U3RhcnRQb3NpdGlvbi55ICsgcG9zaXRpb24ueSk7XG4gICAgLy9yYW5kb21BcmNNb3Zlci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcmFuZG9tQXJjTW92ZXI7XG59O1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yb3RhdGVfcG9pbnQgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3JvdGF0ZV9wb2ludCcpO1xuXG52YXIgX3JvdGF0ZV9wb2ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3RhdGVfcG9pbnQpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9hcmNfbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsaW1pdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ251bWJlck9mSW50ZXJ2YWxzJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Jpc2luZycsIGZhbHNlLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjZW50ZXJJZlBvc3NpYmxlJywgZmFsc2UsIHRydWUpO1xuXG4gIHZhciBsaW5lYXJQdWxzYXIgPSB7fTtcbiAgbGluZWFyUHVsc2FyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGxpbmVhclB1bHNhci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGxpbmVhclB1bHNhci5saW1pdCA9IG9wdGlvbnMubGltaXQ7XG4gIGlmICghb3B0aW9ucy5yaXNpbmcpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AucHVsc2FyVHJhbnNpdGlvbikobGluZWFyUHVsc2FyLnNwZWVkLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AucmlzaW5nVHJhbnNpdGlvbikobGluZWFyUHVsc2FyLnNwZWVkLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzKTtcbiAgfVxuXG4gIGxpbmVhclB1bHNhci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0YXJ0KGxpbmVhclB1bHNhci5oYW5kbGUpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGxpbmVhclB1bHNhci5wdWxzYXIuc3RvcCgpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGxpbmVhclB1bHNhci5zdWJqZWN0LCAnc2NhbGUnLCAxICsgY3VycmVudCAqIChsaW5lYXJQdWxzYXIubGltaXQgLSAxKSk7XG4gICAgbGluZWFyUHVsc2FyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQdWxzYXI7XG59O1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfcHVsc2FyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9IHt9O1xuICBwcm94eS5ncm91cCA9IFtdO1xuXG4gIHByb3h5LmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHByb3h5Lmdyb3VwLnB1c2goZWxlbWVudCk7XG4gIH07XG5cbiAgcHJveHkucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcHJveHkuZ3JvdXAuc3BsaWNlKHByb3h5Lmdyb3VwLmluZGV4T2YoZWxlbWVudCksIDEpO1xuICB9O1xuXG4gIHByb3h5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwcm94eS5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHByb3h5Lmdyb3VwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgb2JqID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQob2JqLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NodWZmbGUnLCBmYWxzZSwgZmFsc2UpO1xuXG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG4gIHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXggPSAwO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAocHJveHkuc2h1ZmZsZSAmJiBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID09PSAwKSB7XG4gICAgICBwcm94eS5zaHVmZmxlR3JvdXAoKTtcbiAgICB9XG4gICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQocHJveHkuZ3JvdXBbcHJveHkuY3VycmVudEVsZW1lbnRJbmRleF0sIG5hbWUsIHZhbHVlKTtcblxuICAgIHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXgrKztcbiAgICBpZiAocHJveHkuY3VycmVudEVsZW1lbnRJbmRleCA+PSBwcm94eS5ncm91cC5sZW5ndGgpIHtcbiAgICAgIHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfTtcblxuICBwcm94eS5zaHVmZmxlR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9UT0RPIGltcGxlbWVudCBzaHVmZmxlIGFsZ29yaXRobVxuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmNyZW1lbnRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xuXG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG4gIHByb3h5LmludGVydmFsID0gb3B0aW9ucy5pbnRlcnZhbDtcbiAgcHJveHkudGltZXIgPSAoMCwgX2ludGVydmFsX3RpbWVyMi5kZWZhdWx0KShwcm94eS5pbnRlcnZhbCk7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwID0gKDAsIF9pbmNyZW1lbnRfcHJveHkyLmRlZmF1bHQpKHt9KTtcbiAgICBwLmdyb3VwID0gcHJveHkuZ3JvdXA7XG4gICAgdmFyIGNoYW5nZVByb3BDYWxsYmFjayA9IGZ1bmN0aW9uIGNoYW5nZVByb3BDYWxsYmFjaygpIHtcbiAgICAgIHAuc2V0UHJvcChuYW1lLCB2YWx1ZSk7XG4gICAgICBwLmRyYXcoKTtcbiAgICAgIGlmIChwLmN1cnJlbnRFbGVtZW50SW5kZXggPT09IDApIHtcbiAgICAgICAgcHJveHkudGltZXIucmVtb3ZlTGlzdGVuZXIoY2hhbmdlUHJvcENhbGxiYWNrKTtcbiAgICAgICAgcC5ncm91cCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICBwcm94eS50aW1lci5hZGRMaXN0ZW5lcihjaGFuZ2VQcm9wQ2FsbGJhY2spO1xuICB9O1xuXG4gIHByb3h5LnRpbWVyLnN0YXJ0KCk7XG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RpbWVycy9pbnRlcnZhbF90aW1lcicpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsX3RpbWVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmYXVsdF9wcm94eSA9IHJlcXVpcmUoJy4vZGVmYXVsdF9wcm94eScpO1xuXG52YXIgX2RlZmF1bHRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdF9wcm94eSk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5ID0gcmVxdWlyZSgnLi9pbmNyZW1lbnRfcHJveHknKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5jcmVtZW50X3Byb3h5KTtcblxudmFyIF9pbnRlcnZhbF9wcm94eSA9IHJlcXVpcmUoJy4vaW50ZXJ2YWxfcHJveHknKTtcblxudmFyIF9pbnRlcnZhbF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF9wcm94eSk7XG5cbnZhciBfcmFuZG9tX3Byb3h5ID0gcmVxdWlyZSgnLi9yYW5kb21fcHJveHknKTtcblxudmFyIF9yYW5kb21fcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJveHk6IF9kZWZhdWx0X3Byb3h5Mi5kZWZhdWx0LFxuICBpbmNyZW1lbnRQcm94eTogX2luY3JlbWVudF9wcm94eTIuZGVmYXVsdCxcbiAgaW50ZXJ2YWxQcm94eTogX2ludGVydmFsX3Byb3h5Mi5kZWZhdWx0LFxuICByYW5kb21Qcm94eTogX3JhbmRvbV9wcm94eTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3hpZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmRvbUVsZW1lbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByb3h5Lmdyb3VwLmxlbmd0aCk7XG4gICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQocHJveHkuZ3JvdXBbcmFuZG9tRWxlbWVudEluZGV4XSwgbmFtZSwgdmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgaW50ZXJ2YWwgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3R5cGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdicG0nLCBmYWxzZSwgMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbXMnLCBmYWxzZSwgMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZGl2aXNvcicsIGZhbHNlLCAxKTtcblxuICBpbnRlcnZhbC50eXBlID0gb3B0aW9ucy50eXBlO1xuICBpbnRlcnZhbC5icG0gPSBvcHRpb25zLmJwbTtcbiAgaW50ZXJ2YWwubXMgPSBvcHRpb25zLm1zO1xuICBpbnRlcnZhbC5kaXZpc29yID0gb3B0aW9ucy5kaXZpc29yO1xuXG4gIGlmIChpbnRlcnZhbC5icG0gPT09IDAgJiYgaW50ZXJ2YWwubXMgPT09IDApIHtcbiAgICB0aHJvdyAnSWxsZWdhbCBzdGF0ZTogQlBNIGFuZCBNUyBjYW5ub3QgYm90aCBiZSAwJztcbiAgfVxuXG4gIGludGVydmFsLmdlbmVyYXRlSGFsZkludGVydmFsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYWxmSW50ZXJ2YWwgPSB7fTtcbiAgICBoYWxmSW50ZXJ2YWwudHlwZSA9IGludGVydmFsLnR5cGU7XG4gICAgaGFsZkludGVydmFsLmJwbSA9IGludGVydmFsLmJwbTtcbiAgICBoYWxmSW50ZXJ2YWwubXMgPSBpbnRlcnZhbC5tcztcbiAgICBoYWxmSW50ZXJ2YWwuZGl2aXNvciA9IGludGVydmFsLmRpdmlzb3IgKiAyO1xuXG4gICAgcmV0dXJuIGhhbGZJbnRlcnZhbDtcbiAgfTtcblxuICBpbnRlcnZhbC5iaXNlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW50ZXJ2YWwuZGl2aXNvciA9IGludGVydmFsLmRpdmlzb3IgKiAyO1xuICB9O1xuXG4gIGludGVydmFsLmdldE1zID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gaW50ZXJ2YWwubXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA2MDAwMCAvIGludGVydmFsLmJwbTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGludGVydmFsO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWwuanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICAvKiBwcml2YXRlIHZhcnMgKi9cclxuICB2YXIgYWJzdHJhY3RDb21wb25lbnQgPSB7fTtcclxuICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gIGFic3RyYWN0Q29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKXtcclxuICAgIGlmKCFjYWxsYmFja3NbZXZlbnROYW1lXSl7XHJcbiAgICAgIGNhbGxiYWNrc1tldmVudE5hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICBjYWxsYmFja3NbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBhYnN0cmFjdENvbXBvbmVudC5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjayl7XHJcbiAgICAgIGlmKGNhbGxiYWNrc1tldmVudE5hbWVdKXtcclxuICAgICAgICB2YXIgaW5kZXggPSBjYWxsYmFja3NbZXZlbnROYW1lXS5pbmRleE9mKGNhbGxiYWNrKTtcclxuICAgICAgICBpZihpbmRleCA+IC0xKXtcclxuICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuICBhYnN0cmFjdENvbXBvbmVudC5zZW5kRXZlbnQgPSBmdW5jdGlvbihldmVudE5hbWUpe1xyXG4gICAgaWYoIWNhbGxiYWNrc1tldmVudE5hbWVdKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yKHZhciBjYWxsYmFjayBvZiBjYWxsYmFja3NbZXZlbnROYW1lXSl7XHJcbiAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGFic3RyYWN0Q29tcG9uZW50O1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdENvbXBvbmVudCBmcm9tICd+L2Fic3RyYWN0X2NvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXHJcbiAgICAgIHZhciBjb21wb25lbnQgPSBhYnN0cmFjdENvbXBvbmVudCgpO1xyXG5cclxuICAgICAgLyogcHVibGljIG1ldGhvZHMgKi9cclxuICAgICAgY29tcG9uZW50LnZpZXcgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcclxuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcclxuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NpcmNsZVNoYXBlJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG5cclxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXHJcbiAgICAgIHZhciBjaXJjbGUgPSBhYnN0cmFjdFNoYXBlKCk7XHJcblxyXG4gICAgICAvKiBwdWJsaWMgcHJvcGVydGllcyAqL1xyXG4gICAgICBjaXJjbGUuY2lyY2xlU2hhcGUgPSBvcHRpb25zLmNpcmNsZVNoYXBlO1xyXG4gICAgICBjaXJjbGUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG5cclxuICAgICAgLyogcHVibGljIG1ldGhvZHMgKi9cclxuICAgICAgY2lyY2xlLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgY2lyY2xlLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIGNpcmNsZS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChjaXJjbGUuY29sb3IpLmRyYXdDaXJjbGUoMCwgMCwgY2lyY2xlLmNpcmNsZVNoYXBlLnJhZGl1cyAqIGNpcmNsZS5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjaXJjbGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBjaXJjbGUuY2lyY2xlU2hhcGUucmFkaXVzICogY2lyY2xlLnNjYWxlICogMjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNpcmNsZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBjaXJjbGUuY2lyY2xlU2hhcGUucmFkaXVzICogY2lyY2xlLnNjYWxlICogMjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8qIGluaXQgKi9cclxuICAgICAgY2lyY2xlLmRyYXcoKTtcclxuICAgICAgcmV0dXJuIGNpcmNsZTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgY3JlYXRlanMuQ29udGFpbmVyKCk7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBwYXRoRHJhd2VyIGZyb20gJy4vaGVscGVyL3BhdGhfZHJhd2VyJztcclxuaW1wb3J0IGFkZFVwUG9pbnRzIGZyb20gJ34vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cyc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gIHZhciBjdXN0b20gPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2N1c3RvbVNoYXBlJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcbiAgY3VzdG9tLmN1c3RvbVNoYXBlID0gb3B0aW9ucy5jdXN0b21TaGFwZTtcclxuICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG5cclxuICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChjdXN0b20uY29sb3IpLmJlZ2luU3Ryb2tlKCcjMDBGJykubW92ZVRvKDAsIDApO1xyXG4gICAgdmFyIGN1cnJlbnQgPSB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDBcclxuICAgIH07XHJcbiAgICB2YXIgaSA9IDE7XHJcbiAgICBmb3IgKHZhciBwYXRoIG9mIGN1c3RvbS5jdXN0b21TaGFwZS5wYXRoLnN1YlBhdGhzKSB7XHJcbiAgICAgIHBhdGhEcmF3ZXJbcGF0aC50eXBlXShjdXN0b20udmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XHJcbiAgICAgIGN1cnJlbnQgPSBhZGRVcFBvaW50cyhjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGN1c3RvbS5kcmF3KCk7XHJcbiAgcmV0dXJuIGN1c3RvbTtcclxufVxyXG4iLCJpbXBvcnQgYW5nbGVUb1JhZGlhbnMgZnJvbSAnfi9nZW9tZXRyeS9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucyc7XHJcbi8qZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlKi9cclxuZnVuY3Rpb24gcGF0aERyYXdlcigpe31cclxuXHJcbnBhdGhEcmF3ZXIubGluZSA9IGZ1bmN0aW9uKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KXtcclxuICBncmFwaGljcy5saW5lVG8oY3VycmVudC54ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS54LCBjdXJyZW50LnkgKyBwYXRoLmdldEVkZ2VQb2ludCgpLnkpO1xyXG59O1xyXG5cclxucGF0aERyYXdlci5hcmMgPSBmdW5jdGlvbihncmFwaGljcywgcGF0aCwgY3VycmVudCl7XHJcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcclxuICBpZihwYXRoLmRlZ3JlZXMgPCAwKXtcclxuICAgIGdyYXBoaWNzLmFyYyhwYXRoLnN0YXJ0LngsIHBhdGguc3RhcnQueSAtIHBhdGgucmFkaXVzLCBwYXRoLnJhZGl1cywgYW5nbGVUb1JhZGlhbnMoOTApLCBhbmdsZVRvUmFkaWFucyg5MCArIHBhdGguZGVncmVlcyksIHRydWUpO1xyXG4gIH1lbHNle1xyXG4gICAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55ICsgcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCBhbmdsZVRvUmFkaWFucygtOTApLCBhbmdsZVRvUmFkaWFucyhwYXRoLmRlZ3JlZXMgLSA5MCkpO1xyXG4gIH1cclxufTtcclxuXHJcbnBhdGhEcmF3ZXIuc2luZV93YXZlID0gZnVuY3Rpb24oZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpe1xyXG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XHJcbiAgZm9yKHZhciB4ID0gMDsgeCA8IHBhdGguZ2V0TGVuZ3RoKCk7IHggKz0gNSl7XHJcbiAgICB2YXIgcG9pbnQgPSBwYXRoLmdldFBvaW50KHggLyBwYXRoLmdldExlbmd0aCgpKTtcclxuICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcbn07XHJcblxyXG5wYXRoRHJhd2VyLmJlemllcl9jdXJ2ZSA9IGZ1bmN0aW9uKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KXtcclxuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xyXG4gIGlmKHBhdGguY3BvaW50Mil7XHJcbiAgICBncmFwaGljcy5iZXppZXJDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5jcG9pbnQyLngsIHBhdGguY3BvaW50Mi55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcclxuICB9ZWxzZXtcclxuICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXRoRHJhd2VyO1xyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5pbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xyXG5cclxuICB2YXIgaW1hZ2UgPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgaW1hZ2UudmlldyA9IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpO1xyXG5cclxuXHJcbiAgaW1hZ2UuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaW1hZ2Uudmlldy5zY2FsZVggPSBpbWFnZS5zY2FsZTtcclxuICAgIGltYWdlLnZpZXcuc2NhbGVZID0gaW1hZ2Uuc2NhbGU7XHJcbiAgfTtcclxuXHJcbiAgaW1hZ2UuZHJhdygpO1xyXG4gIHJldHVybiBpbWFnZTtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgICB2YXIgbGluZSA9IGFic3RyYWN0U2hhcGUoKTtcclxuXHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdsaW5lUGF0aCcsIHRydWUpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAndGhpY2tuZXNzJywgZmFsc2UsIDEpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcclxuXHJcbiAgICAgIGxpbmUucGF0aCA9IG9wdGlvbnMubGluZVBhdGg7XHJcbiAgICAgIGxpbmUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG4gICAgICBsaW5lLnRoaWNrbmVzcyA9IG9wdGlvbnMudGhpY2tuZXNzO1xyXG5cclxuICAgICAgbGluZS5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGxpbmUudmlldy5ncmFwaGljc1xyXG4gICAgICAgICAgICAuY2xlYXIoKVxyXG4gICAgICAgICAgICAuYmVnaW5TdHJva2UobGluZS5jb2xvcilcclxuICAgICAgICAgICAgLnNldFN0cm9rZVN0eWxlKGxpbmUudGhpY2tuZXNzICogbGluZS5zY2FsZSlcclxuICAgICAgICAgICAgLm1vdmVUbyhsaW5lLnBhdGguc3RhcnQueCAqIGxpbmUuc2NhbGUsIGxpbmUucGF0aC5zdGFydC55ICogbGluZS5zY2FsZSlcclxuICAgICAgICAgICAgLmxpbmVUbyhsaW5lLnBhdGguZW5kLnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguZW5kLnkgKiBsaW5lLnNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxpbmUuZ2V0V2lkdGggPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAobGluZS5wYXRoLmVuZC54IC0gbGluZS5wYXRoLnN0YXJ0LngpICogbGluZS5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxpbmUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gKGxpbmUucGF0aC5lbmQueSAtIGxpbmUucGF0aC5zdGFydC55KSAqIGxpbmUuc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgbGluZS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBsaW5lO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB2YXIgc3RhZ2UgPSBuZXcgY3JlYXRlanMuU3RhZ2UoaWQpO1xyXG5cclxuICAgIHZhciBjb250YWluZXIgPSB7fTtcclxuXHJcbiAgICBjb250YWluZXIuYWRkID0gZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICBzdGFnZS5hZGRDaGlsZChjaGlsZC52aWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLnJlbW92ZSA9IGZ1bmN0aW9uKGNoaWxkKXtcclxuICAgICAgc3RhZ2UucmVtb3ZlQ2hpbGQoY2hpbGQudmlldyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5yZW1vdmVBbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgICBzdGFnZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIuc3RhZ2UgPSBzdGFnZTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5pbXBvcnQgcGF0aERyYXdlciBmcm9tICcuL2hlbHBlci9wYXRoX2RyYXdlcic7XHJcbmltcG9ydCBhZGRVcFBvaW50cyBmcm9tICd+L2dlb21ldHJ5L2FkZF91cF9wb2ludHMnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICAgIGlmKCFvcHRpb25zKXtcclxuICAgICAgICBvcHRpb25zID0ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnd2lkdGgnLCBmYWxzZSwgMSk7XHJcblxyXG4gICAgICB2YXIgY3VzdG9tID0gYWJzdHJhY3RTaGFwZSgpO1xyXG4gICAgICBjdXN0b20uY29tcGxldGVQYXRoID0gb3B0aW9ucy5wYXRoO1xyXG4gICAgICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG4gICAgICBjdXN0b20ud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG5cclxuICAgICAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKGN1c3RvbS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUoY3VzdG9tLndpZHRoKS5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgICB2YXIgY3VycmVudCA9IHt4OiAwLCB5OiAwfTtcclxuICAgICAgICAgIHZhciBpID0gMTtcclxuICAgICAgICAgIGZvcih2YXIgcGF0aCBvZiBjdXN0b20uY29tcGxldGVQYXRoLnN1YlBhdGhzKXtcclxuICAgICAgICAgICAgcGF0aERyYXdlcltwYXRoLnR5cGVdKGN1c3RvbS52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcclxuICAgICAgICAgICAgY3VycmVudCA9IGFkZFVwUG9pbnRzKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjdXN0b20uZHJhdygpO1xyXG4gICAgICByZXR1cm4gY3VzdG9tO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAncmVjdGFuZ2xlU2hhcGUnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcblxyXG4gICAgICB2YXIgcmVjdCA9IGFic3RyYWN0U2hhcGUoKTtcclxuICAgICAgcmVjdC53aWR0aCA9IG9wdGlvbnMucmVjdGFuZ2xlU2hhcGUud2lkdGg7XHJcbiAgICAgIHJlY3QuaGVpZ2h0ID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS5oZWlnaHQ7XHJcbiAgICAgIHJlY3QuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG5cclxuICAgICAgcmVjdC5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHJlY3Qudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgcmVjdC52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChyZWN0LmNvbG9yKS5kcmF3UmVjdCgwLCAwLCByZWN0LndpZHRoICogcmVjdC5zY2FsZSwgcmVjdC5oZWlnaHQgKiByZWN0LnNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJlY3QuZ2V0V2lkdGggPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiByZWN0LndpZHRoICogcmVjdC5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJlY3QuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gcmVjdC5oZWlnaHQgKiByZWN0LnNjYWxlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVjdC5kcmF3KCk7XHJcbiAgICAgIHJldHVybiByZWN0O1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3F1YXJlU2hhcGUnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcblxyXG4gICAgICB2YXIgc3F1YXJlID0gYWJzdHJhY3RTaGFwZSgpO1xyXG4gICAgICBzcXVhcmUuc3F1YXJlU2hhcGUgPSBvcHRpb25zLnNxdWFyZVNoYXBlO1xyXG4gICAgICBzcXVhcmUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG5cclxuICAgICAgc3F1YXJlLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgc3F1YXJlLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIHNxdWFyZS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChzcXVhcmUuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHNxdWFyZS5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogc3F1YXJlLnNjYWxlLCBzcXVhcmUuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHNxdWFyZS5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzcXVhcmUuZ2V0V2lkdGggPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBzcXVhcmUuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHNxdWFyZS5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNxdWFyZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBzcXVhcmUuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHNxdWFyZS5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNxdWFyZS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBzcXVhcmU7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xyXG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cclxuICAgICAgaGFuZGxlVmlkZW9Tb3VyY2UoKTtcclxuXHJcbiAgICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgICB2YXIgdmlkZW8gPSBhYnN0cmFjdFNoYXBlKCk7XHJcblxyXG4gICAgICAvKiBwdWJsaWMgcHJvcGVydGllcyAqL1xyXG4gICAgICB2aWRlby52aWV3ID0gbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSk7XHJcblxyXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgICB2aWRlby5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2aWRlby52aWV3LnNjYWxlWCA9IHZpZGVvLnNjYWxlO1xyXG4gICAgICAgIHZpZGVvLnZpZXcuc2NhbGVZID0gdmlkZW8uc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5wbGF5ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBvcHRpb25zLnNvdXJjZS5wbGF5KCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xyXG4gICAgICAgIG9wdGlvbnMuc291cmNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZpZGVvLnBhdXNlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLyogcHJpdmF0ZSBmdW5jdGlvbnMgKi9cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKXtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xyXG4gICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xyXG4gICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcclxuICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogaW5pdCAqL1xyXG4gICAgICB2aWRlby5kcmF3KCk7XHJcbiAgICAgIHJldHVybiB2aWRlbztcclxufVxyXG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xyXG5pbXBvcnQgU3F1YXJlIGZyb20gJy4vY29tcG9uZW50cy9zcXVhcmUnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY29tcG9uZW50cy9jaXJjbGUnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vY29tcG9uZW50cy9yZWN0YW5nbGUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvbWFpbl9jb250YWluZXInO1xyXG5pbXBvcnQgTGluZSBmcm9tICcuL2NvbXBvbmVudHMvbGluZSc7XHJcbmltcG9ydCBDdXN0b21PYmplY3QgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbV9vYmplY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlbyc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vY29tcG9uZW50cy9wYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcbntcclxuICAgIGNvbnRhaW5lcjogQ29udGFpbmVyLFxyXG4gICAgc3F1YXJlOiBTcXVhcmUsXHJcbiAgICBjaXJjbGU6IENpcmNsZSxcclxuICAgIHJlY3RhbmdsZTogUmVjdGFuZ2xlLFxyXG4gICAgbGluZTogTGluZSxcclxuICAgIGN1c3RvbU9iamVjdDogQ3VzdG9tT2JqZWN0LFxyXG4gICAgbWFpbkNvbnRhaW5lcjogTWFpbkNvbnRhaW5lcixcclxuICAgIGltYWdlOiBJbWFnZSxcclxuICAgIHZpZGVvOiBWaWRlbyxcclxuICAgIHBhdGg6IFBhdGhcclxufTtcclxuIiwiaW1wb3J0IGxvb3AgZnJvbSAnfi9sb29wJztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnfi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeSc7XHJcbmltcG9ydCBhYnN0cmFjdENvbXBvbmVudCBmcm9tICd+L2Fic3RyYWN0X2NvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGZpbHRlciA9IGFic3RyYWN0Q29tcG9uZW50KCk7XHJcblxyXG4gICAgZmlsdGVyLnZpZXcgPSBmYWN0b3J5LmNvbnRhaW5lcigpO1xyXG5cclxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KCl7XHJcbiAgICAgIGxvb3AuYWRkQW5pbWF0aW9uKGZpbHRlci5oYW5kbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3AoKXtcclxuICAgICAgbG9vcC5yZW1vdmVBbmltYXRpb24oZmlsdGVyLmhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RGaWx0ZXIgZnJvbSAnfi9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjaGlsZHJlbil7XHJcbiAgICB2YXIgYWJzdHJhY3RHcm91cCA9IGFic3RyYWN0RmlsdGVyKCk7XHJcblxyXG4gICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcclxuXHJcbiAgICBhYnN0cmFjdEdyb3VwLmFkZCA9IGZ1bmN0aW9uKGNoaWxkKXtcclxuICAgICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFic3RyYWN0R3JvdXAucmVtb3ZlID0gZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLnNwbGljZShhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpLCAxKTtcclxuICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhYnN0cmFjdEdyb3VwO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdEdyb3VwIGZyb20gJy4vYWJzdHJhY3RfZ3JvdXAnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICd+L2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5JztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbHVtbnMnLCBmYWxzZSwgMyk7XHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlLCAxMCk7XHJcblxyXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gYWJzdHJhY3RHcm91cChvcHRpb25zLmNoaWxkcmVuKTtcclxuXHJcbiAgICByZWN0YW5nbGVHcm91cC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xyXG4gICAgcmVjdGFuZ2xlR3JvdXAuc3BhY2luZyA9IG9wdGlvbnMuc3BhY2luZztcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICB2YXIgY29udGFpbmVyID0gZmFjdG9yeS5jb250YWluZXIoKTtcclxuICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xyXG4gICAgICBjb250YWluZXIueCA9IChpICUgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xyXG4gICAgICBjb250YWluZXIueSA9IE1hdGguZmxvb3IoaSAvIHJlY3RhbmdsZUdyb3VwLmNvbHVtbnMpICogcmVjdGFuZ2xlR3JvdXAuc3BhY2luZztcclxuICAgICAgcmVjdGFuZ2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWN0YW5nbGVHcm91cDtcclxufVxyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKXtcclxuXHJcbiAgICAvKiBQYXJhbWV0ZXJzICovXHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcclxuXHJcbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cclxuICAgIHZhciBjaGlsZCA9IG9wdGlvbnMuY2hpbGQ7XHJcblxyXG4gICAgLyogY2FsbGJhY2tzICovXHJcbiAgICB2YXIgb25Qcm9wZXJ0eUNoYW5nZSA9ICgpID0+e1xyXG4gICAgICBmaWx0ZXIub25Qcm9wZXJ0eUNoYW5nZSgpO1xyXG4gICAgICBmaWx0ZXIuc2VuZEV2ZW50KCdwcm9wZXJ0eV9jaGFuZ2UnKTtcclxuICAgIH07XHJcblxyXG4gICAgLyogbWV0aG9kcyAqL1xyXG4gICAgZmlsdGVyLnNldENoaWxkID0gZnVuY3Rpb24obmV3Q2hpbGQpe1xyXG4gICAgICBpZihjaGlsZC5yZW1vdmVFdmVudExpc3RlbmVyKXtcclxuICAgICAgICBjaGlsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9wZXJ0eV9jaGFuZ2UnLCBvblByb3BlcnR5Q2hhbmdlKTtcclxuICAgICAgfVxyXG4gICAgICBjaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICBpZihjaGlsZC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgICBjaGlsZC5hZGRFdmVudExpc3RlbmVyKCdwcm9wZXJ0eV9jaGFuZ2UnLCBvblByb3BlcnR5Q2hhbmdlKTtcclxuICAgICAgfVxyXG4gICAgICBmaWx0ZXIudmlldy5hZGRDaGlsZChjaGlsZC52aWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgZmlsdGVyLmdldENoaWxkID0gZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBpbml0ICovXHJcbiAgICBmaWx0ZXIuc2V0Q2hpbGQob3B0aW9ucy5jaGlsZCk7XHJcbiAgICByZXR1cm4gZmlsdGVyO1xyXG59XHJcbiIsImltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJ34vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZpbHRlciwgb3B0aW9ucyl7XHJcblxyXG4gICAgLyogUGFyYW1ldGVycyAqL1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XHJcblxyXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXHJcbiAgICB2YXIgZmlsdGVyVHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ob3B0aW9ucy5pbnRlcnZhbCwgMC41KTtcclxuXHJcbiAgICAvKiBQdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgZmlsdGVyLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgZmlsdGVyVHJhbnNpdGlvbi5zdGFydChmaWx0ZXIuaGFuZGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgZmlsdGVyLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgICBmaWx0ZXJUcmFuc2l0aW9uLnN0b3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwb2ludDEsIHBvaW50Mil7XHJcbiAgdmFyIHBvaW50ID0ge307XHJcbiAgcG9pbnQueCA9IHBvaW50MS54ICsgcG9pbnQyLng7XHJcbiAgcG9pbnQueSA9IHBvaW50MS55ICsgcG9pbnQyLnk7XHJcbiAgcmV0dXJuIHBvaW50O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZlY3RvcjEsIHZlY3RvcjIpe1xyXG4gIGlmKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCl7XHJcbiAgICB0aHJvdyAnQ2Fubm90IGNhbGN1bGF0ZSBkaXN0YW5jZSBvZiB2ZWN0b3JzIHdpdGggZGlmZmVyZW50IG51bWJlcnMgb2YgZGltZW5zaW9ucyc7XHJcbiAgfVxyXG4gIHZhciBkaXN0YW5jZSA9IDA7XHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspe1xyXG4gICAgZGlzdGFuY2UgKz0gTWF0aC5wb3codmVjdG9yMVtpXSAtIHZlY3RvcjJbaV0sIDIpO1xyXG4gIH1cclxuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RhbmNlKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhbmdsZSl7XHJcbiAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxufVxyXG4iLCJpbXBvcnQgYW5nbGVUb1JhZGlhbnMgZnJvbSAnLi9hbmdsZV90b19yYWRpYW5zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgpe1xyXG4gIHZhciByYWQgPSBhbmdsZVRvUmFkaWFucyhhbmdsZSk7XHJcbiAgcmV0dXJuIHsgeDogTWF0aC5jb3MocmFkKSAqIGxlbmd0aCwgeTogTWF0aC5zaW4ocmFkKSAqIGxlbmd0aH07XHJcbn1cclxuIiwiaW1wb3J0IGFuZ2xlVG9SYWRpYW5zIGZyb20gJ34vZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJjQ29uc3RydWN0b3Iob3B0aW9ucyl7XHJcblxyXG4gIC8vIFBhcmFtZXRlcnNcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnZGVncmVlcycsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcclxuXHJcbiAgLy8gcHJpdmF0ZSB2YXJzXHJcbiAgdmFyIGFyYyA9IHt9O1xyXG5cclxuICBhcmMuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gIGFyYy5kZWdyZWVzID0gb3B0aW9ucy5kZWdyZWVzO1xyXG4gIGFyYy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcclxuICBhcmMudHlwZSA9ICdhcmMnO1xyXG5cclxuICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgYXJjLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gYXJjLmdldFBvaW50KDEpO1xyXG4gIH07XHJcblxyXG4gIGFyYy5nZXRMZW5ndGggPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKDIgKiBNYXRoLlBJICogYXJjLnJhZGl1cyAqICggYXJjLmRlZ3JlZXMgLyAzNjAgKSk7XHJcbiAgfTtcclxuXHJcbiAgYXJjLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIG9yaWdpbiA9IHt4OiBhcmMuc3RhcnQueCwgeTogYXJjLnN0YXJ0LnkgfTtcclxuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcclxuXHJcbiAgICBpZihhcmMuZGVncmVlcyA8IDApe1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IG9yaWdpbi54ICsgYXJjLnJhZGl1cyAqIE1hdGguc2luKGFuZ2xlVG9SYWRpYW5zKC1wYXJ0T2ZEZWdyZWVzKSksXHJcbiAgICAgICAgeTogb3JpZ2luLnkgLSBhcmMucmFkaXVzICsgYXJjLnJhZGl1cyAqIE1hdGguY29zKGFuZ2xlVG9SYWRpYW5zKHBhcnRPZkRlZ3JlZXMpKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IG9yaWdpbi54ICsgYXJjLnJhZGl1cyAqIE1hdGguc2luKGFuZ2xlVG9SYWRpYW5zKHBhcnRPZkRlZ3JlZXMpKSxcclxuICAgICAgeTogb3JpZ2luLnkgKyBhcmMucmFkaXVzICsgYXJjLnJhZGl1cyAqIC1NYXRoLmNvcyhhbmdsZVRvUmFkaWFucyhwYXJ0T2ZEZWdyZWVzKSlcclxuICAgIH07XHJcblxyXG4gIH07XHJcblxyXG4gIGFyYy5zdWJQYXRocyA9IFthcmNdO1xyXG5cclxuICBhcmMuZ2V0QW5nbGUgPSBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICByZXR1cm4gYW5nbGVUb1JhZGlhbnMoYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcyk7XHJcbiAgfTtcclxuXHJcbiAgYXJjLmdldFBhcnRQYXRoID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIHBhcnRPZkRlZ3JlZXMgPSBhcmMuZGVncmVlcyAqIHByb2dyZXNzO1xyXG4gICAgcmV0dXJuIGFyY0NvbnN0cnVjdG9yKHtzdGFydDogYXJjLnN0YXJ0LCBkZWdyZWVzOiBwYXJ0T2ZEZWdyZWVzLCByYWRpdXM6IGFyYy5yYWRpdXN9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gYXJjO1xyXG59XHJcbiIsImltcG9ydCBCZXppZXIgZnJvbSAnYmV6aWVyLWpzJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnZW5kJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2Nwb2ludDEnLCB0cnVlKTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY3BvaW50MicsIGZhbHNlKTtcclxuXHJcbiAgdmFyIGJlemllckN1cnZlID0ge307XHJcbiAgYmV6aWVyQ3VydmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gIGJlemllckN1cnZlLmVuZCA9IG9wdGlvbnMuZW5kO1xyXG4gIGJlemllckN1cnZlLmNwb2ludDEgPSBvcHRpb25zLmNwb2ludDE7XHJcbiAgYmV6aWVyQ3VydmUuY3BvaW50MiA9IG9wdGlvbnMuY3BvaW50MjtcclxuICBiZXppZXJDdXJ2ZS50eXBlID0gJ2Jlemllcl9jdXJ2ZSc7XHJcblxyXG4gIGlmKGJlemllckN1cnZlLmNwb2ludDIpe1xyXG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgQmV6aWVyKGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5jcG9pbnQyLCBiZXppZXJDdXJ2ZS5lbmQpO1xyXG4gIH1lbHNle1xyXG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgQmV6aWVyKGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5lbmQpO1xyXG4gIH1cclxuXHJcbiAgYmV6aWVyQ3VydmUuc3ViUGF0aHMgPSBbYmV6aWVyQ3VydmVdO1xyXG5cclxuICBiZXppZXJDdXJ2ZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGJlemllckN1cnZlLmVuZDtcclxuICB9O1xyXG5cclxuICBiZXppZXJDdXJ2ZS5nZXRMZW5ndGggPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyLmxlbmd0aCgpO1xyXG4gIH07XHJcblxyXG4gIGJlemllckN1cnZlLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgcmV0dXJuIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyLmdldChwcm9ncmVzcyk7XHJcbiAgfTtcclxuXHJcbiAgLy9UT0RPIEFkZCBnZXQgcGFydCBwYXRoIGZ1bmN0aW9uXHJcblxyXG4gIHJldHVybiBiZXppZXJDdXJ2ZTtcclxufVxyXG4iLCJpbXBvcnQgdG9WZWN0b3IgZnJvbSAnfi9nZW9tZXRyeS90b192ZWN0b3InO1xyXG5pbXBvcnQgZGlzdGFuY2UgZnJvbSAnfi9nZW9tZXRyeS9kaXN0YW5jZSc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lQ29uc3RydWN0b3Iob3B0aW9ucyl7XHJcblxyXG5jaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xyXG5cclxuICB2YXIgbGluZSA9IHt9O1xyXG4gIGxpbmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gIGxpbmUuZW5kID0gb3B0aW9ucy5lbmQ7XHJcbiAgbGluZS50eXBlID0gJ2xpbmUnO1xyXG5cclxuICBsaW5lLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gbGluZS5lbmQ7XHJcbiAgfTtcclxuXHJcbiAgbGluZS5nZXRMZW5ndGggPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGRpc3RhbmNlKHRvVmVjdG9yKGxpbmUuc3RhcnQpLCB0b1ZlY3RvcihsaW5lLmVuZCkpO1xyXG4gIH07XHJcblxyXG4gIGxpbmUuZ2V0UG9pbnQgPSBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHg6IGxpbmUuc3RhcnQueCArIChsaW5lLmVuZC54IC0gbGluZS5zdGFydC54KSAqIHByb2dyZXNzLFxyXG4gICAgICAgICAgICAgIHk6IGxpbmUuc3RhcnQueSArIChsaW5lLmVuZC55IC0gbGluZS5zdGFydC55KSAqIHByb2dyZXNzXHJcbiAgICAgICAgICAgfTtcclxuICB9O1xyXG5cclxuICBsaW5lLmdldFBhcnRQYXRoID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIG5ld0VuZCA9IHsgeDogbGluZS5lbmQueCAqIHByb2dyZXNzLCB5OiBsaW5lLmVuZC55ICogcHJvZ3Jlc3N9O1xyXG4gICAgdmFyIHBhdGhQYXJ0ID0gbGluZUNvbnN0cnVjdG9yKHtzdGFydDogbGluZS5zdGFydCwgZW5kOiBuZXdFbmR9KTtcclxuICAgIHJldHVybiBwYXRoUGFydDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbGluZTtcclxufVxyXG4iLCJpbXBvcnQgYWRkVXBQb2ludHMgZnJvbSAnfi9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhdGhDb25zdHJ1Y3Rvcigpe1xyXG5cclxuICB2YXIgcGF0aCA9IHt9O1xyXG5cclxuICBwYXRoLnN1YlBhdGhzID0gW107XHJcblxyXG4gIHBhdGguZ2V0RWRnZVBvaW50cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZWRnZVBvaW50cyA9IFtdO1xyXG4gICAgZWRnZVBvaW50cy5wdXNoKHt4OiAwLCB5OiAwfSk7XHJcbiAgICBmb3IodmFyIHN1YlBhdGggb2YgcGF0aC5zdWJQYXRocyl7XHJcbiAgICAgIGVkZ2VQb2ludHMucHVzaChhZGRVcFBvaW50cyhlZGdlUG9pbnRzW2VkZ2VQb2ludHMubGVuZ3RoIC0gMV0sIHN1YlBhdGguZ2V0RWRnZVBvaW50KCkpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlZGdlUG9pbnRzO1xyXG4gIH07XHJcblxyXG4gIHBhdGguZ2V0U3RhcnRQb2ludE9mID0gZnVuY3Rpb24oc3ViUGF0aCl7XHJcbiAgICB2YXIgc3RhcnRQb2ludCA9ICh7eDogMCwgeTogMH0pO1xyXG5cclxuICAgIGZvcih2YXIgY3VycmVudFBhdGggb2YgcGF0aC5zdWJQYXRocyl7XHJcbiAgICAgIGlmKGN1cnJlbnRQYXRoID09PSBzdWJQYXRoKXtcclxuICAgICAgICByZXR1cm4gc3RhcnRQb2ludDtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc3RhcnRQb2ludCA9IGFkZFVwUG9pbnRzKHN0YXJ0UG9pbnQsIGN1cnJlbnRQYXRoLmdldEVkZ2VQb2ludCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHBhdGguZ2V0UG9pbnQgPSBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHBhdGguZ2V0TGVuZ3RoKCk7XHJcbiAgICBmb3IodmFyIHN1YlBhdGggb2YgcGF0aC5zdWJQYXRocyl7XHJcbiAgICAgIGlmKGxlbmd0aFBvaW50ID4gc3ViUGF0aC5nZXRMZW5ndGgoKSl7XHJcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGFkZFVwUG9pbnRzKHN1YlBhdGguZ2V0UG9pbnQoKGxlbmd0aFBvaW50IC8gc3ViUGF0aC5nZXRMZW5ndGgoKSkgKSwgcGF0aC5nZXRTdGFydFBvaW50T2Yoc3ViUGF0aCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcGF0aC5nZXRMZW5ndGggPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGxlbmd0aCA9IDA7XHJcbiAgICBmb3IodmFyIHN1YlBhdGggb2YgcGF0aC5zdWJQYXRocyl7XHJcbiAgICAgIGxlbmd0aCArPSBzdWJQYXRoLmdldExlbmd0aCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlbmd0aDtcclxuICB9O1xyXG5cclxuICBwYXRoLmdldFBhcnRQYXRoID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIG5ld1N1YlBhdGhzID0gW107XHJcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHBhdGguZ2V0TGVuZ3RoKCk7XHJcbiAgICB2YXIgc3ViUGF0aHNSZXRyaWV2ZWQgPSBmYWxzZTtcclxuICAgIHZhciBjdXJyZW50UGF0aCA9IDA7XHJcblxyXG4gICAgd2hpbGUoIXN1YlBhdGhzUmV0cmlldmVkKXtcclxuICAgICAgaWYobGVuZ3RoUG9pbnQgPiBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSl7XHJcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aCgxKSk7XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCArIDE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2gocGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoKGxlbmd0aFBvaW50IC8gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpKSk7XHJcbiAgICAgICAgc3ViUGF0aHNSZXRyaWV2ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhcnRQYXRoID0gcGF0aENvbnN0cnVjdG9yKCk7XHJcbiAgICBwYXJ0UGF0aC5zdWJQYXRocyA9IG5ld1N1YlBhdGhzO1xyXG4gICAgcmV0dXJuIHBhcnRQYXRoO1xyXG5cclxuICB9O1xyXG5cclxuICByZXR1cm4gcGF0aDtcclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocG9pbnQsIGFuZ2xlKXtcclxuICByZXR1cm4ge1xyXG4gICAgICB4OiBwb2ludC54ICogTWF0aC5jb3MoYW5nbGUpIC0gcG9pbnQueSAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgICAgeTogcG9pbnQueCAqIE1hdGguc2luKGFuZ2xlKSArIHBvaW50LnkgKiBNYXRoLmNvcyhhbmdsZSlcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvaW50KXtcclxuICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmFtZXRlck9iamVjdCwgb3B0aW9uLCByZXF1aXJlZCwgZGVmYXVsdFZhbHVlKXtcclxuICBpZighcmVxdWlyZWQpe1xyXG4gICAgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPSBwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSA/IHBhcmFtZXRlck9iamVjdFtvcHRpb25dIDogZGVmYXVsdFZhbHVlO1xyXG4gIH1lbHNle1xyXG4gICAgaWYoIXBhcmFtZXRlck9iamVjdC5oYXNPd25Qcm9wZXJ0eShvcHRpb24pICl7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBvcHRpb246JyArIG9wdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSwgZG9Ob3RDaGFpbil7XHJcbiAgaWYoIWRvTm90Q2hhaW4pe1xyXG4gICAgaWYoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnc2V0UHJvcCcpKXtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuc2V0UHJvcChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpe1xyXG4gICAgZWxlbWVudFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgIGlmKGVsZW1lbnQuc2VuZEV2ZW50KXtcclxuICAgICAgZWxlbWVudC5zZW5kRXZlbnQoJ3Byb3BlcnR5X2NoYW5nZScpO1xyXG4gICAgfVxyXG4gIH1lbHNle1xyXG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgcHJvcGVydHkgb2Ygb2JqZWN0LiBPYmplY3QgaGFzblxcJ3QgdGhlIHByb3BlcnR5OiAnICsgcHJvcGVydHkpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBhZGRBbmltYXRpb246IGZ1bmN0aW9uKGhhbmRsZSl7XHJcbiAgICAgIGNyZWF0ZWpzLlRpY2tlci5zZXRGUFMoNjApO1xyXG4gICAgICBjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQW5pbWF0aW9uOiBmdW5jdGlvbihoYW5kbGUpe1xyXG4gICAgICBjcmVhdGVqcy5UaWNrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCB7IHB1bHNhclRyYW5zaXRpb24sIHJpc2luZ1RyYW5zaXRpb24gfSBmcm9tICd+L3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcbmltcG9ydCBzZXRQcm9wIGZyb20gJ34vaW50ZXJuYWwvc2V0X3Byb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2xpbWl0JywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ251bWJlck9mSW50ZXJ2YWxzJywgZmFsc2UpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyaXNpbmcnLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NlbnRlcklmUG9zc2libGUnLCBmYWxzZSwgdHJ1ZSk7XHJcblxyXG5cclxuICB2YXIgbGluZWFyUHVsc2FyID0ge307XHJcbiAgbGluZWFyUHVsc2FyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XHJcbiAgbGluZWFyUHVsc2FyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcclxuICBsaW5lYXJQdWxzYXIubGltaXQgPSBvcHRpb25zLmxpbWl0O1xyXG4gIGlmKCFvcHRpb25zLnJpc2luZyl7XHJcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyID0gcHVsc2FyVHJhbnNpdGlvbihsaW5lYXJQdWxzYXIuc3BlZWQsIDAsIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMpO1xyXG4gIH1lbHNle1xyXG4gICAgbGluZWFyUHVsc2FyLnB1bHNhciA9IHJpc2luZ1RyYW5zaXRpb24obGluZWFyUHVsc2FyLnNwZWVkLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzKTtcclxuICB9XHJcblxyXG4gIGxpbmVhclB1bHNhci5zdGFydCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0YXJ0KGxpbmVhclB1bHNhci5oYW5kbGUpO1xyXG4gIH07XHJcblxyXG4gIGxpbmVhclB1bHNhci5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIGxpbmVhclB1bHNhci5wdWxzYXIuc3RvcCgpO1xyXG4gIH07XHJcblxyXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbihjdXJyZW50KXtcclxuICAgIHNldFByb3AobGluZWFyUHVsc2FyLnN1YmplY3QsICdzY2FsZScsIDEgKyBjdXJyZW50ICogKGxpbmVhclB1bHNhci5saW1pdCAtIDEpKTtcclxuICAgIGxpbmVhclB1bHNhci5zdWJqZWN0LmRyYXcoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbGluZWFyUHVsc2FyO1xyXG59XHJcbiIsImltcG9ydCBsb29wIGZyb20gJ34vbG9vcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnRlcnZhbCl7XHJcbiAgdmFyIHRpbWVyID0ge307XHJcbiAgdGltZXIuY3VycmVudFRpbWUgPSAwO1xyXG4gIHRpbWVyLmludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgdGltZXIubGlzdGVuZXJzID0gW107XHJcblxyXG4gIHRpbWVyLmhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIHRpbWVyLmN1cnJlbnRUaW1lICs9IGV2ZW50LmRlbHRhO1xyXG5cclxuICAgIHdoaWxlKHRpbWVyLmN1cnJlbnRUaW1lID4gdGltZXIuaW50ZXJ2YWwpe1xyXG4gICAgICAgY2FsbExpc3RlbmVycygpO1xyXG4gICAgICAgdGltZXIuY3VycmVudFRpbWUgLT0gdGltZXIuaW50ZXJ2YWw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdGltZXIuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICB0aW1lci5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgfTtcclxuXHJcbiAgdGltZXIucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbihsaXN0ZW5lcil7XHJcbiAgICB0aW1lci5saXN0ZW5lcnMuc3BsaWNlKHRpbWVyLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgdGltZXIuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG4gICAgbG9vcC5hZGRBbmltYXRpb24odGltZXIuaGFuZGxlKTtcclxuICB9O1xyXG5cclxuICB0aW1lci5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIGxvb3AucmVtb3ZlQW5pbWF0aW9uKHRpbWVyLmhhbmRsZSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gY2FsbExpc3RlbmVycygpe1xyXG4gICAgZm9yKHZhciBsaXN0ZW5lciBvZiB0aW1lci5saXN0ZW5lcnMpe1xyXG4gICAgICBsaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRpbWVyO1xyXG59XHJcbiIsImltcG9ydCBsb29wIGZyb20gJ34vbG9vcCc7XHJcblxyXG5cclxuZnVuY3Rpb24gdHJhbnNpdGlvbkxvb3AoaW50ZXJ2YWwsIHN0ZWVwbmVzcywgY3VycmVudCwgbnVtYmVyT2ZJbnRlcnZhbHMsIG9uRmluaXNoZWRJbnRlcnZhbCl7XHJcbiAgdmFyIHB1bHNhciA9IHt9O1xyXG4gIHB1bHNhci5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPSAwO1xyXG4gIHB1bHNhci5zdGVlcG5lc3MgPSAodHlwZW9mIHN0ZWVwbmVzcyAhPT0gJ3VuZGVmaW5lZCcpID8gc3RlZXBuZXNzIDogMC41O1xyXG4gIHB1bHNhci5jdXJyZW50ID0gY3VycmVudCA/IGN1cnJlbnQgOiAwO1xyXG4gIHB1bHNhci5pbmNyZWFzZSA9IHRydWU7XHJcbiAgcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyA9IGN1cnJlbnQgPyBjdXJyZW50ICogaW50ZXJ2YWwuZ2V0TXMoKSA6IDA7XHJcbiAgcHVsc2FyLm51bWJlck9mSW50ZXJ2YWxzID0gbnVtYmVyT2ZJbnRlcnZhbHMgPyBudW1iZXJPZkludGVydmFscyA6IDA7XHJcbiAgcHVsc2FyLm9uRmluaXNoZWRJbnRlcnZhbCA9IG9uRmluaXNoZWRJbnRlcnZhbDtcclxuXHJcbiAgcHVsc2FyLnN0YXJ0ID0gZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gICAgcHVsc2FyLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICBsb29wLmFkZEFuaW1hdGlvbihwdWxzYXIuaGFuZGxlKTtcclxuICB9O1xyXG5cclxuICBwdWxzYXIuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsb29wLnJlbW92ZUFuaW1hdGlvbihwdWxzYXIuaGFuZGxlKTtcclxuICAgIHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPSAwO1xyXG4gIH07XHJcblxyXG4gIHB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyArIGV2ZW50LmRlbHRhO1xyXG5cclxuICAgIHZhciBsYXN0Q3VycmVudCA9IHB1bHNhci5jdXJyZW50O1xyXG4gICAgcHVsc2FyLmN1cnJlbnQgPSBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudChwdWxzYXIuY3VycmVudE1zZWNvbmRzKTtcclxuICAgIHB1bHNhci5pbmNyZWFzZSA9IChsYXN0Q3VycmVudCA8IHB1bHNhci5jdXJyZW50KTtcclxuICAgIGlmKHB1bHNhci5jYWxsYmFjayl7XHJcbiAgICAgIHB1bHNhci5jYWxsYmFjayhwdWxzYXIuY3VycmVudCwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVydmFsUG9zdFByb2Nlc3NpbmcoKTtcclxuICB9O1xyXG5cclxuICBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudCA9IGZ1bmN0aW9uKG1zKXtcclxuICAgIHZhciByZWxhdGl2ZUN1cnJlbnQ7XHJcbiAgICBpZihwdWxzYXIuaW50ZXJ2YWwudHlwZSA9PT0gJ21zJyl7XHJcbiAgICAgIHJlbGF0aXZlQ3VycmVudCA9IChtcyAvIHB1bHNhci5pbnRlcnZhbC5tcykgJSAxO1xyXG4gICAgfVxyXG4gICAgaWYocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdicG0nKXtcclxuICAgICAgcmVsYXRpdmVDdXJyZW50ID0gKCggbXMgKiBwdWxzYXIuaW50ZXJ2YWwuYnBtKSAvICg2MDAwMCkpICUgMTtcclxuICAgIH1cclxuXHJcbiAgICBpZihyZWxhdGl2ZUN1cnJlbnQgPD0gcHVsc2FyLnN0ZWVwbmVzcyl7XHJcbiAgICAgIHJldHVybiAocmVsYXRpdmVDdXJyZW50KSAvIHB1bHNhci5zdGVlcG5lc3M7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgcmV0dXJuIDEgLSAocmVsYXRpdmVDdXJyZW50IC0gcHVsc2FyLnN0ZWVwbmVzcykgLyAoMSAtIHB1bHNhci5zdGVlcG5lc3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQgPSBmdW5jdGlvbihmYWN0b3Ipe1xyXG5cclxuICAgIC8vIEZpcnN0IHByZXBhcmUgdGhlIHZhbHVlIHdoaWNoIGlzIHBhc3NlZCB0byB0aGUgY2FsY3VsYXRlQ3VycmVudCBmdW5jdGlvbjpcclxuICAgIHZhciBmYWN0b3JJbk1zO1xyXG4gICAgaWYocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdtcycpe1xyXG4gICAgICBmYWN0b3JJbk1zID0gZmFjdG9yICogcHVsc2FyLmludGVydmFsLm1zO1xyXG4gICAgfVxyXG4gICAgaWYocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdicG0nKXtcclxuICAgICAgZmFjdG9ySW5NcyA9IGZhY3RvciAqICg2MDAwMCAvIHB1bHNhci5pbnRlcnZhbC5icG0pO1xyXG4gICAgfVxyXG4gICAgdmFyIG1zVG9DaGVjayA9IGZhY3RvckluTXMgKyBwdWxzYXIuY3VycmVudE1zZWNvbmRzO1xyXG5cclxuICAgIGlmKG1zVG9DaGVjayA8IDAgKXtcclxuICAgICAgaWYocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdtcycpe1xyXG4gICAgICAgIG1zVG9DaGVjayA9IG1zVG9DaGVjayArIHB1bHNhci5pbnRlcnZhbC5tcyAqIE1hdGguY2VpbChNYXRoLmFicyhtc1RvQ2hlY2spIC8gcHVsc2FyLmludGVydmFsLm1zKTtcclxuICAgICAgfVxyXG4gICAgICBpZihwdWxzYXIuaW50ZXJ2YWwudHlwZSA9PT0gJ2JwbScpe1xyXG4gICAgICAgIG1zVG9DaGVjayA9IG1zVG9DaGVjayArICg2MDAwMCAvIHB1bHNhci5pbnRlcnZhbC5icG0pICogTWF0aC5jZWlsKCBNYXRoLmFicyhtc1RvQ2hlY2spIC8gKDYwMDAwIC8gcHVsc2FyLmludGVydmFsLmJwbSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHB1bHNhci5jYWxjdWxhdGVDdXJyZW50KG1zVG9DaGVjayk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW50ZXJ2YWxQb3N0UHJvY2Vzc2luZygpe1xyXG4gICAgdmFyIGN1cnJlbnRJbnRlcnZhbDtcclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgY3VycmVudEludGVydmFsID0gTWF0aC5mbG9vcihwdWxzYXIuY3VycmVudE1zZWNvbmRzIC8gcHVsc2FyLmludGVydmFsLm1zKTtcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnYnBtJyl7XHJcbiAgICAgIGN1cnJlbnRJbnRlcnZhbCA9IE1hdGguZmxvb3IoKCBwdWxzYXIuY3VycmVudE1zZWNvbmRzICogcHVsc2FyLmludGVydmFsLmJwbSkgLyAoNjAwMDApKTtcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPCBjdXJyZW50SW50ZXJ2YWwpe1xyXG4gICAgICBwdWxzYXIuY3VycmVudEludGVydmFsID0gY3VycmVudEludGVydmFsO1xyXG4gICAgICBoYW5kbGVJbnRlcnZhbEZpbmlzaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVJbnRlcnZhbEZpbmlzaGVkKCl7XHJcbiAgICBpZihwdWxzYXIubnVtYmVyT2ZJbnRlcnZhbHMgPiAwKXtcclxuICAgICAgaWYocHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9PT0gcHVsc2FyLm51bWJlck9mSW50ZXJ2YWxzKXtcclxuICAgICAgICBwdWxzYXIuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihwdWxzYXIub25GaW5pc2hlZEludGVydmFsKXtcclxuICAgICAgcHVsc2FyLm9uRmluaXNoZWRJbnRlcnZhbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHB1bHNhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJpc2luZ1RyYW5zaXRpb24odGltZSwgY3VycmVudCwgbnVtYmVyT2ZJbnRlcnZhbHMsIG9uRmluaXNoZWRJbnRlcnZhbCl7XHJcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDEsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHVsc2FyVHJhbnNpdGlvbih0aW1lLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKXtcclxuICByZXR1cm4gdHJhbnNpdGlvbkxvb3AodGltZSwgMCwgY3VycmVudCwgbnVtYmVyT2ZJbnRlcnZhbHMsIG9uRmluaXNoZWRJbnRlcnZhbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRyYW5zaXRpb25Mb29wO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoMTA0KTtcbiIsIi8qKlxuICBBIGphdmFzY3JpcHQgQmV6aWVyIGN1cnZlIGxpYnJhcnkgYnkgUG9tYXguXG5cbiAgQmFzZWQgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvXG5cbiAgVGhpcyBjb2RlIGlzIE1JVCBsaWNlbnNlZC5cbioqL1xuKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBtaW4gPSBNYXRoLm1pbixcbiAgICAgIG1heCA9IE1hdGgubWF4LFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwaSA9IE1hdGguUEksXG4gICAgICAvLyBhIHplcm8gY29vcmRpbmF0ZSwgd2hpY2ggaXMgc3VycHJpc2luZ2x5IHVzZWZ1bFxuICAgICAgWkVSTyA9IHt4OjAseTowLHo6MH07XG5cbiAgLy8gcXVpdGUgbmVlZGVkXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoMTA2KTtcblxuICAvLyBub3QgcXVpdGUgbmVlZGVkLCBidXQgZXZlbnR1YWxseSB0aGlzJ2xsIGJlIHVzZWZ1bC4uLlxuICB2YXIgUG9seUJlemllciA9IHJlcXVpcmUoMTA1KTtcblxuICAvKipcbiAgICogQmV6aWVyIGN1cnZlIGNvbnN0cnVjdG9yLiBUaGUgY29uc3RydWN0b3IgYXJndW1lbnQgY2FuIGJlIG9uZSBvZiB0aHJlZSB0aGluZ3M6XG4gICAqXG4gICAqIDEuIGFycmF5LzQgb2Yge3g6Li4uLCB5Oi4uLiwgejouLi59LCB6IG9wdGlvbmFsXG4gICAqIDIuIG51bWVyaWNhbCBhcnJheS84IG9yZGVyZWQgeDEseTEseDIseTIseDMseTMseDQseTRcbiAgICogMy4gbnVtZXJpY2FsIGFycmF5LzEyIG9yZGVyZWQgeDEseTEsejEseDIseTIsejIseDMseTMsejMseDQseTQsejRcbiAgICpcbiAgICovXG4gIHZhciBCZXppZXIgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgICB2YXIgYXJncyA9IChjb29yZHMgJiYgY29vcmRzLmZvckVhY2gpID8gY29vcmRzIDogW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciBjb29yZGxlbiA9IGZhbHNlO1xuICAgIGlmKHR5cGVvZiBhcmdzWzBdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb29yZGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIG5ld2FyZ3MgPSBbXTtcbiAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihwb2ludCkge1xuICAgICAgICBbJ3gnLCd5JywneiddLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGlmKHR5cGVvZiBwb2ludFtkXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbmV3YXJncy5wdXNoKHBvaW50W2RdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBhcmdzID0gbmV3YXJncztcbiAgICB9XG4gICAgdmFyIGhpZ2hlciA9IGZhbHNlO1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICBpZiAoY29vcmRsZW4pIHtcbiAgICAgIGlmKGNvb3JkbGVuPjQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBoaWdoZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihsZW4hPT02ICYmIGxlbiE9PTggJiYgbGVuIT09OSAmJiBsZW4hPT0xMikge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgbmV3IEJlemllcihwb2ludFtdKSBpcyBhY2NlcHRlZCBmb3IgNHRoIGFuZCBoaWdoZXIgb3JkZXIgY3VydmVzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBfM2QgPSAoIWhpZ2hlciAmJiAobGVuID09PSA5IHx8IGxlbiA9PT0gMTIpKSB8fCAoY29vcmRzICYmIGNvb3Jkc1swXSAmJiB0eXBlb2YgY29vcmRzWzBdLnogIT09IFwidW5kZWZpbmVkXCIpO1xuICAgIHRoaXMuXzNkID0gXzNkO1xuICAgIHZhciBwb2ludHMgPSBbXTtcbiAgICBmb3IodmFyIGlkeD0wLCBzdGVwPShfM2QgPyAzIDogMik7IGlkeDxsZW47IGlkeCs9c3RlcCkge1xuICAgICAgdmFyIHBvaW50ID0ge1xuICAgICAgICB4OiBhcmdzW2lkeF0sXG4gICAgICAgIHk6IGFyZ3NbaWR4KzFdXG4gICAgICB9O1xuICAgICAgaWYoXzNkKSB7IHBvaW50LnogPSBhcmdzW2lkeCsyXSB9O1xuICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgIH1cbiAgICB0aGlzLm9yZGVyID0gcG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgdmFyIGRpbXMgPSBbJ3gnLCd5J107XG4gICAgaWYoXzNkKSBkaW1zLnB1c2goJ3onKTtcbiAgICB0aGlzLmRpbXMgPSBkaW1zO1xuICAgIHRoaXMuZGltbGVuID0gZGltcy5sZW5ndGg7XG5cbiAgICAoZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHZhciBvcmRlciA9IGN1cnZlLm9yZGVyO1xuICAgICAgdmFyIHBvaW50cyA9IGN1cnZlLnBvaW50cztcbiAgICAgIHZhciBhID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7cDE6cG9pbnRzWzBdLCBwMjpwb2ludHNbb3JkZXJdfSk7XG4gICAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFicyhhW2ldLnkpID4gMC4wMDAxKSB7XG4gICAgICAgICAgY3VydmUuX2xpbmVhciA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3VydmUuX2xpbmVhciA9IHRydWU7XG4gICAgfSh0aGlzKSk7XG5cbiAgICB0aGlzLl90MSA9IDA7XG4gICAgdGhpcy5fdDIgPSAxO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH07XG5cbiAgQmV6aWVyLmZyb21TVkcgPSBmdW5jdGlvbihzdmdTdHJpbmcpIHtcbiAgICB2YXIgbGlzdCA9IHN2Z1N0cmluZy5tYXRjaCgvWy0rXT9cXGQqXFwuP1xcZCsoPzpbZUVdWy0rXT9cXGQrKT8vZykubWFwKHBhcnNlRmxvYXQpO1xuICAgIHZhciByZWxhdGl2ZSA9IC9bY3FdLy50ZXN0KHN2Z1N0cmluZyk7XG4gICAgaWYoIXJlbGF0aXZlKSByZXR1cm4gbmV3IEJlemllcihsaXN0KTtcbiAgICBsaXN0ID0gbGlzdC5tYXAoZnVuY3Rpb24odixpKSB7XG4gICAgICByZXR1cm4gaSA8IDIgPyB2IDogdiArIGxpc3RbaSAlIDJdO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQmV6aWVyKGxpc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFCQyhuLFMsQixFLHQpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgdmFyIHUgPSB1dGlscy5wcm9qZWN0aW9ucmF0aW8odCxuKSxcbiAgICAgICAgdW0gPSAxLXUsXG4gICAgICAgIEMgPSB7XG4gICAgICAgICAgeDogdSpTLnggKyB1bSpFLngsXG4gICAgICAgICAgeTogdSpTLnkgKyB1bSpFLnlcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHV0aWxzLmFiY3JhdGlvKHQsbiksXG4gICAgICAgIEEgPSB7XG4gICAgICAgICAgeDogQi54ICsgKEIueC1DLngpL3MsXG4gICAgICAgICAgeTogQi55ICsgKEIueS1DLnkpL3NcbiAgICAgICAgfTtcbiAgICByZXR1cm4geyBBOkEsIEI6QiwgQzpDIH07XG4gIH1cblxuICBCZXppZXIucXVhZHJhdGljRnJvbVBvaW50cyA9IGZ1bmN0aW9uKHAxLHAyLHAzLCB0KSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIC8vIHNob3J0Y3V0cywgYWx0aG91Z2ggdGhleSdyZSByZWFsbHkgZHVtYlxuICAgIGlmKHQ9PT0wKSB7IHJldHVybiBuZXcgQmV6aWVyKHAyLHAyLHAzKTsgfVxuICAgIGlmKHQ9PT0xKSB7IHJldHVybiBuZXcgQmV6aWVyKHAxLHAyLHAyKTsgfVxuICAgIC8vIHJlYWwgZml0dGluZy5cbiAgICB2YXIgYWJjID0gZ2V0QUJDKDIscDEscDIscDMsdCk7XG4gICAgcmV0dXJuIG5ldyBCZXppZXIocDEsIGFiYy5BLCBwMyk7XG4gIH07XG5cbiAgQmV6aWVyLmN1YmljRnJvbVBvaW50cyA9IGZ1bmN0aW9uKFMsQixFLCB0LGQxKSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIHZhciBhYmMgPSBnZXRBQkMoMyxTLEIsRSx0KTtcbiAgICBpZih0eXBlb2YgZDEgPT09IFwidW5kZWZpbmVkXCIpIHsgZDEgPSB1dGlscy5kaXN0KEIsYWJjLkMpOyB9XG4gICAgdmFyIGQyID0gZDEgKiAoMS10KS90O1xuXG4gICAgdmFyIHNlbGVuID0gdXRpbHMuZGlzdChTLEUpLFxuICAgICAgICBseCA9IChFLngtUy54KS9zZWxlbixcbiAgICAgICAgbHkgPSAoRS55LVMueSkvc2VsZW4sXG4gICAgICAgIGJ4MSA9IGQxICogbHgsXG4gICAgICAgIGJ5MSA9IGQxICogbHksXG4gICAgICAgIGJ4MiA9IGQyICogbHgsXG4gICAgICAgIGJ5MiA9IGQyICogbHk7XG4gICAgLy8gZGVyaXZhdGlvbiBvZiBuZXcgaHVsbCBjb29yZGluYXRlc1xuICAgIHZhciBlMSAgPSB7IHg6IEIueCAtIGJ4MSwgeTogQi55IC0gYnkxIH0sXG4gICAgICAgIGUyICA9IHsgeDogQi54ICsgYngyLCB5OiBCLnkgKyBieTIgfSxcbiAgICAgICAgQSA9IGFiYy5BLFxuICAgICAgICB2MSAgPSB7IHg6IEEueCArIChlMS54LUEueCkvKDEtdCksIHk6IEEueSArIChlMS55LUEueSkvKDEtdCkgfSxcbiAgICAgICAgdjIgID0geyB4OiBBLnggKyAoZTIueC1BLngpLyh0KSwgeTogQS55ICsgKGUyLnktQS55KS8odCkgfSxcbiAgICAgICAgbmMxID0geyB4OiBTLnggKyAodjEueC1TLngpLyh0KSwgeTogUy55ICsgKHYxLnktUy55KS8odCkgfSxcbiAgICAgICAgbmMyID0geyB4OiBFLnggKyAodjIueC1FLngpLygxLXQpLCB5OiBFLnkgKyAodjIueS1FLnkpLygxLXQpIH07XG4gICAgLy8gLi4uZG9uZVxuICAgIHJldHVybiBuZXcgQmV6aWVyKFMsbmMxLG5jMixFKTtcbiAgfTtcblxuICB2YXIgZ2V0VXRpbHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH07XG5cbiAgQmV6aWVyLmdldFV0aWxzID0gZ2V0VXRpbHM7XG5cbiAgQmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICBnZXRVdGlsczogZ2V0VXRpbHMsXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLnBvaW50c1RvU3RyaW5nKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIHRvU1ZHOiBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICAgICAgaWYodGhpcy5fM2QpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsXG4gICAgICAgICAgeCA9IHBbMF0ueCxcbiAgICAgICAgICB5ID0gcFswXS55LFxuICAgICAgICAgIHMgPSBbXCJNXCIsIHgsIHksICh0aGlzLm9yZGVyPT09MiA/IFwiUVwiOlwiQ1wiKV07XG4gICAgICBmb3IodmFyIGk9MSwgbGFzdD1wLmxlbmd0aDsgaTxsYXN0OyBpKyspIHtcbiAgICAgICAgcy5wdXNoKHBbaV0ueCk7XG4gICAgICAgIHMucHVzaChwW2ldLnkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHMuam9pbihcIiBcIik7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gb25lLXRpbWUgY29tcHV0ZSBkZXJpdmF0aXZlIGNvb3JkaW5hdGVzXG4gICAgICB0aGlzLmRwb2ludHMgPSBbXTtcbiAgICAgIGZvcih2YXIgcD10aGlzLnBvaW50cywgZD1wLmxlbmd0aCwgYz1kLTE7IGQ+MTsgZC0tLCBjLS0pIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yKHZhciBqPTAsIGRwdDsgajxjOyBqKyspIHtcbiAgICAgICAgICBkcHQgPSB7XG4gICAgICAgICAgICB4OiBjICogKHBbaisxXS54IC0gcFtqXS54KSxcbiAgICAgICAgICAgIHk6IGMgKiAocFtqKzFdLnkgLSBwW2pdLnkpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgICAgZHB0LnogPSBjICogKHBbaisxXS56IC0gcFtqXS56KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC5wdXNoKGRwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcG9pbnRzLnB1c2gobGlzdCk7XG4gICAgICAgIHAgPSBsaXN0O1xuICAgICAgfTtcbiAgICAgIHRoaXMuY29tcHV0ZWRpcmVjdGlvbigpO1xuICAgIH0sXG4gICAgY29tcHV0ZWRpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICB2YXIgYW5nbGUgPSB1dGlscy5hbmdsZShwb2ludHNbMF0sIHBvaW50c1t0aGlzLm9yZGVyXSwgcG9pbnRzWzFdKTtcbiAgICAgIHRoaXMuY2xvY2t3aXNlID0gYW5nbGUgPiAwO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5sZW5ndGgodGhpcy5kZXJpdmF0aXZlLmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgX2x1dDogW10sXG4gICAgZ2V0TFVUOiBmdW5jdGlvbihzdGVwcykge1xuICAgICAgc3RlcHMgPSBzdGVwcyB8fCAxMDA7XG4gICAgICBpZiAodGhpcy5fbHV0Lmxlbmd0aCA9PT0gc3RlcHMpIHsgcmV0dXJuIHRoaXMuX2x1dDsgfVxuICAgICAgdGhpcy5fbHV0ID0gW107XG4gICAgICBmb3IodmFyIHQ9MDsgdDw9c3RlcHM7IHQrKykge1xuICAgICAgICB0aGlzLl9sdXQucHVzaCh0aGlzLmNvbXB1dGUodC9zdGVwcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2x1dDtcbiAgICB9LFxuICAgIG9uOiBmdW5jdGlvbihwb2ludCwgZXJyb3IpIHtcbiAgICAgIGVycm9yID0gZXJyb3IgfHwgNTtcbiAgICAgIHZhciBsdXQgPSB0aGlzLmdldExVVCgpLCBoaXRzID0gW10sIGMsIHQ9MDtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGx1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjID0gbHV0W2ldO1xuICAgICAgICBpZiAodXRpbHMuZGlzdChjLHBvaW50KSA8IGVycm9yKSB7XG4gICAgICAgICAgaGl0cy5wdXNoKGMpXG4gICAgICAgICAgdCArPSBpIC8gbHV0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoIWhpdHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdCAvPSBoaXRzLmxlbmd0aDtcbiAgICB9LFxuICAgIHByb2plY3Q6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAvLyBzdGVwIDE6IGNvYXJzZSBjaGVja1xuICAgICAgdmFyIExVVCA9IHRoaXMuZ2V0TFVUKCksIGwgPSBMVVQubGVuZ3RoLTEsXG4gICAgICAgICAgY2xvc2VzdCA9IHV0aWxzLmNsb3Nlc3QoTFVULCBwb2ludCksXG4gICAgICAgICAgbWRpc3QgPSBjbG9zZXN0Lm1kaXN0LFxuICAgICAgICAgIG1wb3MgPSBjbG9zZXN0Lm1wb3M7XG4gICAgICBpZiAobXBvcz09PTAgfHwgbXBvcz09PWwpIHtcbiAgICAgICAgdmFyIHQgPSBtcG9zL2wsIHB0ID0gdGhpcy5jb21wdXRlKHQpO1xuICAgICAgICBwdC50ID0gdDtcbiAgICAgICAgcHQuZCA9IG1kaXN0O1xuICAgICAgICByZXR1cm4gcHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0ZXAgMjogZmluZSBjaGVja1xuICAgICAgdmFyIGZ0LCB0LCBwLCBkLFxuICAgICAgICAgIHQxID0gKG1wb3MtMSkvbCxcbiAgICAgICAgICB0MiA9IChtcG9zKzEpL2wsXG4gICAgICAgICAgc3RlcCA9IDAuMS9sO1xuICAgICAgbWRpc3QgKz0gMTtcbiAgICAgIGZvcih0PXQxLGZ0PXQ7IHQ8dDIrc3RlcDsgdCs9c3RlcCkge1xuICAgICAgICBwID0gdGhpcy5jb21wdXRlKHQpO1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIGZ0ID0gdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCA9IHRoaXMuY29tcHV0ZShmdCk7XG4gICAgICBwLnQgPSBmdDtcbiAgICAgIHAuZCA9IG1kaXN0O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGUodCk7XG4gICAgfSxcbiAgICBwb2ludDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb2ludHNbaWR4XTtcbiAgICB9LFxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIC8vIHNob3J0Y3V0c1xuICAgICAgaWYodD09PTApIHsgcmV0dXJuIHRoaXMucG9pbnRzWzBdOyB9XG4gICAgICBpZih0PT09MSkgeyByZXR1cm4gdGhpcy5wb2ludHNbdGhpcy5vcmRlcl07IH1cblxuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cztcbiAgICAgIHZhciBtdCA9IDEtdDtcblxuICAgICAgLy8gbGluZWFyP1xuICAgICAgaWYodGhpcy5vcmRlcj09PTEpIHtcbiAgICAgICAgcmV0ID0ge1xuICAgICAgICAgIHg6IG10KnBbMF0ueCArIHQqcFsxXS54LFxuICAgICAgICAgIHk6IG10KnBbMF0ueSArIHQqcFsxXS55XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl8zZCkgeyByZXQueiA9IG10KnBbMF0ueiArIHQqcFsxXS56OyB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHF1YWRyYXRpYy9jdWJpYyBjdXJ2ZT9cbiAgICAgIGlmKHRoaXMub3JkZXI8NCkge1xuICAgICAgICB2YXIgbXQyID0gbXQqbXQsXG4gICAgICAgICAgICB0MiA9IHQqdCxcbiAgICAgICAgICAgIGEsYixjLGQgPSAwO1xuICAgICAgICBpZih0aGlzLm9yZGVyPT09Mikge1xuICAgICAgICAgIHAgPSBbcFswXSwgcFsxXSwgcFsyXSwgWkVST107XG4gICAgICAgICAgYSA9IG10MjtcbiAgICAgICAgICBiID0gbXQqdCoyO1xuICAgICAgICAgIGMgPSB0MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMub3JkZXI9PT0zKSB7XG4gICAgICAgICAgYSA9IG10MiptdDtcbiAgICAgICAgICBiID0gbXQyKnQqMztcbiAgICAgICAgICBjID0gbXQqdDIqMztcbiAgICAgICAgICBkID0gdCp0MjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIHg6IGEqcFswXS54ICsgYipwWzFdLnggKyBjKnBbMl0ueCArIGQqcFszXS54LFxuICAgICAgICAgIHk6IGEqcFswXS55ICsgYipwWzFdLnkgKyBjKnBbMl0ueSArIGQqcFszXS55XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgcmV0LnogPSBhKnBbMF0ueiArIGIqcFsxXS56ICsgYypwWzJdLnogKyBkKnBbM10uejtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBoaWdoZXIgb3JkZXIgY3VydmVzOiB1c2UgZGUgQ2FzdGVsamF1J3MgY29tcHV0YXRpb25cbiAgICAgIHZhciBkQ3B0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb2ludHMpKTtcbiAgICAgIHdoaWxlKGRDcHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGRDcHRzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICBkQ3B0c1tpXSA9IHtcbiAgICAgICAgICAgIHg6IGRDcHRzW2ldLnggKyAoZENwdHNbaSsxXS54IC0gZENwdHNbaV0ueCkgKiB0LFxuICAgICAgICAgICAgeTogZENwdHNbaV0ueSArIChkQ3B0c1tpKzFdLnkgLSBkQ3B0c1tpXS55KSAqIHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0eXBlb2YgZENwdHNbaV0ueiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZENwdHNbaV0gPSBkQ3B0c1tpXS56ICsgKGRDcHRzW2krMV0ueiAtIGRDcHRzW2ldLnopICogdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkQ3B0cy5zcGxpY2UoZENwdHMubGVuZ3RoLTEsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRDcHRzWzBdO1xuICAgIH0sXG4gICAgcmFpc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cywgbnAgPSBbcFswXV0sIGksIGs9cC5sZW5ndGgsIHBpLCBwaW07XG4gICAgICBmb3IgKHZhciBpPTE7IGk8azsgaSsrKSB7XG4gICAgICAgIHBpID0gcFtpXTtcbiAgICAgICAgcGltID0gcFtpLTFdO1xuICAgICAgICBucFtpXSA9IHtcbiAgICAgICAgICB4OiAoay1pKS9rICogcGkueCArIGkvayAqIHBpbS54LFxuICAgICAgICAgIHk6IChrLWkpL2sgKiBwaS55ICsgaS9rICogcGltLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG5wW2tdID0gcFtrLTFdO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgIH0sXG4gICAgZGVyaXZhdGl2ZTogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIG10ID0gMS10LFxuICAgICAgICAgIGEsYixjPTAsXG4gICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXTtcbiAgICAgIGlmKHRoaXMub3JkZXI9PT0yKSB7IHAgPSBbcFswXSwgcFsxXSwgWkVST107IGEgPSBtdDsgYiA9IHQ7IH1cbiAgICAgIGlmKHRoaXMub3JkZXI9PT0zKSB7IGEgPSBtdCptdDsgYiA9IG10KnQqMjsgYyA9IHQqdDsgfVxuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgeDogYSpwWzBdLnggKyBiKnBbMV0ueCArIGMqcFsyXS54LFxuICAgICAgICB5OiBhKnBbMF0ueSArIGIqcFsxXS55ICsgYypwWzJdLnlcbiAgICAgIH07XG4gICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICByZXQueiA9IGEqcFswXS56ICsgYipwWzFdLnogKyBjKnBbMl0uejtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMuaW5mbGVjdGlvbnModGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgbm9ybWFsOiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fM2QgPyB0aGlzLl9fbm9ybWFsMyh0KSA6IHRoaXMuX19ub3JtYWwyKHQpO1xuICAgIH0sXG4gICAgX19ub3JtYWwyOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcbiAgICAgIHZhciBxID0gc3FydChkLngqZC54ICsgZC55KmQueSlcbiAgICAgIHJldHVybiB7IHg6IC1kLnkvcSwgeTogZC54L3EgfTtcbiAgICB9LFxuICAgIF9fbm9ybWFsMzogZnVuY3Rpb24odCkge1xuICAgICAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjU0NTMxNTlcbiAgICAgIHZhciByMSA9IHRoaXMuZGVyaXZhdGl2ZSh0KSxcbiAgICAgICAgICByMiA9IHRoaXMuZGVyaXZhdGl2ZSh0KzAuMDEpLFxuICAgICAgICAgIHExID0gc3FydChyMS54KnIxLnggKyByMS55KnIxLnkgKyByMS56KnIxLnopLFxuICAgICAgICAgIHEyID0gc3FydChyMi54KnIyLnggKyByMi55KnIyLnkgKyByMi56KnIyLnopO1xuICAgICAgcjEueCAvPSBxMTsgcjEueSAvPSBxMTsgcjEueiAvPSBxMTtcbiAgICAgIHIyLnggLz0gcTI7IHIyLnkgLz0gcTI7IHIyLnogLz0gcTI7XG4gICAgICAvLyBjcm9zcyBwcm9kdWN0XG4gICAgICB2YXIgYyA9IHtcbiAgICAgICAgeDogcjIueSpyMS56IC0gcjIueipyMS55LFxuICAgICAgICB5OiByMi56KnIxLnggLSByMi54KnIxLnosXG4gICAgICAgIHo6IHIyLngqcjEueSAtIHIyLnkqcjEueFxuICAgICAgfTtcbiAgICAgIHZhciBtID0gc3FydChjLngqYy54ICsgYy55KmMueSArIGMueipjLnopO1xuICAgICAgYy54IC89IG07IGMueSAvPSBtOyBjLnogLz0gbTtcbiAgICAgIC8vIHJvdGF0aW9uIG1hdHJpeFxuICAgICAgdmFyIFIgPSBbICAgYy54KmMueCwgICBjLngqYy55LWMueiwgYy54KmMueitjLnksXG4gICAgICAgICAgICAgICAgYy54KmMueStjLnosICAgYy55KmMueSwgICBjLnkqYy56LWMueCxcbiAgICAgICAgICAgICAgICBjLngqYy56LWMueSwgYy55KmMueitjLngsICAgYy56KmMueiAgICBdO1xuICAgICAgLy8gbm9ybWFsIHZlY3RvcjpcbiAgICAgIHZhciBuID0ge1xuICAgICAgICB4OiBSWzBdICogcjEueCArIFJbMV0gKiByMS55ICsgUlsyXSAqIHIxLnosXG4gICAgICAgIHk6IFJbM10gKiByMS54ICsgUls0XSAqIHIxLnkgKyBSWzVdICogcjEueixcbiAgICAgICAgejogUls2XSAqIHIxLnggKyBSWzddICogcjEueSArIFJbOF0gKiByMS56XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcbiAgICBodWxsOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuICAgICAgICAgIF9wID0gW10sXG4gICAgICAgICAgcHQsXG4gICAgICAgICAgcSA9IFtdLFxuICAgICAgICAgIGlkeCA9IDAsXG4gICAgICAgICAgaT0wLFxuICAgICAgICAgIGw9MDtcbiAgICAgIHFbaWR4KytdID0gcFswXTtcbiAgICAgIHFbaWR4KytdID0gcFsxXTtcbiAgICAgIHFbaWR4KytdID0gcFsyXTtcbiAgICAgIGlmKHRoaXMub3JkZXIgPT09IDMpIHsgcVtpZHgrK10gPSBwWzNdOyB9XG4gICAgICAvLyB3ZSBsZXJwIGJldHdlZW4gYWxsIHBvaW50cyBhdCBlYWNoIGl0ZXJhdGlvbiwgdW50aWwgd2UgaGF2ZSAxIHBvaW50IGxlZnQuXG4gICAgICB3aGlsZShwLmxlbmd0aD4xKSB7XG4gICAgICAgIF9wID0gW107XG4gICAgICAgIGZvcihpPTAsIGw9cC5sZW5ndGgtMTsgaTxsOyBpKyspIHtcbiAgICAgICAgICBwdCA9IHV0aWxzLmxlcnAodCxwW2ldLHBbaSsxXSk7XG4gICAgICAgICAgcVtpZHgrK10gPSBwdDtcbiAgICAgICAgICBfcC5wdXNoKHB0KTtcbiAgICAgICAgfVxuICAgICAgICBwID0gX3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gcTtcbiAgICB9LFxuICAgIHNwbGl0OiBmdW5jdGlvbih0MSwgdDIpIHtcbiAgICAgIC8vIHNob3J0Y3V0c1xuICAgICAgaWYodDE9PT0wICYmICEhdDIpIHsgcmV0dXJuIHRoaXMuc3BsaXQodDIpLmxlZnQ7IH1cbiAgICAgIGlmKHQyPT09MSkgeyByZXR1cm4gdGhpcy5zcGxpdCh0MSkucmlnaHQ7IH1cblxuICAgICAgLy8gbm8gc2hvcnRjdXQ6IHVzZSBcImRlIENhc3RlbGphdVwiIGl0ZXJhdGlvbi5cbiAgICAgIHZhciBxID0gdGhpcy5odWxsKHQxKTtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGxlZnQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzBdLHFbM10scVs1XV0pIDogbmV3IEJlemllcihbcVswXSxxWzRdLHFbN10scVs5XV0pLFxuICAgICAgICByaWdodDogdGhpcy5vcmRlciA9PT0gMiA/IG5ldyBCZXppZXIoW3FbNV0scVs0XSxxWzJdXSkgOiBuZXcgQmV6aWVyKFtxWzldLHFbOF0scVs2XSxxWzNdXSksXG4gICAgICAgIHNwYW46IHFcbiAgICAgIH07XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBiaW5kIF90MS9fdDIgaW5mb3JtYXRpb24hXG4gICAgICByZXN1bHQubGVmdC5fdDEgID0gdXRpbHMubWFwKDAsICAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5sZWZ0Ll90MiAgPSB1dGlscy5tYXAodDEsIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LnJpZ2h0Ll90MSA9IHV0aWxzLm1hcCh0MSwgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQucmlnaHQuX3QyID0gdXRpbHMubWFwKDEsICAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcblxuICAgICAgLy8gaWYgd2UgaGF2ZSBubyB0Miwgd2UncmUgZG9uZVxuICAgICAgaWYoIXQyKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICAgICAgLy8gaWYgd2UgaGF2ZSBhIHQyLCBzcGxpdCBhZ2FpbjpcbiAgICAgIHQyID0gdXRpbHMubWFwKHQyLHQxLDEsMCwxKTtcbiAgICAgIHZhciBzdWJzcGxpdCA9IHJlc3VsdC5yaWdodC5zcGxpdCh0Mik7XG4gICAgICByZXR1cm4gc3Vic3BsaXQubGVmdDtcbiAgICB9LFxuICAgIGV4dHJlbWE6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpbXMgPSB0aGlzLmRpbXMsXG4gICAgICAgICAgcmVzdWx0PXt9LFxuICAgICAgICAgIHJvb3RzPVtdLFxuICAgICAgICAgIHAsIG1mbjtcbiAgICAgIGRpbXMuZm9yRWFjaChmdW5jdGlvbihkaW0pIHtcbiAgICAgICAgbWZuID0gZnVuY3Rpb24odikgeyByZXR1cm4gdltkaW1dOyB9O1xuICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdLm1hcChtZm4pO1xuICAgICAgICByZXN1bHRbZGltXSA9IHV0aWxzLmRyb290cyhwKTtcbiAgICAgICAgaWYodGhpcy5vcmRlciA9PT0gMykge1xuICAgICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMV0ubWFwKG1mbik7XG4gICAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5jb25jYXQodXRpbHMuZHJvb3RzKHApKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbZGltXSA9IHJlc3VsdFtkaW1dLmZpbHRlcihmdW5jdGlvbih0KSB7IHJldHVybiAodD49MCAmJiB0PD0xKTsgfSk7XG4gICAgICAgIHJvb3RzID0gcm9vdHMuY29uY2F0KHJlc3VsdFtkaW1dLnNvcnQoKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcm9vdHMgPSByb290cy5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHYsaWR4KSB7IHJldHVybiAocm9vdHMuaW5kZXhPZih2KSA9PT0gaWR4KTsgfSk7XG4gICAgICByZXN1bHQudmFsdWVzID0gcm9vdHM7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLCByZXN1bHQgPSB7fTtcbiAgICAgIHRoaXMuZGltcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmVzdWx0W2RdID0gdXRpbHMuZ2V0bWlubWF4KHRoaXMsIGQsIGV4dHJlbWFbZF0pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBvdmVybGFwczogZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHZhciBsYmJveCA9IHRoaXMuYmJveCgpLFxuICAgICAgICAgIHRiYm94ID0gY3VydmUuYmJveCgpO1xuICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKGxiYm94LHRiYm94KTtcbiAgICB9LFxuICAgIG9mZnNldDogZnVuY3Rpb24odCwgZCkge1xuICAgICAgaWYodHlwZW9mIGQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdldCh0KTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLm5vcm1hbCh0KTtcbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICBjOiBjLFxuICAgICAgICAgIG46IG4sXG4gICAgICAgICAgeDogYy54ICsgbi54ICogZCxcbiAgICAgICAgICB5OiBjLnkgKyBuLnkgKiBkXG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgcmV0LnogPSBjLnogKyBuLnogKiBkO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgICAgaWYodGhpcy5fbGluZWFyKSB7XG4gICAgICAgIHZhciBudiA9IHRoaXMubm9ybWFsKDApO1xuICAgICAgICB2YXIgY29vcmRzID0gdGhpcy5wb2ludHMubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgeDogcC54ICsgdCAqIG52LngsXG4gICAgICAgICAgICB5OiBwLnkgKyB0ICogbnYueVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYocC56ICYmIG4ueikgeyByZXQueiA9IHAueiArIHQgKiBudi56OyB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbmV3IEJlemllcihjb29yZHMpXTtcbiAgICAgIH1cbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcbiAgICAgIHJldHVybiByZWR1Y2VkLm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnNjYWxlKHQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaW1wbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYodGhpcy5vcmRlcj09PTMpIHtcbiAgICAgICAgdmFyIGExID0gdXRpbHMuYW5nbGUodGhpcy5wb2ludHNbMF0sIHRoaXMucG9pbnRzWzNdLCB0aGlzLnBvaW50c1sxXSk7XG4gICAgICAgIHZhciBhMiA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMl0pO1xuICAgICAgICBpZihhMT4wICYmIGEyPDAgfHwgYTE8MCAmJiBhMj4wKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbjEgPSB0aGlzLm5vcm1hbCgwKTtcbiAgICAgIHZhciBuMiA9IHRoaXMubm9ybWFsKDEpO1xuICAgICAgdmFyIHMgPSBuMS54Km4yLnggKyBuMS55Km4yLnk7XG4gICAgICBpZih0aGlzLl8zZCkgeyBzICs9IG4xLnoqbjIuejsgfVxuICAgICAgdmFyIGFuZ2xlID0gYWJzKGFjb3MocykpO1xuICAgICAgcmV0dXJuIGFuZ2xlIDwgcGkvMztcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgdDE9MCwgdDI9MCwgc3RlcD0wLjAxLCBzZWdtZW50LCBwYXNzMT1bXSwgcGFzczI9W107XG4gICAgICAvLyBmaXJzdCBwYXNzOiBzcGxpdCBvbiBleHRyZW1hXG4gICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLnZhbHVlcztcbiAgICAgIGlmKGV4dHJlbWEuaW5kZXhPZigwKT09PS0xKSB7IGV4dHJlbWEgPSBbMF0uY29uY2F0KGV4dHJlbWEpOyB9XG4gICAgICBpZihleHRyZW1hLmluZGV4T2YoMSk9PT0tMSkgeyBleHRyZW1hLnB1c2goMSk7IH1cblxuICAgICAgZm9yKHQxPWV4dHJlbWFbMF0sIGk9MTsgaTxleHRyZW1hLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHQyID0gZXh0cmVtYVtpXTtcbiAgICAgICAgc2VnbWVudCA9IHRoaXMuc3BsaXQodDEsdDIpO1xuICAgICAgICBzZWdtZW50Ll90MSA9IHQxO1xuICAgICAgICBzZWdtZW50Ll90MiA9IHQyO1xuICAgICAgICBwYXNzMS5wdXNoKHNlZ21lbnQpO1xuICAgICAgICB0MSA9IHQyO1xuICAgICAgfVxuXG4gICAgICAvLyBzZWNvbmQgcGFzczogZnVydGhlciByZWR1Y2UgdGhlc2Ugc2VnbWVudHMgdG8gc2ltcGxlIHNlZ21lbnRzXG4gICAgICBwYXNzMS5mb3JFYWNoKGZ1bmN0aW9uKHAxKSB7XG4gICAgICAgIHQxPTA7XG4gICAgICAgIHQyPTA7XG4gICAgICAgIHdoaWxlKHQyIDw9IDEpIHtcbiAgICAgICAgICBmb3IodDI9dDErc3RlcDsgdDI8PTErc3RlcDsgdDIrPXN0ZXApIHtcbiAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSx0Mik7XG4gICAgICAgICAgICBpZighc2VnbWVudC5zaW1wbGUoKSkge1xuICAgICAgICAgICAgICB0MiAtPSBzdGVwO1xuICAgICAgICAgICAgICBpZihhYnModDEtdDIpPHN0ZXApIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gbmV2ZXIgZm9ybSBhIHJlZHVjdGlvblxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsdDIpO1xuICAgICAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgICAgIHNlZ21lbnQuX3QyID0gdXRpbHMubWFwKHQyLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgdDEgPSB0MjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHQxPDEpIHtcbiAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsMSk7XG4gICAgICAgICAgc2VnbWVudC5fdDEgPSB1dGlscy5tYXAodDEsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgIHNlZ21lbnQuX3QyID0gcDEuX3QyO1xuICAgICAgICAgIHBhc3MyLnB1c2goc2VnbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhc3MyO1xuICAgIH0sXG4gICAgc2NhbGU6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBvcmRlciA9IHRoaXMub3JkZXI7XG4gICAgICB2YXIgZGlzdGFuY2VGbiA9IGZhbHNlXG4gICAgICBpZih0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiKSB7IGRpc3RhbmNlRm4gPSBkOyB9XG4gICAgICBpZihkaXN0YW5jZUZuICYmIG9yZGVyID09PSAyKSB7IHJldHVybiB0aGlzLnJhaXNlKCkuc2NhbGUoZGlzdGFuY2VGbik7IH1cblxuICAgICAgLy8gVE9ETzogYWRkIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGRlZ2VuZXJhdGUgKD1saW5lYXIpIGN1cnZlcy5cbiAgICAgIHZhciBjbG9ja3dpc2UgPSB0aGlzLmNsb2Nrd2lzZTtcbiAgICAgIHZhciByMSA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDApIDogZDtcbiAgICAgIHZhciByMiA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDEpIDogZDtcbiAgICAgIHZhciB2ID0gWyB0aGlzLm9mZnNldCgwLDEwKSwgdGhpcy5vZmZzZXQoMSwxMCkgXTtcbiAgICAgIHZhciBvID0gdXRpbHMubGxpNCh2WzBdLCB2WzBdLmMsIHZbMV0sIHZbMV0uYyk7XG4gICAgICBpZighbykgeyB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3Qgc2NhbGUgdGhpcyBjdXJ2ZS4gVHJ5IHJlZHVjaW5nIGl0IGZpcnN0LlwiKTsgfVxuICAgICAgLy8gbW92ZSBhbGwgcG9pbnRzIGJ5IGRpc3RhbmNlICdkJyB3cnQgdGhlIG9yaWdpbiAnbydcbiAgICAgIHZhciBwb2ludHM9dGhpcy5wb2ludHMsIG5wPVtdO1xuXG4gICAgICAvLyBtb3ZlIGVuZCBwb2ludHMgYnkgZml4ZWQgZGlzdGFuY2UgYWxvbmcgbm9ybWFsLlxuICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBwID0gbnBbdCpvcmRlcl0gPSB1dGlscy5jb3B5KHBvaW50c1t0Km9yZGVyXSk7XG4gICAgICAgIHAueCArPSAodD9yMjpyMSkgKiB2W3RdLm4ueDtcbiAgICAgICAgcC55ICs9ICh0P3IyOnIxKSAqIHZbdF0ubi55O1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgaWYgKCFkaXN0YW5jZUZuKSB7XG4gICAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgdG8gbGllIG9uIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhlIG9mZnNldFxuICAgICAgICAvLyBkZXJpdmF0aXZlIHZlY3RvciwgYW5kIHRoZSBvcmlnaW4tdGhyb3VnaC1jb250cm9sIHZlY3RvclxuICAgICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBpZih0aGlzLm9yZGVyPT09MiAmJiAhIXQpIHJldHVybjtcbiAgICAgICAgICB2YXIgcCA9IG5wW3Qqb3JkZXJdO1xuICAgICAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpO1xuICAgICAgICAgIHZhciBwMiA9IHsgeDogcC54ICsgZC54LCB5OiBwLnkgKyBkLnkgfTtcbiAgICAgICAgICBucFt0KzFdID0gdXRpbHMubGxpNChwLCBwMiwgbywgcG9pbnRzW3QrMV0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgYnkgXCJob3dldmVyIG11Y2ggbmVjZXNzYXJ5IHRvXG4gICAgICAvLyBlbnN1cmUgdGhlIGNvcnJlY3QgdGFuZ2VudCB0byBlbmRwb2ludFwiLlxuICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmKHRoaXMub3JkZXI9PT0yICYmICEhdCkgcmV0dXJuO1xuICAgICAgICB2YXIgcCA9IHBvaW50c1t0KzFdO1xuICAgICAgICB2YXIgb3YgPSB7XG4gICAgICAgICAgeDogcC54IC0gby54LFxuICAgICAgICAgIHk6IHAueSAtIG8ueVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmMgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigodCsxKS9vcmRlcikgOiBkO1xuICAgICAgICBpZihkaXN0YW5jZUZuICYmICFjbG9ja3dpc2UpIHJjID0gLXJjO1xuICAgICAgICB2YXIgbSA9IHNxcnQob3YueCpvdi54ICsgb3YueSpvdi55KTtcbiAgICAgICAgb3YueCAvPSBtO1xuICAgICAgICBvdi55IC89IG07XG4gICAgICAgIG5wW3QrMV0gPSB7XG4gICAgICAgICAgeDogcC54ICsgcmMqb3YueCxcbiAgICAgICAgICB5OiBwLnkgKyByYypvdi55XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgfSxcbiAgICBvdXRsaW5lOiBmdW5jdGlvbihkMSwgZDIsIGQzLCBkNCkge1xuICAgICAgZDIgPSAodHlwZW9mIGQyID09PSBcInVuZGVmaW5lZFwiKSA/IGQxIDogZDI7XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCksXG4gICAgICAgICAgbGVuID0gcmVkdWNlZC5sZW5ndGgsXG4gICAgICAgICAgZmN1cnZlcyA9IFtdLFxuICAgICAgICAgIGJjdXJ2ZXMgPSBbXSxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGFsZW4gPSAwLFxuICAgICAgICAgIHRsZW4gPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICB2YXIgZ3JhZHVhdGVkID0gKHR5cGVvZiBkMyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZDQgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gICAgICBmdW5jdGlvbiBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKHMsZSwgdGxlbixhbGVuLHNsZW4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIGYxID0gYWxlbi90bGVuLCBmMiA9IChhbGVuK3NsZW4pL3RsZW4sIGQgPSBlLXM7XG4gICAgICAgICAgcmV0dXJuIHV0aWxzLm1hcCh2LCAwLDEsIHMrZjEqZCwgcytmMipkKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGZvcm0gY3VydmUgb3VsaW5lc1xuICAgICAgcmVkdWNlZC5mb3JFYWNoKGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgc2xlbiA9IHNlZ21lbnQubGVuZ3RoKCk7XG4gICAgICAgIGlmIChncmFkdWF0ZWQpIHtcbiAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oIGQxLCBkMywgdGxlbixhbGVuLHNsZW4pICApKTtcbiAgICAgICAgICBiY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oLWQyLC1kNCwgdGxlbixhbGVuLHNsZW4pICApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggZDEpKTtcbiAgICAgICAgICBiY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSgtZDIpKTtcbiAgICAgICAgfVxuICAgICAgICBhbGVuICs9IHNsZW47XG4gICAgICB9KTtcblxuICAgICAgLy8gcmV2ZXJzZSB0aGUgXCJyZXR1cm5cIiBvdXRsaW5lXG4gICAgICBiY3VydmVzID0gYmN1cnZlcy5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICBwID0gcy5wb2ludHM7XG4gICAgICAgIGlmKHBbM10pIHsgcy5wb2ludHMgPSBbcFszXSxwWzJdLHBbMV0scFswXV07IH1cbiAgICAgICAgZWxzZSB7IHMucG9pbnRzID0gW3BbMl0scFsxXSxwWzBdXTsgfVxuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0pLnJldmVyc2UoKTtcblxuICAgICAgLy8gZm9ybSB0aGUgZW5kY2FwcyBhcyBsaW5lc1xuICAgICAgdmFyIGZzID0gZmN1cnZlc1swXS5wb2ludHNbMF0sXG4gICAgICAgICAgZmUgPSBmY3VydmVzW2xlbi0xXS5wb2ludHNbZmN1cnZlc1tsZW4tMV0ucG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgICBicyA9IGJjdXJ2ZXNbbGVuLTFdLnBvaW50c1tiY3VydmVzW2xlbi0xXS5wb2ludHMubGVuZ3RoLTFdLFxuICAgICAgICAgIGJlID0gYmN1cnZlc1swXS5wb2ludHNbMF0sXG4gICAgICAgICAgbHMgPSB1dGlscy5tYWtlbGluZShicyxmcyksXG4gICAgICAgICAgbGUgPSB1dGlscy5tYWtlbGluZShmZSxiZSksXG4gICAgICAgICAgc2VnbWVudHMgPSBbbHNdLmNvbmNhdChmY3VydmVzKS5jb25jYXQoW2xlXSkuY29uY2F0KGJjdXJ2ZXMpLFxuICAgICAgICAgIHNsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihzZWdtZW50cyk7XG4gICAgfSxcbiAgICBvdXRsaW5lc2hhcGVzOiBmdW5jdGlvbihkMSwgZDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBkMiA9IGQyIHx8IGQxO1xuICAgICAgdmFyIG91dGxpbmUgPSB0aGlzLm91dGxpbmUoZDEsZDIpLmN1cnZlcztcbiAgICAgIHZhciBzaGFwZXMgPSBbXTtcbiAgICAgIGZvcih2YXIgaT0xLCBsZW49b3V0bGluZS5sZW5ndGg7IGkgPCBsZW4vMjsgaSsrKSB7XG4gICAgICAgIHZhciBzaGFwZSA9IHV0aWxzLm1ha2VzaGFwZShvdXRsaW5lW2ldLCBvdXRsaW5lW2xlbi1pXSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICBzaGFwZS5zdGFydGNhcC52aXJ0dWFsID0gKGkgPiAxKTtcbiAgICAgICAgc2hhcGUuZW5kY2FwLnZpcnR1YWwgPSAoaSA8IGxlbi8yLTEpO1xuICAgICAgICBzaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hhcGVzO1xuICAgIH0sXG4gICAgaW50ZXJzZWN0czogZnVuY3Rpb24oY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBpZighY3VydmUpIHJldHVybiB0aGlzLnNlbGZpbnRlcnNlY3RzKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgIGlmKGN1cnZlLnAxICYmIGN1cnZlLnAyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVJbnRlcnNlY3RzKGN1cnZlKTtcbiAgICAgIH1cbiAgICAgIGlmKGN1cnZlIGluc3RhbmNlb2YgQmV6aWVyKSB7IGN1cnZlID0gY3VydmUucmVkdWNlKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLmN1cnZlaW50ZXJzZWN0cyh0aGlzLnJlZHVjZSgpLCBjdXJ2ZSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgIH0sXG4gICAgbGluZUludGVyc2VjdHM6IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBteCA9IG1pbihsaW5lLnAxLngsIGxpbmUucDIueCksXG4gICAgICAgICAgbXkgPSBtaW4obGluZS5wMS55LCBsaW5lLnAyLnkpLFxuICAgICAgICAgIE1YID0gbWF4KGxpbmUucDEueCwgbGluZS5wMi54KSxcbiAgICAgICAgICBNWSA9IG1heChsaW5lLnAxLnksIGxpbmUucDIueSksXG4gICAgICAgICAgc2VsZj10aGlzO1xuICAgICAgcmV0dXJuIHV0aWxzLnJvb3RzKHRoaXMucG9pbnRzLCBsaW5lKS5maWx0ZXIoZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcCA9IHNlbGYuZ2V0KHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuYmV0d2VlbihwLngsIG14LCBNWCkgJiYgdXRpbHMuYmV0d2VlbihwLnksIG15LCBNWSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNlbGZpbnRlcnNlY3RzOiBmdW5jdGlvbihjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpO1xuICAgICAgLy8gXCJzaW1wbGVcIiBjdXJ2ZXMgY2Fubm90IGludGVyc2VjdCB3aXRoIHRoZWlyIGRpcmVjdFxuICAgICAgLy8gbmVpZ2hib3VyLCBzbyBmb3IgZWFjaCBzZWdtZW50IFggd2UgY2hlY2sgd2hldGhlclxuICAgICAgLy8gaXQgaW50ZXJzZWN0cyBbMDp4LTJdW3grMjpsYXN0XS5cbiAgICAgIHZhciBpLGxlbj1yZWR1Y2VkLmxlbmd0aC0yLHJlc3VsdHM9W10scmVzdWx0LGxlZnQscmlnaHQ7XG4gICAgICBmb3IoaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgIGxlZnQgPSByZWR1Y2VkLnNsaWNlKGksaSsxKTtcbiAgICAgICAgcmlnaHQgPSByZWR1Y2VkLnNsaWNlKGkrMik7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY3VydmVpbnRlcnNlY3RzKGxlZnQsIHJpZ2h0LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCggcmVzdWx0ICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGN1cnZlaW50ZXJzZWN0czogZnVuY3Rpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICAvLyBzdGVwIDE6IHBhaXIgb2ZmIGFueSBvdmVybGFwcGluZyBzZWdtZW50c1xuICAgICAgYzEuZm9yRWFjaChmdW5jdGlvbihsKSB7XG4gICAgICAgIGMyLmZvckVhY2goZnVuY3Rpb24ocikge1xuICAgICAgICAgIGlmKGwub3ZlcmxhcHMocikpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goeyBsZWZ0OiBsLCByaWdodDogciB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyBzdGVwIDI6IGZvciBlYWNoIHBhaXJpbmcsIHJ1biB0aHJvdWdoIHRoZSBjb252ZXJnZW5jZSBhbGdvcml0aG0uXG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB1dGlscy5wYWlyaXRlcmF0aW9uKHBhaXIubGVmdCwgcGFpci5yaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLmNvbmNhdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICAgIH0sXG4gICAgYXJjczogZnVuY3Rpb24oZXJyb3JUaHJlc2hvbGQpIHtcbiAgICAgIGVycm9yVGhyZXNob2xkID0gZXJyb3JUaHJlc2hvbGQgfHwgMC41O1xuICAgICAgdmFyIGNpcmNsZXMgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyYXRlKGVycm9yVGhyZXNob2xkLCBjaXJjbGVzKTtcbiAgICB9LFxuICAgIF9lcnJvcjogZnVuY3Rpb24ocGMsIG5wMSwgcywgZSkge1xuICAgICAgdmFyIHEgPSAoZSAtIHMpIC8gNCxcbiAgICAgICAgICBjMSA9IHRoaXMuZ2V0KHMgKyBxKSxcbiAgICAgICAgICBjMiA9IHRoaXMuZ2V0KGUgLSBxKSxcbiAgICAgICAgICByZWYgPSB1dGlscy5kaXN0KHBjLCBucDEpLFxuICAgICAgICAgIGQxICA9IHV0aWxzLmRpc3QocGMsIGMxKSxcbiAgICAgICAgICBkMiAgPSB1dGlscy5kaXN0KHBjLCBjMik7XG4gICAgICByZXR1cm4gYWJzKGQxLXJlZikgKyBhYnMoZDItcmVmKTtcbiAgICB9LFxuICAgIF9pdGVyYXRlOiBmdW5jdGlvbihlcnJvclRocmVzaG9sZCwgY2lyY2xlcykge1xuICAgICAgdmFyIHMgPSAwLCBlID0gMSwgc2FmZXR5O1xuICAgICAgLy8gd2UgZG8gYSBiaW5hcnkgc2VhcmNoIHRvIGZpbmQgdGhlIFwiZ29vZCBgdGAgY2xvc2VzdCB0byBuby1sb25nZXItZ29vZFwiXG4gICAgICBkbyB7XG4gICAgICAgIHNhZmV0eT0wO1xuXG4gICAgICAgIC8vIHN0ZXAgMTogc3RhcnQgd2l0aCB0aGUgbWF4aW11bSBwb3NzaWJsZSBhcmNcbiAgICAgICAgZSA9IDE7XG5cbiAgICAgICAgLy8gcG9pbnRzOlxuICAgICAgICB2YXIgbnAxID0gdGhpcy5nZXQocyksIG5wMiwgbnAzLCBhcmMsIHByZXZfYXJjO1xuXG4gICAgICAgIC8vIGJvb2xlYW5zOlxuICAgICAgICB2YXIgY3Vycl9nb29kID0gZmFsc2UsIHByZXZfZ29vZCA9IGZhbHNlLCBkb25lO1xuXG4gICAgICAgIC8vIG51bWJlcnM6XG4gICAgICAgIHZhciBtID0gZSwgcHJldl9lID0gMSwgc3RlcCA9IDA7XG5cbiAgICAgICAgLy8gc3RlcCAyOiBmaW5kIHRoZSBiZXN0IHBvc3NpYmxlIGFyY1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcHJldl9nb29kID0gY3Vycl9nb29kO1xuICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuICAgICAgICAgIG0gPSAocyArIGUpLzI7XG4gICAgICAgICAgc3RlcCsrO1xuXG4gICAgICAgICAgbnAyID0gdGhpcy5nZXQobSk7XG4gICAgICAgICAgbnAzID0gdGhpcy5nZXQoZSk7XG5cbiAgICAgICAgICBhcmMgPSB1dGlscy5nZXRjY2VudGVyKG5wMSwgbnAyLCBucDMpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vYWxzbyBzYXZlIHRoZSB0IHZhbHVlc1xuICAgICAgICAgIGFyYy5pbnRlcnZhbCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBzLFxuICAgICAgICAgICAgZW5kOiBlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2Vycm9yKGFyYywgbnAxLCBzLCBlKTtcbiAgICAgICAgICBjdXJyX2dvb2QgPSAoZXJyb3IgPD0gZXJyb3JUaHJlc2hvbGQpO1xuXG4gICAgICAgICAgZG9uZSA9IHByZXZfZ29vZCAmJiAhY3Vycl9nb29kO1xuICAgICAgICAgIGlmKCFkb25lKSBwcmV2X2UgPSBlO1xuXG4gICAgICAgICAgLy8gdGhpcyBhcmMgaXMgZmluZTogd2UgY2FuIG1vdmUgJ2UnIHVwIHRvIHNlZSBpZiB3ZSBjYW4gZmluZCBhIHdpZGVyIGFyY1xuICAgICAgICAgIGlmKGN1cnJfZ29vZCkge1xuICAgICAgICAgICAgLy8gaWYgZSBpcyBhbHJlYWR5IGF0IG1heCwgdGhlbiB3ZSdyZSBkb25lIGZvciB0aGlzIGFyYy5cbiAgICAgICAgICAgIGlmIChlID49IDEpIHtcbiAgICAgICAgICAgICAgcHJldl9lID0gMTtcbiAgICAgICAgICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbm90LCBtb3ZlIGl0IHVwIGJ5IGhhbGYgdGhlIGl0ZXJhdGlvbiBkaXN0YW5jZVxuICAgICAgICAgICAgZSA9IGUgKyAoZS1zKS8yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMgaXMgYSBiYWQgYXJjOiB3ZSBuZWVkIHRvIG1vdmUgJ2UnIGRvd24gdG8gZmluZCBhIGdvb2QgYXJjXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlID0gbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUoIWRvbmUgJiYgc2FmZXR5Kys8MTAwKTtcblxuICAgICAgICBpZihzYWZldHk+PTEwMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhcmMgYWJzdHJhY3Rpb24gc29tZWhvdyBmYWlsZWQuLi5cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIltGXSBhcmMgZm91bmRcIiwgcywgcHJldl9lLCBwcmV2X2FyYy54LCBwcmV2X2FyYy55LCBwcmV2X2FyYy5zLCBwcmV2X2FyYy5lKTtcblxuICAgICAgICBwcmV2X2FyYyA9IChwcmV2X2FyYyA/IHByZXZfYXJjIDogYXJjKTtcbiAgICAgICAgY2lyY2xlcy5wdXNoKHByZXZfYXJjKTtcbiAgICAgICAgcyA9IHByZXZfZTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKGUgPCAxKTtcbiAgICAgIHJldHVybiBjaXJjbGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IEJlemllcjtcblxufSgpKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHV0aWxzID0gcmVxdWlyZSgxMDYpO1xuXG4gIC8qKlxuICAgKiBQb2x5IEJlemllclxuICAgKiBAcGFyYW0ge1t0eXBlXX0gY3VydmVzIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHZhciBQb2x5QmV6aWVyID0gZnVuY3Rpb24oY3VydmVzKSB7XG4gICAgdGhpcy5jdXJ2ZXMgPSBbXTtcbiAgICB0aGlzLl8zZCA9IGZhbHNlO1xuICAgIGlmKCEhY3VydmVzKSB7XG4gICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5jdXJ2ZXNbMF0uXzNkO1xuICAgIH1cbiAgfVxuXG4gIFBvbHlCZXppZXIucHJvdG90eXBlID0ge1xuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICBhZGRDdXJ2ZTogZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHRoaXMuY3VydmVzLnB1c2goY3VydmUpO1xuICAgICAgdGhpcy5fM2QgPSB0aGlzLl8zZCB8fCBjdXJ2ZS5fM2Q7XG4gICAgfSxcbiAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VydmVzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lmxlbmd0aCgpOyB9KS5yZWR1Y2UoZnVuY3Rpb24oYSxiKSB7IHJldHVybiBhK2I7IH0pO1xuICAgIH0sXG4gICAgY3VydmU6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VydmVzW2lkeF07XG4gICAgfSxcbiAgICBiYm94OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjID0gdGhpcy5jdXJ2ZXM7XG4gICAgICB2YXIgYmJveCA9IGNbMF0uYmJveCgpO1xuICAgICAgZm9yKHZhciBpPTE7IGk8Yy5sZW5ndGg7IGkrKykge1xuICAgICAgICB1dGlscy5leHBhbmRib3goYmJveCwgY1tpXS5iYm94KCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJib3g7XG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBbXTtcbiAgICAgIHRoaXMuY3VydmVzLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQuY29uY2F0KHYub2Zmc2V0KGQpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQb2x5QmV6aWVyKG9mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gUG9seUJlemllcjtcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIG1hdGgtaW5saW5pbmcuXG4gIHZhciBhYnMgPSBNYXRoLmFicyxcbiAgICAgIGNvcyA9IE1hdGguY29zLFxuICAgICAgc2luID0gTWF0aC5zaW4sXG4gICAgICBhY29zID0gTWF0aC5hY29zLFxuICAgICAgYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgICAgc3FydCA9IE1hdGguc3FydCxcbiAgICAgIHBvdyA9IE1hdGgucG93LFxuICAgICAgLy8gY3ViZSByb290IGZ1bmN0aW9uIHlpZWxkaW5nIHJlYWwgcm9vdHNcbiAgICAgIGNydCA9IGZ1bmN0aW9uKHYpIHsgcmV0dXJuICh2PDApID8gLXBvdygtdiwxLzMpIDogcG93KHYsMS8zKTsgfSxcbiAgICAgIC8vIHRyaWcgY29uc3RhbnRzXG4gICAgICBwaSA9IE1hdGguUEksXG4gICAgICB0YXUgPSAyKnBpLFxuICAgICAgcXVhcnQgPSBwaS8yLFxuICAgICAgLy8gZmxvYXQgcHJlY2lzaW9uIHNpZ25pZmljYW50IGRlY2ltYWxcbiAgICAgIGVwc2lsb24gPSAwLjAwMDAwMTtcblxuICAvLyBCZXppZXIgdXRpbGl0eSBmdW5jdGlvbnNcbiAgdmFyIHV0aWxzID0ge1xuICAgIC8vIExlZ2VuZHJlLUdhdXNzIGFic2Npc3NhZSB3aXRoIG49MjQgKHhfaSB2YWx1ZXMsIGRlZmluZWQgYXQgaT1uIGFzIHRoZSByb290cyBvZiB0aGUgbnRoIG9yZGVyIExlZ2VuZHJlIHBvbHlub21pYWwgUG4oeCkpXG4gICAgVHZhbHVlczogW1xuICAgICAgLTAuMDY0MDU2ODkyODYyNjA1NjI2MDg1MDQzMDgyNjI0NzQ1MDM4NTkwOSxcbiAgICAgICAwLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAtMC4xOTExMTg4Njc0NzM2MTYzMDkxNTg2Mzk4MjA3NTcwNjk2MzE4NDA0LFxuICAgICAgIDAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgIC0wLjMxNTA0MjY3OTY5NjE2MzM3NDM4Njc5MzI5MTMxOTgxMDI0MDc4NjQsXG4gICAgICAgMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgLTAuNDMzNzkzNTA3NjI2MDQ1MTM4NDg3MDg0MjMxOTEzMzQ5NzEyNDUyNCxcbiAgICAgICAwLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAtMC41NDU0MjE0NzEzODg4Mzk1MzU2NTgzNzU2MTcyMTgzNzIzNzAwMTA3LFxuICAgICAgIDAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgIC0wLjY0ODA5MzY1MTkzNjk3NTU2OTI1MjQ5NTc4NjkxMDc0NzYyNjY2OTYsXG4gICAgICAgMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgLTAuNzQwMTI0MTkxNTc4NTU0MzY0MjQzODI4MTAzMDk5OTc4NDI1NTIzMixcbiAgICAgICAwLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAtMC44MjAwMDE5ODU5NzM5MDI5MjE5NTM5NDk4NzI2Njk3NDUyMDgwNzYxLFxuICAgICAgIDAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgIC0wLjg4NjQxNTUyNzAwNDQwMTAzNDIxMzE1NDM0MTk4MjE5Njc1NTA4NzMsXG4gICAgICAgMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgLTAuOTM4Mjc0NTUyMDAyNzMyNzU4NTIzNjQ5MDAxNzA4NzIxNDQ5NjU0OCxcbiAgICAgICAwLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAtMC45NzQ3Mjg1NTU5NzEzMDk0OTgxOTgzOTE5OTMwMDgxNjkwNjE3NDExLFxuICAgICAgIDAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgIC0wLjk5NTE4NzIxOTk5NzAyMTM2MDE3OTk5NzQwOTcwMDczNjgxMTg3NDUsXG4gICAgICAgMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1XG4gICAgXSxcblxuICAgIC8vIExlZ2VuZHJlLUdhdXNzIHdlaWdodHMgd2l0aCBuPTI0ICh3X2kgdmFsdWVzLCBkZWZpbmVkIGJ5IGEgZnVuY3Rpb24gbGlua2VkIHRvIGluIHRoZSBCZXppZXIgcHJpbWVyIGFydGljbGUpXG4gICAgQ3ZhbHVlczogW1xuICAgICAgMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LFxuICAgICAgMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LFxuICAgICAgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LFxuICAgICAgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LFxuICAgICAgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcwLFxuICAgICAgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcwLFxuICAgICAgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLFxuICAgICAgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLFxuICAgICAgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LFxuICAgICAgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LFxuICAgICAgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LFxuICAgICAgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LFxuICAgICAgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUwLFxuICAgICAgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUwLFxuICAgICAgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLFxuICAgICAgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLFxuICAgICAgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLFxuICAgICAgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLFxuICAgICAgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLFxuICAgICAgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLFxuICAgICAgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLFxuICAgICAgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLFxuICAgICAgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5LFxuICAgICAgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5XG4gICAgXSxcblxuICAgIGFyY2ZuOiBmdW5jdGlvbih0LCBkZXJpdmF0aXZlRm4pIHtcbiAgICAgIHZhciBkID0gZGVyaXZhdGl2ZUZuKHQpO1xuICAgICAgdmFyIGwgPSBkLngqZC54ICsgZC55KmQueTtcbiAgICAgIGlmKHR5cGVvZiBkLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbCArPSBkLnoqZC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNxcnQobCk7XG4gICAgfSxcblxuICAgIGJldHdlZW46IGZ1bmN0aW9uKHYsIG0sIE0pIHtcbiAgICAgIHJldHVybiAobSA8PSB2ICYmIHYgPD0gTSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBtKSB8fCB1dGlscy5hcHByb3hpbWF0ZWx5KHYsIE0pO1xuICAgIH0sXG5cbiAgICBhcHByb3hpbWF0ZWx5OiBmdW5jdGlvbihhLGIscHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4gYWJzKGEtYikgPD0gKHByZWNpc2lvbiB8fCBlcHNpbG9uKTtcbiAgICB9LFxuXG4gICAgbGVuZ3RoOiBmdW5jdGlvbihkZXJpdmF0aXZlRm4pIHtcbiAgICAgIHZhciB6PTAuNSxzdW09MCxsZW49dXRpbHMuVHZhbHVlcy5sZW5ndGgsaSx0O1xuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0geiAqIHV0aWxzLlR2YWx1ZXNbaV0gKyB6O1xuICAgICAgICBzdW0gKz0gdXRpbHMuQ3ZhbHVlc1tpXSAqIHV0aWxzLmFyY2ZuKHQsZGVyaXZhdGl2ZUZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6ICogc3VtO1xuICAgIH0sXG5cbiAgICBtYXA6IGZ1bmN0aW9uKHYsIGRzLGRlLCB0cyx0ZSkge1xuICAgICAgdmFyIGQxID0gZGUtZHMsIGQyID0gdGUtdHMsIHYyID0gIHYtZHMsIHIgPSB2Mi9kMTtcbiAgICAgIHJldHVybiB0cyArIGQyKnI7XG4gICAgfSxcblxuICAgIGxlcnA6IGZ1bmN0aW9uKHIsIHYxLCB2Mikge1xuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgeDogdjEueCArIHIqKHYyLngtdjEueCksXG4gICAgICAgIHk6IHYxLnkgKyByKih2Mi55LXYxLnkpXG4gICAgICB9O1xuICAgICAgaWYoISF2MS56ICYmICEhdjIueikge1xuICAgICAgICByZXQueiA9ICB2MS56ICsgcioodjIuei12MS56KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHBvaW50VG9TdHJpbmc6IGZ1bmN0aW9uKHApIHtcbiAgICAgIHZhciBzID0gcC54K1wiL1wiK3AueTtcbiAgICAgIGlmKHR5cGVvZiBwLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcyArPSBcIi9cIitwLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgICB9LFxuXG4gICAgcG9pbnRzVG9TdHJpbmc6IGZ1bmN0aW9uKHBvaW50cykge1xuICAgICAgcmV0dXJuIFwiW1wiICsgcG9pbnRzLm1hcCh1dGlscy5wb2ludFRvU3RyaW5nKS5qb2luKFwiLCBcIikgKyBcIl1cIjtcbiAgICB9LFxuXG4gICAgY29weTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKG8sdjEsdjIpIHtcbiAgICAgIHZhciBkeDEgPSB2MS54IC0gby54LFxuICAgICAgICAgIGR5MSA9IHYxLnkgLSBvLnksXG4gICAgICAgICAgZHgyID0gdjIueCAtIG8ueCxcbiAgICAgICAgICBkeTIgPSB2Mi55IC0gby55LFxuICAgICAgICAgIGNyb3NzID0gZHgxKmR5MiAtIGR5MSpkeDIsXG4gICAgICAgICAgbTEgPSBzcXJ0KGR4MSpkeDErZHkxKmR5MSksXG4gICAgICAgICAgbTIgPSBzcXJ0KGR4MipkeDIrZHkyKmR5MiksXG4gICAgICAgICAgZG90O1xuICAgICAgZHgxLz1tMTsgZHkxLz1tMTsgZHgyLz1tMjsgZHkyLz1tMjtcbiAgICAgIGRvdCA9IGR4MSpkeDIgKyBkeTEqZHkyO1xuICAgICAgcmV0dXJuIGF0YW4yKGNyb3NzLCBkb3QpO1xuICAgIH0sXG5cbiAgICAvLyByb3VuZCBhcyBzdHJpbmcsIHRvIGF2b2lkIHJvdW5kaW5nIGVycm9yc1xuICAgIHJvdW5kOiBmdW5jdGlvbih2LCBkKSB7XG4gICAgICB2YXIgcyA9ICcnICsgdjtcbiAgICAgIHZhciBwb3MgPSBzLmluZGV4T2YoXCIuXCIpO1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocy5zdWJzdHJpbmcoMCxwb3MrMStkKSk7XG4gICAgfSxcblxuICAgIGRpc3Q6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgICAgZHkgPSBwMS55IC0gcDIueTtcbiAgICAgIHJldHVybiBzcXJ0KGR4KmR4K2R5KmR5KTtcbiAgICB9LFxuXG4gICAgY2xvc2VzdDogZnVuY3Rpb24oTFVULCBwb2ludCkge1xuICAgICAgdmFyIG1kaXN0ID0gcG93KDIsNjMpLCBtcG9zLCBkO1xuICAgICAgTFVULmZvckVhY2goZnVuY3Rpb24ocCwgaWR4KSB7XG4gICAgICAgIGQgPSB1dGlscy5kaXN0KHBvaW50LCBwKTtcbiAgICAgICAgaWYgKGQ8bWRpc3QpIHtcbiAgICAgICAgICBtZGlzdCA9IGQ7XG4gICAgICAgICAgbXBvcyA9IGlkeDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBtZGlzdDptZGlzdCwgbXBvczptcG9zIH07XG4gICAgfSxcblxuICAgIGFiY3JhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgcmF0aW8odCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiY1xuICAgICAgaWYgKG4hPT0yICYmIG4hPT0zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0ID0gMC41O1xuICAgICAgfSBlbHNlIGlmICh0PT09MCB8fCB0PT09MSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH1cbiAgICAgIHZhciBib3R0b20gPSBwb3codCxuKSArIHBvdygxLXQsbiksIHRvcCA9IGJvdHRvbSAtIDE7XG4gICAgICByZXR1cm4gYWJzKHRvcC9ib3R0b20pO1xuICAgIH0sXG5cbiAgICBwcm9qZWN0aW9ucmF0aW86IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgIC8vIHNlZSB1KHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgdG9wID0gcG93KDEtdCwgbiksIGJvdHRvbSA9IHBvdyh0LG4pICsgdG9wO1xuICAgICAgcmV0dXJuIHRvcC9ib3R0b207XG4gICAgfSxcblxuICAgIGxsaTg6IGZ1bmN0aW9uKHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0KSB7XG4gICAgICB2YXIgbng9KHgxKnkyLXkxKngyKSooeDMteDQpLSh4MS14MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBueT0oeDEqeTIteTEqeDIpKih5My15NCktKHkxLXkyKSooeDMqeTQteTMqeDQpLFxuICAgICAgICAgIGQ9KHgxLXgyKSooeTMteTQpLSh5MS15MikqKHgzLXg0KTtcbiAgICAgIGlmKGQ9PTApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICByZXR1cm4geyB4OiBueC9kLCB5OiBueS9kIH07XG4gICAgfSxcblxuICAgIGxsaTQ6IGZ1bmN0aW9uKHAxLHAyLHAzLHA0KSB7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksXG4gICAgICAgICAgeDIgPSBwMi54LCB5MiA9IHAyLnksXG4gICAgICAgICAgeDMgPSBwMy54LCB5MyA9IHAzLnksXG4gICAgICAgICAgeDQgPSBwNC54LCB5NCA9IHA0Lnk7XG4gICAgICByZXR1cm4gdXRpbHMubGxpOCh4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCk7XG4gICAgfSxcblxuICAgIGxsaTogZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICByZXR1cm4gdXRpbHMubGxpNCh2MSx2MS5jLHYyLHYyLmMpO1xuICAgIH0sXG5cbiAgICBtYWtlbGluZTogZnVuY3Rpb24ocDEscDIpIHtcbiAgICAgIHZhciBCZXppZXIgPSByZXF1aXJlKDEwNCk7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksIHgyID0gcDIueCwgeTIgPSBwMi55LCBkeCA9ICh4Mi14MSkvMywgZHkgPSAoeTIteTEpLzM7XG4gICAgICByZXR1cm4gbmV3IEJlemllcih4MSwgeTEsIHgxK2R4LCB5MStkeSwgeDErMipkeCwgeTErMipkeSwgeDIsIHkyKTtcbiAgICB9LFxuXG4gICAgZmluZGJib3g6IGZ1bmN0aW9uKHNlY3Rpb25zKSB7XG4gICAgICB2YXIgbXg9OTk5OTk5OTksbXk9bXgsTVg9LW14LE1ZPU1YO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciBiYm94ID0gcy5iYm94KCk7XG4gICAgICAgIGlmKG14ID4gYmJveC54Lm1pbikgbXggPSBiYm94LngubWluO1xuICAgICAgICBpZihteSA+IGJib3gueS5taW4pIG15ID0gYmJveC55Lm1pbjtcbiAgICAgICAgaWYoTVggPCBiYm94LngubWF4KSBNWCA9IGJib3gueC5tYXg7XG4gICAgICAgIGlmKE1ZIDwgYmJveC55Lm1heCkgTVkgPSBiYm94LnkubWF4O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB7IG1pbjogbXgsIG1pZDoobXgrTVgpLzIsIG1heDogTVgsIHNpemU6TVgtbXggfSxcbiAgICAgICAgeTogeyBtaW46IG15LCBtaWQ6KG15K01ZKS8yLCBtYXg6IE1ZLCBzaXplOk1ZLW15IH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcGVpbnRlcnNlY3Rpb25zOiBmdW5jdGlvbihzMSwgYmJveDEsIHMyLCBiYm94MiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGlmKCF1dGlscy5iYm94b3ZlcmxhcChiYm94MSwgYmJveDIpKSByZXR1cm4gW107XG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgdmFyIGExID0gW3MxLnN0YXJ0Y2FwLCBzMS5mb3J3YXJkLCBzMS5iYWNrLCBzMS5lbmRjYXBdO1xuICAgICAgdmFyIGEyID0gW3MyLnN0YXJ0Y2FwLCBzMi5mb3J3YXJkLCBzMi5iYWNrLCBzMi5lbmRjYXBdO1xuICAgICAgYTEuZm9yRWFjaChmdW5jdGlvbihsMSkge1xuICAgICAgICBpZihsMS52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgIGEyLmZvckVhY2goZnVuY3Rpb24obDIpIHtcbiAgICAgICAgICBpZihsMi52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgICAgdmFyIGlzcyA9IGwxLmludGVyc2VjdHMobDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgICBpZihpc3MubGVuZ3RoPjApIHtcbiAgICAgICAgICAgIGlzcy5jMSA9IGwxO1xuICAgICAgICAgICAgaXNzLmMyID0gbDI7XG4gICAgICAgICAgICBpc3MuczEgPSBzMTtcbiAgICAgICAgICAgIGlzcy5zMiA9IHMyO1xuICAgICAgICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKGlzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gICAgfSxcblxuICAgIG1ha2VzaGFwZTogZnVuY3Rpb24oZm9yd2FyZCwgYmFjaywgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBicGwgPSBiYWNrLnBvaW50cy5sZW5ndGg7XG4gICAgICB2YXIgZnBsID0gZm9yd2FyZC5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIHN0YXJ0ICA9IHV0aWxzLm1ha2VsaW5lKGJhY2sucG9pbnRzW2JwbC0xXSwgZm9yd2FyZC5wb2ludHNbMF0pO1xuICAgICAgdmFyIGVuZCAgICA9IHV0aWxzLm1ha2VsaW5lKGZvcndhcmQucG9pbnRzW2ZwbC0xXSwgYmFjay5wb2ludHNbMF0pO1xuICAgICAgdmFyIHNoYXBlICA9IHtcbiAgICAgICAgc3RhcnRjYXA6IHN0YXJ0LFxuICAgICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgICBiYWNrOiBiYWNrLFxuICAgICAgICBlbmRjYXA6IGVuZCxcbiAgICAgICAgYmJveDogdXRpbHMuZmluZGJib3goW3N0YXJ0LCBmb3J3YXJkLCBiYWNrLCBlbmRdKVxuICAgICAgfTtcbiAgICAgIHZhciBzZWxmID0gdXRpbHM7XG4gICAgICBzaGFwZS5pbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oczIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2hhcGVpbnRlcnNlY3Rpb25zKHNoYXBlLHNoYXBlLmJib3gsczIsczIuYmJveCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9LFxuXG4gICAgZ2V0bWlubWF4OiBmdW5jdGlvbihjdXJ2ZSwgZCwgbGlzdCkge1xuICAgICAgaWYoIWxpc3QpIHJldHVybiB7IG1pbjowLCBtYXg6MCB9O1xuICAgICAgdmFyIG1pbj0weEZGRkZGRkZGRkZGRkZGRkYsIG1heD0tbWluLHQsYztcbiAgICAgIGlmKGxpc3QuaW5kZXhPZigwKT09PS0xKSB7IGxpc3QgPSBbMF0uY29uY2F0KGxpc3QpOyB9XG4gICAgICBpZihsaXN0LmluZGV4T2YoMSk9PT0tMSkgeyBsaXN0LnB1c2goMSk7IH1cbiAgICAgIGZvcih2YXIgaT0wLGxlbj1saXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0gbGlzdFtpXTtcbiAgICAgICAgYyA9IGN1cnZlLmdldCh0KTtcbiAgICAgICAgaWYoY1tkXSA8IG1pbikgeyBtaW4gPSBjW2RdOyB9XG4gICAgICAgIGlmKGNbZF0gPiBtYXgpIHsgbWF4ID0gY1tkXTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbWluOm1pbiwgbWlkOihtaW4rbWF4KS8yLCBtYXg6bWF4LCBzaXplOm1heC1taW4gfTtcbiAgICB9LFxuXG4gICAgYWxpZ246IGZ1bmN0aW9uKHBvaW50cywgbGluZSkge1xuICAgICAgdmFyIHR4ID0gbGluZS5wMS54LFxuICAgICAgICAgIHR5ID0gbGluZS5wMS55LFxuICAgICAgICAgIGEgPSAtYXRhbjIobGluZS5wMi55LXR5LCBsaW5lLnAyLngtdHgpLFxuICAgICAgICAgIGQgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiAodi54LXR4KSpjb3MoYSkgLSAodi55LXR5KSpzaW4oYSksXG4gICAgICAgICAgICAgIHk6ICh2LngtdHgpKnNpbihhKSArICh2LnktdHkpKmNvcyhhKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgcmV0dXJuIHBvaW50cy5tYXAoZCk7XG4gICAgfSxcblxuICAgIHJvb3RzOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIGxpbmUgPSBsaW5lIHx8IHtwMTp7eDowLHk6MH0scDI6e3g6MSx5OjB9fTtcbiAgICAgIHZhciBvcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIGxpbmUpO1xuICAgICAgdmFyIHJlZHVjZSA9IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIDA8PXQgJiYgdCA8PTE7IH07XG5cbiAgICAgIGlmIChvcmRlciA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0ueSxcbiAgICAgICAgICAgIGIgPSBwWzFdLnksXG4gICAgICAgICAgICBjID0gcFsyXS55LFxuICAgICAgICAgICAgZCA9IGEgLSAyKmIgKyBjO1xuICAgICAgICBpZihkIT09MCkge1xuICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIqYi1hKmMpLFxuICAgICAgICAgICAgICBtMiA9IC1hK2IsXG4gICAgICAgICAgICAgIHYxID0gLSggbTErbTIpL2QsXG4gICAgICAgICAgICAgIHYyID0gLSgtbTErbTIpL2Q7XG4gICAgICAgICAgcmV0dXJuIFt2MSwgdjJdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYiE9PWMgJiYgZD09PTApIHtcbiAgICAgICAgICByZXR1cm4gWyAoMipiLWMpLzIqKGItYykgXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnRyYW5zNG1pbmQuY29tL3BlcnNvbmFsX2RldmVsb3BtZW50L21hdGhlbWF0aWNzL3BvbHlub21pYWxzL2N1YmljQWxnZWJyYS5odG1cbiAgICAgIHZhciBwYSA9IHBbMF0ueSxcbiAgICAgICAgICBwYiA9IHBbMV0ueSxcbiAgICAgICAgICBwYyA9IHBbMl0ueSxcbiAgICAgICAgICBwZCA9IHBbM10ueSxcbiAgICAgICAgICBkID0gKC1wYSArIDMqcGIgLSAzKnBjICsgcGQpLFxuICAgICAgICAgIGEgPSAoMypwYSAtIDYqcGIgKyAzKnBjKSAvIGQsXG4gICAgICAgICAgYiA9ICgtMypwYSArIDMqcGIpIC8gZCxcbiAgICAgICAgICBjID0gcGEgLyBkLFxuICAgICAgICAgIHAgPSAoMypiIC0gYSphKS8zLFxuICAgICAgICAgIHAzID0gcC8zLFxuICAgICAgICAgIHEgPSAoMiphKmEqYSAtIDkqYSpiICsgMjcqYykvMjcsXG4gICAgICAgICAgcTIgPSBxLzIsXG4gICAgICAgICAgZGlzY3JpbWluYW50ID0gcTIqcTIgKyBwMypwMypwMyxcbiAgICAgICAgICB1MSx2MSx4MSx4Mix4MztcbiAgICAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xuICAgICAgICB2YXIgbXAzID0gLXAvMyxcbiAgICAgICAgICAgIG1wMzMgPSBtcDMqbXAzKm1wMyxcbiAgICAgICAgICAgIHIgPSBzcXJ0KCBtcDMzICksXG4gICAgICAgICAgICB0ID0gLXEvKDIqciksXG4gICAgICAgICAgICBjb3NwaGkgPSB0PC0xID8gLTEgOiB0PjEgPyAxIDogdCxcbiAgICAgICAgICAgIHBoaSA9IGFjb3MoY29zcGhpKSxcbiAgICAgICAgICAgIGNydHIgPSBjcnQociksXG4gICAgICAgICAgICB0MSA9IDIqY3J0cjtcbiAgICAgICAgeDEgPSB0MSAqIGNvcyhwaGkvMykgLSBhLzM7XG4gICAgICAgIHgyID0gdDEgKiBjb3MoKHBoaSt0YXUpLzMpIC0gYS8zO1xuICAgICAgICB4MyA9IHQxICogY29zKChwaGkrMip0YXUpLzMpIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLCB4MiwgeDNdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgfSBlbHNlIGlmKGRpc2NyaW1pbmFudCA9PT0gMCkge1xuICAgICAgICB1MSA9IHEyIDwgMCA/IGNydCgtcTIpIDogLWNydChxMik7XG4gICAgICAgIHgxID0gMip1MS1hLzM7XG4gICAgICAgIHgyID0gLXUxIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLHgyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZCA9IHNxcnQoZGlzY3JpbWluYW50KTtcbiAgICAgICAgdTEgPSBjcnQoLXEyK3NkKTtcbiAgICAgICAgdjEgPSBjcnQocTIrc2QpO1xuICAgICAgICByZXR1cm4gW3UxLXYxLWEvM10uZmlsdGVyKHJlZHVjZSk7O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkcm9vdHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgIC8vIHF1YWRyYXRpYyByb290cyBhcmUgZWFzeVxuICAgICAgaWYocC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLFxuICAgICAgICAgICAgYiA9IHBbMV0sXG4gICAgICAgICAgICBjID0gcFsyXSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsoMipiLWMpLygyKihiLWMpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBsaW5lYXIgcm9vdHMgYXJlIGV2ZW4gZWFzaWVyXG4gICAgICBpZihwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0sIGIgPSBwWzFdO1xuICAgICAgICBpZihhIT09Yikge1xuICAgICAgICAgIHJldHVybiBbYS8oYS1iKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24ocG9pbnRzKSB7XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aDw0KSByZXR1cm4gW107XG5cbiAgICAgIC8vIEZJWE1FOiBUT0RPOiBhZGQgaW4gaW5mbGVjdGlvbiBhYnN0cmFjdGlvbiBmb3IgcXVhcnRpYysgY3VydmVzP1xuXG4gICAgICB2YXIgcCA9IHV0aWxzLmFsaWduKHBvaW50cywgeyBwMTogcG9pbnRzWzBdLCBwMjogcG9pbnRzLnNsaWNlKC0xKVswXSB9KSxcbiAgICAgICAgICBhID0gcFsyXS54ICogcFsxXS55LFxuICAgICAgICAgIGIgPSBwWzNdLnggKiBwWzFdLnksXG4gICAgICAgICAgYyA9IHBbMV0ueCAqIHBbMl0ueSxcbiAgICAgICAgICBkID0gcFszXS54ICogcFsyXS55LFxuICAgICAgICAgIHYxID0gMTggKiAoLTMqYSArIDIqYiArIDMqYyAtIGQpLFxuICAgICAgICAgIHYyID0gMTggKiAoMyphIC0gYiAtIDMqYyksXG4gICAgICAgICAgdjMgPSAxOCAqIChjIC0gYSk7XG5cbiAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KHYxLDApKSByZXR1cm4gW107XG5cbiAgICAgIHZhciB0cm0gPSB2Mip2MiAtIDQqdjEqdjMsXG4gICAgICAgICAgc3EgPSBNYXRoLnNxcnQodHJtKSxcbiAgICAgICAgICBkID0gMiAqIHYxO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLDApKSByZXR1cm4gW107XG5cbiAgICAgIHJldHVybiBbKHNxLXYyKS9kLCAtKHYyK3NxKS9kXS5maWx0ZXIoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gKDAgPD0gciAmJiByIDw9IDEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGJib3hvdmVybGFwOiBmdW5jdGlvbihiMSxiMikge1xuICAgICAgdmFyIGRpbXM9Wyd4JywneSddLGxlbj1kaW1zLmxlbmd0aCxpLGRpbSxsLHQsZFxuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBkaW0gPSBkaW1zW2ldO1xuICAgICAgICBsID0gYjFbZGltXS5taWQ7XG4gICAgICAgIHQgPSBiMltkaW1dLm1pZDtcbiAgICAgICAgZCA9IChiMVtkaW1dLnNpemUgKyBiMltkaW1dLnNpemUpLzI7XG4gICAgICAgIGlmKGFicyhsLXQpID49IGQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBleHBhbmRib3g6IGZ1bmN0aW9uKGJib3gsIF9iYm94KSB7XG4gICAgICBpZihfYmJveC54Lm1pbiA8IGJib3gueC5taW4pIHsgYmJveC54Lm1pbiA9IF9iYm94LngubWluOyB9XG4gICAgICBpZihfYmJveC55Lm1pbiA8IGJib3gueS5taW4pIHsgYmJveC55Lm1pbiA9IF9iYm94LnkubWluOyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWluIDwgYmJveC56Lm1pbikgeyBiYm94LnoubWluID0gX2Jib3guei5taW47IH1cbiAgICAgIGlmKF9iYm94LngubWF4ID4gYmJveC54Lm1heCkgeyBiYm94LngubWF4ID0gX2Jib3gueC5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnkubWF4ID4gYmJveC55Lm1heCkgeyBiYm94LnkubWF4ID0gX2Jib3gueS5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnogJiYgX2Jib3guei5tYXggPiBiYm94LnoubWF4KSB7IGJib3guei5tYXggPSBfYmJveC56Lm1heDsgfVxuICAgICAgYmJveC54Lm1pZCA9IChiYm94LngubWluICsgYmJveC54Lm1heCkvMjtcbiAgICAgIGJib3gueS5taWQgPSAoYmJveC55Lm1pbiArIGJib3gueS5tYXgpLzI7XG4gICAgICBpZihiYm94LnopIHsgYmJveC56Lm1pZCA9IChiYm94LnoubWluICsgYmJveC56Lm1heCkvMjsgfVxuICAgICAgYmJveC54LnNpemUgPSBiYm94LngubWF4IC0gYmJveC54Lm1pbjtcbiAgICAgIGJib3gueS5zaXplID0gYmJveC55Lm1heCAtIGJib3gueS5taW47XG4gICAgICBpZihiYm94LnopIHsgYmJveC56LnNpemUgPSBiYm94LnoubWF4IC0gYmJveC56Lm1pbjsgfVxuICAgIH0sXG5cbiAgICBwYWlyaXRlcmF0aW9uOiBmdW5jdGlvbihjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYzFiID0gYzEuYmJveCgpLFxuICAgICAgICAgIGMyYiA9IGMyLmJib3goKSxcbiAgICAgICAgICByID0gMTAwMDAwLFxuICAgICAgICAgIHRocmVzaG9sZCA9IGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIGlmKGMxYi54LnNpemUgKyBjMWIueS5zaXplIDwgdGhyZXNob2xkICYmIGMyYi54LnNpemUgKyBjMmIueS5zaXplIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiBbICgociAqIChjMS5fdDErYzEuX3QyKS8yKXwwKS9yICsgXCIvXCIgKyAoKHIgKiAoYzIuX3QxK2MyLl90MikvMil8MCkvciBdO1xuICAgICAgfVxuICAgICAgdmFyIGNjMSA9IGMxLnNwbGl0KDAuNSksXG4gICAgICAgICAgY2MyID0gYzIuc3BsaXQoMC41KSxcbiAgICAgICAgICBwYWlycyA9IFtcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEubGVmdCwgcmlnaHQ6IGNjMi5sZWZ0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIubGVmdCB9XTtcbiAgICAgIHBhaXJzID0gcGFpcnMuZmlsdGVyKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKHBhaXIubGVmdC5iYm94KCkscGFpci5yaWdodC5iYm94KCkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgaWYocGFpcnMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0cztcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIHRocmVzaG9sZClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24odixpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmluZGV4T2YodikgPT09IGk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG5cbiAgICBnZXRjY2VudGVyOiBmdW5jdGlvbihwMSxwMixwMykge1xuICAgICAgdmFyIGR4MSA9IChwMi54IC0gcDEueCksXG4gICAgICAgICAgZHkxID0gKHAyLnkgLSBwMS55KSxcbiAgICAgICAgICBkeDIgPSAocDMueCAtIHAyLngpLFxuICAgICAgICAgIGR5MiA9IChwMy55IC0gcDIueSk7XG4gICAgICB2YXIgZHgxcCA9IGR4MSAqIGNvcyhxdWFydCkgLSBkeTEgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MXAgPSBkeDEgKiBzaW4ocXVhcnQpICsgZHkxICogY29zKHF1YXJ0KSxcbiAgICAgICAgICBkeDJwID0gZHgyICogY29zKHF1YXJ0KSAtIGR5MiAqIHNpbihxdWFydCksXG4gICAgICAgICAgZHkycCA9IGR4MiAqIHNpbihxdWFydCkgKyBkeTIgKiBjb3MocXVhcnQpO1xuICAgICAgLy8gY2hvcmQgbWlkcG9pbnRzXG4gICAgICB2YXIgbXgxID0gKHAxLnggKyBwMi54KS8yLFxuICAgICAgICAgIG15MSA9IChwMS55ICsgcDIueSkvMixcbiAgICAgICAgICBteDIgPSAocDIueCArIHAzLngpLzIsXG4gICAgICAgICAgbXkyID0gKHAyLnkgKyBwMy55KS8yO1xuICAgICAgLy8gbWlkcG9pbnQgb2Zmc2V0c1xuICAgICAgdmFyIG14MW4gPSBteDEgKyBkeDFwLFxuICAgICAgICAgIG15MW4gPSBteTEgKyBkeTFwLFxuICAgICAgICAgIG14Mm4gPSBteDIgKyBkeDJwLFxuICAgICAgICAgIG15Mm4gPSBteTIgKyBkeTJwO1xuICAgICAgLy8gaW50ZXJzZWN0aW9uIG9mIHRoZXNlIGxpbmVzOlxuICAgICAgdmFyIGFyYyA9IHV0aWxzLmxsaTgobXgxLG15MSxteDFuLG15MW4sIG14MixteTIsbXgybixteTJuKSxcbiAgICAgICAgICByID0gdXRpbHMuZGlzdChhcmMscDEpLFxuICAgICAgICAgIC8vIGFyYyBzdGFydC9lbmQgdmFsdWVzLCBvdmVyIG1pZCBwb2ludDpcbiAgICAgICAgICBzID0gYXRhbjIocDEueSAtIGFyYy55LCBwMS54IC0gYXJjLngpLFxuICAgICAgICAgIG0gPSBhdGFuMihwMi55IC0gYXJjLnksIHAyLnggLSBhcmMueCksXG4gICAgICAgICAgZSA9IGF0YW4yKHAzLnkgLSBhcmMueSwgcDMueCAtIGFyYy54KSxcbiAgICAgICAgICBfO1xuICAgICAgLy8gZGV0ZXJtaW5lIGFyYyBkaXJlY3Rpb24gKGN3L2NjdyBjb3JyZWN0aW9uKVxuICAgICAgaWYgKHM8ZSkge1xuICAgICAgICAvLyBpZiBzPG08ZSwgYXJjKHMsIGUpXG4gICAgICAgIC8vIGlmIG08czxlLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgLy8gaWYgczxlPG0sIGFyYyhlLCBzICsgdGF1KVxuICAgICAgICBpZiAocz5tIHx8IG0+ZSkgeyBzICs9IHRhdTsgfVxuICAgICAgICBpZiAocz5lKSB7IF89ZTsgZT1zOyBzPV87IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGU8bTxzLCBhcmMoZSwgcylcbiAgICAgICAgLy8gaWYgbTxlPHMsIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICAvLyBpZiBlPHM8bSwgYXJjKHMsIGUgKyB0YXUpXG4gICAgICAgIGlmIChlPG0gJiYgbTxzKSB7IF89ZTsgZT1zOyBzPV87IH0gZWxzZSB7IGUgKz0gdGF1OyB9XG4gICAgICB9XG4gICAgICAvLyBhc3NpZ24gYW5kIGRvbmUuXG4gICAgICBhcmMucyA9IHM7XG4gICAgICBhcmMuZSA9IGU7XG4gICAgICBhcmMuciA9IHI7XG4gICAgICByZXR1cm4gYXJjO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xufSgpKTtcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gIHZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbG9va3VwW2ldID0gY29kZVtpXVxuICAgIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxuICB9XG5cbiAgcmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG4gIHJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xufVxuXG5pbml0KClcblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICBwbGFjZUhvbGRlcnMgPSBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwXG5cbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIGFyciA9IG5ldyBBcnIobGVuICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGxlbiAtIDQgOiBsZW5cblxuICB2YXIgTCA9IDBcblxuICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8IHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBvdXRwdXQgPSAnJ1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPT0nXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArICh1aW50OFtsZW4gLSAxXSlcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAxMF1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9J1xuICB9XG5cbiAgcGFydHMucHVzaChvdXRwdXQpXG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjbG9uZSA9IHJlcXVpcmUoMTEyKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgxMTUpO1xudmFyIHN0cmluZyA9IHJlcXVpcmUoMTE3KTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24gKG9iaikge1xuXHRpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHRyZXR1cm4gb2JqO1xuXHR9XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaik7XG5cdH1cblxuXHR0aGlzLnZhbHVlcyA9IHtcblx0XHRyZ2I6IFswLCAwLCAwXSxcblx0XHRoc2w6IFswLCAwLCAwXSxcblx0XHRoc3Y6IFswLCAwLCAwXSxcblx0XHRod2I6IFswLCAwLCAwXSxcblx0XHRjbXlrOiBbMCwgMCwgMCwgMF0sXG5cdFx0YWxwaGE6IDFcblx0fTtcblxuXHQvLyBwYXJzZSBDb2xvcigpIGFyZ3VtZW50XG5cdHZhciB2YWxzO1xuXHRpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YWxzID0gc3RyaW5nLmdldFJnYmEob2JqKTtcblx0XHRpZiAodmFscykge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscyA9IHN0cmluZy5nZXRIc2xhKG9iaikpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHdiKG9iaikpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB2YWxzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmcgXCInICsgb2JqICsgJ1wiJyk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG5cdFx0dmFscyA9IG9iajtcblx0XHRpZiAodmFscy5yICE9PSB1bmRlZmluZWQgfHwgdmFscy5yZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5sICE9PSB1bmRlZmluZWQgfHwgdmFscy5saWdodG5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy52ICE9PSB1bmRlZmluZWQgfHwgdmFscy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHN2JywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLncgIT09IHVuZGVmaW5lZCB8fCB2YWxzLndoaXRlbmVzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLmMgIT09IHVuZGVmaW5lZCB8fCB2YWxzLmN5YW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2NteWsnLCB2YWxzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3QgJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblx0fVxufTtcblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHRyZ2I6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgncmdiJywgYXJndW1lbnRzKTtcblx0fSxcblx0aHNsOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2hzbCcsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzdjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc3YnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRod2I6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHdiJywgYXJndW1lbnRzKTtcblx0fSxcblx0Y215azogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdjbXlrJywgYXJndW1lbnRzKTtcblx0fSxcblxuXHRyZ2JBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5yZ2I7XG5cdH0sXG5cdGhzbEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzbDtcblx0fSxcblx0aHN2QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHN2O1xuXHR9LFxuXHRod2JBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzLmh3Yi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2I7XG5cdH0sXG5cdGNteWtBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5jbXlrO1xuXHR9LFxuXHRyZ2JhQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHJldHVybiByZ2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHR9LFxuXHRoc2xhQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaHNsID0gdGhpcy52YWx1ZXMuaHNsO1xuXHRcdHJldHVybiBoc2wuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHR9LFxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWVzLmFscGhhO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB2YWwpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDAsIHZhbCk7XG5cdH0sXG5cdGdyZWVuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMSwgdmFsKTtcblx0fSxcblx0Ymx1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDIsIHZhbCk7XG5cdH0sXG5cdGh1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHZhbCAlPSAzNjA7XG5cdFx0XHR2YWwgPSB2YWwgPCAwID8gMzYwICsgdmFsIDogdmFsO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAwLCB2YWwpO1xuXHR9LFxuXHRzYXR1cmF0aW9uOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMSwgdmFsKTtcblx0fSxcblx0bGlnaHRuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMiwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbnY6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAxLCB2YWwpO1xuXHR9LFxuXHR3aGl0ZW5lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdod2InLCAxLCB2YWwpO1xuXHR9LFxuXHRibGFja25lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdod2InLCAyLCB2YWwpO1xuXHR9LFxuXHR2YWx1ZTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzdicsIDIsIHZhbCk7XG5cdH0sXG5cdGN5YW46IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMCwgdmFsKTtcblx0fSxcblx0bWFnZW50YTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAxLCB2YWwpO1xuXHR9LFxuXHR5ZWxsb3c6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMiwgdmFsKTtcblx0fSxcblx0YmxhY2s6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMywgdmFsKTtcblx0fSxcblxuXHRoZXhTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhleFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IpO1xuXHR9LFxuXHRyZ2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYlN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0cmdiYVN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucmdiYVN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucGVyY2VudFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHNsU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbGFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhzbGFTdHJpbmcodGhpcy52YWx1ZXMuaHNsLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGh3YlN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHdiU3RyaW5nKHRoaXMudmFsdWVzLmh3YiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRrZXl3b3JkOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5rZXl3b3JkKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAodGhpcy52YWx1ZXMucmdiWzBdIDw8IDE2KSB8ICh0aGlzLnZhbHVlcy5yZ2JbMV0gPDwgOCkgfCB0aGlzLnZhbHVlcy5yZ2JbMl07XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0ZGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRsaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5kYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSAyNTUgLSB0aGlzLnZhbHVlcy5yZ2JbaV07XG5cdFx0fVxuXHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCByZ2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsyXSArPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsyXSAtPSB0aGlzLnZhbHVlcy5oc2xbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzFdICs9IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSAtPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmh3YlsxXSArPSB0aGlzLnZhbHVlcy5od2JbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdGhpcy52YWx1ZXMuaHdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMl0gKz0gdGhpcy52YWx1ZXMuaHdiWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Z3JleXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgW3ZhbCwgdmFsLCB2YWxdKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRjbGVhcmVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB0aGlzLnZhbHVlcy5hbHBoYSAtICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgKyAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHVlID0gdGhpcy52YWx1ZXMuaHNsWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdHRoaXMudmFsdWVzLmhzbFswXSA9IGh1ZTtcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHQvKipcblx0ICogUG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdCAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHQgKi9cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0dmFyIGNvbG9yMSA9IHRoaXM7XG5cdFx0dmFyIGNvbG9yMiA9IG1peGluQ29sb3I7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiB0aGlzXG5cdFx0XHQucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpXG5cdFx0XHQpXG5cdFx0XHQuYWxwaGEoY29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZ2IoKTtcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBjb2wgPSBuZXcgQ29sb3IoKTtcblx0XHRjb2wudmFsdWVzID0gY2xvbmUodGhpcy52YWx1ZXMpO1xuXHRcdHJldHVybiBjb2w7XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbiAoc3BhY2UpIHtcblx0dmFyIHZhbHMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsc1tzcGFjZS5jaGFyQXQoaSldID0gdGhpcy52YWx1ZXNbc3BhY2VdW2ldO1xuXHR9XG5cblx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0dmFscy5hID0gdGhpcy52YWx1ZXMuYWxwaGE7XG5cdH1cblxuXHQvLyB7cjogMjU1LCBnOiAyNTUsIGI6IDI1NSwgYTogMC40fVxuXHRyZXR1cm4gdmFscztcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAoc3BhY2UsIHZhbHMpIHtcblx0dmFyIHNwYWNlcyA9IHtcblx0XHRyZ2I6IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSxcblx0XHRoc2w6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAnbGlnaHRuZXNzJ10sXG5cdFx0aHN2OiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ3ZhbHVlJ10sXG5cdFx0aHdiOiBbJ2h1ZScsICd3aGl0ZW5lc3MnLCAnYmxhY2tuZXNzJ10sXG5cdFx0Y215azogWydjeWFuJywgJ21hZ2VudGEnLCAneWVsbG93JywgJ2JsYWNrJ11cblx0fTtcblxuXHR2YXIgbWF4ZXMgPSB7XG5cdFx0cmdiOiBbMjU1LCAyNTUsIDI1NV0sXG5cdFx0aHNsOiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0aHN2OiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0aHdiOiBbMzYwLCAxMDAsIDEwMF0sXG5cdFx0Y215azogWzEwMCwgMTAwLCAxMDAsIDEwMF1cblx0fTtcblxuXHR2YXIgaTtcblx0dmFyIGFscGhhID0gMTtcblx0aWYgKHNwYWNlID09PSAnYWxwaGEnKSB7XG5cdFx0YWxwaGEgPSB2YWxzO1xuXHR9IGVsc2UgaWYgKHZhbHMubGVuZ3RoKSB7XG5cdFx0Ly8gWzEwLCAxMCwgMTBdXG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdID0gdmFscy5zbGljZSgwLCBzcGFjZS5sZW5ndGgpO1xuXHRcdGFscGhhID0gdmFsc1tzcGFjZS5sZW5ndGhdO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2UuY2hhckF0KDApXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8ge3I6IDEwLCBnOiAxMCwgYjogMTB9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW3NwYWNlLmNoYXJBdChpKV07XG5cdFx0fVxuXG5cdFx0YWxwaGEgPSB2YWxzLmE7XG5cdH0gZWxzZSBpZiAodmFsc1tzcGFjZXNbc3BhY2VdWzBdXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8ge3JlZDogMTAsIGdyZWVuOiAxMCwgYmx1ZTogMTB9XG5cdFx0dmFyIGNoYW5zID0gc3BhY2VzW3NwYWNlXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tjaGFuc1tpXV07XG5cdFx0fVxuXG5cdFx0YWxwaGEgPSB2YWxzLmFscGhhO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMuYWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAoYWxwaGEgPT09IHVuZGVmaW5lZCA/IHRoaXMudmFsdWVzLmFscGhhIDogYWxwaGEpKSk7XG5cblx0aWYgKHNwYWNlID09PSAnYWxwaGEnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGNhcHBlZDtcblxuXHQvLyBjYXAgdmFsdWVzIG9mIHRoZSBzcGFjZSBwcmlvciBjb252ZXJ0aW5nIGFsbCB2YWx1ZXNcblx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc3BhY2VdW2ldLCB0aGlzLnZhbHVlc1tzcGFjZV1baV0pKTtcblx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG5cdH1cblxuXHQvLyBjb252ZXJ0IHRvIGFsbCB0aGUgb3RoZXIgY29sb3Igc3BhY2VzXG5cdGZvciAodmFyIHNuYW1lIGluIHNwYWNlcykge1xuXHRcdGlmIChzbmFtZSAhPT0gc3BhY2UpIHtcblx0XHRcdHRoaXMudmFsdWVzW3NuYW1lXSA9IGNvbnZlcnRbc3BhY2VdW3NuYW1lXSh0aGlzLnZhbHVlc1tzcGFjZV0pO1xuXHRcdH1cblxuXHRcdC8vIGNhcCB2YWx1ZXNcblx0XHRmb3IgKGkgPSAwOyBpIDwgc25hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NuYW1lXVtpXSwgdGhpcy52YWx1ZXNbc25hbWVdW2ldKSk7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV1baV0gPSBNYXRoLnJvdW5kKGNhcHBlZCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0U3BhY2UgPSBmdW5jdGlvbiAoc3BhY2UsIGFyZ3MpIHtcblx0dmFyIHZhbHMgPSBhcmdzWzBdO1xuXG5cdGlmICh2YWxzID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBjb2xvci5yZ2IoKVxuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlcyhzcGFjZSk7XG5cdH1cblxuXHQvLyBjb2xvci5yZ2IoMTAsIDEwLCAxMClcblx0aWYgKHR5cGVvZiB2YWxzID09PSAnbnVtYmVyJykge1xuXHRcdHZhbHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcblx0fVxuXG5cdHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB2YWxzKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0Q2hhbm5lbCA9IGZ1bmN0aW9uIChzcGFjZSwgaW5kZXgsIHZhbCkge1xuXHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBjb2xvci5yZWQoKVxuXHRcdHJldHVybiB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSkge1xuXHRcdC8vIGNvbG9yLnJlZChjb2xvci5yZWQoKSlcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8vIGNvbG9yLnJlZCgxMDApXG5cdHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0gPSB2YWw7XG5cdHRoaXMuc2V0VmFsdWVzKHNwYWNlLCB0aGlzLnZhbHVlc1tzcGFjZV0pO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsInZhciBjbG9uZSA9IChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDbG9uZXMgKGNvcGllcykgYW4gT2JqZWN0IHVzaW5nIGRlZXAgY29weWluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHN1cHBvcnRzIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSBhcmUgY2VydGFpblxuICogdGhlcmUgYXJlIG5vIGNpcmN1bGFyIHJlZmVyZW5jZXMgaW4geW91ciBvYmplY3QsIHlvdSBjYW4gc2F2ZSBzb21lIENQVSB0aW1lXG4gKiBieSBjYWxsaW5nIGNsb25lKG9iaiwgZmFsc2UpLlxuICpcbiAqIENhdXRpb246IGlmIGBjaXJjdWxhcmAgaXMgZmFsc2UgYW5kIGBwYXJlbnRgIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXMsXG4gKiB5b3VyIHByb2dyYW0gbWF5IGVudGVyIGFuIGluZmluaXRlIGxvb3AgYW5kIGNyYXNoLlxuICpcbiAqIEBwYXJhbSBgcGFyZW50YCAtIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkXG4gKiBAcGFyYW0gYGNpcmN1bGFyYCAtIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkIG1heSBjb250YWluXG4gKiAgICBjaXJjdWxhciByZWZlcmVuY2VzLiAob3B0aW9uYWwgLSB0cnVlIGJ5IGRlZmF1bHQpXG4gKiBAcGFyYW0gYGRlcHRoYCAtIHNldCB0byBhIG51bWJlciBpZiB0aGUgb2JqZWN0IGlzIG9ubHkgdG8gYmUgY2xvbmVkIHRvXG4gKiAgICBhIHBhcnRpY3VsYXIgZGVwdGguIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIEluZmluaXR5KVxuICogQHBhcmFtIGBwcm90b3R5cGVgIC0gc2V0cyB0aGUgcHJvdG90eXBlIHRvIGJlIHVzZWQgd2hlbiBjbG9uaW5nIGFuIG9iamVjdC5cbiAqICAgIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIHBhcmVudCBwcm90b3R5cGUpLlxuKi9cbmZ1bmN0aW9uIGNsb25lKHBhcmVudCwgY2lyY3VsYXIsIGRlcHRoLCBwcm90b3R5cGUpIHtcbiAgdmFyIGZpbHRlcjtcbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PT0gJ29iamVjdCcpIHtcbiAgICBkZXB0aCA9IGNpcmN1bGFyLmRlcHRoO1xuICAgIHByb3RvdHlwZSA9IGNpcmN1bGFyLnByb3RvdHlwZTtcbiAgICBmaWx0ZXIgPSBjaXJjdWxhci5maWx0ZXI7XG4gICAgY2lyY3VsYXIgPSBjaXJjdWxhci5jaXJjdWxhclxuICB9XG4gIC8vIG1haW50YWluIHR3byBhcnJheXMgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMsIHdoZXJlIGNvcnJlc3BvbmRpbmcgcGFyZW50c1xuICAvLyBhbmQgY2hpbGRyZW4gaGF2ZSB0aGUgc2FtZSBpbmRleFxuICB2YXIgYWxsUGFyZW50cyA9IFtdO1xuICB2YXIgYWxsQ2hpbGRyZW4gPSBbXTtcblxuICB2YXIgdXNlQnVmZmVyID0gdHlwZW9mIEJ1ZmZlciAhPSAndW5kZWZpbmVkJztcblxuICBpZiAodHlwZW9mIGNpcmN1bGFyID09ICd1bmRlZmluZWQnKVxuICAgIGNpcmN1bGFyID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGRlcHRoID09ICd1bmRlZmluZWQnKVxuICAgIGRlcHRoID0gSW5maW5pdHk7XG5cbiAgLy8gcmVjdXJzZSB0aGlzIGZ1bmN0aW9uIHNvIHdlIGRvbid0IHJlc2V0IGFsbFBhcmVudHMgYW5kIGFsbENoaWxkcmVuXG4gIGZ1bmN0aW9uIF9jbG9uZShwYXJlbnQsIGRlcHRoKSB7XG4gICAgLy8gY2xvbmluZyBudWxsIGFsd2F5cyByZXR1cm5zIG51bGxcbiAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoZGVwdGggPT0gMClcbiAgICAgIHJldHVybiBwYXJlbnQ7XG5cbiAgICB2YXIgY2hpbGQ7XG4gICAgdmFyIHByb3RvO1xuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGlmIChjbG9uZS5fX2lzQXJyYXkocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNSZWdFeHAocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgUmVnRXhwKHBhcmVudC5zb3VyY2UsIF9fZ2V0UmVnRXhwRmxhZ3MocGFyZW50KSk7XG4gICAgICBpZiAocGFyZW50Lmxhc3RJbmRleCkgY2hpbGQubGFzdEluZGV4ID0gcGFyZW50Lmxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNEYXRlKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IERhdGUocGFyZW50LmdldFRpbWUoKSk7XG4gICAgfSBlbHNlIGlmICh1c2VCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IEJ1ZmZlcihwYXJlbnQubGVuZ3RoKTtcbiAgICAgIHBhcmVudC5jb3B5KGNoaWxkKTtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50KTtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcbiAgICAgICAgcHJvdG8gPSBwcm90b3R5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNpcmN1bGFyKSB7XG4gICAgICB2YXIgaW5kZXggPSBhbGxQYXJlbnRzLmluZGV4T2YocGFyZW50KTtcblxuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGxDaGlsZHJlbltpbmRleF07XG4gICAgICB9XG4gICAgICBhbGxQYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIGFsbENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgaW4gcGFyZW50KSB7XG4gICAgICB2YXIgYXR0cnM7XG4gICAgICBpZiAocHJvdG8pIHtcbiAgICAgICAgYXR0cnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJzICYmIGF0dHJzLnNldCA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY2hpbGRbaV0gPSBfY2xvbmUocGFyZW50W2ldLCBkZXB0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHJldHVybiBfY2xvbmUocGFyZW50LCBkZXB0aCk7XG59XG5cbi8qKlxuICogU2ltcGxlIGZsYXQgY2xvbmUgdXNpbmcgcHJvdG90eXBlLCBhY2NlcHRzIG9ubHkgb2JqZWN0cywgdXNlZnVsbCBmb3IgcHJvcGVydHlcbiAqIG92ZXJyaWRlIG9uIEZMQVQgY29uZmlndXJhdGlvbiBvYmplY3QgKG5vIG5lc3RlZCBwcm9wcykuXG4gKlxuICogVVNFIFdJVEggQ0FVVElPTiEgVGhpcyBtYXkgbm90IGJlaGF2ZSBhcyB5b3Ugd2lzaCBpZiB5b3UgZG8gbm90IGtub3cgaG93IHRoaXNcbiAqIHdvcmtzLlxuICovXG5jbG9uZS5jbG9uZVByb3RvdHlwZSA9IGZ1bmN0aW9uIGNsb25lUHJvdG90eXBlKHBhcmVudCkge1xuICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBjID0gZnVuY3Rpb24gKCkge307XG4gIGMucHJvdG90eXBlID0gcGFyZW50O1xuICByZXR1cm4gbmV3IGMoKTtcbn07XG5cbi8vIHByaXZhdGUgdXRpbGl0eSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gX19vYmpUb1N0cihvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59O1xuY2xvbmUuX19vYmpUb1N0ciA9IF9fb2JqVG9TdHI7XG5cbmZ1bmN0aW9uIF9faXNEYXRlKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuY2xvbmUuX19pc0RhdGUgPSBfX2lzRGF0ZTtcblxuZnVuY3Rpb24gX19pc0FycmF5KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbmNsb25lLl9faXNBcnJheSA9IF9faXNBcnJheTtcblxuZnVuY3Rpb24gX19pc1JlZ0V4cChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuY2xvbmUuX19pc1JlZ0V4cCA9IF9faXNSZWdFeHA7XG5cbmZ1bmN0aW9uIF9fZ2V0UmVnRXhwRmxhZ3MocmUpIHtcbiAgdmFyIGZsYWdzID0gJyc7XG4gIGlmIChyZS5nbG9iYWwpIGZsYWdzICs9ICdnJztcbiAgaWYgKHJlLmlnbm9yZUNhc2UpIGZsYWdzICs9ICdpJztcbiAgaWYgKHJlLm11bHRpbGluZSkgZmxhZ3MgKz0gJ20nO1xuICByZXR1cm4gZmxhZ3M7XG59O1xuY2xvbmUuX19nZXRSZWdFeHBGbGFncyA9IF9fZ2V0UmVnRXhwRmxhZ3M7XG5cbnJldHVybiBjbG9uZTtcbn0pKCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xufVxuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoMTE0KTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV0uam9pbigpXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogM30sXG5cdGhzbDoge2NoYW5uZWxzOiAzfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDN9LFxuXHRod2I6IHtjaGFubmVsczogM30sXG5cdGNteWs6IHtjaGFubmVsczogNH0sXG5cdHh5ejoge2NoYW5uZWxzOiAzfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDN9LFxuXHRsY2g6IHtjaGFubmVsczogM30sXG5cdGhleDoge2NoYW5uZWxzOiAxfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDF9LFxuXHRoY2c6IHtjaGFubmVsczogM30sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDN9XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBwcm9wZXJ0eVxuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgdjtcblxuXHRpZiAobWF4ID09PSAwKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IChkZWx0YSAvIG1heCAqIDEwMDApIC8gMTA7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VLZXl3b3Jkc1tyZ2Iuam9pbigpXTtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KG1hdGNoWzBdLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0YWxpY2VibHVlOiBbMjQwLCAyNDgsIDI1NV0sXG5cdGFudGlxdWV3aGl0ZTogWzI1MCwgMjM1LCAyMTVdLFxuXHRhcXVhOiBbMCwgMjU1LCAyNTVdLFxuXHRhcXVhbWFyaW5lOiBbMTI3LCAyNTUsIDIxMl0sXG5cdGF6dXJlOiBbMjQwLCAyNTUsIDI1NV0sXG5cdGJlaWdlOiBbMjQ1LCAyNDUsIDIyMF0sXG5cdGJpc3F1ZTogWzI1NSwgMjI4LCAxOTZdLFxuXHRibGFjazogWzAsIDAsIDBdLFxuXHRibGFuY2hlZGFsbW9uZDogWzI1NSwgMjM1LCAyMDVdLFxuXHRibHVlOiBbMCwgMCwgMjU1XSxcblx0Ymx1ZXZpb2xldDogWzEzOCwgNDMsIDIyNl0sXG5cdGJyb3duOiBbMTY1LCA0MiwgNDJdLFxuXHRidXJseXdvb2Q6IFsyMjIsIDE4NCwgMTM1XSxcblx0Y2FkZXRibHVlOiBbOTUsIDE1OCwgMTYwXSxcblx0Y2hhcnRyZXVzZTogWzEyNywgMjU1LCAwXSxcblx0Y2hvY29sYXRlOiBbMjEwLCAxMDUsIDMwXSxcblx0Y29yYWw6IFsyNTUsIDEyNywgODBdLFxuXHRjb3JuZmxvd2VyYmx1ZTogWzEwMCwgMTQ5LCAyMzddLFxuXHRjb3Juc2lsazogWzI1NSwgMjQ4LCAyMjBdLFxuXHRjcmltc29uOiBbMjIwLCAyMCwgNjBdLFxuXHRjeWFuOiBbMCwgMjU1LCAyNTVdLFxuXHRkYXJrYmx1ZTogWzAsIDAsIDEzOV0sXG5cdGRhcmtjeWFuOiBbMCwgMTM5LCAxMzldLFxuXHRkYXJrZ29sZGVucm9kOiBbMTg0LCAxMzQsIDExXSxcblx0ZGFya2dyYXk6IFsxNjksIDE2OSwgMTY5XSxcblx0ZGFya2dyZWVuOiBbMCwgMTAwLCAwXSxcblx0ZGFya2dyZXk6IFsxNjksIDE2OSwgMTY5XSxcblx0ZGFya2toYWtpOiBbMTg5LCAxODMsIDEwN10sXG5cdGRhcmttYWdlbnRhOiBbMTM5LCAwLCAxMzldLFxuXHRkYXJrb2xpdmVncmVlbjogWzg1LCAxMDcsIDQ3XSxcblx0ZGFya29yYW5nZTogWzI1NSwgMTQwLCAwXSxcblx0ZGFya29yY2hpZDogWzE1MywgNTAsIDIwNF0sXG5cdGRhcmtyZWQ6IFsxMzksIDAsIDBdLFxuXHRkYXJrc2FsbW9uOiBbMjMzLCAxNTAsIDEyMl0sXG5cdGRhcmtzZWFncmVlbjogWzE0MywgMTg4LCAxNDNdLFxuXHRkYXJrc2xhdGVibHVlOiBbNzIsIDYxLCAxMzldLFxuXHRkYXJrc2xhdGVncmF5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmtzbGF0ZWdyZXk6IFs0NywgNzksIDc5XSxcblx0ZGFya3R1cnF1b2lzZTogWzAsIDIwNiwgMjA5XSxcblx0ZGFya3Zpb2xldDogWzE0OCwgMCwgMjExXSxcblx0ZGVlcHBpbms6IFsyNTUsIDIwLCAxNDddLFxuXHRkZWVwc2t5Ymx1ZTogWzAsIDE5MSwgMjU1XSxcblx0ZGltZ3JheTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkaW1ncmV5OiBbMTA1LCAxMDUsIDEwNV0sXG5cdGRvZGdlcmJsdWU6IFszMCwgMTQ0LCAyNTVdLFxuXHRmaXJlYnJpY2s6IFsxNzgsIDM0LCAzNF0sXG5cdGZsb3JhbHdoaXRlOiBbMjU1LCAyNTAsIDI0MF0sXG5cdGZvcmVzdGdyZWVuOiBbMzQsIDEzOSwgMzRdLFxuXHRmdWNoc2lhOiBbMjU1LCAwLCAyNTVdLFxuXHRnYWluc2Jvcm86IFsyMjAsIDIyMCwgMjIwXSxcblx0Z2hvc3R3aGl0ZTogWzI0OCwgMjQ4LCAyNTVdLFxuXHRnb2xkOiBbMjU1LCAyMTUsIDBdLFxuXHRnb2xkZW5yb2Q6IFsyMTgsIDE2NSwgMzJdLFxuXHRncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG5cdGdyZWVuOiBbMCwgMTI4LCAwXSxcblx0Z3JlZW55ZWxsb3c6IFsxNzMsIDI1NSwgNDddLFxuXHRncmV5OiBbMTI4LCAxMjgsIDEyOF0sXG5cdGhvbmV5ZGV3OiBbMjQwLCAyNTUsIDI0MF0sXG5cdGhvdHBpbms6IFsyNTUsIDEwNSwgMTgwXSxcblx0aW5kaWFucmVkOiBbMjA1LCA5MiwgOTJdLFxuXHRpbmRpZ286IFs3NSwgMCwgMTMwXSxcblx0aXZvcnk6IFsyNTUsIDI1NSwgMjQwXSxcblx0a2hha2k6IFsyNDAsIDIzMCwgMTQwXSxcblx0bGF2ZW5kZXI6IFsyMzAsIDIzMCwgMjUwXSxcblx0bGF2ZW5kZXJibHVzaDogWzI1NSwgMjQwLCAyNDVdLFxuXHRsYXduZ3JlZW46IFsxMjQsIDI1MiwgMF0sXG5cdGxlbW9uY2hpZmZvbjogWzI1NSwgMjUwLCAyMDVdLFxuXHRsaWdodGJsdWU6IFsxNzMsIDIxNiwgMjMwXSxcblx0bGlnaHRjb3JhbDogWzI0MCwgMTI4LCAxMjhdLFxuXHRsaWdodGN5YW46IFsyMjQsIDI1NSwgMjU1XSxcblx0bGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsIDI1MCwgMjEwXSxcblx0bGlnaHRncmF5OiBbMjExLCAyMTEsIDIxMV0sXG5cdGxpZ2h0Z3JlZW46IFsxNDQsIDIzOCwgMTQ0XSxcblx0bGlnaHRncmV5OiBbMjExLCAyMTEsIDIxMV0sXG5cdGxpZ2h0cGluazogWzI1NSwgMTgyLCAxOTNdLFxuXHRsaWdodHNhbG1vbjogWzI1NSwgMTYwLCAxMjJdLFxuXHRsaWdodHNlYWdyZWVuOiBbMzIsIDE3OCwgMTcwXSxcblx0bGlnaHRza3libHVlOiBbMTM1LCAyMDYsIDI1MF0sXG5cdGxpZ2h0c2xhdGVncmF5OiBbMTE5LCAxMzYsIDE1M10sXG5cdGxpZ2h0c2xhdGVncmV5OiBbMTE5LCAxMzYsIDE1M10sXG5cdGxpZ2h0c3RlZWxibHVlOiBbMTc2LCAxOTYsIDIyMl0sXG5cdGxpZ2h0eWVsbG93OiBbMjU1LCAyNTUsIDIyNF0sXG5cdGxpbWU6IFswLCAyNTUsIDBdLFxuXHRsaW1lZ3JlZW46IFs1MCwgMjA1LCA1MF0sXG5cdGxpbmVuOiBbMjUwLCAyNDAsIDIzMF0sXG5cdG1hZ2VudGE6IFsyNTUsIDAsIDI1NV0sXG5cdG1hcm9vbjogWzEyOCwgMCwgMF0sXG5cdG1lZGl1bWFxdWFtYXJpbmU6IFsxMDIsIDIwNSwgMTcwXSxcblx0bWVkaXVtYmx1ZTogWzAsIDAsIDIwNV0sXG5cdG1lZGl1bW9yY2hpZDogWzE4NiwgODUsIDIxMV0sXG5cdG1lZGl1bXB1cnBsZTogWzE0NywgMTEyLCAyMTldLFxuXHRtZWRpdW1zZWFncmVlbjogWzYwLCAxNzksIDExM10sXG5cdG1lZGl1bXNsYXRlYmx1ZTogWzEyMywgMTA0LCAyMzhdLFxuXHRtZWRpdW1zcHJpbmdncmVlbjogWzAsIDI1MCwgMTU0XSxcblx0bWVkaXVtdHVycXVvaXNlOiBbNzIsIDIwOSwgMjA0XSxcblx0bWVkaXVtdmlvbGV0cmVkOiBbMTk5LCAyMSwgMTMzXSxcblx0bWlkbmlnaHRibHVlOiBbMjUsIDI1LCAxMTJdLFxuXHRtaW50Y3JlYW06IFsyNDUsIDI1NSwgMjUwXSxcblx0bWlzdHlyb3NlOiBbMjU1LCAyMjgsIDIyNV0sXG5cdG1vY2Nhc2luOiBbMjU1LCAyMjgsIDE4MV0sXG5cdG5hdmFqb3doaXRlOiBbMjU1LCAyMjIsIDE3M10sXG5cdG5hdnk6IFswLCAwLCAxMjhdLFxuXHRvbGRsYWNlOiBbMjUzLCAyNDUsIDIzMF0sXG5cdG9saXZlOiBbMTI4LCAxMjgsIDBdLFxuXHRvbGl2ZWRyYWI6IFsxMDcsIDE0MiwgMzVdLFxuXHRvcmFuZ2U6IFsyNTUsIDE2NSwgMF0sXG5cdG9yYW5nZXJlZDogWzI1NSwgNjksIDBdLFxuXHRvcmNoaWQ6IFsyMTgsIDExMiwgMjE0XSxcblx0cGFsZWdvbGRlbnJvZDogWzIzOCwgMjMyLCAxNzBdLFxuXHRwYWxlZ3JlZW46IFsxNTIsIDI1MSwgMTUyXSxcblx0cGFsZXR1cnF1b2lzZTogWzE3NSwgMjM4LCAyMzhdLFxuXHRwYWxldmlvbGV0cmVkOiBbMjE5LCAxMTIsIDE0N10sXG5cdHBhcGF5YXdoaXA6IFsyNTUsIDIzOSwgMjEzXSxcblx0cGVhY2hwdWZmOiBbMjU1LCAyMTgsIDE4NV0sXG5cdHBlcnU6IFsyMDUsIDEzMywgNjNdLFxuXHRwaW5rOiBbMjU1LCAxOTIsIDIwM10sXG5cdHBsdW06IFsyMjEsIDE2MCwgMjIxXSxcblx0cG93ZGVyYmx1ZTogWzE3NiwgMjI0LCAyMzBdLFxuXHRwdXJwbGU6IFsxMjgsIDAsIDEyOF0sXG5cdHJlYmVjY2FwdXJwbGU6IFsxMDIsIDUxLCAxNTNdLFxuXHRyZWQ6IFsyNTUsIDAsIDBdLFxuXHRyb3N5YnJvd246IFsxODgsIDE0MywgMTQzXSxcblx0cm95YWxibHVlOiBbNjUsIDEwNSwgMjI1XSxcblx0c2FkZGxlYnJvd246IFsxMzksIDY5LCAxOV0sXG5cdHNhbG1vbjogWzI1MCwgMTI4LCAxMTRdLFxuXHRzYW5keWJyb3duOiBbMjQ0LCAxNjQsIDk2XSxcblx0c2VhZ3JlZW46IFs0NiwgMTM5LCA4N10sXG5cdHNlYXNoZWxsOiBbMjU1LCAyNDUsIDIzOF0sXG5cdHNpZW5uYTogWzE2MCwgODIsIDQ1XSxcblx0c2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG5cdHNreWJsdWU6IFsxMzUsIDIwNiwgMjM1XSxcblx0c2xhdGVibHVlOiBbMTA2LCA5MCwgMjA1XSxcblx0c2xhdGVncmF5OiBbMTEyLCAxMjgsIDE0NF0sXG5cdHNsYXRlZ3JleTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbm93OiBbMjU1LCAyNTAsIDI1MF0sXG5cdHNwcmluZ2dyZWVuOiBbMCwgMjU1LCAxMjddLFxuXHRzdGVlbGJsdWU6IFs3MCwgMTMwLCAxODBdLFxuXHR0YW46IFsyMTAsIDE4MCwgMTQwXSxcblx0dGVhbDogWzAsIDEyOCwgMTI4XSxcblx0dGhpc3RsZTogWzIxNiwgMTkxLCAyMTZdLFxuXHR0b21hdG86IFsyNTUsIDk5LCA3MV0sXG5cdHR1cnF1b2lzZTogWzY0LCAyMjQsIDIwOF0sXG5cdHZpb2xldDogWzIzOCwgMTMwLCAyMzhdLFxuXHR3aGVhdDogWzI0NSwgMjIyLCAxNzldLFxuXHR3aGl0ZTogWzI1NSwgMjU1LCAyNTVdLFxuXHR3aGl0ZXNtb2tlOiBbMjQ1LCAyNDUsIDI0NV0sXG5cdHllbGxvdzogWzI1NSwgMjU1LCAwXSxcblx0eWVsbG93Z3JlZW46IFsxNTQsIDIwNSwgNTBdXG59O1xuXG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKDExMyk7XG52YXIgcm91dGUgPSByZXF1aXJlKDExNik7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoMTEzKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbi8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoMTE4KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBnZXRSZ2JhOiBnZXRSZ2JhLFxuICAgZ2V0SHNsYTogZ2V0SHNsYSxcbiAgIGdldFJnYjogZ2V0UmdiLFxuICAgZ2V0SHNsOiBnZXRIc2wsXG4gICBnZXRId2I6IGdldEh3YixcbiAgIGdldEFscGhhOiBnZXRBbHBoYSxcblxuICAgaGV4U3RyaW5nOiBoZXhTdHJpbmcsXG4gICByZ2JTdHJpbmc6IHJnYlN0cmluZyxcbiAgIHJnYmFTdHJpbmc6IHJnYmFTdHJpbmcsXG4gICBwZXJjZW50U3RyaW5nOiBwZXJjZW50U3RyaW5nLFxuICAgcGVyY2VudGFTdHJpbmc6IHBlcmNlbnRhU3RyaW5nLFxuICAgaHNsU3RyaW5nOiBoc2xTdHJpbmcsXG4gICBoc2xhU3RyaW5nOiBoc2xhU3RyaW5nLFxuICAgaHdiU3RyaW5nOiBod2JTdHJpbmcsXG4gICBrZXl3b3JkOiBrZXl3b3JkXG59XG5cbmZ1bmN0aW9uIGdldFJnYmEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGFiYnIgPSAgL14jKFthLWZBLUYwLTldezN9KSQvLFxuICAgICAgIGhleCA9ICAvXiMoW2EtZkEtRjAtOV17Nn0pJC8sXG4gICAgICAgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIGtleXdvcmQgPSAvKFxcRCspLztcblxuICAgdmFyIHJnYiA9IFswLCAwLCAwXSxcbiAgICAgICBhID0gMSxcbiAgICAgICBtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkgKiAyLCBpICogMiArIDIpLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG4gICAgICBpZiAobWF0Y2hbMV0gPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG4gICAgICBpZiAoIXJnYikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmdiW2ldID0gc2NhbGUocmdiW2ldLCAwLCAyNTUpO1xuICAgfVxuICAgaWYgKCFhICYmIGEgIT0gMCkge1xuICAgICAgYSA9IDE7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIGEgPSBzY2FsZShhLCAwLCAxKTtcbiAgIH1cbiAgIHJnYlszXSA9IGE7XG4gICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBnZXRIc2xhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICBzID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgbCA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SHdiKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHcgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBiID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHcsIGIsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZ2Ioc3RyaW5nKSB7XG4gICB2YXIgcmdiYSA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIHJldHVybiByZ2JhICYmIHJnYmEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEhzbChzdHJpbmcpIHtcbiAgdmFyIGhzbGEgPSBnZXRIc2xhKHN0cmluZyk7XG4gIHJldHVybiBoc2xhICYmIGhzbGEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEFscGhhKHN0cmluZykge1xuICAgdmFyIHZhbHMgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICBpZiAodmFscykge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHNsYShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRId2Ioc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG59XG5cbi8vIGdlbmVyYXRvcnNcbmZ1bmN0aW9uIGhleFN0cmluZyhyZ2IpIHtcbiAgIHJldHVybiBcIiNcIiArIGhleERvdWJsZShyZ2JbMF0pICsgaGV4RG91YmxlKHJnYlsxXSlcbiAgICAgICAgICAgICAgKyBoZXhEb3VibGUocmdiWzJdKTtcbn1cblxuZnVuY3Rpb24gcmdiU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChyZ2JhWzNdICE9PSB1bmRlZmluZWQgPyByZ2JhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdXG4gICAgICAgICAgICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG5cbiAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlLCBcIiArIChhbHBoYSB8fCByZ2JhWzNdIHx8IDEpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbFN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAoaHNsYVszXSAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbChcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChoc2xhWzNdICE9PSB1bmRlZmluZWQgPyBoc2xhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSwgXCJcbiAgICAgICAgICAgKyBhbHBoYSArIFwiKVwiO1xufVxuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuZnVuY3Rpb24gaHdiU3RyaW5nKGh3YiwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChod2JbM10gIT09IHVuZGVmaW5lZCA/IGh3YlszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHdiKFwiICsgaHdiWzBdICsgXCIsIFwiICsgaHdiWzFdICsgXCIlLCBcIiArIGh3YlsyXSArIFwiJVwiXG4gICAgICAgICAgICsgKGFscGhhICE9PSB1bmRlZmluZWQgJiYgYWxwaGEgIT09IDEgPyBcIiwgXCIgKyBhbHBoYSA6IFwiXCIpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gc2NhbGUobnVtLCBtaW4sIG1heCkge1xuICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/IFwiMFwiICsgc3RyIDogc3RyO1xufVxuXG5cbi8vY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcbiAgIHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07IiwiLy8gcmFuZG9tQ29sb3IgYnkgRGF2aWQgTWVyZmllbGQgdW5kZXIgdGhlIENDMCBsaWNlbnNlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRtZXJmaWVsZC9yYW5kb21Db2xvci9cblxuOyhmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG5cbiAgLy8gU3VwcG9ydCBBTURcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG5cbiAgLy8gU3VwcG9ydCBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIHZhciByYW5kb21Db2xvciA9IGZhY3RvcnkoKTtcblxuICAgIC8vIFN1cHBvcnQgTm9kZUpTICYgQ29tcG9uZW50LCB3aGljaCBhbGxvdyBtb2R1bGUuZXhwb3J0cyB0byBiZSBhIGZ1bmN0aW9uXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmFuZG9tQ29sb3I7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBDb21tb25KUyAxLjEuMSBzcGVjXG4gICAgZXhwb3J0cy5yYW5kb21Db2xvciA9IHJhbmRvbUNvbG9yO1xuXG4gIC8vIFN1cHBvcnQgdmFuaWxsYSBzY3JpcHQgbG9hZGluZ1xuICB9IGVsc2Uge1xuICAgIHJvb3QucmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuICAvLyBTZWVkIHRvIGdldCByZXBlYXRhYmxlIGNvbG9yc1xuICB2YXIgc2VlZCA9IG51bGw7XG5cbiAgLy8gU2hhcmVkIGNvbG9yIGRpY3Rpb25hcnlcbiAgdmFyIGNvbG9yRGljdGlvbmFyeSA9IHt9O1xuXG4gIC8vIFBvcHVsYXRlIHRoZSBjb2xvciBkaWN0aW9uYXJ5XG4gIGxvYWRDb2xvckJvdW5kcygpO1xuXG4gIHZhciByYW5kb21Db2xvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGEgc2VlZCBhbmQgZW5zdXJlIGl0J3MgYW5cbiAgICAvLyBpbnRlZ2VyLiBPdGhlcndpc2UsIHJlc2V0IHRoZSBzZWVkIHZhbHVlLlxuICAgIGlmIChvcHRpb25zLnNlZWQgJiYgb3B0aW9ucy5zZWVkID09PSBwYXJzZUludChvcHRpb25zLnNlZWQsIDEwKSkge1xuICAgICAgc2VlZCA9IG9wdGlvbnMuc2VlZDtcblxuICAgIC8vIEEgc3RyaW5nIHdhcyBwYXNzZWQgYXMgYSBzZWVkXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5zZWVkID09PSAnc3RyaW5nJykge1xuICAgICAgc2VlZCA9IHN0cmluZ1RvSW50ZWdlcihvcHRpb25zLnNlZWQpO1xuXG4gICAgLy8gU29tZXRoaW5nIHdhcyBwYXNzZWQgYXMgYSBzZWVkIGJ1dCBpdCB3YXNuJ3QgYW4gaW50ZWdlciBvciBzdHJpbmdcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc2VlZCAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuc2VlZCAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIHNlZWQgdmFsdWUgbXVzdCBiZSBhbiBpbnRlZ2VyIG9yIHN0cmluZycpO1xuXG4gICAgLy8gTm8gc2VlZCwgcmVzZXQgdGhlIHZhbHVlIG91dHNpZGUuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlZWQgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBILFMsQjtcblxuICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gZ2VuZXJhdGUgbXVsdGlwbGUgY29sb3JzXG4gICAgaWYgKG9wdGlvbnMuY291bnQgIT09IG51bGwgJiYgb3B0aW9ucy5jb3VudCAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgIHZhciB0b3RhbENvbG9ycyA9IG9wdGlvbnMuY291bnQsXG4gICAgICAgICAgY29sb3JzID0gW107XG5cbiAgICAgIG9wdGlvbnMuY291bnQgPSBudWxsO1xuXG4gICAgICB3aGlsZSAodG90YWxDb2xvcnMgPiBjb2xvcnMubGVuZ3RoKSB7XG5cbiAgICAgICAgLy8gU2luY2Ugd2UncmUgZ2VuZXJhdGluZyBtdWx0aXBsZSBjb2xvcnMsXG4gICAgICAgIC8vIGluY3JlbWVtZW50IHRoZSBzZWVkLiBPdGhlcndpc2Ugd2UnZCBqdXN0XG4gICAgICAgIC8vIGdlbmVyYXRlIHRoZSBzYW1lIGNvbG9yIGVhY2ggdGltZS4uLlxuICAgICAgICBpZiAoc2VlZCAmJiBvcHRpb25zLnNlZWQpIG9wdGlvbnMuc2VlZCArPSAxO1xuXG4gICAgICAgIGNvbG9ycy5wdXNoKHJhbmRvbUNvbG9yKG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5jb3VudCA9IHRvdGFsQ29sb3JzO1xuXG4gICAgICByZXR1cm4gY29sb3JzO1xuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIHBpY2sgYSBodWUgKEgpXG4gICAgSCA9IHBpY2tIdWUob3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHVzZSBIIHRvIGRldGVybWluZSBzYXR1cmF0aW9uIChTKVxuICAgIFMgPSBwaWNrU2F0dXJhdGlvbihILCBvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gdXNlIFMgYW5kIEggdG8gZGV0ZXJtaW5lIGJyaWdodG5lc3MgKEIpLlxuICAgIEIgPSBwaWNrQnJpZ2h0bmVzcyhILCBTLCBvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gd2UgcmV0dXJuIHRoZSBIU0IgY29sb3IgaW4gdGhlIGRlc2lyZWQgZm9ybWF0XG4gICAgcmV0dXJuIHNldEZvcm1hdChbSCxTLEJdLCBvcHRpb25zKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwaWNrSHVlIChvcHRpb25zKSB7XG5cbiAgICB2YXIgaHVlUmFuZ2UgPSBnZXRIdWVSYW5nZShvcHRpb25zLmh1ZSksXG4gICAgICAgIGh1ZSA9IHJhbmRvbVdpdGhpbihodWVSYW5nZSk7XG5cbiAgICAvLyBJbnN0ZWFkIG9mIHN0b3JpbmcgcmVkIGFzIHR3byBzZXBlcmF0ZSByYW5nZXMsXG4gICAgLy8gd2UgZ3JvdXAgdGhlbSwgdXNpbmcgbmVnYXRpdmUgbnVtYmVyc1xuICAgIGlmIChodWUgPCAwKSB7aHVlID0gMzYwICsgaHVlO31cblxuICAgIHJldHVybiBodWU7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tTYXR1cmF0aW9uIChodWUsIG9wdGlvbnMpIHtcblxuICAgIGlmIChvcHRpb25zLmx1bWlub3NpdHkgPT09ICdyYW5kb20nKSB7XG4gICAgICByZXR1cm4gcmFuZG9tV2l0aGluKFswLDEwMF0pO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmh1ZSA9PT0gJ21vbm9jaHJvbWUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgc2F0dXJhdGlvblJhbmdlID0gZ2V0U2F0dXJhdGlvblJhbmdlKGh1ZSk7XG5cbiAgICB2YXIgc01pbiA9IHNhdHVyYXRpb25SYW5nZVswXSxcbiAgICAgICAgc01heCA9IHNhdHVyYXRpb25SYW5nZVsxXTtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5sdW1pbm9zaXR5KSB7XG5cbiAgICAgIGNhc2UgJ2JyaWdodCc6XG4gICAgICAgIHNNaW4gPSA1NTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RhcmsnOlxuICAgICAgICBzTWluID0gc01heCAtIDEwO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGlnaHQnOlxuICAgICAgICBzTWF4ID0gNTU7XG4gICAgICAgIGJyZWFrO1xuICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbc01pbiwgc01heF0pO1xuXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrQnJpZ2h0bmVzcyAoSCwgUywgb3B0aW9ucykge1xuXG4gICAgdmFyIGJNaW4gPSBnZXRNaW5pbXVtQnJpZ2h0bmVzcyhILCBTKSxcbiAgICAgICAgYk1heCA9IDEwMDtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5sdW1pbm9zaXR5KSB7XG5cbiAgICAgIGNhc2UgJ2RhcmsnOlxuICAgICAgICBiTWF4ID0gYk1pbiArIDIwO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbGlnaHQnOlxuICAgICAgICBiTWluID0gKGJNYXggKyBiTWluKS8yO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmFuZG9tJzpcbiAgICAgICAgYk1pbiA9IDA7XG4gICAgICAgIGJNYXggPSAxMDA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiByYW5kb21XaXRoaW4oW2JNaW4sIGJNYXhdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZvcm1hdCAoaHN2LCBvcHRpb25zKSB7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMuZm9ybWF0KSB7XG5cbiAgICAgIGNhc2UgJ2hzdkFycmF5JzpcbiAgICAgICAgcmV0dXJuIGhzdjtcblxuICAgICAgY2FzZSAnaHNsQXJyYXknOlxuICAgICAgICByZXR1cm4gSFNWdG9IU0woaHN2KTtcblxuICAgICAgY2FzZSAnaHNsJzpcbiAgICAgICAgdmFyIGhzbCA9IEhTVnRvSFNMKGhzdik7XG4gICAgICAgIHJldHVybiAnaHNsKCcraHNsWzBdKycsICcraHNsWzFdKyclLCAnK2hzbFsyXSsnJSknO1xuXG4gICAgICBjYXNlICdoc2xhJzpcbiAgICAgICAgdmFyIGhzbENvbG9yID0gSFNWdG9IU0woaHN2KTtcbiAgICAgICAgcmV0dXJuICdoc2xhKCcraHNsQ29sb3JbMF0rJywgJytoc2xDb2xvclsxXSsnJSwgJytoc2xDb2xvclsyXSsnJSwgJyArIE1hdGgucmFuZG9tKCkgKyAnKSc7XG5cbiAgICAgIGNhc2UgJ3JnYkFycmF5JzpcbiAgICAgICAgcmV0dXJuIEhTVnRvUkdCKGhzdik7XG5cbiAgICAgIGNhc2UgJ3JnYic6XG4gICAgICAgIHZhciByZ2IgPSBIU1Z0b1JHQihoc3YpO1xuICAgICAgICByZXR1cm4gJ3JnYignICsgcmdiLmpvaW4oJywgJykgKyAnKSc7XG5cbiAgICAgIGNhc2UgJ3JnYmEnOlxuICAgICAgICB2YXIgcmdiQ29sb3IgPSBIU1Z0b1JHQihoc3YpO1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHJnYkNvbG9yLmpvaW4oJywgJykgKyAnLCAnICsgTWF0aC5yYW5kb20oKSArICcpJztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEhTVnRvSGV4KGhzdik7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNaW5pbXVtQnJpZ2h0bmVzcyhILCBTKSB7XG5cbiAgICB2YXIgbG93ZXJCb3VuZHMgPSBnZXRDb2xvckluZm8oSCkubG93ZXJCb3VuZHM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvd2VyQm91bmRzLmxlbmd0aCAtIDE7IGkrKykge1xuXG4gICAgICB2YXIgczEgPSBsb3dlckJvdW5kc1tpXVswXSxcbiAgICAgICAgICB2MSA9IGxvd2VyQm91bmRzW2ldWzFdO1xuXG4gICAgICB2YXIgczIgPSBsb3dlckJvdW5kc1tpKzFdWzBdLFxuICAgICAgICAgIHYyID0gbG93ZXJCb3VuZHNbaSsxXVsxXTtcblxuICAgICAgaWYgKFMgPj0gczEgJiYgUyA8PSBzMikge1xuXG4gICAgICAgICB2YXIgbSA9ICh2MiAtIHYxKS8oczIgLSBzMSksXG4gICAgICAgICAgICAgYiA9IHYxIC0gbSpzMTtcblxuICAgICAgICAgcmV0dXJuIG0qUyArIGI7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEh1ZVJhbmdlIChjb2xvcklucHV0KSB7XG5cbiAgICBpZiAodHlwZW9mIHBhcnNlSW50KGNvbG9ySW5wdXQpID09PSAnbnVtYmVyJykge1xuXG4gICAgICB2YXIgbnVtYmVyID0gcGFyc2VJbnQoY29sb3JJbnB1dCk7XG5cbiAgICAgIGlmIChudW1iZXIgPCAzNjAgJiYgbnVtYmVyID4gMCkge1xuICAgICAgICByZXR1cm4gW251bWJlciwgbnVtYmVyXTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3JJbnB1dCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgaWYgKGNvbG9yRGljdGlvbmFyeVtjb2xvcklucHV0XSkge1xuICAgICAgICB2YXIgY29sb3IgPSBjb2xvckRpY3Rpb25hcnlbY29sb3JJbnB1dF07XG4gICAgICAgIGlmIChjb2xvci5odWVSYW5nZSkge3JldHVybiBjb2xvci5odWVSYW5nZTt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFswLDM2MF07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNhdHVyYXRpb25SYW5nZSAoaHVlKSB7XG4gICAgcmV0dXJuIGdldENvbG9ySW5mbyhodWUpLnNhdHVyYXRpb25SYW5nZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbG9ySW5mbyAoaHVlKSB7XG5cbiAgICAvLyBNYXBzIHJlZCBjb2xvcnMgdG8gbWFrZSBwaWNraW5nIGh1ZSBlYXNpZXJcbiAgICBpZiAoaHVlID49IDMzNCAmJiBodWUgPD0gMzYwKSB7XG4gICAgICBodWUtPSAzNjA7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgY29sb3JOYW1lIGluIGNvbG9yRGljdGlvbmFyeSkge1xuICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvck5hbWVdO1xuICAgICAgIGlmIChjb2xvci5odWVSYW5nZSAmJlxuICAgICAgICAgICBodWUgPj0gY29sb3IuaHVlUmFuZ2VbMF0gJiZcbiAgICAgICAgICAgaHVlIDw9IGNvbG9yLmh1ZVJhbmdlWzFdKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbG9yRGljdGlvbmFyeVtjb2xvck5hbWVdO1xuICAgICAgIH1cbiAgICB9IHJldHVybiAnQ29sb3Igbm90IGZvdW5kJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRvbVdpdGhpbiAocmFuZ2UpIHtcbiAgICBpZiAoc2VlZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZ2VbMF0gKyBNYXRoLnJhbmRvbSgpKihyYW5nZVsxXSArIDEgLSByYW5nZVswXSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL1NlZWRlZCByYW5kb20gYWxnb3JpdGhtIGZyb20gaHR0cDovL2luZGllZ2Ftci5jb20vZ2VuZXJhdGUtcmVwZWF0YWJsZS1yYW5kb20tbnVtYmVycy1pbi1qcy9cbiAgICAgIHZhciBtYXggPSByYW5nZVsxXSB8fCAxO1xuICAgICAgdmFyIG1pbiA9IHJhbmdlWzBdIHx8IDA7XG4gICAgICBzZWVkID0gKHNlZWQgKiA5MzAxICsgNDkyOTcpICUgMjMzMjgwO1xuICAgICAgdmFyIHJuZCA9IHNlZWQgLyAyMzMyODAuMDtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIHJuZCAqIChtYXggLSBtaW4pKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b0hleCAoaHN2KXtcblxuICAgIHZhciByZ2IgPSBIU1Z0b1JHQihoc3YpO1xuXG4gICAgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICAgICAgICB2YXIgaGV4ID0gYy50b1N0cmluZygxNik7XG4gICAgICAgIHJldHVybiBoZXgubGVuZ3RoID09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9ICcjJyArIGNvbXBvbmVudFRvSGV4KHJnYlswXSkgKyBjb21wb25lbnRUb0hleChyZ2JbMV0pICsgY29tcG9uZW50VG9IZXgocmdiWzJdKTtcblxuICAgIHJldHVybiBoZXg7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmluZUNvbG9yIChuYW1lLCBodWVSYW5nZSwgbG93ZXJCb3VuZHMpIHtcblxuICAgIHZhciBzTWluID0gbG93ZXJCb3VuZHNbMF1bMF0sXG4gICAgICAgIHNNYXggPSBsb3dlckJvdW5kc1tsb3dlckJvdW5kcy5sZW5ndGggLSAxXVswXSxcblxuICAgICAgICBiTWluID0gbG93ZXJCb3VuZHNbbG93ZXJCb3VuZHMubGVuZ3RoIC0gMV1bMV0sXG4gICAgICAgIGJNYXggPSBsb3dlckJvdW5kc1swXVsxXTtcblxuICAgIGNvbG9yRGljdGlvbmFyeVtuYW1lXSA9IHtcbiAgICAgIGh1ZVJhbmdlOiBodWVSYW5nZSxcbiAgICAgIGxvd2VyQm91bmRzOiBsb3dlckJvdW5kcyxcbiAgICAgIHNhdHVyYXRpb25SYW5nZTogW3NNaW4sIHNNYXhdLFxuICAgICAgYnJpZ2h0bmVzc1JhbmdlOiBbYk1pbiwgYk1heF1cbiAgICB9O1xuXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkQ29sb3JCb3VuZHMgKCkge1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnbW9ub2Nocm9tZScsXG4gICAgICBudWxsLFxuICAgICAgW1swLDBdLFsxMDAsMF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ3JlZCcsXG4gICAgICBbLTI2LDE4XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsOTJdLFs0MCw4OV0sWzUwLDg1XSxbNjAsNzhdLFs3MCw3MF0sWzgwLDYwXSxbOTAsNTVdLFsxMDAsNTBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdvcmFuZ2UnLFxuICAgICAgWzE5LDQ2XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsOTNdLFs0MCw4OF0sWzUwLDg2XSxbNjAsODVdLFs3MCw3MF0sWzEwMCw3MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ3llbGxvdycsXG4gICAgICBbNDcsNjJdLFxuICAgICAgW1syNSwxMDBdLFs0MCw5NF0sWzUwLDg5XSxbNjAsODZdLFs3MCw4NF0sWzgwLDgyXSxbOTAsODBdLFsxMDAsNzVdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdncmVlbicsXG4gICAgICBbNjMsMTc4XSxcbiAgICAgIFtbMzAsMTAwXSxbNDAsOTBdLFs1MCw4NV0sWzYwLDgxXSxbNzAsNzRdLFs4MCw2NF0sWzkwLDUwXSxbMTAwLDQwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnYmx1ZScsXG4gICAgICBbMTc5LCAyNTddLFxuICAgICAgW1syMCwxMDBdLFszMCw4Nl0sWzQwLDgwXSxbNTAsNzRdLFs2MCw2MF0sWzcwLDUyXSxbODAsNDRdLFs5MCwzOV0sWzEwMCwzNV1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ3B1cnBsZScsXG4gICAgICBbMjU4LCAyODJdLFxuICAgICAgW1syMCwxMDBdLFszMCw4N10sWzQwLDc5XSxbNTAsNzBdLFs2MCw2NV0sWzcwLDU5XSxbODAsNTJdLFs5MCw0NV0sWzEwMCw0Ml1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ3BpbmsnLFxuICAgICAgWzI4MywgMzM0XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsOTBdLFs0MCw4Nl0sWzYwLDg0XSxbODAsODBdLFs5MCw3NV0sWzEwMCw3M11dXG4gICAgKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9SR0IgKGhzdikge1xuXG4gICAgLy8gdGhpcyBkb2Vzbid0IHdvcmsgZm9yIHRoZSB2YWx1ZXMgb2YgMCBhbmQgMzYwXG4gICAgLy8gaGVyZSdzIHRoZSBoYWNreSBmaXhcbiAgICB2YXIgaCA9IGhzdlswXTtcbiAgICBpZiAoaCA9PT0gMCkge2ggPSAxO31cbiAgICBpZiAoaCA9PT0gMzYwKSB7aCA9IDM1OTt9XG5cbiAgICAvLyBSZWJhc2UgdGhlIGgscyx2IHZhbHVlc1xuICAgIGggPSBoLzM2MDtcbiAgICB2YXIgcyA9IGhzdlsxXS8xMDAsXG4gICAgICAgIHYgPSBoc3ZbMl0vMTAwO1xuXG4gICAgdmFyIGhfaSA9IE1hdGguZmxvb3IoaCo2KSxcbiAgICAgIGYgPSBoICogNiAtIGhfaSxcbiAgICAgIHAgPSB2ICogKDEgLSBzKSxcbiAgICAgIHEgPSB2ICogKDEgLSBmKnMpLFxuICAgICAgdCA9IHYgKiAoMSAtICgxIC0gZikqcyksXG4gICAgICByID0gMjU2LFxuICAgICAgZyA9IDI1NixcbiAgICAgIGIgPSAyNTY7XG5cbiAgICBzd2l0Y2goaF9pKSB7XG4gICAgICBjYXNlIDA6IHIgPSB2OyBnID0gdDsgYiA9IHA7ICBicmVhaztcbiAgICAgIGNhc2UgMTogciA9IHE7IGcgPSB2OyBiID0gcDsgIGJyZWFrO1xuICAgICAgY2FzZSAyOiByID0gcDsgZyA9IHY7IGIgPSB0OyAgYnJlYWs7XG4gICAgICBjYXNlIDM6IHIgPSBwOyBnID0gcTsgYiA9IHY7ICBicmVhaztcbiAgICAgIGNhc2UgNDogciA9IHQ7IGcgPSBwOyBiID0gdjsgIGJyZWFrO1xuICAgICAgY2FzZSA1OiByID0gdjsgZyA9IHA7IGIgPSBxOyAgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IFtNYXRoLmZsb29yKHIqMjU1KSwgTWF0aC5mbG9vcihnKjI1NSksIE1hdGguZmxvb3IoYioyNTUpXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IU0wgKGhzdikge1xuICAgIHZhciBoID0gaHN2WzBdLFxuICAgICAgcyA9IGhzdlsxXS8xMDAsXG4gICAgICB2ID0gaHN2WzJdLzEwMCxcbiAgICAgIGsgPSAoMi1zKSp2O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIGgsXG4gICAgICBNYXRoLnJvdW5kKHMqdiAvIChrPDEgPyBrIDogMi1rKSAqIDEwMDAwKSAvIDEwMCxcbiAgICAgIGsvMiAqIDEwMFxuICAgIF07XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdUb0ludGVnZXIgKHN0cmluZykge1xuICAgIHZhciB0b3RhbCA9IDBcbiAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodG90YWwgPj0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIGJyZWFrO1xuICAgICAgdG90YWwgKz0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsXG4gIH1cblxuICByZXR1cm4gcmFuZG9tQ29sb3I7XG59KSk7XG4iXX0=
