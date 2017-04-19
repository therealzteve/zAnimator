(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path_magic = require(9);

var _path_magic2 = _interopRequireDefault(_path_magic);

var _square_group_stuff = require(15);

var _square_group_stuff2 = _interopRequireDefault(_square_group_stuff);

var _zoom_stuff = require(17);

var _zoom_stuff2 = _interopRequireDefault(_zoom_stuff);

var _moving_backgrounds = require(2);

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


},{"15":15,"17":17,"2":2,"9":9}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_rect_mover_background = require(3);

var _random_rect_mover_background2 = _interopRequireDefault(_random_rect_mover_background);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomRectMoverBackground: _random_rect_mover_background2.default
};


},{"3":3}],3:[function(require,module,exports){
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

  var movers = [];
  var squares = [];

  for (var i = 0; i < randomRectMoveBackground.amount; i++) {
    var square = randomRectMoveBackground.sourceComponent.getCopy();
    squares.push(square);

    movers.push((0, _random_in_rect_mover2.default)({ subject: square.view, speed: 100, width: randomRectMoveBackground.width, height: randomRectMoveBackground.height }));
    randomRectMoveBackground.view.addChild(square.view);
  }

  randomRectMoveBackground.start = function () {
    for (var j = 0; j < randomRectMoveBackground.amount; j++) {
      movers[j].start();
    }
  };

  randomRectMoveBackground.stop = function () {
    for (var j = 0; j < randomRectMoveBackground.amount; j++) {
      movers[j].stop();
    }
  };

  return randomRectMoveBackground;
};

var _random_in_rect_mover = require(110);

var _random_in_rect_mover2 = _interopRequireDefault(_random_in_rect_mover);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"110":110,"76":76}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swinging_line = require(7);

var _swinging_line2 = _interopRequireDefault(_swinging_line);

var _curve = require(6);

var _curve2 = _interopRequireDefault(_curve);

var _wave = require(8);

var _wave2 = _interopRequireDefault(_wave);

var _cpoint_spinner = require(5);

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


},{"5":5,"6":6,"7":7,"8":8}],5:[function(require,module,exports){
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

var _path = require(82);

var _path2 = _interopRequireDefault(_path);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(98);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(96);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"115":115,"76":76,"82":82,"96":96,"98":98}],6:[function(require,module,exports){
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

var _path = require(82);

var _path2 = _interopRequireDefault(_path);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(98);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"115":115,"76":76,"82":82,"98":98}],7:[function(require,module,exports){
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

var _path = require(82);

var _path2 = _interopRequireDefault(_path);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(98);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"115":115,"76":76,"82":82,"98":98}],8:[function(require,module,exports){
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

var _path = require(82);

var _path2 = _interopRequireDefault(_path);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(98);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"115":115,"76":76,"82":82,"98":98}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition_path_drawer = require(11);

var _transition_path_drawer2 = _interopRequireDefault(_transition_path_drawer);

var _random_part_path_drawer = require(10);

var _random_part_path_drawer2 = _interopRequireDefault(_random_part_path_drawer);

var _bezier = require(4);

var _bezier2 = _interopRequireDefault(_bezier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  transitionPathDrawer: _transition_path_drawer2.default,
  randomPartPathDrawer: _random_part_path_drawer2.default,
  bezier: _bezier2.default
};


},{"10":10,"11":11,"4":4}],10:[function(require,module,exports){
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

var _loop = require(106);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(82);

var _path2 = _interopRequireDefault(_path);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"106":106,"76":76,"82":82}],11:[function(require,module,exports){
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

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(82);

var _path2 = _interopRequireDefault(_path);

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"115":115,"76":76,"82":82}],12:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(89);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"89":89}],13:[function(require,module,exports){
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

var _random_square_switch = require(12);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _interval_timer = require(114);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"114":114,"12":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var randomKaroSwitch = {};
  var zoomOutComponents = [];

  (0, _check_parameter2.default)(options, 'columns', true);
  (0, _check_parameter2.default)(options, 'visible', true);
  (0, _check_parameter2.default)(options, 'spacing', false);
  (0, _check_parameter2.default)(options, 'zoomSpeed', true);
  (0, _check_parameter2.default)(options, 'children', false, []);
  var group = (0, _rectangle_group2.default)({ 'children': options.children, 'columns': options.columns, 'spacing': options.spacing });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = group.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      zoomOutComponents.push((0, _zoom_out2.default)({ subject: child, speed: options.zoomSpeed }));
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
    for (var i = 0; i < options.children.length; i++) {
      randomNumbers.push(i);
    }
    shuffle(randomNumbers);
    for (var j = 0; j < options.children.length; j++) {
      if (j < options.visible) {
        zoomOutComponents[randomNumbers[j]].start();
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(89);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _zoom_out = require(73);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"73":73,"89":89}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_square_switch = require(12);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _random_square_switch_interval = require(13);

var _random_square_switch_interval2 = _interopRequireDefault(_random_square_switch_interval);

var _random_square_zoom_out = require(14);

var _random_square_zoom_out2 = _interopRequireDefault(_random_square_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomSquareSwitch: _random_square_switch2.default,
  randomSquareSwitchInterval: _random_square_switch_interval2.default,
  randomSquareZoomOut: _random_square_zoom_out2.default
};


},{"12":12,"13":13,"14":14}],16:[function(require,module,exports){
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

var _linear_pulsar = require(111);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"111":111}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoom_out = require(16);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  zoomOut: _zoom_out2.default
};


},{"16":16}],18:[function(require,module,exports){
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

var _abstract_component = require(72);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"72":72}],19:[function(require,module,exports){
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

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};


},{}],21:[function(require,module,exports){
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

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(22);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(93);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18,"22":22,"93":93}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(95);

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


},{"95":95}],23:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18}],24:[function(require,module,exports){
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

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18}],25:[function(require,module,exports){
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


},{}],26:[function(require,module,exports){
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

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(22);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(93);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18,"22":22,"93":93}],27:[function(require,module,exports){
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

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

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


},{"103":103,"18":18}],29:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(18);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"18":18}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(20);

var _container2 = _interopRequireDefault(_container);

var _square = require(28);

var _square2 = _interopRequireDefault(_square);

var _circle = require(19);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(27);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(25);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(24);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(21);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(23);

var _image2 = _interopRequireDefault(_image);

var _video = require(29);

var _video2 = _interopRequireDefault(_video);

var _path = require(26);

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


},{"19":19,"20":20,"21":21,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29}],31:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"87":87}],32:[function(require,module,exports){
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

var _abstract_group = require(31);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"31":31,"86":86}],33:[function(require,module,exports){
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

var _abstract_group = require(31);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"31":31,"86":86}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(37);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(36);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(33);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(38);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(35);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(32);

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


},{"32":32,"33":33,"35":35,"36":36,"37":37,"38":38}],35:[function(require,module,exports){
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

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(31);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"31":31,"86":86}],36:[function(require,module,exports){
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

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(31);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"31":31,"86":86}],37:[function(require,module,exports){
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

var _abstract_group = require(31);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"31":31,"86":86}],38:[function(require,module,exports){
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

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(31);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"31":31,"86":86}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    var _this = this;

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
        if (_this.getChild().getWidth) {
            _this.view.x = _this.width / 2 - _this.getChild().getWidth() / 2;
        }
        if (_this.getChild().getHeight) {
            _this.view.y = _this.height / 2 - _this.getChild().getHeight() / 2;
        }
    };

    centerFilter.onPropertyChange();
    /* return */
    return centerFilter;
};

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(91);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"87":87,"91":91}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _centralizer = require(39);

var _centralizer2 = _interopRequireDefault(_centralizer);

var _pathMover = require(41);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _linear = require(42);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(43);

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


},{"39":39,"41":41,"42":42,"43":43}],41:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_filter = require(92);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

var _single_child_filter = require(91);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"87":87,"91":91,"92":92}],42:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(90);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(91);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_mover = require(108);

var _line_mover2 = _interopRequireDefault(_line_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"108":108,"87":87,"90":90,"91":91}],43:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(90);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(91);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_shake_mover = require(109);

var _line_shake_mover2 = _interopRequireDefault(_line_shake_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"109":109,"87":87,"90":90,"91":91}],44:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(91);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _transition_filter = require(92);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"87":87,"91":91,"92":92}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    var flasher = (0, _transition_filter2.default)((0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options), options);

    flasher.handle = function () {
        this.view.visible = Math.random() > 0.5;
    };

    return flasher;
};

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(91);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _transition_filter = require(92);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"87":87,"91":91,"92":92}],46:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"87":87}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(95);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(103);

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


},{"103":103,"95":95}],48:[function(require,module,exports){
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

var _bezierJs = require(116);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"116":116}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(102);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(94);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(103);

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


},{"102":102,"103":103,"94":94}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(93);

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


},{"93":93}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(47);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(49);

var _line2 = _interopRequireDefault(_line);

var _path = require(50);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(48);

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


},{"47":47,"48":48,"49":49,"50":50}],52:[function(require,module,exports){
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

var _path = require(100);

var _path2 = _interopRequireDefault(_path);

var _arc = require(97);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"103":103,"97":97}],53:[function(require,module,exports){
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

var _path = require(100);

var _path2 = _interopRequireDefault(_path);

var _line = require(99);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"103":103,"99":99}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(53);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(55);

var _square2 = _interopRequireDefault(_square);

var _circle = require(52);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"52":52,"53":53,"55":55}],55:[function(require,module,exports){
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

var _path = require(100);

var _path2 = _interopRequireDefault(_path);

var _line = require(99);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"103":103,"99":99}],56:[function(require,module,exports){
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


},{}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(30);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(45);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(44);

var _fader2 = _interopRequireDefault(_fader);

var _group = require(34);

var _group2 = _interopRequireDefault(_group);

var _mover = require(40);

var _mover2 = _interopRequireDefault(_mover);

var _linear_rotator = require(46);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _randomColor = require(132);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(56);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(54);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(51);

var _paths2 = _interopRequireDefault(_paths);

var _compositions = require(1);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(69);

var _proxies2 = _interopRequireDefault(_proxies);

var _interval = require(71);

var _interval2 = _interopRequireDefault(_interval);

var _modificators = require(60);

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


},{"1":1,"132":132,"30":30,"34":34,"40":40,"44":44,"45":45,"46":46,"51":51,"54":54,"56":56,"60":60,"69":69,"71":71}],58:[function(require,module,exports){
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

var _color = require(124);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(105);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"105":105,"115":115,"124":124}],59:[function(require,module,exports){
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

var _loop = require(106);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(132);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(105);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"105":105,"106":106,"132":132}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_color_changer = require(59);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(58);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(64);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _random_arc_mover = require(62);

var _random_arc_mover2 = _interopRequireDefault(_random_arc_mover);

var _random_in_rect_mover = require(63);

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


},{"58":58,"59":59,"62":62,"63":63,"64":64}],61:[function(require,module,exports){
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
        var amountX = (p2PMover.goalPoint.x - p2PMover.startPoint.x) * current;
        var amountY = (p2PMover.goalPoint.y - p2PMover.startPoint.y) * current;

        p2PMover.subject.x = p2PMover.startPoint.x + amountX;
        p2PMover.subject.y = p2PMover.startPoint.y + amountY;
    };

    /* Init */
    return p2PMover;
};

var _abstract_modificator = require(107);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(112);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"107":107,"112":112}],62:[function(require,module,exports){
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

var _arc = require(97);

var _arc2 = _interopRequireDefault(_arc);

var _loop = require(106);

var _loop2 = _interopRequireDefault(_loop);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rotate_point = require(101);

var _rotate_point2 = _interopRequireDefault(_rotate_point);

var _set_prop = require(105);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"103":103,"105":105,"106":106,"97":97}],63:[function(require,module,exports){
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

  // callbacks
  var onCurrentGoalReached = function onCurrentGoalReached() {
    lineMover.stop();
    lineMover.startPoint.x = lineMover.goalPoint.x;
    lineMover.startPoint.y = lineMover.goalPoint.y;

    lineMover.goalPoint.x = Math.random() * options.width;
    lineMover.goalPoint.y = Math.random() * options.height;

    interval.ms = calculateIntervalTime();

    lineMover.start();
  };

  // private vars
  var interval = (0, _interval2.default)({ type: 'ms', ms: 1 });
  var lineMover = (0, _line_mover2.default)({
    subject: randomInRectMover.subject,
    goalPoint: { x: 0, y: 0 },
    onFinishedInterval: onCurrentGoalReached,
    interval: interval,
    steepness: 1
  });

  /* Public functions */
  randomInRectMover.start = function () {
    onCurrentGoalReached();
  };

  randomInRectMover.stop = function () {
    lineMover.stop();
  };

  /* Private functions */
  function calculateIntervalTime() {
    var dist = (0, _distance2.default)((0, _to_vector2.default)(lineMover.goalPoint), (0, _to_vector2.default)(lineMover.startPoint));
    return dist / randomInRectMover.speed * 1000;
  }

  return randomInRectMover;
};

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line_mover = require(61);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(113);

var _interval2 = _interopRequireDefault(_interval);

var _abstract_modificator = require(107);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _to_vector = require(102);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(94);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"103":103,"107":107,"113":113,"61":61,"94":94}],64:[function(require,module,exports){
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

var _transition_loop = require(115);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(105);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"105":105,"115":115}],65:[function(require,module,exports){
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

var _set_prop = require(105);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"105":105}],66:[function(require,module,exports){
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

var _abstract_proxy = require(65);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"65":65}],67:[function(require,module,exports){
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

var _abstract_proxy = require(65);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"65":65}],68:[function(require,module,exports){
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

var _interval_timer = require(114);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(67);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(65);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103,"114":114,"65":65,"67":67}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_proxy = require(66);

var _default_proxy2 = _interopRequireDefault(_default_proxy);

var _increment_proxy = require(67);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _interval_proxy = require(68);

var _interval_proxy2 = _interopRequireDefault(_interval_proxy);

var _random_proxy = require(70);

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


},{"66":66,"67":67,"68":68,"70":70}],70:[function(require,module,exports){
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

var _abstract_proxy = require(65);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"65":65}],71:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"103":103}],72:[function(require,module,exports){
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

var _copy = require(104);

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"104":104}],73:[function(require,module,exports){
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

var _linear_pulsar = require(111);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"111":111}],74:[function(require,module,exports){
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

var _abstract_component = require(72);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"72":72}],75:[function(require,module,exports){
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

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};

},{}],77:[function(require,module,exports){
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

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(78);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(93);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74,"78":78,"93":93}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(95);

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

},{"95":95}],79:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74}],80:[function(require,module,exports){
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

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74}],81:[function(require,module,exports){
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

},{}],82:[function(require,module,exports){
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

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(78);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(93);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74,"78":78,"93":93}],83:[function(require,module,exports){
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

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

},{"103":103,"74":74}],85:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(74);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"74":74}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(76);

var _container2 = _interopRequireDefault(_container);

var _square = require(84);

var _square2 = _interopRequireDefault(_square);

var _circle = require(75);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(83);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(81);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(80);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(77);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(79);

var _image2 = _interopRequireDefault(_image);

var _video = require(85);

var _video2 = _interopRequireDefault(_video);

var _path = require(82);

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

},{"75":75,"76":76,"77":77,"79":79,"80":80,"81":81,"82":82,"83":83,"84":84,"85":85}],87:[function(require,module,exports){
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

var _loop = require(106);

var _loop2 = _interopRequireDefault(_loop);

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_component = require(72);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"72":72,"86":86}],88:[function(require,module,exports){
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

var _abstract_filter = require(87);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"87":87}],89:[function(require,module,exports){
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

var _abstract_group = require(88);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(86);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"86":86,"88":88}],90:[function(require,module,exports){
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

},{}],91:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103}],92:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"115":115}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};

},{}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(95);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"95":95}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(95);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(103);

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

},{"103":103,"95":95}],98:[function(require,module,exports){
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

var _bezierJs = require(116);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"116":116}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(102);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(94);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(103);

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

},{"102":102,"103":103,"94":94}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(93);

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

},{"93":93}],101:[function(require,module,exports){
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

},{}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};

},{}],103:[function(require,module,exports){
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

},{}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

},{}],105:[function(require,module,exports){
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

},{}],106:[function(require,module,exports){
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

},{}],107:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103}],108:[function(require,module,exports){
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
        var amountX = (p2PMover.goalPoint.x - p2PMover.startPoint.x) * current;
        var amountY = (p2PMover.goalPoint.y - p2PMover.startPoint.y) * current;

        p2PMover.subject.x = p2PMover.startPoint.x + amountX;
        p2PMover.subject.y = p2PMover.startPoint.y + amountY;
    };

    /* Init */
    return p2PMover;
};

var _abstract_modificator = require(107);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(112);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"107":107,"112":112}],109:[function(require,module,exports){
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
        var randomFactor = Math.random() * shakeMover.shakeFactor - shakeMover.shakeFactor / 2;
        var distX = shakeMover.goalPoint.x - shakeMover.startPoint.x;
        var distY = shakeMover.goalPoint.y - shakeMover.startPoint.y;
        var randomX = randomFactor * distX / (distX + distY);
        var randomY = randomFactor * distY / (distX + distY);
        var amountX = distX * current + randomX;
        var amountY = distY * current + randomY;

        shakeMover.subject.x = shakeMover.startPoint.x + amountX;
        shakeMover.subject.y = shakeMover.startPoint.y + amountY;
    };

    return shakeMover;
};

