(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _copy = require(77);

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"77":77}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _incomplete_circles = require(5);

var _incomplete_circles2 = _interopRequireDefault(_incomplete_circles);

var _circle_row_opposite_rotator = require(3);

var _circle_row_opposite_rotator2 = _interopRequireDefault(_circle_row_opposite_rotator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  incompleteCircles: _incomplete_circles2.default,
  circleRowOppositeRotator: _circle_row_opposite_rotator2.default
};


},{"3":3,"5":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  (0, _check_parameter2.default)(options, 'circleRows', true);
  (0, _check_parameter2.default)(options, 'speed', true);

  var circleRowOppositeRotator = {};
  circleRowOppositeRotator.circleRows = options.circleRows;
  circleRowOppositeRotator.speed = options.speed;
  circleRowOppositeRotator._rotators = [];

  for (var i = 0; i < circleRowOppositeRotator.circleRows.rows.length; i++) {
    var speed = circleRowOppositeRotator.speed;
    if (i % 2 === 0) {
      speed = -speed;
    }

    circleRowOppositeRotator._rotators.push((0, _linear_rotator2.default)({
      subject: circleRowOppositeRotator.circleRows.rows[i],
      speed: speed }));
  }

  circleRowOppositeRotator.start = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._rotators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var rotator = _step.value;

        rotator.start();
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

  circleRowOppositeRotator.stop = function () {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this._rotators[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var rotator = _step2.value;

        rotator.stop();
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

  return circleRowOppositeRotator;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _linear_rotator = require(90);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76,"90":90}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'radius', true);
  (0, _check_parameter2.default)(options, 'children', true);

  var circleRows = {};
  circleRows.view = (0, _container2.default)();
  circleRows.radius = options.radius;
  circleRows.children = options.children;
  circleRows.rows = [];

  for (var i = 0; i < circleRows.children.length; i++) {
    var rowContainer = (0, _container2.default)();
    rowContainer.y = -((i + 1) / circleRows.children.length * circleRows.radius);
    rowContainer.addChild(circleRows.children[i].view);

    var positionContainer = (0, _container2.default)();
    positionContainer.x = circleRows.radius;
    positionContainer.y = circleRows.radius;
    positionContainer.addChild(rowContainer);

    circleRows.rows.push(positionContainer);
    circleRows.view.addChild(positionContainer);
  }

  return circleRows;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"29":29,"76":76}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'rows', true);
  (0, _check_parameter2.default)(options, 'radius', true);
  (0, _check_parameter2.default)(options, 'maxDegrees', true);
  (0, _check_parameter2.default)(options, 'minDegrees', false, options.maxDegrees);

  var incompleteCircles = {};
  incompleteCircles.rows = options.rows;
  incompleteCircles.radius = options.radius;
  incompleteCircles.maxDegrees = options.maxDegrees;
  incompleteCircles.minDegrees = options.minDegrees;
  incompleteCircles.arcs = [];

  for (var i = 0; i < incompleteCircles.rows; i++) {
    var arc = (0, _path2.default)({
      path: (0, _arc2.default)({
        degrees: incompleteCircles.minDegrees + (incompleteCircles.maxDegrees - incompleteCircles.minDegrees) * Math.random(),
        radius: (i + 1) / incompleteCircles.rows * incompleteCircles.radius
      })
    });
    incompleteCircles.arcs.push(arc);
  }

  incompleteCircles.circleRows = (0, _circle_rows2.default)({
    radius: incompleteCircles.radius,
    children: incompleteCircles.arcs
  });

  incompleteCircles.view = incompleteCircles.circleRows.view;

  return incompleteCircles;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _circle_rows = require(4);

var _circle_rows2 = _interopRequireDefault(_circle_rows);

var _arc = require(65);

var _arc2 = _interopRequireDefault(_arc);

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"35":35,"4":4,"65":65,"76":76}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path_magic = require(15);

var _path_magic2 = _interopRequireDefault(_path_magic);

var _square_group_stuff = require(21);

var _square_group_stuff2 = _interopRequireDefault(_square_group_stuff);

var _zoom_stuff = require(26);

var _zoom_stuff2 = _interopRequireDefault(_zoom_stuff);

var _moving_backgrounds = require(8);

var _moving_backgrounds2 = _interopRequireDefault(_moving_backgrounds);

var _web = require(24);

var _web2 = _interopRequireDefault(_web);

var _arc_stuff = require(2);

var _arc_stuff2 = _interopRequireDefault(_arc_stuff);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pathMagic: _path_magic2.default,
  squareGroupStuff: _square_group_stuff2.default,
  zoomStuff: _zoom_stuff2.default,
  movingBackgrounds: _moving_backgrounds2.default,
  web: _web2.default,
  arcStuff: _arc_stuff2.default
};


},{"15":15,"2":2,"21":21,"24":24,"26":26,"8":8}],7:[function(require,module,exports){
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
    var _line;
    var lineMover;
    if (i < horVerLines.amount / 2) {
      var posY = Math.random() * horVerLines.height;
      _line = (0, _line3.default)({ 'linePath': (0, _line5.default)({
          'end': { 'x': horVerLines.length, 'y': 0 },
          'start': { 'x': 0, 'y': 0 }
        }) });

      var onFinishedInterval = {
        cb: function cb() {
          var delay = Math.random() * 5000;
          _one_time_delay2.default.run(this.start, this, delay);
        } };
      lineMover = (0, _line_mover2.default)({
        subject: _line.view,
        startPoint: { x: -horVerLines.length, y: posY },
        goalPoint: { x: horVerLines.width, y: posY },
        interval: (0, _interval2.default)({ 'type': 'ms', 'ms': horVerLines.width / horVerLines.speed * 1000 }),
        onFinishedInterval: onFinishedInterval,
        numberOfIntervals: 1,
        steepness: 1
      });

      onFinishedInterval.scope = lineMover;
    } else {
      var posX = Math.random() * horVerLines.width;
      _line = (0, _line3.default)({ 'linePath': (0, _line5.default)({
          'end': { 'x': 0, 'y': horVerLines.length },
          'start': { 'x': 0, 'y': 0 }
        }) });

      var onFinishedInterval2 = {
        cb: function cb() {
          var delay = Math.random() * 5000;
          _one_time_delay2.default.run(this.start, this, delay);
        } };

      lineMover = (0, _line_mover2.default)({
        subject: _line.view,
        startPoint: { x: posX, y: -horVerLines.length },
        goalPoint: { x: posX, y: horVerLines.height },
        interval: (0, _interval2.default)({ 'type': 'ms', 'ms': horVerLines.height / horVerLines.speed * 1000 }),
        onFinishedInterval: onFinishedInterval2,
        numberOfIntervals: 1,
        steepness: 1
      });

      onFinishedInterval2.scope = lineMover;
    }

    horVerLines.view.addChild(_line.view);
    horVerLines._linesMovers.push(lineMover);
  }

  horVerLines.start = function () {
    for (var j = 0; j < this.amount; j++) {
      var delay = Math.random() * 5000;
      _one_time_delay2.default.run(this._linesMovers[j].start, this._linesMovers[j], delay);
    }
  };

  horVerLines.stop = function () {
    for (var j = 0; j < this.amount; j++) {
      this._linesMovers[j].stop();
    }
  };

  return horVerLines;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _line2 = require(33);

var _line3 = _interopRequireDefault(_line2);

var _line4 = require(67);

var _line5 = _interopRequireDefault(_line4);

var _line_mover = require(86);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(99);

var _interval2 = _interopRequireDefault(_interval);

var _one_time_delay = require(101);

var _one_time_delay2 = _interopRequireDefault(_one_time_delay);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"101":101,"29":29,"33":33,"67":67,"76":76,"86":86,"99":99}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_rect_mover_background = require(9);

var _random_rect_mover_background2 = _interopRequireDefault(_random_rect_mover_background);

var _hor_ver_lines = require(7);

var _hor_ver_lines2 = _interopRequireDefault(_hor_ver_lines);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomRectMoverBackground: _random_rect_mover_background2.default,
  horVerLines: _hor_ver_lines2.default
};


},{"7":7,"9":9}],9:[function(require,module,exports){
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

var _random_in_rect_mover = require(89);

var _random_in_rect_mover2 = _interopRequireDefault(_random_in_rect_mover);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"29":29,"76":76,"89":89}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swinging_line = require(13);

var _swinging_line2 = _interopRequireDefault(_swinging_line);

var _curve = require(12);

var _curve2 = _interopRequireDefault(_curve);

var _wave = require(14);

var _wave2 = _interopRequireDefault(_wave);

var _cpoint_spinner = require(11);

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


},{"11":11,"12":12,"13":13,"14":14}],11:[function(require,module,exports){
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

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(66);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(64);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"29":29,"35":35,"64":64,"66":66,"76":76}],12:[function(require,module,exports){
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

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(66);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"29":29,"35":35,"66":66,"76":76}],13:[function(require,module,exports){
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

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(66);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"29":29,"35":35,"66":66,"76":76}],14:[function(require,module,exports){
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

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(66);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"29":29,"35":35,"66":66,"76":76}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition_path_drawer = require(17);

var _transition_path_drawer2 = _interopRequireDefault(_transition_path_drawer);

var _random_part_path_drawer = require(16);

var _random_part_path_drawer2 = _interopRequireDefault(_random_part_path_drawer);

var _bezier = require(10);

var _bezier2 = _interopRequireDefault(_bezier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  transitionPathDrawer: _transition_path_drawer2.default,
  randomPartPathDrawer: _random_part_path_drawer2.default,
  bezier: _bezier2.default
};


},{"10":10,"16":16,"17":17}],16:[function(require,module,exports){
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

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"29":29,"35":35,"76":76,"79":79}],17:[function(require,module,exports){
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

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(35);

var _path2 = _interopRequireDefault(_path);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"29":29,"35":35,"76":76}],18:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(48);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"48":48,"76":76}],19:[function(require,module,exports){
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

var _random_square_switch = require(18);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _interval_timer = require(100);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"18":18,"76":76}],20:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rectangle_group = require(48);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _zoom_out = require(25);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"25":25,"48":48,"76":76}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_square_switch = require(18);

var _random_square_switch2 = _interopRequireDefault(_random_square_switch);

var _random_square_switch_interval = require(19);

var _random_square_switch_interval2 = _interopRequireDefault(_random_square_switch_interval);

var _random_square_zoom_out = require(20);

var _random_square_zoom_out2 = _interopRequireDefault(_random_square_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  randomSquareSwitch: _random_square_switch2.default,
  randomSquareSwitchInterval: _random_square_switch_interval2.default,
  randomSquareZoomOut: _random_square_zoom_out2.default
};


},{"18":18,"19":19,"20":20}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  (0, _check_parameter2.default)(options, 'amount', true);
  (0, _check_parameter2.default)(options, 'width', true);
  (0, _check_parameter2.default)(options, 'height', true);
  (0, _check_parameter2.default)(options, 'speed', true);

  var movingPointWeb = {};
  movingPointWeb.amount = options.amount;
  movingPointWeb.width = options.width;
  movingPointWeb.height = options.height;
  movingPointWeb.speed = options.speed;
  movingPointWeb._movers = [];
  movingPointWeb._points = [];
  movingPointWeb._pointWeb = null;
  movingPointWeb._listener = null;

  for (var i = 0; i < movingPointWeb.amount; i++) {
    var point = { x: 0, y: 0 };
    movingPointWeb._movers.push((0, _random_in_rect_mover2.default)({
      subject: point,
      speed: movingPointWeb.speed,
      height: movingPointWeb.height,
      width: movingPointWeb.width
    }));

    movingPointWeb._points.push(point);
  }

  movingPointWeb._pointWeb = (0, _point_web2.default)({ points: movingPointWeb._points });
  movingPointWeb.view = movingPointWeb._pointWeb.view;

  movingPointWeb.start = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._movers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var mover = _step.value;

        mover.start();
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

    this._listener = _loop2.default.addAnimation(this._pointWeb.draw, this._pointWeb);
  };

  movingPointWeb.stop = function () {
    _loop2.default.removeAnimation(this._listener);
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this._movers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var mover = _step2.value;

        mover.stop();
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

  return movingPointWeb;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _random_in_rect_mover = require(89);

var _random_in_rect_mover2 = _interopRequireDefault(_random_in_rect_mover);

var _point_web = require(23);

var _point_web2 = _interopRequireDefault(_point_web);

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"76":76,"79":79,"89":89}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  (0, _check_parameter2.default)(options, 'points', true);

  var pointWeb = {};
  pointWeb.points = options.points;
  pointWeb._lines = [];
  pointWeb.view = (0, _container2.default)();

  pointWeb.draw = function () {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this._lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _line = _step.value;

        _line.draw();
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

  pointWeb.init = function () {
    for (var i = 0; i < this.points.length - 1; i++) {
      for (var j = i + 1; j < this.points.length; j++) {
        var _linePath = (0, _line5.default)({
          start: this.points[i],
          end: this.points[j]
        });
        var _line = (0, _line3.default)({ linePath: _linePath });
        this._lines.push(_line);
        this.view.addChild(_line.view);
      }
    }
  };

  pointWeb.init();
  return pointWeb;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line2 = require(33);

var _line3 = _interopRequireDefault(_line2);

var _line4 = require(67);

var _line5 = _interopRequireDefault(_line4);

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"29":29,"33":33,"67":67,"76":76}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _point_web = require(23);

var _point_web2 = _interopRequireDefault(_point_web);

var _moving_point_web = require(22);

var _moving_point_web2 = _interopRequireDefault(_moving_point_web);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pointWeb: _point_web2.default,
  movingPointWeb: _moving_point_web2.default
};


},{"22":22,"23":23}],25:[function(require,module,exports){
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

var _linear_pulsar = require(91);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _centralizer = require(51);

var _centralizer2 = _interopRequireDefault(_centralizer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"51":51,"76":76,"91":91}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoom_out = require(25);

var _zoom_out2 = _interopRequireDefault(_zoom_out);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  zoomOut: _zoom_out2.default
};


},{"25":25}],27:[function(require,module,exports){
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


},{"1":1}],28:[function(require,module,exports){
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

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"76":76}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};


},{}],30:[function(require,module,exports){
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

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(31);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(61);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"31":31,"61":61,"76":76}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(63);

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


},{"63":63}],32:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"76":76}],33:[function(require,module,exports){
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

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"76":76}],34:[function(require,module,exports){
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


},{}],35:[function(require,module,exports){
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

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _path_drawer = require(31);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(61);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"31":31,"61":61,"76":76}],36:[function(require,module,exports){
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

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"76":76}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

var _check_parameter = require(76);

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


},{"27":27,"76":76}],38:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_shape = require(27);

var _abstract_shape2 = _interopRequireDefault(_abstract_shape);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"27":27,"76":76}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(29);

var _container2 = _interopRequireDefault(_container);

var _square = require(37);

var _square2 = _interopRequireDefault(_square);

var _circle = require(28);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(36);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(34);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(33);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(30);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(32);

var _image2 = _interopRequireDefault(_image);

var _video = require(38);

var _video2 = _interopRequireDefault(_video);

var _path = require(35);

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


},{"28":28,"29":29,"30":30,"32":32,"33":33,"34":34,"35":35,"36":36,"37":37,"38":38}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var filter = (0, _abstract_component2.default)();

    filter.view = _factory2.default.container();

    return filter;
};

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_component = require(1);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"1":1,"39":39}],41:[function(require,module,exports){
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

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"79":79}],42:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40}],43:[function(require,module,exports){
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

var _abstract_group = require(42);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"42":42,"76":76}],44:[function(require,module,exports){
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

var _abstract_group = require(42);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"42":42,"76":76}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(48);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(47);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(44);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(49);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(46);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(43);

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


},{"43":43,"44":44,"46":46,"47":47,"48":48,"49":49}],46:[function(require,module,exports){
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

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(42);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"42":42,"76":76}],47:[function(require,module,exports){
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

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(42);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"42":42,"76":76}],48:[function(require,module,exports){
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

var _abstract_group = require(42);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"42":42,"76":76}],49:[function(require,module,exports){
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

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(42);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39,"42":42,"76":76}],50:[function(require,module,exports){
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


},{}],51:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(59);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"59":59,"76":76}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _centralizer = require(51);

var _centralizer2 = _interopRequireDefault(_centralizer);

var _pathMover = require(53);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _linear = require(54);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(55);

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


},{"51":51,"53":53,"54":54,"55":55}],53:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_filter = require(60);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

var _single_child_filter = require(59);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"59":59,"60":60,"76":76}],54:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(50);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(59);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_mover = require(86);

var _line_mover2 = _interopRequireDefault(_line_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"50":50,"59":59,"86":86}],55:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _modificator_filter = require(50);

var _modificator_filter2 = _interopRequireDefault(_modificator_filter);

var _single_child_filter = require(59);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _line_shake_mover = require(87);

var _line_shake_mover2 = _interopRequireDefault(_line_shake_mover);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"50":50,"59":59,"87":87}],56:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(59);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _transition_filter = require(60);

var _transition_filter2 = _interopRequireDefault(_transition_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"59":59,"60":60}],57:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _single_child_filter = require(59);

var _single_child_filter2 = _interopRequireDefault(_single_child_filter);

var _animation_filter = require(41);

var _animation_filter2 = _interopRequireDefault(_animation_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"41":41,"59":59}],58:[function(require,module,exports){
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

var _abstract_filter = require(40);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _animation_filter = require(41);

var _animation_filter2 = _interopRequireDefault(_animation_filter);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"40":40,"41":41,"76":76}],59:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76}],60:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"76":76}],61:[function(require,module,exports){
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


},{}],62:[function(require,module,exports){
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


},{}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};


},{}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(63);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"63":63}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(63);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(76);

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


},{"63":63,"76":76}],66:[function(require,module,exports){
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

var _bezierJs = require(104);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"104":104,"76":76}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(75);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(62);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(76);

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


},{"62":62,"75":75,"76":76}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(61);

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


},{"61":61}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(65);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(67);

var _line2 = _interopRequireDefault(_line);

var _path = require(68);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(66);

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


},{"65":65,"66":66,"67":67,"68":68}],70:[function(require,module,exports){
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


},{}],71:[function(require,module,exports){
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

var _path = require(68);

var _path2 = _interopRequireDefault(_path);

var _arc = require(65);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"65":65,"68":68,"76":76}],72:[function(require,module,exports){
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

var _path = require(68);

var _path2 = _interopRequireDefault(_path);

var _line = require(67);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"67":67,"68":68,"76":76}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(72);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(74);

var _square2 = _interopRequireDefault(_square);

var _circle = require(71);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"71":71,"72":72,"74":74}],74:[function(require,module,exports){
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

var _path = require(68);

var _path2 = _interopRequireDefault(_path);

var _line = require(67);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"67":67,"68":68,"76":76}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};


},{}],76:[function(require,module,exports){
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


},{}],77:[function(require,module,exports){
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


},{}],78:[function(require,module,exports){
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


},{}],79:[function(require,module,exports){
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


},{}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(39);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(57);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(56);

var _fader2 = _interopRequireDefault(_fader);

var _group = require(45);

var _group2 = _interopRequireDefault(_group);

var _mover = require(52);

var _mover2 = _interopRequireDefault(_mover);

var _linear_rotator = require(58);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _randomColor = require(119);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(73);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(69);

var _paths2 = _interopRequireDefault(_paths);

var _compositions = require(6);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(97);

var _proxies2 = _interopRequireDefault(_proxies);

var _interval = require(99);

var _interval2 = _interopRequireDefault(_interval);

var _modificators = require(85);

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


},{"119":119,"39":39,"45":45,"52":52,"56":56,"57":57,"58":58,"6":6,"69":69,"73":73,"79":79,"85":85,"97":97,"99":99}],81:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (modificator) {

    modificator._listener = null;

    /* Public functions */
    function start() {
        this._listener = _loop2.default.addAnimation(this.handle, this);
    }

    function stop() {
        _loop2.default.removeAnimation(this._listener);
    }

    modificator.start = start;
    modificator.stop = stop;

    return modificator;
};

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"79":79}],83:[function(require,module,exports){
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

var _color = require(113);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(78);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"113":113,"76":76,"78":78}],84:[function(require,module,exports){
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

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(119);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(78);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"119":119,"76":76,"78":78,"79":79}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _random_color_changer = require(84);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(83);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(91);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _random_arc_mover = require(88);

var _random_arc_mover2 = _interopRequireDefault(_random_arc_mover);

var _random_in_rect_mover = require(89);

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


},{"83":83,"84":84,"88":88,"89":89,"91":91}],86:[function(require,module,exports){
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

var _abstract_modificator = require(81);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(92);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76,"81":81,"92":92}],87:[function(require,module,exports){
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

var _abstract_modificator = require(81);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(92);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76,"81":81,"92":92}],88:[function(require,module,exports){
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

var _arc = require(65);

var _arc2 = _interopRequireDefault(_arc);

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _rotate_point = require(70);

var _rotate_point2 = _interopRequireDefault(_rotate_point);

var _set_prop = require(78);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"65":65,"70":70,"76":76,"78":78,"79":79}],89:[function(require,module,exports){
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
    onFinishedInterval: { cb: function cb() {
        randomInRectMover.__onCurrentGoalReached();
      }, scope: randomInRectMover },
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _line_mover = require(86);

var _line_mover2 = _interopRequireDefault(_line_mover);

var _interval = require(99);

var _interval2 = _interopRequireDefault(_interval);

var _abstract_modificator = require(81);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _to_vector = require(75);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(62);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"62":62,"75":75,"76":76,"81":81,"86":86,"99":99}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'speed', true);

  var linearRotator = (0, _animation_modificator2.default)((0, _abstract_modificator2.default)(options));
  linearRotator.speed = options.speed;

  linearRotator.handle = function (event) {
    this.subject.rotation += this.speed * (event.delta / 1000);
    while (this.subject.rotation >= 360) {
      this.subject.rotation -= 360;
    }
  };

  return linearRotator;
};

var _abstract_modificator = require(81);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _animation_modificator = require(82);

var _animation_modificator2 = _interopRequireDefault(_animation_modificator);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76,"81":81,"82":82}],91:[function(require,module,exports){
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

var _abstract_modificator = require(81);

var _abstract_modificator2 = _interopRequireDefault(_abstract_modificator);

var _transition_modificator = require(92);

var _transition_modificator2 = _interopRequireDefault(_transition_modificator);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(78);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76,"78":78,"81":81,"92":92}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (modificator, options) {

    /* Parameters */
    (0, _check_parameter2.default)(options, 'interval', true);
    (0, _check_parameter2.default)(options, 'steepness', false, 0.5);
    (0, _check_parameter2.default)(options, 'numberOfIntervals', false, 0);
    (0, _check_parameter2.default)(options, 'progress', false, 0);

    /* private vars */
    modificator.transition = (0, _transition_loop2.default)(options.interval, options.steepness, options.progress, options.numberOfIntervals, options.onFinishedInterval);

    /* Public methods */
    modificator.start = function () {
        this.transition.start(this.handle, this);
    };

    modificator.stop = function () {
        this.transition.stop();
    };

    return modificator;
};

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _transition_loop = require(102);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"102":102,"76":76}],93:[function(require,module,exports){
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

var _set_prop = require(78);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"78":78}],94:[function(require,module,exports){
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

var _abstract_proxy = require(93);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"93":93}],95:[function(require,module,exports){
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

var _abstract_proxy = require(93);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76,"93":93}],96:[function(require,module,exports){
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

var _interval_timer = require(100);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(95);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(93);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"100":100,"76":76,"93":93,"95":95}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_proxy = require(94);

var _default_proxy2 = _interopRequireDefault(_default_proxy);

var _increment_proxy = require(95);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _interval_proxy = require(96);

var _interval_proxy2 = _interopRequireDefault(_interval_proxy);

var _random_proxy = require(98);

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


},{"94":94,"95":95,"96":96,"98":98}],98:[function(require,module,exports){
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

var _abstract_proxy = require(93);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"93":93}],99:[function(require,module,exports){
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

var _check_parameter = require(76);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"76":76}],100:[function(require,module,exports){
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

  timer.destroy = function () {
    this.stop();
    this.listeners.length = 0;
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

var _loop = require(79);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"79":79}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _interval_timer = require(100);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  run: function run(callback, scope, interval) {
    var it = (0, _interval_timer2.default)(interval);

    var cbObject = {
      cb: function cb() {
        callback.call(scope);
        it.destroy();
      }
    };
    it.addListener(cbObject.cb, cbObject);

    it.start();
  }
};


},{"100":100}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(79);

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
      this.onFinishedInterval.cb.call(this.onFinishedInterval.scope);
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


},{"79":79}],103:[function(require,module,exports){
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

},{}],104:[function(require,module,exports){
module.exports = require(105);

},{"105":105}],105:[function(require,module,exports){
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
  var utils = require(107);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(106);

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

},{"106":106,"107":107}],106:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(107);

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

},{"107":107}],107:[function(require,module,exports){
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
      var Bezier = require(105);
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

},{"105":105}],108:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(103)
var ieee754 = require(118)
var isArray = require(109)

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

},{"103":103,"109":109,"118":118}],109:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],110:[function(require,module,exports){
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

}).call(this,require(108).Buffer)

},{"108":108}],111:[function(require,module,exports){
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
},{}],112:[function(require,module,exports){
/* MIT license */
var colorNames = require(111);

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

},{"111":111}],113:[function(require,module,exports){
/* MIT license */
var clone = require(110);
var convert = require(116);
var string = require(112);

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

},{"110":110,"112":112,"116":116}],114:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(115);

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

},{"115":115}],115:[function(require,module,exports){
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


},{}],116:[function(require,module,exports){
var conversions = require(114);
var route = require(117);

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

},{"114":114,"117":117}],117:[function(require,module,exports){
var conversions = require(114);

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


},{"114":114}],118:[function(require,module,exports){
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

},{}]},{},[80])(80)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxhYnN0cmFjdF9jb21wb25lbnQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGFyY19zdHVmZlxcYXJjX3N0dWZmLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxhcmNfc3R1ZmZcXGNpcmNsZV9yb3dfb3Bwb3NpdGVfcm90YXRvci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcYXJjX3N0dWZmXFxjaXJjbGVfcm93cy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcYXJjX3N0dWZmXFxpbmNvbXBsZXRlX2NpcmNsZXMuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcbW92aW5nX2JhY2tncm91bmRzXFxob3JfdmVyX2xpbmVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxtb3ZpbmdfYmFja2dyb3VuZHNcXG1vdmluZ19iYWNrZ3JvdW5kcy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcbW92aW5nX2JhY2tncm91bmRzXFxyYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxiZXppZXJcXGJlemllci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxjcG9pbnRfc3Bpbm5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxjdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxzd2luZ2luZ19saW5lLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxiZXppZXJcXHdhdmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXHBhdGhfbWFnaWMuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXHJhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFx0cmFuc2l0aW9uX3BhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHJhbmRvbV9zcXVhcmVfc3dpdGNoLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHJhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxzcXVhcmVfZ3JvdXBfc3R1ZmZcXHJhbmRvbV9zcXVhcmVfem9vbV9vdXQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHNxdWFyZV9ncm91cF9zdHVmZlxcc3F1YXJlX2dyb3VwX3N0dWZmLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFx3ZWJcXG1vdmluZ19wb2ludF93ZWIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHdlYlxccG9pbnRfd2ViLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFx3ZWJcXHdlYi5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xcem9vbV9zdHVmZlxcem9vbV9vdXQuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHpvb21fc3R1ZmZcXHpvb21fc3R1ZmYuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9zaGFwZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNpcmNsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGN1c3RvbV9vYmplY3QuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxoZWxwZXJcXHBhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcaW1hZ2UuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxsaW5lLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbWFpbl9jb250YWluZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxwYXRoLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcdmlkZW8uanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcYWJzdHJhY3RfZmlsdGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcYW5pbWF0aW9uX2ZpbHRlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxhYnN0cmFjdF9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxjZW50ZXJfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGdyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJhbmRvbV9jaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmFuZG9tX3JlY3RhbmdsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyZWN0YW5nbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcc3BpcmFsX2NpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vZGlmaWNhdG9yX2ZpbHRlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxjZW50ZXJcXGNlbnRyYWxpemVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXG1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBhdGhcXHBhdGgtbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcbGluZWFyX3NoYWtlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmFkZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxvcGFjaXR5XFxmbGFzaGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xccm90YXRvclxcbGluZWFyX3JvdGF0b3IuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxzaW5nbGVfY2hpbGRfZmlsdGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcdHJhbnNpdGlvbl9maWx0ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcYWRkX3VwX3BvaW50cy5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxkaXN0YW5jZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcaGVscGVyXFxkZWdyZWVzX3RvX2Nvb3JkaW5hdGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxhcmMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aHMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccm90YXRlX3BvaW50LmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcY2lyY2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc2hhcGVzLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHNoYXBlc1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHRvX3ZlY3Rvci5qcyIsIi50bXBcXHNjcmlwdHNcXGludGVybmFsXFxjaGVja19wYXJhbWV0ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxpbnRlcm5hbFxcY29weS5qcyIsIi50bXBcXHNjcmlwdHNcXGludGVybmFsXFxzZXRfcHJvcC5qcyIsIi50bXBcXHNjcmlwdHNcXGxvb3AuanMiLCIudG1wXFxzY3JpcHRzXFxtYWluLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxhYnN0cmFjdF9tb2RpZmljYXRvci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcYW5pbWF0aW9uX21vZGlmaWNhdG9yLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxcY29sb3JfZmFkZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXGNvbG9yXFxyYW5kb21fY29sb3JfY2hhbmdlci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcbW9kaWZpY2F0b3JzLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxwb3NpdGlvblxcbGluZV9tb3Zlci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xccG9zaXRpb25cXGxpbmVfc2hha2VfbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHBvc2l0aW9uXFxyYW5kb21fYXJjX21vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxwb3NpdGlvblxccmFuZG9tX2luX3JlY3RfbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHJvdGF0aW9uXFxsaW5lYXJfcm90YXRvci5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcc2NhbGVcXGxpbmVhcl9wdWxzYXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHRyYW5zaXRpb25fbW9kaWZpY2F0b3IuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxhYnN0cmFjdF9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXGRlZmF1bHRfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxpbmNyZW1lbnRfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxpbnRlcnZhbF9wcm94eS5qcyIsIi50bXBcXHNjcmlwdHNcXHByb3hpZXNcXHByb3hpZXMuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxyYW5kb21fcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFx0aW1lcnNcXGludGVydmFsLmpzIiwiLnRtcFxcc2NyaXB0c1xcdGltZXJzXFxpbnRlcnZhbF90aW1lci5qcyIsIi50bXBcXHNjcmlwdHNcXHRpbWVyc1xcb25lX3RpbWVfZGVsYXkuanMiLCIudG1wXFxzY3JpcHRzXFx0cmFuc2l0aW9uc1xcdHJhbnNpdGlvbl9sb29wLmpzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iZXppZXItanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi9iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi9wb2x5LWJlemllci5qcyIsIm5vZGVfbW9kdWxlcy9iZXppZXItanMvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2xvbmUvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvY29sb3Itc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2Nzcy1rZXl3b3Jkcy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyIsIm5vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbmRvbUNvbG9yL3JhbmRvbUNvbG9yLmpzIl0sIm5hbWVzIjpbXSwi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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xIQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzloQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzd2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4eUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgLyogcHJpdmF0ZSB2YXJzICovXG4gIHZhciBhYnN0cmFjdENvbXBvbmVudCA9IHt9O1xuICBhYnN0cmFjdENvbXBvbmVudC5fY2FsbGJhY2tzID0ge307XG5cbiAgYWJzdHJhY3RDb21wb25lbnQuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrLCBzY29wZSkge1xuICAgIGlmICghdGhpcy5fY2FsbGJhY2tzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHZhciBsaXN0ZW5lciA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBzY29wZTogc2NvcGUgfTtcbiAgICB0aGlzLl9jYWxsYmFja3NbZXZlbnROYW1lXS5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH07XG5cbiAgYWJzdHJhY3RDb21wb25lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLl9jYWxsYmFja3NbZXZlbnROYW1lXS5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhYnN0cmFjdENvbXBvbmVudC5zZW5kRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9jYWxsYmFja3NbZXZlbnROYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuX2NhbGxiYWNrc1tldmVudE5hbWVdW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBjYWxsYmFjay5jYWxsYmFjay5jYWxsKGNhbGxiYWNrLnNjb3BlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgYWJzdHJhY3RDb21wb25lbnQuZ2V0Q29weSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9jb3B5Mi5kZWZhdWx0KSh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gYWJzdHJhY3RDb21wb25lbnQ7XG59O1xuXG52YXIgX2NvcHkgPSByZXF1aXJlKCcuL2ludGVybmFsL2NvcHknKTtcblxudmFyIF9jb3B5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvcHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfY29tcG9uZW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2luY29tcGxldGVfY2lyY2xlcyA9IHJlcXVpcmUoJy4vaW5jb21wbGV0ZV9jaXJjbGVzJyk7XG5cbnZhciBfaW5jb21wbGV0ZV9jaXJjbGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY29tcGxldGVfY2lyY2xlcyk7XG5cbnZhciBfY2lyY2xlX3Jvd19vcHBvc2l0ZV9yb3RhdG9yID0gcmVxdWlyZSgnLi9jaXJjbGVfcm93X29wcG9zaXRlX3JvdGF0b3InKTtcblxudmFyIF9jaXJjbGVfcm93X29wcG9zaXRlX3JvdGF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlX3Jvd19vcHBvc2l0ZV9yb3RhdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBpbmNvbXBsZXRlQ2lyY2xlczogX2luY29tcGxldGVfY2lyY2xlczIuZGVmYXVsdCxcbiAgY2lyY2xlUm93T3Bwb3NpdGVSb3RhdG9yOiBfY2lyY2xlX3Jvd19vcHBvc2l0ZV9yb3RhdG9yMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJjX3N0dWZmLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NpcmNsZVJvd3MnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuXG4gIHZhciBjaXJjbGVSb3dPcHBvc2l0ZVJvdGF0b3IgPSB7fTtcbiAgY2lyY2xlUm93T3Bwb3NpdGVSb3RhdG9yLmNpcmNsZVJvd3MgPSBvcHRpb25zLmNpcmNsZVJvd3M7XG4gIGNpcmNsZVJvd09wcG9zaXRlUm90YXRvci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGNpcmNsZVJvd09wcG9zaXRlUm90YXRvci5fcm90YXRvcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZVJvd09wcG9zaXRlUm90YXRvci5jaXJjbGVSb3dzLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc3BlZWQgPSBjaXJjbGVSb3dPcHBvc2l0ZVJvdGF0b3Iuc3BlZWQ7XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBzcGVlZCA9IC1zcGVlZDtcbiAgICB9XG5cbiAgICBjaXJjbGVSb3dPcHBvc2l0ZVJvdGF0b3IuX3JvdGF0b3JzLnB1c2goKDAsIF9saW5lYXJfcm90YXRvcjIuZGVmYXVsdCkoe1xuICAgICAgc3ViamVjdDogY2lyY2xlUm93T3Bwb3NpdGVSb3RhdG9yLmNpcmNsZVJvd3Mucm93c1tpXSxcbiAgICAgIHNwZWVkOiBzcGVlZCB9KSk7XG4gIH1cblxuICBjaXJjbGVSb3dPcHBvc2l0ZVJvdGF0b3Iuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9yb3RhdG9yc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIHJvdGF0b3IgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICByb3RhdG9yLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNpcmNsZVJvd09wcG9zaXRlUm90YXRvci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHRoaXMuX3JvdGF0b3JzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHZhciByb3RhdG9yID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgIHJvdGF0b3Iuc3RvcCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNpcmNsZVJvd09wcG9zaXRlUm90YXRvcjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfbGluZWFyX3JvdGF0b3IgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcnMvcm90YXRpb24vbGluZWFyX3JvdGF0b3InKTtcblxudmFyIF9saW5lYXJfcm90YXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcm90YXRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGVfcm93X29wcG9zaXRlX3JvdGF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuXG4gIHZhciBjaXJjbGVSb3dzID0ge307XG4gIGNpcmNsZVJvd3MudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICBjaXJjbGVSb3dzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICBjaXJjbGVSb3dzLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbjtcbiAgY2lyY2xlUm93cy5yb3dzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVSb3dzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvd0NvbnRhaW5lciA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuICAgIHJvd0NvbnRhaW5lci55ID0gLSgoaSArIDEpIC8gY2lyY2xlUm93cy5jaGlsZHJlbi5sZW5ndGggKiBjaXJjbGVSb3dzLnJhZGl1cyk7XG4gICAgcm93Q29udGFpbmVyLmFkZENoaWxkKGNpcmNsZVJvd3MuY2hpbGRyZW5baV0udmlldyk7XG5cbiAgICB2YXIgcG9zaXRpb25Db250YWluZXIgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgICBwb3NpdGlvbkNvbnRhaW5lci54ID0gY2lyY2xlUm93cy5yYWRpdXM7XG4gICAgcG9zaXRpb25Db250YWluZXIueSA9IGNpcmNsZVJvd3MucmFkaXVzO1xuICAgIHBvc2l0aW9uQ29udGFpbmVyLmFkZENoaWxkKHJvd0NvbnRhaW5lcik7XG5cbiAgICBjaXJjbGVSb3dzLnJvd3MucHVzaChwb3NpdGlvbkNvbnRhaW5lcik7XG4gICAgY2lyY2xlUm93cy52aWV3LmFkZENoaWxkKHBvc2l0aW9uQ29udGFpbmVyKTtcbiAgfVxuXG4gIHJldHVybiBjaXJjbGVSb3dzO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZV9yb3dzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncm93cycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ21heERlZ3JlZXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdtaW5EZWdyZWVzJywgZmFsc2UsIG9wdGlvbnMubWF4RGVncmVlcyk7XG5cbiAgdmFyIGluY29tcGxldGVDaXJjbGVzID0ge307XG4gIGluY29tcGxldGVDaXJjbGVzLnJvd3MgPSBvcHRpb25zLnJvd3M7XG4gIGluY29tcGxldGVDaXJjbGVzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICBpbmNvbXBsZXRlQ2lyY2xlcy5tYXhEZWdyZWVzID0gb3B0aW9ucy5tYXhEZWdyZWVzO1xuICBpbmNvbXBsZXRlQ2lyY2xlcy5taW5EZWdyZWVzID0gb3B0aW9ucy5taW5EZWdyZWVzO1xuICBpbmNvbXBsZXRlQ2lyY2xlcy5hcmNzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmNvbXBsZXRlQ2lyY2xlcy5yb3dzOyBpKyspIHtcbiAgICB2YXIgYXJjID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7XG4gICAgICBwYXRoOiAoMCwgX2FyYzIuZGVmYXVsdCkoe1xuICAgICAgICBkZWdyZWVzOiBpbmNvbXBsZXRlQ2lyY2xlcy5taW5EZWdyZWVzICsgKGluY29tcGxldGVDaXJjbGVzLm1heERlZ3JlZXMgLSBpbmNvbXBsZXRlQ2lyY2xlcy5taW5EZWdyZWVzKSAqIE1hdGgucmFuZG9tKCksXG4gICAgICAgIHJhZGl1czogKGkgKyAxKSAvIGluY29tcGxldGVDaXJjbGVzLnJvd3MgKiBpbmNvbXBsZXRlQ2lyY2xlcy5yYWRpdXNcbiAgICAgIH0pXG4gICAgfSk7XG4gICAgaW5jb21wbGV0ZUNpcmNsZXMuYXJjcy5wdXNoKGFyYyk7XG4gIH1cblxuICBpbmNvbXBsZXRlQ2lyY2xlcy5jaXJjbGVSb3dzID0gKDAsIF9jaXJjbGVfcm93czIuZGVmYXVsdCkoe1xuICAgIHJhZGl1czogaW5jb21wbGV0ZUNpcmNsZXMucmFkaXVzLFxuICAgIGNoaWxkcmVuOiBpbmNvbXBsZXRlQ2lyY2xlcy5hcmNzXG4gIH0pO1xuXG4gIGluY29tcGxldGVDaXJjbGVzLnZpZXcgPSBpbmNvbXBsZXRlQ2lyY2xlcy5jaXJjbGVSb3dzLnZpZXc7XG5cbiAgcmV0dXJuIGluY29tcGxldGVDaXJjbGVzO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9jaXJjbGVfcm93cyA9IHJlcXVpcmUoJy4vY2lyY2xlX3Jvd3MnKTtcblxudmFyIF9jaXJjbGVfcm93czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaXJjbGVfcm93cyk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5jb21wbGV0ZV9jaXJjbGVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BhdGhfbWFnaWMgPSByZXF1aXJlKCcuL3BhdGhfbWFnaWMvcGF0aF9tYWdpYycpO1xuXG52YXIgX3BhdGhfbWFnaWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9tYWdpYyk7XG5cbnZhciBfc3F1YXJlX2dyb3VwX3N0dWZmID0gcmVxdWlyZSgnLi9zcXVhcmVfZ3JvdXBfc3R1ZmYvc3F1YXJlX2dyb3VwX3N0dWZmJyk7XG5cbnZhciBfc3F1YXJlX2dyb3VwX3N0dWZmMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZV9ncm91cF9zdHVmZik7XG5cbnZhciBfem9vbV9zdHVmZiA9IHJlcXVpcmUoJy4vem9vbV9zdHVmZi96b29tX3N0dWZmJyk7XG5cbnZhciBfem9vbV9zdHVmZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX3N0dWZmKTtcblxudmFyIF9tb3ZpbmdfYmFja2dyb3VuZHMgPSByZXF1aXJlKCcuL21vdmluZ19iYWNrZ3JvdW5kcy9tb3ZpbmdfYmFja2dyb3VuZHMnKTtcblxudmFyIF9tb3ZpbmdfYmFja2dyb3VuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW92aW5nX2JhY2tncm91bmRzKTtcblxudmFyIF93ZWIgPSByZXF1aXJlKCcuL3dlYi93ZWInKTtcblxudmFyIF93ZWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2ViKTtcblxudmFyIF9hcmNfc3R1ZmYgPSByZXF1aXJlKCcuL2FyY19zdHVmZi9hcmNfc3R1ZmYnKTtcblxudmFyIF9hcmNfc3R1ZmYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjX3N0dWZmKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBwYXRoTWFnaWM6IF9wYXRoX21hZ2ljMi5kZWZhdWx0LFxuICBzcXVhcmVHcm91cFN0dWZmOiBfc3F1YXJlX2dyb3VwX3N0dWZmMi5kZWZhdWx0LFxuICB6b29tU3R1ZmY6IF96b29tX3N0dWZmMi5kZWZhdWx0LFxuICBtb3ZpbmdCYWNrZ3JvdW5kczogX21vdmluZ19iYWNrZ3JvdW5kczIuZGVmYXVsdCxcbiAgd2ViOiBfd2ViMi5kZWZhdWx0LFxuICBhcmNTdHVmZjogX2FyY19zdHVmZjIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvc2l0aW9ucy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Ftb3VudCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcblxuICB2YXIgaG9yVmVyTGluZXMgPSB7fTtcbiAgaG9yVmVyTGluZXMuYW1vdW50ID0gb3B0aW9ucy5hbW91bnQ7XG4gIGhvclZlckxpbmVzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgaG9yVmVyTGluZXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gIGhvclZlckxpbmVzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgaG9yVmVyTGluZXMubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIGhvclZlckxpbmVzLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBob3JWZXJMaW5lcy5fbGluZXNNb3ZlcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvclZlckxpbmVzLmFtb3VudDsgaSsrKSB7XG4gICAgdmFyIF9saW5lO1xuICAgIHZhciBsaW5lTW92ZXI7XG4gICAgaWYgKGkgPCBob3JWZXJMaW5lcy5hbW91bnQgLyAyKSB7XG4gICAgICB2YXIgcG9zWSA9IE1hdGgucmFuZG9tKCkgKiBob3JWZXJMaW5lcy5oZWlnaHQ7XG4gICAgICBfbGluZSA9ICgwLCBfbGluZTMuZGVmYXVsdCkoeyAnbGluZVBhdGgnOiAoMCwgX2xpbmU1LmRlZmF1bHQpKHtcbiAgICAgICAgICAnZW5kJzogeyAneCc6IGhvclZlckxpbmVzLmxlbmd0aCwgJ3knOiAwIH0sXG4gICAgICAgICAgJ3N0YXJ0JzogeyAneCc6IDAsICd5JzogMCB9XG4gICAgICAgIH0pIH0pO1xuXG4gICAgICB2YXIgb25GaW5pc2hlZEludGVydmFsID0ge1xuICAgICAgICBjYjogZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgICAgdmFyIGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDUwMDA7XG4gICAgICAgICAgX29uZV90aW1lX2RlbGF5Mi5kZWZhdWx0LnJ1bih0aGlzLnN0YXJ0LCB0aGlzLCBkZWxheSk7XG4gICAgICAgIH0gfTtcbiAgICAgIGxpbmVNb3ZlciA9ICgwLCBfbGluZV9tb3ZlcjIuZGVmYXVsdCkoe1xuICAgICAgICBzdWJqZWN0OiBfbGluZS52aWV3LFxuICAgICAgICBzdGFydFBvaW50OiB7IHg6IC1ob3JWZXJMaW5lcy5sZW5ndGgsIHk6IHBvc1kgfSxcbiAgICAgICAgZ29hbFBvaW50OiB7IHg6IGhvclZlckxpbmVzLndpZHRoLCB5OiBwb3NZIH0sXG4gICAgICAgIGludGVydmFsOiAoMCwgX2ludGVydmFsMi5kZWZhdWx0KSh7ICd0eXBlJzogJ21zJywgJ21zJzogaG9yVmVyTGluZXMud2lkdGggLyBob3JWZXJMaW5lcy5zcGVlZCAqIDEwMDAgfSksXG4gICAgICAgIG9uRmluaXNoZWRJbnRlcnZhbDogb25GaW5pc2hlZEludGVydmFsLFxuICAgICAgICBudW1iZXJPZkludGVydmFsczogMSxcbiAgICAgICAgc3RlZXBuZXNzOiAxXG4gICAgICB9KTtcblxuICAgICAgb25GaW5pc2hlZEludGVydmFsLnNjb3BlID0gbGluZU1vdmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcG9zWCA9IE1hdGgucmFuZG9tKCkgKiBob3JWZXJMaW5lcy53aWR0aDtcbiAgICAgIF9saW5lID0gKDAsIF9saW5lMy5kZWZhdWx0KSh7ICdsaW5lUGF0aCc6ICgwLCBfbGluZTUuZGVmYXVsdCkoe1xuICAgICAgICAgICdlbmQnOiB7ICd4JzogMCwgJ3knOiBob3JWZXJMaW5lcy5sZW5ndGggfSxcbiAgICAgICAgICAnc3RhcnQnOiB7ICd4JzogMCwgJ3knOiAwIH1cbiAgICAgICAgfSkgfSk7XG5cbiAgICAgIHZhciBvbkZpbmlzaGVkSW50ZXJ2YWwyID0ge1xuICAgICAgICBjYjogZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgICAgdmFyIGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDUwMDA7XG4gICAgICAgICAgX29uZV90aW1lX2RlbGF5Mi5kZWZhdWx0LnJ1bih0aGlzLnN0YXJ0LCB0aGlzLCBkZWxheSk7XG4gICAgICAgIH0gfTtcblxuICAgICAgbGluZU1vdmVyID0gKDAsIF9saW5lX21vdmVyMi5kZWZhdWx0KSh7XG4gICAgICAgIHN1YmplY3Q6IF9saW5lLnZpZXcsXG4gICAgICAgIHN0YXJ0UG9pbnQ6IHsgeDogcG9zWCwgeTogLWhvclZlckxpbmVzLmxlbmd0aCB9LFxuICAgICAgICBnb2FsUG9pbnQ6IHsgeDogcG9zWCwgeTogaG9yVmVyTGluZXMuaGVpZ2h0IH0sXG4gICAgICAgIGludGVydmFsOiAoMCwgX2ludGVydmFsMi5kZWZhdWx0KSh7ICd0eXBlJzogJ21zJywgJ21zJzogaG9yVmVyTGluZXMuaGVpZ2h0IC8gaG9yVmVyTGluZXMuc3BlZWQgKiAxMDAwIH0pLFxuICAgICAgICBvbkZpbmlzaGVkSW50ZXJ2YWw6IG9uRmluaXNoZWRJbnRlcnZhbDIsXG4gICAgICAgIG51bWJlck9mSW50ZXJ2YWxzOiAxLFxuICAgICAgICBzdGVlcG5lc3M6IDFcbiAgICAgIH0pO1xuXG4gICAgICBvbkZpbmlzaGVkSW50ZXJ2YWwyLnNjb3BlID0gbGluZU1vdmVyO1xuICAgIH1cblxuICAgIGhvclZlckxpbmVzLnZpZXcuYWRkQ2hpbGQoX2xpbmUudmlldyk7XG4gICAgaG9yVmVyTGluZXMuX2xpbmVzTW92ZXJzLnB1c2gobGluZU1vdmVyKTtcbiAgfVxuXG4gIGhvclZlckxpbmVzLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdmFyIGRlbGF5ID0gTWF0aC5yYW5kb20oKSAqIDUwMDA7XG4gICAgICBfb25lX3RpbWVfZGVsYXkyLmRlZmF1bHQucnVuKHRoaXMuX2xpbmVzTW92ZXJzW2pdLnN0YXJ0LCB0aGlzLl9saW5lc01vdmVyc1tqXSwgZGVsYXkpO1xuICAgIH1cbiAgfTtcblxuICBob3JWZXJMaW5lcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5hbW91bnQ7IGorKykge1xuICAgICAgdGhpcy5fbGluZXNNb3ZlcnNbal0uc3RvcCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaG9yVmVyTGluZXM7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2xpbmUyID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZTIpO1xuXG52YXIgX2xpbmU0ID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmU1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZTQpO1xuXG52YXIgX2xpbmVfbW92ZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcnMvcG9zaXRpb24vbGluZV9tb3ZlcicpO1xuXG52YXIgX2xpbmVfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZV9tb3Zlcik7XG5cbnZhciBfaW50ZXJ2YWwgPSByZXF1aXJlKCcuLi8uLi90aW1lcnMvaW50ZXJ2YWwnKTtcblxudmFyIF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbCk7XG5cbnZhciBfb25lX3RpbWVfZGVsYXkgPSByZXF1aXJlKCcuLi8uLi90aW1lcnMvb25lX3RpbWVfZGVsYXknKTtcblxudmFyIF9vbmVfdGltZV9kZWxheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbmVfdGltZV9kZWxheSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob3JfdmVyX2xpbmVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQgPSByZXF1aXJlKCcuL3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQnKTtcblxudmFyIF9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQpO1xuXG52YXIgX2hvcl92ZXJfbGluZXMgPSByZXF1aXJlKCcuL2hvcl92ZXJfbGluZXMnKTtcblxudmFyIF9ob3JfdmVyX2xpbmVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hvcl92ZXJfbGluZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJhbmRvbVJlY3RNb3ZlckJhY2tncm91bmQ6IF9yYW5kb21fcmVjdF9tb3Zlcl9iYWNrZ3JvdW5kMi5kZWZhdWx0LFxuICBob3JWZXJMaW5lczogX2hvcl92ZXJfbGluZXMyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZpbmdfYmFja2dyb3VuZHMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbW91bnQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbXBvbmVudCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG5cbiAgdmFyIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZCA9IHt9O1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuYW1vdW50ID0gb3B0aW9ucy5hbW91bnQ7XG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnNvdXJjZUNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuXG4gIHJhbmRvbVJlY3RNb3ZlQmFja2dyb3VuZC5fbW92ZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuYW1vdW50OyBpKyspIHtcbiAgICB2YXIgc3F1YXJlID0gcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnNvdXJjZUNvbXBvbmVudC5nZXRDb3B5KCk7XG4gICAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLl9tb3ZlcnMucHVzaCgoMCwgX3JhbmRvbV9pbl9yZWN0X21vdmVyMi5kZWZhdWx0KSh7XG4gICAgICBzdWJqZWN0OiBzcXVhcmUudmlldyxcbiAgICAgIHNwZWVkOiByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuc3BlZWQsXG4gICAgICB3aWR0aDogcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLndpZHRoLFxuICAgICAgaGVpZ2h0OiByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuaGVpZ2h0IH0pKTtcbiAgICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQudmlldy5hZGRDaGlsZChzcXVhcmUudmlldyk7XG4gIH1cblxuICByYW5kb21SZWN0TW92ZUJhY2tncm91bmQuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmFtb3VudDsgaisrKSB7XG4gICAgICB0aGlzLl9tb3ZlcnNbal0uc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmFtb3VudDsgaisrKSB7XG4gICAgICB0aGlzLl9tb3ZlcnNbal0uc3RvcCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcmFuZG9tUmVjdE1vdmVCYWNrZ3JvdW5kO1xufTtcblxudmFyIF9yYW5kb21faW5fcmVjdF9tb3ZlciA9IHJlcXVpcmUoJy4uLy4uL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9yYW5kb21faW5fcmVjdF9tb3ZlcicpO1xuXG52YXIgX3JhbmRvbV9pbl9yZWN0X21vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9pbl9yZWN0X21vdmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9yZWN0X21vdmVyX2JhY2tncm91bmQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3dpbmdpbmdfbGluZSA9IHJlcXVpcmUoJy4vc3dpbmdpbmdfbGluZScpO1xuXG52YXIgX3N3aW5naW5nX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3dpbmdpbmdfbGluZSk7XG5cbnZhciBfY3VydmUgPSByZXF1aXJlKCcuL2N1cnZlJyk7XG5cbnZhciBfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VydmUpO1xuXG52YXIgX3dhdmUgPSByZXF1aXJlKCcuL3dhdmUnKTtcblxudmFyIF93YXZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhdmUpO1xuXG52YXIgX2Nwb2ludF9zcGlubmVyID0gcmVxdWlyZSgnLi9jcG9pbnRfc3Bpbm5lcicpO1xuXG52YXIgX2Nwb2ludF9zcGlubmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nwb2ludF9zcGlubmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzd2luZ2luZ0xpbmU6IF9zd2luZ2luZ19saW5lMi5kZWZhdWx0LFxuICBjdXJ2ZTogX2N1cnZlMi5kZWZhdWx0LFxuICBjcG9pbnRTcGlubmVyOiBfY3BvaW50X3NwaW5uZXIyLmRlZmF1bHQsXG4gIHdhdmU6IF93YXZlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmV6aWVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3Bpbm5lciA9IHt9O1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGVuZ3RoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHNwaW5uZXIubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHNwaW5uZXIucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gIHNwaW5uZXIudGltZSA9IG9wdGlvbnMudGltZTtcblxuICBzcGlubmVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzcGlubmVyLnRpbWUsIDEpO1xuICBzcGlubmVyLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3Bpbm5lci5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHNwaW5uZXIubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogc3Bpbm5lci5sZW5ndGggLyAyIC0gc3Bpbm5lci5yYWRpdXMsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBzcGlubmVyLmxlbmd0aCAvIDIgKyBzcGlubmVyLnJhZGl1cywgeTogMCB9IH0pO1xuICBzcGlubmVyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IHNwaW5uZXIuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3Bpbm5lci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdGFydChzcGlubmVyLmhhbmRsZSk7XG4gICAgdGhpcy52aWV3LmFkZENoaWxkKHNwaW5uZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3Bpbm5lci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQoc3Bpbm5lci5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzcGlubmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gKDAsIF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzMi5kZWZhdWx0KShjdXJyZW50ICogMzYwLCB0aGlzLnJhZGl1cyk7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQxLnggPSB0aGlzLmxlbmd0aCAvIDIgLSBjb29yZGluYXRlcy54O1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gLWNvb3JkaW5hdGVzLnk7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQyLnggPSB0aGlzLmxlbmd0aCAvIDIgKyBjb29yZGluYXRlcy54O1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gY29vcmRpbmF0ZXMueTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gc3Bpbm5lcjtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9oZWxwZXIvZGVncmVlc190b19jb29yZGluYXRlcycpO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVncmVlc190b19jb29yZGluYXRlcyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcG9pbnRfc3Bpbm5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGN1cnZlID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aW1lJywgdHJ1ZSk7XG5cbiAgY3VydmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIGN1cnZlLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBjdXJ2ZS50aW1lID0gb3B0aW9ucy50aW1lO1xuXG4gIGN1cnZlLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShjdXJ2ZS50aW1lLCAwLjUpO1xuICBjdXJ2ZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIGN1cnZlLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogY3VydmUubGVuZ3RoLCB5OiAwIH0sIGNwb2ludDE6IHsgeDogMCwgeTogMCB9LCBjcG9pbnQyOiB7IHg6IGN1cnZlLmxlbmd0aCAvIDIsIHk6IDAgfSB9KTtcbiAgY3VydmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogY3VydmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgY3VydmUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIGN1cnZlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RvcCgpO1xuICAgIHRoaXMudmlldy5yZW1vdmVDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIGN1cnZlLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5lbmQueSA9IChjdXJyZW50IC0gMC41KSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKiB0aGlzLmxlbmd0aDtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDIueCA9IChNYXRoLmFicyhjdXJyZW50IC0gMC41KSArIDAuNSkgKiB0aGlzLmxlbmd0aDtcbiAgICB0aGlzLmJlemllckN1cnZlLmNwb2ludDIueSA9IChjdXJyZW50IC0gMC41KSAvIDIgKiB0aGlzLmFtcGxpdHVkZTtcbiAgICB0aGlzLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gY3VydmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1cnZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aW1lJywgdHJ1ZSk7XG5cbiAgc3dpbmdMaW5lLmxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICBzd2luZ0xpbmUuYW1wbGl0dWRlID0gb3B0aW9ucy5hbXBsaXR1ZGU7XG4gIHN3aW5nTGluZS50aW1lID0gb3B0aW9ucy50aW1lO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDAuNSk7XG4gIHN3aW5nTGluZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHN3aW5nTGluZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdGFydCh0aGlzLmhhbmRsZSk7XG4gICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RvcCgpO1xuICAgIHRoaXMudmlldy5yZW1vdmVDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gKGN1cnJlbnQgLSAwLjUpICogdGhpcy5hbXBsaXR1ZGU7XG4gICAgdGhpcy5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHN3aW5nTGluZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L3BhdGhzL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpbmdpbmdfbGluZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHdhdmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0cmV0Y2gnLCBmYWxzZSwgMCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndGltZScsIHRydWUpO1xuXG4gIHdhdmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHdhdmUuYW1wbGl0dWRlID0gb3B0aW9ucy5hbXBsaXR1ZGU7XG4gIHdhdmUudGltZSA9IG9wdGlvbnMudGltZTtcbiAgd2F2ZS5zdHJldGNoID0gb3B0aW9ucy5zdHJldGNoO1xuXG4gIHdhdmUucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKHdhdmUudGltZSwgMC41KTtcbiAgd2F2ZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHdhdmUuYmV6aWVyQ3VydmUgPSAoMCwgX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiB3YXZlLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHdhdmUubGVuZ3RoIC8gMiAtIHdhdmUuc3RyZXRjaCwgeTogMCB9LCBjcG9pbnQyOiB7IHg6IHdhdmUubGVuZ3RoIC8gMiArIHdhdmUuc3RyZXRjaCwgeTogMCB9IH0pO1xuICB3YXZlLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IHdhdmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgd2F2ZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdGFydCh0aGlzLmhhbmRsZSk7XG4gICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgd2F2ZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHVsc2FyLnN0b3AoKTtcbiAgICB0aGlzLnZpZXcucmVtb3ZlQ2hpbGQodGhpcy5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICB3YXZlLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5lbmQueSA9IChjdXJyZW50IC0gMC41KSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKHRoaXMucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC4yNSkgLSAwLjUpICogMS41ICogdGhpcy5hbXBsaXR1ZGU7XG4gICAgdGhpcy5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAodGhpcy5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjUpIC0gMC41KSAqIDEuNSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMuYmV6aWVyQ3VydmUuc3RhcnQueSA9ICh0aGlzLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuNzUpIC0gMC41KSAqIHRoaXMuYW1wbGl0dWRlO1xuICAgIHRoaXMucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiB3YXZlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25fcGF0aF9kcmF3ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9yYW5kb21fcGFydF9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyKTtcblxudmFyIF9iZXppZXIgPSByZXF1aXJlKCcuL2Jlemllci9iZXppZXInKTtcblxudmFyIF9iZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0cmFuc2l0aW9uUGF0aERyYXdlcjogX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIHJhbmRvbVBhcnRQYXRoRHJhd2VyOiBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIGJlemllcjogX2JlemllcjIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfbWFnaWMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG5cbiAgLy8gSGFuZGxlIHBhcmFtZXRlcnM6XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGhPcHRpb25zJywgZmFsc2UsIHt9KTtcbiAgcGF0aERyYXdlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuICBvcHRpb25zLnBhdGhPcHRpb25zLnBhdGggPSBwYXRoRHJhd2VyLnBhdGg7XG5cbiAgLy8gSW5pdFxuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShvcHRpb25zLnBhdGhPcHRpb25zKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5yZW1vdmVDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucGF0aFZpZXcuY29tcGxldGVQYXRoID0gdGhpcy5wYXRoLmdldFBhcnRQYXRoKE1hdGgucmFuZG9tKCkpO1xuICAgIHRoaXMucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBwYXRoRHJhd2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG5cbiAgLy8gSGFuZGxlIFBhcmFtZXRlcnNcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aE9wdGlvbnMnLCB0cnVlKTtcbiAgb3B0aW9ucy5wYXRoT3B0aW9ucy5wYXRoID0gb3B0aW9ucy5wYXRoO1xuICBwYXRoRHJhd2VyLnBhdGggPSBvcHRpb25zLnBhdGg7XG5cbiAgLy8gSW5pdFxuICBwYXRoRHJhd2VyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KSgxMDAwLCAxKTtcbiAgcGF0aERyYXdlci5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkob3B0aW9ucy5wYXRoT3B0aW9ucyk7XG4gIHBhdGhEcmF3ZXIudmlldyA9ICgwLCBfY29udGFpbmVyMi5kZWZhdWx0KSgpO1xuXG4gIHBhdGhEcmF3ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIHRoaXMudmlldy5hZGRDaGlsZCh0aGlzLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMucGF0aFZpZXcuY29tcGxldGVQYXRoID0gdGhpcy5wYXRoLmdldFBhcnRQYXRoKGN1cnJlbnQpO1xuICAgIHRoaXMucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBwYXRoRHJhd2VyO1xufTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uX3BhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Zpc2libGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgZmFsc2UsIFtdKTtcblxuICB2YXIgcmFuZG9tS2Fyb1N3aXRjaCA9IHt9O1xuICByYW5kb21LYXJvU3dpdGNoLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbjtcbiAgcmFuZG9tS2Fyb1N3aXRjaC52aXNpYmxlID0gb3B0aW9ucy52aXNpYmxlO1xuICByYW5kb21LYXJvU3dpdGNoLnNwYWNpbmcgPSBvcHRpb25zLnNwYWNpbmc7XG4gIHJhbmRvbUthcm9Td2l0Y2guY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgcmFuZG9tS2Fyb1N3aXRjaC5fZ3JvdXAgPSAoMCwgX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCkoeyAnY2hpbGRyZW4nOiByYW5kb21LYXJvU3dpdGNoLmNoaWxkcmVuLCAnY29sdW1ucyc6IHJhbmRvbUthcm9Td2l0Y2guY29sdW1ucywgJ3NwYWNpbmcnOiByYW5kb21LYXJvU3dpdGNoLnNwYWNpbmcgfSk7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC52aWV3ID0gcmFuZG9tS2Fyb1N3aXRjaC5fZ3JvdXAudmlldztcblxuICByYW5kb21LYXJvU3dpdGNoLnN3aXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmFuZG9tTnVtYmVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgcmFuZG9tTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgICBzaHVmZmxlKHJhbmRvbU51bWJlcnMpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGogPCB0aGlzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5fZ3JvdXAuY2hpbGRyZW5bcmFuZG9tTnVtYmVyc1tqXV0udmlldy5hbHBoYSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ncm91cC5jaGlsZHJlbltyYW5kb21OdW1iZXJzW2pdXS52aWV3LmFscGhhID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gICAgZm9yICh2YXIgaSA9IGEubGVuZ3RoOyBpOyBpLS0pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgICB2YXIgX3JlZiA9IFthW2pdLCBhW2kgLSAxXV07XG4gICAgICBhW2kgLSAxXSA9IF9yZWZbMF07XG4gICAgICBhW2pdID0gX3JlZlsxXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFuZG9tS2Fyb1N3aXRjaDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwID0gcmVxdWlyZSgnLi4vLi4vZmlsdGVycy9ncm91cC9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlX2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9zcXVhcmVfc3dpdGNoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2x1bW5zJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAndmlzaWJsZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwYWNpbmcnLCBmYWxzZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCBmYWxzZSwgW10pO1xuXG4gIHZhciBzd2l0Y2hJbnRlcnZhbCA9IHt9O1xuXG4gIHN3aXRjaEludGVydmFsLl9ncm91cFN3aXRjaCA9ICgwLCBfcmFuZG9tX3NxdWFyZV9zd2l0Y2gyLmRlZmF1bHQpKG9wdGlvbnMpO1xuICBzd2l0Y2hJbnRlcnZhbC5fZ3JvdXBTd2l0Y2hUaW1lciA9ICgwLCBfaW50ZXJ2YWxfdGltZXIyLmRlZmF1bHQpKG9wdGlvbnMuaW50ZXJ2YWwpO1xuICBzd2l0Y2hJbnRlcnZhbC5fbGlzdGVuZXIgPSBudWxsO1xuXG4gIHN3aXRjaEludGVydmFsLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2xpc3RlbmVyID0gdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZSwgdGhpcyk7XG4gICAgdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5zdGFydCgpO1xuICB9O1xuXG4gIHN3aXRjaEludGVydmFsLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5zdG9wKCk7XG4gICAgdGhpcy5fZ3JvdXBTd2l0Y2hUaW1lci5yZW1vdmVMaXN0ZW5lcih0aGlzLl9saXN0ZW5lcik7XG4gIH07XG5cbiAgc3dpdGNoSW50ZXJ2YWwudmlldyA9IHN3aXRjaEludGVydmFsLl9ncm91cFN3aXRjaC52aWV3O1xuXG4gIHN3aXRjaEludGVydmFsLmhhbmRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9ncm91cFN3aXRjaC5zd2l0Y2goKTtcbiAgfTtcblxuICByZXR1cm4gc3dpdGNoSW50ZXJ2YWw7XG59O1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3N3aXRjaCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfc3dpdGNoKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9pbnRlcnZhbF90aW1lciA9IHJlcXVpcmUoJy4uLy4uL3RpbWVycy9pbnRlcnZhbF90aW1lcicpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsX3RpbWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sdW1ucycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Zpc2libGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3pvb21TcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgZmFsc2UsIFtdKTtcblxuICB2YXIgcmFuZG9tS2Fyb1N3aXRjaCA9IHt9O1xuICByYW5kb21LYXJvU3dpdGNoLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gIHJhbmRvbUthcm9Td2l0Y2gudmlzaWJsZSA9IG9wdGlvbnMudmlzaWJsZTtcbiAgcmFuZG9tS2Fyb1N3aXRjaC5zcGFjaW5nID0gb3B0aW9ucy5zcGFjaW5nO1xuICByYW5kb21LYXJvU3dpdGNoLnpvb21TcGVlZCA9IG9wdGlvbnMuem9vbVNwZWVkO1xuICByYW5kb21LYXJvU3dpdGNoLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbjtcbiAgcmFuZG9tS2Fyb1N3aXRjaC5fem9vbU91dENvbXBvbmVudHMgPSBbXTtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSByYW5kb21LYXJvU3dpdGNoLmNoaWxkcmVuW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIGNoaWxkID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHJhbmRvbUthcm9Td2l0Y2guX3pvb21PdXRDb21wb25lbnRzLnB1c2goKDAsIF96b29tX291dDIuZGVmYXVsdCkoeyBjaGlsZDogY2hpbGQsIGludGVydmFsOiByYW5kb21LYXJvU3dpdGNoLnpvb21TcGVlZCB9KSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBncm91cCA9ICgwLCBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0KSh7ICdjaGlsZHJlbic6IHJhbmRvbUthcm9Td2l0Y2guX3pvb21PdXRDb21wb25lbnRzLCAnY29sdW1ucyc6IHJhbmRvbUthcm9Td2l0Y2guY29sdW1ucywgJ3NwYWNpbmcnOiByYW5kb21LYXJvU3dpdGNoLnNwYWNpbmcgfSk7XG5cbiAgcmFuZG9tS2Fyb1N3aXRjaC52aWV3ID0gZ3JvdXAudmlldztcblxuICByYW5kb21LYXJvU3dpdGNoLnpvb21PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhbmRvbU51bWJlcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJhbmRvbU51bWJlcnMucHVzaChpKTtcbiAgICAgIHRoaXMuX3pvb21PdXRDb21wb25lbnRzW2ldLnJlc2V0KCk7XG4gICAgfVxuICAgIHNodWZmbGUocmFuZG9tTnVtYmVycyk7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaiA8IHRoaXMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLl96b29tT3V0Q29tcG9uZW50c1tyYW5kb21OdW1iZXJzW2pdXS5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICBmb3IgKHZhciBpID0gYS5sZW5ndGg7IGk7IGktLSkge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKTtcbiAgICAgIHZhciBfcmVmID0gW2Fbal0sIGFbaSAtIDFdXTtcbiAgICAgIGFbaSAtIDFdID0gX3JlZlswXTtcbiAgICAgIGFbal0gPSBfcmVmWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5kb21LYXJvU3dpdGNoO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuLi8uLi9maWx0ZXJzL2dyb3VwL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX3pvb21fb3V0ID0gcmVxdWlyZSgnLi4vem9vbV9zdHVmZi96b29tX291dCcpO1xuXG52YXIgX3pvb21fb3V0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3pvb21fb3V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9zcXVhcmVfem9vbV9vdXQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2ggPSByZXF1aXJlKCcuL3JhbmRvbV9zcXVhcmVfc3dpdGNoJyk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV9zd2l0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3NxdWFyZV9zd2l0Y2gpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbCcpO1xuXG52YXIgX3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9zcXVhcmVfc3dpdGNoX2ludGVydmFsKTtcblxudmFyIF9yYW5kb21fc3F1YXJlX3pvb21fb3V0ID0gcmVxdWlyZSgnLi9yYW5kb21fc3F1YXJlX3pvb21fb3V0Jyk7XG5cbnZhciBfcmFuZG9tX3NxdWFyZV96b29tX291dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fc3F1YXJlX3pvb21fb3V0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByYW5kb21TcXVhcmVTd2l0Y2g6IF9yYW5kb21fc3F1YXJlX3N3aXRjaDIuZGVmYXVsdCxcbiAgcmFuZG9tU3F1YXJlU3dpdGNoSW50ZXJ2YWw6IF9yYW5kb21fc3F1YXJlX3N3aXRjaF9pbnRlcnZhbDIuZGVmYXVsdCxcbiAgcmFuZG9tU3F1YXJlWm9vbU91dDogX3JhbmRvbV9zcXVhcmVfem9vbV9vdXQyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcXVhcmVfZ3JvdXBfc3R1ZmYuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYW1vdW50JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuXG4gIHZhciBtb3ZpbmdQb2ludFdlYiA9IHt9O1xuICBtb3ZpbmdQb2ludFdlYi5hbW91bnQgPSBvcHRpb25zLmFtb3VudDtcbiAgbW92aW5nUG9pbnRXZWIud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICBtb3ZpbmdQb2ludFdlYi5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgbW92aW5nUG9pbnRXZWIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBtb3ZpbmdQb2ludFdlYi5fbW92ZXJzID0gW107XG4gIG1vdmluZ1BvaW50V2ViLl9wb2ludHMgPSBbXTtcbiAgbW92aW5nUG9pbnRXZWIuX3BvaW50V2ViID0gbnVsbDtcbiAgbW92aW5nUG9pbnRXZWIuX2xpc3RlbmVyID0gbnVsbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmluZ1BvaW50V2ViLmFtb3VudDsgaSsrKSB7XG4gICAgdmFyIHBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgbW92aW5nUG9pbnRXZWIuX21vdmVycy5wdXNoKCgwLCBfcmFuZG9tX2luX3JlY3RfbW92ZXIyLmRlZmF1bHQpKHtcbiAgICAgIHN1YmplY3Q6IHBvaW50LFxuICAgICAgc3BlZWQ6IG1vdmluZ1BvaW50V2ViLnNwZWVkLFxuICAgICAgaGVpZ2h0OiBtb3ZpbmdQb2ludFdlYi5oZWlnaHQsXG4gICAgICB3aWR0aDogbW92aW5nUG9pbnRXZWIud2lkdGhcbiAgICB9KSk7XG5cbiAgICBtb3ZpbmdQb2ludFdlYi5fcG9pbnRzLnB1c2gocG9pbnQpO1xuICB9XG5cbiAgbW92aW5nUG9pbnRXZWIuX3BvaW50V2ViID0gKDAsIF9wb2ludF93ZWIyLmRlZmF1bHQpKHsgcG9pbnRzOiBtb3ZpbmdQb2ludFdlYi5fcG9pbnRzIH0pO1xuICBtb3ZpbmdQb2ludFdlYi52aWV3ID0gbW92aW5nUG9pbnRXZWIuX3BvaW50V2ViLnZpZXc7XG5cbiAgbW92aW5nUG9pbnRXZWIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLl9tb3ZlcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBtb3ZlciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIG1vdmVyLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXIgPSBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24odGhpcy5fcG9pbnRXZWIuZHJhdywgdGhpcy5fcG9pbnRXZWIpO1xuICB9O1xuXG4gIG1vdmluZ1BvaW50V2ViLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuX2xpc3RlbmVyKTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLl9tb3ZlcnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgdmFyIG1vdmVyID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgIG1vdmVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBtb3ZpbmdQb2ludFdlYjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfcmFuZG9tX2luX3JlY3RfbW92ZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcnMvcG9zaXRpb24vcmFuZG9tX2luX3JlY3RfbW92ZXInKTtcblxudmFyIF9yYW5kb21faW5fcmVjdF9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21faW5fcmVjdF9tb3Zlcik7XG5cbnZhciBfcG9pbnRfd2ViID0gcmVxdWlyZSgnLi9wb2ludF93ZWInKTtcblxudmFyIF9wb2ludF93ZWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9pbnRfd2ViKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3ZpbmdfcG9pbnRfd2ViLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BvaW50cycsIHRydWUpO1xuXG4gIHZhciBwb2ludFdlYiA9IHt9O1xuICBwb2ludFdlYi5wb2ludHMgPSBvcHRpb25zLnBvaW50cztcbiAgcG9pbnRXZWIuX2xpbmVzID0gW107XG4gIHBvaW50V2ViLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBwb2ludFdlYi5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGhpcy5fbGluZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBfbGluZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIF9saW5lLmRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcG9pbnRXZWIuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgdGhpcy5wb2ludHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIF9saW5lUGF0aCA9ICgwLCBfbGluZTUuZGVmYXVsdCkoe1xuICAgICAgICAgIHN0YXJ0OiB0aGlzLnBvaW50c1tpXSxcbiAgICAgICAgICBlbmQ6IHRoaXMucG9pbnRzW2pdXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX2xpbmUgPSAoMCwgX2xpbmUzLmRlZmF1bHQpKHsgbGluZVBhdGg6IF9saW5lUGF0aCB9KTtcbiAgICAgICAgdGhpcy5fbGluZXMucHVzaChfbGluZSk7XG4gICAgICAgIHRoaXMudmlldy5hZGRDaGlsZChfbGluZS52aWV3KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcG9pbnRXZWIuaW5pdCgpO1xuICByZXR1cm4gcG9pbnRXZWI7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2xpbmUyID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZTIpO1xuXG52YXIgX2xpbmU0ID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmU1ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZTQpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9pbnRfd2ViLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BvaW50X3dlYiA9IHJlcXVpcmUoJy4vcG9pbnRfd2ViJyk7XG5cbnZhciBfcG9pbnRfd2ViMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BvaW50X3dlYik7XG5cbnZhciBfbW92aW5nX3BvaW50X3dlYiA9IHJlcXVpcmUoJy4vbW92aW5nX3BvaW50X3dlYicpO1xuXG52YXIgX21vdmluZ19wb2ludF93ZWIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW92aW5nX3BvaW50X3dlYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcG9pbnRXZWI6IF9wb2ludF93ZWIyLmRlZmF1bHQsXG4gIG1vdmluZ1BvaW50V2ViOiBfbW92aW5nX3BvaW50X3dlYjIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcblxuICBvcHRpb25zLm51bWJlck9mSW50ZXJ2YWxzID0gMTtcbiAgb3B0aW9ucy5saW1pdCA9IDA7XG4gIG9wdGlvbnMucmlzaW5nID0gdHJ1ZTtcbiAgb3B0aW9ucy5jZW50ZXJJZlBvc3NpYmxlID0gdHJ1ZTtcbiAgb3B0aW9ucy53aWR0aCA9IG9wdGlvbnMuY2hpbGQuZ2V0V2lkdGgoKTtcbiAgb3B0aW9ucy5oZWlnaHQgPSBvcHRpb25zLmNoaWxkLmdldEhlaWdodCgpO1xuICBvcHRpb25zLnN1YmplY3QgPSBvcHRpb25zLmNoaWxkO1xuICBvcHRpb25zLnN0ZWVwbmVzcyA9IDE7XG4gIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMgPSAxO1xuXG4gIHZhciB6b29tT3V0ID0ge307XG4gIHpvb21PdXQuX2NlbnRyYWxpemVyID0gKDAsIF9jZW50cmFsaXplcjIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHpvb21PdXQuX3pvb21lciA9ICgwLCBfbGluZWFyX3B1bHNhcjIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHpvb21PdXQudmlldyA9IHpvb21PdXQuX2NlbnRyYWxpemVyLnZpZXc7XG5cbiAgem9vbU91dC5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl96b29tZXIuc3RhcnQoKTtcbiAgfTtcblxuICB6b29tT3V0LnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fem9vbWVyLnN0b3AoKTtcbiAgfTtcblxuICB6b29tT3V0LnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3pvb21lci5yZXNldCgpO1xuICB9O1xuXG4gIHJldHVybiB6b29tT3V0O1xufTtcblxudmFyIF9saW5lYXJfcHVsc2FyID0gcmVxdWlyZSgnLi4vLi4vbW9kaWZpY2F0b3JzL3NjYWxlL2xpbmVhcl9wdWxzYXInKTtcblxudmFyIF9saW5lYXJfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmVhcl9wdWxzYXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2NlbnRyYWxpemVyID0gcmVxdWlyZSgnLi4vLi4vZmlsdGVycy9tb3Zlci9jZW50ZXIvY2VudHJhbGl6ZXInKTtcblxudmFyIF9jZW50cmFsaXplcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50cmFsaXplcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tX291dC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF96b29tX291dCA9IHJlcXVpcmUoJy4vem9vbV9vdXQnKTtcblxudmFyIF96b29tX291dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF96b29tX291dCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgem9vbU91dDogX3pvb21fb3V0Mi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbV9zdHVmZi5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgICB2YXIgY29tcG9uZW50ID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG5cbiAgICAgIC8qIHB1YmxpYyBtZXRob2RzICovXG4gICAgICBjb21wb25lbnQudmlldyA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9zaGFwZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2lyY2xlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgICB2YXIgY2lyY2xlID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgLyogcHVibGljIHByb3BlcnRpZXMgKi9cbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XG4gICAgICBjaXJjbGUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICAvKiBwdWJsaWMgbWV0aG9kcyAqL1xuICAgICAgY2lyY2xlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd0NpcmNsZSh0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUsIHRoaXMuY2lyY2xlU2hhcGUucmFkaXVzICogdGhpcy5zY2FsZSwgdGhpcy5jaXJjbGVTaGFwZS5yYWRpdXMgKiB0aGlzLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIGNpcmNsZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUgKiAyO1xuICAgICAgfTtcblxuICAgICAgY2lyY2xlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNpcmNsZVNoYXBlLnJhZGl1cyAqIHRoaXMuc2NhbGUgKiAyO1xuICAgICAgfTtcblxuICAgICAgLyogaW5pdCAqL1xuICAgICAgY2lyY2xlLmRyYXcoKTtcbiAgICAgIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IGNyZWF0ZWpzLkNvbnRhaW5lcigpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjdXN0b21TaGFwZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG4gIGN1c3RvbS5jdXN0b21TaGFwZSA9IG9wdGlvbnMuY3VzdG9tU2hhcGU7XG4gIGN1c3RvbS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgdGhpcy52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmNvbG9yKS5iZWdpblN0cm9rZSgnIzAwRicpLm1vdmVUbygwLCAwKTtcbiAgICB2YXIgY3VycmVudCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmN1c3RvbVNoYXBlLnBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0odGhpcy52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgY3VycmVudCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY3VzdG9tLmRyYXcoKTtcbiAgcmV0dXJuIGN1c3RvbTtcbn07XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9oZWxwZXIvcGF0aF9kcmF3ZXInKTtcblxudmFyIF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VzdG9tX29iamVjdC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKmVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSovXG5mdW5jdGlvbiBwYXRoRHJhd2VyKCkge31cblxucGF0aERyYXdlci5saW5lID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLmxpbmVUbyhjdXJyZW50LnggKyBwYXRoLmdldEVkZ2VQb2ludCgpLngsIGN1cnJlbnQueSArIHBhdGguZ2V0RWRnZVBvaW50KCkueSk7XG59O1xuXG5wYXRoRHJhd2VyLmFyYyA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBpZiAocGF0aC5kZWdyZWVzIDwgMCkge1xuICAgIGdyYXBoaWNzLmFyYyhwYXRoLnN0YXJ0LngsIHBhdGguc3RhcnQueSAtIHBhdGgucmFkaXVzLCBwYXRoLnJhZGl1cywgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSg5MCksICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoOTAgKyBwYXRoLmRlZ3JlZXMpLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBncmFwaGljcy5hcmMocGF0aC5zdGFydC54LCBwYXRoLnN0YXJ0LnkgKyBwYXRoLnJhZGl1cywgcGF0aC5yYWRpdXMsICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoLTkwKSwgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXRoLmRlZ3JlZXMgLSA5MCkpO1xuICB9XG59O1xuXG5wYXRoRHJhd2VyLnNpbmVfd2F2ZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHBhdGguZ2V0TGVuZ3RoKCk7IHggKz0gNSkge1xuICAgIHZhciBwb2ludCA9IHBhdGguZ2V0UG9pbnQoeCAvIHBhdGguZ2V0TGVuZ3RoKCkpO1xuICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfVxufTtcblxucGF0aERyYXdlci5iZXppZXJfY3VydmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgaWYgKHBhdGguY3BvaW50Mikge1xuICAgIGdyYXBoaWNzLmJlemllckN1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmNwb2ludDIueCwgcGF0aC5jcG9pbnQyLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xuICB9IGVsc2Uge1xuICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aERyYXdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XG5cbiAgdmFyIGltYWdlID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgaW1hZ2UudmlldyA9IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpO1xuXG4gIGltYWdlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy52aWV3LnNjYWxlWCA9IHRoaXMuc2NhbGU7XG4gICAgdGhpcy52aWV3LnNjYWxlWSA9IHRoaXMuc2NhbGU7XG4gIH07XG5cbiAgaW1hZ2UuZHJhdygpO1xuICByZXR1cm4gaW1hZ2U7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciBsaW5lID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsaW5lUGF0aCcsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0aGlja25lc3MnLCBmYWxzZSwgMSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIGxpbmUucGF0aCA9IG9wdGlvbnMubGluZVBhdGg7XG4gICAgICBsaW5lLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGxpbmUudGhpY2tuZXNzID0gb3B0aW9ucy50aGlja25lc3M7XG5cbiAgICAgIGxpbmUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5jbGVhcigpLmJlZ2luU3Ryb2tlKHRoaXMuY29sb3IpLnNldFN0cm9rZVN0eWxlKHRoaXMudGhpY2tuZXNzICogdGhpcy5zY2FsZSkubW92ZVRvKHRoaXMucGF0aC5zdGFydC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLnN0YXJ0LnkgKiB0aGlzLnNjYWxlKS5saW5lVG8odGhpcy5wYXRoLmVuZC54ICogdGhpcy5zY2FsZSwgdGhpcy5wYXRoLmVuZC55ICogdGhpcy5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnBhdGguZW5kLnggLSB0aGlzLnBhdGguc3RhcnQueCkgKiB0aGlzLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgbGluZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucGF0aC5lbmQueSAtIHRoaXMucGF0aC5zdGFydC55KSAqIHRoaXMuc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmRyYXcoKTtcbiAgICAgIHJldHVybiBsaW5lO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGlkKTtcblxuICAgIHZhciBjb250YWluZXIgPSB7fTtcblxuICAgIGNvbnRhaW5lci5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UucmVtb3ZlQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YWdlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5zdGFnZSA9IHN0YWdlO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluX2NvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEpO1xuXG4gICAgICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcbiAgICAgIGN1c3RvbS5jb21wbGV0ZVBhdGggPSBvcHRpb25zLnBhdGg7XG4gICAgICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgY3VzdG9tLndpZHRoID0gb3B0aW9ucy53aWR0aDtcblxuICAgICAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpblN0cm9rZSh0aGlzLmNvbG9yKS5zZXRTdHJva2VTdHlsZSh0aGlzLndpZHRoKS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmNvbXBsZXRlUGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXRoX2RyYXdlcjIuZGVmYXVsdFtwYXRoLnR5cGVdKHRoaXMudmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGN1c3RvbS5kcmF3KCk7XG4gICAgICByZXR1cm4gY3VzdG9tO1xufTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZSA9IHJlcXVpcmUoJy4vYWJzdHJhY3Rfc2hhcGUnKTtcblxudmFyIF9hYnN0cmFjdF9zaGFwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9zaGFwZSk7XG5cbnZhciBfcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL2hlbHBlci9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhfZHJhd2VyKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cycpO1xuXG52YXIgX2FkZF91cF9wb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkX3VwX3BvaW50cyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyZWN0YW5nbGVTaGFwZScsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICB2YXIgcmVjdCA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcbiAgICAgIHJlY3QuaGVpZ2h0ID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS5oZWlnaHQ7XG4gICAgICByZWN0LmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgcmVjdC5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgcmVjdC5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZHJhdygpO1xuICAgICAgcmV0dXJuIHJlY3Q7XG59O1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3NoYXBlJyk7XG5cbnZhciBfYWJzdHJhY3Rfc2hhcGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3Rfc2hhcGUpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzcXVhcmVDb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3F1YXJlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgdmFyIHNxdWFyZSA9ICgwLCBfYWJzdHJhY3Rfc2hhcGUyLmRlZmF1bHQpKCk7XG4gICAgICBzcXVhcmUuc3F1YXJlU2hhcGUgPSBvcHRpb25zLnNxdWFyZVNoYXBlO1xuICAgICAgc3F1YXJlLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcblxuICAgICAgc3F1YXJlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5ncmFwaGljcy5iZWdpbkZpbGwodGhpcy5jb2xvcikuZHJhd1JlY3QoMCwgMCwgdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZSwgdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBzcXVhcmUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHNxdWFyZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcXVhcmVTaGFwZS5zaWRlbGVuZ3RoICogdGhpcy5zY2FsZTtcbiAgICAgIH07XG5cbiAgICAgIHNxdWFyZS5kcmF3KCk7XG4gICAgICByZXR1cm4gc3F1YXJlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBzcXVhcmVDb25zdHJ1Y3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgIC8qIFBhcmFtZXRlcnMgKi9cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cbiAgICAgIGhhbmRsZVZpZGVvU291cmNlKCk7XG5cbiAgICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgICAgdmFyIHZpZGVvID0gKDAsIF9hYnN0cmFjdF9zaGFwZTIuZGVmYXVsdCkoKTtcblxuICAgICAgLyogcHVibGljIHByb3BlcnRpZXMgKi9cbiAgICAgIHZpZGVvLnZpZXcgPSBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKTtcbiAgICAgIHZpZGVvLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICAgICAgLyogcHVibGljIG1ldGhvZHMgKi9cbiAgICAgIHZpZGVvLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NhbGVYID0gdmlkZW8uc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2NhbGVZID0gdmlkZW8uc2NhbGU7XG4gICAgICB9O1xuXG4gICAgICB2aWRlby5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UucGxheSgpO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8uc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5jdXJyZW50VGltZSA9IDA7XG4gICAgICB9O1xuXG4gICAgICB2aWRlby5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnBhdXNlKCk7XG4gICAgICB9O1xuXG4gICAgICAvKiBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgICAgICAgICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBpbml0ICovXG4gICAgICB2aWRlby5kcmF3KCk7XG4gICAgICByZXR1cm4gdmlkZW87XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9zaGFwZScpO1xuXG52YXIgX2Fic3RyYWN0X3NoYXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3NoYXBlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZGVvLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX21haW5fY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJyk7XG5cbnZhciBfbWFpbl9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbl9jb250YWluZXIpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY3VzdG9tX29iamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0Jyk7XG5cbnZhciBfY3VzdG9tX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21fb2JqZWN0KTtcblxudmFyIF9pbWFnZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pbWFnZScpO1xuXG52YXIgX2ltYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ltYWdlKTtcblxudmFyIF92aWRlbyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy92aWRlbycpO1xuXG52YXIgX3ZpZGVvMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZpZGVvKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY29udGFpbmVyOiBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHQsXG4gICAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICAgIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICAgIGN1c3RvbU9iamVjdDogX2N1c3RvbV9vYmplY3QyLmRlZmF1bHQsXG4gICAgbWFpbkNvbnRhaW5lcjogX21haW5fY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIGltYWdlOiBfaW1hZ2UyLmRlZmF1bHQsXG4gICAgdmlkZW86IF92aWRlbzIuZGVmYXVsdCxcbiAgICBwYXRoOiBfcGF0aDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhY3RvcnkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWx0ZXIgPSAoMCwgX2Fic3RyYWN0X2NvbXBvbmVudDIuZGVmYXVsdCkoKTtcblxuICAgIGZpbHRlci52aWV3ID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfZmlsdGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmaWx0ZXIpIHtcblxuICAgIGZpbHRlci5fbGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuX2xpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25fZmlsdGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgIHZhciBhYnN0cmFjdEdyb3VwID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gICAgYWJzdHJhY3RHcm91cC5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfTtcblxuICAgIGFic3RyYWN0R3JvdXAucmVtb3ZlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCksIDEpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFic3RyYWN0R3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIGZhbHNlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICB2YXIgY2VudGVyR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjZW50ZXJHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgY2VudGVyR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpZXcucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGhpcy5jaGlsZHJlbltpXS52aWV3KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIueCA9IGNvbnRhaW5lci54ID0gKGkgKyAxKSAqIHRoaXMud2lkdGggLyAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnkgPSBjb250YWluZXIueCA9IChpICsgMSkgKiB0aGlzLmhlaWdodCAvICh0aGlzLmNoaWxkcmVuLmxlbmd0aCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjZW50ZXJHcm91cC5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIGNlbnRlckdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlbnRlcl9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgZmFsc2UsIDEwKTtcbiAgICB2YXIgY2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjaXJjbGVHcm91cC5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcblxuICAgIHZhciBhbmdsZSA9IDM2MCAvIGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgdmFyIGlubmVyQ29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5yb3RhdGlvbiA9IGFuZ2xlICogaTtcbiAgICAgICAgaW5uZXJDb250YWluZXIueSA9IC1jaXJjbGVHcm91cC5yYWRpdXM7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKGNpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBjaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNpcmNsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXApO1xuXG52YXIgX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfY2lyY2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vc3BpcmFsX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3NwaXJhbF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3BpcmFsX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2NpcmNsZV9ncm91cCk7XG5cbnZhciBfY2VudGVyX2dyb3VwID0gcmVxdWlyZSgnLi9jZW50ZXJfZ3JvdXAnKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudGVyX2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGVHcm91cDogX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCxcbiAgcmFuZG9tUmVjdGFuZ2xlR3JvdXA6IF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICBjaXJjbGVHcm91cDogX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgc3BpcmFsQ2lyY2xlR3JvdXA6IF9zcGlyYWxfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21DaXJjbGVHcm91cDogX3JhbmRvbV9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNlbnRlckdyb3VwOiBfY2VudGVyX2dyb3VwMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYW5kb21SYW5nZScsIGZhbHNlLCAxMCk7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2lyY2xlR3JvdXAucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG4gICAgY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgPSBvcHRpb25zLnJhbmRvbVJhbmdlO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpcmNsZUdyb3VwLnJhbmRvbVJhbmdlIC0gY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgKiAwLjUpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci5hZGRDaGlsZChjaXJjbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGlubmVyQ29udGFpbmVyKTtcbiAgICAgICAgY2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBjaXJjbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fY2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCAxMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCBmYWxzZSwgMTApO1xuXG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgcmVjdGFuZ2xlR3JvdXAud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHJlY3RhbmdsZUdyb3VwLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgICAgICBjb250YWluZXIueCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKHRoaXMuaGVpZ2h0ICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZWN0YW5nbGVHcm91cC5yZWZyZXNoKCk7XG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9yZWN0YW5nbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCBmYWxzZSwgMyk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UsIDEwKTtcblxuICAgIHZhciByZWN0YW5nbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICByZWN0YW5nbGVHcm91cC5zcGFjaW5nID0gb3B0aW9ucy5zcGFjaW5nO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLnggPSBpICUgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XG4gICAgICAgIGNvbnRhaW5lci55ID0gTWF0aC5mbG9vcihpIC8gcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xuICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnRSYWRpdXMnLCBmYWxzZSwgMTApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZFJhZGl1cycsIGZhbHNlLCAxKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyb3VuZHMnLCBmYWxzZSwgMSk7XG5cbiAgdmFyIHNwaXJhbENpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzID0gb3B0aW9ucy5zdGFydFJhZGl1cztcbiAgc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzID0gb3B0aW9ucy5lbmRSYWRpdXM7XG4gIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyA9IG9wdGlvbnMucm91bmRzO1xuXG4gIHZhciBhbmdsZSA9IDM2MCAqIHNwaXJhbENpcmNsZUdyb3VwLnJvdW5kcyAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgdmFyIHJhZGl1c0luY3JlYXNlQW1vdW50ID0gKHNwaXJhbENpcmNsZUdyb3VwLmVuZFJhZGl1cyAtIHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzKSAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgaW5uZXJDb250YWluZXIueSA9IC0oc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMgKyByYWRpdXNJbmNyZWFzZUFtb3VudCAqIGkpO1xuICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgc3BpcmFsQ2lyY2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgcmV0dXJuIHNwaXJhbENpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwaXJhbF9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XG5cbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubW9kaWZpY2F0b3Iuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB0aGlzLm1vZGlmaWNhdG9yLnN0b3AoKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGlmaWNhdG9yX2ZpbHRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIHRydWUpO1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIGNlbnRlckZpbHRlciA9ICgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpO1xuXG4gICAgLyogcHVibGljIHZhcnMgKi9cbiAgICBjZW50ZXJGaWx0ZXIud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIGNlbnRlckZpbHRlci5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNlbnRlckZpbHRlci5vblByb3BlcnR5Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldFdpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcueCA9IHRoaXMud2lkdGggLyAyIC0gdGhpcy5nZXRDaGlsZCgpLmdldFdpZHRoKCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcueSA9IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuZ2V0Q2hpbGQoKS5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY2VudGVyRmlsdGVyLm9uUHJvcGVydHlDaGFuZ2UoKTtcbiAgICAvKiByZXR1cm4gKi9cbiAgICByZXR1cm4gY2VudGVyRmlsdGVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jZW50cmFsaXplci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jZW50cmFsaXplciA9IHJlcXVpcmUoJy4vY2VudGVyL2NlbnRyYWxpemVyJyk7XG5cbnZhciBfY2VudHJhbGl6ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2VudHJhbGl6ZXIpO1xuXG52YXIgX3BhdGhNb3ZlciA9IHJlcXVpcmUoJy4vcGF0aC9wYXRoLW1vdmVyJyk7XG5cbnZhciBfcGF0aE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhNb3Zlcik7XG5cbnZhciBfbGluZWFyID0gcmVxdWlyZSgnLi9wb2ludDJwb2ludC9saW5lYXInKTtcblxudmFyIF9saW5lYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyKTtcblxudmFyIF9saW5lYXJfc2hha2UgPSByZXF1aXJlKCcuL3BvaW50MnBvaW50L2xpbmVhcl9zaGFrZScpO1xuXG52YXIgX2xpbmVhcl9zaGFrZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfc2hha2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNlbnRlcjoge1xuICAgIGNlbnRyYWxpemVyOiBfY2VudHJhbGl6ZXIyLmRlZmF1bHRcbiAgfSxcbiAgcGF0aDoge1xuICAgIHBhdGhNb3ZlcjogX3BhdGhNb3ZlcjIuZGVmYXVsdFxuICB9LFxuICBsaW5lYXI6IHtcbiAgICBsaW5lYXI6IF9saW5lYXIyLmRlZmF1bHQsXG4gICAgbGluZWFyU2hha2U6IF9saW5lYXJfc2hha2UyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuXG4gIHZhciBwYXRoTW92ZXIgPSAoMCwgX3RyYW5zaXRpb25fZmlsdGVyMi5kZWZhdWx0KSgoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpLCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIHBhdGhNb3Zlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgcGF0aE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5wYXRoLmdldFBvaW50KGN1cnJlbnQpO1xuICAgIHRoaXMudmlldy54ID0gcG9pbnQueDtcbiAgICB0aGlzLnZpZXcueSA9IHBvaW50Lnk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9uX2ZpbHRlcicpO1xuXG52YXIgX3RyYW5zaXRpb25fZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLW1vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAvKiBQcml2YXRlIHZhcnMgKi9cbiAgICB2YXIgbGluZWFyUDJQTW92ZXIgPSAoMCwgX3NpbmdsZV9jaGlsZF9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfbW9kaWZpY2F0b3JfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkob3B0aW9ucykpLCBvcHRpb25zKTtcblxuICAgIG9wdGlvbnMuc3ViamVjdCA9IGxpbmVhclAyUE1vdmVyLnZpZXc7XG4gICAgbGluZWFyUDJQTW92ZXIubW9kaWZpY2F0b3IgPSAoMCwgX2xpbmVfbW92ZXIyLmRlZmF1bHQpKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGxpbmVhclAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9tb2RpZmljYXRvcl9maWx0ZXInKTtcblxudmFyIF9tb2RpZmljYXRvcl9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kaWZpY2F0b3JfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfbGluZV9tb3ZlciA9IHJlcXVpcmUoJy4uLy4uLy4uL21vZGlmaWNhdG9ycy9wb3NpdGlvbi9saW5lX21vdmVyJyk7XG5cbnZhciBfbGluZV9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lX21vdmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUHJpdmF0ZSB2YXJzICovXG4gICAgdmFyIGxpbmVhclAyUE1vdmVyID0gKDAsIF9zaW5nbGVfY2hpbGRfZmlsdGVyMi5kZWZhdWx0KSgoMCwgX21vZGlmaWNhdG9yX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKG9wdGlvbnMpKSwgb3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLnN1YmplY3QgPSBsaW5lYXJQMlBNb3Zlci52aWV3O1xuICAgIGxpbmVhclAyUE1vdmVyLm1vZGlmaWNhdG9yID0gKDAsIF9saW5lX3NoYWtlX21vdmVyMi5kZWZhdWx0KShvcHRpb25zKTtcblxuICAgIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfbW9kaWZpY2F0b3JfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vbW9kaWZpY2F0b3JfZmlsdGVyJyk7XG5cbnZhciBfbW9kaWZpY2F0b3JfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZGlmaWNhdG9yX2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJy4uLy4uL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX2xpbmVfc2hha2VfbW92ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9tb2RpZmljYXRvcnMvcG9zaXRpb24vbGluZV9zaGFrZV9tb3ZlcicpO1xuXG52YXIgX2xpbmVfc2hha2VfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZV9zaGFrZV9tb3Zlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfc2hha2UuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIHZhciBmYWRlciA9ICgwLCBfdHJhbnNpdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIGZhZGVyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgICAgIHRoaXMudmlldy5hbHBoYSA9IGN1cnJlbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiBmYWRlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfc2luZ2xlX2NoaWxkX2ZpbHRlciA9IHJlcXVpcmUoJy4uL3NpbmdsZV9jaGlsZF9maWx0ZXInKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbmdsZV9jaGlsZF9maWx0ZXIpO1xuXG52YXIgX3RyYW5zaXRpb25fZmlsdGVyID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbl9maWx0ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2ZpbHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIGZsYXNoZXIgPSAoMCwgX2FuaW1hdGlvbl9maWx0ZXIyLmRlZmF1bHQpKCgwLCBfc2luZ2xlX2NoaWxkX2ZpbHRlcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCksIG9wdGlvbnMpLCBvcHRpb25zKTtcblxuICAgIGZsYXNoZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnZpZXcudmlzaWJsZSA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XG4gICAgfTtcblxuICAgIHJldHVybiBmbGFzaGVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9zaW5nbGVfY2hpbGRfZmlsdGVyID0gcmVxdWlyZSgnLi4vc2luZ2xlX2NoaWxkX2ZpbHRlcicpO1xuXG52YXIgX3NpbmdsZV9jaGlsZF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlX2NoaWxkX2ZpbHRlcik7XG5cbnZhciBfYW5pbWF0aW9uX2ZpbHRlciA9IHJlcXVpcmUoJy4uL2FuaW1hdGlvbl9maWx0ZXInKTtcblxudmFyIF9hbmltYXRpb25fZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbl9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zmxhc2hlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCBmYWxzZSwgMSk7XG4gIHZhciBsaW5lYXJSb3RhdG9yID0gKDAsIF9hbmltYXRpb25fZmlsdGVyMi5kZWZhdWx0KSgoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKSk7XG4gIGxpbmVhclJvdGF0b3Iuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBsaW5lYXJSb3RhdG9yLnZpZXcuYWRkQ2hpbGQob3B0aW9ucy5jaGlsZC52aWV3KTtcblxuICBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICB0aGlzLnZpZXcucm90YXRpb24gPSB0aGlzLnZpZXcucm90YXRpb24gKyB0aGlzLnNwZWVkICogKGV2ZW50LmRlbHRhIC8gMTAwMCk7XG4gIH1cblxuICBsaW5lYXJSb3RhdG9yLmhhbmRsZSA9IGhhbmRsZTtcblxuICByZXR1cm4gbGluZWFyUm90YXRvcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfYW5pbWF0aW9uX2ZpbHRlciA9IHJlcXVpcmUoJy4uL2FuaW1hdGlvbl9maWx0ZXInKTtcblxudmFyIF9hbmltYXRpb25fZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGlvbl9maWx0ZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3JvdGF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZpbHRlciwgb3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcblxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgIGZpbHRlci5fY2hpbGQgPSBvcHRpb25zLmNoaWxkO1xuICAgIGZpbHRlci5fbGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLyogY2FsbGJhY2tzICovXG4gICAgZmlsdGVyLl9fb25Qcm9wZXJ0eUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25Qcm9wZXJ0eUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vblByb3BlcnR5Q2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kRXZlbnQoJ3Byb3BlcnR5X2NoYW5nZScpO1xuICAgIH07XG5cbiAgICAvKiBtZXRob2RzICovXG4gICAgZmlsdGVyLnNldENoaWxkID0gZnVuY3Rpb24gKG5ld0NoaWxkKSB7XG4gICAgICAgIGlmICh0aGlzLl9jaGlsZC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcm9wZXJ0eV9jaGFuZ2UnLCB0aGlzLl9saXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LnJlbW92ZUNoaWxkKHRoaXMuX2NoaWxkLnZpZXcpO1xuICAgICAgICB0aGlzLl9jaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICBpZiAodGhpcy5fY2hpbGQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSB0aGlzLl9jaGlsZC5hZGRFdmVudExpc3RlbmVyKCdwcm9wZXJ0eV9jaGFuZ2UnLCB0aGlzLl9fb25Qcm9wZXJ0eUNoYW5nZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3LmFkZENoaWxkKHRoaXMuX2NoaWxkLnZpZXcpO1xuICAgIH07XG5cbiAgICBmaWx0ZXIuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZDtcbiAgICB9O1xuXG4gICAgLyogaW5pdCAqL1xuICAgIGZpbHRlci5zZXRDaGlsZChvcHRpb25zLmNoaWxkKTtcbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbmdsZV9jaGlsZF9maWx0ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZpbHRlciwgb3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcblxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgIGZpbHRlci5fZmlsdGVyVHJhbnNpdGlvbiA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShvcHRpb25zLmludGVydmFsLCAwLjUpO1xuXG4gICAgLyogUHVibGljIG1ldGhvZHMgKi9cbiAgICBmaWx0ZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2ZpbHRlclRyYW5zaXRpb24uc3RhcnQodGhpcy5oYW5kbGUpO1xuICAgIH07XG5cbiAgICBmaWx0ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyVHJhbnNpdGlvbi5zdG9wKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBmaWx0ZXI7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbl9maWx0ZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHBvaW50MSwgcG9pbnQyKSB7XG4gIHZhciBwb2ludCA9IHt9O1xuICBwb2ludC54ID0gcG9pbnQxLnggKyBwb2ludDIueDtcbiAgcG9pbnQueSA9IHBvaW50MS55ICsgcG9pbnQyLnk7XG4gIHJldHVybiBwb2ludDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGRfdXBfcG9pbnRzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmVjdG9yMSwgdmVjdG9yMikge1xuICBpZiAodmVjdG9yMS5sZW5ndGggIT09IHZlY3RvcjIubGVuZ3RoKSB7XG4gICAgdGhyb3cgJ0Nhbm5vdCBjYWxjdWxhdGUgZGlzdGFuY2Ugb2YgdmVjdG9ycyB3aXRoIGRpZmZlcmVudCBudW1iZXJzIG9mIGRpbWVuc2lvbnMnO1xuICB9XG4gIHZhciBkaXN0YW5jZSA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKykge1xuICAgIGRpc3RhbmNlICs9IE1hdGgucG93KHZlY3RvcjFbaV0gLSB2ZWN0b3IyW2ldLCAyKTtcbiAgfVxuICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RhbmNlKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXN0YW5jZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYW5nbGUpIHtcbiAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmdsZV90b19yYWRpYW5zLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYW5nbGUsIGxlbmd0aCkge1xuICB2YXIgcmFkID0gKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShhbmdsZSk7XG4gIHJldHVybiB7IHg6IE1hdGguY29zKHJhZCkgKiBsZW5ndGgsIHk6IE1hdGguc2luKHJhZCkgKiBsZW5ndGggfTtcbn07XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJy4vYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYXJjQ29uc3RydWN0b3I7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJy4uL2hlbHBlci9hbmdsZV90b19yYWRpYW5zJyk7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFuczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZV90b19yYWRpYW5zKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXJjQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gIC8vIFBhcmFtZXRlcnNcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZGVncmVlcycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuXG4gIC8vIHByaXZhdGUgdmFyc1xuICB2YXIgYXJjID0ge307XG5cbiAgYXJjLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgYXJjLmRlZ3JlZXMgPSBvcHRpb25zLmRlZ3JlZXM7XG4gIGFyYy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgYXJjLnR5cGUgPSAnYXJjJztcblxuICAvLyBwdWJsaWMgZnVuY3Rpb25zXG4gIGFyYy5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9pbnQoMSk7XG4gIH07XG5cbiAgYXJjLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoMiAqIE1hdGguUEkgKiB0aGlzLnJhZGl1cyAqICh0aGlzLmRlZ3JlZXMgLyAzNjApKTtcbiAgfTtcblxuICBhcmMuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgb3JpZ2luID0geyB4OiB0aGlzLnN0YXJ0LngsIHk6IHRoaXMuc3RhcnQueSB9O1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gdGhpcy5kZWdyZWVzICogcHJvZ3Jlc3M7XG5cbiAgICBpZiAodGhpcy5kZWdyZWVzIDwgMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogb3JpZ2luLnggKyB0aGlzLnJhZGl1cyAqIE1hdGguc2luKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoLXBhcnRPZkRlZ3JlZXMpKSxcbiAgICAgICAgeTogb3JpZ2luLnkgLSB0aGlzLnJhZGl1cyArIHRoaXMucmFkaXVzICogTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9yaWdpbi54ICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbigoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhcnRPZkRlZ3JlZXMpKSxcbiAgICAgIHk6IG9yaWdpbi55ICsgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIC1NYXRoLmNvcygoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhcnRPZkRlZ3JlZXMpKVxuICAgIH07XG4gIH07XG5cbiAgYXJjLnN1YlBhdGhzID0gW2FyY107XG5cbiAgYXJjLmdldEFuZ2xlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkodGhpcy5kZWdyZWVzICogcHJvZ3Jlc3MpO1xuICB9O1xuXG4gIGFyYy5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gdGhpcy5kZWdyZWVzICogcHJvZ3Jlc3M7XG4gICAgcmV0dXJuIGFyY0NvbnN0cnVjdG9yKHsgc3RhcnQ6IHRoaXMuc3RhcnQsIGRlZ3JlZXM6IHBhcnRPZkRlZ3JlZXMsIHJhZGl1czogdGhpcy5yYWRpdXMgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGFyYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyYy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjcG9pbnQxJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3BvaW50MicsIGZhbHNlKTtcblxuICB2YXIgYmV6aWVyQ3VydmUgPSB7fTtcbiAgYmV6aWVyQ3VydmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBiZXppZXJDdXJ2ZS5lbmQgPSBvcHRpb25zLmVuZDtcbiAgYmV6aWVyQ3VydmUuY3BvaW50MSA9IG9wdGlvbnMuY3BvaW50MTtcbiAgYmV6aWVyQ3VydmUuY3BvaW50MiA9IG9wdGlvbnMuY3BvaW50MjtcbiAgYmV6aWVyQ3VydmUudHlwZSA9ICdiZXppZXJfY3VydmUnO1xuXG4gIGlmIChiZXppZXJDdXJ2ZS5jcG9pbnQyKSB7XG4gICAgYmV6aWVyQ3VydmUuaW50ZXJuYWxCZXppZXIgPSBuZXcgX2JlemllckpzMi5kZWZhdWx0KGJlemllckN1cnZlLnN0YXJ0LCBiZXppZXJDdXJ2ZS5jcG9pbnQxLCBiZXppZXJDdXJ2ZS5jcG9pbnQyLCBiZXppZXJDdXJ2ZS5lbmQpO1xuICB9IGVsc2Uge1xuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IF9iZXppZXJKczIuZGVmYXVsdChiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuZW5kKTtcbiAgfVxuXG4gIGJlemllckN1cnZlLnN1YlBhdGhzID0gW2JlemllckN1cnZlXTtcblxuICBiZXppZXJDdXJ2ZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9O1xuXG4gIGJlemllckN1cnZlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcm5hbEJlemllci5sZW5ndGgoKTtcbiAgfTtcblxuICBiZXppZXJDdXJ2ZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiB0aGlzLmludGVybmFsQmV6aWVyLmdldChwcm9ncmVzcyk7XG4gIH07XG5cbiAgLy9UT0RPIEFkZCBnZXQgcGFydCBwYXRoIGZ1bmN0aW9uXG5cbiAgcmV0dXJuIGJlemllckN1cnZlO1xufTtcblxudmFyIF9iZXppZXJKcyA9IHJlcXVpcmUoJ2Jlemllci1qcycpO1xuXG52YXIgX2JlemllckpzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JlemllckpzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllcl9jdXJ2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxpbmVDb25zdHJ1Y3RvcjtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCcuLi90b192ZWN0b3InKTtcblxudmFyIF90b192ZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9fdmVjdG9yKTtcblxudmFyIF9kaXN0YW5jZSA9IHJlcXVpcmUoJy4uL2Rpc3RhbmNlJyk7XG5cbnZhciBfZGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlzdGFuY2UpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBsaW5lQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xuXG4gIHZhciBsaW5lID0ge307XG4gIGxpbmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBsaW5lLmVuZCA9IG9wdGlvbnMuZW5kO1xuICBsaW5lLnR5cGUgPSAnbGluZSc7XG5cbiAgbGluZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kO1xuICB9O1xuXG4gIGxpbmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkodGhpcy5zdGFydCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KSh0aGlzLmVuZCkpO1xuICB9O1xuXG4gIGxpbmUuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy5zdGFydC54ICsgKHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpICogcHJvZ3Jlc3MsXG4gICAgICB5OiB0aGlzLnN0YXJ0LnkgKyAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgKiBwcm9ncmVzc1xuICAgIH07XG4gIH07XG5cbiAgbGluZS5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBuZXdFbmQgPSB7IHg6IHRoaXMuZW5kLnggKiBwcm9ncmVzcywgeTogdGhpcy5lbmQueSAqIHByb2dyZXNzIH07XG4gICAgdmFyIHBhdGhQYXJ0ID0gbGluZUNvbnN0cnVjdG9yKHsgc3RhcnQ6IHRoaXMuc3RhcnQsIGVuZDogbmV3RW5kIH0pO1xuICAgIHJldHVybiBwYXRoUGFydDtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwYXRoQ29uc3RydWN0b3I7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJy4uL2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXRoQ29uc3RydWN0b3IoKSB7XG5cbiAgdmFyIHBhdGggPSB7fTtcblxuICBwYXRoLnN1YlBhdGhzID0gW107XG5cbiAgcGF0aC5nZXRFZGdlUG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlZGdlUG9pbnRzID0gW107XG4gICAgZWRnZVBvaW50cy5wdXNoKHsgeDogMCwgeTogMCB9KTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBzdWJQYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgZWRnZVBvaW50cy5wdXNoKCgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoZWRnZVBvaW50c1tlZGdlUG9pbnRzLmxlbmd0aCAtIDFdLCBzdWJQYXRoLmdldEVkZ2VQb2ludCgpKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VQb2ludHM7XG4gIH07XG5cbiAgcGF0aC5nZXRTdGFydFBvaW50T2YgPSBmdW5jdGlvbiAoc3ViUGF0aCkge1xuICAgIHZhciBzdGFydFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjIgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB0aGlzLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAyOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gKF9zdGVwMiA9IF9pdGVyYXRvcjIubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlKSB7XG4gICAgICAgIHZhciBjdXJyZW50UGF0aCA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgICBpZiAoY3VycmVudFBhdGggPT09IHN1YlBhdGgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRQb2ludDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFBvaW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdGFydFBvaW50LCBjdXJyZW50UGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjIgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgJiYgX2l0ZXJhdG9yMi5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IyLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IyKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHRoaXMuZ2V0TGVuZ3RoKCk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gdGhpcy5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMzsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IChfc3RlcDMgPSBfaXRlcmF0b3IzLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICBpZiAobGVuZ3RoUG9pbnQgPiBzdWJQYXRoLmdldExlbmd0aCgpKSB7XG4gICAgICAgICAgbGVuZ3RoUG9pbnQgLT0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShzdWJQYXRoLmdldFBvaW50KGxlbmd0aFBvaW50IC8gc3ViUGF0aC5nZXRMZW5ndGgoKSksIHRoaXMuZ2V0U3RhcnRQb2ludE9mKHN1YlBhdGgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IzID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMyA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyAmJiBfaXRlcmF0b3IzLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjMucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjMpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGF0aC5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yNCA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gdGhpcy5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwNDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IChfc3RlcDQgPSBfaXRlcmF0b3I0Lm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwNC52YWx1ZTtcblxuICAgICAgICBsZW5ndGggKz0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yNCA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjQgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgJiYgX2l0ZXJhdG9yNC5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3I0LnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3I0KSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfTtcblxuICBwYXRoLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG5ld1N1YlBhdGhzID0gW107XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiB0aGlzLmdldExlbmd0aCgpO1xuICAgIHZhciBzdWJQYXRoc1JldHJpZXZlZCA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50UGF0aCA9IDA7XG5cbiAgICB3aGlsZSAoIXN1YlBhdGhzUmV0cmlldmVkKSB7XG4gICAgICBpZiAobGVuZ3RoUG9pbnQgPiB0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkge1xuICAgICAgICBsZW5ndGhQb2ludCAtPSB0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKTtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaCh0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aCgxKSk7XG4gICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3ViUGF0aHMucHVzaCh0aGlzLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRQYXJ0UGF0aChsZW5ndGhQb2ludCAvIHRoaXMuc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSk7XG4gICAgICAgIHN1YlBhdGhzUmV0cmlldmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcGFydFBhdGggPSBwYXRoQ29uc3RydWN0b3IoKTtcbiAgICBwYXJ0UGF0aC5zdWJQYXRocyA9IG5ld1N1YlBhdGhzO1xuICAgIHJldHVybiBwYXJ0UGF0aDtcbiAgfTtcblxuICByZXR1cm4gcGF0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGguanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFyYzogX2FyYzIuZGVmYXVsdCxcbiAgbGluZTogX2xpbmUyLmRlZmF1bHQsXG4gIHBhdGg6IF9wYXRoMi5kZWZhdWx0LFxuICBiZXppZXJDdXJ2ZTogX2Jlemllcl9jdXJ2ZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHBvaW50LCBhbmdsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBvaW50LnggKiBNYXRoLmNvcyhhbmdsZSkgLSBwb2ludC55ICogTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICB5OiBwb2ludC54ICogTWF0aC5zaW4oYW5nbGUpICsgcG9pbnQueSAqIE1hdGguY29zKGFuZ2xlKVxuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm90YXRlX3BvaW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgdHJ1ZSk7XG5cbiAgdmFyIGNpcmNsZSA9IHt9O1xuICBjaXJjbGUucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XG5cbiAgY2lyY2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIGNpcmNsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9hcmMyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogLWNpcmNsZS5yYWRpdXMgfSwgZGVncmVlczogMzYwLCByYWRpdXM6IGNpcmNsZS5yYWRpdXMgfSkpO1xuXG4gIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9hcmMgPSByZXF1aXJlKCcuLi9wYXRocy9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG5cbiAgdmFyIHJlY3RhbmdsZSA9IHt9O1xuICByZWN0YW5nbGUud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByZWN0YW5nbGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgcmVjdGFuZ2xlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogcmVjdGFuZ2xlLmhlaWdodCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXJlY3RhbmdsZS53aWR0aCwgeTogMCB9IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogMCwgeTogLXJlY3RhbmdsZS5oZWlnaHQgfSB9KSk7XG5cbiAgcmV0dXJuIHJlY3RhbmdsZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uL3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuLi9wYXRocy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWN0YW5nbGUgPSByZXF1aXJlKCcuL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vc3F1YXJlJyk7XG5cbnZhciBfc3F1YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZSk7XG5cbnZhciBfY2lyY2xlID0gcmVxdWlyZSgnLi9jaXJjbGUnKTtcblxudmFyIF9jaXJjbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICByZWN0YW5nbGU6IF9yZWN0YW5nbGUyLmRlZmF1bHQsXG4gIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgY2lyY2xlOiBfY2lyY2xlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2hhcGVzLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2lkZWxlbmd0aCcsIHRydWUpO1xuXG4gIHZhciBzcXVhcmUgPSB7fTtcbiAgc3F1YXJlLnNpZGVsZW5ndGggPSBvcHRpb25zLnNpZGVsZW5ndGg7XG5cbiAgc3F1YXJlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiBzcXVhcmUuc2lkZWxlbmd0aCB9IH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogLXNxdWFyZS5zaWRlbGVuZ3RoLCB5OiAwIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiAtc3F1YXJlLnNpZGVsZW5ndGggfSB9KSk7XG5cbiAgcmV0dXJuIHNxdWFyZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uL3BhdGhzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuLi9wYXRocy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocG9pbnQpIHtcbiAgcmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10b192ZWN0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJPYmplY3QsIG9wdGlvbiwgcmVxdWlyZWQsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoIXJlcXVpcmVkKSB7XG4gICAgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPSBwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSAmJiB0eXBlb2YgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gIT09ICd1bmRlZmluZWQnID8gcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gOiBkZWZhdWx0VmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSB8fCB0eXBlb2YgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgb3B0aW9uOicgKyBvcHRpb24pO1xuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZWNrX3BhcmFtZXRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9yaWdpbmFsT2JqZWN0LCBjaXJjdWxhcikge1xuICAgICAgICAgIC8vIEZpcnN0IGNyZWF0ZSBhbiBlbXB0eSBvYmplY3Qgd2l0aFxuICAgICAgICAgIC8vIHNhbWUgcHJvdG90eXBlIG9mIG91ciBvcmlnaW5hbCBzb3VyY2VcblxuICAgICAgICAgIHZhciBwcm9wZXJ0eUluZGV4LFxuICAgICAgICAgICAgICBkZXNjcmlwdG9yLFxuICAgICAgICAgICAgICBrZXlzLFxuICAgICAgICAgICAgICBjdXJyZW50LFxuICAgICAgICAgICAgICBuZXh0U291cmNlLFxuICAgICAgICAgICAgICBpbmRleE9mLFxuICAgICAgICAgICAgICBjb3BpZXMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IG9yaWdpbmFsT2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9yaWdpbmFsT2JqZWN0KSlcbiAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgY2xvbmVPYmplY3QgPSBjb3BpZXNbMF0udGFyZ2V0LFxuICAgICAgICAgICAgICBzb3VyY2VSZWZlcmVuY2VzID0gW29yaWdpbmFsT2JqZWN0XSxcbiAgICAgICAgICAgICAgdGFyZ2V0UmVmZXJlbmNlcyA9IFtjbG9uZU9iamVjdF07XG5cbiAgICAgICAgICAvLyBGaXJzdCBpbiwgZmlyc3Qgb3V0XG4gICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGNvcGllcy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgICAgICAgICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQuc291cmNlKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3BlcnR5SW5kZXggPSAwOyBwcm9wZXJ0eUluZGV4IDwga2V5cy5sZW5ndGg7IHByb3BlcnR5SW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSB0aGUgc291cmNlJ3MgZGVzY3JpcHRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY3VycmVudC5zb3VyY2UsIGtleXNbcHJvcGVydHlJbmRleF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRlc2NyaXB0b3IudmFsdWUgfHwgX3R5cGVvZihkZXNjcmlwdG9yLnZhbHVlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VycmVudC50YXJnZXQsIGtleXNbcHJvcGVydHlJbmRleF0sIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ1VTVE9NOiBXZSBkb24ndCBuZWV0IHRvIGRlZXAgY29weSBvYmplY3RzLCB3aGljaCBnb3QgYSBjbG9uZSBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZS5jbG9uZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5jbG9uZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VycmVudC50YXJnZXQsIGtleXNbcHJvcGVydHlJbmRleF0sIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNvdXJjZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBBcnJheS5pc0FycmF5KG5leHRTb3VyY2UpID8gW10gOiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXh0U291cmNlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4T2YgPSBzb3VyY2VSZWZlcmVuY2VzLmluZGV4T2YobmV4dFNvdXJjZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBzb3VyY2UgaXMgYWxyZWFkeSByZWZlcmVuY2VkLCBqdXN0IGFzc2lnbiByZWZlcmVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gdGFyZ2V0UmVmZXJlbmNlc1tpbmRleE9mXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3VycmVudC50YXJnZXQsIGtleXNbcHJvcGVydHlJbmRleF0sIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VSZWZlcmVuY2VzLnB1c2gobmV4dFNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRSZWZlcmVuY2VzLnB1c2goZGVzY3JpcHRvci52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjdXJyZW50LnRhcmdldCwga2V5c1twcm9wZXJ0eUluZGV4XSwgZGVzY3JpcHRvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcGllcy5wdXNoKHsgc291cmNlOiBuZXh0U291cmNlLCB0YXJnZXQ6IGRlc2NyaXB0b3IudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY2xvbmVPYmplY3Q7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29weS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSwgZG9Ob3RDaGFpbikge1xuICBpZiAoIWRvTm90Q2hhaW4pIHtcbiAgICBpZiAoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnc2V0UHJvcCcpKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5zZXRQcm9wKHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgZWxlbWVudFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBpZiAoZWxlbWVudC5zZW5kRXZlbnQpIHtcbiAgICAgIGVsZW1lbnQuc2VuZEV2ZW50KCdwcm9wZXJ0eV9jaGFuZ2UnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IHByb3BlcnR5IG9mIG9iamVjdC4gT2JqZWN0IGhhc25cXCd0IHRoZSBwcm9wZXJ0eTogJyArIHByb3BlcnR5KTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNldF9wcm9wLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBhZGRBbmltYXRpb246IGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihoYW5kbGUsIHNjb3BlKSB7XG4gICAgY3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XG4gICAgcmV0dXJuIGNyZWF0ZWpzLlRpY2tlci5vbigndGljaycsIGhhbmRsZSwgc2NvcGUpO1xuICB9LFxuICByZW1vdmVBbmltYXRpb246IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvbihsaXN0ZW5lcikge1xuICAgIGNyZWF0ZWpzLlRpY2tlci5vZmYoJ3RpY2snLCBsaXN0ZW5lcik7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb29wLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGUgPSBjcmVhdGU7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2ZsYXNoZXIgPSByZXF1aXJlKCcuL2ZpbHRlcnMvb3BhY2l0eS9mbGFzaGVyJyk7XG5cbnZhciBfZmxhc2hlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGFzaGVyKTtcblxudmFyIF9mYWRlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZhZGVyJyk7XG5cbnZhciBfZmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFkZXIpO1xuXG52YXIgX2dyb3VwID0gcmVxdWlyZSgnLi9maWx0ZXJzL2dyb3VwL2dyb3VwJyk7XG5cbnZhciBfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JvdXApO1xuXG52YXIgX21vdmVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL21vdmVyJyk7XG5cbnZhciBfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW92ZXIpO1xuXG52YXIgX2xpbmVhcl9yb3RhdG9yID0gcmVxdWlyZSgnLi9maWx0ZXJzL3JvdGF0b3IvbGluZWFyX3JvdGF0b3InKTtcblxudmFyIF9saW5lYXJfcm90YXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcm90YXRvcik7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9zaGFwZXMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3NoYXBlcy9zaGFwZXMnKTtcblxudmFyIF9zaGFwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhcGVzKTtcblxudmFyIF9wYXRocyA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcGF0aHMvcGF0aHMnKTtcblxudmFyIF9wYXRoczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRocyk7XG5cbnZhciBfY29tcG9zaXRpb25zID0gcmVxdWlyZSgnLi9jb21wb3NpdGlvbnMvY29tcG9zaXRpb25zJyk7XG5cbnZhciBfY29tcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2l0aW9ucyk7XG5cbnZhciBfcHJveGllcyA9IHJlcXVpcmUoJy4vcHJveGllcy9wcm94aWVzJyk7XG5cbnZhciBfcHJveGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm94aWVzKTtcblxudmFyIF9pbnRlcnZhbCA9IHJlcXVpcmUoJy4vdGltZXJzL2ludGVydmFsJyk7XG5cbnZhciBfaW50ZXJ2YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWwpO1xuXG52YXIgX21vZGlmaWNhdG9ycyA9IHJlcXVpcmUoJy4vbW9kaWZpY2F0b3JzL21vZGlmaWNhdG9ycycpO1xuXG52YXIgX21vZGlmaWNhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tb2RpZmljYXRvcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL1RPRE8gT3JnYW5pemUgaW1wb3J0c1xuXG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzSWQpIHtcbiAgdmFyIG1haW5Db250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5tYWluQ29udGFpbmVyKGNhbnZhc0lkKTtcbiAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKG1haW5Db250YWluZXIuc3RhZ2UpO1xuICByZXR1cm4ge1xuICAgIHZlcnNpb246ICcwLjAuMScsXG4gICAgbWFpbkNvbnRhaW5lcjogbWFpbkNvbnRhaW5lcixcbiAgICBmYWN0b3J5OiBfZmFjdG9yeTIuZGVmYXVsdCxcbiAgICBsb29wOiBfbG9vcDIuZGVmYXVsdCxcbiAgICBpbnRlcnZhbDogX2ludGVydmFsMi5kZWZhdWx0LFxuICAgIHV0aWxzOiB7XG4gICAgICByYW5kb21Db2xvcjogX3JhbmRvbUNvbG9yMi5kZWZhdWx0XG4gICAgfSxcbiAgICBnZW9tZXRyeToge1xuICAgICAgc2hhcGVzOiBfc2hhcGVzMi5kZWZhdWx0LFxuICAgICAgcGF0aHM6IF9wYXRoczIuZGVmYXVsdFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgb3BhY2l0eToge1xuICAgICAgICBmbGFzaGVyOiBfZmxhc2hlcjIuZGVmYXVsdCxcbiAgICAgICAgZmFkZXI6IF9mYWRlcjIuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgIG1vdmVyOiBfbW92ZXIyLmRlZmF1bHQsXG4gICAgICBncm91cDogX2dyb3VwMi5kZWZhdWx0LFxuICAgICAgcm90YXRvcjoge1xuICAgICAgICBsaW5lYXJSb3RhdG9yOiBfbGluZWFyX3JvdGF0b3IyLmRlZmF1bHRcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGlmaWNhdG9yczogX21vZGlmaWNhdG9yczIuZGVmYXVsdCxcbiAgICBjb21wb3NpdGlvbnM6IF9jb21wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcHJveGllczogX3Byb3hpZXMyLmRlZmF1bHRcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1haW4uanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgbW9kaWZpY2F0b3IgPSB7fTtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAgIG1vZGlmaWNhdG9yLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG5cbiAgICByZXR1cm4gbW9kaWZpY2F0b3I7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3RfbW9kaWZpY2F0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG1vZGlmaWNhdG9yKSB7XG5cbiAgICBtb2RpZmljYXRvci5fbGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuX2xpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBtb2RpZmljYXRvci5zdGFydCA9IHN0YXJ0O1xuICAgIG1vZGlmaWNhdG9yLnN0b3AgPSBzdG9wO1xuXG4gICAgcmV0dXJuIG1vZGlmaWNhdG9yO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25fbW9kaWZpY2F0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjEnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcjInLCB0cnVlKTtcblxuICB2YXIgY29sb3JGYWRlciA9IHt9O1xuICBjb2xvckZhZGVyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGNvbG9yRmFkZXIuc3BlZWQgPSBvcHRpb25zLnNwZWVkO1xuICBjb2xvckZhZGVyLmNvbG9yMSA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IxKTtcbiAgY29sb3JGYWRlci5jb2xvcjIgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMik7XG4gIGNvbG9yRmFkZXIuY3VycmVudENvbG9yID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjEpO1xuICBjb2xvckZhZGVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShjb2xvckZhZGVyLnNwZWVkLCAwLjUpO1xuXG4gIGNvbG9yRmFkZXIuY29sb3JSYW5nZSA9IHtcbiAgICByOiBjb2xvckZhZGVyLmNvbG9yMi5yZWQoKSAtIGNvbG9yRmFkZXIuY29sb3IxLnJlZCgpLFxuICAgIGc6IGNvbG9yRmFkZXIuY29sb3IyLmdyZWVuKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ncmVlbigpLFxuICAgIGI6IGNvbG9yRmFkZXIuY29sb3IyLmJsdWUoKSAtIGNvbG9yRmFkZXIuY29sb3IxLmJsdWUoKVxuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wdWxzYXIuc3RhcnQoY29sb3JGYWRlci5oYW5kbGUpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnB1bHNhci5zdG9wKCk7XG4gIH07XG5cbiAgY29sb3JGYWRlci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHRoaXMuY3VycmVudENvbG9yLnJlZCh0aGlzLmNvbG9yMS5yZWQoKSArIGN1cnJlbnQgKiB0aGlzLmNvbG9yUmFuZ2Uucik7XG4gICAgdGhpcy5jdXJyZW50Q29sb3IuZ3JlZW4odGhpcy5jb2xvcjEuZ3JlZW4oKSArIGN1cnJlbnQgKiB0aGlzLmNvbG9yUmFuZ2UuZyk7XG4gICAgdGhpcy5jdXJyZW50Q29sb3IuYmx1ZSh0aGlzLmNvbG9yMS5ibHVlKCkgKyBjdXJyZW50ICogdGhpcy5jb2xvclJhbmdlLmIpO1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKHRoaXMuc3ViamVjdCwgJ2NvbG9yJywgdGhpcy5jdXJyZW50Q29sb3IucmdiU3RyaW5nKCkpO1xuICAgIHRoaXMuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbG9yRmFkZXI7XG59O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9zZXRfcHJvcCcpO1xuXG52YXIgX3NldF9wcm9wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldF9wcm9wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbG9yX2ZhZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuXG4gIHZhciByYW5kb21Db2xvckNoYW5nZXIgPSB7fTtcbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcbiAgfTtcblxuICByYW5kb21Db2xvckNoYW5nZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKHRoaXMuc3ViamVjdCwgJ2NvbG9yJywgKDAsIF9yYW5kb21Db2xvcjIuZGVmYXVsdCkoKSk7XG4gICAgdGhpcy5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcmFuZG9tQ29sb3JDaGFuZ2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX2NvbG9yX2NoYW5nZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmFuZG9tX2NvbG9yX2NoYW5nZXIgPSByZXF1aXJlKCcuL2NvbG9yL3JhbmRvbV9jb2xvcl9jaGFuZ2VyJyk7XG5cbnZhciBfcmFuZG9tX2NvbG9yX2NoYW5nZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX2NvbG9yX2NoYW5nZXIpO1xuXG52YXIgX2NvbG9yX2ZhZGVyID0gcmVxdWlyZSgnLi9jb2xvci9jb2xvcl9mYWRlcicpO1xuXG52YXIgX2NvbG9yX2ZhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yX2ZhZGVyKTtcblxudmFyIF9saW5lYXJfcHVsc2FyID0gcmVxdWlyZSgnLi9zY2FsZS9saW5lYXJfcHVsc2FyJyk7XG5cbnZhciBfbGluZWFyX3B1bHNhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXJfcHVsc2FyKTtcblxudmFyIF9yYW5kb21fYXJjX21vdmVyID0gcmVxdWlyZSgnLi9wb3NpdGlvbi9yYW5kb21fYXJjX21vdmVyJyk7XG5cbnZhciBfcmFuZG9tX2FyY19tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fYXJjX21vdmVyKTtcblxudmFyIF9yYW5kb21faW5fcmVjdF9tb3ZlciA9IHJlcXVpcmUoJy4vcG9zaXRpb24vcmFuZG9tX2luX3JlY3RfbW92ZXInKTtcblxudmFyIF9yYW5kb21faW5fcmVjdF9tb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21faW5fcmVjdF9tb3Zlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgY29sb3I6IHtcbiAgICByYW5kb21Db2xvckNoYW5nZXI6IF9yYW5kb21fY29sb3JfY2hhbmdlcjIuZGVmYXVsdCxcbiAgICBjb2xvckZhZGVyOiBfY29sb3JfZmFkZXIyLmRlZmF1bHRcbiAgfSxcbiAgc2NhbGU6IHtcbiAgICBsaW5lYXJQdWxzYXI6IF9saW5lYXJfcHVsc2FyMi5kZWZhdWx0XG4gIH0sXG4gIHBvc2l0aW9uOiB7XG4gICAgcmFuZG9tQXJjTW92ZXI6IF9yYW5kb21fYXJjX21vdmVyMi5kZWZhdWx0LFxuICAgIHJhbmRvbUluUmVjdE1vdmVyOiBfcmFuZG9tX2luX3JlY3RfbW92ZXIyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGlmaWNhdG9ycy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZ29hbFBvaW50JywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydFBvaW50JywgZmFsc2UsIHsgeDogMCwgeTogMCB9KTtcblxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgIHZhciBwMlBNb3ZlciA9ICgwLCBfdHJhbnNpdGlvbl9tb2RpZmljYXRvcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIuZGVmYXVsdCkob3B0aW9ucyksIG9wdGlvbnMpO1xuXG4gICAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xuICAgIHAyUE1vdmVyLmdvYWxQb2ludCA9IG9wdGlvbnMuZ29hbFBvaW50O1xuICAgIHAyUE1vdmVyLnN0YXJ0UG9pbnQgPSBvcHRpb25zLnN0YXJ0UG9pbnQ7XG5cbiAgICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gICAgcDJQTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIGFtb3VudFggPSAodGhpcy5nb2FsUG9pbnQueCAtIHRoaXMuc3RhcnRQb2ludC54KSAqIGN1cnJlbnQ7XG4gICAgICAgIHZhciBhbW91bnRZID0gKHRoaXMuZ29hbFBvaW50LnkgLSB0aGlzLnN0YXJ0UG9pbnQueSkgKiBjdXJyZW50O1xuXG4gICAgICAgIHRoaXMuc3ViamVjdC54ID0gdGhpcy5zdGFydFBvaW50LnggKyBhbW91bnRYO1xuICAgICAgICB0aGlzLnN1YmplY3QueSA9IHRoaXMuc3RhcnRQb2ludC55ICsgYW1vdW50WTtcbiAgICB9O1xuXG4gICAgLyogSW5pdCAqL1xuICAgIHJldHVybiBwMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9tb2RpZmljYXRvcicpO1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X21vZGlmaWNhdG9yKTtcblxudmFyIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbl9tb2RpZmljYXRvcicpO1xuXG52YXIgX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9tb2RpZmljYXRvcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lX21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAvKiBQYXJhbWV0ZXJzICovXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdnb2FsUG9pbnQnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0UG9pbnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2hha2VGYWN0b3InLCBmYWxzZSwgMSk7XG5cbiAgICAvKiBwcml2YXRlIHZhcnMgKi9cbiAgICB2YXIgc2hha2VNb3ZlciA9ICgwLCBfdHJhbnNpdGlvbl9tb2RpZmljYXRvcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIuZGVmYXVsdCkob3B0aW9ucyksIG9wdGlvbnMpO1xuXG4gICAgLy8gUGFyYW1zIGFuZCBkZWZhdWx0c1xuICAgIHNoYWtlTW92ZXIuc2hha2VGYWN0b3IgPSBvcHRpb25zLnNoYWtlRmFjdG9yO1xuICAgIHNoYWtlTW92ZXIuZ29hbFBvaW50ID0gb3B0aW9ucy5nb2FsUG9pbnQ7XG4gICAgc2hha2VNb3Zlci5zdGFydFBvaW50ID0gb3B0aW9ucy5zdGFydFBvaW50O1xuXG4gICAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICAgIHNoYWtlTW92ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIHJhbmRvbUZhY3RvciA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNoYWtlRmFjdG9yIC0gdGhpcy5zaGFrZUZhY3RvciAvIDI7XG4gICAgICAgIHZhciBkaXN0WCA9IHRoaXMuZ29hbFBvaW50LnggLSB0aGlzLnN0YXJ0UG9pbnQueDtcbiAgICAgICAgdmFyIGRpc3RZID0gdGhpcy5nb2FsUG9pbnQueSAtIHRoaXMuc3RhcnRQb2ludC55O1xuICAgICAgICB2YXIgcmFuZG9tWCA9IHJhbmRvbUZhY3RvciAqIGRpc3RYIC8gKGRpc3RYICsgZGlzdFkpO1xuICAgICAgICB2YXIgcmFuZG9tWSA9IHJhbmRvbUZhY3RvciAqIGRpc3RZIC8gKGRpc3RYICsgZGlzdFkpO1xuICAgICAgICB2YXIgYW1vdW50WCA9IGRpc3RYICogY3VycmVudCArIHJhbmRvbVg7XG4gICAgICAgIHZhciBhbW91bnRZID0gZGlzdFkgKiBjdXJyZW50ICsgcmFuZG9tWTtcblxuICAgICAgICB0aGlzLnN1YmplY3QueCA9IHRoaXMuc3RhcnRQb2ludC54ICsgYW1vdW50WDtcbiAgICAgICAgdGhpcy5zdWJqZWN0LnkgPSB0aGlzLnN0YXJ0UG9pbnQueSArIGFtb3VudFk7XG4gICAgfTtcblxuICAgIHJldHVybiBzaGFrZU1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X21vZGlmaWNhdG9yJyk7XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfbW9kaWZpY2F0b3IpO1xuXG52YXIgX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IgPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uX21vZGlmaWNhdG9yJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9tb2RpZmljYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX21vZGlmaWNhdG9yKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVfc2hha2VfbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcblxuICB2YXIgcmFuZG9tQXJjTW92ZXIgPSB7fTtcblxuICAvLyBwcml2YXRlIHZhcnNcbiAgcmFuZG9tQXJjTW92ZXIuX2N1cnJlbnRBcmMgPSBudWxsO1xuICByYW5kb21BcmNNb3Zlci5fY3VycmVudFN0YXJ0UG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgcmFuZG9tQXJjTW92ZXIuX2N1cnJlbnRNcyA9IDA7XG4gIHJhbmRvbUFyY01vdmVyLl9jdXJyZW50QW5nbGUgPSAwO1xuICByYW5kb21BcmNNb3Zlci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuICByYW5kb21BcmNNb3Zlci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG5cbiAgLy8gcHJpdmF0ZSBmdW5jdGlvbnNcbiAgcmFuZG9tQXJjTW92ZXIuX2NyZWF0ZVJhbmRvbUFyYyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9hcmMyLmRlZmF1bHQpKHsgZGVncmVlczogTWF0aC5yYW5kb20oKSAqIDM2MCAtIDE4MCwgcmFkaXVzOiAyNSB9KTtcbiAgfTtcblxuICByYW5kb21BcmNNb3Zlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24odGhpcy5oYW5kbGUpO1xuICB9O1xuXG4gIHJhbmRvbUFyY01vdmVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuaGFuZGxlKTtcblxuICAgIC8vIFJlc2V0IGV2ZXJ5dGhpbmdcbiAgICB0aGlzLl9jdXJyZW50QXJjID0gcmFuZG9tQXJjTW92ZXIuX2NyZWF0ZVJhbmRvbUFyYygpO1xuICAgIHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgdGhpcy5fY3VycmVudE1zID0gMDtcbiAgICB0aGlzLl9jdXJyZW50QW5nbGUgPSAwO1xuICB9O1xuXG4gIHJhbmRvbUFyY01vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBtcyA9IGV2ZW50LmRlbHRhO1xuICAgIHRoaXMuX2N1cnJlbnRNcyArPSBtcztcblxuICAgIHdoaWxlICh0aGlzLl9jdXJyZW50TXMgLyAxMDAwICogdGhpcy5zcGVlZCA+PSB0aGlzLmdldExlbmd0aCgpKSB7XG4gICAgICB2YXIgcm90YXRlZFBvaW50ID0gKDAsIF9yb3RhdGVfcG9pbnQyLmRlZmF1bHQpKHRoaXMuX2N1cnJlbnRBcmMuZ2V0UG9pbnQoMSksIHRoaXMuX2N1cnJlbnRBbmdsZSk7XG4gICAgICB0aGlzLl9jdXJyZW50U3RhcnRQb3NpdGlvbi54ID0gdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24ueCArIHJvdGF0ZWRQb2ludC54O1xuICAgICAgdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24ueSA9IHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uLnkgKyByb3RhdGVkUG9pbnQueTtcbiAgICAgIHRoaXMuX2N1cnJlbnRNcyA9IHRoaXMuX2N1cnJlbnRNcyAtIHRoaXMuX2N1cnJlbnRBcmMuZ2V0TGVuZ3RoKCkgKiAxMDAwIC8gdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMuX2N1cnJlbnRBbmdsZSA9IHRoaXMuX2N1cnJlbnRBbmdsZSArIHRoaXMuX2N1cnJlbnRBcmMuZ2V0QW5nbGUoMSk7XG4gICAgICB0aGlzLl9jdXJyZW50QXJjID0gcmFuZG9tQXJjTW92ZXIuX2NyZWF0ZVJhbmRvbUFyYygpO1xuICAgIH1cbiAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLl9jdXJyZW50TXMgLyAxMDAwICogdGhpcy5zcGVlZCAvIHRoaXMuX2N1cnJlbnRBcmMuZ2V0TGVuZ3RoKCk7XG5cbiAgICB2YXIgcG9zaXRpb24gPSAoMCwgX3JvdGF0ZV9wb2ludDIuZGVmYXVsdCkodGhpcy5fY3VycmVudEFyYy5nZXRQb2ludChwcm9ncmVzcyksIHRoaXMuX2N1cnJlbnRBbmdsZSk7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkodGhpcy5zdWJqZWN0LCAneCcsIHRoaXMuX2N1cnJlbnRTdGFydFBvc2l0aW9uLnggKyBwb3NpdGlvbi54KTtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KSh0aGlzLnN1YmplY3QsICd5JywgdGhpcy5fY3VycmVudFN0YXJ0UG9zaXRpb24ueSArIHBvc2l0aW9uLnkpO1xuICAgIC8vcmFuZG9tQXJjTW92ZXIuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgcmFuZG9tQXJjTW92ZXIuX2N1cnJlbnRBcmMgPSByYW5kb21BcmNNb3Zlci5fY3JlYXRlUmFuZG9tQXJjKCk7XG4gIHJldHVybiByYW5kb21BcmNNb3Zlcjtcbn07XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnLi4vLi4vZ2VvbWV0cnkvcGF0aHMvYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uLy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3JvdGF0ZV9wb2ludCA9IHJlcXVpcmUoJy4uLy4uL2dlb21ldHJ5L3JvdGF0ZV9wb2ludCcpO1xuXG52YXIgX3JvdGF0ZV9wb2ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3RhdGVfcG9pbnQpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fYXJjX21vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gIC8qIFBhcmFtZXRlcnMgKi9cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaGVpZ2h0JywgdHJ1ZSk7XG5cbiAgLyogY3JlYXRlIG9iamVjdCBhbmQgc2V0IHByb3BlcnRpZXMgKi9cbiAgdmFyIHJhbmRvbUluUmVjdE1vdmVyID0gKDAsIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHJhbmRvbUluUmVjdE1vdmVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgcmFuZG9tSW5SZWN0TW92ZXIud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICByYW5kb21JblJlY3RNb3Zlci5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICAvLyBjYWxsYmFja3NcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX19vbkN1cnJlbnRHb2FsUmVhY2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9saW5lTW92ZXIuc3RvcCgpO1xuICAgIHRoaXMuX2xpbmVNb3Zlci5zdGFydFBvaW50LnggPSB0aGlzLl9saW5lTW92ZXIuZ29hbFBvaW50Lng7XG4gICAgdGhpcy5fbGluZU1vdmVyLnN0YXJ0UG9pbnQueSA9IHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueTtcblxuICAgIHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoO1xuICAgIHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodDtcblxuICAgIHRoaXMuX2ludGVydmFsLm1zID0gdGhpcy5fY2FsY3VsYXRlSW50ZXJ2YWxUaW1lKCk7XG5cbiAgICB0aGlzLl9saW5lTW92ZXIuc3RhcnQoKTtcbiAgfTtcblxuICAvLyBQcml2YXRlIHZhcnNcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2ludGVydmFsID0gKDAsIF9pbnRlcnZhbDIuZGVmYXVsdCkoeyB0eXBlOiAnbXMnLCBtczogMSB9KTtcbiAgcmFuZG9tSW5SZWN0TW92ZXIuX2xpbmVNb3ZlciA9ICgwLCBfbGluZV9tb3ZlcjIuZGVmYXVsdCkoe1xuICAgIHN1YmplY3Q6IHJhbmRvbUluUmVjdE1vdmVyLnN1YmplY3QsXG4gICAgZ29hbFBvaW50OiB7IHg6IDAsIHk6IDAgfSxcbiAgICBvbkZpbmlzaGVkSW50ZXJ2YWw6IHsgY2I6IGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICByYW5kb21JblJlY3RNb3Zlci5fX29uQ3VycmVudEdvYWxSZWFjaGVkKCk7XG4gICAgICB9LCBzY29wZTogcmFuZG9tSW5SZWN0TW92ZXIgfSxcbiAgICBpbnRlcnZhbDogcmFuZG9tSW5SZWN0TW92ZXIuX2ludGVydmFsLFxuICAgIHN0ZWVwbmVzczogMVxuICB9KTtcblxuICAvKiBQdWJsaWMgZnVuY3Rpb25zICovXG4gIHJhbmRvbUluUmVjdE1vdmVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX19vbkN1cnJlbnRHb2FsUmVhY2hlZCgpO1xuICB9O1xuXG4gIHJhbmRvbUluUmVjdE1vdmVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fbGluZU1vdmVyLnN0b3AoKTtcbiAgfTtcblxuICAvKiBQcml2YXRlIGZ1bmN0aW9ucyAqL1xuICByYW5kb21JblJlY3RNb3Zlci5fY2FsY3VsYXRlSW50ZXJ2YWxUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXN0ID0gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkoKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKHRoaXMuX2xpbmVNb3Zlci5nb2FsUG9pbnQpLCAoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkodGhpcy5fbGluZU1vdmVyLnN0YXJ0UG9pbnQpKTtcbiAgICByZXR1cm4gZGlzdCAvIHRoaXMuc3BlZWQgKiAxMDAwO1xuICB9O1xuXG4gIHJldHVybiByYW5kb21JblJlY3RNb3Zlcjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfbGluZV9tb3ZlciA9IHJlcXVpcmUoJy4vbGluZV9tb3ZlcicpO1xuXG52YXIgX2xpbmVfbW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZV9tb3Zlcik7XG5cbnZhciBfaW50ZXJ2YWwgPSByZXF1aXJlKCcuLi8uLi90aW1lcnMvaW50ZXJ2YWwnKTtcblxudmFyIF9pbnRlcnZhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbCk7XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9tb2RpZmljYXRvcicpO1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X21vZGlmaWNhdG9yKTtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCcuLi8uLi9nZW9tZXRyeS90b192ZWN0b3InKTtcblxudmFyIF90b192ZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9fdmVjdG9yKTtcblxudmFyIF9kaXN0YW5jZSA9IHJlcXVpcmUoJy4uLy4uL2dlb21ldHJ5L2Rpc3RhbmNlJyk7XG5cbnZhciBfZGlzdGFuY2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlzdGFuY2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX2luX3JlY3RfbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGVlZCcsIHRydWUpO1xuXG4gIHZhciBsaW5lYXJSb3RhdG9yID0gKDAsIF9hbmltYXRpb25fbW9kaWZpY2F0b3IyLmRlZmF1bHQpKCgwLCBfYWJzdHJhY3RfbW9kaWZpY2F0b3IyLmRlZmF1bHQpKG9wdGlvbnMpKTtcbiAgbGluZWFyUm90YXRvci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG5cbiAgbGluZWFyUm90YXRvci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnN1YmplY3Qucm90YXRpb24gKz0gdGhpcy5zcGVlZCAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICAgIHdoaWxlICh0aGlzLnN1YmplY3Qucm90YXRpb24gPj0gMzYwKSB7XG4gICAgICB0aGlzLnN1YmplY3Qucm90YXRpb24gLT0gMzYwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGluZWFyUm90YXRvcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfbW9kaWZpY2F0b3IgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9tb2RpZmljYXRvcicpO1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X21vZGlmaWNhdG9yKTtcblxudmFyIF9hbmltYXRpb25fbW9kaWZpY2F0b3IgPSByZXF1aXJlKCcuLi9hbmltYXRpb25fbW9kaWZpY2F0b3InKTtcblxudmFyIF9hbmltYXRpb25fbW9kaWZpY2F0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0aW9uX21vZGlmaWNhdG9yKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCcuLi8uLi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9yb3RhdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbGltaXQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyaXNpbmcnLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgdmFyIGxpbmVhclB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9tb2RpZmljYXRvcjIuZGVmYXVsdCkoKDAsIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIuZGVmYXVsdCkob3B0aW9ucyksIG9wdGlvbnMpO1xuICBsaW5lYXJQdWxzYXIubGltaXQgPSBvcHRpb25zLmxpbWl0O1xuXG4gIGxpbmVhclB1bHNhci5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRyYW5zaXRpb24uc3RvcCgpO1xuICAgIHRoaXMuaGFuZGxlKDApO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKHRoaXMuc3ViamVjdCwgJ3NjYWxlJywgMSArIGN1cnJlbnQgKiAodGhpcy5saW1pdCAtIDEpKTtcbiAgICB0aGlzLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQdWxzYXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X21vZGlmaWNhdG9yID0gcmVxdWlyZSgnLi4vYWJzdHJhY3RfbW9kaWZpY2F0b3InKTtcblxudmFyIF9hYnN0cmFjdF9tb2RpZmljYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9tb2RpZmljYXRvcik7XG5cbnZhciBfdHJhbnNpdGlvbl9tb2RpZmljYXRvciA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb25fbW9kaWZpY2F0b3InKTtcblxudmFyIF90cmFuc2l0aW9uX21vZGlmaWNhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbW9kaWZpY2F0b3IpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uLy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfcHVsc2FyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChtb2RpZmljYXRvciwgb3B0aW9ucykge1xuXG4gICAgLyogUGFyYW1ldGVycyAqL1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0ZWVwbmVzcycsIGZhbHNlLCAwLjUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnbnVtYmVyT2ZJbnRlcnZhbHMnLCBmYWxzZSwgMCk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwcm9ncmVzcycsIGZhbHNlLCAwKTtcblxuICAgIC8qIHByaXZhdGUgdmFycyAqL1xuICAgIG1vZGlmaWNhdG9yLnRyYW5zaXRpb24gPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkob3B0aW9ucy5pbnRlcnZhbCwgb3B0aW9ucy5zdGVlcG5lc3MsIG9wdGlvbnMucHJvZ3Jlc3MsIG9wdGlvbnMubnVtYmVyT2ZJbnRlcnZhbHMsIG9wdGlvbnMub25GaW5pc2hlZEludGVydmFsKTtcblxuICAgIC8qIFB1YmxpYyBtZXRob2RzICovXG4gICAgbW9kaWZpY2F0b3Iuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5zdGFydCh0aGlzLmhhbmRsZSwgdGhpcyk7XG4gICAgfTtcblxuICAgIG1vZGlmaWNhdG9yLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbi5zdG9wKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBtb2RpZmljYXRvcjtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uX21vZGlmaWNhdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9IHt9O1xuICBwcm94eS5ncm91cCA9IFtdO1xuXG4gIHByb3h5LmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHRoaXMuZ3JvdXAucHVzaChlbGVtZW50KTtcbiAgfTtcblxuICBwcm94eS5yZW1vdmVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB0aGlzLmdyb3VwLnNwbGljZSh0aGlzLmdyb3VwLmluZGV4T2YoZWxlbWVudCksIDEpO1xuICB9O1xuXG4gIHByb3h5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmdyb3VwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGVsZW1lbnQuZHJhdygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcm94eS5fc2V0UHJvcE9mRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KShlbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUsIGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX3NldF9wcm9wID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRoaXMuZ3JvdXBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBvYmogPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICB0aGlzLl9zZXRQcm9wT2ZFbGVtZW50KG9iaiwgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmF1bHRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzaHVmZmxlJywgZmFsc2UsIGZhbHNlKTtcblxuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuICBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID0gMDtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2h1ZmZsZSAmJiB0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuc2h1ZmZsZUdyb3VwKCk7XG4gICAgfVxuICAgIHRoaXMuX3NldFByb3BPZkVsZW1lbnQodGhpcy5ncm91cFt0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXhdLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICB0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXgrKztcbiAgICBpZiAodGhpcy5jdXJyZW50RWxlbWVudEluZGV4ID49IHRoaXMuZ3JvdXAubGVuZ3RoKSB7XG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfTtcblxuICBwcm94eS5zaHVmZmxlR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9UT0RPIGltcGxlbWVudCBzaHVmZmxlIGFsZ29yaXRobVxuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5jcmVtZW50X3Byb3h5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnaW50ZXJ2YWwnLCB0cnVlKTtcblxuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuICBwcm94eS5pbnRlcnZhbCA9IG9wdGlvbnMuaW50ZXJ2YWw7XG4gIHByb3h5LnRpbWVyID0gKDAsIF9pbnRlcnZhbF90aW1lcjIuZGVmYXVsdCkocHJveHkuaW50ZXJ2YWwpO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgcCA9ICgwLCBfaW5jcmVtZW50X3Byb3h5Mi5kZWZhdWx0KSh7fSk7XG4gICAgcC5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgdmFyIHRpbWVyID0gdGhpcy50aW1lcjtcbiAgICB2YXIgY2hhbmdlUHJvcENhbGxiYWNrID0gZnVuY3Rpb24gY2hhbmdlUHJvcENhbGxiYWNrKCkge1xuICAgICAgcC5zZXRQcm9wKG5hbWUsIHZhbHVlKTtcbiAgICAgIHAuZHJhdygpO1xuICAgICAgaWYgKHAuY3VycmVudEVsZW1lbnRJbmRleCA9PT0gMCkge1xuICAgICAgICB0aW1lci5yZW1vdmVMaXN0ZW5lcihjaGFuZ2VQcm9wQ2FsbGJhY2spO1xuICAgICAgICBwLmdyb3VwID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudGltZXIuYWRkTGlzdGVuZXIoY2hhbmdlUHJvcENhbGxiYWNrKTtcbiAgfTtcblxuICBwcm94eS50aW1lci5zdGFydCgpO1xuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2ludGVydmFsX3RpbWVyID0gcmVxdWlyZSgnLi4vdGltZXJzL2ludGVydmFsX3RpbWVyJyk7XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfdGltZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmYXVsdF9wcm94eSA9IHJlcXVpcmUoJy4vZGVmYXVsdF9wcm94eScpO1xuXG52YXIgX2RlZmF1bHRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdF9wcm94eSk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5ID0gcmVxdWlyZSgnLi9pbmNyZW1lbnRfcHJveHknKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5jcmVtZW50X3Byb3h5KTtcblxudmFyIF9pbnRlcnZhbF9wcm94eSA9IHJlcXVpcmUoJy4vaW50ZXJ2YWxfcHJveHknKTtcblxudmFyIF9pbnRlcnZhbF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF9wcm94eSk7XG5cbnZhciBfcmFuZG9tX3Byb3h5ID0gcmVxdWlyZSgnLi9yYW5kb21fcHJveHknKTtcblxudmFyIF9yYW5kb21fcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJveHk6IF9kZWZhdWx0X3Byb3h5Mi5kZWZhdWx0LFxuICBpbmNyZW1lbnRQcm94eTogX2luY3JlbWVudF9wcm94eTIuZGVmYXVsdCxcbiAgaW50ZXJ2YWxQcm94eTogX2ludGVydmFsX3Byb3h5Mi5kZWZhdWx0LFxuICByYW5kb21Qcm94eTogX3JhbmRvbV9wcm94eTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3hpZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmRvbUVsZW1lbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZ3JvdXAubGVuZ3RoKTtcbiAgICBwcm94eS5fc2V0UHJvcE9mRWxlbWVudCh0aGlzLmdyb3VwW3JhbmRvbUVsZW1lbnRJbmRleF0sIG5hbWUsIHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gcHJveHk7XG59O1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9wcm94eScpO1xuXG52YXIgX2Fic3RyYWN0X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIGludGVydmFsID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd0eXBlJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnYnBtJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ21zJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Rpdmlzb3InLCBmYWxzZSwgMSk7XG5cbiAgaW50ZXJ2YWwudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgaW50ZXJ2YWwuYnBtID0gb3B0aW9ucy5icG07XG4gIGludGVydmFsLm1zID0gb3B0aW9ucy5tcztcbiAgaW50ZXJ2YWwuZGl2aXNvciA9IG9wdGlvbnMuZGl2aXNvcjtcblxuICBpZiAoaW50ZXJ2YWwuYnBtID09PSAwICYmIGludGVydmFsLm1zID09PSAwKSB7XG4gICAgdGhyb3cgJ0lsbGVnYWwgc3RhdGU6IEJQTSBhbmQgTVMgY2Fubm90IGJvdGggYmUgMCc7XG4gIH1cblxuICBpbnRlcnZhbC5nZW5lcmF0ZUhhbGZJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFsZkludGVydmFsID0ge307XG4gICAgaGFsZkludGVydmFsLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgaGFsZkludGVydmFsLmJwbSA9IHRoaXMuYnBtO1xuICAgIGhhbGZJbnRlcnZhbC5tcyA9IHRoaXMubXM7XG4gICAgaGFsZkludGVydmFsLmRpdmlzb3IgPSB0aGlzLmRpdmlzb3IgKiAyO1xuXG4gICAgcmV0dXJuIGhhbGZJbnRlcnZhbDtcbiAgfTtcblxuICBpbnRlcnZhbC5iaXNlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kaXZpc29yID0gdGhpcy5kaXZpc29yICogMjtcbiAgfTtcblxuICBpbnRlcnZhbC5nZXRNcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnbXMnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDYwMDAwIC8gdGhpcy5icG07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBpbnRlcnZhbDtcbn07XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGludGVydmFsKSB7XG4gIHZhciB0aW1lciA9IHt9O1xuICB0aW1lci5jdXJyZW50VGltZSA9IDA7XG4gIHRpbWVyLmludGVydmFsID0gaW50ZXJ2YWw7XG4gIHRpbWVyLmxpc3RlbmVycyA9IFtdO1xuICB0aW1lci5fbGlzdGVuZXIgPSBudWxsO1xuXG4gIHRpbWVyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZXZlbnQuZGVsdGE7XG5cbiAgICB3aGlsZSAodGhpcy5jdXJyZW50VGltZSA+IHRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgLT0gdGhpcy5pbnRlcnZhbDtcbiAgICB9XG4gIH07XG5cbiAgdGltZXIuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgdmFyIGxpc3RlbmVyID0geyBjYWxsYmFjazogY2FsbGJhY2ssIHNjb3BlOiBzY29wZSB9O1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgfTtcblxuICB0aW1lci5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSh0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSk7XG4gIH07XG5cbiAgdGltZXIuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIHRpbWVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2xpc3RlbmVyID0gX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKHRoaXMuaGFuZGxlLCB0aGlzKTtcbiAgfTtcblxuICB0aW1lci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbih0aGlzLl9saXN0ZW5lcik7XG4gIH07XG5cbiAgdGltZXIuX2NhbGxMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB0aGlzLmxpc3RlbmVyc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2suY2FsbChsaXN0ZW5lci5zY29wZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aW1lcjtcbn07XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxfdGltZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIgPSByZXF1aXJlKCcuL2ludGVydmFsX3RpbWVyJyk7XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW50ZXJ2YWxfdGltZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJ1bjogZnVuY3Rpb24gcnVuKGNhbGxiYWNrLCBzY29wZSwgaW50ZXJ2YWwpIHtcbiAgICB2YXIgaXQgPSAoMCwgX2ludGVydmFsX3RpbWVyMi5kZWZhdWx0KShpbnRlcnZhbCk7XG5cbiAgICB2YXIgY2JPYmplY3QgPSB7XG4gICAgICBjYjogZnVuY3Rpb24gY2IoKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xuICAgICAgICBpdC5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpdC5hZGRMaXN0ZW5lcihjYk9iamVjdC5jYiwgY2JPYmplY3QpO1xuXG4gICAgaXQuc3RhcnQoKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uZV90aW1lX2RlbGF5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yaXNpbmdUcmFuc2l0aW9uID0gcmlzaW5nVHJhbnNpdGlvbjtcbmV4cG9ydHMucHVsc2FyVHJhbnNpdGlvbiA9IHB1bHNhclRyYW5zaXRpb247XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uTG9vcChpbnRlcnZhbCwgc3RlZXBuZXNzLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKSB7XG4gIHZhciBwdWxzYXIgPSB7fTtcbiAgcHVsc2FyLmludGVydmFsID0gaW50ZXJ2YWw7XG4gIHB1bHNhci5jdXJyZW50SW50ZXJ2YWwgPSAwO1xuICBwdWxzYXIuc3RlZXBuZXNzID0gdHlwZW9mIHN0ZWVwbmVzcyAhPT0gJ3VuZGVmaW5lZCcgPyBzdGVlcG5lc3MgOiAwLjU7XG4gIHB1bHNhci5jdXJyZW50ID0gY3VycmVudCA/IGN1cnJlbnQgOiAwO1xuICBwdWxzYXIuaW5jcmVhc2UgPSB0cnVlO1xuICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gY3VycmVudCA/IGN1cnJlbnQgKiBpbnRlcnZhbC5nZXRNcygpIDogMDtcbiAgcHVsc2FyLm51bWJlck9mSW50ZXJ2YWxzID0gbnVtYmVyT2ZJbnRlcnZhbHMgPyBudW1iZXJPZkludGVydmFscyA6IDA7XG4gIHB1bHNhci5vbkZpbmlzaGVkSW50ZXJ2YWwgPSBvbkZpbmlzaGVkSW50ZXJ2YWw7XG4gIHB1bHNhci5fbGlzdGVuZXIgPSBudWxsO1xuXG4gIHB1bHNhci5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgc2NvcGUpIHtcbiAgICBpZiAodGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fY2JTY29wZSA9IHNjb3BlO1xuICAgIHRoaXMuY3VycmVudEludGVydmFsID0gMDtcbiAgICB0aGlzLmN1cnJlbnRNc2Vjb25kcyA9IGN1cnJlbnQgPyBjdXJyZW50ICogdGhpcy5pbnRlcnZhbC5nZXRNcygpIDogMDtcbiAgICB0aGlzLl9saXN0ZW5lciA9IF9sb29wMi5kZWZhdWx0LmFkZEFuaW1hdGlvbih0aGlzLmhhbmRsZSwgdGhpcyk7XG4gIH07XG5cbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHRoaXMuX2xpc3RlbmVyKTtcbiAgICB0aGlzLl9saXN0ZW5lciA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9O1xuXG4gIHB1bHNhci5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuICAgIHRoaXMuaW5jcmVhc2UgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudE1zZWNvbmRzID0gMDtcbiAgICB0aGlzLmN1cnJlbnRJbnRlcnZhbCA9IDA7XG4gIH07XG5cbiAgcHVsc2FyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgLy8gRmlyc3Qgc3VtIGN1cnJlbnQgbXNcbiAgICB0aGlzLmN1cnJlbnRNc2Vjb25kcyA9IHRoaXMuY3VycmVudE1zZWNvbmRzICsgZXZlbnQuZGVsdGE7XG5cbiAgICAvLyBzdG9yZSBjdXJyZW50IGN1cnJlbnRcbiAgICB2YXIgbGFzdEN1cnJlbnQgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICAvLyBjYWxjdWxhdGUgbmV3IGN1cnJlbnRcbiAgICB2YXIgbmV3Q3VycmVudCA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudCh0aGlzLmN1cnJlbnRNc2Vjb25kcyk7XG5cbiAgICAvLyBjaGVjayBpZiBpbnRlcnZhbCBpcyBmaW5pc2hlZCBhbmQgc2V0IGl0IHRvIDEgaWYgaXQgd2FzIHRoZSBsYXN0IGludGVydmFsXG4gICAgbmV3Q3VycmVudCA9IHRoaXMuX2ludGVydmFsUG9zdFByb2Nlc3NpbmcobmV3Q3VycmVudCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgY3VycmVudCB2YWx1ZSBhbmQgY29tcGFyZSBpdCB3aXRoIGxhc3QgdmFsdWVcbiAgICB2YXIgY3VycmVudFZhbHVlID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VmFsdWUobmV3Q3VycmVudCk7XG4gICAgdGhpcy5pbmNyZWFzZSA9IHRoaXMuY2FsY3VsYXRlQ3VycmVudFZhbHVlKGxhc3RDdXJyZW50KSA8IGN1cnJlbnRWYWx1ZTtcblxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5fY2JTY29wZSwgY3VycmVudFZhbHVlLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHB1bHNhci5jYWxjdWxhdGVDdXJyZW50ID0gZnVuY3Rpb24gKG1zKSB7XG4gICAgdmFyIHJlbGF0aXZlQ3VycmVudDtcbiAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICByZWxhdGl2ZUN1cnJlbnQgPSBtcyAvIHRoaXMuaW50ZXJ2YWwubXMgJSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnYnBtJykge1xuICAgICAgcmVsYXRpdmVDdXJyZW50ID0gbXMgKiB0aGlzLmludGVydmFsLmJwbSAvIDYwMDAwICUgMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlbGF0aXZlQ3VycmVudDtcbiAgfTtcblxuICBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudFZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnRUb0NhbGN1bGF0ZSkge1xuICAgIGlmIChjdXJyZW50VG9DYWxjdWxhdGUgPD0gdGhpcy5zdGVlcG5lc3MpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VG9DYWxjdWxhdGUgLyB0aGlzLnN0ZWVwbmVzcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDEgLSAoY3VycmVudFRvQ2FsY3VsYXRlIC0gdGhpcy5zdGVlcG5lc3MpIC8gKDEgLSB0aGlzLnN0ZWVwbmVzcyk7XG4gICAgfVxuICB9O1xuXG4gIHB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQgPSBmdW5jdGlvbiAoZmFjdG9yKSB7XG5cbiAgICAvLyBGaXJzdCBwcmVwYXJlIHRoZSB2YWx1ZSB3aGljaCBpcyBwYXNzZWQgdG8gdGhlIGNhbGN1bGF0ZUN1cnJlbnQgZnVuY3Rpb246XG4gICAgdmFyIGZhY3RvckluTXM7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwudHlwZSA9PT0gJ21zJykge1xuICAgICAgZmFjdG9ySW5NcyA9IGZhY3RvciAqIHRoaXMuaW50ZXJ2YWwubXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmludGVydmFsLnR5cGUgPT09ICdicG0nKSB7XG4gICAgICBmYWN0b3JJbk1zID0gZmFjdG9yICogKDYwMDAwIC8gdGhpcy5pbnRlcnZhbC5icG0pO1xuICAgIH1cbiAgICB2YXIgbXNUb0NoZWNrID0gZmFjdG9ySW5NcyArIHRoaXMuY3VycmVudE1zZWNvbmRzO1xuXG4gICAgaWYgKG1zVG9DaGVjayA8IDApIHtcbiAgICAgIGlmICh0aGlzLmludGVydmFsLnR5cGUgPT09ICdtcycpIHtcbiAgICAgICAgbXNUb0NoZWNrID0gbXNUb0NoZWNrICsgdGhpcy5pbnRlcnZhbC5tcyAqIE1hdGguY2VpbChNYXRoLmFicyhtc1RvQ2hlY2spIC8gdGhpcy5pbnRlcnZhbC5tcyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnYnBtJykge1xuICAgICAgICBtc1RvQ2hlY2sgPSBtc1RvQ2hlY2sgKyA2MDAwMCAvIHRoaXMuaW50ZXJ2YWwuYnBtICogTWF0aC5jZWlsKE1hdGguYWJzKG1zVG9DaGVjaykgLyAoNjAwMDAgLyB0aGlzLmludGVydmFsLmJwbSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRWYWx1ZSh0aGlzLmNhbGN1bGF0ZUN1cnJlbnQobXNUb0NoZWNrKSk7XG4gIH07XG5cbiAgcHVsc2FyLl9pbnRlcnZhbFBvc3RQcm9jZXNzaW5nID0gZnVuY3Rpb24gKHRlbXBDdXJyZW50KSB7XG4gICAgdmFyIGN1cnJlbnRJbnRlcnZhbDtcbiAgICBpZiAodGhpcy5pbnRlcnZhbC50eXBlID09PSAnbXMnKSB7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudE1zZWNvbmRzIC8gdGhpcy5pbnRlcnZhbC5tcyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmludGVydmFsLnR5cGUgPT09ICdicG0nKSB7XG4gICAgICBjdXJyZW50SW50ZXJ2YWwgPSBNYXRoLmZsb29yKHRoaXMuY3VycmVudE1zZWNvbmRzICogdGhpcy5pbnRlcnZhbC5icG0gLyA2MDAwMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRJbnRlcnZhbCA8IGN1cnJlbnRJbnRlcnZhbCkge1xuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSBjdXJyZW50SW50ZXJ2YWw7XG4gICAgICByZXR1cm4gdGhpcy5faGFuZGxlSW50ZXJ2YWxGaW5pc2hlZCh0ZW1wQ3VycmVudCk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wQ3VycmVudDtcbiAgfTtcblxuICBwdWxzYXIuX2hhbmRsZUludGVydmFsRmluaXNoZWQgPSBmdW5jdGlvbiAodGVtcEN1cnJlbnQpIHtcbiAgICBpZiAodGhpcy5vbkZpbmlzaGVkSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMub25GaW5pc2hlZEludGVydmFsLmNiLmNhbGwodGhpcy5vbkZpbmlzaGVkSW50ZXJ2YWwuc2NvcGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5udW1iZXJPZkludGVydmFscyA+IDAgJiYgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPT09IHRoaXMubnVtYmVyT2ZJbnRlcnZhbHMpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdGVtcEN1cnJlbnQgPSAxO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcEN1cnJlbnQ7XG4gIH07XG5cbiAgcmV0dXJuIHB1bHNhcjtcbn1cblxuZnVuY3Rpb24gcmlzaW5nVHJhbnNpdGlvbih0aW1lLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAxLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKTtcbn1cblxuZnVuY3Rpb24gcHVsc2FyVHJhbnNpdGlvbih0aW1lLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKSB7XG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAwLCBjdXJyZW50LCBudW1iZXJPZkludGVydmFscywgb25GaW5pc2hlZEludGVydmFsKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNpdGlvbkxvb3A7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uX2xvb3AuanMubWFwXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBwbGFjZUhvbGRlcnNDb3VudCAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuICAvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG4gIC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuICAvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcbiAgLy8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuICByZXR1cm4gYjY0W2xlbiAtIDJdID09PSAnPScgPyAyIDogYjY0W2xlbiAtIDFdID09PSAnPScgPyAxIDogMFxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG4gIHJldHVybiBiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgcGxhY2VIb2xkZXJzID0gcGxhY2VIb2xkZXJzQ291bnQoYjY0KVxuXG4gIGFyciA9IG5ldyBBcnIobGVuICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICBsID0gcGxhY2VIb2xkZXJzID4gMCA/IGxlbiAtIDQgOiBsZW5cblxuICB2YXIgTCA9IDBcblxuICBmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8IHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW0wrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG4gICAgdG1wID0gKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW0wrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gKyBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBvdXRwdXQgPSAnJ1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFt0bXAgPj4gMl1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSAnPT0nXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArICh1aW50OFtsZW4gLSAxXSlcbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAxMF1cbiAgICBvdXRwdXQgKz0gbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9J1xuICB9XG5cbiAgcGFydHMucHVzaChvdXRwdXQpXG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoMTA1KTtcbiIsIi8qKlxuICBBIGphdmFzY3JpcHQgQmV6aWVyIGN1cnZlIGxpYnJhcnkgYnkgUG9tYXguXG5cbiAgQmFzZWQgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvXG5cbiAgVGhpcyBjb2RlIGlzIE1JVCBsaWNlbnNlZC5cbioqL1xuKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBtaW4gPSBNYXRoLm1pbixcbiAgICAgIG1heCA9IE1hdGgubWF4LFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwaSA9IE1hdGguUEksXG4gICAgICAvLyBhIHplcm8gY29vcmRpbmF0ZSwgd2hpY2ggaXMgc3VycHJpc2luZ2x5IHVzZWZ1bFxuICAgICAgWkVSTyA9IHt4OjAseTowLHo6MH07XG5cbiAgLy8gcXVpdGUgbmVlZGVkXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoMTA3KTtcblxuICAvLyBub3QgcXVpdGUgbmVlZGVkLCBidXQgZXZlbnR1YWxseSB0aGlzJ2xsIGJlIHVzZWZ1bC4uLlxuICB2YXIgUG9seUJlemllciA9IHJlcXVpcmUoMTA2KTtcblxuICAvKipcbiAgICogQmV6aWVyIGN1cnZlIGNvbnN0cnVjdG9yLiBUaGUgY29uc3RydWN0b3IgYXJndW1lbnQgY2FuIGJlIG9uZSBvZiB0aHJlZSB0aGluZ3M6XG4gICAqXG4gICAqIDEuIGFycmF5LzQgb2Yge3g6Li4uLCB5Oi4uLiwgejouLi59LCB6IG9wdGlvbmFsXG4gICAqIDIuIG51bWVyaWNhbCBhcnJheS84IG9yZGVyZWQgeDEseTEseDIseTIseDMseTMseDQseTRcbiAgICogMy4gbnVtZXJpY2FsIGFycmF5LzEyIG9yZGVyZWQgeDEseTEsejEseDIseTIsejIseDMseTMsejMseDQseTQsejRcbiAgICpcbiAgICovXG4gIHZhciBCZXppZXIgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgICB2YXIgYXJncyA9IChjb29yZHMgJiYgY29vcmRzLmZvckVhY2gpID8gY29vcmRzIDogW10uc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgIHZhciBjb29yZGxlbiA9IGZhbHNlO1xuICAgIGlmKHR5cGVvZiBhcmdzWzBdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb29yZGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgICAgdmFyIG5ld2FyZ3MgPSBbXTtcbiAgICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihwb2ludCkge1xuICAgICAgICBbJ3gnLCd5JywneiddLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICAgIGlmKHR5cGVvZiBwb2ludFtkXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgbmV3YXJncy5wdXNoKHBvaW50W2RdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBhcmdzID0gbmV3YXJncztcbiAgICB9XG4gICAgdmFyIGhpZ2hlciA9IGZhbHNlO1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICBpZiAoY29vcmRsZW4pIHtcbiAgICAgIGlmKGNvb3JkbGVuPjQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBoaWdoZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihsZW4hPT02ICYmIGxlbiE9PTggJiYgbGVuIT09OSAmJiBsZW4hPT0xMikge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgbmV3IEJlemllcihwb2ludFtdKSBpcyBhY2NlcHRlZCBmb3IgNHRoIGFuZCBoaWdoZXIgb3JkZXIgY3VydmVzXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBfM2QgPSAoIWhpZ2hlciAmJiAobGVuID09PSA5IHx8IGxlbiA9PT0gMTIpKSB8fCAoY29vcmRzICYmIGNvb3Jkc1swXSAmJiB0eXBlb2YgY29vcmRzWzBdLnogIT09IFwidW5kZWZpbmVkXCIpO1xuICAgIHRoaXMuXzNkID0gXzNkO1xuICAgIHZhciBwb2ludHMgPSBbXTtcbiAgICBmb3IodmFyIGlkeD0wLCBzdGVwPShfM2QgPyAzIDogMik7IGlkeDxsZW47IGlkeCs9c3RlcCkge1xuICAgICAgdmFyIHBvaW50ID0ge1xuICAgICAgICB4OiBhcmdzW2lkeF0sXG4gICAgICAgIHk6IGFyZ3NbaWR4KzFdXG4gICAgICB9O1xuICAgICAgaWYoXzNkKSB7IHBvaW50LnogPSBhcmdzW2lkeCsyXSB9O1xuICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuICAgIH1cbiAgICB0aGlzLm9yZGVyID0gcG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgdmFyIGRpbXMgPSBbJ3gnLCd5J107XG4gICAgaWYoXzNkKSBkaW1zLnB1c2goJ3onKTtcbiAgICB0aGlzLmRpbXMgPSBkaW1zO1xuICAgIHRoaXMuZGltbGVuID0gZGltcy5sZW5ndGg7XG5cbiAgICAoZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHZhciBvcmRlciA9IGN1cnZlLm9yZGVyO1xuICAgICAgdmFyIHBvaW50cyA9IGN1cnZlLnBvaW50cztcbiAgICAgIHZhciBhID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7cDE6cG9pbnRzWzBdLCBwMjpwb2ludHNbb3JkZXJdfSk7XG4gICAgICBmb3IodmFyIGk9MDsgaTxhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFicyhhW2ldLnkpID4gMC4wMDAxKSB7XG4gICAgICAgICAgY3VydmUuX2xpbmVhciA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3VydmUuX2xpbmVhciA9IHRydWU7XG4gICAgfSh0aGlzKSk7XG5cbiAgICB0aGlzLl90MSA9IDA7XG4gICAgdGhpcy5fdDIgPSAxO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH07XG5cbiAgQmV6aWVyLmZyb21TVkcgPSBmdW5jdGlvbihzdmdTdHJpbmcpIHtcbiAgICB2YXIgbGlzdCA9IHN2Z1N0cmluZy5tYXRjaCgvWy0rXT9cXGQqXFwuP1xcZCsoPzpbZUVdWy0rXT9cXGQrKT8vZykubWFwKHBhcnNlRmxvYXQpO1xuICAgIHZhciByZWxhdGl2ZSA9IC9bY3FdLy50ZXN0KHN2Z1N0cmluZyk7XG4gICAgaWYoIXJlbGF0aXZlKSByZXR1cm4gbmV3IEJlemllcihsaXN0KTtcbiAgICBsaXN0ID0gbGlzdC5tYXAoZnVuY3Rpb24odixpKSB7XG4gICAgICByZXR1cm4gaSA8IDIgPyB2IDogdiArIGxpc3RbaSAlIDJdO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgQmV6aWVyKGxpc3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldEFCQyhuLFMsQixFLHQpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgdmFyIHUgPSB1dGlscy5wcm9qZWN0aW9ucmF0aW8odCxuKSxcbiAgICAgICAgdW0gPSAxLXUsXG4gICAgICAgIEMgPSB7XG4gICAgICAgICAgeDogdSpTLnggKyB1bSpFLngsXG4gICAgICAgICAgeTogdSpTLnkgKyB1bSpFLnlcbiAgICAgICAgfSxcbiAgICAgICAgcyA9IHV0aWxzLmFiY3JhdGlvKHQsbiksXG4gICAgICAgIEEgPSB7XG4gICAgICAgICAgeDogQi54ICsgKEIueC1DLngpL3MsXG4gICAgICAgICAgeTogQi55ICsgKEIueS1DLnkpL3NcbiAgICAgICAgfTtcbiAgICByZXR1cm4geyBBOkEsIEI6QiwgQzpDIH07XG4gIH1cblxuICBCZXppZXIucXVhZHJhdGljRnJvbVBvaW50cyA9IGZ1bmN0aW9uKHAxLHAyLHAzLCB0KSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIC8vIHNob3J0Y3V0cywgYWx0aG91Z2ggdGhleSdyZSByZWFsbHkgZHVtYlxuICAgIGlmKHQ9PT0wKSB7IHJldHVybiBuZXcgQmV6aWVyKHAyLHAyLHAzKTsgfVxuICAgIGlmKHQ9PT0xKSB7IHJldHVybiBuZXcgQmV6aWVyKHAxLHAyLHAyKTsgfVxuICAgIC8vIHJlYWwgZml0dGluZy5cbiAgICB2YXIgYWJjID0gZ2V0QUJDKDIscDEscDIscDMsdCk7XG4gICAgcmV0dXJuIG5ldyBCZXppZXIocDEsIGFiYy5BLCBwMyk7XG4gIH07XG5cbiAgQmV6aWVyLmN1YmljRnJvbVBvaW50cyA9IGZ1bmN0aW9uKFMsQixFLCB0LGQxKSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIHZhciBhYmMgPSBnZXRBQkMoMyxTLEIsRSx0KTtcbiAgICBpZih0eXBlb2YgZDEgPT09IFwidW5kZWZpbmVkXCIpIHsgZDEgPSB1dGlscy5kaXN0KEIsYWJjLkMpOyB9XG4gICAgdmFyIGQyID0gZDEgKiAoMS10KS90O1xuXG4gICAgdmFyIHNlbGVuID0gdXRpbHMuZGlzdChTLEUpLFxuICAgICAgICBseCA9IChFLngtUy54KS9zZWxlbixcbiAgICAgICAgbHkgPSAoRS55LVMueSkvc2VsZW4sXG4gICAgICAgIGJ4MSA9IGQxICogbHgsXG4gICAgICAgIGJ5MSA9IGQxICogbHksXG4gICAgICAgIGJ4MiA9IGQyICogbHgsXG4gICAgICAgIGJ5MiA9IGQyICogbHk7XG4gICAgLy8gZGVyaXZhdGlvbiBvZiBuZXcgaHVsbCBjb29yZGluYXRlc1xuICAgIHZhciBlMSAgPSB7IHg6IEIueCAtIGJ4MSwgeTogQi55IC0gYnkxIH0sXG4gICAgICAgIGUyICA9IHsgeDogQi54ICsgYngyLCB5OiBCLnkgKyBieTIgfSxcbiAgICAgICAgQSA9IGFiYy5BLFxuICAgICAgICB2MSAgPSB7IHg6IEEueCArIChlMS54LUEueCkvKDEtdCksIHk6IEEueSArIChlMS55LUEueSkvKDEtdCkgfSxcbiAgICAgICAgdjIgID0geyB4OiBBLnggKyAoZTIueC1BLngpLyh0KSwgeTogQS55ICsgKGUyLnktQS55KS8odCkgfSxcbiAgICAgICAgbmMxID0geyB4OiBTLnggKyAodjEueC1TLngpLyh0KSwgeTogUy55ICsgKHYxLnktUy55KS8odCkgfSxcbiAgICAgICAgbmMyID0geyB4OiBFLnggKyAodjIueC1FLngpLygxLXQpLCB5OiBFLnkgKyAodjIueS1FLnkpLygxLXQpIH07XG4gICAgLy8gLi4uZG9uZVxuICAgIHJldHVybiBuZXcgQmV6aWVyKFMsbmMxLG5jMixFKTtcbiAgfTtcblxuICB2YXIgZ2V0VXRpbHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdXRpbHM7XG4gIH07XG5cbiAgQmV6aWVyLmdldFV0aWxzID0gZ2V0VXRpbHM7XG5cbiAgQmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICBnZXRVdGlsczogZ2V0VXRpbHMsXG4gICAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLnBvaW50c1RvU3RyaW5nKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIHRvU1ZHOiBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICAgICAgaWYodGhpcy5fM2QpIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsXG4gICAgICAgICAgeCA9IHBbMF0ueCxcbiAgICAgICAgICB5ID0gcFswXS55LFxuICAgICAgICAgIHMgPSBbXCJNXCIsIHgsIHksICh0aGlzLm9yZGVyPT09MiA/IFwiUVwiOlwiQ1wiKV07XG4gICAgICBmb3IodmFyIGk9MSwgbGFzdD1wLmxlbmd0aDsgaTxsYXN0OyBpKyspIHtcbiAgICAgICAgcy5wdXNoKHBbaV0ueCk7XG4gICAgICAgIHMucHVzaChwW2ldLnkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHMuam9pbihcIiBcIik7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gb25lLXRpbWUgY29tcHV0ZSBkZXJpdmF0aXZlIGNvb3JkaW5hdGVzXG4gICAgICB0aGlzLmRwb2ludHMgPSBbXTtcbiAgICAgIGZvcih2YXIgcD10aGlzLnBvaW50cywgZD1wLmxlbmd0aCwgYz1kLTE7IGQ+MTsgZC0tLCBjLS0pIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yKHZhciBqPTAsIGRwdDsgajxjOyBqKyspIHtcbiAgICAgICAgICBkcHQgPSB7XG4gICAgICAgICAgICB4OiBjICogKHBbaisxXS54IC0gcFtqXS54KSxcbiAgICAgICAgICAgIHk6IGMgKiAocFtqKzFdLnkgLSBwW2pdLnkpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgICAgZHB0LnogPSBjICogKHBbaisxXS56IC0gcFtqXS56KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC5wdXNoKGRwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcG9pbnRzLnB1c2gobGlzdCk7XG4gICAgICAgIHAgPSBsaXN0O1xuICAgICAgfTtcbiAgICAgIHRoaXMuY29tcHV0ZWRpcmVjdGlvbigpO1xuICAgIH0sXG4gICAgY29tcHV0ZWRpcmVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICB2YXIgYW5nbGUgPSB1dGlscy5hbmdsZShwb2ludHNbMF0sIHBvaW50c1t0aGlzLm9yZGVyXSwgcG9pbnRzWzFdKTtcbiAgICAgIHRoaXMuY2xvY2t3aXNlID0gYW5nbGUgPiAwO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5sZW5ndGgodGhpcy5kZXJpdmF0aXZlLmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgX2x1dDogW10sXG4gICAgZ2V0TFVUOiBmdW5jdGlvbihzdGVwcykge1xuICAgICAgc3RlcHMgPSBzdGVwcyB8fCAxMDA7XG4gICAgICBpZiAodGhpcy5fbHV0Lmxlbmd0aCA9PT0gc3RlcHMpIHsgcmV0dXJuIHRoaXMuX2x1dDsgfVxuICAgICAgdGhpcy5fbHV0ID0gW107XG4gICAgICBmb3IodmFyIHQ9MDsgdDw9c3RlcHM7IHQrKykge1xuICAgICAgICB0aGlzLl9sdXQucHVzaCh0aGlzLmNvbXB1dGUodC9zdGVwcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX2x1dDtcbiAgICB9LFxuICAgIG9uOiBmdW5jdGlvbihwb2ludCwgZXJyb3IpIHtcbiAgICAgIGVycm9yID0gZXJyb3IgfHwgNTtcbiAgICAgIHZhciBsdXQgPSB0aGlzLmdldExVVCgpLCBoaXRzID0gW10sIGMsIHQ9MDtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGx1dC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjID0gbHV0W2ldO1xuICAgICAgICBpZiAodXRpbHMuZGlzdChjLHBvaW50KSA8IGVycm9yKSB7XG4gICAgICAgICAgaGl0cy5wdXNoKGMpXG4gICAgICAgICAgdCArPSBpIC8gbHV0Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoIWhpdHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdCAvPSBoaXRzLmxlbmd0aDtcbiAgICB9LFxuICAgIHByb2plY3Q6IGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAvLyBzdGVwIDE6IGNvYXJzZSBjaGVja1xuICAgICAgdmFyIExVVCA9IHRoaXMuZ2V0TFVUKCksIGwgPSBMVVQubGVuZ3RoLTEsXG4gICAgICAgICAgY2xvc2VzdCA9IHV0aWxzLmNsb3Nlc3QoTFVULCBwb2ludCksXG4gICAgICAgICAgbWRpc3QgPSBjbG9zZXN0Lm1kaXN0LFxuICAgICAgICAgIG1wb3MgPSBjbG9zZXN0Lm1wb3M7XG4gICAgICBpZiAobXBvcz09PTAgfHwgbXBvcz09PWwpIHtcbiAgICAgICAgdmFyIHQgPSBtcG9zL2wsIHB0ID0gdGhpcy5jb21wdXRlKHQpO1xuICAgICAgICBwdC50ID0gdDtcbiAgICAgICAgcHQuZCA9IG1kaXN0O1xuICAgICAgICByZXR1cm4gcHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0ZXAgMjogZmluZSBjaGVja1xuICAgICAgdmFyIGZ0LCB0LCBwLCBkLFxuICAgICAgICAgIHQxID0gKG1wb3MtMSkvbCxcbiAgICAgICAgICB0MiA9IChtcG9zKzEpL2wsXG4gICAgICAgICAgc3RlcCA9IDAuMS9sO1xuICAgICAgbWRpc3QgKz0gMTtcbiAgICAgIGZvcih0PXQxLGZ0PXQ7IHQ8dDIrc3RlcDsgdCs9c3RlcCkge1xuICAgICAgICBwID0gdGhpcy5jb21wdXRlKHQpO1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIGZ0ID0gdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcCA9IHRoaXMuY29tcHV0ZShmdCk7XG4gICAgICBwLnQgPSBmdDtcbiAgICAgIHAuZCA9IG1kaXN0O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGUodCk7XG4gICAgfSxcbiAgICBwb2ludDogZnVuY3Rpb24oaWR4KSB7XG4gICAgICByZXR1cm4gdGhpcy5wb2ludHNbaWR4XTtcbiAgICB9LFxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIC8vIHNob3J0Y3V0c1xuICAgICAgaWYodD09PTApIHsgcmV0dXJuIHRoaXMucG9pbnRzWzBdOyB9XG4gICAgICBpZih0PT09MSkgeyByZXR1cm4gdGhpcy5wb2ludHNbdGhpcy5vcmRlcl07IH1cblxuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cztcbiAgICAgIHZhciBtdCA9IDEtdDtcblxuICAgICAgLy8gbGluZWFyP1xuICAgICAgaWYodGhpcy5vcmRlcj09PTEpIHtcbiAgICAgICAgcmV0ID0ge1xuICAgICAgICAgIHg6IG10KnBbMF0ueCArIHQqcFsxXS54LFxuICAgICAgICAgIHk6IG10KnBbMF0ueSArIHQqcFsxXS55XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl8zZCkgeyByZXQueiA9IG10KnBbMF0ueiArIHQqcFsxXS56OyB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHF1YWRyYXRpYy9jdWJpYyBjdXJ2ZT9cbiAgICAgIGlmKHRoaXMub3JkZXI8NCkge1xuICAgICAgICB2YXIgbXQyID0gbXQqbXQsXG4gICAgICAgICAgICB0MiA9IHQqdCxcbiAgICAgICAgICAgIGEsYixjLGQgPSAwO1xuICAgICAgICBpZih0aGlzLm9yZGVyPT09Mikge1xuICAgICAgICAgIHAgPSBbcFswXSwgcFsxXSwgcFsyXSwgWkVST107XG4gICAgICAgICAgYSA9IG10MjtcbiAgICAgICAgICBiID0gbXQqdCoyO1xuICAgICAgICAgIGMgPSB0MjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMub3JkZXI9PT0zKSB7XG4gICAgICAgICAgYSA9IG10MiptdDtcbiAgICAgICAgICBiID0gbXQyKnQqMztcbiAgICAgICAgICBjID0gbXQqdDIqMztcbiAgICAgICAgICBkID0gdCp0MjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIHg6IGEqcFswXS54ICsgYipwWzFdLnggKyBjKnBbMl0ueCArIGQqcFszXS54LFxuICAgICAgICAgIHk6IGEqcFswXS55ICsgYipwWzFdLnkgKyBjKnBbMl0ueSArIGQqcFszXS55XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgcmV0LnogPSBhKnBbMF0ueiArIGIqcFsxXS56ICsgYypwWzJdLnogKyBkKnBbM10uejtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBoaWdoZXIgb3JkZXIgY3VydmVzOiB1c2UgZGUgQ2FzdGVsamF1J3MgY29tcHV0YXRpb25cbiAgICAgIHZhciBkQ3B0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wb2ludHMpKTtcbiAgICAgIHdoaWxlKGRDcHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGRDcHRzLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICBkQ3B0c1tpXSA9IHtcbiAgICAgICAgICAgIHg6IGRDcHRzW2ldLnggKyAoZENwdHNbaSsxXS54IC0gZENwdHNbaV0ueCkgKiB0LFxuICAgICAgICAgICAgeTogZENwdHNbaV0ueSArIChkQ3B0c1tpKzFdLnkgLSBkQ3B0c1tpXS55KSAqIHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICh0eXBlb2YgZENwdHNbaV0ueiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZENwdHNbaV0gPSBkQ3B0c1tpXS56ICsgKGRDcHRzW2krMV0ueiAtIGRDcHRzW2ldLnopICogdFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkQ3B0cy5zcGxpY2UoZENwdHMubGVuZ3RoLTEsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRDcHRzWzBdO1xuICAgIH0sXG4gICAgcmFpc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cywgbnAgPSBbcFswXV0sIGksIGs9cC5sZW5ndGgsIHBpLCBwaW07XG4gICAgICBmb3IgKHZhciBpPTE7IGk8azsgaSsrKSB7XG4gICAgICAgIHBpID0gcFtpXTtcbiAgICAgICAgcGltID0gcFtpLTFdO1xuICAgICAgICBucFtpXSA9IHtcbiAgICAgICAgICB4OiAoay1pKS9rICogcGkueCArIGkvayAqIHBpbS54LFxuICAgICAgICAgIHk6IChrLWkpL2sgKiBwaS55ICsgaS9rICogcGltLnlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG5wW2tdID0gcFtrLTFdO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgIH0sXG4gICAgZGVyaXZhdGl2ZTogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIG10ID0gMS10LFxuICAgICAgICAgIGEsYixjPTAsXG4gICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXTtcbiAgICAgIGlmKHRoaXMub3JkZXI9PT0yKSB7IHAgPSBbcFswXSwgcFsxXSwgWkVST107IGEgPSBtdDsgYiA9IHQ7IH1cbiAgICAgIGlmKHRoaXMub3JkZXI9PT0zKSB7IGEgPSBtdCptdDsgYiA9IG10KnQqMjsgYyA9IHQqdDsgfVxuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgeDogYSpwWzBdLnggKyBiKnBbMV0ueCArIGMqcFsyXS54LFxuICAgICAgICB5OiBhKnBbMF0ueSArIGIqcFsxXS55ICsgYypwWzJdLnlcbiAgICAgIH07XG4gICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICByZXQueiA9IGEqcFswXS56ICsgYipwWzFdLnogKyBjKnBbMl0uejtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMuaW5mbGVjdGlvbnModGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgbm9ybWFsOiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdGhpcy5fM2QgPyB0aGlzLl9fbm9ybWFsMyh0KSA6IHRoaXMuX19ub3JtYWwyKHQpO1xuICAgIH0sXG4gICAgX19ub3JtYWwyOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcbiAgICAgIHZhciBxID0gc3FydChkLngqZC54ICsgZC55KmQueSlcbiAgICAgIHJldHVybiB7IHg6IC1kLnkvcSwgeTogZC54L3EgfTtcbiAgICB9LFxuICAgIF9fbm9ybWFsMzogZnVuY3Rpb24odCkge1xuICAgICAgLy8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjU0NTMxNTlcbiAgICAgIHZhciByMSA9IHRoaXMuZGVyaXZhdGl2ZSh0KSxcbiAgICAgICAgICByMiA9IHRoaXMuZGVyaXZhdGl2ZSh0KzAuMDEpLFxuICAgICAgICAgIHExID0gc3FydChyMS54KnIxLnggKyByMS55KnIxLnkgKyByMS56KnIxLnopLFxuICAgICAgICAgIHEyID0gc3FydChyMi54KnIyLnggKyByMi55KnIyLnkgKyByMi56KnIyLnopO1xuICAgICAgcjEueCAvPSBxMTsgcjEueSAvPSBxMTsgcjEueiAvPSBxMTtcbiAgICAgIHIyLnggLz0gcTI7IHIyLnkgLz0gcTI7IHIyLnogLz0gcTI7XG4gICAgICAvLyBjcm9zcyBwcm9kdWN0XG4gICAgICB2YXIgYyA9IHtcbiAgICAgICAgeDogcjIueSpyMS56IC0gcjIueipyMS55LFxuICAgICAgICB5OiByMi56KnIxLnggLSByMi54KnIxLnosXG4gICAgICAgIHo6IHIyLngqcjEueSAtIHIyLnkqcjEueFxuICAgICAgfTtcbiAgICAgIHZhciBtID0gc3FydChjLngqYy54ICsgYy55KmMueSArIGMueipjLnopO1xuICAgICAgYy54IC89IG07IGMueSAvPSBtOyBjLnogLz0gbTtcbiAgICAgIC8vIHJvdGF0aW9uIG1hdHJpeFxuICAgICAgdmFyIFIgPSBbICAgYy54KmMueCwgICBjLngqYy55LWMueiwgYy54KmMueitjLnksXG4gICAgICAgICAgICAgICAgYy54KmMueStjLnosICAgYy55KmMueSwgICBjLnkqYy56LWMueCxcbiAgICAgICAgICAgICAgICBjLngqYy56LWMueSwgYy55KmMueitjLngsICAgYy56KmMueiAgICBdO1xuICAgICAgLy8gbm9ybWFsIHZlY3RvcjpcbiAgICAgIHZhciBuID0ge1xuICAgICAgICB4OiBSWzBdICogcjEueCArIFJbMV0gKiByMS55ICsgUlsyXSAqIHIxLnosXG4gICAgICAgIHk6IFJbM10gKiByMS54ICsgUls0XSAqIHIxLnkgKyBSWzVdICogcjEueixcbiAgICAgICAgejogUls2XSAqIHIxLnggKyBSWzddICogcjEueSArIFJbOF0gKiByMS56XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcbiAgICBodWxsOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuICAgICAgICAgIF9wID0gW10sXG4gICAgICAgICAgcHQsXG4gICAgICAgICAgcSA9IFtdLFxuICAgICAgICAgIGlkeCA9IDAsXG4gICAgICAgICAgaT0wLFxuICAgICAgICAgIGw9MDtcbiAgICAgIHFbaWR4KytdID0gcFswXTtcbiAgICAgIHFbaWR4KytdID0gcFsxXTtcbiAgICAgIHFbaWR4KytdID0gcFsyXTtcbiAgICAgIGlmKHRoaXMub3JkZXIgPT09IDMpIHsgcVtpZHgrK10gPSBwWzNdOyB9XG4gICAgICAvLyB3ZSBsZXJwIGJldHdlZW4gYWxsIHBvaW50cyBhdCBlYWNoIGl0ZXJhdGlvbiwgdW50aWwgd2UgaGF2ZSAxIHBvaW50IGxlZnQuXG4gICAgICB3aGlsZShwLmxlbmd0aD4xKSB7XG4gICAgICAgIF9wID0gW107XG4gICAgICAgIGZvcihpPTAsIGw9cC5sZW5ndGgtMTsgaTxsOyBpKyspIHtcbiAgICAgICAgICBwdCA9IHV0aWxzLmxlcnAodCxwW2ldLHBbaSsxXSk7XG4gICAgICAgICAgcVtpZHgrK10gPSBwdDtcbiAgICAgICAgICBfcC5wdXNoKHB0KTtcbiAgICAgICAgfVxuICAgICAgICBwID0gX3A7XG4gICAgICB9XG4gICAgICByZXR1cm4gcTtcbiAgICB9LFxuICAgIHNwbGl0OiBmdW5jdGlvbih0MSwgdDIpIHtcbiAgICAgIC8vIHNob3J0Y3V0c1xuICAgICAgaWYodDE9PT0wICYmICEhdDIpIHsgcmV0dXJuIHRoaXMuc3BsaXQodDIpLmxlZnQ7IH1cbiAgICAgIGlmKHQyPT09MSkgeyByZXR1cm4gdGhpcy5zcGxpdCh0MSkucmlnaHQ7IH1cblxuICAgICAgLy8gbm8gc2hvcnRjdXQ6IHVzZSBcImRlIENhc3RlbGphdVwiIGl0ZXJhdGlvbi5cbiAgICAgIHZhciBxID0gdGhpcy5odWxsKHQxKTtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGxlZnQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzBdLHFbM10scVs1XV0pIDogbmV3IEJlemllcihbcVswXSxxWzRdLHFbN10scVs5XV0pLFxuICAgICAgICByaWdodDogdGhpcy5vcmRlciA9PT0gMiA/IG5ldyBCZXppZXIoW3FbNV0scVs0XSxxWzJdXSkgOiBuZXcgQmV6aWVyKFtxWzldLHFbOF0scVs2XSxxWzNdXSksXG4gICAgICAgIHNwYW46IHFcbiAgICAgIH07XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBiaW5kIF90MS9fdDIgaW5mb3JtYXRpb24hXG4gICAgICByZXN1bHQubGVmdC5fdDEgID0gdXRpbHMubWFwKDAsICAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5sZWZ0Ll90MiAgPSB1dGlscy5tYXAodDEsIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LnJpZ2h0Ll90MSA9IHV0aWxzLm1hcCh0MSwgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQucmlnaHQuX3QyID0gdXRpbHMubWFwKDEsICAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcblxuICAgICAgLy8gaWYgd2UgaGF2ZSBubyB0Miwgd2UncmUgZG9uZVxuICAgICAgaWYoIXQyKSB7IHJldHVybiByZXN1bHQ7IH1cblxuICAgICAgLy8gaWYgd2UgaGF2ZSBhIHQyLCBzcGxpdCBhZ2FpbjpcbiAgICAgIHQyID0gdXRpbHMubWFwKHQyLHQxLDEsMCwxKTtcbiAgICAgIHZhciBzdWJzcGxpdCA9IHJlc3VsdC5yaWdodC5zcGxpdCh0Mik7XG4gICAgICByZXR1cm4gc3Vic3BsaXQubGVmdDtcbiAgICB9LFxuICAgIGV4dHJlbWE6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRpbXMgPSB0aGlzLmRpbXMsXG4gICAgICAgICAgcmVzdWx0PXt9LFxuICAgICAgICAgIHJvb3RzPVtdLFxuICAgICAgICAgIHAsIG1mbjtcbiAgICAgIGRpbXMuZm9yRWFjaChmdW5jdGlvbihkaW0pIHtcbiAgICAgICAgbWZuID0gZnVuY3Rpb24odikgeyByZXR1cm4gdltkaW1dOyB9O1xuICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdLm1hcChtZm4pO1xuICAgICAgICByZXN1bHRbZGltXSA9IHV0aWxzLmRyb290cyhwKTtcbiAgICAgICAgaWYodGhpcy5vcmRlciA9PT0gMykge1xuICAgICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMV0ubWFwKG1mbik7XG4gICAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5jb25jYXQodXRpbHMuZHJvb3RzKHApKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbZGltXSA9IHJlc3VsdFtkaW1dLmZpbHRlcihmdW5jdGlvbih0KSB7IHJldHVybiAodD49MCAmJiB0PD0xKTsgfSk7XG4gICAgICAgIHJvb3RzID0gcm9vdHMuY29uY2F0KHJlc3VsdFtkaW1dLnNvcnQoKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcm9vdHMgPSByb290cy5zb3J0KCkuZmlsdGVyKGZ1bmN0aW9uKHYsaWR4KSB7IHJldHVybiAocm9vdHMuaW5kZXhPZih2KSA9PT0gaWR4KTsgfSk7XG4gICAgICByZXN1bHQudmFsdWVzID0gcm9vdHM7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLCByZXN1bHQgPSB7fTtcbiAgICAgIHRoaXMuZGltcy5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmVzdWx0W2RdID0gdXRpbHMuZ2V0bWlubWF4KHRoaXMsIGQsIGV4dHJlbWFbZF0pO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBvdmVybGFwczogZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHZhciBsYmJveCA9IHRoaXMuYmJveCgpLFxuICAgICAgICAgIHRiYm94ID0gY3VydmUuYmJveCgpO1xuICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKGxiYm94LHRiYm94KTtcbiAgICB9LFxuICAgIG9mZnNldDogZnVuY3Rpb24odCwgZCkge1xuICAgICAgaWYodHlwZW9mIGQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmdldCh0KTtcbiAgICAgICAgdmFyIG4gPSB0aGlzLm5vcm1hbCh0KTtcbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICBjOiBjLFxuICAgICAgICAgIG46IG4sXG4gICAgICAgICAgeDogYy54ICsgbi54ICogZCxcbiAgICAgICAgICB5OiBjLnkgKyBuLnkgKiBkXG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgcmV0LnogPSBjLnogKyBuLnogKiBkO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgICAgaWYodGhpcy5fbGluZWFyKSB7XG4gICAgICAgIHZhciBudiA9IHRoaXMubm9ybWFsKDApO1xuICAgICAgICB2YXIgY29vcmRzID0gdGhpcy5wb2ludHMubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgICAgeDogcC54ICsgdCAqIG52LngsXG4gICAgICAgICAgICB5OiBwLnkgKyB0ICogbnYueVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYocC56ICYmIG4ueikgeyByZXQueiA9IHAueiArIHQgKiBudi56OyB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbmV3IEJlemllcihjb29yZHMpXTtcbiAgICAgIH1cbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcbiAgICAgIHJldHVybiByZWR1Y2VkLm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgIHJldHVybiBzLnNjYWxlKHQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzaW1wbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYodGhpcy5vcmRlcj09PTMpIHtcbiAgICAgICAgdmFyIGExID0gdXRpbHMuYW5nbGUodGhpcy5wb2ludHNbMF0sIHRoaXMucG9pbnRzWzNdLCB0aGlzLnBvaW50c1sxXSk7XG4gICAgICAgIHZhciBhMiA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMl0pO1xuICAgICAgICBpZihhMT4wICYmIGEyPDAgfHwgYTE8MCAmJiBhMj4wKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbjEgPSB0aGlzLm5vcm1hbCgwKTtcbiAgICAgIHZhciBuMiA9IHRoaXMubm9ybWFsKDEpO1xuICAgICAgdmFyIHMgPSBuMS54Km4yLnggKyBuMS55Km4yLnk7XG4gICAgICBpZih0aGlzLl8zZCkgeyBzICs9IG4xLnoqbjIuejsgfVxuICAgICAgdmFyIGFuZ2xlID0gYWJzKGFjb3MocykpO1xuICAgICAgcmV0dXJuIGFuZ2xlIDwgcGkvMztcbiAgICB9LFxuICAgIHJlZHVjZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgdDE9MCwgdDI9MCwgc3RlcD0wLjAxLCBzZWdtZW50LCBwYXNzMT1bXSwgcGFzczI9W107XG4gICAgICAvLyBmaXJzdCBwYXNzOiBzcGxpdCBvbiBleHRyZW1hXG4gICAgICB2YXIgZXh0cmVtYSA9IHRoaXMuZXh0cmVtYSgpLnZhbHVlcztcbiAgICAgIGlmKGV4dHJlbWEuaW5kZXhPZigwKT09PS0xKSB7IGV4dHJlbWEgPSBbMF0uY29uY2F0KGV4dHJlbWEpOyB9XG4gICAgICBpZihleHRyZW1hLmluZGV4T2YoMSk9PT0tMSkgeyBleHRyZW1hLnB1c2goMSk7IH1cblxuICAgICAgZm9yKHQxPWV4dHJlbWFbMF0sIGk9MTsgaTxleHRyZW1hLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHQyID0gZXh0cmVtYVtpXTtcbiAgICAgICAgc2VnbWVudCA9IHRoaXMuc3BsaXQodDEsdDIpO1xuICAgICAgICBzZWdtZW50Ll90MSA9IHQxO1xuICAgICAgICBzZWdtZW50Ll90MiA9IHQyO1xuICAgICAgICBwYXNzMS5wdXNoKHNlZ21lbnQpO1xuICAgICAgICB0MSA9IHQyO1xuICAgICAgfVxuXG4gICAgICAvLyBzZWNvbmQgcGFzczogZnVydGhlciByZWR1Y2UgdGhlc2Ugc2VnbWVudHMgdG8gc2ltcGxlIHNlZ21lbnRzXG4gICAgICBwYXNzMS5mb3JFYWNoKGZ1bmN0aW9uKHAxKSB7XG4gICAgICAgIHQxPTA7XG4gICAgICAgIHQyPTA7XG4gICAgICAgIHdoaWxlKHQyIDw9IDEpIHtcbiAgICAgICAgICBmb3IodDI9dDErc3RlcDsgdDI8PTErc3RlcDsgdDIrPXN0ZXApIHtcbiAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSx0Mik7XG4gICAgICAgICAgICBpZighc2VnbWVudC5zaW1wbGUoKSkge1xuICAgICAgICAgICAgICB0MiAtPSBzdGVwO1xuICAgICAgICAgICAgICBpZihhYnModDEtdDIpPHN0ZXApIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4gbmV2ZXIgZm9ybSBhIHJlZHVjdGlvblxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsdDIpO1xuICAgICAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgICAgIHNlZ21lbnQuX3QyID0gdXRpbHMubWFwKHQyLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgdDEgPSB0MjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHQxPDEpIHtcbiAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsMSk7XG4gICAgICAgICAgc2VnbWVudC5fdDEgPSB1dGlscy5tYXAodDEsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgIHNlZ21lbnQuX3QyID0gcDEuX3QyO1xuICAgICAgICAgIHBhc3MyLnB1c2goc2VnbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBhc3MyO1xuICAgIH0sXG4gICAgc2NhbGU6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBvcmRlciA9IHRoaXMub3JkZXI7XG4gICAgICB2YXIgZGlzdGFuY2VGbiA9IGZhbHNlXG4gICAgICBpZih0eXBlb2YgZCA9PT0gXCJmdW5jdGlvblwiKSB7IGRpc3RhbmNlRm4gPSBkOyB9XG4gICAgICBpZihkaXN0YW5jZUZuICYmIG9yZGVyID09PSAyKSB7IHJldHVybiB0aGlzLnJhaXNlKCkuc2NhbGUoZGlzdGFuY2VGbik7IH1cblxuICAgICAgLy8gVE9ETzogYWRkIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGRlZ2VuZXJhdGUgKD1saW5lYXIpIGN1cnZlcy5cbiAgICAgIHZhciBjbG9ja3dpc2UgPSB0aGlzLmNsb2Nrd2lzZTtcbiAgICAgIHZhciByMSA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDApIDogZDtcbiAgICAgIHZhciByMiA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKDEpIDogZDtcbiAgICAgIHZhciB2ID0gWyB0aGlzLm9mZnNldCgwLDEwKSwgdGhpcy5vZmZzZXQoMSwxMCkgXTtcbiAgICAgIHZhciBvID0gdXRpbHMubGxpNCh2WzBdLCB2WzBdLmMsIHZbMV0sIHZbMV0uYyk7XG4gICAgICBpZighbykgeyB0aHJvdyBuZXcgRXJyb3IoXCJjYW5ub3Qgc2NhbGUgdGhpcyBjdXJ2ZS4gVHJ5IHJlZHVjaW5nIGl0IGZpcnN0LlwiKTsgfVxuICAgICAgLy8gbW92ZSBhbGwgcG9pbnRzIGJ5IGRpc3RhbmNlICdkJyB3cnQgdGhlIG9yaWdpbiAnbydcbiAgICAgIHZhciBwb2ludHM9dGhpcy5wb2ludHMsIG5wPVtdO1xuXG4gICAgICAvLyBtb3ZlIGVuZCBwb2ludHMgYnkgZml4ZWQgZGlzdGFuY2UgYWxvbmcgbm9ybWFsLlxuICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBwID0gbnBbdCpvcmRlcl0gPSB1dGlscy5jb3B5KHBvaW50c1t0Km9yZGVyXSk7XG4gICAgICAgIHAueCArPSAodD9yMjpyMSkgKiB2W3RdLm4ueDtcbiAgICAgICAgcC55ICs9ICh0P3IyOnIxKSAqIHZbdF0ubi55O1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgaWYgKCFkaXN0YW5jZUZuKSB7XG4gICAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgdG8gbGllIG9uIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhlIG9mZnNldFxuICAgICAgICAvLyBkZXJpdmF0aXZlIHZlY3RvciwgYW5kIHRoZSBvcmlnaW4tdGhyb3VnaC1jb250cm9sIHZlY3RvclxuICAgICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICBpZih0aGlzLm9yZGVyPT09MiAmJiAhIXQpIHJldHVybjtcbiAgICAgICAgICB2YXIgcCA9IG5wW3Qqb3JkZXJdO1xuICAgICAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpO1xuICAgICAgICAgIHZhciBwMiA9IHsgeDogcC54ICsgZC54LCB5OiBwLnkgKyBkLnkgfTtcbiAgICAgICAgICBucFt0KzFdID0gdXRpbHMubGxpNChwLCBwMiwgbywgcG9pbnRzW3QrMV0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgY29udHJvbCBwb2ludHMgYnkgXCJob3dldmVyIG11Y2ggbmVjZXNzYXJ5IHRvXG4gICAgICAvLyBlbnN1cmUgdGhlIGNvcnJlY3QgdGFuZ2VudCB0byBlbmRwb2ludFwiLlxuICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmKHRoaXMub3JkZXI9PT0yICYmICEhdCkgcmV0dXJuO1xuICAgICAgICB2YXIgcCA9IHBvaW50c1t0KzFdO1xuICAgICAgICB2YXIgb3YgPSB7XG4gICAgICAgICAgeDogcC54IC0gby54LFxuICAgICAgICAgIHk6IHAueSAtIG8ueVxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmMgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigodCsxKS9vcmRlcikgOiBkO1xuICAgICAgICBpZihkaXN0YW5jZUZuICYmICFjbG9ja3dpc2UpIHJjID0gLXJjO1xuICAgICAgICB2YXIgbSA9IHNxcnQob3YueCpvdi54ICsgb3YueSpvdi55KTtcbiAgICAgICAgb3YueCAvPSBtO1xuICAgICAgICBvdi55IC89IG07XG4gICAgICAgIG5wW3QrMV0gPSB7XG4gICAgICAgICAgeDogcC54ICsgcmMqb3YueCxcbiAgICAgICAgICB5OiBwLnkgKyByYypvdi55XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgfSxcbiAgICBvdXRsaW5lOiBmdW5jdGlvbihkMSwgZDIsIGQzLCBkNCkge1xuICAgICAgZDIgPSAodHlwZW9mIGQyID09PSBcInVuZGVmaW5lZFwiKSA/IGQxIDogZDI7XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCksXG4gICAgICAgICAgbGVuID0gcmVkdWNlZC5sZW5ndGgsXG4gICAgICAgICAgZmN1cnZlcyA9IFtdLFxuICAgICAgICAgIGJjdXJ2ZXMgPSBbXSxcbiAgICAgICAgICBwLFxuICAgICAgICAgIGFsZW4gPSAwLFxuICAgICAgICAgIHRsZW4gPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICB2YXIgZ3JhZHVhdGVkID0gKHR5cGVvZiBkMyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgZDQgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gICAgICBmdW5jdGlvbiBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKHMsZSwgdGxlbixhbGVuLHNsZW4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIGYxID0gYWxlbi90bGVuLCBmMiA9IChhbGVuK3NsZW4pL3RsZW4sIGQgPSBlLXM7XG4gICAgICAgICAgcmV0dXJuIHV0aWxzLm1hcCh2LCAwLDEsIHMrZjEqZCwgcytmMipkKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGZvcm0gY3VydmUgb3VsaW5lc1xuICAgICAgcmVkdWNlZC5mb3JFYWNoKGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgc2xlbiA9IHNlZ21lbnQubGVuZ3RoKCk7XG4gICAgICAgIGlmIChncmFkdWF0ZWQpIHtcbiAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oIGQxLCBkMywgdGxlbixhbGVuLHNsZW4pICApKTtcbiAgICAgICAgICBiY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24oLWQyLC1kNCwgdGxlbixhbGVuLHNsZW4pICApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSggZDEpKTtcbiAgICAgICAgICBiY3VydmVzLnB1c2goc2VnbWVudC5zY2FsZSgtZDIpKTtcbiAgICAgICAgfVxuICAgICAgICBhbGVuICs9IHNsZW47XG4gICAgICB9KTtcblxuICAgICAgLy8gcmV2ZXJzZSB0aGUgXCJyZXR1cm5cIiBvdXRsaW5lXG4gICAgICBiY3VydmVzID0gYmN1cnZlcy5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICBwID0gcy5wb2ludHM7XG4gICAgICAgIGlmKHBbM10pIHsgcy5wb2ludHMgPSBbcFszXSxwWzJdLHBbMV0scFswXV07IH1cbiAgICAgICAgZWxzZSB7IHMucG9pbnRzID0gW3BbMl0scFsxXSxwWzBdXTsgfVxuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0pLnJldmVyc2UoKTtcblxuICAgICAgLy8gZm9ybSB0aGUgZW5kY2FwcyBhcyBsaW5lc1xuICAgICAgdmFyIGZzID0gZmN1cnZlc1swXS5wb2ludHNbMF0sXG4gICAgICAgICAgZmUgPSBmY3VydmVzW2xlbi0xXS5wb2ludHNbZmN1cnZlc1tsZW4tMV0ucG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgICBicyA9IGJjdXJ2ZXNbbGVuLTFdLnBvaW50c1tiY3VydmVzW2xlbi0xXS5wb2ludHMubGVuZ3RoLTFdLFxuICAgICAgICAgIGJlID0gYmN1cnZlc1swXS5wb2ludHNbMF0sXG4gICAgICAgICAgbHMgPSB1dGlscy5tYWtlbGluZShicyxmcyksXG4gICAgICAgICAgbGUgPSB1dGlscy5tYWtlbGluZShmZSxiZSksXG4gICAgICAgICAgc2VnbWVudHMgPSBbbHNdLmNvbmNhdChmY3VydmVzKS5jb25jYXQoW2xlXSkuY29uY2F0KGJjdXJ2ZXMpLFxuICAgICAgICAgIHNsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihzZWdtZW50cyk7XG4gICAgfSxcbiAgICBvdXRsaW5lc2hhcGVzOiBmdW5jdGlvbihkMSwgZDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBkMiA9IGQyIHx8IGQxO1xuICAgICAgdmFyIG91dGxpbmUgPSB0aGlzLm91dGxpbmUoZDEsZDIpLmN1cnZlcztcbiAgICAgIHZhciBzaGFwZXMgPSBbXTtcbiAgICAgIGZvcih2YXIgaT0xLCBsZW49b3V0bGluZS5sZW5ndGg7IGkgPCBsZW4vMjsgaSsrKSB7XG4gICAgICAgIHZhciBzaGFwZSA9IHV0aWxzLm1ha2VzaGFwZShvdXRsaW5lW2ldLCBvdXRsaW5lW2xlbi1pXSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICBzaGFwZS5zdGFydGNhcC52aXJ0dWFsID0gKGkgPiAxKTtcbiAgICAgICAgc2hhcGUuZW5kY2FwLnZpcnR1YWwgPSAoaSA8IGxlbi8yLTEpO1xuICAgICAgICBzaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2hhcGVzO1xuICAgIH0sXG4gICAgaW50ZXJzZWN0czogZnVuY3Rpb24oY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICBpZighY3VydmUpIHJldHVybiB0aGlzLnNlbGZpbnRlcnNlY3RzKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgIGlmKGN1cnZlLnAxICYmIGN1cnZlLnAyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpbmVJbnRlcnNlY3RzKGN1cnZlKTtcbiAgICAgIH1cbiAgICAgIGlmKGN1cnZlIGluc3RhbmNlb2YgQmV6aWVyKSB7IGN1cnZlID0gY3VydmUucmVkdWNlKCk7IH1cbiAgICAgIHJldHVybiB0aGlzLmN1cnZlaW50ZXJzZWN0cyh0aGlzLnJlZHVjZSgpLCBjdXJ2ZSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgIH0sXG4gICAgbGluZUludGVyc2VjdHM6IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBteCA9IG1pbihsaW5lLnAxLngsIGxpbmUucDIueCksXG4gICAgICAgICAgbXkgPSBtaW4obGluZS5wMS55LCBsaW5lLnAyLnkpLFxuICAgICAgICAgIE1YID0gbWF4KGxpbmUucDEueCwgbGluZS5wMi54KSxcbiAgICAgICAgICBNWSA9IG1heChsaW5lLnAxLnksIGxpbmUucDIueSksXG4gICAgICAgICAgc2VsZj10aGlzO1xuICAgICAgcmV0dXJuIHV0aWxzLnJvb3RzKHRoaXMucG9pbnRzLCBsaW5lKS5maWx0ZXIoZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcCA9IHNlbGYuZ2V0KHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuYmV0d2VlbihwLngsIG14LCBNWCkgJiYgdXRpbHMuYmV0d2VlbihwLnksIG15LCBNWSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNlbGZpbnRlcnNlY3RzOiBmdW5jdGlvbihjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpO1xuICAgICAgLy8gXCJzaW1wbGVcIiBjdXJ2ZXMgY2Fubm90IGludGVyc2VjdCB3aXRoIHRoZWlyIGRpcmVjdFxuICAgICAgLy8gbmVpZ2hib3VyLCBzbyBmb3IgZWFjaCBzZWdtZW50IFggd2UgY2hlY2sgd2hldGhlclxuICAgICAgLy8gaXQgaW50ZXJzZWN0cyBbMDp4LTJdW3grMjpsYXN0XS5cbiAgICAgIHZhciBpLGxlbj1yZWR1Y2VkLmxlbmd0aC0yLHJlc3VsdHM9W10scmVzdWx0LGxlZnQscmlnaHQ7XG4gICAgICBmb3IoaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgIGxlZnQgPSByZWR1Y2VkLnNsaWNlKGksaSsxKTtcbiAgICAgICAgcmlnaHQgPSByZWR1Y2VkLnNsaWNlKGkrMik7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY3VydmVpbnRlcnNlY3RzKGxlZnQsIHJpZ2h0LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdCggcmVzdWx0ICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGN1cnZlaW50ZXJzZWN0czogZnVuY3Rpb24oYzEsIGMyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIHBhaXJzID0gW107XG4gICAgICAvLyBzdGVwIDE6IHBhaXIgb2ZmIGFueSBvdmVybGFwcGluZyBzZWdtZW50c1xuICAgICAgYzEuZm9yRWFjaChmdW5jdGlvbihsKSB7XG4gICAgICAgIGMyLmZvckVhY2goZnVuY3Rpb24ocikge1xuICAgICAgICAgIGlmKGwub3ZlcmxhcHMocikpIHtcbiAgICAgICAgICAgIHBhaXJzLnB1c2goeyBsZWZ0OiBsLCByaWdodDogciB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyBzdGVwIDI6IGZvciBlYWNoIHBhaXJpbmcsIHJ1biB0aHJvdWdoIHRoZSBjb252ZXJnZW5jZSBhbGdvcml0aG0uXG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB1dGlscy5wYWlyaXRlcmF0aW9uKHBhaXIubGVmdCwgcGFpci5yaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICBpZihyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLmNvbmNhdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25zO1xuICAgIH0sXG4gICAgYXJjczogZnVuY3Rpb24oZXJyb3JUaHJlc2hvbGQpIHtcbiAgICAgIGVycm9yVGhyZXNob2xkID0gZXJyb3JUaHJlc2hvbGQgfHwgMC41O1xuICAgICAgdmFyIGNpcmNsZXMgPSBbXTtcbiAgICAgIHJldHVybiB0aGlzLl9pdGVyYXRlKGVycm9yVGhyZXNob2xkLCBjaXJjbGVzKTtcbiAgICB9LFxuICAgIF9lcnJvcjogZnVuY3Rpb24ocGMsIG5wMSwgcywgZSkge1xuICAgICAgdmFyIHEgPSAoZSAtIHMpIC8gNCxcbiAgICAgICAgICBjMSA9IHRoaXMuZ2V0KHMgKyBxKSxcbiAgICAgICAgICBjMiA9IHRoaXMuZ2V0KGUgLSBxKSxcbiAgICAgICAgICByZWYgPSB1dGlscy5kaXN0KHBjLCBucDEpLFxuICAgICAgICAgIGQxICA9IHV0aWxzLmRpc3QocGMsIGMxKSxcbiAgICAgICAgICBkMiAgPSB1dGlscy5kaXN0KHBjLCBjMik7XG4gICAgICByZXR1cm4gYWJzKGQxLXJlZikgKyBhYnMoZDItcmVmKTtcbiAgICB9LFxuICAgIF9pdGVyYXRlOiBmdW5jdGlvbihlcnJvclRocmVzaG9sZCwgY2lyY2xlcykge1xuICAgICAgdmFyIHMgPSAwLCBlID0gMSwgc2FmZXR5O1xuICAgICAgLy8gd2UgZG8gYSBiaW5hcnkgc2VhcmNoIHRvIGZpbmQgdGhlIFwiZ29vZCBgdGAgY2xvc2VzdCB0byBuby1sb25nZXItZ29vZFwiXG4gICAgICBkbyB7XG4gICAgICAgIHNhZmV0eT0wO1xuXG4gICAgICAgIC8vIHN0ZXAgMTogc3RhcnQgd2l0aCB0aGUgbWF4aW11bSBwb3NzaWJsZSBhcmNcbiAgICAgICAgZSA9IDE7XG5cbiAgICAgICAgLy8gcG9pbnRzOlxuICAgICAgICB2YXIgbnAxID0gdGhpcy5nZXQocyksIG5wMiwgbnAzLCBhcmMsIHByZXZfYXJjO1xuXG4gICAgICAgIC8vIGJvb2xlYW5zOlxuICAgICAgICB2YXIgY3Vycl9nb29kID0gZmFsc2UsIHByZXZfZ29vZCA9IGZhbHNlLCBkb25lO1xuXG4gICAgICAgIC8vIG51bWJlcnM6XG4gICAgICAgIHZhciBtID0gZSwgcHJldl9lID0gMSwgc3RlcCA9IDA7XG5cbiAgICAgICAgLy8gc3RlcCAyOiBmaW5kIHRoZSBiZXN0IHBvc3NpYmxlIGFyY1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcHJldl9nb29kID0gY3Vycl9nb29kO1xuICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuICAgICAgICAgIG0gPSAocyArIGUpLzI7XG4gICAgICAgICAgc3RlcCsrO1xuXG4gICAgICAgICAgbnAyID0gdGhpcy5nZXQobSk7XG4gICAgICAgICAgbnAzID0gdGhpcy5nZXQoZSk7XG5cbiAgICAgICAgICBhcmMgPSB1dGlscy5nZXRjY2VudGVyKG5wMSwgbnAyLCBucDMpO1xuICAgICAgICAgIFxuICAgICAgICAgIC8vYWxzbyBzYXZlIHRoZSB0IHZhbHVlc1xuICAgICAgICAgIGFyYy5pbnRlcnZhbCA9IHtcbiAgICAgICAgICAgIHN0YXJ0OiBzLFxuICAgICAgICAgICAgZW5kOiBlXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2Vycm9yKGFyYywgbnAxLCBzLCBlKTtcbiAgICAgICAgICBjdXJyX2dvb2QgPSAoZXJyb3IgPD0gZXJyb3JUaHJlc2hvbGQpO1xuXG4gICAgICAgICAgZG9uZSA9IHByZXZfZ29vZCAmJiAhY3Vycl9nb29kO1xuICAgICAgICAgIGlmKCFkb25lKSBwcmV2X2UgPSBlO1xuXG4gICAgICAgICAgLy8gdGhpcyBhcmMgaXMgZmluZTogd2UgY2FuIG1vdmUgJ2UnIHVwIHRvIHNlZSBpZiB3ZSBjYW4gZmluZCBhIHdpZGVyIGFyY1xuICAgICAgICAgIGlmKGN1cnJfZ29vZCkge1xuICAgICAgICAgICAgLy8gaWYgZSBpcyBhbHJlYWR5IGF0IG1heCwgdGhlbiB3ZSdyZSBkb25lIGZvciB0aGlzIGFyYy5cbiAgICAgICAgICAgIGlmIChlID49IDEpIHtcbiAgICAgICAgICAgICAgcHJldl9lID0gMTtcbiAgICAgICAgICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbm90LCBtb3ZlIGl0IHVwIGJ5IGhhbGYgdGhlIGl0ZXJhdGlvbiBkaXN0YW5jZVxuICAgICAgICAgICAgZSA9IGUgKyAoZS1zKS8yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoaXMgaXMgYSBiYWQgYXJjOiB3ZSBuZWVkIHRvIG1vdmUgJ2UnIGRvd24gdG8gZmluZCBhIGdvb2QgYXJjXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlID0gbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUoIWRvbmUgJiYgc2FmZXR5Kys8MTAwKTtcblxuICAgICAgICBpZihzYWZldHk+PTEwMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhcmMgYWJzdHJhY3Rpb24gc29tZWhvdyBmYWlsZWQuLi5cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIltGXSBhcmMgZm91bmRcIiwgcywgcHJldl9lLCBwcmV2X2FyYy54LCBwcmV2X2FyYy55LCBwcmV2X2FyYy5zLCBwcmV2X2FyYy5lKTtcblxuICAgICAgICBwcmV2X2FyYyA9IChwcmV2X2FyYyA/IHByZXZfYXJjIDogYXJjKTtcbiAgICAgICAgY2lyY2xlcy5wdXNoKHByZXZfYXJjKTtcbiAgICAgICAgcyA9IHByZXZfZTtcbiAgICAgIH1cbiAgICAgIHdoaWxlKGUgPCAxKTtcbiAgICAgIHJldHVybiBjaXJjbGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IEJlemllcjtcblxufSgpKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIHV0aWxzID0gcmVxdWlyZSgxMDcpO1xuXG4gIC8qKlxuICAgKiBQb2x5IEJlemllclxuICAgKiBAcGFyYW0ge1t0eXBlXX0gY3VydmVzIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHZhciBQb2x5QmV6aWVyID0gZnVuY3Rpb24oY3VydmVzKSB7XG4gICAgdGhpcy5jdXJ2ZXMgPSBbXTtcbiAgICB0aGlzLl8zZCA9IGZhbHNlO1xuICAgIGlmKCEhY3VydmVzKSB7XG4gICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5jdXJ2ZXNbMF0uXzNkO1xuICAgIH1cbiAgfVxuXG4gIFBvbHlCZXppZXIucHJvdG90eXBlID0ge1xuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICBhZGRDdXJ2ZTogZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHRoaXMuY3VydmVzLnB1c2goY3VydmUpO1xuICAgICAgdGhpcy5fM2QgPSB0aGlzLl8zZCB8fCBjdXJ2ZS5fM2Q7XG4gICAgfSxcbiAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VydmVzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lmxlbmd0aCgpOyB9KS5yZWR1Y2UoZnVuY3Rpb24oYSxiKSB7IHJldHVybiBhK2I7IH0pO1xuICAgIH0sXG4gICAgY3VydmU6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VydmVzW2lkeF07XG4gICAgfSxcbiAgICBiYm94OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjID0gdGhpcy5jdXJ2ZXM7XG4gICAgICB2YXIgYmJveCA9IGNbMF0uYmJveCgpO1xuICAgICAgZm9yKHZhciBpPTE7IGk8Yy5sZW5ndGg7IGkrKykge1xuICAgICAgICB1dGlscy5leHBhbmRib3goYmJveCwgY1tpXS5iYm94KCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJib3g7XG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBbXTtcbiAgICAgIHRoaXMuY3VydmVzLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQuY29uY2F0KHYub2Zmc2V0KGQpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQb2x5QmV6aWVyKG9mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gUG9seUJlemllcjtcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIG1hdGgtaW5saW5pbmcuXG4gIHZhciBhYnMgPSBNYXRoLmFicyxcbiAgICAgIGNvcyA9IE1hdGguY29zLFxuICAgICAgc2luID0gTWF0aC5zaW4sXG4gICAgICBhY29zID0gTWF0aC5hY29zLFxuICAgICAgYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgICAgc3FydCA9IE1hdGguc3FydCxcbiAgICAgIHBvdyA9IE1hdGgucG93LFxuICAgICAgLy8gY3ViZSByb290IGZ1bmN0aW9uIHlpZWxkaW5nIHJlYWwgcm9vdHNcbiAgICAgIGNydCA9IGZ1bmN0aW9uKHYpIHsgcmV0dXJuICh2PDApID8gLXBvdygtdiwxLzMpIDogcG93KHYsMS8zKTsgfSxcbiAgICAgIC8vIHRyaWcgY29uc3RhbnRzXG4gICAgICBwaSA9IE1hdGguUEksXG4gICAgICB0YXUgPSAyKnBpLFxuICAgICAgcXVhcnQgPSBwaS8yLFxuICAgICAgLy8gZmxvYXQgcHJlY2lzaW9uIHNpZ25pZmljYW50IGRlY2ltYWxcbiAgICAgIGVwc2lsb24gPSAwLjAwMDAwMTtcblxuICAvLyBCZXppZXIgdXRpbGl0eSBmdW5jdGlvbnNcbiAgdmFyIHV0aWxzID0ge1xuICAgIC8vIExlZ2VuZHJlLUdhdXNzIGFic2Npc3NhZSB3aXRoIG49MjQgKHhfaSB2YWx1ZXMsIGRlZmluZWQgYXQgaT1uIGFzIHRoZSByb290cyBvZiB0aGUgbnRoIG9yZGVyIExlZ2VuZHJlIHBvbHlub21pYWwgUG4oeCkpXG4gICAgVHZhbHVlczogW1xuICAgICAgLTAuMDY0MDU2ODkyODYyNjA1NjI2MDg1MDQzMDgyNjI0NzQ1MDM4NTkwOSxcbiAgICAgICAwLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAtMC4xOTExMTg4Njc0NzM2MTYzMDkxNTg2Mzk4MjA3NTcwNjk2MzE4NDA0LFxuICAgICAgIDAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgIC0wLjMxNTA0MjY3OTY5NjE2MzM3NDM4Njc5MzI5MTMxOTgxMDI0MDc4NjQsXG4gICAgICAgMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgLTAuNDMzNzkzNTA3NjI2MDQ1MTM4NDg3MDg0MjMxOTEzMzQ5NzEyNDUyNCxcbiAgICAgICAwLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAtMC41NDU0MjE0NzEzODg4Mzk1MzU2NTgzNzU2MTcyMTgzNzIzNzAwMTA3LFxuICAgICAgIDAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgIC0wLjY0ODA5MzY1MTkzNjk3NTU2OTI1MjQ5NTc4NjkxMDc0NzYyNjY2OTYsXG4gICAgICAgMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgLTAuNzQwMTI0MTkxNTc4NTU0MzY0MjQzODI4MTAzMDk5OTc4NDI1NTIzMixcbiAgICAgICAwLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAtMC44MjAwMDE5ODU5NzM5MDI5MjE5NTM5NDk4NzI2Njk3NDUyMDgwNzYxLFxuICAgICAgIDAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgIC0wLjg4NjQxNTUyNzAwNDQwMTAzNDIxMzE1NDM0MTk4MjE5Njc1NTA4NzMsXG4gICAgICAgMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgLTAuOTM4Mjc0NTUyMDAyNzMyNzU4NTIzNjQ5MDAxNzA4NzIxNDQ5NjU0OCxcbiAgICAgICAwLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAtMC45NzQ3Mjg1NTU5NzEzMDk0OTgxOTgzOTE5OTMwMDgxNjkwNjE3NDExLFxuICAgICAgIDAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgIC0wLjk5NTE4NzIxOTk5NzAyMTM2MDE3OTk5NzQwOTcwMDczNjgxMTg3NDUsXG4gICAgICAgMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1XG4gICAgXSxcblxuICAgIC8vIExlZ2VuZHJlLUdhdXNzIHdlaWdodHMgd2l0aCBuPTI0ICh3X2kgdmFsdWVzLCBkZWZpbmVkIGJ5IGEgZnVuY3Rpb24gbGlua2VkIHRvIGluIHRoZSBCZXppZXIgcHJpbWVyIGFydGljbGUpXG4gICAgQ3ZhbHVlczogW1xuICAgICAgMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LFxuICAgICAgMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LFxuICAgICAgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LFxuICAgICAgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LFxuICAgICAgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcwLFxuICAgICAgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcwLFxuICAgICAgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLFxuICAgICAgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLFxuICAgICAgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LFxuICAgICAgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LFxuICAgICAgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LFxuICAgICAgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LFxuICAgICAgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUwLFxuICAgICAgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUwLFxuICAgICAgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLFxuICAgICAgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLFxuICAgICAgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLFxuICAgICAgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLFxuICAgICAgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLFxuICAgICAgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLFxuICAgICAgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLFxuICAgICAgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLFxuICAgICAgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5LFxuICAgICAgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5XG4gICAgXSxcblxuICAgIGFyY2ZuOiBmdW5jdGlvbih0LCBkZXJpdmF0aXZlRm4pIHtcbiAgICAgIHZhciBkID0gZGVyaXZhdGl2ZUZuKHQpO1xuICAgICAgdmFyIGwgPSBkLngqZC54ICsgZC55KmQueTtcbiAgICAgIGlmKHR5cGVvZiBkLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbCArPSBkLnoqZC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNxcnQobCk7XG4gICAgfSxcblxuICAgIGJldHdlZW46IGZ1bmN0aW9uKHYsIG0sIE0pIHtcbiAgICAgIHJldHVybiAobSA8PSB2ICYmIHYgPD0gTSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBtKSB8fCB1dGlscy5hcHByb3hpbWF0ZWx5KHYsIE0pO1xuICAgIH0sXG5cbiAgICBhcHByb3hpbWF0ZWx5OiBmdW5jdGlvbihhLGIscHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4gYWJzKGEtYikgPD0gKHByZWNpc2lvbiB8fCBlcHNpbG9uKTtcbiAgICB9LFxuXG4gICAgbGVuZ3RoOiBmdW5jdGlvbihkZXJpdmF0aXZlRm4pIHtcbiAgICAgIHZhciB6PTAuNSxzdW09MCxsZW49dXRpbHMuVHZhbHVlcy5sZW5ndGgsaSx0O1xuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0geiAqIHV0aWxzLlR2YWx1ZXNbaV0gKyB6O1xuICAgICAgICBzdW0gKz0gdXRpbHMuQ3ZhbHVlc1tpXSAqIHV0aWxzLmFyY2ZuKHQsZGVyaXZhdGl2ZUZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6ICogc3VtO1xuICAgIH0sXG5cbiAgICBtYXA6IGZ1bmN0aW9uKHYsIGRzLGRlLCB0cyx0ZSkge1xuICAgICAgdmFyIGQxID0gZGUtZHMsIGQyID0gdGUtdHMsIHYyID0gIHYtZHMsIHIgPSB2Mi9kMTtcbiAgICAgIHJldHVybiB0cyArIGQyKnI7XG4gICAgfSxcblxuICAgIGxlcnA6IGZ1bmN0aW9uKHIsIHYxLCB2Mikge1xuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgeDogdjEueCArIHIqKHYyLngtdjEueCksXG4gICAgICAgIHk6IHYxLnkgKyByKih2Mi55LXYxLnkpXG4gICAgICB9O1xuICAgICAgaWYoISF2MS56ICYmICEhdjIueikge1xuICAgICAgICByZXQueiA9ICB2MS56ICsgcioodjIuei12MS56KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHBvaW50VG9TdHJpbmc6IGZ1bmN0aW9uKHApIHtcbiAgICAgIHZhciBzID0gcC54K1wiL1wiK3AueTtcbiAgICAgIGlmKHR5cGVvZiBwLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcyArPSBcIi9cIitwLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgICB9LFxuXG4gICAgcG9pbnRzVG9TdHJpbmc6IGZ1bmN0aW9uKHBvaW50cykge1xuICAgICAgcmV0dXJuIFwiW1wiICsgcG9pbnRzLm1hcCh1dGlscy5wb2ludFRvU3RyaW5nKS5qb2luKFwiLCBcIikgKyBcIl1cIjtcbiAgICB9LFxuXG4gICAgY29weTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKG8sdjEsdjIpIHtcbiAgICAgIHZhciBkeDEgPSB2MS54IC0gby54LFxuICAgICAgICAgIGR5MSA9IHYxLnkgLSBvLnksXG4gICAgICAgICAgZHgyID0gdjIueCAtIG8ueCxcbiAgICAgICAgICBkeTIgPSB2Mi55IC0gby55LFxuICAgICAgICAgIGNyb3NzID0gZHgxKmR5MiAtIGR5MSpkeDIsXG4gICAgICAgICAgbTEgPSBzcXJ0KGR4MSpkeDErZHkxKmR5MSksXG4gICAgICAgICAgbTIgPSBzcXJ0KGR4MipkeDIrZHkyKmR5MiksXG4gICAgICAgICAgZG90O1xuICAgICAgZHgxLz1tMTsgZHkxLz1tMTsgZHgyLz1tMjsgZHkyLz1tMjtcbiAgICAgIGRvdCA9IGR4MSpkeDIgKyBkeTEqZHkyO1xuICAgICAgcmV0dXJuIGF0YW4yKGNyb3NzLCBkb3QpO1xuICAgIH0sXG5cbiAgICAvLyByb3VuZCBhcyBzdHJpbmcsIHRvIGF2b2lkIHJvdW5kaW5nIGVycm9yc1xuICAgIHJvdW5kOiBmdW5jdGlvbih2LCBkKSB7XG4gICAgICB2YXIgcyA9ICcnICsgdjtcbiAgICAgIHZhciBwb3MgPSBzLmluZGV4T2YoXCIuXCIpO1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocy5zdWJzdHJpbmcoMCxwb3MrMStkKSk7XG4gICAgfSxcblxuICAgIGRpc3Q6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgICAgZHkgPSBwMS55IC0gcDIueTtcbiAgICAgIHJldHVybiBzcXJ0KGR4KmR4K2R5KmR5KTtcbiAgICB9LFxuXG4gICAgY2xvc2VzdDogZnVuY3Rpb24oTFVULCBwb2ludCkge1xuICAgICAgdmFyIG1kaXN0ID0gcG93KDIsNjMpLCBtcG9zLCBkO1xuICAgICAgTFVULmZvckVhY2goZnVuY3Rpb24ocCwgaWR4KSB7XG4gICAgICAgIGQgPSB1dGlscy5kaXN0KHBvaW50LCBwKTtcbiAgICAgICAgaWYgKGQ8bWRpc3QpIHtcbiAgICAgICAgICBtZGlzdCA9IGQ7XG4gICAgICAgICAgbXBvcyA9IGlkeDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBtZGlzdDptZGlzdCwgbXBvczptcG9zIH07XG4gICAgfSxcblxuICAgIGFiY3JhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgcmF0aW8odCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiY1xuICAgICAgaWYgKG4hPT0yICYmIG4hPT0zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0ID0gMC41O1xuICAgICAgfSBlbHNlIGlmICh0PT09MCB8fCB0PT09MSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH1cbiAgICAgIHZhciBib3R0b20gPSBwb3codCxuKSArIHBvdygxLXQsbiksIHRvcCA9IGJvdHRvbSAtIDE7XG4gICAgICByZXR1cm4gYWJzKHRvcC9ib3R0b20pO1xuICAgIH0sXG5cbiAgICBwcm9qZWN0aW9ucmF0aW86IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgIC8vIHNlZSB1KHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgdG9wID0gcG93KDEtdCwgbiksIGJvdHRvbSA9IHBvdyh0LG4pICsgdG9wO1xuICAgICAgcmV0dXJuIHRvcC9ib3R0b207XG4gICAgfSxcblxuICAgIGxsaTg6IGZ1bmN0aW9uKHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0KSB7XG4gICAgICB2YXIgbng9KHgxKnkyLXkxKngyKSooeDMteDQpLSh4MS14MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBueT0oeDEqeTIteTEqeDIpKih5My15NCktKHkxLXkyKSooeDMqeTQteTMqeDQpLFxuICAgICAgICAgIGQ9KHgxLXgyKSooeTMteTQpLSh5MS15MikqKHgzLXg0KTtcbiAgICAgIGlmKGQ9PTApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICByZXR1cm4geyB4OiBueC9kLCB5OiBueS9kIH07XG4gICAgfSxcblxuICAgIGxsaTQ6IGZ1bmN0aW9uKHAxLHAyLHAzLHA0KSB7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksXG4gICAgICAgICAgeDIgPSBwMi54LCB5MiA9IHAyLnksXG4gICAgICAgICAgeDMgPSBwMy54LCB5MyA9IHAzLnksXG4gICAgICAgICAgeDQgPSBwNC54LCB5NCA9IHA0Lnk7XG4gICAgICByZXR1cm4gdXRpbHMubGxpOCh4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCk7XG4gICAgfSxcblxuICAgIGxsaTogZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICByZXR1cm4gdXRpbHMubGxpNCh2MSx2MS5jLHYyLHYyLmMpO1xuICAgIH0sXG5cbiAgICBtYWtlbGluZTogZnVuY3Rpb24ocDEscDIpIHtcbiAgICAgIHZhciBCZXppZXIgPSByZXF1aXJlKDEwNSk7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksIHgyID0gcDIueCwgeTIgPSBwMi55LCBkeCA9ICh4Mi14MSkvMywgZHkgPSAoeTIteTEpLzM7XG4gICAgICByZXR1cm4gbmV3IEJlemllcih4MSwgeTEsIHgxK2R4LCB5MStkeSwgeDErMipkeCwgeTErMipkeSwgeDIsIHkyKTtcbiAgICB9LFxuXG4gICAgZmluZGJib3g6IGZ1bmN0aW9uKHNlY3Rpb25zKSB7XG4gICAgICB2YXIgbXg9OTk5OTk5OTksbXk9bXgsTVg9LW14LE1ZPU1YO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciBiYm94ID0gcy5iYm94KCk7XG4gICAgICAgIGlmKG14ID4gYmJveC54Lm1pbikgbXggPSBiYm94LngubWluO1xuICAgICAgICBpZihteSA+IGJib3gueS5taW4pIG15ID0gYmJveC55Lm1pbjtcbiAgICAgICAgaWYoTVggPCBiYm94LngubWF4KSBNWCA9IGJib3gueC5tYXg7XG4gICAgICAgIGlmKE1ZIDwgYmJveC55Lm1heCkgTVkgPSBiYm94LnkubWF4O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB7IG1pbjogbXgsIG1pZDoobXgrTVgpLzIsIG1heDogTVgsIHNpemU6TVgtbXggfSxcbiAgICAgICAgeTogeyBtaW46IG15LCBtaWQ6KG15K01ZKS8yLCBtYXg6IE1ZLCBzaXplOk1ZLW15IH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcGVpbnRlcnNlY3Rpb25zOiBmdW5jdGlvbihzMSwgYmJveDEsIHMyLCBiYm94MiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGlmKCF1dGlscy5iYm94b3ZlcmxhcChiYm94MSwgYmJveDIpKSByZXR1cm4gW107XG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgdmFyIGExID0gW3MxLnN0YXJ0Y2FwLCBzMS5mb3J3YXJkLCBzMS5iYWNrLCBzMS5lbmRjYXBdO1xuICAgICAgdmFyIGEyID0gW3MyLnN0YXJ0Y2FwLCBzMi5mb3J3YXJkLCBzMi5iYWNrLCBzMi5lbmRjYXBdO1xuICAgICAgYTEuZm9yRWFjaChmdW5jdGlvbihsMSkge1xuICAgICAgICBpZihsMS52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgIGEyLmZvckVhY2goZnVuY3Rpb24obDIpIHtcbiAgICAgICAgICBpZihsMi52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgICAgdmFyIGlzcyA9IGwxLmludGVyc2VjdHMobDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgICBpZihpc3MubGVuZ3RoPjApIHtcbiAgICAgICAgICAgIGlzcy5jMSA9IGwxO1xuICAgICAgICAgICAgaXNzLmMyID0gbDI7XG4gICAgICAgICAgICBpc3MuczEgPSBzMTtcbiAgICAgICAgICAgIGlzcy5zMiA9IHMyO1xuICAgICAgICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKGlzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gICAgfSxcblxuICAgIG1ha2VzaGFwZTogZnVuY3Rpb24oZm9yd2FyZCwgYmFjaywgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBicGwgPSBiYWNrLnBvaW50cy5sZW5ndGg7XG4gICAgICB2YXIgZnBsID0gZm9yd2FyZC5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIHN0YXJ0ICA9IHV0aWxzLm1ha2VsaW5lKGJhY2sucG9pbnRzW2JwbC0xXSwgZm9yd2FyZC5wb2ludHNbMF0pO1xuICAgICAgdmFyIGVuZCAgICA9IHV0aWxzLm1ha2VsaW5lKGZvcndhcmQucG9pbnRzW2ZwbC0xXSwgYmFjay5wb2ludHNbMF0pO1xuICAgICAgdmFyIHNoYXBlICA9IHtcbiAgICAgICAgc3RhcnRjYXA6IHN0YXJ0LFxuICAgICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgICBiYWNrOiBiYWNrLFxuICAgICAgICBlbmRjYXA6IGVuZCxcbiAgICAgICAgYmJveDogdXRpbHMuZmluZGJib3goW3N0YXJ0LCBmb3J3YXJkLCBiYWNrLCBlbmRdKVxuICAgICAgfTtcbiAgICAgIHZhciBzZWxmID0gdXRpbHM7XG4gICAgICBzaGFwZS5pbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oczIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2hhcGVpbnRlcnNlY3Rpb25zKHNoYXBlLHNoYXBlLmJib3gsczIsczIuYmJveCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9LFxuXG4gICAgZ2V0bWlubWF4OiBmdW5jdGlvbihjdXJ2ZSwgZCwgbGlzdCkge1xuICAgICAgaWYoIWxpc3QpIHJldHVybiB7IG1pbjowLCBtYXg6MCB9O1xuICAgICAgdmFyIG1pbj0weEZGRkZGRkZGRkZGRkZGRkYsIG1heD0tbWluLHQsYztcbiAgICAgIGlmKGxpc3QuaW5kZXhPZigwKT09PS0xKSB7IGxpc3QgPSBbMF0uY29uY2F0KGxpc3QpOyB9XG4gICAgICBpZihsaXN0LmluZGV4T2YoMSk9PT0tMSkgeyBsaXN0LnB1c2goMSk7IH1cbiAgICAgIGZvcih2YXIgaT0wLGxlbj1saXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0gbGlzdFtpXTtcbiAgICAgICAgYyA9IGN1cnZlLmdldCh0KTtcbiAgICAgICAgaWYoY1tkXSA8IG1pbikgeyBtaW4gPSBjW2RdOyB9XG4gICAgICAgIGlmKGNbZF0gPiBtYXgpIHsgbWF4ID0gY1tkXTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbWluOm1pbiwgbWlkOihtaW4rbWF4KS8yLCBtYXg6bWF4LCBzaXplOm1heC1taW4gfTtcbiAgICB9LFxuXG4gICAgYWxpZ246IGZ1bmN0aW9uKHBvaW50cywgbGluZSkge1xuICAgICAgdmFyIHR4ID0gbGluZS5wMS54LFxuICAgICAgICAgIHR5ID0gbGluZS5wMS55LFxuICAgICAgICAgIGEgPSAtYXRhbjIobGluZS5wMi55LXR5LCBsaW5lLnAyLngtdHgpLFxuICAgICAgICAgIGQgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiAodi54LXR4KSpjb3MoYSkgLSAodi55LXR5KSpzaW4oYSksXG4gICAgICAgICAgICAgIHk6ICh2LngtdHgpKnNpbihhKSArICh2LnktdHkpKmNvcyhhKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgcmV0dXJuIHBvaW50cy5tYXAoZCk7XG4gICAgfSxcblxuICAgIHJvb3RzOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIGxpbmUgPSBsaW5lIHx8IHtwMTp7eDowLHk6MH0scDI6e3g6MSx5OjB9fTtcbiAgICAgIHZhciBvcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIGxpbmUpO1xuICAgICAgdmFyIHJlZHVjZSA9IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIDA8PXQgJiYgdCA8PTE7IH07XG5cbiAgICAgIGlmIChvcmRlciA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0ueSxcbiAgICAgICAgICAgIGIgPSBwWzFdLnksXG4gICAgICAgICAgICBjID0gcFsyXS55LFxuICAgICAgICAgICAgZCA9IGEgLSAyKmIgKyBjO1xuICAgICAgICBpZihkIT09MCkge1xuICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIqYi1hKmMpLFxuICAgICAgICAgICAgICBtMiA9IC1hK2IsXG4gICAgICAgICAgICAgIHYxID0gLSggbTErbTIpL2QsXG4gICAgICAgICAgICAgIHYyID0gLSgtbTErbTIpL2Q7XG4gICAgICAgICAgcmV0dXJuIFt2MSwgdjJdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYiE9PWMgJiYgZD09PTApIHtcbiAgICAgICAgICByZXR1cm4gWyAoMipiLWMpLzIqKGItYykgXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnRyYW5zNG1pbmQuY29tL3BlcnNvbmFsX2RldmVsb3BtZW50L21hdGhlbWF0aWNzL3BvbHlub21pYWxzL2N1YmljQWxnZWJyYS5odG1cbiAgICAgIHZhciBwYSA9IHBbMF0ueSxcbiAgICAgICAgICBwYiA9IHBbMV0ueSxcbiAgICAgICAgICBwYyA9IHBbMl0ueSxcbiAgICAgICAgICBwZCA9IHBbM10ueSxcbiAgICAgICAgICBkID0gKC1wYSArIDMqcGIgLSAzKnBjICsgcGQpLFxuICAgICAgICAgIGEgPSAoMypwYSAtIDYqcGIgKyAzKnBjKSAvIGQsXG4gICAgICAgICAgYiA9ICgtMypwYSArIDMqcGIpIC8gZCxcbiAgICAgICAgICBjID0gcGEgLyBkLFxuICAgICAgICAgIHAgPSAoMypiIC0gYSphKS8zLFxuICAgICAgICAgIHAzID0gcC8zLFxuICAgICAgICAgIHEgPSAoMiphKmEqYSAtIDkqYSpiICsgMjcqYykvMjcsXG4gICAgICAgICAgcTIgPSBxLzIsXG4gICAgICAgICAgZGlzY3JpbWluYW50ID0gcTIqcTIgKyBwMypwMypwMyxcbiAgICAgICAgICB1MSx2MSx4MSx4Mix4MztcbiAgICAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xuICAgICAgICB2YXIgbXAzID0gLXAvMyxcbiAgICAgICAgICAgIG1wMzMgPSBtcDMqbXAzKm1wMyxcbiAgICAgICAgICAgIHIgPSBzcXJ0KCBtcDMzICksXG4gICAgICAgICAgICB0ID0gLXEvKDIqciksXG4gICAgICAgICAgICBjb3NwaGkgPSB0PC0xID8gLTEgOiB0PjEgPyAxIDogdCxcbiAgICAgICAgICAgIHBoaSA9IGFjb3MoY29zcGhpKSxcbiAgICAgICAgICAgIGNydHIgPSBjcnQociksXG4gICAgICAgICAgICB0MSA9IDIqY3J0cjtcbiAgICAgICAgeDEgPSB0MSAqIGNvcyhwaGkvMykgLSBhLzM7XG4gICAgICAgIHgyID0gdDEgKiBjb3MoKHBoaSt0YXUpLzMpIC0gYS8zO1xuICAgICAgICB4MyA9IHQxICogY29zKChwaGkrMip0YXUpLzMpIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLCB4MiwgeDNdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgfSBlbHNlIGlmKGRpc2NyaW1pbmFudCA9PT0gMCkge1xuICAgICAgICB1MSA9IHEyIDwgMCA/IGNydCgtcTIpIDogLWNydChxMik7XG4gICAgICAgIHgxID0gMip1MS1hLzM7XG4gICAgICAgIHgyID0gLXUxIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLHgyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZCA9IHNxcnQoZGlzY3JpbWluYW50KTtcbiAgICAgICAgdTEgPSBjcnQoLXEyK3NkKTtcbiAgICAgICAgdjEgPSBjcnQocTIrc2QpO1xuICAgICAgICByZXR1cm4gW3UxLXYxLWEvM10uZmlsdGVyKHJlZHVjZSk7O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkcm9vdHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgIC8vIHF1YWRyYXRpYyByb290cyBhcmUgZWFzeVxuICAgICAgaWYocC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLFxuICAgICAgICAgICAgYiA9IHBbMV0sXG4gICAgICAgICAgICBjID0gcFsyXSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsoMipiLWMpLygyKihiLWMpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBsaW5lYXIgcm9vdHMgYXJlIGV2ZW4gZWFzaWVyXG4gICAgICBpZihwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0sIGIgPSBwWzFdO1xuICAgICAgICBpZihhIT09Yikge1xuICAgICAgICAgIHJldHVybiBbYS8oYS1iKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24ocG9pbnRzKSB7XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aDw0KSByZXR1cm4gW107XG5cbiAgICAgIC8vIEZJWE1FOiBUT0RPOiBhZGQgaW4gaW5mbGVjdGlvbiBhYnN0cmFjdGlvbiBmb3IgcXVhcnRpYysgY3VydmVzP1xuXG4gICAgICB2YXIgcCA9IHV0aWxzLmFsaWduKHBvaW50cywgeyBwMTogcG9pbnRzWzBdLCBwMjogcG9pbnRzLnNsaWNlKC0xKVswXSB9KSxcbiAgICAgICAgICBhID0gcFsyXS54ICogcFsxXS55LFxuICAgICAgICAgIGIgPSBwWzNdLnggKiBwWzFdLnksXG4gICAgICAgICAgYyA9IHBbMV0ueCAqIHBbMl0ueSxcbiAgICAgICAgICBkID0gcFszXS54ICogcFsyXS55LFxuICAgICAgICAgIHYxID0gMTggKiAoLTMqYSArIDIqYiArIDMqYyAtIGQpLFxuICAgICAgICAgIHYyID0gMTggKiAoMyphIC0gYiAtIDMqYyksXG4gICAgICAgICAgdjMgPSAxOCAqIChjIC0gYSk7XG5cbiAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KHYxLDApKSByZXR1cm4gW107XG5cbiAgICAgIHZhciB0cm0gPSB2Mip2MiAtIDQqdjEqdjMsXG4gICAgICAgICAgc3EgPSBNYXRoLnNxcnQodHJtKSxcbiAgICAgICAgICBkID0gMiAqIHYxO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLDApKSByZXR1cm4gW107XG5cbiAgICAgIHJldHVybiBbKHNxLXYyKS9kLCAtKHYyK3NxKS9kXS5maWx0ZXIoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gKDAgPD0gciAmJiByIDw9IDEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGJib3hvdmVybGFwOiBmdW5jdGlvbihiMSxiMikge1xuICAgICAgdmFyIGRpbXM9Wyd4JywneSddLGxlbj1kaW1zLmxlbmd0aCxpLGRpbSxsLHQsZFxuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBkaW0gPSBkaW1zW2ldO1xuICAgICAgICBsID0gYjFbZGltXS5taWQ7XG4gICAgICAgIHQgPSBiMltkaW1dLm1pZDtcbiAgICAgICAgZCA9IChiMVtkaW1dLnNpemUgKyBiMltkaW1dLnNpemUpLzI7XG4gICAgICAgIGlmKGFicyhsLXQpID49IGQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBleHBhbmRib3g6IGZ1bmN0aW9uKGJib3gsIF9iYm94KSB7XG4gICAgICBpZihfYmJveC54Lm1pbiA8IGJib3gueC5taW4pIHsgYmJveC54Lm1pbiA9IF9iYm94LngubWluOyB9XG4gICAgICBpZihfYmJveC55Lm1pbiA8IGJib3gueS5taW4pIHsgYmJveC55Lm1pbiA9IF9iYm94LnkubWluOyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWluIDwgYmJveC56Lm1pbikgeyBiYm94LnoubWluID0gX2Jib3guei5taW47IH1cbiAgICAgIGlmKF9iYm94LngubWF4ID4gYmJveC54Lm1heCkgeyBiYm94LngubWF4ID0gX2Jib3gueC5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnkubWF4ID4gYmJveC55Lm1heCkgeyBiYm94LnkubWF4ID0gX2Jib3gueS5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnogJiYgX2Jib3guei5tYXggPiBiYm94LnoubWF4KSB7IGJib3guei5tYXggPSBfYmJveC56Lm1heDsgfVxuICAgICAgYmJveC54Lm1pZCA9IChiYm94LngubWluICsgYmJveC54Lm1heCkvMjtcbiAgICAgIGJib3gueS5taWQgPSAoYmJveC55Lm1pbiArIGJib3gueS5tYXgpLzI7XG4gICAgICBpZihiYm94LnopIHsgYmJveC56Lm1pZCA9IChiYm94LnoubWluICsgYmJveC56Lm1heCkvMjsgfVxuICAgICAgYmJveC54LnNpemUgPSBiYm94LngubWF4IC0gYmJveC54Lm1pbjtcbiAgICAgIGJib3gueS5zaXplID0gYmJveC55Lm1heCAtIGJib3gueS5taW47XG4gICAgICBpZihiYm94LnopIHsgYmJveC56LnNpemUgPSBiYm94LnoubWF4IC0gYmJveC56Lm1pbjsgfVxuICAgIH0sXG5cbiAgICBwYWlyaXRlcmF0aW9uOiBmdW5jdGlvbihjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYzFiID0gYzEuYmJveCgpLFxuICAgICAgICAgIGMyYiA9IGMyLmJib3goKSxcbiAgICAgICAgICByID0gMTAwMDAwLFxuICAgICAgICAgIHRocmVzaG9sZCA9IGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIGlmKGMxYi54LnNpemUgKyBjMWIueS5zaXplIDwgdGhyZXNob2xkICYmIGMyYi54LnNpemUgKyBjMmIueS5zaXplIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiBbICgociAqIChjMS5fdDErYzEuX3QyKS8yKXwwKS9yICsgXCIvXCIgKyAoKHIgKiAoYzIuX3QxK2MyLl90MikvMil8MCkvciBdO1xuICAgICAgfVxuICAgICAgdmFyIGNjMSA9IGMxLnNwbGl0KDAuNSksXG4gICAgICAgICAgY2MyID0gYzIuc3BsaXQoMC41KSxcbiAgICAgICAgICBwYWlycyA9IFtcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEubGVmdCwgcmlnaHQ6IGNjMi5sZWZ0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIubGVmdCB9XTtcbiAgICAgIHBhaXJzID0gcGFpcnMuZmlsdGVyKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKHBhaXIubGVmdC5iYm94KCkscGFpci5yaWdodC5iYm94KCkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgaWYocGFpcnMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0cztcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIHRocmVzaG9sZClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24odixpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmluZGV4T2YodikgPT09IGk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG5cbiAgICBnZXRjY2VudGVyOiBmdW5jdGlvbihwMSxwMixwMykge1xuICAgICAgdmFyIGR4MSA9IChwMi54IC0gcDEueCksXG4gICAgICAgICAgZHkxID0gKHAyLnkgLSBwMS55KSxcbiAgICAgICAgICBkeDIgPSAocDMueCAtIHAyLngpLFxuICAgICAgICAgIGR5MiA9IChwMy55IC0gcDIueSk7XG4gICAgICB2YXIgZHgxcCA9IGR4MSAqIGNvcyhxdWFydCkgLSBkeTEgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MXAgPSBkeDEgKiBzaW4ocXVhcnQpICsgZHkxICogY29zKHF1YXJ0KSxcbiAgICAgICAgICBkeDJwID0gZHgyICogY29zKHF1YXJ0KSAtIGR5MiAqIHNpbihxdWFydCksXG4gICAgICAgICAgZHkycCA9IGR4MiAqIHNpbihxdWFydCkgKyBkeTIgKiBjb3MocXVhcnQpO1xuICAgICAgLy8gY2hvcmQgbWlkcG9pbnRzXG4gICAgICB2YXIgbXgxID0gKHAxLnggKyBwMi54KS8yLFxuICAgICAgICAgIG15MSA9IChwMS55ICsgcDIueSkvMixcbiAgICAgICAgICBteDIgPSAocDIueCArIHAzLngpLzIsXG4gICAgICAgICAgbXkyID0gKHAyLnkgKyBwMy55KS8yO1xuICAgICAgLy8gbWlkcG9pbnQgb2Zmc2V0c1xuICAgICAgdmFyIG14MW4gPSBteDEgKyBkeDFwLFxuICAgICAgICAgIG15MW4gPSBteTEgKyBkeTFwLFxuICAgICAgICAgIG14Mm4gPSBteDIgKyBkeDJwLFxuICAgICAgICAgIG15Mm4gPSBteTIgKyBkeTJwO1xuICAgICAgLy8gaW50ZXJzZWN0aW9uIG9mIHRoZXNlIGxpbmVzOlxuICAgICAgdmFyIGFyYyA9IHV0aWxzLmxsaTgobXgxLG15MSxteDFuLG15MW4sIG14MixteTIsbXgybixteTJuKSxcbiAgICAgICAgICByID0gdXRpbHMuZGlzdChhcmMscDEpLFxuICAgICAgICAgIC8vIGFyYyBzdGFydC9lbmQgdmFsdWVzLCBvdmVyIG1pZCBwb2ludDpcbiAgICAgICAgICBzID0gYXRhbjIocDEueSAtIGFyYy55LCBwMS54IC0gYXJjLngpLFxuICAgICAgICAgIG0gPSBhdGFuMihwMi55IC0gYXJjLnksIHAyLnggLSBhcmMueCksXG4gICAgICAgICAgZSA9IGF0YW4yKHAzLnkgLSBhcmMueSwgcDMueCAtIGFyYy54KSxcbiAgICAgICAgICBfO1xuICAgICAgLy8gZGV0ZXJtaW5lIGFyYyBkaXJlY3Rpb24gKGN3L2NjdyBjb3JyZWN0aW9uKVxuICAgICAgaWYgKHM8ZSkge1xuICAgICAgICAvLyBpZiBzPG08ZSwgYXJjKHMsIGUpXG4gICAgICAgIC8vIGlmIG08czxlLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgLy8gaWYgczxlPG0sIGFyYyhlLCBzICsgdGF1KVxuICAgICAgICBpZiAocz5tIHx8IG0+ZSkgeyBzICs9IHRhdTsgfVxuICAgICAgICBpZiAocz5lKSB7IF89ZTsgZT1zOyBzPV87IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGU8bTxzLCBhcmMoZSwgcylcbiAgICAgICAgLy8gaWYgbTxlPHMsIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICAvLyBpZiBlPHM8bSwgYXJjKHMsIGUgKyB0YXUpXG4gICAgICAgIGlmIChlPG0gJiYgbTxzKSB7IF89ZTsgZT1zOyBzPV87IH0gZWxzZSB7IGUgKz0gdGF1OyB9XG4gICAgICB9XG4gICAgICAvLyBhc3NpZ24gYW5kIGRvbmUuXG4gICAgICBhcmMucyA9IHM7XG4gICAgICBhcmMuZSA9IGU7XG4gICAgICBhcmMuciA9IHI7XG4gICAgICByZXR1cm4gYXJjO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xufSgpKTtcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwidmFyIGNsb25lID0gKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsb25lcyAoY29waWVzKSBhbiBPYmplY3QgdXNpbmcgZGVlcCBjb3B5aW5nLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gc3VwcG9ydHMgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBkZWZhdWx0LCBidXQgaWYgeW91IGFyZSBjZXJ0YWluXG4gKiB0aGVyZSBhcmUgbm8gY2lyY3VsYXIgcmVmZXJlbmNlcyBpbiB5b3VyIG9iamVjdCwgeW91IGNhbiBzYXZlIHNvbWUgQ1BVIHRpbWVcbiAqIGJ5IGNhbGxpbmcgY2xvbmUob2JqLCBmYWxzZSkuXG4gKlxuICogQ2F1dGlvbjogaWYgYGNpcmN1bGFyYCBpcyBmYWxzZSBhbmQgYHBhcmVudGAgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlcyxcbiAqIHlvdXIgcHJvZ3JhbSBtYXkgZW50ZXIgYW4gaW5maW5pdGUgbG9vcCBhbmQgY3Jhc2guXG4gKlxuICogQHBhcmFtIGBwYXJlbnRgIC0gdGhlIG9iamVjdCB0byBiZSBjbG9uZWRcbiAqIEBwYXJhbSBgY2lyY3VsYXJgIC0gc2V0IHRvIHRydWUgaWYgdGhlIG9iamVjdCB0byBiZSBjbG9uZWQgbWF5IGNvbnRhaW5cbiAqICAgIGNpcmN1bGFyIHJlZmVyZW5jZXMuIChvcHRpb25hbCAtIHRydWUgYnkgZGVmYXVsdClcbiAqIEBwYXJhbSBgZGVwdGhgIC0gc2V0IHRvIGEgbnVtYmVyIGlmIHRoZSBvYmplY3QgaXMgb25seSB0byBiZSBjbG9uZWQgdG9cbiAqICAgIGEgcGFydGljdWxhciBkZXB0aC4gKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gSW5maW5pdHkpXG4gKiBAcGFyYW0gYHByb3RvdHlwZWAgLSBzZXRzIHRoZSBwcm90b3R5cGUgdG8gYmUgdXNlZCB3aGVuIGNsb25pbmcgYW4gb2JqZWN0LlxuICogICAgKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gcGFyZW50IHByb3RvdHlwZSkuXG4qL1xuZnVuY3Rpb24gY2xvbmUocGFyZW50LCBjaXJjdWxhciwgZGVwdGgsIHByb3RvdHlwZSkge1xuICB2YXIgZmlsdGVyO1xuICBpZiAodHlwZW9mIGNpcmN1bGFyID09PSAnb2JqZWN0Jykge1xuICAgIGRlcHRoID0gY2lyY3VsYXIuZGVwdGg7XG4gICAgcHJvdG90eXBlID0gY2lyY3VsYXIucHJvdG90eXBlO1xuICAgIGZpbHRlciA9IGNpcmN1bGFyLmZpbHRlcjtcbiAgICBjaXJjdWxhciA9IGNpcmN1bGFyLmNpcmN1bGFyXG4gIH1cbiAgLy8gbWFpbnRhaW4gdHdvIGFycmF5cyBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcywgd2hlcmUgY29ycmVzcG9uZGluZyBwYXJlbnRzXG4gIC8vIGFuZCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGluZGV4XG4gIHZhciBhbGxQYXJlbnRzID0gW107XG4gIHZhciBhbGxDaGlsZHJlbiA9IFtdO1xuXG4gIHZhciB1c2VCdWZmZXIgPSB0eXBlb2YgQnVmZmVyICE9ICd1bmRlZmluZWQnO1xuXG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT0gJ3VuZGVmaW5lZCcpXG4gICAgY2lyY3VsYXIgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZGVwdGggPT0gJ3VuZGVmaW5lZCcpXG4gICAgZGVwdGggPSBJbmZpbml0eTtcblxuICAvLyByZWN1cnNlIHRoaXMgZnVuY3Rpb24gc28gd2UgZG9uJ3QgcmVzZXQgYWxsUGFyZW50cyBhbmQgYWxsQ2hpbGRyZW5cbiAgZnVuY3Rpb24gX2Nsb25lKHBhcmVudCwgZGVwdGgpIHtcbiAgICAvLyBjbG9uaW5nIG51bGwgYWx3YXlzIHJldHVybnMgbnVsbFxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcblxuICAgIGlmIChkZXB0aCA9PSAwKVxuICAgICAgcmV0dXJuIHBhcmVudDtcblxuICAgIHZhciBjaGlsZDtcbiAgICB2YXIgcHJvdG87XG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGNsb25lLl9faXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IFtdO1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc1JlZ0V4cChwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBSZWdFeHAocGFyZW50LnNvdXJjZSwgX19nZXRSZWdFeHBGbGFncyhwYXJlbnQpKTtcbiAgICAgIGlmIChwYXJlbnQubGFzdEluZGV4KSBjaGlsZC5sYXN0SW5kZXggPSBwYXJlbnQubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc0RhdGUocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgRGF0ZShwYXJlbnQuZ2V0VGltZSgpKTtcbiAgICB9IGVsc2UgaWYgKHVzZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgQnVmZmVyKHBhcmVudC5sZW5ndGgpO1xuICAgICAgcGFyZW50LmNvcHkoY2hpbGQpO1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHByb3RvdHlwZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpO1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgICBwcm90byA9IHByb3RvdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2lyY3VsYXIpIHtcbiAgICAgIHZhciBpbmRleCA9IGFsbFBhcmVudHMuaW5kZXhPZihwYXJlbnQpO1xuXG4gICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGFsbFBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgYWxsQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSBpbiBwYXJlbnQpIHtcbiAgICAgIHZhciBhdHRycztcbiAgICAgIGlmIChwcm90bykge1xuICAgICAgICBhdHRycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cnMgJiYgYXR0cnMuc2V0ID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjaGlsZFtpXSA9IF9jbG9uZShwYXJlbnRbaV0sIGRlcHRoIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcmV0dXJuIF9jbG9uZShwYXJlbnQsIGRlcHRoKTtcbn1cblxuLyoqXG4gKiBTaW1wbGUgZmxhdCBjbG9uZSB1c2luZyBwcm90b3R5cGUsIGFjY2VwdHMgb25seSBvYmplY3RzLCB1c2VmdWxsIGZvciBwcm9wZXJ0eVxuICogb3ZlcnJpZGUgb24gRkxBVCBjb25maWd1cmF0aW9uIG9iamVjdCAobm8gbmVzdGVkIHByb3BzKS5cbiAqXG4gKiBVU0UgV0lUSCBDQVVUSU9OISBUaGlzIG1heSBub3QgYmVoYXZlIGFzIHlvdSB3aXNoIGlmIHlvdSBkbyBub3Qga25vdyBob3cgdGhpc1xuICogd29ya3MuXG4gKi9cbmNsb25lLmNsb25lUHJvdG90eXBlID0gZnVuY3Rpb24gY2xvbmVQcm90b3R5cGUocGFyZW50KSB7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIGMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgYy5wcm90b3R5cGUgPSBwYXJlbnQ7XG4gIHJldHVybiBuZXcgYygpO1xufTtcblxuLy8gcHJpdmF0ZSB1dGlsaXR5IGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBfX29ialRvU3RyKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn07XG5jbG9uZS5fX29ialRvU3RyID0gX19vYmpUb1N0cjtcblxuZnVuY3Rpb24gX19pc0RhdGUobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5jbG9uZS5fX2lzRGF0ZSA9IF9faXNEYXRlO1xuXG5mdW5jdGlvbiBfX2lzQXJyYXkobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuY2xvbmUuX19pc0FycmF5ID0gX19pc0FycmF5O1xuXG5mdW5jdGlvbiBfX2lzUmVnRXhwKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5jbG9uZS5fX2lzUmVnRXhwID0gX19pc1JlZ0V4cDtcblxuZnVuY3Rpb24gX19nZXRSZWdFeHBGbGFncyhyZSkge1xuICB2YXIgZmxhZ3MgPSAnJztcbiAgaWYgKHJlLmdsb2JhbCkgZmxhZ3MgKz0gJ2cnO1xuICBpZiAocmUuaWdub3JlQ2FzZSkgZmxhZ3MgKz0gJ2knO1xuICBpZiAocmUubXVsdGlsaW5lKSBmbGFncyArPSAnbSc7XG4gIHJldHVybiBmbGFncztcbn07XG5jbG9uZS5fX2dldFJlZ0V4cEZsYWdzID0gX19nZXRSZWdFeHBGbGFncztcblxucmV0dXJuIGNsb25lO1xufSkoKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07IiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgxMTEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgIGdldFJnYmE6IGdldFJnYmEsXG4gICBnZXRIc2xhOiBnZXRIc2xhLFxuICAgZ2V0UmdiOiBnZXRSZ2IsXG4gICBnZXRIc2w6IGdldEhzbCxcbiAgIGdldEh3YjogZ2V0SHdiLFxuICAgZ2V0QWxwaGE6IGdldEFscGhhLFxuXG4gICBoZXhTdHJpbmc6IGhleFN0cmluZyxcbiAgIHJnYlN0cmluZzogcmdiU3RyaW5nLFxuICAgcmdiYVN0cmluZzogcmdiYVN0cmluZyxcbiAgIHBlcmNlbnRTdHJpbmc6IHBlcmNlbnRTdHJpbmcsXG4gICBwZXJjZW50YVN0cmluZzogcGVyY2VudGFTdHJpbmcsXG4gICBoc2xTdHJpbmc6IGhzbFN0cmluZyxcbiAgIGhzbGFTdHJpbmc6IGhzbGFTdHJpbmcsXG4gICBod2JTdHJpbmc6IGh3YlN0cmluZyxcbiAgIGtleXdvcmQ6IGtleXdvcmRcbn1cblxuZnVuY3Rpb24gZ2V0UmdiYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgYWJiciA9ICAvXiMoW2EtZkEtRjAtOV17M30pJC8sXG4gICAgICAgaGV4ID0gIC9eIyhbYS1mQS1GMC05XXs2fSkkLyxcbiAgICAgICByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sXG4gICAgICAga2V5d29yZCA9IC8oXFxEKykvO1xuXG4gICB2YXIgcmdiID0gWzAsIDAsIDBdLFxuICAgICAgIGEgPSAxLFxuICAgICAgIG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaSAqIDIsIGkgKiAyICsgMiksIDE2KTtcbiAgICAgIH1cbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdKTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcbiAgICAgIGlmIChtYXRjaFsxXSA9PSBcInRyYW5zcGFyZW50XCIpIHtcbiAgICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG4gICAgICByZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcbiAgICAgIGlmICghcmdiKSB7XG4gICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICB9XG5cbiAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZ2JbaV0gPSBzY2FsZShyZ2JbaV0sIDAsIDI1NSk7XG4gICB9XG4gICBpZiAoIWEgJiYgYSAhPSAwKSB7XG4gICAgICBhID0gMTtcbiAgIH1cbiAgIGVsc2Uge1xuICAgICAgYSA9IHNjYWxlKGEsIDAsIDEpO1xuICAgfVxuICAgcmdiWzNdID0gYTtcbiAgIHJldHVybiByZ2I7XG59XG5cbmZ1bmN0aW9uIGdldEhzbGEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHMgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBsID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHMsIGwsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRId2Ioc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcbiAgIGlmIChtYXRjaCkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgdyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGIgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgdywgYiwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldFJnYihzdHJpbmcpIHtcbiAgIHZhciByZ2JhID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgcmV0dXJuIHJnYmEgJiYgcmdiYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsKHN0cmluZykge1xuICB2YXIgaHNsYSA9IGdldEhzbGEoc3RyaW5nKTtcbiAgcmV0dXJuIGhzbGEgJiYgaHNsYS5zbGljZSgwLCAzKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxwaGEoc3RyaW5nKSB7XG4gICB2YXIgdmFscyA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIGlmICh2YWxzKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRIc2xhKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEh3YihzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbn1cblxuLy8gZ2VuZXJhdG9yc1xuZnVuY3Rpb24gaGV4U3RyaW5nKHJnYikge1xuICAgcmV0dXJuIFwiI1wiICsgaGV4RG91YmxlKHJnYlswXSkgKyBoZXhEb3VibGUocmdiWzFdKVxuICAgICAgICAgICAgICArIGhleERvdWJsZShyZ2JbMl0pO1xufVxuXG5mdW5jdGlvbiByZ2JTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2IoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl0gKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcmdiYVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKHJnYmFbM10gIT09IHVuZGVmaW5lZCA/IHJnYmFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JhWzBdICsgXCIsIFwiICsgcmdiYVsxXSArIFwiLCBcIiArIHJnYmFbMl1cbiAgICAgICAgICAgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50U3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcblxuICAgcmV0dXJuIFwicmdiKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiJSwgXCIgKyBnICsgXCIlLCBcIiArIGIgKyBcIiUsIFwiICsgKGFscGhhIHx8IHJnYmFbM10gfHwgMSkgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gaHNsU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChoc2xhWzNdICYmIGhzbGFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGhzbGFbM10gIT09IHVuZGVmaW5lZCA/IGhzbGFbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbGEoXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlLCBcIlxuICAgICAgICAgICArIGFscGhhICsgXCIpXCI7XG59XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5mdW5jdGlvbiBod2JTdHJpbmcoaHdiLCBhbHBoYSkge1xuICAgaWYgKGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFscGhhID0gKGh3YlszXSAhPT0gdW5kZWZpbmVkID8gaHdiWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJod2IoXCIgKyBod2JbMF0gKyBcIiwgXCIgKyBod2JbMV0gKyBcIiUsIFwiICsgaHdiWzJdICsgXCIlXCJcbiAgICAgICAgICAgKyAoYWxwaGEgIT09IHVuZGVmaW5lZCAmJiBhbHBoYSAhPT0gMSA/IFwiLCBcIiArIGFscGhhIDogXCJcIikgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24ga2V5d29yZChyZ2IpIHtcbiAgcmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufVxuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBzY2FsZShudW0sIG1pbiwgbWF4KSB7XG4gICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG4gIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gXCIwXCIgKyBzdHIgOiBzdHI7XG59XG5cblxuLy9jcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuICAgcmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY2xvbmUgPSByZXF1aXJlKDExMCk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoMTE2KTtcbnZhciBzdHJpbmcgPSByZXF1aXJlKDExMik7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMgPSB7XG5cdFx0cmdiOiBbMCwgMCwgMF0sXG5cdFx0aHNsOiBbMCwgMCwgMF0sXG5cdFx0aHN2OiBbMCwgMCwgMF0sXG5cdFx0aHdiOiBbMCwgMCwgMF0sXG5cdFx0Y215azogWzAsIDAsIDAsIDBdLFxuXHRcdGFscGhhOiAxXG5cdH07XG5cblx0Ly8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuXHR2YXIgdmFscztcblx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG5cdFx0aWYgKHZhbHMpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyArIG9iaiArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdHZhbHMgPSBvYmo7XG5cdFx0aWYgKHZhbHMuciAhPT0gdW5kZWZpbmVkIHx8IHZhbHMucmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMubCAhPT0gdW5kZWZpbmVkIHx8IHZhbHMubGlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudiAhPT0gdW5kZWZpbmVkIHx8IHZhbHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzdicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy53ICE9PSB1bmRlZmluZWQgfHwgdmFscy53aGl0ZW5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5jICE9PSB1bmRlZmluZWQgfHwgdmFscy5jeWFuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdjbXlrJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0cmdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ3JnYicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc2wnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc3Y6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHN2JywgYXJndW1lbnRzKTtcblx0fSxcblx0aHdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2h3YicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGNteWs6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnY215aycsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0cmdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuXHR9LFxuXHRoc2xBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG5cdH0sXG5cdGhzdkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcblx0fSxcblx0aHdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuXHR9LFxuXHRjbXlrQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuY215aztcblx0fSxcblx0cmdiYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHRyZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0aHNsYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcblx0XHRyZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdmFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZWQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAwLCB2YWwpO1xuXHR9LFxuXHRncmVlbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAyLCB2YWwpO1xuXHR9LFxuXHRodWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR2YWwgJT0gMzYwO1xuXHRcdFx0dmFsID0gdmFsIDwgMCA/IDM2MCArIHZhbCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMCwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDEsIHZhbCk7XG5cdH0sXG5cdGxpZ2h0bmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDIsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb252OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMSwgdmFsKTtcblx0fSxcblx0d2hpdGVuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMSwgdmFsKTtcblx0fSxcblx0YmxhY2tuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMiwgdmFsKTtcblx0fSxcblx0dmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAyLCB2YWwpO1xuXHR9LFxuXHRjeWFuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDAsIHZhbCk7XG5cdH0sXG5cdG1hZ2VudGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMSwgdmFsKTtcblx0fSxcblx0eWVsbG93OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDIsIHZhbCk7XG5cdH0sXG5cdGJsYWNrOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDMsIHZhbCk7XG5cdH0sXG5cblx0aGV4U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcblx0fSxcblx0cmdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHJnYmFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRod2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0a2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGRhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0bGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgcmdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdyZXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIFt2YWwsIHZhbCwgdmFsXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xlYXJlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0ICovXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdHZhciBjb2xvcjEgPSB0aGlzO1xuXHRcdHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuXHRcdFx0KVxuXHRcdFx0LmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmdiKCk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY29sID0gbmV3IENvbG9yKCk7XG5cdFx0Y29sLnZhbHVlcyA9IGNsb25lKHRoaXMudmFsdWVzKTtcblx0XHRyZXR1cm4gY29sO1xuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cdHZhciB2YWxzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcblx0fVxuXG5cdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdHZhbHMuYSA9IHRoaXMudmFsdWVzLmFscGhhO1xuXHR9XG5cblx0Ly8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cblx0cmV0dXJuIHZhbHM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlLCB2YWxzKSB7XG5cdHZhciBzcGFjZXMgPSB7XG5cdFx0cmdiOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG5cdFx0aHNsOiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcyddLFxuXHRcdGhzdjogWydodWUnLCAnc2F0dXJhdGlvbicsICd2YWx1ZSddLFxuXHRcdGh3YjogWydodWUnLCAnd2hpdGVuZXNzJywgJ2JsYWNrbmVzcyddLFxuXHRcdGNteWs6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddXG5cdH07XG5cblx0dmFyIG1heGVzID0ge1xuXHRcdHJnYjogWzI1NSwgMjU1LCAyNTVdLFxuXHRcdGhzbDogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGhzdjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGh3YjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGNteWs6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG5cdH07XG5cblx0dmFyIGk7XG5cdHZhciBhbHBoYSA9IDE7XG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdGFscGhhID0gdmFscztcblx0fSBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuXHRcdC8vIFsxMCwgMTAsIDEwXVxuXHRcdHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcblx0XHRhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuXHRcdHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hbHBoYTtcblx0fVxuXG5cdHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhID09PSB1bmRlZmluZWQgPyB0aGlzLnZhbHVlcy5hbHBoYSA6IGFscGhhKSkpO1xuXG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBjYXBwZWQ7XG5cblx0Ly8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG5cdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHR9XG5cblx0Ly8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuXHRmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcblx0XHRpZiAoc25hbWUgIT09IHNwYWNlKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKTtcblx0XHR9XG5cblx0XHQvLyBjYXAgdmFsdWVzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlLCBhcmdzKSB7XG5cdHZhciB2YWxzID0gYXJnc1swXTtcblxuXHRpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmdiKClcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuXHR9XG5cblx0Ly8gY29sb3IucmdiKDEwLCAxMCwgMTApXG5cdGlmICh0eXBlb2YgdmFscyA9PT0gJ251bWJlcicpIHtcblx0XHR2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cdH1cblxuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbiAoc3BhY2UsIGluZGV4LCB2YWwpIHtcblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmVkKClcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcblx0fSBlbHNlIGlmICh2YWwgPT09IHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0pIHtcblx0XHQvLyBjb2xvci5yZWQoY29sb3IucmVkKCkpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBjb2xvci5yZWQoMTAwKVxuXHR0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSgxMTUpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDN9LFxuXHRoc2w6IHtjaGFubmVsczogM30sXG5cdGhzdjoge2NoYW5uZWxzOiAzfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDN9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDR9LFxuXHR4eXo6IHtjaGFubmVsczogM30sXG5cdGxhYjoge2NoYW5uZWxzOiAzfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDN9LFxuXHRoZXg6IHtjaGFubmVsczogMX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDN9LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgcHJvcGVydHlcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIHY7XG5cblx0aWYgKG1heCA9PT0gMCkge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSAoZGVsdGEgLyBtYXggKiAxMDAwKSAvIDEwO1xuXHR9XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHR2ID0gKChtYXggLyAyNTUpICogMTAwMCkgLyAxMDtcblxuXHRyZXR1cm4gW2gsIHMsIHZdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG4gKiAqL1xuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdHJldHVybiAoXG5cdFx0TWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzFdIC0geVsxXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMl0gLSB5WzJdLCAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0dmFyIGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0dmFyIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKHZhciBrZXl3b3JkIGluIGNzc0tleXdvcmRzKSB7XG5cdFx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleXdvcmQpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdFx0dmFyIGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQobWF0Y2hbMF0sIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRhbGljZWJsdWU6IFsyNDAsIDI0OCwgMjU1XSxcblx0YW50aXF1ZXdoaXRlOiBbMjUwLCAyMzUsIDIxNV0sXG5cdGFxdWE6IFswLCAyNTUsIDI1NV0sXG5cdGFxdWFtYXJpbmU6IFsxMjcsIDI1NSwgMjEyXSxcblx0YXp1cmU6IFsyNDAsIDI1NSwgMjU1XSxcblx0YmVpZ2U6IFsyNDUsIDI0NSwgMjIwXSxcblx0YmlzcXVlOiBbMjU1LCAyMjgsIDE5Nl0sXG5cdGJsYWNrOiBbMCwgMCwgMF0sXG5cdGJsYW5jaGVkYWxtb25kOiBbMjU1LCAyMzUsIDIwNV0sXG5cdGJsdWU6IFswLCAwLCAyNTVdLFxuXHRibHVldmlvbGV0OiBbMTM4LCA0MywgMjI2XSxcblx0YnJvd246IFsxNjUsIDQyLCA0Ml0sXG5cdGJ1cmx5d29vZDogWzIyMiwgMTg0LCAxMzVdLFxuXHRjYWRldGJsdWU6IFs5NSwgMTU4LCAxNjBdLFxuXHRjaGFydHJldXNlOiBbMTI3LCAyNTUsIDBdLFxuXHRjaG9jb2xhdGU6IFsyMTAsIDEwNSwgMzBdLFxuXHRjb3JhbDogWzI1NSwgMTI3LCA4MF0sXG5cdGNvcm5mbG93ZXJibHVlOiBbMTAwLCAxNDksIDIzN10sXG5cdGNvcm5zaWxrOiBbMjU1LCAyNDgsIDIyMF0sXG5cdGNyaW1zb246IFsyMjAsIDIwLCA2MF0sXG5cdGN5YW46IFswLCAyNTUsIDI1NV0sXG5cdGRhcmtibHVlOiBbMCwgMCwgMTM5XSxcblx0ZGFya2N5YW46IFswLCAxMzksIDEzOV0sXG5cdGRhcmtnb2xkZW5yb2Q6IFsxODQsIDEzNCwgMTFdLFxuXHRkYXJrZ3JheTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJrZ3JlZW46IFswLCAxMDAsIDBdLFxuXHRkYXJrZ3JleTogWzE2OSwgMTY5LCAxNjldLFxuXHRkYXJra2hha2k6IFsxODksIDE4MywgMTA3XSxcblx0ZGFya21hZ2VudGE6IFsxMzksIDAsIDEzOV0sXG5cdGRhcmtvbGl2ZWdyZWVuOiBbODUsIDEwNywgNDddLFxuXHRkYXJrb3JhbmdlOiBbMjU1LCAxNDAsIDBdLFxuXHRkYXJrb3JjaGlkOiBbMTUzLCA1MCwgMjA0XSxcblx0ZGFya3JlZDogWzEzOSwgMCwgMF0sXG5cdGRhcmtzYWxtb246IFsyMzMsIDE1MCwgMTIyXSxcblx0ZGFya3NlYWdyZWVuOiBbMTQzLCAxODgsIDE0M10sXG5cdGRhcmtzbGF0ZWJsdWU6IFs3MiwgNjEsIDEzOV0sXG5cdGRhcmtzbGF0ZWdyYXk6IFs0NywgNzksIDc5XSxcblx0ZGFya3NsYXRlZ3JleTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrdHVycXVvaXNlOiBbMCwgMjA2LCAyMDldLFxuXHRkYXJrdmlvbGV0OiBbMTQ4LCAwLCAyMTFdLFxuXHRkZWVwcGluazogWzI1NSwgMjAsIDE0N10sXG5cdGRlZXBza3libHVlOiBbMCwgMTkxLCAyNTVdLFxuXHRkaW1ncmF5OiBbMTA1LCAxMDUsIDEwNV0sXG5cdGRpbWdyZXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZG9kZ2VyYmx1ZTogWzMwLCAxNDQsIDI1NV0sXG5cdGZpcmVicmljazogWzE3OCwgMzQsIDM0XSxcblx0ZmxvcmFsd2hpdGU6IFsyNTUsIDI1MCwgMjQwXSxcblx0Zm9yZXN0Z3JlZW46IFszNCwgMTM5LCAzNF0sXG5cdGZ1Y2hzaWE6IFsyNTUsIDAsIDI1NV0sXG5cdGdhaW5zYm9ybzogWzIyMCwgMjIwLCAyMjBdLFxuXHRnaG9zdHdoaXRlOiBbMjQ4LCAyNDgsIDI1NV0sXG5cdGdvbGQ6IFsyNTUsIDIxNSwgMF0sXG5cdGdvbGRlbnJvZDogWzIxOCwgMTY1LCAzMl0sXG5cdGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0Z3JlZW46IFswLCAxMjgsIDBdLFxuXHRncmVlbnllbGxvdzogWzE3MywgMjU1LCA0N10sXG5cdGdyZXk6IFsxMjgsIDEyOCwgMTI4XSxcblx0aG9uZXlkZXc6IFsyNDAsIDI1NSwgMjQwXSxcblx0aG90cGluazogWzI1NSwgMTA1LCAxODBdLFxuXHRpbmRpYW5yZWQ6IFsyMDUsIDkyLCA5Ml0sXG5cdGluZGlnbzogWzc1LCAwLCAxMzBdLFxuXHRpdm9yeTogWzI1NSwgMjU1LCAyNDBdLFxuXHRraGFraTogWzI0MCwgMjMwLCAxNDBdLFxuXHRsYXZlbmRlcjogWzIzMCwgMjMwLCAyNTBdLFxuXHRsYXZlbmRlcmJsdXNoOiBbMjU1LCAyNDAsIDI0NV0sXG5cdGxhd25ncmVlbjogWzEyNCwgMjUyLCAwXSxcblx0bGVtb25jaGlmZm9uOiBbMjU1LCAyNTAsIDIwNV0sXG5cdGxpZ2h0Ymx1ZTogWzE3MywgMjE2LCAyMzBdLFxuXHRsaWdodGNvcmFsOiBbMjQwLCAxMjgsIDEyOF0sXG5cdGxpZ2h0Y3lhbjogWzIyNCwgMjU1LCAyNTVdLFxuXHRsaWdodGdvbGRlbnJvZHllbGxvdzogWzI1MCwgMjUwLCAyMTBdLFxuXHRsaWdodGdyYXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRncmVlbjogWzE0NCwgMjM4LCAxNDRdLFxuXHRsaWdodGdyZXk6IFsyMTEsIDIxMSwgMjExXSxcblx0bGlnaHRwaW5rOiBbMjU1LCAxODIsIDE5M10sXG5cdGxpZ2h0c2FsbW9uOiBbMjU1LCAxNjAsIDEyMl0sXG5cdGxpZ2h0c2VhZ3JlZW46IFszMiwgMTc4LCAxNzBdLFxuXHRsaWdodHNreWJsdWU6IFsxMzUsIDIwNiwgMjUwXSxcblx0bGlnaHRzbGF0ZWdyYXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzbGF0ZWdyZXk6IFsxMTksIDEzNiwgMTUzXSxcblx0bGlnaHRzdGVlbGJsdWU6IFsxNzYsIDE5NiwgMjIyXSxcblx0bGlnaHR5ZWxsb3c6IFsyNTUsIDI1NSwgMjI0XSxcblx0bGltZTogWzAsIDI1NSwgMF0sXG5cdGxpbWVncmVlbjogWzUwLCAyMDUsIDUwXSxcblx0bGluZW46IFsyNTAsIDI0MCwgMjMwXSxcblx0bWFnZW50YTogWzI1NSwgMCwgMjU1XSxcblx0bWFyb29uOiBbMTI4LCAwLCAwXSxcblx0bWVkaXVtYXF1YW1hcmluZTogWzEwMiwgMjA1LCAxNzBdLFxuXHRtZWRpdW1ibHVlOiBbMCwgMCwgMjA1XSxcblx0bWVkaXVtb3JjaGlkOiBbMTg2LCA4NSwgMjExXSxcblx0bWVkaXVtcHVycGxlOiBbMTQ3LCAxMTIsIDIxOV0sXG5cdG1lZGl1bXNlYWdyZWVuOiBbNjAsIDE3OSwgMTEzXSxcblx0bWVkaXVtc2xhdGVibHVlOiBbMTIzLCAxMDQsIDIzOF0sXG5cdG1lZGl1bXNwcmluZ2dyZWVuOiBbMCwgMjUwLCAxNTRdLFxuXHRtZWRpdW10dXJxdW9pc2U6IFs3MiwgMjA5LCAyMDRdLFxuXHRtZWRpdW12aW9sZXRyZWQ6IFsxOTksIDIxLCAxMzNdLFxuXHRtaWRuaWdodGJsdWU6IFsyNSwgMjUsIDExMl0sXG5cdG1pbnRjcmVhbTogWzI0NSwgMjU1LCAyNTBdLFxuXHRtaXN0eXJvc2U6IFsyNTUsIDIyOCwgMjI1XSxcblx0bW9jY2FzaW46IFsyNTUsIDIyOCwgMTgxXSxcblx0bmF2YWpvd2hpdGU6IFsyNTUsIDIyMiwgMTczXSxcblx0bmF2eTogWzAsIDAsIDEyOF0sXG5cdG9sZGxhY2U6IFsyNTMsIDI0NSwgMjMwXSxcblx0b2xpdmU6IFsxMjgsIDEyOCwgMF0sXG5cdG9saXZlZHJhYjogWzEwNywgMTQyLCAzNV0sXG5cdG9yYW5nZTogWzI1NSwgMTY1LCAwXSxcblx0b3JhbmdlcmVkOiBbMjU1LCA2OSwgMF0sXG5cdG9yY2hpZDogWzIxOCwgMTEyLCAyMTRdLFxuXHRwYWxlZ29sZGVucm9kOiBbMjM4LCAyMzIsIDE3MF0sXG5cdHBhbGVncmVlbjogWzE1MiwgMjUxLCAxNTJdLFxuXHRwYWxldHVycXVvaXNlOiBbMTc1LCAyMzgsIDIzOF0sXG5cdHBhbGV2aW9sZXRyZWQ6IFsyMTksIDExMiwgMTQ3XSxcblx0cGFwYXlhd2hpcDogWzI1NSwgMjM5LCAyMTNdLFxuXHRwZWFjaHB1ZmY6IFsyNTUsIDIxOCwgMTg1XSxcblx0cGVydTogWzIwNSwgMTMzLCA2M10sXG5cdHBpbms6IFsyNTUsIDE5MiwgMjAzXSxcblx0cGx1bTogWzIyMSwgMTYwLCAyMjFdLFxuXHRwb3dkZXJibHVlOiBbMTc2LCAyMjQsIDIzMF0sXG5cdHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcblx0cmViZWNjYXB1cnBsZTogWzEwMiwgNTEsIDE1M10sXG5cdHJlZDogWzI1NSwgMCwgMF0sXG5cdHJvc3licm93bjogWzE4OCwgMTQzLCAxNDNdLFxuXHRyb3lhbGJsdWU6IFs2NSwgMTA1LCAyMjVdLFxuXHRzYWRkbGVicm93bjogWzEzOSwgNjksIDE5XSxcblx0c2FsbW9uOiBbMjUwLCAxMjgsIDExNF0sXG5cdHNhbmR5YnJvd246IFsyNDQsIDE2NCwgOTZdLFxuXHRzZWFncmVlbjogWzQ2LCAxMzksIDg3XSxcblx0c2Vhc2hlbGw6IFsyNTUsIDI0NSwgMjM4XSxcblx0c2llbm5hOiBbMTYwLCA4MiwgNDVdLFxuXHRzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcblx0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyMzVdLFxuXHRzbGF0ZWJsdWU6IFsxMDYsIDkwLCAyMDVdLFxuXHRzbGF0ZWdyYXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c2xhdGVncmV5OiBbMTEyLCAxMjgsIDE0NF0sXG5cdHNub3c6IFsyNTUsIDI1MCwgMjUwXSxcblx0c3ByaW5nZ3JlZW46IFswLCAyNTUsIDEyN10sXG5cdHN0ZWVsYmx1ZTogWzcwLCAxMzAsIDE4MF0sXG5cdHRhbjogWzIxMCwgMTgwLCAxNDBdLFxuXHR0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuXHR0aGlzdGxlOiBbMjE2LCAxOTEsIDIxNl0sXG5cdHRvbWF0bzogWzI1NSwgOTksIDcxXSxcblx0dHVycXVvaXNlOiBbNjQsIDIyNCwgMjA4XSxcblx0dmlvbGV0OiBbMjM4LCAxMzAsIDIzOF0sXG5cdHdoZWF0OiBbMjQ1LCAyMjIsIDE3OV0sXG5cdHdoaXRlOiBbMjU1LCAyNTUsIDI1NV0sXG5cdHdoaXRlc21va2U6IFsyNDUsIDI0NSwgMjQ1XSxcblx0eWVsbG93OiBbMjU1LCAyNTUsIDBdLFxuXHR5ZWxsb3dncmVlbjogWzE1NCwgMjA1LCA1MF1cbn07XG5cbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoMTE0KTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoMTE3KTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgxMTQpO1xuXG4vKlxuXHR0aGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuLy8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0dmFyIGdyYXBoID0ge307XG5cblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0dmFyIHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIHVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdHZhciBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0dmFyIGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAodmFyIGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdHZhciBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHR2YXIgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHR2YXIgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdHZhciBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdHZhciBjb252ZXJzaW9uID0ge307XG5cblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdHZhciBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIG5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIvLyByYW5kb21Db2xvciBieSBEYXZpZCBNZXJmaWVsZCB1bmRlciB0aGUgQ0MwIGxpY2Vuc2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZG1lcmZpZWxkL3JhbmRvbUNvbG9yL1xuXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAvLyBTdXBwb3J0IEFNRFxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcblxuICAvLyBTdXBwb3J0IENvbW1vbkpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuXG4gICAgLy8gU3VwcG9ydCBOb2RlSlMgJiBDb21wb25lbnQsIHdoaWNoIGFsbG93IG1vZHVsZS5leHBvcnRzIHRvIGJlIGEgZnVuY3Rpb25cbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IENvbW1vbkpTIDEuMS4xIHNwZWNcbiAgICBleHBvcnRzLnJhbmRvbUNvbG9yID0gcmFuZG9tQ29sb3I7XG5cbiAgLy8gU3VwcG9ydCB2YW5pbGxhIHNjcmlwdCBsb2FkaW5nXG4gIH0gZWxzZSB7XG4gICAgcm9vdC5yYW5kb21Db2xvciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gIC8vIFNlZWQgdG8gZ2V0IHJlcGVhdGFibGUgY29sb3JzXG4gIHZhciBzZWVkID0gbnVsbDtcblxuICAvLyBTaGFyZWQgY29sb3IgZGljdGlvbmFyeVxuICB2YXIgY29sb3JEaWN0aW9uYXJ5ID0ge307XG5cbiAgLy8gUG9wdWxhdGUgdGhlIGNvbG9yIGRpY3Rpb25hcnlcbiAgbG9hZENvbG9yQm91bmRzKCk7XG5cbiAgdmFyIHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzZWVkIGFuZCBlbnN1cmUgaXQncyBhblxuICAgIC8vIGludGVnZXIuIE90aGVyd2lzZSwgcmVzZXQgdGhlIHNlZWQgdmFsdWUuXG4gICAgaWYgKG9wdGlvbnMuc2VlZCAmJiBvcHRpb25zLnNlZWQgPT09IHBhcnNlSW50KG9wdGlvbnMuc2VlZCwgMTApKSB7XG4gICAgICBzZWVkID0gb3B0aW9ucy5zZWVkO1xuXG4gICAgLy8gQSBzdHJpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnNlZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWVkID0gc3RyaW5nVG9JbnRlZ2VyKG9wdGlvbnMuc2VlZCk7XG5cbiAgICAvLyBTb21ldGhpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWQgYnV0IGl0IHdhc24ndCBhbiBpbnRlZ2VyIG9yIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZWVkICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5zZWVkICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc2VlZCB2YWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgb3Igc3RyaW5nJyk7XG5cbiAgICAvLyBObyBzZWVkLCByZXNldCB0aGUgdmFsdWUgb3V0c2lkZS5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIEgsUyxCO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBnZW5lcmF0ZSBtdWx0aXBsZSBjb2xvcnNcbiAgICBpZiAob3B0aW9ucy5jb3VudCAhPT0gbnVsbCAmJiBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgdmFyIHRvdGFsQ29sb3JzID0gb3B0aW9ucy5jb3VudCxcbiAgICAgICAgICBjb2xvcnMgPSBbXTtcblxuICAgICAgb3B0aW9ucy5jb3VudCA9IG51bGw7XG5cbiAgICAgIHdoaWxlICh0b3RhbENvbG9ycyA+IGNvbG9ycy5sZW5ndGgpIHtcblxuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnZW5lcmF0aW5nIG11bHRpcGxlIGNvbG9ycyxcbiAgICAgICAgLy8gaW5jcmVtZW1lbnQgdGhlIHNlZWQuIE90aGVyd2lzZSB3ZSdkIGp1c3RcbiAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIHNhbWUgY29sb3IgZWFjaCB0aW1lLi4uXG4gICAgICAgIGlmIChzZWVkICYmIG9wdGlvbnMuc2VlZCkgb3B0aW9ucy5zZWVkICs9IDE7XG5cbiAgICAgICAgY29sb3JzLnB1c2gocmFuZG9tQ29sb3Iob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmNvdW50ID0gdG90YWxDb2xvcnM7XG5cbiAgICAgIHJldHVybiBjb2xvcnM7XG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgcGljayBhIGh1ZSAoSClcbiAgICBIID0gcGlja0h1ZShvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gdXNlIEggdG8gZGV0ZXJtaW5lIHNhdHVyYXRpb24gKFMpXG4gICAgUyA9IHBpY2tTYXR1cmF0aW9uKEgsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgUyBhbmQgSCB0byBkZXRlcm1pbmUgYnJpZ2h0bmVzcyAoQikuXG4gICAgQiA9IHBpY2tCcmlnaHRuZXNzKEgsIFMsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB3ZSByZXR1cm4gdGhlIEhTQiBjb2xvciBpbiB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICByZXR1cm4gc2V0Rm9ybWF0KFtILFMsQl0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBpY2tIdWUgKG9wdGlvbnMpIHtcblxuICAgIHZhciBodWVSYW5nZSA9IGdldEh1ZVJhbmdlKG9wdGlvbnMuaHVlKSxcbiAgICAgICAgaHVlID0gcmFuZG9tV2l0aGluKGh1ZVJhbmdlKTtcblxuICAgIC8vIEluc3RlYWQgb2Ygc3RvcmluZyByZWQgYXMgdHdvIHNlcGVyYXRlIHJhbmdlcyxcbiAgICAvLyB3ZSBncm91cCB0aGVtLCB1c2luZyBuZWdhdGl2ZSBudW1iZXJzXG4gICAgaWYgKGh1ZSA8IDApIHtodWUgPSAzNjAgKyBodWU7fVxuXG4gICAgcmV0dXJuIGh1ZTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja1NhdHVyYXRpb24gKGh1ZSwgb3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnMubHVtaW5vc2l0eSA9PT0gJ3JhbmRvbScpIHtcbiAgICAgIHJldHVybiByYW5kb21XaXRoaW4oWzAsMTAwXSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaHVlID09PSAnbW9ub2Nocm9tZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBzYXR1cmF0aW9uUmFuZ2UgPSBnZXRTYXR1cmF0aW9uUmFuZ2UoaHVlKTtcblxuICAgIHZhciBzTWluID0gc2F0dXJhdGlvblJhbmdlWzBdLFxuICAgICAgICBzTWF4ID0gc2F0dXJhdGlvblJhbmdlWzFdO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnYnJpZ2h0JzpcbiAgICAgICAgc01pbiA9IDU1O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIHNNaW4gPSBzTWF4IC0gMTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIHNNYXggPSA1NTtcbiAgICAgICAgYnJlYWs7XG4gICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtzTWluLCBzTWF4XSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tCcmlnaHRuZXNzIChILCBTLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgYk1pbiA9IGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpLFxuICAgICAgICBiTWF4ID0gMTAwO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIGJNYXggPSBiTWluICsgMjA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIGJNaW4gPSAoYk1heCArIGJNaW4pLzI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyYW5kb20nOlxuICAgICAgICBiTWluID0gMDtcbiAgICAgICAgYk1heCA9IDEwMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbYk1pbiwgYk1heF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Rm9ybWF0IChoc3YsIG9wdGlvbnMpIHtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5mb3JtYXQpIHtcblxuICAgICAgY2FzZSAnaHN2QXJyYXknOlxuICAgICAgICByZXR1cm4gaHN2O1xuXG4gICAgICBjYXNlICdoc2xBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b0hTTChoc3YpO1xuXG4gICAgICBjYXNlICdoc2wnOlxuICAgICAgICB2YXIgaHNsID0gSFNWdG9IU0woaHN2KTtcbiAgICAgICAgcmV0dXJuICdoc2woJytoc2xbMF0rJywgJytoc2xbMV0rJyUsICcraHNsWzJdKyclKSc7XG5cbiAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICB2YXIgaHNsQ29sb3IgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbGEoJytoc2xDb2xvclswXSsnLCAnK2hzbENvbG9yWzFdKyclLCAnK2hzbENvbG9yWzJdKyclLCAnICsgTWF0aC5yYW5kb20oKSArICcpJztcblxuICAgICAgY2FzZSAncmdiQXJyYXknOlxuICAgICAgICByZXR1cm4gSFNWdG9SR0IoaHN2KTtcblxuICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCAnKSArICcpJztcblxuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIHZhciByZ2JDb2xvciA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgcmdiQ29sb3Iuam9pbignLCAnKSArICcsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gSFNWdG9IZXgoaHN2KTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpIHtcblxuICAgIHZhciBsb3dlckJvdW5kcyA9IGdldENvbG9ySW5mbyhIKS5sb3dlckJvdW5kcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG93ZXJCb3VuZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cbiAgICAgIHZhciBzMSA9IGxvd2VyQm91bmRzW2ldWzBdLFxuICAgICAgICAgIHYxID0gbG93ZXJCb3VuZHNbaV1bMV07XG5cbiAgICAgIHZhciBzMiA9IGxvd2VyQm91bmRzW2krMV1bMF0sXG4gICAgICAgICAgdjIgPSBsb3dlckJvdW5kc1tpKzFdWzFdO1xuXG4gICAgICBpZiAoUyA+PSBzMSAmJiBTIDw9IHMyKSB7XG5cbiAgICAgICAgIHZhciBtID0gKHYyIC0gdjEpLyhzMiAtIHMxKSxcbiAgICAgICAgICAgICBiID0gdjEgLSBtKnMxO1xuXG4gICAgICAgICByZXR1cm4gbSpTICsgYjtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SHVlUmFuZ2UgKGNvbG9ySW5wdXQpIHtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VJbnQoY29sb3JJbnB1dCkgPT09ICdudW1iZXInKSB7XG5cbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludChjb2xvcklucHV0KTtcblxuICAgICAgaWYgKG51bWJlciA8IDM2MCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvcklucHV0ID09PSAnc3RyaW5nJykge1xuXG4gICAgICBpZiAoY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvcklucHV0XTtcbiAgICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlKSB7cmV0dXJuIGNvbG9yLmh1ZVJhbmdlO31cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWzAsMzYwXTtcblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2F0dXJhdGlvblJhbmdlIChodWUpIHtcbiAgICByZXR1cm4gZ2V0Q29sb3JJbmZvKGh1ZSkuc2F0dXJhdGlvblJhbmdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29sb3JJbmZvIChodWUpIHtcblxuICAgIC8vIE1hcHMgcmVkIGNvbG9ycyB0byBtYWtlIHBpY2tpbmcgaHVlIGVhc2llclxuICAgIGlmIChodWUgPj0gMzM0ICYmIGh1ZSA8PSAzNjApIHtcbiAgICAgIGh1ZS09IDM2MDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBjb2xvck5hbWUgaW4gY29sb3JEaWN0aW9uYXJ5KSB7XG4gICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9yTmFtZV07XG4gICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlICYmXG4gICAgICAgICAgIGh1ZSA+PSBjb2xvci5odWVSYW5nZVswXSAmJlxuICAgICAgICAgICBodWUgPD0gY29sb3IuaHVlUmFuZ2VbMV0pIHtcbiAgICAgICAgICByZXR1cm4gY29sb3JEaWN0aW9uYXJ5W2NvbG9yTmFtZV07XG4gICAgICAgfVxuICAgIH0gcmV0dXJuICdDb2xvciBub3QgZm91bmQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tV2l0aGluIChyYW5nZSkge1xuICAgIGlmIChzZWVkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5nZVswXSArIE1hdGgucmFuZG9tKCkqKHJhbmdlWzFdICsgMSAtIHJhbmdlWzBdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vU2VlZGVkIHJhbmRvbSBhbGdvcml0aG0gZnJvbSBodHRwOi8vaW5kaWVnYW1yLmNvbS9nZW5lcmF0ZS1yZXBlYXRhYmxlLXJhbmRvbS1udW1iZXJzLWluLWpzL1xuICAgICAgdmFyIG1heCA9IHJhbmdlWzFdIHx8IDE7XG4gICAgICB2YXIgbWluID0gcmFuZ2VbMF0gfHwgMDtcbiAgICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICB2YXIgcm5kID0gc2VlZCAvIDIzMzI4MC4wO1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgcm5kICogKG1heCAtIG1pbikpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSGV4IChoc3Ype1xuXG4gICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gICAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gJyMnICsgY29tcG9uZW50VG9IZXgocmdiWzBdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsxXSkgKyBjb21wb25lbnRUb0hleChyZ2JbMl0pO1xuXG4gICAgcmV0dXJuIGhleDtcblxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lQ29sb3IgKG5hbWUsIGh1ZVJhbmdlLCBsb3dlckJvdW5kcykge1xuXG4gICAgdmFyIHNNaW4gPSBsb3dlckJvdW5kc1swXVswXSxcbiAgICAgICAgc01heCA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzBdLFxuXG4gICAgICAgIGJNaW4gPSBsb3dlckJvdW5kc1tsb3dlckJvdW5kcy5sZW5ndGggLSAxXVsxXSxcbiAgICAgICAgYk1heCA9IGxvd2VyQm91bmRzWzBdWzFdO1xuXG4gICAgY29sb3JEaWN0aW9uYXJ5W25hbWVdID0ge1xuICAgICAgaHVlUmFuZ2U6IGh1ZVJhbmdlLFxuICAgICAgbG93ZXJCb3VuZHM6IGxvd2VyQm91bmRzLFxuICAgICAgc2F0dXJhdGlvblJhbmdlOiBbc01pbiwgc01heF0sXG4gICAgICBicmlnaHRuZXNzUmFuZ2U6IFtiTWluLCBiTWF4XVxuICAgIH07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRDb2xvckJvdW5kcyAoKSB7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdtb25vY2hyb21lJyxcbiAgICAgIG51bGwsXG4gICAgICBbWzAsMF0sWzEwMCwwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncmVkJyxcbiAgICAgIFstMjYsMThdLFxuICAgICAgW1syMCwxMDBdLFszMCw5Ml0sWzQwLDg5XSxbNTAsODVdLFs2MCw3OF0sWzcwLDcwXSxbODAsNjBdLFs5MCw1NV0sWzEwMCw1MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ29yYW5nZScsXG4gICAgICBbMTksNDZdLFxuICAgICAgW1syMCwxMDBdLFszMCw5M10sWzQwLDg4XSxbNTAsODZdLFs2MCw4NV0sWzcwLDcwXSxbMTAwLDcwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAneWVsbG93JyxcbiAgICAgIFs0Nyw2Ml0sXG4gICAgICBbWzI1LDEwMF0sWzQwLDk0XSxbNTAsODldLFs2MCw4Nl0sWzcwLDg0XSxbODAsODJdLFs5MCw4MF0sWzEwMCw3NV1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2dyZWVuJyxcbiAgICAgIFs2MywxNzhdLFxuICAgICAgW1szMCwxMDBdLFs0MCw5MF0sWzUwLDg1XSxbNjAsODFdLFs3MCw3NF0sWzgwLDY0XSxbOTAsNTBdLFsxMDAsNDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdibHVlJyxcbiAgICAgIFsxNzksIDI1N10sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg2XSxbNDAsODBdLFs1MCw3NF0sWzYwLDYwXSxbNzAsNTJdLFs4MCw0NF0sWzkwLDM5XSxbMTAwLDM1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncHVycGxlJyxcbiAgICAgIFsyNTgsIDI4Ml0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg3XSxbNDAsNzldLFs1MCw3MF0sWzYwLDY1XSxbNzAsNTldLFs4MCw1Ml0sWzkwLDQ1XSxbMTAwLDQyXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncGluaycsXG4gICAgICBbMjgzLCAzMzRdLFxuICAgICAgW1syMCwxMDBdLFszMCw5MF0sWzQwLDg2XSxbNjAsODRdLFs4MCw4MF0sWzkwLDc1XSxbMTAwLDczXV1cbiAgICApO1xuXG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b1JHQiAoaHN2KSB7XG5cbiAgICAvLyB0aGlzIGRvZXNuJ3Qgd29yayBmb3IgdGhlIHZhbHVlcyBvZiAwIGFuZCAzNjBcbiAgICAvLyBoZXJlJ3MgdGhlIGhhY2t5IGZpeFxuICAgIHZhciBoID0gaHN2WzBdO1xuICAgIGlmIChoID09PSAwKSB7aCA9IDE7fVxuICAgIGlmIChoID09PSAzNjApIHtoID0gMzU5O31cblxuICAgIC8vIFJlYmFzZSB0aGUgaCxzLHYgdmFsdWVzXG4gICAgaCA9IGgvMzYwO1xuICAgIHZhciBzID0gaHN2WzFdLzEwMCxcbiAgICAgICAgdiA9IGhzdlsyXS8xMDA7XG5cbiAgICB2YXIgaF9pID0gTWF0aC5mbG9vcihoKjYpLFxuICAgICAgZiA9IGggKiA2IC0gaF9pLFxuICAgICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgICAgcSA9IHYgKiAoMSAtIGYqcyksXG4gICAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSpzKSxcbiAgICAgIHIgPSAyNTYsXG4gICAgICBnID0gMjU2LFxuICAgICAgYiA9IDI1NjtcblxuICAgIHN3aXRjaChoX2kpIHtcbiAgICAgIGNhc2UgMDogciA9IHY7IGcgPSB0OyBiID0gcDsgIGJyZWFrO1xuICAgICAgY2FzZSAxOiByID0gcTsgZyA9IHY7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDI6IHIgPSBwOyBnID0gdjsgYiA9IHQ7ICBicmVhaztcbiAgICAgIGNhc2UgMzogciA9IHA7IGcgPSBxOyBiID0gdjsgIGJyZWFrO1xuICAgICAgY2FzZSA0OiByID0gdDsgZyA9IHA7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDU6IHIgPSB2OyBnID0gcDsgYiA9IHE7ICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW01hdGguZmxvb3IocioyNTUpLCBNYXRoLmZsb29yKGcqMjU1KSwgTWF0aC5mbG9vcihiKjI1NSldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b0hTTCAoaHN2KSB7XG4gICAgdmFyIGggPSBoc3ZbMF0sXG4gICAgICBzID0gaHN2WzFdLzEwMCxcbiAgICAgIHYgPSBoc3ZbMl0vMTAwLFxuICAgICAgayA9ICgyLXMpKnY7XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCxcbiAgICAgIE1hdGgucm91bmQocyp2IC8gKGs8MSA/IGsgOiAyLWspICogMTAwMDApIC8gMTAwLFxuICAgICAgay8yICogMTAwXG4gICAgXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ1RvSW50ZWdlciAoc3RyaW5nKSB7XG4gICAgdmFyIHRvdGFsID0gMFxuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b3RhbCA+PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgYnJlYWs7XG4gICAgICB0b3RhbCArPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuICAgIH1cbiAgICByZXR1cm4gdG90YWxcbiAgfVxuXG4gIHJldHVybiByYW5kb21Db2xvcjtcbn0pKTtcbiJdfQ==
