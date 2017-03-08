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

var _path = require(23);

var _path2 = _interopRequireDefault(_path);

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(50);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(47);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"23":23,"47":47,"50":50,"59":59,"75":75}],4:[function(require,module,exports){
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

var _path = require(23);

var _path2 = _interopRequireDefault(_path);

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(50);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"23":23,"50":50,"59":59,"75":75}],5:[function(require,module,exports){
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

var _path = require(23);

var _path2 = _interopRequireDefault(_path);

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(50);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"23":23,"50":50,"59":59,"75":75}],6:[function(require,module,exports){
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

var _path = require(23);

var _path2 = _interopRequireDefault(_path);

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(50);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"23":23,"50":50,"59":59,"75":75}],7:[function(require,module,exports){
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

var _loop = require(61);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(23);

var _path2 = _interopRequireDefault(_path);

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"23":23,"59":59,"61":61}],9:[function(require,module,exports){
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

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(23);

var _path2 = _interopRequireDefault(_path);

var _container = require(17);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"23":23,"59":59,"75":75}],10:[function(require,module,exports){
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

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(35);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"35":35,"59":59}],11:[function(require,module,exports){
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

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _interval_timer = require(73);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"59":59,"73":73}],12:[function(require,module,exports){
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

var _linear_pulsar = require(65);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"65":65}],14:[function(require,module,exports){
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
"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function () {

      var component = {};
      component.view = new createjs.Shape();
      component.scale = 1;

      return component;
};


},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'circleShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var circle = (0, _abstract_component2.default)();
      circle.circleShape = options.circleShape;
      circle.color = options.color;

      circle.draw = function () {
            circle.view.graphics.clear();
            circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.draw();
      return circle;
};

var _abstract_component = require(15);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"59":59}],17:[function(require,module,exports){
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

  var custom = (0, _abstract_component2.default)();
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

var _abstract_component = require(15);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(19);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(44);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"19":19,"44":44,"59":59}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(46);

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
  graphics.arc(path.start.x, path.start.y + path.radius, path.radius, (0, _angle_to_radians2.default)(-90), (0, _angle_to_radians2.default)(path.degrees - 90));
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


},{"46":46}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'source', true);

  var image = {
    view: new createjs.Bitmap(options.source),
    scale: 0.5
  };

  image.draw = function () {
    image.view.scaleX = image.scale;
    image.view.scaleY = image.scale;
  };

  image.draw();
  return image;
};

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {
      var line = (0, _abstract_component2.default)();

      (0, _check_parameter2.default)(options, 'linePath', true);
      (0, _check_parameter2.default)(options, 'thickness', false, 1);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      line.path = options.linePath;
      line.color = options.color;
      line.thickness = options.thickness;

      line.draw = function () {
            line.view.graphics.beginStroke(line.color).setStrokeStyle(line.thickness * line.scale).moveTo(line.path.start.x * line.scale, line.path.start.y * line.scale).lineTo(line.path.end.x * line.scale, line.path.end.y * line.scale);
      };

      line.draw();
      return line;
};

var _abstract_component = require(15);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"59":59}],22:[function(require,module,exports){
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

      var custom = (0, _abstract_component2.default)();
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

var _abstract_component = require(15);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(19);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(44);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"19":19,"44":44,"59":59}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'rectangleShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var rect = (0, _abstract_component2.default)();
      rect.width = options.rectangleShape.width;
      rect.height = options.rectangleShape.height;
      rect.color = options.color;

      rect.draw = function () {
            rect.view.graphics.clear();
            rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.draw();
      return rect;
};

var _abstract_component = require(15);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"59":59}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'squareShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var square = (0, _abstract_component2.default)();
      square.squareShape = options.squareShape;
      square.color = options.color;

      square.draw = function () {
            square.view.graphics.clear();
            square.view.graphics.beginFill(square.color).drawRect(0, 0, square.squareShape.sidelength * square.scale, square.squareShape.sidelength * square.scale);
      };

      square.draw();
      return square;
};

var _abstract_component = require(15);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"15":15,"59":59}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'source', true);
      // If the source is a string, convert it to a video
      handleVideoSource();

      var video = {
            view: new createjs.Bitmap(options.source),
            scale: 0.5
      };

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

      function handleVideoSource() {
            if (typeof options.source === 'string') {
                  var source = document.createElement('source');
                  source.setAttribute('src', options.source);
                  var videoElement = document.createElement('video');
                  videoElement.appendChild(source);
                  options.source = videoElement;
            }
      }

      video.draw();
      return video;
};

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59}],27:[function(require,module,exports){
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

exports.default = function () {
    var filter = {};

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

var _loop = require(61);

var _loop2 = _interopRequireDefault(_loop);

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"61":61}],29:[function(require,module,exports){
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

var _abstract_filter = require(28);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28}],30:[function(require,module,exports){
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

var _abstract_group = require(29);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"29":29,"59":59}],31:[function(require,module,exports){
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

var _abstract_group = require(29);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"29":29,"59":59}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(35);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(34);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(31);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(36);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(33);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(30);

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


},{"30":30,"31":31,"33":33,"34":34,"35":35,"36":36}],33:[function(require,module,exports){
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

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(29);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"29":29,"59":59}],34:[function(require,module,exports){
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

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(29);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"29":29,"59":59}],35:[function(require,module,exports){
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

var _abstract_group = require(29);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"29":29,"59":59}],36:[function(require,module,exports){
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

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(29);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"29":29,"59":59}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'child', true);
  (0, _check_parameter2.default)(options, 'path', true);
  (0, _check_parameter2.default)(options, 'progressRate', false, 0);

  var pathMover = (0, _abstract_filter2.default)();
  pathMover.currentProgress = 0;
  pathMover.progressRate = options.progressRate;
  pathMover.path = options.path;

  pathMover.view.addChild(options.child.view);

  pathMover.handle = function (event) {
    pathMover.currentProgress += pathMover.progressRate * (event.delta / 1000);
    if (pathMover.currentProgress > 1) {
      pathMover.currentProgress -= 1;
    }
    var point = pathMover.path.getPoint(pathMover.currentProgress);
    pathMover.view.x = point.x;
    pathMover.view.y = point.y;
  };

  return pathMover;
};

var _abstract_filter = require(28);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"59":59}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (child, speed) {
  var p2PMover = (0, _abstract_filter2.default)();
  p2PMover.view.addChild(child.view);

  /* Params and defaults */
  p2PMover.goalPoint = { x: 0, y: 0 };
  p2PMover.speed = speed ? speed : 1;
  p2PMover.progress = 0;
  p2PMover.finished = true;
  p2PMover.perspective = { x: 0, y: 0 };

  /*
      Sets informations in the perspective object
      determs if the goal point is
      left, right, top or down of the current point
   */
  function setPerspectiveInformation() {
    if (p2PMover.goalPoint.x - p2PMover.view.x >= 0) {
      p2PMover.perspective.x = 1;
    } else {
      p2PMover.perspective.x = -1;
    }

    if (p2PMover.goalPoint.y - p2PMover.view.y >= 0) {
      p2PMover.perspective.y = 1;
    } else {
      p2PMover.perspective.y = -1;
    }
  }

  /* Public functions */
  function handle(event) {
    p2PMover.progress += event.delta / 1000 * p2PMover.step;

    if (p2PMover.progress <= 1) {
      p2PMover.handleMove();
    } else {
      p2PMover.finished = true;
      p2PMover.view.x = p2PMover.goalPoint.x;
      p2PMover.view.y = p2PMover.goalPoint.y;
      p2PMover.perspective.x = 0;
      p2PMover.perspective.y = 0;
      if (p2PMover.callback) {
        p2PMover.callback();
      }
    }
  }

  function moveTo(goalPoint, callback) {
    p2PMover.direction = (0, _normalize2.default)([goalPoint.x - p2PMover.view.x, goalPoint.y - p2PMover.view.y]);
    p2PMover.startPoint = { x: p2PMover.view.x, y: p2PMover.view.y };
    p2PMover.goalPoint = goalPoint;
    p2PMover.distance = (0, _distance2.default)((0, _to_vector2.default)(p2PMover.startPoint), (0, _to_vector2.default)(p2PMover.goalPoint));
    p2PMover.step = p2PMover.speed / p2PMover.distance;
    p2PMover.callback = callback;
    p2PMover.finished = false;
    setPerspectiveInformation();
  }

  function move(direction) {
    p2PMover.finished = false;
    p2PMover.goalPoint = null;
    p2PMover.direction = (0, _normalize2.default)([direction.x, direction.y]);
  }

  function isPointReached() {
    if (!p2PMover.goalPoint) {
      return false;
    }
    if ((p2PMover.goalPoint.x - p2PMover.view.x) * p2PMover.perspective.x > 0) {
      return false;
    }

    if ((p2PMover.goalPoint.y - p2PMover.view.y) * p2PMover.perspective.y > 0) {
      return false;
    }

    return true;
  }

  p2PMover.handle = handle;
  p2PMover.moveTo = moveTo;
  p2PMover.move = move;
  p2PMover.isPointReached = isPointReached;
  return p2PMover;
};

var _abstract_filter = require(28);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _normalize = require(48);

var _normalize2 = _interopRequireDefault(_normalize);

var _distance = require(45);

var _distance2 = _interopRequireDefault(_distance);

var _to_vector = require(58);

var _to_vector2 = _interopRequireDefault(_to_vector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"45":45,"48":48,"58":58}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    (0, _check_parameter2.default)(options, 'child', true);
    (0, _check_parameter2.default)(options, 'speed', false, 1);
    (0, _check_parameter2.default)(options, 'easingName', false, 'linear');

    var linearP2PMover = (0, _abstractMover2.default)(options.child, options.speed);
    linearP2PMover.easingName = options.easingName;

    var easingHandler = (0, _easing2.default)();

    linearP2PMover.handleMove = function () {
        linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
        linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
    };

    return linearP2PMover;
};

var _abstractMover = require(38);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _easing = require(74);

var _easing2 = _interopRequireDefault(_easing);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"38":38,"59":59,"74":74}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'child', true);
  (0, _check_parameter2.default)(options, 'shakeFactor', false, 1);
  (0, _check_parameter2.default)(options, 'speed', false, 1);

  var linearP2PMover = (0, _abstractMover2.default)(options.child, options.speed);
  linearP2PMover.shakeFactor = options.shakeFactor;

  linearP2PMover.handleMove = function () {
    var randomFactor = Math.random() * linearP2PMover.shakeFactor - linearP2PMover.shakeFactor / 2;
    linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * linearP2PMover.progress + randomFactor * linearP2PMover.direction[0];
    linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * linearP2PMover.progress + randomFactor * linearP2PMover.direction[1];
  };

  return linearP2PMover;
};

var _abstractMover = require(38);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"38":38,"59":59}],41:[function(require,module,exports){
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

var _abstract_filter = require(28);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"59":59,"75":75}],42:[function(require,module,exports){
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

var _abstract_filter = require(28);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"59":59}],43:[function(require,module,exports){
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

var _abstract_filter = require(28);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"59":59}],44:[function(require,module,exports){
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


},{}],45:[function(require,module,exports){
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


},{}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};


},{}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(46);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"46":46}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (vector) {
    var normalizedVector = [];
    var squareSum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = vector[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var entry = _step.value;

            squareSum += entry * entry;
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

    var length = Math.sqrt(squareSum);

    for (var i = 0; i < vector.length; i++) {
        normalizedVector[i] = vector[i] / length;
    }

    return normalizedVector;
};


},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(46);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function arcConstructor(options) {

  (0, _check_parameter2.default)(options, 'start', false, { x: 0, y: 0 });
  (0, _check_parameter2.default)(options, 'degrees', true);
  (0, _check_parameter2.default)(options, 'radius', true);

  var arc = {};

  arc.start = options.start;
  arc.degrees = options.degrees;
  arc.radius = options.radius;
  arc.type = 'arc';

  arc.getEdgePoint = function () {
    return arc.getPoint(1);
  };

  arc.getLength = function () {
    return 2 * Math.PI * arc.radius * (arc.degrees / 360);
  };

  arc.getPoint = function (progress) {
    var origin = { x: 0, y: arc.start.y + arc.radius };
    var partOfDegrees = arc.degrees * progress;
    return {
      x: origin.x + arc.radius * Math.sin((0, _angle_to_radians2.default)(partOfDegrees)),
      y: origin.y + arc.radius * -Math.cos((0, _angle_to_radians2.default)(partOfDegrees))
    };
  };

  arc.getPartPath = function (progress) {
    var partOfDegrees = arc.degrees * progress;
    return arcConstructor({ start: arc.start, degrees: partOfDegrees, radius: arc.radius });
  };

  return arc;
}


},{"46":46,"59":59}],50:[function(require,module,exports){
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

var _bezierJs = require(77);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"77":77}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(58);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(45);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(59);

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


},{"45":45,"58":58,"59":59}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(44);

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


},{"44":44}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(49);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(51);

var _line2 = _interopRequireDefault(_line);

var _path = require(52);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(50);

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


},{"49":49,"50":50,"51":51,"52":52}],54:[function(require,module,exports){
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

var _path = require(52);

var _path2 = _interopRequireDefault(_path);

var _arc = require(49);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"49":49,"52":52,"59":59}],55:[function(require,module,exports){
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

var _path = require(52);

var _path2 = _interopRequireDefault(_path);

var _line = require(51);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"51":51,"52":52,"59":59}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(55);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(57);

var _square2 = _interopRequireDefault(_square);

var _circle = require(54);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"54":54,"55":55,"57":57}],57:[function(require,module,exports){
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

var _path = require(52);

var _path2 = _interopRequireDefault(_path);

var _line = require(51);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"51":51,"52":52,"59":59}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};


},{}],59:[function(require,module,exports){
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


},{}],60:[function(require,module,exports){
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
  } else {
    console.log(element);
    throw new Error('Cannot set property of object. Object hasn\'t the property: ' + property);
  }
};


},{}],61:[function(require,module,exports){
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


},{}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(27);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(42);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(41);

var _fader2 = _interopRequireDefault(_fader);

var _linear = require(39);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(40);

var _linear_shake2 = _interopRequireDefault(_linear_shake);

var _group = require(32);

var _group2 = _interopRequireDefault(_group);

var _linear_rotator = require(43);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _random_color_changer = require(64);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(63);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(65);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _randomColor = require(93);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(61);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(56);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(53);

var _paths2 = _interopRequireDefault(_paths);

var _pathMover = require(37);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _compositions = require(1);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(70);

var _proxies2 = _interopRequireDefault(_proxies);

var _interval = require(72);

var _interval2 = _interopRequireDefault(_interval);

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
      mover: {
        point2point: {
          linear: _linear2.default,
          linearShake: _linear_shake2.default
        },
        path: {
          pathMover: _pathMover2.default
        }
      },
      group: _group2.default,
      rotator: {
        linearRotator: _linear_rotator2.default
      }
    },
    modificators: {
      color: {
        randomColorChanger: _random_color_changer2.default,
        colorFader: _color_fader2.default
      },
      scale: {
        linearPulsar: _linear_pulsar2.default
      }
    },
    compositions: _compositions2.default,
    proxies: _proxies2.default
  };
}


},{"1":1,"27":27,"32":32,"37":37,"39":39,"40":40,"41":41,"42":42,"43":43,"53":53,"56":56,"61":61,"63":63,"64":64,"65":65,"70":70,"72":72,"93":93}],63:[function(require,module,exports){
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

var _color = require(86);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(75);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(60);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"60":60,"75":75,"86":86}],64:[function(require,module,exports){
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

var _loop = require(61);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(93);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(60);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"60":60,"61":61,"93":93}],65:[function(require,module,exports){
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

var _transition_loop = require(75);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(60);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"60":60,"75":75}],66:[function(require,module,exports){
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

var _set_prop = require(60);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60}],67:[function(require,module,exports){
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

var _abstract_proxy = require(66);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"66":66}],68:[function(require,module,exports){
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

var _abstract_proxy = require(66);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"66":66}],69:[function(require,module,exports){
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

var _interval_timer = require(73);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(68);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(66);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"66":66,"68":68,"73":73}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_proxy = require(67);

var _default_proxy2 = _interopRequireDefault(_default_proxy);

var _increment_proxy = require(68);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _interval_proxy = require(69);

var _interval_proxy2 = _interopRequireDefault(_interval_proxy);

var _random_proxy = require(71);

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


},{"67":67,"68":68,"69":69,"71":71}],71:[function(require,module,exports){
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

var _abstract_proxy = require(66);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"66":66}],72:[function(require,module,exports){
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

var _check_parameter = require(59);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59}],73:[function(require,module,exports){
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

var _loop = require(61);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"61":61}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var easing = {};

  easing.easeInOutQuad = function (value) {
    return (0, _easingUtils.easeInOutQuad)(value);
  };

  easing.easeInOutBack = function (value) {
    return (0, _easingUtils.easeInOutBack)(value);
  };

  easing.linear = function (value) {
    return value;
  };

  easing.getValueOf = function (type, value) {
    return easing[type](value);
  };

  return easing;
};

var _easingUtils = require(91);


},{"91":91}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(61);

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


},{"61":61}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
module.exports = require(78);

},{"78":78}],78:[function(require,module,exports){
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
  var utils = require(80);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(79);

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

},{"79":79,"80":80}],79:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(80);

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

},{"80":80}],80:[function(require,module,exports){
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
      var Bezier = require(78);
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

},{"78":78}],81:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(76)
var ieee754 = require(92)
var isArray = require(82)

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

},{"76":76,"82":82,"92":92}],82:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],83:[function(require,module,exports){
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

}).call(this,require(81).Buffer)

},{"81":81}],84:[function(require,module,exports){
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
},{}],85:[function(require,module,exports){
/* MIT license */
var colorNames = require(84);

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

},{"84":84}],86:[function(require,module,exports){
/* MIT license */
var clone = require(83);
var convert = require(89);
var string = require(85);

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

},{"83":83,"85":85,"89":89}],87:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(88);

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

},{"88":88}],88:[function(require,module,exports){
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


},{}],89:[function(require,module,exports){
var conversions = require(87);
var route = require(90);

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

},{"87":87,"90":90}],90:[function(require,module,exports){
var conversions = require(87);

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


},{"87":87}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.linear = linear;
exports.easeInSine = easeInSine;
exports.easeOutSine = easeOutSine;
exports.easeInOutSine = easeInOutSine;
exports.easeInQuad = easeInQuad;
exports.easeOutQuad = easeOutQuad;
exports.easeInOutQuad = easeInOutQuad;
exports.easeInCubic = easeInCubic;
exports.easeOutCubic = easeOutCubic;
exports.easeInOutCubic = easeInOutCubic;
exports.easeInQuart = easeInQuart;
exports.easeOutQuart = easeOutQuart;
exports.easeInOutQuart = easeInOutQuart;
exports.easeInQuint = easeInQuint;
exports.easeOutQuint = easeOutQuint;
exports.easeInOutQuint = easeInOutQuint;
exports.easeInExpo = easeInExpo;
exports.easeOutExpo = easeOutExpo;
exports.easeInOutExpo = easeInOutExpo;
exports.easeInCirc = easeInCirc;
exports.easeOutCirc = easeOutCirc;
exports.easeInOutCirc = easeInOutCirc;
exports.easeInBack = easeInBack;
exports.easeOutBack = easeOutBack;
exports.easeInOutBack = easeInOutBack;
exports.easeInElastic = easeInElastic;
exports.easeOutElastic = easeOutElastic;
exports.easeInOutElastic = easeInOutElastic;
exports.easeOutBounce = easeOutBounce;
exports.easeInBounce = easeInBounce;
exports.easeInOutBounce = easeInOutBounce;
// Based on https://gist.github.com/gre/1650294

// No easing, no acceleration
function linear(t) {
    return t;
}

// Slight acceleration from zero to full speed
function easeInSine(t) {
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
}

// Slight deceleration at the end
function easeOutSine(t) {
    return Math.sin(t * (Math.PI / 2));
}

// Slight acceleration at beginning and slight deceleration at end
function easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}

// Accelerating from zero velocity
function easeInQuad(t) {
    return t * t;
}

// Decelerating to zero velocity
function easeOutQuad(t) {
    return t * (2 - t);
}

// Acceleration until halfway, then deceleration
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Accelerating from zero velocity
function easeInCubic(t) {
    return t * t * t;
}

// Decelerating to zero velocity
function easeOutCubic(t) {
    var t1 = t - 1;
    return t1 * t1 * t1 + 1;
}

// Acceleration until halfway, then deceleration
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Accelerating from zero velocity
function easeInQuart(t) {
    return t * t * t * t;
}

// Decelerating to zero velocity
function easeOutQuart(t) {
    var t1 = t - 1;
    return 1 - t1 * t1 * t1 * t1;
}

// Acceleration until halfway, then deceleration
function easeInOutQuart(t) {
    var t1 = t - 1;
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
}

// Accelerating from zero velocity
function easeInQuint(t) {
    return t * t * t * t * t;
}

// Decelerating to zero velocity
function easeOutQuint(t) {
    var t1 = t - 1;
    return 1 + t1 * t1 * t1 * t1 * t1;
}

// Acceleration until halfway, then deceleration
function easeInOutQuint(t) {
    var t1 = t - 1;
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
}

// Accelerate exponentially until finish
function easeInExpo(t) {

    if (t === 0) {
        return 0;
    }

    return Math.pow(2, 10 * (t - 1));
}

// Initial exponential acceleration slowing to stop
function easeOutExpo(t) {

    if (t === 1) {
        return 1;
    }

    return -Math.pow(2, -10 * t) + 1;
}

// Exponential acceleration and deceleration
function easeInOutExpo(t) {

    if (t === 0 || t === 1) {
        return t;
    }

    var scaledTime = t * 2;
    var scaledTime1 = scaledTime - 1;

    if (scaledTime < 1) {
        return 0.5 * Math.pow(2, 10 * scaledTime1);
    }

    return 0.5 * (-Math.pow(2, -10 * scaledTime1) + 2);
}

// Increasing velocity until stop
function easeInCirc(t) {

    var scaledTime = t / 1;
    return -1 * (Math.sqrt(1 - scaledTime * t) - 1);
}

// Start fast, decreasing velocity until stop
function easeOutCirc(t) {

    var t1 = t - 1;
    return Math.sqrt(1 - t1 * t1);
}

// Fast increase in velocity, fast decrease in velocity
function easeInOutCirc(t) {

    var scaledTime = t * 2;
    var scaledTime1 = scaledTime - 2;

    if (scaledTime < 1) {
        return -0.5 * (Math.sqrt(1 - scaledTime * scaledTime) - 1);
    }

    return 0.5 * (Math.sqrt(1 - scaledTime1 * scaledTime1) + 1);
}

// Slow movement backwards then fast snap to finish
function easeInBack(t) {
    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 1.70158 : arguments[1];


    var scaledTime = t / 1;
    return scaledTime * scaledTime * ((magnitude + 1) * scaledTime - magnitude);
}

// Fast snap to backwards point then slow resolve to finish
function easeOutBack(t) {
    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 1.70158 : arguments[1];


    var scaledTime = t / 1 - 1;

    return scaledTime * scaledTime * ((magnitude + 1) * scaledTime + magnitude) + 1;
}

// Slow movement backwards, fast snap to past finish, slow resolve to finish
function easeInOutBack(t) {
    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 1.70158 : arguments[1];


    var scaledTime = t * 2;
    var scaledTime2 = scaledTime - 2;

    var s = magnitude * 1.525;

    if (scaledTime < 1) {

        return 0.5 * scaledTime * scaledTime * ((s + 1) * scaledTime - s);
    }

    return 0.5 * (scaledTime2 * scaledTime2 * ((s + 1) * scaledTime2 + s) + 2);
}
// Bounces slowly then quickly to finish
function easeInElastic(t) {
    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 0.7 : arguments[1];


    if (t === 0 || t === 1) {
        return t;
    }

    var scaledTime = t / 1;
    var scaledTime1 = scaledTime - 1;

    var p = 1 - magnitude;
    var s = p / (2 * Math.PI) * Math.asin(1);

    return -(Math.pow(2, 10 * scaledTime1) * Math.sin((scaledTime1 - s) * (2 * Math.PI) / p));
}

// Fast acceleration, bounces to zero
function easeOutElastic(t) {
    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 0.7 : arguments[1];


    var p = 1 - magnitude;
    var scaledTime = t * 2;

    if (t === 0 || t === 1) {
        return t;
    }

    var s = p / (2 * Math.PI) * Math.asin(1);
    return Math.pow(2, -10 * scaledTime) * Math.sin((scaledTime - s) * (2 * Math.PI) / p) + 1;
}

// Slow start and end, two bounces sandwich a fast motion
function easeInOutElastic(t) {
    var magnitude = arguments.length <= 1 || arguments[1] === undefined ? 0.65 : arguments[1];


    var p = 1 - magnitude;

    if (t === 0 || t === 1) {
        return t;
    }

    var scaledTime = t * 2;
    var scaledTime1 = scaledTime - 1;

    var s = p / (2 * Math.PI) * Math.asin(1);

    if (scaledTime < 1) {
        return -0.5 * (Math.pow(2, 10 * scaledTime1) * Math.sin((scaledTime1 - s) * (2 * Math.PI) / p));
    }

    return Math.pow(2, -10 * scaledTime1) * Math.sin((scaledTime1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
}

// Bounce to completion
function easeOutBounce(t) {

    var scaledTime = t / 1;

    if (scaledTime < 1 / 2.75) {

        return 7.5625 * scaledTime * scaledTime;
    } else if (scaledTime < 2 / 2.75) {

        var scaledTime2 = scaledTime - 1.5 / 2.75;
        return 7.5625 * scaledTime2 * scaledTime2 + 0.75;
    } else if (scaledTime < 2.5 / 2.75) {

        var _scaledTime = scaledTime - 2.25 / 2.75;
        return 7.5625 * _scaledTime * _scaledTime + 0.9375;
    } else {

        var _scaledTime2 = scaledTime - 2.625 / 2.75;
        return 7.5625 * _scaledTime2 * _scaledTime2 + 0.984375;
    }
}

// Bounce increasing in velocity until completion
function easeInBounce(t) {
    return 1 - easeOutBounce(1 - t);
}

// Bounce in and bounce out
function easeInOutBounce(t) {

    if (t < 0.5) {

        return easeInBounce(t * 2) * 0.5;
    }

    return easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
}

},{}],92:[function(require,module,exports){
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

},{}],93:[function(require,module,exports){
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

},{}]},{},[62])(62)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxiZXppZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3BvaW50X3NwaW5uZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcc3dpbmdpbmdfbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFx3YXZlLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxwYXRoX21hZ2ljLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxyYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcdHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxzcXVhcmVfZ3JvdXBfc3R1ZmYuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHpvb21fc3R1ZmZcXHpvb21fb3V0LmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFx6b29tX3N0dWZmXFx6b29tX3N0dWZmLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcYWJzdHJhY3RfY29tcG9uZW50LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY2lyY2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY29udGFpbmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY3VzdG9tX29iamVjdC5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGhlbHBlclxccGF0aF9kcmF3ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxpbWFnZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGxpbmUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxtYWluX2NvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHBhdGguanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxyZWN0YW5nbGUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxzcXVhcmUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFx2aWRlby5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGZhY3RvcnkuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxhYnN0cmFjdF9maWx0ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcYWJzdHJhY3RfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcY2VudGVyX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGNpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyYW5kb21fY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJhbmRvbV9yZWN0YW5nbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmVjdGFuZ2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHNwaXJhbF9jaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccGF0aFxccGF0aC1tb3Zlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcYWJzdHJhY3QtbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcbGluZWFyX3NoYWtlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmFkZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxvcGFjaXR5XFxmbGFzaGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xccm90YXRvclxcbGluZWFyX3JvdGF0b3IuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcYWRkX3VwX3BvaW50cy5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxkaXN0YW5jZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcaGVscGVyXFxkZWdyZWVzX3RvX2Nvb3JkaW5hdGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXG5vcm1hbGl6ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcYXJjLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxiZXppZXJfY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGxpbmUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGguanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGhzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcY2lyY2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc2hhcGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHRvX3ZlY3Rvci5qcyIsIi50bXBcXHNjcmlwdHNcXGludGVybmFsXFxjaGVja19wYXJhbWV0ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxpbnRlcm5hbFxcc2V0X3Byb3AuanMiLCIudG1wXFxzY3JpcHRzXFxsb29wLmpzIiwiLnRtcFxcc2NyaXB0c1xcbWFpbi5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXGNvbG9yX2ZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxccmFuZG9tX2NvbG9yX2NoYW5nZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcYWJzdHJhY3RfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxkZWZhdWx0X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW5jcmVtZW50X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW50ZXJ2YWxfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxwcm94aWVzLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xccmFuZG9tX3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xcdGltZXJzXFxpbnRlcnZhbC5qcyIsIi50bXBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWxfdGltZXIuanMiLCIudG1wXFxzY3JpcHRzXFx0cmFuc2l0aW9uc1xcZWFzaW5nLmpzIiwiLnRtcFxcc2NyaXB0c1xcdHJhbnNpdGlvbnNcXHRyYW5zaXRpb25fbG9vcC5qcyIsIm5vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvYmV6aWVyLmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvcG9seS1iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Nsb25lL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2NvbG9yLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jc3Mta2V5d29yZHMuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJub2RlX21vZHVsZXMvZWFzaW5nLXV0aWxzL2xpYi9lYXNpbmcuanMiLCJub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW5kb21Db2xvci9yYW5kb21Db2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksY0FBYyxRQUFRLHlCQUFSLENBQWxCOztBQUVBLElBQUksZUFBZSx1QkFBdUIsV0FBdkIsQ0FBbkI7O0FBRUEsSUFBSSxzQkFBc0IsUUFBUSx5Q0FBUixDQUExQjs7QUFFQSxJQUFJLHVCQUF1Qix1QkFBdUIsbUJBQXZCLENBQTNCOztBQUVBLElBQUksY0FBYyxRQUFRLHlCQUFSLENBQWxCOztBQUVBLElBQUksZUFBZSx1QkFBdUIsV0FBdkIsQ0FBbkI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFFBQVEsT0FBUixHQUFrQjtBQUNoQixhQUFXLGFBQWEsT0FEUjtBQUVoQixvQkFBa0IscUJBQXFCLE9BRnZCO0FBR2hCLGFBQVcsYUFBYTtBQUhSLENBQWxCOzs7O0FDcEJBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksaUJBQWlCLFFBQVEsaUJBQVIsQ0FBckI7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksU0FBUyxRQUFRLFNBQVIsQ0FBYjs7QUFFQSxJQUFJLFVBQVUsdUJBQXVCLE1BQXZCLENBQWQ7O0FBRUEsSUFBSSxRQUFRLFFBQVEsUUFBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLGtCQUFrQixRQUFRLGtCQUFSLENBQXRCOztBQUVBLElBQUksbUJBQW1CLHVCQUF1QixlQUF2QixDQUF2Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsUUFBUSxPQUFSLEdBQWtCO0FBQ2hCLGdCQUFjLGdCQUFnQixPQURkO0FBRWhCLFNBQU8sUUFBUSxPQUZDO0FBR2hCLGlCQUFlLGlCQUFpQixPQUhoQjtBQUloQixRQUFNLE9BQU87QUFKRyxDQUFsQjs7OztBQ3hCQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1CO0FBQ25DLE1BQUksWUFBWSxFQUFoQjs7QUFFQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELElBQWxEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxRQUF4QyxFQUFrRCxJQUFsRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsTUFBeEMsRUFBZ0QsSUFBaEQ7O0FBRUEsWUFBVSxNQUFWLEdBQW1CLFFBQVEsTUFBM0I7QUFDQSxZQUFVLE1BQVYsR0FBbUIsUUFBUSxNQUEzQjtBQUNBLFlBQVUsSUFBVixHQUFpQixRQUFRLElBQXpCOztBQUVBLFlBQVUsTUFBVixHQUFtQixDQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLFVBQVUsSUFBekMsRUFBK0MsQ0FBL0MsQ0FBbkI7QUFDQSxZQUFVLElBQVYsR0FBaUIsQ0FBQyxHQUFHLFlBQVksT0FBaEIsR0FBakI7QUFDQSxZQUFVLFdBQVYsR0FBd0IsQ0FBQyxHQUFHLGVBQWUsT0FBbkIsRUFBNEIsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQVQsRUFBeUIsS0FBSyxFQUFFLEdBQUcsVUFBVSxNQUFmLEVBQXVCLEdBQUcsQ0FBMUIsRUFBOUIsRUFBNkQsU0FBUyxFQUFFLEdBQUcsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsTUFBdEMsRUFBOEMsR0FBRyxDQUFqRCxFQUF0RSxFQUE0SCxTQUFTLEVBQUUsR0FBRyxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxNQUF0QyxFQUE4QyxHQUFHLENBQWpELEVBQXJJLEVBQTVCLENBQXhCO0FBQ0EsWUFBVSxRQUFWLEdBQXFCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsRUFBRSxNQUFNLFVBQVUsV0FBbEIsRUFBcEIsQ0FBckI7O0FBRUEsWUFBVSxLQUFWLEdBQWtCLFlBQVk7QUFDNUIsY0FBVSxNQUFWLENBQWlCLEtBQWpCLENBQXVCLFVBQVUsTUFBakM7QUFDQSxjQUFVLElBQVYsQ0FBZSxRQUFmLENBQXdCLFVBQVUsUUFBVixDQUFtQixJQUEzQztBQUNELEdBSEQ7O0FBS0EsWUFBVSxJQUFWLEdBQWlCLFlBQVk7QUFDM0IsY0FBVSxNQUFWLENBQWlCLElBQWpCO0FBQ0EsY0FBVSxJQUFWLENBQWUsV0FBZixDQUEyQixVQUFVLFFBQVYsQ0FBbUIsSUFBOUM7QUFDRCxHQUhEOztBQUtBLFlBQVUsTUFBVixHQUFtQixVQUFVLE9BQVYsRUFBbUI7QUFDcEMsUUFBSSxjQUFjLENBQUMsR0FBRyx5QkFBeUIsT0FBN0IsRUFBc0MsVUFBVSxHQUFoRCxFQUFxRCxVQUFVLE1BQS9ELENBQWxCO0FBQ0EsWUFBUSxHQUFSLENBQVksV0FBWjtBQUNBLGNBQVUsV0FBVixDQUFzQixPQUF0QixDQUE4QixDQUE5QixHQUFrQyxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsWUFBWSxDQUFyRTtBQUNBLGNBQVUsV0FBVixDQUFzQixPQUF0QixDQUE4QixDQUE5QixHQUFrQyxDQUFDLFlBQVksQ0FBL0M7QUFDQSxjQUFVLFdBQVYsQ0FBc0IsT0FBdEIsQ0FBOEIsQ0FBOUIsR0FBa0MsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFlBQVksQ0FBckU7QUFDQSxjQUFVLFdBQVYsQ0FBc0IsT0FBdEIsQ0FBOEIsQ0FBOUIsR0FBa0MsWUFBWSxDQUE5QztBQUNBLGNBQVUsUUFBVixDQUFtQixJQUFuQjtBQUNELEdBUkQ7O0FBVUEsU0FBTyxTQUFQO0FBQ0QsQ0FyQ0Q7O0FBdUNBLElBQUksUUFBUSxRQUFRLDZDQUFSLENBQVo7O0FBRUEsSUFBSSxTQUFTLHVCQUF1QixLQUF2QixDQUFiOztBQUVBLElBQUksYUFBYSxRQUFRLGtEQUFSLENBQWpCOztBQUVBLElBQUksY0FBYyx1QkFBdUIsVUFBdkIsQ0FBbEI7O0FBRUEsSUFBSSxnQkFBZ0IsUUFBUSxzQ0FBUixDQUFwQjs7QUFFQSxJQUFJLGlCQUFpQix1QkFBdUIsYUFBdkIsQ0FBckI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxzQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksMEJBQTBCLFFBQVEsaURBQVIsQ0FBOUI7O0FBRUEsSUFBSSwyQkFBMkIsdUJBQXVCLHVCQUF2QixDQUEvQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLG1DQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNyRS9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7QUFDbkMsTUFBSSxZQUFZLEVBQWhCOztBQUVBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsUUFBeEMsRUFBa0QsSUFBbEQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFdBQXhDLEVBQXFELElBQXJEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxNQUF4QyxFQUFnRCxJQUFoRDs7QUFFQSxZQUFVLE1BQVYsR0FBbUIsUUFBUSxNQUEzQjtBQUNBLFlBQVUsU0FBVixHQUFzQixRQUFRLFNBQTlCO0FBQ0EsWUFBVSxJQUFWLEdBQWlCLFFBQVEsSUFBekI7O0FBRUEsWUFBVSxNQUFWLEdBQW1CLENBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsVUFBVSxJQUF6QyxFQUErQyxHQUEvQyxDQUFuQjtBQUNBLFlBQVUsSUFBVixHQUFpQixDQUFDLEdBQUcsWUFBWSxPQUFoQixHQUFqQjtBQUNBLFlBQVUsV0FBVixHQUF3QixDQUFDLEdBQUcsZUFBZSxPQUFuQixFQUE0QixFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBVCxFQUF5QixLQUFLLEVBQUUsR0FBRyxVQUFVLE1BQWYsRUFBdUIsR0FBRyxDQUExQixFQUE5QixFQUE2RCxTQUFTLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQXRFLEVBQXNGLFNBQVMsRUFBRSxHQUFHLFVBQVUsTUFBVixHQUFtQixDQUF4QixFQUEyQixHQUFHLENBQTlCLEVBQS9GLEVBQTVCLENBQXhCO0FBQ0EsWUFBVSxRQUFWLEdBQXFCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsRUFBRSxNQUFNLFVBQVUsV0FBbEIsRUFBcEIsQ0FBckI7O0FBRUEsWUFBVSxLQUFWLEdBQWtCLFlBQVk7QUFDNUIsY0FBVSxNQUFWLENBQWlCLEtBQWpCLENBQXVCLFVBQVUsTUFBakM7QUFDQSxjQUFVLElBQVYsQ0FBZSxRQUFmLENBQXdCLFVBQVUsUUFBVixDQUFtQixJQUEzQztBQUNELEdBSEQ7O0FBS0EsWUFBVSxJQUFWLEdBQWlCLFlBQVk7QUFDM0IsY0FBVSxNQUFWLENBQWlCLElBQWpCO0FBQ0EsY0FBVSxJQUFWLENBQWUsV0FBZixDQUEyQixVQUFVLFFBQVYsQ0FBbUIsSUFBOUM7QUFDRCxHQUhEOztBQUtBLFlBQVUsTUFBVixHQUFtQixVQUFVLE9BQVYsRUFBbUI7QUFDcEMsY0FBVSxXQUFWLENBQXNCLEdBQXRCLENBQTBCLENBQTFCLEdBQThCLENBQUMsVUFBVSxHQUFYLElBQWtCLFVBQVUsU0FBMUQ7QUFDQSxjQUFVLFdBQVYsQ0FBc0IsT0FBdEIsQ0FBOEIsQ0FBOUIsR0FBa0MsS0FBSyxHQUFMLENBQVMsVUFBVSxHQUFuQixJQUEwQixVQUFVLE1BQXRFO0FBQ0EsY0FBVSxXQUFWLENBQXNCLE9BQXRCLENBQThCLENBQTlCLEdBQWtDLENBQUMsS0FBSyxHQUFMLENBQVMsVUFBVSxHQUFuQixJQUEwQixHQUEzQixJQUFrQyxVQUFVLE1BQTlFO0FBQ0EsY0FBVSxXQUFWLENBQXNCLE9BQXRCLENBQThCLENBQTlCLEdBQWtDLENBQUMsVUFBVSxHQUFYLElBQWtCLENBQWxCLEdBQXNCLFVBQVUsU0FBbEU7QUFDQSxjQUFVLFFBQVYsQ0FBbUIsSUFBbkI7QUFDRCxHQU5EOztBQVFBLFNBQU8sU0FBUDtBQUNELENBbkNEOztBQXFDQSxJQUFJLFFBQVEsUUFBUSw2Q0FBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLGFBQWEsUUFBUSxrREFBUixDQUFqQjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksZ0JBQWdCLFFBQVEsc0NBQVIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsdUJBQXVCLGFBQXZCLENBQXJCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsc0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLG1DQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUMvRC9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7QUFDbkMsTUFBSSxZQUFZLEVBQWhCOztBQUVBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsUUFBeEMsRUFBa0QsSUFBbEQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFdBQXhDLEVBQXFELElBQXJEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxNQUF4QyxFQUFnRCxJQUFoRDs7QUFFQSxZQUFVLE1BQVYsR0FBbUIsUUFBUSxNQUEzQjtBQUNBLFlBQVUsU0FBVixHQUFzQixRQUFRLFNBQTlCO0FBQ0EsWUFBVSxJQUFWLEdBQWlCLFFBQVEsSUFBekI7O0FBRUEsWUFBVSxNQUFWLEdBQW1CLENBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsVUFBVSxJQUF6QyxFQUErQyxHQUEvQyxDQUFuQjtBQUNBLFlBQVUsSUFBVixHQUFpQixDQUFDLEdBQUcsWUFBWSxPQUFoQixHQUFqQjtBQUNBLFlBQVUsV0FBVixHQUF3QixDQUFDLEdBQUcsZUFBZSxPQUFuQixFQUE0QixFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBVCxFQUF5QixLQUFLLEVBQUUsR0FBRyxVQUFVLE1BQWYsRUFBdUIsR0FBRyxDQUExQixFQUE5QixFQUE2RCxTQUFTLEVBQUUsR0FBRyxVQUFVLE1BQVYsR0FBbUIsQ0FBeEIsRUFBMkIsR0FBRyxDQUE5QixFQUF0RSxFQUE1QixDQUF4QjtBQUNBLFlBQVUsUUFBVixHQUFxQixDQUFDLEdBQUcsT0FBTyxPQUFYLEVBQW9CLEVBQUUsTUFBTSxVQUFVLFdBQWxCLEVBQXBCLENBQXJCOztBQUVBLFlBQVUsS0FBVixHQUFrQixZQUFZO0FBQzVCLGNBQVUsTUFBVixDQUFpQixLQUFqQixDQUF1QixVQUFVLE1BQWpDO0FBQ0EsY0FBVSxJQUFWLENBQWUsUUFBZixDQUF3QixVQUFVLFFBQVYsQ0FBbUIsSUFBM0M7QUFDRCxHQUhEOztBQUtBLFlBQVUsSUFBVixHQUFpQixZQUFZO0FBQzNCLGNBQVUsTUFBVixDQUFpQixJQUFqQjtBQUNBLGNBQVUsSUFBVixDQUFlLFdBQWYsQ0FBMkIsVUFBVSxRQUFWLENBQW1CLElBQTlDO0FBQ0QsR0FIRDs7QUFLQSxZQUFVLE1BQVYsR0FBbUIsVUFBVSxPQUFWLEVBQW1CO0FBQ3BDLGNBQVUsV0FBVixDQUFzQixPQUF0QixDQUE4QixDQUE5QixHQUFrQyxDQUFDLFVBQVUsR0FBWCxJQUFrQixVQUFVLFNBQTlEO0FBQ0EsY0FBVSxRQUFWLENBQW1CLElBQW5CO0FBQ0QsR0FIRDs7QUFLQSxTQUFPLFNBQVA7QUFDRCxDQWhDRDs7QUFrQ0EsSUFBSSxRQUFRLFFBQVEsNkNBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxhQUFhLFFBQVEsa0RBQVIsQ0FBakI7O0FBRUEsSUFBSSxjQUFjLHVCQUF1QixVQUF2QixDQUFsQjs7QUFFQSxJQUFJLGdCQUFnQixRQUFRLHNDQUFSLENBQXBCOztBQUVBLElBQUksaUJBQWlCLHVCQUF1QixhQUF2QixDQUFyQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLHNDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxtQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDNUQvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1CO0FBQ25DLE1BQUksWUFBWSxFQUFoQjs7QUFFQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELElBQWxEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxXQUF4QyxFQUFxRCxJQUFyRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsS0FBbkQsRUFBMEQsQ0FBMUQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE1BQXhDLEVBQWdELElBQWhEOztBQUVBLFlBQVUsTUFBVixHQUFtQixRQUFRLE1BQTNCO0FBQ0EsWUFBVSxTQUFWLEdBQXNCLFFBQVEsU0FBOUI7QUFDQSxZQUFVLElBQVYsR0FBaUIsUUFBUSxJQUF6QjtBQUNBLFlBQVUsT0FBVixHQUFvQixRQUFRLE9BQTVCOztBQUVBLFlBQVUsTUFBVixHQUFtQixDQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLFVBQVUsSUFBekMsRUFBK0MsR0FBL0MsQ0FBbkI7QUFDQSxZQUFVLElBQVYsR0FBaUIsQ0FBQyxHQUFHLFlBQVksT0FBaEIsR0FBakI7QUFDQSxZQUFVLFdBQVYsR0FBd0IsQ0FBQyxHQUFHLGVBQWUsT0FBbkIsRUFBNEIsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQVQsRUFBeUIsS0FBSyxFQUFFLEdBQUcsVUFBVSxNQUFmLEVBQXVCLEdBQUcsQ0FBMUIsRUFBOUIsRUFBNkQsU0FBUyxFQUFFLEdBQUcsVUFBVSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCLFVBQVUsT0FBdEMsRUFBK0MsR0FBRyxDQUFsRCxFQUF0RSxFQUE2SCxTQUFTLEVBQUUsR0FBRyxVQUFVLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUIsVUFBVSxPQUF0QyxFQUErQyxHQUFHLENBQWxELEVBQXRJLEVBQTVCLENBQXhCO0FBQ0EsWUFBVSxRQUFWLEdBQXFCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsRUFBRSxNQUFNLFVBQVUsV0FBbEIsRUFBcEIsQ0FBckI7O0FBRUEsWUFBVSxLQUFWLEdBQWtCLFlBQVk7QUFDNUIsY0FBVSxNQUFWLENBQWlCLEtBQWpCLENBQXVCLFVBQVUsTUFBakM7QUFDQSxjQUFVLElBQVYsQ0FBZSxRQUFmLENBQXdCLFVBQVUsUUFBVixDQUFtQixJQUEzQztBQUNELEdBSEQ7O0FBS0EsWUFBVSxJQUFWLEdBQWlCLFlBQVk7QUFDM0IsY0FBVSxNQUFWLENBQWlCLElBQWpCO0FBQ0EsY0FBVSxJQUFWLENBQWUsV0FBZixDQUEyQixVQUFVLFFBQVYsQ0FBbUIsSUFBOUM7QUFDRCxHQUhEOztBQUtBLFlBQVUsTUFBVixHQUFtQixVQUFVLE9BQVYsRUFBbUI7QUFDcEMsY0FBVSxXQUFWLENBQXNCLEdBQXRCLENBQTBCLENBQTFCLEdBQThCLENBQUMsVUFBVSxHQUFYLElBQWtCLFVBQVUsU0FBMUQ7QUFDQSxjQUFVLFdBQVYsQ0FBc0IsT0FBdEIsQ0FBOEIsQ0FBOUIsR0FBa0MsQ0FBQyxVQUFVLE1BQVYsQ0FBaUIsa0JBQWpCLENBQW9DLENBQUMsSUFBckMsSUFBNkMsR0FBOUMsSUFBcUQsR0FBckQsR0FBMkQsVUFBVSxTQUF2RztBQUNBLGNBQVUsV0FBVixDQUFzQixPQUF0QixDQUE4QixDQUE5QixHQUFrQyxDQUFDLFVBQVUsTUFBVixDQUFpQixrQkFBakIsQ0FBb0MsQ0FBQyxHQUFyQyxJQUE0QyxHQUE3QyxJQUFvRCxHQUFwRCxHQUEwRCxVQUFVLFNBQXRHO0FBQ0EsY0FBVSxXQUFWLENBQXNCLEtBQXRCLENBQTRCLENBQTVCLEdBQWdDLENBQUMsVUFBVSxNQUFWLENBQWlCLGtCQUFqQixDQUFvQyxDQUFDLElBQXJDLElBQTZDLEdBQTlDLElBQXFELFVBQVUsU0FBL0Y7QUFDQSxjQUFVLFFBQVYsQ0FBbUIsSUFBbkI7QUFDRCxHQU5EOztBQVFBLFNBQU8sU0FBUDtBQUNELENBckNEOztBQXVDQSxJQUFJLFFBQVEsUUFBUSw2Q0FBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLGFBQWEsUUFBUSxrREFBUixDQUFqQjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksZ0JBQWdCLFFBQVEsc0NBQVIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsdUJBQXVCLGFBQXZCLENBQXJCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsc0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLG1DQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNqRS9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksMEJBQTBCLFFBQVEsMEJBQVIsQ0FBOUI7O0FBRUEsSUFBSSwyQkFBMkIsdUJBQXVCLHVCQUF2QixDQUEvQjs7QUFFQSxJQUFJLDJCQUEyQixRQUFRLDJCQUFSLENBQS9COztBQUVBLElBQUksNEJBQTRCLHVCQUF1Qix3QkFBdkIsQ0FBaEM7O0FBRUEsSUFBSSxVQUFVLFFBQVEsaUJBQVIsQ0FBZDs7QUFFQSxJQUFJLFdBQVcsdUJBQXVCLE9BQXZCLENBQWY7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFFBQVEsT0FBUixHQUFrQjtBQUNoQix3QkFBc0IseUJBQXlCLE9BRC9CO0FBRWhCLHdCQUFzQiwwQkFBMEIsT0FGaEM7QUFHaEIsVUFBUSxTQUFTO0FBSEQsQ0FBbEI7Ozs7QUNwQkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjtBQUNuQyxNQUFJLGFBQWEsRUFBakI7OztBQUdBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsTUFBeEMsRUFBZ0QsSUFBaEQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLGFBQXhDLEVBQXVELEtBQXZELEVBQThELEVBQTlEO0FBQ0EsYUFBVyxJQUFYLEdBQWtCLFFBQVEsSUFBMUI7QUFDQSxVQUFRLFdBQVIsQ0FBb0IsSUFBcEIsR0FBMkIsV0FBVyxJQUF0Qzs7O0FBR0EsYUFBVyxRQUFYLEdBQXNCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsUUFBUSxXQUE1QixDQUF0QjtBQUNBLGFBQVcsSUFBWCxHQUFrQixDQUFDLEdBQUcsWUFBWSxPQUFoQixHQUFsQjs7QUFFQSxhQUFXLEtBQVgsR0FBbUIsWUFBWTtBQUM3QixXQUFPLE9BQVAsQ0FBZSxZQUFmLENBQTRCLFdBQVcsTUFBdkM7QUFDQSxlQUFXLElBQVgsQ0FBZ0IsUUFBaEIsQ0FBeUIsV0FBVyxRQUFYLENBQW9CLElBQTdDO0FBQ0QsR0FIRDs7QUFLQSxhQUFXLElBQVgsR0FBa0IsWUFBWTtBQUM1QixXQUFPLE9BQVAsQ0FBZSxlQUFmLENBQStCLFdBQVcsTUFBMUM7QUFDQSxlQUFXLElBQVgsQ0FBZ0IsV0FBaEIsQ0FBNEIsV0FBVyxRQUFYLENBQW9CLElBQWhEO0FBQ0QsR0FIRDs7QUFLQSxhQUFXLE1BQVgsR0FBb0IsWUFBWTtBQUM5QixlQUFXLFFBQVgsQ0FBb0IsWUFBcEIsR0FBbUMsV0FBVyxJQUFYLENBQWdCLFdBQWhCLENBQTRCLEtBQUssTUFBTCxFQUE1QixDQUFuQztBQUNBLGVBQVcsUUFBWCxDQUFvQixJQUFwQjtBQUNELEdBSEQ7O0FBS0EsU0FBTyxVQUFQO0FBQ0QsQ0E3QkQ7O0FBK0JBLElBQUksUUFBUSxRQUFRLFlBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxRQUFRLFFBQVEsMENBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxhQUFhLFFBQVEsK0NBQVIsQ0FBakI7O0FBRUEsSUFBSSxjQUFjLHVCQUF1QixVQUF2QixDQUFsQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNyRC9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7QUFDbkMsTUFBSSxhQUFhLEVBQWpCOzs7QUFHQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE1BQXhDLEVBQWdELElBQWhEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxhQUF4QyxFQUF1RCxJQUF2RDtBQUNBLFVBQVEsV0FBUixDQUFvQixJQUFwQixHQUEyQixRQUFRLElBQW5DO0FBQ0EsYUFBVyxJQUFYLEdBQWtCLFFBQVEsSUFBMUI7OztBQUdBLGFBQVcsTUFBWCxHQUFvQixDQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDLENBQXJDLENBQXBCO0FBQ0EsYUFBVyxRQUFYLEdBQXNCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsUUFBUSxXQUE1QixDQUF0QjtBQUNBLGFBQVcsSUFBWCxHQUFrQixDQUFDLEdBQUcsWUFBWSxPQUFoQixHQUFsQjs7QUFFQSxhQUFXLEtBQVgsR0FBbUIsWUFBWTtBQUM3QixlQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsV0FBVyxNQUFuQztBQUNBLGVBQVcsSUFBWCxDQUFnQixRQUFoQixDQUF5QixXQUFXLFFBQVgsQ0FBb0IsSUFBN0M7QUFDRCxHQUhEOztBQUtBLGFBQVcsSUFBWCxHQUFrQixZQUFZO0FBQzVCLGVBQVcsTUFBWCxDQUFrQixJQUFsQjtBQUNBLGVBQVcsSUFBWCxDQUFnQixXQUFoQixDQUE0QixXQUFXLFFBQVgsQ0FBb0IsSUFBaEQ7QUFDRCxHQUhEOztBQUtBLGFBQVcsTUFBWCxHQUFvQixVQUFVLE9BQVYsRUFBbUI7QUFDckMsZUFBVyxRQUFYLENBQW9CLFlBQXBCLEdBQW1DLFdBQVcsSUFBWCxDQUFnQixXQUFoQixDQUE0QixPQUE1QixDQUFuQztBQUNBLGVBQVcsUUFBWCxDQUFvQixJQUFwQjtBQUNELEdBSEQ7O0FBS0EsU0FBTyxVQUFQO0FBQ0QsQ0E5QkQ7O0FBZ0NBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxJQUFJLFFBQVEsUUFBUSwwQ0FBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLGFBQWEsUUFBUSwrQ0FBUixDQUFqQjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ3REL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjtBQUNuQyxNQUFJLG1CQUFtQixFQUF2Qjs7QUFFQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFNBQXhDLEVBQW1ELElBQW5EO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxJQUFuRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsS0FBbkQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFVBQXhDLEVBQW9ELEtBQXBELEVBQTJELEVBQTNEOztBQUVBLE1BQUksUUFBUSxDQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLEVBQUUsWUFBWSxRQUFRLFFBQXRCLEVBQWdDLFdBQVcsUUFBUSxPQUFuRCxFQUE0RCxXQUFXLFFBQVEsT0FBL0UsRUFBL0IsQ0FBWjs7QUFFQSxtQkFBaUIsSUFBakIsR0FBd0IsTUFBTSxJQUE5Qjs7QUFFQSxtQkFBaUIsTUFBakIsR0FBMEIsWUFBWTtBQUNwQyxRQUFJLGdCQUFnQixFQUFwQjtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFRLFFBQVIsQ0FBaUIsTUFBckMsRUFBNkMsR0FBN0MsRUFBa0Q7QUFDaEQsb0JBQWMsSUFBZCxDQUFtQixDQUFuQjtBQUNEO0FBQ0QsWUFBUSxhQUFSO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsUUFBUixDQUFpQixNQUFyQyxFQUE2QyxHQUE3QyxFQUFrRDtBQUNoRCxVQUFJLElBQUksUUFBUSxPQUFoQixFQUF5QjtBQUN2QixjQUFNLFFBQU4sQ0FBZSxjQUFjLENBQWQsQ0FBZixFQUFpQyxJQUFqQyxDQUFzQyxLQUF0QyxHQUE4QyxDQUE5QztBQUNELE9BRkQsTUFFTztBQUNMLGNBQU0sUUFBTixDQUFlLGNBQWMsQ0FBZCxDQUFmLEVBQWlDLElBQWpDLENBQXNDLEtBQXRDLEdBQThDLENBQTlDO0FBQ0Q7QUFDRjtBQUNGLEdBYkQ7O0FBZUEsV0FBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ2xCLFNBQUssSUFBSSxJQUFJLEVBQUUsTUFBZixFQUF1QixDQUF2QixFQUEwQixHQUExQixFQUErQjtBQUM3QixVQUFJLElBQUksS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWdCLENBQTNCLENBQVI7QUFDQSxVQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUYsQ0FBRCxFQUFPLEVBQUUsSUFBSSxDQUFOLENBQVAsQ0FBWDtBQUNBLFFBQUUsSUFBSSxDQUFOLElBQVcsS0FBSyxDQUFMLENBQVg7QUFDQSxRQUFFLENBQUYsSUFBTyxLQUFLLENBQUwsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxnQkFBUDtBQUNELENBckNEOztBQXVDQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxxQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDckQvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFVBQXhDLEVBQW9ELElBQXBEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxJQUFuRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsSUFBbkQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFNBQXhDLEVBQW1ELEtBQW5EO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxFQUFvRCxLQUFwRCxFQUEyRCxFQUEzRDs7QUFFQSxNQUFJLGNBQWMsQ0FBQyxHQUFHLHVCQUF1QixPQUEzQixFQUFvQyxPQUFwQyxDQUFsQjtBQUNBLE1BQUksbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsT0FBckIsRUFBOEIsUUFBUSxRQUF0QyxDQUF2QjtBQUNBLE1BQUksaUJBQWlCLEVBQXJCOztBQUVBLGlCQUFlLEtBQWYsR0FBdUIsWUFBWTtBQUNqQyxxQkFBaUIsV0FBakIsQ0FBNkIsTUFBN0I7QUFDQSxxQkFBaUIsS0FBakI7QUFDRCxHQUhEOztBQUtBLGlCQUFlLElBQWYsR0FBc0IsWUFBWTtBQUNoQyxxQkFBaUIsSUFBakI7QUFDQSxxQkFBaUIsY0FBakIsQ0FBZ0MsTUFBaEM7QUFDRCxHQUhEOztBQUtBLGlCQUFlLElBQWYsR0FBc0IsWUFBWSxJQUFsQzs7QUFFQSxXQUFTLE1BQVQsR0FBa0I7QUFDaEIsZ0JBQVksTUFBWjtBQUNEOztBQUVELFNBQU8sY0FBUDtBQUNELENBN0JEOztBQStCQSxJQUFJLHdCQUF3QixRQUFRLHdCQUFSLENBQTVCOztBQUVBLElBQUkseUJBQXlCLHVCQUF1QixxQkFBdkIsQ0FBN0I7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksa0JBQWtCLFFBQVEsNkJBQVIsQ0FBdEI7O0FBRUEsSUFBSSxtQkFBbUIsdUJBQXVCLGVBQXZCLENBQXZCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDakQvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLHdCQUF3QixRQUFRLHdCQUFSLENBQTVCOztBQUVBLElBQUkseUJBQXlCLHVCQUF1QixxQkFBdkIsQ0FBN0I7O0FBRUEsSUFBSSxpQ0FBaUMsUUFBUSxpQ0FBUixDQUFyQzs7QUFFQSxJQUFJLGtDQUFrQyx1QkFBdUIsOEJBQXZCLENBQXRDOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixRQUFRLE9BQVIsR0FBa0I7QUFDaEIsc0JBQW9CLHVCQUF1QixPQUQzQjtBQUVoQiw4QkFBNEIsZ0NBQWdDO0FBRjVDLENBQWxCOzs7O0FDaEJBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRW5DLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsSUFBbkQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELElBQWpEOztBQUVBLFVBQVEsaUJBQVIsR0FBNEIsQ0FBNUI7QUFDQSxVQUFRLEtBQVIsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFRLE1BQVIsR0FBaUIsSUFBakI7QUFDQSxNQUFJLFNBQVMsQ0FBQyxHQUFHLGdCQUFnQixPQUFwQixFQUE2QixPQUE3QixDQUFiOztBQUVBLE1BQUksVUFBVSxFQUFkO0FBQ0EsVUFBUSxLQUFSLEdBQWdCLFlBQVk7QUFDMUIsV0FBTyxLQUFQO0FBQ0QsR0FGRDs7QUFJQSxVQUFRLElBQVIsR0FBZSxZQUFZO0FBQ3pCLFdBQU8sSUFBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxPQUFQO0FBQ0QsQ0FwQkQ7O0FBc0JBLElBQUksaUJBQWlCLFFBQVEsd0NBQVIsQ0FBckI7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ3BDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSSxZQUFZLFFBQVEsWUFBUixDQUFoQjs7QUFFQSxJQUFJLGFBQWEsdUJBQXVCLFNBQXZCLENBQWpCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixRQUFRLE9BQVIsR0FBa0I7QUFDaEIsV0FBUyxXQUFXO0FBREosQ0FBbEI7Ozs7QUNaQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDdkMsYUFBTztBQURnQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsWUFBWTs7QUFFeEIsVUFBSSxZQUFZLEVBQWhCO0FBQ0EsZ0JBQVUsSUFBVixHQUFpQixJQUFJLFNBQVMsS0FBYixFQUFqQjtBQUNBLGdCQUFVLEtBQVYsR0FBa0IsQ0FBbEI7O0FBRUEsYUFBTyxTQUFQO0FBQ0wsQ0FQRDs7OztBQ05BOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN2QyxhQUFPO0FBRGdDLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRS9CLE9BQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsYUFBeEMsRUFBdUQsSUFBdkQ7QUFDQSxPQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELE1BQXhEOztBQUVBLFVBQUksU0FBUyxDQUFDLEdBQUcscUJBQXFCLE9BQXpCLEdBQWI7QUFDQSxhQUFPLFdBQVAsR0FBcUIsUUFBUSxXQUE3QjtBQUNBLGFBQU8sS0FBUCxHQUFlLFFBQVEsS0FBdkI7O0FBRUEsYUFBTyxJQUFQLEdBQWMsWUFBWTtBQUNwQixtQkFBTyxJQUFQLENBQVksUUFBWixDQUFxQixLQUFyQjtBQUNBLG1CQUFPLElBQVAsQ0FBWSxRQUFaLENBQXFCLFNBQXJCLENBQStCLE9BQU8sS0FBdEMsRUFBNkMsVUFBN0MsQ0FBd0QsQ0FBeEQsRUFBMkQsQ0FBM0QsRUFBOEQsT0FBTyxXQUFQLENBQW1CLE1BQW5CLEdBQTRCLE9BQU8sS0FBakc7QUFDTCxPQUhEOztBQUtBLGFBQU8sSUFBUDtBQUNBLGFBQU8sTUFBUDtBQUNMLENBaEJEOztBQWtCQSxJQUFJLHNCQUFzQixRQUFRLHNCQUFSLENBQTFCOztBQUVBLElBQUksdUJBQXVCLHVCQUF1QixtQkFBdkIsQ0FBM0I7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxtQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxhQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDaEMvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDekMsV0FBTztBQURrQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsWUFBWTtBQUMxQixXQUFPLElBQUksU0FBUyxTQUFiLEVBQVA7QUFDSCxDQUZEOzs7O0FDTkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsTUFBSSxTQUFTLENBQUMsR0FBRyxxQkFBcUIsT0FBekIsR0FBYjtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsYUFBeEMsRUFBdUQsSUFBdkQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELE1BQXhEO0FBQ0EsU0FBTyxXQUFQLEdBQXFCLFFBQVEsV0FBN0I7QUFDQSxTQUFPLEtBQVAsR0FBZSxRQUFRLEtBQXZCOztBQUVBLFNBQU8sSUFBUCxHQUFjLFlBQVk7QUFDeEIsV0FBTyxJQUFQLENBQVksUUFBWixDQUFxQixLQUFyQjtBQUNBLFdBQU8sSUFBUCxDQUFZLFFBQVosQ0FBcUIsU0FBckIsQ0FBK0IsT0FBTyxLQUF0QyxFQUE2QyxXQUE3QyxDQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxDQUF3RSxDQUF4RSxFQUEyRSxDQUEzRTtBQUNBLFFBQUksVUFBVTtBQUNaLFNBQUcsQ0FEUztBQUVaLFNBQUc7QUFGUyxLQUFkO0FBSUEsUUFBSSxJQUFJLENBQVI7QUFDQSxRQUFJLDRCQUE0QixJQUFoQztBQUNBLFFBQUksb0JBQW9CLEtBQXhCO0FBQ0EsUUFBSSxpQkFBaUIsU0FBckI7O0FBRUEsUUFBSTtBQUNGLFdBQUssSUFBSSxZQUFZLE9BQU8sV0FBUCxDQUFtQixJQUFuQixDQUF3QixRQUF4QixDQUFpQyxPQUFPLFFBQXhDLEdBQWhCLEVBQXFFLEtBQTFFLEVBQWlGLEVBQUUsNEJBQTRCLENBQUMsUUFBUSxVQUFVLElBQVYsRUFBVCxFQUEyQixJQUF6RCxDQUFqRixFQUFpSiw0QkFBNEIsSUFBN0ssRUFBbUw7QUFDakwsWUFBSSxPQUFPLE1BQU0sS0FBakI7O0FBRUEsc0JBQWMsT0FBZCxDQUFzQixLQUFLLElBQTNCLEVBQWlDLE9BQU8sSUFBUCxDQUFZLFFBQTdDLEVBQXVELElBQXZELEVBQTZELE9BQTdEO0FBQ0Esa0JBQVUsQ0FBQyxHQUFHLGdCQUFnQixPQUFwQixFQUE2QixPQUE3QixFQUFzQyxLQUFLLFlBQUwsRUFBdEMsQ0FBVjtBQUNBO0FBQ0Q7QUFDRixLQVJELENBUUUsT0FBTyxHQUFQLEVBQVk7QUFDWiwwQkFBb0IsSUFBcEI7QUFDQSx1QkFBaUIsR0FBakI7QUFDRCxLQVhELFNBV1U7QUFDUixVQUFJO0FBQ0YsWUFBSSxDQUFDLHlCQUFELElBQThCLFVBQVUsTUFBNUMsRUFBb0Q7QUFDbEQsb0JBQVUsTUFBVjtBQUNEO0FBQ0YsT0FKRCxTQUlVO0FBQ1IsWUFBSSxpQkFBSixFQUF1QjtBQUNyQixnQkFBTSxjQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0FsQ0Q7O0FBb0NBLFNBQU8sSUFBUDtBQUNBLFNBQU8sTUFBUDtBQUNELENBOUNEOztBQWdEQSxJQUFJLHNCQUFzQixRQUFRLHNCQUFSLENBQTFCOztBQUVBLElBQUksdUJBQXVCLHVCQUF1QixtQkFBdkIsQ0FBM0I7O0FBRUEsSUFBSSxlQUFlLFFBQVEsc0JBQVIsQ0FBbkI7O0FBRUEsSUFBSSxnQkFBZ0IsdUJBQXVCLFlBQXZCLENBQXBCOztBQUVBLElBQUksaUJBQWlCLFFBQVEsaUNBQVIsQ0FBckI7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ3RFL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSSxvQkFBb0IsUUFBUSw4Q0FBUixDQUF4Qjs7QUFFQSxJQUFJLHFCQUFxQix1QkFBdUIsaUJBQXZCLENBQXpCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7QUFHL0YsU0FBUyxVQUFULEdBQXNCLENBQUU7O0FBRXhCLFdBQVcsSUFBWCxHQUFrQixVQUFVLFFBQVYsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUM7QUFDbkQsV0FBUyxNQUFULENBQWdCLFFBQVEsQ0FBUixHQUFZLEtBQUssWUFBTCxHQUFvQixDQUFoRCxFQUFtRCxRQUFRLENBQVIsR0FBWSxLQUFLLFlBQUwsR0FBb0IsQ0FBbkY7QUFDRCxDQUZEOztBQUlBLFdBQVcsR0FBWCxHQUFpQixVQUFVLFFBQVYsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUM7QUFDbEQsV0FBUyxNQUFULENBQWdCLFFBQVEsQ0FBUixHQUFZLEtBQUssS0FBTCxDQUFXLENBQXZDLEVBQTBDLFFBQVEsQ0FBUixHQUFZLEtBQUssS0FBTCxDQUFXLENBQWpFO0FBQ0EsV0FBUyxHQUFULENBQWEsS0FBSyxLQUFMLENBQVcsQ0FBeEIsRUFBMkIsS0FBSyxLQUFMLENBQVcsQ0FBWCxHQUFlLEtBQUssTUFBL0MsRUFBdUQsS0FBSyxNQUE1RCxFQUFvRSxDQUFDLEdBQUcsbUJBQW1CLE9BQXZCLEVBQWdDLENBQUMsRUFBakMsQ0FBcEUsRUFBMEcsQ0FBQyxHQUFHLG1CQUFtQixPQUF2QixFQUFnQyxLQUFLLE9BQUwsR0FBZSxFQUEvQyxDQUExRztBQUNELENBSEQ7O0FBS0EsV0FBVyxTQUFYLEdBQXVCLFVBQVUsUUFBVixFQUFvQixJQUFwQixFQUEwQixPQUExQixFQUFtQztBQUN4RCxXQUFTLE1BQVQsQ0FBZ0IsUUFBUSxDQUFSLEdBQVksS0FBSyxLQUFMLENBQVcsQ0FBdkMsRUFBMEMsUUFBUSxDQUFSLEdBQVksS0FBSyxLQUFMLENBQVcsQ0FBakU7QUFDQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxTQUFMLEVBQXBCLEVBQXNDLEtBQUssQ0FBM0MsRUFBOEM7QUFDNUMsUUFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLElBQUksS0FBSyxTQUFMLEVBQWxCLENBQVo7QUFDQSxhQUFTLE1BQVQsQ0FBZ0IsTUFBTSxDQUF0QixFQUF5QixNQUFNLENBQS9CO0FBQ0Q7QUFDRixDQU5EOztBQVFBLFdBQVcsWUFBWCxHQUEwQixVQUFVLFFBQVYsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUM7QUFDM0QsV0FBUyxNQUFULENBQWdCLFFBQVEsQ0FBUixHQUFZLEtBQUssS0FBTCxDQUFXLENBQXZDLEVBQTBDLFFBQVEsQ0FBUixHQUFZLEtBQUssS0FBTCxDQUFXLENBQWpFO0FBQ0EsTUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDaEIsYUFBUyxhQUFULENBQXVCLEtBQUssT0FBTCxDQUFhLENBQXBDLEVBQXVDLEtBQUssT0FBTCxDQUFhLENBQXBELEVBQXVELEtBQUssT0FBTCxDQUFhLENBQXBFLEVBQXVFLEtBQUssT0FBTCxDQUFhLENBQXBGLEVBQXVGLEtBQUssR0FBTCxDQUFTLENBQWhHLEVBQW1HLEtBQUssR0FBTCxDQUFTLENBQTVHO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsYUFBUyxnQkFBVCxDQUEwQixLQUFLLE9BQUwsQ0FBYSxDQUF2QyxFQUEwQyxLQUFLLE9BQUwsQ0FBYSxDQUF2RCxFQUEwRCxLQUFLLEdBQUwsQ0FBUyxDQUFuRSxFQUFzRSxLQUFLLEdBQUwsQ0FBUyxDQUEvRTtBQUNEO0FBQ0YsQ0FQRDs7QUFTQSxRQUFRLE9BQVIsR0FBa0IsVUFBbEI7Ozs7QUN6Q0E7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxRQUF4QyxFQUFrRCxJQUFsRDs7QUFFQSxNQUFJLFFBQVE7QUFDVixVQUFNLElBQUksU0FBUyxNQUFiLENBQW9CLFFBQVEsTUFBNUIsQ0FESTtBQUVWLFdBQU87QUFGRyxHQUFaOztBQUtBLFFBQU0sSUFBTixHQUFhLFlBQVk7QUFDdkIsVUFBTSxJQUFOLENBQVcsTUFBWCxHQUFvQixNQUFNLEtBQTFCO0FBQ0EsVUFBTSxJQUFOLENBQVcsTUFBWCxHQUFvQixNQUFNLEtBQTFCO0FBQ0QsR0FIRDs7QUFLQSxRQUFNLElBQU47QUFDQSxTQUFPLEtBQVA7QUFDRCxDQWhCRDs7QUFrQkEsSUFBSSxtQkFBbUIsUUFBUSxtQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDNUIvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDdkMsYUFBTztBQURnQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1CO0FBQy9CLFVBQUksT0FBTyxDQUFDLEdBQUcscUJBQXFCLE9BQXpCLEdBQVg7O0FBRUEsT0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxFQUFvRCxJQUFwRDtBQUNBLE9BQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsV0FBeEMsRUFBcUQsS0FBckQsRUFBNEQsQ0FBNUQ7QUFDQSxPQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELE1BQXhEOztBQUVBLFdBQUssSUFBTCxHQUFZLFFBQVEsUUFBcEI7QUFDQSxXQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXJCO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLFFBQVEsU0FBekI7O0FBRUEsV0FBSyxJQUFMLEdBQVksWUFBWTtBQUNsQixpQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixXQUFuQixDQUErQixLQUFLLEtBQXBDLEVBQTJDLGNBQTNDLENBQTBELEtBQUssU0FBTCxHQUFpQixLQUFLLEtBQWhGLEVBQXVGLE1BQXZGLENBQThGLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsR0FBb0IsS0FBSyxLQUF2SCxFQUE4SCxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLEdBQW9CLEtBQUssS0FBdkosRUFBOEosTUFBOUosQ0FBcUssS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLENBQWQsR0FBa0IsS0FBSyxLQUE1TCxFQUFtTSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsQ0FBZCxHQUFrQixLQUFLLEtBQTFOO0FBQ0wsT0FGRDs7QUFJQSxXQUFLLElBQUw7QUFDQSxhQUFPLElBQVA7QUFDTCxDQWpCRDs7QUFtQkEsSUFBSSxzQkFBc0IsUUFBUSxzQkFBUixDQUExQjs7QUFFQSxJQUFJLHVCQUF1Qix1QkFBdUIsbUJBQXZCLENBQTNCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsYUFBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ2pDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsRUFBVixFQUFjO0FBQzVCLFFBQUksUUFBUSxJQUFJLFNBQVMsS0FBYixDQUFtQixFQUFuQixDQUFaOztBQUVBLFFBQUksWUFBWSxFQUFoQjs7QUFFQSxjQUFVLEdBQVYsR0FBZ0IsVUFBVSxLQUFWLEVBQWlCO0FBQzdCLGNBQU0sUUFBTixDQUFlLE1BQU0sSUFBckI7QUFDSCxLQUZEOztBQUlBLGNBQVUsTUFBVixHQUFtQixVQUFVLEtBQVYsRUFBaUI7QUFDaEMsY0FBTSxXQUFOLENBQWtCLE1BQU0sSUFBeEI7QUFDSCxLQUZEOztBQUlBLGNBQVUsU0FBVixHQUFzQixZQUFZO0FBQzlCLGNBQU0saUJBQU47QUFDSCxLQUZEOztBQUlBLGNBQVUsS0FBVixHQUFrQixLQUFsQjs7QUFFQSxXQUFPLFNBQVA7QUFDSCxDQXBCRDs7OztBQ05BOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN2QyxhQUFPO0FBRGdDLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7QUFDL0IsVUFBSSxDQUFDLE9BQUwsRUFBYztBQUNSLHNCQUFVLEVBQVY7QUFDTDs7QUFFRCxPQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE1BQXhDLEVBQWdELElBQWhEO0FBQ0EsT0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxLQUFqRCxFQUF3RCxNQUF4RDtBQUNBLE9BQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsS0FBakQsRUFBd0QsQ0FBeEQ7O0FBRUEsVUFBSSxTQUFTLENBQUMsR0FBRyxxQkFBcUIsT0FBekIsR0FBYjtBQUNBLGFBQU8sWUFBUCxHQUFzQixRQUFRLElBQTlCO0FBQ0EsYUFBTyxLQUFQLEdBQWUsUUFBUSxLQUF2QjtBQUNBLGFBQU8sS0FBUCxHQUFlLFFBQVEsS0FBdkI7O0FBRUEsYUFBTyxJQUFQLEdBQWMsWUFBWTtBQUNwQixtQkFBTyxJQUFQLENBQVksUUFBWixDQUFxQixLQUFyQjtBQUNBLG1CQUFPLElBQVAsQ0FBWSxRQUFaLENBQXFCLFdBQXJCLENBQWlDLE9BQU8sS0FBeEMsRUFBK0MsY0FBL0MsQ0FBOEQsT0FBTyxLQUFyRSxFQUE0RSxNQUE1RSxDQUFtRixDQUFuRixFQUFzRixDQUF0RjtBQUNBLGdCQUFJLFVBQVUsRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBZDtBQUNBLGdCQUFJLElBQUksQ0FBUjtBQUNBLGdCQUFJLDRCQUE0QixJQUFoQztBQUNBLGdCQUFJLG9CQUFvQixLQUF4QjtBQUNBLGdCQUFJLGlCQUFpQixTQUFyQjs7QUFFQSxnQkFBSTtBQUNFLHVCQUFLLElBQUksWUFBWSxPQUFPLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBNkIsT0FBTyxRQUFwQyxHQUFoQixFQUFpRSxLQUF0RSxFQUE2RSxFQUFFLDRCQUE0QixDQUFDLFFBQVEsVUFBVSxJQUFWLEVBQVQsRUFBMkIsSUFBekQsQ0FBN0UsRUFBNkksNEJBQTRCLElBQXpLLEVBQStLO0FBQ3pLLDRCQUFJLE9BQU8sTUFBTSxLQUFqQjs7QUFFQSxzQ0FBYyxPQUFkLENBQXNCLEtBQUssSUFBM0IsRUFBaUMsT0FBTyxJQUFQLENBQVksUUFBN0MsRUFBdUQsSUFBdkQsRUFBNkQsT0FBN0Q7QUFDQSxrQ0FBVSxDQUFDLEdBQUcsZ0JBQWdCLE9BQXBCLEVBQTZCLE9BQTdCLEVBQXNDLEtBQUssWUFBTCxFQUF0QyxDQUFWO0FBQ0E7QUFDTDtBQUNOLGFBUkQsQ0FRRSxPQUFPLEdBQVAsRUFBWTtBQUNSLHNDQUFvQixJQUFwQjtBQUNBLG1DQUFpQixHQUFqQjtBQUNMLGFBWEQsU0FXVTtBQUNKLHNCQUFJO0FBQ0UsNEJBQUksQ0FBQyx5QkFBRCxJQUE4QixVQUFVLE1BQTVDLEVBQW9EO0FBQzlDLHdDQUFVLE1BQVY7QUFDTDtBQUNOLG1CQUpELFNBSVU7QUFDSiw0QkFBSSxpQkFBSixFQUF1QjtBQUNqQixvQ0FBTSxjQUFOO0FBQ0w7QUFDTjtBQUNOO0FBQ04sT0EvQkQ7O0FBaUNBLGFBQU8sSUFBUDtBQUNBLGFBQU8sTUFBUDtBQUNMLENBakREOztBQW1EQSxJQUFJLHNCQUFzQixRQUFRLHNCQUFSLENBQTFCOztBQUVBLElBQUksdUJBQXVCLHVCQUF1QixtQkFBdkIsQ0FBM0I7O0FBRUEsSUFBSSxlQUFlLFFBQVEsc0JBQVIsQ0FBbkI7O0FBRUEsSUFBSSxnQkFBZ0IsdUJBQXVCLFlBQXZCLENBQXBCOztBQUVBLElBQUksaUJBQWlCLFFBQVEsaUNBQVIsQ0FBckI7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsYUFBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ3pFL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3ZDLGFBQU87QUFEZ0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFL0IsT0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxnQkFBeEMsRUFBMEQsSUFBMUQ7QUFDQSxPQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELE1BQXhEOztBQUVBLFVBQUksT0FBTyxDQUFDLEdBQUcscUJBQXFCLE9BQXpCLEdBQVg7QUFDQSxXQUFLLEtBQUwsR0FBYSxRQUFRLGNBQVIsQ0FBdUIsS0FBcEM7QUFDQSxXQUFLLE1BQUwsR0FBYyxRQUFRLGNBQVIsQ0FBdUIsTUFBckM7QUFDQSxXQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXJCOztBQUVBLFdBQUssSUFBTCxHQUFZLFlBQVk7QUFDbEIsaUJBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsS0FBbkI7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLEtBQWxDLEVBQXlDLFFBQXpDLENBQWtELENBQWxELEVBQXFELENBQXJELEVBQXdELEtBQUssS0FBTCxHQUFhLEtBQUssS0FBMUUsRUFBaUYsS0FBSyxNQUFMLEdBQWMsS0FBSyxLQUFwRztBQUNMLE9BSEQ7O0FBS0EsV0FBSyxJQUFMO0FBQ0EsYUFBTyxJQUFQO0FBQ0wsQ0FqQkQ7O0FBbUJBLElBQUksc0JBQXNCLFFBQVEsc0JBQVIsQ0FBMUI7O0FBRUEsSUFBSSx1QkFBdUIsdUJBQXVCLG1CQUF2QixDQUEzQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLG1DQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLGFBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNqQy9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN2QyxhQUFPO0FBRGdDLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRS9CLE9BQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsYUFBeEMsRUFBdUQsSUFBdkQ7QUFDQSxPQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELE1BQXhEOztBQUVBLFVBQUksU0FBUyxDQUFDLEdBQUcscUJBQXFCLE9BQXpCLEdBQWI7QUFDQSxhQUFPLFdBQVAsR0FBcUIsUUFBUSxXQUE3QjtBQUNBLGFBQU8sS0FBUCxHQUFlLFFBQVEsS0FBdkI7O0FBRUEsYUFBTyxJQUFQLEdBQWMsWUFBWTtBQUNwQixtQkFBTyxJQUFQLENBQVksUUFBWixDQUFxQixLQUFyQjtBQUNBLG1CQUFPLElBQVAsQ0FBWSxRQUFaLENBQXFCLFNBQXJCLENBQStCLE9BQU8sS0FBdEMsRUFBNkMsUUFBN0MsQ0FBc0QsQ0FBdEQsRUFBeUQsQ0FBekQsRUFBNEQsT0FBTyxXQUFQLENBQW1CLFVBQW5CLEdBQWdDLE9BQU8sS0FBbkcsRUFBMEcsT0FBTyxXQUFQLENBQW1CLFVBQW5CLEdBQWdDLE9BQU8sS0FBako7QUFDTCxPQUhEOztBQUtBLGFBQU8sSUFBUDtBQUNBLGFBQU8sTUFBUDtBQUNMLENBaEJEOztBQWtCQSxJQUFJLHNCQUFzQixRQUFRLHNCQUFSLENBQTFCOztBQUVBLElBQUksdUJBQXVCLHVCQUF1QixtQkFBdkIsQ0FBM0I7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxtQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxhQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDaEMvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDdkMsYUFBTztBQURnQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUUvQixPQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELElBQWxEOztBQUVBOztBQUVBLFVBQUksUUFBUTtBQUNOLGtCQUFNLElBQUksU0FBUyxNQUFiLENBQW9CLFFBQVEsTUFBNUIsQ0FEQTtBQUVOLG1CQUFPO0FBRkQsT0FBWjs7QUFLQSxZQUFNLElBQU4sR0FBYSxZQUFZO0FBQ25CLGtCQUFNLElBQU4sQ0FBVyxNQUFYLEdBQW9CLE1BQU0sS0FBMUI7QUFDQSxrQkFBTSxJQUFOLENBQVcsTUFBWCxHQUFvQixNQUFNLEtBQTFCO0FBQ0wsT0FIRDs7QUFLQSxZQUFNLElBQU4sR0FBYSxZQUFZO0FBQ25CLG9CQUFRLE1BQVIsQ0FBZSxJQUFmO0FBQ0wsT0FGRDs7QUFJQSxZQUFNLElBQU4sR0FBYSxZQUFZO0FBQ25CLG9CQUFRLE1BQVIsQ0FBZSxLQUFmO0FBQ0Esb0JBQVEsTUFBUixDQUFlLFdBQWYsR0FBNkIsQ0FBN0I7QUFDTCxPQUhEOztBQUtBLFlBQU0sS0FBTixHQUFjLFlBQVk7QUFDcEIsb0JBQVEsTUFBUixDQUFlLEtBQWY7QUFDTCxPQUZEOztBQUlBLGVBQVMsaUJBQVQsR0FBNkI7QUFDdkIsZ0JBQUksT0FBTyxRQUFRLE1BQWYsS0FBMEIsUUFBOUIsRUFBd0M7QUFDbEMsc0JBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLHlCQUFPLFlBQVAsQ0FBb0IsS0FBcEIsRUFBMkIsUUFBUSxNQUFuQztBQUNBLHNCQUFJLGVBQWUsU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBQ0EsK0JBQWEsV0FBYixDQUF5QixNQUF6QjtBQUNBLDBCQUFRLE1BQVIsR0FBaUIsWUFBakI7QUFDTDtBQUNOOztBQUVELFlBQU0sSUFBTjtBQUNBLGFBQU8sS0FBUDtBQUNMLENBekNEOztBQTJDQSxJQUFJLG1CQUFtQixRQUFRLG1DQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLGFBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNyRC9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN6QyxXQUFPO0FBRGtDLENBQTdDOztBQUlBLElBQUksYUFBYSxRQUFRLHdCQUFSLENBQWpCOztBQUVBLElBQUksY0FBYyx1QkFBdUIsVUFBdkIsQ0FBbEI7O0FBRUEsSUFBSSxVQUFVLFFBQVEscUJBQVIsQ0FBZDs7QUFFQSxJQUFJLFdBQVcsdUJBQXVCLE9BQXZCLENBQWY7O0FBRUEsSUFBSSxVQUFVLFFBQVEscUJBQVIsQ0FBZDs7QUFFQSxJQUFJLFdBQVcsdUJBQXVCLE9BQXZCLENBQWY7O0FBRUEsSUFBSSxhQUFhLFFBQVEsd0JBQVIsQ0FBakI7O0FBRUEsSUFBSSxjQUFjLHVCQUF1QixVQUF2QixDQUFsQjs7QUFFQSxJQUFJLGtCQUFrQixRQUFRLDZCQUFSLENBQXRCOztBQUVBLElBQUksbUJBQW1CLHVCQUF1QixlQUF2QixDQUF2Qjs7QUFFQSxJQUFJLFFBQVEsUUFBUSxtQkFBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLDRCQUFSLENBQXJCOztBQUVBLElBQUksa0JBQWtCLHVCQUF1QixjQUF2QixDQUF0Qjs7QUFFQSxJQUFJLFNBQVMsUUFBUSxvQkFBUixDQUFiOztBQUVBLElBQUksVUFBVSx1QkFBdUIsTUFBdkIsQ0FBZDs7QUFFQSxJQUFJLFNBQVMsUUFBUSxvQkFBUixDQUFiOztBQUVBLElBQUksVUFBVSx1QkFBdUIsTUFBdkIsQ0FBZDs7QUFFQSxJQUFJLFFBQVEsUUFBUSxtQkFBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsUUFBUSxPQUFSLEdBQWtCO0FBQ2QsZUFBVyxZQUFZLE9BRFQ7QUFFZCxZQUFRLFNBQVMsT0FGSDtBQUdkLFlBQVEsU0FBUyxPQUhIO0FBSWQsZUFBVyxZQUFZLE9BSlQ7QUFLZCxVQUFNLE9BQU8sT0FMQztBQU1kLGtCQUFjLGdCQUFnQixPQU5oQjtBQU9kLG1CQUFlLGlCQUFpQixPQVBsQjtBQVFkLFdBQU8sUUFBUSxPQVJEO0FBU2QsV0FBTyxRQUFRLE9BVEQ7QUFVZCxVQUFNLE9BQU87QUFWQyxDQUFsQjs7OztBQ2hEQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDekMsV0FBTztBQURrQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsWUFBWTtBQUMxQixRQUFJLFNBQVMsRUFBYjs7QUFFQSxXQUFPLElBQVAsR0FBYyxVQUFVLE9BQVYsQ0FBa0IsU0FBbEIsRUFBZDs7O0FBR0EsYUFBUyxLQUFULEdBQWlCO0FBQ2IsZUFBTyxPQUFQLENBQWUsWUFBZixDQUE0QixPQUFPLE1BQW5DO0FBQ0g7O0FBRUQsYUFBUyxJQUFULEdBQWdCO0FBQ1osZUFBTyxPQUFQLENBQWUsZUFBZixDQUErQixPQUFPLE1BQXRDO0FBQ0g7O0FBRUQsV0FBTyxLQUFQLEdBQWUsS0FBZjtBQUNBLFdBQU8sSUFBUCxHQUFjLElBQWQ7O0FBRUEsV0FBTyxNQUFQO0FBQ0gsQ0FsQkQ7O0FBb0JBLElBQUksUUFBUSxRQUFRLFNBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxXQUFXLFFBQVEsK0JBQVIsQ0FBZjs7QUFFQSxJQUFJLFlBQVksdUJBQXVCLFFBQXZCLENBQWhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDbEMvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDekMsV0FBTztBQURrQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2xDLFFBQUksZ0JBQWdCLENBQUMsR0FBRyxrQkFBa0IsT0FBdEIsR0FBcEI7O0FBRUEsa0JBQWMsUUFBZCxHQUF5QixXQUFXLFFBQVgsR0FBc0IsRUFBL0M7O0FBRUEsa0JBQWMsR0FBZCxHQUFvQixVQUFVLEtBQVYsRUFBaUI7QUFDakMsc0JBQWMsUUFBZCxDQUF1QixJQUF2QixDQUE0QixLQUE1QjtBQUNBLHNCQUFjLE9BQWQ7QUFDSCxLQUhEOztBQUtBLGtCQUFjLE1BQWQsR0FBdUIsVUFBVSxLQUFWLEVBQWlCO0FBQ3BDLHNCQUFjLFFBQWQsQ0FBdUIsTUFBdkIsQ0FBOEIsY0FBYyxRQUFkLENBQXVCLE9BQXZCLENBQStCLEtBQS9CLENBQTlCLEVBQXFFLENBQXJFO0FBQ0Esc0JBQWMsT0FBZDtBQUNILEtBSEQ7O0FBS0EsV0FBTyxhQUFQO0FBQ0gsQ0FoQkQ7O0FBa0JBLElBQUksbUJBQW1CLFFBQVEsb0JBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzVCL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFakMsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxFQUFvRCxJQUFwRDtBQUNBLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsS0FBakQsRUFBd0QsS0FBeEQ7QUFDQSxLQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELEtBQWxELEVBQXlELEtBQXpEOztBQUVBLFFBQUksY0FBYyxDQUFDLEdBQUcsaUJBQWlCLE9BQXJCLEVBQThCLFFBQVEsUUFBdEMsQ0FBbEI7QUFDQSxnQkFBWSxLQUFaLEdBQW9CLFFBQVEsS0FBNUI7QUFDQSxnQkFBWSxNQUFaLEdBQXFCLFFBQVEsTUFBN0I7O0FBRUEsZ0JBQVksT0FBWixHQUFzQixZQUFZO0FBQzlCLG9CQUFZLElBQVosQ0FBaUIsaUJBQWpCO0FBQ0EsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFlBQVksUUFBWixDQUFxQixNQUF6QyxFQUFpRCxHQUFqRCxFQUFzRDtBQUNsRCxnQkFBSSxZQUFZLFVBQVUsT0FBVixDQUFrQixTQUFsQixFQUFoQjtBQUNBLHNCQUFVLFFBQVYsQ0FBbUIsWUFBWSxRQUFaLENBQXFCLENBQXJCLEVBQXdCLElBQTNDOztBQUVBLGdCQUFJLFlBQVksS0FBaEIsRUFBdUI7QUFDbkIsMEJBQVUsQ0FBVixHQUFjLFVBQVUsQ0FBVixHQUFjLENBQUMsSUFBSSxDQUFMLElBQVUsWUFBWSxLQUF0QixJQUErQixZQUFZLFFBQVosQ0FBcUIsTUFBckIsR0FBOEIsQ0FBN0QsQ0FBNUI7QUFDSDs7QUFFRCxnQkFBSSxZQUFZLE1BQWhCLEVBQXdCO0FBQ3BCLDBCQUFVLENBQVYsR0FBYyxVQUFVLENBQVYsR0FBYyxDQUFDLElBQUksQ0FBTCxJQUFVLFlBQVksTUFBdEIsSUFBZ0MsWUFBWSxRQUFaLENBQXFCLE1BQXJCLEdBQThCLENBQTlELENBQTVCO0FBQ0g7O0FBRUQsd0JBQVksSUFBWixDQUFpQixRQUFqQixDQUEwQixTQUExQjtBQUNIO0FBQ0osS0FoQkQ7O0FBa0JBLGdCQUFZLE9BQVo7QUFDQSxXQUFPLFdBQVA7QUFDSCxDQTlCRDs7QUFnQ0EsSUFBSSxrQkFBa0IsUUFBUSxrQkFBUixDQUF0Qjs7QUFFQSxJQUFJLG1CQUFtQix1QkFBdUIsZUFBdkIsQ0FBdkI7O0FBRUEsSUFBSSxXQUFXLFFBQVEsa0NBQVIsQ0FBZjs7QUFFQSxJQUFJLFlBQVksdUJBQXVCLFFBQXZCLENBQWhCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ2xEL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFakMsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxFQUFvRCxJQUFwRDtBQUNBLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsUUFBeEMsRUFBa0QsS0FBbEQsRUFBeUQsRUFBekQ7QUFDQSxRQUFJLGNBQWMsQ0FBQyxHQUFHLGlCQUFpQixPQUFyQixFQUE4QixRQUFRLFFBQXRDLENBQWxCO0FBQ0EsZ0JBQVksTUFBWixHQUFxQixRQUFRLE1BQTdCOztBQUVBLFFBQUksUUFBUSxNQUFNLFlBQVksUUFBWixDQUFxQixNQUF2QztBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxZQUFZLFFBQVosQ0FBcUIsTUFBekMsRUFBaUQsR0FBakQsRUFBc0Q7QUFDbEQsWUFBSSxZQUFZLFVBQVUsT0FBVixDQUFrQixTQUFsQixFQUFoQjtBQUNBLFlBQUksaUJBQWlCLFVBQVUsT0FBVixDQUFrQixTQUFsQixFQUFyQjtBQUNBLGtCQUFVLFFBQVYsR0FBcUIsUUFBUSxDQUE3QjtBQUNBLHVCQUFlLENBQWYsR0FBbUIsQ0FBQyxZQUFZLE1BQWhDO0FBQ0EsdUJBQWUsUUFBZixDQUF3QixZQUFZLFFBQVosQ0FBcUIsQ0FBckIsRUFBd0IsSUFBaEQ7QUFDQSxrQkFBVSxRQUFWLENBQW1CLGNBQW5CO0FBQ0Esb0JBQVksSUFBWixDQUFpQixRQUFqQixDQUEwQixTQUExQjtBQUNIOztBQUVELFdBQU8sV0FBUDtBQUNILENBbkJEOztBQXFCQSxJQUFJLGtCQUFrQixRQUFRLGtCQUFSLENBQXRCOztBQUVBLElBQUksbUJBQW1CLHVCQUF1QixlQUF2QixDQUF2Qjs7QUFFQSxJQUFJLFdBQVcsUUFBUSxrQ0FBUixDQUFmOztBQUVBLElBQUksWUFBWSx1QkFBdUIsUUFBdkIsQ0FBaEI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxXQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDdkMvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLG1CQUFtQixRQUFRLG1CQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSwwQkFBMEIsUUFBUSwwQkFBUixDQUE5Qjs7QUFFQSxJQUFJLDJCQUEyQix1QkFBdUIsdUJBQXZCLENBQS9COztBQUVBLElBQUksZ0JBQWdCLFFBQVEsZ0JBQVIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsdUJBQXVCLGFBQXZCLENBQXJCOztBQUVBLElBQUksdUJBQXVCLFFBQVEsdUJBQVIsQ0FBM0I7O0FBRUEsSUFBSSx3QkFBd0IsdUJBQXVCLG9CQUF2QixDQUE1Qjs7QUFFQSxJQUFJLHVCQUF1QixRQUFRLHVCQUFSLENBQTNCOztBQUVBLElBQUksd0JBQXdCLHVCQUF1QixvQkFBdkIsQ0FBNUI7O0FBRUEsSUFBSSxnQkFBZ0IsUUFBUSxnQkFBUixDQUFwQjs7QUFFQSxJQUFJLGlCQUFpQix1QkFBdUIsYUFBdkIsQ0FBckI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFFBQVEsT0FBUixHQUFrQjtBQUNoQixrQkFBZ0Isa0JBQWtCLE9BRGxCO0FBRWhCLHdCQUFzQix5QkFBeUIsT0FGL0I7QUFHaEIsZUFBYSxlQUFlLE9BSFo7QUFJaEIscUJBQW1CLHNCQUFzQixPQUp6QjtBQUtoQixxQkFBbUIsc0JBQXNCLE9BTHpCO0FBTWhCLGVBQWEsZUFBZTtBQU5aLENBQWxCOzs7O0FDaENBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN6QyxXQUFPO0FBRGtDLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRWpDLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsRUFBb0QsSUFBcEQ7QUFDQSxLQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELEtBQWxELEVBQXlELEVBQXpEO0FBQ0EsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxhQUF4QyxFQUF1RCxLQUF2RCxFQUE4RCxFQUE5RDtBQUNBLFFBQUksY0FBYyxDQUFDLEdBQUcsaUJBQWlCLE9BQXJCLEVBQThCLFFBQVEsUUFBdEMsQ0FBbEI7QUFDQSxnQkFBWSxNQUFaLEdBQXFCLFFBQVEsTUFBN0I7QUFDQSxnQkFBWSxXQUFaLEdBQTBCLFFBQVEsV0FBbEM7O0FBRUEsUUFBSSxRQUFRLE1BQU0sWUFBWSxRQUFaLENBQXFCLE1BQXZDO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFlBQVksUUFBWixDQUFxQixNQUF6QyxFQUFpRCxHQUFqRCxFQUFzRDtBQUNsRCxZQUFJLFlBQVksVUFBVSxPQUFWLENBQWtCLFNBQWxCLEVBQWhCO0FBQ0EsWUFBSSxpQkFBaUIsVUFBVSxPQUFWLENBQWtCLFNBQWxCLEVBQXJCO0FBQ0Esa0JBQVUsUUFBVixHQUFxQixRQUFRLENBQTdCO0FBQ0EsdUJBQWUsQ0FBZixHQUFtQixDQUFDLFlBQVksTUFBYixHQUFzQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsWUFBWSxXQUE1QixHQUEwQyxZQUFZLFdBQVosR0FBMEIsR0FBL0UsQ0FBekM7QUFDQSx1QkFBZSxRQUFmLENBQXdCLFlBQVksUUFBWixDQUFxQixDQUFyQixFQUF3QixJQUFoRDtBQUNBLGtCQUFVLFFBQVYsQ0FBbUIsY0FBbkI7QUFDQSxvQkFBWSxJQUFaLENBQWlCLFFBQWpCLENBQTBCLFNBQTFCO0FBQ0g7O0FBRUQsV0FBTyxXQUFQO0FBQ0gsQ0FyQkQ7O0FBdUJBLElBQUksV0FBVyxRQUFRLGtDQUFSLENBQWY7O0FBRUEsSUFBSSxZQUFZLHVCQUF1QixRQUF2QixDQUFoQjs7QUFFQSxJQUFJLGtCQUFrQixRQUFRLGtCQUFSLENBQXRCOztBQUVBLElBQUksbUJBQW1CLHVCQUF1QixlQUF2QixDQUF2Qjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUN6Qy9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN6QyxXQUFPO0FBRGtDLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRWpDLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsRUFBb0QsSUFBcEQ7QUFDQSxLQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELEVBQXhEO0FBQ0EsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxRQUF4QyxFQUFrRCxLQUFsRCxFQUF5RCxFQUF6RDs7QUFFQSxRQUFJLGlCQUFpQixDQUFDLEdBQUcsaUJBQWlCLE9BQXJCLEVBQThCLFFBQVEsUUFBdEMsQ0FBckI7QUFDQSxtQkFBZSxLQUFmLEdBQXVCLFFBQVEsS0FBL0I7QUFDQSxtQkFBZSxNQUFmLEdBQXdCLFFBQVEsTUFBaEM7O0FBRUEsbUJBQWUsT0FBZixHQUF5QixZQUFZO0FBQ2pDLHVCQUFlLElBQWYsQ0FBb0IsaUJBQXBCO0FBQ0EsYUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGVBQWUsUUFBZixDQUF3QixNQUE1QyxFQUFvRCxHQUFwRCxFQUF5RDtBQUNyRCxnQkFBSSxZQUFZLFVBQVUsT0FBVixDQUFrQixTQUFsQixFQUFoQjtBQUNBLHNCQUFVLFFBQVYsQ0FBbUIsZUFBZSxRQUFmLENBQXdCLENBQXhCLEVBQTJCLElBQTlDO0FBQ0Esc0JBQVUsQ0FBVixHQUFjLEtBQUssS0FBTCxDQUFXLGVBQWUsS0FBZixHQUF1QixLQUFLLE1BQUwsRUFBbEMsQ0FBZDtBQUNBLHNCQUFVLENBQVYsR0FBYyxLQUFLLEtBQUwsQ0FBVyxlQUFlLE1BQWYsR0FBd0IsS0FBSyxNQUFMLEVBQW5DLENBQWQ7QUFDQSwyQkFBZSxJQUFmLENBQW9CLFFBQXBCLENBQTZCLFNBQTdCO0FBQ0g7QUFDSixLQVREOztBQVdBLG1CQUFlLE9BQWY7QUFDQSxXQUFPLGNBQVA7QUFDSCxDQXZCRDs7QUF5QkEsSUFBSSxXQUFXLFFBQVEsa0NBQVIsQ0FBZjs7QUFFQSxJQUFJLFlBQVksdUJBQXVCLFFBQXZCLENBQWhCOztBQUVBLElBQUksa0JBQWtCLFFBQVEsa0JBQVIsQ0FBdEI7O0FBRUEsSUFBSSxtQkFBbUIsdUJBQXVCLGVBQXZCLENBQXZCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzNDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFakMsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxFQUFvRCxJQUFwRDtBQUNBLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsS0FBbkQsRUFBMEQsQ0FBMUQ7QUFDQSxLQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFNBQXhDLEVBQW1ELEtBQW5ELEVBQTBELEVBQTFEOztBQUVBLFFBQUksaUJBQWlCLENBQUMsR0FBRyxpQkFBaUIsT0FBckIsRUFBOEIsUUFBUSxRQUF0QyxDQUFyQjs7QUFFQSxtQkFBZSxPQUFmLEdBQXlCLFFBQVEsT0FBakM7QUFDQSxtQkFBZSxPQUFmLEdBQXlCLFFBQVEsT0FBakM7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGVBQWUsUUFBZixDQUF3QixNQUE1QyxFQUFvRCxHQUFwRCxFQUF5RDtBQUNyRCxZQUFJLFlBQVksVUFBVSxPQUFWLENBQWtCLFNBQWxCLEVBQWhCO0FBQ0Esa0JBQVUsUUFBVixDQUFtQixlQUFlLFFBQWYsQ0FBd0IsQ0FBeEIsRUFBMkIsSUFBOUM7QUFDQSxrQkFBVSxDQUFWLEdBQWMsSUFBSSxlQUFlLE9BQW5CLEdBQTZCLGVBQWUsT0FBMUQ7QUFDQSxrQkFBVSxDQUFWLEdBQWMsS0FBSyxLQUFMLENBQVcsSUFBSSxlQUFlLE9BQTlCLElBQXlDLGVBQWUsT0FBdEU7QUFDQSx1QkFBZSxJQUFmLENBQW9CLFFBQXBCLENBQTZCLFNBQTdCO0FBQ0g7O0FBRUQsV0FBTyxjQUFQO0FBQ0gsQ0FwQkQ7O0FBc0JBLElBQUksa0JBQWtCLFFBQVEsa0JBQVIsQ0FBdEI7O0FBRUEsSUFBSSxtQkFBbUIsdUJBQXVCLGVBQXZCLENBQXZCOztBQUVBLElBQUksV0FBVyxRQUFRLGtDQUFSLENBQWY7O0FBRUEsSUFBSSxZQUFZLHVCQUF1QixRQUF2QixDQUFoQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUN4Qy9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRW5DLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsRUFBb0QsSUFBcEQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLGFBQXhDLEVBQXVELEtBQXZELEVBQThELEVBQTlEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxXQUF4QyxFQUFxRCxLQUFyRCxFQUE0RCxDQUE1RDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsUUFBeEMsRUFBa0QsS0FBbEQsRUFBeUQsQ0FBekQ7O0FBRUEsTUFBSSxvQkFBb0IsQ0FBQyxHQUFHLGlCQUFpQixPQUFyQixFQUE4QixRQUFRLFFBQXRDLENBQXhCO0FBQ0Esb0JBQWtCLFdBQWxCLEdBQWdDLFFBQVEsV0FBeEM7QUFDQSxvQkFBa0IsU0FBbEIsR0FBOEIsUUFBUSxTQUF0QztBQUNBLG9CQUFrQixNQUFsQixHQUEyQixRQUFRLE1BQW5DOztBQUVBLE1BQUksUUFBUSxNQUFNLGtCQUFrQixNQUF4QixHQUFpQyxrQkFBa0IsUUFBbEIsQ0FBMkIsTUFBeEU7QUFDQSxNQUFJLHVCQUF1QixDQUFDLGtCQUFrQixTQUFsQixHQUE4QixrQkFBa0IsV0FBakQsSUFBZ0Usa0JBQWtCLFFBQWxCLENBQTJCLE1BQXRIO0FBQ0EsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGtCQUFrQixRQUFsQixDQUEyQixNQUEvQyxFQUF1RCxHQUF2RCxFQUE0RDtBQUMxRCxRQUFJLFlBQVksVUFBVSxPQUFWLENBQWtCLFNBQWxCLEVBQWhCO0FBQ0EsUUFBSSxpQkFBaUIsVUFBVSxPQUFWLENBQWtCLFNBQWxCLEVBQXJCO0FBQ0EsY0FBVSxRQUFWLEdBQXFCLFFBQVEsQ0FBN0I7QUFDQSxtQkFBZSxDQUFmLEdBQW1CLEVBQUUsa0JBQWtCLFdBQWxCLEdBQWdDLHVCQUF1QixDQUF6RCxDQUFuQjtBQUNBLG1CQUFlLFFBQWYsQ0FBd0Isa0JBQWtCLFFBQWxCLENBQTJCLENBQTNCLEVBQThCLElBQXREO0FBQ0EsY0FBVSxRQUFWLENBQW1CLGNBQW5CO0FBQ0Esc0JBQWtCLElBQWxCLENBQXVCLFFBQXZCLENBQWdDLFNBQWhDO0FBQ0Q7O0FBRUQsU0FBTyxpQkFBUDtBQUNELENBekJEOztBQTJCQSxJQUFJLFdBQVcsUUFBUSxrQ0FBUixDQUFmOztBQUVBLElBQUksWUFBWSx1QkFBdUIsUUFBdkIsQ0FBaEI7O0FBRUEsSUFBSSxrQkFBa0IsUUFBUSxrQkFBUixDQUF0Qjs7QUFFQSxJQUFJLG1CQUFtQix1QkFBdUIsZUFBdkIsQ0FBdkI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDN0MvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELElBQWpEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxNQUF4QyxFQUFnRCxJQUFoRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsY0FBeEMsRUFBd0QsS0FBeEQsRUFBK0QsQ0FBL0Q7O0FBRUEsTUFBSSxZQUFZLENBQUMsR0FBRyxrQkFBa0IsT0FBdEIsR0FBaEI7QUFDQSxZQUFVLGVBQVYsR0FBNEIsQ0FBNUI7QUFDQSxZQUFVLFlBQVYsR0FBeUIsUUFBUSxZQUFqQztBQUNBLFlBQVUsSUFBVixHQUFpQixRQUFRLElBQXpCOztBQUVBLFlBQVUsSUFBVixDQUFlLFFBQWYsQ0FBd0IsUUFBUSxLQUFSLENBQWMsSUFBdEM7O0FBRUEsWUFBVSxNQUFWLEdBQW1CLFVBQVUsS0FBVixFQUFpQjtBQUNsQyxjQUFVLGVBQVYsSUFBNkIsVUFBVSxZQUFWLElBQTBCLE1BQU0sS0FBTixHQUFjLElBQXhDLENBQTdCO0FBQ0EsUUFBSSxVQUFVLGVBQVYsR0FBNEIsQ0FBaEMsRUFBbUM7QUFDakMsZ0JBQVUsZUFBVixJQUE2QixDQUE3QjtBQUNEO0FBQ0QsUUFBSSxRQUFRLFVBQVUsSUFBVixDQUFlLFFBQWYsQ0FBd0IsVUFBVSxlQUFsQyxDQUFaO0FBQ0EsY0FBVSxJQUFWLENBQWUsQ0FBZixHQUFtQixNQUFNLENBQXpCO0FBQ0EsY0FBVSxJQUFWLENBQWUsQ0FBZixHQUFtQixNQUFNLENBQXpCO0FBQ0QsR0FSRDs7QUFVQSxTQUFPLFNBQVA7QUFDRCxDQXhCRDs7QUEwQkEsSUFBSSxtQkFBbUIsUUFBUSx1QkFBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ3hDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsS0FBVixFQUFpQixLQUFqQixFQUF3QjtBQUN4QyxNQUFJLFdBQVcsQ0FBQyxHQUFHLGtCQUFrQixPQUF0QixHQUFmO0FBQ0EsV0FBUyxJQUFULENBQWMsUUFBZCxDQUF1QixNQUFNLElBQTdCOzs7QUFHQSxXQUFTLFNBQVQsR0FBcUIsRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBckI7QUFDQSxXQUFTLEtBQVQsR0FBaUIsUUFBUSxLQUFSLEdBQWdCLENBQWpDO0FBQ0EsV0FBUyxRQUFULEdBQW9CLENBQXBCO0FBQ0EsV0FBUyxRQUFULEdBQW9CLElBQXBCO0FBQ0EsV0FBUyxXQUFULEdBQXVCLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQXZCOzs7Ozs7O0FBT0EsV0FBUyx5QkFBVCxHQUFxQztBQUNuQyxRQUFJLFNBQVMsU0FBVCxDQUFtQixDQUFuQixHQUF1QixTQUFTLElBQVQsQ0FBYyxDQUFyQyxJQUEwQyxDQUE5QyxFQUFpRDtBQUMvQyxlQUFTLFdBQVQsQ0FBcUIsQ0FBckIsR0FBeUIsQ0FBekI7QUFDRCxLQUZELE1BRU87QUFDTCxlQUFTLFdBQVQsQ0FBcUIsQ0FBckIsR0FBeUIsQ0FBQyxDQUExQjtBQUNEOztBQUVELFFBQUksU0FBUyxTQUFULENBQW1CLENBQW5CLEdBQXVCLFNBQVMsSUFBVCxDQUFjLENBQXJDLElBQTBDLENBQTlDLEVBQWlEO0FBQy9DLGVBQVMsV0FBVCxDQUFxQixDQUFyQixHQUF5QixDQUF6QjtBQUNELEtBRkQsTUFFTztBQUNMLGVBQVMsV0FBVCxDQUFxQixDQUFyQixHQUF5QixDQUFDLENBQTFCO0FBQ0Q7QUFDRjs7O0FBR0QsV0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLGFBQVMsUUFBVCxJQUFxQixNQUFNLEtBQU4sR0FBYyxJQUFkLEdBQXFCLFNBQVMsSUFBbkQ7O0FBRUEsUUFBSSxTQUFTLFFBQVQsSUFBcUIsQ0FBekIsRUFBNEI7QUFDMUIsZUFBUyxVQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsZUFBUyxRQUFULEdBQW9CLElBQXBCO0FBQ0EsZUFBUyxJQUFULENBQWMsQ0FBZCxHQUFrQixTQUFTLFNBQVQsQ0FBbUIsQ0FBckM7QUFDQSxlQUFTLElBQVQsQ0FBYyxDQUFkLEdBQWtCLFNBQVMsU0FBVCxDQUFtQixDQUFyQztBQUNBLGVBQVMsV0FBVCxDQUFxQixDQUFyQixHQUF5QixDQUF6QjtBQUNBLGVBQVMsV0FBVCxDQUFxQixDQUFyQixHQUF5QixDQUF6QjtBQUNBLFVBQUksU0FBUyxRQUFiLEVBQXVCO0FBQ3JCLGlCQUFTLFFBQVQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBUyxNQUFULENBQWdCLFNBQWhCLEVBQTJCLFFBQTNCLEVBQXFDO0FBQ25DLGFBQVMsU0FBVCxHQUFxQixDQUFDLEdBQUcsWUFBWSxPQUFoQixFQUF5QixDQUFDLFVBQVUsQ0FBVixHQUFjLFNBQVMsSUFBVCxDQUFjLENBQTdCLEVBQWdDLFVBQVUsQ0FBVixHQUFjLFNBQVMsSUFBVCxDQUFjLENBQTVELENBQXpCLENBQXJCO0FBQ0EsYUFBUyxVQUFULEdBQXNCLEVBQUUsR0FBRyxTQUFTLElBQVQsQ0FBYyxDQUFuQixFQUFzQixHQUFHLFNBQVMsSUFBVCxDQUFjLENBQXZDLEVBQXRCO0FBQ0EsYUFBUyxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsYUFBUyxRQUFULEdBQW9CLENBQUMsR0FBRyxXQUFXLE9BQWYsRUFBd0IsQ0FBQyxHQUFHLFlBQVksT0FBaEIsRUFBeUIsU0FBUyxVQUFsQyxDQUF4QixFQUF1RSxDQUFDLEdBQUcsWUFBWSxPQUFoQixFQUF5QixTQUFTLFNBQWxDLENBQXZFLENBQXBCO0FBQ0EsYUFBUyxJQUFULEdBQWdCLFNBQVMsS0FBVCxHQUFpQixTQUFTLFFBQTFDO0FBQ0EsYUFBUyxRQUFULEdBQW9CLFFBQXBCO0FBQ0EsYUFBUyxRQUFULEdBQW9CLEtBQXBCO0FBQ0E7QUFDRDs7QUFFRCxXQUFTLElBQVQsQ0FBYyxTQUFkLEVBQXlCO0FBQ3ZCLGFBQVMsUUFBVCxHQUFvQixLQUFwQjtBQUNBLGFBQVMsU0FBVCxHQUFxQixJQUFyQjtBQUNBLGFBQVMsU0FBVCxHQUFxQixDQUFDLEdBQUcsWUFBWSxPQUFoQixFQUF5QixDQUFDLFVBQVUsQ0FBWCxFQUFjLFVBQVUsQ0FBeEIsQ0FBekIsQ0FBckI7QUFDRDs7QUFFRCxXQUFTLGNBQVQsR0FBMEI7QUFDeEIsUUFBSSxDQUFDLFNBQVMsU0FBZCxFQUF5QjtBQUN2QixhQUFPLEtBQVA7QUFDRDtBQUNELFFBQUksQ0FBQyxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsR0FBdUIsU0FBUyxJQUFULENBQWMsQ0FBdEMsSUFBMkMsU0FBUyxXQUFULENBQXFCLENBQWhFLEdBQW9FLENBQXhFLEVBQTJFO0FBQ3pFLGFBQU8sS0FBUDtBQUNEOztBQUVELFFBQUksQ0FBQyxTQUFTLFNBQVQsQ0FBbUIsQ0FBbkIsR0FBdUIsU0FBUyxJQUFULENBQWMsQ0FBdEMsSUFBMkMsU0FBUyxXQUFULENBQXFCLENBQWhFLEdBQW9FLENBQXhFLEVBQTJFO0FBQ3pFLGFBQU8sS0FBUDtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNEOztBQUVELFdBQVMsTUFBVCxHQUFrQixNQUFsQjtBQUNBLFdBQVMsTUFBVCxHQUFrQixNQUFsQjtBQUNBLFdBQVMsSUFBVCxHQUFnQixJQUFoQjtBQUNBLFdBQVMsY0FBVCxHQUEwQixjQUExQjtBQUNBLFNBQU8sUUFBUDtBQUNELENBckZEOztBQXVGQSxJQUFJLG1CQUFtQixRQUFRLHVCQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxhQUFhLFFBQVEsNkJBQVIsQ0FBakI7O0FBRUEsSUFBSSxjQUFjLHVCQUF1QixVQUF2QixDQUFsQjs7QUFFQSxJQUFJLFlBQVksUUFBUSw0QkFBUixDQUFoQjs7QUFFQSxJQUFJLGFBQWEsdUJBQXVCLFNBQXZCLENBQWpCOztBQUVBLElBQUksYUFBYSxRQUFRLDZCQUFSLENBQWpCOztBQUVBLElBQUksY0FBYyx1QkFBdUIsVUFBdkIsQ0FBbEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUM3Ry9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUN6QyxXQUFPO0FBRGtDLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRWpDLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsSUFBakQ7QUFDQSxLQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELENBQXhEO0FBQ0EsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxZQUF4QyxFQUFzRCxLQUF0RCxFQUE2RCxRQUE3RDs7QUFFQSxRQUFJLGlCQUFpQixDQUFDLEdBQUcsZ0JBQWdCLE9BQXBCLEVBQTZCLFFBQVEsS0FBckMsRUFBNEMsUUFBUSxLQUFwRCxDQUFyQjtBQUNBLG1CQUFlLFVBQWYsR0FBNEIsUUFBUSxVQUFwQzs7QUFFQSxRQUFJLGdCQUFnQixDQUFDLEdBQUcsU0FBUyxPQUFiLEdBQXBCOztBQUVBLG1CQUFlLFVBQWYsR0FBNEIsWUFBWTtBQUNwQyx1QkFBZSxJQUFmLENBQW9CLENBQXBCLEdBQXdCLGVBQWUsVUFBZixDQUEwQixDQUExQixHQUE4QixlQUFlLFFBQWYsR0FBMEIsZUFBZSxTQUFmLENBQXlCLENBQXpCLENBQTFCLEdBQXdELGNBQWMsVUFBZCxDQUF5QixlQUFlLFFBQXhDLEVBQWtELGVBQWUsVUFBakUsQ0FBOUc7QUFDQSx1QkFBZSxJQUFmLENBQW9CLENBQXBCLEdBQXdCLGVBQWUsVUFBZixDQUEwQixDQUExQixHQUE4QixlQUFlLFFBQWYsR0FBMEIsZUFBZSxTQUFmLENBQXlCLENBQXpCLENBQTFCLEdBQXdELGNBQWMsVUFBZCxDQUF5QixlQUFlLFFBQXhDLEVBQWtELGVBQWUsVUFBakUsQ0FBOUc7QUFDSCxLQUhEOztBQUtBLFdBQU8sY0FBUDtBQUNILENBakJEOztBQW1CQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQXJCOztBQUVBLElBQUksa0JBQWtCLHVCQUF1QixjQUF2QixDQUF0Qjs7QUFFQSxJQUFJLFVBQVUsUUFBUSw2QkFBUixDQUFkOztBQUVBLElBQUksV0FBVyx1QkFBdUIsT0FBdkIsQ0FBZjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLG1DQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFdBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNyQy9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7O0FBRW5DLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsSUFBakQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLGFBQXhDLEVBQXVELEtBQXZELEVBQThELENBQTlEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxLQUFqRCxFQUF3RCxDQUF4RDs7QUFFQSxNQUFJLGlCQUFpQixDQUFDLEdBQUcsZ0JBQWdCLE9BQXBCLEVBQTZCLFFBQVEsS0FBckMsRUFBNEMsUUFBUSxLQUFwRCxDQUFyQjtBQUNBLGlCQUFlLFdBQWYsR0FBNkIsUUFBUSxXQUFyQzs7QUFFQSxpQkFBZSxVQUFmLEdBQTRCLFlBQVk7QUFDdEMsUUFBSSxlQUFlLEtBQUssTUFBTCxLQUFnQixlQUFlLFdBQS9CLEdBQTZDLGVBQWUsV0FBZixHQUE2QixDQUE3RjtBQUNBLG1CQUFlLElBQWYsQ0FBb0IsQ0FBcEIsR0FBd0IsZUFBZSxVQUFmLENBQTBCLENBQTFCLEdBQThCLGVBQWUsUUFBZixHQUEwQixlQUFlLFNBQWYsQ0FBeUIsQ0FBekIsQ0FBMUIsR0FBd0QsZUFBZSxRQUFyRyxHQUFnSCxlQUFlLGVBQWUsU0FBZixDQUF5QixDQUF6QixDQUF2SjtBQUNBLG1CQUFlLElBQWYsQ0FBb0IsQ0FBcEIsR0FBd0IsZUFBZSxVQUFmLENBQTBCLENBQTFCLEdBQThCLGVBQWUsUUFBZixHQUEwQixlQUFlLFNBQWYsQ0FBeUIsQ0FBekIsQ0FBMUIsR0FBd0QsZUFBZSxRQUFyRyxHQUFnSCxlQUFlLGVBQWUsU0FBZixDQUF5QixDQUF6QixDQUF2SjtBQUNELEdBSkQ7O0FBTUEsU0FBTyxjQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBLElBQUksaUJBQWlCLFFBQVEsa0JBQVIsQ0FBckI7O0FBRUEsSUFBSSxrQkFBa0IsdUJBQXVCLGNBQXZCLENBQXRCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ2hDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFakMsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxJQUFqRDtBQUNBLEtBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsS0FBakQsRUFBd0QsSUFBeEQ7O0FBRUEsUUFBSSxRQUFRLENBQUMsR0FBRyxrQkFBa0IsT0FBdEIsR0FBWjtBQUNBLFVBQU0sS0FBTixHQUFjLFFBQVEsS0FBdEI7QUFDQSxVQUFNLE1BQU4sR0FBZSxDQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE1BQU0sS0FBckMsRUFBNEMsR0FBNUMsQ0FBZjs7QUFFQSxVQUFNLElBQU4sQ0FBVyxRQUFYLENBQW9CLFFBQVEsS0FBUixDQUFjLElBQWxDOztBQUVBLGFBQVMsTUFBVCxDQUFnQixPQUFoQixFQUF5QjtBQUNyQixjQUFNLElBQU4sQ0FBVyxLQUFYLEdBQW1CLE9BQW5CO0FBQ0g7O0FBRUQsVUFBTSxLQUFOLEdBQWMsWUFBWTtBQUN0QixjQUFNLE1BQU4sQ0FBYSxLQUFiLENBQW1CLE1BQW5CO0FBQ0gsS0FGRDs7QUFJQSxVQUFNLElBQU4sR0FBYSxZQUFZO0FBQ3JCLGNBQU0sTUFBTixDQUFhLElBQWI7QUFDSCxLQUZEOztBQUlBLFdBQU8sS0FBUDtBQUNILENBeEJEOztBQTBCQSxJQUFJLG1CQUFtQixRQUFRLG9CQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxtQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzVDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFakMsS0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxJQUFqRDs7QUFFQSxRQUFJLFVBQVUsQ0FBQyxHQUFHLGtCQUFrQixPQUF0QixHQUFkOztBQUVBLFlBQVEsSUFBUixDQUFhLFFBQWIsQ0FBc0IsUUFBUSxLQUFSLENBQWMsSUFBcEM7QUFDQSxZQUFRLE1BQVIsR0FBaUIsWUFBWTtBQUN6QixnQkFBUSxJQUFSLENBQWEsT0FBYixHQUF1QixLQUFLLE1BQUwsS0FBZ0IsR0FBdkM7QUFDSCxLQUZEOztBQUlBLFdBQU8sT0FBUDtBQUNILENBWkQ7O0FBY0EsSUFBSSxtQkFBbUIsUUFBUSxvQkFBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsV0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzVCL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxJQUFqRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsS0FBakQsRUFBd0QsQ0FBeEQ7QUFDQSxNQUFJLGdCQUFnQixDQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEdBQXBCO0FBQ0EsZ0JBQWMsS0FBZCxHQUFzQixRQUFRLEtBQTlCO0FBQ0EsZ0JBQWMsSUFBZCxDQUFtQixRQUFuQixDQUE0QixRQUFRLEtBQVIsQ0FBYyxJQUExQzs7QUFFQSxXQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUI7QUFDckIsa0JBQWMsSUFBZCxDQUFtQixRQUFuQixHQUE4QixjQUFjLElBQWQsQ0FBbUIsUUFBbkIsR0FBOEIsY0FBYyxLQUFkLElBQXVCLE1BQU0sS0FBTixHQUFjLElBQXJDLENBQTVEO0FBQ0Q7O0FBRUQsZ0JBQWMsTUFBZCxHQUF1QixNQUF2Qjs7QUFFQSxTQUFPLGFBQVA7QUFDRCxDQWZEOztBQWlCQSxJQUFJLG1CQUFtQixRQUFRLG9CQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDL0IvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCO0FBQzFDLE1BQUksUUFBUSxFQUFaO0FBQ0EsUUFBTSxDQUFOLEdBQVUsT0FBTyxDQUFQLEdBQVcsT0FBTyxDQUE1QjtBQUNBLFFBQU0sQ0FBTixHQUFVLE9BQU8sQ0FBUCxHQUFXLE9BQU8sQ0FBNUI7QUFDQSxTQUFPLEtBQVA7QUFDRCxDQUxEOzs7O0FDTkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QjtBQUM1QyxNQUFJLFFBQVEsTUFBUixLQUFtQixRQUFRLE1BQS9CLEVBQXVDO0FBQ3JDLFVBQU0sMkVBQU47QUFDRDtBQUNELE1BQUksV0FBVyxDQUFmO0FBQ0EsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsR0FBcEMsRUFBeUM7QUFDdkMsZ0JBQVksS0FBSyxHQUFMLENBQVMsUUFBUSxDQUFSLElBQWEsUUFBUSxDQUFSLENBQXRCLEVBQWtDLENBQWxDLENBQVo7QUFDRDtBQUNELFNBQU8sS0FBSyxJQUFMLENBQVUsUUFBVixDQUFQO0FBQ0QsQ0FURDs7OztBQ05BOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLEtBQVYsRUFBaUI7QUFDakMsU0FBTyxRQUFRLEtBQUssRUFBYixHQUFrQixHQUF6QjtBQUNELENBRkQ7Ozs7QUNOQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCO0FBQ3pDLE1BQUksTUFBTSxDQUFDLEdBQUcsbUJBQW1CLE9BQXZCLEVBQWdDLEtBQWhDLENBQVY7QUFDQSxTQUFPLEVBQUUsR0FBRyxLQUFLLEdBQUwsQ0FBUyxHQUFULElBQWdCLE1BQXJCLEVBQTZCLEdBQUcsS0FBSyxHQUFMLENBQVMsR0FBVCxJQUFnQixNQUFoRCxFQUFQO0FBQ0QsQ0FIRDs7QUFLQSxJQUFJLG9CQUFvQixRQUFRLG9CQUFSLENBQXhCOztBQUVBLElBQUkscUJBQXFCLHVCQUF1QixpQkFBdkIsQ0FBekI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNmL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLFdBQU87QUFEa0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsTUFBVixFQUFrQjtBQUNoQyxRQUFJLG1CQUFtQixFQUF2QjtBQUNBLFFBQUksWUFBWSxDQUFoQjtBQUNBLFFBQUksNEJBQTRCLElBQWhDO0FBQ0EsUUFBSSxvQkFBb0IsS0FBeEI7QUFDQSxRQUFJLGlCQUFpQixTQUFyQjs7QUFFQSxRQUFJO0FBQ0EsYUFBSyxJQUFJLFlBQVksT0FBTyxPQUFPLFFBQWQsR0FBaEIsRUFBMkMsS0FBaEQsRUFBdUQsRUFBRSw0QkFBNEIsQ0FBQyxRQUFRLFVBQVUsSUFBVixFQUFULEVBQTJCLElBQXpELENBQXZELEVBQXVILDRCQUE0QixJQUFuSixFQUF5SjtBQUNySixnQkFBSSxRQUFRLE1BQU0sS0FBbEI7O0FBRUEseUJBQWEsUUFBUSxLQUFyQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU8sR0FBUCxFQUFZO0FBQ1YsNEJBQW9CLElBQXBCO0FBQ0EseUJBQWlCLEdBQWpCO0FBQ0gsS0FURCxTQVNVO0FBQ04sWUFBSTtBQUNBLGdCQUFJLENBQUMseUJBQUQsSUFBOEIsVUFBVSxNQUE1QyxFQUFvRDtBQUNoRCwwQkFBVSxNQUFWO0FBQ0g7QUFDSixTQUpELFNBSVU7QUFDTixnQkFBSSxpQkFBSixFQUF1QjtBQUNuQixzQkFBTSxjQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUVELFFBQUksU0FBUyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQWI7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE9BQU8sTUFBM0IsRUFBbUMsR0FBbkMsRUFBd0M7QUFDcEMseUJBQWlCLENBQWpCLElBQXNCLE9BQU8sQ0FBUCxJQUFZLE1BQWxDO0FBQ0g7O0FBRUQsV0FBTyxnQkFBUDtBQUNILENBbkNEOzs7O0FDTkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7QUFHQSxRQUFRLE9BQVIsR0FBa0IsY0FBbEI7O0FBRUEsSUFBSSxvQkFBb0IsUUFBUSw0QkFBUixDQUF4Qjs7QUFFQSxJQUFJLHFCQUFxQix1QkFBdUIsaUJBQXZCLENBQXpCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsU0FBUyxjQUFULENBQXdCLE9BQXhCLEVBQWlDOztBQUUvQixHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQXhEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxJQUFuRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsUUFBeEMsRUFBa0QsSUFBbEQ7O0FBRUEsTUFBSSxNQUFNLEVBQVY7O0FBRUEsTUFBSSxLQUFKLEdBQVksUUFBUSxLQUFwQjtBQUNBLE1BQUksT0FBSixHQUFjLFFBQVEsT0FBdEI7QUFDQSxNQUFJLE1BQUosR0FBYSxRQUFRLE1BQXJCO0FBQ0EsTUFBSSxJQUFKLEdBQVcsS0FBWDs7QUFFQSxNQUFJLFlBQUosR0FBbUIsWUFBWTtBQUM3QixXQUFPLElBQUksUUFBSixDQUFhLENBQWIsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSSxTQUFKLEdBQWdCLFlBQVk7QUFDMUIsV0FBTyxJQUFJLEtBQUssRUFBVCxHQUFjLElBQUksTUFBbEIsSUFBNEIsSUFBSSxPQUFKLEdBQWMsR0FBMUMsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSSxRQUFKLEdBQWUsVUFBVSxRQUFWLEVBQW9CO0FBQ2pDLFFBQUksU0FBUyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsSUFBSSxLQUFKLENBQVUsQ0FBVixHQUFjLElBQUksTUFBN0IsRUFBYjtBQUNBLFFBQUksZ0JBQWdCLElBQUksT0FBSixHQUFjLFFBQWxDO0FBQ0EsV0FBTztBQUNMLFNBQUcsT0FBTyxDQUFQLEdBQVcsSUFBSSxNQUFKLEdBQWEsS0FBSyxHQUFMLENBQVMsQ0FBQyxHQUFHLG1CQUFtQixPQUF2QixFQUFnQyxhQUFoQyxDQUFULENBRHRCO0FBRUwsU0FBRyxPQUFPLENBQVAsR0FBVyxJQUFJLE1BQUosR0FBYSxDQUFDLEtBQUssR0FBTCxDQUFTLENBQUMsR0FBRyxtQkFBbUIsT0FBdkIsRUFBZ0MsYUFBaEMsQ0FBVDtBQUZ2QixLQUFQO0FBSUQsR0FQRDs7QUFTQSxNQUFJLFdBQUosR0FBa0IsVUFBVSxRQUFWLEVBQW9CO0FBQ3BDLFFBQUksZ0JBQWdCLElBQUksT0FBSixHQUFjLFFBQWxDO0FBQ0EsV0FBTyxlQUFlLEVBQUUsT0FBTyxJQUFJLEtBQWIsRUFBb0IsU0FBUyxhQUE3QixFQUE0QyxRQUFRLElBQUksTUFBeEQsRUFBZixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxTQUFPLEdBQVA7QUFDRDs7OztBQ3JERDs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELEtBQWpELEVBQXdELEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQXhEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxLQUF4QyxFQUErQyxJQUEvQztBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsSUFBbkQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFNBQXhDLEVBQW1ELEtBQW5EOztBQUVBLE1BQUksY0FBYyxFQUFsQjtBQUNBLGNBQVksS0FBWixHQUFvQixRQUFRLEtBQTVCO0FBQ0EsY0FBWSxHQUFaLEdBQWtCLFFBQVEsR0FBMUI7QUFDQSxjQUFZLE9BQVosR0FBc0IsUUFBUSxPQUE5QjtBQUNBLGNBQVksT0FBWixHQUFzQixRQUFRLE9BQTlCO0FBQ0EsY0FBWSxJQUFaLEdBQW1CLGNBQW5COztBQUVBLE1BQUksWUFBWSxPQUFoQixFQUF5QjtBQUN2QixnQkFBWSxjQUFaLEdBQTZCLElBQUksV0FBVyxPQUFmLENBQXVCLFlBQVksS0FBbkMsRUFBMEMsWUFBWSxPQUF0RCxFQUErRCxZQUFZLE9BQTNFLEVBQW9GLFlBQVksR0FBaEcsQ0FBN0I7QUFDRCxHQUZELE1BRU87QUFDTCxnQkFBWSxjQUFaLEdBQTZCLElBQUksV0FBVyxPQUFmLENBQXVCLFlBQVksS0FBbkMsRUFBMEMsWUFBWSxPQUF0RCxFQUErRCxZQUFZLEdBQTNFLENBQTdCO0FBQ0Q7O0FBRUQsY0FBWSxRQUFaLEdBQXVCLENBQUMsV0FBRCxDQUF2Qjs7QUFFQSxjQUFZLFlBQVosR0FBMkIsWUFBWTtBQUNyQyxXQUFPLFlBQVksR0FBbkI7QUFDRCxHQUZEOztBQUlBLGNBQVksU0FBWixHQUF3QixZQUFZO0FBQ2xDLFdBQU8sWUFBWSxjQUFaLENBQTJCLE1BQTNCLEVBQVA7QUFDRCxHQUZEOztBQUlBLGNBQVksUUFBWixHQUF1QixVQUFVLFFBQVYsRUFBb0I7QUFDekMsV0FBTyxZQUFZLGNBQVosQ0FBMkIsR0FBM0IsQ0FBK0IsUUFBL0IsQ0FBUDtBQUNELEdBRkQ7Ozs7QUFNQSxTQUFPLFdBQVA7QUFDRCxDQXJDRDs7QUF1Q0EsSUFBSSxZQUFZLFFBQVEsV0FBUixDQUFoQjs7QUFFQSxJQUFJLGFBQWEsdUJBQXVCLFNBQXZCLENBQWpCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsZ0NBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ3JEL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7QUFHQSxRQUFRLE9BQVIsR0FBa0IsZUFBbEI7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFqQjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksWUFBWSxRQUFRLGFBQVIsQ0FBaEI7O0FBRUEsSUFBSSxhQUFhLHVCQUF1QixTQUF2QixDQUFqQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFNBQVMsZUFBVCxDQUF5QixPQUF6QixFQUFrQzs7QUFFaEMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxLQUFqRCxFQUF3RCxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBWCxFQUF4RDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsS0FBeEMsRUFBK0MsSUFBL0M7O0FBRUEsTUFBSSxPQUFPLEVBQVg7QUFDQSxPQUFLLEtBQUwsR0FBYSxRQUFRLEtBQXJCO0FBQ0EsT0FBSyxHQUFMLEdBQVcsUUFBUSxHQUFuQjtBQUNBLE9BQUssSUFBTCxHQUFZLE1BQVo7O0FBRUEsT0FBSyxZQUFMLEdBQW9CLFlBQVk7QUFDOUIsV0FBTyxLQUFLLEdBQVo7QUFDRCxHQUZEOztBQUlBLE9BQUssU0FBTCxHQUFpQixZQUFZO0FBQzNCLFdBQU8sQ0FBQyxHQUFHLFdBQVcsT0FBZixFQUF3QixDQUFDLEdBQUcsWUFBWSxPQUFoQixFQUF5QixLQUFLLEtBQTlCLENBQXhCLEVBQThELENBQUMsR0FBRyxZQUFZLE9BQWhCLEVBQXlCLEtBQUssR0FBOUIsQ0FBOUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsT0FBSyxRQUFMLEdBQWdCLFVBQVUsUUFBVixFQUFvQjtBQUNsQyxXQUFPO0FBQ0wsU0FBRyxLQUFLLEtBQUwsQ0FBVyxDQUFYLEdBQWUsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxDQUFULEdBQWEsS0FBSyxLQUFMLENBQVcsQ0FBekIsSUFBOEIsUUFEM0M7QUFFTCxTQUFHLEtBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxDQUFDLEtBQUssR0FBTCxDQUFTLENBQVQsR0FBYSxLQUFLLEtBQUwsQ0FBVyxDQUF6QixJQUE4QjtBQUYzQyxLQUFQO0FBSUQsR0FMRDs7QUFPQSxPQUFLLFdBQUwsR0FBbUIsVUFBVSxRQUFWLEVBQW9CO0FBQ3JDLFFBQUksU0FBUyxFQUFFLEdBQUcsS0FBSyxHQUFMLENBQVMsQ0FBVCxHQUFhLFFBQWxCLEVBQTRCLEdBQUcsS0FBSyxHQUFMLENBQVMsQ0FBVCxHQUFhLFFBQTVDLEVBQWI7QUFDQSxRQUFJLFdBQVcsZ0JBQWdCLEVBQUUsT0FBTyxLQUFLLEtBQWQsRUFBcUIsS0FBSyxNQUExQixFQUFoQixDQUFmO0FBQ0EsV0FBTyxRQUFQO0FBQ0QsR0FKRDs7QUFNQSxTQUFPLElBQVA7QUFDRDs7OztBQ3JERDs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3QztBQUdBLFFBQVEsT0FBUixHQUFrQixlQUFsQjs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQXJCOztBQUVBLElBQUksa0JBQWtCLHVCQUF1QixjQUF2QixDQUF0Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7QUFFL0YsU0FBUyxlQUFULEdBQTJCOztBQUV6QixNQUFJLE9BQU8sRUFBWDs7QUFFQSxPQUFLLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsT0FBSyxhQUFMLEdBQXFCLFlBQVk7QUFDL0IsUUFBSSxhQUFhLEVBQWpCO0FBQ0EsZUFBVyxJQUFYLENBQWdCLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQWhCO0FBQ0EsUUFBSSw0QkFBNEIsSUFBaEM7QUFDQSxRQUFJLG9CQUFvQixLQUF4QjtBQUNBLFFBQUksaUJBQWlCLFNBQXJCOztBQUVBLFFBQUk7QUFDRixXQUFLLElBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxPQUFPLFFBQXJCLEdBQWhCLEVBQWtELEtBQXZELEVBQThELEVBQUUsNEJBQTRCLENBQUMsUUFBUSxVQUFVLElBQVYsRUFBVCxFQUEyQixJQUF6RCxDQUE5RCxFQUE4SCw0QkFBNEIsSUFBMUosRUFBZ0s7QUFDOUosWUFBSSxVQUFVLE1BQU0sS0FBcEI7O0FBRUEsbUJBQVcsSUFBWCxDQUFnQixDQUFDLEdBQUcsZ0JBQWdCLE9BQXBCLEVBQTZCLFdBQVcsV0FBVyxNQUFYLEdBQW9CLENBQS9CLENBQTdCLEVBQWdFLFFBQVEsWUFBUixFQUFoRSxDQUFoQjtBQUNEO0FBQ0YsS0FORCxDQU1FLE9BQU8sR0FBUCxFQUFZO0FBQ1osMEJBQW9CLElBQXBCO0FBQ0EsdUJBQWlCLEdBQWpCO0FBQ0QsS0FURCxTQVNVO0FBQ1IsVUFBSTtBQUNGLFlBQUksQ0FBQyx5QkFBRCxJQUE4QixVQUFVLE1BQTVDLEVBQW9EO0FBQ2xELG9CQUFVLE1BQVY7QUFDRDtBQUNGLE9BSkQsU0FJVTtBQUNSLFlBQUksaUJBQUosRUFBdUI7QUFDckIsZ0JBQU0sY0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPLFVBQVA7QUFDRCxHQTdCRDs7QUErQkEsT0FBSyxlQUFMLEdBQXVCLFVBQVUsT0FBVixFQUFtQjtBQUN4QyxRQUFJLGFBQWEsRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBakI7O0FBRUEsUUFBSSw2QkFBNkIsSUFBakM7QUFDQSxRQUFJLHFCQUFxQixLQUF6QjtBQUNBLFFBQUksa0JBQWtCLFNBQXRCOztBQUVBLFFBQUk7QUFDRixXQUFLLElBQUksYUFBYSxLQUFLLFFBQUwsQ0FBYyxPQUFPLFFBQXJCLEdBQWpCLEVBQW1ELE1BQXhELEVBQWdFLEVBQUUsNkJBQTZCLENBQUMsU0FBUyxXQUFXLElBQVgsRUFBVixFQUE2QixJQUE1RCxDQUFoRSxFQUFtSSw2QkFBNkIsSUFBaEssRUFBc0s7QUFDcEssWUFBSSxjQUFjLE9BQU8sS0FBekI7O0FBRUEsWUFBSSxnQkFBZ0IsT0FBcEIsRUFBNkI7QUFDM0IsaUJBQU8sVUFBUDtBQUNELFNBRkQsTUFFTztBQUNMLHVCQUFhLENBQUMsR0FBRyxnQkFBZ0IsT0FBcEIsRUFBNkIsVUFBN0IsRUFBeUMsWUFBWSxZQUFaLEVBQXpDLENBQWI7QUFDRDtBQUNGO0FBQ0YsS0FWRCxDQVVFLE9BQU8sR0FBUCxFQUFZO0FBQ1osMkJBQXFCLElBQXJCO0FBQ0Esd0JBQWtCLEdBQWxCO0FBQ0QsS0FiRCxTQWFVO0FBQ1IsVUFBSTtBQUNGLFlBQUksQ0FBQywwQkFBRCxJQUErQixXQUFXLE1BQTlDLEVBQXNEO0FBQ3BELHFCQUFXLE1BQVg7QUFDRDtBQUNGLE9BSkQsU0FJVTtBQUNSLFlBQUksa0JBQUosRUFBd0I7QUFDdEIsZ0JBQU0sZUFBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEdBL0JEOztBQWlDQSxPQUFLLFFBQUwsR0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2xDLFFBQUksY0FBYyxXQUFXLEtBQUssU0FBTCxFQUE3QjtBQUNBLFFBQUksNkJBQTZCLElBQWpDO0FBQ0EsUUFBSSxxQkFBcUIsS0FBekI7QUFDQSxRQUFJLGtCQUFrQixTQUF0Qjs7QUFFQSxRQUFJO0FBQ0YsV0FBSyxJQUFJLGFBQWEsS0FBSyxRQUFMLENBQWMsT0FBTyxRQUFyQixHQUFqQixFQUFtRCxNQUF4RCxFQUFnRSxFQUFFLDZCQUE2QixDQUFDLFNBQVMsV0FBVyxJQUFYLEVBQVYsRUFBNkIsSUFBNUQsQ0FBaEUsRUFBbUksNkJBQTZCLElBQWhLLEVBQXNLO0FBQ3BLLFlBQUksVUFBVSxPQUFPLEtBQXJCOztBQUVBLFlBQUksY0FBYyxRQUFRLFNBQVIsRUFBbEIsRUFBdUM7QUFDckMseUJBQWUsUUFBUSxTQUFSLEVBQWY7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxDQUFDLEdBQUcsZ0JBQWdCLE9BQXBCLEVBQTZCLFFBQVEsUUFBUixDQUFpQixjQUFjLFFBQVEsU0FBUixFQUEvQixDQUE3QixFQUFrRixLQUFLLGVBQUwsQ0FBcUIsT0FBckIsQ0FBbEYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixLQVZELENBVUUsT0FBTyxHQUFQLEVBQVk7QUFDWiwyQkFBcUIsSUFBckI7QUFDQSx3QkFBa0IsR0FBbEI7QUFDRCxLQWJELFNBYVU7QUFDUixVQUFJO0FBQ0YsWUFBSSxDQUFDLDBCQUFELElBQStCLFdBQVcsTUFBOUMsRUFBc0Q7QUFDcEQscUJBQVcsTUFBWDtBQUNEO0FBQ0YsT0FKRCxTQUlVO0FBQ1IsWUFBSSxrQkFBSixFQUF3QjtBQUN0QixnQkFBTSxlQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0E5QkQ7O0FBZ0NBLE9BQUssU0FBTCxHQUFpQixZQUFZO0FBQzNCLFFBQUksU0FBUyxDQUFiO0FBQ0EsUUFBSSw2QkFBNkIsSUFBakM7QUFDQSxRQUFJLHFCQUFxQixLQUF6QjtBQUNBLFFBQUksa0JBQWtCLFNBQXRCOztBQUVBLFFBQUk7QUFDRixXQUFLLElBQUksYUFBYSxLQUFLLFFBQUwsQ0FBYyxPQUFPLFFBQXJCLEdBQWpCLEVBQW1ELE1BQXhELEVBQWdFLEVBQUUsNkJBQTZCLENBQUMsU0FBUyxXQUFXLElBQVgsRUFBVixFQUE2QixJQUE1RCxDQUFoRSxFQUFtSSw2QkFBNkIsSUFBaEssRUFBc0s7QUFDcEssWUFBSSxVQUFVLE9BQU8sS0FBckI7O0FBRUEsa0JBQVUsUUFBUSxTQUFSLEVBQVY7QUFDRDtBQUNGLEtBTkQsQ0FNRSxPQUFPLEdBQVAsRUFBWTtBQUNaLDJCQUFxQixJQUFyQjtBQUNBLHdCQUFrQixHQUFsQjtBQUNELEtBVEQsU0FTVTtBQUNSLFVBQUk7QUFDRixZQUFJLENBQUMsMEJBQUQsSUFBK0IsV0FBVyxNQUE5QyxFQUFzRDtBQUNwRCxxQkFBVyxNQUFYO0FBQ0Q7QUFDRixPQUpELFNBSVU7QUFDUixZQUFJLGtCQUFKLEVBQXdCO0FBQ3RCLGdCQUFNLGVBQU47QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsV0FBTyxNQUFQO0FBQ0QsR0E1QkQ7O0FBOEJBLE9BQUssV0FBTCxHQUFtQixVQUFVLFFBQVYsRUFBb0I7QUFDckMsUUFBSSxjQUFjLEVBQWxCO0FBQ0EsUUFBSSxjQUFjLFdBQVcsS0FBSyxTQUFMLEVBQTdCO0FBQ0EsUUFBSSxvQkFBb0IsS0FBeEI7QUFDQSxRQUFJLGNBQWMsQ0FBbEI7O0FBRUEsV0FBTyxDQUFDLGlCQUFSLEVBQTJCO0FBQ3pCLFVBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQTJCLFNBQTNCLEVBQWxCLEVBQTBEO0FBQ3hELHVCQUFlLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBZjtBQUNBLG9CQUFZLElBQVosQ0FBaUIsS0FBSyxRQUFMLENBQWMsV0FBZCxFQUEyQixXQUEzQixDQUF1QyxDQUF2QyxDQUFqQjtBQUNBLHNCQUFjLGNBQWMsQ0FBNUI7QUFDRCxPQUpELE1BSU87QUFDTCxvQkFBWSxJQUFaLENBQWlCLEtBQUssUUFBTCxDQUFjLFdBQWQsRUFBMkIsV0FBM0IsQ0FBdUMsY0FBYyxLQUFLLFFBQUwsQ0FBYyxXQUFkLEVBQTJCLFNBQTNCLEVBQXJELENBQWpCO0FBQ0EsNEJBQW9CLElBQXBCO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJLFdBQVcsaUJBQWY7QUFDQSxhQUFTLFFBQVQsR0FBb0IsV0FBcEI7QUFDQSxXQUFPLFFBQVA7QUFDRCxHQXBCRDs7QUFzQkEsU0FBTyxJQUFQO0FBQ0Q7Ozs7QUN4S0Q7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSSxPQUFPLFFBQVEsT0FBUixDQUFYOztBQUVBLElBQUksUUFBUSx1QkFBdUIsSUFBdkIsQ0FBWjs7QUFFQSxJQUFJLFFBQVEsUUFBUSxRQUFSLENBQVo7O0FBRUEsSUFBSSxTQUFTLHVCQUF1QixLQUF2QixDQUFiOztBQUVBLElBQUksUUFBUSxRQUFRLFFBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxnQkFBZ0IsUUFBUSxnQkFBUixDQUFwQjs7QUFFQSxJQUFJLGlCQUFpQix1QkFBdUIsYUFBdkIsQ0FBckI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFFBQVEsT0FBUixHQUFrQjtBQUNoQixPQUFLLE1BQU0sT0FESztBQUVoQixRQUFNLE9BQU8sT0FGRztBQUdoQixRQUFNLE9BQU8sT0FIRztBQUloQixlQUFhLGVBQWU7QUFKWixDQUFsQjs7OztBQ3hCQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELElBQWxEOztBQUVBLE1BQUksU0FBUyxFQUFiO0FBQ0EsU0FBTyxNQUFQLEdBQWdCLFFBQVEsTUFBeEI7O0FBRUEsU0FBTyxJQUFQLEdBQWMsQ0FBQyxHQUFHLE9BQU8sT0FBWCxHQUFkO0FBQ0EsU0FBTyxJQUFQLENBQVksUUFBWixDQUFxQixJQUFyQixDQUEwQixDQUFDLEdBQUcsTUFBTSxPQUFWLEVBQW1CLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBQyxPQUFPLE1BQW5CLEVBQVQsRUFBc0MsU0FBUyxHQUEvQyxFQUFvRCxRQUFRLE9BQU8sTUFBbkUsRUFBbkIsQ0FBMUI7O0FBRUEsU0FBTyxNQUFQO0FBQ0QsQ0FYRDs7QUFhQSxJQUFJLFFBQVEsUUFBUSxlQUFSLENBQVo7O0FBRUEsSUFBSSxTQUFTLHVCQUF1QixLQUF2QixDQUFiOztBQUVBLElBQUksT0FBTyxRQUFRLGNBQVIsQ0FBWDs7QUFFQSxJQUFJLFFBQVEsdUJBQXVCLElBQXZCLENBQVo7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDL0IvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELElBQWpEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxRQUF4QyxFQUFrRCxJQUFsRDs7QUFFQSxNQUFJLFlBQVksRUFBaEI7QUFDQSxZQUFVLEtBQVYsR0FBa0IsUUFBUSxLQUExQjtBQUNBLFlBQVUsTUFBVixHQUFtQixRQUFRLE1BQTNCOztBQUVBLFlBQVUsSUFBVixHQUFpQixDQUFDLEdBQUcsT0FBTyxPQUFYLEdBQWpCO0FBQ0EsWUFBVSxJQUFWLENBQWUsUUFBZixDQUF3QixJQUF4QixDQUE2QixDQUFDLEdBQUcsT0FBTyxPQUFYLEVBQW9CLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBWCxFQUFULEVBQXlCLEtBQUssRUFBRSxHQUFHLFVBQVUsS0FBZixFQUFzQixHQUFHLENBQXpCLEVBQTlCLEVBQXBCLENBQTdCO0FBQ0EsWUFBVSxJQUFWLENBQWUsUUFBZixDQUF3QixJQUF4QixDQUE2QixDQUFDLEdBQUcsT0FBTyxPQUFYLEVBQW9CLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBWCxFQUFULEVBQXlCLEtBQUssRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLFVBQVUsTUFBckIsRUFBOUIsRUFBcEIsQ0FBN0I7QUFDQSxZQUFVLElBQVYsQ0FBZSxRQUFmLENBQXdCLElBQXhCLENBQTZCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQVQsRUFBeUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEtBQWhCLEVBQXVCLEdBQUcsQ0FBMUIsRUFBOUIsRUFBcEIsQ0FBN0I7QUFDQSxZQUFVLElBQVYsQ0FBZSxRQUFmLENBQXdCLElBQXhCLENBQTZCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQVQsRUFBeUIsS0FBSyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBQyxVQUFVLE1BQXRCLEVBQTlCLEVBQXBCLENBQTdCOztBQUVBLFNBQU8sU0FBUDtBQUNELENBaEJEOztBQWtCQSxJQUFJLFFBQVEsUUFBUSxlQUFSLENBQVo7O0FBRUEsSUFBSSxTQUFTLHVCQUF1QixLQUF2QixDQUFiOztBQUVBLElBQUksUUFBUSxRQUFRLGVBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDcEMvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLGFBQWEsUUFBUSxhQUFSLENBQWpCOztBQUVBLElBQUksY0FBYyx1QkFBdUIsVUFBdkIsQ0FBbEI7O0FBRUEsSUFBSSxVQUFVLFFBQVEsVUFBUixDQUFkOztBQUVBLElBQUksV0FBVyx1QkFBdUIsT0FBdkIsQ0FBZjs7QUFFQSxJQUFJLFVBQVUsUUFBUSxVQUFSLENBQWQ7O0FBRUEsSUFBSSxXQUFXLHVCQUF1QixPQUF2QixDQUFmOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixRQUFRLE9BQVIsR0FBa0I7QUFDaEIsYUFBVyxZQUFZLE9BRFA7QUFFaEIsVUFBUSxTQUFTLE9BRkQ7QUFHaEIsVUFBUSxTQUFTO0FBSEQsQ0FBbEI7Ozs7QUNwQkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxZQUF4QyxFQUFzRCxJQUF0RDs7QUFFQSxNQUFJLFNBQVMsRUFBYjtBQUNBLFNBQU8sVUFBUCxHQUFvQixRQUFRLFVBQTVCOztBQUVBLFNBQU8sSUFBUCxHQUFjLENBQUMsR0FBRyxPQUFPLE9BQVgsR0FBZDtBQUNBLFNBQU8sSUFBUCxDQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBMEIsQ0FBQyxHQUFHLE9BQU8sT0FBWCxFQUFvQixFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBVCxFQUF5QixLQUFLLEVBQUUsR0FBRyxPQUFPLFVBQVosRUFBd0IsR0FBRyxDQUEzQixFQUE5QixFQUFwQixDQUExQjtBQUNBLFNBQU8sSUFBUCxDQUFZLFFBQVosQ0FBcUIsSUFBckIsQ0FBMEIsQ0FBQyxHQUFHLE9BQU8sT0FBWCxFQUFvQixFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUwsRUFBUSxHQUFHLENBQVgsRUFBVCxFQUF5QixLQUFLLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxPQUFPLFVBQWxCLEVBQTlCLEVBQXBCLENBQTFCO0FBQ0EsU0FBTyxJQUFQLENBQVksUUFBWixDQUFxQixJQUFyQixDQUEwQixDQUFDLEdBQUcsT0FBTyxPQUFYLEVBQW9CLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBWCxFQUFULEVBQXlCLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxVQUFiLEVBQXlCLEdBQUcsQ0FBNUIsRUFBOUIsRUFBcEIsQ0FBMUI7QUFDQSxTQUFPLElBQVAsQ0FBWSxRQUFaLENBQXFCLElBQXJCLENBQTBCLENBQUMsR0FBRyxPQUFPLE9BQVgsRUFBb0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFMLEVBQVEsR0FBRyxDQUFYLEVBQVQsRUFBeUIsS0FBSyxFQUFFLEdBQUcsQ0FBTCxFQUFRLEdBQUcsQ0FBQyxPQUFPLFVBQW5CLEVBQTlCLEVBQXBCLENBQTFCOztBQUVBLFNBQU8sTUFBUDtBQUNELENBZEQ7O0FBZ0JBLElBQUksUUFBUSxRQUFRLGVBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxRQUFRLFFBQVEsZUFBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNsQy9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLEtBQVYsRUFBaUI7QUFDakMsU0FBTyxDQUFDLE1BQU0sQ0FBUCxFQUFVLE1BQU0sQ0FBaEIsQ0FBUDtBQUNELENBRkQ7Ozs7QUNOQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxlQUFWLEVBQTJCLE1BQTNCLEVBQW1DLFFBQW5DLEVBQTZDLFlBQTdDLEVBQTJEO0FBQzNFLE1BQUksQ0FBQyxRQUFMLEVBQWU7QUFDYixvQkFBZ0IsTUFBaEIsSUFBMEIsZ0JBQWdCLGNBQWhCLENBQStCLE1BQS9CLElBQXlDLGdCQUFnQixNQUFoQixDQUF6QyxHQUFtRSxZQUE3RjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUksQ0FBQyxnQkFBZ0IsY0FBaEIsQ0FBK0IsTUFBL0IsQ0FBTCxFQUE2QztBQUMzQyxZQUFNLElBQUksS0FBSixDQUFVLDZCQUE2QixNQUF2QyxDQUFOO0FBQ0Q7QUFDRjtBQUNGLENBUkQ7Ozs7QUNOQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1CLFFBQW5CLEVBQTZCLEtBQTdCLEVBQW9DLFVBQXBDLEVBQWdEO0FBQ2hFLE1BQUksQ0FBQyxVQUFMLEVBQWlCO0FBQ2YsUUFBSSxRQUFRLGNBQVIsQ0FBdUIsU0FBdkIsQ0FBSixFQUF1QztBQUNyQyxhQUFPLFFBQVEsT0FBUixDQUFnQixRQUFoQixFQUEwQixLQUExQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLFFBQVEsY0FBUixDQUF1QixRQUF2QixDQUFKLEVBQXNDO0FBQ3BDLFlBQVEsUUFBUixJQUFvQixLQUFwQjtBQUNELEdBRkQsTUFFTztBQUNMLFlBQVEsR0FBUixDQUFZLE9BQVo7QUFDQSxVQUFNLElBQUksS0FBSixDQUFVLGlFQUFpRSxRQUEzRSxDQUFOO0FBQ0Q7QUFDRixDQWJEOzs7O0FDTkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7QUFHQSxRQUFRLE9BQVIsR0FBa0I7QUFDaEIsZ0JBQWMsU0FBUyxZQUFULENBQXNCLE1BQXRCLEVBQThCO0FBQzFDLGFBQVMsTUFBVCxDQUFnQixNQUFoQixDQUF1QixFQUF2QjtBQUNBLGFBQVMsTUFBVCxDQUFnQixnQkFBaEIsQ0FBaUMsTUFBakMsRUFBeUMsTUFBekM7QUFDRCxHQUplO0FBS2hCLG1CQUFpQixTQUFTLGVBQVQsQ0FBeUIsTUFBekIsRUFBaUM7QUFDaEQsYUFBUyxNQUFULENBQWdCLG1CQUFoQixDQUFvQyxNQUFwQyxFQUE0QyxNQUE1QztBQUNEO0FBUGUsQ0FBbEI7Ozs7QUNMQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3QztBQUdBLFFBQVEsTUFBUixHQUFpQixNQUFqQjs7QUFFQSxJQUFJLFdBQVcsUUFBUSw4QkFBUixDQUFmOztBQUVBLElBQUksWUFBWSx1QkFBdUIsUUFBdkIsQ0FBaEI7O0FBRUEsSUFBSSxXQUFXLFFBQVEsMkJBQVIsQ0FBZjs7QUFFQSxJQUFJLFlBQVksdUJBQXVCLFFBQXZCLENBQWhCOztBQUVBLElBQUksU0FBUyxRQUFRLHlCQUFSLENBQWI7O0FBRUEsSUFBSSxVQUFVLHVCQUF1QixNQUF2QixDQUFkOztBQUVBLElBQUksVUFBVSxRQUFRLG9DQUFSLENBQWQ7O0FBRUEsSUFBSSxXQUFXLHVCQUF1QixPQUF2QixDQUFmOztBQUVBLElBQUksZ0JBQWdCLFFBQVEsMENBQVIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsdUJBQXVCLGFBQXZCLENBQXJCOztBQUVBLElBQUksU0FBUyxRQUFRLHVCQUFSLENBQWI7O0FBRUEsSUFBSSxVQUFVLHVCQUF1QixNQUF2QixDQUFkOztBQUVBLElBQUksa0JBQWtCLFFBQVEsa0NBQVIsQ0FBdEI7O0FBRUEsSUFBSSxtQkFBbUIsdUJBQXVCLGVBQXZCLENBQXZCOztBQUVBLElBQUksd0JBQXdCLFFBQVEsMkNBQVIsQ0FBNUI7O0FBRUEsSUFBSSx5QkFBeUIsdUJBQXVCLHFCQUF2QixDQUE3Qjs7QUFFQSxJQUFJLGVBQWUsUUFBUSxrQ0FBUixDQUFuQjs7QUFFQSxJQUFJLGdCQUFnQix1QkFBdUIsWUFBdkIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxvQ0FBUixDQUFyQjs7QUFFQSxJQUFJLGtCQUFrQix1QkFBdUIsY0FBdkIsQ0FBdEI7O0FBRUEsSUFBSSxlQUFlLFFBQVEsYUFBUixDQUFuQjs7QUFFQSxJQUFJLGdCQUFnQix1QkFBdUIsWUFBdkIsQ0FBcEI7O0FBRUEsSUFBSSxRQUFRLFFBQVEsUUFBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLFVBQVUsUUFBUSwwQkFBUixDQUFkOztBQUVBLElBQUksV0FBVyx1QkFBdUIsT0FBdkIsQ0FBZjs7QUFFQSxJQUFJLFNBQVMsUUFBUSx3QkFBUixDQUFiOztBQUVBLElBQUksVUFBVSx1QkFBdUIsTUFBdkIsQ0FBZDs7QUFFQSxJQUFJLGFBQWEsUUFBUSxpQ0FBUixDQUFqQjs7QUFFQSxJQUFJLGNBQWMsdUJBQXVCLFVBQXZCLENBQWxCOztBQUVBLElBQUksZ0JBQWdCLFFBQVEsNkJBQVIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsdUJBQXVCLGFBQXZCLENBQXJCOztBQUVBLElBQUksV0FBVyxRQUFRLG1CQUFSLENBQWY7O0FBRUEsSUFBSSxZQUFZLHVCQUF1QixRQUF2QixDQUFoQjs7QUFFQSxJQUFJLFlBQVksUUFBUSxtQkFBUixDQUFoQjs7QUFFQSxJQUFJLGFBQWEsdUJBQXVCLFNBQXZCLENBQWpCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FBSS9GLFNBQVMsTUFBVCxDQUFnQixRQUFoQixFQUEwQjtBQUN4QixNQUFJLGdCQUFnQixVQUFVLE9BQVYsQ0FBa0IsYUFBbEIsQ0FBZ0MsUUFBaEMsQ0FBcEI7QUFDQSxTQUFPLE9BQVAsQ0FBZSxZQUFmLENBQTRCLGNBQWMsS0FBMUM7QUFDQSxTQUFPO0FBQ0wsYUFBUyxPQURKO0FBRUwsbUJBQWUsYUFGVjtBQUdMLGFBQVMsVUFBVSxPQUhkO0FBSUwsVUFBTSxPQUFPLE9BSlI7QUFLTCxjQUFVLFdBQVcsT0FMaEI7QUFNTCxXQUFPO0FBQ0wsbUJBQWEsY0FBYztBQUR0QixLQU5GO0FBU0wsY0FBVTtBQUNSLGNBQVEsU0FBUyxPQURUO0FBRVIsYUFBTyxRQUFRO0FBRlAsS0FUTDtBQWFMLGFBQVM7QUFDUCxlQUFTO0FBQ1AsaUJBQVMsVUFBVSxPQURaO0FBRVAsZUFBTyxRQUFRO0FBRlIsT0FERjtBQUtQLGFBQU87QUFDTCxxQkFBYTtBQUNYLGtCQUFRLFNBQVMsT0FETjtBQUVYLHVCQUFhLGVBQWU7QUFGakIsU0FEUjtBQUtMLGNBQU07QUFDSixxQkFBVyxZQUFZO0FBRG5CO0FBTEQsT0FMQTtBQWNQLGFBQU8sUUFBUSxPQWRSO0FBZVAsZUFBUztBQUNQLHVCQUFlLGlCQUFpQjtBQUR6QjtBQWZGLEtBYko7QUFnQ0wsa0JBQWM7QUFDWixhQUFPO0FBQ0wsNEJBQW9CLHVCQUF1QixPQUR0QztBQUVMLG9CQUFZLGNBQWM7QUFGckIsT0FESztBQUtaLGFBQU87QUFDTCxzQkFBYyxnQkFBZ0I7QUFEekI7QUFMSyxLQWhDVDtBQXlDTCxrQkFBYyxlQUFlLE9BekN4QjtBQTBDTCxhQUFTLFVBQVU7QUExQ2QsR0FBUDtBQTRDRDs7OztBQ2xJRDs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFNBQXhDLEVBQW1ELElBQW5EO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxPQUF4QyxFQUFpRCxJQUFqRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsUUFBeEMsRUFBa0QsSUFBbEQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELElBQWxEOztBQUVBLE1BQUksYUFBYSxFQUFqQjtBQUNBLGFBQVcsT0FBWCxHQUFxQixRQUFRLE9BQTdCO0FBQ0EsYUFBVyxLQUFYLEdBQW1CLFFBQVEsS0FBM0I7QUFDQSxhQUFXLE1BQVgsR0FBb0IsQ0FBQyxHQUFHLFFBQVEsT0FBWixFQUFxQixRQUFRLE1BQTdCLENBQXBCO0FBQ0EsYUFBVyxNQUFYLEdBQW9CLENBQUMsR0FBRyxRQUFRLE9BQVosRUFBcUIsUUFBUSxNQUE3QixDQUFwQjtBQUNBLGFBQVcsWUFBWCxHQUEwQixDQUFDLEdBQUcsUUFBUSxPQUFaLEVBQXFCLFFBQVEsTUFBN0IsQ0FBMUI7QUFDQSxhQUFXLE1BQVgsR0FBb0IsQ0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixXQUFXLEtBQTFDLEVBQWlELEdBQWpELENBQXBCOztBQUVBLGFBQVcsVUFBWCxHQUF3QjtBQUN0QixPQUFHLFdBQVcsTUFBWCxDQUFrQixHQUFsQixLQUEwQixXQUFXLE1BQVgsQ0FBa0IsR0FBbEIsRUFEUDtBQUV0QixPQUFHLFdBQVcsTUFBWCxDQUFrQixLQUFsQixLQUE0QixXQUFXLE1BQVgsQ0FBa0IsS0FBbEIsRUFGVDtBQUd0QixPQUFHLFdBQVcsTUFBWCxDQUFrQixJQUFsQixLQUEyQixXQUFXLE1BQVgsQ0FBa0IsSUFBbEI7QUFIUixHQUF4Qjs7QUFNQSxhQUFXLEtBQVgsR0FBbUIsWUFBWTtBQUM3QixlQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsV0FBVyxNQUFuQztBQUNELEdBRkQ7O0FBSUEsYUFBVyxJQUFYLEdBQWtCLFlBQVk7QUFDNUIsZUFBVyxNQUFYLENBQWtCLElBQWxCO0FBQ0QsR0FGRDs7QUFJQSxhQUFXLE1BQVgsR0FBb0IsVUFBVSxPQUFWLEVBQW1CO0FBQ3JDLGVBQVcsWUFBWCxDQUF3QixHQUF4QixDQUE0QixXQUFXLE1BQVgsQ0FBa0IsR0FBbEIsS0FBMEIsVUFBVSxXQUFXLFVBQVgsQ0FBc0IsQ0FBdEY7QUFDQSxlQUFXLFlBQVgsQ0FBd0IsS0FBeEIsQ0FBOEIsV0FBVyxNQUFYLENBQWtCLEtBQWxCLEtBQTRCLFVBQVUsV0FBVyxVQUFYLENBQXNCLENBQTFGO0FBQ0EsZUFBVyxZQUFYLENBQXdCLElBQXhCLENBQTZCLFdBQVcsTUFBWCxDQUFrQixJQUFsQixLQUEyQixVQUFVLFdBQVcsVUFBWCxDQUFzQixDQUF4RjtBQUNBLEtBQUMsR0FBRyxXQUFXLE9BQWYsRUFBd0IsV0FBVyxPQUFuQyxFQUE0QyxPQUE1QyxFQUFxRCxXQUFXLFlBQVgsQ0FBd0IsU0FBeEIsRUFBckQ7QUFDQSxlQUFXLE9BQVgsQ0FBbUIsSUFBbkI7QUFDRCxHQU5EOztBQVFBLFNBQU8sVUFBUDtBQUNELENBdENEOztBQXdDQSxJQUFJLFNBQVMsUUFBUSxPQUFSLENBQWI7O0FBRUEsSUFBSSxVQUFVLHVCQUF1QixNQUF2QixDQUFkOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxZQUFZLFFBQVEseUJBQVIsQ0FBaEI7O0FBRUEsSUFBSSxhQUFhLHVCQUF1QixTQUF2QixDQUFqQjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzlEL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxJQUFuRDs7QUFFQSxNQUFJLHFCQUFxQixFQUF6QjtBQUNBLHFCQUFtQixPQUFuQixHQUE2QixRQUFRLE9BQXJDOztBQUVBLHFCQUFtQixLQUFuQixHQUEyQixZQUFZO0FBQ3JDLFdBQU8sT0FBUCxDQUFlLFlBQWYsQ0FBNEIsbUJBQW1CLE1BQS9DO0FBQ0QsR0FGRDs7QUFJQSxxQkFBbUIsSUFBbkIsR0FBMEIsWUFBWTtBQUNwQyxXQUFPLE9BQVAsQ0FBZSxlQUFmLENBQStCLG1CQUFtQixNQUFsRDtBQUNELEdBRkQ7O0FBSUEscUJBQW1CLE1BQW5CLEdBQTRCLFlBQVk7QUFDdEMsS0FBQyxHQUFHLFdBQVcsT0FBZixFQUF3QixtQkFBbUIsT0FBM0MsRUFBb0QsT0FBcEQsRUFBNkQsQ0FBQyxHQUFHLGNBQWMsT0FBbEIsR0FBN0Q7QUFDQSx1QkFBbUIsT0FBbkIsQ0FBMkIsSUFBM0I7QUFDRCxHQUhEOztBQUtBLFNBQU8sa0JBQVA7QUFDRCxDQXJCRDs7QUF1QkEsSUFBSSxRQUFRLFFBQVEsWUFBUixDQUFaOztBQUVBLElBQUksU0FBUyx1QkFBdUIsS0FBdkIsQ0FBYjs7QUFFQSxJQUFJLGVBQWUsUUFBUSxhQUFSLENBQW5COztBQUVBLElBQUksZ0JBQWdCLHVCQUF1QixZQUF2QixDQUFwQjs7QUFFQSxJQUFJLG1CQUFtQixRQUFRLGdDQUFSLENBQXZCOztBQUVBLElBQUksb0JBQW9CLHVCQUF1QixnQkFBdkIsQ0FBeEI7O0FBRUEsSUFBSSxZQUFZLFFBQVEseUJBQVIsQ0FBaEI7O0FBRUEsSUFBSSxhQUFhLHVCQUF1QixTQUF2QixDQUFqQjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzdDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxJQUFuRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsT0FBeEMsRUFBaUQsSUFBakQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLE9BQXhDLEVBQWlELElBQWpEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxtQkFBeEMsRUFBNkQsS0FBN0Q7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFFBQXhDLEVBQWtELEtBQWxELEVBQXlELElBQXpEOztBQUVBLE1BQUksZUFBZSxFQUFuQjtBQUNBLGVBQWEsT0FBYixHQUF1QixRQUFRLE9BQS9CO0FBQ0EsZUFBYSxLQUFiLEdBQXFCLFFBQVEsS0FBN0I7QUFDQSxlQUFhLEtBQWIsR0FBcUIsUUFBUSxLQUE3QjtBQUNBLE1BQUksQ0FBQyxRQUFRLE1BQWIsRUFBcUI7QUFDbkIsaUJBQWEsTUFBYixHQUFzQixDQUFDLEdBQUcsaUJBQWlCLGdCQUFyQixFQUF1QyxhQUFhLEtBQXBELEVBQTJELENBQTNELEVBQThELFFBQVEsaUJBQXRFLENBQXRCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsaUJBQWEsTUFBYixHQUFzQixDQUFDLEdBQUcsaUJBQWlCLGdCQUFyQixFQUF1QyxhQUFhLEtBQXBELEVBQTJELENBQTNELEVBQThELFFBQVEsaUJBQXRFLENBQXRCO0FBQ0Q7O0FBRUQsZUFBYSxLQUFiLEdBQXFCLFlBQVk7QUFDL0IsaUJBQWEsTUFBYixDQUFvQixLQUFwQixDQUEwQixhQUFhLE1BQXZDO0FBQ0QsR0FGRDs7QUFJQSxlQUFhLElBQWIsR0FBb0IsWUFBWTtBQUM5QixpQkFBYSxNQUFiLENBQW9CLElBQXBCO0FBQ0QsR0FGRDs7QUFJQSxlQUFhLE1BQWIsR0FBc0IsVUFBVSxPQUFWLEVBQW1CO0FBQ3ZDLEtBQUMsR0FBRyxXQUFXLE9BQWYsRUFBd0IsYUFBYSxPQUFyQyxFQUE4QyxPQUE5QyxFQUF1RCxJQUFJLFdBQVcsYUFBYSxLQUFiLEdBQXFCLENBQWhDLENBQTNEO0FBQ0EsaUJBQWEsT0FBYixDQUFxQixJQUFyQjtBQUNELEdBSEQ7O0FBS0EsU0FBTyxZQUFQO0FBQ0QsQ0FoQ0Q7O0FBa0NBLElBQUksbUJBQW1CLFFBQVEsbUNBQVIsQ0FBdkI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxnQ0FBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksWUFBWSxRQUFRLHlCQUFSLENBQWhCOztBQUVBLElBQUksYUFBYSx1QkFBdUIsU0FBdkIsQ0FBakI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNsRC9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixZQUFZO0FBQzVCLE1BQUksUUFBUSxFQUFaO0FBQ0EsUUFBTSxLQUFOLEdBQWMsRUFBZDs7QUFFQSxRQUFNLFVBQU4sR0FBbUIsVUFBVSxPQUFWLEVBQW1CO0FBQ3BDLFVBQU0sS0FBTixDQUFZLElBQVosQ0FBaUIsT0FBakI7QUFDRCxHQUZEOztBQUlBLFFBQU0sYUFBTixHQUFzQixVQUFVLE9BQVYsRUFBbUI7QUFDdkMsVUFBTSxLQUFOLENBQVksTUFBWixDQUFtQixNQUFNLEtBQU4sQ0FBWSxPQUFaLENBQW9CLE9BQXBCLENBQW5CLEVBQWlELENBQWpEO0FBQ0QsR0FGRDs7QUFJQSxRQUFNLElBQU4sR0FBYSxZQUFZO0FBQ3ZCLFFBQUksNEJBQTRCLElBQWhDO0FBQ0EsUUFBSSxvQkFBb0IsS0FBeEI7QUFDQSxRQUFJLGlCQUFpQixTQUFyQjs7QUFFQSxRQUFJO0FBQ0YsV0FBSyxJQUFJLFlBQVksTUFBTSxLQUFOLENBQVksT0FBTyxRQUFuQixHQUFoQixFQUFnRCxLQUFyRCxFQUE0RCxFQUFFLDRCQUE0QixDQUFDLFFBQVEsVUFBVSxJQUFWLEVBQVQsRUFBMkIsSUFBekQsQ0FBNUQsRUFBNEgsNEJBQTRCLElBQXhKLEVBQThKO0FBQzVKLFlBQUksVUFBVSxNQUFNLEtBQXBCOztBQUVBLGdCQUFRLElBQVI7QUFDRDtBQUNGLEtBTkQsQ0FNRSxPQUFPLEdBQVAsRUFBWTtBQUNaLDBCQUFvQixJQUFwQjtBQUNBLHVCQUFpQixHQUFqQjtBQUNELEtBVEQsU0FTVTtBQUNSLFVBQUk7QUFDRixZQUFJLENBQUMseUJBQUQsSUFBOEIsVUFBVSxNQUE1QyxFQUFvRDtBQUNsRCxvQkFBVSxNQUFWO0FBQ0Q7QUFDRixPQUpELFNBSVU7QUFDUixZQUFJLGlCQUFKLEVBQXVCO0FBQ3JCLGdCQUFNLGNBQU47QUFDRDtBQUNGO0FBQ0Y7QUFDRixHQXpCRDs7QUEyQkEsUUFBTSxpQkFBTixHQUEwQixVQUFVLE9BQVYsRUFBbUIsUUFBbkIsRUFBNkIsS0FBN0IsRUFBb0M7QUFDNUQsS0FBQyxHQUFHLFdBQVcsT0FBZixFQUF3QixPQUF4QixFQUFpQyxRQUFqQyxFQUEyQyxLQUEzQyxFQUFrRCxLQUFsRDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxLQUFQO0FBQ0QsQ0E1Q0Q7O0FBOENBLElBQUksWUFBWSxRQUFRLHNCQUFSLENBQWhCOztBQUVBLElBQUksYUFBYSx1QkFBdUIsU0FBdkIsQ0FBakI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUN4RC9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixZQUFZO0FBQzVCLE1BQUksUUFBUSxDQUFDLEdBQUcsaUJBQWlCLE9BQXJCLEdBQVo7O0FBRUEsUUFBTSxPQUFOLEdBQWdCLFVBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1QjtBQUNyQyxRQUFJLDRCQUE0QixJQUFoQztBQUNBLFFBQUksb0JBQW9CLEtBQXhCO0FBQ0EsUUFBSSxpQkFBaUIsU0FBckI7O0FBRUEsUUFBSTtBQUNGLFdBQUssSUFBSSxZQUFZLE1BQU0sS0FBTixDQUFZLE9BQU8sUUFBbkIsR0FBaEIsRUFBZ0QsS0FBckQsRUFBNEQsRUFBRSw0QkFBNEIsQ0FBQyxRQUFRLFVBQVUsSUFBVixFQUFULEVBQTJCLElBQXpELENBQTVELEVBQTRILDRCQUE0QixJQUF4SixFQUE4SjtBQUM1SixZQUFJLE1BQU0sTUFBTSxLQUFoQjs7QUFFQSxjQUFNLGlCQUFOLENBQXdCLEdBQXhCLEVBQTZCLElBQTdCLEVBQW1DLEtBQW5DO0FBQ0Q7QUFDRixLQU5ELENBTUUsT0FBTyxHQUFQLEVBQVk7QUFDWiwwQkFBb0IsSUFBcEI7QUFDQSx1QkFBaUIsR0FBakI7QUFDRCxLQVRELFNBU1U7QUFDUixVQUFJO0FBQ0YsWUFBSSxDQUFDLHlCQUFELElBQThCLFVBQVUsTUFBNUMsRUFBb0Q7QUFDbEQsb0JBQVUsTUFBVjtBQUNEO0FBQ0YsT0FKRCxTQUlVO0FBQ1IsWUFBSSxpQkFBSixFQUF1QjtBQUNyQixnQkFBTSxjQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsR0F6QkQ7O0FBMkJBLFNBQU8sS0FBUDtBQUNELENBL0JEOztBQWlDQSxJQUFJLGtCQUFrQixRQUFRLGtCQUFSLENBQXRCOztBQUVBLElBQUksbUJBQW1CLHVCQUF1QixlQUF2QixDQUF2Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQzNDL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFVBQVUsT0FBVixFQUFtQjs7QUFFbkMsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxLQUFuRCxFQUEwRCxLQUExRDs7QUFFQSxNQUFJLFFBQVEsQ0FBQyxHQUFHLGlCQUFpQixPQUFyQixHQUFaO0FBQ0EsUUFBTSxtQkFBTixHQUE0QixDQUE1Qjs7QUFFQSxRQUFNLE9BQU4sR0FBZ0IsVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3JDLFFBQUksTUFBTSxPQUFOLElBQWlCLE1BQU0sbUJBQU4sS0FBOEIsQ0FBbkQsRUFBc0Q7QUFDcEQsWUFBTSxZQUFOO0FBQ0Q7QUFDRCxVQUFNLGlCQUFOLENBQXdCLE1BQU0sS0FBTixDQUFZLE1BQU0sbUJBQWxCLENBQXhCLEVBQWdFLElBQWhFLEVBQXNFLEtBQXRFOztBQUVBLFVBQU0sbUJBQU47QUFDQSxRQUFJLE1BQU0sbUJBQU4sSUFBNkIsTUFBTSxLQUFOLENBQVksTUFBN0MsRUFBcUQ7QUFDbkQsWUFBTSxtQkFBTixHQUE0QixDQUE1QjtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxRQUFNLFlBQU4sR0FBcUIsWUFBWTs7QUFFaEMsR0FGRDs7QUFJQSxTQUFPLEtBQVA7QUFDRCxDQXhCRDs7QUEwQkEsSUFBSSxrQkFBa0IsUUFBUSxrQkFBUixDQUF0Qjs7QUFFQSxJQUFJLG1CQUFtQix1QkFBdUIsZUFBdkIsQ0FBdkI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSw2QkFBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDeEMvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLFVBQXhDLEVBQW9ELElBQXBEOztBQUVBLE1BQUksUUFBUSxDQUFDLEdBQUcsaUJBQWlCLE9BQXJCLEdBQVo7QUFDQSxRQUFNLFFBQU4sR0FBaUIsUUFBUSxRQUF6QjtBQUNBLFFBQU0sS0FBTixHQUFjLENBQUMsR0FBRyxpQkFBaUIsT0FBckIsRUFBOEIsTUFBTSxRQUFwQyxDQUFkOztBQUVBLFFBQU0sT0FBTixHQUFnQixVQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUI7QUFDckMsUUFBSSxJQUFJLENBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsRUFBL0IsQ0FBUjtBQUNBLE1BQUUsS0FBRixHQUFVLE1BQU0sS0FBaEI7QUFDQSxRQUFJLHFCQUFxQixTQUFTLGtCQUFULEdBQThCO0FBQ3JELFFBQUUsT0FBRixDQUFVLElBQVYsRUFBZ0IsS0FBaEI7QUFDQSxRQUFFLElBQUY7QUFDQSxVQUFJLEVBQUUsbUJBQUYsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0IsY0FBTSxLQUFOLENBQVksY0FBWixDQUEyQixrQkFBM0I7QUFDQSxVQUFFLEtBQUYsR0FBVSxJQUFWO0FBQ0Q7QUFDRixLQVBEO0FBUUEsVUFBTSxLQUFOLENBQVksV0FBWixDQUF3QixrQkFBeEI7QUFDRCxHQVpEOztBQWNBLFFBQU0sS0FBTixDQUFZLEtBQVo7QUFDQSxTQUFPLEtBQVA7QUFDRCxDQXhCRDs7QUEwQkEsSUFBSSxrQkFBa0IsUUFBUSwwQkFBUixDQUF0Qjs7QUFFQSxJQUFJLG1CQUFtQix1QkFBdUIsZUFBdkIsQ0FBdkI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSw2QkFBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksbUJBQW1CLFFBQVEsbUJBQVIsQ0FBdkI7O0FBRUEsSUFBSSxvQkFBb0IsdUJBQXVCLGdCQUF2QixDQUF4Qjs7QUFFQSxJQUFJLGtCQUFrQixRQUFRLGtCQUFSLENBQXRCOztBQUVBLElBQUksbUJBQW1CLHVCQUF1QixlQUF2QixDQUF2Qjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLEdBQWhDLEVBQXFDO0FBQUUsU0FBTyxPQUFPLElBQUksVUFBWCxHQUF3QixHQUF4QixHQUE4QixFQUFFLFNBQVMsR0FBWCxFQUFyQztBQUF3RDs7OztBQ2hEL0Y7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSSxpQkFBaUIsUUFBUSxpQkFBUixDQUFyQjs7QUFFQSxJQUFJLGtCQUFrQix1QkFBdUIsY0FBdkIsQ0FBdEI7O0FBRUEsSUFBSSxtQkFBbUIsUUFBUSxtQkFBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLElBQUksa0JBQWtCLFFBQVEsa0JBQVIsQ0FBdEI7O0FBRUEsSUFBSSxtQkFBbUIsdUJBQXVCLGVBQXZCLENBQXZCOztBQUVBLElBQUksZ0JBQWdCLFFBQVEsZ0JBQVIsQ0FBcEI7O0FBRUEsSUFBSSxpQkFBaUIsdUJBQXVCLGFBQXZCLENBQXJCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixRQUFRLE9BQVIsR0FBa0I7QUFDaEIsZ0JBQWMsZ0JBQWdCLE9BRGQ7QUFFaEIsa0JBQWdCLGtCQUFrQixPQUZsQjtBQUdoQixpQkFBZSxpQkFBaUIsT0FIaEI7QUFJaEIsZUFBYSxlQUFlO0FBSlosQ0FBbEI7Ozs7QUN4QkE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzNDLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsUUFBUSxPQUFSLEdBQWtCLFlBQVk7QUFDNUIsTUFBSSxRQUFRLENBQUMsR0FBRyxpQkFBaUIsT0FBckIsR0FBWjs7QUFFQSxRQUFNLE9BQU4sR0FBZ0IsVUFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3JDLFFBQUkscUJBQXFCLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixNQUFNLEtBQU4sQ0FBWSxNQUF2QyxDQUF6QjtBQUNBLFVBQU0saUJBQU4sQ0FBd0IsTUFBTSxLQUFOLENBQVksa0JBQVosQ0FBeEIsRUFBeUQsSUFBekQsRUFBK0QsS0FBL0Q7QUFDRCxHQUhEOztBQUtBLFNBQU8sS0FBUDtBQUNELENBVEQ7O0FBV0EsSUFBSSxrQkFBa0IsUUFBUSxrQkFBUixDQUF0Qjs7QUFFQSxJQUFJLG1CQUFtQix1QkFBdUIsZUFBdkIsQ0FBdkI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUNyQi9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixVQUFVLE9BQVYsRUFBbUI7QUFDbkMsTUFBSSxXQUFXLEVBQWY7O0FBRUEsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxNQUF4QyxFQUFnRCxJQUFoRDtBQUNBLEdBQUMsR0FBRyxrQkFBa0IsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0MsS0FBeEMsRUFBK0MsS0FBL0MsRUFBc0QsQ0FBdEQ7QUFDQSxHQUFDLEdBQUcsa0JBQWtCLE9BQXRCLEVBQStCLE9BQS9CLEVBQXdDLElBQXhDLEVBQThDLEtBQTlDLEVBQXFELENBQXJEO0FBQ0EsR0FBQyxHQUFHLGtCQUFrQixPQUF0QixFQUErQixPQUEvQixFQUF3QyxTQUF4QyxFQUFtRCxLQUFuRCxFQUEwRCxDQUExRDs7QUFFQSxXQUFTLElBQVQsR0FBZ0IsUUFBUSxJQUF4QjtBQUNBLFdBQVMsR0FBVCxHQUFlLFFBQVEsR0FBdkI7QUFDQSxXQUFTLEVBQVQsR0FBYyxRQUFRLEVBQXRCO0FBQ0EsV0FBUyxPQUFULEdBQW1CLFFBQVEsT0FBM0I7O0FBRUEsTUFBSSxTQUFTLEdBQVQsS0FBaUIsQ0FBakIsSUFBc0IsU0FBUyxFQUFULEtBQWdCLENBQTFDLEVBQTZDO0FBQzNDLFVBQU0sNENBQU47QUFDRDs7QUFFRCxXQUFTLG9CQUFULEdBQWdDLFlBQVk7QUFDMUMsUUFBSSxlQUFlLEVBQW5CO0FBQ0EsaUJBQWEsSUFBYixHQUFvQixTQUFTLElBQTdCO0FBQ0EsaUJBQWEsR0FBYixHQUFtQixTQUFTLEdBQTVCO0FBQ0EsaUJBQWEsRUFBYixHQUFrQixTQUFTLEVBQTNCO0FBQ0EsaUJBQWEsT0FBYixHQUF1QixTQUFTLE9BQVQsR0FBbUIsQ0FBMUM7O0FBRUEsV0FBTyxZQUFQO0FBQ0QsR0FSRDs7QUFVQSxXQUFTLE1BQVQsR0FBa0IsWUFBWTtBQUM1QixhQUFTLE9BQVQsR0FBbUIsU0FBUyxPQUFULEdBQW1CLENBQXRDO0FBQ0QsR0FGRDs7QUFJQSxXQUFTLEtBQVQsR0FBaUIsWUFBWTtBQUMzQixRQUFJLFNBQVMsSUFBVCxLQUFrQixJQUF0QixFQUE0QjtBQUMxQixhQUFPLFNBQVMsRUFBaEI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLFFBQVEsU0FBUyxHQUF4QjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxTQUFPLFFBQVA7QUFDRCxDQXhDRDs7QUEwQ0EsSUFBSSxtQkFBbUIsUUFBUSw2QkFBUixDQUF2Qjs7QUFFQSxJQUFJLG9CQUFvQix1QkFBdUIsZ0JBQXZCLENBQXhCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOzs7O0FDcEQvRjs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxRQUFWLEVBQW9CO0FBQ3BDLE1BQUksUUFBUSxFQUFaO0FBQ0EsUUFBTSxXQUFOLEdBQW9CLENBQXBCO0FBQ0EsUUFBTSxRQUFOLEdBQWlCLFFBQWpCO0FBQ0EsUUFBTSxTQUFOLEdBQWtCLEVBQWxCOztBQUVBLFFBQU0sTUFBTixHQUFlLFVBQVUsS0FBVixFQUFpQjtBQUM5QixVQUFNLFdBQU4sSUFBcUIsTUFBTSxLQUEzQjs7QUFFQSxXQUFPLE1BQU0sV0FBTixHQUFvQixNQUFNLFFBQWpDLEVBQTJDO0FBQ3pDO0FBQ0EsWUFBTSxXQUFOLElBQXFCLE1BQU0sUUFBM0I7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsUUFBTSxXQUFOLEdBQW9CLFVBQVUsUUFBVixFQUFvQjtBQUN0QyxVQUFNLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBcUIsUUFBckI7QUFDRCxHQUZEOztBQUlBLFFBQU0sY0FBTixHQUF1QixVQUFVLFFBQVYsRUFBb0I7QUFDekMsVUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLE1BQU0sU0FBTixDQUFnQixPQUFoQixDQUF3QixRQUF4QixDQUF2QixFQUEwRCxDQUExRDtBQUNELEdBRkQ7O0FBSUEsUUFBTSxLQUFOLEdBQWMsWUFBWTtBQUN4QixXQUFPLE9BQVAsQ0FBZSxZQUFmLENBQTRCLE1BQU0sTUFBbEM7QUFDRCxHQUZEOztBQUlBLFFBQU0sSUFBTixHQUFhLFlBQVk7QUFDdkIsV0FBTyxPQUFQLENBQWUsZUFBZixDQUErQixNQUFNLE1BQXJDO0FBQ0QsR0FGRDs7QUFJQSxXQUFTLGFBQVQsR0FBeUI7QUFDdkIsUUFBSSw0QkFBNEIsSUFBaEM7QUFDQSxRQUFJLG9CQUFvQixLQUF4QjtBQUNBLFFBQUksaUJBQWlCLFNBQXJCOztBQUVBLFFBQUk7QUFDRixXQUFLLElBQUksWUFBWSxNQUFNLFNBQU4sQ0FBZ0IsT0FBTyxRQUF2QixHQUFoQixFQUFvRCxLQUF6RCxFQUFnRSxFQUFFLDRCQUE0QixDQUFDLFFBQVEsVUFBVSxJQUFWLEVBQVQsRUFBMkIsSUFBekQsQ0FBaEUsRUFBZ0ksNEJBQTRCLElBQTVKLEVBQWtLO0FBQ2hLLFlBQUksV0FBVyxNQUFNLEtBQXJCOztBQUVBO0FBQ0Q7QUFDRixLQU5ELENBTUUsT0FBTyxHQUFQLEVBQVk7QUFDWiwwQkFBb0IsSUFBcEI7QUFDQSx1QkFBaUIsR0FBakI7QUFDRCxLQVRELFNBU1U7QUFDUixVQUFJO0FBQ0YsWUFBSSxDQUFDLHlCQUFELElBQThCLFVBQVUsTUFBNUMsRUFBb0Q7QUFDbEQsb0JBQVUsTUFBVjtBQUNEO0FBQ0YsT0FKRCxTQUlVO0FBQ1IsWUFBSSxpQkFBSixFQUF1QjtBQUNyQixnQkFBTSxjQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBTyxLQUFQO0FBQ0QsQ0EzREQ7O0FBNkRBLElBQUksUUFBUSxRQUFRLFNBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7Ozs7QUN2RS9GOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLFFBQVEsT0FBUixHQUFrQixZQUFZO0FBQzVCLE1BQUksU0FBUyxFQUFiOztBQUVBLFNBQU8sYUFBUCxHQUF1QixVQUFVLEtBQVYsRUFBaUI7QUFDdEMsV0FBTyxDQUFDLEdBQUcsYUFBYSxhQUFqQixFQUFnQyxLQUFoQyxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUFPLGFBQVAsR0FBdUIsVUFBVSxLQUFWLEVBQWlCO0FBQ3RDLFdBQU8sQ0FBQyxHQUFHLGFBQWEsYUFBakIsRUFBZ0MsS0FBaEMsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTyxNQUFQLEdBQWdCLFVBQVUsS0FBVixFQUFpQjtBQUMvQixXQUFPLEtBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sVUFBUCxHQUFvQixVQUFVLElBQVYsRUFBZ0IsS0FBaEIsRUFBdUI7QUFDekMsV0FBTyxPQUFPLElBQVAsRUFBYSxLQUFiLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU8sTUFBUDtBQUNELENBcEJEOztBQXNCQSxJQUFJLGVBQWUsUUFBUSxjQUFSLENBQW5COzs7O0FDNUJBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDO0FBR0EsUUFBUSxnQkFBUixHQUEyQixnQkFBM0I7QUFDQSxRQUFRLGdCQUFSLEdBQTJCLGdCQUEzQjs7QUFFQSxJQUFJLFFBQVEsUUFBUSxTQUFSLENBQVo7O0FBRUEsSUFBSSxTQUFTLHVCQUF1QixLQUF2QixDQUFiOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsRUFBNkMsT0FBN0MsRUFBc0QsaUJBQXRELEVBQXlFLGtCQUF6RSxFQUE2RjtBQUMzRixNQUFJLFNBQVMsRUFBYjtBQUNBLFNBQU8sUUFBUCxHQUFrQixRQUFsQjtBQUNBLFNBQU8sZUFBUCxHQUF5QixDQUF6QjtBQUNBLFNBQU8sU0FBUCxHQUFtQixPQUFPLFNBQVAsS0FBcUIsV0FBckIsR0FBbUMsU0FBbkMsR0FBK0MsR0FBbEU7QUFDQSxTQUFPLE9BQVAsR0FBaUIsVUFBVSxPQUFWLEdBQW9CLENBQXJDO0FBQ0EsU0FBTyxRQUFQLEdBQWtCLElBQWxCO0FBQ0EsU0FBTyxlQUFQLEdBQXlCLFVBQVUsVUFBVSxTQUFTLEtBQVQsRUFBcEIsR0FBdUMsQ0FBaEU7QUFDQSxTQUFPLGlCQUFQLEdBQTJCLG9CQUFvQixpQkFBcEIsR0FBd0MsQ0FBbkU7QUFDQSxTQUFPLGtCQUFQLEdBQTRCLGtCQUE1Qjs7QUFFQSxTQUFPLEtBQVAsR0FBZSxVQUFVLFFBQVYsRUFBb0I7QUFDakMsV0FBTyxRQUFQLEdBQWtCLFFBQWxCO0FBQ0EsV0FBTyxPQUFQLENBQWUsWUFBZixDQUE0QixPQUFPLE1BQW5DO0FBQ0QsR0FIRDs7QUFLQSxTQUFPLElBQVAsR0FBYyxZQUFZO0FBQ3hCLFdBQU8sT0FBUCxDQUFlLGVBQWYsQ0FBK0IsT0FBTyxNQUF0QztBQUNBLFdBQU8sZUFBUCxHQUF5QixDQUF6QjtBQUNELEdBSEQ7O0FBS0EsU0FBTyxNQUFQLEdBQWdCLFVBQVUsS0FBVixFQUFpQjtBQUMvQixXQUFPLGVBQVAsR0FBeUIsT0FBTyxlQUFQLEdBQXlCLE1BQU0sS0FBeEQ7O0FBRUEsUUFBSSxjQUFjLE9BQU8sT0FBekI7QUFDQSxXQUFPLE9BQVAsR0FBaUIsT0FBTyxnQkFBUCxDQUF3QixPQUFPLGVBQS9CLENBQWpCO0FBQ0EsV0FBTyxRQUFQLEdBQWtCLGNBQWMsT0FBTyxPQUF2QztBQUNBLFFBQUksT0FBTyxRQUFYLEVBQXFCO0FBQ25CLGFBQU8sUUFBUCxDQUFnQixPQUFPLE9BQXZCLEVBQWdDLEtBQWhDO0FBQ0Q7O0FBRUQ7QUFDRCxHQVhEOztBQWFBLFNBQU8sZ0JBQVAsR0FBMEIsVUFBVSxFQUFWLEVBQWM7QUFDdEMsUUFBSSxlQUFKO0FBQ0EsUUFBSSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsS0FBeUIsSUFBN0IsRUFBbUM7QUFDakMsd0JBQWtCLEtBQUssT0FBTyxRQUFQLENBQWdCLEVBQXJCLEdBQTBCLENBQTVDO0FBQ0Q7QUFDRCxRQUFJLE9BQU8sUUFBUCxDQUFnQixJQUFoQixLQUF5QixLQUE3QixFQUFvQztBQUNsQyx3QkFBa0IsS0FBSyxPQUFPLFFBQVAsQ0FBZ0IsR0FBckIsR0FBMkIsS0FBM0IsR0FBbUMsQ0FBckQ7QUFDRDs7QUFFRCxRQUFJLG1CQUFtQixPQUFPLFNBQTlCLEVBQXlDO0FBQ3ZDLGFBQU8sa0JBQWtCLE9BQU8sU0FBaEM7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPLElBQUksQ0FBQyxrQkFBa0IsT0FBTyxTQUExQixLQUF3QyxJQUFJLE9BQU8sU0FBbkQsQ0FBWDtBQUNEO0FBQ0YsR0FkRDs7QUFnQkEsU0FBTyxrQkFBUCxHQUE0QixVQUFVLE1BQVYsRUFBa0I7OztBQUc1QyxRQUFJLFVBQUo7QUFDQSxRQUFJLE9BQU8sUUFBUCxDQUFnQixJQUFoQixLQUF5QixJQUE3QixFQUFtQztBQUNqQyxtQkFBYSxTQUFTLE9BQU8sUUFBUCxDQUFnQixFQUF0QztBQUNEO0FBQ0QsUUFBSSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsS0FBeUIsS0FBN0IsRUFBb0M7QUFDbEMsbUJBQWEsVUFBVSxRQUFRLE9BQU8sUUFBUCxDQUFnQixHQUFsQyxDQUFiO0FBQ0Q7QUFDRCxRQUFJLFlBQVksYUFBYSxPQUFPLGVBQXBDOztBQUVBLFFBQUksWUFBWSxDQUFoQixFQUFtQjtBQUNqQixVQUFJLE9BQU8sUUFBUCxDQUFnQixJQUFoQixLQUF5QixJQUE3QixFQUFtQztBQUNqQyxvQkFBWSxZQUFZLE9BQU8sUUFBUCxDQUFnQixFQUFoQixHQUFxQixLQUFLLElBQUwsQ0FBVSxLQUFLLEdBQUwsQ0FBUyxTQUFULElBQXNCLE9BQU8sUUFBUCxDQUFnQixFQUFoRCxDQUE3QztBQUNEO0FBQ0QsVUFBSSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsS0FBeUIsS0FBN0IsRUFBb0M7QUFDbEMsb0JBQVksWUFBWSxRQUFRLE9BQU8sUUFBUCxDQUFnQixHQUF4QixHQUE4QixLQUFLLElBQUwsQ0FBVSxLQUFLLEdBQUwsQ0FBUyxTQUFULEtBQXVCLFFBQVEsT0FBTyxRQUFQLENBQWdCLEdBQS9DLENBQVYsQ0FBdEQ7QUFDRDtBQUNGOztBQUVELFdBQU8sT0FBTyxnQkFBUCxDQUF3QixTQUF4QixDQUFQO0FBQ0QsR0F0QkQ7O0FBd0JBLFdBQVMsc0JBQVQsR0FBa0M7QUFDaEMsUUFBSSxlQUFKO0FBQ0EsUUFBSSxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsS0FBeUIsSUFBN0IsRUFBbUM7QUFDakMsd0JBQWtCLEtBQUssS0FBTCxDQUFXLE9BQU8sZUFBUCxHQUF5QixPQUFPLFFBQVAsQ0FBZ0IsRUFBcEQsQ0FBbEI7QUFDRDtBQUNELFFBQUksT0FBTyxRQUFQLENBQWdCLElBQWhCLEtBQXlCLEtBQTdCLEVBQW9DO0FBQ2xDLHdCQUFrQixLQUFLLEtBQUwsQ0FBVyxPQUFPLGVBQVAsR0FBeUIsT0FBTyxRQUFQLENBQWdCLEdBQXpDLEdBQStDLEtBQTFELENBQWxCO0FBQ0Q7QUFDRCxRQUFJLE9BQU8sZUFBUCxHQUF5QixlQUE3QixFQUE4QztBQUM1QyxhQUFPLGVBQVAsR0FBeUIsZUFBekI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsV0FBUyxzQkFBVCxHQUFrQztBQUNoQyxRQUFJLE9BQU8saUJBQVAsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDaEMsVUFBSSxPQUFPLGVBQVAsS0FBMkIsT0FBTyxpQkFBdEMsRUFBeUQ7QUFDdkQsZUFBTyxJQUFQO0FBQ0Q7QUFDRjtBQUNELFFBQUksT0FBTyxrQkFBWCxFQUErQjtBQUM3QixhQUFPLGtCQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLE1BQVA7QUFDRDs7QUFFRCxTQUFTLGdCQUFULENBQTBCLElBQTFCLEVBQWdDLE9BQWhDLEVBQXlDLGlCQUF6QyxFQUE0RCxrQkFBNUQsRUFBZ0Y7QUFDOUUsU0FBTyxlQUFlLElBQWYsRUFBcUIsQ0FBckIsRUFBd0IsT0FBeEIsRUFBaUMsaUJBQWpDLEVBQW9ELGtCQUFwRCxDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxPQUFoQyxFQUF5QyxpQkFBekMsRUFBNEQsa0JBQTVELEVBQWdGO0FBQzlFLFNBQU8sZUFBZSxJQUFmLEVBQXFCLENBQXJCLEVBQXdCLE9BQXhCLEVBQWlDLGlCQUFqQyxFQUFvRCxrQkFBcEQsQ0FBUDtBQUNEOztBQUVELFFBQVEsT0FBUixHQUFrQixjQUFsQjs7OztBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3dkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcGF0aF9tYWdpYyA9IHJlcXVpcmUoJy4vcGF0aF9tYWdpYy9wYXRoX21hZ2ljJyk7XG5cbnZhciBfcGF0aF9tYWdpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX21hZ2ljKTtcblxudmFyIF9zcXVhcmVfZ3JvdXBfc3R1ZmYgPSByZXF1aXJlKCcuL3NxdWFyZV9ncm91cF9zdHVmZi9zcXVhcmVfZ3JvdXBfc3R1ZmYnKTtcblxudmFyIF9zcXVhcmVfZ3JvdXBfc3R1ZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlX2dyb3VwX3N0dWZmKTtcblxudmFyIF96b29tX3N0dWZmID0gcmVxdWlyZSgnLi96b29tX3N0dWZmL3pvb21fc3R1ZmYnKTtcblxudmFyIF96b29tX3N0dWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3pvb21fc3R1ZmYpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHBhdGhNYWdpYzogX3BhdGhfbWFnaWMyLmRlZmF1bHQsXG4gIHNxdWFyZUdyb3VwU3R1ZmY6IF9zcXVhcmVfZ3JvdXBfc3R1ZmYyLmRlZmF1bHQsXG4gIHpvb21TdHVmZjogX3pvb21fc3R1ZmYyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NpdGlvbnMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3dpbmdpbmdfbGluZSA9IHJlcXVpcmUoJy4vc3dpbmdpbmdfbGluZScpO1xuXG52YXIgX3N3aW5naW5nX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3dpbmdpbmdfbGluZSk7XG5cbnZhciBfY3VydmUgPSByZXF1aXJlKCcuL2N1cnZlJyk7XG5cbnZhciBfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VydmUpO1xuXG52YXIgX3dhdmUgPSByZXF1aXJlKCcuL3dhdmUnKTtcblxudmFyIF93YXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhdmUpO1xuXG52YXIgX2Nwb2ludF9zcGlubmVyID0gcmVxdWlyZSgnLi9jcG9pbnRfc3Bpbm5lcicpO1xuXG52YXIgX2Nwb2ludF9zcGlubmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nwb2ludF9zcGlubmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzd2luZ2luZ0xpbmU6IF9zd2luZ2luZ19saW5lMi5kZWZhdWx0LFxuICBjdXJ2ZTogX2N1cnZlMi5kZWZhdWx0LFxuICBjcG9pbnRTcGlubmVyOiBfY3BvaW50X3NwaW5uZXIyLmRlZmF1bHQsXG4gIHdhdmU6IF93YXZlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmV6aWVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aW1lJywgdHJ1ZSk7XG5cbiAgc3dpbmdMaW5lLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBzd2luZ0xpbmUucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gIHN3aW5nTGluZS50aW1lID0gb3B0aW9ucy50aW1lO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDEpO1xuICBzd2luZ0xpbmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzd2luZ0xpbmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgLSBzd2luZ0xpbmUucmFkaXVzLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBzd2luZ0xpbmUucmFkaXVzLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSAoMCwgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMyLmRlZmF1bHQpKGN1cnJlbnQgKiAzNjAsIHN3aW5nTGluZS5yYWRpdXMpO1xuICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzKTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gc3dpbmdMaW5lLmxlbmd0aCAvIDIgLSBjb29yZGluYXRlcy54O1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAtY29vcmRpbmF0ZXMueTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi54ID0gc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBjb29yZGluYXRlcy54O1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSBjb29yZGluYXRlcy55O1xuICAgIHN3aW5nTGluZS5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHN3aW5nTGluZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9oZWxwZXIvZGVncmVlc190b19jb29yZGluYXRlcycpO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVncmVlc190b19jb29yZGluYXRlcyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcG9pbnRfc3Bpbm5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHN3aW5nTGluZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1wbGl0dWRlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBzd2luZ0xpbmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHN3aW5nTGluZS50aW1lLCAwLjUpO1xuICBzd2luZ0xpbmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzd2luZ0xpbmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogMCwgeTogMCB9LCBjcG9pbnQyOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuZW5kLnkgPSAoY3VycmVudCAtIDAuNSkgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnggPSBNYXRoLmFicyhjdXJyZW50IC0gMC41KSAqIHN3aW5nTGluZS5sZW5ndGg7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDIueCA9IChNYXRoLmFicyhjdXJyZW50IC0gMC41KSArIDAuNSkgKiBzd2luZ0xpbmUubGVuZ3RoO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSAoY3VycmVudCAtIDAuNSkgLyAyICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1cnZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aW1lJywgdHJ1ZSk7XG5cbiAgc3dpbmdMaW5lLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBzd2luZ0xpbmUuYW1wbGl0dWRlID0gb3B0aW9ucy5hbXBsaXR1ZGU7XG4gIHN3aW5nTGluZS50aW1lID0gb3B0aW9ucy50aW1lO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDAuNSk7XG4gIHN3aW5nTGluZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHN3aW5nTGluZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDEueSA9IChjdXJyZW50IC0gMC41KSAqIHN3aW5nTGluZS5hbXBsaXR1ZGU7XG4gICAgc3dpbmdMaW5lLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gc3dpbmdMaW5lO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2luZ2luZ19saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdHJldGNoJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIHN3aW5nTGluZS5zdHJldGNoID0gb3B0aW9ucy5zdHJldGNoO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDAuNSk7XG4gIHN3aW5nTGluZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHN3aW5nTGluZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiAtIHN3aW5nTGluZS5zdHJldGNoLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBzd2luZ0xpbmUuc3RyZXRjaCwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmVuZC55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKHN3aW5nTGluZS5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjI1KSAtIDAuNSkgKiAxLjUgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAoc3dpbmdMaW5lLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuNSkgLSAwLjUpICogMS41ICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuc3RhcnQueSA9IChzd2luZ0xpbmUucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC43NSkgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhdmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHJhbnNpdGlvbl9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vdHJhbnNpdGlvbl9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9wYXRoX2RyYXdlcik7XG5cbnZhciBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2JlemllciA9IHJlcXVpcmUoJy4vYmV6aWVyL2JlemllcicpO1xuXG52YXIgX2JlemllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRyYW5zaXRpb25QYXRoRHJhd2VyOiBfdHJhbnNpdGlvbl9wYXRoX2RyYXdlcjIuZGVmYXVsdCxcbiAgcmFuZG9tUGFydFBhdGhEcmF3ZXI6IF9yYW5kb21fcGFydF9wYXRoX2RyYXdlcjIuZGVmYXVsdCxcbiAgYmV6aWVyOiBfYmV6aWVyMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aF9tYWdpYy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHBhdGhEcmF3ZXIgPSB7fTtcblxuICAvLyBIYW5kbGUgcGFyYW1ldGVyczpcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aE9wdGlvbnMnLCBmYWxzZSwge30pO1xuICBwYXRoRHJhd2VyLnBhdGggPSBvcHRpb25zLnBhdGg7XG4gIG9wdGlvbnMucGF0aE9wdGlvbnMucGF0aCA9IHBhdGhEcmF3ZXIucGF0aDtcblxuICAvLyBJbml0XG4gIHBhdGhEcmF3ZXIucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKG9wdGlvbnMucGF0aE9wdGlvbnMpO1xuICBwYXRoRHJhd2VyLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBwYXRoRHJhd2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbihwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LmFkZENoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LnJlbW92ZUNoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5jb21wbGV0ZVBhdGggPSBwYXRoRHJhd2VyLnBhdGguZ2V0UGFydFBhdGgoTWF0aC5yYW5kb20oKSk7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhEcmF3ZXI7XG59O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuLi8uLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHBhdGhEcmF3ZXIgPSB7fTtcblxuICAvLyBIYW5kbGUgUGFyYW1ldGVyc1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoT3B0aW9ucycsIHRydWUpO1xuICBvcHRpb25zLnBhdGhPcHRpb25zLnBhdGggPSBvcHRpb25zLnBhdGg7XG4gIHBhdGhEcmF3ZXIucGF0aCA9IG9wdGlvbnMucGF0aDtcblxuICAvLyBJbml0XG4gIHBhdGhEcmF3ZXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKDEwMDAsIDEpO1xuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShvcHRpb25zLnBhdGhPcHRpb25zKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwYXRoRHJhd2VyLnB1bHNhci5zdGFydChwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LmFkZENoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucHVsc2FyLnN0b3AoKTtcbiAgICBwYXRoRHJhd2VyLnZpZXcucmVtb3ZlQ2hpbGQocGF0aERyYXdlci5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5jb21wbGV0ZVBhdGggPSBwYXRoRHJhd2VyLnBhdGguZ2V0UGFydFBhdGgoY3VycmVudCk7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhEcmF3ZXI7XG59O1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25fcGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciByYW5kb21LYXJvU3dpdGNoID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2x1bW5zJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndmlzaWJsZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCBmYWxzZSwgW10pO1xuXG4gIHZhciBncm91cCA9ICgwLCBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0KSh7ICdjaGlsZHJlbic6IG9wdGlvbnMuY2hpbGRyZW4sICdjb2x1bW5zJzogb3B0aW9ucy5jb2x1bW5zLCAnc3BhY2luZyc6IG9wdGlvbnMuc3BhY2luZyB9KTtcblxuICByYW5kb21LYXJvU3dpdGNoLnZpZXcgPSBncm91cC52aWV3O1xuXG4gIHJhbmRvbUthcm9Td2l0Y2guc3dpdGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21OdW1iZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYW5kb21OdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICAgIHNodWZmbGUocmFuZG9tTnVtYmVycyk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaiA8IG9wdGlvbnMudmlzaWJsZSkge1xuICAgICAgICBncm91cC5jaGlsZHJlbltyYW5kb21OdW1iZXJzW2pdXS52aWV3LmFscGhhID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyb3VwLmNoaWxkcmVuW3JhbmRvbU51bWJlcnNbal1dLnZpZXcuYWxwaGEgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICBmb3IgKHZhciBpID0gYS5sZW5ndGg7IGk7IGktLSkge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgIHZhciBfcmVmID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgIGFbaSAtIDFdID0gX3JlZlswXTtcbiAgICAgIGFbal0gPSBfcmVmWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5kb21LYXJvU3dpdGNoO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuLi8uLi9maWx0ZXJzL2dyb3VwL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3NxdWFyZV9zd2l0Y2guanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd2aXNpYmxlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIGZhbHNlLCBbXSk7XG5cbiAgdmFyIGdyb3VwU3dpdGNoID0gKDAsIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHZhciBncm91cFN3aXRjaFRpbWVyID0gKDAsIF9pbnRlcnZhbF90aW1lcjIuZGVmYXVsdCkob3B0aW9ucy5pbnRlcnZhbCk7XG4gIHZhciBzd2l0Y2hJbnRlcnZhbCA9IHt9O1xuXG4gIHN3aXRjaEludGVydmFsLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGdyb3VwU3dpdGNoVGltZXIuYWRkTGlzdGVuZXIoaGFuZGxlKTtcbiAgICBncm91cFN3aXRjaFRpbWVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBncm91cFN3aXRjaFRpbWVyLnN0b3AoKTtcbiAgICBncm91cFN3aXRjaFRpbWVyLnJlbW92ZUxpc3RlbmVyKGhhbmRsZSk7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwudmlldyA9IGdyb3VwU3dpdGNoLnZpZXc7XG5cbiAgZnVuY3Rpb24gaGFuZGxlKCkge1xuICAgIGdyb3VwU3dpdGNoLnN3aXRjaCgpO1xuICB9XG5cbiAgcmV0dXJuIHN3aXRjaEludGVydmFsO1xufTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2gnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIgPSByZXF1aXJlKCcuLi8uLi90aW1lcnMvaW50ZXJ2YWxfdGltZXInKTtcblxudmFyIF9pbnRlcnZhbF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF90aW1lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2gnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaCk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwgPSByZXF1aXJlKCcuL3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsJyk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJhbmRvbVNxdWFyZVN3aXRjaDogX3JhbmRvbV9zcXVhcmVfc3dpdGNoMi5kZWZhdWx0LFxuICByYW5kb21TcXVhcmVTd2l0Y2hJbnRlcnZhbDogX3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlX2dyb3VwX3N0dWZmLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgb3B0aW9ucy5udW1iZXJPZkludGVydmFscyA9IDE7XG4gIG9wdGlvbnMubGltaXQgPSAwO1xuICBvcHRpb25zLnJpc2luZyA9IHRydWU7XG4gIHZhciB6b29tZXIgPSAoMCwgX2xpbmVhcl9wdWxzYXIyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG4gIHZhciB6b29tT3V0ID0ge307XG4gIHpvb21PdXQuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgem9vbWVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgem9vbU91dC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHpvb21lci5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIHpvb21PdXQ7XG59O1xuXG52YXIgX2xpbmVhcl9wdWxzYXIgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcnMvc2NhbGUvbGluZWFyX3B1bHNhcicpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3B1bHNhcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tX291dC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF96b29tX291dCA9IHJlcXVpcmUoJy4vem9vbV9vdXQnKTtcblxudmFyIF96b29tX291dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgem9vbU91dDogX3pvb21fb3V0Mi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbV9zdHVmZi5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgY29tcG9uZW50ID0ge307XG4gICAgICBjb21wb25lbnQudmlldyA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9jb21wb25lbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NpcmNsZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciBjaXJjbGUgPSAoMCwgX2Fic3RyYWN0X2NvbXBvbmVudDIuZGVmYXVsdCkoKTtcbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XG4gICAgICBjaXJjbGUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICBjaXJjbGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNpcmNsZS52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBjaXJjbGUudmlldy5ncmFwaGljcy5iZWdpbkZpbGwoY2lyY2xlLmNvbG9yKS5kcmF3Q2lyY2xlKDAsIDAsIGNpcmNsZS5jaXJjbGVTaGFwZS5yYWRpdXMgKiBjaXJjbGUuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgY2lyY2xlLmRyYXcoKTtcbiAgICAgIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBjcmVhdGVqcy5Db250YWluZXIoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250YWluZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgdmFyIGN1c3RvbSA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2N1c3RvbVNoYXBlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcbiAgY3VzdG9tLmN1c3RvbVNoYXBlID0gb3B0aW9ucy5jdXN0b21TaGFwZTtcbiAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdXN0b20udmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChjdXN0b20uY29sb3IpLmJlZ2luU3Ryb2tlKCcjMDBGJykubW92ZVRvKDAsIDApO1xuICAgIHZhciBjdXJyZW50ID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGN1c3RvbS5jdXN0b21TaGFwZS5wYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIF9wYXRoX2RyYXdlcjIuZGVmYXVsdFtwYXRoLnR5cGVdKGN1c3RvbS52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY3VzdG9tLmRyYXcoKTtcbiAgcmV0dXJuIGN1c3RvbTtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJyk7XG5cbnZhciBfYWRkX3VwX3BvaW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRfdXBfcG9pbnRzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbV9vYmplY3QuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dlb21ldHJ5L2hlbHBlci9hbmdsZV90b19yYWRpYW5zJyk7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFuczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZV90b19yYWRpYW5zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyplc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UqL1xuZnVuY3Rpb24gcGF0aERyYXdlcigpIHt9XG5cbnBhdGhEcmF3ZXIubGluZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5saW5lVG8oY3VycmVudC54ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS54LCBjdXJyZW50LnkgKyBwYXRoLmdldEVkZ2VQb2ludCgpLnkpO1xufTtcblxucGF0aERyYXdlci5hcmMgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55ICsgcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKC05MCksICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGF0aC5kZWdyZWVzIC0gOTApKTtcbn07XG5cbnBhdGhEcmF3ZXIuc2luZV93YXZlID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGZvciAodmFyIHggPSAwOyB4IDwgcGF0aC5nZXRMZW5ndGgoKTsgeCArPSA1KSB7XG4gICAgdmFyIHBvaW50ID0gcGF0aC5nZXRQb2ludCh4IC8gcGF0aC5nZXRMZW5ndGgoKSk7XG4gICAgZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xuICB9XG59O1xuXG5wYXRoRHJhd2VyLmJlemllcl9jdXJ2ZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBpZiAocGF0aC5jcG9pbnQyKSB7XG4gICAgZ3JhcGhpY3MuYmV6aWVyQ3VydmVUbyhwYXRoLmNwb2ludDEueCwgcGF0aC5jcG9pbnQxLnksIHBhdGguY3BvaW50Mi54LCBwYXRoLmNwb2ludDIueSwgcGF0aC5lbmQueCwgcGF0aC5lbmQueSk7XG4gIH0gZWxzZSB7XG4gICAgZ3JhcGhpY3MucXVhZHJhdGljQ3VydmVUbyhwYXRoLmNwb2ludDEueCwgcGF0aC5jcG9pbnQxLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBwYXRoRHJhd2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzb3VyY2UnLCB0cnVlKTtcblxuICB2YXIgaW1hZ2UgPSB7XG4gICAgdmlldzogbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSksXG4gICAgc2NhbGU6IDAuNVxuICB9O1xuXG4gIGltYWdlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW1hZ2Uudmlldy5zY2FsZVggPSBpbWFnZS5zY2FsZTtcbiAgICBpbWFnZS52aWV3LnNjYWxlWSA9IGltYWdlLnNjYWxlO1xuICB9O1xuXG4gIGltYWdlLmRyYXcoKTtcbiAgcmV0dXJuIGltYWdlO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBsaW5lID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGluZVBhdGgnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGhpY2tuZXNzJywgZmFsc2UsIDEpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICBsaW5lLnBhdGggPSBvcHRpb25zLmxpbmVQYXRoO1xuICAgICAgbGluZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgICBsaW5lLnRoaWNrbmVzcyA9IG9wdGlvbnMudGhpY2tuZXNzO1xuXG4gICAgICBsaW5lLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaW5lLnZpZXcuZ3JhcGhpY3MuYmVnaW5TdHJva2UobGluZS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUobGluZS50aGlja25lc3MgKiBsaW5lLnNjYWxlKS5tb3ZlVG8obGluZS5wYXRoLnN0YXJ0LnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguc3RhcnQueSAqIGxpbmUuc2NhbGUpLmxpbmVUbyhsaW5lLnBhdGguZW5kLnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguZW5kLnkgKiBsaW5lLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIGxpbmUuZHJhdygpO1xuICAgICAgcmV0dXJuIGxpbmU7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGlkKTtcblxuICAgIHZhciBjb250YWluZXIgPSB7fTtcblxuICAgIGNvbnRhaW5lci5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UucmVtb3ZlQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YWdlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5zdGFnZSA9IHN0YWdlO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluX2NvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEpO1xuXG4gICAgICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICAgICBjdXN0b20uY29tcGxldGVQYXRoID0gb3B0aW9ucy5wYXRoO1xuICAgICAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGN1c3RvbS53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICAgIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKGN1c3RvbS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUoY3VzdG9tLndpZHRoKS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjdXN0b20uY29tcGxldGVQYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjdXN0b20uZHJhdygpO1xuICAgICAgcmV0dXJuIGN1c3RvbTtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJyk7XG5cbnZhciBfYWRkX3VwX3BvaW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRfdXBfcG9pbnRzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JlY3RhbmdsZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciByZWN0ID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcbiAgICAgIHJlY3QuaGVpZ2h0ID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS5oZWlnaHQ7XG4gICAgICByZWN0LmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgcmVjdC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVjdC52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICByZWN0LnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHJlY3QuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHJlY3Qud2lkdGggKiByZWN0LnNjYWxlLCByZWN0LmhlaWdodCAqIHJlY3Quc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5kcmF3KCk7XG4gICAgICByZXR1cm4gcmVjdDtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3F1YXJlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgdmFyIHNxdWFyZSA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuICAgICAgc3F1YXJlLnNxdWFyZVNoYXBlID0gb3B0aW9ucy5zcXVhcmVTaGFwZTtcbiAgICAgIHNxdWFyZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICAgIHNxdWFyZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3F1YXJlLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHNxdWFyZS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChzcXVhcmUuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHNxdWFyZS5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogc3F1YXJlLnNjYWxlLCBzcXVhcmUuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHNxdWFyZS5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZHJhdygpO1xuICAgICAgcmV0dXJuIHNxdWFyZTtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cbiAgICAgIGhhbmRsZVZpZGVvU291cmNlKCk7XG5cbiAgICAgIHZhciB2aWRlbyA9IHtcbiAgICAgICAgICAgIHZpZXc6IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpLFxuICAgICAgICAgICAgc2NhbGU6IDAuNVxuICAgICAgfTtcblxuICAgICAgdmlkZW8uZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvLnZpZXcuc2NhbGVYID0gdmlkZW8uc2NhbGU7XG4gICAgICAgICAgICB2aWRlby52aWV3LnNjYWxlWSA9IHZpZGVvLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc291cmNlLnBsYXkoKTtcbiAgICAgIH07XG5cbiAgICAgIHZpZGVvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5zb3VyY2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgICAgICAgICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aWRlby5kcmF3KCk7XG4gICAgICByZXR1cm4gdmlkZW87XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmlkZW8uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfc3F1YXJlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3NxdWFyZScpO1xuXG52YXIgX3NxdWFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcXVhcmUpO1xuXG52YXIgX2NpcmNsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jaXJjbGUnKTtcblxudmFyIF9jaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlKTtcblxudmFyIF9yZWN0YW5nbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvcmVjdGFuZ2xlJyk7XG5cbnZhciBfcmVjdGFuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZSk7XG5cbnZhciBfbWFpbl9jb250YWluZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbWFpbl9jb250YWluZXInKTtcblxudmFyIF9tYWluX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWluX2NvbnRhaW5lcik7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jdXN0b21fb2JqZWN0ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2N1c3RvbV9vYmplY3QnKTtcblxudmFyIF9jdXN0b21fb2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1c3RvbV9vYmplY3QpO1xuXG52YXIgX2ltYWdlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2ltYWdlJyk7XG5cbnZhciBfaW1hZ2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1hZ2UpO1xuXG52YXIgX3ZpZGVvID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3ZpZGVvJyk7XG5cbnZhciBfdmlkZW8yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmlkZW8pO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjb250YWluZXI6IF9jb250YWluZXIyLmRlZmF1bHQsXG4gICAgc3F1YXJlOiBfc3F1YXJlMi5kZWZhdWx0LFxuICAgIGNpcmNsZTogX2NpcmNsZTIuZGVmYXVsdCxcbiAgICByZWN0YW5nbGU6IF9yZWN0YW5nbGUyLmRlZmF1bHQsXG4gICAgbGluZTogX2xpbmUyLmRlZmF1bHQsXG4gICAgY3VzdG9tT2JqZWN0OiBfY3VzdG9tX29iamVjdDIuZGVmYXVsdCxcbiAgICBtYWluQ29udGFpbmVyOiBfbWFpbl9jb250YWluZXIyLmRlZmF1bHQsXG4gICAgaW1hZ2U6IF9pbWFnZTIuZGVmYXVsdCxcbiAgICB2aWRlbzogX3ZpZGVvMi5kZWZhdWx0LFxuICAgIHBhdGg6IF9wYXRoMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFjdG9yeS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbHRlciA9IHt9O1xuXG4gICAgZmlsdGVyLnZpZXcgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcblxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKGZpbHRlci5oYW5kbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihmaWx0ZXIuaGFuZGxlKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2ZpbHRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgYWJzdHJhY3RHcm91cCA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuXG4gICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICAgIGFic3RyYWN0R3JvdXAuYWRkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGFic3RyYWN0R3JvdXAuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGFic3RyYWN0R3JvdXAucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBhYnN0cmFjdEdyb3VwLnJlbW92ZSA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLnNwbGljZShhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpLCAxKTtcbiAgICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBhYnN0cmFjdEdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCBmYWxzZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgdmFyIGNlbnRlckdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2VudGVyR3JvdXAud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIGNlbnRlckdyb3VwLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgY2VudGVyR3JvdXAucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2VudGVyR3JvdXAudmlldy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNlbnRlckdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoY2VudGVyR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG5cbiAgICAgICAgICAgIGlmIChjZW50ZXJHcm91cC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci54ID0gY29udGFpbmVyLnggPSAoaSArIDEpICogY2VudGVyR3JvdXAud2lkdGggLyAoY2VudGVyR3JvdXAuY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZW50ZXJHcm91cC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIueSA9IGNvbnRhaW5lci54ID0gKGkgKyAxKSAqIGNlbnRlckdyb3VwLmhlaWdodCAvIChjZW50ZXJHcm91cC5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VudGVyR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNlbnRlckdyb3VwLnJlZnJlc2goKTtcbiAgICByZXR1cm4gY2VudGVyR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2VudGVyX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCBmYWxzZSwgMTApO1xuICAgIHZhciBjaXJjbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICAgIGNpcmNsZUdyb3VwLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cztcbiAgICAgICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGNpcmNsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9jaXJjbGVfZ3JvdXAnKTtcblxudmFyIF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlX2dyb3VwKTtcblxudmFyIF9zcGlyYWxfY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9zcGlyYWxfY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGlyYWxfY2lyY2xlX2dyb3VwKTtcblxudmFyIF9yYW5kb21fY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9yYW5kb21fY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY2lyY2xlX2dyb3VwKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAgPSByZXF1aXJlKCcuL2NlbnRlcl9ncm91cCcpO1xuXG52YXIgX2NlbnRlcl9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50ZXJfZ3JvdXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlY3RhbmdsZUdyb3VwOiBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21SZWN0YW5nbGVHcm91cDogX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNpcmNsZUdyb3VwOiBfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICBzcGlyYWxDaXJjbGVHcm91cDogX3NwaXJhbF9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIHJhbmRvbUNpcmNsZUdyb3VwOiBfcmFuZG9tX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgY2VudGVyR3JvdXA6IF9jZW50ZXJfZ3JvdXAyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgZmFsc2UsIDEwKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhbmRvbVJhbmdlJywgZmFsc2UsIDEwKTtcbiAgICB2YXIgY2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjaXJjbGVHcm91cC5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgICBjaXJjbGVHcm91cC5yYW5kb21SYW5nZSA9IG9wdGlvbnMucmFuZG9tUmFuZ2U7XG5cbiAgICB2YXIgYW5nbGUgPSAzNjAgLyBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIHZhciBpbm5lckNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLnkgPSAtY2lyY2xlR3JvdXAucmFkaXVzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgLSBjaXJjbGVHcm91cC5yYW5kb21SYW5nZSAqIDAuNSk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKGNpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBjaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEwKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCAxMCk7XG5cbiAgICB2YXIgcmVjdGFuZ2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICByZWN0YW5nbGVHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgcmVjdGFuZ2xlR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICByZWN0YW5nbGVHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci54ID0gTWF0aC5mbG9vcihyZWN0YW5nbGVHcm91cC53aWR0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKHJlY3RhbmdsZUdyb3VwLmhlaWdodCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgcmVjdGFuZ2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlY3RhbmdsZUdyb3VwLnJlZnJlc2goKTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlR3JvdXA7XG59O1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3JlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIGZhbHNlLCAzKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSwgMTApO1xuXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG5cbiAgICByZWN0YW5nbGVHcm91cC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmcgPSBvcHRpb25zLnNwYWNpbmc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIueCA9IGkgJSByZWN0YW5nbGVHcm91cC5jb2x1bW5zICogcmVjdGFuZ2xlR3JvdXAuc3BhY2luZztcbiAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKGkgLyByZWN0YW5nbGVHcm91cC5jb2x1bW5zKSAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XG4gICAgICAgIHJlY3RhbmdsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdGFuZ2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydFJhZGl1cycsIGZhbHNlLCAxMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZW5kUmFkaXVzJywgZmFsc2UsIDEpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JvdW5kcycsIGZhbHNlLCAxKTtcblxuICB2YXIgc3BpcmFsQ2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMgPSBvcHRpb25zLnN0YXJ0UmFkaXVzO1xuICBzcGlyYWxDaXJjbGVHcm91cC5lbmRSYWRpdXMgPSBvcHRpb25zLmVuZFJhZGl1cztcbiAgc3BpcmFsQ2lyY2xlR3JvdXAucm91bmRzID0gb3B0aW9ucy5yb3VuZHM7XG5cbiAgdmFyIGFuZ2xlID0gMzYwICogc3BpcmFsQ2lyY2xlR3JvdXAucm91bmRzIC8gc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICB2YXIgcmFkaXVzSW5jcmVhc2VBbW91bnQgPSAoc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzIC0gc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMpIC8gc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgIHZhciBpbm5lckNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgIGNvbnRhaW5lci5yb3RhdGlvbiA9IGFuZ2xlICogaTtcbiAgICBpbm5lckNvbnRhaW5lci55ID0gLShzcGlyYWxDaXJjbGVHcm91cC5zdGFydFJhZGl1cyArIHJhZGl1c0luY3JlYXNlQW1vdW50ICogaSk7XG4gICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICBzcGlyYWxDaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICByZXR1cm4gc3BpcmFsQ2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3BpcmFsX2NpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Byb2dyZXNzUmF0ZScsIGZhbHNlLCAwKTtcblxuICB2YXIgcGF0aE1vdmVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG4gIHBhdGhNb3Zlci5jdXJyZW50UHJvZ3Jlc3MgPSAwO1xuICBwYXRoTW92ZXIucHJvZ3Jlc3NSYXRlID0gb3B0aW9ucy5wcm9ncmVzc1JhdGU7XG4gIHBhdGhNb3Zlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIHBhdGhNb3Zlci52aWV3LmFkZENoaWxkKG9wdGlvbnMuY2hpbGQudmlldyk7XG5cbiAgcGF0aE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHBhdGhNb3Zlci5jdXJyZW50UHJvZ3Jlc3MgKz0gcGF0aE1vdmVyLnByb2dyZXNzUmF0ZSAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICAgIGlmIChwYXRoTW92ZXIuY3VycmVudFByb2dyZXNzID4gMSkge1xuICAgICAgcGF0aE1vdmVyLmN1cnJlbnRQcm9ncmVzcyAtPSAxO1xuICAgIH1cbiAgICB2YXIgcG9pbnQgPSBwYXRoTW92ZXIucGF0aC5nZXRQb2ludChwYXRoTW92ZXIuY3VycmVudFByb2dyZXNzKTtcbiAgICBwYXRoTW92ZXIudmlldy54ID0gcG9pbnQueDtcbiAgICBwYXRoTW92ZXIudmlldy55ID0gcG9pbnQueTtcbiAgfTtcblxuICByZXR1cm4gcGF0aE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGgtbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgc3BlZWQpIHtcbiAgdmFyIHAyUE1vdmVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG4gIHAyUE1vdmVyLnZpZXcuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG5cbiAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xuICBwMlBNb3Zlci5nb2FsUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgcDJQTW92ZXIuc3BlZWQgPSBzcGVlZCA/IHNwZWVkIDogMTtcbiAgcDJQTW92ZXIucHJvZ3Jlc3MgPSAwO1xuICBwMlBNb3Zlci5maW5pc2hlZCA9IHRydWU7XG4gIHAyUE1vdmVyLnBlcnNwZWN0aXZlID0geyB4OiAwLCB5OiAwIH07XG5cbiAgLypcclxuICAgICAgU2V0cyBpbmZvcm1hdGlvbnMgaW4gdGhlIHBlcnNwZWN0aXZlIG9iamVjdFxyXG4gICAgICBkZXRlcm1zIGlmIHRoZSBnb2FsIHBvaW50IGlzXHJcbiAgICAgIGxlZnQsIHJpZ2h0LCB0b3Agb3IgZG93biBvZiB0aGUgY3VycmVudCBwb2ludFxyXG4gICAqL1xuICBmdW5jdGlvbiBzZXRQZXJzcGVjdGl2ZUluZm9ybWF0aW9uKCkge1xuICAgIGlmIChwMlBNb3Zlci5nb2FsUG9pbnQueCAtIHAyUE1vdmVyLnZpZXcueCA+PSAwKSB7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS54ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDJQTW92ZXIucGVyc3BlY3RpdmUueCA9IC0xO1xuICAgIH1cblxuICAgIGlmIChwMlBNb3Zlci5nb2FsUG9pbnQueSAtIHAyUE1vdmVyLnZpZXcueSA+PSAwKSB7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS55ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDJQTW92ZXIucGVyc3BlY3RpdmUueSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgcDJQTW92ZXIucHJvZ3Jlc3MgKz0gZXZlbnQuZGVsdGEgLyAxMDAwICogcDJQTW92ZXIuc3RlcDtcblxuICAgIGlmIChwMlBNb3Zlci5wcm9ncmVzcyA8PSAxKSB7XG4gICAgICBwMlBNb3Zlci5oYW5kbGVNb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyUE1vdmVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHAyUE1vdmVyLnZpZXcueCA9IHAyUE1vdmVyLmdvYWxQb2ludC54O1xuICAgICAgcDJQTW92ZXIudmlldy55ID0gcDJQTW92ZXIuZ29hbFBvaW50Lnk7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS54ID0gMDtcbiAgICAgIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnkgPSAwO1xuICAgICAgaWYgKHAyUE1vdmVyLmNhbGxiYWNrKSB7XG4gICAgICAgIHAyUE1vdmVyLmNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZVRvKGdvYWxQb2ludCwgY2FsbGJhY2spIHtcbiAgICBwMlBNb3Zlci5kaXJlY3Rpb24gPSAoMCwgX25vcm1hbGl6ZTIuZGVmYXVsdCkoW2dvYWxQb2ludC54IC0gcDJQTW92ZXIudmlldy54LCBnb2FsUG9pbnQueSAtIHAyUE1vdmVyLnZpZXcueV0pO1xuICAgIHAyUE1vdmVyLnN0YXJ0UG9pbnQgPSB7IHg6IHAyUE1vdmVyLnZpZXcueCwgeTogcDJQTW92ZXIudmlldy55IH07XG4gICAgcDJQTW92ZXIuZ29hbFBvaW50ID0gZ29hbFBvaW50O1xuICAgIHAyUE1vdmVyLmRpc3RhbmNlID0gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkoKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKHAyUE1vdmVyLnN0YXJ0UG9pbnQpLCAoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkocDJQTW92ZXIuZ29hbFBvaW50KSk7XG4gICAgcDJQTW92ZXIuc3RlcCA9IHAyUE1vdmVyLnNwZWVkIC8gcDJQTW92ZXIuZGlzdGFuY2U7XG4gICAgcDJQTW92ZXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBwMlBNb3Zlci5maW5pc2hlZCA9IGZhbHNlO1xuICAgIHNldFBlcnNwZWN0aXZlSW5mb3JtYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgcDJQTW92ZXIuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBwMlBNb3Zlci5nb2FsUG9pbnQgPSBudWxsO1xuICAgIHAyUE1vdmVyLmRpcmVjdGlvbiA9ICgwLCBfbm9ybWFsaXplMi5kZWZhdWx0KShbZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55XSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BvaW50UmVhY2hlZCgpIHtcbiAgICBpZiAoIXAyUE1vdmVyLmdvYWxQb2ludCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoKHAyUE1vdmVyLmdvYWxQb2ludC54IC0gcDJQTW92ZXIudmlldy54KSAqIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnggPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKChwMlBNb3Zlci5nb2FsUG9pbnQueSAtIHAyUE1vdmVyLnZpZXcueSkgKiBwMlBNb3Zlci5wZXJzcGVjdGl2ZS55ID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcDJQTW92ZXIuaGFuZGxlID0gaGFuZGxlO1xuICBwMlBNb3Zlci5tb3ZlVG8gPSBtb3ZlVG87XG4gIHAyUE1vdmVyLm1vdmUgPSBtb3ZlO1xuICBwMlBNb3Zlci5pc1BvaW50UmVhY2hlZCA9IGlzUG9pbnRSZWFjaGVkO1xuICByZXR1cm4gcDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uLy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX25vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L25vcm1hbGl6ZScpO1xuXG52YXIgX25vcm1hbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3JtYWxpemUpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvZGlzdGFuY2UnKTtcblxudmFyIF9kaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXN0YW5jZSk7XG5cbnZhciBfdG9fdmVjdG9yID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvdG9fdmVjdG9yJyk7XG5cbnZhciBfdG9fdmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvX3ZlY3Rvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdC1tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCBmYWxzZSwgMSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlYXNpbmdOYW1lJywgZmFsc2UsICdsaW5lYXInKTtcblxuICAgIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfYWJzdHJhY3RNb3ZlcjIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZCwgb3B0aW9ucy5zcGVlZCk7XG4gICAgbGluZWFyUDJQTW92ZXIuZWFzaW5nTmFtZSA9IG9wdGlvbnMuZWFzaW5nTmFtZTtcblxuICAgIHZhciBlYXNpbmdIYW5kbGVyID0gKDAsIF9lYXNpbmcyLmRlZmF1bHQpKCk7XG5cbiAgICBsaW5lYXJQMlBNb3Zlci5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnggPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnggKyBsaW5lYXJQMlBNb3Zlci5kaXN0YW5jZSAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblswXSAqIGVhc2luZ0hhbmRsZXIuZ2V0VmFsdWVPZihsaW5lYXJQMlBNb3Zlci5wcm9ncmVzcywgbGluZWFyUDJQTW92ZXIuZWFzaW5nTmFtZSk7XG4gICAgICAgIGxpbmVhclAyUE1vdmVyLnZpZXcueSA9IGxpbmVhclAyUE1vdmVyLnN0YXJ0UG9pbnQueSArIGxpbmVhclAyUE1vdmVyLmRpc3RhbmNlICogbGluZWFyUDJQTW92ZXIuZGlyZWN0aW9uWzFdICogZWFzaW5nSGFuZGxlci5nZXRWYWx1ZU9mKGxpbmVhclAyUE1vdmVyLnByb2dyZXNzLCBsaW5lYXJQMlBNb3Zlci5lYXNpbmdOYW1lKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpbmVhclAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdE1vdmVyID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1tb3ZlcicpO1xuXG52YXIgX2Fic3RyYWN0TW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RNb3Zlcik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vLi4vLi4vdHJhbnNpdGlvbnMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Vhc2luZyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NoYWtlRmFjdG9yJywgZmFsc2UsIDEpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgZmFsc2UsIDEpO1xuXG4gIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfYWJzdHJhY3RNb3ZlcjIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZCwgb3B0aW9ucy5zcGVlZCk7XG4gIGxpbmVhclAyUE1vdmVyLnNoYWtlRmFjdG9yID0gb3B0aW9ucy5zaGFrZUZhY3RvcjtcblxuICBsaW5lYXJQMlBNb3Zlci5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21GYWN0b3IgPSBNYXRoLnJhbmRvbSgpICogbGluZWFyUDJQTW92ZXIuc2hha2VGYWN0b3IgLSBsaW5lYXJQMlBNb3Zlci5zaGFrZUZhY3RvciAvIDI7XG4gICAgbGluZWFyUDJQTW92ZXIudmlldy54ID0gbGluZWFyUDJQTW92ZXIuc3RhcnRQb2ludC54ICsgbGluZWFyUDJQTW92ZXIuZGlzdGFuY2UgKiBsaW5lYXJQMlBNb3Zlci5kaXJlY3Rpb25bMF0gKiBsaW5lYXJQMlBNb3Zlci5wcm9ncmVzcyArIHJhbmRvbUZhY3RvciAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblswXTtcbiAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnkgPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnkgKyBsaW5lYXJQMlBNb3Zlci5kaXN0YW5jZSAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblsxXSAqIGxpbmVhclAyUE1vdmVyLnByb2dyZXNzICsgcmFuZG9tRmFjdG9yICogbGluZWFyUDJQTW92ZXIuZGlyZWN0aW9uWzFdO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RNb3ZlciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtbW92ZXInKTtcblxudmFyIF9hYnN0cmFjdE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0TW92ZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3NoYWtlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIGZhbHNlLCAxMDAwKTtcblxuICAgIHZhciBmYWRlciA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuICAgIGZhZGVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgICBmYWRlci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoZmFkZXIuc3BlZWQsIDAuNSk7XG5cbiAgICBmYWRlci52aWV3LmFkZENoaWxkKG9wdGlvbnMuY2hpbGQudmlldyk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGUoY3VycmVudCkge1xuICAgICAgICBmYWRlci52aWV3LmFscGhhID0gY3VycmVudDtcbiAgICB9XG5cbiAgICBmYWRlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmFkZXIucHVsc2FyLnN0YXJ0KGhhbmRsZSk7XG4gICAgfTtcblxuICAgIGZhZGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZhZGVyLnB1bHNhci5zdG9wKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBmYWRlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuXG4gICAgdmFyIGZsYXNoZXIgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcblxuICAgIGZsYXNoZXIudmlldy5hZGRDaGlsZChvcHRpb25zLmNoaWxkLnZpZXcpO1xuICAgIGZsYXNoZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmbGFzaGVyLnZpZXcudmlzaWJsZSA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XG4gICAgfTtcblxuICAgIHJldHVybiBmbGFzaGVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsYXNoZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgZmFsc2UsIDEpO1xuICB2YXIgbGluZWFyUm90YXRvciA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuICBsaW5lYXJSb3RhdG9yLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgbGluZWFyUm90YXRvci52aWV3LmFkZENoaWxkKG9wdGlvbnMuY2hpbGQudmlldyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgbGluZWFyUm90YXRvci52aWV3LnJvdGF0aW9uID0gbGluZWFyUm90YXRvci52aWV3LnJvdGF0aW9uICsgbGluZWFyUm90YXRvci5zcGVlZCAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICB9XG5cbiAgbGluZWFyUm90YXRvci5oYW5kbGUgPSBoYW5kbGU7XG5cbiAgcmV0dXJuIGxpbmVhclJvdGF0b3I7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3JvdGF0b3IuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHBvaW50MSwgcG9pbnQyKSB7XG4gIHZhciBwb2ludCA9IHt9O1xuICBwb2ludC54ID0gcG9pbnQxLnggKyBwb2ludDIueDtcbiAgcG9pbnQueSA9IHBvaW50MS55ICsgcG9pbnQyLnk7XG4gIHJldHVybiBwb2ludDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGRfdXBfcG9pbnRzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmVjdG9yMSwgdmVjdG9yMikge1xuICBpZiAodmVjdG9yMS5sZW5ndGggIT09IHZlY3RvcjIubGVuZ3RoKSB7XG4gICAgdGhyb3cgJ0Nhbm5vdCBjYWxjdWxhdGUgZGlzdGFuY2Ugb2YgdmVjdG9ycyB3aXRoIGRpZmZlcmVudCBudW1iZXJzIG9mIGRpbWVuc2lvbnMnO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKykge1xuICAgIGRpc3RhbmNlICs9IE1hdGgucG93KHZlY3RvcjFbaV0gLSB2ZWN0b3IyW2ldLCAyKTtcbiAgfVxuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RhbmNlKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXN0YW5jZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYW5nbGUpIHtcbiAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmdsZV90b19yYWRpYW5zLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYW5nbGUsIGxlbmd0aCkge1xuICB2YXIgcmFkID0gKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShhbmdsZSk7XG4gIHJldHVybiB7IHg6IE1hdGguY29zKHJhZCkgKiBsZW5ndGgsIHk6IE1hdGguc2luKHJhZCkgKiBsZW5ndGggfTtcbn07XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJy4vYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZlY3Rvcikge1xuICAgIHZhciBub3JtYWxpemVkVmVjdG9yID0gW107XG4gICAgdmFyIHNxdWFyZVN1bSA9IDA7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHZlY3RvcltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICBzcXVhcmVTdW0gKz0gZW50cnkgKiBlbnRyeTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydChzcXVhcmVTdW0pO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZWN0b3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm9ybWFsaXplZFZlY3RvcltpXSA9IHZlY3RvcltpXSAvIGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFZlY3Rvcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcmNDb25zdHJ1Y3RvcjtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zID0gcmVxdWlyZSgnLi4vaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhcmNDb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZGVncmVlcycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuXG4gIHZhciBhcmMgPSB7fTtcblxuICBhcmMuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBhcmMuZGVncmVlcyA9IG9wdGlvbnMuZGVncmVlcztcbiAgYXJjLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICBhcmMudHlwZSA9ICdhcmMnO1xuXG4gIGFyYy5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyYy5nZXRQb2ludCgxKTtcbiAgfTtcblxuICBhcmMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAyICogTWF0aC5QSSAqIGFyYy5yYWRpdXMgKiAoYXJjLmRlZ3JlZXMgLyAzNjApO1xuICB9O1xuXG4gIGFyYy5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBvcmlnaW4gPSB7IHg6IDAsIHk6IGFyYy5zdGFydC55ICsgYXJjLnJhZGl1cyB9O1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcbiAgICByZXR1cm4ge1xuICAgICAgeDogb3JpZ2luLnggKyBhcmMucmFkaXVzICogTWF0aC5zaW4oKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSksXG4gICAgICB5OiBvcmlnaW4ueSArIGFyYy5yYWRpdXMgKiAtTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICB9O1xuICB9O1xuXG4gIGFyYy5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcbiAgICByZXR1cm4gYXJjQ29uc3RydWN0b3IoeyBzdGFydDogYXJjLnN0YXJ0LCBkZWdyZWVzOiBwYXJ0T2ZEZWdyZWVzLCByYWRpdXM6IGFyYy5yYWRpdXMgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGFyYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyYy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjcG9pbnQxJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3BvaW50MicsIGZhbHNlKTtcblxuICB2YXIgYmV6aWVyQ3VydmUgPSB7fTtcbiAgYmV6aWVyQ3VydmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBiZXppZXJDdXJ2ZS5lbmQgPSBvcHRpb25zLmVuZDtcbiAgYmV6aWVyQ3VydmUuY3BvaW50MSA9IG9wdGlvbnMuY3BvaW50MTtcbiAgYmV6aWVyQ3VydmUuY3BvaW50MiA9IG9wdGlvbnMuY3BvaW50MjtcbiAgYmV6aWVyQ3VydmUudHlwZSA9ICdiZXppZXJfY3VydmUnO1xuXG4gIGlmIChiZXppZXJDdXJ2ZS5jcG9pbnQyKSB7XG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgX2JlemllckpzMi5kZWZhdWx0KGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5jcG9pbnQyLCBiZXppZXJDdXJ2ZS5lbmQpO1xuICB9IGVsc2Uge1xuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IF9iZXppZXJKczIuZGVmYXVsdChiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuZW5kKTtcbiAgfVxuXG4gIGJlemllckN1cnZlLnN1YlBhdGhzID0gW2JlemllckN1cnZlXTtcblxuICBiZXppZXJDdXJ2ZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGJlemllckN1cnZlLmVuZDtcbiAgfTtcblxuICBiZXppZXJDdXJ2ZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyLmxlbmd0aCgpO1xuICB9O1xuXG4gIGJlemllckN1cnZlLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyLmdldChwcm9ncmVzcyk7XG4gIH07XG5cbiAgLy9UT0RPIEFkZCBnZXQgcGFydCBwYXRoIGZ1bmN0aW9uXG5cbiAgcmV0dXJuIGJlemllckN1cnZlO1xufTtcblxudmFyIF9iZXppZXJKcyA9IHJlcXVpcmUoJ2Jlemllci1qcycpO1xuXG52YXIgX2JlemllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JlemllckpzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllcl9jdXJ2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxpbmVDb25zdHJ1Y3RvcjtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCcuLi90b192ZWN0b3InKTtcblxudmFyIF90b192ZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9fdmVjdG9yKTtcblxudmFyIF9kaXN0YW5jZSA9IHJlcXVpcmUoJy4uL2Rpc3RhbmNlJyk7XG5cbnZhciBfZGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlzdGFuY2UpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBsaW5lQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xuXG4gIHZhciBsaW5lID0ge307XG4gIGxpbmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBsaW5lLmVuZCA9IG9wdGlvbnMuZW5kO1xuICBsaW5lLnR5cGUgPSAnbGluZSc7XG5cbiAgbGluZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxpbmUuZW5kO1xuICB9O1xuXG4gIGxpbmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkobGluZS5zdGFydCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KShsaW5lLmVuZCkpO1xuICB9O1xuXG4gIGxpbmUuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogbGluZS5zdGFydC54ICsgKGxpbmUuZW5kLnggLSBsaW5lLnN0YXJ0LngpICogcHJvZ3Jlc3MsXG4gICAgICB5OiBsaW5lLnN0YXJ0LnkgKyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSkgKiBwcm9ncmVzc1xuICAgIH07XG4gIH07XG5cbiAgbGluZS5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBuZXdFbmQgPSB7IHg6IGxpbmUuZW5kLnggKiBwcm9ncmVzcywgeTogbGluZS5lbmQueSAqIHByb2dyZXNzIH07XG4gICAgdmFyIHBhdGhQYXJ0ID0gbGluZUNvbnN0cnVjdG9yKHsgc3RhcnQ6IGxpbmUuc3RhcnQsIGVuZDogbmV3RW5kIH0pO1xuICAgIHJldHVybiBwYXRoUGFydDtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwYXRoQ29uc3RydWN0b3I7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJy4uL2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXRoQ29uc3RydWN0b3IoKSB7XG5cbiAgdmFyIHBhdGggPSB7fTtcblxuICBwYXRoLnN1YlBhdGhzID0gW107XG5cbiAgcGF0aC5nZXRFZGdlUG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlZGdlUG9pbnRzID0gW107XG4gICAgZWRnZVBvaW50cy5wdXNoKHsgeDogMCwgeTogMCB9KTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBzdWJQYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgZWRnZVBvaW50cy5wdXNoKCgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoZWRnZVBvaW50c1tlZGdlUG9pbnRzLmxlbmd0aCAtIDFdLCBzdWJQYXRoLmdldEVkZ2VQb2ludCgpKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQb2ludHM7XG4gIH07XG5cbiAgcGF0aC5nZXRTdGFydFBvaW50T2YgPSBmdW5jdGlvbiAoc3ViUGF0aCkge1xuICAgIHZhciBzdGFydFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBwYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICBpZiAoY3VycmVudFBhdGggPT09IHN1YlBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRQb2ludDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFBvaW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdGFydFBvaW50LCBjdXJyZW50UGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICBpZiAobGVuZ3RoUG9pbnQgPiBzdWJQYXRoLmdldExlbmd0aCgpKSB7XG4gICAgICAgICAgbGVuZ3RoUG9pbnQgLT0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdWJQYXRoLmdldFBvaW50KGxlbmd0aFBvaW50IC8gc3ViUGF0aC5nZXRMZW5ndGgoKSksIHBhdGguZ2V0U3RhcnRQb2ludE9mKHN1YlBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGF0aC5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICBsZW5ndGggKz0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjQgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgJiYgX2l0ZXJhdG9yNC5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICBwYXRoLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG5ld1N1YlBhdGhzID0gW107XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xuICAgIHZhciBzdWJQYXRoc1JldHJpZXZlZCA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50UGF0aCA9IDA7XG5cbiAgICB3aGlsZSAoIXN1YlBhdGhzUmV0cmlldmVkKSB7XG4gICAgICBpZiAobGVuZ3RoUG9pbnQgPiBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZW5ndGhQb2ludCAtPSBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKTtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aCgxKSk7XG4gICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aChsZW5ndGhQb2ludCAvIHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSk7XG4gICAgICAgIHN1YlBhdGhzUmV0cmlldmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGFydFBhdGggPSBwYXRoQ29uc3RydWN0b3IoKTtcbiAgICBwYXJ0UGF0aC5zdWJQYXRocyA9IG5ld1N1YlBhdGhzO1xuICAgIHJldHVybiBwYXJ0UGF0aDtcbiAgfTtcblxuICByZXR1cm4gcGF0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFyYzogX2FyYzIuZGVmYXVsdCxcbiAgbGluZTogX2xpbmUyLmRlZmF1bHQsXG4gIHBhdGg6IF9wYXRoMi5kZWZhdWx0LFxuICBiZXppZXJDdXJ2ZTogX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XG5cbiAgdmFyIGNpcmNsZSA9IHt9O1xuICBjaXJjbGUucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG5cbiAgY2lyY2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIGNpcmNsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9hcmMyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogLWNpcmNsZS5yYWRpdXMgfSwgZGVncmVlczogMzYwLCByYWRpdXM6IGNpcmNsZS5yYWRpdXMgfSkpO1xuXG4gIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9hcmMgPSByZXF1aXJlKCcuLi9wYXRocy9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG5cbiAgdmFyIHJlY3RhbmdsZSA9IHt9O1xuICByZWN0YW5nbGUud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByZWN0YW5nbGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgcmVjdGFuZ2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogcmVjdGFuZ2xlLmhlaWdodCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogLXJlY3RhbmdsZS5oZWlnaHQgfSB9KSk7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uL3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuLi9wYXRocy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGUgPSByZXF1aXJlKCcuL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vc3F1YXJlJyk7XG5cbnZhciBfc3F1YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZSk7XG5cbnZhciBfY2lyY2xlID0gcmVxdWlyZSgnLi9jaXJjbGUnKTtcblxudmFyIF9jaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGU6IF9yZWN0YW5nbGUyLmRlZmF1bHQsXG4gIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgY2lyY2xlOiBfY2lyY2xlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhcGVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2lkZWxlbmd0aCcsIHRydWUpO1xuXG4gIHZhciBzcXVhcmUgPSB7fTtcbiAgc3F1YXJlLnNpZGVsZW5ndGggPSBvcHRpb25zLnNpZGVsZW5ndGg7XG5cbiAgc3F1YXJlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiBzcXVhcmUuc2lkZWxlbmd0aCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiAtc3F1YXJlLnNpZGVsZW5ndGggfSB9KSk7XG5cbiAgcmV0dXJuIHNxdWFyZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uL3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuLi9wYXRocy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgcmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b192ZWN0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJPYmplY3QsIG9wdGlvbiwgcmVxdWlyZWQsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoIXJlcXVpcmVkKSB7XG4gICAgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPSBwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSA/IHBhcmFtZXRlck9iamVjdFtvcHRpb25dIDogZGVmYXVsdFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGlmICghcGFyYW1ldGVyT2JqZWN0Lmhhc093blByb3BlcnR5KG9wdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBvcHRpb246JyArIG9wdGlvbik7XG4gICAgfVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hlY2tfcGFyYW1ldGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBkb05vdENoYWluKSB7XG4gIGlmICghZG9Ob3RDaGFpbikge1xuICAgIGlmIChlbGVtZW50Lmhhc093blByb3BlcnR5KCdzZXRQcm9wJykpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnNldFByb3AocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICBlbGVtZW50W3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHNldCBwcm9wZXJ0eSBvZiBvYmplY3QuIE9iamVjdCBoYXNuXFwndCB0aGUgcHJvcGVydHk6ICcgKyBwcm9wZXJ0eSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXRfcHJvcC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWRkQW5pbWF0aW9uOiBmdW5jdGlvbiBhZGRBbmltYXRpb24oaGFuZGxlKSB7XG4gICAgY3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XG4gICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xuICB9LFxuICByZW1vdmVBbmltYXRpb246IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihoYW5kbGUpIHtcbiAgICBjcmVhdGVqcy5UaWNrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb29wLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2ZsYXNoZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvb3BhY2l0eS9mbGFzaGVyJyk7XG5cbnZhciBfZmxhc2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGFzaGVyKTtcblxudmFyIF9mYWRlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZhZGVyJyk7XG5cbnZhciBfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFkZXIpO1xuXG52YXIgX2xpbmVhciA9IHJlcXVpcmUoJy4vZmlsdGVycy9tb3Zlci9wb2ludDJwb2ludC9saW5lYXInKTtcblxudmFyIF9saW5lYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyKTtcblxudmFyIF9saW5lYXJfc2hha2UgPSByZXF1aXJlKCcuL2ZpbHRlcnMvbW92ZXIvcG9pbnQycG9pbnQvbGluZWFyX3NoYWtlJyk7XG5cbnZhciBfbGluZWFyX3NoYWtlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9zaGFrZSk7XG5cbnZhciBfZ3JvdXAgPSByZXF1aXJlKCcuL2ZpbHRlcnMvZ3JvdXAvZ3JvdXAnKTtcblxudmFyIF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncm91cCk7XG5cbnZhciBfbGluZWFyX3JvdGF0b3IgPSByZXF1aXJlKCcuL2ZpbHRlcnMvcm90YXRvci9saW5lYXJfcm90YXRvcicpO1xuXG52YXIgX2xpbmVhcl9yb3RhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9yb3RhdG9yKTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlciA9IHJlcXVpcmUoJy4vbW9kaWZpY2F0b3JzL2NvbG9yL3JhbmRvbV9jb2xvcl9jaGFuZ2VyJyk7XG5cbnZhciBfcmFuZG9tX2NvbG9yX2NoYW5nZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2NvbG9yX2NoYW5nZXIpO1xuXG52YXIgX2NvbG9yX2ZhZGVyID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvY29sb3IvY29sb3JfZmFkZXInKTtcblxudmFyIF9jb2xvcl9mYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcl9mYWRlcik7XG5cbnZhciBfbGluZWFyX3B1bHNhciA9IHJlcXVpcmUoJy4vbW9kaWZpY2F0b3JzL3NjYWxlL2xpbmVhcl9wdWxzYXInKTtcblxudmFyIF9saW5lYXJfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9wdWxzYXIpO1xuXG52YXIgX3JhbmRvbUNvbG9yID0gcmVxdWlyZSgncmFuZG9tQ29sb3InKTtcblxudmFyIF9yYW5kb21Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21Db2xvcik7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfc2hhcGVzID0gcmVxdWlyZSgnLi9nZW9tZXRyeS9zaGFwZXMvc2hhcGVzJyk7XG5cbnZhciBfc2hhcGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYXBlcyk7XG5cbnZhciBfcGF0aHMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3BhdGhzL3BhdGhzJyk7XG5cbnZhciBfcGF0aHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aHMpO1xuXG52YXIgX3BhdGhNb3ZlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9tb3Zlci9wYXRoL3BhdGgtbW92ZXInKTtcblxudmFyIF9wYXRoTW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aE1vdmVyKTtcblxudmFyIF9jb21wb3NpdGlvbnMgPSByZXF1aXJlKCcuL2NvbXBvc2l0aW9ucy9jb21wb3NpdGlvbnMnKTtcblxudmFyIF9jb21wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRpb25zKTtcblxudmFyIF9wcm94aWVzID0gcmVxdWlyZSgnLi9wcm94aWVzL3Byb3hpZXMnKTtcblxudmFyIF9wcm94aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3hpZXMpO1xuXG52YXIgX2ludGVydmFsID0gcmVxdWlyZSgnLi90aW1lcnMvaW50ZXJ2YWwnKTtcblxudmFyIF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vVE9ETyBPcmdhbml6ZSBpbXBvcnRzXG5cbmZ1bmN0aW9uIGNyZWF0ZShjYW52YXNJZCkge1xuICB2YXIgbWFpbkNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0Lm1haW5Db250YWluZXIoY2FudmFzSWQpO1xuICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24obWFpbkNvbnRhaW5lci5zdGFnZSk7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICBtYWluQ29udGFpbmVyOiBtYWluQ29udGFpbmVyLFxuICAgIGZhY3Rvcnk6IF9mYWN0b3J5Mi5kZWZhdWx0LFxuICAgIGxvb3A6IF9sb29wMi5kZWZhdWx0LFxuICAgIGludGVydmFsOiBfaW50ZXJ2YWwyLmRlZmF1bHQsXG4gICAgdXRpbHM6IHtcbiAgICAgIHJhbmRvbUNvbG9yOiBfcmFuZG9tQ29sb3IyLmRlZmF1bHRcbiAgICB9LFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICBzaGFwZXM6IF9zaGFwZXMyLmRlZmF1bHQsXG4gICAgICBwYXRoczogX3BhdGhzMi5kZWZhdWx0XG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIGZsYXNoZXI6IF9mbGFzaGVyMi5kZWZhdWx0LFxuICAgICAgICBmYWRlcjogX2ZhZGVyMi5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgbW92ZXI6IHtcbiAgICAgICAgcG9pbnQycG9pbnQ6IHtcbiAgICAgICAgICBsaW5lYXI6IF9saW5lYXIyLmRlZmF1bHQsXG4gICAgICAgICAgbGluZWFyU2hha2U6IF9saW5lYXJfc2hha2UyLmRlZmF1bHRcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgIHBhdGhNb3ZlcjogX3BhdGhNb3ZlcjIuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ3JvdXA6IF9ncm91cDIuZGVmYXVsdCxcbiAgICAgIHJvdGF0b3I6IHtcbiAgICAgICAgbGluZWFyUm90YXRvcjogX2xpbmVhcl9yb3RhdG9yMi5kZWZhdWx0XG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RpZmljYXRvcnM6IHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHJhbmRvbUNvbG9yQ2hhbmdlcjogX3JhbmRvbV9jb2xvcl9jaGFuZ2VyMi5kZWZhdWx0LFxuICAgICAgICBjb2xvckZhZGVyOiBfY29sb3JfZmFkZXIyLmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBsaW5lYXJQdWxzYXI6IF9saW5lYXJfcHVsc2FyMi5kZWZhdWx0XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wb3NpdGlvbnM6IF9jb21wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcHJveGllczogX3Byb3hpZXMyLmRlZmF1bHRcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjEnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjInLCB0cnVlKTtcblxuICB2YXIgY29sb3JGYWRlciA9IHt9O1xuICBjb2xvckZhZGVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGNvbG9yRmFkZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBjb2xvckZhZGVyLmNvbG9yMSA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IxKTtcbiAgY29sb3JGYWRlci5jb2xvcjIgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMik7XG4gIGNvbG9yRmFkZXIuY3VycmVudENvbG9yID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjEpO1xuICBjb2xvckZhZGVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShjb2xvckZhZGVyLnNwZWVkLCAwLjUpO1xuXG4gIGNvbG9yRmFkZXIuY29sb3JSYW5nZSA9IHtcbiAgICByOiBjb2xvckZhZGVyLmNvbG9yMi5yZWQoKSAtIGNvbG9yRmFkZXIuY29sb3IxLnJlZCgpLFxuICAgIGc6IGNvbG9yRmFkZXIuY29sb3IyLmdyZWVuKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ncmVlbigpLFxuICAgIGI6IGNvbG9yRmFkZXIuY29sb3IyLmJsdWUoKSAtIGNvbG9yRmFkZXIuY29sb3IxLmJsdWUoKVxuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29sb3JGYWRlci5wdWxzYXIuc3RhcnQoY29sb3JGYWRlci5oYW5kbGUpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb2xvckZhZGVyLnB1bHNhci5zdG9wKCk7XG4gIH07XG5cbiAgY29sb3JGYWRlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLnJlZChjb2xvckZhZGVyLmNvbG9yMS5yZWQoKSArIGN1cnJlbnQgKiBjb2xvckZhZGVyLmNvbG9yUmFuZ2Uucik7XG4gICAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IuZ3JlZW4oY29sb3JGYWRlci5jb2xvcjEuZ3JlZW4oKSArIGN1cnJlbnQgKiBjb2xvckZhZGVyLmNvbG9yUmFuZ2UuZyk7XG4gICAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IuYmx1ZShjb2xvckZhZGVyLmNvbG9yMS5ibHVlKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLmIpO1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGNvbG9yRmFkZXIuc3ViamVjdCwgJ2NvbG9yJywgY29sb3JGYWRlci5jdXJyZW50Q29sb3IucmdiU3RyaW5nKCkpO1xuICAgIGNvbG9yRmFkZXIuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbG9yRmFkZXI7XG59O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yX2ZhZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21Db2xvckNoYW5nZXIgPSB7fTtcbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbihyYW5kb21Db2xvckNoYW5nZXIuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21Db2xvckNoYW5nZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24ocmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KShyYW5kb21Db2xvckNoYW5nZXIuc3ViamVjdCwgJ2NvbG9yJywgKDAsIF9yYW5kb21Db2xvcjIuZGVmYXVsdCkoKSk7XG4gICAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiByYW5kb21Db2xvckNoYW5nZXI7XG59O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuLi8uLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9yYW5kb21Db2xvciA9IHJlcXVpcmUoJ3JhbmRvbUNvbG9yJyk7XG5cbnZhciBfcmFuZG9tQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tQ29sb3IpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY29sb3JfY2hhbmdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xpbWl0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbnVtYmVyT2ZJbnRlcnZhbHMnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmlzaW5nJywgZmFsc2UsIHRydWUpO1xuXG4gIHZhciBsaW5lYXJQdWxzYXIgPSB7fTtcbiAgbGluZWFyUHVsc2FyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGxpbmVhclB1bHNhci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGxpbmVhclB1bHNhci5saW1pdCA9IG9wdGlvbnMubGltaXQ7XG4gIGlmICghb3B0aW9ucy5yaXNpbmcpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AucHVsc2FyVHJhbnNpdGlvbikobGluZWFyUHVsc2FyLnNwZWVkLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AucmlzaW5nVHJhbnNpdGlvbikobGluZWFyUHVsc2FyLnNwZWVkLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzKTtcbiAgfVxuXG4gIGxpbmVhclB1bHNhci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0YXJ0KGxpbmVhclB1bHNhci5oYW5kbGUpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGxpbmVhclB1bHNhci5wdWxzYXIuc3RvcCgpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGxpbmVhclB1bHNhci5zdWJqZWN0LCAnc2NhbGUnLCAxICsgY3VycmVudCAqIChsaW5lYXJQdWxzYXIubGltaXQgLSAxKSk7XG4gICAgbGluZWFyUHVsc2FyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQdWxzYXI7XG59O1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfcHVsc2FyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9IHt9O1xuICBwcm94eS5ncm91cCA9IFtdO1xuXG4gIHByb3h5LmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHByb3h5Lmdyb3VwLnB1c2goZWxlbWVudCk7XG4gIH07XG5cbiAgcHJveHkucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcHJveHkuZ3JvdXAuc3BsaWNlKHByb3h5Lmdyb3VwLmluZGV4T2YoZWxlbWVudCksIDEpO1xuICB9O1xuXG4gIHByb3h5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwcm94eS5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwcm94eS5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIG9iaiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50KG9iaiwgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzaHVmZmxlJywgZmFsc2UsIGZhbHNlKTtcblxuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHByb3h5LnNodWZmbGUgJiYgcHJveHkuY3VycmVudEVsZW1lbnRJbmRleCA9PT0gMCkge1xuICAgICAgcHJveHkuc2h1ZmZsZUdyb3VwKCk7XG4gICAgfVxuICAgIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50KHByb3h5Lmdyb3VwW3Byb3h5LmN1cnJlbnRFbGVtZW50SW5kZXhdLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4Kys7XG4gICAgaWYgKHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXggPj0gcHJveHkuZ3JvdXAubGVuZ3RoKSB7XG4gICAgICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcbiAgICB9XG4gIH07XG5cbiAgcHJveHkuc2h1ZmZsZUdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgIC8vVE9ETyBpbXBsZW1lbnQgc2h1ZmZsZSBhbGdvcml0aG1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluY3JlbWVudF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XG5cbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcbiAgcHJveHkuaW50ZXJ2YWwgPSBvcHRpb25zLmludGVydmFsO1xuICBwcm94eS50aW1lciA9ICgwLCBfaW50ZXJ2YWxfdGltZXIyLmRlZmF1bHQpKHByb3h5LmludGVydmFsKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHAgPSAoMCwgX2luY3JlbWVudF9wcm94eTIuZGVmYXVsdCkoe30pO1xuICAgIHAuZ3JvdXAgPSBwcm94eS5ncm91cDtcbiAgICB2YXIgY2hhbmdlUHJvcENhbGxiYWNrID0gZnVuY3Rpb24gY2hhbmdlUHJvcENhbGxiYWNrKCkge1xuICAgICAgcC5zZXRQcm9wKG5hbWUsIHZhbHVlKTtcbiAgICAgIHAuZHJhdygpO1xuICAgICAgaWYgKHAuY3VycmVudEVsZW1lbnRJbmRleCA9PT0gMCkge1xuICAgICAgICBwcm94eS50aW1lci5yZW1vdmVMaXN0ZW5lcihjaGFuZ2VQcm9wQ2FsbGJhY2spO1xuICAgICAgICBwLmdyb3VwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHByb3h5LnRpbWVyLmFkZExpc3RlbmVyKGNoYW5nZVByb3BDYWxsYmFjayk7XG4gIH07XG5cbiAgcHJveHkudGltZXIuc3RhcnQoKTtcbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9pbnRlcnZhbF90aW1lciA9IHJlcXVpcmUoJy4uL3RpbWVycy9pbnRlcnZhbF90aW1lcicpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsX3RpbWVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkgPSByZXF1aXJlKCcuL2luY3JlbWVudF9wcm94eScpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmNyZW1lbnRfcHJveHkpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsX3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmF1bHRfcHJveHkgPSByZXF1aXJlKCcuL2RlZmF1bHRfcHJveHknKTtcblxudmFyIF9kZWZhdWx0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRfcHJveHkpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfaW50ZXJ2YWxfcHJveHkgPSByZXF1aXJlKCcuL2ludGVydmFsX3Byb3h5Jyk7XG5cbnZhciBfaW50ZXJ2YWxfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfcHJveHkpO1xuXG52YXIgX3JhbmRvbV9wcm94eSA9IHJlcXVpcmUoJy4vcmFuZG9tX3Byb3h5Jyk7XG5cbnZhciBfcmFuZG9tX3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wcm94eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3h5OiBfZGVmYXVsdF9wcm94eTIuZGVmYXVsdCxcbiAgaW5jcmVtZW50UHJveHk6IF9pbmNyZW1lbnRfcHJveHkyLmRlZmF1bHQsXG4gIGludGVydmFsUHJveHk6IF9pbnRlcnZhbF9wcm94eTIuZGVmYXVsdCxcbiAgcmFuZG9tUHJveHk6IF9yYW5kb21fcHJveHkyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm94aWVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciByYW5kb21FbGVtZW50SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcm94eS5ncm91cC5sZW5ndGgpO1xuICAgIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50KHByb3h5Lmdyb3VwW3JhbmRvbUVsZW1lbnRJbmRleF0sIG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGludGVydmFsID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0eXBlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYnBtJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ21zJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Rpdmlzb3InLCBmYWxzZSwgMSk7XG5cbiAgaW50ZXJ2YWwudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgaW50ZXJ2YWwuYnBtID0gb3B0aW9ucy5icG07XG4gIGludGVydmFsLm1zID0gb3B0aW9ucy5tcztcbiAgaW50ZXJ2YWwuZGl2aXNvciA9IG9wdGlvbnMuZGl2aXNvcjtcblxuICBpZiAoaW50ZXJ2YWwuYnBtID09PSAwICYmIGludGVydmFsLm1zID09PSAwKSB7XG4gICAgdGhyb3cgJ0lsbGVnYWwgc3RhdGU6IEJQTSBhbmQgTVMgY2Fubm90IGJvdGggYmUgMCc7XG4gIH1cblxuICBpbnRlcnZhbC5nZW5lcmF0ZUhhbGZJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFsZkludGVydmFsID0ge307XG4gICAgaGFsZkludGVydmFsLnR5cGUgPSBpbnRlcnZhbC50eXBlO1xuICAgIGhhbGZJbnRlcnZhbC5icG0gPSBpbnRlcnZhbC5icG07XG4gICAgaGFsZkludGVydmFsLm1zID0gaW50ZXJ2YWwubXM7XG4gICAgaGFsZkludGVydmFsLmRpdmlzb3IgPSBpbnRlcnZhbC5kaXZpc29yICogMjtcblxuICAgIHJldHVybiBoYWxmSW50ZXJ2YWw7XG4gIH07XG5cbiAgaW50ZXJ2YWwuYmlzZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGludGVydmFsLmRpdmlzb3IgPSBpbnRlcnZhbC5kaXZpc29yICogMjtcbiAgfTtcblxuICBpbnRlcnZhbC5nZXRNcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW50ZXJ2YWwudHlwZSA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIGludGVydmFsLm1zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gNjAwMDAgLyBpbnRlcnZhbC5icG07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBpbnRlcnZhbDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGludGVydmFsKSB7XG4gIHZhciB0aW1lciA9IHt9O1xuICB0aW1lci5jdXJyZW50VGltZSA9IDA7XG4gIHRpbWVyLmludGVydmFsID0gaW50ZXJ2YWw7XG4gIHRpbWVyLmxpc3RlbmVycyA9IFtdO1xuXG4gIHRpbWVyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRpbWVyLmN1cnJlbnRUaW1lICs9IGV2ZW50LmRlbHRhO1xuXG4gICAgd2hpbGUgKHRpbWVyLmN1cnJlbnRUaW1lID4gdGltZXIuaW50ZXJ2YWwpIHtcbiAgICAgIGNhbGxMaXN0ZW5lcnMoKTtcbiAgICAgIHRpbWVyLmN1cnJlbnRUaW1lIC09IHRpbWVyLmludGVydmFsO1xuICAgIH1cbiAgfTtcblxuICB0aW1lci5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRpbWVyLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfTtcblxuICB0aW1lci5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRpbWVyLmxpc3RlbmVycy5zcGxpY2UodGltZXIubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKTtcbiAgfTtcblxuICB0aW1lci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24odGltZXIuaGFuZGxlKTtcbiAgfTtcblxuICB0aW1lci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbih0aW1lci5oYW5kbGUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNhbGxMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aW1lci5saXN0ZW5lcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGxpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRpbWVyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbF90aW1lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWFzaW5nID0ge307XG5cbiAgZWFzaW5nLmVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKDAsIF9lYXNpbmdVdGlscy5lYXNlSW5PdXRRdWFkKSh2YWx1ZSk7XG4gIH07XG5cbiAgZWFzaW5nLmVhc2VJbk91dEJhY2sgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKDAsIF9lYXNpbmdVdGlscy5lYXNlSW5PdXRCYWNrKSh2YWx1ZSk7XG4gIH07XG5cbiAgZWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBlYXNpbmcuZ2V0VmFsdWVPZiA9IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xuICAgIHJldHVybiBlYXNpbmdbdHlwZV0odmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiBlYXNpbmc7XG59O1xuXG52YXIgX2Vhc2luZ1V0aWxzID0gcmVxdWlyZSgnZWFzaW5nLXV0aWxzJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lYXNpbmcuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJpc2luZ1RyYW5zaXRpb24gPSByaXNpbmdUcmFuc2l0aW9uO1xuZXhwb3J0cy5wdWxzYXJUcmFuc2l0aW9uID0gcHVsc2FyVHJhbnNpdGlvbjtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25Mb29wKGludGVydmFsLCBzdGVlcG5lc3MsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpIHtcbiAgdmFyIHB1bHNhciA9IHt9O1xuICBwdWxzYXIuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgcHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9IDA7XG4gIHB1bHNhci5zdGVlcG5lc3MgPSB0eXBlb2Ygc3RlZXBuZXNzICE9PSAndW5kZWZpbmVkJyA/IHN0ZWVwbmVzcyA6IDAuNTtcbiAgcHVsc2FyLmN1cnJlbnQgPSBjdXJyZW50ID8gY3VycmVudCA6IDA7XG4gIHB1bHNhci5pbmNyZWFzZSA9IHRydWU7XG4gIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSBjdXJyZW50ID8gY3VycmVudCAqIGludGVydmFsLmdldE1zKCkgOiAwO1xuICBwdWxzYXIubnVtYmVyT2ZJbnRlcnZhbHMgPSBudW1iZXJPZkludGVydmFscyA/IG51bWJlck9mSW50ZXJ2YWxzIDogMDtcbiAgcHVsc2FyLm9uRmluaXNoZWRJbnRlcnZhbCA9IG9uRmluaXNoZWRJbnRlcnZhbDtcblxuICBwdWxzYXIuc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBwdWxzYXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocHVsc2FyLmhhbmRsZSk7XG4gIH07XG5cbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHB1bHNhci5oYW5kbGUpO1xuICAgIHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPSAwO1xuICB9O1xuXG4gIHB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyArIGV2ZW50LmRlbHRhO1xuXG4gICAgdmFyIGxhc3RDdXJyZW50ID0gcHVsc2FyLmN1cnJlbnQ7XG4gICAgcHVsc2FyLmN1cnJlbnQgPSBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudChwdWxzYXIuY3VycmVudE1zZWNvbmRzKTtcbiAgICBwdWxzYXIuaW5jcmVhc2UgPSBsYXN0Q3VycmVudCA8IHB1bHNhci5jdXJyZW50O1xuICAgIGlmIChwdWxzYXIuY2FsbGJhY2spIHtcbiAgICAgIHB1bHNhci5jYWxsYmFjayhwdWxzYXIuY3VycmVudCwgZXZlbnQpO1xuICAgIH1cblxuICAgIGludGVydmFsUG9zdFByb2Nlc3NpbmcoKTtcbiAgfTtcblxuICBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudCA9IGZ1bmN0aW9uIChtcykge1xuICAgIHZhciByZWxhdGl2ZUN1cnJlbnQ7XG4gICAgaWYgKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICByZWxhdGl2ZUN1cnJlbnQgPSBtcyAvIHB1bHNhci5pbnRlcnZhbC5tcyAlIDE7XG4gICAgfVxuICAgIGlmIChwdWxzYXIuaW50ZXJ2YWwudHlwZSA9PT0gJ2JwbScpIHtcbiAgICAgIHJlbGF0aXZlQ3VycmVudCA9IG1zICogcHVsc2FyLmludGVydmFsLmJwbSAvIDYwMDAwICUgMTtcbiAgICB9XG5cbiAgICBpZiAocmVsYXRpdmVDdXJyZW50IDw9IHB1bHNhci5zdGVlcG5lc3MpIHtcbiAgICAgIHJldHVybiByZWxhdGl2ZUN1cnJlbnQgLyBwdWxzYXIuc3RlZXBuZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMSAtIChyZWxhdGl2ZUN1cnJlbnQgLSBwdWxzYXIuc3RlZXBuZXNzKSAvICgxIC0gcHVsc2FyLnN0ZWVwbmVzcyk7XG4gICAgfVxuICB9O1xuXG4gIHB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQgPSBmdW5jdGlvbiAoZmFjdG9yKSB7XG5cbiAgICAvLyBGaXJzdCBwcmVwYXJlIHRoZSB2YWx1ZSB3aGljaCBpcyBwYXNzZWQgdG8gdGhlIGNhbGN1bGF0ZUN1cnJlbnQgZnVuY3Rpb246XG4gICAgdmFyIGZhY3RvckluTXM7XG4gICAgaWYgKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICBmYWN0b3JJbk1zID0gZmFjdG9yICogcHVsc2FyLmludGVydmFsLm1zO1xuICAgIH1cbiAgICBpZiAocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdicG0nKSB7XG4gICAgICBmYWN0b3JJbk1zID0gZmFjdG9yICogKDYwMDAwIC8gcHVsc2FyLmludGVydmFsLmJwbSk7XG4gICAgfVxuICAgIHZhciBtc1RvQ2hlY2sgPSBmYWN0b3JJbk1zICsgcHVsc2FyLmN1cnJlbnRNc2Vjb25kcztcblxuICAgIGlmIChtc1RvQ2hlY2sgPCAwKSB7XG4gICAgICBpZiAocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdtcycpIHtcbiAgICAgICAgbXNUb0NoZWNrID0gbXNUb0NoZWNrICsgcHVsc2FyLmludGVydmFsLm1zICogTWF0aC5jZWlsKE1hdGguYWJzKG1zVG9DaGVjaykgLyBwdWxzYXIuaW50ZXJ2YWwubXMpO1xuICAgICAgfVxuICAgICAgaWYgKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnYnBtJykge1xuICAgICAgICBtc1RvQ2hlY2sgPSBtc1RvQ2hlY2sgKyA2MDAwMCAvIHB1bHNhci5pbnRlcnZhbC5icG0gKiBNYXRoLmNlaWwoTWF0aC5hYnMobXNUb0NoZWNrKSAvICg2MDAwMCAvIHB1bHNhci5pbnRlcnZhbC5icG0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHVsc2FyLmNhbGN1bGF0ZUN1cnJlbnQobXNUb0NoZWNrKTtcbiAgfTtcblxuICBmdW5jdGlvbiBpbnRlcnZhbFBvc3RQcm9jZXNzaW5nKCkge1xuICAgIHZhciBjdXJyZW50SW50ZXJ2YWw7XG4gICAgaWYgKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHB1bHNhci5jdXJyZW50TXNlY29uZHMgLyBwdWxzYXIuaW50ZXJ2YWwubXMpO1xuICAgIH1cbiAgICBpZiAocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdicG0nKSB7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHB1bHNhci5jdXJyZW50TXNlY29uZHMgKiBwdWxzYXIuaW50ZXJ2YWwuYnBtIC8gNjAwMDApO1xuICAgIH1cbiAgICBpZiAocHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA8IGN1cnJlbnRJbnRlcnZhbCkge1xuICAgICAgcHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9IGN1cnJlbnRJbnRlcnZhbDtcbiAgICAgIGhhbmRsZUludGVydmFsRmluaXNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVJbnRlcnZhbEZpbmlzaGVkKCkge1xuICAgIGlmIChwdWxzYXIubnVtYmVyT2ZJbnRlcnZhbHMgPiAwKSB7XG4gICAgICBpZiAocHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9PT0gcHVsc2FyLm51bWJlck9mSW50ZXJ2YWxzKSB7XG4gICAgICAgIHB1bHNhci5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwdWxzYXIub25GaW5pc2hlZEludGVydmFsKSB7XG4gICAgICBwdWxzYXIub25GaW5pc2hlZEludGVydmFsKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHB1bHNhcjtcbn1cblxuZnVuY3Rpb24gcmlzaW5nVHJhbnNpdGlvbih0aW1lLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAxLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gcHVsc2FyVHJhbnNpdGlvbih0aW1lLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAwLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbkxvb3A7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uX2xvb3AuanMubWFwXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBwbGFjZUhvbGRlcnNDb3VudCAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICByZXR1cm4gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIHJldHVybiBiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgcGxhY2VIb2xkZXJzID0gcGxhY2VIb2xkZXJzQ291bnQoYjY0KVxuXG4gIGFyciA9IG5ldyBBcnIobGVuICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGxlbiAtIDQgOiBsZW5cblxuICB2YXIgTCA9IDBcblxuICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8IHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBvdXRwdXQgPSAnJ1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPT0nXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArICh1aW50OFtsZW4gLSAxXSlcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAxMF1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9J1xuICB9XG5cbiAgcGFydHMucHVzaChvdXRwdXQpXG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoNzgpO1xuIiwiLyoqXG4gIEEgamF2YXNjcmlwdCBCZXppZXIgY3VydmUgbGlicmFyeSBieSBQb21heC5cblxuICBCYXNlZCBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm9cblxuICBUaGlzIGNvZGUgaXMgTUlUIGxpY2Vuc2VkLlxuKiovXG4oZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIG1hdGgtaW5saW5pbmcuXG4gIHZhciBhYnMgPSBNYXRoLmFicyxcbiAgICAgIG1pbiA9IE1hdGgubWluLFxuICAgICAgbWF4ID0gTWF0aC5tYXgsXG4gICAgICBhY29zID0gTWF0aC5hY29zLFxuICAgICAgc3FydCA9IE1hdGguc3FydCxcbiAgICAgIHBpID0gTWF0aC5QSSxcbiAgICAgIC8vIGEgemVybyBjb29yZGluYXRlLCB3aGljaCBpcyBzdXJwcmlzaW5nbHkgdXNlZnVsXG4gICAgICBaRVJPID0ge3g6MCx5OjAsejowfTtcblxuICAvLyBxdWl0ZSBuZWVkZWRcbiAgdmFyIHV0aWxzID0gcmVxdWlyZSg4MCk7XG5cbiAgLy8gbm90IHF1aXRlIG5lZWRlZCwgYnV0IGV2ZW50dWFsbHkgdGhpcydsbCBiZSB1c2VmdWwuLi5cbiAgdmFyIFBvbHlCZXppZXIgPSByZXF1aXJlKDc5KTtcblxuICAvKipcbiAgICogQmV6aWVyIGN1cnZlIGNvbnN0cnVjdG9yLiBUaGUgY29uc3RydWN0b3IgYXJndW1lbnQgY2FuIGJlIG9uZSBvZiB0aHJlZSB0aGluZ3M6XG4gICAqXG4gICAqIDEuIGFycmF5LzQgb2Yge3g6Li4uLCB5Oi4uLiwgejouLi59LCB6IG9wdGlvbmFsXG4gICAqIDIuIG51bWVyaWNhbCBhcnJheS84IG9yZGVyZWQgeDEseTEseDIseTIseDMseTMseDQseTRcbiAgICogMy4gbnVtZXJpY2FsIGFycmF5LzEyIG9yZGVyZWQgeDEseTEsejEseDIseTIsejIseDMseTMsejMseDQseTQsejRcbiAgICpcbiAgICovXG4gIHZhciBCZXppZXIgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgICB2YXIgYXJncyA9IChjb29yZHMgJiYgY29vcmRzLmZvckVhY2gpID8gY29vcmRzIDogW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciBjb29yZGxlbiA9IGZhbHNlO1xuICAgIGlmKHR5cGVvZiBhcmdzWzBdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb29yZGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIG5ld2FyZ3MgPSBbXTtcbiAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihwb2ludCkge1xuICAgICAgICBbJ3gnLCd5JywneiddLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGlmKHR5cGVvZiBwb2ludFtkXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbmV3YXJncy5wdXNoKHBvaW50W2RdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBhcmdzID0gbmV3YXJncztcbiAgICB9XG4gICAgdmFyIGhpZ2hlciA9IGZhbHNlO1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICBpZiAoY29vcmRsZW4pIHtcbiAgICAgIGlmKGNvb3JkbGVuPjQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBoaWdoZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihsZW4hPT02ICYmIGxlbiE9PTggJiYgbGVuIT09OSAmJiBsZW4hPT0xMikge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgbmV3IEJlemllcihwb2ludFtdKSBpcyBhY2NlcHRlZCBmb3IgNHRoIGFuZCBoaWdoZXIgb3JkZXIgY3VydmVzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBfM2QgPSAoIWhpZ2hlciAmJiAobGVuID09PSA5IHx8IGxlbiA9PT0gMTIpKSB8fCAoY29vcmRzICYmIGNvb3Jkc1swXSAmJiB0eXBlb2YgY29vcmRzWzBdLnogIT09IFwidW5kZWZpbmVkXCIpO1xuICAgIHRoaXMuXzNkID0gXzNkO1xuICAgIHZhciBwb2ludHMgPSBbXTtcbiAgICBmb3IodmFyIGlkeD0wLCBzdGVwPShfM2QgPyAzIDogMik7IGlkeDxsZW47IGlkeCs9c3RlcCkge1xuICAgICAgdmFyIHBvaW50ID0ge1xuICAgICAgICB4OiBhcmdzW2lkeF0sXG4gICAgICAgIHk6IGFyZ3NbaWR4KzFdXG4gICAgICB9O1xuICAgICAgaWYoXzNkKSB7IHBvaW50LnogPSBhcmdzW2lkeCsyXSB9O1xuICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgIH1cbiAgICB0aGlzLm9yZGVyID0gcG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgdmFyIGRpbXMgPSBbJ3gnLCd5J107XG4gICAgaWYoXzNkKSBkaW1zLnB1c2goJ3onKTtcbiAgICB0aGlzLmRpbXMgPSBkaW1zO1xuICAgIHRoaXMuZGltbGVuID0gZGltcy5sZW5ndGg7XG5cbiAgICAoZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHZhciBvcmRlciA9IGN1cnZlLm9yZGVyO1xuICAgICAgdmFyIHBvaW50cyA9IGN1cnZlLnBvaW50cztcbiAgICAgIHZhciBhID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7cDE6cG9pbnRzWzBdLCBwMjpwb2ludHNbb3JkZXJdfSk7XG4gICAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFicyhhW2ldLnkpID4gMC4wMDAxKSB7XG4gICAgICAgICAgY3VydmUuX2xpbmVhciA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3VydmUuX2xpbmVhciA9IHRydWU7XG4gICAgfSh0aGlzKSk7XG5cbiAgICB0aGlzLl90MSA9IDA7XG4gICAgdGhpcy5fdDIgPSAxO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH07XG5cbiAgQmV6aWVyLmZyb21TVkcgPSBmdW5jdGlvbihzdmdTdHJpbmcpIHtcbiAgICB2YXIgbGlzdCA9IHN2Z1N0cmluZy5tYXRjaCgvWy0rXT9cXGQqXFwuP1xcZCsoPzpbZUVdWy0rXT9cXGQrKT8vZykubWFwKHBhcnNlRmxvYXQpO1xuICAgIHZhciByZWxhdGl2ZSA9IC9bY3FdLy50ZXN0KHN2Z1N0cmluZyk7XG4gICAgaWYoIXJlbGF0aXZlKSByZXR1cm4gbmV3IEJlemllcihsaXN0KTtcbiAgICBsaXN0ID0gbGlzdC5tYXAoZnVuY3Rpb24odixpKSB7XG4gICAgICByZXR1cm4gaSA8IDIgPyB2IDogdiArIGxpc3RbaSAlIDJdO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQmV6aWVyKGxpc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFCQyhuLFMsQixFLHQpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgdmFyIHUgPSB1dGlscy5wcm9qZWN0aW9ucmF0aW8odCxuKSxcbiAgICAgICAgdW0gPSAxLXUsXG4gICAgICAgIEMgPSB7XG4gICAgICAgICAgeDogdSpTLnggKyB1bSpFLngsXG4gICAgICAgICAgeTogdSpTLnkgKyB1bSpFLnlcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHV0aWxzLmFiY3JhdGlvKHQsbiksXG4gICAgICAgIEEgPSB7XG4gICAgICAgICAgeDogQi54ICsgKEIueC1DLngpL3MsXG4gICAgICAgICAgeTogQi55ICsgKEIueS1DLnkpL3NcbiAgICAgICAgfTtcbiAgICByZXR1cm4geyBBOkEsIEI6QiwgQzpDIH07XG4gIH1cblxuICBCZXppZXIucXVhZHJhdGljRnJvbVBvaW50cyA9IGZ1bmN0aW9uKHAxLHAyLHAzLCB0KSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIC8vIHNob3J0Y3V0cywgYWx0aG91Z2ggdGhleSdyZSByZWFsbHkgZHVtYlxuICAgIGlmKHQ9PT0wKSB7IHJldHVybiBuZXcgQmV6aWVyKHAyLHAyLHAzKTsgfVxuICAgIGlmKHQ9PT0xKSB7IHJldHVybiBuZXcgQmV6aWVyKHAxLHAyLHAyKTsgfVxuICAgIC8vIHJlYWwgZml0dGluZy5cbiAgICB2YXIgYWJjID0gZ2V0QUJDKDIscDEscDIscDMsdCk7XG4gICAgcmV0dXJuIG5ldyBCZXppZXIocDEsIGFiYy5BLCBwMyk7XG4gIH07XG5cbiAgQmV6aWVyLmN1YmljRnJvbVBvaW50cyA9IGZ1bmN0aW9uKFMsQixFLCB0LGQxKSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIHZhciBhYmMgPSBnZXRBQkMoMyxTLEIsRSx0KTtcbiAgICBpZih0eXBlb2YgZDEgPT09IFwidW5kZWZpbmVkXCIpIHsgZDEgPSB1dGlscy5kaXN0KEIsYWJjLkMpOyB9XG4gICAgdmFyIGQyID0gZDEgKiAoMS10KS90O1xuXG4gICAgdmFyIHNlbGVuID0gdXRpbHMuZGlzdChTLEUpLFxuICAgICAgICBseCA9IChFLngtUy54KS9zZWxlbixcbiAgICAgICAgbHkgPSAoRS55LVMueSkvc2VsZW4sXG4gICAgICAgIGJ4MSA9IGQxICogbHgsXG4gICAgICAgIGJ5MSA9IGQxICogbHksXG4gICAgICAgIGJ4MiA9IGQyICogbHgsXG4gICAgICAgIGJ5MiA9IGQyICogbHk7XG4gICAgLy8gZGVyaXZhdGlvbiBvZiBuZXcgaHVsbCBjb29yZGluYXRlc1xuICAgIHZhciBlMSAgPSB7IHg6IEIueCAtIGJ4MSwgeTogQi55IC0gYnkxIH0sXG4gICAgICAgIGUyICA9IHsgeDogQi54ICsgYngyLCB5OiBCLnkgKyBieTIgfSxcbiAgICAgICAgQSA9IGFiYy5BLFxuICAgICAgICB2MSAgPSB7IHg6IEEueCArIChlMS54LUEueCkvKDEtdCksIHk6IEEueSArIChlMS55LUEueSkvKDEtdCkgfSxcbiAgICAgICAgdjIgID0geyB4OiBBLnggKyAoZTIueC1BLngpLyh0KSwgeTogQS55ICsgKGUyLnktQS55KS8odCkgfSxcbiAgICAgICAgbmMxID0geyB4OiBTLnggKyAodjEueC1TLngpLyh0KSwgeTogUy55ICsgKHYxLnktUy55KS8odCkgfSxcbiAgICAgICAgbmMyID0geyB4OiBFLnggKyAodjIueC1FLngpLygxLXQpLCB5OiBFLnkgKyAodjIueS1FLnkpLygxLXQpIH07XG4gICAgLy8gLi4uZG9uZVxuICAgIHJldHVybiBuZXcgQmV6aWVyKFMsbmMxLG5jMixFKTtcbiAgfTtcblxuICB2YXIgZ2V0VXRpbHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH07XG5cbiAgQmV6aWVyLmdldFV0aWxzID0gZ2V0VXRpbHM7XG5cbiAgQmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICBnZXRVdGlsczogZ2V0VXRpbHMsXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLnBvaW50c1RvU3RyaW5nKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIHRvU1ZHOiBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICAgICAgaWYodGhpcy5fM2QpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsXG4gICAgICAgICAgeCA9IHBbMF0ueCxcbiAgICAgICAgICB5ID0gcFswXS55LFxuICAgICAgICAgIHMgPSBbXCJNXCIsIHgsIHksICh0aGlzLm9yZGVyPT09MiA/IFwiUVwiOlwiQ1wiKV07XG4gICAgICBmb3IodmFyIGk9MSwgbGFzdD1wLmxlbmd0aDsgaTxsYXN0OyBpKyspIHtcbiAgICAgICAgcy5wdXNoKHBbaV0ueCk7XG4gICAgICAgIHMucHVzaChwW2ldLnkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHMuam9pbihcIiBcIik7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gb25lLXRpbWUgY29tcHV0ZSBkZXJpdmF0aXZlIGNvb3JkaW5hdGVzXG4gICAgICB0aGlzLmRwb2ludHMgPSBbXTtcbiAgICAgIGZvcih2YXIgcD10aGlzLnBvaW50cywgZD1wLmxlbmd0aCwgYz1kLTE7IGQ+MTsgZC0tLCBjLS0pIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yKHZhciBqPTAsIGRwdDsgajxjOyBqKyspIHtcbiAgICAgICAgICBkcHQgPSB7XG4gICAgICAgICAgICB4OiBjICogKHBbaisxXS54IC0gcFtqXS54KSxcbiAgICAgICAgICAgIHk6IGMgKiAocFtqKzFdLnkgLSBwW2pdLnkpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgICAgZHB0LnogPSBjICogKHBbaisxXS56IC0gcFtqXS56KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC5wdXNoKGRwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcG9pbnRzLnB1c2gobGlzdCk7XG4gICAgICAgIHAgPSBsaXN0O1xuICAgICAgfTtcbiAgICAgIHRoaXMuY29tcHV0ZWRpcmVjdGlvbigpO1xuICAgIH0sXG4gICAgY29tcHV0ZWRpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICB2YXIgYW5nbGUgPSB1dGlscy5hbmdsZShwb2ludHNbMF0sIHBvaW50c1t0aGlzLm9yZGVyXSwgcG9pbnRzWzFdKTtcbiAgICAgIHRoaXMuY2xvY2t3aXNlID0gYW5nbGUgPiAwO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5sZW5ndGgodGhpcy5kZXJpdmF0aXZlLmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgX2x1dDogW10sXG4gICAgZ2V0TFVUOiBmdW5jdGlvbihzdGVwcykge1xuICAgICAgc3RlcHMgPSBzdGVwcyB8fCAxMDA7XG4gICAgICBpZiAodGhpcy5fbHV0Lmxlbmd0aCA9PT0gc3RlcHMpIHsgcmV0dXJuIHRoaXMuX2x1dDsgfVxuICAgICAgdGhpcy5fbHV0ID0gW107XG4gICAgICBmb3IodmFyIHQ9MDsgdDw9c3RlcHM7IHQrKykge1xuICAgICAgICB0aGlzLl9sdXQucHVzaCh0aGlzLmNvbXB1dGUodC9zdGVwcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2x1dDtcbiAgICB9LFxuICAgIG9uOiBmdW5jdGlvbihwb2ludCwgZXJyb3IpIHtcbiAgICAgIGVycm9yID0gZXJyb3IgfHwgNTtcbiAgICAgIHZhciBsdXQgPSB0aGlzLmdldExVVCgpLCBoaXRzID0gW10sIGMsIHQ9MDtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGx1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjID0gbHV0W2ldO1xuICAgICAgICBpZiAodXRpbHMuZGlzdChjLHBvaW50KSA8IGVycm9yKSB7XG4gICAgICAgICAgaGl0cy5wdXNoKGMpXG4gICAgICAgICAgdCArPSBpIC8gbHV0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoIWhpdHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdCAvPSBoaXRzLmxlbmd0aDtcbiAgICB9LFxuICAgIHByb2plY3Q6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAvLyBzdGVwIDE6IGNvYXJzZSBjaGVja1xuICAgICAgdmFyIExVVCA9IHRoaXMuZ2V0TFVUKCksIGwgPSBMVVQubGVuZ3RoLTEsXG4gICAgICAgICAgY2xvc2VzdCA9IHV0aWxzLmNsb3Nlc3QoTFVULCBwb2ludCksXG4gICAgICAgICAgbWRpc3QgPSBjbG9zZXN0Lm1kaXN0LFxuICAgICAgICAgIG1wb3MgPSBjbG9zZXN0Lm1wb3M7XG4gICAgICBpZiAobXBvcz09PTAgfHwgbXBvcz09PWwpIHtcbiAgICAgICAgdmFyIHQgPSBtcG9zL2wsIHB0ID0gdGhpcy5jb21wdXRlKHQpO1xuICAgICAgICBwdC50ID0gdDtcbiAgICAgICAgcHQuZCA9IG1kaXN0O1xuICAgICAgICByZXR1cm4gcHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0ZXAgMjogZmluZSBjaGVja1xuICAgICAgdmFyIGZ0LCB0LCBwLCBkLFxuICAgICAgICAgIHQxID0gKG1wb3MtMSkvbCxcbiAgICAgICAgICB0MiA9IChtcG9zKzEpL2wsXG4gICAgICAgICAgc3RlcCA9IDAuMS9sO1xuICAgICAgbWRpc3QgKz0gMTtcbiAgICAgIGZvcih0PXQxLGZ0PXQ7IHQ8dDIrc3RlcDsgdCs9c3RlcCkge1xuICAgICAgICBwID0gdGhpcy5jb21wdXRlKHQpO1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIGZ0ID0gdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCA9IHRoaXMuY29tcHV0ZShmdCk7XG4gICAgICBwLnQgPSBmdDtcbiAgICAgIHAuZCA9IG1kaXN0O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGUodCk7XG4gICAgfSxcbiAgICBwb2ludDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb2ludHNbaWR4XTtcbiAgICB9LFxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIC8vIHNob3J0Y3V0c1xuICAgICAgaWYodD09PTApIHsgcmV0dXJuIHRoaXMucG9pbnRzWzBdOyB9XG4gICAgICBpZih0PT09MSkgeyByZXR1cm4gdGhpcy5wb2ludHNbdGhpcy5vcmRlcl07IH1cblxuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cztcbiAgICAgIHZhciBtdCA9IDEtdDtcblxuICAgICAgLy8gbGluZWFyP1xuICAgICAgaWYodGhpcy5vcmRlcj09PTEpIHtcbiAgICAgICAgcmV0ID0ge1xuICAgICAgICAgIHg6IG10KnBbMF0ueCArIHQqcFsxXS54LFxuICAgICAgICAgIHk6IG10KnBbMF0ueSArIHQqcFsxXS55XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl8zZCkgeyByZXQueiA9IG10KnBbMF0ueiArIHQqcFsxXS56OyB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHF1YWRyYXRpYy9jdWJpYyBjdXJ2ZT9cbiAgICAgIGlmKHRoaXMub3JkZXI8NCkge1xuICAgICAgICB2YXIgbXQyID0gbXQqbXQsXG4gICAgICAgICAgICB0MiA9IHQqdCxcbiAgICAgICAgICAgIGEsYixjLGQgPSAwO1xuICAgICAgICBpZih0aGlzLm9yZGVyPT09Mikge1xuICAgICAgICAgIHAgPSBbcFswXSwgcFsxXSwgcFsyXSwgWkVST107XG4gICAgICAgICAgYSA9IG10MjtcbiAgICAgICAgICBiID0gbXQqdCoyO1xuICAgICAgICAgIGMgPSB0MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMub3JkZXI9PT0zKSB7XG4gICAgICAgICAgYSA9IG10MiptdDtcbiAgICAgICAgICBiID0gbXQyKnQqMztcbiAgICAgICAgICBjID0gbXQqdDIqMztcbiAgICAgICAgICBkID0gdCp0MjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIHg6IGEqcFswXS54ICsgYipwWzFdLnggKyBjKnBbMl0ueCArIGQqcFszXS54LFxuICAgICAgICAgIHk6IGEqcFswXS55ICsgYipwWzFdLnkgKyBjKnBbMl0ueSArIGQqcFszXS55XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgcmV0LnogPSBhKnBbMF0ueiArIGIqcFsxXS56ICsgYypwWzJdLnogKyBkKnBbM10uejtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBoaWdoZXIgb3JkZXIgY3VydmVzOiB1c2UgZGUgQ2FzdGVsamF1J3MgY29tcHV0YXRpb25cbiAgICAgIHZhciBkQ3B0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb2ludHMpKTtcbiAgICAgIHdoaWxlKGRDcHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGRDcHRzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICBkQ3B0c1tpXSA9IHtcbiAgICAgICAgICAgIHg6IGRDcHRzW2ldLnggKyAoZENwdHNbaSsxXS54IC0gZENwdHNbaV0ueCkgKiB0LFxuICAgICAgICAgICAgeTogZENwdHNbaV0ueSArIChkQ3B0c1tpKzFdLnkgLSBkQ3B0c1tpXS55KSAqIHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0eXBlb2YgZENwdHNbaV0ueiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZENwdHNbaV0gPSBkQ3B0c1tpXS56ICsgKGRDcHRzW2krMV0ueiAtIGRDcHRzW2ldLnopICogdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkQ3B0cy5zcGxpY2UoZENwdHMubGVuZ3RoLTEsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRDcHRzWzBdO1xuICAgIH0sXG4gICAgcmFpc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cywgbnAgPSBbcFswXV0sIGksIGs9cC5sZW5ndGgsIHBpLCBwaW07XG4gICAgICBmb3IgKHZhciBpPTE7IGk8azsgaSsrKSB7XG4gICAgICAgIHBpID0gcFtpXTtcbiAgICAgICAgcGltID0gcFtpLTFdO1xuICAgICAgICBucFtpXSA9IHtcbiAgICAgICAgICB4OiAoay1pKS9rICogcGkueCArIGkvayAqIHBpbS54LFxuICAgICAgICAgIHk6IChrLWkpL2sgKiBwaS55ICsgaS9rICogcGltLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG5wW2tdID0gcFtrLTFdO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgIH0sXG4gICAgZGVyaXZhdGl2ZTogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIG10ID0gMS10LFxuICAgICAgICAgIGEsYixjPTAsXG4gICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXTtcbiAgICAgIGlmKHRoaXMub3JkZXI9PT0yKSB7IHAgPSBbcFswXSwgcFsxXSwgWkVST107IGEgPSBtdDsgYiA9IHQ7IH1cbiAgICAgIGlmKHRoaXMub3JkZXI9PT0zKSB7IGEgPSBtdCptdDsgYiA9IG10KnQqMjsgYyA9IHQqdDsgfVxuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgeDogYSpwWzBdLnggKyBiKnBbMV0ueCArIGMqcFsyXS54LFxuICAgICAgICB5OiBhKnBbMF0ueSArIGIqcFsxXS55ICsgYypwWzJdLnlcbiAgICAgIH07XG4gICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICByZXQueiA9IGEqcFswXS56ICsgYipwWzFdLnogKyBjKnBbMl0uejtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMuaW5mbGVjdGlvbnModGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgbm9ybWFsOiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fM2QgPyB0aGlzLl9fbm9ybWFsMyh0KSA6IHRoaXMuX19ub3JtYWwyKHQpO1xuICAgIH0sXG4gICAgX19ub3JtYWwyOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcbiAgICAgIHZhciBxID0gc3FydChkLngqZC54ICsgZC55KmQueSlcbiAgICAgIHJldHVybiB7IHg6IC1kLnkvcSwgeTogZC54L3EgfTtcbiAgICB9LFxuICAgIF9fbm9ybWFsMzogZnVuY3Rpb24odCkge1xuICAgICAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjU0NTMxNTlcbiAgICAgIHZhciByMSA9IHRoaXMuZGVyaXZhdGl2ZSh0KSxcbiAgICAgICAgICByMiA9IHRoaXMuZGVyaXZhdGl2ZSh0KzAuMDEpLFxuICAgICAgICAgIHExID0gc3FydChyMS54KnIxLnggKyByMS55KnIxLnkgKyByMS56KnIxLnopLFxuICAgICAgICAgIHEyID0gc3FydChyMi54KnIyLnggKyByMi55KnIyLnkgKyByMi56KnIyLnopO1xuICAgICAgcjEueCAvPSBxMTsgcjEueSAvPSBxMTsgcjEueiAvPSBxMTtcbiAgICAgIHIyLnggLz0gcTI7IHIyLnkgLz0gcTI7IHIyLnogLz0gcTI7XG4gICAgICAvLyBjcm9zcyBwcm9kdWN0XG4gICAgICB2YXIgYyA9IHtcbiAgICAgICAgeDogcjIueSpyMS56IC0gcjIueipyMS55LFxuICAgICAgICB5OiByMi56KnIxLnggLSByMi54KnIxLnosXG4gICAgICAgIHo6IHIyLngqcjEueSAtIHIyLnkqcjEueFxuICAgICAgfTtcbiAgICAgIHZhciBtID0gc3FydChjLngqYy54ICsgYy55KmMueSArIGMueipjLnopO1xuICAgICAgYy54IC89IG07IGMueSAvPSBtOyBjLnogLz0gbTtcbiAgICAgIC8vIHJvdGF0aW9uIG1hdHJpeFxuICAgICAgdmFyIFIgPSBbICAgYy54KmMueCwgICBjLngqYy55LWMueiwgYy54KmMueitjLnksXG4gICAgICAgICAgICAgICAgYy54KmMueStjLnosICAgYy55KmMueSwgICBjLnkqYy56LWMueCxcbiAgICAgICAgICAgICAgICBjLngqYy56LWMueSwgYy55KmMueitjLngsICAgYy56KmMueiAgICBdO1xuICAgICAgLy8gbm9ybWFsIHZlY3RvcjpcbiAgICAgIHZhciBuID0ge1xuICAgICAgICB4OiBSWzBdICogcjEueCArIFJbMV0gKiByMS55ICsgUlsyXSAqIHIxLnosXG4gICAgICAgIHk6IFJbM10gKiByMS54ICsgUls0XSAqIHIxLnkgKyBSWzVdICogcjEueixcbiAgICAgICAgejogUls2XSAqIHIxLnggKyBSWzddICogcjEueSArIFJbOF0gKiByMS56XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcbiAgICBodWxsOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuICAgICAgICAgIF9wID0gW10sXG4gICAgICAgICAgcHQsXG4gICAgICAgICAgcSA9IFtdLFxuICAgICAgICAgIGlkeCA9IDAsXG4gICAgICAgICAgaT0wLFxuICAgICAgICAgIGw9MDtcbiAgICAgIHFbaWR4KytdID0gcFswXTtcbiAgICAgIHFbaWR4KytdID0gcFsxXTtcbiAgICAgIHFbaWR4KytdID0gcFsyXTtcbiAgICAgIGlmKHRoaXMub3JkZXIgPT09IDMpIHsgcVtpZHgrK10gPSBwWzNdOyB9XG4gICAgICAvLyB3ZSBsZXJwIGJldHdlZW4gYWxsIHBvaW50cyBhdCBlYWNoIGl0ZXJhdGlvbiwgdW50aWwgd2UgaGF2ZSAxIHBvaW50IGxlZnQuXG4gICAgICB3aGlsZShwLmxlbmd0aD4xKSB7XG4gICAgICAgIF9wID0gW107XG4gICAgICAgIGZvcihpPTAsIGw9cC5sZW5ndGgtMTsgaTxsOyBpKyspIHtcbiAgICAgICAgICBwdCA9IHV0aWxzLmxlcnAodCxwW2ldLHBbaSsxXSk7XG4gICAgICAgICAgcVtpZHgrK10gPSBwdDtcbiAgICAgICAgICBfcC5wdXNoKHB0KTtcbiAgICAgICAgfVxuICAgICAgICBwID0gX3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gcTtcbiAgICB9LFxuICAgIHNwbGl0OiBmdW5jdGlvbih0MSwgdDIpIHtcbiAgICAgIC8vIHNob3J0Y3V0c1xuICAgICAgaWYodDE9PT0wICYmICEhdDIpIHsgcmV0dXJuIHRoaXMuc3BsaXQodDIpLmxlZnQ7IH1cbiAgICAgIGlmKHQyPT09MSkgeyByZXR1cm4gdGhpcy5zcGxpdCh0MSkucmlnaHQ7IH1cblxuICAgICAgLy8gbm8gc2hvcnRjdXQ6IHVzZSBcImRlIENhc3RlbGphdVwiIGl0ZXJhdGlvbi5cbiAgICAgIHZhciBxID0gdGhpcy5odWxsKHQxKTtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGxlZnQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzBdLHFbM10scVs1XV0pIDogbmV3IEJlemllcihbcVswXSxxWzRdLHFbN10scVs5XV0pLFxuICAgICAgICByaWdodDogdGhpcy5vcmRlciA9PT0gMiA/IG5ldyBCZXppZXIoW3FbNV0scVs0XSxxWzJdXSkgOiBuZXcgQmV6aWVyKFtxWzldLHFbOF0scVs2XSxxWzNdXSksXG4gICAgICAgIHNwYW46IHFcbiAgICAgIH07XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBiaW5kIF90MS9fdDIgaW5mb3JtYXRpb24hXG4gICAgICByZXN1bHQubGVmdC5fdDEgID0gdXRpbHMubWFwKDAsICAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5sZWZ0Ll90MiAgPSB1dGlscy5tYXAodDEsIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LnJpZ2h0Ll90MSA9IHV0aWxzLm1hcCh0MSwgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQucmlnaHQuX3QyID0gdXRpbHMubWFwKDEsICAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcblxuICAgICAgLy8gaWYgd2UgaGF2ZSBubyB0Miwgd2UncmUgZG9uZVxuICAgICAgaWYoIXQyKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICAgICAgLy8gaWYgd2UgaGF2ZSBhIHQyLCBzcGxpdCBhZ2FpbjpcbiAgICAgIHQyID0gdXRpbHMubWFwKHQyLHQxLDEsMCwxKTtcbiAgICAgIHZhciBzdWJzcGxpdCA9IHJlc3VsdC5yaWdodC5zcGxpdCh0Mik7XG4gICAgICByZXR1cm4gc3Vic3BsaXQubGVmdDtcbiAgICB9LFxuICAgIGV4dHJlbWE6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpbXMgPSB0aGlzLmRpbXMsXG4gICAgICAgICAgcmVzdWx0PXt9LFxuICAgICAgICAgIHJvb3RzPVtdLFxuICAgICAgICAgIHAsIG1mbjtcbiAgICAgIGRpbXMuZm9yRWFjaChmdW5jdGlvbihkaW0pIHtcbiAgICAgICAgbWZuID0gZnVuY3Rpb24odikgeyByZXR1cm4gdltkaW1dOyB9O1xuICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdLm1hcChtZm4pO1xuICAgICAgICByZXN1bHRbZGltXSA9IHV0aWxzLmRyb290cyhwKTtcbiAgICAgICAgaWYodGhpcy5vcmRlciA9PT0gMykge1xuICAgICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMV0ubWFwKG1mbik7XG4gICAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5jb25jYXQodXRpbHMuZHJvb3RzKHApKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbZGltXSA9IHJlc3VsdFtkaW1dLmZpbHRlcihmdW5jdGlvbih0KSB7IHJldHVybiAodD49MCAmJiB0PD0xKTsgfSk7XG4gICAgICAgIHJvb3RzID0gcm9vdHMuY29uY2F0KHJlc3VsdFtkaW1dLnNvcnQoKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcm9vdHMgPSByb290cy5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHYsaWR4KSB7IHJldHVybiAocm9vdHMuaW5kZXhPZih2KSA9PT0gaWR4KTsgfSk7XG4gICAgICByZXN1bHQudmFsdWVzID0gcm9vdHM7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLCByZXN1bHQgPSB7fTtcbiAgICAgIHRoaXMuZGltcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmVzdWx0W2RdID0gdXRpbHMuZ2V0bWlubWF4KHRoaXMsIGQsIGV4dHJlbWFbZF0pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBvdmVybGFwczogZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHZhciBsYmJveCA9IHRoaXMuYmJveCgpLFxuICAgICAgICAgIHRiYm94ID0gY3VydmUuYmJveCgpO1xuICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKGxiYm94LHRiYm94KTtcbiAgICB9LFxuICAgIG9mZnNldDogZnVuY3Rpb24odCwgZCkge1xuICAgICAgaWYodHlwZW9mIGQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdldCh0KTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLm5vcm1hbCh0KTtcbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICBjOiBjLFxuICAgICAgICAgIG46IG4sXG4gICAgICAgICAgeDogYy54ICsgbi54ICogZCxcbiAgICAgICAgICB5OiBjLnkgKyBuLnkgKiBkXG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgcmV0LnogPSBjLnogKyBuLnogKiBkO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgICAgaWYodGhpcy5fbGluZWFyKSB7XG4gICAgICAgIHZhciBudiA9IHRoaXMubm9ybWFsKDApO1xuICAgICAgICB2YXIgY29vcmRzID0gdGhpcy5wb2ludHMubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgeDogcC54ICsgdCAqIG52LngsXG4gICAgICAgICAgICB5OiBwLnkgKyB0ICogbnYueVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYocC56ICYmIG4ueikgeyByZXQueiA9IHAueiArIHQgKiBudi56OyB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbmV3IEJlemllcihjb29yZHMpXTtcbiAgICAgIH1cbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcbiAgICAgIHJldHVybiByZWR1Y2VkLm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnNjYWxlKHQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaW1wbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYodGhpcy5vcmRlcj09PTMpIHtcbiAgICAgICAgdmFyIGExID0gdXRpbHMuYW5nbGUodGhpcy5wb2ludHNbMF0sIHRoaXMucG9pbnRzWzNdLCB0aGlzLnBvaW50c1sxXSk7XG4gICAgICAgIHZhciBhMiA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMl0pO1xuICAgICAgICBpZihhMT4wICYmIGEyPDAgfHwgYTE8MCAmJiBhMj4wKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbjEgPSB0aGlzLm5vcm1hbCgwKTtcbiAgICAgIHZhciBuMiA9IHRoaXMubm9ybWFsKDEpO1xuICAgICAgdmFyIHMgPSBuMS54Km4yLnggKyBuMS55Km4yLnk7XG4gICAgICBpZih0aGlzLl8zZCkgeyBzICs9IG4xLnoqbjIuejsgfVxuICAgICAgdmFyIGFuZ2xlID0gYWJzKGFjb3MocykpO1xuICAgICAgcmV0dXJuIGFuZ2xlIDwgcGkvMztcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgdDE9MCwgdDI9MCwgc3RlcD0wLjAxLCBzZWdtZW50LCBwYXNzMT1bXSwgcGFzczI9W107XG4gICAgICAvLyBmaXJzdCBwYXNzOiBzcGxpdCBvbiBleHRyZW1hXG4gICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLnZhbHVlcztcbiAgICAgIGlmKGV4dHJlbWEuaW5kZXhPZigwKT09PS0xKSB7IGV4dHJlbWEgPSBbMF0uY29uY2F0KGV4dHJlbWEpOyB9XG4gICAgICBpZihleHRyZW1hLmluZGV4T2YoMSk9PT0tMSkgeyBleHRyZW1hLnB1c2goMSk7IH1cblxuICAgICAgZm9yKHQxPWV4dHJlbWFbMF0sIGk9MTsgaTxleHRyZW1hLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHQyID0gZXh0cmVtYVtpXTtcbiAgICAgICAgc2VnbWVudCA9IHRoaXMuc3BsaXQodDEsdDIpO1xuICAgICAgICBzZWdtZW50Ll90MSA9IHQxO1xuICAgICAgICBzZWdtZW50Ll90MiA9IHQyO1xuICAgICAgICBwYXNzMS5wdXNoKHNlZ21lbnQpO1xuICAgICAgICB0MSA9IHQyO1xuICAgICAgfVxuXG4gICAgICAvLyBzZWNvbmQgcGFzczogZnVydGhlciByZWR1Y2UgdGhlc2Ugc2VnbWVudHMgdG8gc2ltcGxlIHNlZ21lbnRzXG4gICAgICBwYXNzMS5mb3JFYWNoKGZ1bmN0aW9uKHAxKSB7XG4gICAgICAgIHQxPTA7XG4gICAgICAgIHQyPTA7XG4gICAgICAgIHdoaWxlKHQyIDw9IDEpIHtcbiAgICAgICAgICBmb3IodDI9dDErc3RlcDsgdDI8PTErc3RlcDsgdDIrPXN0ZXApIHtcbiAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSx0Mik7XG4gICAgICAgICAgICBpZighc2VnbWVudC5zaW1wbGUoKSkge1xuICAgICAgICAgICAgICB0MiAtPSBzdGVwO1xuICAgICAgICAgICAgICBpZihhYnModDEtdDIpPHN0ZXApIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gbmV2ZXIgZm9ybSBhIHJlZHVjdGlvblxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsdDIpO1xuICAgICAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgICAgIHNlZ21lbnQuX3QyID0gdXRpbHMubWFwKHQyLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgdDEgPSB0MjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHQxPDEpIHtcbiAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsMSk7XG4gICAgICAgICAgc2VnbWVudC5fdDEgPSB1dGlscy5tYXAodDEsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgIHNlZ21lbnQuX3QyID0gcDEuX3QyO1xuICAgICAgICAgIHBhc3MyLnB1c2goc2VnbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhc3MyO1xuICAgIH0sXG4gICAgc2NhbGU6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBvcmRlciA9IHRoaXMub3JkZXI7XG4gICAgICB2YXIgZGlzdGFuY2VGbiA9IGZhbHNlXG4gICAgICBpZih0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiKSB7IGRpc3RhbmNlRm4gPSBkOyB9XG4gICAgICBpZihkaXN0YW5jZUZuICYmIG9yZGVyID09PSAyKSB7IHJldHVybiB0aGlzLnJhaXNlKCkuc2NhbGUoZGlzdGFuY2VGbik7IH1cblxuICAgICAgLy8gVE9ETzogYWRkIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGRlZ2VuZXJhdGUgKD1saW5lYXIpIGN1cnZlcy5cbiAgICAgIHZhciBjbG9ja3dpc2UgPSB0aGlzLmNsb2Nrd2lzZTtcbiAgICAgIHZhciByMSA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDApIDogZDtcbiAgICAgIHZhciByMiA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDEpIDogZDtcbiAgICAgIHZhciB2ID0gWyB0aGlzLm9mZnNldCgwLDEwKSwgdGhpcy5vZmZzZXQoMSwxMCkgXTtcbiAgICAgIHZhciBvID0gdXRpbHMubGxpNCh2WzBdLCB2WzBdLmMsIHZbMV0sIHZbMV0uYyk7XG4gICAgICBpZighbykgeyB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3Qgc2NhbGUgdGhpcyBjdXJ2ZS4gVHJ5IHJlZHVjaW5nIGl0IGZpcnN0LlwiKTsgfVxuICAgICAgLy8gbW92ZSBhbGwgcG9pbnRzIGJ5IGRpc3RhbmNlICdkJyB3cnQgdGhlIG9yaWdpbiAnbydcbiAgICAgIHZhciBwb2ludHM9dGhpcy5wb2ludHMsIG5wPVtdO1xuXG4gICAgICAvLyBtb3ZlIGVuZCBwb2ludHMgYnkgZml4ZWQgZGlzdGFuY2UgYWxvbmcgbm9ybWFsLlxuICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBwID0gbnBbdCpvcmRlcl0gPSB1dGlscy5jb3B5KHBvaW50c1t0Km9yZGVyXSk7XG4gICAgICAgIHAueCArPSAodD9yMjpyMSkgKiB2W3RdLm4ueDtcbiAgICAgICAgcC55ICs9ICh0P3IyOnIxKSAqIHZbdF0ubi55O1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgaWYgKCFkaXN0YW5jZUZuKSB7XG4gICAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgdG8gbGllIG9uIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhlIG9mZnNldFxuICAgICAgICAvLyBkZXJpdmF0aXZlIHZlY3RvciwgYW5kIHRoZSBvcmlnaW4tdGhyb3VnaC1jb250cm9sIHZlY3RvclxuICAgICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBpZih0aGlzLm9yZGVyPT09MiAmJiAhIXQpIHJldHVybjtcbiAgICAgICAgICB2YXIgcCA9IG5wW3Qqb3JkZXJdO1xuICAgICAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpO1xuICAgICAgICAgIHZhciBwMiA9IHsgeDogcC54ICsgZC54LCB5OiBwLnkgKyBkLnkgfTtcbiAgICAgICAgICBucFt0KzFdID0gdXRpbHMubGxpNChwLCBwMiwgbywgcG9pbnRzW3QrMV0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgYnkgXCJob3dldmVyIG11Y2ggbmVjZXNzYXJ5IHRvXG4gICAgICAvLyBlbnN1cmUgdGhlIGNvcnJlY3QgdGFuZ2VudCB0byBlbmRwb2ludFwiLlxuICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmKHRoaXMub3JkZXI9PT0yICYmICEhdCkgcmV0dXJuO1xuICAgICAgICB2YXIgcCA9IHBvaW50c1t0KzFdO1xuICAgICAgICB2YXIgb3YgPSB7XG4gICAgICAgICAgeDogcC54IC0gby54LFxuICAgICAgICAgIHk6IHAueSAtIG8ueVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmMgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigodCsxKS9vcmRlcikgOiBkO1xuICAgICAgICBpZihkaXN0YW5jZUZuICYmICFjbG9ja3dpc2UpIHJjID0gLXJjO1xuICAgICAgICB2YXIgbSA9IHNxcnQob3YueCpvdi54ICsgb3YueSpvdi55KTtcbiAgICAgICAgb3YueCAvPSBtO1xuICAgICAgICBvdi55IC89IG07XG4gICAgICAgIG5wW3QrMV0gPSB7XG4gICAgICAgICAgeDogcC54ICsgcmMqb3YueCxcbiAgICAgICAgICB5OiBwLnkgKyByYypvdi55XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgfSxcbiAgICBvdXRsaW5lOiBmdW5jdGlvbihkMSwgZDIsIGQzLCBkNCkge1xuICAgICAgZDIgPSAodHlwZW9mIGQyID09PSBcInVuZGVmaW5lZFwiKSA/IGQxIDogZDI7XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCksXG4gICAgICAgICAgbGVuID0gcmVkdWNlZC5sZW5ndGgsXG4gICAgICAgICAgZmN1cnZlcyA9IFtdLFxuICAgICAgICAgIGJjdXJ2ZXMgPSBbXSxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGFsZW4gPSAwLFxuICAgICAgICAgIHRsZW4gPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICB2YXIgZ3JhZHVhdGVkID0gKHR5cGVvZiBkMyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZDQgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gICAgICBmdW5jdGlvbiBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKHMsZSwgdGxlbixhbGVuLHNsZW4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIGYxID0gYWxlbi90bGVuLCBmMiA9IChhbGVuK3NsZW4pL3RsZW4sIGQgPSBlLXM7XG4gICAgICAgICAgcmV0dXJuIHV0aWxzLm1hcCh2LCAwLDEsIHMrZjEqZCwgcytmMipkKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGZvcm0gY3VydmUgb3VsaW5lc1xuICAgICAgcmVkdWNlZC5mb3JFYWNoKGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgc2xlbiA9IHNlZ21lbnQubGVuZ3RoKCk7XG4gICAgICAgIGlmIChncmFkdWF0ZWQpIHtcbiAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oIGQxLCBkMywgdGxlbixhbGVuLHNsZW4pICApKTtcbiAgICAgICAgICBiY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oLWQyLC1kNCwgdGxlbixhbGVuLHNsZW4pICApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggZDEpKTtcbiAgICAgICAgICBiY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSgtZDIpKTtcbiAgICAgICAgfVxuICAgICAgICBhbGVuICs9IHNsZW47XG4gICAgICB9KTtcblxuICAgICAgLy8gcmV2ZXJzZSB0aGUgXCJyZXR1cm5cIiBvdXRsaW5lXG4gICAgICBiY3VydmVzID0gYmN1cnZlcy5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICBwID0gcy5wb2ludHM7XG4gICAgICAgIGlmKHBbM10pIHsgcy5wb2ludHMgPSBbcFszXSxwWzJdLHBbMV0scFswXV07IH1cbiAgICAgICAgZWxzZSB7IHMucG9pbnRzID0gW3BbMl0scFsxXSxwWzBdXTsgfVxuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0pLnJldmVyc2UoKTtcblxuICAgICAgLy8gZm9ybSB0aGUgZW5kY2FwcyBhcyBsaW5lc1xuICAgICAgdmFyIGZzID0gZmN1cnZlc1swXS5wb2ludHNbMF0sXG4gICAgICAgICAgZmUgPSBmY3VydmVzW2xlbi0xXS5wb2ludHNbZmN1cnZlc1tsZW4tMV0ucG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgICBicyA9IGJjdXJ2ZXNbbGVuLTFdLnBvaW50c1tiY3VydmVzW2xlbi0xXS5wb2ludHMubGVuZ3RoLTFdLFxuICAgICAgICAgIGJlID0gYmN1cnZlc1swXS5wb2ludHNbMF0sXG4gICAgICAgICAgbHMgPSB1dGlscy5tYWtlbGluZShicyxmcyksXG4gICAgICAgICAgbGUgPSB1dGlscy5tYWtlbGluZShmZSxiZSksXG4gICAgICAgICAgc2VnbWVudHMgPSBbbHNdLmNvbmNhdChmY3VydmVzKS5jb25jYXQoW2xlXSkuY29uY2F0KGJjdXJ2ZXMpLFxuICAgICAgICAgIHNsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihzZWdtZW50cyk7XG4gICAgfSxcbiAgICBvdXRsaW5lc2hhcGVzOiBmdW5jdGlvbihkMSwgZDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBkMiA9IGQyIHx8IGQxO1xuICAgICAgdmFyIG91dGxpbmUgPSB0aGlzLm91dGxpbmUoZDEsZDIpLmN1cnZlcztcbiAgICAgIHZhciBzaGFwZXMgPSBbXTtcbiAgICAgIGZvcih2YXIgaT0xLCBsZW49b3V0bGluZS5sZW5ndGg7IGkgPCBsZW4vMjsgaSsrKSB7XG4gICAgICAgIHZhciBzaGFwZSA9IHV0aWxzLm1ha2VzaGFwZShvdXRsaW5lW2ldLCBvdXRsaW5lW2xlbi1pXSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICBzaGFwZS5zdGFydGNhcC52aXJ0dWFsID0gKGkgPiAxKTtcbiAgICAgICAgc2hhcGUuZW5kY2FwLnZpcnR1YWwgPSAoaSA8IGxlbi8yLTEpO1xuICAgICAgICBzaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hhcGVzO1xuICAgIH0sXG4gICAgaW50ZXJzZWN0czogZnVuY3Rpb24oY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBpZighY3VydmUpIHJldHVybiB0aGlzLnNlbGZpbnRlcnNlY3RzKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgIGlmKGN1cnZlLnAxICYmIGN1cnZlLnAyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVJbnRlcnNlY3RzKGN1cnZlKTtcbiAgICAgIH1cbiAgICAgIGlmKGN1cnZlIGluc3RhbmNlb2YgQmV6aWVyKSB7IGN1cnZlID0gY3VydmUucmVkdWNlKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLmN1cnZlaW50ZXJzZWN0cyh0aGlzLnJlZHVjZSgpLCBjdXJ2ZSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgIH0sXG4gICAgbGluZUludGVyc2VjdHM6IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBteCA9IG1pbihsaW5lLnAxLngsIGxpbmUucDIueCksXG4gICAgICAgICAgbXkgPSBtaW4obGluZS5wMS55LCBsaW5lLnAyLnkpLFxuICAgICAgICAgIE1YID0gbWF4KGxpbmUucDEueCwgbGluZS5wMi54KSxcbiAgICAgICAgICBNWSA9IG1heChsaW5lLnAxLnksIGxpbmUucDIueSksXG4gICAgICAgICAgc2VsZj10aGlzO1xuICAgICAgcmV0dXJuIHV0aWxzLnJvb3RzKHRoaXMucG9pbnRzLCBsaW5lKS5maWx0ZXIoZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcCA9IHNlbGYuZ2V0KHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuYmV0d2VlbihwLngsIG14LCBNWCkgJiYgdXRpbHMuYmV0d2VlbihwLnksIG15LCBNWSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNlbGZpbnRlcnNlY3RzOiBmdW5jdGlvbihjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpO1xuICAgICAgLy8gXCJzaW1wbGVcIiBjdXJ2ZXMgY2Fubm90IGludGVyc2VjdCB3aXRoIHRoZWlyIGRpcmVjdFxuICAgICAgLy8gbmVpZ2hib3VyLCBzbyBmb3IgZWFjaCBzZWdtZW50IFggd2UgY2hlY2sgd2hldGhlclxuICAgICAgLy8gaXQgaW50ZXJzZWN0cyBbMDp4LTJdW3grMjpsYXN0XS5cbiAgICAgIHZhciBpLGxlbj1yZWR1Y2VkLmxlbmd0aC0yLHJlc3VsdHM9W10scmVzdWx0LGxlZnQscmlnaHQ7XG4gICAgICBmb3IoaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgIGxlZnQgPSByZWR1Y2VkLnNsaWNlKGksaSsxKTtcbiAgICAgICAgcmlnaHQgPSByZWR1Y2VkLnNsaWNlKGkrMik7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY3VydmVpbnRlcnNlY3RzKGxlZnQsIHJpZ2h0LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCggcmVzdWx0ICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGN1cnZlaW50ZXJzZWN0czogZnVuY3Rpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICAvLyBzdGVwIDE6IHBhaXIgb2ZmIGFueSBvdmVybGFwcGluZyBzZWdtZW50c1xuICAgICAgYzEuZm9yRWFjaChmdW5jdGlvbihsKSB7XG4gICAgICAgIGMyLmZvckVhY2goZnVuY3Rpb24ocikge1xuICAgICAgICAgIGlmKGwub3ZlcmxhcHMocikpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goeyBsZWZ0OiBsLCByaWdodDogciB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyBzdGVwIDI6IGZvciBlYWNoIHBhaXJpbmcsIHJ1biB0aHJvdWdoIHRoZSBjb252ZXJnZW5jZSBhbGdvcml0aG0uXG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB1dGlscy5wYWlyaXRlcmF0aW9uKHBhaXIubGVmdCwgcGFpci5yaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLmNvbmNhdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICAgIH0sXG4gICAgYXJjczogZnVuY3Rpb24oZXJyb3JUaHJlc2hvbGQpIHtcbiAgICAgIGVycm9yVGhyZXNob2xkID0gZXJyb3JUaHJlc2hvbGQgfHwgMC41O1xuICAgICAgdmFyIGNpcmNsZXMgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyYXRlKGVycm9yVGhyZXNob2xkLCBjaXJjbGVzKTtcbiAgICB9LFxuICAgIF9lcnJvcjogZnVuY3Rpb24ocGMsIG5wMSwgcywgZSkge1xuICAgICAgdmFyIHEgPSAoZSAtIHMpIC8gNCxcbiAgICAgICAgICBjMSA9IHRoaXMuZ2V0KHMgKyBxKSxcbiAgICAgICAgICBjMiA9IHRoaXMuZ2V0KGUgLSBxKSxcbiAgICAgICAgICByZWYgPSB1dGlscy5kaXN0KHBjLCBucDEpLFxuICAgICAgICAgIGQxICA9IHV0aWxzLmRpc3QocGMsIGMxKSxcbiAgICAgICAgICBkMiAgPSB1dGlscy5kaXN0KHBjLCBjMik7XG4gICAgICByZXR1cm4gYWJzKGQxLXJlZikgKyBhYnMoZDItcmVmKTtcbiAgICB9LFxuICAgIF9pdGVyYXRlOiBmdW5jdGlvbihlcnJvclRocmVzaG9sZCwgY2lyY2xlcykge1xuICAgICAgdmFyIHMgPSAwLCBlID0gMSwgc2FmZXR5O1xuICAgICAgLy8gd2UgZG8gYSBiaW5hcnkgc2VhcmNoIHRvIGZpbmQgdGhlIFwiZ29vZCBgdGAgY2xvc2VzdCB0byBuby1sb25nZXItZ29vZFwiXG4gICAgICBkbyB7XG4gICAgICAgIHNhZmV0eT0wO1xuXG4gICAgICAgIC8vIHN0ZXAgMTogc3RhcnQgd2l0aCB0aGUgbWF4aW11bSBwb3NzaWJsZSBhcmNcbiAgICAgICAgZSA9IDE7XG5cbiAgICAgICAgLy8gcG9pbnRzOlxuICAgICAgICB2YXIgbnAxID0gdGhpcy5nZXQocyksIG5wMiwgbnAzLCBhcmMsIHByZXZfYXJjO1xuXG4gICAgICAgIC8vIGJvb2xlYW5zOlxuICAgICAgICB2YXIgY3Vycl9nb29kID0gZmFsc2UsIHByZXZfZ29vZCA9IGZhbHNlLCBkb25lO1xuXG4gICAgICAgIC8vIG51bWJlcnM6XG4gICAgICAgIHZhciBtID0gZSwgcHJldl9lID0gMSwgc3RlcCA9IDA7XG5cbiAgICAgICAgLy8gc3RlcCAyOiBmaW5kIHRoZSBiZXN0IHBvc3NpYmxlIGFyY1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcHJldl9nb29kID0gY3Vycl9nb29kO1xuICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuICAgICAgICAgIG0gPSAocyArIGUpLzI7XG4gICAgICAgICAgc3RlcCsrO1xuXG4gICAgICAgICAgbnAyID0gdGhpcy5nZXQobSk7XG4gICAgICAgICAgbnAzID0gdGhpcy5nZXQoZSk7XG5cbiAgICAgICAgICBhcmMgPSB1dGlscy5nZXRjY2VudGVyKG5wMSwgbnAyLCBucDMpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vYWxzbyBzYXZlIHRoZSB0IHZhbHVlc1xuICAgICAgICAgIGFyYy5pbnRlcnZhbCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBzLFxuICAgICAgICAgICAgZW5kOiBlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2Vycm9yKGFyYywgbnAxLCBzLCBlKTtcbiAgICAgICAgICBjdXJyX2dvb2QgPSAoZXJyb3IgPD0gZXJyb3JUaHJlc2hvbGQpO1xuXG4gICAgICAgICAgZG9uZSA9IHByZXZfZ29vZCAmJiAhY3Vycl9nb29kO1xuICAgICAgICAgIGlmKCFkb25lKSBwcmV2X2UgPSBlO1xuXG4gICAgICAgICAgLy8gdGhpcyBhcmMgaXMgZmluZTogd2UgY2FuIG1vdmUgJ2UnIHVwIHRvIHNlZSBpZiB3ZSBjYW4gZmluZCBhIHdpZGVyIGFyY1xuICAgICAgICAgIGlmKGN1cnJfZ29vZCkge1xuICAgICAgICAgICAgLy8gaWYgZSBpcyBhbHJlYWR5IGF0IG1heCwgdGhlbiB3ZSdyZSBkb25lIGZvciB0aGlzIGFyYy5cbiAgICAgICAgICAgIGlmIChlID49IDEpIHtcbiAgICAgICAgICAgICAgcHJldl9lID0gMTtcbiAgICAgICAgICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbm90LCBtb3ZlIGl0IHVwIGJ5IGhhbGYgdGhlIGl0ZXJhdGlvbiBkaXN0YW5jZVxuICAgICAgICAgICAgZSA9IGUgKyAoZS1zKS8yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMgaXMgYSBiYWQgYXJjOiB3ZSBuZWVkIHRvIG1vdmUgJ2UnIGRvd24gdG8gZmluZCBhIGdvb2QgYXJjXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlID0gbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUoIWRvbmUgJiYgc2FmZXR5Kys8MTAwKTtcblxuICAgICAgICBpZihzYWZldHk+PTEwMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhcmMgYWJzdHJhY3Rpb24gc29tZWhvdyBmYWlsZWQuLi5cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIltGXSBhcmMgZm91bmRcIiwgcywgcHJldl9lLCBwcmV2X2FyYy54LCBwcmV2X2FyYy55LCBwcmV2X2FyYy5zLCBwcmV2X2FyYy5lKTtcblxuICAgICAgICBwcmV2X2FyYyA9IChwcmV2X2FyYyA/IHByZXZfYXJjIDogYXJjKTtcbiAgICAgICAgY2lyY2xlcy5wdXNoKHByZXZfYXJjKTtcbiAgICAgICAgcyA9IHByZXZfZTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKGUgPCAxKTtcbiAgICAgIHJldHVybiBjaXJjbGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IEJlemllcjtcblxufSgpKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHV0aWxzID0gcmVxdWlyZSg4MCk7XG5cbiAgLyoqXG4gICAqIFBvbHkgQmV6aWVyXG4gICAqIEBwYXJhbSB7W3R5cGVdfSBjdXJ2ZXMgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgdmFyIFBvbHlCZXppZXIgPSBmdW5jdGlvbihjdXJ2ZXMpIHtcbiAgICB0aGlzLmN1cnZlcyA9IFtdO1xuICAgIHRoaXMuXzNkID0gZmFsc2U7XG4gICAgaWYoISFjdXJ2ZXMpIHtcbiAgICAgIHRoaXMuY3VydmVzID0gY3VydmVzO1xuICAgICAgdGhpcy5fM2QgPSB0aGlzLmN1cnZlc1swXS5fM2Q7XG4gICAgfVxuICB9XG5cbiAgUG9seUJlemllci5wcm90b3R5cGUgPSB7XG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLnBvaW50c1RvU3RyaW5nKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIGFkZEN1cnZlOiBmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgdGhpcy5jdXJ2ZXMucHVzaChjdXJ2ZSk7XG4gICAgICB0aGlzLl8zZCA9IHRoaXMuXzNkIHx8IGN1cnZlLl8zZDtcbiAgICB9LFxuICAgIGxlbmd0aDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJ2ZXMubWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYubGVuZ3RoKCk7IH0pLnJlZHVjZShmdW5jdGlvbihhLGIpIHsgcmV0dXJuIGErYjsgfSk7XG4gICAgfSxcbiAgICBjdXJ2ZTogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJ2ZXNbaWR4XTtcbiAgICB9LFxuICAgIGJib3g6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGMgPSB0aGlzLmN1cnZlcztcbiAgICAgIHZhciBiYm94ID0gY1swXS5iYm94KCk7XG4gICAgICBmb3IodmFyIGk9MTsgaTxjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHV0aWxzLmV4cGFuZGJveChiYm94LCBjW2ldLmJib3goKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmJveDtcbiAgICB9LFxuICAgIG9mZnNldDogZnVuY3Rpb24oZCkge1xuICAgICAgdmFyIG9mZnNldCA9IFtdO1xuICAgICAgdGhpcy5jdXJ2ZXMuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgIG9mZnNldCA9IG9mZnNldC5jb25jYXQodi5vZmZzZXQoZCkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFBvbHlCZXppZXIob2Zmc2V0KTtcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBQb2x5QmV6aWVyO1xufSgpKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gbWF0aC1pbmxpbmluZy5cbiAgdmFyIGFicyA9IE1hdGguYWJzLFxuICAgICAgY29zID0gTWF0aC5jb3MsXG4gICAgICBzaW4gPSBNYXRoLnNpbixcbiAgICAgIGFjb3MgPSBNYXRoLmFjb3MsXG4gICAgICBhdGFuMiA9IE1hdGguYXRhbjIsXG4gICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgcG93ID0gTWF0aC5wb3csXG4gICAgICAvLyBjdWJlIHJvb3QgZnVuY3Rpb24geWllbGRpbmcgcmVhbCByb290c1xuICAgICAgY3J0ID0gZnVuY3Rpb24odikgeyByZXR1cm4gKHY8MCkgPyAtcG93KC12LDEvMykgOiBwb3codiwxLzMpOyB9LFxuICAgICAgLy8gdHJpZyBjb25zdGFudHNcbiAgICAgIHBpID0gTWF0aC5QSSxcbiAgICAgIHRhdSA9IDIqcGksXG4gICAgICBxdWFydCA9IHBpLzIsXG4gICAgICAvLyBmbG9hdCBwcmVjaXNpb24gc2lnbmlmaWNhbnQgZGVjaW1hbFxuICAgICAgZXBzaWxvbiA9IDAuMDAwMDAxO1xuXG4gIC8vIEJlemllciB1dGlsaXR5IGZ1bmN0aW9uc1xuICB2YXIgdXRpbHMgPSB7XG4gICAgLy8gTGVnZW5kcmUtR2F1c3MgYWJzY2lzc2FlIHdpdGggbj0yNCAoeF9pIHZhbHVlcywgZGVmaW5lZCBhdCBpPW4gYXMgdGhlIHJvb3RzIG9mIHRoZSBudGggb3JkZXIgTGVnZW5kcmUgcG9seW5vbWlhbCBQbih4KSlcbiAgICBUdmFsdWVzOiBbXG4gICAgICAtMC4wNjQwNTY4OTI4NjI2MDU2MjYwODUwNDMwODI2MjQ3NDUwMzg1OTA5LFxuICAgICAgIDAuMDY0MDU2ODkyODYyNjA1NjI2MDg1MDQzMDgyNjI0NzQ1MDM4NTkwOSxcbiAgICAgIC0wLjE5MTExODg2NzQ3MzYxNjMwOTE1ODYzOTgyMDc1NzA2OTYzMTg0MDQsXG4gICAgICAgMC4xOTExMTg4Njc0NzM2MTYzMDkxNTg2Mzk4MjA3NTcwNjk2MzE4NDA0LFxuICAgICAgLTAuMzE1MDQyNjc5Njk2MTYzMzc0Mzg2NzkzMjkxMzE5ODEwMjQwNzg2NCxcbiAgICAgICAwLjMxNTA0MjY3OTY5NjE2MzM3NDM4Njc5MzI5MTMxOTgxMDI0MDc4NjQsXG4gICAgICAtMC40MzM3OTM1MDc2MjYwNDUxMzg0ODcwODQyMzE5MTMzNDk3MTI0NTI0LFxuICAgICAgIDAuNDMzNzkzNTA3NjI2MDQ1MTM4NDg3MDg0MjMxOTEzMzQ5NzEyNDUyNCxcbiAgICAgIC0wLjU0NTQyMTQ3MTM4ODgzOTUzNTY1ODM3NTYxNzIxODM3MjM3MDAxMDcsXG4gICAgICAgMC41NDU0MjE0NzEzODg4Mzk1MzU2NTgzNzU2MTcyMTgzNzIzNzAwMTA3LFxuICAgICAgLTAuNjQ4MDkzNjUxOTM2OTc1NTY5MjUyNDk1Nzg2OTEwNzQ3NjI2NjY5NixcbiAgICAgICAwLjY0ODA5MzY1MTkzNjk3NTU2OTI1MjQ5NTc4NjkxMDc0NzYyNjY2OTYsXG4gICAgICAtMC43NDAxMjQxOTE1Nzg1NTQzNjQyNDM4MjgxMDMwOTk5Nzg0MjU1MjMyLFxuICAgICAgIDAuNzQwMTI0MTkxNTc4NTU0MzY0MjQzODI4MTAzMDk5OTc4NDI1NTIzMixcbiAgICAgIC0wLjgyMDAwMTk4NTk3MzkwMjkyMTk1Mzk0OTg3MjY2OTc0NTIwODA3NjEsXG4gICAgICAgMC44MjAwMDE5ODU5NzM5MDI5MjE5NTM5NDk4NzI2Njk3NDUyMDgwNzYxLFxuICAgICAgLTAuODg2NDE1NTI3MDA0NDAxMDM0MjEzMTU0MzQxOTgyMTk2NzU1MDg3MyxcbiAgICAgICAwLjg4NjQxNTUyNzAwNDQwMTAzNDIxMzE1NDM0MTk4MjE5Njc1NTA4NzMsXG4gICAgICAtMC45MzgyNzQ1NTIwMDI3MzI3NTg1MjM2NDkwMDE3MDg3MjE0NDk2NTQ4LFxuICAgICAgIDAuOTM4Mjc0NTUyMDAyNzMyNzU4NTIzNjQ5MDAxNzA4NzIxNDQ5NjU0OCxcbiAgICAgIC0wLjk3NDcyODU1NTk3MTMwOTQ5ODE5ODM5MTk5MzAwODE2OTA2MTc0MTEsXG4gICAgICAgMC45NzQ3Mjg1NTU5NzEzMDk0OTgxOTgzOTE5OTMwMDgxNjkwNjE3NDExLFxuICAgICAgLTAuOTk1MTg3MjE5OTk3MDIxMzYwMTc5OTk3NDA5NzAwNzM2ODExODc0NSxcbiAgICAgICAwLjk5NTE4NzIxOTk5NzAyMTM2MDE3OTk5NzQwOTcwMDczNjgxMTg3NDVcbiAgICBdLFxuXG4gICAgLy8gTGVnZW5kcmUtR2F1c3Mgd2VpZ2h0cyB3aXRoIG49MjQgKHdfaSB2YWx1ZXMsIGRlZmluZWQgYnkgYSBmdW5jdGlvbiBsaW5rZWQgdG8gaW4gdGhlIEJlemllciBwcmltZXIgYXJ0aWNsZSlcbiAgICBDdmFsdWVzOiBbXG4gICAgICAwLjEyNzkzODE5NTM0Njc1MjE1Njk3NDA1NjE2NTIyNDY5NTM3MTg1MTcsXG4gICAgICAwLjEyNzkzODE5NTM0Njc1MjE1Njk3NDA1NjE2NTIyNDY5NTM3MTg1MTcsXG4gICAgICAwLjEyNTgzNzQ1NjM0NjgyODI5NjEyMTM3NTM4MjUxMTE4MzY4ODcyNjQsXG4gICAgICAwLjEyNTgzNzQ1NjM0NjgyODI5NjEyMTM3NTM4MjUxMTE4MzY4ODcyNjQsXG4gICAgICAwLjEyMTY3MDQ3MjkyNzgwMzM5MTIwNDQ2MzE1MzQ3NjI2MjQyNTYwNzAsXG4gICAgICAwLjEyMTY3MDQ3MjkyNzgwMzM5MTIwNDQ2MzE1MzQ3NjI2MjQyNTYwNzAsXG4gICAgICAwLjExNTUwNTY2ODA1MzcyNTYwMTM1MzM0NDQ4MzkwNjc4MzU1OTg2MjIsXG4gICAgICAwLjExNTUwNTY2ODA1MzcyNTYwMTM1MzM0NDQ4MzkwNjc4MzU1OTg2MjIsXG4gICAgICAwLjEwNzQ0NDI3MDExNTk2NTYzNDc4MjU3NzM0MjQ0NjYwNjIyMjc5NDYsXG4gICAgICAwLjEwNzQ0NDI3MDExNTk2NTYzNDc4MjU3NzM0MjQ0NjYwNjIyMjc5NDYsXG4gICAgICAwLjA5NzYxODY1MjEwNDExMzg4ODI2OTg4MDY2NDQ2NDI0NzE1NDQyNzksXG4gICAgICAwLjA5NzYxODY1MjEwNDExMzg4ODI2OTg4MDY2NDQ2NDI0NzE1NDQyNzksXG4gICAgICAwLjA4NjE5MDE2MTUzMTk1MzI3NTkxNzE4NTIwMjk4Mzc0MjY2NzE4NTAsXG4gICAgICAwLjA4NjE5MDE2MTUzMTk1MzI3NTkxNzE4NTIwMjk4Mzc0MjY2NzE4NTAsXG4gICAgICAwLjA3MzM0NjQ4MTQxMTA4MDMwNTczNDAzMzYxNTI1MzExNjUxODExOTMsXG4gICAgICAwLjA3MzM0NjQ4MTQxMTA4MDMwNTczNDAzMzYxNTI1MzExNjUxODExOTMsXG4gICAgICAwLjA1OTI5ODU4NDkxNTQzNjc4MDc0NjM2Nzc1ODUwMDEwODU4NDU0MTIsXG4gICAgICAwLjA1OTI5ODU4NDkxNTQzNjc4MDc0NjM2Nzc1ODUwMDEwODU4NDU0MTIsXG4gICAgICAwLjA0NDI3NzQzODgxNzQxOTgwNjE2ODYwMjc0ODIxMTMzODIyODg1OTMsXG4gICAgICAwLjA0NDI3NzQzODgxNzQxOTgwNjE2ODYwMjc0ODIxMTMzODIyODg1OTMsXG4gICAgICAwLjAyODUzMTM4ODYyODkzMzY2MzE4MTMwNzgxNTk1MTg3ODI4NjQ0OTEsXG4gICAgICAwLjAyODUzMTM4ODYyODkzMzY2MzE4MTMwNzgxNTk1MTg3ODI4NjQ0OTEsXG4gICAgICAwLjAxMjM0MTIyOTc5OTk4NzE5OTU0NjgwNTY2NzA3MDAzNzI5MTU3NTksXG4gICAgICAwLjAxMjM0MTIyOTc5OTk4NzE5OTU0NjgwNTY2NzA3MDAzNzI5MTU3NTlcbiAgICBdLFxuXG4gICAgYXJjZm46IGZ1bmN0aW9uKHQsIGRlcml2YXRpdmVGbikge1xuICAgICAgdmFyIGQgPSBkZXJpdmF0aXZlRm4odCk7XG4gICAgICB2YXIgbCA9IGQueCpkLnggKyBkLnkqZC55O1xuICAgICAgaWYodHlwZW9mIGQueiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBsICs9IGQueipkLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3FydChsKTtcbiAgICB9LFxuXG4gICAgYmV0d2VlbjogZnVuY3Rpb24odiwgbSwgTSkge1xuICAgICAgcmV0dXJuIChtIDw9IHYgJiYgdiA8PSBNKSB8fCB1dGlscy5hcHByb3hpbWF0ZWx5KHYsIG0pIHx8IHV0aWxzLmFwcHJveGltYXRlbHkodiwgTSk7XG4gICAgfSxcblxuICAgIGFwcHJveGltYXRlbHk6IGZ1bmN0aW9uKGEsYixwcmVjaXNpb24pIHtcbiAgICAgIHJldHVybiBhYnMoYS1iKSA8PSAocHJlY2lzaW9uIHx8IGVwc2lsb24pO1xuICAgIH0sXG5cbiAgICBsZW5ndGg6IGZ1bmN0aW9uKGRlcml2YXRpdmVGbikge1xuICAgICAgdmFyIHo9MC41LHN1bT0wLGxlbj11dGlscy5UdmFsdWVzLmxlbmd0aCxpLHQ7XG4gICAgICBmb3IoaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgIHQgPSB6ICogdXRpbHMuVHZhbHVlc1tpXSArIHo7XG4gICAgICAgIHN1bSArPSB1dGlscy5DdmFsdWVzW2ldICogdXRpbHMuYXJjZm4odCxkZXJpdmF0aXZlRm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHogKiBzdW07XG4gICAgfSxcblxuICAgIG1hcDogZnVuY3Rpb24odiwgZHMsZGUsIHRzLHRlKSB7XG4gICAgICB2YXIgZDEgPSBkZS1kcywgZDIgPSB0ZS10cywgdjIgPSAgdi1kcywgciA9IHYyL2QxO1xuICAgICAgcmV0dXJuIHRzICsgZDIqcjtcbiAgICB9LFxuXG4gICAgbGVycDogZnVuY3Rpb24ociwgdjEsIHYyKSB7XG4gICAgICB2YXIgcmV0ID0ge1xuICAgICAgICB4OiB2MS54ICsgcioodjIueC12MS54KSxcbiAgICAgICAgeTogdjEueSArIHIqKHYyLnktdjEueSlcbiAgICAgIH07XG4gICAgICBpZighIXYxLnogJiYgISF2Mi56KSB7XG4gICAgICAgIHJldC56ID0gIHYxLnogKyByKih2Mi56LXYxLnopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcG9pbnRUb1N0cmluZzogZnVuY3Rpb24ocCkge1xuICAgICAgdmFyIHMgPSBwLngrXCIvXCIrcC55O1xuICAgICAgaWYodHlwZW9mIHAueiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBzICs9IFwiL1wiK3AuejtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzO1xuICAgIH0sXG5cbiAgICBwb2ludHNUb1N0cmluZzogZnVuY3Rpb24ocG9pbnRzKSB7XG4gICAgICByZXR1cm4gXCJbXCIgKyBwb2ludHMubWFwKHV0aWxzLnBvaW50VG9TdHJpbmcpLmpvaW4oXCIsIFwiKSArIFwiXVwiO1xuICAgIH0sXG5cbiAgICBjb3B5OiBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIH0sXG5cbiAgICBhbmdsZTogZnVuY3Rpb24obyx2MSx2Mikge1xuICAgICAgdmFyIGR4MSA9IHYxLnggLSBvLngsXG4gICAgICAgICAgZHkxID0gdjEueSAtIG8ueSxcbiAgICAgICAgICBkeDIgPSB2Mi54IC0gby54LFxuICAgICAgICAgIGR5MiA9IHYyLnkgLSBvLnksXG4gICAgICAgICAgY3Jvc3MgPSBkeDEqZHkyIC0gZHkxKmR4MixcbiAgICAgICAgICBtMSA9IHNxcnQoZHgxKmR4MStkeTEqZHkxKSxcbiAgICAgICAgICBtMiA9IHNxcnQoZHgyKmR4MitkeTIqZHkyKSxcbiAgICAgICAgICBkb3Q7XG4gICAgICBkeDEvPW0xOyBkeTEvPW0xOyBkeDIvPW0yOyBkeTIvPW0yO1xuICAgICAgZG90ID0gZHgxKmR4MiArIGR5MSpkeTI7XG4gICAgICByZXR1cm4gYXRhbjIoY3Jvc3MsIGRvdCk7XG4gICAgfSxcblxuICAgIC8vIHJvdW5kIGFzIHN0cmluZywgdG8gYXZvaWQgcm91bmRpbmcgZXJyb3JzXG4gICAgcm91bmQ6IGZ1bmN0aW9uKHYsIGQpIHtcbiAgICAgIHZhciBzID0gJycgKyB2O1xuICAgICAgdmFyIHBvcyA9IHMuaW5kZXhPZihcIi5cIik7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzLnN1YnN0cmluZygwLHBvcysxK2QpKTtcbiAgICB9LFxuXG4gICAgZGlzdDogZnVuY3Rpb24ocDEsIHAyKSB7XG4gICAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgICBkeSA9IHAxLnkgLSBwMi55O1xuICAgICAgcmV0dXJuIHNxcnQoZHgqZHgrZHkqZHkpO1xuICAgIH0sXG5cbiAgICBjbG9zZXN0OiBmdW5jdGlvbihMVVQsIHBvaW50KSB7XG4gICAgICB2YXIgbWRpc3QgPSBwb3coMiw2MyksIG1wb3MsIGQ7XG4gICAgICBMVVQuZm9yRWFjaChmdW5jdGlvbihwLCBpZHgpIHtcbiAgICAgICAgZCA9IHV0aWxzLmRpc3QocG9pbnQsIHApO1xuICAgICAgICBpZiAoZDxtZGlzdCkge1xuICAgICAgICAgIG1kaXN0ID0gZDtcbiAgICAgICAgICBtcG9zID0gaWR4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IG1kaXN0Om1kaXN0LCBtcG9zOm1wb3MgfTtcbiAgICB9LFxuXG4gICAgYWJjcmF0aW86IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgIC8vIHNlZSByYXRpbyh0KSBub3RlIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mby8jYWJjXG4gICAgICBpZiAobiE9PTIgJiYgbiE9PTMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHQgPSAwLjU7XG4gICAgICB9IGVsc2UgaWYgKHQ9PT0wIHx8IHQ9PT0xKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfVxuICAgICAgdmFyIGJvdHRvbSA9IHBvdyh0LG4pICsgcG93KDEtdCxuKSwgdG9wID0gYm90dG9tIC0gMTtcbiAgICAgIHJldHVybiBhYnModG9wL2JvdHRvbSk7XG4gICAgfSxcblxuICAgIHByb2plY3Rpb25yYXRpbzogZnVuY3Rpb24odCwgbikge1xuICAgICAgLy8gc2VlIHUodCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiY1xuICAgICAgaWYgKG4hPT0yICYmIG4hPT0zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0ID0gMC41O1xuICAgICAgfSBlbHNlIGlmICh0PT09MCB8fCB0PT09MSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH1cbiAgICAgIHZhciB0b3AgPSBwb3coMS10LCBuKSwgYm90dG9tID0gcG93KHQsbikgKyB0b3A7XG4gICAgICByZXR1cm4gdG9wL2JvdHRvbTtcbiAgICB9LFxuXG4gICAgbGxpODogZnVuY3Rpb24oeDEseTEseDIseTIseDMseTMseDQseTQpIHtcbiAgICAgIHZhciBueD0oeDEqeTIteTEqeDIpKih4My14NCktKHgxLXgyKSooeDMqeTQteTMqeDQpLFxuICAgICAgICAgIG55PSh4MSp5Mi15MSp4MikqKHkzLXk0KS0oeTEteTIpKih4Myp5NC15Myp4NCksXG4gICAgICAgICAgZD0oeDEteDIpKih5My15NCktKHkxLXkyKSooeDMteDQpO1xuICAgICAgaWYoZD09MCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIHJldHVybiB7IHg6IG54L2QsIHk6IG55L2QgfTtcbiAgICB9LFxuXG4gICAgbGxpNDogZnVuY3Rpb24ocDEscDIscDMscDQpIHtcbiAgICAgIHZhciB4MSA9IHAxLngsIHkxID0gcDEueSxcbiAgICAgICAgICB4MiA9IHAyLngsIHkyID0gcDIueSxcbiAgICAgICAgICB4MyA9IHAzLngsIHkzID0gcDMueSxcbiAgICAgICAgICB4NCA9IHA0LngsIHk0ID0gcDQueTtcbiAgICAgIHJldHVybiB1dGlscy5sbGk4KHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0KTtcbiAgICB9LFxuXG4gICAgbGxpOiBmdW5jdGlvbih2MSwgdjIpIHtcbiAgICAgIHJldHVybiB1dGlscy5sbGk0KHYxLHYxLmMsdjIsdjIuYyk7XG4gICAgfSxcblxuICAgIG1ha2VsaW5lOiBmdW5jdGlvbihwMSxwMikge1xuICAgICAgdmFyIEJlemllciA9IHJlcXVpcmUoNzgpO1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LCB4MiA9IHAyLngsIHkyID0gcDIueSwgZHggPSAoeDIteDEpLzMsIGR5ID0gKHkyLXkxKS8zO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIoeDEsIHkxLCB4MStkeCwgeTErZHksIHgxKzIqZHgsIHkxKzIqZHksIHgyLCB5Mik7XG4gICAgfSxcblxuICAgIGZpbmRiYm94OiBmdW5jdGlvbihzZWN0aW9ucykge1xuICAgICAgdmFyIG14PTk5OTk5OTk5LG15PW14LE1YPS1teCxNWT1NWDtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24ocykge1xuICAgICAgICB2YXIgYmJveCA9IHMuYmJveCgpO1xuICAgICAgICBpZihteCA+IGJib3gueC5taW4pIG14ID0gYmJveC54Lm1pbjtcbiAgICAgICAgaWYobXkgPiBiYm94LnkubWluKSBteSA9IGJib3gueS5taW47XG4gICAgICAgIGlmKE1YIDwgYmJveC54Lm1heCkgTVggPSBiYm94LngubWF4O1xuICAgICAgICBpZihNWSA8IGJib3gueS5tYXgpIE1ZID0gYmJveC55Lm1heDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeyBtaW46IG14LCBtaWQ6KG14K01YKS8yLCBtYXg6IE1YLCBzaXplOk1YLW14IH0sXG4gICAgICAgIHk6IHsgbWluOiBteSwgbWlkOihteStNWSkvMiwgbWF4OiBNWSwgc2l6ZTpNWS1teSB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNoYXBlaW50ZXJzZWN0aW9uczogZnVuY3Rpb24oczEsIGJib3gxLCBzMiwgYmJveDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBpZighdXRpbHMuYmJveG92ZXJsYXAoYmJveDEsIGJib3gyKSkgcmV0dXJuIFtdO1xuICAgICAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICAgIHZhciBhMSA9IFtzMS5zdGFydGNhcCwgczEuZm9yd2FyZCwgczEuYmFjaywgczEuZW5kY2FwXTtcbiAgICAgIHZhciBhMiA9IFtzMi5zdGFydGNhcCwgczIuZm9yd2FyZCwgczIuYmFjaywgczIuZW5kY2FwXTtcbiAgICAgIGExLmZvckVhY2goZnVuY3Rpb24obDEpIHtcbiAgICAgICAgaWYobDEudmlydHVhbCkgcmV0dXJuO1xuICAgICAgICBhMi5mb3JFYWNoKGZ1bmN0aW9uKGwyKSB7XG4gICAgICAgICAgaWYobDIudmlydHVhbCkgcmV0dXJuO1xuICAgICAgICAgIHZhciBpc3MgPSBsMS5pbnRlcnNlY3RzKGwyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgICAgaWYoaXNzLmxlbmd0aD4wKSB7XG4gICAgICAgICAgICBpc3MuYzEgPSBsMTtcbiAgICAgICAgICAgIGlzcy5jMiA9IGwyO1xuICAgICAgICAgICAgaXNzLnMxID0gczE7XG4gICAgICAgICAgICBpc3MuczIgPSBzMjtcbiAgICAgICAgICAgIGludGVyc2VjdGlvbnMucHVzaChpc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICAgIH0sXG5cbiAgICBtYWtlc2hhcGU6IGZ1bmN0aW9uKGZvcndhcmQsIGJhY2ssIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYnBsID0gYmFjay5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIGZwbCA9IGZvcndhcmQucG9pbnRzLmxlbmd0aDtcbiAgICAgIHZhciBzdGFydCAgPSB1dGlscy5tYWtlbGluZShiYWNrLnBvaW50c1ticGwtMV0sIGZvcndhcmQucG9pbnRzWzBdKTtcbiAgICAgIHZhciBlbmQgICAgPSB1dGlscy5tYWtlbGluZShmb3J3YXJkLnBvaW50c1tmcGwtMV0sIGJhY2sucG9pbnRzWzBdKTtcbiAgICAgIHZhciBzaGFwZSAgPSB7XG4gICAgICAgIHN0YXJ0Y2FwOiBzdGFydCxcbiAgICAgICAgZm9yd2FyZDogZm9yd2FyZCxcbiAgICAgICAgYmFjazogYmFjayxcbiAgICAgICAgZW5kY2FwOiBlbmQsXG4gICAgICAgIGJib3g6IHV0aWxzLmZpbmRiYm94KFtzdGFydCwgZm9yd2FyZCwgYmFjaywgZW5kXSlcbiAgICAgIH07XG4gICAgICB2YXIgc2VsZiA9IHV0aWxzO1xuICAgICAgc2hhcGUuaW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKHMyKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNoYXBlaW50ZXJzZWN0aW9ucyhzaGFwZSxzaGFwZS5iYm94LHMyLHMyLmJib3gsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2hhcGU7XG4gICAgfSxcblxuICAgIGdldG1pbm1heDogZnVuY3Rpb24oY3VydmUsIGQsIGxpc3QpIHtcbiAgICAgIGlmKCFsaXN0KSByZXR1cm4geyBtaW46MCwgbWF4OjAgfTtcbiAgICAgIHZhciBtaW49MHhGRkZGRkZGRkZGRkZGRkZGLCBtYXg9LW1pbix0LGM7XG4gICAgICBpZihsaXN0LmluZGV4T2YoMCk9PT0tMSkgeyBsaXN0ID0gWzBdLmNvbmNhdChsaXN0KTsgfVxuICAgICAgaWYobGlzdC5pbmRleE9mKDEpPT09LTEpIHsgbGlzdC5wdXNoKDEpOyB9XG4gICAgICBmb3IodmFyIGk9MCxsZW49bGlzdC5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IGxpc3RbaV07XG4gICAgICAgIGMgPSBjdXJ2ZS5nZXQodCk7XG4gICAgICAgIGlmKGNbZF0gPCBtaW4pIHsgbWluID0gY1tkXTsgfVxuICAgICAgICBpZihjW2RdID4gbWF4KSB7IG1heCA9IGNbZF07IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG1pbjptaW4sIG1pZDoobWluK21heCkvMiwgbWF4Om1heCwgc2l6ZTptYXgtbWluIH07XG4gICAgfSxcblxuICAgIGFsaWduOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIHZhciB0eCA9IGxpbmUucDEueCxcbiAgICAgICAgICB0eSA9IGxpbmUucDEueSxcbiAgICAgICAgICBhID0gLWF0YW4yKGxpbmUucDIueS10eSwgbGluZS5wMi54LXR4KSxcbiAgICAgICAgICBkID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeDogKHYueC10eCkqY29zKGEpIC0gKHYueS10eSkqc2luKGEpLFxuICAgICAgICAgICAgICB5OiAodi54LXR4KSpzaW4oYSkgKyAodi55LXR5KSpjb3MoYSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfTtcbiAgICAgIHJldHVybiBwb2ludHMubWFwKGQpO1xuICAgIH0sXG5cbiAgICByb290czogZnVuY3Rpb24ocG9pbnRzLCBsaW5lKSB7XG4gICAgICBsaW5lID0gbGluZSB8fCB7cDE6e3g6MCx5OjB9LHAyOnt4OjEseTowfX07XG4gICAgICB2YXIgb3JkZXIgPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBwID0gdXRpbHMuYWxpZ24ocG9pbnRzLCBsaW5lKTtcbiAgICAgIHZhciByZWR1Y2UgPSBmdW5jdGlvbih0KSB7IHJldHVybiAwPD10ICYmIHQgPD0xOyB9O1xuXG4gICAgICBpZiAob3JkZXIgPT09IDIpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLnksXG4gICAgICAgICAgICBiID0gcFsxXS55LFxuICAgICAgICAgICAgYyA9IHBbMl0ueSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsgKDIqYi1jKS8yKihiLWMpIF0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBzZWUgaHR0cDovL3d3dy50cmFuczRtaW5kLmNvbS9wZXJzb25hbF9kZXZlbG9wbWVudC9tYXRoZW1hdGljcy9wb2x5bm9taWFscy9jdWJpY0FsZ2VicmEuaHRtXG4gICAgICB2YXIgcGEgPSBwWzBdLnksXG4gICAgICAgICAgcGIgPSBwWzFdLnksXG4gICAgICAgICAgcGMgPSBwWzJdLnksXG4gICAgICAgICAgcGQgPSBwWzNdLnksXG4gICAgICAgICAgZCA9ICgtcGEgKyAzKnBiIC0gMypwYyArIHBkKSxcbiAgICAgICAgICBhID0gKDMqcGEgLSA2KnBiICsgMypwYykgLyBkLFxuICAgICAgICAgIGIgPSAoLTMqcGEgKyAzKnBiKSAvIGQsXG4gICAgICAgICAgYyA9IHBhIC8gZCxcbiAgICAgICAgICBwID0gKDMqYiAtIGEqYSkvMyxcbiAgICAgICAgICBwMyA9IHAvMyxcbiAgICAgICAgICBxID0gKDIqYSphKmEgLSA5KmEqYiArIDI3KmMpLzI3LFxuICAgICAgICAgIHEyID0gcS8yLFxuICAgICAgICAgIGRpc2NyaW1pbmFudCA9IHEyKnEyICsgcDMqcDMqcDMsXG4gICAgICAgICAgdTEsdjEseDEseDIseDM7XG4gICAgICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcbiAgICAgICAgdmFyIG1wMyA9IC1wLzMsXG4gICAgICAgICAgICBtcDMzID0gbXAzKm1wMyptcDMsXG4gICAgICAgICAgICByID0gc3FydCggbXAzMyApLFxuICAgICAgICAgICAgdCA9IC1xLygyKnIpLFxuICAgICAgICAgICAgY29zcGhpID0gdDwtMSA/IC0xIDogdD4xID8gMSA6IHQsXG4gICAgICAgICAgICBwaGkgPSBhY29zKGNvc3BoaSksXG4gICAgICAgICAgICBjcnRyID0gY3J0KHIpLFxuICAgICAgICAgICAgdDEgPSAyKmNydHI7XG4gICAgICAgIHgxID0gdDEgKiBjb3MocGhpLzMpIC0gYS8zO1xuICAgICAgICB4MiA9IHQxICogY29zKChwaGkrdGF1KS8zKSAtIGEvMztcbiAgICAgICAgeDMgPSB0MSAqIGNvcygocGhpKzIqdGF1KS8zKSAtIGEvMztcbiAgICAgICAgcmV0dXJuIFt4MSwgeDIsIHgzXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSBpZihkaXNjcmltaW5hbnQgPT09IDApIHtcbiAgICAgICAgdTEgPSBxMiA8IDAgPyBjcnQoLXEyKSA6IC1jcnQocTIpO1xuICAgICAgICB4MSA9IDIqdTEtYS8zO1xuICAgICAgICB4MiA9IC11MSAtIGEvMztcbiAgICAgICAgcmV0dXJuIFt4MSx4Ml0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2QgPSBzcXJ0KGRpc2NyaW1pbmFudCk7XG4gICAgICAgIHUxID0gY3J0KC1xMitzZCk7XG4gICAgICAgIHYxID0gY3J0KHEyK3NkKTtcbiAgICAgICAgcmV0dXJuIFt1MS12MS1hLzNdLmZpbHRlcihyZWR1Y2UpOztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZHJvb3RzOiBmdW5jdGlvbihwKSB7XG4gICAgICAvLyBxdWFkcmF0aWMgcm9vdHMgYXJlIGVhc3lcbiAgICAgIGlmKHAubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhciBhID0gcFswXSxcbiAgICAgICAgICAgIGIgPSBwWzFdLFxuICAgICAgICAgICAgYyA9IHBbMl0sXG4gICAgICAgICAgICBkID0gYSAtIDIqYiArIGM7XG4gICAgICAgIGlmKGQhPT0wKSB7XG4gICAgICAgICAgdmFyIG0xID0gLXNxcnQoYipiLWEqYyksXG4gICAgICAgICAgICAgIG0yID0gLWErYixcbiAgICAgICAgICAgICAgdjEgPSAtKCBtMSttMikvZCxcbiAgICAgICAgICAgICAgdjIgPSAtKC1tMSttMikvZDtcbiAgICAgICAgICByZXR1cm4gW3YxLCB2Ml07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihiIT09YyAmJiBkPT09MCkge1xuICAgICAgICAgIHJldHVybiBbKDIqYi1jKS8oMiooYi1jKSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gbGluZWFyIHJvb3RzIGFyZSBldmVuIGVhc2llclxuICAgICAgaWYocC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLCBiID0gcFsxXTtcbiAgICAgICAgaWYoYSE9PWIpIHtcbiAgICAgICAgICByZXR1cm4gW2EvKGEtYildO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5mbGVjdGlvbnM6IGZ1bmN0aW9uKHBvaW50cykge1xuICAgICAgaWYgKHBvaW50cy5sZW5ndGg8NCkgcmV0dXJuIFtdO1xuXG4gICAgICAvLyBGSVhNRTogVE9ETzogYWRkIGluIGluZmxlY3Rpb24gYWJzdHJhY3Rpb24gZm9yIHF1YXJ0aWMrIGN1cnZlcz9cblxuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIHsgcDE6IHBvaW50c1swXSwgcDI6IHBvaW50cy5zbGljZSgtMSlbMF0gfSksXG4gICAgICAgICAgYSA9IHBbMl0ueCAqIHBbMV0ueSxcbiAgICAgICAgICBiID0gcFszXS54ICogcFsxXS55LFxuICAgICAgICAgIGMgPSBwWzFdLnggKiBwWzJdLnksXG4gICAgICAgICAgZCA9IHBbM10ueCAqIHBbMl0ueSxcbiAgICAgICAgICB2MSA9IDE4ICogKC0zKmEgKyAyKmIgKyAzKmMgLSBkKSxcbiAgICAgICAgICB2MiA9IDE4ICogKDMqYSAtIGIgLSAzKmMpLFxuICAgICAgICAgIHYzID0gMTggKiAoYyAtIGEpO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseSh2MSwwKSkgcmV0dXJuIFtdO1xuXG4gICAgICB2YXIgdHJtID0gdjIqdjIgLSA0KnYxKnYzLFxuICAgICAgICAgIHNxID0gTWF0aC5zcXJ0KHRybSksXG4gICAgICAgICAgZCA9IDIgKiB2MTtcblxuICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkoZCwwKSkgcmV0dXJuIFtdO1xuXG4gICAgICByZXR1cm4gWyhzcS12MikvZCwgLSh2MitzcSkvZF0uZmlsdGVyKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuICgwIDw9IHIgJiYgciA8PSAxKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiYm94b3ZlcmxhcDogZnVuY3Rpb24oYjEsYjIpIHtcbiAgICAgIHZhciBkaW1zPVsneCcsJ3knXSxsZW49ZGltcy5sZW5ndGgsaSxkaW0sbCx0LGRcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgZGltID0gZGltc1tpXTtcbiAgICAgICAgbCA9IGIxW2RpbV0ubWlkO1xuICAgICAgICB0ID0gYjJbZGltXS5taWQ7XG4gICAgICAgIGQgPSAoYjFbZGltXS5zaXplICsgYjJbZGltXS5zaXplKS8yO1xuICAgICAgICBpZihhYnMobC10KSA+PSBkKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZXhwYW5kYm94OiBmdW5jdGlvbihiYm94LCBfYmJveCkge1xuICAgICAgaWYoX2Jib3gueC5taW4gPCBiYm94LngubWluKSB7IGJib3gueC5taW4gPSBfYmJveC54Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueS5taW4gPCBiYm94LnkubWluKSB7IGJib3gueS5taW4gPSBfYmJveC55Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueiAmJiBfYmJveC56Lm1pbiA8IGJib3guei5taW4pIHsgYmJveC56Lm1pbiA9IF9iYm94LnoubWluOyB9XG4gICAgICBpZihfYmJveC54Lm1heCA+IGJib3gueC5tYXgpIHsgYmJveC54Lm1heCA9IF9iYm94LngubWF4OyB9XG4gICAgICBpZihfYmJveC55Lm1heCA+IGJib3gueS5tYXgpIHsgYmJveC55Lm1heCA9IF9iYm94LnkubWF4OyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWF4ID4gYmJveC56Lm1heCkgeyBiYm94LnoubWF4ID0gX2Jib3guei5tYXg7IH1cbiAgICAgIGJib3gueC5taWQgPSAoYmJveC54Lm1pbiArIGJib3gueC5tYXgpLzI7XG4gICAgICBiYm94LnkubWlkID0gKGJib3gueS5taW4gKyBiYm94LnkubWF4KS8yO1xuICAgICAgaWYoYmJveC56KSB7IGJib3guei5taWQgPSAoYmJveC56Lm1pbiArIGJib3guei5tYXgpLzI7IH1cbiAgICAgIGJib3gueC5zaXplID0gYmJveC54Lm1heCAtIGJib3gueC5taW47XG4gICAgICBiYm94Lnkuc2l6ZSA9IGJib3gueS5tYXggLSBiYm94LnkubWluO1xuICAgICAgaWYoYmJveC56KSB7IGJib3guei5zaXplID0gYmJveC56Lm1heCAtIGJib3guei5taW47IH1cbiAgICB9LFxuXG4gICAgcGFpcml0ZXJhdGlvbjogZnVuY3Rpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIGMxYiA9IGMxLmJib3goKSxcbiAgICAgICAgICBjMmIgPSBjMi5iYm94KCksXG4gICAgICAgICAgciA9IDEwMDAwMCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCB8fCAwLjU7XG4gICAgICBpZihjMWIueC5zaXplICsgYzFiLnkuc2l6ZSA8IHRocmVzaG9sZCAmJiBjMmIueC5zaXplICsgYzJiLnkuc2l6ZSA8IHRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm4gWyAoKHIgKiAoYzEuX3QxK2MxLl90MikvMil8MCkvciArIFwiL1wiICsgKChyICogKGMyLl90MStjMi5fdDIpLzIpfDApL3IgXTtcbiAgICAgIH1cbiAgICAgIHZhciBjYzEgPSBjMS5zcGxpdCgwLjUpLFxuICAgICAgICAgIGNjMiA9IGMyLnNwbGl0KDAuNSksXG4gICAgICAgICAgcGFpcnMgPSBbXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIubGVmdCB9LFxuICAgICAgICAgICAge2xlZnQ6IGNjMS5sZWZ0LCByaWdodDogY2MyLnJpZ2h0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLnJpZ2h0LCByaWdodDogY2MyLnJpZ2h0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLnJpZ2h0LCByaWdodDogY2MyLmxlZnQgfV07XG4gICAgICBwYWlycyA9IHBhaXJzLmZpbHRlcihmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChwYWlyLmxlZnQuYmJveCgpLHBhaXIucmlnaHQuYmJveCgpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIGlmKHBhaXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxuICAgICAgICAgIHV0aWxzLnBhaXJpdGVyYXRpb24ocGFpci5sZWZ0LCBwYWlyLnJpZ2h0LCB0aHJlc2hvbGQpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHYsaSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5pbmRleE9mKHYpID09PSBpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuXG4gICAgZ2V0Y2NlbnRlcjogZnVuY3Rpb24ocDEscDIscDMpIHtcbiAgICAgIHZhciBkeDEgPSAocDIueCAtIHAxLngpLFxuICAgICAgICAgIGR5MSA9IChwMi55IC0gcDEueSksXG4gICAgICAgICAgZHgyID0gKHAzLnggLSBwMi54KSxcbiAgICAgICAgICBkeTIgPSAocDMueSAtIHAyLnkpO1xuICAgICAgdmFyIGR4MXAgPSBkeDEgKiBjb3MocXVhcnQpIC0gZHkxICogc2luKHF1YXJ0KSxcbiAgICAgICAgICBkeTFwID0gZHgxICogc2luKHF1YXJ0KSArIGR5MSAqIGNvcyhxdWFydCksXG4gICAgICAgICAgZHgycCA9IGR4MiAqIGNvcyhxdWFydCkgLSBkeTIgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MnAgPSBkeDIgKiBzaW4ocXVhcnQpICsgZHkyICogY29zKHF1YXJ0KTtcbiAgICAgIC8vIGNob3JkIG1pZHBvaW50c1xuICAgICAgdmFyIG14MSA9IChwMS54ICsgcDIueCkvMixcbiAgICAgICAgICBteTEgPSAocDEueSArIHAyLnkpLzIsXG4gICAgICAgICAgbXgyID0gKHAyLnggKyBwMy54KS8yLFxuICAgICAgICAgIG15MiA9IChwMi55ICsgcDMueSkvMjtcbiAgICAgIC8vIG1pZHBvaW50IG9mZnNldHNcbiAgICAgIHZhciBteDFuID0gbXgxICsgZHgxcCxcbiAgICAgICAgICBteTFuID0gbXkxICsgZHkxcCxcbiAgICAgICAgICBteDJuID0gbXgyICsgZHgycCxcbiAgICAgICAgICBteTJuID0gbXkyICsgZHkycDtcbiAgICAgIC8vIGludGVyc2VjdGlvbiBvZiB0aGVzZSBsaW5lczpcbiAgICAgIHZhciBhcmMgPSB1dGlscy5sbGk4KG14MSxteTEsbXgxbixteTFuLCBteDIsbXkyLG14Mm4sbXkybiksXG4gICAgICAgICAgciA9IHV0aWxzLmRpc3QoYXJjLHAxKSxcbiAgICAgICAgICAvLyBhcmMgc3RhcnQvZW5kIHZhbHVlcywgb3ZlciBtaWQgcG9pbnQ6XG4gICAgICAgICAgcyA9IGF0YW4yKHAxLnkgLSBhcmMueSwgcDEueCAtIGFyYy54KSxcbiAgICAgICAgICBtID0gYXRhbjIocDIueSAtIGFyYy55LCBwMi54IC0gYXJjLngpLFxuICAgICAgICAgIGUgPSBhdGFuMihwMy55IC0gYXJjLnksIHAzLnggLSBhcmMueCksXG4gICAgICAgICAgXztcbiAgICAgIC8vIGRldGVybWluZSBhcmMgZGlyZWN0aW9uIChjdy9jY3cgY29ycmVjdGlvbilcbiAgICAgIGlmIChzPGUpIHtcbiAgICAgICAgLy8gaWYgczxtPGUsIGFyYyhzLCBlKVxuICAgICAgICAvLyBpZiBtPHM8ZSwgYXJjKGUsIHMgKyB0YXUpXG4gICAgICAgIC8vIGlmIHM8ZTxtLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgaWYgKHM+bSB8fCBtPmUpIHsgcyArPSB0YXU7IH1cbiAgICAgICAgaWYgKHM+ZSkgeyBfPWU7IGU9czsgcz1fOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBlPG08cywgYXJjKGUsIHMpXG4gICAgICAgIC8vIGlmIG08ZTxzLCBhcmMocywgZSArIHRhdSlcbiAgICAgICAgLy8gaWYgZTxzPG0sIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICBpZiAoZTxtICYmIG08cykgeyBfPWU7IGU9czsgcz1fOyB9IGVsc2UgeyBlICs9IHRhdTsgfVxuICAgICAgfVxuICAgICAgLy8gYXNzaWduIGFuZCBkb25lLlxuICAgICAgYXJjLnMgPSBzO1xuICAgICAgYXJjLmUgPSBlO1xuICAgICAgYXJjLnIgPSByO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB1dGlscztcbn0oKSk7XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsInZhciBjbG9uZSA9IChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDbG9uZXMgKGNvcGllcykgYW4gT2JqZWN0IHVzaW5nIGRlZXAgY29weWluZy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHN1cHBvcnRzIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSBhcmUgY2VydGFpblxuICogdGhlcmUgYXJlIG5vIGNpcmN1bGFyIHJlZmVyZW5jZXMgaW4geW91ciBvYmplY3QsIHlvdSBjYW4gc2F2ZSBzb21lIENQVSB0aW1lXG4gKiBieSBjYWxsaW5nIGNsb25lKG9iaiwgZmFsc2UpLlxuICpcbiAqIENhdXRpb246IGlmIGBjaXJjdWxhcmAgaXMgZmFsc2UgYW5kIGBwYXJlbnRgIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXMsXG4gKiB5b3VyIHByb2dyYW0gbWF5IGVudGVyIGFuIGluZmluaXRlIGxvb3AgYW5kIGNyYXNoLlxuICpcbiAqIEBwYXJhbSBgcGFyZW50YCAtIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkXG4gKiBAcGFyYW0gYGNpcmN1bGFyYCAtIHNldCB0byB0cnVlIGlmIHRoZSBvYmplY3QgdG8gYmUgY2xvbmVkIG1heSBjb250YWluXG4gKiAgICBjaXJjdWxhciByZWZlcmVuY2VzLiAob3B0aW9uYWwgLSB0cnVlIGJ5IGRlZmF1bHQpXG4gKiBAcGFyYW0gYGRlcHRoYCAtIHNldCB0byBhIG51bWJlciBpZiB0aGUgb2JqZWN0IGlzIG9ubHkgdG8gYmUgY2xvbmVkIHRvXG4gKiAgICBhIHBhcnRpY3VsYXIgZGVwdGguIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIEluZmluaXR5KVxuICogQHBhcmFtIGBwcm90b3R5cGVgIC0gc2V0cyB0aGUgcHJvdG90eXBlIHRvIGJlIHVzZWQgd2hlbiBjbG9uaW5nIGFuIG9iamVjdC5cbiAqICAgIChvcHRpb25hbCAtIGRlZmF1bHRzIHRvIHBhcmVudCBwcm90b3R5cGUpLlxuKi9cbmZ1bmN0aW9uIGNsb25lKHBhcmVudCwgY2lyY3VsYXIsIGRlcHRoLCBwcm90b3R5cGUpIHtcbiAgdmFyIGZpbHRlcjtcbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PT0gJ29iamVjdCcpIHtcbiAgICBkZXB0aCA9IGNpcmN1bGFyLmRlcHRoO1xuICAgIHByb3RvdHlwZSA9IGNpcmN1bGFyLnByb3RvdHlwZTtcbiAgICBmaWx0ZXIgPSBjaXJjdWxhci5maWx0ZXI7XG4gICAgY2lyY3VsYXIgPSBjaXJjdWxhci5jaXJjdWxhclxuICB9XG4gIC8vIG1haW50YWluIHR3byBhcnJheXMgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMsIHdoZXJlIGNvcnJlc3BvbmRpbmcgcGFyZW50c1xuICAvLyBhbmQgY2hpbGRyZW4gaGF2ZSB0aGUgc2FtZSBpbmRleFxuICB2YXIgYWxsUGFyZW50cyA9IFtdO1xuICB2YXIgYWxsQ2hpbGRyZW4gPSBbXTtcblxuICB2YXIgdXNlQnVmZmVyID0gdHlwZW9mIEJ1ZmZlciAhPSAndW5kZWZpbmVkJztcblxuICBpZiAodHlwZW9mIGNpcmN1bGFyID09ICd1bmRlZmluZWQnKVxuICAgIGNpcmN1bGFyID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGRlcHRoID09ICd1bmRlZmluZWQnKVxuICAgIGRlcHRoID0gSW5maW5pdHk7XG5cbiAgLy8gcmVjdXJzZSB0aGlzIGZ1bmN0aW9uIHNvIHdlIGRvbid0IHJlc2V0IGFsbFBhcmVudHMgYW5kIGFsbENoaWxkcmVuXG4gIGZ1bmN0aW9uIF9jbG9uZShwYXJlbnQsIGRlcHRoKSB7XG4gICAgLy8gY2xvbmluZyBudWxsIGFsd2F5cyByZXR1cm5zIG51bGxcbiAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoZGVwdGggPT0gMClcbiAgICAgIHJldHVybiBwYXJlbnQ7XG5cbiAgICB2YXIgY2hpbGQ7XG4gICAgdmFyIHByb3RvO1xuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIH1cblxuICAgIGlmIChjbG9uZS5fX2lzQXJyYXkocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBbXTtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNSZWdFeHAocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgUmVnRXhwKHBhcmVudC5zb3VyY2UsIF9fZ2V0UmVnRXhwRmxhZ3MocGFyZW50KSk7XG4gICAgICBpZiAocGFyZW50Lmxhc3RJbmRleCkgY2hpbGQubGFzdEluZGV4ID0gcGFyZW50Lmxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKGNsb25lLl9faXNEYXRlKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IERhdGUocGFyZW50LmdldFRpbWUoKSk7XG4gICAgfSBlbHNlIGlmICh1c2VCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IEJ1ZmZlcihwYXJlbnQubGVuZ3RoKTtcbiAgICAgIHBhcmVudC5jb3B5KGNoaWxkKTtcbiAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwcm90b3R5cGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50KTtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG90eXBlKTtcbiAgICAgICAgcHJvdG8gPSBwcm90b3R5cGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNpcmN1bGFyKSB7XG4gICAgICB2YXIgaW5kZXggPSBhbGxQYXJlbnRzLmluZGV4T2YocGFyZW50KTtcblxuICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgIHJldHVybiBhbGxDaGlsZHJlbltpbmRleF07XG4gICAgICB9XG4gICAgICBhbGxQYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgIGFsbENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgaW4gcGFyZW50KSB7XG4gICAgICB2YXIgYXR0cnM7XG4gICAgICBpZiAocHJvdG8pIHtcbiAgICAgICAgYXR0cnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF0dHJzICYmIGF0dHJzLnNldCA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY2hpbGRbaV0gPSBfY2xvbmUocGFyZW50W2ldLCBkZXB0aCAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfVxuXG4gIHJldHVybiBfY2xvbmUocGFyZW50LCBkZXB0aCk7XG59XG5cbi8qKlxuICogU2ltcGxlIGZsYXQgY2xvbmUgdXNpbmcgcHJvdG90eXBlLCBhY2NlcHRzIG9ubHkgb2JqZWN0cywgdXNlZnVsbCBmb3IgcHJvcGVydHlcbiAqIG92ZXJyaWRlIG9uIEZMQVQgY29uZmlndXJhdGlvbiBvYmplY3QgKG5vIG5lc3RlZCBwcm9wcykuXG4gKlxuICogVVNFIFdJVEggQ0FVVElPTiEgVGhpcyBtYXkgbm90IGJlaGF2ZSBhcyB5b3Ugd2lzaCBpZiB5b3UgZG8gbm90IGtub3cgaG93IHRoaXNcbiAqIHdvcmtzLlxuICovXG5jbG9uZS5jbG9uZVByb3RvdHlwZSA9IGZ1bmN0aW9uIGNsb25lUHJvdG90eXBlKHBhcmVudCkge1xuICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBjID0gZnVuY3Rpb24gKCkge307XG4gIGMucHJvdG90eXBlID0gcGFyZW50O1xuICByZXR1cm4gbmV3IGMoKTtcbn07XG5cbi8vIHByaXZhdGUgdXRpbGl0eSBmdW5jdGlvbnNcblxuZnVuY3Rpb24gX19vYmpUb1N0cihvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59O1xuY2xvbmUuX19vYmpUb1N0ciA9IF9fb2JqVG9TdHI7XG5cbmZ1bmN0aW9uIF9faXNEYXRlKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBEYXRlXSc7XG59O1xuY2xvbmUuX19pc0RhdGUgPSBfX2lzRGF0ZTtcblxuZnVuY3Rpb24gX19pc0FycmF5KG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbmNsb25lLl9faXNBcnJheSA9IF9faXNBcnJheTtcblxuZnVuY3Rpb24gX19pc1JlZ0V4cChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59O1xuY2xvbmUuX19pc1JlZ0V4cCA9IF9faXNSZWdFeHA7XG5cbmZ1bmN0aW9uIF9fZ2V0UmVnRXhwRmxhZ3MocmUpIHtcbiAgdmFyIGZsYWdzID0gJyc7XG4gIGlmIChyZS5nbG9iYWwpIGZsYWdzICs9ICdnJztcbiAgaWYgKHJlLmlnbm9yZUNhc2UpIGZsYWdzICs9ICdpJztcbiAgaWYgKHJlLm11bHRpbGluZSkgZmxhZ3MgKz0gJ20nO1xuICByZXR1cm4gZmxhZ3M7XG59O1xuY2xvbmUuX19nZXRSZWdFeHBGbGFncyA9IF9fZ2V0UmVnRXhwRmxhZ3M7XG5cbnJldHVybiBjbG9uZTtcbn0pKCk7XG5cbmlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNsb25lO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoODQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIGdldFJnYmE6IGdldFJnYmEsXG4gICBnZXRIc2xhOiBnZXRIc2xhLFxuICAgZ2V0UmdiOiBnZXRSZ2IsXG4gICBnZXRIc2w6IGdldEhzbCxcbiAgIGdldEh3YjogZ2V0SHdiLFxuICAgZ2V0QWxwaGE6IGdldEFscGhhLFxuXG4gICBoZXhTdHJpbmc6IGhleFN0cmluZyxcbiAgIHJnYlN0cmluZzogcmdiU3RyaW5nLFxuICAgcmdiYVN0cmluZzogcmdiYVN0cmluZyxcbiAgIHBlcmNlbnRTdHJpbmc6IHBlcmNlbnRTdHJpbmcsXG4gICBwZXJjZW50YVN0cmluZzogcGVyY2VudGFTdHJpbmcsXG4gICBoc2xTdHJpbmc6IGhzbFN0cmluZyxcbiAgIGhzbGFTdHJpbmc6IGhzbGFTdHJpbmcsXG4gICBod2JTdHJpbmc6IGh3YlN0cmluZyxcbiAgIGtleXdvcmQ6IGtleXdvcmRcbn1cblxuZnVuY3Rpb24gZ2V0UmdiYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgYWJiciA9ICAvXiMoW2EtZkEtRjAtOV17M30pJC8sXG4gICAgICAgaGV4ID0gIC9eIyhbYS1mQS1GMC05XXs2fSkkLyxcbiAgICAgICByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAga2V5d29yZCA9IC8oXFxEKykvO1xuXG4gICB2YXIgcmdiID0gWzAsIDAsIDBdLFxuICAgICAgIGEgPSAxLFxuICAgICAgIG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdKTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcbiAgICAgIGlmIChtYXRjaFsxXSA9PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG4gICAgICByZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcbiAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICB9XG5cbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZ2JbaV0gPSBzY2FsZShyZ2JbaV0sIDAsIDI1NSk7XG4gICB9XG4gICBpZiAoIWEgJiYgYSAhPSAwKSB7XG4gICAgICBhID0gMTtcbiAgIH1cbiAgIGVsc2Uge1xuICAgICAgYSA9IHNjYWxlKGEsIDAsIDEpO1xuICAgfVxuICAgcmdiWzNdID0gYTtcbiAgIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGdldEhzbGEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHMgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBsID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHMsIGwsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRId2Ioc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcbiAgIGlmIChtYXRjaCkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgdyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGIgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgdywgYiwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldFJnYihzdHJpbmcpIHtcbiAgIHZhciByZ2JhID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgcmV0dXJuIHJnYmEgJiYgcmdiYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsKHN0cmluZykge1xuICB2YXIgaHNsYSA9IGdldEhzbGEoc3RyaW5nKTtcbiAgcmV0dXJuIGhzbGEgJiYgaHNsYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxwaGEoc3RyaW5nKSB7XG4gICB2YXIgdmFscyA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIGlmICh2YWxzKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRIc2xhKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEh3YihzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbn1cblxuLy8gZ2VuZXJhdG9yc1xuZnVuY3Rpb24gaGV4U3RyaW5nKHJnYikge1xuICAgcmV0dXJuIFwiI1wiICsgaGV4RG91YmxlKHJnYlswXSkgKyBoZXhEb3VibGUocmdiWzFdKVxuICAgICAgICAgICAgICArIGhleERvdWJsZShyZ2JbMl0pO1xufVxuXG5mdW5jdGlvbiByZ2JTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2IoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl0gKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKHJnYmFbM10gIT09IHVuZGVmaW5lZCA/IHJnYmFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl1cbiAgICAgICAgICAgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50U3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcblxuICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUsIFwiICsgKGFscGhhIHx8IHJnYmFbM10gfHwgMSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gaHNsU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChoc2xhWzNdICYmIGhzbGFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGhzbGFbM10gIT09IHVuZGVmaW5lZCA/IGhzbGFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlLCBcIlxuICAgICAgICAgICArIGFscGhhICsgXCIpXCI7XG59XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5mdW5jdGlvbiBod2JTdHJpbmcoaHdiLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGh3YlszXSAhPT0gdW5kZWZpbmVkID8gaHdiWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJod2IoXCIgKyBod2JbMF0gKyBcIiwgXCIgKyBod2JbMV0gKyBcIiUsIFwiICsgaHdiWzJdICsgXCIlXCJcbiAgICAgICAgICAgKyAoYWxwaGEgIT09IHVuZGVmaW5lZCAmJiBhbHBoYSAhPT0gMSA/IFwiLCBcIiArIGFscGhhIDogXCJcIikgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24ga2V5d29yZChyZ2IpIHtcbiAgcmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBzY2FsZShudW0sIG1pbiwgbWF4KSB7XG4gICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG4gIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gXCIwXCIgKyBzdHIgOiBzdHI7XG59XG5cblxuLy9jcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuICAgcmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY2xvbmUgPSByZXF1aXJlKDgzKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSg4OSk7XG52YXIgc3RyaW5nID0gcmVxdWlyZSg4NSk7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMgPSB7XG5cdFx0cmdiOiBbMCwgMCwgMF0sXG5cdFx0aHNsOiBbMCwgMCwgMF0sXG5cdFx0aHN2OiBbMCwgMCwgMF0sXG5cdFx0aHdiOiBbMCwgMCwgMF0sXG5cdFx0Y215azogWzAsIDAsIDAsIDBdLFxuXHRcdGFscGhhOiAxXG5cdH07XG5cblx0Ly8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuXHR2YXIgdmFscztcblx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG5cdFx0aWYgKHZhbHMpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyArIG9iaiArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdHZhbHMgPSBvYmo7XG5cdFx0aWYgKHZhbHMuciAhPT0gdW5kZWZpbmVkIHx8IHZhbHMucmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMubCAhPT0gdW5kZWZpbmVkIHx8IHZhbHMubGlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudiAhPT0gdW5kZWZpbmVkIHx8IHZhbHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzdicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy53ICE9PSB1bmRlZmluZWQgfHwgdmFscy53aGl0ZW5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5jICE9PSB1bmRlZmluZWQgfHwgdmFscy5jeWFuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdjbXlrJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0cmdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ3JnYicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc2wnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc3Y6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHN2JywgYXJndW1lbnRzKTtcblx0fSxcblx0aHdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2h3YicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGNteWs6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnY215aycsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0cmdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuXHR9LFxuXHRoc2xBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG5cdH0sXG5cdGhzdkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcblx0fSxcblx0aHdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuXHR9LFxuXHRjbXlrQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuY215aztcblx0fSxcblx0cmdiYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHRyZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0aHNsYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcblx0XHRyZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdmFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZWQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAwLCB2YWwpO1xuXHR9LFxuXHRncmVlbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAyLCB2YWwpO1xuXHR9LFxuXHRodWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR2YWwgJT0gMzYwO1xuXHRcdFx0dmFsID0gdmFsIDwgMCA/IDM2MCArIHZhbCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMCwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDEsIHZhbCk7XG5cdH0sXG5cdGxpZ2h0bmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDIsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb252OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMSwgdmFsKTtcblx0fSxcblx0d2hpdGVuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMSwgdmFsKTtcblx0fSxcblx0YmxhY2tuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMiwgdmFsKTtcblx0fSxcblx0dmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAyLCB2YWwpO1xuXHR9LFxuXHRjeWFuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDAsIHZhbCk7XG5cdH0sXG5cdG1hZ2VudGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMSwgdmFsKTtcblx0fSxcblx0eWVsbG93OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDIsIHZhbCk7XG5cdH0sXG5cdGJsYWNrOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDMsIHZhbCk7XG5cdH0sXG5cblx0aGV4U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcblx0fSxcblx0cmdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHJnYmFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRod2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0a2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGRhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0bGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgcmdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdyZXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIFt2YWwsIHZhbCwgdmFsXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xlYXJlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0ICovXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdHZhciBjb2xvcjEgPSB0aGlzO1xuXHRcdHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuXHRcdFx0KVxuXHRcdFx0LmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmdiKCk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY29sID0gbmV3IENvbG9yKCk7XG5cdFx0Y29sLnZhbHVlcyA9IGNsb25lKHRoaXMudmFsdWVzKTtcblx0XHRyZXR1cm4gY29sO1xuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cdHZhciB2YWxzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcblx0fVxuXG5cdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdHZhbHMuYSA9IHRoaXMudmFsdWVzLmFscGhhO1xuXHR9XG5cblx0Ly8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cblx0cmV0dXJuIHZhbHM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlLCB2YWxzKSB7XG5cdHZhciBzcGFjZXMgPSB7XG5cdFx0cmdiOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG5cdFx0aHNsOiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcyddLFxuXHRcdGhzdjogWydodWUnLCAnc2F0dXJhdGlvbicsICd2YWx1ZSddLFxuXHRcdGh3YjogWydodWUnLCAnd2hpdGVuZXNzJywgJ2JsYWNrbmVzcyddLFxuXHRcdGNteWs6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddXG5cdH07XG5cblx0dmFyIG1heGVzID0ge1xuXHRcdHJnYjogWzI1NSwgMjU1LCAyNTVdLFxuXHRcdGhzbDogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGhzdjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGh3YjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGNteWs6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG5cdH07XG5cblx0dmFyIGk7XG5cdHZhciBhbHBoYSA9IDE7XG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdGFscGhhID0gdmFscztcblx0fSBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuXHRcdC8vIFsxMCwgMTAsIDEwXVxuXHRcdHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcblx0XHRhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuXHRcdHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hbHBoYTtcblx0fVxuXG5cdHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhID09PSB1bmRlZmluZWQgPyB0aGlzLnZhbHVlcy5hbHBoYSA6IGFscGhhKSkpO1xuXG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBjYXBwZWQ7XG5cblx0Ly8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG5cdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHR9XG5cblx0Ly8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuXHRmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcblx0XHRpZiAoc25hbWUgIT09IHNwYWNlKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKTtcblx0XHR9XG5cblx0XHQvLyBjYXAgdmFsdWVzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlLCBhcmdzKSB7XG5cdHZhciB2YWxzID0gYXJnc1swXTtcblxuXHRpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmdiKClcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuXHR9XG5cblx0Ly8gY29sb3IucmdiKDEwLCAxMCwgMTApXG5cdGlmICh0eXBlb2YgdmFscyA9PT0gJ251bWJlcicpIHtcblx0XHR2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cdH1cblxuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbiAoc3BhY2UsIGluZGV4LCB2YWwpIHtcblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmVkKClcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcblx0fSBlbHNlIGlmICh2YWwgPT09IHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0pIHtcblx0XHQvLyBjb2xvci5yZWQoY29sb3IucmVkKCkpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBjb2xvci5yZWQoMTAwKVxuXHR0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSg4OCk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogM30sXG5cdGhzbDoge2NoYW5uZWxzOiAzfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDN9LFxuXHRod2I6IHtjaGFubmVsczogM30sXG5cdGNteWs6IHtjaGFubmVsczogNH0sXG5cdHh5ejoge2NoYW5uZWxzOiAzfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDN9LFxuXHRsY2g6IHtjaGFubmVsczogM30sXG5cdGhleDoge2NoYW5uZWxzOiAxfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDF9LFxuXHRoY2c6IHtjaGFubmVsczogM30sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDN9XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBwcm9wZXJ0eVxuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgdjtcblxuXHRpZiAobWF4ID09PSAwKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IChkZWx0YSAvIG1heCAqIDEwMDApIC8gMTA7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn0vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChtYXRjaFswXSwgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTVdLFxuXHRhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1XSxcblx0YXF1YTogWzAsIDI1NSwgMjU1XSxcblx0YXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTJdLFxuXHRhenVyZTogWzI0MCwgMjU1LCAyNTVdLFxuXHRiZWlnZTogWzI0NSwgMjQ1LCAyMjBdLFxuXHRiaXNxdWU6IFsyNTUsIDIyOCwgMTk2XSxcblx0YmxhY2s6IFswLCAwLCAwXSxcblx0YmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1XSxcblx0Ymx1ZTogWzAsIDAsIDI1NV0sXG5cdGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjZdLFxuXHRicm93bjogWzE2NSwgNDIsIDQyXSxcblx0YnVybHl3b29kOiBbMjIyLCAxODQsIDEzNV0sXG5cdGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MF0sXG5cdGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMF0sXG5cdGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMF0sXG5cdGNvcmFsOiBbMjU1LCAxMjcsIDgwXSxcblx0Y29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3XSxcblx0Y29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwXSxcblx0Y3JpbXNvbjogWzIyMCwgMjAsIDYwXSxcblx0Y3lhbjogWzAsIDI1NSwgMjU1XSxcblx0ZGFya2JsdWU6IFswLCAwLCAxMzldLFxuXHRkYXJrY3lhbjogWzAsIDEzOSwgMTM5XSxcblx0ZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMV0sXG5cdGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtncmVlbjogWzAsIDEwMCwgMF0sXG5cdGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDddLFxuXHRkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5XSxcblx0ZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0N10sXG5cdGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMF0sXG5cdGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDRdLFxuXHRkYXJrcmVkOiBbMTM5LCAwLCAwXSxcblx0ZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjJdLFxuXHRkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzXSxcblx0ZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5XSxcblx0ZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOV0sXG5cdGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMV0sXG5cdGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3XSxcblx0ZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NV0sXG5cdGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZGltZ3JleTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1XSxcblx0ZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzRdLFxuXHRmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDBdLFxuXHRmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0XSxcblx0ZnVjaHNpYTogWzI1NSwgMCwgMjU1XSxcblx0Z2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMF0sXG5cdGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1XSxcblx0Z29sZDogWzI1NSwgMjE1LCAwXSxcblx0Z29sZGVucm9kOiBbMjE4LCAxNjUsIDMyXSxcblx0Z3JheTogWzEyOCwgMTI4LCAxMjhdLFxuXHRncmVlbjogWzAsIDEyOCwgMF0sXG5cdGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3XSxcblx0Z3JleTogWzEyOCwgMTI4LCAxMjhdLFxuXHRob25leWRldzogWzI0MCwgMjU1LCAyNDBdLFxuXHRob3RwaW5rOiBbMjU1LCAxMDUsIDE4MF0sXG5cdGluZGlhbnJlZDogWzIwNSwgOTIsIDkyXSxcblx0aW5kaWdvOiBbNzUsIDAsIDEzMF0sXG5cdGl2b3J5OiBbMjU1LCAyNTUsIDI0MF0sXG5cdGtoYWtpOiBbMjQwLCAyMzAsIDE0MF0sXG5cdGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MF0sXG5cdGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1XSxcblx0bGF3bmdyZWVuOiBbMTI0LCAyNTIsIDBdLFxuXHRsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1XSxcblx0bGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMF0sXG5cdGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4XSxcblx0bGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NV0sXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMF0sXG5cdGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NF0sXG5cdGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzXSxcblx0bGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyXSxcblx0bGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MF0sXG5cdGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTBdLFxuXHRsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjJdLFxuXHRsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjRdLFxuXHRsaW1lOiBbMCwgMjU1LCAwXSxcblx0bGltZWdyZWVuOiBbNTAsIDIwNSwgNTBdLFxuXHRsaW5lbjogWzI1MCwgMjQwLCAyMzBdLFxuXHRtYWdlbnRhOiBbMjU1LCAwLCAyNTVdLFxuXHRtYXJvb246IFsxMjgsIDAsIDBdLFxuXHRtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MF0sXG5cdG1lZGl1bWJsdWU6IFswLCAwLCAyMDVdLFxuXHRtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTFdLFxuXHRtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5XSxcblx0bWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTNdLFxuXHRtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4XSxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NF0sXG5cdG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNF0sXG5cdG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzM10sXG5cdG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyXSxcblx0bWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MF0sXG5cdG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjVdLFxuXHRtb2NjYXNpbjogWzI1NSwgMjI4LCAxODFdLFxuXHRuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzNdLFxuXHRuYXZ5OiBbMCwgMCwgMTI4XSxcblx0b2xkbGFjZTogWzI1MywgMjQ1LCAyMzBdLFxuXHRvbGl2ZTogWzEyOCwgMTI4LCAwXSxcblx0b2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1XSxcblx0b3JhbmdlOiBbMjU1LCAxNjUsIDBdLFxuXHRvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwXSxcblx0b3JjaGlkOiBbMjE4LCAxMTIsIDIxNF0sXG5cdHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwXSxcblx0cGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1Ml0sXG5cdHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4XSxcblx0cGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDddLFxuXHRwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxM10sXG5cdHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODVdLFxuXHRwZXJ1OiBbMjA1LCAxMzMsIDYzXSxcblx0cGluazogWzI1NSwgMTkyLCAyMDNdLFxuXHRwbHVtOiBbMjIxLCAxNjAsIDIyMV0sXG5cdHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwXSxcblx0cHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuXHRyZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzXSxcblx0cmVkOiBbMjU1LCAwLCAwXSxcblx0cm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0M10sXG5cdHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNV0sXG5cdHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTldLFxuXHRzYWxtb246IFsyNTAsIDEyOCwgMTE0XSxcblx0c2FuZHlicm93bjogWzI0NCwgMTY0LCA5Nl0sXG5cdHNlYWdyZWVuOiBbNDYsIDEzOSwgODddLFxuXHRzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzhdLFxuXHRzaWVubmE6IFsxNjAsIDgyLCA0NV0sXG5cdHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuXHRza3libHVlOiBbMTM1LCAyMDYsIDIzNV0sXG5cdHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNV0sXG5cdHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c25vdzogWzI1NSwgMjUwLCAyNTBdLFxuXHRzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3XSxcblx0c3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwXSxcblx0dGFuOiBbMjEwLCAxODAsIDE0MF0sXG5cdHRlYWw6IFswLCAxMjgsIDEyOF0sXG5cdHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2XSxcblx0dG9tYXRvOiBbMjU1LCA5OSwgNzFdLFxuXHR0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDhdLFxuXHR2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4XSxcblx0d2hlYXQ6IFsyNDUsIDIyMiwgMTc5XSxcblx0d2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcblx0d2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDVdLFxuXHR5ZWxsb3c6IFsyNTUsIDI1NSwgMF0sXG5cdHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwXVxufTtcblxuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSg4Nyk7XG52YXIgcm91dGUgPSByZXF1aXJlKDkwKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSg4Nyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5saW5lYXIgPSBsaW5lYXI7XG5leHBvcnRzLmVhc2VJblNpbmUgPSBlYXNlSW5TaW5lO1xuZXhwb3J0cy5lYXNlT3V0U2luZSA9IGVhc2VPdXRTaW5lO1xuZXhwb3J0cy5lYXNlSW5PdXRTaW5lID0gZWFzZUluT3V0U2luZTtcbmV4cG9ydHMuZWFzZUluUXVhZCA9IGVhc2VJblF1YWQ7XG5leHBvcnRzLmVhc2VPdXRRdWFkID0gZWFzZU91dFF1YWQ7XG5leHBvcnRzLmVhc2VJbk91dFF1YWQgPSBlYXNlSW5PdXRRdWFkO1xuZXhwb3J0cy5lYXNlSW5DdWJpYyA9IGVhc2VJbkN1YmljO1xuZXhwb3J0cy5lYXNlT3V0Q3ViaWMgPSBlYXNlT3V0Q3ViaWM7XG5leHBvcnRzLmVhc2VJbk91dEN1YmljID0gZWFzZUluT3V0Q3ViaWM7XG5leHBvcnRzLmVhc2VJblF1YXJ0ID0gZWFzZUluUXVhcnQ7XG5leHBvcnRzLmVhc2VPdXRRdWFydCA9IGVhc2VPdXRRdWFydDtcbmV4cG9ydHMuZWFzZUluT3V0UXVhcnQgPSBlYXNlSW5PdXRRdWFydDtcbmV4cG9ydHMuZWFzZUluUXVpbnQgPSBlYXNlSW5RdWludDtcbmV4cG9ydHMuZWFzZU91dFF1aW50ID0gZWFzZU91dFF1aW50O1xuZXhwb3J0cy5lYXNlSW5PdXRRdWludCA9IGVhc2VJbk91dFF1aW50O1xuZXhwb3J0cy5lYXNlSW5FeHBvID0gZWFzZUluRXhwbztcbmV4cG9ydHMuZWFzZU91dEV4cG8gPSBlYXNlT3V0RXhwbztcbmV4cG9ydHMuZWFzZUluT3V0RXhwbyA9IGVhc2VJbk91dEV4cG87XG5leHBvcnRzLmVhc2VJbkNpcmMgPSBlYXNlSW5DaXJjO1xuZXhwb3J0cy5lYXNlT3V0Q2lyYyA9IGVhc2VPdXRDaXJjO1xuZXhwb3J0cy5lYXNlSW5PdXRDaXJjID0gZWFzZUluT3V0Q2lyYztcbmV4cG9ydHMuZWFzZUluQmFjayA9IGVhc2VJbkJhY2s7XG5leHBvcnRzLmVhc2VPdXRCYWNrID0gZWFzZU91dEJhY2s7XG5leHBvcnRzLmVhc2VJbk91dEJhY2sgPSBlYXNlSW5PdXRCYWNrO1xuZXhwb3J0cy5lYXNlSW5FbGFzdGljID0gZWFzZUluRWxhc3RpYztcbmV4cG9ydHMuZWFzZU91dEVsYXN0aWMgPSBlYXNlT3V0RWxhc3RpYztcbmV4cG9ydHMuZWFzZUluT3V0RWxhc3RpYyA9IGVhc2VJbk91dEVsYXN0aWM7XG5leHBvcnRzLmVhc2VPdXRCb3VuY2UgPSBlYXNlT3V0Qm91bmNlO1xuZXhwb3J0cy5lYXNlSW5Cb3VuY2UgPSBlYXNlSW5Cb3VuY2U7XG5leHBvcnRzLmVhc2VJbk91dEJvdW5jZSA9IGVhc2VJbk91dEJvdW5jZTtcbi8vIEJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2dyZS8xNjUwMjk0XG5cbi8vIE5vIGVhc2luZywgbm8gYWNjZWxlcmF0aW9uXG5mdW5jdGlvbiBsaW5lYXIodCkge1xuICAgIHJldHVybiB0O1xufVxuXG4vLyBTbGlnaHQgYWNjZWxlcmF0aW9uIGZyb20gemVybyB0byBmdWxsIHNwZWVkXG5mdW5jdGlvbiBlYXNlSW5TaW5lKHQpIHtcbiAgICByZXR1cm4gLTEgKiBNYXRoLmNvcyh0ICogKE1hdGguUEkgLyAyKSkgKyAxO1xufVxuXG4vLyBTbGlnaHQgZGVjZWxlcmF0aW9uIGF0IHRoZSBlbmRcbmZ1bmN0aW9uIGVhc2VPdXRTaW5lKHQpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4odCAqIChNYXRoLlBJIC8gMikpO1xufVxuXG4vLyBTbGlnaHQgYWNjZWxlcmF0aW9uIGF0IGJlZ2lubmluZyBhbmQgc2xpZ2h0IGRlY2VsZXJhdGlvbiBhdCBlbmRcbmZ1bmN0aW9uIGVhc2VJbk91dFNpbmUodCkge1xuICAgIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpO1xufVxuXG4vLyBBY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlSW5RdWFkKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG59XG5cbi8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlT3V0UXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgKiAoMiAtIHQpO1xufVxuXG4vLyBBY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbmZ1bmN0aW9uIGVhc2VJbk91dFF1YWQodCkge1xuICAgIHJldHVybiB0IDwgMC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHQ7XG59XG5cbi8vIEFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VJbkN1YmljKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0O1xufVxuXG4vLyBEZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZU91dEN1YmljKHQpIHtcbiAgICB2YXIgdDEgPSB0IC0gMTtcbiAgICByZXR1cm4gdDEgKiB0MSAqIHQxICsgMTtcbn1cblxuLy8gQWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxO1xufVxuXG4vLyBBY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlSW5RdWFydCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQ7XG59XG5cbi8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlT3V0UXVhcnQodCkge1xuICAgIHZhciB0MSA9IHQgLSAxO1xuICAgIHJldHVybiAxIC0gdDEgKiB0MSAqIHQxICogdDE7XG59XG5cbi8vIEFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuZnVuY3Rpb24gZWFzZUluT3V0UXVhcnQodCkge1xuICAgIHZhciB0MSA9IHQgLSAxO1xuICAgIHJldHVybiB0IDwgMC41ID8gOCAqIHQgKiB0ICogdCAqIHQgOiAxIC0gOCAqIHQxICogdDEgKiB0MSAqIHQxO1xufVxuXG4vLyBBY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlSW5RdWludCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0O1xufVxuXG4vLyBEZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZU91dFF1aW50KHQpIHtcbiAgICB2YXIgdDEgPSB0IC0gMTtcbiAgICByZXR1cm4gMSArIHQxICogdDEgKiB0MSAqIHQxICogdDE7XG59XG5cbi8vIEFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuZnVuY3Rpb24gZWFzZUluT3V0UXVpbnQodCkge1xuICAgIHZhciB0MSA9IHQgLSAxO1xuICAgIHJldHVybiB0IDwgMC41ID8gMTYgKiB0ICogdCAqIHQgKiB0ICogdCA6IDEgKyAxNiAqIHQxICogdDEgKiB0MSAqIHQxICogdDE7XG59XG5cbi8vIEFjY2VsZXJhdGUgZXhwb25lbnRpYWxseSB1bnRpbCBmaW5pc2hcbmZ1bmN0aW9uIGVhc2VJbkV4cG8odCkge1xuXG4gICAgaWYgKHQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG59XG5cbi8vIEluaXRpYWwgZXhwb25lbnRpYWwgYWNjZWxlcmF0aW9uIHNsb3dpbmcgdG8gc3RvcFxuZnVuY3Rpb24gZWFzZU91dEV4cG8odCkge1xuXG4gICAgaWYgKHQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDE7XG59XG5cbi8vIEV4cG9uZW50aWFsIGFjY2VsZXJhdGlvbiBhbmQgZGVjZWxlcmF0aW9uXG5mdW5jdGlvbiBlYXNlSW5PdXRFeHBvKHQpIHtcblxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0ICogMjtcbiAgICB2YXIgc2NhbGVkVGltZTEgPSBzY2FsZWRUaW1lIC0gMTtcblxuICAgIGlmIChzY2FsZWRUaW1lIDwgMSkge1xuICAgICAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiBzY2FsZWRUaW1lMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogc2NhbGVkVGltZTEpICsgMik7XG59XG5cbi8vIEluY3JlYXNpbmcgdmVsb2NpdHkgdW50aWwgc3RvcFxuZnVuY3Rpb24gZWFzZUluQ2lyYyh0KSB7XG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgLyAxO1xuICAgIHJldHVybiAtMSAqIChNYXRoLnNxcnQoMSAtIHNjYWxlZFRpbWUgKiB0KSAtIDEpO1xufVxuXG4vLyBTdGFydCBmYXN0LCBkZWNyZWFzaW5nIHZlbG9jaXR5IHVudGlsIHN0b3BcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHQpIHtcblxuICAgIHZhciB0MSA9IHQgLSAxO1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIHQxICogdDEpO1xufVxuXG4vLyBGYXN0IGluY3JlYXNlIGluIHZlbG9jaXR5LCBmYXN0IGRlY3JlYXNlIGluIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlSW5PdXRDaXJjKHQpIHtcblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAqIDI7XG4gICAgdmFyIHNjYWxlZFRpbWUxID0gc2NhbGVkVGltZSAtIDI7XG5cbiAgICBpZiAoc2NhbGVkVGltZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSBzY2FsZWRUaW1lICogc2NhbGVkVGltZSkgLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gc2NhbGVkVGltZTEgKiBzY2FsZWRUaW1lMSkgKyAxKTtcbn1cblxuLy8gU2xvdyBtb3ZlbWVudCBiYWNrd2FyZHMgdGhlbiBmYXN0IHNuYXAgdG8gZmluaXNoXG5mdW5jdGlvbiBlYXNlSW5CYWNrKHQpIHtcbiAgICB2YXIgbWFnbml0dWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMS43MDE1OCA6IGFyZ3VtZW50c1sxXTtcblxuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0IC8gMTtcbiAgICByZXR1cm4gc2NhbGVkVGltZSAqIHNjYWxlZFRpbWUgKiAoKG1hZ25pdHVkZSArIDEpICogc2NhbGVkVGltZSAtIG1hZ25pdHVkZSk7XG59XG5cbi8vIEZhc3Qgc25hcCB0byBiYWNrd2FyZHMgcG9pbnQgdGhlbiBzbG93IHJlc29sdmUgdG8gZmluaXNoXG5mdW5jdGlvbiBlYXNlT3V0QmFjayh0KSB7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEuNzAxNTggOiBhcmd1bWVudHNbMV07XG5cblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAvIDEgLSAxO1xuXG4gICAgcmV0dXJuIHNjYWxlZFRpbWUgKiBzY2FsZWRUaW1lICogKChtYWduaXR1ZGUgKyAxKSAqIHNjYWxlZFRpbWUgKyBtYWduaXR1ZGUpICsgMTtcbn1cblxuLy8gU2xvdyBtb3ZlbWVudCBiYWNrd2FyZHMsIGZhc3Qgc25hcCB0byBwYXN0IGZpbmlzaCwgc2xvdyByZXNvbHZlIHRvIGZpbmlzaFxuZnVuY3Rpb24gZWFzZUluT3V0QmFjayh0KSB7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEuNzAxNTggOiBhcmd1bWVudHNbMV07XG5cblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAqIDI7XG4gICAgdmFyIHNjYWxlZFRpbWUyID0gc2NhbGVkVGltZSAtIDI7XG5cbiAgICB2YXIgcyA9IG1hZ25pdHVkZSAqIDEuNTI1O1xuXG4gICAgaWYgKHNjYWxlZFRpbWUgPCAxKSB7XG5cbiAgICAgICAgcmV0dXJuIDAuNSAqIHNjYWxlZFRpbWUgKiBzY2FsZWRUaW1lICogKChzICsgMSkgKiBzY2FsZWRUaW1lIC0gcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDAuNSAqIChzY2FsZWRUaW1lMiAqIHNjYWxlZFRpbWUyICogKChzICsgMSkgKiBzY2FsZWRUaW1lMiArIHMpICsgMik7XG59XG4vLyBCb3VuY2VzIHNsb3dseSB0aGVuIHF1aWNrbHkgdG8gZmluaXNoXG5mdW5jdGlvbiBlYXNlSW5FbGFzdGljKHQpIHtcbiAgICB2YXIgbWFnbml0dWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMC43IDogYXJndW1lbnRzWzFdO1xuXG5cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAvIDE7XG4gICAgdmFyIHNjYWxlZFRpbWUxID0gc2NhbGVkVGltZSAtIDE7XG5cbiAgICB2YXIgcCA9IDEgLSBtYWduaXR1ZGU7XG4gICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxKTtcblxuICAgIHJldHVybiAtKE1hdGgucG93KDIsIDEwICogc2NhbGVkVGltZTEpICogTWF0aC5zaW4oKHNjYWxlZFRpbWUxIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xufVxuXG4vLyBGYXN0IGFjY2VsZXJhdGlvbiwgYm91bmNlcyB0byB6ZXJvXG5mdW5jdGlvbiBlYXNlT3V0RWxhc3RpYyh0KSB7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDAuNyA6IGFyZ3VtZW50c1sxXTtcblxuXG4gICAgdmFyIHAgPSAxIC0gbWFnbml0dWRlO1xuICAgIHZhciBzY2FsZWRUaW1lID0gdCAqIDI7XG5cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMSk7XG4gICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHNjYWxlZFRpbWUpICogTWF0aC5zaW4oKHNjYWxlZFRpbWUgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIDE7XG59XG5cbi8vIFNsb3cgc3RhcnQgYW5kIGVuZCwgdHdvIGJvdW5jZXMgc2FuZHdpY2ggYSBmYXN0IG1vdGlvblxuZnVuY3Rpb24gZWFzZUluT3V0RWxhc3RpYyh0KSB7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDAuNjUgOiBhcmd1bWVudHNbMV07XG5cblxuICAgIHZhciBwID0gMSAtIG1hZ25pdHVkZTtcblxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0ICogMjtcbiAgICB2YXIgc2NhbGVkVGltZTEgPSBzY2FsZWRUaW1lIC0gMTtcblxuICAgIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMSk7XG5cbiAgICBpZiAoc2NhbGVkVGltZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5wb3coMiwgMTAgKiBzY2FsZWRUaW1lMSkgKiBNYXRoLnNpbigoc2NhbGVkVGltZTEgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucG93KDIsIC0xMCAqIHNjYWxlZFRpbWUxKSAqIE1hdGguc2luKChzY2FsZWRUaW1lMSAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICogMC41ICsgMTtcbn1cblxuLy8gQm91bmNlIHRvIGNvbXBsZXRpb25cbmZ1bmN0aW9uIGVhc2VPdXRCb3VuY2UodCkge1xuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0IC8gMTtcblxuICAgIGlmIChzY2FsZWRUaW1lIDwgMSAvIDIuNzUpIHtcblxuICAgICAgICByZXR1cm4gNy41NjI1ICogc2NhbGVkVGltZSAqIHNjYWxlZFRpbWU7XG4gICAgfSBlbHNlIGlmIChzY2FsZWRUaW1lIDwgMiAvIDIuNzUpIHtcblxuICAgICAgICB2YXIgc2NhbGVkVGltZTIgPSBzY2FsZWRUaW1lIC0gMS41IC8gMi43NTtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHNjYWxlZFRpbWUyICogc2NhbGVkVGltZTIgKyAwLjc1O1xuICAgIH0gZWxzZSBpZiAoc2NhbGVkVGltZSA8IDIuNSAvIDIuNzUpIHtcblxuICAgICAgICB2YXIgX3NjYWxlZFRpbWUgPSBzY2FsZWRUaW1lIC0gMi4yNSAvIDIuNzU7XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiBfc2NhbGVkVGltZSAqIF9zY2FsZWRUaW1lICsgMC45Mzc1O1xuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdmFyIF9zY2FsZWRUaW1lMiA9IHNjYWxlZFRpbWUgLSAyLjYyNSAvIDIuNzU7XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiBfc2NhbGVkVGltZTIgKiBfc2NhbGVkVGltZTIgKyAwLjk4NDM3NTtcbiAgICB9XG59XG5cbi8vIEJvdW5jZSBpbmNyZWFzaW5nIGluIHZlbG9jaXR5IHVudGlsIGNvbXBsZXRpb25cbmZ1bmN0aW9uIGVhc2VJbkJvdW5jZSh0KSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0Qm91bmNlKDEgLSB0KTtcbn1cblxuLy8gQm91bmNlIGluIGFuZCBib3VuY2Ugb3V0XG5mdW5jdGlvbiBlYXNlSW5PdXRCb3VuY2UodCkge1xuXG4gICAgaWYgKHQgPCAwLjUpIHtcblxuICAgICAgICByZXR1cm4gZWFzZUluQm91bmNlKHQgKiAyKSAqIDAuNTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzZU91dEJvdW5jZSh0ICogMiAtIDEpICogMC41ICsgMC41O1xufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIvLyByYW5kb21Db2xvciBieSBEYXZpZCBNZXJmaWVsZCB1bmRlciB0aGUgQ0MwIGxpY2Vuc2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZG1lcmZpZWxkL3JhbmRvbUNvbG9yL1xuXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAvLyBTdXBwb3J0IEFNRFxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcblxuICAvLyBTdXBwb3J0IENvbW1vbkpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuXG4gICAgLy8gU3VwcG9ydCBOb2RlSlMgJiBDb21wb25lbnQsIHdoaWNoIGFsbG93IG1vZHVsZS5leHBvcnRzIHRvIGJlIGEgZnVuY3Rpb25cbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IENvbW1vbkpTIDEuMS4xIHNwZWNcbiAgICBleHBvcnRzLnJhbmRvbUNvbG9yID0gcmFuZG9tQ29sb3I7XG5cbiAgLy8gU3VwcG9ydCB2YW5pbGxhIHNjcmlwdCBsb2FkaW5nXG4gIH0gZWxzZSB7XG4gICAgcm9vdC5yYW5kb21Db2xvciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gIC8vIFNlZWQgdG8gZ2V0IHJlcGVhdGFibGUgY29sb3JzXG4gIHZhciBzZWVkID0gbnVsbDtcblxuICAvLyBTaGFyZWQgY29sb3IgZGljdGlvbmFyeVxuICB2YXIgY29sb3JEaWN0aW9uYXJ5ID0ge307XG5cbiAgLy8gUG9wdWxhdGUgdGhlIGNvbG9yIGRpY3Rpb25hcnlcbiAgbG9hZENvbG9yQm91bmRzKCk7XG5cbiAgdmFyIHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzZWVkIGFuZCBlbnN1cmUgaXQncyBhblxuICAgIC8vIGludGVnZXIuIE90aGVyd2lzZSwgcmVzZXQgdGhlIHNlZWQgdmFsdWUuXG4gICAgaWYgKG9wdGlvbnMuc2VlZCAmJiBvcHRpb25zLnNlZWQgPT09IHBhcnNlSW50KG9wdGlvbnMuc2VlZCwgMTApKSB7XG4gICAgICBzZWVkID0gb3B0aW9ucy5zZWVkO1xuXG4gICAgLy8gQSBzdHJpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnNlZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWVkID0gc3RyaW5nVG9JbnRlZ2VyKG9wdGlvbnMuc2VlZCk7XG5cbiAgICAvLyBTb21ldGhpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWQgYnV0IGl0IHdhc24ndCBhbiBpbnRlZ2VyIG9yIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZWVkICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5zZWVkICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc2VlZCB2YWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgb3Igc3RyaW5nJyk7XG5cbiAgICAvLyBObyBzZWVkLCByZXNldCB0aGUgdmFsdWUgb3V0c2lkZS5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIEgsUyxCO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBnZW5lcmF0ZSBtdWx0aXBsZSBjb2xvcnNcbiAgICBpZiAob3B0aW9ucy5jb3VudCAhPT0gbnVsbCAmJiBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgdmFyIHRvdGFsQ29sb3JzID0gb3B0aW9ucy5jb3VudCxcbiAgICAgICAgICBjb2xvcnMgPSBbXTtcblxuICAgICAgb3B0aW9ucy5jb3VudCA9IG51bGw7XG5cbiAgICAgIHdoaWxlICh0b3RhbENvbG9ycyA+IGNvbG9ycy5sZW5ndGgpIHtcblxuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnZW5lcmF0aW5nIG11bHRpcGxlIGNvbG9ycyxcbiAgICAgICAgLy8gaW5jcmVtZW1lbnQgdGhlIHNlZWQuIE90aGVyd2lzZSB3ZSdkIGp1c3RcbiAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIHNhbWUgY29sb3IgZWFjaCB0aW1lLi4uXG4gICAgICAgIGlmIChzZWVkICYmIG9wdGlvbnMuc2VlZCkgb3B0aW9ucy5zZWVkICs9IDE7XG5cbiAgICAgICAgY29sb3JzLnB1c2gocmFuZG9tQ29sb3Iob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmNvdW50ID0gdG90YWxDb2xvcnM7XG5cbiAgICAgIHJldHVybiBjb2xvcnM7XG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgcGljayBhIGh1ZSAoSClcbiAgICBIID0gcGlja0h1ZShvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gdXNlIEggdG8gZGV0ZXJtaW5lIHNhdHVyYXRpb24gKFMpXG4gICAgUyA9IHBpY2tTYXR1cmF0aW9uKEgsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgUyBhbmQgSCB0byBkZXRlcm1pbmUgYnJpZ2h0bmVzcyAoQikuXG4gICAgQiA9IHBpY2tCcmlnaHRuZXNzKEgsIFMsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB3ZSByZXR1cm4gdGhlIEhTQiBjb2xvciBpbiB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICByZXR1cm4gc2V0Rm9ybWF0KFtILFMsQl0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBpY2tIdWUgKG9wdGlvbnMpIHtcblxuICAgIHZhciBodWVSYW5nZSA9IGdldEh1ZVJhbmdlKG9wdGlvbnMuaHVlKSxcbiAgICAgICAgaHVlID0gcmFuZG9tV2l0aGluKGh1ZVJhbmdlKTtcblxuICAgIC8vIEluc3RlYWQgb2Ygc3RvcmluZyByZWQgYXMgdHdvIHNlcGVyYXRlIHJhbmdlcyxcbiAgICAvLyB3ZSBncm91cCB0aGVtLCB1c2luZyBuZWdhdGl2ZSBudW1iZXJzXG4gICAgaWYgKGh1ZSA8IDApIHtodWUgPSAzNjAgKyBodWU7fVxuXG4gICAgcmV0dXJuIGh1ZTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja1NhdHVyYXRpb24gKGh1ZSwgb3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnMubHVtaW5vc2l0eSA9PT0gJ3JhbmRvbScpIHtcbiAgICAgIHJldHVybiByYW5kb21XaXRoaW4oWzAsMTAwXSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaHVlID09PSAnbW9ub2Nocm9tZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBzYXR1cmF0aW9uUmFuZ2UgPSBnZXRTYXR1cmF0aW9uUmFuZ2UoaHVlKTtcblxuICAgIHZhciBzTWluID0gc2F0dXJhdGlvblJhbmdlWzBdLFxuICAgICAgICBzTWF4ID0gc2F0dXJhdGlvblJhbmdlWzFdO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnYnJpZ2h0JzpcbiAgICAgICAgc01pbiA9IDU1O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIHNNaW4gPSBzTWF4IC0gMTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIHNNYXggPSA1NTtcbiAgICAgICAgYnJlYWs7XG4gICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtzTWluLCBzTWF4XSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tCcmlnaHRuZXNzIChILCBTLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgYk1pbiA9IGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpLFxuICAgICAgICBiTWF4ID0gMTAwO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIGJNYXggPSBiTWluICsgMjA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIGJNaW4gPSAoYk1heCArIGJNaW4pLzI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyYW5kb20nOlxuICAgICAgICBiTWluID0gMDtcbiAgICAgICAgYk1heCA9IDEwMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbYk1pbiwgYk1heF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Rm9ybWF0IChoc3YsIG9wdGlvbnMpIHtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5mb3JtYXQpIHtcblxuICAgICAgY2FzZSAnaHN2QXJyYXknOlxuICAgICAgICByZXR1cm4gaHN2O1xuXG4gICAgICBjYXNlICdoc2xBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b0hTTChoc3YpO1xuXG4gICAgICBjYXNlICdoc2wnOlxuICAgICAgICB2YXIgaHNsID0gSFNWdG9IU0woaHN2KTtcbiAgICAgICAgcmV0dXJuICdoc2woJytoc2xbMF0rJywgJytoc2xbMV0rJyUsICcraHNsWzJdKyclKSc7XG5cbiAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICB2YXIgaHNsQ29sb3IgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbGEoJytoc2xDb2xvclswXSsnLCAnK2hzbENvbG9yWzFdKyclLCAnK2hzbENvbG9yWzJdKyclLCAnICsgTWF0aC5yYW5kb20oKSArICcpJztcblxuICAgICAgY2FzZSAncmdiQXJyYXknOlxuICAgICAgICByZXR1cm4gSFNWdG9SR0IoaHN2KTtcblxuICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCAnKSArICcpJztcblxuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIHZhciByZ2JDb2xvciA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgcmdiQ29sb3Iuam9pbignLCAnKSArICcsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gSFNWdG9IZXgoaHN2KTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpIHtcblxuICAgIHZhciBsb3dlckJvdW5kcyA9IGdldENvbG9ySW5mbyhIKS5sb3dlckJvdW5kcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG93ZXJCb3VuZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cbiAgICAgIHZhciBzMSA9IGxvd2VyQm91bmRzW2ldWzBdLFxuICAgICAgICAgIHYxID0gbG93ZXJCb3VuZHNbaV1bMV07XG5cbiAgICAgIHZhciBzMiA9IGxvd2VyQm91bmRzW2krMV1bMF0sXG4gICAgICAgICAgdjIgPSBsb3dlckJvdW5kc1tpKzFdWzFdO1xuXG4gICAgICBpZiAoUyA+PSBzMSAmJiBTIDw9IHMyKSB7XG5cbiAgICAgICAgIHZhciBtID0gKHYyIC0gdjEpLyhzMiAtIHMxKSxcbiAgICAgICAgICAgICBiID0gdjEgLSBtKnMxO1xuXG4gICAgICAgICByZXR1cm4gbSpTICsgYjtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SHVlUmFuZ2UgKGNvbG9ySW5wdXQpIHtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VJbnQoY29sb3JJbnB1dCkgPT09ICdudW1iZXInKSB7XG5cbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludChjb2xvcklucHV0KTtcblxuICAgICAgaWYgKG51bWJlciA8IDM2MCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvcklucHV0ID09PSAnc3RyaW5nJykge1xuXG4gICAgICBpZiAoY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvcklucHV0XTtcbiAgICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlKSB7cmV0dXJuIGNvbG9yLmh1ZVJhbmdlO31cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWzAsMzYwXTtcblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2F0dXJhdGlvblJhbmdlIChodWUpIHtcbiAgICByZXR1cm4gZ2V0Q29sb3JJbmZvKGh1ZSkuc2F0dXJhdGlvblJhbmdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29sb3JJbmZvIChodWUpIHtcblxuICAgIC8vIE1hcHMgcmVkIGNvbG9ycyB0byBtYWtlIHBpY2tpbmcgaHVlIGVhc2llclxuICAgIGlmIChodWUgPj0gMzM0ICYmIGh1ZSA8PSAzNjApIHtcbiAgICAgIGh1ZS09IDM2MDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBjb2xvck5hbWUgaW4gY29sb3JEaWN0aW9uYXJ5KSB7XG4gICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9yTmFtZV07XG4gICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlICYmXG4gICAgICAgICAgIGh1ZSA+PSBjb2xvci5odWVSYW5nZVswXSAmJlxuICAgICAgICAgICBodWUgPD0gY29sb3IuaHVlUmFuZ2VbMV0pIHtcbiAgICAgICAgICByZXR1cm4gY29sb3JEaWN0aW9uYXJ5W2NvbG9yTmFtZV07XG4gICAgICAgfVxuICAgIH0gcmV0dXJuICdDb2xvciBub3QgZm91bmQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tV2l0aGluIChyYW5nZSkge1xuICAgIGlmIChzZWVkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5nZVswXSArIE1hdGgucmFuZG9tKCkqKHJhbmdlWzFdICsgMSAtIHJhbmdlWzBdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vU2VlZGVkIHJhbmRvbSBhbGdvcml0aG0gZnJvbSBodHRwOi8vaW5kaWVnYW1yLmNvbS9nZW5lcmF0ZS1yZXBlYXRhYmxlLXJhbmRvbS1udW1iZXJzLWluLWpzL1xuICAgICAgdmFyIG1heCA9IHJhbmdlWzFdIHx8IDE7XG4gICAgICB2YXIgbWluID0gcmFuZ2VbMF0gfHwgMDtcbiAgICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICB2YXIgcm5kID0gc2VlZCAvIDIzMzI4MC4wO1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgcm5kICogKG1heCAtIG1pbikpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSGV4IChoc3Ype1xuXG4gICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gICAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gJyMnICsgY29tcG9uZW50VG9IZXgocmdiWzBdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsxXSkgKyBjb21wb25lbnRUb0hleChyZ2JbMl0pO1xuXG4gICAgcmV0dXJuIGhleDtcblxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lQ29sb3IgKG5hbWUsIGh1ZVJhbmdlLCBsb3dlckJvdW5kcykge1xuXG4gICAgdmFyIHNNaW4gPSBsb3dlckJvdW5kc1swXVswXSxcbiAgICAgICAgc01heCA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzBdLFxuXG4gICAgICAgIGJNaW4gPSBsb3dlckJvdW5kc1tsb3dlckJvdW5kcy5sZW5ndGggLSAxXVsxXSxcbiAgICAgICAgYk1heCA9IGxvd2VyQm91bmRzWzBdWzFdO1xuXG4gICAgY29sb3JEaWN0aW9uYXJ5W25hbWVdID0ge1xuICAgICAgaHVlUmFuZ2U6IGh1ZVJhbmdlLFxuICAgICAgbG93ZXJCb3VuZHM6IGxvd2VyQm91bmRzLFxuICAgICAgc2F0dXJhdGlvblJhbmdlOiBbc01pbiwgc01heF0sXG4gICAgICBicmlnaHRuZXNzUmFuZ2U6IFtiTWluLCBiTWF4XVxuICAgIH07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRDb2xvckJvdW5kcyAoKSB7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdtb25vY2hyb21lJyxcbiAgICAgIG51bGwsXG4gICAgICBbWzAsMF0sWzEwMCwwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncmVkJyxcbiAgICAgIFstMjYsMThdLFxuICAgICAgW1syMCwxMDBdLFszMCw5Ml0sWzQwLDg5XSxbNTAsODVdLFs2MCw3OF0sWzcwLDcwXSxbODAsNjBdLFs5MCw1NV0sWzEwMCw1MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ29yYW5nZScsXG4gICAgICBbMTksNDZdLFxuICAgICAgW1syMCwxMDBdLFszMCw5M10sWzQwLDg4XSxbNTAsODZdLFs2MCw4NV0sWzcwLDcwXSxbMTAwLDcwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAneWVsbG93JyxcbiAgICAgIFs0Nyw2Ml0sXG4gICAgICBbWzI1LDEwMF0sWzQwLDk0XSxbNTAsODldLFs2MCw4Nl0sWzcwLDg0XSxbODAsODJdLFs5MCw4MF0sWzEwMCw3NV1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2dyZWVuJyxcbiAgICAgIFs2MywxNzhdLFxuICAgICAgW1szMCwxMDBdLFs0MCw5MF0sWzUwLDg1XSxbNjAsODFdLFs3MCw3NF0sWzgwLDY0XSxbOTAsNTBdLFsxMDAsNDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdibHVlJyxcbiAgICAgIFsxNzksIDI1N10sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg2XSxbNDAsODBdLFs1MCw3NF0sWzYwLDYwXSxbNzAsNTJdLFs4MCw0NF0sWzkwLDM5XSxbMTAwLDM1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncHVycGxlJyxcbiAgICAgIFsyNTgsIDI4Ml0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg3XSxbNDAsNzldLFs1MCw3MF0sWzYwLDY1XSxbNzAsNTldLFs4MCw1Ml0sWzkwLDQ1XSxbMTAwLDQyXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncGluaycsXG4gICAgICBbMjgzLCAzMzRdLFxuICAgICAgW1syMCwxMDBdLFszMCw5MF0sWzQwLDg2XSxbNjAsODRdLFs4MCw4MF0sWzkwLDc1XSxbMTAwLDczXV1cbiAgICApO1xuXG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b1JHQiAoaHN2KSB7XG5cbiAgICAvLyB0aGlzIGRvZXNuJ3Qgd29yayBmb3IgdGhlIHZhbHVlcyBvZiAwIGFuZCAzNjBcbiAgICAvLyBoZXJlJ3MgdGhlIGhhY2t5IGZpeFxuICAgIHZhciBoID0gaHN2WzBdO1xuICAgIGlmIChoID09PSAwKSB7aCA9IDE7fVxuICAgIGlmIChoID09PSAzNjApIHtoID0gMzU5O31cblxuICAgIC8vIFJlYmFzZSB0aGUgaCxzLHYgdmFsdWVzXG4gICAgaCA9IGgvMzYwO1xuICAgIHZhciBzID0gaHN2WzFdLzEwMCxcbiAgICAgICAgdiA9IGhzdlsyXS8xMDA7XG5cbiAgICB2YXIgaF9pID0gTWF0aC5mbG9vcihoKjYpLFxuICAgICAgZiA9IGggKiA2IC0gaF9pLFxuICAgICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgICAgcSA9IHYgKiAoMSAtIGYqcyksXG4gICAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSpzKSxcbiAgICAgIHIgPSAyNTYsXG4gICAgICBnID0gMjU2LFxuICAgICAgYiA9IDI1NjtcblxuICAgIHN3aXRjaChoX2kpIHtcbiAgICAgIGNhc2UgMDogciA9IHY7IGcgPSB0OyBiID0gcDsgIGJyZWFrO1xuICAgICAgY2FzZSAxOiByID0gcTsgZyA9IHY7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDI6IHIgPSBwOyBnID0gdjsgYiA9IHQ7ICBicmVhaztcbiAgICAgIGNhc2UgMzogciA9IHA7IGcgPSBxOyBiID0gdjsgIGJyZWFrO1xuICAgICAgY2FzZSA0OiByID0gdDsgZyA9IHA7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDU6IHIgPSB2OyBnID0gcDsgYiA9IHE7ICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW01hdGguZmxvb3IocioyNTUpLCBNYXRoLmZsb29yKGcqMjU1KSwgTWF0aC5mbG9vcihiKjI1NSldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b0hTTCAoaHN2KSB7XG4gICAgdmFyIGggPSBoc3ZbMF0sXG4gICAgICBzID0gaHN2WzFdLzEwMCxcbiAgICAgIHYgPSBoc3ZbMl0vMTAwLFxuICAgICAgayA9ICgyLXMpKnY7XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCxcbiAgICAgIE1hdGgucm91bmQocyp2IC8gKGs8MSA/IGsgOiAyLWspICogMTAwMDApIC8gMTAwLFxuICAgICAgay8yICogMTAwXG4gICAgXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ1RvSW50ZWdlciAoc3RyaW5nKSB7XG4gICAgdmFyIHRvdGFsID0gMFxuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b3RhbCA+PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgYnJlYWs7XG4gICAgICB0b3RhbCArPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuICAgIH1cbiAgICByZXR1cm4gdG90YWxcbiAgfVxuXG4gIHJldHVybiByYW5kb21Db2xvcjtcbn0pKTtcbiJdfQ==