var _abstract_modificator = require(107);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(112);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"107":107,"112":112}],110:[function(require,module,exports){
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

  // callbacks
  var onCurrentGoalReached = function onCurrentGoalReached() {
    lineMover.stop();
    lineMover.startPoint.x = lineMover.goalPoint.x;
    lineMover.startPoint.y = lineMover.goalPoint.y;

    lineMover.goalPoint.x = Math.random() * options.width;
    lineMover.goalPoint.y = Math.random() * options.height;

    interval.ms = calculateIntervalTime();

    lineMover.start();
  };

  // private vars
  var interval = (0, _interval2.default)({ type: 'ms', ms: 1 });
  var lineMover = (0, _line_mover2.default)({
    subject: randomInRectMover.subject,
    goalPoint: { x: 0, y: 0 },
    onFinishedInterval: onCurrentGoalReached,
    interval: interval,
    steepness: 1
  });

  /* Public functions */
  randomInRectMover.start = function () {
    onCurrentGoalReached();
  };

  randomInRectMover.stop = function () {
    lineMover.stop();
  };

  /* Private functions */
  function calculateIntervalTime() {
    var dist = (0, _distance2.default)((0, _to_vector2.default)(lineMover.goalPoint), (0, _to_vector2.default)(lineMover.startPoint));
    return dist / randomInRectMover.speed * 1000;
  }

  return randomInRectMover;
};

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line_mover = require(108);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(113);

var _interval2 = _interopRequireDefault(_interval);

var _abstract_modificator = require(107);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _to_vector = require(102);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(94);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"102":102,"103":103,"107":107,"108":108,"113":113,"94":94}],111:[function(require,module,exports){
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

var _transition_loop = require(115);

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(105);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"105":105,"115":115}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (modificator, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'interval', true);
    (0, _check_parameter2.default)(options, 'steepness', false, 0.5);

    /* private vars */
    var modificatorTransition = (0, _transition_loop2.default)(options.interval, options.steepness, 0, 0, options.onFinishedInterval);

    /* Public methods */
    modificator.start = function () {
        modificatorTransition.start(modificator.handle);
    };

    modificator.stop = function () {
        modificatorTransition.stop();
    };

    return modificator;
};

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(115);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103,"115":115}],113:[function(require,module,exports){
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

var _check_parameter = require(103);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"103":103}],114:[function(require,module,exports){
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

var _loop = require(106);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(106);

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
    pulsar.currentInterval = 0;
    pulsar.currentMseconds = current ? current * interval.getMs() : 0;
    _loop2.default.addAnimation(pulsar.handle);
  };

  pulsar.stop = function () {
    _loop2.default.removeAnimation(pulsar.handle);
    pulsar.reset();
  };

  pulsar.reset = function () {
    pulsar.current = 0;
    pulsar.increase = true;
    pulsar.currentMseconds = 0;
    pulsar.currentInterval = 0;
  };

  pulsar.handle = function (event) {

    // First sum current ms
    pulsar.currentMseconds = pulsar.currentMseconds + event.delta;

    // store current current
    var lastCurrent = pulsar.current;

    // calculate new current
    var newCurrent = pulsar.calculateCurrent(pulsar.currentMseconds);

    // check if interval is finished and set it to 1 if it was the last interval
    newCurrent = intervalPostProcessing(newCurrent);

    // calculate current value and compare it with last value
    var currentValue = pulsar.calculateCurrentValue(newCurrent);
    pulsar.increase = pulsar.calculateCurrentValue(lastCurrent) < currentValue;

    if (pulsar.callback) {
      pulsar.callback(currentValue, event);
    }
  };

  pulsar.calculateCurrent = function (ms) {
    var relativeCurrent;
    if (pulsar.interval.type === 'ms') {
      relativeCurrent = ms / pulsar.interval.ms % 1;
    }
    if (pulsar.interval.type === 'bpm') {
      relativeCurrent = ms * pulsar.interval.bpm / 60000 % 1;
    }
    return relativeCurrent;
  };

  pulsar.calculateCurrentValue = function (currentToCalculate) {
    if (currentToCalculate <= pulsar.steepness) {
      return currentToCalculate / pulsar.steepness;
    } else {
      return 1 - (currentToCalculate - pulsar.steepness) / (1 - pulsar.steepness);
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

    return pulsar.calculateCurrentValue(pulsar.calculateCurrent(msToCheck));
  };

  function intervalPostProcessing(tempCurrent) {
    var currentInterval;
    if (pulsar.interval.type === 'ms') {
      currentInterval = Math.floor(pulsar.currentMseconds / pulsar.interval.ms);
    }
    if (pulsar.interval.type === 'bpm') {
      currentInterval = Math.floor(pulsar.currentMseconds * pulsar.interval.bpm / 60000);
    }
    if (pulsar.currentInterval < currentInterval) {
      pulsar.currentInterval = currentInterval;
      return handleIntervalFinished(tempCurrent);
    }
    return tempCurrent;
  }

  function handleIntervalFinished(tempCurrent) {
    if (pulsar.onFinishedInterval) {
      pulsar.onFinishedInterval();
    }
    if (pulsar.numberOfIntervals > 0 && pulsar.currentInterval === pulsar.numberOfIntervals) {
      pulsar.stop();
      tempCurrent = 1;
    }
    return tempCurrent;
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

},{"106":106}],116:[function(require,module,exports){
module.exports = require(117);

},{"117":117}],117:[function(require,module,exports){
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
  var utils = require(119);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(118);

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

},{"118":118,"119":119}],118:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(119);

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

},{"119":119}],119:[function(require,module,exports){
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
      var Bezier = require(117);
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

},{"117":117}],120:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(121)
var ieee754 = require(122)
var isArray = require(123)

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

},{"121":121,"122":122,"123":123}],121:[function(require,module,exports){
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

},{}],122:[function(require,module,exports){
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

},{}],123:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],124:[function(require,module,exports){
/* MIT license */
var clone = require(125);
var convert = require(128);
var string = require(130);

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

},{"125":125,"128":128,"130":130}],125:[function(require,module,exports){
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

}).call(this,require(120).Buffer)

},{"120":120}],126:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(127);

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

},{"127":127}],127:[function(require,module,exports){
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


},{}],128:[function(require,module,exports){
var conversions = require(126);
var route = require(129);

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

},{"126":126,"129":129}],129:[function(require,module,exports){
var conversions = require(126);

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


},{"126":126}],130:[function(require,module,exports){
/* MIT license */
var colorNames = require(131);

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

},{"131":131}],131:[function(require,module,exports){
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
},{}],132:[function(require,module,exports){
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

},{}]},{},[57])(57)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcbW92aW5nX2JhY2tncm91bmRzXFxtb3ZpbmdfYmFja2dyb3VuZHMuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXG1vdmluZ19iYWNrZ3JvdW5kc1xccmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxiZXppZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3BvaW50X3NwaW5uZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcc3dpbmdpbmdfbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFx3YXZlLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxwYXRoX21hZ2ljLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxyYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcdHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcc3F1YXJlX2dyb3VwX3N0dWZmXFxyYW5kb21fc3F1YXJlX3pvb21fb3V0LmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHNxdWFyZV9ncm91cF9zdHVmZi5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcem9vbV9zdHVmZlxcem9vbV9vdXQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHpvb21fc3R1ZmZcXHpvb21fc3R1ZmYuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9zaGFwZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNpcmNsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGN1c3RvbV9vYmplY3QuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxoZWxwZXJcXHBhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcaW1hZ2UuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxsaW5lLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbWFpbl9jb250YWluZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxwYXRoLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcdmlkZW8uanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGFic3RyYWN0X2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGNlbnRlcl9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxjaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmFuZG9tX2NpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyYW5kb21fcmVjdGFuZ2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJlY3RhbmdsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxzcGlyYWxfY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXGNlbnRlclxcY2VudHJhbGl6ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxcbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccGF0aFxccGF0aC1tb3Zlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcbGluZWFyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBvaW50MnBvaW50XFxsaW5lYXJfc2hha2UuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxvcGFjaXR5XFxmYWRlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG9wYWNpdHlcXGZsYXNoZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxyb3RhdG9yXFxsaW5lYXJfcm90YXRvci5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcYXJjLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxiZXppZXJfY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGxpbmUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGguanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGhzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcY2lyY2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc2hhcGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcbG9vcC5qcyIsIi50bXBcXHNjcmlwdHNcXG1haW4uanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXGNvbG9yXFxjb2xvcl9mYWRlci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXHJhbmRvbV9jb2xvcl9jaGFuZ2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxtb2RpZmljYXRvcnMuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHBvc2l0aW9uXFxsaW5lX21vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxwb3NpdGlvblxccmFuZG9tX2FyY19tb3Zlci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXHJhbmRvbV9pbl9yZWN0X21vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxzY2FsZVxcbGluZWFyX3B1bHNhci5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGFic3RyYWN0X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcZGVmYXVsdF9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGluY3JlbWVudF9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGludGVydmFsX3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xccHJveGllcy5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXHJhbmRvbV9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWwuanMiLCJhcHBcXHNjcmlwdHNcXGFic3RyYWN0X2NvbXBvbmVudC5qcyIsImFwcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFx6b29tX3N0dWZmXFx6b29tX291dC5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcYWJzdHJhY3Rfc2hhcGUuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNpcmNsZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY29udGFpbmVyLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjdXN0b21fb2JqZWN0LmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxoZWxwZXJcXHBhdGhfZHJhd2VyLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxpbWFnZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbGluZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbWFpbl9jb250YWluZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHBhdGguanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHJlY3RhbmdsZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcc3F1YXJlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFx2aWRlby5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcZmFjdG9yeS5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcYWJzdHJhY3RfZmlsdGVyLmpzIiwiYXBwXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcYWJzdHJhY3RfZ3JvdXAuanMiLCJhcHBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyZWN0YW5nbGVfZ3JvdXAuanMiLCJhcHBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vZGlmaWNhdG9yX2ZpbHRlci5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcc2luZ2xlX2NoaWxkX2ZpbHRlci5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcdHJhbnNpdGlvbl9maWx0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxhZGRfdXBfcG9pbnRzLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcZGlzdGFuY2UuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGRlZ3JlZXNfdG9fY29vcmRpbmF0ZXMuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcYXJjLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsImFwcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxsaW5lLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGguanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxyb3RhdGVfcG9pbnQuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFx0b192ZWN0b3IuanMiLCJhcHBcXHNjcmlwdHNcXGludGVybmFsXFxjaGVja19wYXJhbWV0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGludGVybmFsXFxjb3B5LmpzIiwiYXBwXFxzY3JpcHRzXFxpbnRlcm5hbFxcc2V0X3Byb3AuanMiLCJhcHBcXHNjcmlwdHNcXGxvb3AuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcYWJzdHJhY3RfbW9kaWZpY2F0b3IuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfbW92ZXIuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfc2hha2VfbW92ZXIuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXHJhbmRvbV9pbl9yZWN0X21vdmVyLmpzIiwiYXBwXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiYXBwXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHRyYW5zaXRpb25fbW9kaWZpY2F0b3IuanMiLCJhcHBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWwuanMiLCJhcHBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWxfdGltZXIuanMiLCJhcHBcXHNjcmlwdHNcXHRyYW5zaXRpb25zXFx0cmFuc2l0aW9uX2xvb3AuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvYmV6aWVyLmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvcG9seS1iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jc3Mta2V5d29yZHMuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW5kb21Db2xvci9yYW5kb21Db2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3dkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3R3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcGF0aF9tYWdpYyA9IHJlcXVpcmUoJy4vcGF0aF9tYWdpYy9wYXRoX21hZ2ljJyk7XG5cbnZhciBfcGF0aF9tYWdpYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX21hZ2ljKTtcblxudmFyIF9zcXVhcmVfZ3JvdXBfc3R1ZmYgPSByZXF1aXJlKCcuL3NxdWFyZV9ncm91cF9zdHVmZi9zcXVhcmVfZ3JvdXBfc3R1ZmYnKTtcblxudmFyIF9zcXVhcmVfZ3JvdXBfc3R1ZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlX2dyb3VwX3N0dWZmKTtcblxudmFyIF96b29tX3N0dWZmID0gcmVxdWlyZSgnLi96b29tX3N0dWZmL3pvb21fc3R1ZmYnKTtcblxudmFyIF96b29tX3N0dWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3pvb21fc3R1ZmYpO1xuXG52YXIgX21vdmluZ19iYWNrZ3JvdW5kcyA9IHJlcXVpcmUoJy4vbW92aW5nX2JhY2tncm91bmRzL21vdmluZ19iYWNrZ3JvdW5kcycpO1xuXG52YXIgX21vdmluZ19iYWNrZ3JvdW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb3ZpbmdfYmFja2dyb3VuZHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHBhdGhNYWdpYzogX3BhdGhfbWFnaWMyLmRlZmF1bHQsXG4gIHNxdWFyZUdyb3VwU3R1ZmY6IF9zcXVhcmVfZ3JvdXBfc3R1ZmYyLmRlZmF1bHQsXG4gIHpvb21TdHVmZjogX3pvb21fc3R1ZmYyLmRlZmF1bHQsXG4gIG1vdmluZ0JhY2tncm91bmRzOiBfbW92aW5nX2JhY2tncm91bmRzMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9zaXRpb25zLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQnKTtcblxudmFyIF9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJhbmRvbVJlY3RNb3ZlckJhY2tncm91bmQ6IF9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92aW5nX2JhY2tncm91bmRzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1vdW50JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb21wb25lbnQnLCB0cnVlKTtcblxuICB2YXIgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kID0ge307XG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5hbW91bnQgPSBvcHRpb25zLmFtb3VudDtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuc291cmNlQ29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnQ7XG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgdmFyIG1vdmVycyA9IFtdO1xuICB2YXIgc3F1YXJlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLmFtb3VudDsgaSsrKSB7XG4gICAgdmFyIHNxdWFyZSA9IHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5zb3VyY2VDb21wb25lbnQuZ2V0Q29weSgpO1xuICAgIHNxdWFyZXMucHVzaChzcXVhcmUpO1xuXG4gICAgbW92ZXJzLnB1c2goKDAsIF9yYW5kb21faW5fcmVjdF9tb3ZlcjIuZGVmYXVsdCkoeyBzdWJqZWN0OiBzcXVhcmUudmlldywgc3BlZWQ6IDEwMCwgd2lkdGg6IHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC53aWR0aCwgaGVpZ2h0OiByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuaGVpZ2h0IH0pKTtcbiAgICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQudmlldy5hZGRDaGlsZChzcXVhcmUudmlldyk7XG4gIH1cblxuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuYW1vdW50OyBqKyspIHtcbiAgICAgIG1vdmVyc1tqXS5zdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5hbW91bnQ7IGorKykge1xuICAgICAgbW92ZXJzW2pdLnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZDtcbn07XG5cbnZhciBfcmFuZG9tX2luX3JlY3RfbW92ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9yYW5kb21faW5fcmVjdF9tb3ZlcicpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9pbl9yZWN0X21vdmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N3aW5naW5nX2xpbmUgPSByZXF1aXJlKCcuL3N3aW5naW5nX2xpbmUnKTtcblxudmFyIF9zd2luZ2luZ19saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N3aW5naW5nX2xpbmUpO1xuXG52YXIgX2N1cnZlID0gcmVxdWlyZSgnLi9jdXJ2ZScpO1xuXG52YXIgX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnZlKTtcblxudmFyIF93YXZlID0gcmVxdWlyZSgnLi93YXZlJyk7XG5cbnZhciBfd2F2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXZlKTtcblxudmFyIF9jcG9pbnRfc3Bpbm5lciA9IHJlcXVpcmUoJy4vY3BvaW50X3NwaW5uZXInKTtcblxudmFyIF9jcG9pbnRfc3Bpbm5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcG9pbnRfc3Bpbm5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgc3dpbmdpbmdMaW5lOiBfc3dpbmdpbmdfbGluZTIuZGVmYXVsdCxcbiAgY3VydmU6IF9jdXJ2ZTIuZGVmYXVsdCxcbiAgY3BvaW50U3Bpbm5lcjogX2Nwb2ludF9zcGlubmVyMi5kZWZhdWx0LFxuICB3YXZlOiBfd2F2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHN3aW5nTGluZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBzd2luZ0xpbmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHN3aW5nTGluZS50aW1lLCAxKTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyIC0gc3dpbmdMaW5lLnJhZGl1cywgeTogMCB9LCBjcG9pbnQyOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyICsgc3dpbmdMaW5lLnJhZGl1cywgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gKDAsIF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzMi5kZWZhdWx0KShjdXJyZW50ICogMzYwLCBzd2luZ0xpbmUucmFkaXVzKTtcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDEueCA9IHN3aW5nTGluZS5sZW5ndGggLyAyIC0gY29vcmRpbmF0ZXMueDtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gLWNvb3JkaW5hdGVzLnk7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDIueCA9IHN3aW5nTGluZS5sZW5ndGggLyAyICsgY29vcmRpbmF0ZXMueDtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gY29vcmRpbmF0ZXMueTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2hlbHBlci9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzJyk7XG5cbnZhciBfZGVncmVlc190b19jb29yZGluYXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3BvaW50X3NwaW5uZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IDAsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmVuZC55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKiBzd2luZ0xpbmUubGVuZ3RoO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnggPSAoTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKyAwLjUpICogc3dpbmdMaW5lLmxlbmd0aDtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKGN1cnJlbnQgLSAwLjUpIC8gMiAqIHN3aW5nTGluZS5hbXBsaXR1ZGU7XG4gICAgc3dpbmdMaW5lLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gc3dpbmdMaW5lO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2luZ2luZ19saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdHJldGNoJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIHN3aW5nTGluZS5zdHJldGNoID0gb3B0aW9ucy5zdHJldGNoO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDAuNSk7XG4gIHN3aW5nTGluZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHN3aW5nTGluZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiAtIHN3aW5nTGluZS5zdHJldGNoLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBzd2luZ0xpbmUuc3RyZXRjaCwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmVuZC55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKHN3aW5nTGluZS5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjI1KSAtIDAuNSkgKiAxLjUgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAoc3dpbmdMaW5lLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuNSkgLSAwLjUpICogMS41ICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuc3RhcnQueSA9IChzd2luZ0xpbmUucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC43NSkgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25fcGF0aF9kcmF3ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9yYW5kb21fcGFydF9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyKTtcblxudmFyIF9iZXppZXIgPSByZXF1aXJlKCcuL2Jlemllci9iZXppZXInKTtcblxudmFyIF9iZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0cmFuc2l0aW9uUGF0aERyYXdlcjogX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIHJhbmRvbVBhcnRQYXRoRHJhd2VyOiBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIGJlemllcjogX2JlemllcjIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfbWFnaWMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG5cbiAgLy8gSGFuZGxlIHBhcmFtZXRlcnM6XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGhPcHRpb25zJywgZmFsc2UsIHt9KTtcbiAgcGF0aERyYXdlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuICBvcHRpb25zLnBhdGhPcHRpb25zLnBhdGggPSBwYXRoRHJhd2VyLnBhdGg7XG5cbiAgLy8gSW5pdFxuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShvcHRpb25zLnBhdGhPcHRpb25zKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocGF0aERyYXdlci5oYW5kbGUpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5hZGRDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24ocGF0aERyYXdlci5oYW5kbGUpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5yZW1vdmVDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucGF0aFZpZXcuY29tcGxldGVQYXRoID0gcGF0aERyYXdlci5wYXRoLmdldFBhcnRQYXRoKE1hdGgucmFuZG9tKCkpO1xuICAgIHBhdGhEcmF3ZXIucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBwYXRoRHJhd2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHBhdGhEcmF3ZXIgPSB7fTtcblxuICAvLyBIYW5kbGUgUGFyYW1ldGVyc1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoT3B0aW9ucycsIHRydWUpO1xuICBvcHRpb25zLnBhdGhPcHRpb25zLnBhdGggPSBvcHRpb25zLnBhdGg7XG4gIHBhdGhEcmF3ZXIucGF0aCA9IG9wdGlvbnMucGF0aDtcblxuICAvLyBJbml0XG4gIHBhdGhEcmF3ZXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKDEwMDAsIDEpO1xuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShvcHRpb25zLnBhdGhPcHRpb25zKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwYXRoRHJhd2VyLnB1bHNhci5zdGFydChwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LmFkZENoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucHVsc2FyLnN0b3AoKTtcbiAgICBwYXRoRHJhd2VyLnZpZXcucmVtb3ZlQ2hpbGQocGF0aERyYXdlci5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5jb21wbGV0ZVBhdGggPSBwYXRoRHJhd2VyLnBhdGguZ2V0UGFydFBhdGgoY3VycmVudCk7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhEcmF3ZXI7XG59O1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHJhbmRvbUthcm9Td2l0Y2ggPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd2aXNpYmxlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIGZhbHNlLCBbXSk7XG5cbiAgdmFyIGdyb3VwID0gKDAsIF9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQpKHsgJ2NoaWxkcmVuJzogb3B0aW9ucy5jaGlsZHJlbiwgJ2NvbHVtbnMnOiBvcHRpb25zLmNvbHVtbnMsICdzcGFjaW5nJzogb3B0aW9ucy5zcGFjaW5nIH0pO1xuXG4gIHJhbmRvbUthcm9Td2l0Y2gudmlldyA9IGdyb3VwLnZpZXc7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC5zd2l0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhbmRvbU51bWJlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhbmRvbU51bWJlcnMucHVzaChpKTtcbiAgICB9XG4gICAgc2h1ZmZsZShyYW5kb21OdW1iZXJzKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChqIDwgb3B0aW9ucy52aXNpYmxlKSB7XG4gICAgICAgIGdyb3VwLmNoaWxkcmVuW3JhbmRvbU51bWJlcnNbal1dLnZpZXcuYWxwaGEgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXAuY2hpbGRyZW5bcmFuZG9tTnVtYmVyc1tqXV0udmlldy5hbHBoYSA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHNodWZmbGUoYSkge1xuICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aDsgaTsgaS0tKSB7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpO1xuICAgICAgdmFyIF9yZWYgPSBbYVtqXSwgYVtpIC0gMV1dO1xuICAgICAgYVtpIC0gMV0gPSBfcmVmWzBdO1xuICAgICAgYVtqXSA9IF9yZWZbMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUthcm9Td2l0Y2g7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2dyb3VwL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3NxdWFyZV9zd2l0Y2guanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd2aXNpYmxlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIGZhbHNlLCBbXSk7XG5cbiAgdmFyIGdyb3VwU3dpdGNoID0gKDAsIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHZhciBncm91cFN3aXRjaFRpbWVyID0gKDAsIF9pbnRlcnZhbF90aW1lcjIuZGVmYXVsdCkob3B0aW9ucy5pbnRlcnZhbCk7XG4gIHZhciBzd2l0Y2hJbnRlcnZhbCA9IHt9O1xuXG4gIHN3aXRjaEludGVydmFsLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGdyb3VwU3dpdGNoVGltZXIuYWRkTGlzdGVuZXIoaGFuZGxlKTtcbiAgICBncm91cFN3aXRjaFRpbWVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBncm91cFN3aXRjaFRpbWVyLnN0b3AoKTtcbiAgICBncm91cFN3aXRjaFRpbWVyLnJlbW92ZUxpc3RlbmVyKGhhbmRsZSk7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwudmlldyA9IGdyb3VwU3dpdGNoLnZpZXc7XG5cbiAgZnVuY3Rpb24gaGFuZGxlKCkge1xuICAgIGdyb3VwU3dpdGNoLnN3aXRjaCgpO1xuICB9XG5cbiAgcmV0dXJuIHN3aXRjaEludGVydmFsO1xufTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2gnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9pbnRlcnZhbF90aW1lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdGltZXJzL2ludGVydmFsX3RpbWVyJyk7XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfdGltZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciByYW5kb21LYXJvU3dpdGNoID0ge307XG4gIHZhciB6b29tT3V0Q29tcG9uZW50cyA9IFtdO1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Zpc2libGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3pvb21TcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgZmFsc2UsIFtdKTtcbiAgdmFyIGdyb3VwID0gKDAsIF9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQpKHsgJ2NoaWxkcmVuJzogb3B0aW9ucy5jaGlsZHJlbiwgJ2NvbHVtbnMnOiBvcHRpb25zLmNvbHVtbnMsICdzcGFjaW5nJzogb3B0aW9ucy5zcGFjaW5nIH0pO1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBncm91cC5jaGlsZHJlbltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBjaGlsZCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICB6b29tT3V0Q29tcG9uZW50cy5wdXNoKCgwLCBfem9vbV9vdXQyLmRlZmF1bHQpKHsgc3ViamVjdDogY2hpbGQsIHNwZWVkOiBvcHRpb25zLnpvb21TcGVlZCB9KSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJhbmRvbUthcm9Td2l0Y2gudmlldyA9IGdyb3VwLnZpZXc7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC56b29tT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21OdW1iZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYW5kb21OdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICAgIHNodWZmbGUocmFuZG9tTnVtYmVycyk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvcHRpb25zLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaiA8IG9wdGlvbnMudmlzaWJsZSkge1xuICAgICAgICB6b29tT3V0Q29tcG9uZW50c1tyYW5kb21OdW1iZXJzW2pdXS5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICBmb3IgKHZhciBpID0gYS5sZW5ndGg7IGk7IGktLSkge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgIHZhciBfcmVmID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgIGFbaSAtIDFdID0gX3JlZlswXTtcbiAgICAgIGFbal0gPSBfcmVmWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5kb21LYXJvU3dpdGNoO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9ncm91cC9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlX2dyb3VwKTtcblxudmFyIF96b29tX291dCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvY29tcG9zaXRpb25zL3pvb21fc3R1ZmYvem9vbV9vdXQnKTtcblxudmFyIF96b29tX291dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3pvb21fb3V0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3N3aXRjaCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfc3dpdGNoKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbCk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV96b29tX291dCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV96b29tX291dCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfem9vbV9vdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmFuZG9tU3F1YXJlU3dpdGNoOiBfcmFuZG9tX3NxdWFyZV9zd2l0Y2gyLmRlZmF1bHQsXG4gIHJhbmRvbVNxdWFyZVN3aXRjaEludGVydmFsOiBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwyLmRlZmF1bHQsXG4gIHJhbmRvbVNxdWFyZVpvb21PdXQ6IF9yYW5kb21fc3F1YXJlX3pvb21fb3V0Mi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlX2dyb3VwX3N0dWZmLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgb3B0aW9ucy5udW1iZXJPZkludGVydmFscyA9IDE7XG4gIG9wdGlvbnMubGltaXQgPSAwO1xuICBvcHRpb25zLnJpc2luZyA9IHRydWU7XG4gIG9wdGlvbnMuY2VudGVySWZQb3NzaWJsZSA9IHRydWU7XG4gIHZhciB6b29tZXIgPSAoMCwgX2xpbmVhcl9wdWxzYXIyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG4gIHZhciB6b29tT3V0ID0ge307XG4gIHpvb21PdXQuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgem9vbWVyLnN0YXJ0KCk7XG4gIH07XG5cbiAgem9vbU91dC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHpvb21lci5zdG9wKCk7XG4gIH07XG5cbiAgcmV0dXJuIHpvb21PdXQ7XG59O1xuXG52YXIgX2xpbmVhcl9wdWxzYXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9zY2FsZS9saW5lYXJfcHVsc2FyJyk7XG5cbnZhciBfbGluZWFyX3B1bHNhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcHVsc2FyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbV9vdXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfem9vbV9vdXQgPSByZXF1aXJlKCcuL3pvb21fb3V0Jyk7XG5cbnZhciBfem9vbV9vdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbV9vdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHpvb21PdXQ6IF96b29tX291dDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb21fc3R1ZmYuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgICAgdmFyIGNvbXBvbmVudCA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgY29tcG9uZW50LnZpZXcgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcbiAgICAgIGNvbXBvbmVudC5zY2FsZSA9IDE7XG5cbiAgICAgIHJldHVybiBjb21wb25lbnQ7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9zaGFwZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2lyY2xlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgICB2YXIgY2lyY2xlID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgLyogcHVibGljIHByb3BlcnRpZXMgKi9cbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XG4gICAgICBjaXJjbGUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgY2lyY2xlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd0NpcmNsZSgwLCAwLCB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgY2lyY2xlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSAqIDI7XG4gICAgICB9O1xuXG4gICAgICBjaXJjbGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSAqIDI7XG4gICAgICB9O1xuXG4gICAgICAvKiBpbml0ICovXG4gICAgICBjaXJjbGUuZHJhdygpO1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBjcmVhdGVqcy5Db250YWluZXIoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250YWluZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgdmFyIGN1c3RvbSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3VzdG9tU2hhcGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuICBjdXN0b20uY3VzdG9tU2hhcGUgPSBvcHRpb25zLmN1c3RvbVNoYXBlO1xuICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuYmVnaW5TdHJva2UoJyMwMEYnKS5tb3ZlVG8oMCwgMCk7XG4gICAgdmFyIGN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5jdXN0b21TaGFwZS5wYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIF9wYXRoX2RyYXdlcjIuZGVmYXVsdFtwYXRoLnR5cGVdKHRoaXMudmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGN1c3RvbS5kcmF3KCk7XG4gIHJldHVybiBjdXN0b207XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b21fb2JqZWN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2hlbHBlci9hbmdsZV90b19yYWRpYW5zJyk7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFuczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZV90b19yYWRpYW5zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyplc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UqL1xuZnVuY3Rpb24gcGF0aERyYXdlcigpIHt9XG5cbnBhdGhEcmF3ZXIubGluZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5saW5lVG8oY3VycmVudC54ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS54LCBjdXJyZW50LnkgKyBwYXRoLmdldEVkZ2VQb2ludCgpLnkpO1xufTtcblxucGF0aERyYXdlci5hcmMgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgaWYgKHBhdGguZGVncmVlcyA8IDApIHtcbiAgICBncmFwaGljcy5hcmMocGF0aC5zdGFydC54LCBwYXRoLnN0YXJ0LnkgLSBwYXRoLnJhZGl1cywgcGF0aC5yYWRpdXMsICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoOTApLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKDkwICsgcGF0aC5kZWdyZWVzKSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55ICsgcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKC05MCksICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGF0aC5kZWdyZWVzIC0gOTApKTtcbiAgfVxufTtcblxucGF0aERyYXdlci5zaW5lX3dhdmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCBwYXRoLmdldExlbmd0aCgpOyB4ICs9IDUpIHtcbiAgICB2YXIgcG9pbnQgPSBwYXRoLmdldFBvaW50KHggLyBwYXRoLmdldExlbmd0aCgpKTtcbiAgICBncmFwaGljcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH1cbn07XG5cbnBhdGhEcmF3ZXIuYmV6aWVyX2N1cnZlID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGlmIChwYXRoLmNwb2ludDIpIHtcbiAgICBncmFwaGljcy5iZXppZXJDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5jcG9pbnQyLngsIHBhdGguY3BvaW50Mi55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcbiAgfSBlbHNlIHtcbiAgICBncmFwaGljcy5xdWFkcmF0aWNDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5lbmQueCwgcGF0aC5lbmQueSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBhdGhEcmF3ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xuXG4gIHZhciBpbWFnZSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gIGltYWdlLnZpZXcgPSBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKTtcblxuICBpbWFnZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudmlldy5zY2FsZVggPSB0aGlzLnNjYWxlO1xuICAgIHRoaXMudmlldy5zY2FsZVkgPSB0aGlzLnNjYWxlO1xuICB9O1xuXG4gIGltYWdlLmRyYXcoKTtcbiAgcmV0dXJuIGltYWdlO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBsaW5lID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsaW5lUGF0aCcsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aGlja25lc3MnLCBmYWxzZSwgMSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIGxpbmUucGF0aCA9IG9wdGlvbnMubGluZVBhdGg7XG4gICAgICBsaW5lLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGxpbmUudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3M7XG5cbiAgICAgIGxpbmUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMudGhpY2tuZXNzICogdGhpcy5zY2FsZSkubW92ZVRvKHRoaXMucGF0aC5zdGFydC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLnN0YXJ0LnkgKiB0aGlzLnNjYWxlKS5saW5lVG8odGhpcy5wYXRoLmVuZC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLmVuZC55ICogdGhpcy5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnBhdGguZW5kLnggLSB0aGlzLnBhdGguc3RhcnQueCkgKiB0aGlzLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgbGluZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucGF0aC5lbmQueSAtIHRoaXMucGF0aC5zdGFydC55KSAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmRyYXcoKTtcbiAgICAgIHJldHVybiBsaW5lO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgc3RhZ2UgPSBuZXcgY3JlYXRlanMuU3RhZ2UoaWQpO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHt9O1xuXG4gICAgY29udGFpbmVyLmFkZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBzdGFnZS5hZGRDaGlsZChjaGlsZC52aWV3KTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnJlbW92ZSA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBzdGFnZS5yZW1vdmVDaGlsZChjaGlsZC52aWV3KTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnJlbW92ZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhZ2UucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnN0YWdlID0gc3RhZ2U7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW5fY29udGFpbmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCBmYWxzZSwgMSk7XG5cbiAgICAgIHZhciBjdXN0b20gPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuICAgICAgY3VzdG9tLmNvbXBsZXRlUGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgICAgIGN1c3RvbS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgICBjdXN0b20ud2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMud2lkdGgpLm1vdmVUbygwLCAwKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgICAgICB2YXIgaSA9IDE7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuY29tcGxldGVQYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0odGhpcy52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY3VzdG9tLmRyYXcoKTtcbiAgICAgIHJldHVybiBjdXN0b207XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyZWN0YW5nbGVTaGFwZScsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICB2YXIgcmVjdCA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcbiAgICAgIHJlY3QuaGVpZ2h0ID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS5oZWlnaHQ7XG4gICAgICByZWN0LmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgcmVjdC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZHJhdygpO1xuICAgICAgcmV0dXJuIHJlY3Q7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3F1YXJlQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NxdWFyZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciBzcXVhcmUgPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuICAgICAgc3F1YXJlLnNxdWFyZVNoYXBlID0gb3B0aW9ucy5zcXVhcmVTaGFwZTtcbiAgICAgIHNxdWFyZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICAgIHNxdWFyZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGUsIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgc3F1YXJlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZHJhdygpO1xuICAgICAgcmV0dXJuIHNxdWFyZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gc3F1YXJlQ29uc3RydWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcXVhcmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xuICAgICAgLy8gSWYgdGhlIHNvdXJjZSBpcyBhIHN0cmluZywgY29udmVydCBpdCB0byBhIHZpZGVvXG4gICAgICBoYW5kbGVWaWRlb1NvdXJjZSgpO1xuXG4gICAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICAgIHZhciB2aWRlbyA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG5cbiAgICAgIC8qIHB1YmxpYyBwcm9wZXJ0aWVzICovXG4gICAgICB2aWRlby52aWV3ID0gbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSk7XG4gICAgICB2aWRlby5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXG4gICAgICB2aWRlby5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjYWxlWCA9IHZpZGVvLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjYWxlWSA9IHZpZGVvLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnBsYXkoKTtcbiAgICAgIH07XG5cbiAgICAgIHZpZGVvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgfTtcblxuICAgICAgLyogcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVZpZGVvU291cmNlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9wdGlvbnMuc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgICAgdmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9IHZpZGVvRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaW5pdCAqL1xuICAgICAgdmlkZW8uZHJhdygpO1xuICAgICAgcmV0dXJuIHZpZGVvO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZGVvLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX21haW5fY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJyk7XG5cbnZhciBfbWFpbl9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbl9jb250YWluZXIpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY3VzdG9tX29iamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0Jyk7XG5cbnZhciBfY3VzdG9tX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21fb2JqZWN0KTtcblxudmFyIF9pbWFnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbWFnZScpO1xuXG52YXIgX2ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlKTtcblxudmFyIF92aWRlbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlbycpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY29udGFpbmVyOiBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHQsXG4gICAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICAgIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICAgIGN1c3RvbU9iamVjdDogX2N1c3RvbV9vYmplY3QyLmRlZmF1bHQsXG4gICAgbWFpbkNvbnRhaW5lcjogX21haW5fY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIGltYWdlOiBfaW1hZ2UyLmRlZmF1bHQsXG4gICAgdmlkZW86IF92aWRlbzIuZGVmYXVsdCxcbiAgICBwYXRoOiBfcGF0aDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgdmFyIGFic3RyYWN0R3JvdXAgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcblxuICAgIGFic3RyYWN0R3JvdXAuY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgICBhYnN0cmFjdEdyb3VwLmFkZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICBhYnN0cmFjdEdyb3VwLnJlZnJlc2goKTtcbiAgICB9O1xuXG4gICAgYWJzdHJhY3RHcm91cC5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5zcGxpY2UoYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSwgMSk7XG4gICAgICAgIGFic3RyYWN0R3JvdXAucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYWJzdHJhY3RHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIGZhbHNlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICB2YXIgY2VudGVyR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjZW50ZXJHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgY2VudGVyR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjZW50ZXJHcm91cC52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2VudGVyR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChjZW50ZXJHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcblxuICAgICAgICAgICAgaWYgKGNlbnRlckdyb3VwLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnggPSBjb250YWluZXIueCA9IChpICsgMSkgKiBjZW50ZXJHcm91cC53aWR0aCAvIChjZW50ZXJHcm91cC5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNlbnRlckdyb3VwLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci55ID0gY29udGFpbmVyLnggPSAoaSArIDEpICogY2VudGVyR3JvdXAuaGVpZ2h0IC8gKGNlbnRlckdyb3VwLmNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjZW50ZXJHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2VudGVyR3JvdXAucmVmcmVzaCgpO1xuICAgIHJldHVybiBjZW50ZXJHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2VudGVyX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCBmYWxzZSwgMTApO1xuICAgIHZhciBjaXJjbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICAgIGNpcmNsZUdyb3VwLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cztcbiAgICAgICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGNpcmNsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfY2lyY2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vc3BpcmFsX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3NwaXJhbF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BpcmFsX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfY2VudGVyX2dyb3VwID0gcmVxdWlyZSgnLi9jZW50ZXJfZ3JvdXAnKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudGVyX2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGVHcm91cDogX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCxcbiAgcmFuZG9tUmVjdGFuZ2xlR3JvdXA6IF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICBjaXJjbGVHcm91cDogX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgc3BpcmFsQ2lyY2xlR3JvdXA6IF9zcGlyYWxfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21DaXJjbGVHcm91cDogX3JhbmRvbV9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNlbnRlckdyb3VwOiBfY2VudGVyX2dyb3VwMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYW5kb21SYW5nZScsIGZhbHNlLCAxMCk7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2lyY2xlR3JvdXAucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gICAgY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgPSBvcHRpb25zLnJhbmRvbVJhbmdlO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpcmNsZUdyb3VwLnJhbmRvbVJhbmdlIC0gY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgKiAwLjUpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgY2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjaXJjbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX2NpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCBmYWxzZSwgMTApO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgZmFsc2UsIDEwKTtcblxuICAgIHZhciByZWN0YW5nbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICAgIHJlY3RhbmdsZUdyb3VwLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICByZWN0YW5nbGVHcm91cC5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIHJlY3RhbmdsZUdyb3VwLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlY3RhbmdsZUdyb3VwLnZpZXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICAgICAgY29udGFpbmVyLnggPSBNYXRoLmZsb29yKHJlY3RhbmdsZUdyb3VwLndpZHRoICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBjb250YWluZXIueSA9IE1hdGguZmxvb3IocmVjdGFuZ2xlR3JvdXAuaGVpZ2h0ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAucmVmcmVzaCgpO1xuICAgIHJldHVybiByZWN0YW5nbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3JlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIGZhbHNlLCAzKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSwgMTApO1xuXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG5cbiAgICByZWN0YW5nbGVHcm91cC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmcgPSBvcHRpb25zLnNwYWNpbmc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIueCA9IGkgJSByZWN0YW5nbGVHcm91cC5jb2x1bW5zICogcmVjdGFuZ2xlR3JvdXAuc3BhY2luZztcbiAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKGkgLyByZWN0YW5nbGVHcm91cC5jb2x1bW5zKSAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XG4gICAgICAgIHJlY3RhbmdsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdGFuZ2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnRSYWRpdXMnLCBmYWxzZSwgMTApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZFJhZGl1cycsIGZhbHNlLCAxKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyb3VuZHMnLCBmYWxzZSwgMSk7XG5cbiAgdmFyIHNwaXJhbENpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzID0gb3B0aW9ucy5zdGFydFJhZGl1cztcbiAgc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzID0gb3B0aW9ucy5lbmRSYWRpdXM7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyA9IG9wdGlvbnMucm91bmRzO1xuXG4gIHZhciBhbmdsZSA9IDM2MCAqIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgdmFyIHJhZGl1c0luY3JlYXNlQW1vdW50ID0gKHNwaXJhbENpcmNsZUdyb3VwLmVuZFJhZGl1cyAtIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzKSAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgaW5uZXJDb250YWluZXIueSA9IC0oc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMgKyByYWRpdXNJbmNyZWFzZUFtb3VudCAqIGkpO1xuICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgc3BpcmFsQ2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIHNwaXJhbENpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGlyYWxfY2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcblxuICAgIC8qIFByaXZhdGUgdmFycyAqL1xuXG4gICAgdmFyIGNlbnRlckZpbHRlciA9ICgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpO1xuXG4gICAgLyogcHVibGljIHZhcnMgKi9cbiAgICBjZW50ZXJGaWx0ZXIud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIGNlbnRlckZpbHRlci5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNlbnRlckZpbHRlci5vblByb3BlcnR5Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuZ2V0Q2hpbGQoKS5nZXRXaWR0aCkge1xuICAgICAgICAgICAgX3RoaXMudmlldy54ID0gX3RoaXMud2lkdGggLyAyIC0gX3RoaXMuZ2V0Q2hpbGQoKS5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3RoaXMuZ2V0Q2hpbGQoKS5nZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIF90aGlzLnZpZXcueSA9IF90aGlzLmhlaWdodCAvIDIgLSBfdGhpcy5nZXRDaGlsZCgpLmdldEhlaWdodCgpIC8gMjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjZW50ZXJGaWx0ZXIub25Qcm9wZXJ0eUNoYW5nZSgpO1xuICAgIC8qIHJldHVybiAqL1xuICAgIHJldHVybiBjZW50ZXJGaWx0ZXI7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jZW50cmFsaXplci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jZW50cmFsaXplciA9IHJlcXVpcmUoJy4vY2VudGVyL2NlbnRyYWxpemVyJyk7XG5cbnZhciBfY2VudHJhbGl6ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudHJhbGl6ZXIpO1xuXG52YXIgX3BhdGhNb3ZlciA9IHJlcXVpcmUoJy4vcGF0aC9wYXRoLW1vdmVyJyk7XG5cbnZhciBfcGF0aE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhNb3Zlcik7XG5cbnZhciBfbGluZWFyID0gcmVxdWlyZSgnLi9wb2ludDJwb2ludC9saW5lYXInKTtcblxudmFyIF9saW5lYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyKTtcblxudmFyIF9saW5lYXJfc2hha2UgPSByZXF1aXJlKCcuL3BvaW50MnBvaW50L2xpbmVhcl9zaGFrZScpO1xuXG52YXIgX2xpbmVhcl9zaGFrZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfc2hha2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNlbnRlcjoge1xuICAgIGNlbnRyYWxpemVyOiBfY2VudHJhbGl6ZXIyLmRlZmF1bHRcbiAgfSxcbiAgcGF0aDoge1xuICAgIHBhdGhNb3ZlcjogX3BhdGhNb3ZlcjIuZGVmYXVsdFxuICB9LFxuICBsaW5lYXI6IHtcbiAgICBsaW5lYXI6IF9saW5lYXIyLmRlZmF1bHQsXG4gICAgbGluZWFyU2hha2U6IF9saW5lYXJfc2hha2UyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuXG4gIHZhciBwYXRoTW92ZXIgPSAoMCwgX3RyYW5zaXRpb25fZmlsdGVyMi5kZWZhdWx0KSgoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIHBhdGhNb3Zlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgcGF0aE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdmFyIHBvaW50ID0gcGF0aE1vdmVyLnBhdGguZ2V0UG9pbnQoY3VycmVudCk7XG4gICAgcGF0aE1vdmVyLnZpZXcueCA9IHBvaW50Lng7XG4gICAgcGF0aE1vdmVyLnZpZXcueSA9IHBvaW50Lnk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX3RyYW5zaXRpb25fZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL3RyYW5zaXRpb25fZmlsdGVyJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9maWx0ZXIpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGgtbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9tb2RpZmljYXRvcl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KShvcHRpb25zKSksIG9wdGlvbnMpO1xuXG4gICAgb3B0aW9ucy5zdWJqZWN0ID0gbGluZWFyUDJQTW92ZXIudmlldztcbiAgICBsaW5lYXJQMlBNb3Zlci5tb2RpZmljYXRvciA9ICgwLCBfbGluZV9tb3ZlcjIuZGVmYXVsdCkob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbGluZWFyUDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvbW9kaWZpY2F0b3JfZmlsdGVyJyk7XG5cbnZhciBfbW9kaWZpY2F0b3JfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGlmaWNhdG9yX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxudmFyIF9saW5lX21vdmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9tb2RpZmljYXRvcnMvcG9zaXRpb24vbGluZV9tb3ZlcicpO1xuXG52YXIgX2xpbmVfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZV9tb3Zlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9tb2RpZmljYXRvcl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KShvcHRpb25zKSksIG9wdGlvbnMpO1xuXG4gICAgb3B0aW9ucy5zdWJqZWN0ID0gbGluZWFyUDJQTW92ZXIudmlldztcbiAgICBsaW5lYXJQMlBNb3Zlci5tb2RpZmljYXRvciA9ICgwLCBfbGluZV9zaGFrZV9tb3ZlcjIuZGVmYXVsdCkob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbGluZWFyUDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvbW9kaWZpY2F0b3JfZmlsdGVyJyk7XG5cbnZhciBfbW9kaWZpY2F0b3JfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGlmaWNhdG9yX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxudmFyIF9saW5lX3NoYWtlX21vdmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9tb2RpZmljYXRvcnMvcG9zaXRpb24vbGluZV9zaGFrZV9tb3ZlcicpO1xuXG52YXIgX2xpbmVfc2hha2VfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZV9zaGFrZV9tb3Zlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfc2hha2UuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBmYWRlciA9ICgwLCBfdHJhbnNpdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIGZhZGVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHRoaXMudmlldy5hbHBoYSA9IGN1cnJlbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBmYWRlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGZsYXNoZXIgPSAoMCwgX3RyYW5zaXRpb25fZmlsdGVyMi5kZWZhdWx0KSgoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpLCBvcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgICBmbGFzaGVyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWV3LnZpc2libGUgPSBNYXRoLnJhbmRvbSgpID4gMC41O1xuICAgIH07XG5cbiAgICByZXR1cm4gZmxhc2hlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbGFzaGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIGZhbHNlLCAxKTtcbiAgdmFyIGxpbmVhclJvdGF0b3IgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcbiAgbGluZWFyUm90YXRvci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGxpbmVhclJvdGF0b3Iudmlldy5hZGRDaGlsZChvcHRpb25zLmNoaWxkLnZpZXcpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIHRoaXMudmlldy5yb3RhdGlvbiA9IHRoaXMudmlldy5yb3RhdGlvbiArIHRoaXMuc3BlZWQgKiAoZXZlbnQuZGVsdGEgLyAxMDAwKTtcbiAgfVxuXG4gIGxpbmVhclJvdGF0b3IuaGFuZGxlID0gaGFuZGxlO1xuXG4gIHJldHVybiBsaW5lYXJSb3RhdG9yO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9yb3RhdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXJjQ29uc3RydWN0b3I7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFyY0NvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAvLyBQYXJhbWV0ZXJzXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2RlZ3JlZXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcblxuICAvLyBwcml2YXRlIHZhcnNcbiAgdmFyIGFyYyA9IHt9O1xuXG4gIGFyYy5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gIGFyYy5kZWdyZWVzID0gb3B0aW9ucy5kZWdyZWVzO1xuICBhcmMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gIGFyYy50eXBlID0gJ2FyYyc7XG5cbiAgLy8gcHVibGljIGZ1bmN0aW9uc1xuICBhcmMuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmMuZ2V0UG9pbnQoMSk7XG4gIH07XG5cbiAgYXJjLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoMiAqIE1hdGguUEkgKiBhcmMucmFkaXVzICogKGFyYy5kZWdyZWVzIC8gMzYwKSk7XG4gIH07XG5cbiAgYXJjLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG9yaWdpbiA9IHsgeDogYXJjLnN0YXJ0LngsIHk6IGFyYy5zdGFydC55IH07XG4gICAgdmFyIHBhcnRPZkRlZ3JlZXMgPSBhcmMuZGVncmVlcyAqIHByb2dyZXNzO1xuXG4gICAgaWYgKGFyYy5kZWdyZWVzIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogb3JpZ2luLnggKyBhcmMucmFkaXVzICogTWF0aC5zaW4oKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSgtcGFydE9mRGVncmVlcykpLFxuICAgICAgICB5OiBvcmlnaW4ueSAtIGFyYy5yYWRpdXMgKyBhcmMucmFkaXVzICogTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9yaWdpbi54ICsgYXJjLnJhZGl1cyAqIE1hdGguc2luKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGFydE9mRGVncmVlcykpLFxuICAgICAgeTogb3JpZ2luLnkgKyBhcmMucmFkaXVzICsgYXJjLnJhZGl1cyAqIC1NYXRoLmNvcygoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhcnRPZkRlZ3JlZXMpKVxuICAgIH07XG4gIH07XG5cbiAgYXJjLnN1YlBhdGhzID0gW2FyY107XG5cbiAgYXJjLmdldEFuZ2xlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcyk7XG4gIH07XG5cbiAgYXJjLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHBhcnRPZkRlZ3JlZXMgPSBhcmMuZGVncmVlcyAqIHByb2dyZXNzO1xuICAgIHJldHVybiBhcmNDb25zdHJ1Y3Rvcih7IHN0YXJ0OiBhcmMuc3RhcnQsIGRlZ3JlZXM6IHBhcnRPZkRlZ3JlZXMsIHJhZGl1czogYXJjLnJhZGl1cyB9KTtcbiAgfTtcblxuICByZXR1cm4gYXJjO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJjLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Nwb2ludDEnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjcG9pbnQyJywgZmFsc2UpO1xuXG4gIHZhciBiZXppZXJDdXJ2ZSA9IHt9O1xuICBiZXppZXJDdXJ2ZS5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gIGJlemllckN1cnZlLmVuZCA9IG9wdGlvbnMuZW5kO1xuICBiZXppZXJDdXJ2ZS5jcG9pbnQxID0gb3B0aW9ucy5jcG9pbnQxO1xuICBiZXppZXJDdXJ2ZS5jcG9pbnQyID0gb3B0aW9ucy5jcG9pbnQyO1xuICBiZXppZXJDdXJ2ZS50eXBlID0gJ2Jlemllcl9jdXJ2ZSc7XG5cbiAgaWYgKGJlemllckN1cnZlLmNwb2ludDIpIHtcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBfYmV6aWVySnMyLmRlZmF1bHQoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmNwb2ludDIsIGJlemllckN1cnZlLmVuZCk7XG4gIH0gZWxzZSB7XG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgX2JlemllckpzMi5kZWZhdWx0KGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5lbmQpO1xuICB9XG5cbiAgYmV6aWVyQ3VydmUuc3ViUGF0aHMgPSBbYmV6aWVyQ3VydmVdO1xuXG4gIGJlemllckN1cnZlLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYmV6aWVyQ3VydmUuZW5kO1xuICB9O1xuXG4gIGJlemllckN1cnZlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIubGVuZ3RoKCk7XG4gIH07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIuZ2V0KHByb2dyZXNzKTtcbiAgfTtcblxuICAvL1RPRE8gQWRkIGdldCBwYXJ0IHBhdGggZnVuY3Rpb25cblxuICByZXR1cm4gYmV6aWVyQ3VydmU7XG59O1xuXG52YXIgX2JlemllckpzID0gcmVxdWlyZSgnYmV6aWVyLWpzJyk7XG5cbnZhciBfYmV6aWVySnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVySnMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXppZXJfY3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5lQ29uc3RydWN0b3I7XG5cbnZhciBfdG9fdmVjdG9yID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS90b192ZWN0b3InKTtcblxudmFyIF90b192ZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9fdmVjdG9yKTtcblxudmFyIF9kaXN0YW5jZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvZGlzdGFuY2UnKTtcblxudmFyIF9kaXN0YW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kaXN0YW5jZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbGluZUNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcblxuICB2YXIgbGluZSA9IHt9O1xuICBsaW5lLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgbGluZS5lbmQgPSBvcHRpb25zLmVuZDtcbiAgbGluZS50eXBlID0gJ2xpbmUnO1xuXG4gIGxpbmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsaW5lLmVuZDtcbiAgfTtcblxuICBsaW5lLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkoKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKGxpbmUuc3RhcnQpLCAoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkobGluZS5lbmQpKTtcbiAgfTtcblxuICBsaW5lLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGxpbmUuc3RhcnQueCArIChsaW5lLmVuZC54IC0gbGluZS5zdGFydC54KSAqIHByb2dyZXNzLFxuICAgICAgeTogbGluZS5zdGFydC55ICsgKGxpbmUuZW5kLnkgLSBsaW5lLnN0YXJ0LnkpICogcHJvZ3Jlc3NcbiAgICB9O1xuICB9O1xuXG4gIGxpbmUuZ2V0UGFydFBhdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbmV3RW5kID0geyB4OiBsaW5lLmVuZC54ICogcHJvZ3Jlc3MsIHk6IGxpbmUuZW5kLnkgKiBwcm9ncmVzcyB9O1xuICAgIHZhciBwYXRoUGFydCA9IGxpbmVDb25zdHJ1Y3Rvcih7IHN0YXJ0OiBsaW5lLnN0YXJ0LCBlbmQ6IG5ld0VuZCB9KTtcbiAgICByZXR1cm4gcGF0aFBhcnQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aENvbnN0cnVjdG9yO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXRoQ29uc3RydWN0b3IoKSB7XG5cbiAgdmFyIHBhdGggPSB7fTtcblxuICBwYXRoLnN1YlBhdGhzID0gW107XG5cbiAgcGF0aC5nZXRFZGdlUG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlZGdlUG9pbnRzID0gW107XG4gICAgZWRnZVBvaW50cy5wdXNoKHsgeDogMCwgeTogMCB9KTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBzdWJQYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgZWRnZVBvaW50cy5wdXNoKCgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoZWRnZVBvaW50c1tlZGdlUG9pbnRzLmxlbmd0aCAtIDFdLCBzdWJQYXRoLmdldEVkZ2VQb2ludCgpKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQb2ludHM7XG4gIH07XG5cbiAgcGF0aC5nZXRTdGFydFBvaW50T2YgPSBmdW5jdGlvbiAoc3ViUGF0aCkge1xuICAgIHZhciBzdGFydFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBwYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICBpZiAoY3VycmVudFBhdGggPT09IHN1YlBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRQb2ludDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFBvaW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdGFydFBvaW50LCBjdXJyZW50UGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICBpZiAobGVuZ3RoUG9pbnQgPiBzdWJQYXRoLmdldExlbmd0aCgpKSB7XG4gICAgICAgICAgbGVuZ3RoUG9pbnQgLT0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdWJQYXRoLmdldFBvaW50KGxlbmd0aFBvaW50IC8gc3ViUGF0aC5nZXRMZW5ndGgoKSksIHBhdGguZ2V0U3RhcnRQb2ludE9mKHN1YlBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGF0aC5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICBsZW5ndGggKz0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjQgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgJiYgX2l0ZXJhdG9yNC5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICBwYXRoLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG5ld1N1YlBhdGhzID0gW107XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xuICAgIHZhciBzdWJQYXRoc1JldHJpZXZlZCA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50UGF0aCA9IDA7XG5cbiAgICB3aGlsZSAoIXN1YlBhdGhzUmV0cmlldmVkKSB7XG4gICAgICBpZiAobGVuZ3RoUG9pbnQgPiBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZW5ndGhQb2ludCAtPSBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKTtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aCgxKSk7XG4gICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaChwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aChsZW5ndGhQb2ludCAvIHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSk7XG4gICAgICAgIHN1YlBhdGhzUmV0cmlldmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGFydFBhdGggPSBwYXRoQ29uc3RydWN0b3IoKTtcbiAgICBwYXJ0UGF0aC5zdWJQYXRocyA9IG5ld1N1YlBhdGhzO1xuICAgIHJldHVybiBwYXJ0UGF0aDtcbiAgfTtcblxuICByZXR1cm4gcGF0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFyYzogX2FyYzIuZGVmYXVsdCxcbiAgbGluZTogX2xpbmUyLmRlZmF1bHQsXG4gIHBhdGg6IF9wYXRoMi5kZWZhdWx0LFxuICBiZXppZXJDdXJ2ZTogX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XG5cbiAgdmFyIGNpcmNsZSA9IHt9O1xuICBjaXJjbGUucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG5cbiAgY2lyY2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIGNpcmNsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9hcmMyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogLWNpcmNsZS5yYWRpdXMgfSwgZGVncmVlczogMzYwLCByYWRpdXM6IGNpcmNsZS5yYWRpdXMgfSkpO1xuXG4gIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG5cbiAgdmFyIHJlY3RhbmdsZSA9IHt9O1xuICByZWN0YW5nbGUud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByZWN0YW5nbGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgcmVjdGFuZ2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogcmVjdGFuZ2xlLmhlaWdodCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogLXJlY3RhbmdsZS5oZWlnaHQgfSB9KSk7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGUgPSByZXF1aXJlKCcuL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vc3F1YXJlJyk7XG5cbnZhciBfc3F1YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZSk7XG5cbnZhciBfY2lyY2xlID0gcmVxdWlyZSgnLi9jaXJjbGUnKTtcblxudmFyIF9jaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGU6IF9yZWN0YW5nbGUyLmRlZmF1bHQsXG4gIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgY2lyY2xlOiBfY2lyY2xlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhcGVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2lkZWxlbmd0aCcsIHRydWUpO1xuXG4gIHZhciBzcXVhcmUgPSB7fTtcbiAgc3F1YXJlLnNpZGVsZW5ndGggPSBvcHRpb25zLnNpZGVsZW5ndGg7XG5cbiAgc3F1YXJlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiBzcXVhcmUuc2lkZWxlbmd0aCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiAtc3F1YXJlLnNpZGVsZW5ndGggfSB9KSk7XG5cbiAgcmV0dXJuIHNxdWFyZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWRkQW5pbWF0aW9uOiBmdW5jdGlvbiBhZGRBbmltYXRpb24oaGFuZGxlKSB7XG4gICAgY3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XG4gICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xuICB9LFxuICByZW1vdmVBbmltYXRpb246IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihoYW5kbGUpIHtcbiAgICBjcmVhdGVqcy5UaWNrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb29wLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2ZsYXNoZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvb3BhY2l0eS9mbGFzaGVyJyk7XG5cbnZhciBfZmxhc2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGFzaGVyKTtcblxudmFyIF9mYWRlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZhZGVyJyk7XG5cbnZhciBfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFkZXIpO1xuXG52YXIgX2dyb3VwID0gcmVxdWlyZSgnLi9maWx0ZXJzL2dyb3VwL2dyb3VwJyk7XG5cbnZhciBfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JvdXApO1xuXG52YXIgX21vdmVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL21vdmVyJyk7XG5cbnZhciBfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW92ZXIpO1xuXG52YXIgX2xpbmVhcl9yb3RhdG9yID0gcmVxdWlyZSgnLi9maWx0ZXJzL3JvdGF0b3IvbGluZWFyX3JvdGF0b3InKTtcblxudmFyIF9saW5lYXJfcm90YXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcm90YXRvcik7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9zaGFwZXMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3NoYXBlcy9zaGFwZXMnKTtcblxudmFyIF9zaGFwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhcGVzKTtcblxudmFyIF9wYXRocyA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcGF0aHMvcGF0aHMnKTtcblxudmFyIF9wYXRoczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRocyk7XG5cbnZhciBfY29tcG9zaXRpb25zID0gcmVxdWlyZSgnLi9jb21wb3NpdGlvbnMvY29tcG9zaXRpb25zJyk7XG5cbnZhciBfY29tcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0aW9ucyk7XG5cbnZhciBfcHJveGllcyA9IHJlcXVpcmUoJy4vcHJveGllcy9wcm94aWVzJyk7XG5cbnZhciBfcHJveGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm94aWVzKTtcblxudmFyIF9pbnRlcnZhbCA9IHJlcXVpcmUoJy4vdGltZXJzL2ludGVydmFsJyk7XG5cbnZhciBfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWwpO1xuXG52YXIgX21vZGlmaWNhdG9ycyA9IHJlcXVpcmUoJy4vbW9kaWZpY2F0b3JzL21vZGlmaWNhdG9ycycpO1xuXG52YXIgX21vZGlmaWNhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2RpZmljYXRvcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL1RPRE8gT3JnYW5pemUgaW1wb3J0c1xuXG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzSWQpIHtcbiAgdmFyIG1haW5Db250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5tYWluQ29udGFpbmVyKGNhbnZhc0lkKTtcbiAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKG1haW5Db250YWluZXIuc3RhZ2UpO1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgbWFpbkNvbnRhaW5lcjogbWFpbkNvbnRhaW5lcixcbiAgICBmYWN0b3J5OiBfZmFjdG9yeTIuZGVmYXVsdCxcbiAgICBsb29wOiBfbG9vcDIuZGVmYXVsdCxcbiAgICBpbnRlcnZhbDogX2ludGVydmFsMi5kZWZhdWx0LFxuICAgIHV0aWxzOiB7XG4gICAgICByYW5kb21Db2xvcjogX3JhbmRvbUNvbG9yMi5kZWZhdWx0XG4gICAgfSxcbiAgICBnZW9tZXRyeToge1xuICAgICAgc2hhcGVzOiBfc2hhcGVzMi5kZWZhdWx0LFxuICAgICAgcGF0aHM6IF9wYXRoczIuZGVmYXVsdFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgb3BhY2l0eToge1xuICAgICAgICBmbGFzaGVyOiBfZmxhc2hlcjIuZGVmYXVsdCxcbiAgICAgICAgZmFkZXI6IF9mYWRlcjIuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgIG1vdmVyOiBfbW92ZXIyLmRlZmF1bHQsXG4gICAgICBncm91cDogX2dyb3VwMi5kZWZhdWx0LFxuICAgICAgcm90YXRvcjoge1xuICAgICAgICBsaW5lYXJSb3RhdG9yOiBfbGluZWFyX3JvdGF0b3IyLmRlZmF1bHRcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGlmaWNhdG9yczogX21vZGlmaWNhdG9yczIuZGVmYXVsdCxcbiAgICBjb21wb3NpdGlvbnM6IF9jb21wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcHJveGllczogX3Byb3hpZXMyLmRlZmF1bHRcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjEnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjInLCB0cnVlKTtcblxuICB2YXIgY29sb3JGYWRlciA9IHt9O1xuICBjb2xvckZhZGVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGNvbG9yRmFkZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBjb2xvckZhZGVyLmNvbG9yMSA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IxKTtcbiAgY29sb3JGYWRlci5jb2xvcjIgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMik7XG4gIGNvbG9yRmFkZXIuY3VycmVudENvbG9yID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjEpO1xuICBjb2xvckZhZGVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShjb2xvckZhZGVyLnNwZWVkLCAwLjUpO1xuXG4gIGNvbG9yRmFkZXIuY29sb3JSYW5nZSA9IHtcbiAgICByOiBjb2xvckZhZGVyLmNvbG9yMi5yZWQoKSAtIGNvbG9yRmFkZXIuY29sb3IxLnJlZCgpLFxuICAgIGc6IGNvbG9yRmFkZXIuY29sb3IyLmdyZWVuKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ncmVlbigpLFxuICAgIGI6IGNvbG9yRmFkZXIuY29sb3IyLmJsdWUoKSAtIGNvbG9yRmFkZXIuY29sb3IxLmJsdWUoKVxuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29sb3JGYWRlci5wdWxzYXIuc3RhcnQoY29sb3JGYWRlci5oYW5kbGUpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb2xvckZhZGVyLnB1bHNhci5zdG9wKCk7XG4gIH07XG5cbiAgY29sb3JGYWRlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLnJlZChjb2xvckZhZGVyLmNvbG9yMS5yZWQoKSArIGN1cnJlbnQgKiBjb2xvckZhZGVyLmNvbG9yUmFuZ2Uucik7XG4gICAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IuZ3JlZW4oY29sb3JGYWRlci5jb2xvcjEuZ3JlZW4oKSArIGN1cnJlbnQgKiBjb2xvckZhZGVyLmNvbG9yUmFuZ2UuZyk7XG4gICAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IuYmx1ZShjb2xvckZhZGVyLmNvbG9yMS5ibHVlKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLmIpO1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGNvbG9yRmFkZXIuc3ViamVjdCwgJ2NvbG9yJywgY29sb3JGYWRlci5jdXJyZW50Q29sb3IucmdiU3RyaW5nKCkpO1xuICAgIGNvbG9yRmFkZXIuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbG9yRmFkZXI7XG59O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yX2ZhZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21Db2xvckNoYW5nZXIgPSB7fTtcbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbihyYW5kb21Db2xvckNoYW5nZXIuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21Db2xvckNoYW5nZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24ocmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KShyYW5kb21Db2xvckNoYW5nZXIuc3ViamVjdCwgJ2NvbG9yJywgKDAsIF9yYW5kb21Db2xvcjIuZGVmYXVsdCkoKSk7XG4gICAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiByYW5kb21Db2xvckNoYW5nZXI7XG59O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3JhbmRvbUNvbG9yID0gcmVxdWlyZSgncmFuZG9tQ29sb3InKTtcblxudmFyIF9yYW5kb21Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21Db2xvcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY29sb3JfY2hhbmdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlciA9IHJlcXVpcmUoJy4vY29sb3IvcmFuZG9tX2NvbG9yX2NoYW5nZXInKTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY29sb3JfY2hhbmdlcik7XG5cbnZhciBfY29sb3JfZmFkZXIgPSByZXF1aXJlKCcuL2NvbG9yL2NvbG9yX2ZhZGVyJyk7XG5cbnZhciBfY29sb3JfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JfZmFkZXIpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIgPSByZXF1aXJlKCcuL3NjYWxlL2xpbmVhcl9wdWxzYXInKTtcblxudmFyIF9saW5lYXJfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9wdWxzYXIpO1xuXG52YXIgX3JhbmRvbV9hcmNfbW92ZXIgPSByZXF1aXJlKCcuL3Bvc2l0aW9uL3JhbmRvbV9hcmNfbW92ZXInKTtcblxudmFyIF9yYW5kb21fYXJjX21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9hcmNfbW92ZXIpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyID0gcmVxdWlyZSgnLi9wb3NpdGlvbi9yYW5kb21faW5fcmVjdF9tb3ZlcicpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9pbl9yZWN0X21vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBjb2xvcjoge1xuICAgIHJhbmRvbUNvbG9yQ2hhbmdlcjogX3JhbmRvbV9jb2xvcl9jaGFuZ2VyMi5kZWZhdWx0LFxuICAgIGNvbG9yRmFkZXI6IF9jb2xvcl9mYWRlcjIuZGVmYXVsdFxuICB9LFxuICBzY2FsZToge1xuICAgIGxpbmVhclB1bHNhcjogX2xpbmVhcl9wdWxzYXIyLmRlZmF1bHRcbiAgfSxcbiAgcG9zaXRpb246IHtcbiAgICByYW5kb21BcmNNb3ZlcjogX3JhbmRvbV9hcmNfbW92ZXIyLmRlZmF1bHQsXG4gICAgcmFuZG9tSW5SZWN0TW92ZXI6IF9yYW5kb21faW5fcmVjdF9tb3ZlcjIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kaWZpY2F0b3JzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdnb2FsUG9pbnQnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0UG9pbnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIHAyUE1vdmVyID0gKDAsIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X21vZGlmaWNhdG9yMi5kZWZhdWx0KShvcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgICAvKiBQYXJhbXMgYW5kIGRlZmF1bHRzICovXG4gICAgcDJQTW92ZXIuZ29hbFBvaW50ID0gb3B0aW9ucy5nb2FsUG9pbnQ7XG4gICAgcDJQTW92ZXIuc3RhcnRQb2ludCA9IG9wdGlvbnMuc3RhcnRQb2ludDtcblxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgICBwMlBNb3Zlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICAgICB2YXIgYW1vdW50WCA9IChwMlBNb3Zlci5nb2FsUG9pbnQueCAtIHAyUE1vdmVyLnN0YXJ0UG9pbnQueCkgKiBjdXJyZW50O1xuICAgICAgICB2YXIgYW1vdW50WSA9IChwMlBNb3Zlci5nb2FsUG9pbnQueSAtIHAyUE1vdmVyLnN0YXJ0UG9pbnQueSkgKiBjdXJyZW50O1xuXG4gICAgICAgIHAyUE1vdmVyLnN1YmplY3QueCA9IHAyUE1vdmVyLnN0YXJ0UG9pbnQueCArIGFtb3VudFg7XG4gICAgICAgIHAyUE1vdmVyLnN1YmplY3QueSA9IHAyUE1vdmVyLnN0YXJ0UG9pbnQueSArIGFtb3VudFk7XG4gICAgfTtcblxuICAgIC8qIEluaXQgKi9cbiAgICByZXR1cm4gcDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9tb2RpZmljYXRvcnMvYWJzdHJhY3RfbW9kaWZpY2F0b3InKTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9tb2RpZmljYXRvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9tb2RpZmljYXRvciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvbW9kaWZpY2F0b3JzL3RyYW5zaXRpb25fbW9kaWZpY2F0b3InKTtcblxudmFyIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lX21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgLy8gcHJpdmF0ZSB2YXJzXG4gIHZhciBjdXJyZW50QXJjID0gY3JlYXRlUmFuZG9tQXJjKCk7XG4gIHZhciBjdXJyZW50U3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICB2YXIgY3VycmVudE1zID0gMDtcbiAgdmFyIGN1cnJlbnRBbmdsZSA9IDA7XG5cbiAgLy8gcHJpdmF0ZSBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlUmFuZG9tQXJjKCkge1xuICAgIHJldHVybiAoMCwgX2FyYzIuZGVmYXVsdCkoeyBkZWdyZWVzOiBNYXRoLnJhbmRvbSgpICogMzYwIC0gMTgwLCByYWRpdXM6IDI1IH0pO1xuICB9XG5cbiAgdmFyIHJhbmRvbUFyY01vdmVyID0ge307XG4gIHJhbmRvbUFyY01vdmVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIHJhbmRvbUFyY01vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblxuICByYW5kb21BcmNNb3Zlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocmFuZG9tQXJjTW92ZXIuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihyYW5kb21BcmNNb3Zlci5oYW5kbGUpO1xuXG4gICAgLy8gUmVzZXQgZXZlcnl0aGluZ1xuICAgIGN1cnJlbnRBcmMgPSBjcmVhdGVSYW5kb21BcmMoKTtcbiAgICBjdXJyZW50U3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgIGN1cnJlbnRNcyA9IDA7XG4gICAgY3VycmVudEFuZ2xlID0gMDtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgbXMgPSBldmVudC5kZWx0YTtcbiAgICBjdXJyZW50TXMgKz0gbXM7XG5cbiAgICB3aGlsZSAoY3VycmVudE1zIC8gMTAwMCAqIHJhbmRvbUFyY01vdmVyLnNwZWVkID49IGN1cnJlbnRBcmMuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIHZhciByb3RhdGVkUG9pbnQgPSAoMCwgX3JvdGF0ZV9wb2ludDIuZGVmYXVsdCkoY3VycmVudEFyYy5nZXRQb2ludCgxKSwgY3VycmVudEFuZ2xlKTtcbiAgICAgIGN1cnJlbnRTdGFydFBvc2l0aW9uLnggPSBjdXJyZW50U3RhcnRQb3NpdGlvbi54ICsgcm90YXRlZFBvaW50Lng7XG4gICAgICBjdXJyZW50U3RhcnRQb3NpdGlvbi55ID0gY3VycmVudFN0YXJ0UG9zaXRpb24ueSArIHJvdGF0ZWRQb2ludC55O1xuICAgICAgY3VycmVudE1zID0gY3VycmVudE1zIC0gY3VycmVudEFyYy5nZXRMZW5ndGgoKSAqIDEwMDAgLyByYW5kb21BcmNNb3Zlci5zcGVlZDtcbiAgICAgIGN1cnJlbnRBbmdsZSA9IGN1cnJlbnRBbmdsZSArIGN1cnJlbnRBcmMuZ2V0QW5nbGUoMSk7XG4gICAgICBjdXJyZW50QXJjID0gY3JlYXRlUmFuZG9tQXJjKCk7XG4gICAgfVxuICAgIHZhciBwcm9ncmVzcyA9IGN1cnJlbnRNcyAvIDEwMDAgKiByYW5kb21BcmNNb3Zlci5zcGVlZCAvIGN1cnJlbnRBcmMuZ2V0TGVuZ3RoKCk7XG5cbiAgICB2YXIgcG9zaXRpb24gPSAoMCwgX3JvdGF0ZV9wb2ludDIuZGVmYXVsdCkoY3VycmVudEFyYy5nZXRQb2ludChwcm9ncmVzcyksIGN1cnJlbnRBbmdsZSk7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkocmFuZG9tQXJjTW92ZXIuc3ViamVjdCwgJ3gnLCBjdXJyZW50U3RhcnRQb3NpdGlvbi54ICsgcG9zaXRpb24ueCk7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkocmFuZG9tQXJjTW92ZXIuc3ViamVjdCwgJ3knLCBjdXJyZW50U3RhcnRQb3NpdGlvbi55ICsgcG9zaXRpb24ueSk7XG4gICAgLy9yYW5kb21BcmNNb3Zlci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcmFuZG9tQXJjTW92ZXI7XG59O1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yb3RhdGVfcG9pbnQgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3JvdGF0ZV9wb2ludCcpO1xuXG52YXIgX3JvdGF0ZV9wb2ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3RhdGVfcG9pbnQpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9hcmNfbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgLyogUGFyYW1ldGVycyAqL1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcblxuICAvKiBjcmVhdGUgb2JqZWN0IGFuZCBzZXQgcHJvcGVydGllcyAqL1xuICB2YXIgcmFuZG9tSW5SZWN0TW92ZXIgPSAoMCwgX2Fic3RyYWN0X21vZGlmaWNhdG9yMi5kZWZhdWx0KShvcHRpb25zKTtcbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuXG4gIC8vIGNhbGxiYWNrc1xuICB2YXIgb25DdXJyZW50R29hbFJlYWNoZWQgPSBmdW5jdGlvbiBvbkN1cnJlbnRHb2FsUmVhY2hlZCgpIHtcbiAgICBsaW5lTW92ZXIuc3RvcCgpO1xuICAgIGxpbmVNb3Zlci5zdGFydFBvaW50LnggPSBsaW5lTW92ZXIuZ29hbFBvaW50Lng7XG4gICAgbGluZU1vdmVyLnN0YXJ0UG9pbnQueSA9IGxpbmVNb3Zlci5nb2FsUG9pbnQueTtcblxuICAgIGxpbmVNb3Zlci5nb2FsUG9pbnQueCA9IE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLndpZHRoO1xuICAgIGxpbmVNb3Zlci5nb2FsUG9pbnQueSA9IE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmhlaWdodDtcblxuICAgIGludGVydmFsLm1zID0gY2FsY3VsYXRlSW50ZXJ2YWxUaW1lKCk7XG5cbiAgICBsaW5lTW92ZXIuc3RhcnQoKTtcbiAgfTtcblxuICAvLyBwcml2YXRlIHZhcnNcbiAgdmFyIGludGVydmFsID0gKDAsIF9pbnRlcnZhbDIuZGVmYXVsdCkoeyB0eXBlOiAnbXMnLCBtczogMSB9KTtcbiAgdmFyIGxpbmVNb3ZlciA9ICgwLCBfbGluZV9tb3ZlcjIuZGVmYXVsdCkoe1xuICAgIHN1YmplY3Q6IHJhbmRvbUluUmVjdE1vdmVyLnN1YmplY3QsXG4gICAgZ29hbFBvaW50OiB7IHg6IDAsIHk6IDAgfSxcbiAgICBvbkZpbmlzaGVkSW50ZXJ2YWw6IG9uQ3VycmVudEdvYWxSZWFjaGVkLFxuICAgIGludGVydmFsOiBpbnRlcnZhbCxcbiAgICBzdGVlcG5lc3M6IDFcbiAgfSk7XG5cbiAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICByYW5kb21JblJlY3RNb3Zlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBvbkN1cnJlbnRHb2FsUmVhY2hlZCgpO1xuICB9O1xuXG4gIHJhbmRvbUluUmVjdE1vdmVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGluZU1vdmVyLnN0b3AoKTtcbiAgfTtcblxuICAvKiBQcml2YXRlIGZ1bmN0aW9ucyAqL1xuICBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnZhbFRpbWUoKSB7XG4gICAgdmFyIGRpc3QgPSAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkobGluZU1vdmVyLmdvYWxQb2ludCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KShsaW5lTW92ZXIuc3RhcnRQb2ludCkpO1xuICAgIHJldHVybiBkaXN0IC8gcmFuZG9tSW5SZWN0TW92ZXIuc3BlZWQgKiAxMDAwO1xuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUluUmVjdE1vdmVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2xpbmVfbW92ZXIgPSByZXF1aXJlKCcuL2xpbmVfbW92ZXInKTtcblxudmFyIF9saW5lX21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVfbW92ZXIpO1xuXG52YXIgX2ludGVydmFsID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90aW1lcnMvaW50ZXJ2YWwnKTtcblxudmFyIF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbCk7XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9hYnN0cmFjdF9tb2RpZmljYXRvcicpO1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X21vZGlmaWNhdG9yKTtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3RvX3ZlY3RvcicpO1xuXG52YXIgX3RvX3ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b192ZWN0b3IpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9pbl9yZWN0X21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGltaXQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdudW1iZXJPZkludGVydmFscycsIGZhbHNlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyaXNpbmcnLCBmYWxzZSwgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2VudGVySWZQb3NzaWJsZScsIGZhbHNlLCB0cnVlKTtcblxuICB2YXIgbGluZWFyUHVsc2FyID0ge307XG4gIGxpbmVhclB1bHNhci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuICBsaW5lYXJQdWxzYXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBsaW5lYXJQdWxzYXIubGltaXQgPSBvcHRpb25zLmxpbWl0O1xuICBpZiAoIW9wdGlvbnMucmlzaW5nKSB7XG4gICAgbGluZWFyUHVsc2FyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wLnB1bHNhclRyYW5zaXRpb24pKGxpbmVhclB1bHNhci5zcGVlZCwgMCwgb3B0aW9ucy5udW1iZXJPZkludGVydmFscyk7XG4gIH0gZWxzZSB7XG4gICAgbGluZWFyUHVsc2FyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wLnJpc2luZ1RyYW5zaXRpb24pKGxpbmVhclB1bHNhci5zcGVlZCwgMCwgb3B0aW9ucy5udW1iZXJPZkludGVydmFscyk7XG4gIH1cblxuICBsaW5lYXJQdWxzYXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGluZWFyUHVsc2FyLnB1bHNhci5zdGFydChsaW5lYXJQdWxzYXIuaGFuZGxlKTtcbiAgfTtcblxuICBsaW5lYXJQdWxzYXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0b3AoKTtcbiAgfTtcblxuICBsaW5lYXJQdWxzYXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KShsaW5lYXJQdWxzYXIuc3ViamVjdCwgJ3NjYWxlJywgMSArIGN1cnJlbnQgKiAobGluZWFyUHVsc2FyLmxpbWl0IC0gMSkpO1xuICAgIGxpbmVhclB1bHNhci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyUHVsc2FyO1xufTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3B1bHNhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSB7fTtcbiAgcHJveHkuZ3JvdXAgPSBbXTtcblxuICBwcm94eS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBwcm94eS5ncm91cC5wdXNoKGVsZW1lbnQpO1xuICB9O1xuXG4gIHByb3h5LnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHByb3h5Lmdyb3VwLnNwbGljZShwcm94eS5ncm91cC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgfTtcblxuICBwcm94eS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcHJveHkuZ3JvdXBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgZWxlbWVudC5kcmF3KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSwgZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwcm94eS5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIG9iaiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50KG9iaiwgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzaHVmZmxlJywgZmFsc2UsIGZhbHNlKTtcblxuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHByb3h5LnNodWZmbGUgJiYgcHJveHkuY3VycmVudEVsZW1lbnRJbmRleCA9PT0gMCkge1xuICAgICAgcHJveHkuc2h1ZmZsZUdyb3VwKCk7XG4gICAgfVxuICAgIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50KHByb3h5Lmdyb3VwW3Byb3h5LmN1cnJlbnRFbGVtZW50SW5kZXhdLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4Kys7XG4gICAgaWYgKHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXggPj0gcHJveHkuZ3JvdXAubGVuZ3RoKSB7XG4gICAgICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcbiAgICB9XG4gIH07XG5cbiAgcHJveHkuc2h1ZmZsZUdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgIC8vVE9ETyBpbXBsZW1lbnQgc2h1ZmZsZSBhbGdvcml0aG1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5jcmVtZW50X3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcblxuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuICBwcm94eS5pbnRlcnZhbCA9IG9wdGlvbnMuaW50ZXJ2YWw7XG4gIHByb3h5LnRpbWVyID0gKDAsIF9pbnRlcnZhbF90aW1lcjIuZGVmYXVsdCkocHJveHkuaW50ZXJ2YWwpO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgcCA9ICgwLCBfaW5jcmVtZW50X3Byb3h5Mi5kZWZhdWx0KSh7fSk7XG4gICAgcC5ncm91cCA9IHByb3h5Lmdyb3VwO1xuICAgIHZhciBjaGFuZ2VQcm9wQ2FsbGJhY2sgPSBmdW5jdGlvbiBjaGFuZ2VQcm9wQ2FsbGJhY2soKSB7XG4gICAgICBwLnNldFByb3AobmFtZSwgdmFsdWUpO1xuICAgICAgcC5kcmF3KCk7XG4gICAgICBpZiAocC5jdXJyZW50RWxlbWVudEluZGV4ID09PSAwKSB7XG4gICAgICAgIHByb3h5LnRpbWVyLnJlbW92ZUxpc3RlbmVyKGNoYW5nZVByb3BDYWxsYmFjayk7XG4gICAgICAgIHAuZ3JvdXAgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gICAgcHJveHkudGltZXIuYWRkTGlzdGVuZXIoY2hhbmdlUHJvcENhbGxiYWNrKTtcbiAgfTtcblxuICBwcm94eS50aW1lci5zdGFydCgpO1xuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2ludGVydmFsX3RpbWVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90aW1lcnMvaW50ZXJ2YWxfdGltZXInKTtcblxudmFyIF9pbnRlcnZhbF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF90aW1lcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkgPSByZXF1aXJlKCcuL2luY3JlbWVudF9wcm94eScpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmNyZW1lbnRfcHJveHkpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsX3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2RlZmF1bHRfcHJveHkgPSByZXF1aXJlKCcuL2RlZmF1bHRfcHJveHknKTtcblxudmFyIF9kZWZhdWx0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmF1bHRfcHJveHkpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfaW50ZXJ2YWxfcHJveHkgPSByZXF1aXJlKCcuL2ludGVydmFsX3Byb3h5Jyk7XG5cbnZhciBfaW50ZXJ2YWxfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfcHJveHkpO1xuXG52YXIgX3JhbmRvbV9wcm94eSA9IHJlcXVpcmUoJy4vcmFuZG9tX3Byb3h5Jyk7XG5cbnZhciBfcmFuZG9tX3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wcm94eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3h5OiBfZGVmYXVsdF9wcm94eTIuZGVmYXVsdCxcbiAgaW5jcmVtZW50UHJveHk6IF9pbmNyZW1lbnRfcHJveHkyLmRlZmF1bHQsXG4gIGludGVydmFsUHJveHk6IF9pbnRlcnZhbF9wcm94eTIuZGVmYXVsdCxcbiAgcmFuZG9tUHJveHk6IF9yYW5kb21fcHJveHkyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm94aWVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciByYW5kb21FbGVtZW50SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcm94eS5ncm91cC5sZW5ndGgpO1xuICAgIHByb3h5Ll9zZXRQcm9wT2ZFbGVtZW50KHByb3h5Lmdyb3VwW3JhbmRvbUVsZW1lbnRJbmRleF0sIG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGludGVydmFsID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0eXBlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYnBtJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ21zJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Rpdmlzb3InLCBmYWxzZSwgMSk7XG5cbiAgaW50ZXJ2YWwudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgaW50ZXJ2YWwuYnBtID0gb3B0aW9ucy5icG07XG4gIGludGVydmFsLm1zID0gb3B0aW9ucy5tcztcbiAgaW50ZXJ2YWwuZGl2aXNvciA9IG9wdGlvbnMuZGl2aXNvcjtcblxuICBpZiAoaW50ZXJ2YWwuYnBtID09PSAwICYmIGludGVydmFsLm1zID09PSAwKSB7XG4gICAgdGhyb3cgJ0lsbGVnYWwgc3RhdGU6IEJQTSBhbmQgTVMgY2Fubm90IGJvdGggYmUgMCc7XG4gIH1cblxuICBpbnRlcnZhbC5nZW5lcmF0ZUhhbGZJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFsZkludGVydmFsID0ge307XG4gICAgaGFsZkludGVydmFsLnR5cGUgPSBpbnRlcnZhbC50eXBlO1xuICAgIGhhbGZJbnRlcnZhbC5icG0gPSBpbnRlcnZhbC5icG07XG4gICAgaGFsZkludGVydmFsLm1zID0gaW50ZXJ2YWwubXM7XG4gICAgaGFsZkludGVydmFsLmRpdmlzb3IgPSBpbnRlcnZhbC5kaXZpc29yICogMjtcblxuICAgIHJldHVybiBoYWxmSW50ZXJ2YWw7XG4gIH07XG5cbiAgaW50ZXJ2YWwuYmlzZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGludGVydmFsLmRpdmlzb3IgPSBpbnRlcnZhbC5kaXZpc29yICogMjtcbiAgfTtcblxuICBpbnRlcnZhbC5nZXRNcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW50ZXJ2YWwudHlwZSA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIGludGVydmFsLm1zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gNjAwMDAgLyBpbnRlcnZhbC5icG07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBpbnRlcnZhbDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsLmpzLm1hcFxuIiwiaW1wb3J0IGNvcHkgZnJvbSAnfi9pbnRlcm5hbC9jb3B5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gIHZhciBhYnN0cmFjdENvbXBvbmVudCA9IHt9O1xyXG4gIGFic3RyYWN0Q29tcG9uZW50Ll9jYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgYWJzdHJhY3RDb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spe1xyXG4gICAgaWYoIXRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdKXtcclxuICAgICAgdGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0gPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIGFic3RyYWN0Q29tcG9uZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKXtcclxuICAgICAgaWYodGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0pe1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xyXG4gICAgICAgIGlmKGluZGV4ID4gLTEpe1xyXG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGFic3RyYWN0Q29tcG9uZW50LnNlbmRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICBpZighdGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0pe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IodmFyIGNhbGxiYWNrIG9mIHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdKXtcclxuICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhYnN0cmFjdENvbXBvbmVudC5nZXRDb3B5ID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBjb3B5KHRoaXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBhYnN0cmFjdENvbXBvbmVudDtcclxufVxyXG4iLCJpbXBvcnQgbGluZWFyUHVsc2FyIGZyb20gJ34vbW9kaWZpY2F0b3JzL3NjYWxlL2xpbmVhcl9wdWxzYXInO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XHJcblxyXG4gIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMgPSAxO1xyXG4gIG9wdGlvbnMubGltaXQgPSAwO1xyXG4gIG9wdGlvbnMucmlzaW5nID0gdHJ1ZTtcclxuICBvcHRpb25zLmNlbnRlcklmUG9zc2libGUgPSB0cnVlO1xyXG4gIHZhciB6b29tZXIgPSBsaW5lYXJQdWxzYXIob3B0aW9ucyk7XHJcblxyXG4gIHZhciB6b29tT3V0ID0ge307XHJcbiAgem9vbU91dC5zdGFydCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB6b29tZXIuc3RhcnQoKTtcclxuICB9O1xyXG5cclxuICB6b29tT3V0LnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgem9vbWVyLnN0b3AoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gem9vbU91dDtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RDb21wb25lbnQgZnJvbSAnfi9hYnN0cmFjdF9jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIC8qIFByaXZhdGUgdmFycyAqL1xyXG4gICAgICB2YXIgY29tcG9uZW50ID0gYWJzdHJhY3RDb21wb25lbnQoKTtcclxuXHJcbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXHJcbiAgICAgIGNvbXBvbmVudC52aWV3ID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XHJcbiAgICAgIGNvbXBvbmVudC5zY2FsZSA9IDE7XHJcblxyXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgICAvKiBQYXJhbWV0ZXJzICovXHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjaXJjbGVTaGFwZScsIHRydWUpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcclxuXHJcbiAgICAgIC8qIFByaXZhdGUgdmFycyAqL1xyXG4gICAgICB2YXIgY2lyY2xlID0gYWJzdHJhY3RTaGFwZSgpO1xyXG5cclxuICAgICAgLyogcHVibGljIHByb3BlcnRpZXMgKi9cclxuICAgICAgY2lyY2xlLmNpcmNsZVNoYXBlID0gb3B0aW9ucy5jaXJjbGVTaGFwZTtcclxuICAgICAgY2lyY2xlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuXHJcbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXHJcbiAgICAgIGNpcmNsZS5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmNvbG9yKS5kcmF3Q2lyY2xlKDAsIDAsIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjaXJjbGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUgKiAyO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY2lyY2xlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSAqIDI7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvKiBpbml0ICovXHJcbiAgICAgIGNpcmNsZS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBjaXJjbGU7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IGNyZWF0ZWpzLkNvbnRhaW5lcigpO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5pbXBvcnQgcGF0aERyYXdlciBmcm9tICcuL2hlbHBlci9wYXRoX2RyYXdlcic7XHJcbmltcG9ydCBhZGRVcFBvaW50cyBmcm9tICd+L2dlb21ldHJ5L2FkZF91cF9wb2ludHMnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cclxuICB2YXIgY3VzdG9tID0gYWJzdHJhY3RTaGFwZSgpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjdXN0b21TaGFwZScsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG4gIGN1c3RvbS5jdXN0b21TaGFwZSA9IG9wdGlvbnMuY3VzdG9tU2hhcGU7XHJcbiAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuXHJcbiAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmNvbG9yKS5iZWdpblN0cm9rZSgnIzAwRicpLm1vdmVUbygwLCAwKTtcclxuICAgIHZhciBjdXJyZW50ID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwXHJcbiAgICB9O1xyXG4gICAgdmFyIGkgPSAxO1xyXG4gICAgZm9yICh2YXIgcGF0aCBvZiB0aGlzLmN1c3RvbVNoYXBlLnBhdGguc3ViUGF0aHMpIHtcclxuICAgICAgcGF0aERyYXdlcltwYXRoLnR5cGVdKHRoaXMudmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XHJcbiAgICAgIGN1cnJlbnQgPSBhZGRVcFBvaW50cyhjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcclxuICAgICAgaSsrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGN1c3RvbS5kcmF3KCk7XHJcbiAgcmV0dXJuIGN1c3RvbTtcclxufVxyXG4iLCJpbXBvcnQgYW5nbGVUb1JhZGlhbnMgZnJvbSAnfi9nZW9tZXRyeS9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucyc7XHJcbi8qZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlKi9cclxuZnVuY3Rpb24gcGF0aERyYXdlcigpe31cclxuXHJcbnBhdGhEcmF3ZXIubGluZSA9IGZ1bmN0aW9uKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KXtcclxuICBncmFwaGljcy5saW5lVG8oY3VycmVudC54ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS54LCBjdXJyZW50LnkgKyBwYXRoLmdldEVkZ2VQb2ludCgpLnkpO1xyXG59O1xyXG5cclxucGF0aERyYXdlci5hcmMgPSBmdW5jdGlvbihncmFwaGljcywgcGF0aCwgY3VycmVudCl7XHJcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcclxuICBpZihwYXRoLmRlZ3JlZXMgPCAwKXtcclxuICAgIGdyYXBoaWNzLmFyYyhwYXRoLnN0YXJ0LngsIHBhdGguc3RhcnQueSAtIHBhdGgucmFkaXVzLCBwYXRoLnJhZGl1cywgYW5nbGVUb1JhZGlhbnMoOTApLCBhbmdsZVRvUmFkaWFucyg5MCArIHBhdGguZGVncmVlcyksIHRydWUpO1xyXG4gIH1lbHNle1xyXG4gICAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55ICsgcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCBhbmdsZVRvUmFkaWFucygtOTApLCBhbmdsZVRvUmFkaWFucyhwYXRoLmRlZ3JlZXMgLSA5MCkpO1xyXG4gIH1cclxufTtcclxuXHJcbnBhdGhEcmF3ZXIuc2luZV93YXZlID0gZnVuY3Rpb24oZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpe1xyXG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XHJcbiAgZm9yKHZhciB4ID0gMDsgeCA8IHBhdGguZ2V0TGVuZ3RoKCk7IHggKz0gNSl7XHJcbiAgICB2YXIgcG9pbnQgPSBwYXRoLmdldFBvaW50KHggLyBwYXRoLmdldExlbmd0aCgpKTtcclxuICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcclxuICB9XHJcbn07XHJcblxyXG5wYXRoRHJhd2VyLmJlemllcl9jdXJ2ZSA9IGZ1bmN0aW9uKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KXtcclxuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xyXG4gIGlmKHBhdGguY3BvaW50Mil7XHJcbiAgICBncmFwaGljcy5iZXppZXJDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5jcG9pbnQyLngsIHBhdGguY3BvaW50Mi55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcclxuICB9ZWxzZXtcclxuICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXRoRHJhd2VyO1xyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5pbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xyXG5cclxuICB2YXIgaW1hZ2UgPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgaW1hZ2UudmlldyA9IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpO1xyXG5cclxuXHJcbiAgaW1hZ2UuZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy52aWV3LnNjYWxlWCA9IHRoaXMuc2NhbGU7XHJcbiAgICB0aGlzLnZpZXcuc2NhbGVZID0gdGhpcy5zY2FsZTtcclxuICB9O1xyXG5cclxuICBpbWFnZS5kcmF3KCk7XHJcbiAgcmV0dXJuIGltYWdlO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICAgIHZhciBsaW5lID0gYWJzdHJhY3RTaGFwZSgpO1xyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2xpbmVQYXRoJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICd0aGlja25lc3MnLCBmYWxzZSwgMSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG5cclxuICAgICAgbGluZS5wYXRoID0gb3B0aW9ucy5saW5lUGF0aDtcclxuICAgICAgbGluZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcbiAgICAgIGxpbmUudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3M7XHJcblxyXG4gICAgICBsaW5lLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzXHJcbiAgICAgICAgICAgIC5jbGVhcigpXHJcbiAgICAgICAgICAgIC5iZWdpblN0cm9rZSh0aGlzLmNvbG9yKVxyXG4gICAgICAgICAgICAuc2V0U3Ryb2tlU3R5bGUodGhpcy50aGlja25lc3MgKiB0aGlzLnNjYWxlKVxyXG4gICAgICAgICAgICAubW92ZVRvKHRoaXMucGF0aC5zdGFydC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLnN0YXJ0LnkgKiB0aGlzLnNjYWxlKVxyXG4gICAgICAgICAgICAubGluZVRvKHRoaXMucGF0aC5lbmQueCAqIHRoaXMuc2NhbGUsIHRoaXMucGF0aC5lbmQueSAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGluZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnBhdGguZW5kLnggLSB0aGlzLnBhdGguc3RhcnQueCkgKiB0aGlzLnNjYWxlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGluZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wYXRoLmVuZC55IC0gdGhpcy5wYXRoLnN0YXJ0LnkpICogdGhpcy5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICBsaW5lLmRyYXcoKTtcclxuICAgICAgcmV0dXJuIGxpbmU7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaWQpIHtcclxuICAgIHZhciBzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShpZCk7XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lciA9IHt9O1xyXG5cclxuICAgIGNvbnRhaW5lci5hZGQgPSBmdW5jdGlvbihjaGlsZCl7XHJcbiAgICAgIHN0YWdlLmFkZENoaWxkKGNoaWxkLnZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIucmVtb3ZlID0gZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICBzdGFnZS5yZW1vdmVDaGlsZChjaGlsZC52aWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHN0YWdlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5zdGFnZSA9IHN0YWdlO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBwYXRoRHJhd2VyIGZyb20gJy4vaGVscGVyL3BhdGhfZHJhd2VyJztcclxuaW1wb3J0IGFkZFVwUG9pbnRzIGZyb20gJ34vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cyc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgaWYoIW9wdGlvbnMpe1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCAxKTtcclxuXHJcbiAgICAgIHZhciBjdXN0b20gPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgICAgIGN1c3RvbS5jb21wbGV0ZVBhdGggPSBvcHRpb25zLnBhdGg7XHJcbiAgICAgIGN1c3RvbS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcbiAgICAgIGN1c3RvbS53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcblxyXG4gICAgICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpblN0cm9rZSh0aGlzLmNvbG9yKS5zZXRTdHJva2VTdHlsZSh0aGlzLndpZHRoKS5tb3ZlVG8oMCwgMCk7XHJcbiAgICAgICAgICB2YXIgY3VycmVudCA9IHt4OiAwLCB5OiAwfTtcclxuICAgICAgICAgIHZhciBpID0gMTtcclxuICAgICAgICAgIGZvcih2YXIgcGF0aCBvZiB0aGlzLmNvbXBsZXRlUGF0aC5zdWJQYXRocyl7XHJcbiAgICAgICAgICAgIHBhdGhEcmF3ZXJbcGF0aC50eXBlXSh0aGlzLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gYWRkVXBQb2ludHMoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGN1c3RvbS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBjdXN0b207XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyZWN0YW5nbGVTaGFwZScsIHRydWUpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcclxuXHJcbiAgICAgIHZhciByZWN0ID0gYWJzdHJhY3RTaGFwZSgpO1xyXG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcclxuICAgICAgcmVjdC5oZWlnaHQgPSBvcHRpb25zLnJlY3RhbmdsZVNoYXBlLmhlaWdodDtcclxuICAgICAgcmVjdC5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcblxyXG4gICAgICByZWN0LmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVjdC5nZXRXaWR0aCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVjdC5nZXRIZWlnaHQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWN0LmRyYXcoKTtcclxuICAgICAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5mdW5jdGlvbiBzcXVhcmVDb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuXHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzcXVhcmVTaGFwZScsIHRydWUpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcclxuXHJcbiAgICAgIHZhciBzcXVhcmUgPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgICAgIHNxdWFyZS5zcXVhcmVTaGFwZSA9IG9wdGlvbnMuc3F1YXJlU2hhcGU7XHJcbiAgICAgIHNxdWFyZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcblxyXG4gICAgICBzcXVhcmUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd1JlY3QoMCwgMCwgdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZSwgdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzcXVhcmUuZ2V0V2lkdGggPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxdWFyZVNoYXBlLnNpZGVsZW5ndGggKiB0aGlzLnNjYWxlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc3F1YXJlLmdldEhlaWdodCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzcXVhcmUuZHJhdygpO1xyXG4gICAgICByZXR1cm4gc3F1YXJlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcXVhcmVDb25zdHJ1Y3RvcjtcclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xyXG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cclxuICAgICAgaGFuZGxlVmlkZW9Tb3VyY2UoKTtcclxuXHJcbiAgICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgICB2YXIgdmlkZW8gPSBhYnN0cmFjdFNoYXBlKCk7XHJcblxyXG4gICAgICAvKiBwdWJsaWMgcHJvcGVydGllcyAqL1xyXG4gICAgICB2aWRlby52aWV3ID0gbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSk7XHJcbiAgICAgIHZpZGVvLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xyXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgICB2aWRlby5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnZpZXcuc2NhbGVYID0gdmlkZW8uc2NhbGU7XHJcbiAgICAgICAgdGhpcy52aWV3LnNjYWxlWSA9IHZpZGVvLnNjYWxlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmlkZW8ucGxheSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UucGxheSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmlkZW8uc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UucGF1c2UoKTtcclxuICAgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5wYXVzZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zb3VyY2UucGF1c2UoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8qIHByaXZhdGUgZnVuY3Rpb25zICovXHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVZpZGVvU291cmNlKCl7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNvdXJjZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcclxuICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9wdGlvbnMuc291cmNlKTtcclxuICAgICAgICAgIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgICAgdmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZSk7XHJcbiAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9IHZpZGVvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGluaXQgKi9cclxuICAgICAgdmlkZW8uZHJhdygpO1xyXG4gICAgICByZXR1cm4gdmlkZW87XHJcbn1cclxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcclxuaW1wb3J0IFNxdWFyZSBmcm9tICcuL2NvbXBvbmVudHMvc3F1YXJlJztcclxuaW1wb3J0IENpcmNsZSBmcm9tICcuL2NvbXBvbmVudHMvY2lyY2xlJztcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVjdGFuZ2xlJztcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJztcclxuaW1wb3J0IExpbmUgZnJvbSAnLi9jb21wb25lbnRzL2xpbmUnO1xyXG5pbXBvcnQgQ3VzdG9tT2JqZWN0IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8nO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL2NvbXBvbmVudHMvcGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG57XHJcbiAgICBjb250YWluZXI6IENvbnRhaW5lcixcclxuICAgIHNxdWFyZTogU3F1YXJlLFxyXG4gICAgY2lyY2xlOiBDaXJjbGUsXHJcbiAgICByZWN0YW5nbGU6IFJlY3RhbmdsZSxcclxuICAgIGxpbmU6IExpbmUsXHJcbiAgICBjdXN0b21PYmplY3Q6IEN1c3RvbU9iamVjdCxcclxuICAgIG1haW5Db250YWluZXI6IE1haW5Db250YWluZXIsXHJcbiAgICBpbWFnZTogSW1hZ2UsXHJcbiAgICB2aWRlbzogVmlkZW8sXHJcbiAgICBwYXRoOiBQYXRoXHJcbn07XHJcbiIsImltcG9ydCBsb29wIGZyb20gJ34vbG9vcCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJ34vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknO1xyXG5pbXBvcnQgYWJzdHJhY3RDb21wb25lbnQgZnJvbSAnfi9hYnN0cmFjdF9jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIHZhciBmaWx0ZXIgPSBhYnN0cmFjdENvbXBvbmVudCgpO1xyXG5cclxuICAgIGZpbHRlci52aWV3ID0gZmFjdG9yeS5jb250YWluZXIoKTtcclxuXHJcbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXHJcbiAgICBmdW5jdGlvbiBzdGFydCgpe1xyXG4gICAgICBsb29wLmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcCgpe1xyXG4gICAgICBsb29wLnJlbW92ZUFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RGaWx0ZXIgZnJvbSAnfi9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjaGlsZHJlbil7XHJcbiAgICB2YXIgYWJzdHJhY3RHcm91cCA9IGFic3RyYWN0RmlsdGVyKCk7XHJcblxyXG4gICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcclxuXHJcbiAgICBhYnN0cmFjdEdyb3VwLmFkZCA9IGZ1bmN0aW9uKGNoaWxkKXtcclxuICAgICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFic3RyYWN0R3JvdXAucmVtb3ZlID0gZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLnNwbGljZShhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpLCAxKTtcclxuICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhYnN0cmFjdEdyb3VwO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdEdyb3VwIGZyb20gJy4vYWJzdHJhY3RfZ3JvdXAnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICd+L2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5JztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbHVtbnMnLCBmYWxzZSwgMyk7XHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlLCAxMCk7XHJcblxyXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gYWJzdHJhY3RHcm91cChvcHRpb25zLmNoaWxkcmVuKTtcclxuXHJcbiAgICByZWN0YW5nbGVHcm91cC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xyXG4gICAgcmVjdGFuZ2xlR3JvdXAuc3BhY2luZyA9IG9wdGlvbnMuc3BhY2luZztcclxuXHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICB2YXIgY29udGFpbmVyID0gZmFjdG9yeS5jb250YWluZXIoKTtcclxuICAgICAgY29udGFpbmVyLmFkZENoaWxkKHJlY3RhbmdsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xyXG4gICAgICBjb250YWluZXIueCA9IChpICUgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xyXG4gICAgICBjb250YWluZXIueSA9IE1hdGguZmxvb3IoaSAvIHJlY3RhbmdsZUdyb3VwLmNvbHVtbnMpICogcmVjdGFuZ2xlR3JvdXAuc3BhY2luZztcclxuICAgICAgcmVjdGFuZ2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWN0YW5nbGVHcm91cDtcclxufVxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmlsdGVyKXtcclxuXHJcbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXHJcbiAgICBmdW5jdGlvbiBzdGFydCgpe1xyXG4gICAgICB0aGlzLm1vZGlmaWNhdG9yLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcCgpe1xyXG4gICAgICB0aGlzLm1vZGlmaWNhdG9yLnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcclxuICAgIGZpbHRlci5zdG9wID0gc3RvcDtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyO1xyXG59XHJcbiIsImltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpe1xyXG5cclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xyXG5cclxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgZmlsdGVyLl9jaGlsZCA9IG9wdGlvbnMuY2hpbGQ7XHJcblxyXG4gICAgLyogY2FsbGJhY2tzICovXHJcbiAgICBmaWx0ZXIuX19vblByb3BlcnR5Q2hhbmdlID0gKCkgPT57XHJcbiAgICAgIGlmKHRoaXMub25Qcm9wZXJ0eUNoYW5nZSl7XHJcbiAgICAgICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZW5kRXZlbnQoJ3Byb3BlcnR5X2NoYW5nZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiBtZXRob2RzICovXHJcbiAgICBmaWx0ZXIuc2V0Q2hpbGQgPSBmdW5jdGlvbihuZXdDaGlsZCl7XHJcbiAgICAgIGlmKHRoaXMuX2NoaWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICAgIHRoaXMuX2NoaWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5X2NoYW5nZScsIHRoaXMuX19vblByb3BlcnR5Q2hhbmdlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICBpZih0aGlzLl9jaGlsZC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgICB0aGlzLl9jaGlsZC5hZGRFdmVudExpc3RlbmVyKCdwcm9wZXJ0eV9jaGFuZ2UnLCB0aGlzLl9fb25Qcm9wZXJ0eUNoYW5nZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMuX2NoaWxkLnZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmaWx0ZXIuZ2V0Q2hpbGQgPSBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2hpbGQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIGluaXQgKi9cclxuICAgIGZpbHRlci5zZXRDaGlsZChvcHRpb25zLmNoaWxkKTtcclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnfi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmlsdGVyLCBvcHRpb25zKXtcclxuXHJcbiAgICAvKiBQYXJhbWV0ZXJzICovXHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcclxuXHJcbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cclxuICAgIGZpbHRlci5fZmlsdGVyVHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ob3B0aW9ucy5pbnRlcnZhbCwgMC41KTtcclxuXHJcbiAgICAvKiBQdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgZmlsdGVyLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5fZmlsdGVyVHJhbnNpdGlvbi5zdGFydCh0aGlzLmhhbmRsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbHRlci5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy5fZmlsdGVyVHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocG9pbnQxLCBwb2ludDIpe1xyXG4gIHZhciBwb2ludCA9IHt9O1xyXG4gIHBvaW50LnggPSBwb2ludDEueCArIHBvaW50Mi54O1xyXG4gIHBvaW50LnkgPSBwb2ludDEueSArIHBvaW50Mi55O1xyXG4gIHJldHVybiBwb2ludDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2ZWN0b3IxLCB2ZWN0b3IyKXtcclxuICBpZih2ZWN0b3IxLmxlbmd0aCAhPT0gdmVjdG9yMi5sZW5ndGgpe1xyXG4gICAgdGhyb3cgJ0Nhbm5vdCBjYWxjdWxhdGUgZGlzdGFuY2Ugb2YgdmVjdG9ycyB3aXRoIGRpZmZlcmVudCBudW1iZXJzIG9mIGRpbWVuc2lvbnMnO1xyXG4gIH1cclxuICB2YXIgZGlzdGFuY2UgPSAwO1xyXG4gIGZvcih2YXIgaSA9IDA7IGkgPCB2ZWN0b3IxLmxlbmd0aDsgaSsrKXtcclxuICAgIGRpc3RhbmNlICs9IE1hdGgucG93KHZlY3RvcjFbaV0gLSB2ZWN0b3IyW2ldLCAyKTtcclxuICB9XHJcbiAgcmV0dXJuIE1hdGguc3FydChkaXN0YW5jZSk7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW5nbGUpe1xyXG4gIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuIiwiaW1wb3J0IGFuZ2xlVG9SYWRpYW5zIGZyb20gJy4vYW5nbGVfdG9fcmFkaWFucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhbmdsZSwgbGVuZ3RoKXtcclxuICB2YXIgcmFkID0gYW5nbGVUb1JhZGlhbnMoYW5nbGUpO1xyXG4gIHJldHVybiB7IHg6IE1hdGguY29zKHJhZCkgKiBsZW5ndGgsIHk6IE1hdGguc2luKHJhZCkgKiBsZW5ndGh9O1xyXG59XHJcbiIsImltcG9ydCBhbmdsZVRvUmFkaWFucyBmcm9tICd+L2dlb21ldHJ5L2hlbHBlci9hbmdsZV90b19yYWRpYW5zJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFyY0NvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cclxuICAvLyBQYXJhbWV0ZXJzXHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2RlZ3JlZXMnLCB0cnVlKTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XHJcblxyXG4gIC8vIHByaXZhdGUgdmFyc1xyXG4gIHZhciBhcmMgPSB7fTtcclxuXHJcbiAgYXJjLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcclxuICBhcmMuZGVncmVlcyA9IG9wdGlvbnMuZGVncmVlcztcclxuICBhcmMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XHJcbiAgYXJjLnR5cGUgPSAnYXJjJztcclxuXHJcbiAgLy8gcHVibGljIGZ1bmN0aW9uc1xyXG4gIGFyYy5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGFyYy5nZXRQb2ludCgxKTtcclxuICB9O1xyXG5cclxuICBhcmMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBNYXRoLmFicygyICogTWF0aC5QSSAqIGFyYy5yYWRpdXMgKiAoIGFyYy5kZWdyZWVzIC8gMzYwICkpO1xyXG4gIH07XHJcblxyXG4gIGFyYy5nZXRQb2ludCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBvcmlnaW4gPSB7eDogYXJjLnN0YXJ0LngsIHk6IGFyYy5zdGFydC55IH07XHJcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IGFyYy5kZWdyZWVzICogcHJvZ3Jlc3M7XHJcblxyXG4gICAgaWYoYXJjLmRlZ3JlZXMgPCAwKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBvcmlnaW4ueCArIGFyYy5yYWRpdXMgKiBNYXRoLnNpbihhbmdsZVRvUmFkaWFucygtcGFydE9mRGVncmVlcykpLFxyXG4gICAgICAgIHk6IG9yaWdpbi55IC0gYXJjLnJhZGl1cyArIGFyYy5yYWRpdXMgKiBNYXRoLmNvcyhhbmdsZVRvUmFkaWFucyhwYXJ0T2ZEZWdyZWVzKSlcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBvcmlnaW4ueCArIGFyYy5yYWRpdXMgKiBNYXRoLnNpbihhbmdsZVRvUmFkaWFucyhwYXJ0T2ZEZWdyZWVzKSksXHJcbiAgICAgIHk6IG9yaWdpbi55ICsgYXJjLnJhZGl1cyArIGFyYy5yYWRpdXMgKiAtTWF0aC5jb3MoYW5nbGVUb1JhZGlhbnMocGFydE9mRGVncmVlcykpXHJcbiAgICB9O1xyXG5cclxuICB9O1xyXG5cclxuICBhcmMuc3ViUGF0aHMgPSBbYXJjXTtcclxuXHJcbiAgYXJjLmdldEFuZ2xlID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgcmV0dXJuIGFuZ2xlVG9SYWRpYW5zKGFyYy5kZWdyZWVzICogcHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIGFyYy5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcclxuICAgIHJldHVybiBhcmNDb25zdHJ1Y3Rvcih7c3RhcnQ6IGFyYy5zdGFydCwgZGVncmVlczogcGFydE9mRGVncmVlcywgcmFkaXVzOiBhcmMucmFkaXVzfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGFyYztcclxufVxyXG4iLCJpbXBvcnQgQmV6aWVyIGZyb20gJ2Jlemllci1qcyc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjcG9pbnQxJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2Nwb2ludDInLCBmYWxzZSk7XHJcblxyXG4gIHZhciBiZXppZXJDdXJ2ZSA9IHt9O1xyXG4gIGJlemllckN1cnZlLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcclxuICBiZXppZXJDdXJ2ZS5lbmQgPSBvcHRpb25zLmVuZDtcclxuICBiZXppZXJDdXJ2ZS5jcG9pbnQxID0gb3B0aW9ucy5jcG9pbnQxO1xyXG4gIGJlemllckN1cnZlLmNwb2ludDIgPSBvcHRpb25zLmNwb2ludDI7XHJcbiAgYmV6aWVyQ3VydmUudHlwZSA9ICdiZXppZXJfY3VydmUnO1xyXG5cclxuICBpZihiZXppZXJDdXJ2ZS5jcG9pbnQyKXtcclxuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IEJlemllcihiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuY3BvaW50MiwgYmV6aWVyQ3VydmUuZW5kKTtcclxuICB9ZWxzZXtcclxuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IEJlemllcihiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuZW5kKTtcclxuICB9XHJcblxyXG4gIGJlemllckN1cnZlLnN1YlBhdGhzID0gW2JlemllckN1cnZlXTtcclxuXHJcbiAgYmV6aWVyQ3VydmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5lbmQ7XHJcbiAgfTtcclxuXHJcbiAgYmV6aWVyQ3VydmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5sZW5ndGgoKTtcclxuICB9O1xyXG5cclxuICBiZXppZXJDdXJ2ZS5nZXRQb2ludCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5nZXQocHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIC8vVE9ETyBBZGQgZ2V0IHBhcnQgcGF0aCBmdW5jdGlvblxyXG5cclxuICByZXR1cm4gYmV6aWVyQ3VydmU7XHJcbn1cclxuIiwiaW1wb3J0IHRvVmVjdG9yIGZyb20gJ34vZ2VvbWV0cnkvdG9fdmVjdG9yJztcclxuaW1wb3J0IGRpc3RhbmNlIGZyb20gJ34vZ2VvbWV0cnkvZGlzdGFuY2UnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGluZUNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cclxuY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcbmNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcclxuXHJcbiAgdmFyIGxpbmUgPSB7fTtcclxuICBsaW5lLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcclxuICBsaW5lLmVuZCA9IG9wdGlvbnMuZW5kO1xyXG4gIGxpbmUudHlwZSA9ICdsaW5lJztcclxuXHJcbiAgbGluZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGxpbmUuZW5kO1xyXG4gIH07XHJcblxyXG4gIGxpbmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBkaXN0YW5jZSh0b1ZlY3RvcihsaW5lLnN0YXJ0KSwgdG9WZWN0b3IobGluZS5lbmQpKTtcclxuICB9O1xyXG5cclxuICBsaW5lLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB4OiBsaW5lLnN0YXJ0LnggKyAobGluZS5lbmQueCAtIGxpbmUuc3RhcnQueCkgKiBwcm9ncmVzcyxcclxuICAgICAgICAgICAgICB5OiBsaW5lLnN0YXJ0LnkgKyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSkgKiBwcm9ncmVzc1xyXG4gICAgICAgICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbGluZS5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBuZXdFbmQgPSB7IHg6IGxpbmUuZW5kLnggKiBwcm9ncmVzcywgeTogbGluZS5lbmQueSAqIHByb2dyZXNzfTtcclxuICAgIHZhciBwYXRoUGFydCA9IGxpbmVDb25zdHJ1Y3Rvcih7c3RhcnQ6IGxpbmUuc3RhcnQsIGVuZDogbmV3RW5kfSk7XHJcbiAgICByZXR1cm4gcGF0aFBhcnQ7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxpbmU7XHJcbn1cclxuIiwiaW1wb3J0IGFkZFVwUG9pbnRzIGZyb20gJ34vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXRoQ29uc3RydWN0b3IoKXtcclxuXHJcbiAgdmFyIHBhdGggPSB7fTtcclxuXHJcbiAgcGF0aC5zdWJQYXRocyA9IFtdO1xyXG5cclxuICBwYXRoLmdldEVkZ2VQb2ludHMgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGVkZ2VQb2ludHMgPSBbXTtcclxuICAgIGVkZ2VQb2ludHMucHVzaCh7eDogMCwgeTogMH0pO1xyXG4gICAgZm9yKHZhciBzdWJQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBlZGdlUG9pbnRzLnB1c2goYWRkVXBQb2ludHMoZWRnZVBvaW50c1tlZGdlUG9pbnRzLmxlbmd0aCAtIDFdLCBzdWJQYXRoLmdldEVkZ2VQb2ludCgpKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWRnZVBvaW50cztcclxuICB9O1xyXG5cclxuICBwYXRoLmdldFN0YXJ0UG9pbnRPZiA9IGZ1bmN0aW9uKHN1YlBhdGgpe1xyXG4gICAgdmFyIHN0YXJ0UG9pbnQgPSAoe3g6IDAsIHk6IDB9KTtcclxuXHJcbiAgICBmb3IodmFyIGN1cnJlbnRQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBpZihjdXJyZW50UGF0aCA9PT0gc3ViUGF0aCl7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0UG9pbnQ7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHN0YXJ0UG9pbnQgPSBhZGRVcFBvaW50cyhzdGFydFBvaW50LCBjdXJyZW50UGF0aC5nZXRFZGdlUG9pbnQoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwYXRoLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xyXG4gICAgZm9yKHZhciBzdWJQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBpZihsZW5ndGhQb2ludCA+IHN1YlBhdGguZ2V0TGVuZ3RoKCkpe1xyXG4gICAgICAgIGxlbmd0aFBvaW50IC09IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBhZGRVcFBvaW50cyhzdWJQYXRoLmdldFBvaW50KChsZW5ndGhQb2ludCAvIHN1YlBhdGguZ2V0TGVuZ3RoKCkpICksIHBhdGguZ2V0U3RhcnRQb2ludE9mKHN1YlBhdGgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHBhdGguZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciBsZW5ndGggPSAwO1xyXG4gICAgZm9yKHZhciBzdWJQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBsZW5ndGggKz0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgcGF0aC5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBuZXdTdWJQYXRocyA9IFtdO1xyXG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xyXG4gICAgdmFyIHN1YlBhdGhzUmV0cmlldmVkID0gZmFsc2U7XHJcbiAgICB2YXIgY3VycmVudFBhdGggPSAwO1xyXG5cclxuICAgIHdoaWxlKCFzdWJQYXRoc1JldHJpZXZlZCl7XHJcbiAgICAgIGlmKGxlbmd0aFBvaW50ID4gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpe1xyXG4gICAgICAgIGxlbmd0aFBvaW50IC09IHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpO1xyXG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2gocGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoMSkpO1xyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggKyAxO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBuZXdTdWJQYXRocy5wdXNoKHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldFBhcnRQYXRoKChsZW5ndGhQb2ludCAvIHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSkpO1xyXG4gICAgICAgIHN1YlBhdGhzUmV0cmlldmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXJ0UGF0aCA9IHBhdGhDb25zdHJ1Y3RvcigpO1xyXG4gICAgcGFydFBhdGguc3ViUGF0aHMgPSBuZXdTdWJQYXRocztcclxuICAgIHJldHVybiBwYXJ0UGF0aDtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvaW50LCBhbmdsZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgICAgeDogcG9pbnQueCAqIE1hdGguY29zKGFuZ2xlKSAtIHBvaW50LnkgKiBNYXRoLnNpbihhbmdsZSksXHJcbiAgICAgIHk6IHBvaW50LnggKiBNYXRoLnNpbihhbmdsZSkgKyBwb2ludC55ICogTWF0aC5jb3MoYW5nbGUpXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwb2ludCl7XHJcbiAgcmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwYXJhbWV0ZXJPYmplY3QsIG9wdGlvbiwgcmVxdWlyZWQsIGRlZmF1bHRWYWx1ZSl7XHJcbiAgaWYoIXJlcXVpcmVkKXtcclxuICAgIHBhcmFtZXRlck9iamVjdFtvcHRpb25dID0gcGFyYW1ldGVyT2JqZWN0Lmhhc093blByb3BlcnR5KG9wdGlvbikgPyBwYXJhbWV0ZXJPYmplY3Rbb3B0aW9uXSA6IGRlZmF1bHRWYWx1ZTtcclxuICB9ZWxzZXtcclxuICAgIGlmKCFwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSApe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgb3B0aW9uOicgKyBvcHRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcmlnaW5hbE9iamVjdCwgY2lyY3VsYXIpe1xyXG4gIC8vIEZpcnN0IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3Qgd2l0aFxyXG4gIC8vIHNhbWUgcHJvdG90eXBlIG9mIG91ciBvcmlnaW5hbCBzb3VyY2VcclxuXHJcbiAgdmFyIHByb3BlcnR5SW5kZXgsXHJcbiAgICAgIGRlc2NyaXB0b3IsXHJcbiAgICAgIGtleXMsXHJcbiAgICAgIGN1cnJlbnQsXHJcbiAgICAgIG5leHRTb3VyY2UsXHJcbiAgICAgIGluZGV4T2YsXHJcbiAgICAgIGNvcGllcyA9IFsge1xyXG4gICAgICAgICAgc291cmNlOiBvcmlnaW5hbE9iamVjdCxcclxuICAgICAgICAgIHRhcmdldDogT2JqZWN0LmNyZWF0ZSggT2JqZWN0LmdldFByb3RvdHlwZU9mKCBvcmlnaW5hbE9iamVjdCApIClcclxuICAgICAgfSBdLFxyXG4gICAgICBjbG9uZU9iamVjdCA9IGNvcGllc1sgMCBdLnRhcmdldCxcclxuICAgICAgc291cmNlUmVmZXJlbmNlcyA9IFsgb3JpZ2luYWxPYmplY3QgXSxcclxuICAgICAgdGFyZ2V0UmVmZXJlbmNlcyA9IFsgY2xvbmVPYmplY3QgXTtcclxuXHJcbiAgLy8gRmlyc3QgaW4sIGZpcnN0IG91dFxyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgd2hpbGUgKCBjdXJyZW50ID0gY29waWVzLnNoaWZ0KCkgKXtcclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBjdXJyZW50LnNvdXJjZSApO1xyXG5cclxuICAgICAgZm9yICggcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCBrZXlzLmxlbmd0aDsgcHJvcGVydHlJbmRleCsrIClcclxuICAgICAge1xyXG4gICAgICAgICAgLy8gU2F2ZSB0aGUgc291cmNlJ3MgZGVzY3JpcHRvclxyXG4gICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIGN1cnJlbnQuc291cmNlLCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0pO1xyXG5cclxuICAgICAgICAgIGlmICggIWRlc2NyaXB0b3IudmFsdWUgfHwgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09ICdvYmplY3QnIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIGN1cnJlbnQudGFyZ2V0LCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0sIGRlc2NyaXB0b3IgKTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIENVU1RPTTogV2UgZG9uJ3QgbmVldCB0byBkZWVwIGNvcHkgb2JqZWN0cywgd2hpY2ggZ290IGEgY2xvbmUgbWV0aG9kXHJcbiAgICAgICAgICBpZih0eXBlb2YgZGVzY3JpcHRvci52YWx1ZS5jbG9uZSAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5jbG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1cnJlbnQudGFyZ2V0LCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0sIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5leHRTb3VyY2UgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG5cclxuICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBBcnJheS5pc0FycmF5KCBuZXh0U291cmNlICkgP1xyXG4gICAgICAgICAgICAgIFtdIDpcclxuICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIG5leHRTb3VyY2UgKSApO1xyXG5cclxuICAgICAgICAgIGlmICggY2lyY3VsYXIgKXtcclxuICAgICAgICAgICAgICBpbmRleE9mID0gc291cmNlUmVmZXJlbmNlcy5pbmRleE9mKCBuZXh0U291cmNlICk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICggaW5kZXhPZiAhPT0gLTEgKVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLy8gVGhlIHNvdXJjZSBpcyBhbHJlYWR5IHJlZmVyZW5jZWQsIGp1c3QgYXNzaWduIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gdGFyZ2V0UmVmZXJlbmNlc1sgaW5kZXhPZiBdO1xyXG4gICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIGN1cnJlbnQudGFyZ2V0LCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0sIGRlc2NyaXB0b3IgKTtcclxuICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBzb3VyY2VSZWZlcmVuY2VzLnB1c2goIG5leHRTb3VyY2UgKTtcclxuICAgICAgICAgICAgICB0YXJnZXRSZWZlcmVuY2VzLnB1c2goIGRlc2NyaXB0b3IudmFsdWUgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIGN1cnJlbnQudGFyZ2V0LCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0sIGRlc2NyaXB0b3IgKTtcclxuXHJcbiAgICAgICAgICBjb3BpZXMucHVzaCggeyBzb3VyY2U6IG5leHRTb3VyY2UsIHRhcmdldDogZGVzY3JpcHRvci52YWx1ZSB9ICk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjbG9uZU9iamVjdDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUsIGRvTm90Q2hhaW4pe1xyXG4gIGlmKCFkb05vdENoYWluKXtcclxuICAgIGlmKGVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ3NldFByb3AnKSl7XHJcbiAgICAgIHJldHVybiBlbGVtZW50LnNldFByb3AocHJvcGVydHksIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmKGVsZW1lbnQuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKXtcclxuICAgIGVsZW1lbnRbcHJvcGVydHldID0gdmFsdWU7XHJcbiAgICBpZihlbGVtZW50LnNlbmRFdmVudCl7XHJcbiAgICAgIGVsZW1lbnQuc2VuZEV2ZW50KCdwcm9wZXJ0eV9jaGFuZ2UnKTtcclxuICAgIH1cclxuICB9ZWxzZXtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IHByb3BlcnR5IG9mIG9iamVjdC4gT2JqZWN0IGhhc25cXCd0IHRoZSBwcm9wZXJ0eTogJyArIHByb3BlcnR5KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYWRkQW5pbWF0aW9uOiBmdW5jdGlvbihoYW5kbGUpe1xyXG4gICAgICBjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcclxuICAgICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUFuaW1hdGlvbjogZnVuY3Rpb24oaGFuZGxlKXtcclxuICAgICAgY3JlYXRlanMuVGlja2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgbW9kaWZpY2F0b3IgPSB7fTtcclxuXHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xyXG4gICAgbW9kaWZpY2F0b3Iuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcclxuXHJcbiAgICByZXR1cm4gbW9kaWZpY2F0b3I7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0TW9kaWZpY2F0b3IgZnJvbSAnfi9tb2RpZmljYXRvcnMvYWJzdHJhY3RfbW9kaWZpY2F0b3InO1xyXG5pbXBvcnQgdHJhbnNpdGlvbk1vZGlmaWNhdG9yIGZyb20gJ34vbW9kaWZpY2F0b3JzL3RyYW5zaXRpb25fbW9kaWZpY2F0b3InO1xyXG5cclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdnb2FsUG9pbnQnLCB0cnVlKTtcclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzdGFydFBvaW50JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcblxyXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXHJcbiAgICB2YXIgcDJQTW92ZXIgPSB0cmFuc2l0aW9uTW9kaWZpY2F0b3IoYWJzdHJhY3RNb2RpZmljYXRvcihvcHRpb25zKSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xyXG4gICAgcDJQTW92ZXIuZ29hbFBvaW50ID0gb3B0aW9ucy5nb2FsUG9pbnQ7XHJcbiAgICBwMlBNb3Zlci5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xyXG5cclxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cclxuICAgIHAyUE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uKGN1cnJlbnQpe1xyXG4gICAgICB2YXIgYW1vdW50WCA9IChwMlBNb3Zlci5nb2FsUG9pbnQueCAtIHAyUE1vdmVyLnN0YXJ0UG9pbnQueCkgKiBjdXJyZW50O1xyXG4gICAgICB2YXIgYW1vdW50WSA9IChwMlBNb3Zlci5nb2FsUG9pbnQueSAtIHAyUE1vdmVyLnN0YXJ0UG9pbnQueSkgKiBjdXJyZW50O1xyXG5cclxuICAgICAgcDJQTW92ZXIuc3ViamVjdC54ID0gcDJQTW92ZXIuc3RhcnRQb2ludC54ICsgYW1vdW50WDtcclxuICAgICAgcDJQTW92ZXIuc3ViamVjdC55ID0gcDJQTW92ZXIuc3RhcnRQb2ludC55ICsgYW1vdW50WTtcclxuICAgIH07XHJcblxyXG4gICAgLyogSW5pdCAqL1xyXG4gICAgcmV0dXJuIHAyUE1vdmVyO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdE1vZGlmaWNhdG9yIGZyb20gJ34vbW9kaWZpY2F0b3JzL2Fic3RyYWN0X21vZGlmaWNhdG9yJztcclxuaW1wb3J0IHRyYW5zaXRpb25Nb2RpZmljYXRvciBmcm9tICd+L21vZGlmaWNhdG9ycy90cmFuc2l0aW9uX21vZGlmaWNhdG9yJztcclxuXHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgICAvKiBQYXJhbWV0ZXJzICovXHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnZ29hbFBvaW50JywgdHJ1ZSk7XHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnRQb2ludCcsIGZhbHNlLCB7eDogMCwgeTogMH0pO1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NoYWtlRmFjdG9yJywgZmFsc2UsIDEpO1xyXG5cclxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgdmFyIHNoYWtlTW92ZXIgPSB0cmFuc2l0aW9uTW9kaWZpY2F0b3IoYWJzdHJhY3RNb2RpZmljYXRvcihvcHRpb25zKSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLy8gUGFyYW1zIGFuZCBkZWZhdWx0c1xyXG4gICAgc2hha2VNb3Zlci5zaGFrZUZhY3RvciA9IG9wdGlvbnMuc2hha2VGYWN0b3I7XHJcbiAgICBzaGFrZU1vdmVyLmdvYWxQb2ludCA9IG9wdGlvbnMuZ29hbFBvaW50O1xyXG4gICAgc2hha2VNb3Zlci5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xyXG5cclxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cclxuICAgIHNoYWtlTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24oY3VycmVudCl7XHJcbiAgICAgIHZhciByYW5kb21GYWN0b3IgPSBNYXRoLnJhbmRvbSgpICogc2hha2VNb3Zlci5zaGFrZUZhY3RvciAtIHNoYWtlTW92ZXIuc2hha2VGYWN0b3IgLyAyO1xyXG4gICAgICB2YXIgZGlzdFggPSAoc2hha2VNb3Zlci5nb2FsUG9pbnQueCAtIHNoYWtlTW92ZXIuc3RhcnRQb2ludC54KTtcclxuICAgICAgdmFyIGRpc3RZID0gIChzaGFrZU1vdmVyLmdvYWxQb2ludC55IC0gc2hha2VNb3Zlci5zdGFydFBvaW50LnkpO1xyXG4gICAgICB2YXIgcmFuZG9tWCA9IHJhbmRvbUZhY3RvciAqIGRpc3RYIC8gKGRpc3RYICsgZGlzdFkpO1xyXG4gICAgICB2YXIgcmFuZG9tWSA9IHJhbmRvbUZhY3RvciAqIGRpc3RZIC8gKGRpc3RYICsgZGlzdFkpO1xyXG4gICAgICB2YXIgYW1vdW50WCA9IGRpc3RYICogY3VycmVudCArIHJhbmRvbVg7XHJcbiAgICAgIHZhciBhbW91bnRZID0gZGlzdFkgKiBjdXJyZW50ICsgcmFuZG9tWTtcclxuXHJcbiAgICAgIHNoYWtlTW92ZXIuc3ViamVjdC54ID0gc2hha2VNb3Zlci5zdGFydFBvaW50LnggKyBhbW91bnRYO1xyXG4gICAgICBzaGFrZU1vdmVyLnN1YmplY3QueSA9IHNoYWtlTW92ZXIuc3RhcnRQb2ludC55ICsgYW1vdW50WTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNoYWtlTW92ZXI7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IGNyZWF0ZUxpbmVNb3ZlciBmcm9tICcuL2xpbmVfbW92ZXInO1xyXG5pbXBvcnQgY3JlYXRlSW50ZXJ2YWwgZnJvbSAnfi90aW1lcnMvaW50ZXJ2YWwnO1xyXG5pbXBvcnQgYWJzdHJhY3RNb2RpZmljYXRvciBmcm9tICd+L21vZGlmaWNhdG9ycy9hYnN0cmFjdF9tb2RpZmljYXRvcic7XHJcblxyXG5pbXBvcnQgdG9WZWN0b3IgZnJvbSAnfi9nZW9tZXRyeS90b192ZWN0b3InO1xyXG5pbXBvcnQgZGlzdGFuY2UgZnJvbSAnfi9nZW9tZXRyeS9kaXN0YW5jZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgLyogUGFyYW1ldGVycyAqL1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcclxuXHJcbiAgLyogY3JlYXRlIG9iamVjdCBhbmQgc2V0IHByb3BlcnRpZXMgKi9cclxuICB2YXIgcmFuZG9tSW5SZWN0TW92ZXIgPSBhYnN0cmFjdE1vZGlmaWNhdG9yKG9wdGlvbnMpO1xyXG4gIHJhbmRvbUluUmVjdE1vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcclxuXHJcbiAgLy8gY2FsbGJhY2tzXHJcbiAgdmFyIG9uQ3VycmVudEdvYWxSZWFjaGVkID0gZnVuY3Rpb24oKXtcclxuICAgIGxpbmVNb3Zlci5zdG9wKCk7XHJcbiAgICBsaW5lTW92ZXIuc3RhcnRQb2ludC54ID0gbGluZU1vdmVyLmdvYWxQb2ludC54O1xyXG4gICAgbGluZU1vdmVyLnN0YXJ0UG9pbnQueSA9IGxpbmVNb3Zlci5nb2FsUG9pbnQueTtcclxuXHJcbiAgICBsaW5lTW92ZXIuZ29hbFBvaW50LnggPSBNYXRoLnJhbmRvbSgpICogb3B0aW9ucy53aWR0aDtcclxuICAgIGxpbmVNb3Zlci5nb2FsUG9pbnQueSA9IE1hdGgucmFuZG9tKCkgKiBvcHRpb25zLmhlaWdodDtcclxuXHJcbiAgICBpbnRlcnZhbC5tcyA9IGNhbGN1bGF0ZUludGVydmFsVGltZSgpO1xyXG5cclxuICAgIGxpbmVNb3Zlci5zdGFydCgpO1xyXG4gIH07XHJcblxyXG4gIC8vIHByaXZhdGUgdmFyc1xyXG4gIHZhciBpbnRlcnZhbCA9IGNyZWF0ZUludGVydmFsKHt0eXBlOiAnbXMnLCBtczogMX0pO1xyXG4gIHZhciBsaW5lTW92ZXIgPSBjcmVhdGVMaW5lTW92ZXIoe1xyXG4gICAgICBzdWJqZWN0OiByYW5kb21JblJlY3RNb3Zlci5zdWJqZWN0LFxyXG4gICAgICBnb2FsUG9pbnQ6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICBvbkZpbmlzaGVkSW50ZXJ2YWw6IG9uQ3VycmVudEdvYWxSZWFjaGVkLFxyXG4gICAgICBpbnRlcnZhbDogaW50ZXJ2YWwsXHJcbiAgICAgIHN0ZWVwbmVzczogMVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG4gICAgb25DdXJyZW50R29hbFJlYWNoZWQoKTtcclxuICB9O1xyXG5cclxuICByYW5kb21JblJlY3RNb3Zlci5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIGxpbmVNb3Zlci5zdG9wKCk7XHJcbiAgfTtcclxuXHJcbiAgLyogUHJpdmF0ZSBmdW5jdGlvbnMgKi9cclxuICBmdW5jdGlvbiBjYWxjdWxhdGVJbnRlcnZhbFRpbWUoKXtcclxuICAgIHZhciBkaXN0ID0gZGlzdGFuY2UodG9WZWN0b3IobGluZU1vdmVyLmdvYWxQb2ludCksIHRvVmVjdG9yKGxpbmVNb3Zlci5zdGFydFBvaW50KSk7XHJcbiAgICByZXR1cm4gKGRpc3QgLyByYW5kb21JblJlY3RNb3Zlci5zcGVlZCkgKiAxMDAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhbmRvbUluUmVjdE1vdmVyO1xyXG59XHJcbiIsImltcG9ydCB7IHB1bHNhclRyYW5zaXRpb24sIHJpc2luZ1RyYW5zaXRpb24gfSBmcm9tICd+L3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcbmltcG9ydCBzZXRQcm9wIGZyb20gJ34vaW50ZXJuYWwvc2V0X3Byb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2xpbWl0JywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ251bWJlck9mSW50ZXJ2YWxzJywgZmFsc2UpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyaXNpbmcnLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NlbnRlcklmUG9zc2libGUnLCBmYWxzZSwgdHJ1ZSk7XHJcblxyXG5cclxuICB2YXIgbGluZWFyUHVsc2FyID0ge307XHJcbiAgbGluZWFyUHVsc2FyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XHJcbiAgbGluZWFyUHVsc2FyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcclxuICBsaW5lYXJQdWxzYXIubGltaXQgPSBvcHRpb25zLmxpbWl0O1xyXG4gIGlmKCFvcHRpb25zLnJpc2luZyl7XHJcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyID0gcHVsc2FyVHJhbnNpdGlvbihsaW5lYXJQdWxzYXIuc3BlZWQsIDAsIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMpO1xyXG4gIH1lbHNle1xyXG4gICAgbGluZWFyUHVsc2FyLnB1bHNhciA9IHJpc2luZ1RyYW5zaXRpb24obGluZWFyUHVsc2FyLnNwZWVkLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzKTtcclxuICB9XHJcblxyXG4gIGxpbmVhclB1bHNhci5zdGFydCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0YXJ0KGxpbmVhclB1bHNhci5oYW5kbGUpO1xyXG4gIH07XHJcblxyXG4gIGxpbmVhclB1bHNhci5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIGxpbmVhclB1bHNhci5wdWxzYXIuc3RvcCgpO1xyXG4gIH07XHJcblxyXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbihjdXJyZW50KXtcclxuICAgIHNldFByb3AobGluZWFyUHVsc2FyLnN1YmplY3QsICdzY2FsZScsIDEgKyBjdXJyZW50ICogKGxpbmVhclB1bHNhci5saW1pdCAtIDEpKTtcclxuICAgIGxpbmVhclB1bHNhci5zdWJqZWN0LmRyYXcoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbGluZWFyUHVsc2FyO1xyXG59XHJcbiIsImltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcbmltcG9ydCB0cmFuc2l0aW9uTG9vcCBmcm9tICd+L3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtb2RpZmljYXRvciwgb3B0aW9ucyl7XHJcblxyXG4gICAgLyogUGFyYW1ldGVycyAqL1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2ludGVydmFsJywgdHJ1ZSk7XHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RlZXBuZXNzJywgZmFsc2UsIDAuNSk7XHJcblxyXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXHJcbiAgICB2YXIgbW9kaWZpY2F0b3JUcmFuc2l0aW9uID0gdHJhbnNpdGlvbkxvb3Aob3B0aW9ucy5pbnRlcnZhbCwgb3B0aW9ucy5zdGVlcG5lc3MsIDAsIDAsIG9wdGlvbnMub25GaW5pc2hlZEludGVydmFsKTtcclxuXHJcbiAgICAvKiBQdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgbW9kaWZpY2F0b3Iuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG4gICAgICBtb2RpZmljYXRvclRyYW5zaXRpb24uc3RhcnQobW9kaWZpY2F0b3IuaGFuZGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgbW9kaWZpY2F0b3Iuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIG1vZGlmaWNhdG9yVHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBtb2RpZmljYXRvcjtcclxufVxyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgdmFyIGludGVydmFsID0ge307XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICd0eXBlJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2JwbScsIGZhbHNlLCAwKTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnbXMnLCBmYWxzZSwgMCk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2Rpdmlzb3InLCBmYWxzZSwgMSk7XHJcblxyXG4gIGludGVydmFsLnR5cGUgPSBvcHRpb25zLnR5cGU7XHJcbiAgaW50ZXJ2YWwuYnBtID0gb3B0aW9ucy5icG07XHJcbiAgaW50ZXJ2YWwubXMgPSBvcHRpb25zLm1zO1xyXG4gIGludGVydmFsLmRpdmlzb3IgPSBvcHRpb25zLmRpdmlzb3I7XHJcblxyXG4gIGlmKGludGVydmFsLmJwbSA9PT0gMCAmJiBpbnRlcnZhbC5tcyA9PT0gMCApe1xyXG4gICAgdGhyb3cgJ0lsbGVnYWwgc3RhdGU6IEJQTSBhbmQgTVMgY2Fubm90IGJvdGggYmUgMCc7XHJcbiAgfVxyXG5cclxuICBpbnRlcnZhbC5nZW5lcmF0ZUhhbGZJbnRlcnZhbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaGFsZkludGVydmFsID0ge307XHJcbiAgICBoYWxmSW50ZXJ2YWwudHlwZSA9IGludGVydmFsLnR5cGU7XHJcbiAgICBoYWxmSW50ZXJ2YWwuYnBtID0gaW50ZXJ2YWwuYnBtO1xyXG4gICAgaGFsZkludGVydmFsLm1zID0gaW50ZXJ2YWwubXM7XHJcbiAgICBoYWxmSW50ZXJ2YWwuZGl2aXNvciA9IGludGVydmFsLmRpdmlzb3IgKiAyO1xyXG5cclxuICAgIHJldHVybiBoYWxmSW50ZXJ2YWw7XHJcbiAgfTtcclxuXHJcbiAgaW50ZXJ2YWwuYmlzZWN0ID0gZnVuY3Rpb24oKXtcclxuICAgIGludGVydmFsLmRpdmlzb3IgPSBpbnRlcnZhbC5kaXZpc29yICogMjtcclxuICB9O1xyXG5cclxuICBpbnRlcnZhbC5nZXRNcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBpZihpbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgcmV0dXJuIGludGVydmFsLm1zO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiAoNjAwMDAgLyBpbnRlcnZhbC5icG0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBpbnRlcnZhbDtcclxufVxyXG4iLCJpbXBvcnQgbG9vcCBmcm9tICd+L2xvb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJ2YWwpe1xyXG4gIHZhciB0aW1lciA9IHt9O1xyXG4gIHRpbWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICB0aW1lci5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIHRpbWVyLmxpc3RlbmVycyA9IFtdO1xyXG5cclxuICB0aW1lci5oYW5kbGUgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICB0aW1lci5jdXJyZW50VGltZSArPSBldmVudC5kZWx0YTtcclxuXHJcbiAgICB3aGlsZSh0aW1lci5jdXJyZW50VGltZSA+IHRpbWVyLmludGVydmFsKXtcclxuICAgICAgIGNhbGxMaXN0ZW5lcnMoKTtcclxuICAgICAgIHRpbWVyLmN1cnJlbnRUaW1lIC09IHRpbWVyLmludGVydmFsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHRpbWVyLmFkZExpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgdGltZXIubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gIH07XHJcblxyXG4gIHRpbWVyLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgdGltZXIubGlzdGVuZXJzLnNwbGljZSh0aW1lci5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xyXG4gIH07XHJcblxyXG4gIHRpbWVyLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgIGxvb3AuYWRkQW5pbWF0aW9uKHRpbWVyLmhhbmRsZSk7XHJcbiAgfTtcclxuXHJcbiAgdGltZXIuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsb29wLnJlbW92ZUFuaW1hdGlvbih0aW1lci5oYW5kbGUpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxMaXN0ZW5lcnMoKXtcclxuICAgIGZvcih2YXIgbGlzdGVuZXIgb2YgdGltZXIubGlzdGVuZXJzKXtcclxuICAgICAgbGlzdGVuZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aW1lcjtcclxufVxyXG4iLCJpbXBvcnQgbG9vcCBmcm9tICd+L2xvb3AnO1xyXG5cclxuZnVuY3Rpb24gdHJhbnNpdGlvbkxvb3AoaW50ZXJ2YWwsIHN0ZWVwbmVzcywgY3VycmVudCwgbnVtYmVyT2ZJbnRlcnZhbHMsIG9uRmluaXNoZWRJbnRlcnZhbCl7XHJcbiAgdmFyIHB1bHNhciA9IHt9O1xyXG4gIHB1bHNhci5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPSAwO1xyXG4gIHB1bHNhci5zdGVlcG5lc3MgPSAodHlwZW9mIHN0ZWVwbmVzcyAhPT0gJ3VuZGVmaW5lZCcpID8gc3RlZXBuZXNzIDogMC41O1xyXG4gIHB1bHNhci5jdXJyZW50ID0gY3VycmVudCA/IGN1cnJlbnQgOiAwO1xyXG4gIHB1bHNhci5pbmNyZWFzZSA9IHRydWU7XHJcbiAgcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyA9IGN1cnJlbnQgPyBjdXJyZW50ICogaW50ZXJ2YWwuZ2V0TXMoKSA6IDA7XHJcbiAgcHVsc2FyLm51bWJlck9mSW50ZXJ2YWxzID0gbnVtYmVyT2ZJbnRlcnZhbHMgPyBudW1iZXJPZkludGVydmFscyA6IDA7XHJcbiAgcHVsc2FyLm9uRmluaXNoZWRJbnRlcnZhbCA9IG9uRmluaXNoZWRJbnRlcnZhbDtcclxuXHJcbiAgcHVsc2FyLnN0YXJ0ID0gZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gICAgcHVsc2FyLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICBwdWxzYXIuY3VycmVudEludGVydmFsID0gMDtcclxuICAgIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSBjdXJyZW50ID8gY3VycmVudCAqIGludGVydmFsLmdldE1zKCkgOiAwO1xyXG4gICAgbG9vcC5hZGRBbmltYXRpb24ocHVsc2FyLmhhbmRsZSk7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgbG9vcC5yZW1vdmVBbmltYXRpb24ocHVsc2FyLmhhbmRsZSk7XHJcbiAgICBwdWxzYXIucmVzZXQoKTtcclxuICB9O1xyXG5cclxuICBwdWxzYXIucmVzZXQgPSBmdW5jdGlvbigpe1xyXG4gICAgcHVsc2FyLmN1cnJlbnQgPSAwO1xyXG4gICAgcHVsc2FyLmluY3JlYXNlID0gdHJ1ZTtcclxuICAgIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSAwO1xyXG4gICAgcHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9IDA7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuXHJcbiAgICAvLyBGaXJzdCBzdW0gY3VycmVudCBtc1xyXG4gICAgcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyA9IHB1bHNhci5jdXJyZW50TXNlY29uZHMgKyBldmVudC5kZWx0YTtcclxuXHJcbiAgICAvLyBzdG9yZSBjdXJyZW50IGN1cnJlbnRcclxuICAgIHZhciBsYXN0Q3VycmVudCA9IHB1bHNhci5jdXJyZW50O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBuZXcgY3VycmVudFxyXG4gICAgdmFyIG5ld0N1cnJlbnQgPSBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudChwdWxzYXIuY3VycmVudE1zZWNvbmRzKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBpbnRlcnZhbCBpcyBmaW5pc2hlZCBhbmQgc2V0IGl0IHRvIDEgaWYgaXQgd2FzIHRoZSBsYXN0IGludGVydmFsXHJcbiAgICBuZXdDdXJyZW50ID0gaW50ZXJ2YWxQb3N0UHJvY2Vzc2luZyhuZXdDdXJyZW50KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgY3VycmVudCB2YWx1ZSBhbmQgY29tcGFyZSBpdCB3aXRoIGxhc3QgdmFsdWVcclxuICAgIHZhciBjdXJyZW50VmFsdWUgPSBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudFZhbHVlKG5ld0N1cnJlbnQpO1xyXG4gICAgcHVsc2FyLmluY3JlYXNlID0gKHB1bHNhci5jYWxjdWxhdGVDdXJyZW50VmFsdWUobGFzdEN1cnJlbnQpIDwgY3VycmVudFZhbHVlKTtcclxuXHJcbiAgICBpZihwdWxzYXIuY2FsbGJhY2spe1xyXG4gICAgICBwdWxzYXIuY2FsbGJhY2soY3VycmVudFZhbHVlLCBldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmNhbGN1bGF0ZUN1cnJlbnQgPSBmdW5jdGlvbihtcyl7XHJcbiAgICB2YXIgcmVsYXRpdmVDdXJyZW50O1xyXG4gICAgaWYocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdtcycpe1xyXG4gICAgICByZWxhdGl2ZUN1cnJlbnQgPSAobXMgLyBwdWxzYXIuaW50ZXJ2YWwubXMpICUgMTtcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnYnBtJyl7XHJcbiAgICAgIHJlbGF0aXZlQ3VycmVudCA9ICgoIG1zICogcHVsc2FyLmludGVydmFsLmJwbSkgLyAoNjAwMDApKSAlIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVsYXRpdmVDdXJyZW50O1xyXG4gIH07XHJcblxyXG4gIHB1bHNhci5jYWxjdWxhdGVDdXJyZW50VmFsdWUgPSBmdW5jdGlvbihjdXJyZW50VG9DYWxjdWxhdGUpe1xyXG4gICAgaWYoY3VycmVudFRvQ2FsY3VsYXRlIDw9IHB1bHNhci5zdGVlcG5lc3Mpe1xyXG4gICAgICByZXR1cm4gKGN1cnJlbnRUb0NhbGN1bGF0ZSkgLyBwdWxzYXIuc3RlZXBuZXNzO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiAxIC0gKGN1cnJlbnRUb0NhbGN1bGF0ZSAtIHB1bHNhci5zdGVlcG5lc3MpIC8gKDEgLSBwdWxzYXIuc3RlZXBuZXNzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50ID0gZnVuY3Rpb24oZmFjdG9yKXtcclxuXHJcbiAgICAvLyBGaXJzdCBwcmVwYXJlIHRoZSB2YWx1ZSB3aGljaCBpcyBwYXNzZWQgdG8gdGhlIGNhbGN1bGF0ZUN1cnJlbnQgZnVuY3Rpb246XHJcbiAgICB2YXIgZmFjdG9ySW5NcztcclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgZmFjdG9ySW5NcyA9IGZhY3RvciAqIHB1bHNhci5pbnRlcnZhbC5tcztcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnYnBtJyl7XHJcbiAgICAgIGZhY3RvckluTXMgPSBmYWN0b3IgKiAoNjAwMDAgLyBwdWxzYXIuaW50ZXJ2YWwuYnBtKTtcclxuICAgIH1cclxuICAgIHZhciBtc1RvQ2hlY2sgPSBmYWN0b3JJbk1zICsgcHVsc2FyLmN1cnJlbnRNc2Vjb25kcztcclxuXHJcbiAgICBpZihtc1RvQ2hlY2sgPCAwICl7XHJcbiAgICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgICBtc1RvQ2hlY2sgPSBtc1RvQ2hlY2sgKyBwdWxzYXIuaW50ZXJ2YWwubXMgKiBNYXRoLmNlaWwoTWF0aC5hYnMobXNUb0NoZWNrKSAvIHB1bHNhci5pbnRlcnZhbC5tcyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYocHVsc2FyLmludGVydmFsLnR5cGUgPT09ICdicG0nKXtcclxuICAgICAgICBtc1RvQ2hlY2sgPSBtc1RvQ2hlY2sgKyAoNjAwMDAgLyBwdWxzYXIuaW50ZXJ2YWwuYnBtKSAqIE1hdGguY2VpbCggTWF0aC5hYnMobXNUb0NoZWNrKSAvICg2MDAwMCAvIHB1bHNhci5pbnRlcnZhbC5icG0pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudFZhbHVlKHB1bHNhci5jYWxjdWxhdGVDdXJyZW50KG1zVG9DaGVjaykpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGludGVydmFsUG9zdFByb2Nlc3NpbmcodGVtcEN1cnJlbnQpe1xyXG4gICAgdmFyIGN1cnJlbnRJbnRlcnZhbDtcclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgY3VycmVudEludGVydmFsID0gTWF0aC5mbG9vcihwdWxzYXIuY3VycmVudE1zZWNvbmRzIC8gcHVsc2FyLmludGVydmFsLm1zKTtcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5pbnRlcnZhbC50eXBlID09PSAnYnBtJyl7XHJcbiAgICAgIGN1cnJlbnRJbnRlcnZhbCA9IE1hdGguZmxvb3IoKCBwdWxzYXIuY3VycmVudE1zZWNvbmRzICogcHVsc2FyLmludGVydmFsLmJwbSkgLyAoNjAwMDApKTtcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPCBjdXJyZW50SW50ZXJ2YWwpe1xyXG4gICAgICBwdWxzYXIuY3VycmVudEludGVydmFsID0gY3VycmVudEludGVydmFsO1xyXG4gICAgICByZXR1cm4gaGFuZGxlSW50ZXJ2YWxGaW5pc2hlZCh0ZW1wQ3VycmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcEN1cnJlbnQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVJbnRlcnZhbEZpbmlzaGVkKHRlbXBDdXJyZW50KXtcclxuICAgIGlmKHB1bHNhci5vbkZpbmlzaGVkSW50ZXJ2YWwpe1xyXG4gICAgICAgIHB1bHNhci5vbkZpbmlzaGVkSW50ZXJ2YWwoKTtcclxuICAgIH1cclxuICAgIGlmKHB1bHNhci5udW1iZXJPZkludGVydmFscyA+IDAgJiYgcHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9PT0gcHVsc2FyLm51bWJlck9mSW50ZXJ2YWxzKXtcclxuICAgICAgICBwdWxzYXIuc3RvcCgpO1xyXG4gICAgICAgIHRlbXBDdXJyZW50ID0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wQ3VycmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBwdWxzYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByaXNpbmdUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpe1xyXG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAxLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1bHNhclRyYW5zaXRpb24odGltZSwgY3VycmVudCwgbnVtYmVyT2ZJbnRlcnZhbHMsIG9uRmluaXNoZWRJbnRlcnZhbCl7XHJcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDAsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2l0aW9uTG9vcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKDExNyk7XG4iLCIvKipcbiAgQSBqYXZhc2NyaXB0IEJlemllciBjdXJ2ZSBsaWJyYXJ5IGJ5IFBvbWF4LlxuXG4gIEJhc2VkIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mb1xuXG4gIFRoaXMgY29kZSBpcyBNSVQgbGljZW5zZWQuXG4qKi9cbihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gbWF0aC1pbmxpbmluZy5cbiAgdmFyIGFicyA9IE1hdGguYWJzLFxuICAgICAgbWluID0gTWF0aC5taW4sXG4gICAgICBtYXggPSBNYXRoLm1heCxcbiAgICAgIGFjb3MgPSBNYXRoLmFjb3MsXG4gICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgLy8gYSB6ZXJvIGNvb3JkaW5hdGUsIHdoaWNoIGlzIHN1cnByaXNpbmdseSB1c2VmdWxcbiAgICAgIFpFUk8gPSB7eDowLHk6MCx6OjB9O1xuXG4gIC8vIHF1aXRlIG5lZWRlZFxuICB2YXIgdXRpbHMgPSByZXF1aXJlKDExOSk7XG5cbiAgLy8gbm90IHF1aXRlIG5lZWRlZCwgYnV0IGV2ZW50dWFsbHkgdGhpcydsbCBiZSB1c2VmdWwuLi5cbiAgdmFyIFBvbHlCZXppZXIgPSByZXF1aXJlKDExOCk7XG5cbiAgLyoqXG4gICAqIEJlemllciBjdXJ2ZSBjb25zdHJ1Y3Rvci4gVGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50IGNhbiBiZSBvbmUgb2YgdGhyZWUgdGhpbmdzOlxuICAgKlxuICAgKiAxLiBhcnJheS80IG9mIHt4Oi4uLiwgeTouLi4sIHo6Li4ufSwgeiBvcHRpb25hbFxuICAgKiAyLiBudW1lcmljYWwgYXJyYXkvOCBvcmRlcmVkIHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0XG4gICAqIDMuIG51bWVyaWNhbCBhcnJheS8xMiBvcmRlcmVkIHgxLHkxLHoxLHgyLHkyLHoyLHgzLHkzLHozLHg0LHk0LHo0XG4gICAqXG4gICAqL1xuICB2YXIgQmV6aWVyID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgdmFyIGFyZ3MgPSAoY29vcmRzICYmIGNvb3Jkcy5mb3JFYWNoKSA/IGNvb3JkcyA6IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB2YXIgY29vcmRsZW4gPSBmYWxzZTtcbiAgICBpZih0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29vcmRsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICAgIHZhciBuZXdhcmdzID0gW107XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgWyd4JywneScsJ3onXS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBpZih0eXBlb2YgcG9pbnRbZF0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG5ld2FyZ3MucHVzaChwb2ludFtkXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYXJncyA9IG5ld2FyZ3M7XG4gICAgfVxuICAgIHZhciBoaWdoZXIgPSBmYWxzZTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKGNvb3JkbGVuKSB7XG4gICAgICBpZihjb29yZGxlbj40KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYobGVuIT09NiAmJiBsZW4hPT04ICYmIGxlbiE9PTkgJiYgbGVuIT09MTIpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgXzNkID0gKCFoaWdoZXIgJiYgKGxlbiA9PT0gOSB8fCBsZW4gPT09IDEyKSkgfHwgKGNvb3JkcyAmJiBjb29yZHNbMF0gJiYgdHlwZW9mIGNvb3Jkc1swXS56ICE9PSBcInVuZGVmaW5lZFwiKTtcbiAgICB0aGlzLl8zZCA9IF8zZDtcbiAgICB2YXIgcG9pbnRzID0gW107XG4gICAgZm9yKHZhciBpZHg9MCwgc3RlcD0oXzNkID8gMyA6IDIpOyBpZHg8bGVuOyBpZHgrPXN0ZXApIHtcbiAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgeDogYXJnc1tpZHhdLFxuICAgICAgICB5OiBhcmdzW2lkeCsxXVxuICAgICAgfTtcbiAgICAgIGlmKF8zZCkgeyBwb2ludC56ID0gYXJnc1tpZHgrMl0gfTtcbiAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICB9XG4gICAgdGhpcy5vcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgIHZhciBkaW1zID0gWyd4JywneSddO1xuICAgIGlmKF8zZCkgZGltcy5wdXNoKCd6Jyk7XG4gICAgdGhpcy5kaW1zID0gZGltcztcbiAgICB0aGlzLmRpbWxlbiA9IGRpbXMubGVuZ3RoO1xuXG4gICAgKGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB2YXIgb3JkZXIgPSBjdXJ2ZS5vcmRlcjtcbiAgICAgIHZhciBwb2ludHMgPSBjdXJ2ZS5wb2ludHM7XG4gICAgICB2YXIgYSA9IHV0aWxzLmFsaWduKHBvaW50cywge3AxOnBvaW50c1swXSwgcDI6cG9pbnRzW29yZGVyXX0pO1xuICAgICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihhYnMoYVtpXS55KSA+IDAuMDAwMSkge1xuICAgICAgICAgIGN1cnZlLl9saW5lYXIgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1cnZlLl9saW5lYXIgPSB0cnVlO1xuICAgIH0odGhpcykpO1xuXG4gICAgdGhpcy5fdDEgPSAwO1xuICAgIHRoaXMuX3QyID0gMTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9O1xuXG4gIEJlemllci5mcm9tU1ZHID0gZnVuY3Rpb24oc3ZnU3RyaW5nKSB7XG4gICAgdmFyIGxpc3QgPSBzdmdTdHJpbmcubWF0Y2goL1stK10/XFxkKlxcLj9cXGQrKD86W2VFXVstK10/XFxkKyk/L2cpLm1hcChwYXJzZUZsb2F0KTtcbiAgICB2YXIgcmVsYXRpdmUgPSAvW2NxXS8udGVzdChzdmdTdHJpbmcpO1xuICAgIGlmKCFyZWxhdGl2ZSkgcmV0dXJuIG5ldyBCZXppZXIobGlzdCk7XG4gICAgbGlzdCA9IGxpc3QubWFwKGZ1bmN0aW9uKHYsaSkge1xuICAgICAgcmV0dXJuIGkgPCAyID8gdiA6IHYgKyBsaXN0W2kgJSAyXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEJlemllcihsaXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBQkMobixTLEIsRSx0KSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIHZhciB1ID0gdXRpbHMucHJvamVjdGlvbnJhdGlvKHQsbiksXG4gICAgICAgIHVtID0gMS11LFxuICAgICAgICBDID0ge1xuICAgICAgICAgIHg6IHUqUy54ICsgdW0qRS54LFxuICAgICAgICAgIHk6IHUqUy55ICsgdW0qRS55XG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB1dGlscy5hYmNyYXRpbyh0LG4pLFxuICAgICAgICBBID0ge1xuICAgICAgICAgIHg6IEIueCArIChCLngtQy54KS9zLFxuICAgICAgICAgIHk6IEIueSArIChCLnktQy55KS9zXG4gICAgICAgIH07XG4gICAgcmV0dXJuIHsgQTpBLCBCOkIsIEM6QyB9O1xuICB9XG5cbiAgQmV6aWVyLnF1YWRyYXRpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbihwMSxwMixwMywgdCkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICAvLyBzaG9ydGN1dHMsIGFsdGhvdWdoIHRoZXkncmUgcmVhbGx5IGR1bWJcbiAgICBpZih0PT09MCkgeyByZXR1cm4gbmV3IEJlemllcihwMixwMixwMyk7IH1cbiAgICBpZih0PT09MSkgeyByZXR1cm4gbmV3IEJlemllcihwMSxwMixwMik7IH1cbiAgICAvLyByZWFsIGZpdHRpbmcuXG4gICAgdmFyIGFiYyA9IGdldEFCQygyLHAxLHAyLHAzLHQpO1xuICAgIHJldHVybiBuZXcgQmV6aWVyKHAxLCBhYmMuQSwgcDMpO1xuICB9O1xuXG4gIEJlemllci5jdWJpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbihTLEIsRSwgdCxkMSkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICB2YXIgYWJjID0gZ2V0QUJDKDMsUyxCLEUsdCk7XG4gICAgaWYodHlwZW9mIGQxID09PSBcInVuZGVmaW5lZFwiKSB7IGQxID0gdXRpbHMuZGlzdChCLGFiYy5DKTsgfVxuICAgIHZhciBkMiA9IGQxICogKDEtdCkvdDtcblxuICAgIHZhciBzZWxlbiA9IHV0aWxzLmRpc3QoUyxFKSxcbiAgICAgICAgbHggPSAoRS54LVMueCkvc2VsZW4sXG4gICAgICAgIGx5ID0gKEUueS1TLnkpL3NlbGVuLFxuICAgICAgICBieDEgPSBkMSAqIGx4LFxuICAgICAgICBieTEgPSBkMSAqIGx5LFxuICAgICAgICBieDIgPSBkMiAqIGx4LFxuICAgICAgICBieTIgPSBkMiAqIGx5O1xuICAgIC8vIGRlcml2YXRpb24gb2YgbmV3IGh1bGwgY29vcmRpbmF0ZXNcbiAgICB2YXIgZTEgID0geyB4OiBCLnggLSBieDEsIHk6IEIueSAtIGJ5MSB9LFxuICAgICAgICBlMiAgPSB7IHg6IEIueCArIGJ4MiwgeTogQi55ICsgYnkyIH0sXG4gICAgICAgIEEgPSBhYmMuQSxcbiAgICAgICAgdjEgID0geyB4OiBBLnggKyAoZTEueC1BLngpLygxLXQpLCB5OiBBLnkgKyAoZTEueS1BLnkpLygxLXQpIH0sXG4gICAgICAgIHYyICA9IHsgeDogQS54ICsgKGUyLngtQS54KS8odCksIHk6IEEueSArIChlMi55LUEueSkvKHQpIH0sXG4gICAgICAgIG5jMSA9IHsgeDogUy54ICsgKHYxLngtUy54KS8odCksIHk6IFMueSArICh2MS55LVMueSkvKHQpIH0sXG4gICAgICAgIG5jMiA9IHsgeDogRS54ICsgKHYyLngtRS54KS8oMS10KSwgeTogRS55ICsgKHYyLnktRS55KS8oMS10KSB9O1xuICAgIC8vIC4uLmRvbmVcbiAgICByZXR1cm4gbmV3IEJlemllcihTLG5jMSxuYzIsRSk7XG4gIH07XG5cbiAgdmFyIGdldFV0aWxzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHV0aWxzO1xuICB9O1xuXG4gIEJlemllci5nZXRVdGlscyA9IGdldFV0aWxzO1xuXG4gIEJlemllci5wcm90b3R5cGUgPSB7XG4gICAgZ2V0VXRpbHM6IGdldFV0aWxzLFxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICB0b1NWRzogZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgICAgIGlmKHRoaXMuXzNkKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuICAgICAgICAgIHggPSBwWzBdLngsXG4gICAgICAgICAgeSA9IHBbMF0ueSxcbiAgICAgICAgICBzID0gW1wiTVwiLCB4LCB5LCAodGhpcy5vcmRlcj09PTIgPyBcIlFcIjpcIkNcIildO1xuICAgICAgZm9yKHZhciBpPTEsIGxhc3Q9cC5sZW5ndGg7IGk8bGFzdDsgaSsrKSB7XG4gICAgICAgIHMucHVzaChwW2ldLngpO1xuICAgICAgICBzLnB1c2gocFtpXS55KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzLmpvaW4oXCIgXCIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9uZS10aW1lIGNvbXB1dGUgZGVyaXZhdGl2ZSBjb29yZGluYXRlc1xuICAgICAgdGhpcy5kcG9pbnRzID0gW107XG4gICAgICBmb3IodmFyIHA9dGhpcy5wb2ludHMsIGQ9cC5sZW5ndGgsIGM9ZC0xOyBkPjE7IGQtLSwgYy0tKSB7XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvcih2YXIgaj0wLCBkcHQ7IGo8YzsgaisrKSB7XG4gICAgICAgICAgZHB0ID0ge1xuICAgICAgICAgICAgeDogYyAqIChwW2orMV0ueCAtIHBbal0ueCksXG4gICAgICAgICAgICB5OiBjICogKHBbaisxXS55IC0gcFtqXS55KVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICAgIGRwdC56ID0gYyAqIChwW2orMV0ueiAtIHBbal0ueik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QucHVzaChkcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHBvaW50cy5wdXNoKGxpc3QpO1xuICAgICAgICBwID0gbGlzdDtcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbXB1dGVkaXJlY3Rpb24oKTtcbiAgICB9LFxuICAgIGNvbXB1dGVkaXJlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgdmFyIGFuZ2xlID0gdXRpbHMuYW5nbGUocG9pbnRzWzBdLCBwb2ludHNbdGhpcy5vcmRlcl0sIHBvaW50c1sxXSk7XG4gICAgICB0aGlzLmNsb2Nrd2lzZSA9IGFuZ2xlID4gMDtcbiAgICB9LFxuICAgIGxlbmd0aDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMubGVuZ3RoKHRoaXMuZGVyaXZhdGl2ZS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuICAgIF9sdXQ6IFtdLFxuICAgIGdldExVVDogZnVuY3Rpb24oc3RlcHMpIHtcbiAgICAgIHN0ZXBzID0gc3RlcHMgfHwgMTAwO1xuICAgICAgaWYgKHRoaXMuX2x1dC5sZW5ndGggPT09IHN0ZXBzKSB7IHJldHVybiB0aGlzLl9sdXQ7IH1cbiAgICAgIHRoaXMuX2x1dCA9IFtdO1xuICAgICAgZm9yKHZhciB0PTA7IHQ8PXN0ZXBzOyB0KyspIHtcbiAgICAgICAgdGhpcy5fbHV0LnB1c2godGhpcy5jb21wdXRlKHQvc3RlcHMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9sdXQ7XG4gICAgfSxcbiAgICBvbjogZnVuY3Rpb24ocG9pbnQsIGVycm9yKSB7XG4gICAgICBlcnJvciA9IGVycm9yIHx8IDU7XG4gICAgICB2YXIgbHV0ID0gdGhpcy5nZXRMVVQoKSwgaGl0cyA9IFtdLCBjLCB0PTA7XG4gICAgICBmb3IodmFyIGk9MDsgaTxsdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYyA9IGx1dFtpXTtcbiAgICAgICAgaWYgKHV0aWxzLmRpc3QoYyxwb2ludCkgPCBlcnJvcikge1xuICAgICAgICAgIGhpdHMucHVzaChjKVxuICAgICAgICAgIHQgKz0gaSAvIGx1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKCFoaXRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHQgLz0gaGl0cy5sZW5ndGg7XG4gICAgfSxcbiAgICBwcm9qZWN0OiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgLy8gc3RlcCAxOiBjb2Fyc2UgY2hlY2tcbiAgICAgIHZhciBMVVQgPSB0aGlzLmdldExVVCgpLCBsID0gTFVULmxlbmd0aC0xLFxuICAgICAgICAgIGNsb3Nlc3QgPSB1dGlscy5jbG9zZXN0KExVVCwgcG9pbnQpLFxuICAgICAgICAgIG1kaXN0ID0gY2xvc2VzdC5tZGlzdCxcbiAgICAgICAgICBtcG9zID0gY2xvc2VzdC5tcG9zO1xuICAgICAgaWYgKG1wb3M9PT0wIHx8IG1wb3M9PT1sKSB7XG4gICAgICAgIHZhciB0ID0gbXBvcy9sLCBwdCA9IHRoaXMuY29tcHV0ZSh0KTtcbiAgICAgICAgcHQudCA9IHQ7XG4gICAgICAgIHB0LmQgPSBtZGlzdDtcbiAgICAgICAgcmV0dXJuIHB0O1xuICAgICAgfVxuXG4gICAgICAvLyBzdGVwIDI6IGZpbmUgY2hlY2tcbiAgICAgIHZhciBmdCwgdCwgcCwgZCxcbiAgICAgICAgICB0MSA9IChtcG9zLTEpL2wsXG4gICAgICAgICAgdDIgPSAobXBvcysxKS9sLFxuICAgICAgICAgIHN0ZXAgPSAwLjEvbDtcbiAgICAgIG1kaXN0ICs9IDE7XG4gICAgICBmb3IodD10MSxmdD10OyB0PHQyK3N0ZXA7IHQrPXN0ZXApIHtcbiAgICAgICAgcCA9IHRoaXMuY29tcHV0ZSh0KTtcbiAgICAgICAgZCA9IHV0aWxzLmRpc3QocG9pbnQsIHApO1xuICAgICAgICBpZiAoZDxtZGlzdCkge1xuICAgICAgICAgIG1kaXN0ID0gZDtcbiAgICAgICAgICBmdCA9IHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAgPSB0aGlzLmNvbXB1dGUoZnQpO1xuICAgICAgcC50ID0gZnQ7XG4gICAgICBwLmQgPSBtZGlzdDtcbiAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlKHQpO1xuICAgIH0sXG4gICAgcG9pbnQ6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2lkeF07XG4gICAgfSxcbiAgICBjb21wdXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAvLyBzaG9ydGN1dHNcbiAgICAgIGlmKHQ9PT0wKSB7IHJldHVybiB0aGlzLnBvaW50c1swXTsgfVxuICAgICAgaWYodD09PTEpIHsgcmV0dXJuIHRoaXMucG9pbnRzW3RoaXMub3JkZXJdOyB9XG5cbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHM7XG4gICAgICB2YXIgbXQgPSAxLXQ7XG5cbiAgICAgIC8vIGxpbmVhcj9cbiAgICAgIGlmKHRoaXMub3JkZXI9PT0xKSB7XG4gICAgICAgIHJldCA9IHtcbiAgICAgICAgICB4OiBtdCpwWzBdLnggKyB0KnBbMV0ueCxcbiAgICAgICAgICB5OiBtdCpwWzBdLnkgKyB0KnBbMV0ueVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fM2QpIHsgcmV0LnogPSBtdCpwWzBdLnogKyB0KnBbMV0uejsgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBxdWFkcmF0aWMvY3ViaWMgY3VydmU/XG4gICAgICBpZih0aGlzLm9yZGVyPDQpIHtcbiAgICAgICAgdmFyIG10MiA9IG10Km10LFxuICAgICAgICAgICAgdDIgPSB0KnQsXG4gICAgICAgICAgICBhLGIsYyxkID0gMDtcbiAgICAgICAgaWYodGhpcy5vcmRlcj09PTIpIHtcbiAgICAgICAgICBwID0gW3BbMF0sIHBbMV0sIHBbMl0sIFpFUk9dO1xuICAgICAgICAgIGEgPSBtdDI7XG4gICAgICAgICAgYiA9IG10KnQqMjtcbiAgICAgICAgICBjID0gdDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLm9yZGVyPT09Mykge1xuICAgICAgICAgIGEgPSBtdDIqbXQ7XG4gICAgICAgICAgYiA9IG10Mip0KjM7XG4gICAgICAgICAgYyA9IG10KnQyKjM7XG4gICAgICAgICAgZCA9IHQqdDI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICB4OiBhKnBbMF0ueCArIGIqcFsxXS54ICsgYypwWzJdLnggKyBkKnBbM10ueCxcbiAgICAgICAgICB5OiBhKnBbMF0ueSArIGIqcFsxXS55ICsgYypwWzJdLnkgKyBkKnBbM10ueVxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgIHJldC56ID0gYSpwWzBdLnogKyBiKnBbMV0ueiArIGMqcFsyXS56ICsgZCpwWzNdLno7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgLy8gaGlnaGVyIG9yZGVyIGN1cnZlczogdXNlIGRlIENhc3RlbGphdSdzIGNvbXB1dGF0aW9uXG4gICAgICB2YXIgZENwdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9pbnRzKSk7XG4gICAgICB3aGlsZShkQ3B0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxkQ3B0cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgZENwdHNbaV0gPSB7XG4gICAgICAgICAgICB4OiBkQ3B0c1tpXS54ICsgKGRDcHRzW2krMV0ueCAtIGRDcHRzW2ldLngpICogdCxcbiAgICAgICAgICAgIHk6IGRDcHRzW2ldLnkgKyAoZENwdHNbaSsxXS55IC0gZENwdHNbaV0ueSkgKiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodHlwZW9mIGRDcHRzW2ldLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRDcHRzW2ldID0gZENwdHNbaV0ueiArIChkQ3B0c1tpKzFdLnogLSBkQ3B0c1tpXS56KSAqIHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZENwdHMuc3BsaWNlKGRDcHRzLmxlbmd0aC0xLCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkQ3B0c1swXTtcbiAgICB9LFxuICAgIHJhaXNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsIG5wID0gW3BbMF1dLCBpLCBrPXAubGVuZ3RoLCBwaSwgcGltO1xuICAgICAgZm9yICh2YXIgaT0xOyBpPGs7IGkrKykge1xuICAgICAgICBwaSA9IHBbaV07XG4gICAgICAgIHBpbSA9IHBbaS0xXTtcbiAgICAgICAgbnBbaV0gPSB7XG4gICAgICAgICAgeDogKGstaSkvayAqIHBpLnggKyBpL2sgKiBwaW0ueCxcbiAgICAgICAgICB5OiAoay1pKS9rICogcGkueSArIGkvayAqIHBpbS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBucFtrXSA9IHBbay0xXTtcbiAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICB9LFxuICAgIGRlcml2YXRpdmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBtdCA9IDEtdCxcbiAgICAgICAgICBhLGIsYz0wLFxuICAgICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMF07XG4gICAgICBpZih0aGlzLm9yZGVyPT09MikgeyBwID0gW3BbMF0sIHBbMV0sIFpFUk9dOyBhID0gbXQ7IGIgPSB0OyB9XG4gICAgICBpZih0aGlzLm9yZGVyPT09MykgeyBhID0gbXQqbXQ7IGIgPSBtdCp0KjI7IGMgPSB0KnQ7IH1cbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IGEqcFswXS54ICsgYipwWzFdLnggKyBjKnBbMl0ueCxcbiAgICAgICAgeTogYSpwWzBdLnkgKyBiKnBbMV0ueSArIGMqcFsyXS55XG4gICAgICB9O1xuICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgcmV0LnogPSBhKnBbMF0ueiArIGIqcFsxXS56ICsgYypwWzJdLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgaW5mbGVjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLmluZmxlY3Rpb25zKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIG5vcm1hbDogZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHRoaXMuXzNkID8gdGhpcy5fX25vcm1hbDModCkgOiB0aGlzLl9fbm9ybWFsMih0KTtcbiAgICB9LFxuICAgIF9fbm9ybWFsMjogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGQgPSB0aGlzLmRlcml2YXRpdmUodCk7XG4gICAgICB2YXIgcSA9IHNxcnQoZC54KmQueCArIGQueSpkLnkpXG4gICAgICByZXR1cm4geyB4OiAtZC55L3EsIHk6IGQueC9xIH07XG4gICAgfSxcbiAgICBfX25vcm1hbDM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1NDUzMTU5XG4gICAgICB2YXIgcjEgPSB0aGlzLmRlcml2YXRpdmUodCksXG4gICAgICAgICAgcjIgPSB0aGlzLmRlcml2YXRpdmUodCswLjAxKSxcbiAgICAgICAgICBxMSA9IHNxcnQocjEueCpyMS54ICsgcjEueSpyMS55ICsgcjEueipyMS56KSxcbiAgICAgICAgICBxMiA9IHNxcnQocjIueCpyMi54ICsgcjIueSpyMi55ICsgcjIueipyMi56KTtcbiAgICAgIHIxLnggLz0gcTE7IHIxLnkgLz0gcTE7IHIxLnogLz0gcTE7XG4gICAgICByMi54IC89IHEyOyByMi55IC89IHEyOyByMi56IC89IHEyO1xuICAgICAgLy8gY3Jvc3MgcHJvZHVjdFxuICAgICAgdmFyIGMgPSB7XG4gICAgICAgIHg6IHIyLnkqcjEueiAtIHIyLnoqcjEueSxcbiAgICAgICAgeTogcjIueipyMS54IC0gcjIueCpyMS56LFxuICAgICAgICB6OiByMi54KnIxLnkgLSByMi55KnIxLnhcbiAgICAgIH07XG4gICAgICB2YXIgbSA9IHNxcnQoYy54KmMueCArIGMueSpjLnkgKyBjLnoqYy56KTtcbiAgICAgIGMueCAvPSBtOyBjLnkgLz0gbTsgYy56IC89IG07XG4gICAgICAvLyByb3RhdGlvbiBtYXRyaXhcbiAgICAgIHZhciBSID0gWyAgIGMueCpjLngsICAgYy54KmMueS1jLnosIGMueCpjLnorYy55LFxuICAgICAgICAgICAgICAgIGMueCpjLnkrYy56LCAgIGMueSpjLnksICAgYy55KmMuei1jLngsXG4gICAgICAgICAgICAgICAgYy54KmMuei1jLnksIGMueSpjLnorYy54LCAgIGMueipjLnogICAgXTtcbiAgICAgIC8vIG5vcm1hbCB2ZWN0b3I6XG4gICAgICB2YXIgbiA9IHtcbiAgICAgICAgeDogUlswXSAqIHIxLnggKyBSWzFdICogcjEueSArIFJbMl0gKiByMS56LFxuICAgICAgICB5OiBSWzNdICogcjEueCArIFJbNF0gKiByMS55ICsgUls1XSAqIHIxLnosXG4gICAgICAgIHo6IFJbNl0gKiByMS54ICsgUls3XSAqIHIxLnkgKyBSWzhdICogcjEuelxuICAgICAgfTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG4gICAgaHVsbDogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cyxcbiAgICAgICAgICBfcCA9IFtdLFxuICAgICAgICAgIHB0LFxuICAgICAgICAgIHEgPSBbXSxcbiAgICAgICAgICBpZHggPSAwLFxuICAgICAgICAgIGk9MCxcbiAgICAgICAgICBsPTA7XG4gICAgICBxW2lkeCsrXSA9IHBbMF07XG4gICAgICBxW2lkeCsrXSA9IHBbMV07XG4gICAgICBxW2lkeCsrXSA9IHBbMl07XG4gICAgICBpZih0aGlzLm9yZGVyID09PSAzKSB7IHFbaWR4KytdID0gcFszXTsgfVxuICAgICAgLy8gd2UgbGVycCBiZXR3ZWVuIGFsbCBwb2ludHMgYXQgZWFjaCBpdGVyYXRpb24sIHVudGlsIHdlIGhhdmUgMSBwb2ludCBsZWZ0LlxuICAgICAgd2hpbGUocC5sZW5ndGg+MSkge1xuICAgICAgICBfcCA9IFtdO1xuICAgICAgICBmb3IoaT0wLCBsPXAubGVuZ3RoLTE7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgcHQgPSB1dGlscy5sZXJwKHQscFtpXSxwW2krMV0pO1xuICAgICAgICAgIHFbaWR4KytdID0gcHQ7XG4gICAgICAgICAgX3AucHVzaChwdCk7XG4gICAgICAgIH1cbiAgICAgICAgcCA9IF9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHE7XG4gICAgfSxcbiAgICBzcGxpdDogZnVuY3Rpb24odDEsIHQyKSB7XG4gICAgICAvLyBzaG9ydGN1dHNcbiAgICAgIGlmKHQxPT09MCAmJiAhIXQyKSB7IHJldHVybiB0aGlzLnNwbGl0KHQyKS5sZWZ0OyB9XG4gICAgICBpZih0Mj09PTEpIHsgcmV0dXJuIHRoaXMuc3BsaXQodDEpLnJpZ2h0OyB9XG5cbiAgICAgIC8vIG5vIHNob3J0Y3V0OiB1c2UgXCJkZSBDYXN0ZWxqYXVcIiBpdGVyYXRpb24uXG4gICAgICB2YXIgcSA9IHRoaXMuaHVsbCh0MSk7XG4gICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBsZWZ0OiB0aGlzLm9yZGVyID09PSAyID8gbmV3IEJlemllcihbcVswXSxxWzNdLHFbNV1dKSA6IG5ldyBCZXppZXIoW3FbMF0scVs0XSxxWzddLHFbOV1dKSxcbiAgICAgICAgcmlnaHQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzVdLHFbNF0scVsyXV0pIDogbmV3IEJlemllcihbcVs5XSxxWzhdLHFbNl0scVszXV0pLFxuICAgICAgICBzcGFuOiBxXG4gICAgICB9O1xuXG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYmluZCBfdDEvX3QyIGluZm9ybWF0aW9uIVxuICAgICAgcmVzdWx0LmxlZnQuX3QxICA9IHV0aWxzLm1hcCgwLCAgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQubGVmdC5fdDIgID0gdXRpbHMubWFwKHQxLCAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5yaWdodC5fdDEgPSB1dGlscy5tYXAodDEsIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LnJpZ2h0Ll90MiA9IHV0aWxzLm1hcCgxLCAgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgbm8gdDIsIHdlJ3JlIGRvbmVcbiAgICAgIGlmKCF0MikgeyByZXR1cm4gcmVzdWx0OyB9XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgYSB0Miwgc3BsaXQgYWdhaW46XG4gICAgICB0MiA9IHV0aWxzLm1hcCh0Mix0MSwxLDAsMSk7XG4gICAgICB2YXIgc3Vic3BsaXQgPSByZXN1bHQucmlnaHQuc3BsaXQodDIpO1xuICAgICAgcmV0dXJuIHN1YnNwbGl0LmxlZnQ7XG4gICAgfSxcbiAgICBleHRyZW1hOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaW1zID0gdGhpcy5kaW1zLFxuICAgICAgICAgIHJlc3VsdD17fSxcbiAgICAgICAgICByb290cz1bXSxcbiAgICAgICAgICBwLCBtZm47XG4gICAgICBkaW1zLmZvckVhY2goZnVuY3Rpb24oZGltKSB7XG4gICAgICAgIG1mbiA9IGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHZbZGltXTsgfTtcbiAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXS5tYXAobWZuKTtcbiAgICAgICAgcmVzdWx0W2RpbV0gPSB1dGlscy5kcm9vdHMocCk7XG4gICAgICAgIGlmKHRoaXMub3JkZXIgPT09IDMpIHtcbiAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzFdLm1hcChtZm4pO1xuICAgICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uY29uY2F0KHV0aWxzLmRyb290cyhwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5maWx0ZXIoZnVuY3Rpb24odCkgeyByZXR1cm4gKHQ+PTAgJiYgdDw9MSk7IH0pO1xuICAgICAgICByb290cyA9IHJvb3RzLmNvbmNhdChyZXN1bHRbZGltXS5zb3J0KCkpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJvb3RzID0gcm9vdHMuc29ydCgpLmZpbHRlcihmdW5jdGlvbih2LGlkeCkgeyByZXR1cm4gKHJvb3RzLmluZGV4T2YodikgPT09IGlkeCk7IH0pO1xuICAgICAgcmVzdWx0LnZhbHVlcyA9IHJvb3RzO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGJib3g6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKSwgcmVzdWx0ID0ge307XG4gICAgICB0aGlzLmRpbXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJlc3VsdFtkXSA9IHV0aWxzLmdldG1pbm1heCh0aGlzLCBkLCBleHRyZW1hW2RdKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgb3ZlcmxhcHM6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB2YXIgbGJib3ggPSB0aGlzLmJib3goKSxcbiAgICAgICAgICB0YmJveCA9IGN1cnZlLmJib3goKTtcbiAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChsYmJveCx0YmJveCk7XG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKHQsIGQpIHtcbiAgICAgIGlmKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5nZXQodCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5ub3JtYWwodCk7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgYzogYyxcbiAgICAgICAgICBuOiBuLFxuICAgICAgICAgIHg6IGMueCArIG4ueCAqIGQsXG4gICAgICAgICAgeTogYy55ICsgbi55ICogZFxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgIHJldC56ID0gYy56ICsgbi56ICogZDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuX2xpbmVhcikge1xuICAgICAgICB2YXIgbnYgPSB0aGlzLm5vcm1hbCgwKTtcbiAgICAgICAgdmFyIGNvb3JkcyA9IHRoaXMucG9pbnRzLm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICAgIHg6IHAueCArIHQgKiBudi54LFxuICAgICAgICAgICAgeTogcC55ICsgdCAqIG52LnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmKHAueiAmJiBuLnopIHsgcmV0LnogPSBwLnogKyB0ICogbnYuejsgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW25ldyBCZXppZXIoY29vcmRzKV07XG4gICAgICB9XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7XG4gICAgICByZXR1cm4gcmVkdWNlZC5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy5zY2FsZSh0KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2ltcGxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmKHRoaXMub3JkZXI9PT0zKSB7XG4gICAgICAgIHZhciBhMSA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMV0pO1xuICAgICAgICB2YXIgYTIgPSB1dGlscy5hbmdsZSh0aGlzLnBvaW50c1swXSwgdGhpcy5wb2ludHNbM10sIHRoaXMucG9pbnRzWzJdKTtcbiAgICAgICAgaWYoYTE+MCAmJiBhMjwwIHx8IGExPDAgJiYgYTI+MCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG4xID0gdGhpcy5ub3JtYWwoMCk7XG4gICAgICB2YXIgbjIgPSB0aGlzLm5vcm1hbCgxKTtcbiAgICAgIHZhciBzID0gbjEueCpuMi54ICsgbjEueSpuMi55O1xuICAgICAgaWYodGhpcy5fM2QpIHsgcyArPSBuMS56Km4yLno7IH1cbiAgICAgIHZhciBhbmdsZSA9IGFicyhhY29zKHMpKTtcbiAgICAgIHJldHVybiBhbmdsZSA8IHBpLzM7XG4gICAgfSxcbiAgICByZWR1Y2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIHQxPTAsIHQyPTAsIHN0ZXA9MC4wMSwgc2VnbWVudCwgcGFzczE9W10sIHBhc3MyPVtdO1xuICAgICAgLy8gZmlyc3QgcGFzczogc3BsaXQgb24gZXh0cmVtYVxuICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKS52YWx1ZXM7XG4gICAgICBpZihleHRyZW1hLmluZGV4T2YoMCk9PT0tMSkgeyBleHRyZW1hID0gWzBdLmNvbmNhdChleHRyZW1hKTsgfVxuICAgICAgaWYoZXh0cmVtYS5pbmRleE9mKDEpPT09LTEpIHsgZXh0cmVtYS5wdXNoKDEpOyB9XG5cbiAgICAgIGZvcih0MT1leHRyZW1hWzBdLCBpPTE7IGk8ZXh0cmVtYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0MiA9IGV4dHJlbWFbaV07XG4gICAgICAgIHNlZ21lbnQgPSB0aGlzLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgc2VnbWVudC5fdDEgPSB0MTtcbiAgICAgICAgc2VnbWVudC5fdDIgPSB0MjtcbiAgICAgICAgcGFzczEucHVzaChzZWdtZW50KTtcbiAgICAgICAgdDEgPSB0MjtcbiAgICAgIH1cblxuICAgICAgLy8gc2Vjb25kIHBhc3M6IGZ1cnRoZXIgcmVkdWNlIHRoZXNlIHNlZ21lbnRzIHRvIHNpbXBsZSBzZWdtZW50c1xuICAgICAgcGFzczEuZm9yRWFjaChmdW5jdGlvbihwMSkge1xuICAgICAgICB0MT0wO1xuICAgICAgICB0Mj0wO1xuICAgICAgICB3aGlsZSh0MiA8PSAxKSB7XG4gICAgICAgICAgZm9yKHQyPXQxK3N0ZXA7IHQyPD0xK3N0ZXA7IHQyKz1zdGVwKSB7XG4gICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsdDIpO1xuICAgICAgICAgICAgaWYoIXNlZ21lbnQuc2ltcGxlKCkpIHtcbiAgICAgICAgICAgICAgdDIgLT0gc3RlcDtcbiAgICAgICAgICAgICAgaWYoYWJzKHQxLXQyKTxzdGVwKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5ldmVyIGZvcm0gYSByZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgICAgICAgc2VnbWVudC5fdDEgPSB1dGlscy5tYXAodDEsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgICAgICBzZWdtZW50Ll90MiA9IHV0aWxzLm1hcCh0MiwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgICAgIHBhc3MyLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgIHQxID0gdDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0MTwxKSB7XG4gICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLDEpO1xuICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICBzZWdtZW50Ll90MiA9IHAxLl90MjtcbiAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXNzMjtcbiAgICB9LFxuICAgIHNjYWxlOiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb3JkZXIgPSB0aGlzLm9yZGVyO1xuICAgICAgdmFyIGRpc3RhbmNlRm4gPSBmYWxzZVxuICAgICAgaWYodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIikgeyBkaXN0YW5jZUZuID0gZDsgfVxuICAgICAgaWYoZGlzdGFuY2VGbiAmJiBvcmRlciA9PT0gMikgeyByZXR1cm4gdGhpcy5yYWlzZSgpLnNjYWxlKGRpc3RhbmNlRm4pOyB9XG5cbiAgICAgIC8vIFRPRE86IGFkZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBkZWdlbmVyYXRlICg9bGluZWFyKSBjdXJ2ZXMuXG4gICAgICB2YXIgY2xvY2t3aXNlID0gdGhpcy5jbG9ja3dpc2U7XG4gICAgICB2YXIgcjEgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigwKSA6IGQ7XG4gICAgICB2YXIgcjIgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigxKSA6IGQ7XG4gICAgICB2YXIgdiA9IFsgdGhpcy5vZmZzZXQoMCwxMCksIHRoaXMub2Zmc2V0KDEsMTApIF07XG4gICAgICB2YXIgbyA9IHV0aWxzLmxsaTQodlswXSwgdlswXS5jLCB2WzFdLCB2WzFdLmMpO1xuICAgICAgaWYoIW8pIHsgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHNjYWxlIHRoaXMgY3VydmUuIFRyeSByZWR1Y2luZyBpdCBmaXJzdC5cIik7IH1cbiAgICAgIC8vIG1vdmUgYWxsIHBvaW50cyBieSBkaXN0YW5jZSAnZCcgd3J0IHRoZSBvcmlnaW4gJ28nXG4gICAgICB2YXIgcG9pbnRzPXRoaXMucG9pbnRzLCBucD1bXTtcblxuICAgICAgLy8gbW92ZSBlbmQgcG9pbnRzIGJ5IGZpeGVkIGRpc3RhbmNlIGFsb25nIG5vcm1hbC5cbiAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcCA9IG5wW3Qqb3JkZXJdID0gdXRpbHMuY29weShwb2ludHNbdCpvcmRlcl0pO1xuICAgICAgICBwLnggKz0gKHQ/cjI6cjEpICogdlt0XS5uLng7XG4gICAgICAgIHAueSArPSAodD9yMjpyMSkgKiB2W3RdLm4ueTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIGlmICghZGlzdGFuY2VGbikge1xuICAgICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIHRvIGxpZSBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoZSBvZmZzZXRcbiAgICAgICAgLy8gZGVyaXZhdGl2ZSB2ZWN0b3IsIGFuZCB0aGUgb3JpZ2luLXRocm91Z2gtY29udHJvbCB2ZWN0b3JcbiAgICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgaWYodGhpcy5vcmRlcj09PTIgJiYgISF0KSByZXR1cm47XG4gICAgICAgICAgdmFyIHAgPSBucFt0Km9yZGVyXTtcbiAgICAgICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcbiAgICAgICAgICB2YXIgcDIgPSB7IHg6IHAueCArIGQueCwgeTogcC55ICsgZC55IH07XG4gICAgICAgICAgbnBbdCsxXSA9IHV0aWxzLmxsaTQocCwgcDIsIG8sIHBvaW50c1t0KzFdKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIGJ5IFwiaG93ZXZlciBtdWNoIG5lY2Vzc2FyeSB0b1xuICAgICAgLy8gZW5zdXJlIHRoZSBjb3JyZWN0IHRhbmdlbnQgdG8gZW5kcG9pbnRcIi5cbiAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICBpZih0aGlzLm9yZGVyPT09MiAmJiAhIXQpIHJldHVybjtcbiAgICAgICAgdmFyIHAgPSBwb2ludHNbdCsxXTtcbiAgICAgICAgdmFyIG92ID0ge1xuICAgICAgICAgIHg6IHAueCAtIG8ueCxcbiAgICAgICAgICB5OiBwLnkgLSBvLnlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJjID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oKHQrMSkvb3JkZXIpIDogZDtcbiAgICAgICAgaWYoZGlzdGFuY2VGbiAmJiAhY2xvY2t3aXNlKSByYyA9IC1yYztcbiAgICAgICAgdmFyIG0gPSBzcXJ0KG92Lngqb3YueCArIG92Lnkqb3YueSk7XG4gICAgICAgIG92LnggLz0gbTtcbiAgICAgICAgb3YueSAvPSBtO1xuICAgICAgICBucFt0KzFdID0ge1xuICAgICAgICAgIHg6IHAueCArIHJjKm92LngsXG4gICAgICAgICAgeTogcC55ICsgcmMqb3YueVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgIH0sXG4gICAgb3V0bGluZTogZnVuY3Rpb24oZDEsIGQyLCBkMywgZDQpIHtcbiAgICAgIGQyID0gKHR5cGVvZiBkMiA9PT0gXCJ1bmRlZmluZWRcIikgPyBkMSA6IGQyO1xuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpLFxuICAgICAgICAgIGxlbiA9IHJlZHVjZWQubGVuZ3RoLFxuICAgICAgICAgIGZjdXJ2ZXMgPSBbXSxcbiAgICAgICAgICBiY3VydmVzID0gW10sXG4gICAgICAgICAgcCxcbiAgICAgICAgICBhbGVuID0gMCxcbiAgICAgICAgICB0bGVuID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgdmFyIGdyYWR1YXRlZCA9ICh0eXBlb2YgZDMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGQ0ICE9PSBcInVuZGVmaW5lZFwiKTtcblxuICAgICAgZnVuY3Rpb24gbGluZWFyRGlzdGFuY2VGdW5jdGlvbihzLGUsIHRsZW4sYWxlbixzbGVuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBmMSA9IGFsZW4vdGxlbiwgZjIgPSAoYWxlbitzbGVuKS90bGVuLCBkID0gZS1zO1xuICAgICAgICAgIHJldHVybiB1dGlscy5tYXAodiwgMCwxLCBzK2YxKmQsIHMrZjIqZCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBmb3JtIGN1cnZlIG91bGluZXNcbiAgICAgIHJlZHVjZWQuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgIHNsZW4gPSBzZWdtZW50Lmxlbmd0aCgpO1xuICAgICAgICBpZiAoZ3JhZHVhdGVkKSB7XG4gICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoICBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKCBkMSwgZDMsIHRsZW4sYWxlbixzbGVuKSAgKSk7XG4gICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoICBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKC1kMiwtZDQsIHRsZW4sYWxlbixzbGVuKSAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoIGQxKSk7XG4gICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoLWQyKSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxlbiArPSBzbGVuO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHJldmVyc2UgdGhlIFwicmV0dXJuXCIgb3V0bGluZVxuICAgICAgYmN1cnZlcyA9IGJjdXJ2ZXMubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcCA9IHMucG9pbnRzO1xuICAgICAgICBpZihwWzNdKSB7IHMucG9pbnRzID0gW3BbM10scFsyXSxwWzFdLHBbMF1dOyB9XG4gICAgICAgIGVsc2UgeyBzLnBvaW50cyA9IFtwWzJdLHBbMV0scFswXV07IH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KS5yZXZlcnNlKCk7XG5cbiAgICAgIC8vIGZvcm0gdGhlIGVuZGNhcHMgYXMgbGluZXNcbiAgICAgIHZhciBmcyA9IGZjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuICAgICAgICAgIGZlID0gZmN1cnZlc1tsZW4tMV0ucG9pbnRzW2ZjdXJ2ZXNbbGVuLTFdLnBvaW50cy5sZW5ndGgtMV0sXG4gICAgICAgICAgYnMgPSBiY3VydmVzW2xlbi0xXS5wb2ludHNbYmN1cnZlc1tsZW4tMV0ucG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgICBiZSA9IGJjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuICAgICAgICAgIGxzID0gdXRpbHMubWFrZWxpbmUoYnMsZnMpLFxuICAgICAgICAgIGxlID0gdXRpbHMubWFrZWxpbmUoZmUsYmUpLFxuICAgICAgICAgIHNlZ21lbnRzID0gW2xzXS5jb25jYXQoZmN1cnZlcykuY29uY2F0KFtsZV0pLmNvbmNhdChiY3VydmVzKSxcbiAgICAgICAgICBzbGVuID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gbmV3IFBvbHlCZXppZXIoc2VnbWVudHMpO1xuICAgIH0sXG4gICAgb3V0bGluZXNoYXBlczogZnVuY3Rpb24oZDEsIGQyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgZDIgPSBkMiB8fCBkMTtcbiAgICAgIHZhciBvdXRsaW5lID0gdGhpcy5vdXRsaW5lKGQxLGQyKS5jdXJ2ZXM7XG4gICAgICB2YXIgc2hhcGVzID0gW107XG4gICAgICBmb3IodmFyIGk9MSwgbGVuPW91dGxpbmUubGVuZ3RoOyBpIDwgbGVuLzI7IGkrKykge1xuICAgICAgICB2YXIgc2hhcGUgPSB1dGlscy5tYWtlc2hhcGUob3V0bGluZVtpXSwgb3V0bGluZVtsZW4taV0sIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgc2hhcGUuc3RhcnRjYXAudmlydHVhbCA9IChpID4gMSk7XG4gICAgICAgIHNoYXBlLmVuZGNhcC52aXJ0dWFsID0gKGkgPCBsZW4vMi0xKTtcbiAgICAgICAgc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoYXBlcztcbiAgICB9LFxuICAgIGludGVyc2VjdHM6IGZ1bmN0aW9uKGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgaWYoIWN1cnZlKSByZXR1cm4gdGhpcy5zZWxmaW50ZXJzZWN0cyhjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICBpZihjdXJ2ZS5wMSAmJiBjdXJ2ZS5wMikge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lSW50ZXJzZWN0cyhjdXJ2ZSk7XG4gICAgICB9XG4gICAgICBpZihjdXJ2ZSBpbnN0YW5jZW9mIEJlemllcikgeyBjdXJ2ZSA9IGN1cnZlLnJlZHVjZSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5jdXJ2ZWludGVyc2VjdHModGhpcy5yZWR1Y2UoKSwgY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICB9LFxuICAgIGxpbmVJbnRlcnNlY3RzOiBmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgbXggPSBtaW4obGluZS5wMS54LCBsaW5lLnAyLngpLFxuICAgICAgICAgIG15ID0gbWluKGxpbmUucDEueSwgbGluZS5wMi55KSxcbiAgICAgICAgICBNWCA9IG1heChsaW5lLnAxLngsIGxpbmUucDIueCksXG4gICAgICAgICAgTVkgPSBtYXgobGluZS5wMS55LCBsaW5lLnAyLnkpLFxuICAgICAgICAgIHNlbGY9dGhpcztcbiAgICAgIHJldHVybiB1dGlscy5yb290cyh0aGlzLnBvaW50cywgbGluZSkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHAgPSBzZWxmLmdldCh0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJldHdlZW4ocC54LCBteCwgTVgpICYmIHV0aWxzLmJldHdlZW4ocC55LCBteSwgTVkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZWxmaW50ZXJzZWN0czogZnVuY3Rpb24oY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcbiAgICAgIC8vIFwic2ltcGxlXCIgY3VydmVzIGNhbm5vdCBpbnRlcnNlY3Qgd2l0aCB0aGVpciBkaXJlY3RcbiAgICAgIC8vIG5laWdoYm91ciwgc28gZm9yIGVhY2ggc2VnbWVudCBYIHdlIGNoZWNrIHdoZXRoZXJcbiAgICAgIC8vIGl0IGludGVyc2VjdHMgWzA6eC0yXVt4KzI6bGFzdF0uXG4gICAgICB2YXIgaSxsZW49cmVkdWNlZC5sZW5ndGgtMixyZXN1bHRzPVtdLHJlc3VsdCxsZWZ0LHJpZ2h0O1xuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBsZWZ0ID0gcmVkdWNlZC5zbGljZShpLGkrMSk7XG4gICAgICAgIHJpZ2h0ID0gcmVkdWNlZC5zbGljZShpKzIpO1xuICAgICAgICByZXN1bHQgPSB0aGlzLmN1cnZlaW50ZXJzZWN0cyhsZWZ0LCByaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoIHJlc3VsdCApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSxcbiAgICBjdXJ2ZWludGVyc2VjdHM6IGZ1bmN0aW9uKGMxLCBjMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgLy8gc3RlcCAxOiBwYWlyIG9mZiBhbnkgb3ZlcmxhcHBpbmcgc2VnbWVudHNcbiAgICAgIGMxLmZvckVhY2goZnVuY3Rpb24obCkge1xuICAgICAgICBjMi5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICBpZihsLm92ZXJsYXBzKHIpKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHsgbGVmdDogbCwgcmlnaHQ6IHIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8gc3RlcCAyOiBmb3IgZWFjaCBwYWlyaW5nLCBydW4gdGhyb3VnaCB0aGUgY29udmVyZ2VuY2UgYWxnb3JpdGhtLlxuICAgICAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5jb25jYXQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgICB9LFxuICAgIGFyY3M6IGZ1bmN0aW9uKGVycm9yVGhyZXNob2xkKSB7XG4gICAgICBlcnJvclRocmVzaG9sZCA9IGVycm9yVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIHZhciBjaXJjbGVzID0gW107XG4gICAgICByZXR1cm4gdGhpcy5faXRlcmF0ZShlcnJvclRocmVzaG9sZCwgY2lyY2xlcyk7XG4gICAgfSxcbiAgICBfZXJyb3I6IGZ1bmN0aW9uKHBjLCBucDEsIHMsIGUpIHtcbiAgICAgIHZhciBxID0gKGUgLSBzKSAvIDQsXG4gICAgICAgICAgYzEgPSB0aGlzLmdldChzICsgcSksXG4gICAgICAgICAgYzIgPSB0aGlzLmdldChlIC0gcSksXG4gICAgICAgICAgcmVmID0gdXRpbHMuZGlzdChwYywgbnAxKSxcbiAgICAgICAgICBkMSAgPSB1dGlscy5kaXN0KHBjLCBjMSksXG4gICAgICAgICAgZDIgID0gdXRpbHMuZGlzdChwYywgYzIpO1xuICAgICAgcmV0dXJuIGFicyhkMS1yZWYpICsgYWJzKGQyLXJlZik7XG4gICAgfSxcbiAgICBfaXRlcmF0ZTogZnVuY3Rpb24oZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpIHtcbiAgICAgIHZhciBzID0gMCwgZSA9IDEsIHNhZmV0eTtcbiAgICAgIC8vIHdlIGRvIGEgYmluYXJ5IHNlYXJjaCB0byBmaW5kIHRoZSBcImdvb2QgYHRgIGNsb3Nlc3QgdG8gbm8tbG9uZ2VyLWdvb2RcIlxuICAgICAgZG8ge1xuICAgICAgICBzYWZldHk9MDtcblxuICAgICAgICAvLyBzdGVwIDE6IHN0YXJ0IHdpdGggdGhlIG1heGltdW0gcG9zc2libGUgYXJjXG4gICAgICAgIGUgPSAxO1xuXG4gICAgICAgIC8vIHBvaW50czpcbiAgICAgICAgdmFyIG5wMSA9IHRoaXMuZ2V0KHMpLCBucDIsIG5wMywgYXJjLCBwcmV2X2FyYztcblxuICAgICAgICAvLyBib29sZWFuczpcbiAgICAgICAgdmFyIGN1cnJfZ29vZCA9IGZhbHNlLCBwcmV2X2dvb2QgPSBmYWxzZSwgZG9uZTtcblxuICAgICAgICAvLyBudW1iZXJzOlxuICAgICAgICB2YXIgbSA9IGUsIHByZXZfZSA9IDEsIHN0ZXAgPSAwO1xuXG4gICAgICAgIC8vIHN0ZXAgMjogZmluZCB0aGUgYmVzdCBwb3NzaWJsZSBhcmNcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHByZXZfZ29vZCA9IGN1cnJfZ29vZDtcbiAgICAgICAgICBwcmV2X2FyYyA9IGFyYztcbiAgICAgICAgICBtID0gKHMgKyBlKS8yO1xuICAgICAgICAgIHN0ZXArKztcblxuICAgICAgICAgIG5wMiA9IHRoaXMuZ2V0KG0pO1xuICAgICAgICAgIG5wMyA9IHRoaXMuZ2V0KGUpO1xuXG4gICAgICAgICAgYXJjID0gdXRpbHMuZ2V0Y2NlbnRlcihucDEsIG5wMiwgbnAzKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvL2Fsc28gc2F2ZSB0aGUgdCB2YWx1ZXNcbiAgICAgICAgICBhcmMuaW50ZXJ2YWwgPSB7XG4gICAgICAgICAgICBzdGFydDogcyxcbiAgICAgICAgICAgIGVuZDogZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLl9lcnJvcihhcmMsIG5wMSwgcywgZSk7XG4gICAgICAgICAgY3Vycl9nb29kID0gKGVycm9yIDw9IGVycm9yVGhyZXNob2xkKTtcblxuICAgICAgICAgIGRvbmUgPSBwcmV2X2dvb2QgJiYgIWN1cnJfZ29vZDtcbiAgICAgICAgICBpZighZG9uZSkgcHJldl9lID0gZTtcblxuICAgICAgICAgIC8vIHRoaXMgYXJjIGlzIGZpbmU6IHdlIGNhbiBtb3ZlICdlJyB1cCB0byBzZWUgaWYgd2UgY2FuIGZpbmQgYSB3aWRlciBhcmNcbiAgICAgICAgICBpZihjdXJyX2dvb2QpIHtcbiAgICAgICAgICAgIC8vIGlmIGUgaXMgYWxyZWFkeSBhdCBtYXgsIHRoZW4gd2UncmUgZG9uZSBmb3IgdGhpcyBhcmMuXG4gICAgICAgICAgICBpZiAoZSA+PSAxKSB7XG4gICAgICAgICAgICAgIHByZXZfZSA9IDE7XG4gICAgICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG5vdCwgbW92ZSBpdCB1cCBieSBoYWxmIHRoZSBpdGVyYXRpb24gZGlzdGFuY2VcbiAgICAgICAgICAgIGUgPSBlICsgKGUtcykvMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGlzIGlzIGEgYmFkIGFyYzogd2UgbmVlZCB0byBtb3ZlICdlJyBkb3duIHRvIGZpbmQgYSBnb29kIGFyY1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZSA9IG07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlKCFkb25lICYmIHNhZmV0eSsrPDEwMCk7XG5cbiAgICAgICAgaWYoc2FmZXR5Pj0xMDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYXJjIGFic3RyYWN0aW9uIHNvbWVob3cgZmFpbGVkLi4uXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJbRl0gYXJjIGZvdW5kXCIsIHMsIHByZXZfZSwgcHJldl9hcmMueCwgcHJldl9hcmMueSwgcHJldl9hcmMucywgcHJldl9hcmMuZSk7XG5cbiAgICAgICAgcHJldl9hcmMgPSAocHJldl9hcmMgPyBwcmV2X2FyYyA6IGFyYyk7XG4gICAgICAgIGNpcmNsZXMucHVzaChwcmV2X2FyYyk7XG4gICAgICAgIHMgPSBwcmV2X2U7XG4gICAgICB9XG4gICAgICB3aGlsZShlIDwgMSk7XG4gICAgICByZXR1cm4gY2lyY2xlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoMTE5KTtcblxuICAvKipcbiAgICogUG9seSBCZXppZXJcbiAgICogQHBhcmFtIHtbdHlwZV19IGN1cnZlcyBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB2YXIgUG9seUJlemllciA9IGZ1bmN0aW9uKGN1cnZlcykge1xuICAgIHRoaXMuY3VydmVzID0gW107XG4gICAgdGhpcy5fM2QgPSBmYWxzZTtcbiAgICBpZighIWN1cnZlcykge1xuICAgICAgdGhpcy5jdXJ2ZXMgPSBjdXJ2ZXM7XG4gICAgICB0aGlzLl8zZCA9IHRoaXMuY3VydmVzWzBdLl8zZDtcbiAgICB9XG4gIH1cblxuICBQb2x5QmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgYWRkQ3VydmU6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB0aGlzLmN1cnZlcy5wdXNoKGN1cnZlKTtcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5fM2QgfHwgY3VydmUuXzNkO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi5sZW5ndGgoKTsgfSkucmVkdWNlKGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYStiOyB9KTtcbiAgICB9LFxuICAgIGN1cnZlOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlc1tpZHhdO1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuY3VydmVzO1xuICAgICAgdmFyIGJib3ggPSBjWzBdLmJib3goKTtcbiAgICAgIGZvcih2YXIgaT0xOyBpPGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXRpbHMuZXhwYW5kYm94KGJib3gsIGNbaV0uYmJveCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYm94O1xuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gW107XG4gICAgICB0aGlzLmN1cnZlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0LmNvbmNhdCh2Lm9mZnNldChkKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihvZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFBvbHlCZXppZXI7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBjb3MgPSBNYXRoLmNvcyxcbiAgICAgIHNpbiA9IE1hdGguc2luLFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIGF0YW4yID0gTWF0aC5hdGFuMixcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwb3cgPSBNYXRoLnBvdyxcbiAgICAgIC8vIGN1YmUgcm9vdCBmdW5jdGlvbiB5aWVsZGluZyByZWFsIHJvb3RzXG4gICAgICBjcnQgPSBmdW5jdGlvbih2KSB7IHJldHVybiAodjwwKSA/IC1wb3coLXYsMS8zKSA6IHBvdyh2LDEvMyk7IH0sXG4gICAgICAvLyB0cmlnIGNvbnN0YW50c1xuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgdGF1ID0gMipwaSxcbiAgICAgIHF1YXJ0ID0gcGkvMixcbiAgICAgIC8vIGZsb2F0IHByZWNpc2lvbiBzaWduaWZpY2FudCBkZWNpbWFsXG4gICAgICBlcHNpbG9uID0gMC4wMDAwMDE7XG5cbiAgLy8gQmV6aWVyIHV0aWxpdHkgZnVuY3Rpb25zXG4gIHZhciB1dGlscyA9IHtcbiAgICAvLyBMZWdlbmRyZS1HYXVzcyBhYnNjaXNzYWUgd2l0aCBuPTI0ICh4X2kgdmFsdWVzLCBkZWZpbmVkIGF0IGk9biBhcyB0aGUgcm9vdHMgb2YgdGhlIG50aCBvcmRlciBMZWdlbmRyZSBwb2x5bm9taWFsIFBuKHgpKVxuICAgIFR2YWx1ZXM6IFtcbiAgICAgIC0wLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAgMC4wNjQwNTY4OTI4NjI2MDU2MjYwODUwNDMwODI2MjQ3NDUwMzg1OTA5LFxuICAgICAgLTAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgICAwLjE5MTExODg2NzQ3MzYxNjMwOTE1ODYzOTgyMDc1NzA2OTYzMTg0MDQsXG4gICAgICAtMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgIDAuMzE1MDQyNjc5Njk2MTYzMzc0Mzg2NzkzMjkxMzE5ODEwMjQwNzg2NCxcbiAgICAgIC0wLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAgMC40MzM3OTM1MDc2MjYwNDUxMzg0ODcwODQyMzE5MTMzNDk3MTI0NTI0LFxuICAgICAgLTAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgICAwLjU0NTQyMTQ3MTM4ODgzOTUzNTY1ODM3NTYxNzIxODM3MjM3MDAxMDcsXG4gICAgICAtMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgIDAuNjQ4MDkzNjUxOTM2OTc1NTY5MjUyNDk1Nzg2OTEwNzQ3NjI2NjY5NixcbiAgICAgIC0wLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAgMC43NDAxMjQxOTE1Nzg1NTQzNjQyNDM4MjgxMDMwOTk5Nzg0MjU1MjMyLFxuICAgICAgLTAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgICAwLjgyMDAwMTk4NTk3MzkwMjkyMTk1Mzk0OTg3MjY2OTc0NTIwODA3NjEsXG4gICAgICAtMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgIDAuODg2NDE1NTI3MDA0NDAxMDM0MjEzMTU0MzQxOTgyMTk2NzU1MDg3MyxcbiAgICAgIC0wLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAgMC45MzgyNzQ1NTIwMDI3MzI3NTg1MjM2NDkwMDE3MDg3MjE0NDk2NTQ4LFxuICAgICAgLTAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgICAwLjk3NDcyODU1NTk3MTMwOTQ5ODE5ODM5MTk5MzAwODE2OTA2MTc0MTEsXG4gICAgICAtMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1LFxuICAgICAgIDAuOTk1MTg3MjE5OTk3MDIxMzYwMTc5OTk3NDA5NzAwNzM2ODExODc0NVxuICAgIF0sXG5cbiAgICAvLyBMZWdlbmRyZS1HYXVzcyB3ZWlnaHRzIHdpdGggbj0yNCAod19pIHZhbHVlcywgZGVmaW5lZCBieSBhIGZ1bmN0aW9uIGxpbmtlZCB0byBpbiB0aGUgQmV6aWVyIHByaW1lciBhcnRpY2xlKVxuICAgIEN2YWx1ZXM6IFtcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OVxuICAgIF0sXG5cbiAgICBhcmNmbjogZnVuY3Rpb24odCwgZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgZCA9IGRlcml2YXRpdmVGbih0KTtcbiAgICAgIHZhciBsID0gZC54KmQueCArIGQueSpkLnk7XG4gICAgICBpZih0eXBlb2YgZC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGwgKz0gZC56KmQuejtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzcXJ0KGwpO1xuICAgIH0sXG5cbiAgICBiZXR3ZWVuOiBmdW5jdGlvbih2LCBtLCBNKSB7XG4gICAgICByZXR1cm4gKG0gPD0gdiAmJiB2IDw9IE0pIHx8IHV0aWxzLmFwcHJveGltYXRlbHkodiwgbSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBNKTtcbiAgICB9LFxuXG4gICAgYXBwcm94aW1hdGVseTogZnVuY3Rpb24oYSxiLHByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIGFicyhhLWIpIDw9IChwcmVjaXNpb24gfHwgZXBzaWxvbik7XG4gICAgfSxcblxuICAgIGxlbmd0aDogZnVuY3Rpb24oZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgej0wLjUsc3VtPTAsbGVuPXV0aWxzLlR2YWx1ZXMubGVuZ3RoLGksdDtcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IHogKiB1dGlscy5UdmFsdWVzW2ldICsgejtcbiAgICAgICAgc3VtICs9IHV0aWxzLkN2YWx1ZXNbaV0gKiB1dGlscy5hcmNmbih0LGRlcml2YXRpdmVGbik7XG4gICAgICB9XG4gICAgICByZXR1cm4geiAqIHN1bTtcbiAgICB9LFxuXG4gICAgbWFwOiBmdW5jdGlvbih2LCBkcyxkZSwgdHMsdGUpIHtcbiAgICAgIHZhciBkMSA9IGRlLWRzLCBkMiA9IHRlLXRzLCB2MiA9ICB2LWRzLCByID0gdjIvZDE7XG4gICAgICByZXR1cm4gdHMgKyBkMipyO1xuICAgIH0sXG5cbiAgICBsZXJwOiBmdW5jdGlvbihyLCB2MSwgdjIpIHtcbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IHYxLnggKyByKih2Mi54LXYxLngpLFxuICAgICAgICB5OiB2MS55ICsgcioodjIueS12MS55KVxuICAgICAgfTtcbiAgICAgIGlmKCEhdjEueiAmJiAhIXYyLnopIHtcbiAgICAgICAgcmV0LnogPSAgdjEueiArIHIqKHYyLnotdjEueik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwb2ludFRvU3RyaW5nOiBmdW5jdGlvbihwKSB7XG4gICAgICB2YXIgcyA9IHAueCtcIi9cIitwLnk7XG4gICAgICBpZih0eXBlb2YgcC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHMgKz0gXCIvXCIrcC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSxcblxuICAgIHBvaW50c1RvU3RyaW5nOiBmdW5jdGlvbihwb2ludHMpIHtcbiAgICAgIHJldHVybiBcIltcIiArIHBvaW50cy5tYXAodXRpbHMucG9pbnRUb1N0cmluZykuam9pbihcIiwgXCIpICsgXCJdXCI7XG4gICAgfSxcblxuICAgIGNvcHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgfSxcblxuICAgIGFuZ2xlOiBmdW5jdGlvbihvLHYxLHYyKSB7XG4gICAgICB2YXIgZHgxID0gdjEueCAtIG8ueCxcbiAgICAgICAgICBkeTEgPSB2MS55IC0gby55LFxuICAgICAgICAgIGR4MiA9IHYyLnggLSBvLngsXG4gICAgICAgICAgZHkyID0gdjIueSAtIG8ueSxcbiAgICAgICAgICBjcm9zcyA9IGR4MSpkeTIgLSBkeTEqZHgyLFxuICAgICAgICAgIG0xID0gc3FydChkeDEqZHgxK2R5MSpkeTEpLFxuICAgICAgICAgIG0yID0gc3FydChkeDIqZHgyK2R5MipkeTIpLFxuICAgICAgICAgIGRvdDtcbiAgICAgIGR4MS89bTE7IGR5MS89bTE7IGR4Mi89bTI7IGR5Mi89bTI7XG4gICAgICBkb3QgPSBkeDEqZHgyICsgZHkxKmR5MjtcbiAgICAgIHJldHVybiBhdGFuMihjcm9zcywgZG90KTtcbiAgICB9LFxuXG4gICAgLy8gcm91bmQgYXMgc3RyaW5nLCB0byBhdm9pZCByb3VuZGluZyBlcnJvcnNcbiAgICByb3VuZDogZnVuY3Rpb24odiwgZCkge1xuICAgICAgdmFyIHMgPSAnJyArIHY7XG4gICAgICB2YXIgcG9zID0gcy5pbmRleE9mKFwiLlwiKTtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHMuc3Vic3RyaW5nKDAscG9zKzErZCkpO1xuICAgIH0sXG5cbiAgICBkaXN0OiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnk7XG4gICAgICByZXR1cm4gc3FydChkeCpkeCtkeSpkeSk7XG4gICAgfSxcblxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKExVVCwgcG9pbnQpIHtcbiAgICAgIHZhciBtZGlzdCA9IHBvdygyLDYzKSwgbXBvcywgZDtcbiAgICAgIExVVC5mb3JFYWNoKGZ1bmN0aW9uKHAsIGlkeCkge1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIG1wb3MgPSBpZHg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgbWRpc3Q6bWRpc3QsIG1wb3M6bXBvcyB9O1xuICAgIH0sXG5cbiAgICBhYmNyYXRpbzogZnVuY3Rpb24odCwgbikge1xuICAgICAgLy8gc2VlIHJhdGlvKHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgYm90dG9tID0gcG93KHQsbikgKyBwb3coMS10LG4pLCB0b3AgPSBib3R0b20gLSAxO1xuICAgICAgcmV0dXJuIGFicyh0b3AvYm90dG9tKTtcbiAgICB9LFxuXG4gICAgcHJvamVjdGlvbnJhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgdSh0KSBub3RlIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mby8jYWJjXG4gICAgICBpZiAobiE9PTIgJiYgbiE9PTMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHQgPSAwLjU7XG4gICAgICB9IGVsc2UgaWYgKHQ9PT0wIHx8IHQ9PT0xKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IHBvdygxLXQsIG4pLCBib3R0b20gPSBwb3codCxuKSArIHRvcDtcbiAgICAgIHJldHVybiB0b3AvYm90dG9tO1xuICAgIH0sXG5cbiAgICBsbGk4OiBmdW5jdGlvbih4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCkge1xuICAgICAgdmFyIG54PSh4MSp5Mi15MSp4MikqKHgzLXg0KS0oeDEteDIpKih4Myp5NC15Myp4NCksXG4gICAgICAgICAgbnk9KHgxKnkyLXkxKngyKSooeTMteTQpLSh5MS15MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBkPSh4MS14MikqKHkzLXk0KS0oeTEteTIpKih4My14NCk7XG4gICAgICBpZihkPT0wKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgcmV0dXJuIHsgeDogbngvZCwgeTogbnkvZCB9O1xuICAgIH0sXG5cbiAgICBsbGk0OiBmdW5jdGlvbihwMSxwMixwMyxwNCkge1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LFxuICAgICAgICAgIHgyID0gcDIueCwgeTIgPSBwMi55LFxuICAgICAgICAgIHgzID0gcDMueCwgeTMgPSBwMy55LFxuICAgICAgICAgIHg0ID0gcDQueCwgeTQgPSBwNC55O1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTgoeDEseTEseDIseTIseDMseTMseDQseTQpO1xuICAgIH0sXG5cbiAgICBsbGk6IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTQodjEsdjEuYyx2Mix2Mi5jKTtcbiAgICB9LFxuXG4gICAgbWFrZWxpbmU6IGZ1bmN0aW9uKHAxLHAyKSB7XG4gICAgICB2YXIgQmV6aWVyID0gcmVxdWlyZSgxMTcpO1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LCB4MiA9IHAyLngsIHkyID0gcDIueSwgZHggPSAoeDIteDEpLzMsIGR5ID0gKHkyLXkxKS8zO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIoeDEsIHkxLCB4MStkeCwgeTErZHksIHgxKzIqZHgsIHkxKzIqZHksIHgyLCB5Mik7XG4gICAgfSxcblxuICAgIGZpbmRiYm94OiBmdW5jdGlvbihzZWN0aW9ucykge1xuICAgICAgdmFyIG14PTk5OTk5OTk5LG15PW14LE1YPS1teCxNWT1NWDtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24ocykge1xuICAgICAgICB2YXIgYmJveCA9IHMuYmJveCgpO1xuICAgICAgICBpZihteCA+IGJib3gueC5taW4pIG14ID0gYmJveC54Lm1pbjtcbiAgICAgICAgaWYobXkgPiBiYm94LnkubWluKSBteSA9IGJib3gueS5taW47XG4gICAgICAgIGlmKE1YIDwgYmJveC54Lm1heCkgTVggPSBiYm94LngubWF4O1xuICAgICAgICBpZihNWSA8IGJib3gueS5tYXgpIE1ZID0gYmJveC55Lm1heDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeyBtaW46IG14LCBtaWQ6KG14K01YKS8yLCBtYXg6IE1YLCBzaXplOk1YLW14IH0sXG4gICAgICAgIHk6IHsgbWluOiBteSwgbWlkOihteStNWSkvMiwgbWF4OiBNWSwgc2l6ZTpNWS1teSB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNoYXBlaW50ZXJzZWN0aW9uczogZnVuY3Rpb24oczEsIGJib3gxLCBzMiwgYmJveDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBpZighdXRpbHMuYmJveG92ZXJsYXAoYmJveDEsIGJib3gyKSkgcmV0dXJuIFtdO1xuICAgICAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICAgIHZhciBhMSA9IFtzMS5zdGFydGNhcCwgczEuZm9yd2FyZCwgczEuYmFjaywgczEuZW5kY2FwXTtcbiAgICAgIHZhciBhMiA9IFtzMi5zdGFydGNhcCwgczIuZm9yd2FyZCwgczIuYmFjaywgczIuZW5kY2FwXTtcbiAgICAgIGExLmZvckVhY2goZnVuY3Rpb24obDEpIHtcbiAgICAgICAgaWYobDEudmlydHVhbCkgcmV0dXJuO1xuICAgICAgICBhMi5mb3JFYWNoKGZ1bmN0aW9uKGwyKSB7XG4gICAgICAgICAgaWYobDIudmlydHVhbCkgcmV0dXJuO1xuICAgICAgICAgIHZhciBpc3MgPSBsMS5pbnRlcnNlY3RzKGwyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgICAgaWYoaXNzLmxlbmd0aD4wKSB7XG4gICAgICAgICAgICBpc3MuYzEgPSBsMTtcbiAgICAgICAgICAgIGlzcy5jMiA9IGwyO1xuICAgICAgICAgICAgaXNzLnMxID0gczE7XG4gICAgICAgICAgICBpc3MuczIgPSBzMjtcbiAgICAgICAgICAgIGludGVyc2VjdGlvbnMucHVzaChpc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICAgIH0sXG5cbiAgICBtYWtlc2hhcGU6IGZ1bmN0aW9uKGZvcndhcmQsIGJhY2ssIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYnBsID0gYmFjay5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIGZwbCA9IGZvcndhcmQucG9pbnRzLmxlbmd0aDtcbiAgICAgIHZhciBzdGFydCAgPSB1dGlscy5tYWtlbGluZShiYWNrLnBvaW50c1ticGwtMV0sIGZvcndhcmQucG9pbnRzWzBdKTtcbiAgICAgIHZhciBlbmQgICAgPSB1dGlscy5tYWtlbGluZShmb3J3YXJkLnBvaW50c1tmcGwtMV0sIGJhY2sucG9pbnRzWzBdKTtcbiAgICAgIHZhciBzaGFwZSAgPSB7XG4gICAgICAgIHN0YXJ0Y2FwOiBzdGFydCxcbiAgICAgICAgZm9yd2FyZDogZm9yd2FyZCxcbiAgICAgICAgYmFjazogYmFjayxcbiAgICAgICAgZW5kY2FwOiBlbmQsXG4gICAgICAgIGJib3g6IHV0aWxzLmZpbmRiYm94KFtzdGFydCwgZm9yd2FyZCwgYmFjaywgZW5kXSlcbiAgICAgIH07XG4gICAgICB2YXIgc2VsZiA9IHV0aWxzO1xuICAgICAgc2hhcGUuaW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKHMyKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNoYXBlaW50ZXJzZWN0aW9ucyhzaGFwZSxzaGFwZS5iYm94LHMyLHMyLmJib3gsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2hhcGU7XG4gICAgfSxcblxuICAgIGdldG1pbm1heDogZnVuY3Rpb24oY3VydmUsIGQsIGxpc3QpIHtcbiAgICAgIGlmKCFsaXN0KSByZXR1cm4geyBtaW46MCwgbWF4OjAgfTtcbiAgICAgIHZhciBtaW49MHhGRkZGRkZGRkZGRkZGRkZGLCBtYXg9LW1pbix0LGM7XG4gICAgICBpZihsaXN0LmluZGV4T2YoMCk9PT0tMSkgeyBsaXN0ID0gWzBdLmNvbmNhdChsaXN0KTsgfVxuICAgICAgaWYobGlzdC5pbmRleE9mKDEpPT09LTEpIHsgbGlzdC5wdXNoKDEpOyB9XG4gICAgICBmb3IodmFyIGk9MCxsZW49bGlzdC5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IGxpc3RbaV07XG4gICAgICAgIGMgPSBjdXJ2ZS5nZXQodCk7XG4gICAgICAgIGlmKGNbZF0gPCBtaW4pIHsgbWluID0gY1tkXTsgfVxuICAgICAgICBpZihjW2RdID4gbWF4KSB7IG1heCA9IGNbZF07IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG1pbjptaW4sIG1pZDoobWluK21heCkvMiwgbWF4Om1heCwgc2l6ZTptYXgtbWluIH07XG4gICAgfSxcblxuICAgIGFsaWduOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIHZhciB0eCA9IGxpbmUucDEueCxcbiAgICAgICAgICB0eSA9IGxpbmUucDEueSxcbiAgICAgICAgICBhID0gLWF0YW4yKGxpbmUucDIueS10eSwgbGluZS5wMi54LXR4KSxcbiAgICAgICAgICBkID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeDogKHYueC10eCkqY29zKGEpIC0gKHYueS10eSkqc2luKGEpLFxuICAgICAgICAgICAgICB5OiAodi54LXR4KSpzaW4oYSkgKyAodi55LXR5KSpjb3MoYSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfTtcbiAgICAgIHJldHVybiBwb2ludHMubWFwKGQpO1xuICAgIH0sXG5cbiAgICByb290czogZnVuY3Rpb24ocG9pbnRzLCBsaW5lKSB7XG4gICAgICBsaW5lID0gbGluZSB8fCB7cDE6e3g6MCx5OjB9LHAyOnt4OjEseTowfX07XG4gICAgICB2YXIgb3JkZXIgPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBwID0gdXRpbHMuYWxpZ24ocG9pbnRzLCBsaW5lKTtcbiAgICAgIHZhciByZWR1Y2UgPSBmdW5jdGlvbih0KSB7IHJldHVybiAwPD10ICYmIHQgPD0xOyB9O1xuXG4gICAgICBpZiAob3JkZXIgPT09IDIpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLnksXG4gICAgICAgICAgICBiID0gcFsxXS55LFxuICAgICAgICAgICAgYyA9IHBbMl0ueSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsgKDIqYi1jKS8yKihiLWMpIF0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBzZWUgaHR0cDovL3d3dy50cmFuczRtaW5kLmNvbS9wZXJzb25hbF9kZXZlbG9wbWVudC9tYXRoZW1hdGljcy9wb2x5bm9taWFscy9jdWJpY0FsZ2VicmEuaHRtXG4gICAgICB2YXIgcGEgPSBwWzBdLnksXG4gICAgICAgICAgcGIgPSBwWzFdLnksXG4gICAgICAgICAgcGMgPSBwWzJdLnksXG4gICAgICAgICAgcGQgPSBwWzNdLnksXG4gICAgICAgICAgZCA9ICgtcGEgKyAzKnBiIC0gMypwYyArIHBkKSxcbiAgICAgICAgICBhID0gKDMqcGEgLSA2KnBiICsgMypwYykgLyBkLFxuICAgICAgICAgIGIgPSAoLTMqcGEgKyAzKnBiKSAvIGQsXG4gICAgICAgICAgYyA9IHBhIC8gZCxcbiAgICAgICAgICBwID0gKDMqYiAtIGEqYSkvMyxcbiAgICAgICAgICBwMyA9IHAvMyxcbiAgICAgICAgICBxID0gKDIqYSphKmEgLSA5KmEqYiArIDI3KmMpLzI3LFxuICAgICAgICAgIHEyID0gcS8yLFxuICAgICAgICAgIGRpc2NyaW1pbmFudCA9IHEyKnEyICsgcDMqcDMqcDMsXG4gICAgICAgICAgdTEsdjEseDEseDIseDM7XG4gICAgICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcbiAgICAgICAgdmFyIG1wMyA9IC1wLzMsXG4gICAgICAgICAgICBtcDMzID0gbXAzKm1wMyptcDMsXG4gICAgICAgICAgICByID0gc3FydCggbXAzMyApLFxuICAgICAgICAgICAgdCA9IC1xLygyKnIpLFxuICAgICAgICAgICAgY29zcGhpID0gdDwtMSA/IC0xIDogdD4xID8gMSA6IHQsXG4gICAgICAgICAgICBwaGkgPSBhY29zKGNvc3BoaSksXG4gICAgICAgICAgICBjcnRyID0gY3J0KHIpLFxuICAgICAgICAgICAgdDEgPSAyKmNydHI7XG4gICAgICAgIHgxID0gdDEgKiBjb3MocGhpLzMpIC0gYS8zO1xuICAgICAgICB4MiA9IHQxICogY29zKChwaGkrdGF1KS8zKSAtIGEvMztcbiAgICAgICAgeDMgPSB0MSAqIGNvcygocGhpKzIqdGF1KS8zKSAtIGEvMztcbiAgICAgICAgcmV0dXJuIFt4MSwgeDIsIHgzXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSBpZihkaXNjcmltaW5hbnQgPT09IDApIHtcbiAgICAgICAgdTEgPSBxMiA8IDAgPyBjcnQoLXEyKSA6IC1jcnQocTIpO1xuICAgICAgICB4MSA9IDIqdTEtYS8zO1xuICAgICAgICB4MiA9IC11MSAtIGEvMztcbiAgICAgICAgcmV0dXJuIFt4MSx4Ml0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2QgPSBzcXJ0KGRpc2NyaW1pbmFudCk7XG4gICAgICAgIHUxID0gY3J0KC1xMitzZCk7XG4gICAgICAgIHYxID0gY3J0KHEyK3NkKTtcbiAgICAgICAgcmV0dXJuIFt1MS12MS1hLzNdLmZpbHRlcihyZWR1Y2UpOztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZHJvb3RzOiBmdW5jdGlvbihwKSB7XG4gICAgICAvLyBxdWFkcmF0aWMgcm9vdHMgYXJlIGVhc3lcbiAgICAgIGlmKHAubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhciBhID0gcFswXSxcbiAgICAgICAgICAgIGIgPSBwWzFdLFxuICAgICAgICAgICAgYyA9IHBbMl0sXG4gICAgICAgICAgICBkID0gYSAtIDIqYiArIGM7XG4gICAgICAgIGlmKGQhPT0wKSB7XG4gICAgICAgICAgdmFyIG0xID0gLXNxcnQoYipiLWEqYyksXG4gICAgICAgICAgICAgIG0yID0gLWErYixcbiAgICAgICAgICAgICAgdjEgPSAtKCBtMSttMikvZCxcbiAgICAgICAgICAgICAgdjIgPSAtKC1tMSttMikvZDtcbiAgICAgICAgICByZXR1cm4gW3YxLCB2Ml07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihiIT09YyAmJiBkPT09MCkge1xuICAgICAgICAgIHJldHVybiBbKDIqYi1jKS8oMiooYi1jKSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gbGluZWFyIHJvb3RzIGFyZSBldmVuIGVhc2llclxuICAgICAgaWYocC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLCBiID0gcFsxXTtcbiAgICAgICAgaWYoYSE9PWIpIHtcbiAgICAgICAgICByZXR1cm4gW2EvKGEtYildO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5mbGVjdGlvbnM6IGZ1bmN0aW9uKHBvaW50cykge1xuICAgICAgaWYgKHBvaW50cy5sZW5ndGg8NCkgcmV0dXJuIFtdO1xuXG4gICAgICAvLyBGSVhNRTogVE9ETzogYWRkIGluIGluZmxlY3Rpb24gYWJzdHJhY3Rpb24gZm9yIHF1YXJ0aWMrIGN1cnZlcz9cblxuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIHsgcDE6IHBvaW50c1swXSwgcDI6IHBvaW50cy5zbGljZSgtMSlbMF0gfSksXG4gICAgICAgICAgYSA9IHBbMl0ueCAqIHBbMV0ueSxcbiAgICAgICAgICBiID0gcFszXS54ICogcFsxXS55LFxuICAgICAgICAgIGMgPSBwWzFdLnggKiBwWzJdLnksXG4gICAgICAgICAgZCA9IHBbM10ueCAqIHBbMl0ueSxcbiAgICAgICAgICB2MSA9IDE4ICogKC0zKmEgKyAyKmIgKyAzKmMgLSBkKSxcbiAgICAgICAgICB2MiA9IDE4ICogKDMqYSAtIGIgLSAzKmMpLFxuICAgICAgICAgIHYzID0gMTggKiAoYyAtIGEpO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseSh2MSwwKSkgcmV0dXJuIFtdO1xuXG4gICAgICB2YXIgdHJtID0gdjIqdjIgLSA0KnYxKnYzLFxuICAgICAgICAgIHNxID0gTWF0aC5zcXJ0KHRybSksXG4gICAgICAgICAgZCA9IDIgKiB2MTtcblxuICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkoZCwwKSkgcmV0dXJuIFtdO1xuXG4gICAgICByZXR1cm4gWyhzcS12MikvZCwgLSh2MitzcSkvZF0uZmlsdGVyKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuICgwIDw9IHIgJiYgciA8PSAxKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiYm94b3ZlcmxhcDogZnVuY3Rpb24oYjEsYjIpIHtcbiAgICAgIHZhciBkaW1zPVsneCcsJ3knXSxsZW49ZGltcy5sZW5ndGgsaSxkaW0sbCx0LGRcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgZGltID0gZGltc1tpXTtcbiAgICAgICAgbCA9IGIxW2RpbV0ubWlkO1xuICAgICAgICB0ID0gYjJbZGltXS5taWQ7XG4gICAgICAgIGQgPSAoYjFbZGltXS5zaXplICsgYjJbZGltXS5zaXplKS8yO1xuICAgICAgICBpZihhYnMobC10KSA+PSBkKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZXhwYW5kYm94OiBmdW5jdGlvbihiYm94LCBfYmJveCkge1xuICAgICAgaWYoX2Jib3gueC5taW4gPCBiYm94LngubWluKSB7IGJib3gueC5taW4gPSBfYmJveC54Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueS5taW4gPCBiYm94LnkubWluKSB7IGJib3gueS5taW4gPSBfYmJveC55Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueiAmJiBfYmJveC56Lm1pbiA8IGJib3guei5taW4pIHsgYmJveC56Lm1pbiA9IF9iYm94LnoubWluOyB9XG4gICAgICBpZihfYmJveC54Lm1heCA+IGJib3gueC5tYXgpIHsgYmJveC54Lm1heCA9IF9iYm94LngubWF4OyB9XG4gICAgICBpZihfYmJveC55Lm1heCA+IGJib3gueS5tYXgpIHsgYmJveC55Lm1heCA9IF9iYm94LnkubWF4OyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWF4ID4gYmJveC56Lm1heCkgeyBiYm94LnoubWF4ID0gX2Jib3guei5tYXg7IH1cbiAgICAgIGJib3gueC5taWQgPSAoYmJveC54Lm1pbiArIGJib3gueC5tYXgpLzI7XG4gICAgICBiYm94LnkubWlkID0gKGJib3gueS5taW4gKyBiYm94LnkubWF4KS8yO1xuICAgICAgaWYoYmJveC56KSB7IGJib3guei5taWQgPSAoYmJveC56Lm1pbiArIGJib3guei5tYXgpLzI7IH1cbiAgICAgIGJib3gueC5zaXplID0gYmJveC54Lm1heCAtIGJib3gueC5taW47XG4gICAgICBiYm94Lnkuc2l6ZSA9IGJib3gueS5tYXggLSBiYm94LnkubWluO1xuICAgICAgaWYoYmJveC56KSB7IGJib3guei5zaXplID0gYmJveC56Lm1heCAtIGJib3guei5taW47IH1cbiAgICB9LFxuXG4gICAgcGFpcml0ZXJhdGlvbjogZnVuY3Rpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIGMxYiA9IGMxLmJib3goKSxcbiAgICAgICAgICBjMmIgPSBjMi5iYm94KCksXG4gICAgICAgICAgciA9IDEwMDAwMCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCB8fCAwLjU7XG4gICAgICBpZihjMWIueC5zaXplICsgYzFiLnkuc2l6ZSA8IHRocmVzaG9sZCAmJiBjMmIueC5zaXplICsgYzJiLnkuc2l6ZSA8IHRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm4gWyAoKHIgKiAoYzEuX3QxK2MxLl90MikvMil8MCkvciArIFwiL1wiICsgKChyICogKGMyLl90MStjMi5fdDIpLzIpfDApL3IgXTtcbiAgICAgIH1cbiAgICAgIHZhciBjYzEgPSBjMS5zcGxpdCgwLjUpLFxuICAgICAgICAgIGNjMiA9IGMyLnNwbGl0KDAuNSksXG4gICAgICAgICAgcGFpcnMgPSBbXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIubGVmdCB9LFxuICAgICAgICAgICAge2xlZnQ6IGNjMS5sZWZ0LCByaWdodDogY2MyLnJpZ2h0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLnJpZ2h0LCByaWdodDogY2MyLnJpZ2h0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLnJpZ2h0LCByaWdodDogY2MyLmxlZnQgfV07XG4gICAgICBwYWlycyA9IHBhaXJzLmZpbHRlcihmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChwYWlyLmxlZnQuYmJveCgpLHBhaXIucmlnaHQuYmJveCgpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIGlmKHBhaXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxuICAgICAgICAgIHV0aWxzLnBhaXJpdGVyYXRpb24ocGFpci5sZWZ0LCBwYWlyLnJpZ2h0LCB0aHJlc2hvbGQpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHYsaSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5pbmRleE9mKHYpID09PSBpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuXG4gICAgZ2V0Y2NlbnRlcjogZnVuY3Rpb24ocDEscDIscDMpIHtcbiAgICAgIHZhciBkeDEgPSAocDIueCAtIHAxLngpLFxuICAgICAgICAgIGR5MSA9IChwMi55IC0gcDEueSksXG4gICAgICAgICAgZHgyID0gKHAzLnggLSBwMi54KSxcbiAgICAgICAgICBkeTIgPSAocDMueSAtIHAyLnkpO1xuICAgICAgdmFyIGR4MXAgPSBkeDEgKiBjb3MocXVhcnQpIC0gZHkxICogc2luKHF1YXJ0KSxcbiAgICAgICAgICBkeTFwID0gZHgxICogc2luKHF1YXJ0KSArIGR5MSAqIGNvcyhxdWFydCksXG4gICAgICAgICAgZHgycCA9IGR4MiAqIGNvcyhxdWFydCkgLSBkeTIgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MnAgPSBkeDIgKiBzaW4ocXVhcnQpICsgZHkyICogY29zKHF1YXJ0KTtcbiAgICAgIC8vIGNob3JkIG1pZHBvaW50c1xuICAgICAgdmFyIG14MSA9IChwMS54ICsgcDIueCkvMixcbiAgICAgICAgICBteTEgPSAocDEueSArIHAyLnkpLzIsXG4gICAgICAgICAgbXgyID0gKHAyLnggKyBwMy54KS8yLFxuICAgICAgICAgIG15MiA9IChwMi55ICsgcDMueSkvMjtcbiAgICAgIC8vIG1pZHBvaW50IG9mZnNldHNcbiAgICAgIHZhciBteDFuID0gbXgxICsgZHgxcCxcbiAgICAgICAgICBteTFuID0gbXkxICsgZHkxcCxcbiAgICAgICAgICBteDJuID0gbXgyICsgZHgycCxcbiAgICAgICAgICBteTJuID0gbXkyICsgZHkycDtcbiAgICAgIC8vIGludGVyc2VjdGlvbiBvZiB0aGVzZSBsaW5lczpcbiAgICAgIHZhciBhcmMgPSB1dGlscy5sbGk4KG14MSxteTEsbXgxbixteTFuLCBteDIsbXkyLG14Mm4sbXkybiksXG4gICAgICAgICAgciA9IHV0aWxzLmRpc3QoYXJjLHAxKSxcbiAgICAgICAgICAvLyBhcmMgc3RhcnQvZW5kIHZhbHVlcywgb3ZlciBtaWQgcG9pbnQ6XG4gICAgICAgICAgcyA9IGF0YW4yKHAxLnkgLSBhcmMueSwgcDEueCAtIGFyYy54KSxcbiAgICAgICAgICBtID0gYXRhbjIocDIueSAtIGFyYy55LCBwMi54IC0gYXJjLngpLFxuICAgICAgICAgIGUgPSBhdGFuMihwMy55IC0gYXJjLnksIHAzLnggLSBhcmMueCksXG4gICAgICAgICAgXztcbiAgICAgIC8vIGRldGVybWluZSBhcmMgZGlyZWN0aW9uIChjdy9jY3cgY29ycmVjdGlvbilcbiAgICAgIGlmIChzPGUpIHtcbiAgICAgICAgLy8gaWYgczxtPGUsIGFyYyhzLCBlKVxuICAgICAgICAvLyBpZiBtPHM8ZSwgYXJjKGUsIHMgKyB0YXUpXG4gICAgICAgIC8vIGlmIHM8ZTxtLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgaWYgKHM+bSB8fCBtPmUpIHsgcyArPSB0YXU7IH1cbiAgICAgICAgaWYgKHM+ZSkgeyBfPWU7IGU9czsgcz1fOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBlPG08cywgYXJjKGUsIHMpXG4gICAgICAgIC8vIGlmIG08ZTxzLCBhcmMocywgZSArIHRhdSlcbiAgICAgICAgLy8gaWYgZTxzPG0sIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICBpZiAoZTxtICYmIG08cykgeyBfPWU7IGU9czsgcz1fOyB9IGVsc2UgeyBlICs9IHRhdTsgfVxuICAgICAgfVxuICAgICAgLy8gYXNzaWduIGFuZCBkb25lLlxuICAgICAgYXJjLnMgPSBzO1xuICAgICAgYXJjLmUgPSBlO1xuICAgICAgYXJjLnIgPSByO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB1dGlscztcbn0oKSk7XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICB2YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbiAgfVxuXG4gIHJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxuICByZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcbn1cblxuaW5pdCgpXG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcbiAgLy8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuICAvLyByZXByZXNlbnQgb25lIGJ5dGVcbiAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG4gIC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2VcbiAgcGxhY2VIb2xkZXJzID0gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxuXG4gIC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICBhcnIgPSBuZXcgQXJyKGxlbiAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgbCA9IHBsYWNlSG9sZGVycyA+IDAgPyBsZW4gLSA0IDogbGVuXG5cbiAgdmFyIEwgPSAwXG5cbiAgZm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfCByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltMKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICsgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICsgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gKyBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgb3V0cHV0ID0gJydcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDJdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz09J1xuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyAodWludDhbbGVuIC0gMV0pXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMTBdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPSdcbiAgfVxuXG4gIHBhcnRzLnB1c2gob3V0cHV0KVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY2xvbmUgPSByZXF1aXJlKDEyNSk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoMTI4KTtcbnZhciBzdHJpbmcgPSByZXF1aXJlKDEzMCk7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMgPSB7XG5cdFx0cmdiOiBbMCwgMCwgMF0sXG5cdFx0aHNsOiBbMCwgMCwgMF0sXG5cdFx0aHN2OiBbMCwgMCwgMF0sXG5cdFx0aHdiOiBbMCwgMCwgMF0sXG5cdFx0Y215azogWzAsIDAsIDAsIDBdLFxuXHRcdGFscGhhOiAxXG5cdH07XG5cblx0Ly8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuXHR2YXIgdmFscztcblx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG5cdFx0aWYgKHZhbHMpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyArIG9iaiArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdHZhbHMgPSBvYmo7XG5cdFx0aWYgKHZhbHMuciAhPT0gdW5kZWZpbmVkIHx8IHZhbHMucmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMubCAhPT0gdW5kZWZpbmVkIHx8IHZhbHMubGlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudiAhPT0gdW5kZWZpbmVkIHx8IHZhbHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzdicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy53ICE9PSB1bmRlZmluZWQgfHwgdmFscy53aGl0ZW5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5jICE9PSB1bmRlZmluZWQgfHwgdmFscy5jeWFuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdjbXlrJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0cmdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ3JnYicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc2wnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc3Y6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHN2JywgYXJndW1lbnRzKTtcblx0fSxcblx0aHdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2h3YicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGNteWs6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnY215aycsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0cmdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuXHR9LFxuXHRoc2xBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG5cdH0sXG5cdGhzdkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcblx0fSxcblx0aHdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuXHR9LFxuXHRjbXlrQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuY215aztcblx0fSxcblx0cmdiYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHRyZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0aHNsYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcblx0XHRyZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdmFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZWQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAwLCB2YWwpO1xuXHR9LFxuXHRncmVlbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAyLCB2YWwpO1xuXHR9LFxuXHRodWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR2YWwgJT0gMzYwO1xuXHRcdFx0dmFsID0gdmFsIDwgMCA/IDM2MCArIHZhbCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMCwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDEsIHZhbCk7XG5cdH0sXG5cdGxpZ2h0bmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDIsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb252OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMSwgdmFsKTtcblx0fSxcblx0d2hpdGVuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMSwgdmFsKTtcblx0fSxcblx0YmxhY2tuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMiwgdmFsKTtcblx0fSxcblx0dmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAyLCB2YWwpO1xuXHR9LFxuXHRjeWFuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDAsIHZhbCk7XG5cdH0sXG5cdG1hZ2VudGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMSwgdmFsKTtcblx0fSxcblx0eWVsbG93OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDIsIHZhbCk7XG5cdH0sXG5cdGJsYWNrOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDMsIHZhbCk7XG5cdH0sXG5cblx0aGV4U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcblx0fSxcblx0cmdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHJnYmFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRod2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0a2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGRhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0bGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgcmdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdyZXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIFt2YWwsIHZhbCwgdmFsXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xlYXJlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0ICovXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdHZhciBjb2xvcjEgPSB0aGlzO1xuXHRcdHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuXHRcdFx0KVxuXHRcdFx0LmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmdiKCk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY29sID0gbmV3IENvbG9yKCk7XG5cdFx0Y29sLnZhbHVlcyA9IGNsb25lKHRoaXMudmFsdWVzKTtcblx0XHRyZXR1cm4gY29sO1xuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cdHZhciB2YWxzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcblx0fVxuXG5cdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdHZhbHMuYSA9IHRoaXMudmFsdWVzLmFscGhhO1xuXHR9XG5cblx0Ly8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cblx0cmV0dXJuIHZhbHM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlLCB2YWxzKSB7XG5cdHZhciBzcGFjZXMgPSB7XG5cdFx0cmdiOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG5cdFx0aHNsOiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcyddLFxuXHRcdGhzdjogWydodWUnLCAnc2F0dXJhdGlvbicsICd2YWx1ZSddLFxuXHRcdGh3YjogWydodWUnLCAnd2hpdGVuZXNzJywgJ2JsYWNrbmVzcyddLFxuXHRcdGNteWs6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddXG5cdH07XG5cblx0dmFyIG1heGVzID0ge1xuXHRcdHJnYjogWzI1NSwgMjU1LCAyNTVdLFxuXHRcdGhzbDogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGhzdjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGh3YjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGNteWs6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG5cdH07XG5cblx0dmFyIGk7XG5cdHZhciBhbHBoYSA9IDE7XG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdGFscGhhID0gdmFscztcblx0fSBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuXHRcdC8vIFsxMCwgMTAsIDEwXVxuXHRcdHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcblx0XHRhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuXHRcdHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hbHBoYTtcblx0fVxuXG5cdHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhID09PSB1bmRlZmluZWQgPyB0aGlzLnZhbHVlcy5hbHBoYSA6IGFscGhhKSkpO1xuXG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBjYXBwZWQ7XG5cblx0Ly8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG5cdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHR9XG5cblx0Ly8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuXHRmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcblx0XHRpZiAoc25hbWUgIT09IHNwYWNlKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKTtcblx0XHR9XG5cblx0XHQvLyBjYXAgdmFsdWVzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlLCBhcmdzKSB7XG5cdHZhciB2YWxzID0gYXJnc1swXTtcblxuXHRpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmdiKClcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuXHR9XG5cblx0Ly8gY29sb3IucmdiKDEwLCAxMCwgMTApXG5cdGlmICh0eXBlb2YgdmFscyA9PT0gJ251bWJlcicpIHtcblx0XHR2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cdH1cblxuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbiAoc3BhY2UsIGluZGV4LCB2YWwpIHtcblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmVkKClcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcblx0fSBlbHNlIGlmICh2YWwgPT09IHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0pIHtcblx0XHQvLyBjb2xvci5yZWQoY29sb3IucmVkKCkpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBjb2xvci5yZWQoMTAwKVxuXHR0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJ2YXIgY2xvbmUgPSAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xvbmVzIChjb3BpZXMpIGFuIE9iamVjdCB1c2luZyBkZWVwIGNvcHlpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3UgYXJlIGNlcnRhaW5cbiAqIHRoZXJlIGFyZSBubyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgb2JqZWN0LCB5b3UgY2FuIHNhdmUgc29tZSBDUFUgdGltZVxuICogYnkgY2FsbGluZyBjbG9uZShvYmosIGZhbHNlKS5cbiAqXG4gKiBDYXV0aW9uOiBpZiBgY2lyY3VsYXJgIGlzIGZhbHNlIGFuZCBgcGFyZW50YCBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzLFxuICogeW91ciBwcm9ncmFtIG1heSBlbnRlciBhbiBpbmZpbml0ZSBsb29wIGFuZCBjcmFzaC5cbiAqXG4gKiBAcGFyYW0gYHBhcmVudGAgLSB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHBhcmFtIGBjaXJjdWxhcmAgLSBzZXQgdG8gdHJ1ZSBpZiB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZCBtYXkgY29udGFpblxuICogICAgY2lyY3VsYXIgcmVmZXJlbmNlcy4gKG9wdGlvbmFsIC0gdHJ1ZSBieSBkZWZhdWx0KVxuICogQHBhcmFtIGBkZXB0aGAgLSBzZXQgdG8gYSBudW1iZXIgaWYgdGhlIG9iamVjdCBpcyBvbmx5IHRvIGJlIGNsb25lZCB0b1xuICogICAgYSBwYXJ0aWN1bGFyIGRlcHRoLiAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBJbmZpbml0eSlcbiAqIEBwYXJhbSBgcHJvdG90eXBlYCAtIHNldHMgdGhlIHByb3RvdHlwZSB0byBiZSB1c2VkIHdoZW4gY2xvbmluZyBhbiBvYmplY3QuXG4gKiAgICAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBwYXJlbnQgcHJvdG90eXBlKS5cbiovXG5mdW5jdGlvbiBjbG9uZShwYXJlbnQsIGNpcmN1bGFyLCBkZXB0aCwgcHJvdG90eXBlKSB7XG4gIHZhciBmaWx0ZXI7XG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT09ICdvYmplY3QnKSB7XG4gICAgZGVwdGggPSBjaXJjdWxhci5kZXB0aDtcbiAgICBwcm90b3R5cGUgPSBjaXJjdWxhci5wcm90b3R5cGU7XG4gICAgZmlsdGVyID0gY2lyY3VsYXIuZmlsdGVyO1xuICAgIGNpcmN1bGFyID0gY2lyY3VsYXIuY2lyY3VsYXJcbiAgfVxuICAvLyBtYWludGFpbiB0d28gYXJyYXlzIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLCB3aGVyZSBjb3JyZXNwb25kaW5nIHBhcmVudHNcbiAgLy8gYW5kIGNoaWxkcmVuIGhhdmUgdGhlIHNhbWUgaW5kZXhcbiAgdmFyIGFsbFBhcmVudHMgPSBbXTtcbiAgdmFyIGFsbENoaWxkcmVuID0gW107XG5cbiAgdmFyIHVzZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PSAndW5kZWZpbmVkJylcbiAgICBjaXJjdWxhciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBkZXB0aCA9PSAndW5kZWZpbmVkJylcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuXG4gIC8vIHJlY3Vyc2UgdGhpcyBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNldCBhbGxQYXJlbnRzIGFuZCBhbGxDaGlsZHJlblxuICBmdW5jdGlvbiBfY2xvbmUocGFyZW50LCBkZXB0aCkge1xuICAgIC8vIGNsb25pbmcgbnVsbCBhbHdheXMgcmV0dXJucyBudWxsXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlcHRoID09IDApXG4gICAgICByZXR1cm4gcGFyZW50O1xuXG4gICAgdmFyIGNoaWxkO1xuICAgIHZhciBwcm90bztcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmUuX19pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gW107XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzUmVnRXhwKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IFJlZ0V4cChwYXJlbnQuc291cmNlLCBfX2dldFJlZ0V4cEZsYWdzKHBhcmVudCkpO1xuICAgICAgaWYgKHBhcmVudC5sYXN0SW5kZXgpIGNoaWxkLmxhc3RJbmRleCA9IHBhcmVudC5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzRGF0ZShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBEYXRlKHBhcmVudC5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBCdWZmZXIocGFyZW50Lmxlbmd0aCk7XG4gICAgICBwYXJlbnQuY29weShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3RvID0gcHJvdG90eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgdmFyIGluZGV4ID0gYWxsUGFyZW50cy5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW5baW5kZXhdO1xuICAgICAgfVxuICAgICAgYWxsUGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICBhbGxDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmVudCkge1xuICAgICAgdmFyIGF0dHJzO1xuICAgICAgaWYgKHByb3RvKSB7XG4gICAgICAgIGF0dHJzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRycyAmJiBhdHRycy5zZXQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNoaWxkW2ldID0gX2Nsb25lKHBhcmVudFtpXSwgZGVwdGggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICByZXR1cm4gX2Nsb25lKHBhcmVudCwgZGVwdGgpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBmbGF0IGNsb25lIHVzaW5nIHByb3RvdHlwZSwgYWNjZXB0cyBvbmx5IG9iamVjdHMsIHVzZWZ1bGwgZm9yIHByb3BlcnR5XG4gKiBvdmVycmlkZSBvbiBGTEFUIGNvbmZpZ3VyYXRpb24gb2JqZWN0IChubyBuZXN0ZWQgcHJvcHMpLlxuICpcbiAqIFVTRSBXSVRIIENBVVRJT04hIFRoaXMgbWF5IG5vdCBiZWhhdmUgYXMgeW91IHdpc2ggaWYgeW91IGRvIG5vdCBrbm93IGhvdyB0aGlzXG4gKiB3b3Jrcy5cbiAqL1xuY2xvbmUuY2xvbmVQcm90b3R5cGUgPSBmdW5jdGlvbiBjbG9uZVByb3RvdHlwZShwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgYyA9IGZ1bmN0aW9uICgpIHt9O1xuICBjLnByb3RvdHlwZSA9IHBhcmVudDtcbiAgcmV0dXJuIG5ldyBjKCk7XG59O1xuXG4vLyBwcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIF9fb2JqVG9TdHIobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufTtcbmNsb25lLl9fb2JqVG9TdHIgPSBfX29ialRvU3RyO1xuXG5mdW5jdGlvbiBfX2lzRGF0ZShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcbmNsb25lLl9faXNEYXRlID0gX19pc0RhdGU7XG5cbmZ1bmN0aW9uIF9faXNBcnJheShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5jbG9uZS5fX2lzQXJyYXkgPSBfX2lzQXJyYXk7XG5cbmZ1bmN0aW9uIF9faXNSZWdFeHAobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbmNsb25lLl9faXNSZWdFeHAgPSBfX2lzUmVnRXhwO1xuXG5mdW5jdGlvbiBfX2dldFJlZ0V4cEZsYWdzKHJlKSB7XG4gIHZhciBmbGFncyA9ICcnO1xuICBpZiAocmUuZ2xvYmFsKSBmbGFncyArPSAnZyc7XG4gIGlmIChyZS5pZ25vcmVDYXNlKSBmbGFncyArPSAnaSc7XG4gIGlmIChyZS5tdWx0aWxpbmUpIGZsYWdzICs9ICdtJztcbiAgcmV0dXJuIGZsYWdzO1xufTtcbmNsb25lLl9fZ2V0UmVnRXhwRmxhZ3MgPSBfX2dldFJlZ0V4cEZsYWdzO1xuXG5yZXR1cm4gY2xvbmU7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKDEyNyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldLmpvaW4oKV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDN9LFxuXHRoc2w6IHtjaGFubmVsczogM30sXG5cdGhzdjoge2NoYW5uZWxzOiAzfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDN9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDR9LFxuXHR4eXo6IHtjaGFubmVsczogM30sXG5cdGxhYjoge2NoYW5uZWxzOiAzfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDN9LFxuXHRoZXg6IHtjaGFubmVsczogMX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDN9LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgcHJvcGVydHlcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIHY7XG5cblx0aWYgKG1heCA9PT0gMCkge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSAoZGVsdGEgLyBtYXggKiAxMDAwKSAvIDEwO1xuXHR9XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHR2ID0gKChtYXggLyAyNTUpICogMTAwMCkgLyAxMDtcblxuXHRyZXR1cm4gW2gsIHMsIHZdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiByZXZlcnNlS2V5d29yZHNbcmdiLmpvaW4oKV07XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn0vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChtYXRjaFswXSwgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTVdLFxuXHRhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1XSxcblx0YXF1YTogWzAsIDI1NSwgMjU1XSxcblx0YXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTJdLFxuXHRhenVyZTogWzI0MCwgMjU1LCAyNTVdLFxuXHRiZWlnZTogWzI0NSwgMjQ1LCAyMjBdLFxuXHRiaXNxdWU6IFsyNTUsIDIyOCwgMTk2XSxcblx0YmxhY2s6IFswLCAwLCAwXSxcblx0YmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1XSxcblx0Ymx1ZTogWzAsIDAsIDI1NV0sXG5cdGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjZdLFxuXHRicm93bjogWzE2NSwgNDIsIDQyXSxcblx0YnVybHl3b29kOiBbMjIyLCAxODQsIDEzNV0sXG5cdGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MF0sXG5cdGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMF0sXG5cdGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMF0sXG5cdGNvcmFsOiBbMjU1LCAxMjcsIDgwXSxcblx0Y29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3XSxcblx0Y29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwXSxcblx0Y3JpbXNvbjogWzIyMCwgMjAsIDYwXSxcblx0Y3lhbjogWzAsIDI1NSwgMjU1XSxcblx0ZGFya2JsdWU6IFswLCAwLCAxMzldLFxuXHRkYXJrY3lhbjogWzAsIDEzOSwgMTM5XSxcblx0ZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMV0sXG5cdGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtncmVlbjogWzAsIDEwMCwgMF0sXG5cdGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDddLFxuXHRkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5XSxcblx0ZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0N10sXG5cdGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMF0sXG5cdGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDRdLFxuXHRkYXJrcmVkOiBbMTM5LCAwLCAwXSxcblx0ZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjJdLFxuXHRkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzXSxcblx0ZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5XSxcblx0ZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOV0sXG5cdGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMV0sXG5cdGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3XSxcblx0ZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NV0sXG5cdGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZGltZ3JleTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1XSxcblx0ZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzRdLFxuXHRmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDBdLFxuXHRmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0XSxcblx0ZnVjaHNpYTogWzI1NSwgMCwgMjU1XSxcblx0Z2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMF0sXG5cdGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1XSxcblx0Z29sZDogWzI1NSwgMjE1LCAwXSxcblx0Z29sZGVucm9kOiBbMjE4LCAxNjUsIDMyXSxcblx0Z3JheTogWzEyOCwgMTI4LCAxMjhdLFxuXHRncmVlbjogWzAsIDEyOCwgMF0sXG5cdGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3XSxcblx0Z3JleTogWzEyOCwgMTI4LCAxMjhdLFxuXHRob25leWRldzogWzI0MCwgMjU1LCAyNDBdLFxuXHRob3RwaW5rOiBbMjU1LCAxMDUsIDE4MF0sXG5cdGluZGlhbnJlZDogWzIwNSwgOTIsIDkyXSxcblx0aW5kaWdvOiBbNzUsIDAsIDEzMF0sXG5cdGl2b3J5OiBbMjU1LCAyNTUsIDI0MF0sXG5cdGtoYWtpOiBbMjQwLCAyMzAsIDE0MF0sXG5cdGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MF0sXG5cdGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1XSxcblx0bGF3bmdyZWVuOiBbMTI0LCAyNTIsIDBdLFxuXHRsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1XSxcblx0bGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMF0sXG5cdGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4XSxcblx0bGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NV0sXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMF0sXG5cdGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NF0sXG5cdGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzXSxcblx0bGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyXSxcblx0bGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MF0sXG5cdGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTBdLFxuXHRsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjJdLFxuXHRsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjRdLFxuXHRsaW1lOiBbMCwgMjU1LCAwXSxcblx0bGltZWdyZWVuOiBbNTAsIDIwNSwgNTBdLFxuXHRsaW5lbjogWzI1MCwgMjQwLCAyMzBdLFxuXHRtYWdlbnRhOiBbMjU1LCAwLCAyNTVdLFxuXHRtYXJvb246IFsxMjgsIDAsIDBdLFxuXHRtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MF0sXG5cdG1lZGl1bWJsdWU6IFswLCAwLCAyMDVdLFxuXHRtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTFdLFxuXHRtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5XSxcblx0bWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTNdLFxuXHRtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4XSxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NF0sXG5cdG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNF0sXG5cdG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzM10sXG5cdG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyXSxcblx0bWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MF0sXG5cdG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjVdLFxuXHRtb2NjYXNpbjogWzI1NSwgMjI4LCAxODFdLFxuXHRuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzNdLFxuXHRuYXZ5OiBbMCwgMCwgMTI4XSxcblx0b2xkbGFjZTogWzI1MywgMjQ1LCAyMzBdLFxuXHRvbGl2ZTogWzEyOCwgMTI4LCAwXSxcblx0b2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1XSxcblx0b3JhbmdlOiBbMjU1LCAxNjUsIDBdLFxuXHRvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwXSxcblx0b3JjaGlkOiBbMjE4LCAxMTIsIDIxNF0sXG5cdHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwXSxcblx0cGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1Ml0sXG5cdHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4XSxcblx0cGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDddLFxuXHRwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxM10sXG5cdHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODVdLFxuXHRwZXJ1OiBbMjA1LCAxMzMsIDYzXSxcblx0cGluazogWzI1NSwgMTkyLCAyMDNdLFxuXHRwbHVtOiBbMjIxLCAxNjAsIDIyMV0sXG5cdHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwXSxcblx0cHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuXHRyZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzXSxcblx0cmVkOiBbMjU1LCAwLCAwXSxcblx0cm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0M10sXG5cdHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNV0sXG5cdHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTldLFxuXHRzYWxtb246IFsyNTAsIDEyOCwgMTE0XSxcblx0c2FuZHlicm93bjogWzI0NCwgMTY0LCA5Nl0sXG5cdHNlYWdyZWVuOiBbNDYsIDEzOSwgODddLFxuXHRzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzhdLFxuXHRzaWVubmE6IFsxNjAsIDgyLCA0NV0sXG5cdHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuXHRza3libHVlOiBbMTM1LCAyMDYsIDIzNV0sXG5cdHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNV0sXG5cdHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c25vdzogWzI1NSwgMjUwLCAyNTBdLFxuXHRzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3XSxcblx0c3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwXSxcblx0dGFuOiBbMjEwLCAxODAsIDE0MF0sXG5cdHRlYWw6IFswLCAxMjgsIDEyOF0sXG5cdHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2XSxcblx0dG9tYXRvOiBbMjU1LCA5OSwgNzFdLFxuXHR0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDhdLFxuXHR2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4XSxcblx0d2hlYXQ6IFsyNDUsIDIyMiwgMTc5XSxcblx0d2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcblx0d2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDVdLFxuXHR5ZWxsb3c6IFsyNTUsIDI1NSwgMF0sXG5cdHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwXVxufTtcblxuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgxMjYpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgxMjkpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKDEyNik7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKDEzMSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgZ2V0UmdiYTogZ2V0UmdiYSxcbiAgIGdldEhzbGE6IGdldEhzbGEsXG4gICBnZXRSZ2I6IGdldFJnYixcbiAgIGdldEhzbDogZ2V0SHNsLFxuICAgZ2V0SHdiOiBnZXRId2IsXG4gICBnZXRBbHBoYTogZ2V0QWxwaGEsXG5cbiAgIGhleFN0cmluZzogaGV4U3RyaW5nLFxuICAgcmdiU3RyaW5nOiByZ2JTdHJpbmcsXG4gICByZ2JhU3RyaW5nOiByZ2JhU3RyaW5nLFxuICAgcGVyY2VudFN0cmluZzogcGVyY2VudFN0cmluZyxcbiAgIHBlcmNlbnRhU3RyaW5nOiBwZXJjZW50YVN0cmluZyxcbiAgIGhzbFN0cmluZzogaHNsU3RyaW5nLFxuICAgaHNsYVN0cmluZzogaHNsYVN0cmluZyxcbiAgIGh3YlN0cmluZzogaHdiU3RyaW5nLFxuICAga2V5d29yZDoga2V5d29yZFxufVxuXG5mdW5jdGlvbiBnZXRSZ2JhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBhYmJyID0gIC9eIyhbYS1mQS1GMC05XXszfSkkLyxcbiAgICAgICBoZXggPSAgL14jKFthLWZBLUYwLTldezZ9KSQvLFxuICAgICAgIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBrZXl3b3JkID0gLyhcXEQrKS87XG5cbiAgIHZhciByZ2IgPSBbMCwgMCwgMF0sXG4gICAgICAgYSA9IDEsXG4gICAgICAgbWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpICogMiwgaSAqIDIgKyAyKSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0pO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuICAgICAgaWYgKG1hdGNoWzFdID09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cbiAgICAgIHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuICAgICAgaWYgKCFyZ2IpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJnYltpXSA9IHNjYWxlKHJnYltpXSwgMCwgMjU1KTtcbiAgIH1cbiAgIGlmICghYSAmJiBhICE9IDApIHtcbiAgICAgIGEgPSAxO1xuICAgfVxuICAgZWxzZSB7XG4gICAgICBhID0gc2NhbGUoYSwgMCwgMSk7XG4gICB9XG4gICByZ2JbM10gPSBhO1xuICAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgcyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGwgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgcywgbCwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldEh3YihzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICB3ID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgYiA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCB3LCBiLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmdiKHN0cmluZykge1xuICAgdmFyIHJnYmEgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICByZXR1cm4gcmdiYSAmJiByZ2JhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRIc2woc3RyaW5nKSB7XG4gIHZhciBoc2xhID0gZ2V0SHNsYShzdHJpbmcpO1xuICByZXR1cm4gaHNsYSAmJiBoc2xhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRBbHBoYShzdHJpbmcpIHtcbiAgIHZhciB2YWxzID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgaWYgKHZhbHMpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEhzbGEoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHdiKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxufVxuXG4vLyBnZW5lcmF0b3JzXG5mdW5jdGlvbiBoZXhTdHJpbmcocmdiKSB7XG4gICByZXR1cm4gXCIjXCIgKyBoZXhEb3VibGUocmdiWzBdKSArIGhleERvdWJsZShyZ2JbMV0pXG4gICAgICAgICAgICAgICsgaGV4RG91YmxlKHJnYlsyXSk7XG59XG5cbmZ1bmN0aW9uIHJnYlN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYihcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAocmdiYVszXSAhPT0gdW5kZWZpbmVkID8gcmdiYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiYShcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXVxuICAgICAgICAgICArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuXG4gICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcbiAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSwgXCIgKyAoYWxwaGEgfHwgcmdiYVszXSB8fCAxKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKGhzbGFbM10gJiYgaHNsYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2woXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHNsYVszXSAhPT0gdW5kZWZpbmVkID8gaHNsYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsYShcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUsIFwiXG4gICAgICAgICAgICsgYWxwaGEgKyBcIilcIjtcbn1cblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmZ1bmN0aW9uIGh3YlN0cmluZyhod2IsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHdiWzNdICE9PSB1bmRlZmluZWQgPyBod2JbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImh3YihcIiArIGh3YlswXSArIFwiLCBcIiArIGh3YlsxXSArIFwiJSwgXCIgKyBod2JbMl0gKyBcIiVcIlxuICAgICAgICAgICArIChhbHBoYSAhPT0gdW5kZWZpbmVkICYmIGFscGhhICE9PSAxID8gXCIsIFwiICsgYWxwaGEgOiBcIlwiKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkKHJnYikge1xuICByZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIHNjYWxlKG51bSwgbWluLCBtYXgpIHtcbiAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcbiAgdmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyBcIjBcIiArIHN0ciA6IHN0cjtcbn1cblxuXG4vL2NyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG4gICByZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIi8vIHJhbmRvbUNvbG9yIGJ5IERhdmlkIE1lcmZpZWxkIHVuZGVyIHRoZSBDQzAgbGljZW5zZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkbWVyZmllbGQvcmFuZG9tQ29sb3IvXG5cbjsoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gIC8vIFN1cHBvcnQgQU1EXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuXG4gIC8vIFN1cHBvcnQgQ29tbW9uSlNcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG5cbiAgICAvLyBTdXBwb3J0IE5vZGVKUyAmIENvbXBvbmVudCwgd2hpY2ggYWxsb3cgbW9kdWxlLmV4cG9ydHMgdG8gYmUgYSBmdW5jdGlvblxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgQ29tbW9uSlMgMS4xLjEgc3BlY1xuICAgIGV4cG9ydHMucmFuZG9tQ29sb3IgPSByYW5kb21Db2xvcjtcblxuICAvLyBTdXBwb3J0IHZhbmlsbGEgc2NyaXB0IGxvYWRpbmdcbiAgfSBlbHNlIHtcbiAgICByb290LnJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgLy8gU2VlZCB0byBnZXQgcmVwZWF0YWJsZSBjb2xvcnNcbiAgdmFyIHNlZWQgPSBudWxsO1xuXG4gIC8vIFNoYXJlZCBjb2xvciBkaWN0aW9uYXJ5XG4gIHZhciBjb2xvckRpY3Rpb25hcnkgPSB7fTtcblxuICAvLyBQb3B1bGF0ZSB0aGUgY29sb3IgZGljdGlvbmFyeVxuICBsb2FkQ29sb3JCb3VuZHMoKTtcblxuICB2YXIgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNlZWQgYW5kIGVuc3VyZSBpdCdzIGFuXG4gICAgLy8gaW50ZWdlci4gT3RoZXJ3aXNlLCByZXNldCB0aGUgc2VlZCB2YWx1ZS5cbiAgICBpZiAob3B0aW9ucy5zZWVkICYmIG9wdGlvbnMuc2VlZCA9PT0gcGFyc2VJbnQob3B0aW9ucy5zZWVkLCAxMCkpIHtcbiAgICAgIHNlZWQgPSBvcHRpb25zLnNlZWQ7XG5cbiAgICAvLyBBIHN0cmluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuc2VlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlZWQgPSBzdHJpbmdUb0ludGVnZXIob3B0aW9ucy5zZWVkKTtcblxuICAgIC8vIFNvbWV0aGluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZCBidXQgaXQgd2Fzbid0IGFuIGludGVnZXIgb3Igc3RyaW5nXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlZWQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNlZWQgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzZWVkIHZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciBvciBzdHJpbmcnKTtcblxuICAgIC8vIE5vIHNlZWQsIHJlc2V0IHRoZSB2YWx1ZSBvdXRzaWRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgSCxTLEI7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGdlbmVyYXRlIG11bHRpcGxlIGNvbG9yc1xuICAgIGlmIChvcHRpb25zLmNvdW50ICE9PSBudWxsICYmIG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICB2YXIgdG90YWxDb2xvcnMgPSBvcHRpb25zLmNvdW50LFxuICAgICAgICAgIGNvbG9ycyA9IFtdO1xuXG4gICAgICBvcHRpb25zLmNvdW50ID0gbnVsbDtcblxuICAgICAgd2hpbGUgKHRvdGFsQ29sb3JzID4gY29sb3JzLmxlbmd0aCkge1xuXG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdlbmVyYXRpbmcgbXVsdGlwbGUgY29sb3JzLFxuICAgICAgICAvLyBpbmNyZW1lbWVudCB0aGUgc2VlZC4gT3RoZXJ3aXNlIHdlJ2QganVzdFxuICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgc2FtZSBjb2xvciBlYWNoIHRpbWUuLi5cbiAgICAgICAgaWYgKHNlZWQgJiYgb3B0aW9ucy5zZWVkKSBvcHRpb25zLnNlZWQgKz0gMTtcblxuICAgICAgICBjb2xvcnMucHVzaChyYW5kb21Db2xvcihvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuY291bnQgPSB0b3RhbENvbG9ycztcblxuICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBwaWNrIGEgaHVlIChIKVxuICAgIEggPSBwaWNrSHVlKG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgSCB0byBkZXRlcm1pbmUgc2F0dXJhdGlvbiAoUylcbiAgICBTID0gcGlja1NhdHVyYXRpb24oSCwgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHVzZSBTIGFuZCBIIHRvIGRldGVybWluZSBicmlnaHRuZXNzIChCKS5cbiAgICBCID0gcGlja0JyaWdodG5lc3MoSCwgUywgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHdlIHJldHVybiB0aGUgSFNCIGNvbG9yIGluIHRoZSBkZXNpcmVkIGZvcm1hdFxuICAgIHJldHVybiBzZXRGb3JtYXQoW0gsUyxCXSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGlja0h1ZSAob3B0aW9ucykge1xuXG4gICAgdmFyIGh1ZVJhbmdlID0gZ2V0SHVlUmFuZ2Uob3B0aW9ucy5odWUpLFxuICAgICAgICBodWUgPSByYW5kb21XaXRoaW4oaHVlUmFuZ2UpO1xuXG4gICAgLy8gSW5zdGVhZCBvZiBzdG9yaW5nIHJlZCBhcyB0d28gc2VwZXJhdGUgcmFuZ2VzLFxuICAgIC8vIHdlIGdyb3VwIHRoZW0sIHVzaW5nIG5lZ2F0aXZlIG51bWJlcnNcbiAgICBpZiAoaHVlIDwgMCkge2h1ZSA9IDM2MCArIGh1ZTt9XG5cbiAgICByZXR1cm4gaHVlO1xuXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrU2F0dXJhdGlvbiAoaHVlLCBvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9ucy5sdW1pbm9zaXR5ID09PSAncmFuZG9tJykge1xuICAgICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbMCwxMDBdKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5odWUgPT09ICdtb25vY2hyb21lJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIHNhdHVyYXRpb25SYW5nZSA9IGdldFNhdHVyYXRpb25SYW5nZShodWUpO1xuXG4gICAgdmFyIHNNaW4gPSBzYXR1cmF0aW9uUmFuZ2VbMF0sXG4gICAgICAgIHNNYXggPSBzYXR1cmF0aW9uUmFuZ2VbMV07XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdicmlnaHQnOlxuICAgICAgICBzTWluID0gNTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgc01pbiA9IHNNYXggLSAxMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgc01heCA9IDU1O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiByYW5kb21XaXRoaW4oW3NNaW4sIHNNYXhdKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja0JyaWdodG5lc3MgKEgsIFMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBiTWluID0gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUyksXG4gICAgICAgIGJNYXggPSAxMDA7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgYk1heCA9IGJNaW4gKyAyMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgYk1pbiA9IChiTWF4ICsgYk1pbikvMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgIGJNaW4gPSAwO1xuICAgICAgICBiTWF4ID0gMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtiTWluLCBiTWF4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtYXQgKGhzdiwgb3B0aW9ucykge1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmZvcm1hdCkge1xuXG4gICAgICBjYXNlICdoc3ZBcnJheSc6XG4gICAgICAgIHJldHVybiBoc3Y7XG5cbiAgICAgIGNhc2UgJ2hzbEFycmF5JzpcbiAgICAgICAgcmV0dXJuIEhTVnRvSFNMKGhzdik7XG5cbiAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgIHZhciBoc2wgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbCgnK2hzbFswXSsnLCAnK2hzbFsxXSsnJSwgJytoc2xbMl0rJyUpJztcblxuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIHZhciBoc2xDb2xvciA9IEhTVnRvSFNMKGhzdik7XG4gICAgICAgIHJldHVybiAnaHNsYSgnK2hzbENvbG9yWzBdKycsICcraHNsQ29sb3JbMV0rJyUsICcraHNsQ29sb3JbMl0rJyUsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b1JHQihoc3YpO1xuXG4gICAgICBjYXNlICdyZ2InOlxuICAgICAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYi5qb2luKCcsICcpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JhJzpcbiAgICAgICAgdmFyIHJnYkNvbG9yID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JDb2xvci5qb2luKCcsICcpICsgJywgJyArIE1hdGgucmFuZG9tKCkgKyAnKSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBIU1Z0b0hleChoc3YpO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUykge1xuXG4gICAgdmFyIGxvd2VyQm91bmRzID0gZ2V0Q29sb3JJbmZvKEgpLmxvd2VyQm91bmRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb3dlckJvdW5kcy5sZW5ndGggLSAxOyBpKyspIHtcblxuICAgICAgdmFyIHMxID0gbG93ZXJCb3VuZHNbaV1bMF0sXG4gICAgICAgICAgdjEgPSBsb3dlckJvdW5kc1tpXVsxXTtcblxuICAgICAgdmFyIHMyID0gbG93ZXJCb3VuZHNbaSsxXVswXSxcbiAgICAgICAgICB2MiA9IGxvd2VyQm91bmRzW2krMV1bMV07XG5cbiAgICAgIGlmIChTID49IHMxICYmIFMgPD0gczIpIHtcblxuICAgICAgICAgdmFyIG0gPSAodjIgLSB2MSkvKHMyIC0gczEpLFxuICAgICAgICAgICAgIGIgPSB2MSAtIG0qczE7XG5cbiAgICAgICAgIHJldHVybiBtKlMgKyBiO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIdWVSYW5nZSAoY29sb3JJbnB1dCkge1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZUludChjb2xvcklucHV0KSA9PT0gJ251bWJlcicpIHtcblxuICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KGNvbG9ySW5wdXQpO1xuXG4gICAgICBpZiAobnVtYmVyIDwgMzYwICYmIG51bWJlciA+IDApIHtcbiAgICAgICAgcmV0dXJuIFtudW1iZXIsIG51bWJlcl07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9ySW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgIGlmIChjb2xvckRpY3Rpb25hcnlbY29sb3JJbnB1dF0pIHtcbiAgICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdO1xuICAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UpIHtyZXR1cm4gY29sb3IuaHVlUmFuZ2U7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbMCwzNjBdO1xuXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXR1cmF0aW9uUmFuZ2UgKGh1ZSkge1xuICAgIHJldHVybiBnZXRDb2xvckluZm8oaHVlKS5zYXR1cmF0aW9uUmFuZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb2xvckluZm8gKGh1ZSkge1xuXG4gICAgLy8gTWFwcyByZWQgY29sb3JzIHRvIG1ha2UgcGlja2luZyBodWUgZWFzaWVyXG4gICAgaWYgKGh1ZSA+PSAzMzQgJiYgaHVlIDw9IDM2MCkge1xuICAgICAgaHVlLT0gMzYwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNvbG9yTmFtZSBpbiBjb2xvckRpY3Rpb25hcnkpIHtcbiAgICAgICB2YXIgY29sb3IgPSBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UgJiZcbiAgICAgICAgICAgaHVlID49IGNvbG9yLmh1ZVJhbmdlWzBdICYmXG4gICAgICAgICAgIGh1ZSA8PSBjb2xvci5odWVSYW5nZVsxXSkge1xuICAgICAgICAgIHJldHVybiBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICB9XG4gICAgfSByZXR1cm4gJ0NvbG9yIG5vdCBmb3VuZCc7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21XaXRoaW4gKHJhbmdlKSB7XG4gICAgaWYgKHNlZWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmdlWzBdICsgTWF0aC5yYW5kb20oKSoocmFuZ2VbMV0gKyAxIC0gcmFuZ2VbMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9TZWVkZWQgcmFuZG9tIGFsZ29yaXRobSBmcm9tIGh0dHA6Ly9pbmRpZWdhbXIuY29tL2dlbmVyYXRlLXJlcGVhdGFibGUtcmFuZG9tLW51bWJlcnMtaW4tanMvXG4gICAgICB2YXIgbWF4ID0gcmFuZ2VbMV0gfHwgMTtcbiAgICAgIHZhciBtaW4gPSByYW5nZVswXSB8fCAwO1xuICAgICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgIHZhciBybmQgPSBzZWVkIC8gMjMzMjgwLjA7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBybmQgKiAobWF4IC0gbWluKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IZXggKGhzdil7XG5cbiAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gJzAnICsgaGV4IDogaGV4O1xuICAgIH1cblxuICAgIHZhciBoZXggPSAnIycgKyBjb21wb25lbnRUb0hleChyZ2JbMF0pICsgY29tcG9uZW50VG9IZXgocmdiWzFdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsyXSk7XG5cbiAgICByZXR1cm4gaGV4O1xuXG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVDb2xvciAobmFtZSwgaHVlUmFuZ2UsIGxvd2VyQm91bmRzKSB7XG5cbiAgICB2YXIgc01pbiA9IGxvd2VyQm91bmRzWzBdWzBdLFxuICAgICAgICBzTWF4ID0gbG93ZXJCb3VuZHNbbG93ZXJCb3VuZHMubGVuZ3RoIC0gMV1bMF0sXG5cbiAgICAgICAgYk1pbiA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzFdLFxuICAgICAgICBiTWF4ID0gbG93ZXJCb3VuZHNbMF1bMV07XG5cbiAgICBjb2xvckRpY3Rpb25hcnlbbmFtZV0gPSB7XG4gICAgICBodWVSYW5nZTogaHVlUmFuZ2UsXG4gICAgICBsb3dlckJvdW5kczogbG93ZXJCb3VuZHMsXG4gICAgICBzYXR1cmF0aW9uUmFuZ2U6IFtzTWluLCBzTWF4XSxcbiAgICAgIGJyaWdodG5lc3NSYW5nZTogW2JNaW4sIGJNYXhdXG4gICAgfTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZENvbG9yQm91bmRzICgpIHtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgbnVsbCxcbiAgICAgIFtbMCwwXSxbMTAwLDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdyZWQnLFxuICAgICAgWy0yNiwxOF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkyXSxbNDAsODldLFs1MCw4NV0sWzYwLDc4XSxbNzAsNzBdLFs4MCw2MF0sWzkwLDU1XSxbMTAwLDUwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnb3JhbmdlJyxcbiAgICAgIFsxOSw0Nl0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkzXSxbNDAsODhdLFs1MCw4Nl0sWzYwLDg1XSxbNzAsNzBdLFsxMDAsNzBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICd5ZWxsb3cnLFxuICAgICAgWzQ3LDYyXSxcbiAgICAgIFtbMjUsMTAwXSxbNDAsOTRdLFs1MCw4OV0sWzYwLDg2XSxbNzAsODRdLFs4MCw4Ml0sWzkwLDgwXSxbMTAwLDc1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnZ3JlZW4nLFxuICAgICAgWzYzLDE3OF0sXG4gICAgICBbWzMwLDEwMF0sWzQwLDkwXSxbNTAsODVdLFs2MCw4MV0sWzcwLDc0XSxbODAsNjRdLFs5MCw1MF0sWzEwMCw0MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2JsdWUnLFxuICAgICAgWzE3OSwgMjU3XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODZdLFs0MCw4MF0sWzUwLDc0XSxbNjAsNjBdLFs3MCw1Ml0sWzgwLDQ0XSxbOTAsMzldLFsxMDAsMzVdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwdXJwbGUnLFxuICAgICAgWzI1OCwgMjgyXSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODddLFs0MCw3OV0sWzUwLDcwXSxbNjAsNjVdLFs3MCw1OV0sWzgwLDUyXSxbOTAsNDVdLFsxMDAsNDJdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwaW5rJyxcbiAgICAgIFsyODMsIDMzNF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkwXSxbNDAsODZdLFs2MCw4NF0sWzgwLDgwXSxbOTAsNzVdLFsxMDAsNzNdXVxuICAgICk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvUkdCIChoc3YpIHtcblxuICAgIC8vIHRoaXMgZG9lc24ndCB3b3JrIGZvciB0aGUgdmFsdWVzIG9mIDAgYW5kIDM2MFxuICAgIC8vIGhlcmUncyB0aGUgaGFja3kgZml4XG4gICAgdmFyIGggPSBoc3ZbMF07XG4gICAgaWYgKGggPT09IDApIHtoID0gMTt9XG4gICAgaWYgKGggPT09IDM2MCkge2ggPSAzNTk7fVxuXG4gICAgLy8gUmViYXNlIHRoZSBoLHMsdiB2YWx1ZXNcbiAgICBoID0gaC8zNjA7XG4gICAgdmFyIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgICB2ID0gaHN2WzJdLzEwMDtcblxuICAgIHZhciBoX2kgPSBNYXRoLmZsb29yKGgqNiksXG4gICAgICBmID0gaCAqIDYgLSBoX2ksXG4gICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICBxID0gdiAqICgxIC0gZipzKSxcbiAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpKnMpLFxuICAgICAgciA9IDI1NixcbiAgICAgIGcgPSAyNTYsXG4gICAgICBiID0gMjU2O1xuXG4gICAgc3dpdGNoKGhfaSkge1xuICAgICAgY2FzZSAwOiByID0gdjsgZyA9IHQ7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHIgPSBxOyBnID0gdjsgYiA9IHA7ICBicmVhaztcbiAgICAgIGNhc2UgMjogciA9IHA7IGcgPSB2OyBiID0gdDsgIGJyZWFrO1xuICAgICAgY2FzZSAzOiByID0gcDsgZyA9IHE7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IHIgPSB0OyBnID0gcDsgYiA9IHY7ICBicmVhaztcbiAgICAgIGNhc2UgNTogciA9IHY7IGcgPSBwOyBiID0gcTsgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbTWF0aC5mbG9vcihyKjI1NSksIE1hdGguZmxvb3IoZyoyNTUpLCBNYXRoLmZsb29yKGIqMjU1KV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSFNMIChoc3YpIHtcbiAgICB2YXIgaCA9IGhzdlswXSxcbiAgICAgIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgdiA9IGhzdlsyXS8xMDAsXG4gICAgICBrID0gKDItcykqdjtcblxuICAgIHJldHVybiBbXG4gICAgICBoLFxuICAgICAgTWF0aC5yb3VuZChzKnYgLyAoazwxID8gayA6IDItaykgKiAxMDAwMCkgLyAxMDAsXG4gICAgICBrLzIgKiAxMDBcbiAgICBdO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5nVG9JbnRlZ2VyIChzdHJpbmcpIHtcbiAgICB2YXIgdG90YWwgPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvdGFsID49IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSBicmVhaztcbiAgICAgIHRvdGFsICs9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiB0b3RhbFxuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUNvbG9yO1xufSkpO1xuIl19
