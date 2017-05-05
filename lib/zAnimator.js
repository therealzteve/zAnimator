(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"10":10,"16":16,"18":18,"3":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'amount', true);
  (0, _check_parameter2.default)(options, 'width', true);
  (0, _check_parameter2.default)(options, 'height', true);
  (0, _check_parameter2.default)(options, 'speed', true);
  (0, _check_parameter2.default)(options, 'length', true);

  var horVerLines = {};
  horVerLines.amount = options.amount;
  horVerLines.width = options.width;
  horVerLines.height = options.height;
  horVerLines.speed = options.speed;
  horVerLines.length = options.length;
  horVerLines.view = (0, _container2.default)();

  horVerLines._linesMovers = [];

  for (var i = 0; i < horVerLines.amount; i++) {
    var _line = (0, _line3.default)({ 'linePath': (0, _line5.default)({ 'end': { 'x': horVerLines.length, 'y': Math.random() * horVerLines.height } }) });

    var lineMover = (0, _line_mover2.default)({
      subject: _line.view,
      startPoint: { x: -horVerLines.length, y: 0 },
      goalPoint: { x: horVerLines.width, y: 0 },
      interval: (0, _interval2.default)({ 'type': 'ms', 'ms': horVerLines.width / horVerLines.speed * 1000 }),
      steepness: 1
    });

    horVerLines.view.addChild(_line.view);
    horVerLines._linesMovers.push(lineMover);
  }

  horVerLines.start = function () {
    for (var j = 0; j < this.amount; j++) {
      this._linesMovers[j].start();
    }
  };

  horVerLines.stop = function () {
    for (var j = 0; j < this.amount; j++) {
      this._linesMovers[j].stop();
    }
  };

  return horVerLines;
};

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _line2 = require(81);

var _line3 = _interopRequireDefault(_line2);

var _line4 = require(102);

var _line5 = _interopRequireDefault(_line4);

var _line_mover = require(111);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(116);

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"106":106,"111":111,"116":116,"77":77,"81":81}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_rect_mover_background = require(4);

var _random_rect_mover_background2 = _interopRequireDefault(_random_rect_mover_background);

var _hor_ver_lines = require(2);

var _hor_ver_lines2 = _interopRequireDefault(_hor_ver_lines);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomRectMoverBackground: _random_rect_mover_background2.default,
  horVerLines: _hor_ver_lines2.default
};


},{"2":2,"4":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'amount', true);
  (0, _check_parameter2.default)(options, 'width', true);
  (0, _check_parameter2.default)(options, 'height', true);
  (0, _check_parameter2.default)(options, 'component', true);
  (0, _check_parameter2.default)(options, 'speed', true);

  var randomRectMoveBackground = {};
  randomRectMoveBackground.amount = options.amount;
  randomRectMoveBackground.width = options.width;
  randomRectMoveBackground.height = options.height;
  randomRectMoveBackground.sourceComponent = options.component;
  randomRectMoveBackground.speed = options.speed;
  randomRectMoveBackground.view = (0, _container2.default)();

  randomRectMoveBackground._movers = [];

  for (var i = 0; i < randomRectMoveBackground.amount; i++) {
    var square = randomRectMoveBackground.sourceComponent.getCopy();
    randomRectMoveBackground._movers.push((0, _random_in_rect_mover2.default)({
      subject: square.view,
      speed: randomRectMoveBackground.speed,
      width: randomRectMoveBackground.width,
      height: randomRectMoveBackground.height }));
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

var _random_in_rect_mover = require(113);

var _random_in_rect_mover2 = _interopRequireDefault(_random_in_rect_mover);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"113":113,"77":77}],5:[function(require,module,exports){
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

var _path = require(83);

var _path2 = _interopRequireDefault(_path);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(101);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(99);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"106":106,"118":118,"77":77,"83":83,"99":99}],7:[function(require,module,exports){
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

var _path = require(83);

var _path2 = _interopRequireDefault(_path);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(101);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"106":106,"118":118,"77":77,"83":83}],8:[function(require,module,exports){
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

var _path = require(83);

var _path2 = _interopRequireDefault(_path);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(101);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"106":106,"118":118,"77":77,"83":83}],9:[function(require,module,exports){
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

var _path = require(83);

var _path2 = _interopRequireDefault(_path);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(101);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"106":106,"118":118,"77":77,"83":83}],10:[function(require,module,exports){
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

var _loop = require(109);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(83);

var _path2 = _interopRequireDefault(_path);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"109":109,"77":77,"83":83}],12:[function(require,module,exports){
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

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(83);

var _path2 = _interopRequireDefault(_path);

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"118":118,"77":77,"83":83}],13:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(91);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"91":91}],14:[function(require,module,exports){
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
  switchInterval._listener = null;

  switchInterval.start = function () {
    this._listener = this._groupSwitchTimer.addListener(this.handle, this);
    this._groupSwitchTimer.start();
  };

  switchInterval.stop = function () {
    this._groupSwitchTimer.stop();
    this._groupSwitchTimer.removeListener(this._listener);
  };

  switchInterval.view = switchInterval._groupSwitch.view;

  switchInterval.handle = function () {
    this._groupSwitch.switch();
  };

  return switchInterval;
};

var _random_square_switch = require(13);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _interval_timer = require(117);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"117":117,"13":13}],15:[function(require,module,exports){
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

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = randomKaroSwitch.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var child = _step.value;

      randomKaroSwitch._zoomOutComponents.push((0, _zoom_out2.default)({ child: child, interval: randomKaroSwitch.zoomSpeed }));
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

  var group = (0, _rectangle_group2.default)({ 'children': randomKaroSwitch._zoomOutComponents, 'columns': randomKaroSwitch.columns, 'spacing': randomKaroSwitch.spacing });

  randomKaroSwitch.view = group.view;

  randomKaroSwitch.zoomOut = function () {
    var randomNumbers = [];
    for (var i = 0; i < this.children.length; i++) {
      randomNumbers.push(i);
      this._zoomOutComponents[i].reset();
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(91);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _zoom_out = require(74);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"74":74,"91":91}],16:[function(require,module,exports){
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

  (0, _check_parameter2.default)(options, 'child', true);
  (0, _check_parameter2.default)(options, 'interval', true);

  options.numberOfIntervals = 1;
  options.limit = 0;
  options.rising = true;
  options.centerIfPossible = true;
  options.width = options.child.getWidth();
  options.height = options.child.getHeight();
  options.subject = options.child;
  options.steepness = 1;
  options.numberOfIntervals = 1;

  var zoomOut = {};
  zoomOut._centralizer = (0, _centralizer2.default)(options);
  zoomOut._zoomer = (0, _linear_pulsar2.default)(options);
  zoomOut.view = zoomOut._centralizer.view;

  zoomOut.start = function () {
    this._zoomer.start();
  };

  zoomOut.stop = function () {
    this._zoomer.stop();
  };

  zoomOut.reset = function () {
    this._zoomer.reset();
  };

  return zoomOut;
};

var _linear_pulsar = require(114);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _centralizer = require(93);

var _centralizer2 = _interopRequireDefault(_centralizer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"114":114,"93":93}],18:[function(require,module,exports){
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

var _abstract_component = require(73);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"73":73}],20:[function(require,module,exports){
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
            this.view.graphics.beginFill(this.color).drawCircle(this.circleShape.radius * this.scale, this.circleShape.radius * this.scale, this.circleShape.radius * this.scale);
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19}],21:[function(require,module,exports){
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

var _add_up_points = require(96);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19,"23":23,"96":96}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(98);

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


},{"98":98}],24:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19}],25:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19}],26:[function(require,module,exports){
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

var _add_up_points = require(96);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19,"23":23,"96":96}],28:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(106);

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


},{"106":106,"19":19}],30:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(19);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"19":19}],31:[function(require,module,exports){
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

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"88":88}],33:[function(require,module,exports){
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

var _abstract_group = require(32);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"32":32,"87":87}],34:[function(require,module,exports){
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

var _abstract_group = require(32);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"32":32,"87":87}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(38);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(37);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(34);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(39);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(36);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(33);

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


},{"33":33,"34":34,"36":36,"37":37,"38":38,"39":39}],36:[function(require,module,exports){
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

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(32);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"32":32,"87":87}],37:[function(require,module,exports){
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

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(32);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"32":32,"87":87}],38:[function(require,module,exports){
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

var _abstract_group = require(32);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"32":32,"87":87}],39:[function(require,module,exports){
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

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(32);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"32":32,"87":87}],40:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"88":88,"94":94}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _centralizer = require(40);

var _centralizer2 = _interopRequireDefault(_centralizer);

var _pathMover = require(42);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _linear = require(43);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(44);

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


},{"40":40,"42":42,"43":43,"44":44}],42:[function(require,module,exports){
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

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_filter = require(95);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"88":88,"94":94,"95":95}],43:[function(require,module,exports){
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

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(92);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_mover = require(111);

var _line_mover2 = _interopRequireDefault(_line_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"111":111,"88":88,"92":92,"94":94}],44:[function(require,module,exports){
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

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(92);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_shake_mover = require(112);

var _line_shake_mover2 = _interopRequireDefault(_line_shake_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"112":112,"88":88,"92":92,"94":94}],45:[function(require,module,exports){
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

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _transition_filter = require(95);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"88":88,"94":94,"95":95}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {

    var flasher = (0, _animation_filter2.default)((0, _single_child_filter2.default)((0, _abstract_filter2.default)(), options), options);

    flasher.handle = function () {
        this.view.visible = Math.random() > 0.5;
    };

    return flasher;
};

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _animation_filter = require(89);

var _animation_filter2 = _interopRequireDefault(_animation_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"88":88,"89":89,"94":94}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'child', true);
  (0, _check_parameter2.default)(options, 'speed', false, 1);
  var linearRotator = (0, _animation_filter2.default)((0, _abstract_filter2.default)());
  linearRotator.speed = options.speed;
  linearRotator.view.addChild(options.child.view);

  function handle(event) {
    this.view.rotation = this.view.rotation + this.speed * (event.delta / 1000);
  }

  linearRotator.handle = handle;

  return linearRotator;
};

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _animation_filter = require(89);

var _animation_filter2 = _interopRequireDefault(_animation_filter);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"88":88,"89":89}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(98);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(106);

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


},{"106":106,"98":98}],49:[function(require,module,exports){
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

var _bezierJs = require(119);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"119":119}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(105);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(97);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(106);

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


},{"105":105,"106":106,"97":97}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(96);

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


},{"96":96}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(48);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(50);

var _line2 = _interopRequireDefault(_line);

var _path = require(51);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(49);

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


},{"48":48,"49":49,"50":50,"51":51}],53:[function(require,module,exports){
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

var _path = require(103);

var _path2 = _interopRequireDefault(_path);

var _arc = require(100);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"103":103,"106":106}],54:[function(require,module,exports){
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

var _path = require(103);

var _path2 = _interopRequireDefault(_path);

var _line = require(102);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"103":103,"106":106}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(54);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(56);

var _square2 = _interopRequireDefault(_square);

var _circle = require(53);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"53":53,"54":54,"56":56}],56:[function(require,module,exports){
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

var _path = require(103);

var _path2 = _interopRequireDefault(_path);

var _line = require(102);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"103":103,"106":106}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addAnimation: function addAnimation(handle, scope) {
    createjs.Ticker.setFPS(60);
    return createjs.Ticker.on('tick', handle, scope);
  },
  removeAnimation: function removeAnimation(listener) {
    createjs.Ticker.off('tick', listener);
  }
};


},{}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(31);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(46);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(45);

var _fader2 = _interopRequireDefault(_fader);

var _group = require(35);

var _group2 = _interopRequireDefault(_group);

var _mover = require(41);

var _mover2 = _interopRequireDefault(_mover);

var _linear_rotator = require(47);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _randomColor = require(135);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(57);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(55);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(52);

var _paths2 = _interopRequireDefault(_paths);

var _compositions = require(1);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(70);

var _proxies2 = _interopRequireDefault(_proxies);

var _interval = require(72);

var _interval2 = _interopRequireDefault(_interval);

var _modificators = require(61);

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


},{"1":1,"135":135,"31":31,"35":35,"41":41,"45":45,"46":46,"47":47,"52":52,"55":55,"57":57,"61":61,"70":70,"72":72}],59:[function(require,module,exports){
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

var _color = require(127);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(108);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"108":108,"118":118,"127":127}],60:[function(require,module,exports){
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

var _loop = require(109);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(135);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(108);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"108":108,"109":109,"135":135}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_color_changer = require(60);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(59);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(65);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _random_arc_mover = require(63);

var _random_arc_mover2 = _interopRequireDefault(_random_arc_mover);

var _random_in_rect_mover = require(64);

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


},{"59":59,"60":60,"63":63,"64":64,"65":65}],62:[function(require,module,exports){
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

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(115);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"110":110,"115":115}],63:[function(require,module,exports){
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

var _arc = require(100);

var _arc2 = _interopRequireDefault(_arc);

var _loop = require(109);

var _loop2 = _interopRequireDefault(_loop);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rotate_point = require(104);

var _rotate_point2 = _interopRequireDefault(_rotate_point);

var _set_prop = require(108);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"104":104,"106":106,"108":108,"109":109}],64:[function(require,module,exports){
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
  randomInRectMover.height = options.height;

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
    onFinishedInterval: function onFinishedInterval() {
      randomInRectMover.__onCurrentGoalReached();
    },
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line_mover = require(62);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(116);

var _interval2 = _interopRequireDefault(_interval);

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _to_vector = require(105);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(97);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"105":105,"106":106,"110":110,"116":116,"62":62,"97":97}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'limit', true);
  (0, _check_parameter2.default)(options, 'rising', false, true);

  var linearPulsar = (0, _transition_modificator2.default)((0, _abstract_modificator2.default)(options), options);
  linearPulsar.limit = options.limit;

  linearPulsar.reset = function () {
    this.transition.stop();
    this.handle(0);
  };

  linearPulsar.handle = function (current) {
    (0, _set_prop2.default)(this.subject, 'scale', 1 + current * (this.limit - 1));
    this.subject.draw();
  };

  return linearPulsar;
};

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(115);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(108);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"108":108,"110":110,"115":115}],66:[function(require,module,exports){
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

var _set_prop = require(108);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"108":108}],67:[function(require,module,exports){
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

var _abstract_proxy = require(66);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"66":66}],69:[function(require,module,exports){
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

var _interval_timer = require(117);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(68);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(66);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106,"117":117,"66":66,"68":68}],70:[function(require,module,exports){
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
    var randomElementIndex = Math.floor(Math.random() * this.group.length);
    proxy._setPropOfElement(this.group[randomElementIndex], name, value);
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"106":106}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  /* private vars */
  var abstractComponent = {};
  abstractComponent._callbacks = {};

  abstractComponent.addEventListener = function (eventName, callback, scope) {
    if (!this._callbacks[eventName]) {
      this._callbacks[eventName] = [];
    }
    var listener = { callback: callback, scope: scope };
    this._callbacks[eventName].push(listener);
    return listener;
  };

  abstractComponent.removeEventListener = function (eventName, listener) {
    if (this._callbacks[eventName]) {
      var index = this._callbacks[eventName].indexOf(listener);
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

        callback.callback.call(callback.scope);
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

var _copy = require(107);

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"107":107}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'child', true);
  (0, _check_parameter2.default)(options, 'interval', true);

  options.numberOfIntervals = 1;
  options.limit = 0;
  options.rising = true;
  options.centerIfPossible = true;
  options.width = options.child.getWidth();
  options.height = options.child.getHeight();
  options.subject = options.child;
  options.steepness = 1;
  options.numberOfIntervals = 1;

  var zoomOut = {};
  zoomOut._centralizer = (0, _centralizer2.default)(options);
  zoomOut._zoomer = (0, _linear_pulsar2.default)(options);
  zoomOut.view = zoomOut._centralizer.view;

  zoomOut.start = function () {
    this._zoomer.start();
  };

  zoomOut.stop = function () {
    this._zoomer.stop();
  };

  zoomOut.reset = function () {
    this._zoomer.reset();
  };

  return zoomOut;
};

var _linear_pulsar = require(114);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _centralizer = require(93);

var _centralizer2 = _interopRequireDefault(_centralizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"114":114,"93":93}],75:[function(require,module,exports){
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

var _abstract_component = require(73);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"73":73}],76:[function(require,module,exports){
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
            this.view.graphics.beginFill(this.color).drawCircle(this.circleShape.radius * this.scale, this.circleShape.radius * this.scale, this.circleShape.radius * this.scale);
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

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};

},{}],78:[function(require,module,exports){
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

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(79);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(96);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75,"79":79,"96":96}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(98);

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

},{"98":98}],80:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75}],81:[function(require,module,exports){
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

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75}],82:[function(require,module,exports){
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

},{}],83:[function(require,module,exports){
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

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(79);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(96);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75,"79":79,"96":96}],84:[function(require,module,exports){
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

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(106);

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

},{"106":106,"75":75}],86:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(75);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"75":75}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(77);

var _container2 = _interopRequireDefault(_container);

var _square = require(85);

var _square2 = _interopRequireDefault(_square);

var _circle = require(76);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(84);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(82);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(81);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(78);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(80);

var _image2 = _interopRequireDefault(_image);

var _video = require(86);

var _video2 = _interopRequireDefault(_video);

var _path = require(83);

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

},{"76":76,"77":77,"78":78,"80":80,"81":81,"82":82,"83":83,"84":84,"85":85,"86":86}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var filter = (0, _abstract_component2.default)();

    filter.view = _factory2.default.container();

    return filter;
};

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_component = require(73);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"73":73,"87":87}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter) {

    filter._listener = null;
    /* Public functions */
    function start() {
        this._listener = _loop2.default.addAnimation(this.handle, this);
    }

    function stop() {
        _loop2.default.removeAnimation(this._listener);
    }

    filter.start = start;
    filter.stop = stop;

    return filter;
};

var _loop = require(109);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"109":109}],90:[function(require,module,exports){
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

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"88":88}],91:[function(require,module,exports){
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

var _abstract_group = require(90);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(87);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"87":87,"90":90}],92:[function(require,module,exports){
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

},{}],93:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_filter = require(88);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(94);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"88":88,"94":94}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filter, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'child', true);

    /* private vars */
    filter._child = options.child;
    filter._listener = null;

    /* callbacks */
    filter.__onPropertyChange = function () {
        if (this.onPropertyChange) {
            this.onPropertyChange();
        }
        this.sendEvent('property_change');
    };

    /* methods */
    filter.setChild = function (newChild) {
        if (this._child.removeEventListener) {
            this._child.removeEventListener('property_change', this._listener);
        }
        this.view.removeChild(this._child.view);
        this._child = newChild;
        if (this._child.addEventListener) {
            this._listener = this._child.addEventListener('property_change', this.__onPropertyChange, this);
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106}],95:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"118":118}],96:[function(require,module,exports){
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

},{}],97:[function(require,module,exports){
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

},{}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};

},{}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(98);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"98":98}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(98);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(106);

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

},{"106":106,"98":98}],101:[function(require,module,exports){
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

var _bezierJs = require(119);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"119":119}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(105);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(97);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(106);

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

},{"105":105,"106":106,"97":97}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(96);

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

},{"96":96}],104:[function(require,module,exports){
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

},{}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};

},{}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (parameterObject, option, required, defaultValue) {
  if (!required) {
    parameterObject[option] = parameterObject.hasOwnProperty(option) && typeof parameterObject[option] !== 'undefined' ? parameterObject[option] : defaultValue;
  } else {
    if (!parameterObject.hasOwnProperty(option) || typeof parameterObject[option] === 'undefined') {
      throw new Error('Missing required option:' + option);
    }
  }
};

},{}],107:[function(require,module,exports){
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

                              indexOf = sourceReferences.indexOf(nextSource);

                              if (indexOf !== -1) {
                                        // The source is already referenced, just assign reference
                                        descriptor.value = targetReferences[indexOf];
                                        Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                                        continue;
                              }

                              sourceReferences.push(nextSource);
                              targetReferences.push(descriptor.value);

                              Object.defineProperty(current.target, keys[propertyIndex], descriptor);

                              copies.push({ source: nextSource, target: descriptor.value });
                    }
          }

          return cloneObject;
};

},{}],108:[function(require,module,exports){
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
    throw new Error('Cannot set property of object. Object hasn\'t the property: ' + property);
  }
};

},{}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addAnimation: function addAnimation(handle, scope) {
    createjs.Ticker.setFPS(60);
    return createjs.Ticker.on('tick', handle, scope);
  },
  removeAnimation: function removeAnimation(listener) {
    createjs.Ticker.off('tick', listener);
  }
};

},{}],110:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106}],111:[function(require,module,exports){
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

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(115);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"110":110,"115":115}],112:[function(require,module,exports){
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

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(115);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"110":110,"115":115}],113:[function(require,module,exports){
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
  randomInRectMover.height = options.height;

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
    onFinishedInterval: function onFinishedInterval() {
      randomInRectMover.__onCurrentGoalReached();
    },
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line_mover = require(111);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(116);

var _interval2 = _interopRequireDefault(_interval);

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _to_vector = require(105);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(97);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"105":105,"106":106,"110":110,"111":111,"116":116,"97":97}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'limit', true);
  (0, _check_parameter2.default)(options, 'rising', false, true);

  var linearPulsar = (0, _transition_modificator2.default)((0, _abstract_modificator2.default)(options), options);
  linearPulsar.limit = options.limit;

  linearPulsar.reset = function () {
    this.transition.stop();
    this.handle(0);
  };

  linearPulsar.handle = function (current) {
    (0, _set_prop2.default)(this.subject, 'scale', 1 + current * (this.limit - 1));
    this.subject.draw();
  };

  return linearPulsar;
};

var _abstract_modificator = require(110);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(115);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(108);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"108":108,"110":110,"115":115}],115:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (modificator, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'interval', true);
    (0, _check_parameter2.default)(options, 'steepness', false, 0.5);
    (0, _check_parameter2.default)(options, 'numberOfIntervals', false, 0);

    /* private vars */
    modificator.transition = (0, _transition_loop2.default)(options.interval, options.steepness, 0, options.numberOfIntervals, options.onFinishedInterval);

    /* Public methods */
    modificator.start = function () {
        this.transition.start(this.handle, this);
    };

    modificator.stop = function () {
        this.transition.stop();
    };

    return modificator;
};

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(118);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106,"118":118}],116:[function(require,module,exports){
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

var _check_parameter = require(106);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"106":106}],117:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (interval) {
  var timer = {};
  timer.currentTime = 0;
  timer.interval = interval;
  timer.listeners = [];
  timer._listener = null;

  timer.handle = function (event) {
    this.currentTime += event.delta;

    while (this.currentTime > this.interval) {
      this._callListeners();
      this.currentTime -= this.interval;
    }
  };

  timer.addListener = function (callback, scope) {
    var listener = { callback: callback, scope: scope };
    this.listeners.push(listener);
    return listener;
  };

  timer.removeListener = function (listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  };

  timer.start = function () {
    this._listener = _loop2.default.addAnimation(this.handle, this);
  };

  timer.stop = function () {
    _loop2.default.removeAnimation(this._listener);
  };

  timer._callListeners = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var listener = _step.value;

        listener.callback.call(listener.scope);
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

var _loop = require(109);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"109":109}],118:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(109);

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
  pulsar._listener = null;

  pulsar.start = function (callback, scope) {
    if (this._listener) {
      this.stop();
    }
    this.callback = callback;
    this._cbScope = scope;
    this.currentInterval = 0;
    this.currentMseconds = current ? current * this.interval.getMs() : 0;
    this._listener = _loop2.default.addAnimation(this.handle, this);
  };

  pulsar.stop = function () {
    _loop2.default.removeAnimation(this._listener);
    this._listener = null;
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
      this.callback.call(this._cbScope, currentValue, event);
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

},{"109":109}],119:[function(require,module,exports){
module.exports = require(120);

},{"120":120}],120:[function(require,module,exports){
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
  var utils = require(122);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(121);

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

},{"121":121,"122":122}],121:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(122);

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

},{"122":122}],122:[function(require,module,exports){
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
      var Bezier = require(120);
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

},{"120":120}],123:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(124)
var ieee754 = require(125)
var isArray = require(126)

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

},{"124":124,"125":125,"126":126}],124:[function(require,module,exports){
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

},{}],125:[function(require,module,exports){
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

},{}],126:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],127:[function(require,module,exports){
/* MIT license */
var clone = require(128);
var convert = require(131);
var string = require(133);

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

},{"128":128,"131":131,"133":133}],128:[function(require,module,exports){
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

}).call(this,require(123).Buffer)

},{"123":123}],129:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(130);

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

},{"130":130}],130:[function(require,module,exports){
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


},{}],131:[function(require,module,exports){
var conversions = require(129);
var route = require(132);

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

},{"129":129,"132":132}],132:[function(require,module,exports){
var conversions = require(129);

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


},{"129":129}],133:[function(require,module,exports){
/* MIT license */
var colorNames = require(134);

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

},{"134":134}],134:[function(require,module,exports){
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
},{}],135:[function(require,module,exports){
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

},{}]},{},[58])(58)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcbW92aW5nX2JhY2tncm91bmRzXFxob3JfdmVyX2xpbmVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxtb3ZpbmdfYmFja2dyb3VuZHNcXG1vdmluZ19iYWNrZ3JvdW5kcy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcbW92aW5nX2JhY2tncm91bmRzXFxyYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxiZXppZXJcXGJlemllci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxjcG9pbnRfc3Bpbm5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxjdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxzd2luZ2luZ19saW5lLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxiZXppZXJcXHdhdmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXHBhdGhfbWFnaWMuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXHJhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFx0cmFuc2l0aW9uX3BhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHJhbmRvbV9zcXVhcmVfc3dpdGNoLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHJhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHJhbmRvbV9zcXVhcmVfem9vbV9vdXQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHNxdWFyZV9ncm91cF9zdHVmZlxcc3F1YXJlX2dyb3VwX3N0dWZmLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFx6b29tX3N0dWZmXFx6b29tX291dC5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcem9vbV9zdHVmZlxcem9vbV9zdHVmZi5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGFic3RyYWN0X3NoYXBlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY2lyY2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY29udGFpbmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY3VzdG9tX29iamVjdC5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGhlbHBlclxccGF0aF9kcmF3ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxpbWFnZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGxpbmUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxtYWluX2NvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHBhdGguanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxyZWN0YW5nbGUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxzcXVhcmUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFx2aWRlby5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGZhY3RvcnkuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcYWJzdHJhY3RfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcY2VudGVyX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGNpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyYW5kb21fY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJhbmRvbV9yZWN0YW5nbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmVjdGFuZ2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHNwaXJhbF9jaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxcY2VudGVyXFxjZW50cmFsaXplci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxtb3Zlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwYXRoXFxwYXRoLW1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBvaW50MnBvaW50XFxsaW5lYXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhcl9zaGFrZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG9wYWNpdHlcXGZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmxhc2hlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXHJvdGF0b3JcXGxpbmVhcl9yb3RhdG9yLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxhcmMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aHMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxjaXJjbGUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxyZWN0YW5nbGUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxzaGFwZXMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxzcXVhcmUuanMiLCIudG1wXFxzY3JpcHRzXFxsb29wLmpzIiwiLnRtcFxcc2NyaXB0c1xcbWFpbi5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXGNvbG9yX2ZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxccmFuZG9tX2NvbG9yX2NoYW5nZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXG1vZGlmaWNhdG9ycy5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHBvc2l0aW9uXFxyYW5kb21fYXJjX21vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxwb3NpdGlvblxccmFuZG9tX2luX3JlY3RfbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcYWJzdHJhY3RfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxkZWZhdWx0X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW5jcmVtZW50X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW50ZXJ2YWxfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxwcm94aWVzLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xccmFuZG9tX3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xcdGltZXJzXFxpbnRlcnZhbC5qcyIsImFwcFxcc2NyaXB0c1xcYWJzdHJhY3RfY29tcG9uZW50LmpzIiwiYXBwXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHpvb21fc3R1ZmZcXHpvb21fb3V0LmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9zaGFwZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY2lyY2xlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjb250YWluZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGN1c3RvbV9vYmplY3QuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGhlbHBlclxccGF0aF9kcmF3ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGltYWdlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxsaW5lLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxtYWluX2NvbnRhaW5lci5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccGF0aC5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccmVjdGFuZ2xlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxzcXVhcmUuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHZpZGVvLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiYXBwXFxzY3JpcHRzXFxmaWx0ZXJzXFxhYnN0cmFjdF9maWx0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZpbHRlcnNcXGFuaW1hdGlvbl9maWx0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxhYnN0cmFjdF9ncm91cC5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJlY3RhbmdsZV9ncm91cC5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW9kaWZpY2F0b3JfZmlsdGVyLmpzIiwiYXBwXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxcY2VudGVyXFxjZW50cmFsaXplci5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcc2luZ2xlX2NoaWxkX2ZpbHRlci5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcdHJhbnNpdGlvbl9maWx0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxhZGRfdXBfcG9pbnRzLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcZGlzdGFuY2UuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGRlZ3JlZXNfdG9fY29vcmRpbmF0ZXMuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcYXJjLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsImFwcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxsaW5lLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHBhdGguanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxyb3RhdGVfcG9pbnQuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFx0b192ZWN0b3IuanMiLCJhcHBcXHNjcmlwdHNcXGludGVybmFsXFxjaGVja19wYXJhbWV0ZXIuanMiLCJhcHBcXHNjcmlwdHNcXGludGVybmFsXFxjb3B5LmpzIiwiYXBwXFxzY3JpcHRzXFxpbnRlcm5hbFxcc2V0X3Byb3AuanMiLCJhcHBcXHNjcmlwdHNcXGxvb3AuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcYWJzdHJhY3RfbW9kaWZpY2F0b3IuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfbW92ZXIuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfc2hha2VfbW92ZXIuanMiLCJhcHBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXHJhbmRvbV9pbl9yZWN0X21vdmVyLmpzIiwiYXBwXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiYXBwXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHRyYW5zaXRpb25fbW9kaWZpY2F0b3IuanMiLCJhcHBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWwuanMiLCJhcHBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWxfdGltZXIuanMiLCJhcHBcXHNjcmlwdHNcXHRyYW5zaXRpb25zXFx0cmFuc2l0aW9uX2xvb3AuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvYmV6aWVyLmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvcG9seS1iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jc3Mta2V5d29yZHMuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW5kb21Db2xvci9yYW5kb21Db2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksY0FBYyxRQUFRLHlCQUFSLENBQWxCOztBQUVBLElBQUksZUFBZSx1QkFBdUIsV0FBdkIsQ0FBbkI7O0FBRUEsSUFBSSxzQkFBc0IsUUFBUSx5Q0FBUixDQUExQjs7QUFFQSxJQUFJLHVCQUF1Qix1QkFBdUIsbUJBQXZCLENBQTNCOztBQUVBLElBQUksY0FBYyxRQUFRLHlCQUFSLENBQWxCOztBQUVBLElBQUksZUFBZSx1QkFBdUIsV0FBdkIsQ0FBbkI7O0FBRUEsSUFBSSxzQkFBc0IsUUFBUSx5Q0FBUixDQUExQjs7QUFFQSxJQUFJLHVCQUF1Qix1QkFBdUIsbUJBQXZCLENBQTNCOztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixRQUFRLE9BQVIsR0FBa0I7QUFDaEIsYUFBVyxhQUFhLE9BRFI7QUFFaEIsb0JBQWtCLHFCQUFxQixPQUZ2QjtBQUdoQixhQUFXLGFBQWEsT0FIUjtBQUloQixxQkFBbUIscUJBQXFCO0FBSnhCLENBQWxCO0FBTUE7OztBQzlCQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxRQUFRLE9BQVIsR0FBa0IsVUFBVSxPQUFWLEVBQW1COztBQUVuQyxHQUFDLEdBQUcsa0JBQWtCLE9BQXRC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2gxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0d0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BhdGhfbWFnaWMgPSByZXF1aXJlKCcuL3BhdGhfbWFnaWMvcGF0aF9tYWdpYycpO1xuXG52YXIgX3BhdGhfbWFnaWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9tYWdpYyk7XG5cbnZhciBfc3F1YXJlX2dyb3VwX3N0dWZmID0gcmVxdWlyZSgnLi9zcXVhcmVfZ3JvdXBfc3R1ZmYvc3F1YXJlX2dyb3VwX3N0dWZmJyk7XG5cbnZhciBfc3F1YXJlX2dyb3VwX3N0dWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZV9ncm91cF9zdHVmZik7XG5cbnZhciBfem9vbV9zdHVmZiA9IHJlcXVpcmUoJy4vem9vbV9zdHVmZi96b29tX3N0dWZmJyk7XG5cbnZhciBfem9vbV9zdHVmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX3N0dWZmKTtcblxudmFyIF9tb3ZpbmdfYmFja2dyb3VuZHMgPSByZXF1aXJlKCcuL21vdmluZ19iYWNrZ3JvdW5kcy9tb3ZpbmdfYmFja2dyb3VuZHMnKTtcblxudmFyIF9tb3ZpbmdfYmFja2dyb3VuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW92aW5nX2JhY2tncm91bmRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBwYXRoTWFnaWM6IF9wYXRoX21hZ2ljMi5kZWZhdWx0LFxuICBzcXVhcmVHcm91cFN0dWZmOiBfc3F1YXJlX2dyb3VwX3N0dWZmMi5kZWZhdWx0LFxuICB6b29tU3R1ZmY6IF96b29tX3N0dWZmMi5kZWZhdWx0LFxuICBtb3ZpbmdCYWNrZ3JvdW5kczogX21vdmluZ19iYWNrZ3JvdW5kczIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvc2l0aW9ucy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Ftb3VudCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcblxuICB2YXIgaG9yVmVyTGluZXMgPSB7fTtcbiAgaG9yVmVyTGluZXMuYW1vdW50ID0gb3B0aW9ucy5hbW91bnQ7XG4gIGhvclZlckxpbmVzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgaG9yVmVyTGluZXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gIGhvclZlckxpbmVzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgaG9yVmVyTGluZXMubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIGhvclZlckxpbmVzLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBob3JWZXJMaW5lcy5fbGluZXNNb3ZlcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvclZlckxpbmVzLmFtb3VudDsgaSsrKSB7XG4gICAgdmFyIF9saW5lID0gKDAsIF9saW5lMy5kZWZhdWx0KSh7ICdsaW5lUGF0aCc6ICgwLCBfbGluZTUuZGVmYXVsdCkoeyAnZW5kJzogeyAneCc6IGhvclZlckxpbmVzLmxlbmd0aCwgJ3knOiBNYXRoLnJhbmRvbSgpICogaG9yVmVyTGluZXMuaGVpZ2h0IH0gfSkgfSk7XG5cbiAgICB2YXIgbGluZU1vdmVyID0gKDAsIF9saW5lX21vdmVyMi5kZWZhdWx0KSh7XG4gICAgICBzdWJqZWN0OiBfbGluZS52aWV3LFxuICAgICAgc3RhcnRQb2ludDogeyB4OiAtaG9yVmVyTGluZXMubGVuZ3RoLCB5OiAwIH0sXG4gICAgICBnb2FsUG9pbnQ6IHsgeDogaG9yVmVyTGluZXMud2lkdGgsIHk6IDAgfSxcbiAgICAgIGludGVydmFsOiAoMCwgX2ludGVydmFsMi5kZWZhdWx0KSh7ICd0eXBlJzogJ21zJywgJ21zJzogaG9yVmVyTGluZXMud2lkdGggLyBob3JWZXJMaW5lcy5zcGVlZCAqIDEwMDAgfSksXG4gICAgICBzdGVlcG5lc3M6IDFcbiAgICB9KTtcblxuICAgIGhvclZlckxpbmVzLnZpZXcuYWRkQ2hpbGQoX2xpbmUudmlldyk7XG4gICAgaG9yVmVyTGluZXMuX2xpbmVzTW92ZXJzLnB1c2gobGluZU1vdmVyKTtcbiAgfVxuXG4gIGhvclZlckxpbmVzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdGhpcy5fbGluZXNNb3ZlcnNbal0uc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgaG9yVmVyTGluZXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuYW1vdW50OyBqKyspIHtcbiAgICAgIHRoaXMuX2xpbmVzTW92ZXJzW2pdLnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGhvclZlckxpbmVzO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfbGluZTIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2xpbmUnKTtcblxudmFyIF9saW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmUyKTtcblxudmFyIF9saW5lNCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmU1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZTQpO1xuXG52YXIgX2xpbmVfbW92ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9saW5lX21vdmVyJyk7XG5cbnZhciBfbGluZV9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lX21vdmVyKTtcblxudmFyIF9pbnRlcnZhbCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdGltZXJzL2ludGVydmFsJyk7XG5cbnZhciBfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9yX3Zlcl9saW5lcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kJyk7XG5cbnZhciBfcmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kKTtcblxudmFyIF9ob3JfdmVyX2xpbmVzID0gcmVxdWlyZSgnLi9ob3JfdmVyX2xpbmVzJyk7XG5cbnZhciBfaG9yX3Zlcl9saW5lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ob3JfdmVyX2xpbmVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByYW5kb21SZWN0TW92ZXJCYWNrZ3JvdW5kOiBfcmFuZG9tX3JlY3RfbW92ZXJfYmFja2dyb3VuZDIuZGVmYXVsdCxcbiAgaG9yVmVyTGluZXM6IF9ob3JfdmVyX2xpbmVzMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92aW5nX2JhY2tncm91bmRzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1vdW50JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb21wb25lbnQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21SZWN0TW92ZUJhY2tncm91bmQgPSB7fTtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLmFtb3VudCA9IG9wdGlvbnMuYW1vdW50O1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5zb3VyY2VDb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuX21vdmVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLmFtb3VudDsgaSsrKSB7XG4gICAgdmFyIHNxdWFyZSA9IHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5zb3VyY2VDb21wb25lbnQuZ2V0Q29weSgpO1xuICAgIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5fbW92ZXJzLnB1c2goKDAsIF9yYW5kb21faW5fcmVjdF9tb3ZlcjIuZGVmYXVsdCkoe1xuICAgICAgc3ViamVjdDogc3F1YXJlLnZpZXcsXG4gICAgICBzcGVlZDogcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnNwZWVkLFxuICAgICAgd2lkdGg6IHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC53aWR0aCxcbiAgICAgIGhlaWdodDogcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLmhlaWdodCB9KSk7XG4gICAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnZpZXcuYWRkQ2hpbGQoc3F1YXJlLnZpZXcpO1xuICB9XG5cbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdGhpcy5fbW92ZXJzW2pdLnN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdGhpcy5fbW92ZXJzW2pdLnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZDtcbn07XG5cbnZhciBfcmFuZG9tX2luX3JlY3RfbW92ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9yYW5kb21faW5fcmVjdF9tb3ZlcicpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9pbl9yZWN0X21vdmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3N3aW5naW5nX2xpbmUgPSByZXF1aXJlKCcuL3N3aW5naW5nX2xpbmUnKTtcblxudmFyIF9zd2luZ2luZ19saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N3aW5naW5nX2xpbmUpO1xuXG52YXIgX2N1cnZlID0gcmVxdWlyZSgnLi9jdXJ2ZScpO1xuXG52YXIgX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2N1cnZlKTtcblxudmFyIF93YXZlID0gcmVxdWlyZSgnLi93YXZlJyk7XG5cbnZhciBfd2F2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXZlKTtcblxudmFyIF9jcG9pbnRfc3Bpbm5lciA9IHJlcXVpcmUoJy4vY3BvaW50X3NwaW5uZXInKTtcblxudmFyIF9jcG9pbnRfc3Bpbm5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcG9pbnRfc3Bpbm5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgc3dpbmdpbmdMaW5lOiBfc3dpbmdpbmdfbGluZTIuZGVmYXVsdCxcbiAgY3VydmU6IF9jdXJ2ZTIuZGVmYXVsdCxcbiAgY3BvaW50U3Bpbm5lcjogX2Nwb2ludF9zcGlubmVyMi5kZWZhdWx0LFxuICB3YXZlOiBfd2F2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHNwaW5uZXIgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzcGlubmVyLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBzcGlubmVyLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICBzcGlubmVyLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3Bpbm5lci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3Bpbm5lci50aW1lLCAxKTtcbiAgc3Bpbm5lci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHNwaW5uZXIuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzcGlubmVyLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHNwaW5uZXIubGVuZ3RoIC8gMiAtIHNwaW5uZXIucmFkaXVzLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3Bpbm5lci5sZW5ndGggLyAyICsgc3Bpbm5lci5yYWRpdXMsIHk6IDAgfSB9KTtcbiAgc3Bpbm5lci5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzcGlubmVyLmJlemllckN1cnZlIH0pO1xuXG4gIHNwaW5uZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQoc3Bpbm5lci5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZChzcGlubmVyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHNwaW5uZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHNwaW5uZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3Bpbm5lci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHZhciBjb29yZGluYXRlcyA9ICgwLCBfZGVncmVlc190b19jb29yZGluYXRlczIuZGVmYXVsdCkoY3VycmVudCAqIDM2MCwgdGhpcy5yYWRpdXMpO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gdGhpcy5sZW5ndGggLyAyIC0gY29vcmRpbmF0ZXMueDtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDEueSA9IC1jb29yZGluYXRlcy55O1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50Mi54ID0gdGhpcy5sZW5ndGggLyAyICsgY29vcmRpbmF0ZXMueDtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDIueSA9IGNvb3JkaW5hdGVzLnk7XG4gICAgdGhpcy5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHNwaW5uZXI7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2hlbHBlci9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzJyk7XG5cbnZhciBfZGVncmVlc190b19jb29yZGluYXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3BvaW50X3NwaW5uZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBjdXJ2ZSA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1wbGl0dWRlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIGN1cnZlLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBjdXJ2ZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgY3VydmUudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBjdXJ2ZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoY3VydmUudGltZSwgMC41KTtcbiAgY3VydmUudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBjdXJ2ZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IGN1cnZlLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IDAsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBjdXJ2ZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIGN1cnZlLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IGN1cnZlLmJlemllckN1cnZlIH0pO1xuXG4gIGN1cnZlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0YXJ0KHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBjdXJ2ZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBjdXJ2ZS5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuZW5kLnkgPSAoY3VycmVudCAtIDAuNSkgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDEueCA9IE1hdGguYWJzKGN1cnJlbnQgLSAwLjUpICogdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQyLnggPSAoTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKyAwLjUpICogdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQyLnkgPSAoY3VycmVudCAtIDAuNSkgLyAyICogdGhpcy5hbXBsaXR1ZGU7XG4gICAgdGhpcy5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGN1cnZlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0YXJ0KHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAoY3VycmVudCAtIDAuNSkgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gc3dpbmdMaW5lO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpbmdpbmdfbGluZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHdhdmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0cmV0Y2gnLCBmYWxzZSwgMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHdhdmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHdhdmUuYW1wbGl0dWRlID0gb3B0aW9ucy5hbXBsaXR1ZGU7XG4gIHdhdmUudGltZSA9IG9wdGlvbnMudGltZTtcbiAgd2F2ZS5zdHJldGNoID0gb3B0aW9ucy5zdHJldGNoO1xuXG4gIHdhdmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHdhdmUudGltZSwgMC41KTtcbiAgd2F2ZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHdhdmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiB3YXZlLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHdhdmUubGVuZ3RoIC8gMiAtIHdhdmUuc3RyZXRjaCwgeTogMCB9LCBjcG9pbnQyOiB7IHg6IHdhdmUubGVuZ3RoIC8gMiArIHdhdmUuc3RyZXRjaCwgeTogMCB9IH0pO1xuICB3YXZlLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IHdhdmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgd2F2ZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdGFydCh0aGlzLmhhbmRsZSk7XG4gICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgd2F2ZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICB3YXZlLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5lbmQueSA9IChjdXJyZW50IC0gMC41KSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKHRoaXMucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC4yNSkgLSAwLjUpICogMS41ICogdGhpcy5hbXBsaXR1ZGU7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAodGhpcy5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjUpIC0gMC41KSAqIDEuNSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuc3RhcnQueSA9ICh0aGlzLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuNzUpIC0gMC41KSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiB3YXZlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2F2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uX3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyKTtcblxudmFyIF9yYW5kb21fcGFydF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXInKTtcblxudmFyIF9yYW5kb21fcGFydF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fcGFydF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYmV6aWVyID0gcmVxdWlyZSgnLi9iZXppZXIvYmV6aWVyJyk7XG5cbnZhciBfYmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdHJhbnNpdGlvblBhdGhEcmF3ZXI6IF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyMi5kZWZhdWx0LFxuICByYW5kb21QYXJ0UGF0aERyYXdlcjogX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyMi5kZWZhdWx0LFxuICBiZXppZXI6IF9iZXppZXIyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoX21hZ2ljLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgcGF0aERyYXdlciA9IHt9O1xuXG4gIC8vIEhhbmRsZSBwYXJhbWV0ZXJzOlxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoT3B0aW9ucycsIGZhbHNlLCB7fSk7XG4gIHBhdGhEcmF3ZXIucGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgb3B0aW9ucy5wYXRoT3B0aW9ucy5wYXRoID0gcGF0aERyYXdlci5wYXRoO1xuXG4gIC8vIEluaXRcbiAgcGF0aERyYXdlci5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkob3B0aW9ucy5wYXRoT3B0aW9ucyk7XG4gIHBhdGhEcmF3ZXIudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuXG4gIHBhdGhEcmF3ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnBhdGhWaWV3LmNvbXBsZXRlUGF0aCA9IHRoaXMucGF0aC5nZXRQYXJ0UGF0aChNYXRoLnJhbmRvbSgpKTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcGF0aERyYXdlcjtcbn07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG5cbiAgLy8gSGFuZGxlIFBhcmFtZXRlcnNcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aE9wdGlvbnMnLCB0cnVlKTtcbiAgb3B0aW9ucy5wYXRoT3B0aW9ucy5wYXRoID0gb3B0aW9ucy5wYXRoO1xuICBwYXRoRHJhd2VyLnBhdGggPSBvcHRpb25zLnBhdGg7XG5cbiAgLy8gSW5pdFxuICBwYXRoRHJhd2VyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KSgxMDAwLCAxKTtcbiAgcGF0aERyYXdlci5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkob3B0aW9ucy5wYXRoT3B0aW9ucyk7XG4gIHBhdGhEcmF3ZXIudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuXG4gIHBhdGhEcmF3ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMucGF0aFZpZXcuY29tcGxldGVQYXRoID0gdGhpcy5wYXRoLmdldFBhcnRQYXRoKGN1cnJlbnQpO1xuICAgIHRoaXMucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBwYXRoRHJhd2VyO1xufTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25fcGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2x1bW5zJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndmlzaWJsZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCBmYWxzZSwgW10pO1xuXG4gIHZhciByYW5kb21LYXJvU3dpdGNoID0ge307XG4gIHJhbmRvbUthcm9Td2l0Y2guY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuO1xuICByYW5kb21LYXJvU3dpdGNoLnZpc2libGUgPSBvcHRpb25zLnZpc2libGU7XG4gIHJhbmRvbUthcm9Td2l0Y2guc3BhY2luZyA9IG9wdGlvbnMuc3BhY2luZztcbiAgcmFuZG9tS2Fyb1N3aXRjaC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICByYW5kb21LYXJvU3dpdGNoLl9ncm91cCA9ICgwLCBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0KSh7ICdjaGlsZHJlbic6IHJhbmRvbUthcm9Td2l0Y2guY2hpbGRyZW4sICdjb2x1bW5zJzogcmFuZG9tS2Fyb1N3aXRjaC5jb2x1bW5zLCAnc3BhY2luZyc6IHJhbmRvbUthcm9Td2l0Y2guc3BhY2luZyB9KTtcblxuICByYW5kb21LYXJvU3dpdGNoLnZpZXcgPSByYW5kb21LYXJvU3dpdGNoLl9ncm91cC52aWV3O1xuXG4gIHJhbmRvbUthcm9Td2l0Y2guc3dpdGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21OdW1iZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYW5kb21OdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICAgIHNodWZmbGUocmFuZG9tTnVtYmVycyk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaiA8IHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLl9ncm91cC5jaGlsZHJlbltyYW5kb21OdW1iZXJzW2pdXS52aWV3LmFscGhhID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2dyb3VwLmNoaWxkcmVuW3JhbmRvbU51bWJlcnNbal1dLnZpZXcuYWxwaGEgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICBmb3IgKHZhciBpID0gYS5sZW5ndGg7IGk7IGktLSkge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgIHZhciBfcmVmID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgIGFbaSAtIDFdID0gX3JlZlswXTtcbiAgICAgIGFbal0gPSBfcmVmWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5kb21LYXJvU3dpdGNoO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9ncm91cC9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlX2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9zcXVhcmVfc3dpdGNoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2x1bW5zJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndmlzaWJsZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCBmYWxzZSwgW10pO1xuXG4gIHZhciBzd2l0Y2hJbnRlcnZhbCA9IHt9O1xuXG4gIHN3aXRjaEludGVydmFsLl9ncm91cFN3aXRjaCA9ICgwLCBfcmFuZG9tX3NxdWFyZV9zd2l0Y2gyLmRlZmF1bHQpKG9wdGlvbnMpO1xuICBzd2l0Y2hJbnRlcnZhbC5fZ3JvdXBTd2l0Y2hUaW1lciA9ICgwLCBfaW50ZXJ2YWxfdGltZXIyLmRlZmF1bHQpKG9wdGlvbnMuaW50ZXJ2YWwpO1xuICBzd2l0Y2hJbnRlcnZhbC5fbGlzdGVuZXIgPSBudWxsO1xuXG4gIHN3aXRjaEludGVydmFsLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2xpc3RlbmVyID0gdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZSwgdGhpcyk7XG4gICAgdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5zdGFydCgpO1xuICB9O1xuXG4gIHN3aXRjaEludGVydmFsLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5zdG9wKCk7XG4gICAgdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5yZW1vdmVMaXN0ZW5lcih0aGlzLl9saXN0ZW5lcik7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwudmlldyA9IHN3aXRjaEludGVydmFsLl9ncm91cFN3aXRjaC52aWV3O1xuXG4gIHN3aXRjaEludGVydmFsLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9ncm91cFN3aXRjaC5zd2l0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gc3dpdGNoSW50ZXJ2YWw7XG59O1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3N3aXRjaCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfc3dpdGNoKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90aW1lcnMvaW50ZXJ2YWxfdGltZXInKTtcblxudmFyIF9pbnRlcnZhbF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF90aW1lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd2aXNpYmxlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd6b29tU3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIGZhbHNlLCBbXSk7XG5cbiAgdmFyIHJhbmRvbUthcm9Td2l0Y2ggPSB7fTtcbiAgcmFuZG9tS2Fyb1N3aXRjaC5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICByYW5kb21LYXJvU3dpdGNoLnZpc2libGUgPSBvcHRpb25zLnZpc2libGU7XG4gIHJhbmRvbUthcm9Td2l0Y2guc3BhY2luZyA9IG9wdGlvbnMuc3BhY2luZztcbiAgcmFuZG9tS2Fyb1N3aXRjaC56b29tU3BlZWQgPSBvcHRpb25zLnpvb21TcGVlZDtcbiAgcmFuZG9tS2Fyb1N3aXRjaC5jaGlsZHJlbiA9IG9wdGlvbnMuY2hpbGRyZW47XG4gIHJhbmRvbUthcm9Td2l0Y2guX3pvb21PdXRDb21wb25lbnRzID0gW107XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcmFuZG9tS2Fyb1N3aXRjaC5jaGlsZHJlbltTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBjaGlsZCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICByYW5kb21LYXJvU3dpdGNoLl96b29tT3V0Q29tcG9uZW50cy5wdXNoKCgwLCBfem9vbV9vdXQyLmRlZmF1bHQpKHsgY2hpbGQ6IGNoaWxkLCBpbnRlcnZhbDogcmFuZG9tS2Fyb1N3aXRjaC56b29tU3BlZWQgfSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZ3JvdXAgPSAoMCwgX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCkoeyAnY2hpbGRyZW4nOiByYW5kb21LYXJvU3dpdGNoLl96b29tT3V0Q29tcG9uZW50cywgJ2NvbHVtbnMnOiByYW5kb21LYXJvU3dpdGNoLmNvbHVtbnMsICdzcGFjaW5nJzogcmFuZG9tS2Fyb1N3aXRjaC5zcGFjaW5nIH0pO1xuXG4gIHJhbmRvbUthcm9Td2l0Y2gudmlldyA9IGdyb3VwLnZpZXc7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC56b29tT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21OdW1iZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYW5kb21OdW1iZXJzLnB1c2goaSk7XG4gICAgICB0aGlzLl96b29tT3V0Q29tcG9uZW50c1tpXS5yZXNldCgpO1xuICAgIH1cbiAgICBzaHVmZmxlKHJhbmRvbU51bWJlcnMpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGogPCB0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5fem9vbU91dENvbXBvbmVudHNbcmFuZG9tTnVtYmVyc1tqXV0uc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgZm9yICh2YXIgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICB2YXIgX3JlZiA9IFthW2pdLCBhW2kgLSAxXV07XG4gICAgICBhW2kgLSAxXSA9IF9yZWZbMF07XG4gICAgICBhW2pdID0gX3JlZlsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFuZG9tS2Fyb1N3aXRjaDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvZ3JvdXAvcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfem9vbV9vdXQgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2NvbXBvc2l0aW9ucy96b29tX3N0dWZmL3pvb21fb3V0Jyk7XG5cbnZhciBfem9vbV9vdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbV9vdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3NxdWFyZV96b29tX291dC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaCA9IHJlcXVpcmUoJy4vcmFuZG9tX3NxdWFyZV9zd2l0Y2gnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3N3aXRjaCk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwgPSByZXF1aXJlKCcuL3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsJyk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV9zd2l0Y2hfaW50ZXJ2YWwpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfem9vbV9vdXQgPSByZXF1aXJlKCcuL3JhbmRvbV9zcXVhcmVfem9vbV9vdXQnKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3pvb21fb3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfem9vbV9vdXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJhbmRvbVNxdWFyZVN3aXRjaDogX3JhbmRvbV9zcXVhcmVfc3dpdGNoMi5kZWZhdWx0LFxuICByYW5kb21TcXVhcmVTd2l0Y2hJbnRlcnZhbDogX3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsMi5kZWZhdWx0LFxuICByYW5kb21TcXVhcmVab29tT3V0OiBfcmFuZG9tX3NxdWFyZV96b29tX291dDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZV9ncm91cF9zdHVmZi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcblxuICBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzID0gMTtcbiAgb3B0aW9ucy5saW1pdCA9IDA7XG4gIG9wdGlvbnMucmlzaW5nID0gdHJ1ZTtcbiAgb3B0aW9ucy5jZW50ZXJJZlBvc3NpYmxlID0gdHJ1ZTtcbiAgb3B0aW9ucy53aWR0aCA9IG9wdGlvbnMuY2hpbGQuZ2V0V2lkdGgoKTtcbiAgb3B0aW9ucy5oZWlnaHQgPSBvcHRpb25zLmNoaWxkLmdldEhlaWdodCgpO1xuICBvcHRpb25zLnN1YmplY3QgPSBvcHRpb25zLmNoaWxkO1xuICBvcHRpb25zLnN0ZWVwbmVzcyA9IDE7XG4gIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMgPSAxO1xuXG4gIHZhciB6b29tT3V0ID0ge307XG4gIHpvb21PdXQuX2NlbnRyYWxpemVyID0gKDAsIF9jZW50cmFsaXplcjIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHpvb21PdXQuX3pvb21lciA9ICgwLCBfbGluZWFyX3B1bHNhcjIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHpvb21PdXQudmlldyA9IHpvb21PdXQuX2NlbnRyYWxpemVyLnZpZXc7XG5cbiAgem9vbU91dC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl96b29tZXIuc3RhcnQoKTtcbiAgfTtcblxuICB6b29tT3V0LnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fem9vbWVyLnN0b3AoKTtcbiAgfTtcblxuICB6b29tT3V0LnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3pvb21lci5yZXNldCgpO1xuICB9O1xuXG4gIHJldHVybiB6b29tT3V0O1xufTtcblxudmFyIF9saW5lYXJfcHVsc2FyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9tb2RpZmljYXRvcnMvc2NhbGUvbGluZWFyX3B1bHNhcicpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3B1bHNhcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9jZW50cmFsaXplciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9tb3Zlci9jZW50ZXIvY2VudHJhbGl6ZXInKTtcblxudmFyIF9jZW50cmFsaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50cmFsaXplcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tX291dC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF96b29tX291dCA9IHJlcXVpcmUoJy4vem9vbV9vdXQnKTtcblxudmFyIF96b29tX291dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgem9vbU91dDogX3pvb21fb3V0Mi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbV9zdHVmZi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgICB2YXIgY29tcG9uZW50ID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG5cbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXG4gICAgICBjb21wb25lbnQudmlldyA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X3NoYXBlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgLyogUGFyYW1ldGVycyAqL1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaXJjbGVTaGFwZScsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICAvKiBQcml2YXRlIHZhcnMgKi9cbiAgICAgIHZhciBjaXJjbGUgPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuXG4gICAgICAvKiBwdWJsaWMgcHJvcGVydGllcyAqL1xuICAgICAgY2lyY2xlLmNpcmNsZVNoYXBlID0gb3B0aW9ucy5jaXJjbGVTaGFwZTtcbiAgICAgIGNpcmNsZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXG4gICAgICBjaXJjbGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmNvbG9yKS5kcmF3Q2lyY2xlKHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSwgdGhpcy5jaXJjbGVTaGFwZS5yYWRpdXMgKiB0aGlzLnNjYWxlLCB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgY2lyY2xlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSAqIDI7XG4gICAgICB9O1xuXG4gICAgICBjaXJjbGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSAqIDI7XG4gICAgICB9O1xuXG4gICAgICAvKiBpbml0ICovXG4gICAgICBjaXJjbGUuZHJhdygpO1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBjcmVhdGVqcy5Db250YWluZXIoKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250YWluZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgdmFyIGN1c3RvbSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3VzdG9tU2hhcGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuICBjdXN0b20uY3VzdG9tU2hhcGUgPSBvcHRpb25zLmN1c3RvbVNoYXBlO1xuICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuYmVnaW5TdHJva2UoJyMwMEYnKS5tb3ZlVG8oMCwgMCk7XG4gICAgdmFyIGN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5jdXN0b21TaGFwZS5wYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgcGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIF9wYXRoX2RyYXdlcjIuZGVmYXVsdFtwYXRoLnR5cGVdKHRoaXMudmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQgPSAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGN1c3RvbS5kcmF3KCk7XG4gIHJldHVybiBjdXN0b207XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b21fb2JqZWN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2hlbHBlci9hbmdsZV90b19yYWRpYW5zJyk7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFuczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZV90b19yYWRpYW5zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyplc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UqL1xuZnVuY3Rpb24gcGF0aERyYXdlcigpIHt9XG5cbnBhdGhEcmF3ZXIubGluZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5saW5lVG8oY3VycmVudC54ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS54LCBjdXJyZW50LnkgKyBwYXRoLmdldEVkZ2VQb2ludCgpLnkpO1xufTtcblxucGF0aERyYXdlci5hcmMgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgaWYgKHBhdGguZGVncmVlcyA8IDApIHtcbiAgICBncmFwaGljcy5hcmMocGF0aC5zdGFydC54LCBwYXRoLnN0YXJ0LnkgLSBwYXRoLnJhZGl1cywgcGF0aC5yYWRpdXMsICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoOTApLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKDkwICsgcGF0aC5kZWdyZWVzKSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55ICsgcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKC05MCksICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGF0aC5kZWdyZWVzIC0gOTApKTtcbiAgfVxufTtcblxucGF0aERyYXdlci5zaW5lX3dhdmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCBwYXRoLmdldExlbmd0aCgpOyB4ICs9IDUpIHtcbiAgICB2YXIgcG9pbnQgPSBwYXRoLmdldFBvaW50KHggLyBwYXRoLmdldExlbmd0aCgpKTtcbiAgICBncmFwaGljcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH1cbn07XG5cbnBhdGhEcmF3ZXIuYmV6aWVyX2N1cnZlID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGlmIChwYXRoLmNwb2ludDIpIHtcbiAgICBncmFwaGljcy5iZXppZXJDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5jcG9pbnQyLngsIHBhdGguY3BvaW50Mi55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcbiAgfSBlbHNlIHtcbiAgICBncmFwaGljcy5xdWFkcmF0aWNDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5lbmQueCwgcGF0aC5lbmQueSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBhdGhEcmF3ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xuXG4gIHZhciBpbWFnZSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gIGltYWdlLnZpZXcgPSBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKTtcblxuICBpbWFnZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudmlldy5zY2FsZVggPSB0aGlzLnNjYWxlO1xuICAgIHRoaXMudmlldy5zY2FsZVkgPSB0aGlzLnNjYWxlO1xuICB9O1xuXG4gIGltYWdlLmRyYXcoKTtcbiAgcmV0dXJuIGltYWdlO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBsaW5lID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsaW5lUGF0aCcsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aGlja25lc3MnLCBmYWxzZSwgMSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIGxpbmUucGF0aCA9IG9wdGlvbnMubGluZVBhdGg7XG4gICAgICBsaW5lLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGxpbmUudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3M7XG5cbiAgICAgIGxpbmUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMudGhpY2tuZXNzICogdGhpcy5zY2FsZSkubW92ZVRvKHRoaXMucGF0aC5zdGFydC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLnN0YXJ0LnkgKiB0aGlzLnNjYWxlKS5saW5lVG8odGhpcy5wYXRoLmVuZC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLmVuZC55ICogdGhpcy5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnBhdGguZW5kLnggLSB0aGlzLnBhdGguc3RhcnQueCkgKiB0aGlzLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgbGluZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucGF0aC5lbmQueSAtIHRoaXMucGF0aC5zdGFydC55KSAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmRyYXcoKTtcbiAgICAgIHJldHVybiBsaW5lO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgc3RhZ2UgPSBuZXcgY3JlYXRlanMuU3RhZ2UoaWQpO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHt9O1xuXG4gICAgY29udGFpbmVyLmFkZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBzdGFnZS5hZGRDaGlsZChjaGlsZC52aWV3KTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnJlbW92ZSA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBzdGFnZS5yZW1vdmVDaGlsZChjaGlsZC52aWV3KTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnJlbW92ZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhZ2UucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLnN0YWdlID0gc3RhZ2U7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW5fY29udGFpbmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCBmYWxzZSwgMSk7XG5cbiAgICAgIHZhciBjdXN0b20gPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuICAgICAgY3VzdG9tLmNvbXBsZXRlUGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgICAgIGN1c3RvbS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG4gICAgICBjdXN0b20ud2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMud2lkdGgpLm1vdmVUbygwLCAwKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgICAgICB2YXIgaSA9IDE7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuY29tcGxldGVQYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0odGhpcy52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY3VzdG9tLmRyYXcoKTtcbiAgICAgIHJldHVybiBjdXN0b207XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyZWN0YW5nbGVTaGFwZScsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICB2YXIgcmVjdCA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcbiAgICAgIHJlY3QuaGVpZ2h0ID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS5oZWlnaHQ7XG4gICAgICByZWN0LmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgcmVjdC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZHJhdygpO1xuICAgICAgcmV0dXJuIHJlY3Q7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3F1YXJlQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NxdWFyZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciBzcXVhcmUgPSAoMCwgX2Fic3RyYWN0X3NoYXBlMi5kZWZhdWx0KSgpO1xuICAgICAgc3F1YXJlLnNxdWFyZVNoYXBlID0gb3B0aW9ucy5zcXVhcmVTaGFwZTtcbiAgICAgIHNxdWFyZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICAgIHNxdWFyZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGUsIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgc3F1YXJlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZHJhdygpO1xuICAgICAgcmV0dXJuIHNxdWFyZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gc3F1YXJlQ29uc3RydWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcXVhcmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xuICAgICAgLy8gSWYgdGhlIHNvdXJjZSBpcyBhIHN0cmluZywgY29udmVydCBpdCB0byBhIHZpZGVvXG4gICAgICBoYW5kbGVWaWRlb1NvdXJjZSgpO1xuXG4gICAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICAgIHZhciB2aWRlbyA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG5cbiAgICAgIC8qIHB1YmxpYyBwcm9wZXJ0aWVzICovXG4gICAgICB2aWRlby52aWV3ID0gbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSk7XG4gICAgICB2aWRlby5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXG4gICAgICB2aWRlby5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjYWxlWCA9IHZpZGVvLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy52aWV3LnNjYWxlWSA9IHZpZGVvLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnBsYXkoKTtcbiAgICAgIH07XG5cbiAgICAgIHZpZGVvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgfTtcblxuICAgICAgLyogcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVZpZGVvU291cmNlKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzb3VyY2UnKTtcbiAgICAgICAgICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIG9wdGlvbnMuc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIHZhciB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgICAgICAgdmlkZW9FbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zLnNvdXJjZSA9IHZpZGVvRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogaW5pdCAqL1xuICAgICAgdmlkZW8uZHJhdygpO1xuICAgICAgcmV0dXJuIHZpZGVvO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZGVvLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX21haW5fY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJyk7XG5cbnZhciBfbWFpbl9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbl9jb250YWluZXIpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY3VzdG9tX29iamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0Jyk7XG5cbnZhciBfY3VzdG9tX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21fb2JqZWN0KTtcblxudmFyIF9pbWFnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbWFnZScpO1xuXG52YXIgX2ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlKTtcblxudmFyIF92aWRlbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlbycpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY29udGFpbmVyOiBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHQsXG4gICAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICAgIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICAgIGN1c3RvbU9iamVjdDogX2N1c3RvbV9vYmplY3QyLmRlZmF1bHQsXG4gICAgbWFpbkNvbnRhaW5lcjogX21haW5fY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIGltYWdlOiBfaW1hZ2UyLmRlZmF1bHQsXG4gICAgdmlkZW86IF92aWRlbzIuZGVmYXVsdCxcbiAgICBwYXRoOiBfcGF0aDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgdmFyIGFic3RyYWN0R3JvdXAgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcblxuICAgIGFic3RyYWN0R3JvdXAuY2hpbGRyZW4gPSBjaGlsZHJlbiA/IGNoaWxkcmVuIDogW107XG5cbiAgICBhYnN0cmFjdEdyb3VwLmFkZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9O1xuXG4gICAgYWJzdHJhY3RHcm91cC5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UodGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKSwgMSk7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYWJzdHJhY3RHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIGZhbHNlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICB2YXIgY2VudGVyR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjZW50ZXJHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgY2VudGVyR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpZXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGhpcy5jaGlsZHJlbltpXS52aWV3KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIueCA9IGNvbnRhaW5lci54ID0gKGkgKyAxKSAqIHRoaXMud2lkdGggLyAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnkgPSBjb250YWluZXIueCA9IChpICsgMSkgKiB0aGlzLmhlaWdodCAvICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIGNlbnRlckdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jZW50ZXJfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIGZhbHNlLCAxMCk7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2lyY2xlR3JvdXAucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG5cbiAgICB2YXIgYW5nbGUgPSAzNjAgLyBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIHZhciBpbm5lckNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLnkgPSAtY2lyY2xlR3JvdXAucmFkaXVzO1xuICAgICAgICBpbm5lckNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgY2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjaXJjbGVHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9jaXJjbGVfZ3JvdXAnKTtcblxudmFyIF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlX2dyb3VwKTtcblxudmFyIF9zcGlyYWxfY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9zcGlyYWxfY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGlyYWxfY2lyY2xlX2dyb3VwKTtcblxudmFyIF9yYW5kb21fY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9yYW5kb21fY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY2lyY2xlX2dyb3VwKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAgPSByZXF1aXJlKCcuL2NlbnRlcl9ncm91cCcpO1xuXG52YXIgX2NlbnRlcl9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50ZXJfZ3JvdXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlY3RhbmdsZUdyb3VwOiBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21SZWN0YW5nbGVHcm91cDogX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNpcmNsZUdyb3VwOiBfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICBzcGlyYWxDaXJjbGVHcm91cDogX3NwaXJhbF9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIHJhbmRvbUNpcmNsZUdyb3VwOiBfcmFuZG9tX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgY2VudGVyR3JvdXA6IF9jZW50ZXJfZ3JvdXAyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgZmFsc2UsIDEwKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhbmRvbVJhbmdlJywgZmFsc2UsIDEwKTtcbiAgICB2YXIgY2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjaXJjbGVHcm91cC5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgICBjaXJjbGVHcm91cC5yYW5kb21SYW5nZSA9IG9wdGlvbnMucmFuZG9tUmFuZ2U7XG5cbiAgICB2YXIgYW5nbGUgPSAzNjAgLyBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIHZhciBpbm5lckNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLnkgPSAtY2lyY2xlR3JvdXAucmFkaXVzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgLSBjaXJjbGVHcm91cC5yYW5kb21SYW5nZSAqIDAuNSk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKGNpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBjaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCBmYWxzZSwgMTApO1xuXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgcmVjdGFuZ2xlR3JvdXAud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHJlY3RhbmdsZUdyb3VwLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgICAgICBjb250YWluZXIueCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZWN0YW5nbGVHcm91cC5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcmVjdGFuZ2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2x1bW5zJywgZmFsc2UsIDMpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BhY2luZycsIGZhbHNlLCAxMCk7XG5cbiAgICB2YXIgcmVjdGFuZ2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcblxuICAgIHJlY3RhbmdsZUdyb3VwLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgcmVjdGFuZ2xlR3JvdXAuc3BhY2luZyA9IG9wdGlvbnMuc3BhY2luZztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQocmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgIGNvbnRhaW5lci54ID0gaSAlIHJlY3RhbmdsZUdyb3VwLmNvbHVtbnMgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xuICAgICAgICBjb250YWluZXIueSA9IE1hdGguZmxvb3IoaSAvIHJlY3RhbmdsZUdyb3VwLmNvbHVtbnMpICogcmVjdGFuZ2xlR3JvdXAuc3BhY2luZztcbiAgICAgICAgcmVjdGFuZ2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN0YW5nbGVHcm91cDtcbn07XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2dyb3VwJyk7XG5cbnZhciBfYWJzdHJhY3RfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZ3JvdXApO1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydFJhZGl1cycsIGZhbHNlLCAxMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZW5kUmFkaXVzJywgZmFsc2UsIDEpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JvdW5kcycsIGZhbHNlLCAxKTtcblxuICB2YXIgc3BpcmFsQ2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMgPSBvcHRpb25zLnN0YXJ0UmFkaXVzO1xuICBzcGlyYWxDaXJjbGVHcm91cC5lbmRSYWRpdXMgPSBvcHRpb25zLmVuZFJhZGl1cztcbiAgc3BpcmFsQ2lyY2xlR3JvdXAucm91bmRzID0gb3B0aW9ucy5yb3VuZHM7XG5cbiAgdmFyIGFuZ2xlID0gMzYwICogc3BpcmFsQ2lyY2xlR3JvdXAucm91bmRzIC8gc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICB2YXIgcmFkaXVzSW5jcmVhc2VBbW91bnQgPSAoc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzIC0gc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMpIC8gc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgIHZhciBpbm5lckNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgIGNvbnRhaW5lci5yb3RhdGlvbiA9IGFuZ2xlICogaTtcbiAgICBpbm5lckNvbnRhaW5lci55ID0gLShzcGlyYWxDaXJjbGVHcm91cC5zdGFydFJhZGl1cyArIHJhZGl1c0luY3JlYXNlQW1vdW50ICogaSk7XG4gICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICBzcGlyYWxDaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cblxuICByZXR1cm4gc3BpcmFsQ2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwaXJhbF9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcblxuICAgIC8qIFByaXZhdGUgdmFycyAqL1xuICAgIHZhciBjZW50ZXJGaWx0ZXIgPSAoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpLCBvcHRpb25zKTtcblxuICAgIC8qIHB1YmxpYyB2YXJzICovXG4gICAgY2VudGVyRmlsdGVyLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICBjZW50ZXJGaWx0ZXIuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjZW50ZXJGaWx0ZXIub25Qcm9wZXJ0eUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2hpbGQoKS5nZXRXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnggPSB0aGlzLndpZHRoIC8gMiAtIHRoaXMuZ2V0Q2hpbGQoKS5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnkgPSB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmdldENoaWxkKCkuZ2V0SGVpZ2h0KCkgLyAyO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNlbnRlckZpbHRlci5vblByb3BlcnR5Q2hhbmdlKCk7XG4gICAgLyogcmV0dXJuICovXG4gICAgcmV0dXJuIGNlbnRlckZpbHRlcjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlbnRyYWxpemVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NlbnRyYWxpemVyID0gcmVxdWlyZSgnLi9jZW50ZXIvY2VudHJhbGl6ZXInKTtcblxudmFyIF9jZW50cmFsaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50cmFsaXplcik7XG5cbnZhciBfcGF0aE1vdmVyID0gcmVxdWlyZSgnLi9wYXRoL3BhdGgtbW92ZXInKTtcblxudmFyIF9wYXRoTW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aE1vdmVyKTtcblxudmFyIF9saW5lYXIgPSByZXF1aXJlKCcuL3BvaW50MnBvaW50L2xpbmVhcicpO1xuXG52YXIgX2xpbmVhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXIpO1xuXG52YXIgX2xpbmVhcl9zaGFrZSA9IHJlcXVpcmUoJy4vcG9pbnQycG9pbnQvbGluZWFyX3NoYWtlJyk7XG5cbnZhciBfbGluZWFyX3NoYWtlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9zaGFrZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgY2VudGVyOiB7XG4gICAgY2VudHJhbGl6ZXI6IF9jZW50cmFsaXplcjIuZGVmYXVsdFxuICB9LFxuICBwYXRoOiB7XG4gICAgcGF0aE1vdmVyOiBfcGF0aE1vdmVyMi5kZWZhdWx0XG4gIH0sXG4gIGxpbmVhcjoge1xuICAgIGxpbmVhcjogX2xpbmVhcjIuZGVmYXVsdCxcbiAgICBsaW5lYXJTaGFrZTogX2xpbmVhcl9zaGFrZTIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG5cbiAgdmFyIHBhdGhNb3ZlciA9ICgwLCBfdHJhbnNpdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcbiAgcGF0aE1vdmVyLnBhdGggPSBvcHRpb25zLnBhdGg7XG5cbiAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICBwYXRoTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnQoY3VycmVudCk7XG4gICAgdGhpcy52aWV3LnggPSBwb2ludC54O1xuICAgIHRoaXMudmlldy55ID0gcG9pbnQueTtcbiAgfTtcblxuICByZXR1cm4gcGF0aE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC1tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIGxpbmVhclAyUE1vdmVyID0gKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX21vZGlmaWNhdG9yX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKG9wdGlvbnMpKSwgb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLnN1YmplY3QgPSBsaW5lYXJQMlBNb3Zlci52aWV3O1xuICAgIGxpbmVhclAyUE1vdmVyLm1vZGlmaWNhdG9yID0gKDAsIF9saW5lX21vdmVyMi5kZWZhdWx0KShvcHRpb25zKTtcblxuICAgIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX21vZGlmaWNhdG9yX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9tb2RpZmljYXRvcl9maWx0ZXInKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kaWZpY2F0b3JfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX2xpbmVfbW92ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9saW5lX21vdmVyJyk7XG5cbnZhciBfbGluZV9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lX21vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIGxpbmVhclAyUE1vdmVyID0gKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX21vZGlmaWNhdG9yX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKG9wdGlvbnMpKSwgb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLnN1YmplY3QgPSBsaW5lYXJQMlBNb3Zlci52aWV3O1xuICAgIGxpbmVhclAyUE1vdmVyLm1vZGlmaWNhdG9yID0gKDAsIF9saW5lX3NoYWtlX21vdmVyMi5kZWZhdWx0KShvcHRpb25zKTtcblxuICAgIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG52YXIgX21vZGlmaWNhdG9yX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9tb2RpZmljYXRvcl9maWx0ZXInKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kaWZpY2F0b3JfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX2xpbmVfc2hha2VfbW92ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9saW5lX3NoYWtlX21vdmVyJyk7XG5cbnZhciBfbGluZV9zaGFrZV9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lX3NoYWtlX21vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9zaGFrZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGZhZGVyID0gKDAsIF90cmFuc2l0aW9uX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuXG4gICAgZmFkZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgdGhpcy52aWV3LmFscGhhID0gY3VycmVudDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhZGVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9zaW5nbGVfY2hpbGRfZmlsdGVyJyk7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVfY2hpbGRfZmlsdGVyKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy90cmFuc2l0aW9uX2ZpbHRlcicpO1xuXG52YXIgX3RyYW5zaXRpb25fZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgZmxhc2hlciA9ICgwLCBfYW5pbWF0aW9uX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKSwgb3B0aW9ucyksIG9wdGlvbnMpO1xuXG4gICAgZmxhc2hlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudmlldy52aXNpYmxlID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZsYXNoZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9maWx0ZXJzL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX2FuaW1hdGlvbl9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYW5pbWF0aW9uX2ZpbHRlcicpO1xuXG52YXIgX2FuaW1hdGlvbl9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbGFzaGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIGZhbHNlLCAxKTtcbiAgdmFyIGxpbmVhclJvdGF0b3IgPSAoMCwgX2FuaW1hdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpKTtcbiAgbGluZWFyUm90YXRvci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGxpbmVhclJvdGF0b3Iudmlldy5hZGRDaGlsZChvcHRpb25zLmNoaWxkLnZpZXcpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIHRoaXMudmlldy5yb3RhdGlvbiA9IHRoaXMudmlldy5yb3RhdGlvbiArIHRoaXMuc3BlZWQgKiAoZXZlbnQuZGVsdGEgLyAxMDAwKTtcbiAgfVxuXG4gIGxpbmVhclJvdGF0b3IuaGFuZGxlID0gaGFuZGxlO1xuXG4gIHJldHVybiBsaW5lYXJSb3RhdG9yO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfYW5pbWF0aW9uX2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hbmltYXRpb25fZmlsdGVyJyk7XG5cbnZhciBfYW5pbWF0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmltYXRpb25fZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3JvdGF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcmNDb25zdHJ1Y3RvcjtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXJjQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gIC8vIFBhcmFtZXRlcnNcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZGVncmVlcycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuXG4gIC8vIHByaXZhdGUgdmFyc1xuICB2YXIgYXJjID0ge307XG5cbiAgYXJjLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgYXJjLmRlZ3JlZXMgPSBvcHRpb25zLmRlZ3JlZXM7XG4gIGFyYy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgYXJjLnR5cGUgPSAnYXJjJztcblxuICAvLyBwdWJsaWMgZnVuY3Rpb25zXG4gIGFyYy5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9pbnQoMSk7XG4gIH07XG5cbiAgYXJjLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoMiAqIE1hdGguUEkgKiB0aGlzLnJhZGl1cyAqICh0aGlzLmRlZ3JlZXMgLyAzNjApKTtcbiAgfTtcblxuICBhcmMuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgb3JpZ2luID0geyB4OiB0aGlzLnN0YXJ0LngsIHk6IHRoaXMuc3RhcnQueSB9O1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gdGhpcy5kZWdyZWVzICogcHJvZ3Jlc3M7XG5cbiAgICBpZiAodGhpcy5kZWdyZWVzIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogb3JpZ2luLnggKyB0aGlzLnJhZGl1cyAqIE1hdGguc2luKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoLXBhcnRPZkRlZ3JlZXMpKSxcbiAgICAgICAgeTogb3JpZ2luLnkgLSB0aGlzLnJhZGl1cyArIHRoaXMucmFkaXVzICogTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9yaWdpbi54ICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhcnRPZkRlZ3JlZXMpKSxcbiAgICAgIHk6IG9yaWdpbi55ICsgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIC1NYXRoLmNvcygoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhcnRPZkRlZ3JlZXMpKVxuICAgIH07XG4gIH07XG5cbiAgYXJjLnN1YlBhdGhzID0gW2FyY107XG5cbiAgYXJjLmdldEFuZ2xlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkodGhpcy5kZWdyZWVzICogcHJvZ3Jlc3MpO1xuICB9O1xuXG4gIGFyYy5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gdGhpcy5kZWdyZWVzICogcHJvZ3Jlc3M7XG4gICAgcmV0dXJuIGFyY0NvbnN0cnVjdG9yKHsgc3RhcnQ6IHRoaXMuc3RhcnQsIGRlZ3JlZXM6IHBhcnRPZkRlZ3JlZXMsIHJhZGl1czogdGhpcy5yYWRpdXMgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGFyYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyYy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjcG9pbnQxJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3BvaW50MicsIGZhbHNlKTtcblxuICB2YXIgYmV6aWVyQ3VydmUgPSB7fTtcbiAgYmV6aWVyQ3VydmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBiZXppZXJDdXJ2ZS5lbmQgPSBvcHRpb25zLmVuZDtcbiAgYmV6aWVyQ3VydmUuY3BvaW50MSA9IG9wdGlvbnMuY3BvaW50MTtcbiAgYmV6aWVyQ3VydmUuY3BvaW50MiA9IG9wdGlvbnMuY3BvaW50MjtcbiAgYmV6aWVyQ3VydmUudHlwZSA9ICdiZXppZXJfY3VydmUnO1xuXG4gIGlmIChiZXppZXJDdXJ2ZS5jcG9pbnQyKSB7XG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgX2JlemllckpzMi5kZWZhdWx0KGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5jcG9pbnQyLCBiZXppZXJDdXJ2ZS5lbmQpO1xuICB9IGVsc2Uge1xuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IF9iZXppZXJKczIuZGVmYXVsdChiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuZW5kKTtcbiAgfVxuXG4gIGJlemllckN1cnZlLnN1YlBhdGhzID0gW2JlemllckN1cnZlXTtcblxuICBiZXppZXJDdXJ2ZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9O1xuXG4gIGJlemllckN1cnZlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJlemllci5sZW5ndGgoKTtcbiAgfTtcblxuICBiZXppZXJDdXJ2ZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsQmV6aWVyLmdldChwcm9ncmVzcyk7XG4gIH07XG5cbiAgLy9UT0RPIEFkZCBnZXQgcGFydCBwYXRoIGZ1bmN0aW9uXG5cbiAgcmV0dXJuIGJlemllckN1cnZlO1xufTtcblxudmFyIF9iZXppZXJKcyA9IHJlcXVpcmUoJ2Jlemllci1qcycpO1xuXG52YXIgX2JlemllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JlemllckpzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmV6aWVyX2N1cnZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gbGluZUNvbnN0cnVjdG9yO1xuXG52YXIgX3RvX3ZlY3RvciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvdG9fdmVjdG9yJyk7XG5cbnZhciBfdG9fdmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvX3ZlY3Rvcik7XG5cbnZhciBfZGlzdGFuY2UgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2Rpc3RhbmNlJyk7XG5cbnZhciBfZGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlzdGFuY2UpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGxpbmVDb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZW5kJywgdHJ1ZSk7XG5cbiAgdmFyIGxpbmUgPSB7fTtcbiAgbGluZS5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XG4gIGxpbmUuZW5kID0gb3B0aW9ucy5lbmQ7XG4gIGxpbmUudHlwZSA9ICdsaW5lJztcblxuICBsaW5lLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbmQ7XG4gIH07XG5cbiAgbGluZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfZGlzdGFuY2UyLmRlZmF1bHQpKCgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KSh0aGlzLnN0YXJ0KSwgKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKHRoaXMuZW5kKSk7XG4gIH07XG5cbiAgbGluZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnN0YXJ0LnggKyAodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgKiBwcm9ncmVzcyxcbiAgICAgIHk6IHRoaXMuc3RhcnQueSArICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAqIHByb2dyZXNzXG4gICAgfTtcbiAgfTtcblxuICBsaW5lLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG5ld0VuZCA9IHsgeDogdGhpcy5lbmQueCAqIHByb2dyZXNzLCB5OiB0aGlzLmVuZC55ICogcHJvZ3Jlc3MgfTtcbiAgICB2YXIgcGF0aFBhcnQgPSBsaW5lQ29uc3RydWN0b3IoeyBzdGFydDogdGhpcy5zdGFydCwgZW5kOiBuZXdFbmQgfSk7XG4gICAgcmV0dXJuIHBhdGhQYXJ0O1xuICB9O1xuXG4gIHJldHVybiBsaW5lO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhdGhDb25zdHJ1Y3RvcjtcblxudmFyIF9hZGRfdXBfcG9pbnRzID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJyk7XG5cbnZhciBfYWRkX3VwX3BvaW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRfdXBfcG9pbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGF0aENvbnN0cnVjdG9yKCkge1xuXG4gIHZhciBwYXRoID0ge307XG5cbiAgcGF0aC5zdWJQYXRocyA9IFtdO1xuXG4gIHBhdGguZ2V0RWRnZVBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWRnZVBvaW50cyA9IFtdO1xuICAgIGVkZ2VQb2ludHMucHVzaCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGVkZ2VQb2ludHMucHVzaCgoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGVkZ2VQb2ludHNbZWRnZVBvaW50cy5sZW5ndGggLSAxXSwgc3ViUGF0aC5nZXRFZGdlUG9pbnQoKSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUG9pbnRzO1xuICB9O1xuXG4gIHBhdGguZ2V0U3RhcnRQb2ludE9mID0gZnVuY3Rpb24gKHN1YlBhdGgpIHtcbiAgICB2YXIgc3RhcnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gdGhpcy5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICB2YXIgY3VycmVudFBhdGggPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQYXRoID09PSBzdWJQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0UG9pbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRQb2ludCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoc3RhcnRQb2ludCwgY3VycmVudFBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXRoLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiB0aGlzLmdldExlbmd0aCgpO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IHRoaXMuc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgaWYgKGxlbmd0aFBvaW50ID4gc3ViUGF0aC5nZXRMZW5ndGgoKSkge1xuICAgICAgICAgIGxlbmd0aFBvaW50IC09IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoc3ViUGF0aC5nZXRQb2ludChsZW5ndGhQb2ludCAvIHN1YlBhdGguZ2V0TGVuZ3RoKCkpLCB0aGlzLmdldFN0YXJ0UG9pbnRPZihzdWJQYXRoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IHRoaXMuc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgbGVuZ3RoICs9IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG5cbiAgcGF0aC5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBuZXdTdWJQYXRocyA9IFtdO1xuICAgIHZhciBsZW5ndGhQb2ludCA9IHByb2dyZXNzICogdGhpcy5nZXRMZW5ndGgoKTtcbiAgICB2YXIgc3ViUGF0aHNSZXRyaWV2ZWQgPSBmYWxzZTtcbiAgICB2YXIgY3VycmVudFBhdGggPSAwO1xuXG4gICAgd2hpbGUgKCFzdWJQYXRoc1JldHJpZXZlZCkge1xuICAgICAgaWYgKGxlbmd0aFBvaW50ID4gdGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gdGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCk7XG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2godGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoMSkpO1xuICAgICAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRQYXRoICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2godGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgobGVuZ3RoUG9pbnQgLyB0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkpO1xuICAgICAgICBzdWJQYXRoc1JldHJpZXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBhcnRQYXRoID0gcGF0aENvbnN0cnVjdG9yKCk7XG4gICAgcGFydFBhdGguc3ViUGF0aHMgPSBuZXdTdWJQYXRocztcbiAgICByZXR1cm4gcGFydFBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJy4vYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnLi9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBhcmM6IF9hcmMyLmRlZmF1bHQsXG4gIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICBwYXRoOiBfcGF0aDIuZGVmYXVsdCxcbiAgYmV6aWVyQ3VydmU6IF9iZXppZXJfY3VydmUyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRocy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuXG4gIHZhciBjaXJjbGUgPSB7fTtcbiAgY2lyY2xlLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuXG4gIGNpcmNsZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICBjaXJjbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfYXJjMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IC1jaXJjbGUucmFkaXVzIH0sIGRlZ3JlZXM6IDM2MCwgcmFkaXVzOiBjaXJjbGUucmFkaXVzIH0pKTtcblxuICByZXR1cm4gY2lyY2xlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9hcmMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2FyYycpO1xuXG52YXIgX2FyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuXG4gIHZhciByZWN0YW5nbGUgPSB7fTtcbiAgcmVjdGFuZ2xlLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgcmVjdGFuZ2xlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gIHJlY3RhbmdsZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiByZWN0YW5nbGUud2lkdGgsIHk6IDAgfSB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IDAsIHk6IHJlY3RhbmdsZS5oZWlnaHQgfSB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IC1yZWN0YW5nbGUud2lkdGgsIHk6IDAgfSB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IDAsIHk6IC1yZWN0YW5nbGUuaGVpZ2h0IH0gfSkpO1xuXG4gIHJldHVybiByZWN0YW5nbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2xpbmUnKTtcblxudmFyIF9saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWN0YW5nbGUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9yZWN0YW5nbGUnKTtcblxudmFyIF9yZWN0YW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlKTtcblxudmFyIF9zcXVhcmUgPSByZXF1aXJlKCcuL3NxdWFyZScpO1xuXG52YXIgX3NxdWFyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcXVhcmUpO1xuXG52YXIgX2NpcmNsZSA9IHJlcXVpcmUoJy4vY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICBzcXVhcmU6IF9zcXVhcmUyLmRlZmF1bHQsXG4gIGNpcmNsZTogX2NpcmNsZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoYXBlcy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NpZGVsZW5ndGgnLCB0cnVlKTtcblxuICB2YXIgc3F1YXJlID0ge307XG4gIHNxdWFyZS5zaWRlbGVuZ3RoID0gb3B0aW9ucy5zaWRlbGVuZ3RoO1xuXG4gIHNxdWFyZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiBzcXVhcmUuc2lkZWxlbmd0aCwgeTogMCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogc3F1YXJlLnNpZGVsZW5ndGggfSB9KSk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IC1zcXVhcmUuc2lkZWxlbmd0aCwgeTogMCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogLXNxdWFyZS5zaWRlbGVuZ3RoIH0gfSkpO1xuXG4gIHJldHVybiBzcXVhcmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2xpbmUnKTtcblxudmFyIF9saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcXVhcmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFkZEFuaW1hdGlvbjogZnVuY3Rpb24gYWRkQW5pbWF0aW9uKGhhbmRsZSwgc2NvcGUpIHtcbiAgICBjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcbiAgICByZXR1cm4gY3JlYXRlanMuVGlja2VyLm9uKCd0aWNrJywgaGFuZGxlLCBzY29wZSk7XG4gIH0sXG4gIHJlbW92ZUFuaW1hdGlvbjogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uKGxpc3RlbmVyKSB7XG4gICAgY3JlYXRlanMuVGlja2VyLm9mZigndGljaycsIGxpc3RlbmVyKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvb3AuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfZmxhc2hlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZsYXNoZXInKTtcblxudmFyIF9mbGFzaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsYXNoZXIpO1xuXG52YXIgX2ZhZGVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL29wYWNpdHkvZmFkZXInKTtcblxudmFyIF9mYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWRlcik7XG5cbnZhciBfZ3JvdXAgPSByZXF1aXJlKCcuL2ZpbHRlcnMvZ3JvdXAvZ3JvdXAnKTtcblxudmFyIF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncm91cCk7XG5cbnZhciBfbW92ZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvbW92ZXIvbW92ZXInKTtcblxudmFyIF9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb3Zlcik7XG5cbnZhciBfbGluZWFyX3JvdGF0b3IgPSByZXF1aXJlKCcuL2ZpbHRlcnMvcm90YXRvci9saW5lYXJfcm90YXRvcicpO1xuXG52YXIgX2xpbmVhcl9yb3RhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9yb3RhdG9yKTtcblxudmFyIF9yYW5kb21Db2xvciA9IHJlcXVpcmUoJ3JhbmRvbUNvbG9yJyk7XG5cbnZhciBfcmFuZG9tQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tQ29sb3IpO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3NoYXBlcyA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvc2hhcGVzL3NoYXBlcycpO1xuXG52YXIgX3NoYXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFwZXMpO1xuXG52YXIgX3BhdGhzID0gcmVxdWlyZSgnLi9nZW9tZXRyeS9wYXRocy9wYXRocycpO1xuXG52YXIgX3BhdGhzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhzKTtcblxudmFyIF9jb21wb3NpdGlvbnMgPSByZXF1aXJlKCcuL2NvbXBvc2l0aW9ucy9jb21wb3NpdGlvbnMnKTtcblxudmFyIF9jb21wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zaXRpb25zKTtcblxudmFyIF9wcm94aWVzID0gcmVxdWlyZSgnLi9wcm94aWVzL3Byb3hpZXMnKTtcblxudmFyIF9wcm94aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3hpZXMpO1xuXG52YXIgX2ludGVydmFsID0gcmVxdWlyZSgnLi90aW1lcnMvaW50ZXJ2YWwnKTtcblxudmFyIF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbCk7XG5cbnZhciBfbW9kaWZpY2F0b3JzID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvbW9kaWZpY2F0b3JzJyk7XG5cbnZhciBfbW9kaWZpY2F0b3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGlmaWNhdG9ycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vVE9ETyBPcmdhbml6ZSBpbXBvcnRzXG5cbmZ1bmN0aW9uIGNyZWF0ZShjYW52YXNJZCkge1xuICB2YXIgbWFpbkNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0Lm1haW5Db250YWluZXIoY2FudmFzSWQpO1xuICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24obWFpbkNvbnRhaW5lci5zdGFnZSk7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICBtYWluQ29udGFpbmVyOiBtYWluQ29udGFpbmVyLFxuICAgIGZhY3Rvcnk6IF9mYWN0b3J5Mi5kZWZhdWx0LFxuICAgIGxvb3A6IF9sb29wMi5kZWZhdWx0LFxuICAgIGludGVydmFsOiBfaW50ZXJ2YWwyLmRlZmF1bHQsXG4gICAgdXRpbHM6IHtcbiAgICAgIHJhbmRvbUNvbG9yOiBfcmFuZG9tQ29sb3IyLmRlZmF1bHRcbiAgICB9LFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICBzaGFwZXM6IF9zaGFwZXMyLmRlZmF1bHQsXG4gICAgICBwYXRoczogX3BhdGhzMi5kZWZhdWx0XG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIGZsYXNoZXI6IF9mbGFzaGVyMi5kZWZhdWx0LFxuICAgICAgICBmYWRlcjogX2ZhZGVyMi5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgbW92ZXI6IF9tb3ZlcjIuZGVmYXVsdCxcbiAgICAgIGdyb3VwOiBfZ3JvdXAyLmRlZmF1bHQsXG4gICAgICByb3RhdG9yOiB7XG4gICAgICAgIGxpbmVhclJvdGF0b3I6IF9saW5lYXJfcm90YXRvcjIuZGVmYXVsdFxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kaWZpY2F0b3JzOiBfbW9kaWZpY2F0b3JzMi5kZWZhdWx0LFxuICAgIGNvbXBvc2l0aW9uczogX2NvbXBvc2l0aW9uczIuZGVmYXVsdCxcbiAgICBwcm94aWVzOiBfcHJveGllczIuZGVmYXVsdFxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yMScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yMicsIHRydWUpO1xuXG4gIHZhciBjb2xvckZhZGVyID0ge307XG4gIGNvbG9yRmFkZXIuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcbiAgY29sb3JGYWRlci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGNvbG9yRmFkZXIuY29sb3IxID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjEpO1xuICBjb2xvckZhZGVyLmNvbG9yMiA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IyKTtcbiAgY29sb3JGYWRlci5jdXJyZW50Q29sb3IgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMSk7XG4gIGNvbG9yRmFkZXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKGNvbG9yRmFkZXIuc3BlZWQsIDAuNSk7XG5cbiAgY29sb3JGYWRlci5jb2xvclJhbmdlID0ge1xuICAgIHI6IGNvbG9yRmFkZXIuY29sb3IyLnJlZCgpIC0gY29sb3JGYWRlci5jb2xvcjEucmVkKCksXG4gICAgZzogY29sb3JGYWRlci5jb2xvcjIuZ3JlZW4oKSAtIGNvbG9yRmFkZXIuY29sb3IxLmdyZWVuKCksXG4gICAgYjogY29sb3JGYWRlci5jb2xvcjIuYmx1ZSgpIC0gY29sb3JGYWRlci5jb2xvcjEuYmx1ZSgpXG4gIH07XG5cbiAgY29sb3JGYWRlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdGFydChjb2xvckZhZGVyLmhhbmRsZSk7XG4gIH07XG5cbiAgY29sb3JGYWRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgfTtcblxuICBjb2xvckZhZGVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdGhpcy5jdXJyZW50Q29sb3IucmVkKHRoaXMuY29sb3IxLnJlZCgpICsgY3VycmVudCAqIHRoaXMuY29sb3JSYW5nZS5yKTtcbiAgICB0aGlzLmN1cnJlbnRDb2xvci5ncmVlbih0aGlzLmNvbG9yMS5ncmVlbigpICsgY3VycmVudCAqIHRoaXMuY29sb3JSYW5nZS5nKTtcbiAgICB0aGlzLmN1cnJlbnRDb2xvci5ibHVlKHRoaXMuY29sb3IxLmJsdWUoKSArIGN1cnJlbnQgKiB0aGlzLmNvbG9yUmFuZ2UuYik7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkodGhpcy5zdWJqZWN0LCAnY29sb3InLCB0aGlzLmN1cnJlbnRDb2xvci5yZ2JTdHJpbmcoKSk7XG4gICAgdGhpcy5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gY29sb3JGYWRlcjtcbn07XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCdjb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sb3JfZmFkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG5cbiAgdmFyIHJhbmRvbUNvbG9yQ2hhbmdlciA9IHt9O1xuICByYW5kb21Db2xvckNoYW5nZXIuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcblxuICByYW5kb21Db2xvckNoYW5nZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21Db2xvckNoYW5nZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuICB9O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkodGhpcy5zdWJqZWN0LCAnY29sb3InLCAoMCwgX3JhbmRvbUNvbG9yMi5kZWZhdWx0KSgpKTtcbiAgICB0aGlzLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiByYW5kb21Db2xvckNoYW5nZXI7XG59O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX3JhbmRvbUNvbG9yID0gcmVxdWlyZSgncmFuZG9tQ29sb3InKTtcblxudmFyIF9yYW5kb21Db2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21Db2xvcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY29sb3JfY2hhbmdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlciA9IHJlcXVpcmUoJy4vY29sb3IvcmFuZG9tX2NvbG9yX2NoYW5nZXInKTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY29sb3JfY2hhbmdlcik7XG5cbnZhciBfY29sb3JfZmFkZXIgPSByZXF1aXJlKCcuL2NvbG9yL2NvbG9yX2ZhZGVyJyk7XG5cbnZhciBfY29sb3JfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3JfZmFkZXIpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIgPSByZXF1aXJlKCcuL3NjYWxlL2xpbmVhcl9wdWxzYXInKTtcblxudmFyIF9saW5lYXJfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9wdWxzYXIpO1xuXG52YXIgX3JhbmRvbV9hcmNfbW92ZXIgPSByZXF1aXJlKCcuL3Bvc2l0aW9uL3JhbmRvbV9hcmNfbW92ZXInKTtcblxudmFyIF9yYW5kb21fYXJjX21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9hcmNfbW92ZXIpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyID0gcmVxdWlyZSgnLi9wb3NpdGlvbi9yYW5kb21faW5fcmVjdF9tb3ZlcicpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9pbl9yZWN0X21vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBjb2xvcjoge1xuICAgIHJhbmRvbUNvbG9yQ2hhbmdlcjogX3JhbmRvbV9jb2xvcl9jaGFuZ2VyMi5kZWZhdWx0LFxuICAgIGNvbG9yRmFkZXI6IF9jb2xvcl9mYWRlcjIuZGVmYXVsdFxuICB9LFxuICBzY2FsZToge1xuICAgIGxpbmVhclB1bHNhcjogX2xpbmVhcl9wdWxzYXIyLmRlZmF1bHRcbiAgfSxcbiAgcG9zaXRpb246IHtcbiAgICByYW5kb21BcmNNb3ZlcjogX3JhbmRvbV9hcmNfbW92ZXIyLmRlZmF1bHQsXG4gICAgcmFuZG9tSW5SZWN0TW92ZXI6IF9yYW5kb21faW5fcmVjdF9tb3ZlcjIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kaWZpY2F0b3JzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdnb2FsUG9pbnQnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0UG9pbnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIHAyUE1vdmVyID0gKDAsIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X21vZGlmaWNhdG9yMi5kZWZhdWx0KShvcHRpb25zKSwgb3B0aW9ucyk7XG5cbiAgICAvKiBQYXJhbXMgYW5kIGRlZmF1bHRzICovXG4gICAgcDJQTW92ZXIuZ29hbFBvaW50ID0gb3B0aW9ucy5nb2FsUG9pbnQ7XG4gICAgcDJQTW92ZXIuc3RhcnRQb2ludCA9IG9wdGlvbnMuc3RhcnRQb2ludDtcblxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgICBwMlBNb3Zlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICAgICB2YXIgYW1vdW50WCA9ICh0aGlzLmdvYWxQb2ludC54IC0gdGhpcy5zdGFydFBvaW50LngpICogY3VycmVudDtcbiAgICAgICAgdmFyIGFtb3VudFkgPSAodGhpcy5nb2FsUG9pbnQueSAtIHRoaXMuc3RhcnRQb2ludC55KSAqIGN1cnJlbnQ7XG5cbiAgICAgICAgdGhpcy5zdWJqZWN0LnggPSB0aGlzLnN0YXJ0UG9pbnQueCArIGFtb3VudFg7XG4gICAgICAgIHRoaXMuc3ViamVjdC55ID0gdGhpcy5zdGFydFBvaW50LnkgKyBhbW91bnRZO1xuICAgIH07XG5cbiAgICAvKiBJbml0ICovXG4gICAgcmV0dXJuIHAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvbW9kaWZpY2F0b3JzL2Fic3RyYWN0X21vZGlmaWNhdG9yJyk7XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfbW9kaWZpY2F0b3IpO1xuXG52YXIgX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy90cmFuc2l0aW9uX21vZGlmaWNhdG9yJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9tb2RpZmljYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX21vZGlmaWNhdG9yKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZV9tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21BcmNNb3ZlciA9IHt9O1xuXG4gIC8vIHByaXZhdGUgdmFyc1xuICByYW5kb21BcmNNb3Zlci5fY3VycmVudEFyYyA9IG51bGw7XG4gIHJhbmRvbUFyY01vdmVyLl9jdXJyZW50U3RhcnRQb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICByYW5kb21BcmNNb3Zlci5fY3VycmVudE1zID0gMDtcbiAgcmFuZG9tQXJjTW92ZXIuX2N1cnJlbnRBbmdsZSA9IDA7XG4gIHJhbmRvbUFyY01vdmVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIHJhbmRvbUFyY01vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblxuICAvLyBwcml2YXRlIGZ1bmN0aW9uc1xuICByYW5kb21BcmNNb3Zlci5fY3JlYXRlUmFuZG9tQXJjID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX2FyYzIuZGVmYXVsdCkoeyBkZWdyZWVzOiBNYXRoLnJhbmRvbSgpICogMzYwIC0gMTgwLCByYWRpdXM6IDI1IH0pO1xuICB9O1xuXG4gIHJhbmRvbUFyY01vdmVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQXJjTW92ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuXG4gICAgLy8gUmVzZXQgZXZlcnl0aGluZ1xuICAgIHRoaXMuX2N1cnJlbnRBcmMgPSByYW5kb21BcmNNb3Zlci5fY3JlYXRlUmFuZG9tQXJjKCk7XG4gICAgdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB0aGlzLl9jdXJyZW50TXMgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRBbmdsZSA9IDA7XG4gIH07XG5cbiAgcmFuZG9tQXJjTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIG1zID0gZXZlbnQuZGVsdGE7XG4gICAgdGhpcy5fY3VycmVudE1zICs9IG1zO1xuXG4gICAgd2hpbGUgKHRoaXMuX2N1cnJlbnRNcyAvIDEwMDAgKiB0aGlzLnNwZWVkID49IHRoaXMuZ2V0TGVuZ3RoKCkpIHtcbiAgICAgIHZhciByb3RhdGVkUG9pbnQgPSAoMCwgX3JvdGF0ZV9wb2ludDIuZGVmYXVsdCkodGhpcy5fY3VycmVudEFyYy5nZXRQb2ludCgxKSwgdGhpcy5fY3VycmVudEFuZ2xlKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uLnggPSB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbi54ICsgcm90YXRlZFBvaW50Lng7XG4gICAgICB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbi55ID0gdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24ueSArIHJvdGF0ZWRQb2ludC55O1xuICAgICAgdGhpcy5fY3VycmVudE1zID0gdGhpcy5fY3VycmVudE1zIC0gdGhpcy5fY3VycmVudEFyYy5nZXRMZW5ndGgoKSAqIDEwMDAgLyB0aGlzLnNwZWVkO1xuICAgICAgdGhpcy5fY3VycmVudEFuZ2xlID0gdGhpcy5fY3VycmVudEFuZ2xlICsgdGhpcy5fY3VycmVudEFyYy5nZXRBbmdsZSgxKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRBcmMgPSByYW5kb21BcmNNb3Zlci5fY3JlYXRlUmFuZG9tQXJjKCk7XG4gICAgfVxuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX2N1cnJlbnRNcyAvIDEwMDAgKiB0aGlzLnNwZWVkIC8gdGhpcy5fY3VycmVudEFyYy5nZXRMZW5ndGgoKTtcblxuICAgIHZhciBwb3NpdGlvbiA9ICgwLCBfcm90YXRlX3BvaW50Mi5kZWZhdWx0KSh0aGlzLl9jdXJyZW50QXJjLmdldFBvaW50KHByb2dyZXNzKSwgdGhpcy5fY3VycmVudEFuZ2xlKTtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KSh0aGlzLnN1YmplY3QsICd4JywgdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24ueCArIHBvc2l0aW9uLngpO1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKHRoaXMuc3ViamVjdCwgJ3knLCB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbi55ICsgcG9zaXRpb24ueSk7XG4gICAgLy9yYW5kb21BcmNNb3Zlci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5fY3VycmVudEFyYyA9IHJhbmRvbUFyY01vdmVyLl9jcmVhdGVSYW5kb21BcmMoKTtcbiAgcmV0dXJuIHJhbmRvbUFyY01vdmVyO1xufTtcblxudmFyIF9hcmMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3BhdGhzL2FyYycpO1xuXG52YXIgX2FyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmMpO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfcm90YXRlX3BvaW50ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9yb3RhdGVfcG9pbnQnKTtcblxudmFyIF9yb3RhdGVfcG9pbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm90YXRlX3BvaW50KTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fYXJjX21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gIC8qIFBhcmFtZXRlcnMgKi9cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG5cbiAgLyogY3JlYXRlIG9iamVjdCBhbmQgc2V0IHByb3BlcnRpZXMgKi9cbiAgdmFyIHJhbmRvbUluUmVjdE1vdmVyID0gKDAsIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHJhbmRvbUluUmVjdE1vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgcmFuZG9tSW5SZWN0TW92ZXIud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByYW5kb21JblJlY3RNb3Zlci5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAvLyBjYWxsYmFja3NcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX19vbkN1cnJlbnRHb2FsUmVhY2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RvcCgpO1xuICAgIHRoaXMuX2xpbmVNb3Zlci5zdGFydFBvaW50LnggPSB0aGlzLl9saW5lTW92ZXIuZ29hbFBvaW50Lng7XG4gICAgdGhpcy5fbGluZU1vdmVyLnN0YXJ0UG9pbnQueSA9IHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueTtcblxuICAgIHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoO1xuICAgIHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodDtcblxuICAgIHRoaXMuX2ludGVydmFsLm1zID0gdGhpcy5fY2FsY3VsYXRlSW50ZXJ2YWxUaW1lKCk7XG5cbiAgICB0aGlzLl9saW5lTW92ZXIuc3RhcnQoKTtcbiAgfTtcblxuICAvLyBQcml2YXRlIHZhcnNcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2ludGVydmFsID0gKDAsIF9pbnRlcnZhbDIuZGVmYXVsdCkoeyB0eXBlOiAnbXMnLCBtczogMSB9KTtcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2xpbmVNb3ZlciA9ICgwLCBfbGluZV9tb3ZlcjIuZGVmYXVsdCkoe1xuICAgIHN1YmplY3Q6IHJhbmRvbUluUmVjdE1vdmVyLnN1YmplY3QsXG4gICAgZ29hbFBvaW50OiB7IHg6IDAsIHk6IDAgfSxcbiAgICBvbkZpbmlzaGVkSW50ZXJ2YWw6IGZ1bmN0aW9uIG9uRmluaXNoZWRJbnRlcnZhbCgpIHtcbiAgICAgIHJhbmRvbUluUmVjdE1vdmVyLl9fb25DdXJyZW50R29hbFJlYWNoZWQoKTtcbiAgICB9LFxuICAgIGludGVydmFsOiByYW5kb21JblJlY3RNb3Zlci5faW50ZXJ2YWwsXG4gICAgc3RlZXBuZXNzOiAxXG4gIH0pO1xuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fX29uQ3VycmVudEdvYWxSZWFjaGVkKCk7XG4gIH07XG5cbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RvcCgpO1xuICB9O1xuXG4gIC8qIFByaXZhdGUgZnVuY3Rpb25zICovXG4gIHJhbmRvbUluUmVjdE1vdmVyLl9jYWxjdWxhdGVJbnRlcnZhbFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc3QgPSAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkodGhpcy5fbGluZU1vdmVyLmdvYWxQb2ludCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KSh0aGlzLl9saW5lTW92ZXIuc3RhcnRQb2ludCkpO1xuICAgIHJldHVybiBkaXN0IC8gdGhpcy5zcGVlZCAqIDEwMDA7XG4gIH07XG5cbiAgcmV0dXJuIHJhbmRvbUluUmVjdE1vdmVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2xpbmVfbW92ZXIgPSByZXF1aXJlKCcuL2xpbmVfbW92ZXInKTtcblxudmFyIF9saW5lX21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVfbW92ZXIpO1xuXG52YXIgX2ludGVydmFsID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90aW1lcnMvaW50ZXJ2YWwnKTtcblxudmFyIF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbCk7XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL21vZGlmaWNhdG9ycy9hYnN0cmFjdF9tb2RpZmljYXRvcicpO1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X21vZGlmaWNhdG9yKTtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3RvX3ZlY3RvcicpO1xuXG52YXIgX3RvX3ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b192ZWN0b3IpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9pbl9yZWN0X21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGltaXQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyaXNpbmcnLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgdmFyIGxpbmVhclB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9tb2RpZmljYXRvcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIuZGVmYXVsdCkob3B0aW9ucyksIG9wdGlvbnMpO1xuICBsaW5lYXJQdWxzYXIubGltaXQgPSBvcHRpb25zLmxpbWl0O1xuXG4gIGxpbmVhclB1bHNhci5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRyYW5zaXRpb24uc3RvcCgpO1xuICAgIHRoaXMuaGFuZGxlKDApO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKHRoaXMuc3ViamVjdCwgJ3NjYWxlJywgMSArIGN1cnJlbnQgKiAodGhpcy5saW1pdCAtIDEpKTtcbiAgICB0aGlzLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQdWxzYXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9tb2RpZmljYXRvcnMvYWJzdHJhY3RfbW9kaWZpY2F0b3InKTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9tb2RpZmljYXRvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9tb2RpZmljYXRvciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvbW9kaWZpY2F0b3JzL3RyYW5zaXRpb25fbW9kaWZpY2F0b3InKTtcblxudmFyIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3B1bHNhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSB7fTtcbiAgcHJveHkuZ3JvdXAgPSBbXTtcblxuICBwcm94eS5hZGRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB0aGlzLmdyb3VwLnB1c2goZWxlbWVudCk7XG4gIH07XG5cbiAgcHJveHkucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdGhpcy5ncm91cC5zcGxpY2UodGhpcy5ncm91cC5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgfTtcblxuICBwcm94eS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuZ3JvdXBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBvYmogPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICB0aGlzLl9zZXRQcm9wT2ZFbGVtZW50KG9iaiwgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzaHVmZmxlJywgZmFsc2UsIGZhbHNlKTtcblxuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2h1ZmZsZSAmJiB0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuc2h1ZmZsZUdyb3VwKCk7XG4gICAgfVxuICAgIHRoaXMuX3NldFByb3BPZkVsZW1lbnQodGhpcy5ncm91cFt0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXhdLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJyZW50RWxlbWVudEluZGV4ID49IHRoaXMuZ3JvdXAubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfTtcblxuICBwcm94eS5zaHVmZmxlR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9UT0RPIGltcGxlbWVudCBzaHVmZmxlIGFsZ29yaXRobVxuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmNyZW1lbnRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xuXG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG4gIHByb3h5LmludGVydmFsID0gb3B0aW9ucy5pbnRlcnZhbDtcbiAgcHJveHkudGltZXIgPSAoMCwgX2ludGVydmFsX3RpbWVyMi5kZWZhdWx0KShwcm94eS5pbnRlcnZhbCk7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwID0gKDAsIF9pbmNyZW1lbnRfcHJveHkyLmRlZmF1bHQpKHt9KTtcbiAgICBwLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICB2YXIgdGltZXIgPSB0aGlzLnRpbWVyO1xuICAgIHZhciBjaGFuZ2VQcm9wQ2FsbGJhY2sgPSBmdW5jdGlvbiBjaGFuZ2VQcm9wQ2FsbGJhY2soKSB7XG4gICAgICBwLnNldFByb3AobmFtZSwgdmFsdWUpO1xuICAgICAgcC5kcmF3KCk7XG4gICAgICBpZiAocC5jdXJyZW50RWxlbWVudEluZGV4ID09PSAwKSB7XG4gICAgICAgIHRpbWVyLnJlbW92ZUxpc3RlbmVyKGNoYW5nZVByb3BDYWxsYmFjayk7XG4gICAgICAgIHAuZ3JvdXAgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50aW1lci5hZGRMaXN0ZW5lcihjaGFuZ2VQcm9wQ2FsbGJhY2spO1xuICB9O1xuXG4gIHByb3h5LnRpbWVyLnN0YXJ0KCk7XG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RpbWVycy9pbnRlcnZhbF90aW1lcicpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsX3RpbWVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmYXVsdF9wcm94eSA9IHJlcXVpcmUoJy4vZGVmYXVsdF9wcm94eScpO1xuXG52YXIgX2RlZmF1bHRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdF9wcm94eSk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5ID0gcmVxdWlyZSgnLi9pbmNyZW1lbnRfcHJveHknKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5jcmVtZW50X3Byb3h5KTtcblxudmFyIF9pbnRlcnZhbF9wcm94eSA9IHJlcXVpcmUoJy4vaW50ZXJ2YWxfcHJveHknKTtcblxudmFyIF9pbnRlcnZhbF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF9wcm94eSk7XG5cbnZhciBfcmFuZG9tX3Byb3h5ID0gcmVxdWlyZSgnLi9yYW5kb21fcHJveHknKTtcblxudmFyIF9yYW5kb21fcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJveHk6IF9kZWZhdWx0X3Byb3h5Mi5kZWZhdWx0LFxuICBpbmNyZW1lbnRQcm94eTogX2luY3JlbWVudF9wcm94eTIuZGVmYXVsdCxcbiAgaW50ZXJ2YWxQcm94eTogX2ludGVydmFsX3Byb3h5Mi5kZWZhdWx0LFxuICByYW5kb21Qcm94eTogX3JhbmRvbV9wcm94eTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3hpZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmRvbUVsZW1lbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3JvdXAubGVuZ3RoKTtcbiAgICBwcm94eS5fc2V0UHJvcE9mRWxlbWVudCh0aGlzLmdyb3VwW3JhbmRvbUVsZW1lbnRJbmRleF0sIG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGludGVydmFsID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0eXBlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYnBtJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ21zJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Rpdmlzb3InLCBmYWxzZSwgMSk7XG5cbiAgaW50ZXJ2YWwudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgaW50ZXJ2YWwuYnBtID0gb3B0aW9ucy5icG07XG4gIGludGVydmFsLm1zID0gb3B0aW9ucy5tcztcbiAgaW50ZXJ2YWwuZGl2aXNvciA9IG9wdGlvbnMuZGl2aXNvcjtcblxuICBpZiAoaW50ZXJ2YWwuYnBtID09PSAwICYmIGludGVydmFsLm1zID09PSAwKSB7XG4gICAgdGhyb3cgJ0lsbGVnYWwgc3RhdGU6IEJQTSBhbmQgTVMgY2Fubm90IGJvdGggYmUgMCc7XG4gIH1cblxuICBpbnRlcnZhbC5nZW5lcmF0ZUhhbGZJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFsZkludGVydmFsID0ge307XG4gICAgaGFsZkludGVydmFsLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgaGFsZkludGVydmFsLmJwbSA9IHRoaXMuYnBtO1xuICAgIGhhbGZJbnRlcnZhbC5tcyA9IHRoaXMubXM7XG4gICAgaGFsZkludGVydmFsLmRpdmlzb3IgPSB0aGlzLmRpdmlzb3IgKiAyO1xuXG4gICAgcmV0dXJuIGhhbGZJbnRlcnZhbDtcbiAgfTtcblxuICBpbnRlcnZhbC5iaXNlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kaXZpc29yID0gdGhpcy5kaXZpc29yICogMjtcbiAgfTtcblxuICBpbnRlcnZhbC5nZXRNcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDYwMDAwIC8gdGhpcy5icG07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBpbnRlcnZhbDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWludGVydmFsLmpzLm1hcFxuIiwiaW1wb3J0IGNvcHkgZnJvbSAnfi9pbnRlcm5hbC9jb3B5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gIHZhciBhYnN0cmFjdENvbXBvbmVudCA9IHt9O1xyXG4gIGFic3RyYWN0Q29tcG9uZW50Ll9jYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgYWJzdHJhY3RDb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHNjb3BlKXtcclxuICAgIGlmKCF0aGlzLl9jYWxsYmFja3NbZXZlbnROYW1lXSl7XHJcbiAgICAgIHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdID0gW107XHJcbiAgICB9XHJcbiAgICB2YXIgbGlzdGVuZXIgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgc2NvcGU6IHNjb3BlfTtcclxuICAgIHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xyXG4gIH07XHJcblxyXG4gIGFic3RyYWN0Q29tcG9uZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKXtcclxuICAgICAgaWYodGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0pe1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdLmluZGV4T2YobGlzdGVuZXIpO1xyXG4gICAgICAgIGlmKGluZGV4ID4gLTEpe1xyXG4gICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGFic3RyYWN0Q29tcG9uZW50LnNlbmRFdmVudCA9IGZ1bmN0aW9uKGV2ZW50TmFtZSl7XHJcbiAgICBpZighdGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0pe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IodmFyIGNhbGxiYWNrIG9mIHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdKXtcclxuICAgICAgY2FsbGJhY2suY2FsbGJhY2suY2FsbChjYWxsYmFjay5zY29wZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYWJzdHJhY3RDb21wb25lbnQuZ2V0Q29weSA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gY29weSh0aGlzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gYWJzdHJhY3RDb21wb25lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IGxpbmVhclB1bHNhciBmcm9tICd+L21vZGlmaWNhdG9ycy9zY2FsZS9saW5lYXJfcHVsc2FyJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IGNlbnRyYWxpemVyIGZyb20gJ34vZmlsdGVycy9tb3Zlci9jZW50ZXIvY2VudHJhbGl6ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xyXG5cclxuICBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzID0gMTtcclxuICBvcHRpb25zLmxpbWl0ID0gMDtcclxuICBvcHRpb25zLnJpc2luZyA9IHRydWU7XHJcbiAgb3B0aW9ucy5jZW50ZXJJZlBvc3NpYmxlID0gdHJ1ZTtcclxuICBvcHRpb25zLndpZHRoID0gb3B0aW9ucy5jaGlsZC5nZXRXaWR0aCgpO1xyXG4gIG9wdGlvbnMuaGVpZ2h0ID0gb3B0aW9ucy5jaGlsZC5nZXRIZWlnaHQoKTtcclxuICBvcHRpb25zLnN1YmplY3QgPSBvcHRpb25zLmNoaWxkO1xyXG4gIG9wdGlvbnMuc3RlZXBuZXNzID0gMTtcclxuICBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzID0gMTtcclxuXHJcbiAgdmFyIHpvb21PdXQgPSB7fTtcclxuICB6b29tT3V0Ll9jZW50cmFsaXplciA9IGNlbnRyYWxpemVyKG9wdGlvbnMpO1xyXG4gIHpvb21PdXQuX3pvb21lciA9IGxpbmVhclB1bHNhcihvcHRpb25zKTtcclxuICB6b29tT3V0LnZpZXcgPSB6b29tT3V0Ll9jZW50cmFsaXplci52aWV3O1xyXG5cclxuICB6b29tT3V0LnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuX3pvb21lci5zdGFydCgpO1xyXG4gIH07XHJcblxyXG4gIHpvb21PdXQuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLl96b29tZXIuc3RvcCgpO1xyXG4gIH07XHJcblxyXG4gIHpvb21PdXQucmVzZXQgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5fem9vbWVyLnJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHpvb21PdXQ7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0Q29tcG9uZW50IGZyb20gJ34vYWJzdHJhY3RfY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAvKiBQcml2YXRlIHZhcnMgKi9cclxuICAgICAgdmFyIGNvbXBvbmVudCA9IGFic3RyYWN0Q29tcG9uZW50KCk7XHJcblxyXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgICBjb21wb25lbnQudmlldyA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xyXG4gICAgICBjb21wb25lbnQuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgICAgLyogUGFyYW1ldGVycyAqL1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY2lyY2xlU2hhcGUnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcblxyXG4gICAgICAvKiBQcml2YXRlIHZhcnMgKi9cclxuICAgICAgdmFyIGNpcmNsZSA9IGFic3RyYWN0U2hhcGUoKTtcclxuXHJcbiAgICAgIC8qIHB1YmxpYyBwcm9wZXJ0aWVzICovXHJcbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XHJcbiAgICAgIGNpcmNsZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcblxyXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xyXG4gICAgICBjaXJjbGUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd0NpcmNsZSh0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUsIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSwgdGhpcy5jaXJjbGVTaGFwZS5yYWRpdXMgKiB0aGlzLnNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNpcmNsZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSAqIDI7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjaXJjbGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaXJjbGVTaGFwZS5yYWRpdXMgKiB0aGlzLnNjYWxlICogMjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8qIGluaXQgKi9cclxuICAgICAgY2lyY2xlLmRyYXcoKTtcclxuICAgICAgcmV0dXJuIGNpcmNsZTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBuZXcgY3JlYXRlanMuQ29udGFpbmVyKCk7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBwYXRoRHJhd2VyIGZyb20gJy4vaGVscGVyL3BhdGhfZHJhd2VyJztcclxuaW1wb3J0IGFkZFVwUG9pbnRzIGZyb20gJ34vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cyc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gIHZhciBjdXN0b20gPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2N1c3RvbVNoYXBlJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcbiAgY3VzdG9tLmN1c3RvbVNoYXBlID0gb3B0aW9ucy5jdXN0b21TaGFwZTtcclxuICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xyXG5cclxuICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmJlZ2luU3Ryb2tlKCcjMDBGJykubW92ZVRvKDAsIDApO1xyXG4gICAgdmFyIGN1cnJlbnQgPSB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDBcclxuICAgIH07XHJcbiAgICB2YXIgaSA9IDE7XHJcbiAgICBmb3IgKHZhciBwYXRoIG9mIHRoaXMuY3VzdG9tU2hhcGUucGF0aC5zdWJQYXRocykge1xyXG4gICAgICBwYXRoRHJhd2VyW3BhdGgudHlwZV0odGhpcy52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcclxuICAgICAgY3VycmVudCA9IGFkZFVwUG9pbnRzKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY3VzdG9tLmRyYXcoKTtcclxuICByZXR1cm4gY3VzdG9tO1xyXG59XHJcbiIsImltcG9ydCBhbmdsZVRvUmFkaWFucyBmcm9tICd+L2dlb21ldHJ5L2hlbHBlci9hbmdsZV90b19yYWRpYW5zJztcclxuLyplc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UqL1xyXG5mdW5jdGlvbiBwYXRoRHJhd2VyKCl7fVxyXG5cclxucGF0aERyYXdlci5saW5lID0gZnVuY3Rpb24oZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpe1xyXG4gIGdyYXBoaWNzLmxpbmVUbyhjdXJyZW50LnggKyBwYXRoLmdldEVkZ2VQb2ludCgpLngsIGN1cnJlbnQueSArIHBhdGguZ2V0RWRnZVBvaW50KCkueSk7XHJcbn07XHJcblxyXG5wYXRoRHJhd2VyLmFyYyA9IGZ1bmN0aW9uKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KXtcclxuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xyXG4gIGlmKHBhdGguZGVncmVlcyA8IDApe1xyXG4gICAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55IC0gcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCBhbmdsZVRvUmFkaWFucyg5MCksIGFuZ2xlVG9SYWRpYW5zKDkwICsgcGF0aC5kZWdyZWVzKSwgdHJ1ZSk7XHJcbiAgfWVsc2V7XHJcbiAgICBncmFwaGljcy5hcmMocGF0aC5zdGFydC54LCBwYXRoLnN0YXJ0LnkgKyBwYXRoLnJhZGl1cywgcGF0aC5yYWRpdXMsIGFuZ2xlVG9SYWRpYW5zKC05MCksIGFuZ2xlVG9SYWRpYW5zKHBhdGguZGVncmVlcyAtIDkwKSk7XHJcbiAgfVxyXG59O1xyXG5cclxucGF0aERyYXdlci5zaW5lX3dhdmUgPSBmdW5jdGlvbihncmFwaGljcywgcGF0aCwgY3VycmVudCl7XHJcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcclxuICBmb3IodmFyIHggPSAwOyB4IDwgcGF0aC5nZXRMZW5ndGgoKTsgeCArPSA1KXtcclxuICAgIHZhciBwb2ludCA9IHBhdGguZ2V0UG9pbnQoeCAvIHBhdGguZ2V0TGVuZ3RoKCkpO1xyXG4gICAgZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gIH1cclxufTtcclxuXHJcbnBhdGhEcmF3ZXIuYmV6aWVyX2N1cnZlID0gZnVuY3Rpb24oZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpe1xyXG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XHJcbiAgaWYocGF0aC5jcG9pbnQyKXtcclxuICAgIGdyYXBoaWNzLmJlemllckN1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmNwb2ludDIueCwgcGF0aC5jcG9pbnQyLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xyXG4gIH1lbHNle1xyXG4gICAgZ3JhcGhpY3MucXVhZHJhdGljQ3VydmVUbyhwYXRoLmNwb2ludDEueCwgcGF0aC5jcG9pbnQxLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhdGhEcmF3ZXI7XHJcbiIsImltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcbmltcG9ydCBhYnN0cmFjdFNoYXBlIGZyb20gJy4vYWJzdHJhY3Rfc2hhcGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XHJcblxyXG4gIHZhciBpbWFnZSA9IGFic3RyYWN0U2hhcGUoKTtcclxuICBpbWFnZS52aWV3ID0gbmV3IGNyZWF0ZWpzLkJpdG1hcChvcHRpb25zLnNvdXJjZSk7XHJcblxyXG5cclxuICBpbWFnZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnZpZXcuc2NhbGVYID0gdGhpcy5zY2FsZTtcclxuICAgIHRoaXMudmlldy5zY2FsZVkgPSB0aGlzLnNjYWxlO1xyXG4gIH07XHJcblxyXG4gIGltYWdlLmRyYXcoKTtcclxuICByZXR1cm4gaW1hZ2U7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0U2hhcGUgZnJvbSAnLi9hYnN0cmFjdF9zaGFwZSc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgdmFyIGxpbmUgPSBhYnN0cmFjdFNoYXBlKCk7XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnbGluZVBhdGgnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3RoaWNrbmVzcycsIGZhbHNlLCAxKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcblxyXG4gICAgICBsaW5lLnBhdGggPSBvcHRpb25zLmxpbmVQYXRoO1xyXG4gICAgICBsaW5lLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuICAgICAgbGluZS50aGlja25lc3MgPSBvcHRpb25zLnRoaWNrbmVzcztcclxuXHJcbiAgICAgIGxpbmUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3NcclxuICAgICAgICAgICAgLmNsZWFyKClcclxuICAgICAgICAgICAgLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpXHJcbiAgICAgICAgICAgIC5zZXRTdHJva2VTdHlsZSh0aGlzLnRoaWNrbmVzcyAqIHRoaXMuc2NhbGUpXHJcbiAgICAgICAgICAgIC5tb3ZlVG8odGhpcy5wYXRoLnN0YXJ0LnggKiB0aGlzLnNjYWxlLCB0aGlzLnBhdGguc3RhcnQueSAqIHRoaXMuc2NhbGUpXHJcbiAgICAgICAgICAgIC5saW5lVG8odGhpcy5wYXRoLmVuZC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLmVuZC55ICogdGhpcy5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsaW5lLmdldFdpZHRoID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMucGF0aC5lbmQueCAtIHRoaXMucGF0aC5zdGFydC54KSAqIHRoaXMuc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsaW5lLmdldEhlaWdodCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnBhdGguZW5kLnkgLSB0aGlzLnBhdGguc3RhcnQueSkgKiB0aGlzLnNjYWxlO1xyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGxpbmUuZHJhdygpO1xyXG4gICAgICByZXR1cm4gbGluZTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpZCkge1xyXG4gICAgdmFyIHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGlkKTtcclxuXHJcbiAgICB2YXIgY29udGFpbmVyID0ge307XHJcblxyXG4gICAgY29udGFpbmVyLmFkZCA9IGZ1bmN0aW9uKGNoaWxkKXtcclxuICAgICAgc3RhZ2UuYWRkQ2hpbGQoY2hpbGQudmlldyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5yZW1vdmUgPSBmdW5jdGlvbihjaGlsZCl7XHJcbiAgICAgIHN0YWdlLnJlbW92ZUNoaWxkKGNoaWxkLnZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIucmVtb3ZlQWxsID0gZnVuY3Rpb24oKXtcclxuICAgICAgc3RhZ2UucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLnN0YWdlID0gc3RhZ2U7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuaW1wb3J0IHBhdGhEcmF3ZXIgZnJvbSAnLi9oZWxwZXIvcGF0aF9kcmF3ZXInO1xyXG5pbXBvcnQgYWRkVXBQb2ludHMgZnJvbSAnfi9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgICBpZighb3B0aW9ucyl7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAncGF0aCcsIHRydWUpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgdmFyIGN1c3RvbSA9IGFic3RyYWN0U2hhcGUoKTtcclxuICAgICAgY3VzdG9tLmNvbXBsZXRlUGF0aCA9IG9wdGlvbnMucGF0aDtcclxuICAgICAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuICAgICAgY3VzdG9tLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuXHJcbiAgICAgIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMud2lkdGgpLm1vdmVUbygwLCAwKTtcclxuICAgICAgICAgIHZhciBjdXJyZW50ID0ge3g6IDAsIHk6IDB9O1xyXG4gICAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgICAgZm9yKHZhciBwYXRoIG9mIHRoaXMuY29tcGxldGVQYXRoLnN1YlBhdGhzKXtcclxuICAgICAgICAgICAgcGF0aERyYXdlcltwYXRoLnR5cGVdKHRoaXMudmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSBhZGRVcFBvaW50cyhjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY3VzdG9tLmRyYXcoKTtcclxuICAgICAgcmV0dXJuIGN1c3RvbTtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3JlY3RhbmdsZVNoYXBlJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG5cclxuICAgICAgdmFyIHJlY3QgPSBhYnN0cmFjdFNoYXBlKCk7XHJcbiAgICAgIHJlY3Qud2lkdGggPSBvcHRpb25zLnJlY3RhbmdsZVNoYXBlLndpZHRoO1xyXG4gICAgICByZWN0LmhlaWdodCA9IG9wdGlvbnMucmVjdGFuZ2xlU2hhcGUuaGVpZ2h0O1xyXG4gICAgICByZWN0LmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuXHJcbiAgICAgIHJlY3QuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd1JlY3QoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMuc2NhbGUsIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWN0LmdldFdpZHRoID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWN0LmdldEhlaWdodCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJlY3QuZHJhdygpO1xyXG4gICAgICByZXR1cm4gcmVjdDtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmZ1bmN0aW9uIHNxdWFyZUNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NxdWFyZVNoYXBlJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG5cclxuICAgICAgdmFyIHNxdWFyZSA9IGFic3RyYWN0U2hhcGUoKTtcclxuICAgICAgc3F1YXJlLnNxdWFyZVNoYXBlID0gb3B0aW9ucy5zcXVhcmVTaGFwZTtcclxuICAgICAgc3F1YXJlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuXHJcbiAgICAgIHNxdWFyZS5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmNvbG9yKS5kcmF3UmVjdCgwLCAwLCB0aGlzLnNxdWFyZVNoYXBlLnNpZGVsZW5ndGggKiB0aGlzLnNjYWxlLCB0aGlzLnNxdWFyZVNoYXBlLnNpZGVsZW5ndGggKiB0aGlzLnNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNxdWFyZS5nZXRXaWR0aCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3F1YXJlU2hhcGUuc2lkZWxlbmd0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzcXVhcmUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNxdWFyZS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBzcXVhcmU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNxdWFyZUNvbnN0cnVjdG9yO1xyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5pbXBvcnQgYWJzdHJhY3RTaGFwZSBmcm9tICcuL2Fic3RyYWN0X3NoYXBlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgICAgLyogUGFyYW1ldGVycyAqL1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XHJcbiAgICAgIC8vIElmIHRoZSBzb3VyY2UgaXMgYSBzdHJpbmcsIGNvbnZlcnQgaXQgdG8gYSB2aWRlb1xyXG4gICAgICBoYW5kbGVWaWRlb1NvdXJjZSgpO1xyXG5cclxuICAgICAgLyogcHJpdmF0ZSB2YXJzICovXHJcbiAgICAgIHZhciB2aWRlbyA9IGFic3RyYWN0U2hhcGUoKTtcclxuXHJcbiAgICAgIC8qIHB1YmxpYyBwcm9wZXJ0aWVzICovXHJcbiAgICAgIHZpZGVvLnZpZXcgPSBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKTtcclxuICAgICAgdmlkZW8uc291cmNlID0gb3B0aW9ucy5zb3VyY2U7XHJcbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXHJcbiAgICAgIHZpZGVvLmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudmlldy5zY2FsZVggPSB2aWRlby5zY2FsZTtcclxuICAgICAgICB0aGlzLnZpZXcuc2NhbGVZID0gdmlkZW8uc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5wbGF5ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNvdXJjZS5wbGF5KCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuc291cmNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZpZGVvLnBhdXNlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnNvdXJjZS5wYXVzZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgLyogcHJpdmF0ZSBmdW5jdGlvbnMgKi9cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKXtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xyXG4gICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xyXG4gICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcclxuICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogaW5pdCAqL1xyXG4gICAgICB2aWRlby5kcmF3KCk7XHJcbiAgICAgIHJldHVybiB2aWRlbztcclxufVxyXG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9jb250YWluZXInO1xyXG5pbXBvcnQgU3F1YXJlIGZyb20gJy4vY29tcG9uZW50cy9zcXVhcmUnO1xyXG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vY29tcG9uZW50cy9jaXJjbGUnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vY29tcG9uZW50cy9yZWN0YW5nbGUnO1xyXG5pbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvbWFpbl9jb250YWluZXInO1xyXG5pbXBvcnQgTGluZSBmcm9tICcuL2NvbXBvbmVudHMvbGluZSc7XHJcbmltcG9ydCBDdXN0b21PYmplY3QgZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbV9vYmplY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4vY29tcG9uZW50cy92aWRlbyc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4vY29tcG9uZW50cy9wYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcbntcclxuICAgIGNvbnRhaW5lcjogQ29udGFpbmVyLFxyXG4gICAgc3F1YXJlOiBTcXVhcmUsXHJcbiAgICBjaXJjbGU6IENpcmNsZSxcclxuICAgIHJlY3RhbmdsZTogUmVjdGFuZ2xlLFxyXG4gICAgbGluZTogTGluZSxcclxuICAgIGN1c3RvbU9iamVjdDogQ3VzdG9tT2JqZWN0LFxyXG4gICAgbWFpbkNvbnRhaW5lcjogTWFpbkNvbnRhaW5lcixcclxuICAgIGltYWdlOiBJbWFnZSxcclxuICAgIHZpZGVvOiBWaWRlbyxcclxuICAgIHBhdGg6IFBhdGhcclxufTtcclxuIiwiaW1wb3J0IGZhY3RvcnkgZnJvbSAnfi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeSc7XHJcbmltcG9ydCBhYnN0cmFjdENvbXBvbmVudCBmcm9tICd+L2Fic3RyYWN0X2NvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGZpbHRlciA9IGFic3RyYWN0Q29tcG9uZW50KCk7XHJcblxyXG4gICAgZmlsdGVyLnZpZXcgPSBmYWN0b3J5LmNvbnRhaW5lcigpO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbn1cclxuIiwiaW1wb3J0IGxvb3AgZnJvbSAnfi9sb29wJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZpbHRlcil7XHJcblxyXG4gICAgZmlsdGVyLl9saXN0ZW5lciA9IG51bGw7XHJcbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXHJcbiAgICBmdW5jdGlvbiBzdGFydCgpe1xyXG4gICAgICB0aGlzLl9saXN0ZW5lciA9IGxvb3AuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wKCl7XHJcbiAgICAgIGxvb3AucmVtb3ZlQW5pbWF0aW9uKHRoaXMuX2xpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcclxuICAgIGZpbHRlci5zdG9wID0gc3RvcDtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdEZpbHRlciBmcm9tICd+L2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNoaWxkcmVuKXtcclxuICAgIHZhciBhYnN0cmFjdEdyb3VwID0gYWJzdHJhY3RGaWx0ZXIoKTtcclxuXHJcbiAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xyXG5cclxuICAgIGFic3RyYWN0R3JvdXAuYWRkID0gZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgYWJzdHJhY3RHcm91cC5yZW1vdmUgPSBmdW5jdGlvbihjaGlsZCl7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCksIDEpO1xyXG4gICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGFic3RyYWN0R3JvdXA7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0R3JvdXAgZnJvbSAnLi9hYnN0cmFjdF9ncm91cCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJ34vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sdW1ucycsIGZhbHNlLCAzKTtcclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UsIDEwKTtcclxuXHJcbiAgICB2YXIgcmVjdGFuZ2xlR3JvdXAgPSBhYnN0cmFjdEdyb3VwKG9wdGlvbnMuY2hpbGRyZW4pO1xyXG5cclxuICAgIHJlY3RhbmdsZUdyb3VwLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XHJcbiAgICByZWN0YW5nbGVHcm91cC5zcGFjaW5nID0gb3B0aW9ucy5zcGFjaW5nO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIHZhciBjb250YWluZXIgPSBmYWN0b3J5LmNvbnRhaW5lcigpO1xyXG4gICAgICBjb250YWluZXIuYWRkQ2hpbGQocmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XHJcbiAgICAgIGNvbnRhaW5lci54ID0gKGkgJSByZWN0YW5nbGVHcm91cC5jb2x1bW5zKSAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XHJcbiAgICAgIGNvbnRhaW5lci55ID0gTWF0aC5mbG9vcihpIC8gcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xyXG4gICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xyXG59XHJcbiIsIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmaWx0ZXIpe1xyXG5cclxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KCl7XHJcbiAgICAgIHRoaXMubW9kaWZpY2F0b3Iuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdG9wKCl7XHJcbiAgICAgIHRoaXMubW9kaWZpY2F0b3Iuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlci5zdGFydCA9IHN0YXJ0O1xyXG4gICAgZmlsdGVyLnN0b3AgPSBzdG9wO1xyXG5cclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IGFic3RyYWN0RmlsdGVyIGZyb20gJ34vZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInO1xyXG5pbXBvcnQgc2luZ2xlQ2hpbGRGaWx0ZXIgZnJvbSAnfi9maWx0ZXJzL3NpbmdsZV9jaGlsZF9maWx0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgLyogUGFyYW1ldGVycyAqL1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XHJcblxyXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXHJcbiAgICB2YXIgY2VudGVyRmlsdGVyID0gc2luZ2xlQ2hpbGRGaWx0ZXIoYWJzdHJhY3RGaWx0ZXIoKSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLyogcHVibGljIHZhcnMgKi9cclxuICAgIGNlbnRlckZpbHRlci53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICBjZW50ZXJGaWx0ZXIuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcblxyXG4gICAgLyogQ2FsbGJhY2tzICovXHJcbiAgICBjZW50ZXJGaWx0ZXIub25Qcm9wZXJ0eUNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGlmKHRoaXMuZ2V0Q2hpbGQoKS5nZXRXaWR0aCl7XHJcbiAgICAgICAgdGhpcy52aWV3LnggPSAodGhpcy53aWR0aCAvIDIpIC0gKHRoaXMuZ2V0Q2hpbGQoKS5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5nZXRDaGlsZCgpLmdldEhlaWdodCl7XHJcbiAgICAgICAgdGhpcy52aWV3LnkgPSAodGhpcy5oZWlnaHQgLyAyKSAtICh0aGlzLmdldENoaWxkKCkuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjZW50ZXJGaWx0ZXIub25Qcm9wZXJ0eUNoYW5nZSgpO1xyXG4gICAgLyogcmV0dXJuICovXHJcbiAgICByZXR1cm4gY2VudGVyRmlsdGVyO1xyXG59XHJcbiIsImltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpe1xyXG5cclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xyXG5cclxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgZmlsdGVyLl9jaGlsZCA9IG9wdGlvbnMuY2hpbGQ7XHJcbiAgICBmaWx0ZXIuX2xpc3RlbmVyID0gbnVsbDtcclxuXHJcbiAgICAvKiBjYWxsYmFja3MgKi9cclxuICAgIGZpbHRlci5fX29uUHJvcGVydHlDaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICBpZih0aGlzLm9uUHJvcGVydHlDaGFuZ2Upe1xyXG4gICAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VuZEV2ZW50KCdwcm9wZXJ0eV9jaGFuZ2UnKTtcclxuICAgIH07XHJcblxyXG4gICAgLyogbWV0aG9kcyAqL1xyXG4gICAgZmlsdGVyLnNldENoaWxkID0gZnVuY3Rpb24obmV3Q2hpbGQpe1xyXG4gICAgICBpZih0aGlzLl9jaGlsZC5yZW1vdmVFdmVudExpc3RlbmVyKXtcclxuICAgICAgICB0aGlzLl9jaGlsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9wZXJ0eV9jaGFuZ2UnLCB0aGlzLl9saXN0ZW5lcik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMuX2NoaWxkLnZpZXcpO1xyXG4gICAgICB0aGlzLl9jaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICBpZih0aGlzLl9jaGlsZC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IHRoaXMuX2NoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5X2NoYW5nZScsIHRoaXMuX19vblByb3BlcnR5Q2hhbmdlLCB0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQodGhpcy5fY2hpbGQudmlldyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZpbHRlci5nZXRDaGlsZCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jaGlsZDtcclxuICAgIH07XHJcblxyXG4gICAgLyogaW5pdCAqL1xyXG4gICAgZmlsdGVyLnNldENoaWxkKG9wdGlvbnMuY2hpbGQpO1xyXG4gICAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICd+L3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmaWx0ZXIsIG9wdGlvbnMpe1xyXG5cclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xyXG5cclxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgZmlsdGVyLl9maWx0ZXJUcmFuc2l0aW9uID0gdHJhbnNpdGlvbihvcHRpb25zLmludGVydmFsLCAwLjUpO1xyXG5cclxuICAgIC8qIFB1YmxpYyBtZXRob2RzICovXHJcbiAgICBmaWx0ZXIuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLl9maWx0ZXJUcmFuc2l0aW9uLnN0YXJ0KHRoaXMuaGFuZGxlKTtcclxuICAgIH07XHJcblxyXG4gICAgZmlsdGVyLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgICB0aGlzLl9maWx0ZXJUcmFuc2l0aW9uLnN0b3AoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGZpbHRlcjtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwb2ludDEsIHBvaW50Mil7XHJcbiAgdmFyIHBvaW50ID0ge307XHJcbiAgcG9pbnQueCA9IHBvaW50MS54ICsgcG9pbnQyLng7XHJcbiAgcG9pbnQueSA9IHBvaW50MS55ICsgcG9pbnQyLnk7XHJcbiAgcmV0dXJuIHBvaW50O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZlY3RvcjEsIHZlY3RvcjIpe1xyXG4gIGlmKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCl7XHJcbiAgICB0aHJvdyAnQ2Fubm90IGNhbGN1bGF0ZSBkaXN0YW5jZSBvZiB2ZWN0b3JzIHdpdGggZGlmZmVyZW50IG51bWJlcnMgb2YgZGltZW5zaW9ucyc7XHJcbiAgfVxyXG4gIHZhciBkaXN0YW5jZSA9IDA7XHJcbiAgZm9yKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspe1xyXG4gICAgZGlzdGFuY2UgKz0gTWF0aC5wb3codmVjdG9yMVtpXSAtIHZlY3RvcjJbaV0sIDIpO1xyXG4gIH1cclxuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RhbmNlKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhbmdsZSl7XHJcbiAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcclxufVxyXG4iLCJpbXBvcnQgYW5nbGVUb1JhZGlhbnMgZnJvbSAnLi9hbmdsZV90b19yYWRpYW5zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFuZ2xlLCBsZW5ndGgpe1xyXG4gIHZhciByYWQgPSBhbmdsZVRvUmFkaWFucyhhbmdsZSk7XHJcbiAgcmV0dXJuIHsgeDogTWF0aC5jb3MocmFkKSAqIGxlbmd0aCwgeTogTWF0aC5zaW4ocmFkKSAqIGxlbmd0aH07XHJcbn1cclxuIiwiaW1wb3J0IGFuZ2xlVG9SYWRpYW5zIGZyb20gJ34vZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJjQ29uc3RydWN0b3Iob3B0aW9ucyl7XHJcblxyXG4gIC8vIFBhcmFtZXRlcnNcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnZGVncmVlcycsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcclxuXHJcbiAgLy8gcHJpdmF0ZSB2YXJzXHJcbiAgdmFyIGFyYyA9IHt9O1xyXG5cclxuICBhcmMuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gIGFyYy5kZWdyZWVzID0gb3B0aW9ucy5kZWdyZWVzO1xyXG4gIGFyYy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcclxuICBhcmMudHlwZSA9ICdhcmMnO1xyXG5cclxuICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgYXJjLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQb2ludCgxKTtcclxuICB9O1xyXG5cclxuICBhcmMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBNYXRoLmFicygyICogTWF0aC5QSSAqIHRoaXMucmFkaXVzICogKCB0aGlzLmRlZ3JlZXMgLyAzNjAgKSk7XHJcbiAgfTtcclxuXHJcbiAgYXJjLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIG9yaWdpbiA9IHt4OiB0aGlzLnN0YXJ0LngsIHk6IHRoaXMuc3RhcnQueSB9O1xyXG4gICAgdmFyIHBhcnRPZkRlZ3JlZXMgPSB0aGlzLmRlZ3JlZXMgKiBwcm9ncmVzcztcclxuXHJcbiAgICBpZih0aGlzLmRlZ3JlZXMgPCAwKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4OiBvcmlnaW4ueCArIHRoaXMucmFkaXVzICogTWF0aC5zaW4oYW5nbGVUb1JhZGlhbnMoLXBhcnRPZkRlZ3JlZXMpKSxcclxuICAgICAgICB5OiBvcmlnaW4ueSAtIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyhhbmdsZVRvUmFkaWFucyhwYXJ0T2ZEZWdyZWVzKSlcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBvcmlnaW4ueCArIHRoaXMucmFkaXVzICogTWF0aC5zaW4oYW5nbGVUb1JhZGlhbnMocGFydE9mRGVncmVlcykpLFxyXG4gICAgICB5OiBvcmlnaW4ueSArIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiAtTWF0aC5jb3MoYW5nbGVUb1JhZGlhbnMocGFydE9mRGVncmVlcykpXHJcbiAgICB9O1xyXG5cclxuICB9O1xyXG5cclxuICBhcmMuc3ViUGF0aHMgPSBbYXJjXTtcclxuXHJcbiAgYXJjLmdldEFuZ2xlID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgcmV0dXJuIGFuZ2xlVG9SYWRpYW5zKHRoaXMuZGVncmVlcyAqIHByb2dyZXNzKTtcclxuICB9O1xyXG5cclxuICBhcmMuZ2V0UGFydFBhdGggPSBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IHRoaXMuZGVncmVlcyAqIHByb2dyZXNzO1xyXG4gICAgcmV0dXJuIGFyY0NvbnN0cnVjdG9yKHtzdGFydDogdGhpcy5zdGFydCwgZGVncmVlczogcGFydE9mRGVncmVlcywgcmFkaXVzOiB0aGlzLnJhZGl1c30pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBhcmM7XHJcbn1cclxuIiwiaW1wb3J0IEJlemllciBmcm9tICdiZXppZXItanMnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7eDogMCwgeTogMH0pO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY3BvaW50MScsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjcG9pbnQyJywgZmFsc2UpO1xyXG5cclxuICB2YXIgYmV6aWVyQ3VydmUgPSB7fTtcclxuICBiZXppZXJDdXJ2ZS5zdGFydCA9IG9wdGlvbnMuc3RhcnQ7XHJcbiAgYmV6aWVyQ3VydmUuZW5kID0gb3B0aW9ucy5lbmQ7XHJcbiAgYmV6aWVyQ3VydmUuY3BvaW50MSA9IG9wdGlvbnMuY3BvaW50MTtcclxuICBiZXppZXJDdXJ2ZS5jcG9pbnQyID0gb3B0aW9ucy5jcG9pbnQyO1xyXG4gIGJlemllckN1cnZlLnR5cGUgPSAnYmV6aWVyX2N1cnZlJztcclxuXHJcbiAgaWYoYmV6aWVyQ3VydmUuY3BvaW50Mil7XHJcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBCZXppZXIoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmNwb2ludDIsIGJlemllckN1cnZlLmVuZCk7XHJcbiAgfWVsc2V7XHJcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBCZXppZXIoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmVuZCk7XHJcbiAgfVxyXG5cclxuICBiZXppZXJDdXJ2ZS5zdWJQYXRocyA9IFtiZXppZXJDdXJ2ZV07XHJcblxyXG4gIGJlemllckN1cnZlLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lbmQ7XHJcbiAgfTtcclxuXHJcbiAgYmV6aWVyQ3VydmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB0aGlzLmludGVybmFsQmV6aWVyLmxlbmd0aCgpO1xyXG4gIH07XHJcblxyXG4gIGJlemllckN1cnZlLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxCZXppZXIuZ2V0KHByb2dyZXNzKTtcclxuICB9O1xyXG5cclxuICAvL1RPRE8gQWRkIGdldCBwYXJ0IHBhdGggZnVuY3Rpb25cclxuXHJcbiAgcmV0dXJuIGJlemllckN1cnZlO1xyXG59XHJcbiIsImltcG9ydCB0b1ZlY3RvciBmcm9tICd+L2dlb21ldHJ5L3RvX3ZlY3Rvcic7XHJcbmltcG9ydCBkaXN0YW5jZSBmcm9tICd+L2dlb21ldHJ5L2Rpc3RhbmNlJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW5lQ29uc3RydWN0b3Iob3B0aW9ucyl7XHJcblxyXG5jaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xyXG5cclxuICB2YXIgbGluZSA9IHt9O1xyXG4gIGxpbmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gIGxpbmUuZW5kID0gb3B0aW9ucy5lbmQ7XHJcbiAgbGluZS50eXBlID0gJ2xpbmUnO1xyXG5cclxuICBsaW5lLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpcy5lbmQ7XHJcbiAgfTtcclxuXHJcbiAgbGluZS5nZXRMZW5ndGggPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGRpc3RhbmNlKHRvVmVjdG9yKHRoaXMuc3RhcnQpLCB0b1ZlY3Rvcih0aGlzLmVuZCkpO1xyXG4gIH07XHJcblxyXG4gIGxpbmUuZ2V0UG9pbnQgPSBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHg6IHRoaXMuc3RhcnQueCArICh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAqIHByb2dyZXNzLFxyXG4gICAgICAgICAgICAgIHk6IHRoaXMuc3RhcnQueSArICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAqIHByb2dyZXNzXHJcbiAgICAgICAgICAgfTtcclxuICB9O1xyXG5cclxuICBsaW5lLmdldFBhcnRQYXRoID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIG5ld0VuZCA9IHsgeDogdGhpcy5lbmQueCAqIHByb2dyZXNzLCB5OiB0aGlzLmVuZC55ICogcHJvZ3Jlc3N9O1xyXG4gICAgdmFyIHBhdGhQYXJ0ID0gbGluZUNvbnN0cnVjdG9yKHtzdGFydDogdGhpcy5zdGFydCwgZW5kOiBuZXdFbmR9KTtcclxuICAgIHJldHVybiBwYXRoUGFydDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gbGluZTtcclxufVxyXG4iLCJpbXBvcnQgYWRkVXBQb2ludHMgZnJvbSAnfi9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhdGhDb25zdHJ1Y3Rvcigpe1xyXG5cclxuICB2YXIgcGF0aCA9IHt9O1xyXG5cclxuICBwYXRoLnN1YlBhdGhzID0gW107XHJcblxyXG4gIHBhdGguZ2V0RWRnZVBvaW50cyA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZWRnZVBvaW50cyA9IFtdO1xyXG4gICAgZWRnZVBvaW50cy5wdXNoKHt4OiAwLCB5OiAwfSk7XHJcbiAgICBmb3IodmFyIHN1YlBhdGggb2YgdGhpcy5zdWJQYXRocyl7XHJcbiAgICAgIGVkZ2VQb2ludHMucHVzaChhZGRVcFBvaW50cyhlZGdlUG9pbnRzW2VkZ2VQb2ludHMubGVuZ3RoIC0gMV0sIHN1YlBhdGguZ2V0RWRnZVBvaW50KCkpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlZGdlUG9pbnRzO1xyXG4gIH07XHJcblxyXG4gIHBhdGguZ2V0U3RhcnRQb2ludE9mID0gZnVuY3Rpb24oc3ViUGF0aCl7XHJcbiAgICB2YXIgc3RhcnRQb2ludCA9ICh7eDogMCwgeTogMH0pO1xyXG5cclxuICAgIGZvcih2YXIgY3VycmVudFBhdGggb2YgdGhpcy5zdWJQYXRocyl7XHJcbiAgICAgIGlmKGN1cnJlbnRQYXRoID09PSBzdWJQYXRoKXtcclxuICAgICAgICByZXR1cm4gc3RhcnRQb2ludDtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgc3RhcnRQb2ludCA9IGFkZFVwUG9pbnRzKHN0YXJ0UG9pbnQsIGN1cnJlbnRQYXRoLmdldEVkZ2VQb2ludCgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHBhdGguZ2V0UG9pbnQgPSBmdW5jdGlvbihwcm9ncmVzcyl7XHJcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHRoaXMuZ2V0TGVuZ3RoKCk7XHJcbiAgICBmb3IodmFyIHN1YlBhdGggb2YgdGhpcy5zdWJQYXRocyl7XHJcbiAgICAgIGlmKGxlbmd0aFBvaW50ID4gc3ViUGF0aC5nZXRMZW5ndGgoKSl7XHJcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGFkZFVwUG9pbnRzKHN1YlBhdGguZ2V0UG9pbnQoKGxlbmd0aFBvaW50IC8gc3ViUGF0aC5nZXRMZW5ndGgoKSkgKSwgdGhpcy5nZXRTdGFydFBvaW50T2Yoc3ViUGF0aCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcGF0aC5nZXRMZW5ndGggPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGxlbmd0aCA9IDA7XHJcbiAgICBmb3IodmFyIHN1YlBhdGggb2YgdGhpcy5zdWJQYXRocyl7XHJcbiAgICAgIGxlbmd0aCArPSBzdWJQYXRoLmdldExlbmd0aCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxlbmd0aDtcclxuICB9O1xyXG5cclxuICBwYXRoLmdldFBhcnRQYXRoID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIG5ld1N1YlBhdGhzID0gW107XHJcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHRoaXMuZ2V0TGVuZ3RoKCk7XHJcbiAgICB2YXIgc3ViUGF0aHNSZXRyaWV2ZWQgPSBmYWxzZTtcclxuICAgIHZhciBjdXJyZW50UGF0aCA9IDA7XHJcblxyXG4gICAgd2hpbGUoIXN1YlBhdGhzUmV0cmlldmVkKXtcclxuICAgICAgaWYobGVuZ3RoUG9pbnQgPiB0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSl7XHJcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gdGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaCh0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aCgxKSk7XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCArIDE7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2godGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoKGxlbmd0aFBvaW50IC8gdGhpcy5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpKSk7XHJcbiAgICAgICAgc3ViUGF0aHNSZXRyaWV2ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhcnRQYXRoID0gcGF0aENvbnN0cnVjdG9yKCk7XHJcbiAgICBwYXJ0UGF0aC5zdWJQYXRocyA9IG5ld1N1YlBhdGhzO1xyXG4gICAgcmV0dXJuIHBhcnRQYXRoO1xyXG5cclxuICB9O1xyXG5cclxuICByZXR1cm4gcGF0aDtcclxuXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocG9pbnQsIGFuZ2xlKXtcclxuICByZXR1cm4ge1xyXG4gICAgICB4OiBwb2ludC54ICogTWF0aC5jb3MoYW5nbGUpIC0gcG9pbnQueSAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgICAgeTogcG9pbnQueCAqIE1hdGguc2luKGFuZ2xlKSArIHBvaW50LnkgKiBNYXRoLmNvcyhhbmdsZSlcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvaW50KXtcclxuICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmFtZXRlck9iamVjdCwgb3B0aW9uLCByZXF1aXJlZCwgZGVmYXVsdFZhbHVlKXtcclxuICBpZighcmVxdWlyZWQpe1xyXG4gICAgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPSAocGFyYW1ldGVyT2JqZWN0Lmhhc093blByb3BlcnR5KG9wdGlvbikgJiYgdHlwZW9mIHBhcmFtZXRlck9iamVjdFtvcHRpb25dICE9PSAndW5kZWZpbmVkJykgPyBwYXJhbWV0ZXJPYmplY3Rbb3B0aW9uXSA6IGRlZmF1bHRWYWx1ZTtcclxuICB9ZWxzZXtcclxuICAgIGlmKCFwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSB8fCB0eXBlb2YgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIG9wdGlvbjonICsgb3B0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3JpZ2luYWxPYmplY3QsIGNpcmN1bGFyKXtcclxuICAvLyBGaXJzdCBjcmVhdGUgYW4gZW1wdHkgb2JqZWN0IHdpdGhcclxuICAvLyBzYW1lIHByb3RvdHlwZSBvZiBvdXIgb3JpZ2luYWwgc291cmNlXHJcblxyXG4gIHZhciBwcm9wZXJ0eUluZGV4LFxyXG4gICAgICBkZXNjcmlwdG9yLFxyXG4gICAgICBrZXlzLFxyXG4gICAgICBjdXJyZW50LFxyXG4gICAgICBuZXh0U291cmNlLFxyXG4gICAgICBpbmRleE9mLFxyXG4gICAgICBjb3BpZXMgPSBbIHtcclxuICAgICAgICAgIHNvdXJjZTogb3JpZ2luYWxPYmplY3QsXHJcbiAgICAgICAgICB0YXJnZXQ6IE9iamVjdC5jcmVhdGUoIE9iamVjdC5nZXRQcm90b3R5cGVPZiggb3JpZ2luYWxPYmplY3QgKSApXHJcbiAgICAgIH0gXSxcclxuICAgICAgY2xvbmVPYmplY3QgPSBjb3BpZXNbIDAgXS50YXJnZXQsXHJcbiAgICAgIHNvdXJjZVJlZmVyZW5jZXMgPSBbIG9yaWdpbmFsT2JqZWN0IF0sXHJcbiAgICAgIHRhcmdldFJlZmVyZW5jZXMgPSBbIGNsb25lT2JqZWN0IF07XHJcblxyXG4gIC8vIEZpcnN0IGluLCBmaXJzdCBvdXRcclxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gIHdoaWxlICggY3VycmVudCA9IGNvcGllcy5zaGlmdCgpKXtcclxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cclxuICAgICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBjdXJyZW50LnNvdXJjZSApO1xyXG5cclxuICAgICAgZm9yICggcHJvcGVydHlJbmRleCA9IDA7IHByb3BlcnR5SW5kZXggPCBrZXlzLmxlbmd0aDsgcHJvcGVydHlJbmRleCsrIClcclxuICAgICAge1xyXG4gICAgICAgICAgLy8gU2F2ZSB0aGUgc291cmNlJ3MgZGVzY3JpcHRvclxyXG4gICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoIGN1cnJlbnQuc291cmNlLCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0pO1xyXG5cclxuICAgICAgICAgIGlmICggIWRlc2NyaXB0b3IudmFsdWUgfHwgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09ICdvYmplY3QnIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoIGN1cnJlbnQudGFyZ2V0LCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0sIGRlc2NyaXB0b3IgKTtcclxuICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIENVU1RPTTogV2UgZG9uJ3QgbmVldCB0byBkZWVwIGNvcHkgb2JqZWN0cywgd2hpY2ggZ290IGEgY2xvbmUgbWV0aG9kXHJcbiAgICAgICAgICBpZih0eXBlb2YgZGVzY3JpcHRvci52YWx1ZS5jbG9uZSAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5jbG9uZSh0cnVlKTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGN1cnJlbnQudGFyZ2V0LCBrZXlzWyBwcm9wZXJ0eUluZGV4IF0sIGRlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5leHRTb3VyY2UgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG5cclxuICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBBcnJheS5pc0FycmF5KCBuZXh0U291cmNlICkgP1xyXG4gICAgICAgICAgICAgIFtdIDpcclxuICAgICAgICAgICAgICBPYmplY3QuY3JlYXRlKCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIG5leHRTb3VyY2UgKSApO1xyXG5cclxuXHJcbiAgICAgICAgICBpbmRleE9mID0gc291cmNlUmVmZXJlbmNlcy5pbmRleE9mKCBuZXh0U291cmNlICk7XHJcblxyXG4gICAgICAgICAgaWYgKCBpbmRleE9mICE9PSAtMSApXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy8gVGhlIHNvdXJjZSBpcyBhbHJlYWR5IHJlZmVyZW5jZWQsIGp1c3QgYXNzaWduIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSB0YXJnZXRSZWZlcmVuY2VzWyBpbmRleE9mIF07XHJcbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCBjdXJyZW50LnRhcmdldCwga2V5c1sgcHJvcGVydHlJbmRleCBdLCBkZXNjcmlwdG9yICk7XHJcbiAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc291cmNlUmVmZXJlbmNlcy5wdXNoKCBuZXh0U291cmNlICk7XHJcbiAgICAgICAgICB0YXJnZXRSZWZlcmVuY2VzLnB1c2goIGRlc2NyaXB0b3IudmFsdWUgKTtcclxuXHJcblxyXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCBjdXJyZW50LnRhcmdldCwga2V5c1sgcHJvcGVydHlJbmRleCBdLCBkZXNjcmlwdG9yICk7XHJcblxyXG4gICAgICAgICAgY29waWVzLnB1c2goIHsgc291cmNlOiBuZXh0U291cmNlLCB0YXJnZXQ6IGRlc2NyaXB0b3IudmFsdWUgfSApO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2xvbmVPYmplY3Q7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBkb05vdENoYWluKXtcclxuICBpZighZG9Ob3RDaGFpbil7XHJcbiAgICBpZihlbGVtZW50Lmhhc093blByb3BlcnR5KCdzZXRQcm9wJykpe1xyXG4gICAgICByZXR1cm4gZWxlbWVudC5zZXRQcm9wKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZihlbGVtZW50Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSl7XHJcbiAgICBlbGVtZW50W3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgaWYoZWxlbWVudC5zZW5kRXZlbnQpe1xyXG4gICAgICBlbGVtZW50LnNlbmRFdmVudCgncHJvcGVydHlfY2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgfWVsc2V7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBzZXQgcHJvcGVydHkgb2Ygb2JqZWN0LiBPYmplY3QgaGFzblxcJ3QgdGhlIHByb3BlcnR5OiAnICsgcHJvcGVydHkpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBhZGRBbmltYXRpb246IGZ1bmN0aW9uKGhhbmRsZSwgc2NvcGUpe1xyXG4gICAgICBjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcclxuICAgICAgcmV0dXJuIGNyZWF0ZWpzLlRpY2tlci5vbigndGljaycsIGhhbmRsZSwgc2NvcGUpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUFuaW1hdGlvbjogZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgICBjcmVhdGVqcy5UaWNrZXIub2ZmKCd0aWNrJywgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgICB2YXIgbW9kaWZpY2F0b3IgPSB7fTtcclxuXHJcbiAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xyXG4gICAgbW9kaWZpY2F0b3Iuc3ViamVjdCA9IG9wdGlvbnMuc3ViamVjdDtcclxuXHJcbiAgICByZXR1cm4gbW9kaWZpY2F0b3I7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0TW9kaWZpY2F0b3IgZnJvbSAnfi9tb2RpZmljYXRvcnMvYWJzdHJhY3RfbW9kaWZpY2F0b3InO1xyXG5pbXBvcnQgdHJhbnNpdGlvbk1vZGlmaWNhdG9yIGZyb20gJ34vbW9kaWZpY2F0b3JzL3RyYW5zaXRpb25fbW9kaWZpY2F0b3InO1xyXG5cclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdnb2FsUG9pbnQnLCB0cnVlKTtcclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzdGFydFBvaW50JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcblxyXG4gICAgLyogcHJpdmF0ZSB2YXJzICovXHJcbiAgICB2YXIgcDJQTW92ZXIgPSB0cmFuc2l0aW9uTW9kaWZpY2F0b3IoYWJzdHJhY3RNb2RpZmljYXRvcihvcHRpb25zKSwgb3B0aW9ucyk7XHJcblxyXG4gICAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xyXG4gICAgcDJQTW92ZXIuZ29hbFBvaW50ID0gb3B0aW9ucy5nb2FsUG9pbnQ7XHJcbiAgICBwMlBNb3Zlci5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xyXG5cclxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cclxuICAgIHAyUE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uKGN1cnJlbnQpe1xyXG4gICAgICB2YXIgYW1vdW50WCA9ICh0aGlzLmdvYWxQb2ludC54IC0gdGhpcy5zdGFydFBvaW50LngpICogY3VycmVudDtcclxuICAgICAgdmFyIGFtb3VudFkgPSAodGhpcy5nb2FsUG9pbnQueSAtIHRoaXMuc3RhcnRQb2ludC55KSAqIGN1cnJlbnQ7XHJcblxyXG4gICAgICB0aGlzLnN1YmplY3QueCA9IHRoaXMuc3RhcnRQb2ludC54ICsgYW1vdW50WDtcclxuICAgICAgdGhpcy5zdWJqZWN0LnkgPSB0aGlzLnN0YXJ0UG9pbnQueSArIGFtb3VudFk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIEluaXQgKi9cclxuICAgIHJldHVybiBwMlBNb3ZlcjtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RNb2RpZmljYXRvciBmcm9tICd+L21vZGlmaWNhdG9ycy9hYnN0cmFjdF9tb2RpZmljYXRvcic7XHJcbmltcG9ydCB0cmFuc2l0aW9uTW9kaWZpY2F0b3IgZnJvbSAnfi9tb2RpZmljYXRvcnMvdHJhbnNpdGlvbl9tb2RpZmljYXRvcic7XHJcblxyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgLyogUGFyYW1ldGVycyAqL1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2dvYWxQb2ludCcsIHRydWUpO1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0YXJ0UG9pbnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzaGFrZUZhY3RvcicsIGZhbHNlLCAxKTtcclxuXHJcbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cclxuICAgIHZhciBzaGFrZU1vdmVyID0gdHJhbnNpdGlvbk1vZGlmaWNhdG9yKGFic3RyYWN0TW9kaWZpY2F0b3Iob3B0aW9ucyksIG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIFBhcmFtcyBhbmQgZGVmYXVsdHNcclxuICAgIHNoYWtlTW92ZXIuc2hha2VGYWN0b3IgPSBvcHRpb25zLnNoYWtlRmFjdG9yO1xyXG4gICAgc2hha2VNb3Zlci5nb2FsUG9pbnQgPSBvcHRpb25zLmdvYWxQb2ludDtcclxuICAgIHNoYWtlTW92ZXIuc3RhcnRQb2ludCA9IG9wdGlvbnMuc3RhcnRQb2ludDtcclxuXHJcbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXHJcbiAgICBzaGFrZU1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uKGN1cnJlbnQpe1xyXG4gICAgICB2YXIgcmFuZG9tRmFjdG9yID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuc2hha2VGYWN0b3IgLSB0aGlzLnNoYWtlRmFjdG9yIC8gMjtcclxuICAgICAgdmFyIGRpc3RYID0gKHRoaXMuZ29hbFBvaW50LnggLSB0aGlzLnN0YXJ0UG9pbnQueCk7XHJcbiAgICAgIHZhciBkaXN0WSA9ICh0aGlzLmdvYWxQb2ludC55IC0gdGhpcy5zdGFydFBvaW50LnkpO1xyXG4gICAgICB2YXIgcmFuZG9tWCA9IHJhbmRvbUZhY3RvciAqIGRpc3RYIC8gKGRpc3RYICsgZGlzdFkpO1xyXG4gICAgICB2YXIgcmFuZG9tWSA9IHJhbmRvbUZhY3RvciAqIGRpc3RZIC8gKGRpc3RYICsgZGlzdFkpO1xyXG4gICAgICB2YXIgYW1vdW50WCA9IGRpc3RYICogY3VycmVudCArIHJhbmRvbVg7XHJcbiAgICAgIHZhciBhbW91bnRZID0gZGlzdFkgKiBjdXJyZW50ICsgcmFuZG9tWTtcclxuXHJcbiAgICAgIHRoaXMuc3ViamVjdC54ID0gdGhpcy5zdGFydFBvaW50LnggKyBhbW91bnRYO1xyXG4gICAgICB0aGlzLnN1YmplY3QueSA9IHRoaXMuc3RhcnRQb2ludC55ICsgYW1vdW50WTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHNoYWtlTW92ZXI7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuaW1wb3J0IGNyZWF0ZUxpbmVNb3ZlciBmcm9tICcuL2xpbmVfbW92ZXInO1xyXG5pbXBvcnQgY3JlYXRlSW50ZXJ2YWwgZnJvbSAnfi90aW1lcnMvaW50ZXJ2YWwnO1xyXG5pbXBvcnQgYWJzdHJhY3RNb2RpZmljYXRvciBmcm9tICd+L21vZGlmaWNhdG9ycy9hYnN0cmFjdF9tb2RpZmljYXRvcic7XHJcblxyXG5pbXBvcnQgdG9WZWN0b3IgZnJvbSAnfi9nZW9tZXRyeS90b192ZWN0b3InO1xyXG5pbXBvcnQgZGlzdGFuY2UgZnJvbSAnfi9nZW9tZXRyeS9kaXN0YW5jZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgLyogUGFyYW1ldGVycyAqL1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcclxuXHJcbiAgLyogY3JlYXRlIG9iamVjdCBhbmQgc2V0IHByb3BlcnRpZXMgKi9cclxuICB2YXIgcmFuZG9tSW5SZWN0TW92ZXIgPSBhYnN0cmFjdE1vZGlmaWNhdG9yKG9wdGlvbnMpO1xyXG4gIHJhbmRvbUluUmVjdE1vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcclxuICByYW5kb21JblJlY3RNb3Zlci53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcblxyXG4gIC8vIGNhbGxiYWNrc1xyXG4gIHJhbmRvbUluUmVjdE1vdmVyLl9fb25DdXJyZW50R29hbFJlYWNoZWQgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5fbGluZU1vdmVyLnN0b3AoKTtcclxuICAgIHRoaXMuX2xpbmVNb3Zlci5zdGFydFBvaW50LnggPSB0aGlzLl9saW5lTW92ZXIuZ29hbFBvaW50Lng7XHJcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RhcnRQb2ludC55ID0gdGhpcy5fbGluZU1vdmVyLmdvYWxQb2ludC55O1xyXG5cclxuICAgIHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5fbGluZU1vdmVyLmdvYWxQb2ludC55ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuX2ludGVydmFsLm1zID0gdGhpcy5fY2FsY3VsYXRlSW50ZXJ2YWxUaW1lKCk7XHJcblxyXG4gICAgdGhpcy5fbGluZU1vdmVyLnN0YXJ0KCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gUHJpdmF0ZSB2YXJzXHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2ludGVydmFsID0gY3JlYXRlSW50ZXJ2YWwoe3R5cGU6ICdtcycsIG1zOiAxfSk7XHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2xpbmVNb3ZlciA9IGNyZWF0ZUxpbmVNb3Zlcih7XHJcbiAgICAgIHN1YmplY3Q6IHJhbmRvbUluUmVjdE1vdmVyLnN1YmplY3QsXHJcbiAgICAgIGdvYWxQb2ludDogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgIG9uRmluaXNoZWRJbnRlcnZhbDogZnVuY3Rpb24oKXsgcmFuZG9tSW5SZWN0TW92ZXIuX19vbkN1cnJlbnRHb2FsUmVhY2hlZCgpOyB9LFxyXG4gICAgICBpbnRlcnZhbDogcmFuZG9tSW5SZWN0TW92ZXIuX2ludGVydmFsLFxyXG4gICAgICBzdGVlcG5lc3M6IDFcclxuICAgIH0pO1xyXG5cclxuICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RhcnQgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5fX29uQ3VycmVudEdvYWxSZWFjaGVkKCk7XHJcbiAgfTtcclxuXHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RvcCgpO1xyXG4gIH07XHJcblxyXG4gIC8qIFByaXZhdGUgZnVuY3Rpb25zICovXHJcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2NhbGN1bGF0ZUludGVydmFsVGltZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZGlzdCA9IGRpc3RhbmNlKHRvVmVjdG9yKHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQpLCB0b1ZlY3Rvcih0aGlzLl9saW5lTW92ZXIuc3RhcnRQb2ludCkpO1xyXG4gICAgcmV0dXJuIChkaXN0IC8gdGhpcy5zcGVlZCkgKiAxMDAwO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiByYW5kb21JblJlY3RNb3ZlcjtcclxufVxyXG4iLCJpbXBvcnQgYWJzdHJhY3RNb2RpZmljYXRvciBmcm9tICd+L21vZGlmaWNhdG9ycy9hYnN0cmFjdF9tb2RpZmljYXRvcic7XHJcbmltcG9ydCB0cmFuc2l0aW9uTW9kaWZpY2F0b3IgZnJvbSAnfi9tb2RpZmljYXRvcnMvdHJhbnNpdGlvbl9tb2RpZmljYXRvcic7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcbmltcG9ydCBzZXRQcm9wIGZyb20gJ34vaW50ZXJuYWwvc2V0X3Byb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdsaW1pdCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyaXNpbmcnLCBmYWxzZSwgdHJ1ZSk7XHJcblxyXG4gIHZhciBsaW5lYXJQdWxzYXIgPSB0cmFuc2l0aW9uTW9kaWZpY2F0b3IoYWJzdHJhY3RNb2RpZmljYXRvcihvcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgbGluZWFyUHVsc2FyLmxpbWl0ID0gb3B0aW9ucy5saW1pdDtcclxuXHJcbiAgbGluZWFyUHVsc2FyLnJlc2V0ID0gZnVuY3Rpb24oKXtcclxuICAgIHRoaXMudHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICB0aGlzLmhhbmRsZSgwKTtcclxuICB9O1xyXG5cclxuICBsaW5lYXJQdWxzYXIuaGFuZGxlID0gZnVuY3Rpb24oY3VycmVudCl7XHJcbiAgICBzZXRQcm9wKHRoaXMuc3ViamVjdCwgJ3NjYWxlJywgMSArIGN1cnJlbnQgKiAodGhpcy5saW1pdCAtIDEpKTtcclxuICAgIHRoaXMuc3ViamVjdC5kcmF3KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxpbmVhclB1bHNhcjtcclxufVxyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5pbXBvcnQgdHJhbnNpdGlvbkxvb3AgZnJvbSAnfi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obW9kaWZpY2F0b3IsIG9wdGlvbnMpe1xyXG5cclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0ZWVwbmVzcycsIGZhbHNlLCAwLjUpO1xyXG4gICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ251bWJlck9mSW50ZXJ2YWxzJywgZmFsc2UsIDApO1xyXG5cclxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xyXG4gICAgbW9kaWZpY2F0b3IudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Mb29wKG9wdGlvbnMuaW50ZXJ2YWwsIG9wdGlvbnMuc3RlZXBuZXNzLCAwLCBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzLCBvcHRpb25zLm9uRmluaXNoZWRJbnRlcnZhbCk7XHJcblxyXG4gICAgLyogUHVibGljIG1ldGhvZHMgKi9cclxuICAgIG1vZGlmaWNhdG9yLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uLnN0YXJ0KHRoaXMuaGFuZGxlLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgbW9kaWZpY2F0b3Iuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRoaXMudHJhbnNpdGlvbi5zdG9wKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBtb2RpZmljYXRvcjtcclxufVxyXG4iLCJpbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcbiAgdmFyIGludGVydmFsID0ge307XHJcblxyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICd0eXBlJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2JwbScsIGZhbHNlLCAwKTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnbXMnLCBmYWxzZSwgMCk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2Rpdmlzb3InLCBmYWxzZSwgMSk7XHJcblxyXG4gIGludGVydmFsLnR5cGUgPSBvcHRpb25zLnR5cGU7XHJcbiAgaW50ZXJ2YWwuYnBtID0gb3B0aW9ucy5icG07XHJcbiAgaW50ZXJ2YWwubXMgPSBvcHRpb25zLm1zO1xyXG4gIGludGVydmFsLmRpdmlzb3IgPSBvcHRpb25zLmRpdmlzb3I7XHJcblxyXG4gIGlmKGludGVydmFsLmJwbSA9PT0gMCAmJiBpbnRlcnZhbC5tcyA9PT0gMCApe1xyXG4gICAgdGhyb3cgJ0lsbGVnYWwgc3RhdGU6IEJQTSBhbmQgTVMgY2Fubm90IGJvdGggYmUgMCc7XHJcbiAgfVxyXG5cclxuICBpbnRlcnZhbC5nZW5lcmF0ZUhhbGZJbnRlcnZhbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaGFsZkludGVydmFsID0ge307XHJcbiAgICBoYWxmSW50ZXJ2YWwudHlwZSA9IHRoaXMudHlwZTtcclxuICAgIGhhbGZJbnRlcnZhbC5icG0gPSB0aGlzLmJwbTtcclxuICAgIGhhbGZJbnRlcnZhbC5tcyA9IHRoaXMubXM7XHJcbiAgICBoYWxmSW50ZXJ2YWwuZGl2aXNvciA9IHRoaXMuZGl2aXNvciAqIDI7XHJcblxyXG4gICAgcmV0dXJuIGhhbGZJbnRlcnZhbDtcclxuICB9O1xyXG5cclxuICBpbnRlcnZhbC5iaXNlY3QgPSBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5kaXZpc29yID0gdGhpcy5kaXZpc29yICogMjtcclxuICB9O1xyXG5cclxuICBpbnRlcnZhbC5nZXRNcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBpZih0aGlzLnR5cGUgPT09ICdtcycpe1xyXG4gICAgICByZXR1cm4gdGhpcy5tcztcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gKDYwMDAwIC8gdGhpcy5icG0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBpbnRlcnZhbDtcclxufVxyXG4iLCJpbXBvcnQgbG9vcCBmcm9tICd+L2xvb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJ2YWwpe1xyXG4gIHZhciB0aW1lciA9IHt9O1xyXG4gIHRpbWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICB0aW1lci5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIHRpbWVyLmxpc3RlbmVycyA9IFtdO1xyXG4gIHRpbWVyLl9saXN0ZW5lciA9IG51bGw7XHJcblxyXG4gIHRpbWVyLmhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZXZlbnQuZGVsdGE7XHJcblxyXG4gICAgd2hpbGUodGhpcy5jdXJyZW50VGltZSA+IHRoaXMuaW50ZXJ2YWwpe1xyXG4gICAgICAgdGhpcy5fY2FsbExpc3RlbmVycygpO1xyXG4gICAgICAgdGhpcy5jdXJyZW50VGltZSAtPSB0aGlzLmludGVydmFsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHRpbWVyLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oY2FsbGJhY2ssIHNjb3BlKXtcclxuICAgIHZhciBsaXN0ZW5lciA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBzY29wZTogc2NvcGUgfTtcclxuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xyXG4gIH07XHJcblxyXG4gIHRpbWVyLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpLCAxKTtcclxuICB9O1xyXG5cclxuICB0aW1lci5zdGFydCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLl9saXN0ZW5lciA9IGxvb3AuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlLCB0aGlzKTtcclxuICB9O1xyXG5cclxuICB0aW1lci5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgIGxvb3AucmVtb3ZlQW5pbWF0aW9uKHRoaXMuX2xpc3RlbmVyKTtcclxuICB9O1xyXG5cclxuICB0aW1lci5fY2FsbExpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBmb3IodmFyIGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKXtcclxuICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHRpbWVyO1xyXG59XHJcbiIsImltcG9ydCBsb29wIGZyb20gJ34vbG9vcCc7XHJcblxyXG5mdW5jdGlvbiB0cmFuc2l0aW9uTG9vcChpbnRlcnZhbCwgc3RlZXBuZXNzLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKXtcclxuICB2YXIgcHVsc2FyID0ge307XHJcbiAgcHVsc2FyLmludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgcHVsc2FyLmN1cnJlbnRJbnRlcnZhbCA9IDA7XHJcbiAgcHVsc2FyLnN0ZWVwbmVzcyA9ICh0eXBlb2Ygc3RlZXBuZXNzICE9PSAndW5kZWZpbmVkJykgPyBzdGVlcG5lc3MgOiAwLjU7XHJcbiAgcHVsc2FyLmN1cnJlbnQgPSBjdXJyZW50ID8gY3VycmVudCA6IDA7XHJcbiAgcHVsc2FyLmluY3JlYXNlID0gdHJ1ZTtcclxuICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gY3VycmVudCA/IGN1cnJlbnQgKiBpbnRlcnZhbC5nZXRNcygpIDogMDtcclxuICBwdWxzYXIubnVtYmVyT2ZJbnRlcnZhbHMgPSBudW1iZXJPZkludGVydmFscyA/IG51bWJlck9mSW50ZXJ2YWxzIDogMDtcclxuICBwdWxzYXIub25GaW5pc2hlZEludGVydmFsID0gb25GaW5pc2hlZEludGVydmFsO1xyXG4gIHB1bHNhci5fbGlzdGVuZXIgPSBudWxsO1xyXG5cclxuICBwdWxzYXIuc3RhcnQgPSBmdW5jdGlvbihjYWxsYmFjaywgc2NvcGUpe1xyXG4gICAgaWYodGhpcy5fbGlzdGVuZXIpe1xyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIHRoaXMuX2NiU2NvcGUgPSBzY29wZTtcclxuICAgIHRoaXMuY3VycmVudEludGVydmFsID0gMDtcclxuICAgIHRoaXMuY3VycmVudE1zZWNvbmRzID0gY3VycmVudCA/IGN1cnJlbnQgKiB0aGlzLmludGVydmFsLmdldE1zKCkgOiAwO1xyXG4gICAgdGhpcy5fbGlzdGVuZXIgPSBsb29wLmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSwgdGhpcyk7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgbG9vcC5yZW1vdmVBbmltYXRpb24odGhpcy5fbGlzdGVuZXIpO1xyXG4gICAgdGhpcy5fbGlzdGVuZXIgPSBudWxsO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIHB1bHNhci5yZXNldCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgdGhpcy5pbmNyZWFzZSA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnJlbnRNc2Vjb25kcyA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IDA7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuXHJcbiAgICAvLyBGaXJzdCBzdW0gY3VycmVudCBtc1xyXG4gICAgdGhpcy5jdXJyZW50TXNlY29uZHMgPSB0aGlzLmN1cnJlbnRNc2Vjb25kcyArIGV2ZW50LmRlbHRhO1xyXG5cclxuICAgIC8vIHN0b3JlIGN1cnJlbnQgY3VycmVudFxyXG4gICAgdmFyIGxhc3RDdXJyZW50ID0gdGhpcy5jdXJyZW50O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBuZXcgY3VycmVudFxyXG4gICAgdmFyIG5ld0N1cnJlbnQgPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnQodGhpcy5jdXJyZW50TXNlY29uZHMpO1xyXG5cclxuICAgIC8vIGNoZWNrIGlmIGludGVydmFsIGlzIGZpbmlzaGVkIGFuZCBzZXQgaXQgdG8gMSBpZiBpdCB3YXMgdGhlIGxhc3QgaW50ZXJ2YWxcclxuICAgIG5ld0N1cnJlbnQgPSB0aGlzLl9pbnRlcnZhbFBvc3RQcm9jZXNzaW5nKG5ld0N1cnJlbnQpO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBjdXJyZW50IHZhbHVlIGFuZCBjb21wYXJlIGl0IHdpdGggbGFzdCB2YWx1ZVxyXG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFZhbHVlKG5ld0N1cnJlbnQpO1xyXG4gICAgdGhpcy5pbmNyZWFzZSA9ICh0aGlzLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZShsYXN0Q3VycmVudCkgPCBjdXJyZW50VmFsdWUpO1xyXG5cclxuICAgIGlmKHRoaXMuY2FsbGJhY2spe1xyXG4gICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5fY2JTY29wZSwgY3VycmVudFZhbHVlLCBldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmNhbGN1bGF0ZUN1cnJlbnQgPSBmdW5jdGlvbihtcyl7XHJcbiAgICB2YXIgcmVsYXRpdmVDdXJyZW50O1xyXG4gICAgaWYodGhpcy5pbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgcmVsYXRpdmVDdXJyZW50ID0gKG1zIC8gdGhpcy5pbnRlcnZhbC5tcykgJSAxO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pbnRlcnZhbC50eXBlID09PSAnYnBtJyl7XHJcbiAgICAgIHJlbGF0aXZlQ3VycmVudCA9ICgoIG1zICogdGhpcy5pbnRlcnZhbC5icG0pIC8gKDYwMDAwKSkgJSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbGF0aXZlQ3VycmVudDtcclxuICB9O1xyXG5cclxuICBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudFZhbHVlID0gZnVuY3Rpb24oY3VycmVudFRvQ2FsY3VsYXRlKXtcclxuICAgIGlmKGN1cnJlbnRUb0NhbGN1bGF0ZSA8PSB0aGlzLnN0ZWVwbmVzcyl7XHJcbiAgICAgIHJldHVybiAoY3VycmVudFRvQ2FsY3VsYXRlKSAvIHRoaXMuc3RlZXBuZXNzO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiAxIC0gKGN1cnJlbnRUb0NhbGN1bGF0ZSAtIHRoaXMuc3RlZXBuZXNzKSAvICgxIC0gdGhpcy5zdGVlcG5lc3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQgPSBmdW5jdGlvbihmYWN0b3Ipe1xyXG5cclxuICAgIC8vIEZpcnN0IHByZXBhcmUgdGhlIHZhbHVlIHdoaWNoIGlzIHBhc3NlZCB0byB0aGUgY2FsY3VsYXRlQ3VycmVudCBmdW5jdGlvbjpcclxuICAgIHZhciBmYWN0b3JJbk1zO1xyXG4gICAgaWYodGhpcy5pbnRlcnZhbC50eXBlID09PSAnbXMnKXtcclxuICAgICAgZmFjdG9ySW5NcyA9IGZhY3RvciAqIHRoaXMuaW50ZXJ2YWwubXM7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmludGVydmFsLnR5cGUgPT09ICdicG0nKXtcclxuICAgICAgZmFjdG9ySW5NcyA9IGZhY3RvciAqICg2MDAwMCAvIHRoaXMuaW50ZXJ2YWwuYnBtKTtcclxuICAgIH1cclxuICAgIHZhciBtc1RvQ2hlY2sgPSBmYWN0b3JJbk1zICsgdGhpcy5jdXJyZW50TXNlY29uZHM7XHJcblxyXG4gICAgaWYobXNUb0NoZWNrIDwgMCApe1xyXG4gICAgICBpZih0aGlzLmludGVydmFsLnR5cGUgPT09ICdtcycpe1xyXG4gICAgICAgIG1zVG9DaGVjayA9IG1zVG9DaGVjayArIHRoaXMuaW50ZXJ2YWwubXMgKiBNYXRoLmNlaWwoTWF0aC5hYnMobXNUb0NoZWNrKSAvIHRoaXMuaW50ZXJ2YWwubXMpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW50ZXJ2YWwudHlwZSA9PT0gJ2JwbScpe1xyXG4gICAgICAgIG1zVG9DaGVjayA9IG1zVG9DaGVjayArICg2MDAwMCAvIHRoaXMuaW50ZXJ2YWwuYnBtKSAqIE1hdGguY2VpbCggTWF0aC5hYnMobXNUb0NoZWNrKSAvICg2MDAwMCAvIHRoaXMuaW50ZXJ2YWwuYnBtKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jYWxjdWxhdGVDdXJyZW50VmFsdWUodGhpcy5jYWxjdWxhdGVDdXJyZW50KG1zVG9DaGVjaykpO1xyXG4gIH07XHJcblxyXG4gIHB1bHNhci5faW50ZXJ2YWxQb3N0UHJvY2Vzc2luZyA9IGZ1bmN0aW9uKHRlbXBDdXJyZW50KXtcclxuICAgIHZhciBjdXJyZW50SW50ZXJ2YWw7XHJcbiAgICBpZih0aGlzLmludGVydmFsLnR5cGUgPT09ICdtcycpe1xyXG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudE1zZWNvbmRzIC8gdGhpcy5pbnRlcnZhbC5tcyk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmludGVydmFsLnR5cGUgPT09ICdicG0nKXtcclxuICAgICAgY3VycmVudEludGVydmFsID0gTWF0aC5mbG9vcigoIHRoaXMuY3VycmVudE1zZWNvbmRzICogdGhpcy5pbnRlcnZhbC5icG0pIC8gKDYwMDAwKSk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmN1cnJlbnRJbnRlcnZhbCA8IGN1cnJlbnRJbnRlcnZhbCl7XHJcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gY3VycmVudEludGVydmFsO1xyXG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlSW50ZXJ2YWxGaW5pc2hlZCh0ZW1wQ3VycmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcEN1cnJlbnQ7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLl9oYW5kbGVJbnRlcnZhbEZpbmlzaGVkID0gZnVuY3Rpb24odGVtcEN1cnJlbnQpe1xyXG4gICAgaWYodGhpcy5vbkZpbmlzaGVkSW50ZXJ2YWwpe1xyXG4gICAgICAgIHRoaXMub25GaW5pc2hlZEludGVydmFsKCk7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLm51bWJlck9mSW50ZXJ2YWxzID4gMCAmJiB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9PT0gdGhpcy5udW1iZXJPZkludGVydmFscyl7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGVtcEN1cnJlbnQgPSAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXBDdXJyZW50O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwdWxzYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByaXNpbmdUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpe1xyXG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAxLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1bHNhclRyYW5zaXRpb24odGltZSwgY3VycmVudCwgbnVtYmVyT2ZJbnRlcnZhbHMsIG9uRmluaXNoZWRJbnRlcnZhbCl7XHJcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDAsIGN1cnJlbnQsIG51bWJlck9mSW50ZXJ2YWxzLCBvbkZpbmlzaGVkSW50ZXJ2YWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2l0aW9uTG9vcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKDEyMCk7XG4iLCIvKipcbiAgQSBqYXZhc2NyaXB0IEJlemllciBjdXJ2ZSBsaWJyYXJ5IGJ5IFBvbWF4LlxuXG4gIEJhc2VkIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mb1xuXG4gIFRoaXMgY29kZSBpcyBNSVQgbGljZW5zZWQuXG4qKi9cbihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gbWF0aC1pbmxpbmluZy5cbiAgdmFyIGFicyA9IE1hdGguYWJzLFxuICAgICAgbWluID0gTWF0aC5taW4sXG4gICAgICBtYXggPSBNYXRoLm1heCxcbiAgICAgIGFjb3MgPSBNYXRoLmFjb3MsXG4gICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgLy8gYSB6ZXJvIGNvb3JkaW5hdGUsIHdoaWNoIGlzIHN1cnByaXNpbmdseSB1c2VmdWxcbiAgICAgIFpFUk8gPSB7eDowLHk6MCx6OjB9O1xuXG4gIC8vIHF1aXRlIG5lZWRlZFxuICB2YXIgdXRpbHMgPSByZXF1aXJlKDEyMik7XG5cbiAgLy8gbm90IHF1aXRlIG5lZWRlZCwgYnV0IGV2ZW50dWFsbHkgdGhpcydsbCBiZSB1c2VmdWwuLi5cbiAgdmFyIFBvbHlCZXppZXIgPSByZXF1aXJlKDEyMSk7XG5cbiAgLyoqXG4gICAqIEJlemllciBjdXJ2ZSBjb25zdHJ1Y3Rvci4gVGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50IGNhbiBiZSBvbmUgb2YgdGhyZWUgdGhpbmdzOlxuICAgKlxuICAgKiAxLiBhcnJheS80IG9mIHt4Oi4uLiwgeTouLi4sIHo6Li4ufSwgeiBvcHRpb25hbFxuICAgKiAyLiBudW1lcmljYWwgYXJyYXkvOCBvcmRlcmVkIHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0XG4gICAqIDMuIG51bWVyaWNhbCBhcnJheS8xMiBvcmRlcmVkIHgxLHkxLHoxLHgyLHkyLHoyLHgzLHkzLHozLHg0LHk0LHo0XG4gICAqXG4gICAqL1xuICB2YXIgQmV6aWVyID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgdmFyIGFyZ3MgPSAoY29vcmRzICYmIGNvb3Jkcy5mb3JFYWNoKSA/IGNvb3JkcyA6IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB2YXIgY29vcmRsZW4gPSBmYWxzZTtcbiAgICBpZih0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29vcmRsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICAgIHZhciBuZXdhcmdzID0gW107XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgWyd4JywneScsJ3onXS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBpZih0eXBlb2YgcG9pbnRbZF0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG5ld2FyZ3MucHVzaChwb2ludFtkXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYXJncyA9IG5ld2FyZ3M7XG4gICAgfVxuICAgIHZhciBoaWdoZXIgPSBmYWxzZTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKGNvb3JkbGVuKSB7XG4gICAgICBpZihjb29yZGxlbj40KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYobGVuIT09NiAmJiBsZW4hPT04ICYmIGxlbiE9PTkgJiYgbGVuIT09MTIpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgXzNkID0gKCFoaWdoZXIgJiYgKGxlbiA9PT0gOSB8fCBsZW4gPT09IDEyKSkgfHwgKGNvb3JkcyAmJiBjb29yZHNbMF0gJiYgdHlwZW9mIGNvb3Jkc1swXS56ICE9PSBcInVuZGVmaW5lZFwiKTtcbiAgICB0aGlzLl8zZCA9IF8zZDtcbiAgICB2YXIgcG9pbnRzID0gW107XG4gICAgZm9yKHZhciBpZHg9MCwgc3RlcD0oXzNkID8gMyA6IDIpOyBpZHg8bGVuOyBpZHgrPXN0ZXApIHtcbiAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgeDogYXJnc1tpZHhdLFxuICAgICAgICB5OiBhcmdzW2lkeCsxXVxuICAgICAgfTtcbiAgICAgIGlmKF8zZCkgeyBwb2ludC56ID0gYXJnc1tpZHgrMl0gfTtcbiAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICB9XG4gICAgdGhpcy5vcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgIHZhciBkaW1zID0gWyd4JywneSddO1xuICAgIGlmKF8zZCkgZGltcy5wdXNoKCd6Jyk7XG4gICAgdGhpcy5kaW1zID0gZGltcztcbiAgICB0aGlzLmRpbWxlbiA9IGRpbXMubGVuZ3RoO1xuXG4gICAgKGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB2YXIgb3JkZXIgPSBjdXJ2ZS5vcmRlcjtcbiAgICAgIHZhciBwb2ludHMgPSBjdXJ2ZS5wb2ludHM7XG4gICAgICB2YXIgYSA9IHV0aWxzLmFsaWduKHBvaW50cywge3AxOnBvaW50c1swXSwgcDI6cG9pbnRzW29yZGVyXX0pO1xuICAgICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihhYnMoYVtpXS55KSA+IDAuMDAwMSkge1xuICAgICAgICAgIGN1cnZlLl9saW5lYXIgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1cnZlLl9saW5lYXIgPSB0cnVlO1xuICAgIH0odGhpcykpO1xuXG4gICAgdGhpcy5fdDEgPSAwO1xuICAgIHRoaXMuX3QyID0gMTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9O1xuXG4gIEJlemllci5mcm9tU1ZHID0gZnVuY3Rpb24oc3ZnU3RyaW5nKSB7XG4gICAgdmFyIGxpc3QgPSBzdmdTdHJpbmcubWF0Y2goL1stK10/XFxkKlxcLj9cXGQrKD86W2VFXVstK10/XFxkKyk/L2cpLm1hcChwYXJzZUZsb2F0KTtcbiAgICB2YXIgcmVsYXRpdmUgPSAvW2NxXS8udGVzdChzdmdTdHJpbmcpO1xuICAgIGlmKCFyZWxhdGl2ZSkgcmV0dXJuIG5ldyBCZXppZXIobGlzdCk7XG4gICAgbGlzdCA9IGxpc3QubWFwKGZ1bmN0aW9uKHYsaSkge1xuICAgICAgcmV0dXJuIGkgPCAyID8gdiA6IHYgKyBsaXN0W2kgJSAyXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEJlemllcihsaXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBQkMobixTLEIsRSx0KSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIHZhciB1ID0gdXRpbHMucHJvamVjdGlvbnJhdGlvKHQsbiksXG4gICAgICAgIHVtID0gMS11LFxuICAgICAgICBDID0ge1xuICAgICAgICAgIHg6IHUqUy54ICsgdW0qRS54LFxuICAgICAgICAgIHk6IHUqUy55ICsgdW0qRS55XG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB1dGlscy5hYmNyYXRpbyh0LG4pLFxuICAgICAgICBBID0ge1xuICAgICAgICAgIHg6IEIueCArIChCLngtQy54KS9zLFxuICAgICAgICAgIHk6IEIueSArIChCLnktQy55KS9zXG4gICAgICAgIH07XG4gICAgcmV0dXJuIHsgQTpBLCBCOkIsIEM6QyB9O1xuICB9XG5cbiAgQmV6aWVyLnF1YWRyYXRpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbihwMSxwMixwMywgdCkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICAvLyBzaG9ydGN1dHMsIGFsdGhvdWdoIHRoZXkncmUgcmVhbGx5IGR1bWJcbiAgICBpZih0PT09MCkgeyByZXR1cm4gbmV3IEJlemllcihwMixwMixwMyk7IH1cbiAgICBpZih0PT09MSkgeyByZXR1cm4gbmV3IEJlemllcihwMSxwMixwMik7IH1cbiAgICAvLyByZWFsIGZpdHRpbmcuXG4gICAgdmFyIGFiYyA9IGdldEFCQygyLHAxLHAyLHAzLHQpO1xuICAgIHJldHVybiBuZXcgQmV6aWVyKHAxLCBhYmMuQSwgcDMpO1xuICB9O1xuXG4gIEJlemllci5jdWJpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbihTLEIsRSwgdCxkMSkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICB2YXIgYWJjID0gZ2V0QUJDKDMsUyxCLEUsdCk7XG4gICAgaWYodHlwZW9mIGQxID09PSBcInVuZGVmaW5lZFwiKSB7IGQxID0gdXRpbHMuZGlzdChCLGFiYy5DKTsgfVxuICAgIHZhciBkMiA9IGQxICogKDEtdCkvdDtcblxuICAgIHZhciBzZWxlbiA9IHV0aWxzLmRpc3QoUyxFKSxcbiAgICAgICAgbHggPSAoRS54LVMueCkvc2VsZW4sXG4gICAgICAgIGx5ID0gKEUueS1TLnkpL3NlbGVuLFxuICAgICAgICBieDEgPSBkMSAqIGx4LFxuICAgICAgICBieTEgPSBkMSAqIGx5LFxuICAgICAgICBieDIgPSBkMiAqIGx4LFxuICAgICAgICBieTIgPSBkMiAqIGx5O1xuICAgIC8vIGRlcml2YXRpb24gb2YgbmV3IGh1bGwgY29vcmRpbmF0ZXNcbiAgICB2YXIgZTEgID0geyB4OiBCLnggLSBieDEsIHk6IEIueSAtIGJ5MSB9LFxuICAgICAgICBlMiAgPSB7IHg6IEIueCArIGJ4MiwgeTogQi55ICsgYnkyIH0sXG4gICAgICAgIEEgPSBhYmMuQSxcbiAgICAgICAgdjEgID0geyB4OiBBLnggKyAoZTEueC1BLngpLygxLXQpLCB5OiBBLnkgKyAoZTEueS1BLnkpLygxLXQpIH0sXG4gICAgICAgIHYyICA9IHsgeDogQS54ICsgKGUyLngtQS54KS8odCksIHk6IEEueSArIChlMi55LUEueSkvKHQpIH0sXG4gICAgICAgIG5jMSA9IHsgeDogUy54ICsgKHYxLngtUy54KS8odCksIHk6IFMueSArICh2MS55LVMueSkvKHQpIH0sXG4gICAgICAgIG5jMiA9IHsgeDogRS54ICsgKHYyLngtRS54KS8oMS10KSwgeTogRS55ICsgKHYyLnktRS55KS8oMS10KSB9O1xuICAgIC8vIC4uLmRvbmVcbiAgICByZXR1cm4gbmV3IEJlemllcihTLG5jMSxuYzIsRSk7XG4gIH07XG5cbiAgdmFyIGdldFV0aWxzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHV0aWxzO1xuICB9O1xuXG4gIEJlemllci5nZXRVdGlscyA9IGdldFV0aWxzO1xuXG4gIEJlemllci5wcm90b3R5cGUgPSB7XG4gICAgZ2V0VXRpbHM6IGdldFV0aWxzLFxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICB0b1NWRzogZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgICAgIGlmKHRoaXMuXzNkKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuICAgICAgICAgIHggPSBwWzBdLngsXG4gICAgICAgICAgeSA9IHBbMF0ueSxcbiAgICAgICAgICBzID0gW1wiTVwiLCB4LCB5LCAodGhpcy5vcmRlcj09PTIgPyBcIlFcIjpcIkNcIildO1xuICAgICAgZm9yKHZhciBpPTEsIGxhc3Q9cC5sZW5ndGg7IGk8bGFzdDsgaSsrKSB7XG4gICAgICAgIHMucHVzaChwW2ldLngpO1xuICAgICAgICBzLnB1c2gocFtpXS55KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzLmpvaW4oXCIgXCIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9uZS10aW1lIGNvbXB1dGUgZGVyaXZhdGl2ZSBjb29yZGluYXRlc1xuICAgICAgdGhpcy5kcG9pbnRzID0gW107XG4gICAgICBmb3IodmFyIHA9dGhpcy5wb2ludHMsIGQ9cC5sZW5ndGgsIGM9ZC0xOyBkPjE7IGQtLSwgYy0tKSB7XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvcih2YXIgaj0wLCBkcHQ7IGo8YzsgaisrKSB7XG4gICAgICAgICAgZHB0ID0ge1xuICAgICAgICAgICAgeDogYyAqIChwW2orMV0ueCAtIHBbal0ueCksXG4gICAgICAgICAgICB5OiBjICogKHBbaisxXS55IC0gcFtqXS55KVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICAgIGRwdC56ID0gYyAqIChwW2orMV0ueiAtIHBbal0ueik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QucHVzaChkcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHBvaW50cy5wdXNoKGxpc3QpO1xuICAgICAgICBwID0gbGlzdDtcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbXB1dGVkaXJlY3Rpb24oKTtcbiAgICB9LFxuICAgIGNvbXB1dGVkaXJlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgdmFyIGFuZ2xlID0gdXRpbHMuYW5nbGUocG9pbnRzWzBdLCBwb2ludHNbdGhpcy5vcmRlcl0sIHBvaW50c1sxXSk7XG4gICAgICB0aGlzLmNsb2Nrd2lzZSA9IGFuZ2xlID4gMDtcbiAgICB9LFxuICAgIGxlbmd0aDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMubGVuZ3RoKHRoaXMuZGVyaXZhdGl2ZS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuICAgIF9sdXQ6IFtdLFxuICAgIGdldExVVDogZnVuY3Rpb24oc3RlcHMpIHtcbiAgICAgIHN0ZXBzID0gc3RlcHMgfHwgMTAwO1xuICAgICAgaWYgKHRoaXMuX2x1dC5sZW5ndGggPT09IHN0ZXBzKSB7IHJldHVybiB0aGlzLl9sdXQ7IH1cbiAgICAgIHRoaXMuX2x1dCA9IFtdO1xuICAgICAgZm9yKHZhciB0PTA7IHQ8PXN0ZXBzOyB0KyspIHtcbiAgICAgICAgdGhpcy5fbHV0LnB1c2godGhpcy5jb21wdXRlKHQvc3RlcHMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9sdXQ7XG4gICAgfSxcbiAgICBvbjogZnVuY3Rpb24ocG9pbnQsIGVycm9yKSB7XG4gICAgICBlcnJvciA9IGVycm9yIHx8IDU7XG4gICAgICB2YXIgbHV0ID0gdGhpcy5nZXRMVVQoKSwgaGl0cyA9IFtdLCBjLCB0PTA7XG4gICAgICBmb3IodmFyIGk9MDsgaTxsdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYyA9IGx1dFtpXTtcbiAgICAgICAgaWYgKHV0aWxzLmRpc3QoYyxwb2ludCkgPCBlcnJvcikge1xuICAgICAgICAgIGhpdHMucHVzaChjKVxuICAgICAgICAgIHQgKz0gaSAvIGx1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKCFoaXRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHQgLz0gaGl0cy5sZW5ndGg7XG4gICAgfSxcbiAgICBwcm9qZWN0OiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgLy8gc3RlcCAxOiBjb2Fyc2UgY2hlY2tcbiAgICAgIHZhciBMVVQgPSB0aGlzLmdldExVVCgpLCBsID0gTFVULmxlbmd0aC0xLFxuICAgICAgICAgIGNsb3Nlc3QgPSB1dGlscy5jbG9zZXN0KExVVCwgcG9pbnQpLFxuICAgICAgICAgIG1kaXN0ID0gY2xvc2VzdC5tZGlzdCxcbiAgICAgICAgICBtcG9zID0gY2xvc2VzdC5tcG9zO1xuICAgICAgaWYgKG1wb3M9PT0wIHx8IG1wb3M9PT1sKSB7XG4gICAgICAgIHZhciB0ID0gbXBvcy9sLCBwdCA9IHRoaXMuY29tcHV0ZSh0KTtcbiAgICAgICAgcHQudCA9IHQ7XG4gICAgICAgIHB0LmQgPSBtZGlzdDtcbiAgICAgICAgcmV0dXJuIHB0O1xuICAgICAgfVxuXG4gICAgICAvLyBzdGVwIDI6IGZpbmUgY2hlY2tcbiAgICAgIHZhciBmdCwgdCwgcCwgZCxcbiAgICAgICAgICB0MSA9IChtcG9zLTEpL2wsXG4gICAgICAgICAgdDIgPSAobXBvcysxKS9sLFxuICAgICAgICAgIHN0ZXAgPSAwLjEvbDtcbiAgICAgIG1kaXN0ICs9IDE7XG4gICAgICBmb3IodD10MSxmdD10OyB0PHQyK3N0ZXA7IHQrPXN0ZXApIHtcbiAgICAgICAgcCA9IHRoaXMuY29tcHV0ZSh0KTtcbiAgICAgICAgZCA9IHV0aWxzLmRpc3QocG9pbnQsIHApO1xuICAgICAgICBpZiAoZDxtZGlzdCkge1xuICAgICAgICAgIG1kaXN0ID0gZDtcbiAgICAgICAgICBmdCA9IHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAgPSB0aGlzLmNvbXB1dGUoZnQpO1xuICAgICAgcC50ID0gZnQ7XG4gICAgICBwLmQgPSBtZGlzdDtcbiAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlKHQpO1xuICAgIH0sXG4gICAgcG9pbnQ6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2lkeF07XG4gICAgfSxcbiAgICBjb21wdXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAvLyBzaG9ydGN1dHNcbiAgICAgIGlmKHQ9PT0wKSB7IHJldHVybiB0aGlzLnBvaW50c1swXTsgfVxuICAgICAgaWYodD09PTEpIHsgcmV0dXJuIHRoaXMucG9pbnRzW3RoaXMub3JkZXJdOyB9XG5cbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHM7XG4gICAgICB2YXIgbXQgPSAxLXQ7XG5cbiAgICAgIC8vIGxpbmVhcj9cbiAgICAgIGlmKHRoaXMub3JkZXI9PT0xKSB7XG4gICAgICAgIHJldCA9IHtcbiAgICAgICAgICB4OiBtdCpwWzBdLnggKyB0KnBbMV0ueCxcbiAgICAgICAgICB5OiBtdCpwWzBdLnkgKyB0KnBbMV0ueVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fM2QpIHsgcmV0LnogPSBtdCpwWzBdLnogKyB0KnBbMV0uejsgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBxdWFkcmF0aWMvY3ViaWMgY3VydmU/XG4gICAgICBpZih0aGlzLm9yZGVyPDQpIHtcbiAgICAgICAgdmFyIG10MiA9IG10Km10LFxuICAgICAgICAgICAgdDIgPSB0KnQsXG4gICAgICAgICAgICBhLGIsYyxkID0gMDtcbiAgICAgICAgaWYodGhpcy5vcmRlcj09PTIpIHtcbiAgICAgICAgICBwID0gW3BbMF0sIHBbMV0sIHBbMl0sIFpFUk9dO1xuICAgICAgICAgIGEgPSBtdDI7XG4gICAgICAgICAgYiA9IG10KnQqMjtcbiAgICAgICAgICBjID0gdDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLm9yZGVyPT09Mykge1xuICAgICAgICAgIGEgPSBtdDIqbXQ7XG4gICAgICAgICAgYiA9IG10Mip0KjM7XG4gICAgICAgICAgYyA9IG10KnQyKjM7XG4gICAgICAgICAgZCA9IHQqdDI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICB4OiBhKnBbMF0ueCArIGIqcFsxXS54ICsgYypwWzJdLnggKyBkKnBbM10ueCxcbiAgICAgICAgICB5OiBhKnBbMF0ueSArIGIqcFsxXS55ICsgYypwWzJdLnkgKyBkKnBbM10ueVxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgIHJldC56ID0gYSpwWzBdLnogKyBiKnBbMV0ueiArIGMqcFsyXS56ICsgZCpwWzNdLno7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgLy8gaGlnaGVyIG9yZGVyIGN1cnZlczogdXNlIGRlIENhc3RlbGphdSdzIGNvbXB1dGF0aW9uXG4gICAgICB2YXIgZENwdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9pbnRzKSk7XG4gICAgICB3aGlsZShkQ3B0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxkQ3B0cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgZENwdHNbaV0gPSB7XG4gICAgICAgICAgICB4OiBkQ3B0c1tpXS54ICsgKGRDcHRzW2krMV0ueCAtIGRDcHRzW2ldLngpICogdCxcbiAgICAgICAgICAgIHk6IGRDcHRzW2ldLnkgKyAoZENwdHNbaSsxXS55IC0gZENwdHNbaV0ueSkgKiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodHlwZW9mIGRDcHRzW2ldLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRDcHRzW2ldID0gZENwdHNbaV0ueiArIChkQ3B0c1tpKzFdLnogLSBkQ3B0c1tpXS56KSAqIHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZENwdHMuc3BsaWNlKGRDcHRzLmxlbmd0aC0xLCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkQ3B0c1swXTtcbiAgICB9LFxuICAgIHJhaXNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsIG5wID0gW3BbMF1dLCBpLCBrPXAubGVuZ3RoLCBwaSwgcGltO1xuICAgICAgZm9yICh2YXIgaT0xOyBpPGs7IGkrKykge1xuICAgICAgICBwaSA9IHBbaV07XG4gICAgICAgIHBpbSA9IHBbaS0xXTtcbiAgICAgICAgbnBbaV0gPSB7XG4gICAgICAgICAgeDogKGstaSkvayAqIHBpLnggKyBpL2sgKiBwaW0ueCxcbiAgICAgICAgICB5OiAoay1pKS9rICogcGkueSArIGkvayAqIHBpbS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBucFtrXSA9IHBbay0xXTtcbiAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICB9LFxuICAgIGRlcml2YXRpdmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBtdCA9IDEtdCxcbiAgICAgICAgICBhLGIsYz0wLFxuICAgICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMF07XG4gICAgICBpZih0aGlzLm9yZGVyPT09MikgeyBwID0gW3BbMF0sIHBbMV0sIFpFUk9dOyBhID0gbXQ7IGIgPSB0OyB9XG4gICAgICBpZih0aGlzLm9yZGVyPT09MykgeyBhID0gbXQqbXQ7IGIgPSBtdCp0KjI7IGMgPSB0KnQ7IH1cbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IGEqcFswXS54ICsgYipwWzFdLnggKyBjKnBbMl0ueCxcbiAgICAgICAgeTogYSpwWzBdLnkgKyBiKnBbMV0ueSArIGMqcFsyXS55XG4gICAgICB9O1xuICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgcmV0LnogPSBhKnBbMF0ueiArIGIqcFsxXS56ICsgYypwWzJdLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgaW5mbGVjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLmluZmxlY3Rpb25zKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIG5vcm1hbDogZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHRoaXMuXzNkID8gdGhpcy5fX25vcm1hbDModCkgOiB0aGlzLl9fbm9ybWFsMih0KTtcbiAgICB9LFxuICAgIF9fbm9ybWFsMjogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGQgPSB0aGlzLmRlcml2YXRpdmUodCk7XG4gICAgICB2YXIgcSA9IHNxcnQoZC54KmQueCArIGQueSpkLnkpXG4gICAgICByZXR1cm4geyB4OiAtZC55L3EsIHk6IGQueC9xIH07XG4gICAgfSxcbiAgICBfX25vcm1hbDM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1NDUzMTU5XG4gICAgICB2YXIgcjEgPSB0aGlzLmRlcml2YXRpdmUodCksXG4gICAgICAgICAgcjIgPSB0aGlzLmRlcml2YXRpdmUodCswLjAxKSxcbiAgICAgICAgICBxMSA9IHNxcnQocjEueCpyMS54ICsgcjEueSpyMS55ICsgcjEueipyMS56KSxcbiAgICAgICAgICBxMiA9IHNxcnQocjIueCpyMi54ICsgcjIueSpyMi55ICsgcjIueipyMi56KTtcbiAgICAgIHIxLnggLz0gcTE7IHIxLnkgLz0gcTE7IHIxLnogLz0gcTE7XG4gICAgICByMi54IC89IHEyOyByMi55IC89IHEyOyByMi56IC89IHEyO1xuICAgICAgLy8gY3Jvc3MgcHJvZHVjdFxuICAgICAgdmFyIGMgPSB7XG4gICAgICAgIHg6IHIyLnkqcjEueiAtIHIyLnoqcjEueSxcbiAgICAgICAgeTogcjIueipyMS54IC0gcjIueCpyMS56LFxuICAgICAgICB6OiByMi54KnIxLnkgLSByMi55KnIxLnhcbiAgICAgIH07XG4gICAgICB2YXIgbSA9IHNxcnQoYy54KmMueCArIGMueSpjLnkgKyBjLnoqYy56KTtcbiAgICAgIGMueCAvPSBtOyBjLnkgLz0gbTsgYy56IC89IG07XG4gICAgICAvLyByb3RhdGlvbiBtYXRyaXhcbiAgICAgIHZhciBSID0gWyAgIGMueCpjLngsICAgYy54KmMueS1jLnosIGMueCpjLnorYy55LFxuICAgICAgICAgICAgICAgIGMueCpjLnkrYy56LCAgIGMueSpjLnksICAgYy55KmMuei1jLngsXG4gICAgICAgICAgICAgICAgYy54KmMuei1jLnksIGMueSpjLnorYy54LCAgIGMueipjLnogICAgXTtcbiAgICAgIC8vIG5vcm1hbCB2ZWN0b3I6XG4gICAgICB2YXIgbiA9IHtcbiAgICAgICAgeDogUlswXSAqIHIxLnggKyBSWzFdICogcjEueSArIFJbMl0gKiByMS56LFxuICAgICAgICB5OiBSWzNdICogcjEueCArIFJbNF0gKiByMS55ICsgUls1XSAqIHIxLnosXG4gICAgICAgIHo6IFJbNl0gKiByMS54ICsgUls3XSAqIHIxLnkgKyBSWzhdICogcjEuelxuICAgICAgfTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG4gICAgaHVsbDogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cyxcbiAgICAgICAgICBfcCA9IFtdLFxuICAgICAgICAgIHB0LFxuICAgICAgICAgIHEgPSBbXSxcbiAgICAgICAgICBpZHggPSAwLFxuICAgICAgICAgIGk9MCxcbiAgICAgICAgICBsPTA7XG4gICAgICBxW2lkeCsrXSA9IHBbMF07XG4gICAgICBxW2lkeCsrXSA9IHBbMV07XG4gICAgICBxW2lkeCsrXSA9IHBbMl07XG4gICAgICBpZih0aGlzLm9yZGVyID09PSAzKSB7IHFbaWR4KytdID0gcFszXTsgfVxuICAgICAgLy8gd2UgbGVycCBiZXR3ZWVuIGFsbCBwb2ludHMgYXQgZWFjaCBpdGVyYXRpb24sIHVudGlsIHdlIGhhdmUgMSBwb2ludCBsZWZ0LlxuICAgICAgd2hpbGUocC5sZW5ndGg+MSkge1xuICAgICAgICBfcCA9IFtdO1xuICAgICAgICBmb3IoaT0wLCBsPXAubGVuZ3RoLTE7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgcHQgPSB1dGlscy5sZXJwKHQscFtpXSxwW2krMV0pO1xuICAgICAgICAgIHFbaWR4KytdID0gcHQ7XG4gICAgICAgICAgX3AucHVzaChwdCk7XG4gICAgICAgIH1cbiAgICAgICAgcCA9IF9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHE7XG4gICAgfSxcbiAgICBzcGxpdDogZnVuY3Rpb24odDEsIHQyKSB7XG4gICAgICAvLyBzaG9ydGN1dHNcbiAgICAgIGlmKHQxPT09MCAmJiAhIXQyKSB7IHJldHVybiB0aGlzLnNwbGl0KHQyKS5sZWZ0OyB9XG4gICAgICBpZih0Mj09PTEpIHsgcmV0dXJuIHRoaXMuc3BsaXQodDEpLnJpZ2h0OyB9XG5cbiAgICAgIC8vIG5vIHNob3J0Y3V0OiB1c2UgXCJkZSBDYXN0ZWxqYXVcIiBpdGVyYXRpb24uXG4gICAgICB2YXIgcSA9IHRoaXMuaHVsbCh0MSk7XG4gICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBsZWZ0OiB0aGlzLm9yZGVyID09PSAyID8gbmV3IEJlemllcihbcVswXSxxWzNdLHFbNV1dKSA6IG5ldyBCZXppZXIoW3FbMF0scVs0XSxxWzddLHFbOV1dKSxcbiAgICAgICAgcmlnaHQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzVdLHFbNF0scVsyXV0pIDogbmV3IEJlemllcihbcVs5XSxxWzhdLHFbNl0scVszXV0pLFxuICAgICAgICBzcGFuOiBxXG4gICAgICB9O1xuXG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYmluZCBfdDEvX3QyIGluZm9ybWF0aW9uIVxuICAgICAgcmVzdWx0LmxlZnQuX3QxICA9IHV0aWxzLm1hcCgwLCAgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQubGVmdC5fdDIgID0gdXRpbHMubWFwKHQxLCAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5yaWdodC5fdDEgPSB1dGlscy5tYXAodDEsIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LnJpZ2h0Ll90MiA9IHV0aWxzLm1hcCgxLCAgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgbm8gdDIsIHdlJ3JlIGRvbmVcbiAgICAgIGlmKCF0MikgeyByZXR1cm4gcmVzdWx0OyB9XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgYSB0Miwgc3BsaXQgYWdhaW46XG4gICAgICB0MiA9IHV0aWxzLm1hcCh0Mix0MSwxLDAsMSk7XG4gICAgICB2YXIgc3Vic3BsaXQgPSByZXN1bHQucmlnaHQuc3BsaXQodDIpO1xuICAgICAgcmV0dXJuIHN1YnNwbGl0LmxlZnQ7XG4gICAgfSxcbiAgICBleHRyZW1hOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaW1zID0gdGhpcy5kaW1zLFxuICAgICAgICAgIHJlc3VsdD17fSxcbiAgICAgICAgICByb290cz1bXSxcbiAgICAgICAgICBwLCBtZm47XG4gICAgICBkaW1zLmZvckVhY2goZnVuY3Rpb24oZGltKSB7XG4gICAgICAgIG1mbiA9IGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHZbZGltXTsgfTtcbiAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXS5tYXAobWZuKTtcbiAgICAgICAgcmVzdWx0W2RpbV0gPSB1dGlscy5kcm9vdHMocCk7XG4gICAgICAgIGlmKHRoaXMub3JkZXIgPT09IDMpIHtcbiAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzFdLm1hcChtZm4pO1xuICAgICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uY29uY2F0KHV0aWxzLmRyb290cyhwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5maWx0ZXIoZnVuY3Rpb24odCkgeyByZXR1cm4gKHQ+PTAgJiYgdDw9MSk7IH0pO1xuICAgICAgICByb290cyA9IHJvb3RzLmNvbmNhdChyZXN1bHRbZGltXS5zb3J0KCkpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJvb3RzID0gcm9vdHMuc29ydCgpLmZpbHRlcihmdW5jdGlvbih2LGlkeCkgeyByZXR1cm4gKHJvb3RzLmluZGV4T2YodikgPT09IGlkeCk7IH0pO1xuICAgICAgcmVzdWx0LnZhbHVlcyA9IHJvb3RzO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGJib3g6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKSwgcmVzdWx0ID0ge307XG4gICAgICB0aGlzLmRpbXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJlc3VsdFtkXSA9IHV0aWxzLmdldG1pbm1heCh0aGlzLCBkLCBleHRyZW1hW2RdKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgb3ZlcmxhcHM6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB2YXIgbGJib3ggPSB0aGlzLmJib3goKSxcbiAgICAgICAgICB0YmJveCA9IGN1cnZlLmJib3goKTtcbiAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChsYmJveCx0YmJveCk7XG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKHQsIGQpIHtcbiAgICAgIGlmKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5nZXQodCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5ub3JtYWwodCk7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgYzogYyxcbiAgICAgICAgICBuOiBuLFxuICAgICAgICAgIHg6IGMueCArIG4ueCAqIGQsXG4gICAgICAgICAgeTogYy55ICsgbi55ICogZFxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgIHJldC56ID0gYy56ICsgbi56ICogZDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuX2xpbmVhcikge1xuICAgICAgICB2YXIgbnYgPSB0aGlzLm5vcm1hbCgwKTtcbiAgICAgICAgdmFyIGNvb3JkcyA9IHRoaXMucG9pbnRzLm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICAgIHg6IHAueCArIHQgKiBudi54LFxuICAgICAgICAgICAgeTogcC55ICsgdCAqIG52LnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmKHAueiAmJiBuLnopIHsgcmV0LnogPSBwLnogKyB0ICogbnYuejsgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW25ldyBCZXppZXIoY29vcmRzKV07XG4gICAgICB9XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7XG4gICAgICByZXR1cm4gcmVkdWNlZC5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy5zY2FsZSh0KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2ltcGxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmKHRoaXMub3JkZXI9PT0zKSB7XG4gICAgICAgIHZhciBhMSA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMV0pO1xuICAgICAgICB2YXIgYTIgPSB1dGlscy5hbmdsZSh0aGlzLnBvaW50c1swXSwgdGhpcy5wb2ludHNbM10sIHRoaXMucG9pbnRzWzJdKTtcbiAgICAgICAgaWYoYTE+MCAmJiBhMjwwIHx8IGExPDAgJiYgYTI+MCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG4xID0gdGhpcy5ub3JtYWwoMCk7XG4gICAgICB2YXIgbjIgPSB0aGlzLm5vcm1hbCgxKTtcbiAgICAgIHZhciBzID0gbjEueCpuMi54ICsgbjEueSpuMi55O1xuICAgICAgaWYodGhpcy5fM2QpIHsgcyArPSBuMS56Km4yLno7IH1cbiAgICAgIHZhciBhbmdsZSA9IGFicyhhY29zKHMpKTtcbiAgICAgIHJldHVybiBhbmdsZSA8IHBpLzM7XG4gICAgfSxcbiAgICByZWR1Y2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIHQxPTAsIHQyPTAsIHN0ZXA9MC4wMSwgc2VnbWVudCwgcGFzczE9W10sIHBhc3MyPVtdO1xuICAgICAgLy8gZmlyc3QgcGFzczogc3BsaXQgb24gZXh0cmVtYVxuICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKS52YWx1ZXM7XG4gICAgICBpZihleHRyZW1hLmluZGV4T2YoMCk9PT0tMSkgeyBleHRyZW1hID0gWzBdLmNvbmNhdChleHRyZW1hKTsgfVxuICAgICAgaWYoZXh0cmVtYS5pbmRleE9mKDEpPT09LTEpIHsgZXh0cmVtYS5wdXNoKDEpOyB9XG5cbiAgICAgIGZvcih0MT1leHRyZW1hWzBdLCBpPTE7IGk8ZXh0cmVtYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0MiA9IGV4dHJlbWFbaV07XG4gICAgICAgIHNlZ21lbnQgPSB0aGlzLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgc2VnbWVudC5fdDEgPSB0MTtcbiAgICAgICAgc2VnbWVudC5fdDIgPSB0MjtcbiAgICAgICAgcGFzczEucHVzaChzZWdtZW50KTtcbiAgICAgICAgdDEgPSB0MjtcbiAgICAgIH1cblxuICAgICAgLy8gc2Vjb25kIHBhc3M6IGZ1cnRoZXIgcmVkdWNlIHRoZXNlIHNlZ21lbnRzIHRvIHNpbXBsZSBzZWdtZW50c1xuICAgICAgcGFzczEuZm9yRWFjaChmdW5jdGlvbihwMSkge1xuICAgICAgICB0MT0wO1xuICAgICAgICB0Mj0wO1xuICAgICAgICB3aGlsZSh0MiA8PSAxKSB7XG4gICAgICAgICAgZm9yKHQyPXQxK3N0ZXA7IHQyPD0xK3N0ZXA7IHQyKz1zdGVwKSB7XG4gICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsdDIpO1xuICAgICAgICAgICAgaWYoIXNlZ21lbnQuc2ltcGxlKCkpIHtcbiAgICAgICAgICAgICAgdDIgLT0gc3RlcDtcbiAgICAgICAgICAgICAgaWYoYWJzKHQxLXQyKTxzdGVwKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5ldmVyIGZvcm0gYSByZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgICAgICAgc2VnbWVudC5fdDEgPSB1dGlscy5tYXAodDEsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgICAgICBzZWdtZW50Ll90MiA9IHV0aWxzLm1hcCh0MiwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgICAgIHBhc3MyLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgIHQxID0gdDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0MTwxKSB7XG4gICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLDEpO1xuICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICBzZWdtZW50Ll90MiA9IHAxLl90MjtcbiAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXNzMjtcbiAgICB9LFxuICAgIHNjYWxlOiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb3JkZXIgPSB0aGlzLm9yZGVyO1xuICAgICAgdmFyIGRpc3RhbmNlRm4gPSBmYWxzZVxuICAgICAgaWYodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIikgeyBkaXN0YW5jZUZuID0gZDsgfVxuICAgICAgaWYoZGlzdGFuY2VGbiAmJiBvcmRlciA9PT0gMikgeyByZXR1cm4gdGhpcy5yYWlzZSgpLnNjYWxlKGRpc3RhbmNlRm4pOyB9XG5cbiAgICAgIC8vIFRPRE86IGFkZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBkZWdlbmVyYXRlICg9bGluZWFyKSBjdXJ2ZXMuXG4gICAgICB2YXIgY2xvY2t3aXNlID0gdGhpcy5jbG9ja3dpc2U7XG4gICAgICB2YXIgcjEgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigwKSA6IGQ7XG4gICAgICB2YXIgcjIgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigxKSA6IGQ7XG4gICAgICB2YXIgdiA9IFsgdGhpcy5vZmZzZXQoMCwxMCksIHRoaXMub2Zmc2V0KDEsMTApIF07XG4gICAgICB2YXIgbyA9IHV0aWxzLmxsaTQodlswXSwgdlswXS5jLCB2WzFdLCB2WzFdLmMpO1xuICAgICAgaWYoIW8pIHsgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHNjYWxlIHRoaXMgY3VydmUuIFRyeSByZWR1Y2luZyBpdCBmaXJzdC5cIik7IH1cbiAgICAgIC8vIG1vdmUgYWxsIHBvaW50cyBieSBkaXN0YW5jZSAnZCcgd3J0IHRoZSBvcmlnaW4gJ28nXG4gICAgICB2YXIgcG9pbnRzPXRoaXMucG9pbnRzLCBucD1bXTtcblxuICAgICAgLy8gbW92ZSBlbmQgcG9pbnRzIGJ5IGZpeGVkIGRpc3RhbmNlIGFsb25nIG5vcm1hbC5cbiAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcCA9IG5wW3Qqb3JkZXJdID0gdXRpbHMuY29weShwb2ludHNbdCpvcmRlcl0pO1xuICAgICAgICBwLnggKz0gKHQ/cjI6cjEpICogdlt0XS5uLng7XG4gICAgICAgIHAueSArPSAodD9yMjpyMSkgKiB2W3RdLm4ueTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIGlmICghZGlzdGFuY2VGbikge1xuICAgICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIHRvIGxpZSBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoZSBvZmZzZXRcbiAgICAgICAgLy8gZGVyaXZhdGl2ZSB2ZWN0b3IsIGFuZCB0aGUgb3JpZ2luLXRocm91Z2gtY29udHJvbCB2ZWN0b3JcbiAgICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgaWYodGhpcy5vcmRlcj09PTIgJiYgISF0KSByZXR1cm47XG4gICAgICAgICAgdmFyIHAgPSBucFt0Km9yZGVyXTtcbiAgICAgICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcbiAgICAgICAgICB2YXIgcDIgPSB7IHg6IHAueCArIGQueCwgeTogcC55ICsgZC55IH07XG4gICAgICAgICAgbnBbdCsxXSA9IHV0aWxzLmxsaTQocCwgcDIsIG8sIHBvaW50c1t0KzFdKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIGJ5IFwiaG93ZXZlciBtdWNoIG5lY2Vzc2FyeSB0b1xuICAgICAgLy8gZW5zdXJlIHRoZSBjb3JyZWN0IHRhbmdlbnQgdG8gZW5kcG9pbnRcIi5cbiAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICBpZih0aGlzLm9yZGVyPT09MiAmJiAhIXQpIHJldHVybjtcbiAgICAgICAgdmFyIHAgPSBwb2ludHNbdCsxXTtcbiAgICAgICAgdmFyIG92ID0ge1xuICAgICAgICAgIHg6IHAueCAtIG8ueCxcbiAgICAgICAgICB5OiBwLnkgLSBvLnlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJjID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oKHQrMSkvb3JkZXIpIDogZDtcbiAgICAgICAgaWYoZGlzdGFuY2VGbiAmJiAhY2xvY2t3aXNlKSByYyA9IC1yYztcbiAgICAgICAgdmFyIG0gPSBzcXJ0KG92Lngqb3YueCArIG92Lnkqb3YueSk7XG4gICAgICAgIG92LnggLz0gbTtcbiAgICAgICAgb3YueSAvPSBtO1xuICAgICAgICBucFt0KzFdID0ge1xuICAgICAgICAgIHg6IHAueCArIHJjKm92LngsXG4gICAgICAgICAgeTogcC55ICsgcmMqb3YueVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgIH0sXG4gICAgb3V0bGluZTogZnVuY3Rpb24oZDEsIGQyLCBkMywgZDQpIHtcbiAgICAgIGQyID0gKHR5cGVvZiBkMiA9PT0gXCJ1bmRlZmluZWRcIikgPyBkMSA6IGQyO1xuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpLFxuICAgICAgICAgIGxlbiA9IHJlZHVjZWQubGVuZ3RoLFxuICAgICAgICAgIGZjdXJ2ZXMgPSBbXSxcbiAgICAgICAgICBiY3VydmVzID0gW10sXG4gICAgICAgICAgcCxcbiAgICAgICAgICBhbGVuID0gMCxcbiAgICAgICAgICB0bGVuID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgdmFyIGdyYWR1YXRlZCA9ICh0eXBlb2YgZDMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGQ0ICE9PSBcInVuZGVmaW5lZFwiKTtcblxuICAgICAgZnVuY3Rpb24gbGluZWFyRGlzdGFuY2VGdW5jdGlvbihzLGUsIHRsZW4sYWxlbixzbGVuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBmMSA9IGFsZW4vdGxlbiwgZjIgPSAoYWxlbitzbGVuKS90bGVuLCBkID0gZS1zO1xuICAgICAgICAgIHJldHVybiB1dGlscy5tYXAodiwgMCwxLCBzK2YxKmQsIHMrZjIqZCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBmb3JtIGN1cnZlIG91bGluZXNcbiAgICAgIHJlZHVjZWQuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgIHNsZW4gPSBzZWdtZW50Lmxlbmd0aCgpO1xuICAgICAgICBpZiAoZ3JhZHVhdGVkKSB7XG4gICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoICBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKCBkMSwgZDMsIHRsZW4sYWxlbixzbGVuKSAgKSk7XG4gICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoICBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKC1kMiwtZDQsIHRsZW4sYWxlbixzbGVuKSAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoIGQxKSk7XG4gICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoLWQyKSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxlbiArPSBzbGVuO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHJldmVyc2UgdGhlIFwicmV0dXJuXCIgb3V0bGluZVxuICAgICAgYmN1cnZlcyA9IGJjdXJ2ZXMubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcCA9IHMucG9pbnRzO1xuICAgICAgICBpZihwWzNdKSB7IHMucG9pbnRzID0gW3BbM10scFsyXSxwWzFdLHBbMF1dOyB9XG4gICAgICAgIGVsc2UgeyBzLnBvaW50cyA9IFtwWzJdLHBbMV0scFswXV07IH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KS5yZXZlcnNlKCk7XG5cbiAgICAgIC8vIGZvcm0gdGhlIGVuZGNhcHMgYXMgbGluZXNcbiAgICAgIHZhciBmcyA9IGZjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuICAgICAgICAgIGZlID0gZmN1cnZlc1tsZW4tMV0ucG9pbnRzW2ZjdXJ2ZXNbbGVuLTFdLnBvaW50cy5sZW5ndGgtMV0sXG4gICAgICAgICAgYnMgPSBiY3VydmVzW2xlbi0xXS5wb2ludHNbYmN1cnZlc1tsZW4tMV0ucG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgICBiZSA9IGJjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuICAgICAgICAgIGxzID0gdXRpbHMubWFrZWxpbmUoYnMsZnMpLFxuICAgICAgICAgIGxlID0gdXRpbHMubWFrZWxpbmUoZmUsYmUpLFxuICAgICAgICAgIHNlZ21lbnRzID0gW2xzXS5jb25jYXQoZmN1cnZlcykuY29uY2F0KFtsZV0pLmNvbmNhdChiY3VydmVzKSxcbiAgICAgICAgICBzbGVuID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gbmV3IFBvbHlCZXppZXIoc2VnbWVudHMpO1xuICAgIH0sXG4gICAgb3V0bGluZXNoYXBlczogZnVuY3Rpb24oZDEsIGQyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgZDIgPSBkMiB8fCBkMTtcbiAgICAgIHZhciBvdXRsaW5lID0gdGhpcy5vdXRsaW5lKGQxLGQyKS5jdXJ2ZXM7XG4gICAgICB2YXIgc2hhcGVzID0gW107XG4gICAgICBmb3IodmFyIGk9MSwgbGVuPW91dGxpbmUubGVuZ3RoOyBpIDwgbGVuLzI7IGkrKykge1xuICAgICAgICB2YXIgc2hhcGUgPSB1dGlscy5tYWtlc2hhcGUob3V0bGluZVtpXSwgb3V0bGluZVtsZW4taV0sIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgc2hhcGUuc3RhcnRjYXAudmlydHVhbCA9IChpID4gMSk7XG4gICAgICAgIHNoYXBlLmVuZGNhcC52aXJ0dWFsID0gKGkgPCBsZW4vMi0xKTtcbiAgICAgICAgc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoYXBlcztcbiAgICB9LFxuICAgIGludGVyc2VjdHM6IGZ1bmN0aW9uKGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgaWYoIWN1cnZlKSByZXR1cm4gdGhpcy5zZWxmaW50ZXJzZWN0cyhjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICBpZihjdXJ2ZS5wMSAmJiBjdXJ2ZS5wMikge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lSW50ZXJzZWN0cyhjdXJ2ZSk7XG4gICAgICB9XG4gICAgICBpZihjdXJ2ZSBpbnN0YW5jZW9mIEJlemllcikgeyBjdXJ2ZSA9IGN1cnZlLnJlZHVjZSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5jdXJ2ZWludGVyc2VjdHModGhpcy5yZWR1Y2UoKSwgY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICB9LFxuICAgIGxpbmVJbnRlcnNlY3RzOiBmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgbXggPSBtaW4obGluZS5wMS54LCBsaW5lLnAyLngpLFxuICAgICAgICAgIG15ID0gbWluKGxpbmUucDEueSwgbGluZS5wMi55KSxcbiAgICAgICAgICBNWCA9IG1heChsaW5lLnAxLngsIGxpbmUucDIueCksXG4gICAgICAgICAgTVkgPSBtYXgobGluZS5wMS55LCBsaW5lLnAyLnkpLFxuICAgICAgICAgIHNlbGY9dGhpcztcbiAgICAgIHJldHVybiB1dGlscy5yb290cyh0aGlzLnBvaW50cywgbGluZSkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHAgPSBzZWxmLmdldCh0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJldHdlZW4ocC54LCBteCwgTVgpICYmIHV0aWxzLmJldHdlZW4ocC55LCBteSwgTVkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZWxmaW50ZXJzZWN0czogZnVuY3Rpb24oY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcbiAgICAgIC8vIFwic2ltcGxlXCIgY3VydmVzIGNhbm5vdCBpbnRlcnNlY3Qgd2l0aCB0aGVpciBkaXJlY3RcbiAgICAgIC8vIG5laWdoYm91ciwgc28gZm9yIGVhY2ggc2VnbWVudCBYIHdlIGNoZWNrIHdoZXRoZXJcbiAgICAgIC8vIGl0IGludGVyc2VjdHMgWzA6eC0yXVt4KzI6bGFzdF0uXG4gICAgICB2YXIgaSxsZW49cmVkdWNlZC5sZW5ndGgtMixyZXN1bHRzPVtdLHJlc3VsdCxsZWZ0LHJpZ2h0O1xuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBsZWZ0ID0gcmVkdWNlZC5zbGljZShpLGkrMSk7XG4gICAgICAgIHJpZ2h0ID0gcmVkdWNlZC5zbGljZShpKzIpO1xuICAgICAgICByZXN1bHQgPSB0aGlzLmN1cnZlaW50ZXJzZWN0cyhsZWZ0LCByaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoIHJlc3VsdCApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSxcbiAgICBjdXJ2ZWludGVyc2VjdHM6IGZ1bmN0aW9uKGMxLCBjMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgLy8gc3RlcCAxOiBwYWlyIG9mZiBhbnkgb3ZlcmxhcHBpbmcgc2VnbWVudHNcbiAgICAgIGMxLmZvckVhY2goZnVuY3Rpb24obCkge1xuICAgICAgICBjMi5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICBpZihsLm92ZXJsYXBzKHIpKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHsgbGVmdDogbCwgcmlnaHQ6IHIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8gc3RlcCAyOiBmb3IgZWFjaCBwYWlyaW5nLCBydW4gdGhyb3VnaCB0aGUgY29udmVyZ2VuY2UgYWxnb3JpdGhtLlxuICAgICAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5jb25jYXQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgICB9LFxuICAgIGFyY3M6IGZ1bmN0aW9uKGVycm9yVGhyZXNob2xkKSB7XG4gICAgICBlcnJvclRocmVzaG9sZCA9IGVycm9yVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIHZhciBjaXJjbGVzID0gW107XG4gICAgICByZXR1cm4gdGhpcy5faXRlcmF0ZShlcnJvclRocmVzaG9sZCwgY2lyY2xlcyk7XG4gICAgfSxcbiAgICBfZXJyb3I6IGZ1bmN0aW9uKHBjLCBucDEsIHMsIGUpIHtcbiAgICAgIHZhciBxID0gKGUgLSBzKSAvIDQsXG4gICAgICAgICAgYzEgPSB0aGlzLmdldChzICsgcSksXG4gICAgICAgICAgYzIgPSB0aGlzLmdldChlIC0gcSksXG4gICAgICAgICAgcmVmID0gdXRpbHMuZGlzdChwYywgbnAxKSxcbiAgICAgICAgICBkMSAgPSB1dGlscy5kaXN0KHBjLCBjMSksXG4gICAgICAgICAgZDIgID0gdXRpbHMuZGlzdChwYywgYzIpO1xuICAgICAgcmV0dXJuIGFicyhkMS1yZWYpICsgYWJzKGQyLXJlZik7XG4gICAgfSxcbiAgICBfaXRlcmF0ZTogZnVuY3Rpb24oZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpIHtcbiAgICAgIHZhciBzID0gMCwgZSA9IDEsIHNhZmV0eTtcbiAgICAgIC8vIHdlIGRvIGEgYmluYXJ5IHNlYXJjaCB0byBmaW5kIHRoZSBcImdvb2QgYHRgIGNsb3Nlc3QgdG8gbm8tbG9uZ2VyLWdvb2RcIlxuICAgICAgZG8ge1xuICAgICAgICBzYWZldHk9MDtcblxuICAgICAgICAvLyBzdGVwIDE6IHN0YXJ0IHdpdGggdGhlIG1heGltdW0gcG9zc2libGUgYXJjXG4gICAgICAgIGUgPSAxO1xuXG4gICAgICAgIC8vIHBvaW50czpcbiAgICAgICAgdmFyIG5wMSA9IHRoaXMuZ2V0KHMpLCBucDIsIG5wMywgYXJjLCBwcmV2X2FyYztcblxuICAgICAgICAvLyBib29sZWFuczpcbiAgICAgICAgdmFyIGN1cnJfZ29vZCA9IGZhbHNlLCBwcmV2X2dvb2QgPSBmYWxzZSwgZG9uZTtcblxuICAgICAgICAvLyBudW1iZXJzOlxuICAgICAgICB2YXIgbSA9IGUsIHByZXZfZSA9IDEsIHN0ZXAgPSAwO1xuXG4gICAgICAgIC8vIHN0ZXAgMjogZmluZCB0aGUgYmVzdCBwb3NzaWJsZSBhcmNcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHByZXZfZ29vZCA9IGN1cnJfZ29vZDtcbiAgICAgICAgICBwcmV2X2FyYyA9IGFyYztcbiAgICAgICAgICBtID0gKHMgKyBlKS8yO1xuICAgICAgICAgIHN0ZXArKztcblxuICAgICAgICAgIG5wMiA9IHRoaXMuZ2V0KG0pO1xuICAgICAgICAgIG5wMyA9IHRoaXMuZ2V0KGUpO1xuXG4gICAgICAgICAgYXJjID0gdXRpbHMuZ2V0Y2NlbnRlcihucDEsIG5wMiwgbnAzKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvL2Fsc28gc2F2ZSB0aGUgdCB2YWx1ZXNcbiAgICAgICAgICBhcmMuaW50ZXJ2YWwgPSB7XG4gICAgICAgICAgICBzdGFydDogcyxcbiAgICAgICAgICAgIGVuZDogZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLl9lcnJvcihhcmMsIG5wMSwgcywgZSk7XG4gICAgICAgICAgY3Vycl9nb29kID0gKGVycm9yIDw9IGVycm9yVGhyZXNob2xkKTtcblxuICAgICAgICAgIGRvbmUgPSBwcmV2X2dvb2QgJiYgIWN1cnJfZ29vZDtcbiAgICAgICAgICBpZighZG9uZSkgcHJldl9lID0gZTtcblxuICAgICAgICAgIC8vIHRoaXMgYXJjIGlzIGZpbmU6IHdlIGNhbiBtb3ZlICdlJyB1cCB0byBzZWUgaWYgd2UgY2FuIGZpbmQgYSB3aWRlciBhcmNcbiAgICAgICAgICBpZihjdXJyX2dvb2QpIHtcbiAgICAgICAgICAgIC8vIGlmIGUgaXMgYWxyZWFkeSBhdCBtYXgsIHRoZW4gd2UncmUgZG9uZSBmb3IgdGhpcyBhcmMuXG4gICAgICAgICAgICBpZiAoZSA+PSAxKSB7XG4gICAgICAgICAgICAgIHByZXZfZSA9IDE7XG4gICAgICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG5vdCwgbW92ZSBpdCB1cCBieSBoYWxmIHRoZSBpdGVyYXRpb24gZGlzdGFuY2VcbiAgICAgICAgICAgIGUgPSBlICsgKGUtcykvMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGlzIGlzIGEgYmFkIGFyYzogd2UgbmVlZCB0byBtb3ZlICdlJyBkb3duIHRvIGZpbmQgYSBnb29kIGFyY1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZSA9IG07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlKCFkb25lICYmIHNhZmV0eSsrPDEwMCk7XG5cbiAgICAgICAgaWYoc2FmZXR5Pj0xMDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYXJjIGFic3RyYWN0aW9uIHNvbWVob3cgZmFpbGVkLi4uXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJbRl0gYXJjIGZvdW5kXCIsIHMsIHByZXZfZSwgcHJldl9hcmMueCwgcHJldl9hcmMueSwgcHJldl9hcmMucywgcHJldl9hcmMuZSk7XG5cbiAgICAgICAgcHJldl9hcmMgPSAocHJldl9hcmMgPyBwcmV2X2FyYyA6IGFyYyk7XG4gICAgICAgIGNpcmNsZXMucHVzaChwcmV2X2FyYyk7XG4gICAgICAgIHMgPSBwcmV2X2U7XG4gICAgICB9XG4gICAgICB3aGlsZShlIDwgMSk7XG4gICAgICByZXR1cm4gY2lyY2xlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoMTIyKTtcblxuICAvKipcbiAgICogUG9seSBCZXppZXJcbiAgICogQHBhcmFtIHtbdHlwZV19IGN1cnZlcyBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB2YXIgUG9seUJlemllciA9IGZ1bmN0aW9uKGN1cnZlcykge1xuICAgIHRoaXMuY3VydmVzID0gW107XG4gICAgdGhpcy5fM2QgPSBmYWxzZTtcbiAgICBpZighIWN1cnZlcykge1xuICAgICAgdGhpcy5jdXJ2ZXMgPSBjdXJ2ZXM7XG4gICAgICB0aGlzLl8zZCA9IHRoaXMuY3VydmVzWzBdLl8zZDtcbiAgICB9XG4gIH1cblxuICBQb2x5QmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgYWRkQ3VydmU6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB0aGlzLmN1cnZlcy5wdXNoKGN1cnZlKTtcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5fM2QgfHwgY3VydmUuXzNkO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi5sZW5ndGgoKTsgfSkucmVkdWNlKGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYStiOyB9KTtcbiAgICB9LFxuICAgIGN1cnZlOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlc1tpZHhdO1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuY3VydmVzO1xuICAgICAgdmFyIGJib3ggPSBjWzBdLmJib3goKTtcbiAgICAgIGZvcih2YXIgaT0xOyBpPGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXRpbHMuZXhwYW5kYm94KGJib3gsIGNbaV0uYmJveCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYm94O1xuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gW107XG4gICAgICB0aGlzLmN1cnZlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0LmNvbmNhdCh2Lm9mZnNldChkKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihvZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFBvbHlCZXppZXI7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBjb3MgPSBNYXRoLmNvcyxcbiAgICAgIHNpbiA9IE1hdGguc2luLFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIGF0YW4yID0gTWF0aC5hdGFuMixcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwb3cgPSBNYXRoLnBvdyxcbiAgICAgIC8vIGN1YmUgcm9vdCBmdW5jdGlvbiB5aWVsZGluZyByZWFsIHJvb3RzXG4gICAgICBjcnQgPSBmdW5jdGlvbih2KSB7IHJldHVybiAodjwwKSA/IC1wb3coLXYsMS8zKSA6IHBvdyh2LDEvMyk7IH0sXG4gICAgICAvLyB0cmlnIGNvbnN0YW50c1xuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgdGF1ID0gMipwaSxcbiAgICAgIHF1YXJ0ID0gcGkvMixcbiAgICAgIC8vIGZsb2F0IHByZWNpc2lvbiBzaWduaWZpY2FudCBkZWNpbWFsXG4gICAgICBlcHNpbG9uID0gMC4wMDAwMDE7XG5cbiAgLy8gQmV6aWVyIHV0aWxpdHkgZnVuY3Rpb25zXG4gIHZhciB1dGlscyA9IHtcbiAgICAvLyBMZWdlbmRyZS1HYXVzcyBhYnNjaXNzYWUgd2l0aCBuPTI0ICh4X2kgdmFsdWVzLCBkZWZpbmVkIGF0IGk9biBhcyB0aGUgcm9vdHMgb2YgdGhlIG50aCBvcmRlciBMZWdlbmRyZSBwb2x5bm9taWFsIFBuKHgpKVxuICAgIFR2YWx1ZXM6IFtcbiAgICAgIC0wLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAgMC4wNjQwNTY4OTI4NjI2MDU2MjYwODUwNDMwODI2MjQ3NDUwMzg1OTA5LFxuICAgICAgLTAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgICAwLjE5MTExODg2NzQ3MzYxNjMwOTE1ODYzOTgyMDc1NzA2OTYzMTg0MDQsXG4gICAgICAtMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgIDAuMzE1MDQyNjc5Njk2MTYzMzc0Mzg2NzkzMjkxMzE5ODEwMjQwNzg2NCxcbiAgICAgIC0wLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAgMC40MzM3OTM1MDc2MjYwNDUxMzg0ODcwODQyMzE5MTMzNDk3MTI0NTI0LFxuICAgICAgLTAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgICAwLjU0NTQyMTQ3MTM4ODgzOTUzNTY1ODM3NTYxNzIxODM3MjM3MDAxMDcsXG4gICAgICAtMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgIDAuNjQ4MDkzNjUxOTM2OTc1NTY5MjUyNDk1Nzg2OTEwNzQ3NjI2NjY5NixcbiAgICAgIC0wLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAgMC43NDAxMjQxOTE1Nzg1NTQzNjQyNDM4MjgxMDMwOTk5Nzg0MjU1MjMyLFxuICAgICAgLTAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgICAwLjgyMDAwMTk4NTk3MzkwMjkyMTk1Mzk0OTg3MjY2OTc0NTIwODA3NjEsXG4gICAgICAtMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgIDAuODg2NDE1NTI3MDA0NDAxMDM0MjEzMTU0MzQxOTgyMTk2NzU1MDg3MyxcbiAgICAgIC0wLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAgMC45MzgyNzQ1NTIwMDI3MzI3NTg1MjM2NDkwMDE3MDg3MjE0NDk2NTQ4LFxuICAgICAgLTAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgICAwLjk3NDcyODU1NTk3MTMwOTQ5ODE5ODM5MTk5MzAwODE2OTA2MTc0MTEsXG4gICAgICAtMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1LFxuICAgICAgIDAuOTk1MTg3MjE5OTk3MDIxMzYwMTc5OTk3NDA5NzAwNzM2ODExODc0NVxuICAgIF0sXG5cbiAgICAvLyBMZWdlbmRyZS1HYXVzcyB3ZWlnaHRzIHdpdGggbj0yNCAod19pIHZhbHVlcywgZGVmaW5lZCBieSBhIGZ1bmN0aW9uIGxpbmtlZCB0byBpbiB0aGUgQmV6aWVyIHByaW1lciBhcnRpY2xlKVxuICAgIEN2YWx1ZXM6IFtcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OVxuICAgIF0sXG5cbiAgICBhcmNmbjogZnVuY3Rpb24odCwgZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgZCA9IGRlcml2YXRpdmVGbih0KTtcbiAgICAgIHZhciBsID0gZC54KmQueCArIGQueSpkLnk7XG4gICAgICBpZih0eXBlb2YgZC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGwgKz0gZC56KmQuejtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzcXJ0KGwpO1xuICAgIH0sXG5cbiAgICBiZXR3ZWVuOiBmdW5jdGlvbih2LCBtLCBNKSB7XG4gICAgICByZXR1cm4gKG0gPD0gdiAmJiB2IDw9IE0pIHx8IHV0aWxzLmFwcHJveGltYXRlbHkodiwgbSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBNKTtcbiAgICB9LFxuXG4gICAgYXBwcm94aW1hdGVseTogZnVuY3Rpb24oYSxiLHByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIGFicyhhLWIpIDw9IChwcmVjaXNpb24gfHwgZXBzaWxvbik7XG4gICAgfSxcblxuICAgIGxlbmd0aDogZnVuY3Rpb24oZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgej0wLjUsc3VtPTAsbGVuPXV0aWxzLlR2YWx1ZXMubGVuZ3RoLGksdDtcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IHogKiB1dGlscy5UdmFsdWVzW2ldICsgejtcbiAgICAgICAgc3VtICs9IHV0aWxzLkN2YWx1ZXNbaV0gKiB1dGlscy5hcmNmbih0LGRlcml2YXRpdmVGbik7XG4gICAgICB9XG4gICAgICByZXR1cm4geiAqIHN1bTtcbiAgICB9LFxuXG4gICAgbWFwOiBmdW5jdGlvbih2LCBkcyxkZSwgdHMsdGUpIHtcbiAgICAgIHZhciBkMSA9IGRlLWRzLCBkMiA9IHRlLXRzLCB2MiA9ICB2LWRzLCByID0gdjIvZDE7XG4gICAgICByZXR1cm4gdHMgKyBkMipyO1xuICAgIH0sXG5cbiAgICBsZXJwOiBmdW5jdGlvbihyLCB2MSwgdjIpIHtcbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IHYxLnggKyByKih2Mi54LXYxLngpLFxuICAgICAgICB5OiB2MS55ICsgcioodjIueS12MS55KVxuICAgICAgfTtcbiAgICAgIGlmKCEhdjEueiAmJiAhIXYyLnopIHtcbiAgICAgICAgcmV0LnogPSAgdjEueiArIHIqKHYyLnotdjEueik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwb2ludFRvU3RyaW5nOiBmdW5jdGlvbihwKSB7XG4gICAgICB2YXIgcyA9IHAueCtcIi9cIitwLnk7XG4gICAgICBpZih0eXBlb2YgcC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHMgKz0gXCIvXCIrcC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSxcblxuICAgIHBvaW50c1RvU3RyaW5nOiBmdW5jdGlvbihwb2ludHMpIHtcbiAgICAgIHJldHVybiBcIltcIiArIHBvaW50cy5tYXAodXRpbHMucG9pbnRUb1N0cmluZykuam9pbihcIiwgXCIpICsgXCJdXCI7XG4gICAgfSxcblxuICAgIGNvcHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgfSxcblxuICAgIGFuZ2xlOiBmdW5jdGlvbihvLHYxLHYyKSB7XG4gICAgICB2YXIgZHgxID0gdjEueCAtIG8ueCxcbiAgICAgICAgICBkeTEgPSB2MS55IC0gby55LFxuICAgICAgICAgIGR4MiA9IHYyLnggLSBvLngsXG4gICAgICAgICAgZHkyID0gdjIueSAtIG8ueSxcbiAgICAgICAgICBjcm9zcyA9IGR4MSpkeTIgLSBkeTEqZHgyLFxuICAgICAgICAgIG0xID0gc3FydChkeDEqZHgxK2R5MSpkeTEpLFxuICAgICAgICAgIG0yID0gc3FydChkeDIqZHgyK2R5MipkeTIpLFxuICAgICAgICAgIGRvdDtcbiAgICAgIGR4MS89bTE7IGR5MS89bTE7IGR4Mi89bTI7IGR5Mi89bTI7XG4gICAgICBkb3QgPSBkeDEqZHgyICsgZHkxKmR5MjtcbiAgICAgIHJldHVybiBhdGFuMihjcm9zcywgZG90KTtcbiAgICB9LFxuXG4gICAgLy8gcm91bmQgYXMgc3RyaW5nLCB0byBhdm9pZCByb3VuZGluZyBlcnJvcnNcbiAgICByb3VuZDogZnVuY3Rpb24odiwgZCkge1xuICAgICAgdmFyIHMgPSAnJyArIHY7XG4gICAgICB2YXIgcG9zID0gcy5pbmRleE9mKFwiLlwiKTtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHMuc3Vic3RyaW5nKDAscG9zKzErZCkpO1xuICAgIH0sXG5cbiAgICBkaXN0OiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnk7XG4gICAgICByZXR1cm4gc3FydChkeCpkeCtkeSpkeSk7XG4gICAgfSxcblxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKExVVCwgcG9pbnQpIHtcbiAgICAgIHZhciBtZGlzdCA9IHBvdygyLDYzKSwgbXBvcywgZDtcbiAgICAgIExVVC5mb3JFYWNoKGZ1bmN0aW9uKHAsIGlkeCkge1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIG1wb3MgPSBpZHg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgbWRpc3Q6bWRpc3QsIG1wb3M6bXBvcyB9O1xuICAgIH0sXG5cbiAgICBhYmNyYXRpbzogZnVuY3Rpb24odCwgbikge1xuICAgICAgLy8gc2VlIHJhdGlvKHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgYm90dG9tID0gcG93KHQsbikgKyBwb3coMS10LG4pLCB0b3AgPSBib3R0b20gLSAxO1xuICAgICAgcmV0dXJuIGFicyh0b3AvYm90dG9tKTtcbiAgICB9LFxuXG4gICAgcHJvamVjdGlvbnJhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgdSh0KSBub3RlIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mby8jYWJjXG4gICAgICBpZiAobiE9PTIgJiYgbiE9PTMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHQgPSAwLjU7XG4gICAgICB9IGVsc2UgaWYgKHQ9PT0wIHx8IHQ9PT0xKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IHBvdygxLXQsIG4pLCBib3R0b20gPSBwb3codCxuKSArIHRvcDtcbiAgICAgIHJldHVybiB0b3AvYm90dG9tO1xuICAgIH0sXG5cbiAgICBsbGk4OiBmdW5jdGlvbih4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCkge1xuICAgICAgdmFyIG54PSh4MSp5Mi15MSp4MikqKHgzLXg0KS0oeDEteDIpKih4Myp5NC15Myp4NCksXG4gICAgICAgICAgbnk9KHgxKnkyLXkxKngyKSooeTMteTQpLSh5MS15MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBkPSh4MS14MikqKHkzLXk0KS0oeTEteTIpKih4My14NCk7XG4gICAgICBpZihkPT0wKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgcmV0dXJuIHsgeDogbngvZCwgeTogbnkvZCB9O1xuICAgIH0sXG5cbiAgICBsbGk0OiBmdW5jdGlvbihwMSxwMixwMyxwNCkge1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LFxuICAgICAgICAgIHgyID0gcDIueCwgeTIgPSBwMi55LFxuICAgICAgICAgIHgzID0gcDMueCwgeTMgPSBwMy55LFxuICAgICAgICAgIHg0ID0gcDQueCwgeTQgPSBwNC55O1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTgoeDEseTEseDIseTIseDMseTMseDQseTQpO1xuICAgIH0sXG5cbiAgICBsbGk6IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTQodjEsdjEuYyx2Mix2Mi5jKTtcbiAgICB9LFxuXG4gICAgbWFrZWxpbmU6IGZ1bmN0aW9uKHAxLHAyKSB7XG4gICAgICB2YXIgQmV6aWVyID0gcmVxdWlyZSgxMjApO1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LCB4MiA9IHAyLngsIHkyID0gcDIueSwgZHggPSAoeDIteDEpLzMsIGR5ID0gKHkyLXkxKS8zO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIoeDEsIHkxLCB4MStkeCwgeTErZHksIHgxKzIqZHgsIHkxKzIqZHksIHgyLCB5Mik7XG4gICAgfSxcblxuICAgIGZpbmRiYm94OiBmdW5jdGlvbihzZWN0aW9ucykge1xuICAgICAgdmFyIG14PTk5OTk5OTk5LG15PW14LE1YPS1teCxNWT1NWDtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24ocykge1xuICAgICAgICB2YXIgYmJveCA9IHMuYmJveCgpO1xuICAgICAgICBpZihteCA+IGJib3gueC5taW4pIG14ID0gYmJveC54Lm1pbjtcbiAgICAgICAgaWYobXkgPiBiYm94LnkubWluKSBteSA9IGJib3gueS5taW47XG4gICAgICAgIGlmKE1YIDwgYmJveC54Lm1heCkgTVggPSBiYm94LngubWF4O1xuICAgICAgICBpZihNWSA8IGJib3gueS5tYXgpIE1ZID0gYmJveC55Lm1heDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogeyBtaW46IG14LCBtaWQ6KG14K01YKS8yLCBtYXg6IE1YLCBzaXplOk1YLW14IH0sXG4gICAgICAgIHk6IHsgbWluOiBteSwgbWlkOihteStNWSkvMiwgbWF4OiBNWSwgc2l6ZTpNWS1teSB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNoYXBlaW50ZXJzZWN0aW9uczogZnVuY3Rpb24oczEsIGJib3gxLCBzMiwgYmJveDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBpZighdXRpbHMuYmJveG92ZXJsYXAoYmJveDEsIGJib3gyKSkgcmV0dXJuIFtdO1xuICAgICAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICAgIHZhciBhMSA9IFtzMS5zdGFydGNhcCwgczEuZm9yd2FyZCwgczEuYmFjaywgczEuZW5kY2FwXTtcbiAgICAgIHZhciBhMiA9IFtzMi5zdGFydGNhcCwgczIuZm9yd2FyZCwgczIuYmFjaywgczIuZW5kY2FwXTtcbiAgICAgIGExLmZvckVhY2goZnVuY3Rpb24obDEpIHtcbiAgICAgICAgaWYobDEudmlydHVhbCkgcmV0dXJuO1xuICAgICAgICBhMi5mb3JFYWNoKGZ1bmN0aW9uKGwyKSB7XG4gICAgICAgICAgaWYobDIudmlydHVhbCkgcmV0dXJuO1xuICAgICAgICAgIHZhciBpc3MgPSBsMS5pbnRlcnNlY3RzKGwyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgICAgaWYoaXNzLmxlbmd0aD4wKSB7XG4gICAgICAgICAgICBpc3MuYzEgPSBsMTtcbiAgICAgICAgICAgIGlzcy5jMiA9IGwyO1xuICAgICAgICAgICAgaXNzLnMxID0gczE7XG4gICAgICAgICAgICBpc3MuczIgPSBzMjtcbiAgICAgICAgICAgIGludGVyc2VjdGlvbnMucHVzaChpc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICAgIH0sXG5cbiAgICBtYWtlc2hhcGU6IGZ1bmN0aW9uKGZvcndhcmQsIGJhY2ssIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYnBsID0gYmFjay5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIGZwbCA9IGZvcndhcmQucG9pbnRzLmxlbmd0aDtcbiAgICAgIHZhciBzdGFydCAgPSB1dGlscy5tYWtlbGluZShiYWNrLnBvaW50c1ticGwtMV0sIGZvcndhcmQucG9pbnRzWzBdKTtcbiAgICAgIHZhciBlbmQgICAgPSB1dGlscy5tYWtlbGluZShmb3J3YXJkLnBvaW50c1tmcGwtMV0sIGJhY2sucG9pbnRzWzBdKTtcbiAgICAgIHZhciBzaGFwZSAgPSB7XG4gICAgICAgIHN0YXJ0Y2FwOiBzdGFydCxcbiAgICAgICAgZm9yd2FyZDogZm9yd2FyZCxcbiAgICAgICAgYmFjazogYmFjayxcbiAgICAgICAgZW5kY2FwOiBlbmQsXG4gICAgICAgIGJib3g6IHV0aWxzLmZpbmRiYm94KFtzdGFydCwgZm9yd2FyZCwgYmFjaywgZW5kXSlcbiAgICAgIH07XG4gICAgICB2YXIgc2VsZiA9IHV0aWxzO1xuICAgICAgc2hhcGUuaW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKHMyKSB7XG4gICAgICAgIHJldHVybiBzZWxmLnNoYXBlaW50ZXJzZWN0aW9ucyhzaGFwZSxzaGFwZS5iYm94LHMyLHMyLmJib3gsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gc2hhcGU7XG4gICAgfSxcblxuICAgIGdldG1pbm1heDogZnVuY3Rpb24oY3VydmUsIGQsIGxpc3QpIHtcbiAgICAgIGlmKCFsaXN0KSByZXR1cm4geyBtaW46MCwgbWF4OjAgfTtcbiAgICAgIHZhciBtaW49MHhGRkZGRkZGRkZGRkZGRkZGLCBtYXg9LW1pbix0LGM7XG4gICAgICBpZihsaXN0LmluZGV4T2YoMCk9PT0tMSkgeyBsaXN0ID0gWzBdLmNvbmNhdChsaXN0KTsgfVxuICAgICAgaWYobGlzdC5pbmRleE9mKDEpPT09LTEpIHsgbGlzdC5wdXNoKDEpOyB9XG4gICAgICBmb3IodmFyIGk9MCxsZW49bGlzdC5sZW5ndGg7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IGxpc3RbaV07XG4gICAgICAgIGMgPSBjdXJ2ZS5nZXQodCk7XG4gICAgICAgIGlmKGNbZF0gPCBtaW4pIHsgbWluID0gY1tkXTsgfVxuICAgICAgICBpZihjW2RdID4gbWF4KSB7IG1heCA9IGNbZF07IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7IG1pbjptaW4sIG1pZDoobWluK21heCkvMiwgbWF4Om1heCwgc2l6ZTptYXgtbWluIH07XG4gICAgfSxcblxuICAgIGFsaWduOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIHZhciB0eCA9IGxpbmUucDEueCxcbiAgICAgICAgICB0eSA9IGxpbmUucDEueSxcbiAgICAgICAgICBhID0gLWF0YW4yKGxpbmUucDIueS10eSwgbGluZS5wMi54LXR4KSxcbiAgICAgICAgICBkID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgeDogKHYueC10eCkqY29zKGEpIC0gKHYueS10eSkqc2luKGEpLFxuICAgICAgICAgICAgICB5OiAodi54LXR4KSpzaW4oYSkgKyAodi55LXR5KSpjb3MoYSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfTtcbiAgICAgIHJldHVybiBwb2ludHMubWFwKGQpO1xuICAgIH0sXG5cbiAgICByb290czogZnVuY3Rpb24ocG9pbnRzLCBsaW5lKSB7XG4gICAgICBsaW5lID0gbGluZSB8fCB7cDE6e3g6MCx5OjB9LHAyOnt4OjEseTowfX07XG4gICAgICB2YXIgb3JkZXIgPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBwID0gdXRpbHMuYWxpZ24ocG9pbnRzLCBsaW5lKTtcbiAgICAgIHZhciByZWR1Y2UgPSBmdW5jdGlvbih0KSB7IHJldHVybiAwPD10ICYmIHQgPD0xOyB9O1xuXG4gICAgICBpZiAob3JkZXIgPT09IDIpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLnksXG4gICAgICAgICAgICBiID0gcFsxXS55LFxuICAgICAgICAgICAgYyA9IHBbMl0ueSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsgKDIqYi1jKS8yKihiLWMpIF0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBzZWUgaHR0cDovL3d3dy50cmFuczRtaW5kLmNvbS9wZXJzb25hbF9kZXZlbG9wbWVudC9tYXRoZW1hdGljcy9wb2x5bm9taWFscy9jdWJpY0FsZ2VicmEuaHRtXG4gICAgICB2YXIgcGEgPSBwWzBdLnksXG4gICAgICAgICAgcGIgPSBwWzFdLnksXG4gICAgICAgICAgcGMgPSBwWzJdLnksXG4gICAgICAgICAgcGQgPSBwWzNdLnksXG4gICAgICAgICAgZCA9ICgtcGEgKyAzKnBiIC0gMypwYyArIHBkKSxcbiAgICAgICAgICBhID0gKDMqcGEgLSA2KnBiICsgMypwYykgLyBkLFxuICAgICAgICAgIGIgPSAoLTMqcGEgKyAzKnBiKSAvIGQsXG4gICAgICAgICAgYyA9IHBhIC8gZCxcbiAgICAgICAgICBwID0gKDMqYiAtIGEqYSkvMyxcbiAgICAgICAgICBwMyA9IHAvMyxcbiAgICAgICAgICBxID0gKDIqYSphKmEgLSA5KmEqYiArIDI3KmMpLzI3LFxuICAgICAgICAgIHEyID0gcS8yLFxuICAgICAgICAgIGRpc2NyaW1pbmFudCA9IHEyKnEyICsgcDMqcDMqcDMsXG4gICAgICAgICAgdTEsdjEseDEseDIseDM7XG4gICAgICAgaWYgKGRpc2NyaW1pbmFudCA8IDApIHtcbiAgICAgICAgdmFyIG1wMyA9IC1wLzMsXG4gICAgICAgICAgICBtcDMzID0gbXAzKm1wMyptcDMsXG4gICAgICAgICAgICByID0gc3FydCggbXAzMyApLFxuICAgICAgICAgICAgdCA9IC1xLygyKnIpLFxuICAgICAgICAgICAgY29zcGhpID0gdDwtMSA/IC0xIDogdD4xID8gMSA6IHQsXG4gICAgICAgICAgICBwaGkgPSBhY29zKGNvc3BoaSksXG4gICAgICAgICAgICBjcnRyID0gY3J0KHIpLFxuICAgICAgICAgICAgdDEgPSAyKmNydHI7XG4gICAgICAgIHgxID0gdDEgKiBjb3MocGhpLzMpIC0gYS8zO1xuICAgICAgICB4MiA9IHQxICogY29zKChwaGkrdGF1KS8zKSAtIGEvMztcbiAgICAgICAgeDMgPSB0MSAqIGNvcygocGhpKzIqdGF1KS8zKSAtIGEvMztcbiAgICAgICAgcmV0dXJuIFt4MSwgeDIsIHgzXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSBpZihkaXNjcmltaW5hbnQgPT09IDApIHtcbiAgICAgICAgdTEgPSBxMiA8IDAgPyBjcnQoLXEyKSA6IC1jcnQocTIpO1xuICAgICAgICB4MSA9IDIqdTEtYS8zO1xuICAgICAgICB4MiA9IC11MSAtIGEvMztcbiAgICAgICAgcmV0dXJuIFt4MSx4Ml0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2QgPSBzcXJ0KGRpc2NyaW1pbmFudCk7XG4gICAgICAgIHUxID0gY3J0KC1xMitzZCk7XG4gICAgICAgIHYxID0gY3J0KHEyK3NkKTtcbiAgICAgICAgcmV0dXJuIFt1MS12MS1hLzNdLmZpbHRlcihyZWR1Y2UpOztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZHJvb3RzOiBmdW5jdGlvbihwKSB7XG4gICAgICAvLyBxdWFkcmF0aWMgcm9vdHMgYXJlIGVhc3lcbiAgICAgIGlmKHAubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHZhciBhID0gcFswXSxcbiAgICAgICAgICAgIGIgPSBwWzFdLFxuICAgICAgICAgICAgYyA9IHBbMl0sXG4gICAgICAgICAgICBkID0gYSAtIDIqYiArIGM7XG4gICAgICAgIGlmKGQhPT0wKSB7XG4gICAgICAgICAgdmFyIG0xID0gLXNxcnQoYipiLWEqYyksXG4gICAgICAgICAgICAgIG0yID0gLWErYixcbiAgICAgICAgICAgICAgdjEgPSAtKCBtMSttMikvZCxcbiAgICAgICAgICAgICAgdjIgPSAtKC1tMSttMikvZDtcbiAgICAgICAgICByZXR1cm4gW3YxLCB2Ml07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihiIT09YyAmJiBkPT09MCkge1xuICAgICAgICAgIHJldHVybiBbKDIqYi1jKS8oMiooYi1jKSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gbGluZWFyIHJvb3RzIGFyZSBldmVuIGVhc2llclxuICAgICAgaWYocC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLCBiID0gcFsxXTtcbiAgICAgICAgaWYoYSE9PWIpIHtcbiAgICAgICAgICByZXR1cm4gW2EvKGEtYildO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5mbGVjdGlvbnM6IGZ1bmN0aW9uKHBvaW50cykge1xuICAgICAgaWYgKHBvaW50cy5sZW5ndGg8NCkgcmV0dXJuIFtdO1xuXG4gICAgICAvLyBGSVhNRTogVE9ETzogYWRkIGluIGluZmxlY3Rpb24gYWJzdHJhY3Rpb24gZm9yIHF1YXJ0aWMrIGN1cnZlcz9cblxuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIHsgcDE6IHBvaW50c1swXSwgcDI6IHBvaW50cy5zbGljZSgtMSlbMF0gfSksXG4gICAgICAgICAgYSA9IHBbMl0ueCAqIHBbMV0ueSxcbiAgICAgICAgICBiID0gcFszXS54ICogcFsxXS55LFxuICAgICAgICAgIGMgPSBwWzFdLnggKiBwWzJdLnksXG4gICAgICAgICAgZCA9IHBbM10ueCAqIHBbMl0ueSxcbiAgICAgICAgICB2MSA9IDE4ICogKC0zKmEgKyAyKmIgKyAzKmMgLSBkKSxcbiAgICAgICAgICB2MiA9IDE4ICogKDMqYSAtIGIgLSAzKmMpLFxuICAgICAgICAgIHYzID0gMTggKiAoYyAtIGEpO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseSh2MSwwKSkgcmV0dXJuIFtdO1xuXG4gICAgICB2YXIgdHJtID0gdjIqdjIgLSA0KnYxKnYzLFxuICAgICAgICAgIHNxID0gTWF0aC5zcXJ0KHRybSksXG4gICAgICAgICAgZCA9IDIgKiB2MTtcblxuICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkoZCwwKSkgcmV0dXJuIFtdO1xuXG4gICAgICByZXR1cm4gWyhzcS12MikvZCwgLSh2MitzcSkvZF0uZmlsdGVyKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgcmV0dXJuICgwIDw9IHIgJiYgciA8PSAxKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBiYm94b3ZlcmxhcDogZnVuY3Rpb24oYjEsYjIpIHtcbiAgICAgIHZhciBkaW1zPVsneCcsJ3knXSxsZW49ZGltcy5sZW5ndGgsaSxkaW0sbCx0LGRcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgZGltID0gZGltc1tpXTtcbiAgICAgICAgbCA9IGIxW2RpbV0ubWlkO1xuICAgICAgICB0ID0gYjJbZGltXS5taWQ7XG4gICAgICAgIGQgPSAoYjFbZGltXS5zaXplICsgYjJbZGltXS5zaXplKS8yO1xuICAgICAgICBpZihhYnMobC10KSA+PSBkKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZXhwYW5kYm94OiBmdW5jdGlvbihiYm94LCBfYmJveCkge1xuICAgICAgaWYoX2Jib3gueC5taW4gPCBiYm94LngubWluKSB7IGJib3gueC5taW4gPSBfYmJveC54Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueS5taW4gPCBiYm94LnkubWluKSB7IGJib3gueS5taW4gPSBfYmJveC55Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueiAmJiBfYmJveC56Lm1pbiA8IGJib3guei5taW4pIHsgYmJveC56Lm1pbiA9IF9iYm94LnoubWluOyB9XG4gICAgICBpZihfYmJveC54Lm1heCA+IGJib3gueC5tYXgpIHsgYmJveC54Lm1heCA9IF9iYm94LngubWF4OyB9XG4gICAgICBpZihfYmJveC55Lm1heCA+IGJib3gueS5tYXgpIHsgYmJveC55Lm1heCA9IF9iYm94LnkubWF4OyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWF4ID4gYmJveC56Lm1heCkgeyBiYm94LnoubWF4ID0gX2Jib3guei5tYXg7IH1cbiAgICAgIGJib3gueC5taWQgPSAoYmJveC54Lm1pbiArIGJib3gueC5tYXgpLzI7XG4gICAgICBiYm94LnkubWlkID0gKGJib3gueS5taW4gKyBiYm94LnkubWF4KS8yO1xuICAgICAgaWYoYmJveC56KSB7IGJib3guei5taWQgPSAoYmJveC56Lm1pbiArIGJib3guei5tYXgpLzI7IH1cbiAgICAgIGJib3gueC5zaXplID0gYmJveC54Lm1heCAtIGJib3gueC5taW47XG4gICAgICBiYm94Lnkuc2l6ZSA9IGJib3gueS5tYXggLSBiYm94LnkubWluO1xuICAgICAgaWYoYmJveC56KSB7IGJib3guei5zaXplID0gYmJveC56Lm1heCAtIGJib3guei5taW47IH1cbiAgICB9LFxuXG4gICAgcGFpcml0ZXJhdGlvbjogZnVuY3Rpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIGMxYiA9IGMxLmJib3goKSxcbiAgICAgICAgICBjMmIgPSBjMi5iYm94KCksXG4gICAgICAgICAgciA9IDEwMDAwMCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCB8fCAwLjU7XG4gICAgICBpZihjMWIueC5zaXplICsgYzFiLnkuc2l6ZSA8IHRocmVzaG9sZCAmJiBjMmIueC5zaXplICsgYzJiLnkuc2l6ZSA8IHRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm4gWyAoKHIgKiAoYzEuX3QxK2MxLl90MikvMil8MCkvciArIFwiL1wiICsgKChyICogKGMyLl90MStjMi5fdDIpLzIpfDApL3IgXTtcbiAgICAgIH1cbiAgICAgIHZhciBjYzEgPSBjMS5zcGxpdCgwLjUpLFxuICAgICAgICAgIGNjMiA9IGMyLnNwbGl0KDAuNSksXG4gICAgICAgICAgcGFpcnMgPSBbXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIubGVmdCB9LFxuICAgICAgICAgICAge2xlZnQ6IGNjMS5sZWZ0LCByaWdodDogY2MyLnJpZ2h0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLnJpZ2h0LCByaWdodDogY2MyLnJpZ2h0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLnJpZ2h0LCByaWdodDogY2MyLmxlZnQgfV07XG4gICAgICBwYWlycyA9IHBhaXJzLmZpbHRlcihmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChwYWlyLmxlZnQuYmJveCgpLHBhaXIucmlnaHQuYmJveCgpKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIGlmKHBhaXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlc3VsdHM7XG4gICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KFxuICAgICAgICAgIHV0aWxzLnBhaXJpdGVyYXRpb24ocGFpci5sZWZ0LCBwYWlyLnJpZ2h0LCB0aHJlc2hvbGQpXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKGZ1bmN0aW9uKHYsaSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5pbmRleE9mKHYpID09PSBpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuXG4gICAgZ2V0Y2NlbnRlcjogZnVuY3Rpb24ocDEscDIscDMpIHtcbiAgICAgIHZhciBkeDEgPSAocDIueCAtIHAxLngpLFxuICAgICAgICAgIGR5MSA9IChwMi55IC0gcDEueSksXG4gICAgICAgICAgZHgyID0gKHAzLnggLSBwMi54KSxcbiAgICAgICAgICBkeTIgPSAocDMueSAtIHAyLnkpO1xuICAgICAgdmFyIGR4MXAgPSBkeDEgKiBjb3MocXVhcnQpIC0gZHkxICogc2luKHF1YXJ0KSxcbiAgICAgICAgICBkeTFwID0gZHgxICogc2luKHF1YXJ0KSArIGR5MSAqIGNvcyhxdWFydCksXG4gICAgICAgICAgZHgycCA9IGR4MiAqIGNvcyhxdWFydCkgLSBkeTIgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MnAgPSBkeDIgKiBzaW4ocXVhcnQpICsgZHkyICogY29zKHF1YXJ0KTtcbiAgICAgIC8vIGNob3JkIG1pZHBvaW50c1xuICAgICAgdmFyIG14MSA9IChwMS54ICsgcDIueCkvMixcbiAgICAgICAgICBteTEgPSAocDEueSArIHAyLnkpLzIsXG4gICAgICAgICAgbXgyID0gKHAyLnggKyBwMy54KS8yLFxuICAgICAgICAgIG15MiA9IChwMi55ICsgcDMueSkvMjtcbiAgICAgIC8vIG1pZHBvaW50IG9mZnNldHNcbiAgICAgIHZhciBteDFuID0gbXgxICsgZHgxcCxcbiAgICAgICAgICBteTFuID0gbXkxICsgZHkxcCxcbiAgICAgICAgICBteDJuID0gbXgyICsgZHgycCxcbiAgICAgICAgICBteTJuID0gbXkyICsgZHkycDtcbiAgICAgIC8vIGludGVyc2VjdGlvbiBvZiB0aGVzZSBsaW5lczpcbiAgICAgIHZhciBhcmMgPSB1dGlscy5sbGk4KG14MSxteTEsbXgxbixteTFuLCBteDIsbXkyLG14Mm4sbXkybiksXG4gICAgICAgICAgciA9IHV0aWxzLmRpc3QoYXJjLHAxKSxcbiAgICAgICAgICAvLyBhcmMgc3RhcnQvZW5kIHZhbHVlcywgb3ZlciBtaWQgcG9pbnQ6XG4gICAgICAgICAgcyA9IGF0YW4yKHAxLnkgLSBhcmMueSwgcDEueCAtIGFyYy54KSxcbiAgICAgICAgICBtID0gYXRhbjIocDIueSAtIGFyYy55LCBwMi54IC0gYXJjLngpLFxuICAgICAgICAgIGUgPSBhdGFuMihwMy55IC0gYXJjLnksIHAzLnggLSBhcmMueCksXG4gICAgICAgICAgXztcbiAgICAgIC8vIGRldGVybWluZSBhcmMgZGlyZWN0aW9uIChjdy9jY3cgY29ycmVjdGlvbilcbiAgICAgIGlmIChzPGUpIHtcbiAgICAgICAgLy8gaWYgczxtPGUsIGFyYyhzLCBlKVxuICAgICAgICAvLyBpZiBtPHM8ZSwgYXJjKGUsIHMgKyB0YXUpXG4gICAgICAgIC8vIGlmIHM8ZTxtLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgaWYgKHM+bSB8fCBtPmUpIHsgcyArPSB0YXU7IH1cbiAgICAgICAgaWYgKHM+ZSkgeyBfPWU7IGU9czsgcz1fOyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBlPG08cywgYXJjKGUsIHMpXG4gICAgICAgIC8vIGlmIG08ZTxzLCBhcmMocywgZSArIHRhdSlcbiAgICAgICAgLy8gaWYgZTxzPG0sIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICBpZiAoZTxtICYmIG08cykgeyBfPWU7IGU9czsgcz1fOyB9IGVsc2UgeyBlICs9IHRhdTsgfVxuICAgICAgfVxuICAgICAgLy8gYXNzaWduIGFuZCBkb25lLlxuICAgICAgYXJjLnMgPSBzO1xuICAgICAgYXJjLmUgPSBlO1xuICAgICAgYXJjLnIgPSByO1xuICAgICAgcmV0dXJuIGFyYztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB1dGlscztcbn0oKSk7XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICB2YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbiAgfVxuXG4gIHJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxuICByZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcbn1cblxuaW5pdCgpXG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcbiAgLy8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuICAvLyByZXByZXNlbnQgb25lIGJ5dGVcbiAgLy8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG4gIC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2VcbiAgcGxhY2VIb2xkZXJzID0gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxuXG4gIC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICBhcnIgPSBuZXcgQXJyKGxlbiAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgbCA9IHBsYWNlSG9sZGVycyA+IDAgPyBsZW4gLSA0IDogbGVuXG5cbiAgdmFyIEwgPSAwXG5cbiAgZm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfCByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltMKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICsgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICsgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gKyBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgb3V0cHV0ID0gJydcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDJdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz09J1xuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyAodWludDhbbGVuIC0gMV0pXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMTBdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPSdcbiAgfVxuXG4gIHBhcnRzLnB1c2gob3V0cHV0KVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY2xvbmUgPSByZXF1aXJlKDEyOCk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoMTMxKTtcbnZhciBzdHJpbmcgPSByZXF1aXJlKDEzMyk7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMgPSB7XG5cdFx0cmdiOiBbMCwgMCwgMF0sXG5cdFx0aHNsOiBbMCwgMCwgMF0sXG5cdFx0aHN2OiBbMCwgMCwgMF0sXG5cdFx0aHdiOiBbMCwgMCwgMF0sXG5cdFx0Y215azogWzAsIDAsIDAsIDBdLFxuXHRcdGFscGhhOiAxXG5cdH07XG5cblx0Ly8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuXHR2YXIgdmFscztcblx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG5cdFx0aWYgKHZhbHMpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyArIG9iaiArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdHZhbHMgPSBvYmo7XG5cdFx0aWYgKHZhbHMuciAhPT0gdW5kZWZpbmVkIHx8IHZhbHMucmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMubCAhPT0gdW5kZWZpbmVkIHx8IHZhbHMubGlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudiAhPT0gdW5kZWZpbmVkIHx8IHZhbHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzdicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy53ICE9PSB1bmRlZmluZWQgfHwgdmFscy53aGl0ZW5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5jICE9PSB1bmRlZmluZWQgfHwgdmFscy5jeWFuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdjbXlrJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0cmdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ3JnYicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc2wnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc3Y6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHN2JywgYXJndW1lbnRzKTtcblx0fSxcblx0aHdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2h3YicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGNteWs6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnY215aycsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0cmdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuXHR9LFxuXHRoc2xBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG5cdH0sXG5cdGhzdkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcblx0fSxcblx0aHdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuXHR9LFxuXHRjbXlrQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuY215aztcblx0fSxcblx0cmdiYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHRyZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0aHNsYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcblx0XHRyZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdmFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZWQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAwLCB2YWwpO1xuXHR9LFxuXHRncmVlbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAyLCB2YWwpO1xuXHR9LFxuXHRodWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR2YWwgJT0gMzYwO1xuXHRcdFx0dmFsID0gdmFsIDwgMCA/IDM2MCArIHZhbCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMCwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDEsIHZhbCk7XG5cdH0sXG5cdGxpZ2h0bmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDIsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb252OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMSwgdmFsKTtcblx0fSxcblx0d2hpdGVuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMSwgdmFsKTtcblx0fSxcblx0YmxhY2tuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMiwgdmFsKTtcblx0fSxcblx0dmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAyLCB2YWwpO1xuXHR9LFxuXHRjeWFuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDAsIHZhbCk7XG5cdH0sXG5cdG1hZ2VudGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMSwgdmFsKTtcblx0fSxcblx0eWVsbG93OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDIsIHZhbCk7XG5cdH0sXG5cdGJsYWNrOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDMsIHZhbCk7XG5cdH0sXG5cblx0aGV4U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcblx0fSxcblx0cmdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHJnYmFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRod2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0a2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGRhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0bGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgcmdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdyZXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIFt2YWwsIHZhbCwgdmFsXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xlYXJlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0ICovXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdHZhciBjb2xvcjEgPSB0aGlzO1xuXHRcdHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuXHRcdFx0KVxuXHRcdFx0LmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmdiKCk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY29sID0gbmV3IENvbG9yKCk7XG5cdFx0Y29sLnZhbHVlcyA9IGNsb25lKHRoaXMudmFsdWVzKTtcblx0XHRyZXR1cm4gY29sO1xuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cdHZhciB2YWxzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcblx0fVxuXG5cdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdHZhbHMuYSA9IHRoaXMudmFsdWVzLmFscGhhO1xuXHR9XG5cblx0Ly8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cblx0cmV0dXJuIHZhbHM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlLCB2YWxzKSB7XG5cdHZhciBzcGFjZXMgPSB7XG5cdFx0cmdiOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG5cdFx0aHNsOiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcyddLFxuXHRcdGhzdjogWydodWUnLCAnc2F0dXJhdGlvbicsICd2YWx1ZSddLFxuXHRcdGh3YjogWydodWUnLCAnd2hpdGVuZXNzJywgJ2JsYWNrbmVzcyddLFxuXHRcdGNteWs6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddXG5cdH07XG5cblx0dmFyIG1heGVzID0ge1xuXHRcdHJnYjogWzI1NSwgMjU1LCAyNTVdLFxuXHRcdGhzbDogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGhzdjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGh3YjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGNteWs6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG5cdH07XG5cblx0dmFyIGk7XG5cdHZhciBhbHBoYSA9IDE7XG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdGFscGhhID0gdmFscztcblx0fSBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuXHRcdC8vIFsxMCwgMTAsIDEwXVxuXHRcdHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcblx0XHRhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuXHRcdHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hbHBoYTtcblx0fVxuXG5cdHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhID09PSB1bmRlZmluZWQgPyB0aGlzLnZhbHVlcy5hbHBoYSA6IGFscGhhKSkpO1xuXG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBjYXBwZWQ7XG5cblx0Ly8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG5cdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHR9XG5cblx0Ly8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuXHRmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcblx0XHRpZiAoc25hbWUgIT09IHNwYWNlKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKTtcblx0XHR9XG5cblx0XHQvLyBjYXAgdmFsdWVzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlLCBhcmdzKSB7XG5cdHZhciB2YWxzID0gYXJnc1swXTtcblxuXHRpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmdiKClcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuXHR9XG5cblx0Ly8gY29sb3IucmdiKDEwLCAxMCwgMTApXG5cdGlmICh0eXBlb2YgdmFscyA9PT0gJ251bWJlcicpIHtcblx0XHR2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cdH1cblxuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbiAoc3BhY2UsIGluZGV4LCB2YWwpIHtcblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmVkKClcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcblx0fSBlbHNlIGlmICh2YWwgPT09IHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0pIHtcblx0XHQvLyBjb2xvci5yZWQoY29sb3IucmVkKCkpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBjb2xvci5yZWQoMTAwKVxuXHR0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJ2YXIgY2xvbmUgPSAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xvbmVzIChjb3BpZXMpIGFuIE9iamVjdCB1c2luZyBkZWVwIGNvcHlpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3UgYXJlIGNlcnRhaW5cbiAqIHRoZXJlIGFyZSBubyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgb2JqZWN0LCB5b3UgY2FuIHNhdmUgc29tZSBDUFUgdGltZVxuICogYnkgY2FsbGluZyBjbG9uZShvYmosIGZhbHNlKS5cbiAqXG4gKiBDYXV0aW9uOiBpZiBgY2lyY3VsYXJgIGlzIGZhbHNlIGFuZCBgcGFyZW50YCBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzLFxuICogeW91ciBwcm9ncmFtIG1heSBlbnRlciBhbiBpbmZpbml0ZSBsb29wIGFuZCBjcmFzaC5cbiAqXG4gKiBAcGFyYW0gYHBhcmVudGAgLSB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHBhcmFtIGBjaXJjdWxhcmAgLSBzZXQgdG8gdHJ1ZSBpZiB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZCBtYXkgY29udGFpblxuICogICAgY2lyY3VsYXIgcmVmZXJlbmNlcy4gKG9wdGlvbmFsIC0gdHJ1ZSBieSBkZWZhdWx0KVxuICogQHBhcmFtIGBkZXB0aGAgLSBzZXQgdG8gYSBudW1iZXIgaWYgdGhlIG9iamVjdCBpcyBvbmx5IHRvIGJlIGNsb25lZCB0b1xuICogICAgYSBwYXJ0aWN1bGFyIGRlcHRoLiAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBJbmZpbml0eSlcbiAqIEBwYXJhbSBgcHJvdG90eXBlYCAtIHNldHMgdGhlIHByb3RvdHlwZSB0byBiZSB1c2VkIHdoZW4gY2xvbmluZyBhbiBvYmplY3QuXG4gKiAgICAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBwYXJlbnQgcHJvdG90eXBlKS5cbiovXG5mdW5jdGlvbiBjbG9uZShwYXJlbnQsIGNpcmN1bGFyLCBkZXB0aCwgcHJvdG90eXBlKSB7XG4gIHZhciBmaWx0ZXI7XG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT09ICdvYmplY3QnKSB7XG4gICAgZGVwdGggPSBjaXJjdWxhci5kZXB0aDtcbiAgICBwcm90b3R5cGUgPSBjaXJjdWxhci5wcm90b3R5cGU7XG4gICAgZmlsdGVyID0gY2lyY3VsYXIuZmlsdGVyO1xuICAgIGNpcmN1bGFyID0gY2lyY3VsYXIuY2lyY3VsYXJcbiAgfVxuICAvLyBtYWludGFpbiB0d28gYXJyYXlzIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLCB3aGVyZSBjb3JyZXNwb25kaW5nIHBhcmVudHNcbiAgLy8gYW5kIGNoaWxkcmVuIGhhdmUgdGhlIHNhbWUgaW5kZXhcbiAgdmFyIGFsbFBhcmVudHMgPSBbXTtcbiAgdmFyIGFsbENoaWxkcmVuID0gW107XG5cbiAgdmFyIHVzZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PSAndW5kZWZpbmVkJylcbiAgICBjaXJjdWxhciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBkZXB0aCA9PSAndW5kZWZpbmVkJylcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuXG4gIC8vIHJlY3Vyc2UgdGhpcyBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNldCBhbGxQYXJlbnRzIGFuZCBhbGxDaGlsZHJlblxuICBmdW5jdGlvbiBfY2xvbmUocGFyZW50LCBkZXB0aCkge1xuICAgIC8vIGNsb25pbmcgbnVsbCBhbHdheXMgcmV0dXJucyBudWxsXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlcHRoID09IDApXG4gICAgICByZXR1cm4gcGFyZW50O1xuXG4gICAgdmFyIGNoaWxkO1xuICAgIHZhciBwcm90bztcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmUuX19pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gW107XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzUmVnRXhwKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IFJlZ0V4cChwYXJlbnQuc291cmNlLCBfX2dldFJlZ0V4cEZsYWdzKHBhcmVudCkpO1xuICAgICAgaWYgKHBhcmVudC5sYXN0SW5kZXgpIGNoaWxkLmxhc3RJbmRleCA9IHBhcmVudC5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzRGF0ZShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBEYXRlKHBhcmVudC5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBCdWZmZXIocGFyZW50Lmxlbmd0aCk7XG4gICAgICBwYXJlbnQuY29weShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3RvID0gcHJvdG90eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgdmFyIGluZGV4ID0gYWxsUGFyZW50cy5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW5baW5kZXhdO1xuICAgICAgfVxuICAgICAgYWxsUGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICBhbGxDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmVudCkge1xuICAgICAgdmFyIGF0dHJzO1xuICAgICAgaWYgKHByb3RvKSB7XG4gICAgICAgIGF0dHJzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRycyAmJiBhdHRycy5zZXQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNoaWxkW2ldID0gX2Nsb25lKHBhcmVudFtpXSwgZGVwdGggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICByZXR1cm4gX2Nsb25lKHBhcmVudCwgZGVwdGgpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBmbGF0IGNsb25lIHVzaW5nIHByb3RvdHlwZSwgYWNjZXB0cyBvbmx5IG9iamVjdHMsIHVzZWZ1bGwgZm9yIHByb3BlcnR5XG4gKiBvdmVycmlkZSBvbiBGTEFUIGNvbmZpZ3VyYXRpb24gb2JqZWN0IChubyBuZXN0ZWQgcHJvcHMpLlxuICpcbiAqIFVTRSBXSVRIIENBVVRJT04hIFRoaXMgbWF5IG5vdCBiZWhhdmUgYXMgeW91IHdpc2ggaWYgeW91IGRvIG5vdCBrbm93IGhvdyB0aGlzXG4gKiB3b3Jrcy5cbiAqL1xuY2xvbmUuY2xvbmVQcm90b3R5cGUgPSBmdW5jdGlvbiBjbG9uZVByb3RvdHlwZShwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgYyA9IGZ1bmN0aW9uICgpIHt9O1xuICBjLnByb3RvdHlwZSA9IHBhcmVudDtcbiAgcmV0dXJuIG5ldyBjKCk7XG59O1xuXG4vLyBwcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIF9fb2JqVG9TdHIobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufTtcbmNsb25lLl9fb2JqVG9TdHIgPSBfX29ialRvU3RyO1xuXG5mdW5jdGlvbiBfX2lzRGF0ZShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcbmNsb25lLl9faXNEYXRlID0gX19pc0RhdGU7XG5cbmZ1bmN0aW9uIF9faXNBcnJheShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5jbG9uZS5fX2lzQXJyYXkgPSBfX2lzQXJyYXk7XG5cbmZ1bmN0aW9uIF9faXNSZWdFeHAobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbmNsb25lLl9faXNSZWdFeHAgPSBfX2lzUmVnRXhwO1xuXG5mdW5jdGlvbiBfX2dldFJlZ0V4cEZsYWdzKHJlKSB7XG4gIHZhciBmbGFncyA9ICcnO1xuICBpZiAocmUuZ2xvYmFsKSBmbGFncyArPSAnZyc7XG4gIGlmIChyZS5pZ25vcmVDYXNlKSBmbGFncyArPSAnaSc7XG4gIGlmIChyZS5tdWx0aWxpbmUpIGZsYWdzICs9ICdtJztcbiAgcmV0dXJuIGZsYWdzO1xufTtcbmNsb25lLl9fZ2V0UmVnRXhwRmxhZ3MgPSBfX2dldFJlZ0V4cEZsYWdzO1xuXG5yZXR1cm4gY2xvbmU7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKDEzMCk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldLmpvaW4oKV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDN9LFxuXHRoc2w6IHtjaGFubmVsczogM30sXG5cdGhzdjoge2NoYW5uZWxzOiAzfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDN9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDR9LFxuXHR4eXo6IHtjaGFubmVsczogM30sXG5cdGxhYjoge2NoYW5uZWxzOiAzfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDN9LFxuXHRoZXg6IHtjaGFubmVsczogMX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDN9LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgcHJvcGVydHlcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIHY7XG5cblx0aWYgKG1heCA9PT0gMCkge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSAoZGVsdGEgLyBtYXggKiAxMDAwKSAvIDEwO1xuXHR9XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHR2ID0gKChtYXggLyAyNTUpICogMTAwMCkgLyAxMDtcblxuXHRyZXR1cm4gW2gsIHMsIHZdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiByZXZlcnNlS2V5d29yZHNbcmdiLmpvaW4oKV07XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn0vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChtYXRjaFswXSwgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTVdLFxuXHRhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1XSxcblx0YXF1YTogWzAsIDI1NSwgMjU1XSxcblx0YXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTJdLFxuXHRhenVyZTogWzI0MCwgMjU1LCAyNTVdLFxuXHRiZWlnZTogWzI0NSwgMjQ1LCAyMjBdLFxuXHRiaXNxdWU6IFsyNTUsIDIyOCwgMTk2XSxcblx0YmxhY2s6IFswLCAwLCAwXSxcblx0YmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1XSxcblx0Ymx1ZTogWzAsIDAsIDI1NV0sXG5cdGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjZdLFxuXHRicm93bjogWzE2NSwgNDIsIDQyXSxcblx0YnVybHl3b29kOiBbMjIyLCAxODQsIDEzNV0sXG5cdGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MF0sXG5cdGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMF0sXG5cdGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMF0sXG5cdGNvcmFsOiBbMjU1LCAxMjcsIDgwXSxcblx0Y29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3XSxcblx0Y29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwXSxcblx0Y3JpbXNvbjogWzIyMCwgMjAsIDYwXSxcblx0Y3lhbjogWzAsIDI1NSwgMjU1XSxcblx0ZGFya2JsdWU6IFswLCAwLCAxMzldLFxuXHRkYXJrY3lhbjogWzAsIDEzOSwgMTM5XSxcblx0ZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMV0sXG5cdGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtncmVlbjogWzAsIDEwMCwgMF0sXG5cdGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDddLFxuXHRkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5XSxcblx0ZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0N10sXG5cdGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMF0sXG5cdGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDRdLFxuXHRkYXJrcmVkOiBbMTM5LCAwLCAwXSxcblx0ZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjJdLFxuXHRkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzXSxcblx0ZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5XSxcblx0ZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOV0sXG5cdGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMV0sXG5cdGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3XSxcblx0ZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NV0sXG5cdGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZGltZ3JleTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1XSxcblx0ZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzRdLFxuXHRmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDBdLFxuXHRmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0XSxcblx0ZnVjaHNpYTogWzI1NSwgMCwgMjU1XSxcblx0Z2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMF0sXG5cdGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1XSxcblx0Z29sZDogWzI1NSwgMjE1LCAwXSxcblx0Z29sZGVucm9kOiBbMjE4LCAxNjUsIDMyXSxcblx0Z3JheTogWzEyOCwgMTI4LCAxMjhdLFxuXHRncmVlbjogWzAsIDEyOCwgMF0sXG5cdGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3XSxcblx0Z3JleTogWzEyOCwgMTI4LCAxMjhdLFxuXHRob25leWRldzogWzI0MCwgMjU1LCAyNDBdLFxuXHRob3RwaW5rOiBbMjU1LCAxMDUsIDE4MF0sXG5cdGluZGlhbnJlZDogWzIwNSwgOTIsIDkyXSxcblx0aW5kaWdvOiBbNzUsIDAsIDEzMF0sXG5cdGl2b3J5OiBbMjU1LCAyNTUsIDI0MF0sXG5cdGtoYWtpOiBbMjQwLCAyMzAsIDE0MF0sXG5cdGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MF0sXG5cdGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1XSxcblx0bGF3bmdyZWVuOiBbMTI0LCAyNTIsIDBdLFxuXHRsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1XSxcblx0bGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMF0sXG5cdGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4XSxcblx0bGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NV0sXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMF0sXG5cdGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NF0sXG5cdGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzXSxcblx0bGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyXSxcblx0bGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MF0sXG5cdGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTBdLFxuXHRsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjJdLFxuXHRsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjRdLFxuXHRsaW1lOiBbMCwgMjU1LCAwXSxcblx0bGltZWdyZWVuOiBbNTAsIDIwNSwgNTBdLFxuXHRsaW5lbjogWzI1MCwgMjQwLCAyMzBdLFxuXHRtYWdlbnRhOiBbMjU1LCAwLCAyNTVdLFxuXHRtYXJvb246IFsxMjgsIDAsIDBdLFxuXHRtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MF0sXG5cdG1lZGl1bWJsdWU6IFswLCAwLCAyMDVdLFxuXHRtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTFdLFxuXHRtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5XSxcblx0bWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTNdLFxuXHRtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4XSxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NF0sXG5cdG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNF0sXG5cdG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzM10sXG5cdG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyXSxcblx0bWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MF0sXG5cdG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjVdLFxuXHRtb2NjYXNpbjogWzI1NSwgMjI4LCAxODFdLFxuXHRuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzNdLFxuXHRuYXZ5OiBbMCwgMCwgMTI4XSxcblx0b2xkbGFjZTogWzI1MywgMjQ1LCAyMzBdLFxuXHRvbGl2ZTogWzEyOCwgMTI4LCAwXSxcblx0b2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1XSxcblx0b3JhbmdlOiBbMjU1LCAxNjUsIDBdLFxuXHRvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwXSxcblx0b3JjaGlkOiBbMjE4LCAxMTIsIDIxNF0sXG5cdHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwXSxcblx0cGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1Ml0sXG5cdHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4XSxcblx0cGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDddLFxuXHRwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxM10sXG5cdHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODVdLFxuXHRwZXJ1OiBbMjA1LCAxMzMsIDYzXSxcblx0cGluazogWzI1NSwgMTkyLCAyMDNdLFxuXHRwbHVtOiBbMjIxLCAxNjAsIDIyMV0sXG5cdHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwXSxcblx0cHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuXHRyZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzXSxcblx0cmVkOiBbMjU1LCAwLCAwXSxcblx0cm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0M10sXG5cdHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNV0sXG5cdHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTldLFxuXHRzYWxtb246IFsyNTAsIDEyOCwgMTE0XSxcblx0c2FuZHlicm93bjogWzI0NCwgMTY0LCA5Nl0sXG5cdHNlYWdyZWVuOiBbNDYsIDEzOSwgODddLFxuXHRzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzhdLFxuXHRzaWVubmE6IFsxNjAsIDgyLCA0NV0sXG5cdHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuXHRza3libHVlOiBbMTM1LCAyMDYsIDIzNV0sXG5cdHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNV0sXG5cdHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c25vdzogWzI1NSwgMjUwLCAyNTBdLFxuXHRzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3XSxcblx0c3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwXSxcblx0dGFuOiBbMjEwLCAxODAsIDE0MF0sXG5cdHRlYWw6IFswLCAxMjgsIDEyOF0sXG5cdHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2XSxcblx0dG9tYXRvOiBbMjU1LCA5OSwgNzFdLFxuXHR0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDhdLFxuXHR2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4XSxcblx0d2hlYXQ6IFsyNDUsIDIyMiwgMTc5XSxcblx0d2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcblx0d2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDVdLFxuXHR5ZWxsb3c6IFsyNTUsIDI1NSwgMF0sXG5cdHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwXVxufTtcblxuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgxMjkpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgxMzIpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKDEyOSk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKDEzNCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgZ2V0UmdiYTogZ2V0UmdiYSxcbiAgIGdldEhzbGE6IGdldEhzbGEsXG4gICBnZXRSZ2I6IGdldFJnYixcbiAgIGdldEhzbDogZ2V0SHNsLFxuICAgZ2V0SHdiOiBnZXRId2IsXG4gICBnZXRBbHBoYTogZ2V0QWxwaGEsXG5cbiAgIGhleFN0cmluZzogaGV4U3RyaW5nLFxuICAgcmdiU3RyaW5nOiByZ2JTdHJpbmcsXG4gICByZ2JhU3RyaW5nOiByZ2JhU3RyaW5nLFxuICAgcGVyY2VudFN0cmluZzogcGVyY2VudFN0cmluZyxcbiAgIHBlcmNlbnRhU3RyaW5nOiBwZXJjZW50YVN0cmluZyxcbiAgIGhzbFN0cmluZzogaHNsU3RyaW5nLFxuICAgaHNsYVN0cmluZzogaHNsYVN0cmluZyxcbiAgIGh3YlN0cmluZzogaHdiU3RyaW5nLFxuICAga2V5d29yZDoga2V5d29yZFxufVxuXG5mdW5jdGlvbiBnZXRSZ2JhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBhYmJyID0gIC9eIyhbYS1mQS1GMC05XXszfSkkLyxcbiAgICAgICBoZXggPSAgL14jKFthLWZBLUYwLTldezZ9KSQvLFxuICAgICAgIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBrZXl3b3JkID0gLyhcXEQrKS87XG5cbiAgIHZhciByZ2IgPSBbMCwgMCwgMF0sXG4gICAgICAgYSA9IDEsXG4gICAgICAgbWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpICogMiwgaSAqIDIgKyAyKSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0pO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuICAgICAgaWYgKG1hdGNoWzFdID09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cbiAgICAgIHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuICAgICAgaWYgKCFyZ2IpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJnYltpXSA9IHNjYWxlKHJnYltpXSwgMCwgMjU1KTtcbiAgIH1cbiAgIGlmICghYSAmJiBhICE9IDApIHtcbiAgICAgIGEgPSAxO1xuICAgfVxuICAgZWxzZSB7XG4gICAgICBhID0gc2NhbGUoYSwgMCwgMSk7XG4gICB9XG4gICByZ2JbM10gPSBhO1xuICAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgcyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGwgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgcywgbCwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldEh3YihzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICB3ID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgYiA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCB3LCBiLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmdiKHN0cmluZykge1xuICAgdmFyIHJnYmEgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICByZXR1cm4gcmdiYSAmJiByZ2JhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRIc2woc3RyaW5nKSB7XG4gIHZhciBoc2xhID0gZ2V0SHNsYShzdHJpbmcpO1xuICByZXR1cm4gaHNsYSAmJiBoc2xhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRBbHBoYShzdHJpbmcpIHtcbiAgIHZhciB2YWxzID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgaWYgKHZhbHMpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEhzbGEoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHdiKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxufVxuXG4vLyBnZW5lcmF0b3JzXG5mdW5jdGlvbiBoZXhTdHJpbmcocmdiKSB7XG4gICByZXR1cm4gXCIjXCIgKyBoZXhEb3VibGUocmdiWzBdKSArIGhleERvdWJsZShyZ2JbMV0pXG4gICAgICAgICAgICAgICsgaGV4RG91YmxlKHJnYlsyXSk7XG59XG5cbmZ1bmN0aW9uIHJnYlN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYihcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAocmdiYVszXSAhPT0gdW5kZWZpbmVkID8gcmdiYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiYShcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXVxuICAgICAgICAgICArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuXG4gICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcbiAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSwgXCIgKyAoYWxwaGEgfHwgcmdiYVszXSB8fCAxKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKGhzbGFbM10gJiYgaHNsYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2woXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHNsYVszXSAhPT0gdW5kZWZpbmVkID8gaHNsYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsYShcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUsIFwiXG4gICAgICAgICAgICsgYWxwaGEgKyBcIilcIjtcbn1cblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmZ1bmN0aW9uIGh3YlN0cmluZyhod2IsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHdiWzNdICE9PSB1bmRlZmluZWQgPyBod2JbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImh3YihcIiArIGh3YlswXSArIFwiLCBcIiArIGh3YlsxXSArIFwiJSwgXCIgKyBod2JbMl0gKyBcIiVcIlxuICAgICAgICAgICArIChhbHBoYSAhPT0gdW5kZWZpbmVkICYmIGFscGhhICE9PSAxID8gXCIsIFwiICsgYWxwaGEgOiBcIlwiKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkKHJnYikge1xuICByZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIHNjYWxlKG51bSwgbWluLCBtYXgpIHtcbiAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcbiAgdmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyBcIjBcIiArIHN0ciA6IHN0cjtcbn1cblxuXG4vL2NyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG4gICByZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIi8vIHJhbmRvbUNvbG9yIGJ5IERhdmlkIE1lcmZpZWxkIHVuZGVyIHRoZSBDQzAgbGljZW5zZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkbWVyZmllbGQvcmFuZG9tQ29sb3IvXG5cbjsoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gIC8vIFN1cHBvcnQgQU1EXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuXG4gIC8vIFN1cHBvcnQgQ29tbW9uSlNcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG5cbiAgICAvLyBTdXBwb3J0IE5vZGVKUyAmIENvbXBvbmVudCwgd2hpY2ggYWxsb3cgbW9kdWxlLmV4cG9ydHMgdG8gYmUgYSBmdW5jdGlvblxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgQ29tbW9uSlMgMS4xLjEgc3BlY1xuICAgIGV4cG9ydHMucmFuZG9tQ29sb3IgPSByYW5kb21Db2xvcjtcblxuICAvLyBTdXBwb3J0IHZhbmlsbGEgc2NyaXB0IGxvYWRpbmdcbiAgfSBlbHNlIHtcbiAgICByb290LnJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgLy8gU2VlZCB0byBnZXQgcmVwZWF0YWJsZSBjb2xvcnNcbiAgdmFyIHNlZWQgPSBudWxsO1xuXG4gIC8vIFNoYXJlZCBjb2xvciBkaWN0aW9uYXJ5XG4gIHZhciBjb2xvckRpY3Rpb25hcnkgPSB7fTtcblxuICAvLyBQb3B1bGF0ZSB0aGUgY29sb3IgZGljdGlvbmFyeVxuICBsb2FkQ29sb3JCb3VuZHMoKTtcblxuICB2YXIgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNlZWQgYW5kIGVuc3VyZSBpdCdzIGFuXG4gICAgLy8gaW50ZWdlci4gT3RoZXJ3aXNlLCByZXNldCB0aGUgc2VlZCB2YWx1ZS5cbiAgICBpZiAob3B0aW9ucy5zZWVkICYmIG9wdGlvbnMuc2VlZCA9PT0gcGFyc2VJbnQob3B0aW9ucy5zZWVkLCAxMCkpIHtcbiAgICAgIHNlZWQgPSBvcHRpb25zLnNlZWQ7XG5cbiAgICAvLyBBIHN0cmluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuc2VlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlZWQgPSBzdHJpbmdUb0ludGVnZXIob3B0aW9ucy5zZWVkKTtcblxuICAgIC8vIFNvbWV0aGluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZCBidXQgaXQgd2Fzbid0IGFuIGludGVnZXIgb3Igc3RyaW5nXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlZWQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNlZWQgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzZWVkIHZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciBvciBzdHJpbmcnKTtcblxuICAgIC8vIE5vIHNlZWQsIHJlc2V0IHRoZSB2YWx1ZSBvdXRzaWRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgSCxTLEI7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGdlbmVyYXRlIG11bHRpcGxlIGNvbG9yc1xuICAgIGlmIChvcHRpb25zLmNvdW50ICE9PSBudWxsICYmIG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICB2YXIgdG90YWxDb2xvcnMgPSBvcHRpb25zLmNvdW50LFxuICAgICAgICAgIGNvbG9ycyA9IFtdO1xuXG4gICAgICBvcHRpb25zLmNvdW50ID0gbnVsbDtcblxuICAgICAgd2hpbGUgKHRvdGFsQ29sb3JzID4gY29sb3JzLmxlbmd0aCkge1xuXG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdlbmVyYXRpbmcgbXVsdGlwbGUgY29sb3JzLFxuICAgICAgICAvLyBpbmNyZW1lbWVudCB0aGUgc2VlZC4gT3RoZXJ3aXNlIHdlJ2QganVzdFxuICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgc2FtZSBjb2xvciBlYWNoIHRpbWUuLi5cbiAgICAgICAgaWYgKHNlZWQgJiYgb3B0aW9ucy5zZWVkKSBvcHRpb25zLnNlZWQgKz0gMTtcblxuICAgICAgICBjb2xvcnMucHVzaChyYW5kb21Db2xvcihvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuY291bnQgPSB0b3RhbENvbG9ycztcblxuICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBwaWNrIGEgaHVlIChIKVxuICAgIEggPSBwaWNrSHVlKG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgSCB0byBkZXRlcm1pbmUgc2F0dXJhdGlvbiAoUylcbiAgICBTID0gcGlja1NhdHVyYXRpb24oSCwgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHVzZSBTIGFuZCBIIHRvIGRldGVybWluZSBicmlnaHRuZXNzIChCKS5cbiAgICBCID0gcGlja0JyaWdodG5lc3MoSCwgUywgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHdlIHJldHVybiB0aGUgSFNCIGNvbG9yIGluIHRoZSBkZXNpcmVkIGZvcm1hdFxuICAgIHJldHVybiBzZXRGb3JtYXQoW0gsUyxCXSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGlja0h1ZSAob3B0aW9ucykge1xuXG4gICAgdmFyIGh1ZVJhbmdlID0gZ2V0SHVlUmFuZ2Uob3B0aW9ucy5odWUpLFxuICAgICAgICBodWUgPSByYW5kb21XaXRoaW4oaHVlUmFuZ2UpO1xuXG4gICAgLy8gSW5zdGVhZCBvZiBzdG9yaW5nIHJlZCBhcyB0d28gc2VwZXJhdGUgcmFuZ2VzLFxuICAgIC8vIHdlIGdyb3VwIHRoZW0sIHVzaW5nIG5lZ2F0aXZlIG51bWJlcnNcbiAgICBpZiAoaHVlIDwgMCkge2h1ZSA9IDM2MCArIGh1ZTt9XG5cbiAgICByZXR1cm4gaHVlO1xuXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrU2F0dXJhdGlvbiAoaHVlLCBvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9ucy5sdW1pbm9zaXR5ID09PSAncmFuZG9tJykge1xuICAgICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbMCwxMDBdKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5odWUgPT09ICdtb25vY2hyb21lJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIHNhdHVyYXRpb25SYW5nZSA9IGdldFNhdHVyYXRpb25SYW5nZShodWUpO1xuXG4gICAgdmFyIHNNaW4gPSBzYXR1cmF0aW9uUmFuZ2VbMF0sXG4gICAgICAgIHNNYXggPSBzYXR1cmF0aW9uUmFuZ2VbMV07XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdicmlnaHQnOlxuICAgICAgICBzTWluID0gNTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgc01pbiA9IHNNYXggLSAxMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgc01heCA9IDU1O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiByYW5kb21XaXRoaW4oW3NNaW4sIHNNYXhdKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja0JyaWdodG5lc3MgKEgsIFMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBiTWluID0gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUyksXG4gICAgICAgIGJNYXggPSAxMDA7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgYk1heCA9IGJNaW4gKyAyMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgYk1pbiA9IChiTWF4ICsgYk1pbikvMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgIGJNaW4gPSAwO1xuICAgICAgICBiTWF4ID0gMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtiTWluLCBiTWF4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtYXQgKGhzdiwgb3B0aW9ucykge1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmZvcm1hdCkge1xuXG4gICAgICBjYXNlICdoc3ZBcnJheSc6XG4gICAgICAgIHJldHVybiBoc3Y7XG5cbiAgICAgIGNhc2UgJ2hzbEFycmF5JzpcbiAgICAgICAgcmV0dXJuIEhTVnRvSFNMKGhzdik7XG5cbiAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgIHZhciBoc2wgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbCgnK2hzbFswXSsnLCAnK2hzbFsxXSsnJSwgJytoc2xbMl0rJyUpJztcblxuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIHZhciBoc2xDb2xvciA9IEhTVnRvSFNMKGhzdik7XG4gICAgICAgIHJldHVybiAnaHNsYSgnK2hzbENvbG9yWzBdKycsICcraHNsQ29sb3JbMV0rJyUsICcraHNsQ29sb3JbMl0rJyUsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b1JHQihoc3YpO1xuXG4gICAgICBjYXNlICdyZ2InOlxuICAgICAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYi5qb2luKCcsICcpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JhJzpcbiAgICAgICAgdmFyIHJnYkNvbG9yID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JDb2xvci5qb2luKCcsICcpICsgJywgJyArIE1hdGgucmFuZG9tKCkgKyAnKSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBIU1Z0b0hleChoc3YpO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUykge1xuXG4gICAgdmFyIGxvd2VyQm91bmRzID0gZ2V0Q29sb3JJbmZvKEgpLmxvd2VyQm91bmRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb3dlckJvdW5kcy5sZW5ndGggLSAxOyBpKyspIHtcblxuICAgICAgdmFyIHMxID0gbG93ZXJCb3VuZHNbaV1bMF0sXG4gICAgICAgICAgdjEgPSBsb3dlckJvdW5kc1tpXVsxXTtcblxuICAgICAgdmFyIHMyID0gbG93ZXJCb3VuZHNbaSsxXVswXSxcbiAgICAgICAgICB2MiA9IGxvd2VyQm91bmRzW2krMV1bMV07XG5cbiAgICAgIGlmIChTID49IHMxICYmIFMgPD0gczIpIHtcblxuICAgICAgICAgdmFyIG0gPSAodjIgLSB2MSkvKHMyIC0gczEpLFxuICAgICAgICAgICAgIGIgPSB2MSAtIG0qczE7XG5cbiAgICAgICAgIHJldHVybiBtKlMgKyBiO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIdWVSYW5nZSAoY29sb3JJbnB1dCkge1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZUludChjb2xvcklucHV0KSA9PT0gJ251bWJlcicpIHtcblxuICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KGNvbG9ySW5wdXQpO1xuXG4gICAgICBpZiAobnVtYmVyIDwgMzYwICYmIG51bWJlciA+IDApIHtcbiAgICAgICAgcmV0dXJuIFtudW1iZXIsIG51bWJlcl07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9ySW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgIGlmIChjb2xvckRpY3Rpb25hcnlbY29sb3JJbnB1dF0pIHtcbiAgICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdO1xuICAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UpIHtyZXR1cm4gY29sb3IuaHVlUmFuZ2U7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbMCwzNjBdO1xuXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXR1cmF0aW9uUmFuZ2UgKGh1ZSkge1xuICAgIHJldHVybiBnZXRDb2xvckluZm8oaHVlKS5zYXR1cmF0aW9uUmFuZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb2xvckluZm8gKGh1ZSkge1xuXG4gICAgLy8gTWFwcyByZWQgY29sb3JzIHRvIG1ha2UgcGlja2luZyBodWUgZWFzaWVyXG4gICAgaWYgKGh1ZSA+PSAzMzQgJiYgaHVlIDw9IDM2MCkge1xuICAgICAgaHVlLT0gMzYwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNvbG9yTmFtZSBpbiBjb2xvckRpY3Rpb25hcnkpIHtcbiAgICAgICB2YXIgY29sb3IgPSBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UgJiZcbiAgICAgICAgICAgaHVlID49IGNvbG9yLmh1ZVJhbmdlWzBdICYmXG4gICAgICAgICAgIGh1ZSA8PSBjb2xvci5odWVSYW5nZVsxXSkge1xuICAgICAgICAgIHJldHVybiBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICB9XG4gICAgfSByZXR1cm4gJ0NvbG9yIG5vdCBmb3VuZCc7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21XaXRoaW4gKHJhbmdlKSB7XG4gICAgaWYgKHNlZWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmdlWzBdICsgTWF0aC5yYW5kb20oKSoocmFuZ2VbMV0gKyAxIC0gcmFuZ2VbMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9TZWVkZWQgcmFuZG9tIGFsZ29yaXRobSBmcm9tIGh0dHA6Ly9pbmRpZWdhbXIuY29tL2dlbmVyYXRlLXJlcGVhdGFibGUtcmFuZG9tLW51bWJlcnMtaW4tanMvXG4gICAgICB2YXIgbWF4ID0gcmFuZ2VbMV0gfHwgMTtcbiAgICAgIHZhciBtaW4gPSByYW5nZVswXSB8fCAwO1xuICAgICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgIHZhciBybmQgPSBzZWVkIC8gMjMzMjgwLjA7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBybmQgKiAobWF4IC0gbWluKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IZXggKGhzdil7XG5cbiAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gJzAnICsgaGV4IDogaGV4O1xuICAgIH1cblxuICAgIHZhciBoZXggPSAnIycgKyBjb21wb25lbnRUb0hleChyZ2JbMF0pICsgY29tcG9uZW50VG9IZXgocmdiWzFdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsyXSk7XG5cbiAgICByZXR1cm4gaGV4O1xuXG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVDb2xvciAobmFtZSwgaHVlUmFuZ2UsIGxvd2VyQm91bmRzKSB7XG5cbiAgICB2YXIgc01pbiA9IGxvd2VyQm91bmRzWzBdWzBdLFxuICAgICAgICBzTWF4ID0gbG93ZXJCb3VuZHNbbG93ZXJCb3VuZHMubGVuZ3RoIC0gMV1bMF0sXG5cbiAgICAgICAgYk1pbiA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzFdLFxuICAgICAgICBiTWF4ID0gbG93ZXJCb3VuZHNbMF1bMV07XG5cbiAgICBjb2xvckRpY3Rpb25hcnlbbmFtZV0gPSB7XG4gICAgICBodWVSYW5nZTogaHVlUmFuZ2UsXG4gICAgICBsb3dlckJvdW5kczogbG93ZXJCb3VuZHMsXG4gICAgICBzYXR1cmF0aW9uUmFuZ2U6IFtzTWluLCBzTWF4XSxcbiAgICAgIGJyaWdodG5lc3NSYW5nZTogW2JNaW4sIGJNYXhdXG4gICAgfTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZENvbG9yQm91bmRzICgpIHtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgbnVsbCxcbiAgICAgIFtbMCwwXSxbMTAwLDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdyZWQnLFxuICAgICAgWy0yNiwxOF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkyXSxbNDAsODldLFs1MCw4NV0sWzYwLDc4XSxbNzAsNzBdLFs4MCw2MF0sWzkwLDU1XSxbMTAwLDUwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnb3JhbmdlJyxcbiAgICAgIFsxOSw0Nl0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkzXSxbNDAsODhdLFs1MCw4Nl0sWzYwLDg1XSxbNzAsNzBdLFsxMDAsNzBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICd5ZWxsb3cnLFxuICAgICAgWzQ3LDYyXSxcbiAgICAgIFtbMjUsMTAwXSxbNDAsOTRdLFs1MCw4OV0sWzYwLDg2XSxbNzAsODRdLFs4MCw4Ml0sWzkwLDgwXSxbMTAwLDc1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnZ3JlZW4nLFxuICAgICAgWzYzLDE3OF0sXG4gICAgICBbWzMwLDEwMF0sWzQwLDkwXSxbNTAsODVdLFs2MCw4MV0sWzcwLDc0XSxbODAsNjRdLFs5MCw1MF0sWzEwMCw0MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2JsdWUnLFxuICAgICAgWzE3OSwgMjU3XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODZdLFs0MCw4MF0sWzUwLDc0XSxbNjAsNjBdLFs3MCw1Ml0sWzgwLDQ0XSxbOTAsMzldLFsxMDAsMzVdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwdXJwbGUnLFxuICAgICAgWzI1OCwgMjgyXSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODddLFs0MCw3OV0sWzUwLDcwXSxbNjAsNjVdLFs3MCw1OV0sWzgwLDUyXSxbOTAsNDVdLFsxMDAsNDJdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwaW5rJyxcbiAgICAgIFsyODMsIDMzNF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkwXSxbNDAsODZdLFs2MCw4NF0sWzgwLDgwXSxbOTAsNzVdLFsxMDAsNzNdXVxuICAgICk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvUkdCIChoc3YpIHtcblxuICAgIC8vIHRoaXMgZG9lc24ndCB3b3JrIGZvciB0aGUgdmFsdWVzIG9mIDAgYW5kIDM2MFxuICAgIC8vIGhlcmUncyB0aGUgaGFja3kgZml4XG4gICAgdmFyIGggPSBoc3ZbMF07XG4gICAgaWYgKGggPT09IDApIHtoID0gMTt9XG4gICAgaWYgKGggPT09IDM2MCkge2ggPSAzNTk7fVxuXG4gICAgLy8gUmViYXNlIHRoZSBoLHMsdiB2YWx1ZXNcbiAgICBoID0gaC8zNjA7XG4gICAgdmFyIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgICB2ID0gaHN2WzJdLzEwMDtcblxuICAgIHZhciBoX2kgPSBNYXRoLmZsb29yKGgqNiksXG4gICAgICBmID0gaCAqIDYgLSBoX2ksXG4gICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICBxID0gdiAqICgxIC0gZipzKSxcbiAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpKnMpLFxuICAgICAgciA9IDI1NixcbiAgICAgIGcgPSAyNTYsXG4gICAgICBiID0gMjU2O1xuXG4gICAgc3dpdGNoKGhfaSkge1xuICAgICAgY2FzZSAwOiByID0gdjsgZyA9IHQ7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHIgPSBxOyBnID0gdjsgYiA9IHA7ICBicmVhaztcbiAgICAgIGNhc2UgMjogciA9IHA7IGcgPSB2OyBiID0gdDsgIGJyZWFrO1xuICAgICAgY2FzZSAzOiByID0gcDsgZyA9IHE7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IHIgPSB0OyBnID0gcDsgYiA9IHY7ICBicmVhaztcbiAgICAgIGNhc2UgNTogciA9IHY7IGcgPSBwOyBiID0gcTsgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbTWF0aC5mbG9vcihyKjI1NSksIE1hdGguZmxvb3IoZyoyNTUpLCBNYXRoLmZsb29yKGIqMjU1KV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSFNMIChoc3YpIHtcbiAgICB2YXIgaCA9IGhzdlswXSxcbiAgICAgIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgdiA9IGhzdlsyXS8xMDAsXG4gICAgICBrID0gKDItcykqdjtcblxuICAgIHJldHVybiBbXG4gICAgICBoLFxuICAgICAgTWF0aC5yb3VuZChzKnYgLyAoazwxID8gayA6IDItaykgKiAxMDAwMCkgLyAxMDAsXG4gICAgICBrLzIgKiAxMDBcbiAgICBdO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5nVG9JbnRlZ2VyIChzdHJpbmcpIHtcbiAgICB2YXIgdG90YWwgPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvdGFsID49IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSBicmVhaztcbiAgICAgIHRvdGFsICs9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiB0b3RhbFxuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUNvbG9yO1xufSkpO1xuIl19
