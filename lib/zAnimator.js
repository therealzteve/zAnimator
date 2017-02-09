(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path_magic = require(7);

var _path_magic2 = _interopRequireDefault(_path_magic);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pathMagic: _path_magic2.default
};


},{"7":7}],2:[function(require,module,exports){
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
    swingLine.bezierCurve.cpoint1.x = swingLine.length / 2 - coordinates.x;
    swingLine.bezierCurve.cpoint1.y = -coordinates.y;
    swingLine.bezierCurve.cpoint2.x = swingLine.length / 2 + coordinates.x;
    swingLine.bezierCurve.cpoint2.y = coordinates.y;
    swingLine.pathView.draw();
  };

  return swingLine;
};

var _path = require(66);

var _path2 = _interopRequireDefault(_path);

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(78);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _degrees_to_coordinates = require(75);

var _degrees_to_coordinates2 = _interopRequireDefault(_degrees_to_coordinates);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60,"66":66,"75":75,"78":78,"82":82,"87":87}],4:[function(require,module,exports){
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

var _path = require(66);

var _path2 = _interopRequireDefault(_path);

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(78);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60,"66":66,"78":78,"82":82,"87":87}],5:[function(require,module,exports){
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

var _path = require(66);

var _path2 = _interopRequireDefault(_path);

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(78);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60,"66":66,"78":78,"82":82,"87":87}],6:[function(require,module,exports){
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

var _path = require(66);

var _path2 = _interopRequireDefault(_path);

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(78);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60,"66":66,"78":78,"82":82,"87":87}],7:[function(require,module,exports){
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

var _loop = require(84);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(66);

var _path2 = _interopRequireDefault(_path);

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60,"66":66,"82":82,"84":84}],9:[function(require,module,exports){
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

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(66);

var _path2 = _interopRequireDefault(_path);

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60,"66":66,"82":82,"87":87}],10:[function(require,module,exports){
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


},{}],11:[function(require,module,exports){
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

var _abstract_component = require(10);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"82":82}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};


},{}],13:[function(require,module,exports){
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

var _abstract_component = require(10);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(14);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(72);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"14":14,"72":72,"82":82}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(74);

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


},{"74":74}],15:[function(require,module,exports){
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

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82}],16:[function(require,module,exports){
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

var _abstract_component = require(10);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"82":82}],17:[function(require,module,exports){
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


},{}],18:[function(require,module,exports){
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

var _abstract_component = require(10);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(14);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(72);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"14":14,"72":72,"82":82}],19:[function(require,module,exports){
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

var _abstract_component = require(10);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"82":82}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'squareShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var square = (0, _abstract_component2.default)();
      square.sideLength = options.squareShape.sidelength;
      square.color = options.color;

      square.draw = function () {
            square.view.graphics.clear();
            square.view.graphics.beginFill(square.color).drawRect(0, 0, square.sideLength * square.scale, square.sideLength * square.scale);
      };

      square.draw();
      return square;
};

var _abstract_component = require(10);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"10":10,"82":82}],21:[function(require,module,exports){
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

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(12);

var _container2 = _interopRequireDefault(_container);

var _square = require(20);

var _square2 = _interopRequireDefault(_square);

var _circle = require(11);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(19);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(17);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(16);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(13);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(15);

var _image2 = _interopRequireDefault(_image);

var _video = require(21);

var _video2 = _interopRequireDefault(_video);

var _path = require(18);

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


},{"11":11,"12":12,"13":13,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21}],23:[function(require,module,exports){
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

var _abstract_filter = require(71);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71}],24:[function(require,module,exports){
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

var _abstract_group = require(23);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"70":70,"82":82}],25:[function(require,module,exports){
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

var _abstract_group = require(23);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"70":70,"82":82}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(29);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(28);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(25);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(30);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(27);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(24);

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


},{"24":24,"25":25,"27":27,"28":28,"29":29,"30":30}],27:[function(require,module,exports){
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

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(23);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"70":70,"82":82}],28:[function(require,module,exports){
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

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(23);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"70":70,"82":82}],29:[function(require,module,exports){
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

var _abstract_group = require(23);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"70":70,"82":82}],30:[function(require,module,exports){
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

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(23);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"23":23,"70":70,"82":82}],31:[function(require,module,exports){
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

var _abstract_filter = require(71);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71,"82":82}],32:[function(require,module,exports){
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

var _abstract_filter = require(71);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _normalize = require(76);

var _normalize2 = _interopRequireDefault(_normalize);

var _distance = require(73);

var _distance2 = _interopRequireDefault(_distance);

var _to_vector = require(81);

var _to_vector2 = _interopRequireDefault(_to_vector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71,"73":73,"76":76,"81":81}],33:[function(require,module,exports){
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

var _abstractMover = require(32);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _easing = require(86);

var _easing2 = _interopRequireDefault(_easing);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"82":82,"86":86}],34:[function(require,module,exports){
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

var _abstractMover = require(32);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"32":32,"82":82}],35:[function(require,module,exports){
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

var _abstract_filter = require(71);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71,"82":82,"87":87}],36:[function(require,module,exports){
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

var _abstract_filter = require(71);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71,"82":82}],37:[function(require,module,exports){
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

var _abstract_filter = require(71);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"71":71,"82":82}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(74);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(82);

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


},{"74":74,"82":82}],39:[function(require,module,exports){
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

var _bezierJs = require(88);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"88":88}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(81);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(73);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(82);

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


},{"73":73,"81":81,"82":82}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(72);

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


},{"72":72}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(38);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(40);

var _line2 = _interopRequireDefault(_line);

var _path = require(41);

var _path2 = _interopRequireDefault(_path);

var _bezier_curve = require(39);

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


},{"38":38,"39":39,"40":40,"41":41}],43:[function(require,module,exports){
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

var _path = require(80);

var _path2 = _interopRequireDefault(_path);

var _arc = require(77);

var _arc2 = _interopRequireDefault(_arc);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"77":77,"80":80,"82":82}],44:[function(require,module,exports){
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

var _path = require(80);

var _path2 = _interopRequireDefault(_path);

var _line = require(79);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"79":79,"80":80,"82":82}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(44);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(46);

var _square2 = _interopRequireDefault(_square);

var _circle = require(43);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"43":43,"44":44,"46":46}],46:[function(require,module,exports){
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

var _path = require(80);

var _path2 = _interopRequireDefault(_path);

var _line = require(79);

var _line2 = _interopRequireDefault(_line);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"79":79,"80":80,"82":82}],47:[function(require,module,exports){
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


},{}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(22);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(36);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(35);

var _fader2 = _interopRequireDefault(_fader);

var _linear = require(33);

var _linear2 = _interopRequireDefault(_linear);

var _linear_shake = require(34);

var _linear_shake2 = _interopRequireDefault(_linear_shake);

var _group = require(26);

var _group2 = _interopRequireDefault(_group);

var _linear_rotator = require(37);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _random_color_changer = require(50);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(49);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(51);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _randomColor = require(105);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(47);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(45);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(42);

var _paths2 = _interopRequireDefault(_paths);

var _pathMover = require(31);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _compositions = require(1);

var _compositions2 = _interopRequireDefault(_compositions);

var _proxies = require(56);

var _proxies2 = _interopRequireDefault(_proxies);

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


},{"1":1,"105":105,"22":22,"26":26,"31":31,"33":33,"34":34,"35":35,"36":36,"37":37,"42":42,"45":45,"47":47,"49":49,"50":50,"51":51,"56":56}],49:[function(require,module,exports){
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

var _color = require(96);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(87);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(83);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"83":83,"87":87,"96":96}],50:[function(require,module,exports){
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

var _loop = require(84);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(105);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(83);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"105":105,"82":82,"83":83,"84":84}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {

  (0, _check_parameter2.default)(options, 'subject', true);
  (0, _check_parameter2.default)(options, 'speed', true);
  (0, _check_parameter2.default)(options, 'limit', true);

  var linearPulsar = {};
  linearPulsar.subject = options.subject;
  linearPulsar.speed = options.speed;
  linearPulsar.limit = options.limit;
  linearPulsar.pulsar = (0, _transition_loop.pulsarTransition)(linearPulsar.speed);

  linearPulsar.start = function () {
    linearPulsar.pulsar.start(linearPulsar.handle);
  };

  linearPulsar.stop = function () {
    linearPulsar.pulsar.stop();
  };

  linearPulsar.handle = function (current) {
    (0, _set_prop2.default)(linearPulsar.subject, 'scale', 1 + current * linearPulsar.limit);
    linearPulsar.subject.draw();
  };

  return linearPulsar;
};

var _transition_loop = require(87);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _set_prop = require(83);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"82":82,"83":83,"87":87}],52:[function(require,module,exports){
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

var _set_prop = require(83);

var _set_prop2 = _interopRequireDefault(_set_prop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"83":83}],53:[function(require,module,exports){
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

var _abstract_proxy = require(52);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"52":52}],54:[function(require,module,exports){
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

var _abstract_proxy = require(52);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"52":52,"82":82}],55:[function(require,module,exports){
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

var _interval_timer = require(85);

var _interval_timer2 = _interopRequireDefault(_interval_timer);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

var _increment_proxy = require(54);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _abstract_proxy = require(52);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"52":52,"54":54,"82":82,"85":85}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default_proxy = require(53);

var _default_proxy2 = _interopRequireDefault(_default_proxy);

var _increment_proxy = require(54);

var _increment_proxy2 = _interopRequireDefault(_increment_proxy);

var _interval_proxy = require(55);

var _interval_proxy2 = _interopRequireDefault(_interval_proxy);

var _random_proxy = require(57);

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


},{"53":53,"54":54,"55":55,"57":57}],57:[function(require,module,exports){
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

var _abstract_proxy = require(52);

var _abstract_proxy2 = _interopRequireDefault(_abstract_proxy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"52":52}],58:[function(require,module,exports){
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

},{}],59:[function(require,module,exports){
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

var _abstract_component = require(58);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"58":58,"82":82}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};

},{}],61:[function(require,module,exports){
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

var _abstract_component = require(58);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(62);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(72);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"58":58,"62":62,"72":72,"82":82}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(74);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

},{"74":74}],63:[function(require,module,exports){
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

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"82":82}],64:[function(require,module,exports){
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

var _abstract_component = require(58);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"58":58,"82":82}],65:[function(require,module,exports){
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

},{}],66:[function(require,module,exports){
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

var _abstract_component = require(58);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(62);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(72);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"58":58,"62":62,"72":72,"82":82}],67:[function(require,module,exports){
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

var _abstract_component = require(58);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"58":58,"82":82}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (options) {

      (0, _check_parameter2.default)(options, 'squareShape', true);
      (0, _check_parameter2.default)(options, 'color', false, '#000');

      var square = (0, _abstract_component2.default)();
      square.sideLength = options.squareShape.sidelength;
      square.color = options.color;

      square.draw = function () {
            square.view.graphics.clear();
            square.view.graphics.beginFill(square.color).drawRect(0, 0, square.sideLength * square.scale, square.sideLength * square.scale);
      };

      square.draw();
      return square;
};

var _abstract_component = require(58);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"58":58,"82":82}],69:[function(require,module,exports){
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

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"82":82}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(60);

var _container2 = _interopRequireDefault(_container);

var _square = require(68);

var _square2 = _interopRequireDefault(_square);

var _circle = require(59);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(67);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(65);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(64);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(61);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _image = require(63);

var _image2 = _interopRequireDefault(_image);

var _video = require(69);

var _video2 = _interopRequireDefault(_video);

var _path = require(66);

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

},{"59":59,"60":60,"61":61,"63":63,"64":64,"65":65,"66":66,"67":67,"68":68,"69":69}],71:[function(require,module,exports){
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

var _loop = require(84);

var _loop2 = _interopRequireDefault(_loop);

var _factory = require(70);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"70":70,"84":84}],72:[function(require,module,exports){
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

},{}],73:[function(require,module,exports){
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

},{}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};

},{}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle, length) {
  var rad = (0, _angle_to_radians2.default)(angle);
  return { x: Math.cos(rad) * length, y: Math.sin(rad) * length };
};

var _angle_to_radians = require(74);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"74":74}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(74);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

},{"74":74,"82":82}],78:[function(require,module,exports){
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

var _bezierJs = require(88);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

var _check_parameter = require(82);

var _check_parameter2 = _interopRequireDefault(_check_parameter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"82":82,"88":88}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(81);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(73);

var _distance2 = _interopRequireDefault(_distance);

var _check_parameter = require(82);

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

},{"73":73,"81":81,"82":82}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(72);

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

},{"72":72}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};

},{}],82:[function(require,module,exports){
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

},{}],83:[function(require,module,exports){
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

},{}],84:[function(require,module,exports){
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

},{}],85:[function(require,module,exports){
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

var _loop = require(84);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"84":84}],86:[function(require,module,exports){
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

var _easingUtils = require(104);

},{"104":104}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(84);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionLoop(time, steepness, current) {
  var pulsar = {};
  pulsar.time = time;
  pulsar.steepness = typeof steepness !== 'undefined' ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increase = true;
  pulsar.currentMseconds = current ? current * time : 0;

  pulsar.start = function (callback) {
    pulsar.callback = callback;
    _loop2.default.addAnimation(pulsar.handle);
  };

  pulsar.stop = function () {
    _loop2.default.removeAnimation(pulsar.handle);
  };

  pulsar.handle = function (event) {
    pulsar.currentMseconds = pulsar.currentMseconds + event.delta;

    var limitTimeFactor = Math.floor(pulsar.currentMseconds / pulsar.time);

    pulsar.currentMseconds = pulsar.currentMseconds - pulsar.time * limitTimeFactor;
    var lastCurrent = pulsar.current;
    pulsar.current = pulsar.calculateCurrent(pulsar.currentMseconds);
    pulsar.increase = lastCurrent < pulsar.current;
    if (pulsar.callback) {
      pulsar.callback(pulsar.current, event);
    }
  };

  pulsar.calculateCurrent = function (ms) {
    var relativeCurrent = ms / pulsar.time;
    if (relativeCurrent <= pulsar.steepness) {
      return relativeCurrent / pulsar.steepness;
    } else {
      return 1 - (relativeCurrent - pulsar.steepness) / (1 - pulsar.steepness);
    }
  };

  pulsar.getRelativeCurrent = function (factor) {

    // First prepare the value which is passed to the calculateCurrent function:
    var factorInMs = factor * pulsar.time;
    var msToCheck = factorInMs + pulsar.currentMseconds;

    if (msToCheck < 0) {
      // When msToCheck is negative, we subtract the last part smaller
      // than the pulsar time from the pulsar time (with modulo)
      // e.g.: msToCheck = -33, time = 10
      // --> new msToCheck is 10 - 3 = 7
      msToCheck = pulsar.time - Math.abs(msToCheck) / pulsar.time % 1 * pulsar.time;
    } else {
      // If msToCheck is positive, we only have to check values greater than time
      var limitTimeFactor = Math.floor(msToCheck / pulsar.time);
      msToCheck = msToCheck - pulsar.time * limitTimeFactor;
    }

    return pulsar.calculateCurrent(msToCheck);
  };

  return pulsar;
}

function risingTransition(time, current) {
  return transitionLoop(time, 1, current);
}

function pulsarTransition(time, current) {
  return transitionLoop(time, 0, current);
}

exports.default = transitionLoop;

},{"84":84}],88:[function(require,module,exports){
module.exports = require(89);

},{"89":89}],89:[function(require,module,exports){
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
  var utils = require(91);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(90);

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

},{"90":90,"91":91}],90:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(91);

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

},{"91":91}],91:[function(require,module,exports){
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
      var Bezier = require(89);
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

},{"89":89}],92:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(93)
var ieee754 = require(94)
var isArray = require(95)

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

},{"93":93,"94":94,"95":95}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
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

},{}],95:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],96:[function(require,module,exports){
/* MIT license */
var clone = require(97);
var convert = require(100);
var string = require(102);

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

},{"100":100,"102":102,"97":97}],97:[function(require,module,exports){
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

}).call(this,require(92).Buffer)

},{"92":92}],98:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(99);

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

},{"99":99}],99:[function(require,module,exports){
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


},{}],100:[function(require,module,exports){
var conversions = require(98);
var route = require(101);

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

},{"101":101,"98":98}],101:[function(require,module,exports){
var conversions = require(98);

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


},{"98":98}],102:[function(require,module,exports){
/* MIT license */
var colorNames = require(103);

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

},{"103":103}],103:[function(require,module,exports){
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
},{}],104:[function(require,module,exports){
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

},{}],105:[function(require,module,exports){
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

},{}]},{},[48])(48)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxiZXppZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3BvaW50X3NwaW5uZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcY3VydmUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcc3dpbmdpbmdfbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFx3YXZlLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxwYXRoX21hZ2ljLmpzIiwiLnRtcFxcc2NyaXB0c1xcY29tcG9zaXRpb25zXFxwYXRoX21hZ2ljXFxyYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcdHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGFic3RyYWN0X2NvbXBvbmVudC5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNpcmNsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGN1c3RvbV9vYmplY3QuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxoZWxwZXJcXHBhdGhfZHJhd2VyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcaW1hZ2UuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxsaW5lLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbWFpbl9jb250YWluZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxwYXRoLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xccmVjdGFuZ2xlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcc3F1YXJlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcdmlkZW8uanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGFic3RyYWN0X2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGNlbnRlcl9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxjaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmFuZG9tX2NpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyYW5kb21fcmVjdGFuZ2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJlY3RhbmdsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxzcGlyYWxfY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBhdGhcXHBhdGgtbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGFic3RyYWN0LW1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBvaW50MnBvaW50XFxsaW5lYXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhcl9zaGFrZS5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG9wYWNpdHlcXGZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmxhc2hlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXHJvdGF0b3JcXGxpbmVhcl9yb3RhdG9yLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxhcmMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aHMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxjaXJjbGUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxyZWN0YW5nbGUuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxzaGFwZXMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcc2hhcGVzXFxzcXVhcmUuanMiLCIudG1wXFxzY3JpcHRzXFxsb29wLmpzIiwiLnRtcFxcc2NyaXB0c1xcbWFpbi5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXGNvbG9yX2ZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxccmFuZG9tX2NvbG9yX2NoYW5nZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcYWJzdHJhY3RfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxkZWZhdWx0X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW5jcmVtZW50X3Byb3h5LmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xcaW50ZXJ2YWxfcHJveHkuanMiLCIudG1wXFxzY3JpcHRzXFxwcm94aWVzXFxwcm94aWVzLmpzIiwiLnRtcFxcc2NyaXB0c1xccHJveGllc1xccmFuZG9tX3Byb3h5LmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9jb21wb25lbnQuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGNpcmNsZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcY29udGFpbmVyLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjdXN0b21fb2JqZWN0LmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxoZWxwZXJcXHBhdGhfZHJhd2VyLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxpbWFnZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbGluZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcbWFpbl9jb250YWluZXIuanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHBhdGguanMiLCJhcHBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHJlY3RhbmdsZS5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcc3F1YXJlLmpzIiwiYXBwXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFx2aWRlby5qcyIsImFwcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcZmFjdG9yeS5qcyIsImFwcFxcc2NyaXB0c1xcZmlsdGVyc1xcYWJzdHJhY3RfZmlsdGVyLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcYWRkX3VwX3BvaW50cy5qcyIsImFwcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXGRpc3RhbmNlLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcaGVscGVyXFxhbmdsZV90b19yYWRpYW5zLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcaGVscGVyXFxkZWdyZWVzX3RvX2Nvb3JkaW5hdGVzLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcbm9ybWFsaXplLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGFyYy5qcyIsImFwcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxiZXppZXJfY3VydmUuanMiLCJhcHBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsImFwcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxwYXRoLmpzIiwiYXBwXFxzY3JpcHRzXFxnZW9tZXRyeVxcdG9fdmVjdG9yLmpzIiwiYXBwXFxzY3JpcHRzXFxpbnRlcm5hbFxcY2hlY2tfcGFyYW1ldGVyLmpzIiwiYXBwXFxzY3JpcHRzXFxpbnRlcm5hbFxcc2V0X3Byb3AuanMiLCJhcHBcXHNjcmlwdHNcXGxvb3AuanMiLCJhcHBcXHNjcmlwdHNcXHRpbWVyc1xcaW50ZXJ2YWxfdGltZXIuanMiLCJhcHBcXHNjcmlwdHNcXHRyYW5zaXRpb25zXFxlYXNpbmcuanMiLCJhcHBcXHNjcmlwdHNcXHRyYW5zaXRpb25zXFx0cmFuc2l0aW9uX2xvb3AuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvYmV6aWVyLmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvcG9seS1iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jbG9uZS9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jc3Mta2V5d29yZHMuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9jb2xvci1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lYXNpbmctdXRpbHMvbGliL2Vhc2luZy5qcyIsIm5vZGVfbW9kdWxlcy9yYW5kb21Db2xvci9yYW5kb21Db2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQyxTQUFPO0FBRG9DLENBQTdDOztBQUlBLElBQUksY0FBYyxRQUFRLHlCQUFSLENBQWxCOztBQUVBLElBQUksZUFBZSx1QkFBdUIsV0FBdkIsQ0FBbkI7O0FBRUEsU0FBUyxzQkFBVCxDQUFnQyxHQUFoQyxFQUFxQztBQUFFLFNBQU8sT0FBTyxJQUFJLFVBQVgsR0FBd0IsR0FBeEIsR0FBOEIsRUFBRSxTQUFTLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GLFFBQVEsT0FBUixHQUFrQjtBQUNoQixhQUFXLGFBQWE7QUFEUixDQUFsQjtBQUdBOzs7QUNmQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLGlCQUFpQixRQUFRLGlCQUFSLENBQXJCOztBQUVBLElBQUksa0JBQWtCLHVCQUF1QixjQUF2QixDQUF0Qjs7QUFFQSxJQUFJLFNBQVMsUUFBUSxTQUFSLENBQWI7O0FBRUEsSUFBSSxVQUFVLHVCQUF1QixNQUF2QixDQUFkOztBQUVBLElBQUksUUFBUSxRQUFRLFFBQVIsQ0FBWjs7QUFFQSxJQUFJLFNBQVMsdUJBQXVCLEtBQXZCLENBQWI7O0FBRUEsSUFBSSxrQkFBa0IsUUFBUSxrQkFBUixDQUF0Qjs7QUFFQSxJQUFJLG1CQUFtQix1QkFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3dkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3R3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3BhdGhfbWFnaWMgPSByZXF1aXJlKCcuL3BhdGhfbWFnaWMvcGF0aF9tYWdpYycpO1xuXG52YXIgX3BhdGhfbWFnaWMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9tYWdpYyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcGF0aE1hZ2ljOiBfcGF0aF9tYWdpYzIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBvc2l0aW9ucy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zd2luZ2luZ19saW5lID0gcmVxdWlyZSgnLi9zd2luZ2luZ19saW5lJyk7XG5cbnZhciBfc3dpbmdpbmdfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zd2luZ2luZ19saW5lKTtcblxudmFyIF9jdXJ2ZSA9IHJlcXVpcmUoJy4vY3VydmUnKTtcblxudmFyIF9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXJ2ZSk7XG5cbnZhciBfd2F2ZSA9IHJlcXVpcmUoJy4vd2F2ZScpO1xuXG52YXIgX3dhdmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2F2ZSk7XG5cbnZhciBfY3BvaW50X3NwaW5uZXIgPSByZXF1aXJlKCcuL2Nwb2ludF9zcGlubmVyJyk7XG5cbnZhciBfY3BvaW50X3NwaW5uZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3BvaW50X3NwaW5uZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHN3aW5naW5nTGluZTogX3N3aW5naW5nX2xpbmUyLmRlZmF1bHQsXG4gIGN1cnZlOiBfY3VydmUyLmRlZmF1bHQsXG4gIGNwb2ludFNwaW5uZXI6IF9jcG9pbnRfc3Bpbm5lcjIuZGVmYXVsdCxcbiAgd2F2ZTogX3dhdmUyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXppZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3JhZGl1cycsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMSk7XG4gIHN3aW5nTGluZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHN3aW5nTGluZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiAtIHN3aW5nTGluZS5yYWRpdXMsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiArIHN3aW5nTGluZS5yYWRpdXMsIHk6IDAgfSB9KTtcbiAgc3dpbmdMaW5lLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KSh7IHBhdGg6IHN3aW5nTGluZS5iZXppZXJDdXJ2ZSB9KTtcblxuICBzd2luZ0xpbmUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpbmdMaW5lLnB1bHNhci5zdGFydChzd2luZ0xpbmUuaGFuZGxlKTtcbiAgICBzd2luZ0xpbmUudmlldy5hZGRDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpbmdMaW5lLnB1bHNhci5zdG9wKCk7XG4gICAgc3dpbmdMaW5lLnZpZXcucmVtb3ZlQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgIHZhciBjb29yZGluYXRlcyA9ICgwLCBfZGVncmVlc190b19jb29yZGluYXRlczIuZGVmYXVsdCkoY3VycmVudCAqIDM2MCwgc3dpbmdMaW5lLnJhZGl1cyk7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDEueCA9IHN3aW5nTGluZS5sZW5ndGggLyAyIC0gY29vcmRpbmF0ZXMueDtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gLWNvb3JkaW5hdGVzLnk7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDIueCA9IHN3aW5nTGluZS5sZW5ndGggLyAyICsgY29vcmRpbmF0ZXMueDtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gY29vcmRpbmF0ZXMueTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2RlZ3JlZXNfdG9fY29vcmRpbmF0ZXMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2hlbHBlci9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzJyk7XG5cbnZhciBfZGVncmVlc190b19jb29yZGluYXRlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWdyZWVzX3RvX2Nvb3JkaW5hdGVzKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3BvaW50X3NwaW5uZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IDAsIHk6IDAgfSwgY3BvaW50MjogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmVuZC55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS54ID0gTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKiBzd2luZ0xpbmUubGVuZ3RoO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQyLnggPSAoTWF0aC5hYnMoY3VycmVudCAtIDAuNSkgKyAwLjUpICogc3dpbmdMaW5lLmxlbmd0aDtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKGN1cnJlbnQgLSAwLjUpIC8gMiAqIHN3aW5nTGluZS5hbXBsaXR1ZGU7XG4gICAgc3dpbmdMaW5lLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gc3dpbmdMaW5lO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBzd2luZ0xpbmUgPSB7fTtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xlbmd0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2FtcGxpdHVkZScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG5cbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCwgeTogMCB9LCBjcG9pbnQxOiB7IHg6IHN3aW5nTGluZS5sZW5ndGggLyAyLCB5OiAwIH0gfSk7XG4gIHN3aW5nTGluZS5wYXRoVmlldyA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoeyBwYXRoOiBzd2luZ0xpbmUuYmV6aWVyQ3VydmUgfSk7XG5cbiAgc3dpbmdMaW5lLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RhcnQoc3dpbmdMaW5lLmhhbmRsZSk7XG4gICAgc3dpbmdMaW5lLnZpZXcuYWRkQ2hpbGQoc3dpbmdMaW5lLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHN3aW5nTGluZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHN3aW5nTGluZS5wdWxzYXIuc3RvcCgpO1xuICAgIHN3aW5nTGluZS52aWV3LnJlbW92ZUNoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50MS55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2luZ2luZ19saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICB2YXIgc3dpbmdMaW5lID0ge307XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsZW5ndGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdhbXBsaXR1ZGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdHJldGNoJywgZmFsc2UsIDApO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RpbWUnLCB0cnVlKTtcblxuICBzd2luZ0xpbmUubGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gIHN3aW5nTGluZS5hbXBsaXR1ZGUgPSBvcHRpb25zLmFtcGxpdHVkZTtcbiAgc3dpbmdMaW5lLnRpbWUgPSBvcHRpb25zLnRpbWU7XG4gIHN3aW5nTGluZS5zdHJldGNoID0gb3B0aW9ucy5zdHJldGNoO1xuXG4gIHN3aW5nTGluZS5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoc3dpbmdMaW5lLnRpbWUsIDAuNSk7XG4gIHN3aW5nTGluZS52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG4gIHN3aW5nTGluZS5iZXppZXJDdXJ2ZSA9ICgwLCBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgY3BvaW50MTogeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiAtIHN3aW5nTGluZS5zdHJldGNoLCB5OiAwIH0sIGNwb2ludDI6IHsgeDogc3dpbmdMaW5lLmxlbmd0aCAvIDIgKyBzd2luZ0xpbmUuc3RyZXRjaCwgeTogMCB9IH0pO1xuICBzd2luZ0xpbmUucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHsgcGF0aDogc3dpbmdMaW5lLmJlemllckN1cnZlIH0pO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmVuZC55ID0gKGN1cnJlbnQgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuY3BvaW50Mi55ID0gKHN3aW5nTGluZS5wdWxzYXIuZ2V0UmVsYXRpdmVDdXJyZW50KC0wLjI1KSAtIDAuNSkgKiAxLjUgKiBzd2luZ0xpbmUuYW1wbGl0dWRlO1xuICAgIHN3aW5nTGluZS5iZXppZXJDdXJ2ZS5jcG9pbnQxLnkgPSAoc3dpbmdMaW5lLnB1bHNhci5nZXRSZWxhdGl2ZUN1cnJlbnQoLTAuNSkgLSAwLjUpICogMS41ICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUuYmV6aWVyQ3VydmUuc3RhcnQueSA9IChzd2luZ0xpbmUucHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCgtMC43NSkgLSAwLjUpICogc3dpbmdMaW5lLmFtcGxpdHVkZTtcbiAgICBzd2luZ0xpbmUucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBzd2luZ0xpbmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9iZXppZXJfY3VydmUnKTtcblxudmFyIF9iZXppZXJfY3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyX2N1cnZlKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YXZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25fcGF0aF9kcmF3ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9yYW5kb21fcGFydF9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyKTtcblxudmFyIF9iZXppZXIgPSByZXF1aXJlKCcuL2Jlemllci9iZXppZXInKTtcblxudmFyIF9iZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0cmFuc2l0aW9uUGF0aERyYXdlcjogX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIHJhbmRvbVBhcnRQYXRoRHJhd2VyOiBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIGJlemllcjogX2JlemllcjIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfbWFnaWMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG5cbiAgLy8gSGFuZGxlIHBhcmFtZXRlcnM6XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGhPcHRpb25zJywgZmFsc2UsIHt9KTtcbiAgcGF0aERyYXdlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuICBvcHRpb25zLnBhdGhPcHRpb25zLnBhdGggPSBwYXRoRHJhd2VyLnBhdGg7XG5cbiAgLy8gSW5pdFxuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShvcHRpb25zLnBhdGhPcHRpb25zKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocGF0aERyYXdlci5oYW5kbGUpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5hZGRDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24ocGF0aERyYXdlci5oYW5kbGUpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5yZW1vdmVDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucGF0aFZpZXcuY29tcGxldGVQYXRoID0gcGF0aERyYXdlci5wYXRoLmdldFBhcnRQYXRoKE1hdGgucmFuZG9tKCkpO1xuICAgIHBhdGhEcmF3ZXIucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBwYXRoRHJhd2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9jb250YWluZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcGFydF9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHBhdGhEcmF3ZXIgPSB7fTtcblxuICAvLyBIYW5kbGUgUGFyYW1ldGVyc1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3BhdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoT3B0aW9ucycsIHRydWUpO1xuICBvcHRpb25zLnBhdGhPcHRpb25zLnBhdGggPSBvcHRpb25zLnBhdGg7XG4gIHBhdGhEcmF3ZXIucGF0aCA9IG9wdGlvbnMucGF0aDtcblxuICAvLyBJbml0XG4gIHBhdGhEcmF3ZXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKDEwMDAsIDEpO1xuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShvcHRpb25zLnBhdGhPcHRpb25zKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwYXRoRHJhd2VyLnB1bHNhci5zdGFydChwYXRoRHJhd2VyLmhhbmRsZSk7XG4gICAgcGF0aERyYXdlci52aWV3LmFkZENoaWxkKHBhdGhEcmF3ZXIucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgcGF0aERyYXdlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucHVsc2FyLnN0b3AoKTtcbiAgICBwYXRoRHJhd2VyLnZpZXcucmVtb3ZlQ2hpbGQocGF0aERyYXdlci5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5jb21wbGV0ZVBhdGggPSBwYXRoRHJhd2VyLnBhdGguZ2V0UGFydFBhdGgoY3VycmVudCk7XG4gICAgcGF0aERyYXdlci5wYXRoVmlldy5kcmF3KCk7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGhEcmF3ZXI7XG59O1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgY29tcG9uZW50ID0ge307XG4gICAgICBjb21wb25lbnQudmlldyA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9jb21wb25lbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NpcmNsZVNoYXBlJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG5cbiAgICAgIHZhciBjaXJjbGUgPSAoMCwgX2Fic3RyYWN0X2NvbXBvbmVudDIuZGVmYXVsdCkoKTtcbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XG4gICAgICBjaXJjbGUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICBjaXJjbGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNpcmNsZS52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBjaXJjbGUudmlldy5ncmFwaGljcy5iZWdpbkZpbGwoY2lyY2xlLmNvbG9yKS5kcmF3Q2lyY2xlKDAsIDAsIGNpcmNsZS5jaXJjbGVTaGFwZS5yYWRpdXMgKiBjaXJjbGUuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgY2lyY2xlLmRyYXcoKTtcbiAgICAgIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IGNyZWF0ZWpzLkNvbnRhaW5lcigpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3VzdG9tU2hhcGUnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuICBjdXN0b20uY3VzdG9tU2hhcGUgPSBvcHRpb25zLmN1c3RvbVNoYXBlO1xuICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKGN1c3RvbS5jb2xvcikuYmVnaW5TdHJva2UoJyMwMEYnKS5tb3ZlVG8oMCwgMCk7XG4gICAgdmFyIGN1cnJlbnQgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gY3VzdG9tLmN1c3RvbVNoYXBlLnBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICBjdXJyZW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjdXN0b20uZHJhdygpO1xuICByZXR1cm4gY3VzdG9tO1xufTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG52YXIgX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9oZWxwZXIvcGF0aF9kcmF3ZXInKTtcblxudmFyIF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvYWRkX3VwX3BvaW50cycpO1xuXG52YXIgX2FkZF91cF9wb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkX3VwX3BvaW50cyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbV9vYmplY3QuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYW5nbGVfdG9fcmFkaWFucyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnKTtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlX3RvX3JhZGlhbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKmVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSovXG5mdW5jdGlvbiBwYXRoRHJhd2VyKCkge31cblxucGF0aERyYXdlci5saW5lID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLmxpbmVUbyhjdXJyZW50LnggKyBwYXRoLmdldEVkZ2VQb2ludCgpLngsIGN1cnJlbnQueSArIHBhdGguZ2V0RWRnZVBvaW50KCkueSk7XG59O1xuXG5wYXRoRHJhd2VyLmFyYyA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBncmFwaGljcy5hcmMocGF0aC5zdGFydC54LCBwYXRoLnN0YXJ0LnkgKyBwYXRoLnJhZGl1cywgcGF0aC5yYWRpdXMsICgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkoLTkwKSwgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXRoLmRlZ3JlZXMgLSA5MCkpO1xufTtcblxucGF0aERyYXdlci5zaW5lX3dhdmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgZm9yICh2YXIgeCA9IDA7IHggPCBwYXRoLmdldExlbmd0aCgpOyB4ICs9IDUpIHtcbiAgICB2YXIgcG9pbnQgPSBwYXRoLmdldFBvaW50KHggLyBwYXRoLmdldExlbmd0aCgpKTtcbiAgICBncmFwaGljcy5saW5lVG8ocG9pbnQueCwgcG9pbnQueSk7XG4gIH1cbn07XG5cbnBhdGhEcmF3ZXIuYmV6aWVyX2N1cnZlID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGlmIChwYXRoLmNwb2ludDIpIHtcbiAgICBncmFwaGljcy5iZXppZXJDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5jcG9pbnQyLngsIHBhdGguY3BvaW50Mi55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcbiAgfSBlbHNlIHtcbiAgICBncmFwaGljcy5xdWFkcmF0aWNDdXJ2ZVRvKHBhdGguY3BvaW50MS54LCBwYXRoLmNwb2ludDEueSwgcGF0aC5lbmQueCwgcGF0aC5lbmQueSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHBhdGhEcmF3ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoX2RyYXdlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xuXG4gIHZhciBpbWFnZSA9IHtcbiAgICB2aWV3OiBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKSxcbiAgICBzY2FsZTogMC41XG4gIH07XG5cbiAgaW1hZ2UuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpbWFnZS52aWV3LnNjYWxlWCA9IGltYWdlLnNjYWxlO1xuICAgIGltYWdlLnZpZXcuc2NhbGVZID0gaW1hZ2Uuc2NhbGU7XG4gIH07XG5cbiAgaW1hZ2UuZHJhdygpO1xuICByZXR1cm4gaW1hZ2U7XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgbGluZSA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuXG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2xpbmVQYXRoJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3RoaWNrbmVzcycsIGZhbHNlLCAxKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgbGluZS5wYXRoID0gb3B0aW9ucy5saW5lUGF0aDtcbiAgICAgIGxpbmUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgbGluZS50aGlja25lc3MgPSBvcHRpb25zLnRoaWNrbmVzcztcblxuICAgICAgbGluZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGluZS52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKGxpbmUuY29sb3IpLnNldFN0cm9rZVN0eWxlKGxpbmUudGhpY2tuZXNzICogbGluZS5zY2FsZSkubW92ZVRvKGxpbmUucGF0aC5zdGFydC54ICogbGluZS5zY2FsZSwgbGluZS5wYXRoLnN0YXJ0LnkgKiBsaW5lLnNjYWxlKS5saW5lVG8obGluZS5wYXRoLmVuZC54ICogbGluZS5zY2FsZSwgbGluZS5wYXRoLmVuZC55ICogbGluZS5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBsaW5lLmRyYXcoKTtcbiAgICAgIHJldHVybiBsaW5lO1xufTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgdmFyIHN0YWdlID0gbmV3IGNyZWF0ZWpzLlN0YWdlKGlkKTtcblxuICAgIHZhciBjb250YWluZXIgPSB7fTtcblxuICAgIGNvbnRhaW5lci5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmUgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgc3RhZ2UucmVtb3ZlQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0YWdlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5zdGFnZSA9IHN0YWdlO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluX2NvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdwYXRoJywgdHJ1ZSk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XG4gICAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEpO1xuXG4gICAgICB2YXIgY3VzdG9tID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICAgICBjdXN0b20uY29tcGxldGVQYXRoID0gb3B0aW9ucy5wYXRoO1xuICAgICAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgIGN1c3RvbS53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICAgIGN1c3RvbS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmJlZ2luU3Ryb2tlKGN1c3RvbS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUoY3VzdG9tLndpZHRoKS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjdXN0b20uY29tcGxldGVQYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgX3BhdGhfZHJhd2VyMi5kZWZhdWx0W3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjdXN0b20uZHJhdygpO1xuICAgICAgcmV0dXJuIGN1c3RvbTtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxudmFyIF9wYXRoX2RyYXdlciA9IHJlcXVpcmUoJy4vaGVscGVyL3BhdGhfZHJhd2VyJyk7XG5cbnZhciBfcGF0aF9kcmF3ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aF9kcmF3ZXIpO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyZWN0YW5nbGVTaGFwZScsIHRydWUpO1xuICAgICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xuXG4gICAgICB2YXIgcmVjdCA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuICAgICAgcmVjdC53aWR0aCA9IG9wdGlvbnMucmVjdGFuZ2xlU2hhcGUud2lkdGg7XG4gICAgICByZWN0LmhlaWdodCA9IG9wdGlvbnMucmVjdGFuZ2xlU2hhcGUuaGVpZ2h0O1xuICAgICAgcmVjdC5jb2xvciA9IG9wdGlvbnMuY29sb3I7XG5cbiAgICAgIHJlY3QuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlY3Qudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgcmVjdC52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChyZWN0LmNvbG9yKS5kcmF3UmVjdCgwLCAwLCByZWN0LndpZHRoICogcmVjdC5zY2FsZSwgcmVjdC5oZWlnaHQgKiByZWN0LnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIHJlY3QuZHJhdygpO1xuICAgICAgcmV0dXJuIHJlY3Q7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3F1YXJlU2hhcGUnLCB0cnVlKTtcbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcblxuICAgICAgdmFyIHNxdWFyZSA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuICAgICAgc3F1YXJlLnNpZGVMZW5ndGggPSBvcHRpb25zLnNxdWFyZVNoYXBlLnNpZGVsZW5ndGg7XG4gICAgICBzcXVhcmUuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuXG4gICAgICBzcXVhcmUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNxdWFyZS52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgICAgICBzcXVhcmUudmlldy5ncmFwaGljcy5iZWdpbkZpbGwoc3F1YXJlLmNvbG9yKS5kcmF3UmVjdCgwLCAwLCBzcXVhcmUuc2lkZUxlbmd0aCAqIHNxdWFyZS5zY2FsZSwgc3F1YXJlLnNpZGVMZW5ndGggKiBzcXVhcmUuc2NhbGUpO1xuICAgICAgfTtcblxuICAgICAgc3F1YXJlLmRyYXcoKTtcbiAgICAgIHJldHVybiBzcXVhcmU7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNxdWFyZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cbiAgICAgIGhhbmRsZVZpZGVvU291cmNlKCk7XG5cbiAgICAgIHZhciB2aWRlbyA9IHtcbiAgICAgICAgICAgIHZpZXc6IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpLFxuICAgICAgICAgICAgc2NhbGU6IDAuNVxuICAgICAgfTtcblxuICAgICAgdmlkZW8uZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvLnZpZXcuc2NhbGVYID0gdmlkZW8uc2NhbGU7XG4gICAgICAgICAgICB2aWRlby52aWV3LnNjYWxlWSA9IHZpZGVvLnNjYWxlO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc291cmNlLnBsYXkoKTtcbiAgICAgIH07XG5cbiAgICAgIHZpZGVvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgICAgICAgb3B0aW9ucy5zb3VyY2UuY3VycmVudFRpbWUgPSAwO1xuICAgICAgfTtcblxuICAgICAgdmlkZW8ucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xuICAgICAgICAgICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2aWRlby5kcmF3KCk7XG4gICAgICByZXR1cm4gdmlkZW87XG59O1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWRlby5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jb250YWluZXInKTtcblxudmFyIF9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29udGFpbmVyKTtcblxudmFyIF9zcXVhcmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc3F1YXJlJyk7XG5cbnZhciBfc3F1YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NxdWFyZSk7XG5cbnZhciBfY2lyY2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NpcmNsZScpO1xuXG52YXIgX2NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaXJjbGUpO1xuXG52YXIgX3JlY3RhbmdsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9yZWN0YW5nbGUnKTtcblxudmFyIF9yZWN0YW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlKTtcblxudmFyIF9tYWluX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tYWluX2NvbnRhaW5lcicpO1xuXG52YXIgX21haW5fY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21haW5fY29udGFpbmVyKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2xpbmUnKTtcblxudmFyIF9saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmUpO1xuXG52YXIgX2N1c3RvbV9vYmplY3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY3VzdG9tX29iamVjdCcpO1xuXG52YXIgX2N1c3RvbV9vYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3VzdG9tX29iamVjdCk7XG5cbnZhciBfaW1hZ2UgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvaW1hZ2UnKTtcblxudmFyIF9pbWFnZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbWFnZSk7XG5cbnZhciBfdmlkZW8gPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdmlkZW8nKTtcblxudmFyIF92aWRlbzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92aWRlbyk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNvbnRhaW5lcjogX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICBzcXVhcmU6IF9zcXVhcmUyLmRlZmF1bHQsXG4gICAgY2lyY2xlOiBfY2lyY2xlMi5kZWZhdWx0LFxuICAgIHJlY3RhbmdsZTogX3JlY3RhbmdsZTIuZGVmYXVsdCxcbiAgICBsaW5lOiBfbGluZTIuZGVmYXVsdCxcbiAgICBjdXN0b21PYmplY3Q6IF9jdXN0b21fb2JqZWN0Mi5kZWZhdWx0LFxuICAgIG1haW5Db250YWluZXI6IF9tYWluX2NvbnRhaW5lcjIuZGVmYXVsdCxcbiAgICBpbWFnZTogX2ltYWdlMi5kZWZhdWx0LFxuICAgIHZpZGVvOiBfdmlkZW8yLmRlZmF1bHQsXG4gICAgcGF0aDogX3BhdGgyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWN0b3J5LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgIHZhciBhYnN0cmFjdEdyb3VwID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuID0gY2hpbGRyZW4gPyBjaGlsZHJlbiA6IFtdO1xuXG4gICAgYWJzdHJhY3RHcm91cC5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XG4gICAgfTtcblxuICAgIGFic3RyYWN0R3JvdXAucmVtb3ZlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGFic3RyYWN0R3JvdXAuY2hpbGRyZW4uc3BsaWNlKGFic3RyYWN0R3JvdXAuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCksIDEpO1xuICAgICAgICBhYnN0cmFjdEdyb3VwLnJlZnJlc2goKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFic3RyYWN0R3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICd3aWR0aCcsIGZhbHNlLCBmYWxzZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgdmFyIGNlbnRlckdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkob3B0aW9ucy5jaGlsZHJlbik7XG4gICAgY2VudGVyR3JvdXAud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIGNlbnRlckdyb3VwLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgY2VudGVyR3JvdXAucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2VudGVyR3JvdXAudmlldy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNlbnRlckdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoY2VudGVyR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG5cbiAgICAgICAgICAgIGlmIChjZW50ZXJHcm91cC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci54ID0gY29udGFpbmVyLnggPSAoaSArIDEpICogY2VudGVyR3JvdXAud2lkdGggLyAoY2VudGVyR3JvdXAuY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZW50ZXJHcm91cC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIueSA9IGNvbnRhaW5lci54ID0gKGkgKyAxKSAqIGNlbnRlckdyb3VwLmhlaWdodCAvIChjZW50ZXJHcm91cC5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VudGVyR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNlbnRlckdyb3VwLnJlZnJlc2goKTtcbiAgICByZXR1cm4gY2VudGVyR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNlbnRlcl9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFkaXVzJywgZmFsc2UsIDEwKTtcbiAgICB2YXIgY2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICBjaXJjbGVHcm91cC5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcblxuICAgIHZhciBhbmdsZSA9IDM2MCAvIGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgdmFyIGlubmVyQ29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5yb3RhdGlvbiA9IGFuZ2xlICogaTtcbiAgICAgICAgaW5uZXJDb250YWluZXIueSA9IC1jaXJjbGVHcm91cC5yYWRpdXM7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKGNpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBjaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNpcmNsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwID0gcmVxdWlyZSgnLi9yZWN0YW5nbGVfZ3JvdXAnKTtcblxudmFyIF9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVjdGFuZ2xlX2dyb3VwKTtcblxudmFyIF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwID0gcmVxdWlyZSgnLi9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmFuZG9tX3JlY3RhbmdsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fcmVjdGFuZ2xlX2dyb3VwKTtcblxudmFyIF9jaXJjbGVfZ3JvdXAgPSByZXF1aXJlKCcuL2NpcmNsZV9ncm91cCcpO1xuXG52YXIgX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaXJjbGVfZ3JvdXApO1xuXG52YXIgX3NwaXJhbF9jaXJjbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3NwaXJhbF9jaXJjbGVfZ3JvdXAnKTtcblxudmFyIF9zcGlyYWxfY2lyY2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NwaXJhbF9jaXJjbGVfZ3JvdXApO1xuXG52YXIgX3JhbmRvbV9jaXJjbGVfZ3JvdXAgPSByZXF1aXJlKCcuL3JhbmRvbV9jaXJjbGVfZ3JvdXAnKTtcblxudmFyIF9yYW5kb21fY2lyY2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9jaXJjbGVfZ3JvdXApO1xuXG52YXIgX2NlbnRlcl9ncm91cCA9IHJlcXVpcmUoJy4vY2VudGVyX2dyb3VwJyk7XG5cbnZhciBfY2VudGVyX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NlbnRlcl9ncm91cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgcmVjdGFuZ2xlR3JvdXA6IF9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIHJhbmRvbVJlY3RhbmdsZUdyb3VwOiBfcmFuZG9tX3JlY3RhbmdsZV9ncm91cDIuZGVmYXVsdCxcbiAgY2lyY2xlR3JvdXA6IF9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIHNwaXJhbENpcmNsZUdyb3VwOiBfc3BpcmFsX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgcmFuZG9tQ2lyY2xlR3JvdXA6IF9yYW5kb21fY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICBjZW50ZXJHcm91cDogX2NlbnRlcl9ncm91cDIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkcmVuJywgdHJ1ZSk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCBmYWxzZSwgMTApO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncmFuZG9tUmFuZ2UnLCBmYWxzZSwgMTApO1xuICAgIHZhciBjaXJjbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICAgIGNpcmNsZUdyb3VwLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICAgIGNpcmNsZUdyb3VwLnJhbmRvbVJhbmdlID0gb3B0aW9ucy5yYW5kb21SYW5nZTtcblxuICAgIHZhciBhbmdsZSA9IDM2MCAvIGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgdmFyIGlubmVyQ29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5yb3RhdGlvbiA9IGFuZ2xlICogaTtcbiAgICAgICAgaW5uZXJDb250YWluZXIueSA9IC1jaXJjbGVHcm91cC5yYWRpdXMgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaXJjbGVHcm91cC5yYW5kb21SYW5nZSAtIGNpcmNsZUdyb3VwLnJhbmRvbVJhbmdlICogMC41KTtcbiAgICAgICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGNpcmNsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEwKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2hlaWdodCcsIGZhbHNlLCAxMCk7XG5cbiAgICB2YXIgcmVjdGFuZ2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkcmVuKTtcbiAgICByZWN0YW5nbGVHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgcmVjdGFuZ2xlR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG5cbiAgICByZWN0YW5nbGVHcm91cC5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVjdGFuZ2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgICAgIGNvbnRhaW5lci54ID0gTWF0aC5mbG9vcihyZWN0YW5nbGVHcm91cC53aWR0aCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLnkgPSBNYXRoLmZsb29yKHJlY3RhbmdsZUdyb3VwLmhlaWdodCAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgcmVjdGFuZ2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlY3RhbmdsZUdyb3VwLnJlZnJlc2goKTtcbiAgICByZXR1cm4gcmVjdGFuZ2xlR3JvdXA7XG59O1xuXG52YXIgX2ZhY3RvcnkgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9yZWN0YW5nbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGRyZW4nLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NvbHVtbnMnLCBmYWxzZSwgMyk7XG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzcGFjaW5nJywgZmFsc2UsIDEwKTtcblxuICAgIHZhciByZWN0YW5nbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuXG4gICAgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICByZWN0YW5nbGVHcm91cC5zcGFjaW5nID0gb3B0aW9ucy5zcGFjaW5nO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLnggPSBpICUgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyAqIHJlY3RhbmdsZUdyb3VwLnNwYWNpbmc7XG4gICAgICAgIGNvbnRhaW5lci55ID0gTWF0aC5mbG9vcihpIC8gcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiByZWN0YW5nbGVHcm91cC5zcGFjaW5nO1xuICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWN0YW5nbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZHJlbicsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N0YXJ0UmFkaXVzJywgZmFsc2UsIDEwKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdlbmRSYWRpdXMnLCBmYWxzZSwgMSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncm91bmRzJywgZmFsc2UsIDEpO1xuXG4gIHZhciBzcGlyYWxDaXJjbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGRyZW4pO1xuICBzcGlyYWxDaXJjbGVHcm91cC5zdGFydFJhZGl1cyA9IG9wdGlvbnMuc3RhcnRSYWRpdXM7XG4gIHNwaXJhbENpcmNsZUdyb3VwLmVuZFJhZGl1cyA9IG9wdGlvbnMuZW5kUmFkaXVzO1xuICBzcGlyYWxDaXJjbGVHcm91cC5yb3VuZHMgPSBvcHRpb25zLnJvdW5kcztcblxuICB2YXIgYW5nbGUgPSAzNjAgKiBzcGlyYWxDaXJjbGVHcm91cC5yb3VuZHMgLyBzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7XG4gIHZhciByYWRpdXNJbmNyZWFzZUFtb3VudCA9IChzcGlyYWxDaXJjbGVHcm91cC5lbmRSYWRpdXMgLSBzcGlyYWxDaXJjbGVHcm91cC5zdGFydFJhZGl1cykgLyBzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgdmFyIGlubmVyQ29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgIGlubmVyQ29udGFpbmVyLnkgPSAtKHNwaXJhbENpcmNsZUdyb3VwLnN0YXJ0UmFkaXVzICsgcmFkaXVzSW5jcmVhc2VBbW91bnQgKiBpKTtcbiAgICBpbm5lckNvbnRhaW5lci5hZGRDaGlsZChzcGlyYWxDaXJjbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgIHNwaXJhbENpcmNsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHJldHVybiBzcGlyYWxDaXJjbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3BpcmFsX2NpcmNsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAncGF0aCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3Byb2dyZXNzUmF0ZScsIGZhbHNlLCAwKTtcblxuICB2YXIgcGF0aE1vdmVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG4gIHBhdGhNb3Zlci5jdXJyZW50UHJvZ3Jlc3MgPSAwO1xuICBwYXRoTW92ZXIucHJvZ3Jlc3NSYXRlID0gb3B0aW9ucy5wcm9ncmVzc1JhdGU7XG4gIHBhdGhNb3Zlci5wYXRoID0gb3B0aW9ucy5wYXRoO1xuXG4gIHBhdGhNb3Zlci52aWV3LmFkZENoaWxkKG9wdGlvbnMuY2hpbGQudmlldyk7XG5cbiAgcGF0aE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHBhdGhNb3Zlci5jdXJyZW50UHJvZ3Jlc3MgKz0gcGF0aE1vdmVyLnByb2dyZXNzUmF0ZSAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICAgIGlmIChwYXRoTW92ZXIuY3VycmVudFByb2dyZXNzID4gMSkge1xuICAgICAgcGF0aE1vdmVyLmN1cnJlbnRQcm9ncmVzcyAtPSAxO1xuICAgIH1cbiAgICB2YXIgcG9pbnQgPSBwYXRoTW92ZXIucGF0aC5nZXRQb2ludChwYXRoTW92ZXIuY3VycmVudFByb2dyZXNzKTtcbiAgICBwYXRoTW92ZXIudmlldy54ID0gcG9pbnQueDtcbiAgICBwYXRoTW92ZXIudmlldy55ID0gcG9pbnQueTtcbiAgfTtcblxuICByZXR1cm4gcGF0aE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGgtbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgc3BlZWQpIHtcbiAgdmFyIHAyUE1vdmVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG4gIHAyUE1vdmVyLnZpZXcuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG5cbiAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xuICBwMlBNb3Zlci5nb2FsUG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgcDJQTW92ZXIuc3BlZWQgPSBzcGVlZCA/IHNwZWVkIDogMTtcbiAgcDJQTW92ZXIucHJvZ3Jlc3MgPSAwO1xuICBwMlBNb3Zlci5maW5pc2hlZCA9IHRydWU7XG4gIHAyUE1vdmVyLnBlcnNwZWN0aXZlID0geyB4OiAwLCB5OiAwIH07XG5cbiAgLypcclxuICAgICAgU2V0cyBpbmZvcm1hdGlvbnMgaW4gdGhlIHBlcnNwZWN0aXZlIG9iamVjdFxyXG4gICAgICBkZXRlcm1zIGlmIHRoZSBnb2FsIHBvaW50IGlzXHJcbiAgICAgIGxlZnQsIHJpZ2h0LCB0b3Agb3IgZG93biBvZiB0aGUgY3VycmVudCBwb2ludFxyXG4gICAqL1xuICBmdW5jdGlvbiBzZXRQZXJzcGVjdGl2ZUluZm9ybWF0aW9uKCkge1xuICAgIGlmIChwMlBNb3Zlci5nb2FsUG9pbnQueCAtIHAyUE1vdmVyLnZpZXcueCA+PSAwKSB7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS54ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDJQTW92ZXIucGVyc3BlY3RpdmUueCA9IC0xO1xuICAgIH1cblxuICAgIGlmIChwMlBNb3Zlci5nb2FsUG9pbnQueSAtIHAyUE1vdmVyLnZpZXcueSA+PSAwKSB7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS55ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDJQTW92ZXIucGVyc3BlY3RpdmUueSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgcDJQTW92ZXIucHJvZ3Jlc3MgKz0gZXZlbnQuZGVsdGEgLyAxMDAwICogcDJQTW92ZXIuc3RlcDtcblxuICAgIGlmIChwMlBNb3Zlci5wcm9ncmVzcyA8PSAxKSB7XG4gICAgICBwMlBNb3Zlci5oYW5kbGVNb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHAyUE1vdmVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHAyUE1vdmVyLnZpZXcueCA9IHAyUE1vdmVyLmdvYWxQb2ludC54O1xuICAgICAgcDJQTW92ZXIudmlldy55ID0gcDJQTW92ZXIuZ29hbFBvaW50Lnk7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS54ID0gMDtcbiAgICAgIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnkgPSAwO1xuICAgICAgaWYgKHAyUE1vdmVyLmNhbGxiYWNrKSB7XG4gICAgICAgIHAyUE1vdmVyLmNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZVRvKGdvYWxQb2ludCwgY2FsbGJhY2spIHtcbiAgICBwMlBNb3Zlci5kaXJlY3Rpb24gPSAoMCwgX25vcm1hbGl6ZTIuZGVmYXVsdCkoW2dvYWxQb2ludC54IC0gcDJQTW92ZXIudmlldy54LCBnb2FsUG9pbnQueSAtIHAyUE1vdmVyLnZpZXcueV0pO1xuICAgIHAyUE1vdmVyLnN0YXJ0UG9pbnQgPSB7IHg6IHAyUE1vdmVyLnZpZXcueCwgeTogcDJQTW92ZXIudmlldy55IH07XG4gICAgcDJQTW92ZXIuZ29hbFBvaW50ID0gZ29hbFBvaW50O1xuICAgIHAyUE1vdmVyLmRpc3RhbmNlID0gKDAsIF9kaXN0YW5jZTIuZGVmYXVsdCkoKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKHAyUE1vdmVyLnN0YXJ0UG9pbnQpLCAoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkocDJQTW92ZXIuZ29hbFBvaW50KSk7XG4gICAgcDJQTW92ZXIuc3RlcCA9IHAyUE1vdmVyLnNwZWVkIC8gcDJQTW92ZXIuZGlzdGFuY2U7XG4gICAgcDJQTW92ZXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBwMlBNb3Zlci5maW5pc2hlZCA9IGZhbHNlO1xuICAgIHNldFBlcnNwZWN0aXZlSW5mb3JtYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgcDJQTW92ZXIuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBwMlBNb3Zlci5nb2FsUG9pbnQgPSBudWxsO1xuICAgIHAyUE1vdmVyLmRpcmVjdGlvbiA9ICgwLCBfbm9ybWFsaXplMi5kZWZhdWx0KShbZGlyZWN0aW9uLngsIGRpcmVjdGlvbi55XSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BvaW50UmVhY2hlZCgpIHtcbiAgICBpZiAoIXAyUE1vdmVyLmdvYWxQb2ludCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoKHAyUE1vdmVyLmdvYWxQb2ludC54IC0gcDJQTW92ZXIudmlldy54KSAqIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnggPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKChwMlBNb3Zlci5nb2FsUG9pbnQueSAtIHAyUE1vdmVyLnZpZXcueSkgKiBwMlBNb3Zlci5wZXJzcGVjdGl2ZS55ID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcDJQTW92ZXIuaGFuZGxlID0gaGFuZGxlO1xuICBwMlBNb3Zlci5tb3ZlVG8gPSBtb3ZlVG87XG4gIHAyUE1vdmVyLm1vdmUgPSBtb3ZlO1xuICBwMlBNb3Zlci5pc1BvaW50UmVhY2hlZCA9IGlzUG9pbnRSZWFjaGVkO1xuICByZXR1cm4gcDJQTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9ub3JtYWxpemUgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L25vcm1hbGl6ZScpO1xuXG52YXIgX25vcm1hbGl6ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ub3JtYWxpemUpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3RvX3ZlY3RvcicpO1xuXG52YXIgX3RvX3ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b192ZWN0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWJzdHJhY3QtbW92ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY2hpbGQnLCB0cnVlKTtcbiAgICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgZmFsc2UsIDEpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZWFzaW5nTmFtZScsIGZhbHNlLCAnbGluZWFyJyk7XG5cbiAgICB2YXIgbGluZWFyUDJQTW92ZXIgPSAoMCwgX2Fic3RyYWN0TW92ZXIyLmRlZmF1bHQpKG9wdGlvbnMuY2hpbGQsIG9wdGlvbnMuc3BlZWQpO1xuICAgIGxpbmVhclAyUE1vdmVyLmVhc2luZ05hbWUgPSBvcHRpb25zLmVhc2luZ05hbWU7XG5cbiAgICB2YXIgZWFzaW5nSGFuZGxlciA9ICgwLCBfZWFzaW5nMi5kZWZhdWx0KSgpO1xuXG4gICAgbGluZWFyUDJQTW92ZXIuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGluZWFyUDJQTW92ZXIudmlldy54ID0gbGluZWFyUDJQTW92ZXIuc3RhcnRQb2ludC54ICsgbGluZWFyUDJQTW92ZXIuZGlzdGFuY2UgKiBsaW5lYXJQMlBNb3Zlci5kaXJlY3Rpb25bMF0gKiBlYXNpbmdIYW5kbGVyLmdldFZhbHVlT2YobGluZWFyUDJQTW92ZXIucHJvZ3Jlc3MsIGxpbmVhclAyUE1vdmVyLmVhc2luZ05hbWUpO1xuICAgICAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnkgPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnkgKyBsaW5lYXJQMlBNb3Zlci5kaXN0YW5jZSAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblsxXSAqIGVhc2luZ0hhbmRsZXIuZ2V0VmFsdWVPZihsaW5lYXJQMlBNb3Zlci5wcm9ncmVzcywgbGluZWFyUDJQTW92ZXIuZWFzaW5nTmFtZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RNb3ZlciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtbW92ZXInKTtcblxudmFyIF9hYnN0cmFjdE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0TW92ZXIpO1xuXG52YXIgX2Vhc2luZyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Vhc2luZyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2NoaWxkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc2hha2VGYWN0b3InLCBmYWxzZSwgMSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCBmYWxzZSwgMSk7XG5cbiAgdmFyIGxpbmVhclAyUE1vdmVyID0gKDAsIF9hYnN0cmFjdE1vdmVyMi5kZWZhdWx0KShvcHRpb25zLmNoaWxkLCBvcHRpb25zLnNwZWVkKTtcbiAgbGluZWFyUDJQTW92ZXIuc2hha2VGYWN0b3IgPSBvcHRpb25zLnNoYWtlRmFjdG9yO1xuXG4gIGxpbmVhclAyUE1vdmVyLmhhbmRsZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJhbmRvbUZhY3RvciA9IE1hdGgucmFuZG9tKCkgKiBsaW5lYXJQMlBNb3Zlci5zaGFrZUZhY3RvciAtIGxpbmVhclAyUE1vdmVyLnNoYWtlRmFjdG9yIC8gMjtcbiAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnggPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnggKyBsaW5lYXJQMlBNb3Zlci5kaXN0YW5jZSAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblswXSAqIGxpbmVhclAyUE1vdmVyLnByb2dyZXNzICsgcmFuZG9tRmFjdG9yICogbGluZWFyUDJQTW92ZXIuZGlyZWN0aW9uWzBdO1xuICAgIGxpbmVhclAyUE1vdmVyLnZpZXcueSA9IGxpbmVhclAyUE1vdmVyLnN0YXJ0UG9pbnQueSArIGxpbmVhclAyUE1vdmVyLmRpc3RhbmNlICogbGluZWFyUDJQTW92ZXIuZGlyZWN0aW9uWzFdICogbGluZWFyUDJQTW92ZXIucHJvZ3Jlc3MgKyByYW5kb21GYWN0b3IgKiBsaW5lYXJQMlBNb3Zlci5kaXJlY3Rpb25bMV07XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhclAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdE1vdmVyID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1tb3ZlcicpO1xuXG52YXIgX2Fic3RyYWN0TW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RNb3Zlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9zaGFrZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAgICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCBmYWxzZSwgMTAwMCk7XG5cbiAgICB2YXIgZmFkZXIgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcbiAgICBmYWRlci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gICAgZmFkZXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKGZhZGVyLnNwZWVkLCAwLjUpO1xuXG4gICAgZmFkZXIudmlldy5hZGRDaGlsZChvcHRpb25zLmNoaWxkLnZpZXcpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlKGN1cnJlbnQpIHtcbiAgICAgICAgZmFkZXIudmlldy5hbHBoYSA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgZmFkZXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZhZGVyLnB1bHNhci5zdGFydChoYW5kbGUpO1xuICAgIH07XG5cbiAgICBmYWRlci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmYWRlci5wdWxzYXIuc3RvcCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZmFkZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuXG4gICAgdmFyIGZsYXNoZXIgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcblxuICAgIGZsYXNoZXIudmlldy5hZGRDaGlsZChvcHRpb25zLmNoaWxkLnZpZXcpO1xuICAgIGZsYXNoZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmbGFzaGVyLnZpZXcudmlzaWJsZSA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XG4gICAgfTtcblxuICAgIHJldHVybiBmbGFzaGVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ZpbHRlcnMvYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsYXNoZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdjaGlsZCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgZmFsc2UsIDEpO1xuICB2YXIgbGluZWFyUm90YXRvciA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuICBsaW5lYXJSb3RhdG9yLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgbGluZWFyUm90YXRvci52aWV3LmFkZENoaWxkKG9wdGlvbnMuY2hpbGQudmlldyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlKGV2ZW50KSB7XG4gICAgbGluZWFyUm90YXRvci52aWV3LnJvdGF0aW9uID0gbGluZWFyUm90YXRvci52aWV3LnJvdGF0aW9uICsgbGluZWFyUm90YXRvci5zcGVlZCAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICB9XG5cbiAgbGluZWFyUm90YXRvci5oYW5kbGUgPSBoYW5kbGU7XG5cbiAgcmV0dXJuIGxpbmVhclJvdGF0b3I7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZmlsdGVycy9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3JvdGF0b3IuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcmNDb25zdHJ1Y3RvcjtcblxudmFyIF9hbmdsZV90b19yYWRpYW5zID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXJjQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2RlZ3JlZXMnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcblxuICB2YXIgYXJjID0ge307XG5cbiAgYXJjLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgYXJjLmRlZ3JlZXMgPSBvcHRpb25zLmRlZ3JlZXM7XG4gIGFyYy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgYXJjLnR5cGUgPSAnYXJjJztcblxuICBhcmMuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmMuZ2V0UG9pbnQoMSk7XG4gIH07XG5cbiAgYXJjLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiBhcmMucmFkaXVzICogKGFyYy5kZWdyZWVzIC8gMzYwKTtcbiAgfTtcblxuICBhcmMuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgb3JpZ2luID0geyB4OiAwLCB5OiBhcmMuc3RhcnQueSArIGFyYy5yYWRpdXMgfTtcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IGFyYy5kZWdyZWVzICogcHJvZ3Jlc3M7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9yaWdpbi54ICsgYXJjLnJhZGl1cyAqIE1hdGguc2luKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGFydE9mRGVncmVlcykpLFxuICAgICAgeTogb3JpZ2luLnkgKyBhcmMucmFkaXVzICogLU1hdGguY29zKCgwLCBfYW5nbGVfdG9fcmFkaWFuczIuZGVmYXVsdCkocGFydE9mRGVncmVlcykpXG4gICAgfTtcbiAgfTtcblxuICBhcmMuZ2V0UGFydFBhdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IGFyYy5kZWdyZWVzICogcHJvZ3Jlc3M7XG4gICAgcmV0dXJuIGFyY0NvbnN0cnVjdG9yKHsgc3RhcnQ6IGFyYy5zdGFydCwgZGVncmVlczogcGFydE9mRGVncmVlcywgcmFkaXVzOiBhcmMucmFkaXVzIH0pO1xuICB9O1xuXG4gIHJldHVybiBhcmM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcmMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdGFydCcsIGZhbHNlLCB7IHg6IDAsIHk6IDAgfSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnZW5kJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY3BvaW50MScsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2Nwb2ludDInLCBmYWxzZSk7XG5cbiAgdmFyIGJlemllckN1cnZlID0ge307XG4gIGJlemllckN1cnZlLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcbiAgYmV6aWVyQ3VydmUuZW5kID0gb3B0aW9ucy5lbmQ7XG4gIGJlemllckN1cnZlLmNwb2ludDEgPSBvcHRpb25zLmNwb2ludDE7XG4gIGJlemllckN1cnZlLmNwb2ludDIgPSBvcHRpb25zLmNwb2ludDI7XG4gIGJlemllckN1cnZlLnR5cGUgPSAnYmV6aWVyX2N1cnZlJztcblxuICBpZiAoYmV6aWVyQ3VydmUuY3BvaW50Mikge1xuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IF9iZXppZXJKczIuZGVmYXVsdChiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuY3BvaW50MiwgYmV6aWVyQ3VydmUuZW5kKTtcbiAgfSBlbHNlIHtcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBfYmV6aWVySnMyLmRlZmF1bHQoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmVuZCk7XG4gIH1cblxuICBiZXppZXJDdXJ2ZS5zdWJQYXRocyA9IFtiZXppZXJDdXJ2ZV07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5lbmQ7XG4gIH07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5sZW5ndGgoKTtcbiAgfTtcblxuICBiZXppZXJDdXJ2ZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5nZXQocHJvZ3Jlc3MpO1xuICB9O1xuXG4gIC8vVE9ETyBBZGQgZ2V0IHBhcnQgcGF0aCBmdW5jdGlvblxuXG4gIHJldHVybiBiZXppZXJDdXJ2ZTtcbn07XG5cbnZhciBfYmV6aWVySnMgPSByZXF1aXJlKCdiZXppZXItanMnKTtcblxudmFyIF9iZXppZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJKcyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllcl9jdXJ2ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxpbmVDb25zdHJ1Y3RvcjtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2dlb21ldHJ5L3RvX3ZlY3RvcicpO1xuXG52YXIgX3RvX3ZlY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90b192ZWN0b3IpO1xuXG52YXIgX2Rpc3RhbmNlID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBsaW5lQ29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwgeyB4OiAwLCB5OiAwIH0pO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xuXG4gIHZhciBsaW5lID0ge307XG4gIGxpbmUuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICBsaW5lLmVuZCA9IG9wdGlvbnMuZW5kO1xuICBsaW5lLnR5cGUgPSAnbGluZSc7XG5cbiAgbGluZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxpbmUuZW5kO1xuICB9O1xuXG4gIGxpbmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkobGluZS5zdGFydCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KShsaW5lLmVuZCkpO1xuICB9O1xuXG4gIGxpbmUuZ2V0UG9pbnQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogbGluZS5zdGFydC54ICsgKGxpbmUuZW5kLnggLSBsaW5lLnN0YXJ0LngpICogcHJvZ3Jlc3MsXG4gICAgICB5OiBsaW5lLnN0YXJ0LnkgKyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSkgKiBwcm9ncmVzc1xuICAgIH07XG4gIH07XG5cbiAgbGluZS5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBuZXdFbmQgPSB7IHg6IGxpbmUuZW5kLnggKiBwcm9ncmVzcywgeTogbGluZS5lbmQueSAqIHByb2dyZXNzIH07XG4gICAgdmFyIHBhdGhQYXJ0ID0gbGluZUNvbnN0cnVjdG9yKHsgc3RhcnQ6IGxpbmUuc3RhcnQsIGVuZDogbmV3RW5kIH0pO1xuICAgIHJldHVybiBwYXRoUGFydDtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwYXRoQ29uc3RydWN0b3I7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvYWRkX3VwX3BvaW50cycpO1xuXG52YXIgX2FkZF91cF9wb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkX3VwX3BvaW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHBhdGhDb25zdHJ1Y3RvcigpIHtcblxuICB2YXIgcGF0aCA9IHt9O1xuXG4gIHBhdGguc3ViUGF0aHMgPSBbXTtcblxuICBwYXRoLmdldEVkZ2VQb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVkZ2VQb2ludHMgPSBbXTtcbiAgICBlZGdlUG9pbnRzLnB1c2goeyB4OiAwLCB5OiAwIH0pO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBlZGdlUG9pbnRzLnB1c2goKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShlZGdlUG9pbnRzW2VkZ2VQb2ludHMubGVuZ3RoIC0gMV0sIHN1YlBhdGguZ2V0RWRnZVBvaW50KCkpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWRnZVBvaW50cztcbiAgfTtcblxuICBwYXRoLmdldFN0YXJ0UG9pbnRPZiA9IGZ1bmN0aW9uIChzdWJQYXRoKSB7XG4gICAgdmFyIHN0YXJ0UG9pbnQgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IHBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDI7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSAoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQYXRoID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgIGlmIChjdXJyZW50UGF0aCA9PT0gc3ViUGF0aCkge1xuICAgICAgICAgIHJldHVybiBzdGFydFBvaW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXJ0UG9pbnQgPSAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKHN0YXJ0UG9pbnQsIGN1cnJlbnRQYXRoLmdldEVkZ2VQb2ludCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IyID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yMiA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiAmJiBfaXRlcmF0b3IyLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcGF0aC5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBsZW5ndGhQb2ludCA9IHByb2dyZXNzICogcGF0aC5nZXRMZW5ndGgoKTtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjMgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IzID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBwYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXAzOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gKF9zdGVwMyA9IF9pdGVyYXRvcjMubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSB0cnVlKSB7XG4gICAgICAgIHZhciBzdWJQYXRoID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgIGlmIChsZW5ndGhQb2ludCA+IHN1YlBhdGguZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgICBsZW5ndGhQb2ludCAtPSBzdWJQYXRoLmdldExlbmd0aCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKHN1YlBhdGguZ2V0UG9pbnQobGVuZ3RoUG9pbnQgLyBzdWJQYXRoLmdldExlbmd0aCgpKSwgcGF0aC5nZXRTdGFydFBvaW50T2Yoc3ViUGF0aCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjMucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMy5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXRoLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvcjQgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3I0ID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjQgPSBwYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA0OyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ID0gKF9zdGVwNCA9IF9pdGVyYXRvcjQubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSB0cnVlKSB7XG4gICAgICAgIHZhciBzdWJQYXRoID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICAgIGxlbmd0aCArPSBzdWJQYXRoLmdldExlbmd0aCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3I0ID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yNCA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCAmJiBfaXRlcmF0b3I0LnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvcjQucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjQpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9O1xuXG4gIHBhdGguZ2V0UGFydFBhdGggPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgbmV3U3ViUGF0aHMgPSBbXTtcbiAgICB2YXIgbGVuZ3RoUG9pbnQgPSBwcm9ncmVzcyAqIHBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgdmFyIHN1YlBhdGhzUmV0cmlldmVkID0gZmFsc2U7XG4gICAgdmFyIGN1cnJlbnRQYXRoID0gMDtcblxuICAgIHdoaWxlICghc3ViUGF0aHNSZXRyaWV2ZWQpIHtcbiAgICAgIGlmIChsZW5ndGhQb2ludCA+IHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSB7XG4gICAgICAgIGxlbmd0aFBvaW50IC09IHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpO1xuICAgICAgICBuZXdTdWJQYXRocy5wdXNoKHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldFBhcnRQYXRoKDEpKTtcbiAgICAgICAgY3VycmVudFBhdGggPSBjdXJyZW50UGF0aCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTdWJQYXRocy5wdXNoKHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldFBhcnRQYXRoKGxlbmd0aFBvaW50IC8gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpKTtcbiAgICAgICAgc3ViUGF0aHNSZXRyaWV2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwYXJ0UGF0aCA9IHBhdGhDb25zdHJ1Y3RvcigpO1xuICAgIHBhcnRQYXRoLnN1YlBhdGhzID0gbmV3U3ViUGF0aHM7XG4gICAgcmV0dXJuIHBhcnRQYXRoO1xuICB9O1xuXG4gIHJldHVybiBwYXRoO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hcmMgPSByZXF1aXJlKCcuL2FyYycpO1xuXG52YXIgX2FyYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcmMpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2xpbmUnKTtcblxudmFyIF9saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmUpO1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZSA9IHJlcXVpcmUoJy4vYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYXJjOiBfYXJjMi5kZWZhdWx0LFxuICBsaW5lOiBfbGluZTIuZGVmYXVsdCxcbiAgcGF0aDogX3BhdGgyLmRlZmF1bHQsXG4gIGJlemllckN1cnZlOiBfYmV6aWVyX2N1cnZlMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aHMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcblxuICB2YXIgY2lyY2xlID0ge307XG4gIGNpcmNsZS5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcblxuICBjaXJjbGUucGF0aCA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoKTtcbiAgY2lyY2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2FyYzIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAtY2lyY2xlLnJhZGl1cyB9LCBkZWdyZWVzOiAzNjAsIHJhZGl1czogY2lyY2xlLnJhZGl1cyB9KSk7XG5cbiAgcmV0dXJuIGNpcmNsZTtcbn07XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvZ2VvbWV0cnkvcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfYXJjID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lyY2xlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnd2lkdGgnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdoZWlnaHQnLCB0cnVlKTtcblxuICB2YXIgcmVjdGFuZ2xlID0ge307XG4gIHJlY3RhbmdsZS53aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gIHJlY3RhbmdsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcblxuICByZWN0YW5nbGUucGF0aCA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogcmVjdGFuZ2xlLndpZHRoLCB5OiAwIH0gfSkpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiByZWN0YW5nbGUuaGVpZ2h0IH0gfSkpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAtcmVjdGFuZ2xlLndpZHRoLCB5OiAwIH0gfSkpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAwLCB5OiAtcmVjdGFuZ2xlLmhlaWdodCB9IH0pKTtcblxuICByZXR1cm4gcmVjdGFuZ2xlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlY3RhbmdsZSA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlJyk7XG5cbnZhciBfcmVjdGFuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZSk7XG5cbnZhciBfc3F1YXJlID0gcmVxdWlyZSgnLi9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NpcmNsZScpO1xuXG52YXIgX2NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaXJjbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlY3RhbmdsZTogX3JlY3RhbmdsZTIuZGVmYXVsdCxcbiAgc3F1YXJlOiBfc3F1YXJlMi5kZWZhdWx0LFxuICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFwZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzaWRlbGVuZ3RoJywgdHJ1ZSk7XG5cbiAgdmFyIHNxdWFyZSA9IHt9O1xuICBzcXVhcmUuc2lkZWxlbmd0aCA9IG9wdGlvbnMuc2lkZWxlbmd0aDtcblxuICBzcXVhcmUucGF0aCA9ICgwLCBfcGF0aDIuZGVmYXVsdCkoKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgc3RhcnQ6IHsgeDogMCwgeTogMCB9LCBlbmQ6IHsgeDogc3F1YXJlLnNpZGVsZW5ndGgsIHk6IDAgfSB9KSk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IDAsIHk6IHNxdWFyZS5zaWRlbGVuZ3RoIH0gfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyBzdGFydDogeyB4OiAwLCB5OiAwIH0sIGVuZDogeyB4OiAtc3F1YXJlLnNpZGVsZW5ndGgsIHk6IDAgfSB9KSk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHN0YXJ0OiB7IHg6IDAsIHk6IDAgfSwgZW5kOiB7IHg6IDAsIHk6IC1zcXVhcmUuc2lkZWxlbmd0aCB9IH0pKTtcblxuICByZXR1cm4gc3F1YXJlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9nZW9tZXRyeS9wYXRocy9saW5lJyk7XG5cbnZhciBfbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBhZGRBbmltYXRpb246IGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihoYW5kbGUpIHtcbiAgICBjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcbiAgICBjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XG4gIH0sXG4gIHJlbW92ZUFuaW1hdGlvbjogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uKGhhbmRsZSkge1xuICAgIGNyZWF0ZWpzLlRpY2tlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0aWNrJywgaGFuZGxlKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvb3AuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfZmxhc2hlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZsYXNoZXInKTtcblxudmFyIF9mbGFzaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsYXNoZXIpO1xuXG52YXIgX2ZhZGVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL29wYWNpdHkvZmFkZXInKTtcblxudmFyIF9mYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWRlcik7XG5cbnZhciBfbGluZWFyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL3BvaW50MnBvaW50L2xpbmVhcicpO1xuXG52YXIgX2xpbmVhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXIpO1xuXG52YXIgX2xpbmVhcl9zaGFrZSA9IHJlcXVpcmUoJy4vZmlsdGVycy9tb3Zlci9wb2ludDJwb2ludC9saW5lYXJfc2hha2UnKTtcblxudmFyIF9saW5lYXJfc2hha2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3NoYWtlKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJy4vZmlsdGVycy9ncm91cC9ncm91cCcpO1xuXG52YXIgX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyb3VwKTtcblxudmFyIF9saW5lYXJfcm90YXRvciA9IHJlcXVpcmUoJy4vZmlsdGVycy9yb3RhdG9yL2xpbmVhcl9yb3RhdG9yJyk7XG5cbnZhciBfbGluZWFyX3JvdGF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3JvdGF0b3IpO1xuXG52YXIgX3JhbmRvbV9jb2xvcl9jaGFuZ2VyID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvY29sb3IvcmFuZG9tX2NvbG9yX2NoYW5nZXInKTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY29sb3JfY2hhbmdlcik7XG5cbnZhciBfY29sb3JfZmFkZXIgPSByZXF1aXJlKCcuL21vZGlmaWNhdG9ycy9jb2xvci9jb2xvcl9mYWRlcicpO1xuXG52YXIgX2NvbG9yX2ZhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yX2ZhZGVyKTtcblxudmFyIF9saW5lYXJfcHVsc2FyID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvc2NhbGUvbGluZWFyX3B1bHNhcicpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3B1bHNhcik7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9zaGFwZXMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3NoYXBlcy9zaGFwZXMnKTtcblxudmFyIF9zaGFwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhcGVzKTtcblxudmFyIF9wYXRocyA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcGF0aHMvcGF0aHMnKTtcblxudmFyIF9wYXRoczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRocyk7XG5cbnZhciBfcGF0aE1vdmVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL3BhdGgvcGF0aC1tb3ZlcicpO1xuXG52YXIgX3BhdGhNb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoTW92ZXIpO1xuXG52YXIgX2NvbXBvc2l0aW9ucyA9IHJlcXVpcmUoJy4vY29tcG9zaXRpb25zL2NvbXBvc2l0aW9ucycpO1xuXG52YXIgX2NvbXBvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGlvbnMpO1xuXG52YXIgX3Byb3hpZXMgPSByZXF1aXJlKCcuL3Byb3hpZXMvcHJveGllcycpO1xuXG52YXIgX3Byb3hpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJveGllcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vVE9ETyBPcmdhbml6ZSBpbXBvcnRzXG5cbmZ1bmN0aW9uIGNyZWF0ZShjYW52YXNJZCkge1xuICB2YXIgbWFpbkNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0Lm1haW5Db250YWluZXIoY2FudmFzSWQpO1xuICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24obWFpbkNvbnRhaW5lci5zdGFnZSk7XG4gIHJldHVybiB7XG4gICAgdmVyc2lvbjogJzAuMC4xJyxcbiAgICBtYWluQ29udGFpbmVyOiBtYWluQ29udGFpbmVyLFxuICAgIGZhY3Rvcnk6IF9mYWN0b3J5Mi5kZWZhdWx0LFxuICAgIGxvb3A6IF9sb29wMi5kZWZhdWx0LFxuICAgIHV0aWxzOiB7XG4gICAgICByYW5kb21Db2xvcjogX3JhbmRvbUNvbG9yMi5kZWZhdWx0XG4gICAgfSxcbiAgICBnZW9tZXRyeToge1xuICAgICAgc2hhcGVzOiBfc2hhcGVzMi5kZWZhdWx0LFxuICAgICAgcGF0aHM6IF9wYXRoczIuZGVmYXVsdFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgb3BhY2l0eToge1xuICAgICAgICBmbGFzaGVyOiBfZmxhc2hlcjIuZGVmYXVsdCxcbiAgICAgICAgZmFkZXI6IF9mYWRlcjIuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgIG1vdmVyOiB7XG4gICAgICAgIHBvaW50MnBvaW50OiB7XG4gICAgICAgICAgbGluZWFyOiBfbGluZWFyMi5kZWZhdWx0LFxuICAgICAgICAgIGxpbmVhclNoYWtlOiBfbGluZWFyX3NoYWtlMi5kZWZhdWx0XG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICBwYXRoTW92ZXI6IF9wYXRoTW92ZXIyLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdyb3VwOiBfZ3JvdXAyLmRlZmF1bHQsXG4gICAgICByb3RhdG9yOiB7XG4gICAgICAgIGxpbmVhclJvdGF0b3I6IF9saW5lYXJfcm90YXRvcjIuZGVmYXVsdFxuICAgICAgfVxuICAgIH0sXG4gICAgbW9kaWZpY2F0b3JzOiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICByYW5kb21Db2xvckNoYW5nZXI6IF9yYW5kb21fY29sb3JfY2hhbmdlcjIuZGVmYXVsdCxcbiAgICAgICAgY29sb3JGYWRlcjogX2NvbG9yX2ZhZGVyMi5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgc2NhbGU6IHtcbiAgICAgICAgbGluZWFyUHVsc2FyOiBfbGluZWFyX3B1bHNhcjIuZGVmYXVsdFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9zaXRpb25zOiBfY29tcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHByb3hpZXM6IF9wcm94aWVzMi5kZWZhdWx0XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3ViamVjdCcsIHRydWUpO1xuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NwZWVkJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3IxJywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnY29sb3IyJywgdHJ1ZSk7XG5cbiAgdmFyIGNvbG9yRmFkZXIgPSB7fTtcbiAgY29sb3JGYWRlci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuICBjb2xvckZhZGVyLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcbiAgY29sb3JGYWRlci5jb2xvcjEgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShvcHRpb25zLmNvbG9yMSk7XG4gIGNvbG9yRmFkZXIuY29sb3IyID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkob3B0aW9ucy5jb2xvcjIpO1xuICBjb2xvckZhZGVyLmN1cnJlbnRDb2xvciA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKG9wdGlvbnMuY29sb3IxKTtcbiAgY29sb3JGYWRlci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoY29sb3JGYWRlci5zcGVlZCwgMC41KTtcblxuICBjb2xvckZhZGVyLmNvbG9yUmFuZ2UgPSB7XG4gICAgcjogY29sb3JGYWRlci5jb2xvcjIucmVkKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5yZWQoKSxcbiAgICBnOiBjb2xvckZhZGVyLmNvbG9yMi5ncmVlbigpIC0gY29sb3JGYWRlci5jb2xvcjEuZ3JlZW4oKSxcbiAgICBiOiBjb2xvckZhZGVyLmNvbG9yMi5ibHVlKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ibHVlKClcbiAgfTtcblxuICBjb2xvckZhZGVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbG9yRmFkZXIucHVsc2FyLnN0YXJ0KGNvbG9yRmFkZXIuaGFuZGxlKTtcbiAgfTtcblxuICBjb2xvckZhZGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29sb3JGYWRlci5wdWxzYXIuc3RvcCgpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBjb2xvckZhZGVyLmN1cnJlbnRDb2xvci5yZWQoY29sb3JGYWRlci5jb2xvcjEucmVkKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLnIpO1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLmdyZWVuKGNvbG9yRmFkZXIuY29sb3IxLmdyZWVuKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLmcpO1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLmJsdWUoY29sb3JGYWRlci5jb2xvcjEuYmx1ZSgpICsgY3VycmVudCAqIGNvbG9yRmFkZXIuY29sb3JSYW5nZS5iKTtcbiAgICAoMCwgX3NldF9wcm9wMi5kZWZhdWx0KShjb2xvckZhZGVyLnN1YmplY3QsICdjb2xvcicsIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLnJnYlN0cmluZygpKTtcbiAgICBjb2xvckZhZGVyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBjb2xvckZhZGVyO1xufTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJ2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xvcl9mYWRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3N1YmplY3QnLCB0cnVlKTtcblxuICB2YXIgcmFuZG9tQ29sb3JDaGFuZ2VyID0ge307XG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5zdWJqZWN0ID0gb3B0aW9ucy5zdWJqZWN0O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHJhbmRvbUNvbG9yQ2hhbmdlci5oYW5kbGUpO1xuICB9O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkocmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QsICdjb2xvcicsICgwLCBfcmFuZG9tQ29sb3IyLmRlZmF1bHQpKCkpO1xuICAgIHJhbmRvbUNvbG9yQ2hhbmdlci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcmFuZG9tQ29sb3JDaGFuZ2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9yYW5kb21Db2xvciA9IHJlcXVpcmUoJ3JhbmRvbUNvbG9yJyk7XG5cbnZhciBfcmFuZG9tQ29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tQ29sb3IpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbnZhciBfc2V0X3Byb3AgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL3NldF9wcm9wJyk7XG5cbnZhciBfc2V0X3Byb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0X3Byb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX2NvbG9yX2NoYW5nZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdzdWJqZWN0JywgdHJ1ZSk7XG4gICgwLCBfY2hlY2tfcGFyYW1ldGVyMi5kZWZhdWx0KShvcHRpb25zLCAnc3BlZWQnLCB0cnVlKTtcbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdsaW1pdCcsIHRydWUpO1xuXG4gIHZhciBsaW5lYXJQdWxzYXIgPSB7fTtcbiAgbGluZWFyUHVsc2FyLnN1YmplY3QgPSBvcHRpb25zLnN1YmplY3Q7XG4gIGxpbmVhclB1bHNhci5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gIGxpbmVhclB1bHNhci5saW1pdCA9IG9wdGlvbnMubGltaXQ7XG4gIGxpbmVhclB1bHNhci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcC5wdWxzYXJUcmFuc2l0aW9uKShsaW5lYXJQdWxzYXIuc3BlZWQpO1xuXG4gIGxpbmVhclB1bHNhci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0YXJ0KGxpbmVhclB1bHNhci5oYW5kbGUpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIGxpbmVhclB1bHNhci5wdWxzYXIuc3RvcCgpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICgwLCBfc2V0X3Byb3AyLmRlZmF1bHQpKGxpbmVhclB1bHNhci5zdWJqZWN0LCAnc2NhbGUnLCAxICsgY3VycmVudCAqIGxpbmVhclB1bHNhci5saW1pdCk7XG4gICAgbGluZWFyUHVsc2FyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQdWxzYXI7XG59O1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyID0gcmVxdWlyZSgnRzovU3RldmVuL1Byb2pla3RlL3pBbmltYXRvci9hcHAvc2NyaXB0cy9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2hlY2tfcGFyYW1ldGVyKTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXJfcHVsc2FyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm94eSA9IHt9O1xuICBwcm94eS5ncm91cCA9IFtdO1xuXG4gIHByb3h5LmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHByb3h5Lmdyb3VwLnB1c2goZWxlbWVudCk7XG4gIH07XG5cbiAgcHJveHkucmVtb3ZlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcHJveHkuZ3JvdXAuc3BsaWNlKHByb3h5Lmdyb3VwLmluZGV4T2YoZWxlbWVudCksIDEpO1xuICB9O1xuXG4gIHByb3h5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwcm94eS5ncm91cFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBlbGVtZW50LmRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgKDAsIF9zZXRfcHJvcDIuZGVmYXVsdCkoZWxlbWVudCwgcHJvcGVydHksIHZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIHByb3h5O1xufTtcblxudmFyIF9zZXRfcHJvcCA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvc2V0X3Byb3AnKTtcblxudmFyIF9zZXRfcHJvcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRfcHJvcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJveHkgPSAoMCwgX2Fic3RyYWN0X3Byb3h5Mi5kZWZhdWx0KSgpO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHByb3h5Lmdyb3VwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgb2JqID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQob2JqLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdF9wcm94eS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAoMCwgX2NoZWNrX3BhcmFtZXRlcjIuZGVmYXVsdCkob3B0aW9ucywgJ3NodWZmbGUnLCBmYWxzZSwgZmFsc2UpO1xuXG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG4gIHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXggPSAwO1xuXG4gIHByb3h5LnNldFByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAocHJveHkuc2h1ZmZsZSAmJiBwcm94eS5jdXJyZW50RWxlbWVudEluZGV4ID09PSAwKSB7XG4gICAgICBwcm94eS5zaHVmZmxlR3JvdXAoKTtcbiAgICB9XG4gICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQocHJveHkuZ3JvdXBbcHJveHkuY3VycmVudEVsZW1lbnRJbmRleF0sIG5hbWUsIHZhbHVlKTtcblxuICAgIHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXgrKztcbiAgICBpZiAocHJveHkuY3VycmVudEVsZW1lbnRJbmRleCA+PSBwcm94eS5ncm91cC5sZW5ndGgpIHtcbiAgICAgIHByb3h5LmN1cnJlbnRFbGVtZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfTtcblxuICBwcm94eS5zaHVmZmxlR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9UT0RPIGltcGxlbWVudCBzaHVmZmxlIGFsZ29yaXRobVxuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlciA9IHJlcXVpcmUoJ0c6L1N0ZXZlbi9Qcm9qZWt0ZS96QW5pbWF0b3IvYXBwL3NjcmlwdHMvaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJyk7XG5cbnZhciBfY2hlY2tfcGFyYW1ldGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NoZWNrX3BhcmFtZXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmNyZW1lbnRfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgKDAsIF9jaGVja19wYXJhbWV0ZXIyLmRlZmF1bHQpKG9wdGlvbnMsICdpbnRlcnZhbCcsIHRydWUpO1xuXG4gIHZhciBwcm94eSA9ICgwLCBfYWJzdHJhY3RfcHJveHkyLmRlZmF1bHQpKCk7XG4gIHByb3h5LmludGVydmFsID0gb3B0aW9ucy5pbnRlcnZhbDtcbiAgcHJveHkudGltZXIgPSAoMCwgX2ludGVydmFsX3RpbWVyMi5kZWZhdWx0KShwcm94eS5pbnRlcnZhbCk7XG5cbiAgcHJveHkuc2V0UHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBwID0gKDAsIF9pbmNyZW1lbnRfcHJveHkyLmRlZmF1bHQpKHt9KTtcbiAgICBwLmdyb3VwID0gcHJveHkuZ3JvdXA7XG4gICAgdmFyIGNoYW5nZVByb3BDYWxsYmFjayA9IGZ1bmN0aW9uIGNoYW5nZVByb3BDYWxsYmFjaygpIHtcbiAgICAgIHAuc2V0UHJvcChuYW1lLCB2YWx1ZSk7XG4gICAgICBwLmRyYXcoKTtcbiAgICAgIGlmIChwLmN1cnJlbnRFbGVtZW50SW5kZXggPT09IDApIHtcbiAgICAgICAgcHJveHkudGltZXIucmVtb3ZlTGlzdGVuZXIoY2hhbmdlUHJvcENhbGxiYWNrKTtcbiAgICAgICAgcC5ncm91cCA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICBwcm94eS50aW1lci5hZGRMaXN0ZW5lcihjaGFuZ2VQcm9wQ2FsbGJhY2spO1xuICB9O1xuXG4gIHByb3h5LnRpbWVyLnN0YXJ0KCk7XG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfaW50ZXJ2YWxfdGltZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL3RpbWVycy9pbnRlcnZhbF90aW1lcicpO1xuXG52YXIgX2ludGVydmFsX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludGVydmFsX3RpbWVyKTtcblxudmFyIF9jaGVja19wYXJhbWV0ZXIgPSByZXF1aXJlKCdHOi9TdGV2ZW4vUHJvamVrdGUvekFuaW1hdG9yL2FwcC9zY3JpcHRzL2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcicpO1xuXG52YXIgX2NoZWNrX3BhcmFtZXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja19wYXJhbWV0ZXIpO1xuXG52YXIgX2luY3JlbWVudF9wcm94eSA9IHJlcXVpcmUoJy4vaW5jcmVtZW50X3Byb3h5Jyk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luY3JlbWVudF9wcm94eSk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJ2YWxfcHJveHkuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZGVmYXVsdF9wcm94eSA9IHJlcXVpcmUoJy4vZGVmYXVsdF9wcm94eScpO1xuXG52YXIgX2RlZmF1bHRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdF9wcm94eSk7XG5cbnZhciBfaW5jcmVtZW50X3Byb3h5ID0gcmVxdWlyZSgnLi9pbmNyZW1lbnRfcHJveHknKTtcblxudmFyIF9pbmNyZW1lbnRfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5jcmVtZW50X3Byb3h5KTtcblxudmFyIF9pbnRlcnZhbF9wcm94eSA9IHJlcXVpcmUoJy4vaW50ZXJ2YWxfcHJveHknKTtcblxudmFyIF9pbnRlcnZhbF9wcm94eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnRlcnZhbF9wcm94eSk7XG5cbnZhciBfcmFuZG9tX3Byb3h5ID0gcmVxdWlyZSgnLi9yYW5kb21fcHJveHknKTtcblxudmFyIF9yYW5kb21fcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3Byb3h5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJveHk6IF9kZWZhdWx0X3Byb3h5Mi5kZWZhdWx0LFxuICBpbmNyZW1lbnRQcm94eTogX2luY3JlbWVudF9wcm94eTIuZGVmYXVsdCxcbiAgaW50ZXJ2YWxQcm94eTogX2ludGVydmFsX3Byb3h5Mi5kZWZhdWx0LFxuICByYW5kb21Qcm94eTogX3JhbmRvbV9wcm94eTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3hpZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3h5ID0gKDAsIF9hYnN0cmFjdF9wcm94eTIuZGVmYXVsdCkoKTtcblxuICBwcm94eS5zZXRQcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHJhbmRvbUVsZW1lbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHByb3h5Lmdyb3VwLmxlbmd0aCk7XG4gICAgcHJveHkuX3NldFByb3BPZkVsZW1lbnQocHJveHkuZ3JvdXBbcmFuZG9tRWxlbWVudEluZGV4XSwgbmFtZSwgdmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiBwcm94eTtcbn07XG5cbnZhciBfYWJzdHJhY3RfcHJveHkgPSByZXF1aXJlKCcuL2Fic3RyYWN0X3Byb3h5Jyk7XG5cbnZhciBfYWJzdHJhY3RfcHJveHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfcHJveHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3Byb3h5LmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHZhciBjb21wb25lbnQgPSB7fTtcclxuICAgICAgY29tcG9uZW50LnZpZXcgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcclxuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcclxuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4vYWJzdHJhY3RfY29tcG9uZW50JztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NpcmNsZVNoYXBlJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG5cclxuICAgICAgdmFyIGNpcmNsZSA9IGFic3RyYWN0Q29tcG9uZW50KCk7XHJcbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IG9wdGlvbnMuY2lyY2xlU2hhcGU7XHJcbiAgICAgIGNpcmNsZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcblxyXG4gICAgICBjaXJjbGUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjaXJjbGUudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgY2lyY2xlLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKGNpcmNsZS5jb2xvcikuZHJhd0NpcmNsZSgwLCAwLCBjaXJjbGUuY2lyY2xlU2hhcGUucmFkaXVzICogY2lyY2xlLnNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNpcmNsZS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBjaXJjbGU7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gbmV3IGNyZWF0ZWpzLkNvbnRhaW5lcigpO1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdENvbXBvbmVudCBmcm9tICcuL2Fic3RyYWN0X2NvbXBvbmVudCc7XHJcbmltcG9ydCBwYXRoRHJhd2VyIGZyb20gJy4vaGVscGVyL3BhdGhfZHJhd2VyJztcclxuaW1wb3J0IGFkZFVwUG9pbnRzIGZyb20gJ34vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cyc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XHJcblxyXG4gIHZhciBjdXN0b20gPSBhYnN0cmFjdENvbXBvbmVudCgpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjdXN0b21TaGFwZScsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG4gIGN1c3RvbS5jdXN0b21TaGFwZSA9IG9wdGlvbnMuY3VzdG9tU2hhcGU7XHJcbiAgY3VzdG9tLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuXHJcbiAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgIGN1c3RvbS52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICBjdXN0b20udmlldy5ncmFwaGljcy5iZWdpbkZpbGwoY3VzdG9tLmNvbG9yKS5iZWdpblN0cm9rZSgnIzAwRicpLm1vdmVUbygwLCAwKTtcclxuICAgIHZhciBjdXJyZW50ID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwXHJcbiAgICB9O1xyXG4gICAgdmFyIGkgPSAxO1xyXG4gICAgZm9yICh2YXIgcGF0aCBvZiBjdXN0b20uY3VzdG9tU2hhcGUucGF0aC5zdWJQYXRocykge1xyXG4gICAgICBwYXRoRHJhd2VyW3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xyXG4gICAgICBjdXJyZW50ID0gYWRkVXBQb2ludHMoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjdXN0b20uZHJhdygpO1xyXG4gIHJldHVybiBjdXN0b207XHJcbn1cclxuIiwiaW1wb3J0IGFuZ2xlVG9SYWRpYW5zIGZyb20gJ34vZ2VvbWV0cnkvaGVscGVyL2FuZ2xlX3RvX3JhZGlhbnMnO1xyXG4vKmVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSovXHJcbmZ1bmN0aW9uIHBhdGhEcmF3ZXIoKXt9XHJcblxyXG5wYXRoRHJhd2VyLmxpbmUgPSBmdW5jdGlvbihncmFwaGljcywgcGF0aCwgY3VycmVudCl7XHJcbiAgZ3JhcGhpY3MubGluZVRvKGN1cnJlbnQueCArIHBhdGguZ2V0RWRnZVBvaW50KCkueCwgY3VycmVudC55ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS55KTtcclxufTtcclxuXHJcbnBhdGhEcmF3ZXIuYXJjID0gZnVuY3Rpb24oZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpe1xyXG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XHJcbiAgZ3JhcGhpY3MuYXJjKHBhdGguc3RhcnQueCwgcGF0aC5zdGFydC55ICsgcGF0aC5yYWRpdXMsIHBhdGgucmFkaXVzLCBhbmdsZVRvUmFkaWFucygtOTApLCBhbmdsZVRvUmFkaWFucyhwYXRoLmRlZ3JlZXMgLSA5MCkpO1xyXG59O1xyXG5cclxucGF0aERyYXdlci5zaW5lX3dhdmUgPSBmdW5jdGlvbihncmFwaGljcywgcGF0aCwgY3VycmVudCl7XHJcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcclxuICBmb3IodmFyIHggPSAwOyB4IDwgcGF0aC5nZXRMZW5ndGgoKTsgeCArPSA1KXtcclxuICAgIHZhciBwb2ludCA9IHBhdGguZ2V0UG9pbnQoeCAvIHBhdGguZ2V0TGVuZ3RoKCkpO1xyXG4gICAgZ3JhcGhpY3MubGluZVRvKHBvaW50LngsIHBvaW50LnkpO1xyXG4gIH1cclxufTtcclxuXHJcbnBhdGhEcmF3ZXIuYmV6aWVyX2N1cnZlID0gZnVuY3Rpb24oZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpe1xyXG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XHJcbiAgaWYocGF0aC5jcG9pbnQyKXtcclxuICAgIGdyYXBoaWNzLmJlemllckN1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmNwb2ludDIueCwgcGF0aC5jcG9pbnQyLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xyXG4gIH1lbHNle1xyXG4gICAgZ3JhcGhpY3MucXVhZHJhdGljQ3VydmVUbyhwYXRoLmNwb2ludDEueCwgcGF0aC5jcG9pbnQxLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhdGhEcmF3ZXI7XHJcbiIsImltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc291cmNlJywgdHJ1ZSk7XHJcblxyXG4gIHZhciBpbWFnZSA9IHtcclxuICAgIHZpZXc6IG5ldyBjcmVhdGVqcy5CaXRtYXAob3B0aW9ucy5zb3VyY2UpLFxyXG4gICAgc2NhbGU6IDAuNVxyXG4gIH07XHJcblxyXG4gIGltYWdlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgIGltYWdlLnZpZXcuc2NhbGVYID0gaW1hZ2Uuc2NhbGU7XHJcbiAgICBpbWFnZS52aWV3LnNjYWxlWSA9IGltYWdlLnNjYWxlO1xyXG4gIH07XHJcblxyXG4gIGltYWdlLmRyYXcoKTtcclxuICByZXR1cm4gaW1hZ2U7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4vYWJzdHJhY3RfY29tcG9uZW50JztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgICB2YXIgbGluZSA9IGFic3RyYWN0Q29tcG9uZW50KCk7XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnbGluZVBhdGgnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3RoaWNrbmVzcycsIGZhbHNlLCAxKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcblxyXG4gICAgICBsaW5lLnBhdGggPSBvcHRpb25zLmxpbmVQYXRoO1xyXG4gICAgICBsaW5lLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcclxuICAgICAgbGluZS50aGlja25lc3MgPSBvcHRpb25zLnRoaWNrbmVzcztcclxuXHJcbiAgICAgIGxpbmUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBsaW5lLnZpZXcuZ3JhcGhpY3NcclxuICAgICAgICAgICAgLmJlZ2luU3Ryb2tlKGxpbmUuY29sb3IpXHJcbiAgICAgICAgICAgIC5zZXRTdHJva2VTdHlsZShsaW5lLnRoaWNrbmVzcyAqIGxpbmUuc2NhbGUpXHJcbiAgICAgICAgICAgIC5tb3ZlVG8obGluZS5wYXRoLnN0YXJ0LnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguc3RhcnQueSAqIGxpbmUuc2NhbGUpXHJcbiAgICAgICAgICAgIC5saW5lVG8obGluZS5wYXRoLmVuZC54ICogbGluZS5zY2FsZSwgbGluZS5wYXRoLmVuZC55ICogbGluZS5zY2FsZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsaW5lLmRyYXcoKTtcclxuICAgICAgcmV0dXJuIGxpbmU7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaWQpIHtcclxuICAgIHZhciBzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShpZCk7XHJcblxyXG4gICAgdmFyIGNvbnRhaW5lciA9IHt9O1xyXG5cclxuICAgIGNvbnRhaW5lci5hZGQgPSBmdW5jdGlvbihjaGlsZCl7XHJcbiAgICAgIHN0YWdlLmFkZENoaWxkKGNoaWxkLnZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIucmVtb3ZlID0gZnVuY3Rpb24oY2hpbGQpe1xyXG4gICAgICBzdGFnZS5yZW1vdmVDaGlsZChjaGlsZC52aWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLnJlbW92ZUFsbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgIHN0YWdlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5zdGFnZSA9IHN0YWdlO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4vYWJzdHJhY3RfY29tcG9uZW50JztcclxuaW1wb3J0IHBhdGhEcmF3ZXIgZnJvbSAnLi9oZWxwZXIvcGF0aF9kcmF3ZXInO1xyXG5pbXBvcnQgYWRkVXBQb2ludHMgZnJvbSAnfi9nZW9tZXRyeS9hZGRfdXBfcG9pbnRzJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG4gICAgICBpZighb3B0aW9ucyl7XHJcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAncGF0aCcsIHRydWUpO1xyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnY29sb3InLCBmYWxzZSwgJyMwMDAnKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3dpZHRoJywgZmFsc2UsIDEpO1xyXG5cclxuICAgICAgdmFyIGN1c3RvbSA9IGFic3RyYWN0Q29tcG9uZW50KCk7XHJcbiAgICAgIGN1c3RvbS5jb21wbGV0ZVBhdGggPSBvcHRpb25zLnBhdGg7XHJcbiAgICAgIGN1c3RvbS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcbiAgICAgIGN1c3RvbS53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcblxyXG4gICAgICBjdXN0b20uZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjdXN0b20udmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuYmVnaW5TdHJva2UoY3VzdG9tLmNvbG9yKS5zZXRTdHJva2VTdHlsZShjdXN0b20ud2lkdGgpLm1vdmVUbygwLCAwKTtcclxuICAgICAgICAgIHZhciBjdXJyZW50ID0ge3g6IDAsIHk6IDB9O1xyXG4gICAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgICAgZm9yKHZhciBwYXRoIG9mIGN1c3RvbS5jb21wbGV0ZVBhdGguc3ViUGF0aHMpe1xyXG4gICAgICAgICAgICBwYXRoRHJhd2VyW3BhdGgudHlwZV0oY3VzdG9tLnZpZXcuZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpO1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gYWRkVXBQb2ludHMoY3VycmVudCwgcGF0aC5nZXRFZGdlUG9pbnQoKSk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGN1c3RvbS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBjdXN0b207XHJcbn1cclxuIiwiaW1wb3J0IGFic3RyYWN0Q29tcG9uZW50IGZyb20gJy4vYWJzdHJhY3RfY29tcG9uZW50JztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3JlY3RhbmdsZVNoYXBlJywgdHJ1ZSk7XHJcbiAgICAgIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjb2xvcicsIGZhbHNlLCAnIzAwMCcpO1xyXG5cclxuICAgICAgdmFyIHJlY3QgPSBhYnN0cmFjdENvbXBvbmVudCgpO1xyXG4gICAgICByZWN0LndpZHRoID0gb3B0aW9ucy5yZWN0YW5nbGVTaGFwZS53aWR0aDtcclxuICAgICAgcmVjdC5oZWlnaHQgPSBvcHRpb25zLnJlY3RhbmdsZVNoYXBlLmhlaWdodDtcclxuICAgICAgcmVjdC5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcblxyXG4gICAgICByZWN0LmRyYXcgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgcmVjdC52aWV3LmdyYXBoaWNzLmNsZWFyKCk7XHJcbiAgICAgICAgICByZWN0LnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHJlY3QuY29sb3IpLmRyYXdSZWN0KDAsIDAsIHJlY3Qud2lkdGggKiByZWN0LnNjYWxlLCByZWN0LmhlaWdodCAqIHJlY3Quc2NhbGUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVjdC5kcmF3KCk7XHJcbiAgICAgIHJldHVybiByZWN0O1xyXG59XHJcbiIsImltcG9ydCBhYnN0cmFjdENvbXBvbmVudCBmcm9tICcuL2Fic3RyYWN0X2NvbXBvbmVudCc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucyl7XHJcblxyXG4gICAgICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3F1YXJlU2hhcGUnLCB0cnVlKTtcclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2NvbG9yJywgZmFsc2UsICcjMDAwJyk7XHJcblxyXG4gICAgICB2YXIgc3F1YXJlID0gYWJzdHJhY3RDb21wb25lbnQoKTtcclxuICAgICAgc3F1YXJlLnNpZGVMZW5ndGggPSBvcHRpb25zLnNxdWFyZVNoYXBlLnNpZGVsZW5ndGg7XHJcbiAgICAgIHNxdWFyZS5jb2xvciA9IG9wdGlvbnMuY29sb3I7XHJcblxyXG4gICAgICBzcXVhcmUuZHJhdyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBzcXVhcmUudmlldy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgc3F1YXJlLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHNxdWFyZS5jb2xvcikuZHJhd1JlY3QoMCwgMCwgc3F1YXJlLnNpZGVMZW5ndGggKiBzcXVhcmUuc2NhbGUsIHNxdWFyZS5zaWRlTGVuZ3RoICogc3F1YXJlLnNjYWxlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNxdWFyZS5kcmF3KCk7XHJcbiAgICAgIHJldHVybiBzcXVhcmU7XHJcbn1cclxuIiwiaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpe1xyXG5cclxuICAgICAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3NvdXJjZScsIHRydWUpO1xyXG4gICAgICAvLyBJZiB0aGUgc291cmNlIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IHRvIGEgdmlkZW9cclxuICAgICAgaGFuZGxlVmlkZW9Tb3VyY2UoKTtcclxuXHJcbiAgICAgIHZhciB2aWRlbyA9IHtcclxuICAgICAgICB2aWV3OiBuZXcgY3JlYXRlanMuQml0bWFwKG9wdGlvbnMuc291cmNlKSxcclxuICAgICAgICBzY2FsZTogMC41XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5kcmF3ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB2aWRlby52aWV3LnNjYWxlWCA9IHZpZGVvLnNjYWxlO1xyXG4gICAgICAgIHZpZGVvLnZpZXcuc2NhbGVZID0gdmlkZW8uc2NhbGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5wbGF5ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBvcHRpb25zLnNvdXJjZS5wbGF5KCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2aWRlby5zdG9wID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xyXG4gICAgICAgIG9wdGlvbnMuc291cmNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZpZGVvLnBhdXNlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBvcHRpb25zLnNvdXJjZS5wYXVzZSgpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gaGFuZGxlVmlkZW9Tb3VyY2UoKXtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc291cmNlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NvdXJjZScpO1xyXG4gICAgICAgICAgc291cmNlLnNldEF0dHJpYnV0ZSgnc3JjJywgb3B0aW9ucy5zb3VyY2UpO1xyXG4gICAgICAgICAgdmFyIHZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XHJcbiAgICAgICAgICB2aWRlb0VsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcclxuICAgICAgICAgIG9wdGlvbnMuc291cmNlID0gdmlkZW9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmlkZW8uZHJhdygpO1xyXG4gICAgICByZXR1cm4gdmlkZW87XHJcbn1cclxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJztcclxuaW1wb3J0IFNxdWFyZSBmcm9tICcuL2NvbXBvbmVudHMvc3F1YXJlJztcclxuaW1wb3J0IENpcmNsZSBmcm9tICcuL2NvbXBvbmVudHMvY2lyY2xlJztcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2NvbXBvbmVudHMvcmVjdGFuZ2xlJztcclxuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJztcclxuaW1wb3J0IExpbmUgZnJvbSAnLi9jb21wb25lbnRzL2xpbmUnO1xyXG5pbXBvcnQgQ3VzdG9tT2JqZWN0IGZyb20gJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCBWaWRlbyBmcm9tICcuL2NvbXBvbmVudHMvdmlkZW8nO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL2NvbXBvbmVudHMvcGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdFxyXG57XHJcbiAgICBjb250YWluZXI6IENvbnRhaW5lcixcclxuICAgIHNxdWFyZTogU3F1YXJlLFxyXG4gICAgY2lyY2xlOiBDaXJjbGUsXHJcbiAgICByZWN0YW5nbGU6IFJlY3RhbmdsZSxcclxuICAgIGxpbmU6IExpbmUsXHJcbiAgICBjdXN0b21PYmplY3Q6IEN1c3RvbU9iamVjdCxcclxuICAgIG1haW5Db250YWluZXI6IE1haW5Db250YWluZXIsXHJcbiAgICBpbWFnZTogSW1hZ2UsXHJcbiAgICB2aWRlbzogVmlkZW8sXHJcbiAgICBwYXRoOiBQYXRoXHJcbn07XHJcbiIsImltcG9ydCBsb29wIGZyb20gJ34vbG9vcCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJ34vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICAgIHZhciBmaWx0ZXIgPSB7fTtcclxuXHJcbiAgICBmaWx0ZXIudmlldyA9IGZhY3RvcnkuY29udGFpbmVyKCk7XHJcblxyXG4gICAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xyXG4gICAgZnVuY3Rpb24gc3RhcnQoKXtcclxuICAgICAgbG9vcC5hZGRBbmltYXRpb24oZmlsdGVyLmhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RvcCgpe1xyXG4gICAgICBsb29wLnJlbW92ZUFuaW1hdGlvbihmaWx0ZXIuaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcclxuICAgIGZpbHRlci5zdG9wID0gc3RvcDtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvaW50MSwgcG9pbnQyKXtcclxuICB2YXIgcG9pbnQgPSB7fTtcclxuICBwb2ludC54ID0gcG9pbnQxLnggKyBwb2ludDIueDtcclxuICBwb2ludC55ID0gcG9pbnQxLnkgKyBwb2ludDIueTtcclxuICByZXR1cm4gcG9pbnQ7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmVjdG9yMSwgdmVjdG9yMil7XHJcbiAgaWYodmVjdG9yMS5sZW5ndGggIT09IHZlY3RvcjIubGVuZ3RoKXtcclxuICAgIHRocm93ICdDYW5ub3QgY2FsY3VsYXRlIGRpc3RhbmNlIG9mIHZlY3RvcnMgd2l0aCBkaWZmZXJlbnQgbnVtYmVycyBvZiBkaW1lbnNpb25zJztcclxuICB9XHJcbiAgdmFyIGRpc3RhbmNlID0gMDtcclxuICBmb3IodmFyIGkgPSAwOyBpIDwgdmVjdG9yMS5sZW5ndGg7IGkrKyl7XHJcbiAgICBkaXN0YW5jZSArPSBNYXRoLnBvdyh2ZWN0b3IxW2ldIC0gdmVjdG9yMltpXSwgMik7XHJcbiAgfVxyXG4gIHJldHVybiBNYXRoLnNxcnQoZGlzdGFuY2UpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFuZ2xlKXtcclxuICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwO1xyXG59XHJcbiIsImltcG9ydCBhbmdsZVRvUmFkaWFucyBmcm9tICcuL2FuZ2xlX3RvX3JhZGlhbnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYW5nbGUsIGxlbmd0aCl7XHJcbiAgdmFyIHJhZCA9IGFuZ2xlVG9SYWRpYW5zKGFuZ2xlKTtcclxuICByZXR1cm4geyB4OiBNYXRoLmNvcyhyYWQpICogbGVuZ3RoLCB5OiBNYXRoLnNpbihyYWQpICogbGVuZ3RofTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2ZWN0b3Ipe1xyXG4gICAgdmFyIG5vcm1hbGl6ZWRWZWN0b3IgPSBbXTtcclxuICAgIHZhciBzcXVhcmVTdW0gPSAwO1xyXG4gICAgZm9yKHZhciBlbnRyeSBvZiB2ZWN0b3Ipe1xyXG4gICAgICBzcXVhcmVTdW0gKz0gKGVudHJ5ICogZW50cnkpO1xyXG4gICAgfVxyXG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydChzcXVhcmVTdW0pO1xyXG5cclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB2ZWN0b3IubGVuZ3RoOyBpKyspe1xyXG4gICAgICBub3JtYWxpemVkVmVjdG9yW2ldID0gdmVjdG9yW2ldIC8gbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub3JtYWxpemVkVmVjdG9yO1xyXG59XHJcbiIsImltcG9ydCBhbmdsZVRvUmFkaWFucyBmcm9tICd+L2dlb21ldHJ5L2hlbHBlci9hbmdsZV90b19yYWRpYW5zJztcclxuaW1wb3J0IGNoZWNrUGFyYW1ldGVyIGZyb20gJ34vaW50ZXJuYWwvY2hlY2tfcGFyYW1ldGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFyY0NvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnc3RhcnQnLCBmYWxzZSwge3g6IDAsIHk6IDB9KTtcclxuICBjaGVja1BhcmFtZXRlcihvcHRpb25zLCAnZGVncmVlcycsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdyYWRpdXMnLCB0cnVlKTtcclxuXHJcbiAgdmFyIGFyYyA9IHt9O1xyXG5cclxuICBhcmMuc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xyXG4gIGFyYy5kZWdyZWVzID0gb3B0aW9ucy5kZWdyZWVzO1xyXG4gIGFyYy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcclxuICBhcmMudHlwZSA9ICdhcmMnO1xyXG5cclxuICBhcmMuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBhcmMuZ2V0UG9pbnQoMSk7XHJcbiAgfTtcclxuXHJcbiAgYXJjLmdldExlbmd0aCA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gMiAqIE1hdGguUEkgKiBhcmMucmFkaXVzICogKCBhcmMuZGVncmVlcyAvIDM2MCApO1xyXG4gIH07XHJcblxyXG4gIGFyYy5nZXRQb2ludCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBvcmlnaW4gPSB7eDogMCwgeTogYXJjLnN0YXJ0LnkgKyBhcmMucmFkaXVzIH07XHJcbiAgICB2YXIgcGFydE9mRGVncmVlcyA9IGFyYy5kZWdyZWVzICogcHJvZ3Jlc3M7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBvcmlnaW4ueCArIGFyYy5yYWRpdXMgKiBNYXRoLnNpbihhbmdsZVRvUmFkaWFucyhwYXJ0T2ZEZWdyZWVzKSksXHJcbiAgICAgIHk6IG9yaWdpbi55ICsgYXJjLnJhZGl1cyAqIC1NYXRoLmNvcyhhbmdsZVRvUmFkaWFucyhwYXJ0T2ZEZWdyZWVzKSlcclxuICAgIH07XHJcblxyXG4gIH07XHJcblxyXG4gIGFyYy5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcclxuICAgIHJldHVybiBhcmNDb25zdHJ1Y3Rvcih7c3RhcnQ6IGFyYy5zdGFydCwgZGVncmVlczogcGFydE9mRGVncmVlcywgcmFkaXVzOiBhcmMucmFkaXVzfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGFyYztcclxufVxyXG4iLCJpbXBvcnQgQmV6aWVyIGZyb20gJ2Jlemllci1qcyc7XHJcbmltcG9ydCBjaGVja1BhcmFtZXRlciBmcm9tICd+L2ludGVybmFsL2NoZWNrX3BhcmFtZXRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKXtcclxuXHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2VuZCcsIHRydWUpO1xyXG4gIGNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdjcG9pbnQxJywgdHJ1ZSk7XHJcbiAgY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ2Nwb2ludDInLCBmYWxzZSk7XHJcblxyXG4gIHZhciBiZXppZXJDdXJ2ZSA9IHt9O1xyXG4gIGJlemllckN1cnZlLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcclxuICBiZXppZXJDdXJ2ZS5lbmQgPSBvcHRpb25zLmVuZDtcclxuICBiZXppZXJDdXJ2ZS5jcG9pbnQxID0gb3B0aW9ucy5jcG9pbnQxO1xyXG4gIGJlemllckN1cnZlLmNwb2ludDIgPSBvcHRpb25zLmNwb2ludDI7XHJcbiAgYmV6aWVyQ3VydmUudHlwZSA9ICdiZXppZXJfY3VydmUnO1xyXG5cclxuICBpZihiZXppZXJDdXJ2ZS5jcG9pbnQyKXtcclxuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IEJlemllcihiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuY3BvaW50MiwgYmV6aWVyQ3VydmUuZW5kKTtcclxuICB9ZWxzZXtcclxuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IEJlemllcihiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuZW5kKTtcclxuICB9XHJcblxyXG4gIGJlemllckN1cnZlLnN1YlBhdGhzID0gW2JlemllckN1cnZlXTtcclxuXHJcbiAgYmV6aWVyQ3VydmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5lbmQ7XHJcbiAgfTtcclxuXHJcbiAgYmV6aWVyQ3VydmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5sZW5ndGgoKTtcclxuICB9O1xyXG5cclxuICBiZXppZXJDdXJ2ZS5nZXRQb2ludCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5nZXQocHJvZ3Jlc3MpO1xyXG4gIH07XHJcblxyXG4gIC8vVE9ETyBBZGQgZ2V0IHBhcnQgcGF0aCBmdW5jdGlvblxyXG5cclxuICByZXR1cm4gYmV6aWVyQ3VydmU7XHJcbn1cclxuIiwiaW1wb3J0IHRvVmVjdG9yIGZyb20gJ34vZ2VvbWV0cnkvdG9fdmVjdG9yJztcclxuaW1wb3J0IGRpc3RhbmNlIGZyb20gJ34vZ2VvbWV0cnkvZGlzdGFuY2UnO1xyXG5pbXBvcnQgY2hlY2tQYXJhbWV0ZXIgZnJvbSAnfi9pbnRlcm5hbC9jaGVja19wYXJhbWV0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGluZUNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG5cclxuY2hlY2tQYXJhbWV0ZXIob3B0aW9ucywgJ3N0YXJ0JywgZmFsc2UsIHt4OiAwLCB5OiAwfSk7XHJcbmNoZWNrUGFyYW1ldGVyKG9wdGlvbnMsICdlbmQnLCB0cnVlKTtcclxuXHJcbiAgdmFyIGxpbmUgPSB7fTtcclxuICBsaW5lLnN0YXJ0ID0gb3B0aW9ucy5zdGFydDtcclxuICBsaW5lLmVuZCA9IG9wdGlvbnMuZW5kO1xyXG4gIGxpbmUudHlwZSA9ICdsaW5lJztcclxuXHJcbiAgbGluZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGxpbmUuZW5kO1xyXG4gIH07XHJcblxyXG4gIGxpbmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBkaXN0YW5jZSh0b1ZlY3RvcihsaW5lLnN0YXJ0KSwgdG9WZWN0b3IobGluZS5lbmQpKTtcclxuICB9O1xyXG5cclxuICBsaW5lLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB4OiBsaW5lLnN0YXJ0LnggKyAobGluZS5lbmQueCAtIGxpbmUuc3RhcnQueCkgKiBwcm9ncmVzcyxcclxuICAgICAgICAgICAgICB5OiBsaW5lLnN0YXJ0LnkgKyAobGluZS5lbmQueSAtIGxpbmUuc3RhcnQueSkgKiBwcm9ncmVzc1xyXG4gICAgICAgICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbGluZS5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBuZXdFbmQgPSB7IHg6IGxpbmUuZW5kLnggKiBwcm9ncmVzcywgeTogbGluZS5lbmQueSAqIHByb2dyZXNzfTtcclxuICAgIHZhciBwYXRoUGFydCA9IGxpbmVDb25zdHJ1Y3Rvcih7c3RhcnQ6IGxpbmUuc3RhcnQsIGVuZDogbmV3RW5kfSk7XHJcbiAgICByZXR1cm4gcGF0aFBhcnQ7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxpbmU7XHJcbn1cclxuIiwiaW1wb3J0IGFkZFVwUG9pbnRzIGZyb20gJ34vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXRoQ29uc3RydWN0b3IoKXtcclxuXHJcbiAgdmFyIHBhdGggPSB7fTtcclxuXHJcbiAgcGF0aC5zdWJQYXRocyA9IFtdO1xyXG5cclxuICBwYXRoLmdldEVkZ2VQb2ludHMgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGVkZ2VQb2ludHMgPSBbXTtcclxuICAgIGVkZ2VQb2ludHMucHVzaCh7eDogMCwgeTogMH0pO1xyXG4gICAgZm9yKHZhciBzdWJQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBlZGdlUG9pbnRzLnB1c2goYWRkVXBQb2ludHMoZWRnZVBvaW50c1tlZGdlUG9pbnRzLmxlbmd0aCAtIDFdLCBzdWJQYXRoLmdldEVkZ2VQb2ludCgpKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWRnZVBvaW50cztcclxuICB9O1xyXG5cclxuICBwYXRoLmdldFN0YXJ0UG9pbnRPZiA9IGZ1bmN0aW9uKHN1YlBhdGgpe1xyXG4gICAgdmFyIHN0YXJ0UG9pbnQgPSAoe3g6IDAsIHk6IDB9KTtcclxuXHJcbiAgICBmb3IodmFyIGN1cnJlbnRQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBpZihjdXJyZW50UGF0aCA9PT0gc3ViUGF0aCl7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0UG9pbnQ7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHN0YXJ0UG9pbnQgPSBhZGRVcFBvaW50cyhzdGFydFBvaW50LCBjdXJyZW50UGF0aC5nZXRFZGdlUG9pbnQoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwYXRoLmdldFBvaW50ID0gZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xyXG4gICAgZm9yKHZhciBzdWJQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBpZihsZW5ndGhQb2ludCA+IHN1YlBhdGguZ2V0TGVuZ3RoKCkpe1xyXG4gICAgICAgIGxlbmd0aFBvaW50IC09IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBhZGRVcFBvaW50cyhzdWJQYXRoLmdldFBvaW50KChsZW5ndGhQb2ludCAvIHN1YlBhdGguZ2V0TGVuZ3RoKCkpICksIHBhdGguZ2V0U3RhcnRQb2ludE9mKHN1YlBhdGgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHBhdGguZ2V0TGVuZ3RoID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciBsZW5ndGggPSAwO1xyXG4gICAgZm9yKHZhciBzdWJQYXRoIG9mIHBhdGguc3ViUGF0aHMpe1xyXG4gICAgICBsZW5ndGggKz0gc3ViUGF0aC5nZXRMZW5ndGgoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgcGF0aC5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uKHByb2dyZXNzKXtcclxuICAgIHZhciBuZXdTdWJQYXRocyA9IFtdO1xyXG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xyXG4gICAgdmFyIHN1YlBhdGhzUmV0cmlldmVkID0gZmFsc2U7XHJcbiAgICB2YXIgY3VycmVudFBhdGggPSAwO1xyXG5cclxuICAgIHdoaWxlKCFzdWJQYXRoc1JldHJpZXZlZCl7XHJcbiAgICAgIGlmKGxlbmd0aFBvaW50ID4gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpe1xyXG4gICAgICAgIGxlbmd0aFBvaW50IC09IHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpO1xyXG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2gocGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoMSkpO1xyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gY3VycmVudFBhdGggKyAxO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBuZXdTdWJQYXRocy5wdXNoKHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldFBhcnRQYXRoKChsZW5ndGhQb2ludCAvIHBhdGguc3ViUGF0aHNbY3VycmVudFBhdGhdLmdldExlbmd0aCgpKSkpO1xyXG4gICAgICAgIHN1YlBhdGhzUmV0cmlldmVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXJ0UGF0aCA9IHBhdGhDb25zdHJ1Y3RvcigpO1xyXG4gICAgcGFydFBhdGguc3ViUGF0aHMgPSBuZXdTdWJQYXRocztcclxuICAgIHJldHVybiBwYXJ0UGF0aDtcclxuXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHBhdGg7XHJcblxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBvaW50KXtcclxuICByZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmFtZXRlck9iamVjdCwgb3B0aW9uLCByZXF1aXJlZCwgZGVmYXVsdFZhbHVlKXtcclxuICBpZighcmVxdWlyZWQpe1xyXG4gICAgcGFyYW1ldGVyT2JqZWN0W29wdGlvbl0gPSBwYXJhbWV0ZXJPYmplY3QuaGFzT3duUHJvcGVydHkob3B0aW9uKSA/IHBhcmFtZXRlck9iamVjdFtvcHRpb25dIDogZGVmYXVsdFZhbHVlO1xyXG4gIH1lbHNle1xyXG4gICAgaWYoIXBhcmFtZXRlck9iamVjdC5oYXNPd25Qcm9wZXJ0eShvcHRpb24pICl7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBvcHRpb246JyArIG9wdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW1lbnQsIHByb3BlcnR5LCB2YWx1ZSwgZG9Ob3RDaGFpbil7XHJcbiAgaWYoIWRvTm90Q2hhaW4pe1xyXG4gICAgaWYoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eSgnc2V0UHJvcCcpKXtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuc2V0UHJvcChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYoZWxlbWVudC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpe1xyXG4gICAgZWxlbWVudFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2V0IHByb3BlcnR5IG9mIG9iamVjdC4gT2JqZWN0IGhhc25cXCd0IHRoZSBwcm9wZXJ0eTogJyArIHByb3BlcnR5KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYWRkQW5pbWF0aW9uOiBmdW5jdGlvbihoYW5kbGUpe1xyXG4gICAgICBjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcclxuICAgICAgY3JlYXRlanMuVGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUFuaW1hdGlvbjogZnVuY3Rpb24oaGFuZGxlKXtcclxuICAgICAgY3JlYXRlanMuVGlja2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpY2snLCBoYW5kbGUpO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgbG9vcCBmcm9tICd+L2xvb3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJ2YWwpe1xyXG4gIHZhciB0aW1lciA9IHt9O1xyXG4gIHRpbWVyLmN1cnJlbnRUaW1lID0gMDtcclxuICB0aW1lci5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIHRpbWVyLmxpc3RlbmVycyA9IFtdO1xyXG5cclxuICB0aW1lci5oYW5kbGUgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgICB0aW1lci5jdXJyZW50VGltZSArPSBldmVudC5kZWx0YTtcclxuXHJcbiAgICB3aGlsZSh0aW1lci5jdXJyZW50VGltZSA+IHRpbWVyLmludGVydmFsKXtcclxuICAgICAgIGNhbGxMaXN0ZW5lcnMoKTtcclxuICAgICAgIHRpbWVyLmN1cnJlbnRUaW1lIC09IHRpbWVyLmludGVydmFsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHRpbWVyLmFkZExpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgdGltZXIubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gIH07XHJcblxyXG4gIHRpbWVyLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpe1xyXG4gICAgdGltZXIubGlzdGVuZXJzLnNwbGljZSh0aW1lci5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lciksIDEpO1xyXG4gIH07XHJcblxyXG4gIHRpbWVyLnN0YXJ0ID0gZnVuY3Rpb24oKXtcclxuICAgIGxvb3AuYWRkQW5pbWF0aW9uKHRpbWVyLmhhbmRsZSk7XHJcbiAgfTtcclxuXHJcbiAgdGltZXIuc3RvcCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsb29wLnJlbW92ZUFuaW1hdGlvbih0aW1lci5oYW5kbGUpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxMaXN0ZW5lcnMoKXtcclxuICAgIGZvcih2YXIgbGlzdGVuZXIgb2YgdGltZXIubGlzdGVuZXJzKXtcclxuICAgICAgbGlzdGVuZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aW1lcjtcclxufVxyXG4iLCJpbXBvcnQgeyBlYXNlSW5PdXRRdWFkLCBlYXNlSW5PdXRCYWNrIH0gZnJvbSAnZWFzaW5nLXV0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGVhc2luZyA9IHt9O1xyXG5cclxuICBlYXNpbmcuZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgIHJldHVybiBlYXNlSW5PdXRRdWFkKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBlYXNpbmcuZWFzZUluT3V0QmFjayA9IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgIHJldHVybiBlYXNlSW5PdXRCYWNrKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBlYXNpbmcubGluZWFyID0gZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcblxyXG4gIGVhc2luZy5nZXRWYWx1ZU9mID0gZnVuY3Rpb24odHlwZSwgdmFsdWUpe1xyXG4gICAgcmV0dXJuIGVhc2luZ1t0eXBlXSh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGVhc2luZztcclxufVxyXG4iLCJpbXBvcnQgbG9vcCBmcm9tICd+L2xvb3AnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRyYW5zaXRpb25Mb29wKHRpbWUsIHN0ZWVwbmVzcywgY3VycmVudCl7XHJcbiAgdmFyIHB1bHNhciA9IHt9O1xyXG4gIHB1bHNhci50aW1lID0gdGltZTtcclxuICBwdWxzYXIuc3RlZXBuZXNzID0gKHR5cGVvZiBzdGVlcG5lc3MgIT09ICd1bmRlZmluZWQnKSA/IHN0ZWVwbmVzcyA6IDAuNTtcclxuICBwdWxzYXIuY3VycmVudCA9IGN1cnJlbnQgPyBjdXJyZW50IDogMDtcclxuICBwdWxzYXIuaW5jcmVhc2UgPSB0cnVlO1xyXG4gIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSBjdXJyZW50ID8gY3VycmVudCAqIHRpbWUgOiAwO1xyXG5cclxuXHJcblxyXG4gIHB1bHNhci5zdGFydCA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgIHB1bHNhci5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgbG9vcC5hZGRBbmltYXRpb24ocHVsc2FyLmhhbmRsZSk7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbigpe1xyXG4gICAgbG9vcC5yZW1vdmVBbmltYXRpb24ocHVsc2FyLmhhbmRsZSk7XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmhhbmRsZSA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSBwdWxzYXIuY3VycmVudE1zZWNvbmRzICsgZXZlbnQuZGVsdGE7XHJcblxyXG4gICAgdmFyIGxpbWl0VGltZUZhY3RvciA9IE1hdGguZmxvb3IocHVsc2FyLmN1cnJlbnRNc2Vjb25kcyAvIHB1bHNhci50aW1lKTtcclxuXHJcbiAgICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyAtIHB1bHNhci50aW1lICogbGltaXRUaW1lRmFjdG9yO1xyXG4gICAgdmFyIGxhc3RDdXJyZW50ID0gcHVsc2FyLmN1cnJlbnQ7XHJcbiAgICBwdWxzYXIuY3VycmVudCA9IHB1bHNhci5jYWxjdWxhdGVDdXJyZW50KHB1bHNhci5jdXJyZW50TXNlY29uZHMpO1xyXG4gICAgcHVsc2FyLmluY3JlYXNlID0gKGxhc3RDdXJyZW50IDwgcHVsc2FyLmN1cnJlbnQpO1xyXG4gICAgaWYocHVsc2FyLmNhbGxiYWNrKXtcclxuICAgICAgcHVsc2FyLmNhbGxiYWNrKHB1bHNhci5jdXJyZW50LCBldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmNhbGN1bGF0ZUN1cnJlbnQgPSBmdW5jdGlvbihtcyl7XHJcbiAgICB2YXIgcmVsYXRpdmVDdXJyZW50ID0gbXMgLyBwdWxzYXIudGltZTtcclxuICAgIGlmKHJlbGF0aXZlQ3VycmVudCA8PSBwdWxzYXIuc3RlZXBuZXNzKXtcclxuICAgICAgcmV0dXJuIChyZWxhdGl2ZUN1cnJlbnQpIC8gcHVsc2FyLnN0ZWVwbmVzcztcclxuICAgIH1lbHNle1xyXG4gICAgICByZXR1cm4gMSAtIChyZWxhdGl2ZUN1cnJlbnQgLSBwdWxzYXIuc3RlZXBuZXNzKSAvICgxIC0gcHVsc2FyLnN0ZWVwbmVzcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHVsc2FyLmdldFJlbGF0aXZlQ3VycmVudCA9IGZ1bmN0aW9uKGZhY3Rvcil7XHJcblxyXG4gICAgLy8gRmlyc3QgcHJlcGFyZSB0aGUgdmFsdWUgd2hpY2ggaXMgcGFzc2VkIHRvIHRoZSBjYWxjdWxhdGVDdXJyZW50IGZ1bmN0aW9uOlxyXG4gICAgdmFyIGZhY3RvckluTXMgPSBmYWN0b3IgKiBwdWxzYXIudGltZTtcclxuICAgIHZhciBtc1RvQ2hlY2sgPSBmYWN0b3JJbk1zICsgcHVsc2FyLmN1cnJlbnRNc2Vjb25kcztcclxuXHJcbiAgICBpZihtc1RvQ2hlY2sgPCAwICl7XHJcbiAgICAgIC8vIFdoZW4gbXNUb0NoZWNrIGlzIG5lZ2F0aXZlLCB3ZSBzdWJ0cmFjdCB0aGUgbGFzdCBwYXJ0IHNtYWxsZXJcclxuICAgICAgLy8gdGhhbiB0aGUgcHVsc2FyIHRpbWUgZnJvbSB0aGUgcHVsc2FyIHRpbWUgKHdpdGggbW9kdWxvKVxyXG4gICAgICAvLyBlLmcuOiBtc1RvQ2hlY2sgPSAtMzMsIHRpbWUgPSAxMFxyXG4gICAgICAvLyAtLT4gbmV3IG1zVG9DaGVjayBpcyAxMCAtIDMgPSA3XHJcbiAgICAgIG1zVG9DaGVjayA9IHB1bHNhci50aW1lIC0gKCgoTWF0aC5hYnMobXNUb0NoZWNrKSAvIHB1bHNhci50aW1lKSAlIDEpICogcHVsc2FyLnRpbWUpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIC8vIElmIG1zVG9DaGVjayBpcyBwb3NpdGl2ZSwgd2Ugb25seSBoYXZlIHRvIGNoZWNrIHZhbHVlcyBncmVhdGVyIHRoYW4gdGltZVxyXG4gICAgICB2YXIgbGltaXRUaW1lRmFjdG9yID0gTWF0aC5mbG9vcihtc1RvQ2hlY2sgLyBwdWxzYXIudGltZSk7XHJcbiAgICAgIG1zVG9DaGVjayA9IG1zVG9DaGVjayAtIHB1bHNhci50aW1lICogbGltaXRUaW1lRmFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwdWxzYXIuY2FsY3VsYXRlQ3VycmVudChtc1RvQ2hlY2spO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwdWxzYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByaXNpbmdUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQpe1xyXG4gIHJldHVybiB0cmFuc2l0aW9uTG9vcCh0aW1lLCAxLCBjdXJyZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHB1bHNhclRyYW5zaXRpb24odGltZSwgY3VycmVudCl7XHJcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDAsIGN1cnJlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2l0aW9uTG9vcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKDg5KTtcbiIsIi8qKlxuICBBIGphdmFzY3JpcHQgQmV6aWVyIGN1cnZlIGxpYnJhcnkgYnkgUG9tYXguXG5cbiAgQmFzZWQgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvXG5cbiAgVGhpcyBjb2RlIGlzIE1JVCBsaWNlbnNlZC5cbioqL1xuKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBtaW4gPSBNYXRoLm1pbixcbiAgICAgIG1heCA9IE1hdGgubWF4LFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwaSA9IE1hdGguUEksXG4gICAgICAvLyBhIHplcm8gY29vcmRpbmF0ZSwgd2hpY2ggaXMgc3VycHJpc2luZ2x5IHVzZWZ1bFxuICAgICAgWkVSTyA9IHt4OjAseTowLHo6MH07XG5cbiAgLy8gcXVpdGUgbmVlZGVkXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoOTEpO1xuXG4gIC8vIG5vdCBxdWl0ZSBuZWVkZWQsIGJ1dCBldmVudHVhbGx5IHRoaXMnbGwgYmUgdXNlZnVsLi4uXG4gIHZhciBQb2x5QmV6aWVyID0gcmVxdWlyZSg5MCk7XG5cbiAgLyoqXG4gICAqIEJlemllciBjdXJ2ZSBjb25zdHJ1Y3Rvci4gVGhlIGNvbnN0cnVjdG9yIGFyZ3VtZW50IGNhbiBiZSBvbmUgb2YgdGhyZWUgdGhpbmdzOlxuICAgKlxuICAgKiAxLiBhcnJheS80IG9mIHt4Oi4uLiwgeTouLi4sIHo6Li4ufSwgeiBvcHRpb25hbFxuICAgKiAyLiBudW1lcmljYWwgYXJyYXkvOCBvcmRlcmVkIHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0XG4gICAqIDMuIG51bWVyaWNhbCBhcnJheS8xMiBvcmRlcmVkIHgxLHkxLHoxLHgyLHkyLHoyLHgzLHkzLHozLHg0LHk0LHo0XG4gICAqXG4gICAqL1xuICB2YXIgQmV6aWVyID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gICAgdmFyIGFyZ3MgPSAoY29vcmRzICYmIGNvb3Jkcy5mb3JFYWNoKSA/IGNvb3JkcyA6IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB2YXIgY29vcmRsZW4gPSBmYWxzZTtcbiAgICBpZih0eXBlb2YgYXJnc1swXSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29vcmRsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICAgIHZhciBuZXdhcmdzID0gW107XG4gICAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgICAgWyd4JywneScsJ3onXS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICBpZih0eXBlb2YgcG9pbnRbZF0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG5ld2FyZ3MucHVzaChwb2ludFtkXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgYXJncyA9IG5ld2FyZ3M7XG4gICAgfVxuICAgIHZhciBoaWdoZXIgPSBmYWxzZTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKGNvb3JkbGVuKSB7XG4gICAgICBpZihjb29yZGxlbj40KSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYobGVuIT09NiAmJiBsZW4hPT04ICYmIGxlbiE9PTkgJiYgbGVuIT09MTIpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IG5ldyBCZXppZXIocG9pbnRbXSkgaXMgYWNjZXB0ZWQgZm9yIDR0aCBhbmQgaGlnaGVyIG9yZGVyIGN1cnZlc1wiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgXzNkID0gKCFoaWdoZXIgJiYgKGxlbiA9PT0gOSB8fCBsZW4gPT09IDEyKSkgfHwgKGNvb3JkcyAmJiBjb29yZHNbMF0gJiYgdHlwZW9mIGNvb3Jkc1swXS56ICE9PSBcInVuZGVmaW5lZFwiKTtcbiAgICB0aGlzLl8zZCA9IF8zZDtcbiAgICB2YXIgcG9pbnRzID0gW107XG4gICAgZm9yKHZhciBpZHg9MCwgc3RlcD0oXzNkID8gMyA6IDIpOyBpZHg8bGVuOyBpZHgrPXN0ZXApIHtcbiAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgeDogYXJnc1tpZHhdLFxuICAgICAgICB5OiBhcmdzW2lkeCsxXVxuICAgICAgfTtcbiAgICAgIGlmKF8zZCkgeyBwb2ludC56ID0gYXJnc1tpZHgrMl0gfTtcbiAgICAgIHBvaW50cy5wdXNoKHBvaW50KTtcbiAgICB9XG4gICAgdGhpcy5vcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgIHZhciBkaW1zID0gWyd4JywneSddO1xuICAgIGlmKF8zZCkgZGltcy5wdXNoKCd6Jyk7XG4gICAgdGhpcy5kaW1zID0gZGltcztcbiAgICB0aGlzLmRpbWxlbiA9IGRpbXMubGVuZ3RoO1xuXG4gICAgKGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB2YXIgb3JkZXIgPSBjdXJ2ZS5vcmRlcjtcbiAgICAgIHZhciBwb2ludHMgPSBjdXJ2ZS5wb2ludHM7XG4gICAgICB2YXIgYSA9IHV0aWxzLmFsaWduKHBvaW50cywge3AxOnBvaW50c1swXSwgcDI6cG9pbnRzW29yZGVyXX0pO1xuICAgICAgZm9yKHZhciBpPTA7IGk8YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihhYnMoYVtpXS55KSA+IDAuMDAwMSkge1xuICAgICAgICAgIGN1cnZlLl9saW5lYXIgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1cnZlLl9saW5lYXIgPSB0cnVlO1xuICAgIH0odGhpcykpO1xuXG4gICAgdGhpcy5fdDEgPSAwO1xuICAgIHRoaXMuX3QyID0gMTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9O1xuXG4gIEJlemllci5mcm9tU1ZHID0gZnVuY3Rpb24oc3ZnU3RyaW5nKSB7XG4gICAgdmFyIGxpc3QgPSBzdmdTdHJpbmcubWF0Y2goL1stK10/XFxkKlxcLj9cXGQrKD86W2VFXVstK10/XFxkKyk/L2cpLm1hcChwYXJzZUZsb2F0KTtcbiAgICB2YXIgcmVsYXRpdmUgPSAvW2NxXS8udGVzdChzdmdTdHJpbmcpO1xuICAgIGlmKCFyZWxhdGl2ZSkgcmV0dXJuIG5ldyBCZXppZXIobGlzdCk7XG4gICAgbGlzdCA9IGxpc3QubWFwKGZ1bmN0aW9uKHYsaSkge1xuICAgICAgcmV0dXJuIGkgPCAyID8gdiA6IHYgKyBsaXN0W2kgJSAyXTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IEJlemllcihsaXN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRBQkMobixTLEIsRSx0KSB7XG4gICAgaWYodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHsgdCA9IDAuNTsgfVxuICAgIHZhciB1ID0gdXRpbHMucHJvamVjdGlvbnJhdGlvKHQsbiksXG4gICAgICAgIHVtID0gMS11LFxuICAgICAgICBDID0ge1xuICAgICAgICAgIHg6IHUqUy54ICsgdW0qRS54LFxuICAgICAgICAgIHk6IHUqUy55ICsgdW0qRS55XG4gICAgICAgIH0sXG4gICAgICAgIHMgPSB1dGlscy5hYmNyYXRpbyh0LG4pLFxuICAgICAgICBBID0ge1xuICAgICAgICAgIHg6IEIueCArIChCLngtQy54KS9zLFxuICAgICAgICAgIHk6IEIueSArIChCLnktQy55KS9zXG4gICAgICAgIH07XG4gICAgcmV0dXJuIHsgQTpBLCBCOkIsIEM6QyB9O1xuICB9XG5cbiAgQmV6aWVyLnF1YWRyYXRpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbihwMSxwMixwMywgdCkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICAvLyBzaG9ydGN1dHMsIGFsdGhvdWdoIHRoZXkncmUgcmVhbGx5IGR1bWJcbiAgICBpZih0PT09MCkgeyByZXR1cm4gbmV3IEJlemllcihwMixwMixwMyk7IH1cbiAgICBpZih0PT09MSkgeyByZXR1cm4gbmV3IEJlemllcihwMSxwMixwMik7IH1cbiAgICAvLyByZWFsIGZpdHRpbmcuXG4gICAgdmFyIGFiYyA9IGdldEFCQygyLHAxLHAyLHAzLHQpO1xuICAgIHJldHVybiBuZXcgQmV6aWVyKHAxLCBhYmMuQSwgcDMpO1xuICB9O1xuXG4gIEJlemllci5jdWJpY0Zyb21Qb2ludHMgPSBmdW5jdGlvbihTLEIsRSwgdCxkMSkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICB2YXIgYWJjID0gZ2V0QUJDKDMsUyxCLEUsdCk7XG4gICAgaWYodHlwZW9mIGQxID09PSBcInVuZGVmaW5lZFwiKSB7IGQxID0gdXRpbHMuZGlzdChCLGFiYy5DKTsgfVxuICAgIHZhciBkMiA9IGQxICogKDEtdCkvdDtcblxuICAgIHZhciBzZWxlbiA9IHV0aWxzLmRpc3QoUyxFKSxcbiAgICAgICAgbHggPSAoRS54LVMueCkvc2VsZW4sXG4gICAgICAgIGx5ID0gKEUueS1TLnkpL3NlbGVuLFxuICAgICAgICBieDEgPSBkMSAqIGx4LFxuICAgICAgICBieTEgPSBkMSAqIGx5LFxuICAgICAgICBieDIgPSBkMiAqIGx4LFxuICAgICAgICBieTIgPSBkMiAqIGx5O1xuICAgIC8vIGRlcml2YXRpb24gb2YgbmV3IGh1bGwgY29vcmRpbmF0ZXNcbiAgICB2YXIgZTEgID0geyB4OiBCLnggLSBieDEsIHk6IEIueSAtIGJ5MSB9LFxuICAgICAgICBlMiAgPSB7IHg6IEIueCArIGJ4MiwgeTogQi55ICsgYnkyIH0sXG4gICAgICAgIEEgPSBhYmMuQSxcbiAgICAgICAgdjEgID0geyB4OiBBLnggKyAoZTEueC1BLngpLygxLXQpLCB5OiBBLnkgKyAoZTEueS1BLnkpLygxLXQpIH0sXG4gICAgICAgIHYyICA9IHsgeDogQS54ICsgKGUyLngtQS54KS8odCksIHk6IEEueSArIChlMi55LUEueSkvKHQpIH0sXG4gICAgICAgIG5jMSA9IHsgeDogUy54ICsgKHYxLngtUy54KS8odCksIHk6IFMueSArICh2MS55LVMueSkvKHQpIH0sXG4gICAgICAgIG5jMiA9IHsgeDogRS54ICsgKHYyLngtRS54KS8oMS10KSwgeTogRS55ICsgKHYyLnktRS55KS8oMS10KSB9O1xuICAgIC8vIC4uLmRvbmVcbiAgICByZXR1cm4gbmV3IEJlemllcihTLG5jMSxuYzIsRSk7XG4gIH07XG5cbiAgdmFyIGdldFV0aWxzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHV0aWxzO1xuICB9O1xuXG4gIEJlemllci5nZXRVdGlscyA9IGdldFV0aWxzO1xuXG4gIEJlemllci5wcm90b3R5cGUgPSB7XG4gICAgZ2V0VXRpbHM6IGdldFV0aWxzLFxuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICB0b1NWRzogZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgICAgIGlmKHRoaXMuXzNkKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLFxuICAgICAgICAgIHggPSBwWzBdLngsXG4gICAgICAgICAgeSA9IHBbMF0ueSxcbiAgICAgICAgICBzID0gW1wiTVwiLCB4LCB5LCAodGhpcy5vcmRlcj09PTIgPyBcIlFcIjpcIkNcIildO1xuICAgICAgZm9yKHZhciBpPTEsIGxhc3Q9cC5sZW5ndGg7IGk8bGFzdDsgaSsrKSB7XG4gICAgICAgIHMucHVzaChwW2ldLngpO1xuICAgICAgICBzLnB1c2gocFtpXS55KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzLmpvaW4oXCIgXCIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIC8vIG9uZS10aW1lIGNvbXB1dGUgZGVyaXZhdGl2ZSBjb29yZGluYXRlc1xuICAgICAgdGhpcy5kcG9pbnRzID0gW107XG4gICAgICBmb3IodmFyIHA9dGhpcy5wb2ludHMsIGQ9cC5sZW5ndGgsIGM9ZC0xOyBkPjE7IGQtLSwgYy0tKSB7XG4gICAgICAgIHZhciBsaXN0ID0gW107XG4gICAgICAgIGZvcih2YXIgaj0wLCBkcHQ7IGo8YzsgaisrKSB7XG4gICAgICAgICAgZHB0ID0ge1xuICAgICAgICAgICAgeDogYyAqIChwW2orMV0ueCAtIHBbal0ueCksXG4gICAgICAgICAgICB5OiBjICogKHBbaisxXS55IC0gcFtqXS55KVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICAgIGRwdC56ID0gYyAqIChwW2orMV0ueiAtIHBbal0ueik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3QucHVzaChkcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHBvaW50cy5wdXNoKGxpc3QpO1xuICAgICAgICBwID0gbGlzdDtcbiAgICAgIH07XG4gICAgICB0aGlzLmNvbXB1dGVkaXJlY3Rpb24oKTtcbiAgICB9LFxuICAgIGNvbXB1dGVkaXJlY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgdmFyIGFuZ2xlID0gdXRpbHMuYW5nbGUocG9pbnRzWzBdLCBwb2ludHNbdGhpcy5vcmRlcl0sIHBvaW50c1sxXSk7XG4gICAgICB0aGlzLmNsb2Nrd2lzZSA9IGFuZ2xlID4gMDtcbiAgICB9LFxuICAgIGxlbmd0aDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMubGVuZ3RoKHRoaXMuZGVyaXZhdGl2ZS5iaW5kKHRoaXMpKTtcbiAgICB9LFxuICAgIF9sdXQ6IFtdLFxuICAgIGdldExVVDogZnVuY3Rpb24oc3RlcHMpIHtcbiAgICAgIHN0ZXBzID0gc3RlcHMgfHwgMTAwO1xuICAgICAgaWYgKHRoaXMuX2x1dC5sZW5ndGggPT09IHN0ZXBzKSB7IHJldHVybiB0aGlzLl9sdXQ7IH1cbiAgICAgIHRoaXMuX2x1dCA9IFtdO1xuICAgICAgZm9yKHZhciB0PTA7IHQ8PXN0ZXBzOyB0KyspIHtcbiAgICAgICAgdGhpcy5fbHV0LnB1c2godGhpcy5jb21wdXRlKHQvc3RlcHMpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9sdXQ7XG4gICAgfSxcbiAgICBvbjogZnVuY3Rpb24ocG9pbnQsIGVycm9yKSB7XG4gICAgICBlcnJvciA9IGVycm9yIHx8IDU7XG4gICAgICB2YXIgbHV0ID0gdGhpcy5nZXRMVVQoKSwgaGl0cyA9IFtdLCBjLCB0PTA7XG4gICAgICBmb3IodmFyIGk9MDsgaTxsdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYyA9IGx1dFtpXTtcbiAgICAgICAgaWYgKHV0aWxzLmRpc3QoYyxwb2ludCkgPCBlcnJvcikge1xuICAgICAgICAgIGhpdHMucHVzaChjKVxuICAgICAgICAgIHQgKz0gaSAvIGx1dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKCFoaXRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHQgLz0gaGl0cy5sZW5ndGg7XG4gICAgfSxcbiAgICBwcm9qZWN0OiBmdW5jdGlvbihwb2ludCkge1xuICAgICAgLy8gc3RlcCAxOiBjb2Fyc2UgY2hlY2tcbiAgICAgIHZhciBMVVQgPSB0aGlzLmdldExVVCgpLCBsID0gTFVULmxlbmd0aC0xLFxuICAgICAgICAgIGNsb3Nlc3QgPSB1dGlscy5jbG9zZXN0KExVVCwgcG9pbnQpLFxuICAgICAgICAgIG1kaXN0ID0gY2xvc2VzdC5tZGlzdCxcbiAgICAgICAgICBtcG9zID0gY2xvc2VzdC5tcG9zO1xuICAgICAgaWYgKG1wb3M9PT0wIHx8IG1wb3M9PT1sKSB7XG4gICAgICAgIHZhciB0ID0gbXBvcy9sLCBwdCA9IHRoaXMuY29tcHV0ZSh0KTtcbiAgICAgICAgcHQudCA9IHQ7XG4gICAgICAgIHB0LmQgPSBtZGlzdDtcbiAgICAgICAgcmV0dXJuIHB0O1xuICAgICAgfVxuXG4gICAgICAvLyBzdGVwIDI6IGZpbmUgY2hlY2tcbiAgICAgIHZhciBmdCwgdCwgcCwgZCxcbiAgICAgICAgICB0MSA9IChtcG9zLTEpL2wsXG4gICAgICAgICAgdDIgPSAobXBvcysxKS9sLFxuICAgICAgICAgIHN0ZXAgPSAwLjEvbDtcbiAgICAgIG1kaXN0ICs9IDE7XG4gICAgICBmb3IodD10MSxmdD10OyB0PHQyK3N0ZXA7IHQrPXN0ZXApIHtcbiAgICAgICAgcCA9IHRoaXMuY29tcHV0ZSh0KTtcbiAgICAgICAgZCA9IHV0aWxzLmRpc3QocG9pbnQsIHApO1xuICAgICAgICBpZiAoZDxtZGlzdCkge1xuICAgICAgICAgIG1kaXN0ID0gZDtcbiAgICAgICAgICBmdCA9IHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHAgPSB0aGlzLmNvbXB1dGUoZnQpO1xuICAgICAgcC50ID0gZnQ7XG4gICAgICBwLmQgPSBtZGlzdDtcbiAgICAgIHJldHVybiBwO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wdXRlKHQpO1xuICAgIH0sXG4gICAgcG9pbnQ6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9pbnRzW2lkeF07XG4gICAgfSxcbiAgICBjb21wdXRlOiBmdW5jdGlvbih0KSB7XG4gICAgICAvLyBzaG9ydGN1dHNcbiAgICAgIGlmKHQ9PT0wKSB7IHJldHVybiB0aGlzLnBvaW50c1swXTsgfVxuICAgICAgaWYodD09PTEpIHsgcmV0dXJuIHRoaXMucG9pbnRzW3RoaXMub3JkZXJdOyB9XG5cbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHM7XG4gICAgICB2YXIgbXQgPSAxLXQ7XG5cbiAgICAgIC8vIGxpbmVhcj9cbiAgICAgIGlmKHRoaXMub3JkZXI9PT0xKSB7XG4gICAgICAgIHJldCA9IHtcbiAgICAgICAgICB4OiBtdCpwWzBdLnggKyB0KnBbMV0ueCxcbiAgICAgICAgICB5OiBtdCpwWzBdLnkgKyB0KnBbMV0ueVxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fM2QpIHsgcmV0LnogPSBtdCpwWzBdLnogKyB0KnBbMV0uejsgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgICAvLyBxdWFkcmF0aWMvY3ViaWMgY3VydmU/XG4gICAgICBpZih0aGlzLm9yZGVyPDQpIHtcbiAgICAgICAgdmFyIG10MiA9IG10Km10LFxuICAgICAgICAgICAgdDIgPSB0KnQsXG4gICAgICAgICAgICBhLGIsYyxkID0gMDtcbiAgICAgICAgaWYodGhpcy5vcmRlcj09PTIpIHtcbiAgICAgICAgICBwID0gW3BbMF0sIHBbMV0sIHBbMl0sIFpFUk9dO1xuICAgICAgICAgIGEgPSBtdDI7XG4gICAgICAgICAgYiA9IG10KnQqMjtcbiAgICAgICAgICBjID0gdDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLm9yZGVyPT09Mykge1xuICAgICAgICAgIGEgPSBtdDIqbXQ7XG4gICAgICAgICAgYiA9IG10Mip0KjM7XG4gICAgICAgICAgYyA9IG10KnQyKjM7XG4gICAgICAgICAgZCA9IHQqdDI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICB4OiBhKnBbMF0ueCArIGIqcFsxXS54ICsgYypwWzJdLnggKyBkKnBbM10ueCxcbiAgICAgICAgICB5OiBhKnBbMF0ueSArIGIqcFsxXS55ICsgYypwWzJdLnkgKyBkKnBbM10ueVxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgIHJldC56ID0gYSpwWzBdLnogKyBiKnBbMV0ueiArIGMqcFsyXS56ICsgZCpwWzNdLno7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgLy8gaGlnaGVyIG9yZGVyIGN1cnZlczogdXNlIGRlIENhc3RlbGphdSdzIGNvbXB1dGF0aW9uXG4gICAgICB2YXIgZENwdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucG9pbnRzKSk7XG4gICAgICB3aGlsZShkQ3B0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxkQ3B0cy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAgICAgZENwdHNbaV0gPSB7XG4gICAgICAgICAgICB4OiBkQ3B0c1tpXS54ICsgKGRDcHRzW2krMV0ueCAtIGRDcHRzW2ldLngpICogdCxcbiAgICAgICAgICAgIHk6IGRDcHRzW2ldLnkgKyAoZENwdHNbaSsxXS55IC0gZENwdHNbaV0ueSkgKiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAodHlwZW9mIGRDcHRzW2ldLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGRDcHRzW2ldID0gZENwdHNbaV0ueiArIChkQ3B0c1tpKzFdLnogLSBkQ3B0c1tpXS56KSAqIHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZENwdHMuc3BsaWNlKGRDcHRzLmxlbmd0aC0xLCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkQ3B0c1swXTtcbiAgICB9LFxuICAgIHJhaXNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsIG5wID0gW3BbMF1dLCBpLCBrPXAubGVuZ3RoLCBwaSwgcGltO1xuICAgICAgZm9yICh2YXIgaT0xOyBpPGs7IGkrKykge1xuICAgICAgICBwaSA9IHBbaV07XG4gICAgICAgIHBpbSA9IHBbaS0xXTtcbiAgICAgICAgbnBbaV0gPSB7XG4gICAgICAgICAgeDogKGstaSkvayAqIHBpLnggKyBpL2sgKiBwaW0ueCxcbiAgICAgICAgICB5OiAoay1pKS9rICogcGkueSArIGkvayAqIHBpbS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBucFtrXSA9IHBbay0xXTtcbiAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICB9LFxuICAgIGRlcml2YXRpdmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBtdCA9IDEtdCxcbiAgICAgICAgICBhLGIsYz0wLFxuICAgICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMF07XG4gICAgICBpZih0aGlzLm9yZGVyPT09MikgeyBwID0gW3BbMF0sIHBbMV0sIFpFUk9dOyBhID0gbXQ7IGIgPSB0OyB9XG4gICAgICBpZih0aGlzLm9yZGVyPT09MykgeyBhID0gbXQqbXQ7IGIgPSBtdCp0KjI7IGMgPSB0KnQ7IH1cbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IGEqcFswXS54ICsgYipwWzFdLnggKyBjKnBbMl0ueCxcbiAgICAgICAgeTogYSpwWzBdLnkgKyBiKnBbMV0ueSArIGMqcFsyXS55XG4gICAgICB9O1xuICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgcmV0LnogPSBhKnBbMF0ueiArIGIqcFsxXS56ICsgYypwWzJdLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG4gICAgaW5mbGVjdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLmluZmxlY3Rpb25zKHRoaXMucG9pbnRzKTtcbiAgICB9LFxuICAgIG5vcm1hbDogZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHRoaXMuXzNkID8gdGhpcy5fX25vcm1hbDModCkgOiB0aGlzLl9fbm9ybWFsMih0KTtcbiAgICB9LFxuICAgIF9fbm9ybWFsMjogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIGQgPSB0aGlzLmRlcml2YXRpdmUodCk7XG4gICAgICB2YXIgcSA9IHNxcnQoZC54KmQueCArIGQueSpkLnkpXG4gICAgICByZXR1cm4geyB4OiAtZC55L3EsIHk6IGQueC9xIH07XG4gICAgfSxcbiAgICBfX25vcm1hbDM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI1NDUzMTU5XG4gICAgICB2YXIgcjEgPSB0aGlzLmRlcml2YXRpdmUodCksXG4gICAgICAgICAgcjIgPSB0aGlzLmRlcml2YXRpdmUodCswLjAxKSxcbiAgICAgICAgICBxMSA9IHNxcnQocjEueCpyMS54ICsgcjEueSpyMS55ICsgcjEueipyMS56KSxcbiAgICAgICAgICBxMiA9IHNxcnQocjIueCpyMi54ICsgcjIueSpyMi55ICsgcjIueipyMi56KTtcbiAgICAgIHIxLnggLz0gcTE7IHIxLnkgLz0gcTE7IHIxLnogLz0gcTE7XG4gICAgICByMi54IC89IHEyOyByMi55IC89IHEyOyByMi56IC89IHEyO1xuICAgICAgLy8gY3Jvc3MgcHJvZHVjdFxuICAgICAgdmFyIGMgPSB7XG4gICAgICAgIHg6IHIyLnkqcjEueiAtIHIyLnoqcjEueSxcbiAgICAgICAgeTogcjIueipyMS54IC0gcjIueCpyMS56LFxuICAgICAgICB6OiByMi54KnIxLnkgLSByMi55KnIxLnhcbiAgICAgIH07XG4gICAgICB2YXIgbSA9IHNxcnQoYy54KmMueCArIGMueSpjLnkgKyBjLnoqYy56KTtcbiAgICAgIGMueCAvPSBtOyBjLnkgLz0gbTsgYy56IC89IG07XG4gICAgICAvLyByb3RhdGlvbiBtYXRyaXhcbiAgICAgIHZhciBSID0gWyAgIGMueCpjLngsICAgYy54KmMueS1jLnosIGMueCpjLnorYy55LFxuICAgICAgICAgICAgICAgIGMueCpjLnkrYy56LCAgIGMueSpjLnksICAgYy55KmMuei1jLngsXG4gICAgICAgICAgICAgICAgYy54KmMuei1jLnksIGMueSpjLnorYy54LCAgIGMueipjLnogICAgXTtcbiAgICAgIC8vIG5vcm1hbCB2ZWN0b3I6XG4gICAgICB2YXIgbiA9IHtcbiAgICAgICAgeDogUlswXSAqIHIxLnggKyBSWzFdICogcjEueSArIFJbMl0gKiByMS56LFxuICAgICAgICB5OiBSWzNdICogcjEueCArIFJbNF0gKiByMS55ICsgUls1XSAqIHIxLnosXG4gICAgICAgIHo6IFJbNl0gKiByMS54ICsgUls3XSAqIHIxLnkgKyBSWzhdICogcjEuelxuICAgICAgfTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG4gICAgaHVsbDogZnVuY3Rpb24odCkge1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cyxcbiAgICAgICAgICBfcCA9IFtdLFxuICAgICAgICAgIHB0LFxuICAgICAgICAgIHEgPSBbXSxcbiAgICAgICAgICBpZHggPSAwLFxuICAgICAgICAgIGk9MCxcbiAgICAgICAgICBsPTA7XG4gICAgICBxW2lkeCsrXSA9IHBbMF07XG4gICAgICBxW2lkeCsrXSA9IHBbMV07XG4gICAgICBxW2lkeCsrXSA9IHBbMl07XG4gICAgICBpZih0aGlzLm9yZGVyID09PSAzKSB7IHFbaWR4KytdID0gcFszXTsgfVxuICAgICAgLy8gd2UgbGVycCBiZXR3ZWVuIGFsbCBwb2ludHMgYXQgZWFjaCBpdGVyYXRpb24sIHVudGlsIHdlIGhhdmUgMSBwb2ludCBsZWZ0LlxuICAgICAgd2hpbGUocC5sZW5ndGg+MSkge1xuICAgICAgICBfcCA9IFtdO1xuICAgICAgICBmb3IoaT0wLCBsPXAubGVuZ3RoLTE7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgcHQgPSB1dGlscy5sZXJwKHQscFtpXSxwW2krMV0pO1xuICAgICAgICAgIHFbaWR4KytdID0gcHQ7XG4gICAgICAgICAgX3AucHVzaChwdCk7XG4gICAgICAgIH1cbiAgICAgICAgcCA9IF9wO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHE7XG4gICAgfSxcbiAgICBzcGxpdDogZnVuY3Rpb24odDEsIHQyKSB7XG4gICAgICAvLyBzaG9ydGN1dHNcbiAgICAgIGlmKHQxPT09MCAmJiAhIXQyKSB7IHJldHVybiB0aGlzLnNwbGl0KHQyKS5sZWZ0OyB9XG4gICAgICBpZih0Mj09PTEpIHsgcmV0dXJuIHRoaXMuc3BsaXQodDEpLnJpZ2h0OyB9XG5cbiAgICAgIC8vIG5vIHNob3J0Y3V0OiB1c2UgXCJkZSBDYXN0ZWxqYXVcIiBpdGVyYXRpb24uXG4gICAgICB2YXIgcSA9IHRoaXMuaHVsbCh0MSk7XG4gICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBsZWZ0OiB0aGlzLm9yZGVyID09PSAyID8gbmV3IEJlemllcihbcVswXSxxWzNdLHFbNV1dKSA6IG5ldyBCZXppZXIoW3FbMF0scVs0XSxxWzddLHFbOV1dKSxcbiAgICAgICAgcmlnaHQ6IHRoaXMub3JkZXIgPT09IDIgPyBuZXcgQmV6aWVyKFtxWzVdLHFbNF0scVsyXV0pIDogbmV3IEJlemllcihbcVs5XSxxWzhdLHFbNl0scVszXV0pLFxuICAgICAgICBzcGFuOiBxXG4gICAgICB9O1xuXG4gICAgICAvLyBtYWtlIHN1cmUgd2UgYmluZCBfdDEvX3QyIGluZm9ybWF0aW9uIVxuICAgICAgcmVzdWx0LmxlZnQuX3QxICA9IHV0aWxzLm1hcCgwLCAgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQubGVmdC5fdDIgID0gdXRpbHMubWFwKHQxLCAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5yaWdodC5fdDEgPSB1dGlscy5tYXAodDEsIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LnJpZ2h0Ll90MiA9IHV0aWxzLm1hcCgxLCAgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgbm8gdDIsIHdlJ3JlIGRvbmVcbiAgICAgIGlmKCF0MikgeyByZXR1cm4gcmVzdWx0OyB9XG5cbiAgICAgIC8vIGlmIHdlIGhhdmUgYSB0Miwgc3BsaXQgYWdhaW46XG4gICAgICB0MiA9IHV0aWxzLm1hcCh0Mix0MSwxLDAsMSk7XG4gICAgICB2YXIgc3Vic3BsaXQgPSByZXN1bHQucmlnaHQuc3BsaXQodDIpO1xuICAgICAgcmV0dXJuIHN1YnNwbGl0LmxlZnQ7XG4gICAgfSxcbiAgICBleHRyZW1hOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaW1zID0gdGhpcy5kaW1zLFxuICAgICAgICAgIHJlc3VsdD17fSxcbiAgICAgICAgICByb290cz1bXSxcbiAgICAgICAgICBwLCBtZm47XG4gICAgICBkaW1zLmZvckVhY2goZnVuY3Rpb24oZGltKSB7XG4gICAgICAgIG1mbiA9IGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHZbZGltXTsgfTtcbiAgICAgICAgcCA9IHRoaXMuZHBvaW50c1swXS5tYXAobWZuKTtcbiAgICAgICAgcmVzdWx0W2RpbV0gPSB1dGlscy5kcm9vdHMocCk7XG4gICAgICAgIGlmKHRoaXMub3JkZXIgPT09IDMpIHtcbiAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzFdLm1hcChtZm4pO1xuICAgICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uY29uY2F0KHV0aWxzLmRyb290cyhwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2RpbV0gPSByZXN1bHRbZGltXS5maWx0ZXIoZnVuY3Rpb24odCkgeyByZXR1cm4gKHQ+PTAgJiYgdDw9MSk7IH0pO1xuICAgICAgICByb290cyA9IHJvb3RzLmNvbmNhdChyZXN1bHRbZGltXS5zb3J0KCkpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJvb3RzID0gcm9vdHMuc29ydCgpLmZpbHRlcihmdW5jdGlvbih2LGlkeCkgeyByZXR1cm4gKHJvb3RzLmluZGV4T2YodikgPT09IGlkeCk7IH0pO1xuICAgICAgcmVzdWx0LnZhbHVlcyA9IHJvb3RzO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGJib3g6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKSwgcmVzdWx0ID0ge307XG4gICAgICB0aGlzLmRpbXMuZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgIHJlc3VsdFtkXSA9IHV0aWxzLmdldG1pbm1heCh0aGlzLCBkLCBleHRyZW1hW2RdKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgb3ZlcmxhcHM6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB2YXIgbGJib3ggPSB0aGlzLmJib3goKSxcbiAgICAgICAgICB0YmJveCA9IGN1cnZlLmJib3goKTtcbiAgICAgIHJldHVybiB1dGlscy5iYm94b3ZlcmxhcChsYmJveCx0YmJveCk7XG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKHQsIGQpIHtcbiAgICAgIGlmKHR5cGVvZiBkICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5nZXQodCk7XG4gICAgICAgIHZhciBuID0gdGhpcy5ub3JtYWwodCk7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgYzogYyxcbiAgICAgICAgICBuOiBuLFxuICAgICAgICAgIHg6IGMueCArIG4ueCAqIGQsXG4gICAgICAgICAgeTogYy55ICsgbi55ICogZFxuICAgICAgICB9O1xuICAgICAgICBpZih0aGlzLl8zZCkge1xuICAgICAgICAgIHJldC56ID0gYy56ICsgbi56ICogZDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuX2xpbmVhcikge1xuICAgICAgICB2YXIgbnYgPSB0aGlzLm5vcm1hbCgwKTtcbiAgICAgICAgdmFyIGNvb3JkcyA9IHRoaXMucG9pbnRzLm1hcChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgICAgIHg6IHAueCArIHQgKiBudi54LFxuICAgICAgICAgICAgeTogcC55ICsgdCAqIG52LnlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmKHAueiAmJiBuLnopIHsgcmV0LnogPSBwLnogKyB0ICogbnYuejsgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gW25ldyBCZXppZXIoY29vcmRzKV07XG4gICAgICB9XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7XG4gICAgICByZXR1cm4gcmVkdWNlZC5tYXAoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy5zY2FsZSh0KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2ltcGxlOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmKHRoaXMub3JkZXI9PT0zKSB7XG4gICAgICAgIHZhciBhMSA9IHV0aWxzLmFuZ2xlKHRoaXMucG9pbnRzWzBdLCB0aGlzLnBvaW50c1szXSwgdGhpcy5wb2ludHNbMV0pO1xuICAgICAgICB2YXIgYTIgPSB1dGlscy5hbmdsZSh0aGlzLnBvaW50c1swXSwgdGhpcy5wb2ludHNbM10sIHRoaXMucG9pbnRzWzJdKTtcbiAgICAgICAgaWYoYTE+MCAmJiBhMjwwIHx8IGExPDAgJiYgYTI+MCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIG4xID0gdGhpcy5ub3JtYWwoMCk7XG4gICAgICB2YXIgbjIgPSB0aGlzLm5vcm1hbCgxKTtcbiAgICAgIHZhciBzID0gbjEueCpuMi54ICsgbjEueSpuMi55O1xuICAgICAgaWYodGhpcy5fM2QpIHsgcyArPSBuMS56Km4yLno7IH1cbiAgICAgIHZhciBhbmdsZSA9IGFicyhhY29zKHMpKTtcbiAgICAgIHJldHVybiBhbmdsZSA8IHBpLzM7XG4gICAgfSxcbiAgICByZWR1Y2U6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIHQxPTAsIHQyPTAsIHN0ZXA9MC4wMSwgc2VnbWVudCwgcGFzczE9W10sIHBhc3MyPVtdO1xuICAgICAgLy8gZmlyc3QgcGFzczogc3BsaXQgb24gZXh0cmVtYVxuICAgICAgdmFyIGV4dHJlbWEgPSB0aGlzLmV4dHJlbWEoKS52YWx1ZXM7XG4gICAgICBpZihleHRyZW1hLmluZGV4T2YoMCk9PT0tMSkgeyBleHRyZW1hID0gWzBdLmNvbmNhdChleHRyZW1hKTsgfVxuICAgICAgaWYoZXh0cmVtYS5pbmRleE9mKDEpPT09LTEpIHsgZXh0cmVtYS5wdXNoKDEpOyB9XG5cbiAgICAgIGZvcih0MT1leHRyZW1hWzBdLCBpPTE7IGk8ZXh0cmVtYS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0MiA9IGV4dHJlbWFbaV07XG4gICAgICAgIHNlZ21lbnQgPSB0aGlzLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgc2VnbWVudC5fdDEgPSB0MTtcbiAgICAgICAgc2VnbWVudC5fdDIgPSB0MjtcbiAgICAgICAgcGFzczEucHVzaChzZWdtZW50KTtcbiAgICAgICAgdDEgPSB0MjtcbiAgICAgIH1cblxuICAgICAgLy8gc2Vjb25kIHBhc3M6IGZ1cnRoZXIgcmVkdWNlIHRoZXNlIHNlZ21lbnRzIHRvIHNpbXBsZSBzZWdtZW50c1xuICAgICAgcGFzczEuZm9yRWFjaChmdW5jdGlvbihwMSkge1xuICAgICAgICB0MT0wO1xuICAgICAgICB0Mj0wO1xuICAgICAgICB3aGlsZSh0MiA8PSAxKSB7XG4gICAgICAgICAgZm9yKHQyPXQxK3N0ZXA7IHQyPD0xK3N0ZXA7IHQyKz1zdGVwKSB7XG4gICAgICAgICAgICBzZWdtZW50ID0gcDEuc3BsaXQodDEsdDIpO1xuICAgICAgICAgICAgaWYoIXNlZ21lbnQuc2ltcGxlKCkpIHtcbiAgICAgICAgICAgICAgdDIgLT0gc3RlcDtcbiAgICAgICAgICAgICAgaWYoYWJzKHQxLXQyKTxzdGVwKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5ldmVyIGZvcm0gYSByZWR1Y3Rpb25cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgICAgICAgc2VnbWVudC5fdDEgPSB1dGlscy5tYXAodDEsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgICAgICBzZWdtZW50Ll90MiA9IHV0aWxzLm1hcCh0MiwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgICAgIHBhc3MyLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgIHQxID0gdDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZih0MTwxKSB7XG4gICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLDEpO1xuICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICBzZWdtZW50Ll90MiA9IHAxLl90MjtcbiAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwYXNzMjtcbiAgICB9LFxuICAgIHNjYWxlOiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb3JkZXIgPSB0aGlzLm9yZGVyO1xuICAgICAgdmFyIGRpc3RhbmNlRm4gPSBmYWxzZVxuICAgICAgaWYodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIikgeyBkaXN0YW5jZUZuID0gZDsgfVxuICAgICAgaWYoZGlzdGFuY2VGbiAmJiBvcmRlciA9PT0gMikgeyByZXR1cm4gdGhpcy5yYWlzZSgpLnNjYWxlKGRpc3RhbmNlRm4pOyB9XG5cbiAgICAgIC8vIFRPRE86IGFkZCBzcGVjaWFsIGhhbmRsaW5nIGZvciBkZWdlbmVyYXRlICg9bGluZWFyKSBjdXJ2ZXMuXG4gICAgICB2YXIgY2xvY2t3aXNlID0gdGhpcy5jbG9ja3dpc2U7XG4gICAgICB2YXIgcjEgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigwKSA6IGQ7XG4gICAgICB2YXIgcjIgPSBkaXN0YW5jZUZuID8gZGlzdGFuY2VGbigxKSA6IGQ7XG4gICAgICB2YXIgdiA9IFsgdGhpcy5vZmZzZXQoMCwxMCksIHRoaXMub2Zmc2V0KDEsMTApIF07XG4gICAgICB2YXIgbyA9IHV0aWxzLmxsaTQodlswXSwgdlswXS5jLCB2WzFdLCB2WzFdLmMpO1xuICAgICAgaWYoIW8pIHsgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IHNjYWxlIHRoaXMgY3VydmUuIFRyeSByZWR1Y2luZyBpdCBmaXJzdC5cIik7IH1cbiAgICAgIC8vIG1vdmUgYWxsIHBvaW50cyBieSBkaXN0YW5jZSAnZCcgd3J0IHRoZSBvcmlnaW4gJ28nXG4gICAgICB2YXIgcG9pbnRzPXRoaXMucG9pbnRzLCBucD1bXTtcblxuICAgICAgLy8gbW92ZSBlbmQgcG9pbnRzIGJ5IGZpeGVkIGRpc3RhbmNlIGFsb25nIG5vcm1hbC5cbiAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcCA9IG5wW3Qqb3JkZXJdID0gdXRpbHMuY29weShwb2ludHNbdCpvcmRlcl0pO1xuICAgICAgICBwLnggKz0gKHQ/cjI6cjEpICogdlt0XS5uLng7XG4gICAgICAgIHAueSArPSAodD9yMjpyMSkgKiB2W3RdLm4ueTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIGlmICghZGlzdGFuY2VGbikge1xuICAgICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIHRvIGxpZSBvbiB0aGUgaW50ZXJzZWN0aW9uIG9mIHRoZSBvZmZzZXRcbiAgICAgICAgLy8gZGVyaXZhdGl2ZSB2ZWN0b3IsIGFuZCB0aGUgb3JpZ2luLXRocm91Z2gtY29udHJvbCB2ZWN0b3JcbiAgICAgICAgWzAsMV0uZm9yRWFjaChmdW5jdGlvbih0KSB7XG4gICAgICAgICAgaWYodGhpcy5vcmRlcj09PTIgJiYgISF0KSByZXR1cm47XG4gICAgICAgICAgdmFyIHAgPSBucFt0Km9yZGVyXTtcbiAgICAgICAgICB2YXIgZCA9IHRoaXMuZGVyaXZhdGl2ZSh0KTtcbiAgICAgICAgICB2YXIgcDIgPSB7IHg6IHAueCArIGQueCwgeTogcC55ICsgZC55IH07XG4gICAgICAgICAgbnBbdCsxXSA9IHV0aWxzLmxsaTQocCwgcDIsIG8sIHBvaW50c1t0KzFdKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgICAgfVxuXG4gICAgICAvLyBtb3ZlIGNvbnRyb2wgcG9pbnRzIGJ5IFwiaG93ZXZlciBtdWNoIG5lY2Vzc2FyeSB0b1xuICAgICAgLy8gZW5zdXJlIHRoZSBjb3JyZWN0IHRhbmdlbnQgdG8gZW5kcG9pbnRcIi5cbiAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICBpZih0aGlzLm9yZGVyPT09MiAmJiAhIXQpIHJldHVybjtcbiAgICAgICAgdmFyIHAgPSBwb2ludHNbdCsxXTtcbiAgICAgICAgdmFyIG92ID0ge1xuICAgICAgICAgIHg6IHAueCAtIG8ueCxcbiAgICAgICAgICB5OiBwLnkgLSBvLnlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJjID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oKHQrMSkvb3JkZXIpIDogZDtcbiAgICAgICAgaWYoZGlzdGFuY2VGbiAmJiAhY2xvY2t3aXNlKSByYyA9IC1yYztcbiAgICAgICAgdmFyIG0gPSBzcXJ0KG92Lngqb3YueCArIG92Lnkqb3YueSk7XG4gICAgICAgIG92LnggLz0gbTtcbiAgICAgICAgb3YueSAvPSBtO1xuICAgICAgICBucFt0KzFdID0ge1xuICAgICAgICAgIHg6IHAueCArIHJjKm92LngsXG4gICAgICAgICAgeTogcC55ICsgcmMqb3YueVxuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcmV0dXJuIG5ldyBCZXppZXIobnApO1xuICAgIH0sXG4gICAgb3V0bGluZTogZnVuY3Rpb24oZDEsIGQyLCBkMywgZDQpIHtcbiAgICAgIGQyID0gKHR5cGVvZiBkMiA9PT0gXCJ1bmRlZmluZWRcIikgPyBkMSA6IGQyO1xuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpLFxuICAgICAgICAgIGxlbiA9IHJlZHVjZWQubGVuZ3RoLFxuICAgICAgICAgIGZjdXJ2ZXMgPSBbXSxcbiAgICAgICAgICBiY3VydmVzID0gW10sXG4gICAgICAgICAgcCxcbiAgICAgICAgICBhbGVuID0gMCxcbiAgICAgICAgICB0bGVuID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgdmFyIGdyYWR1YXRlZCA9ICh0eXBlb2YgZDMgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGQ0ICE9PSBcInVuZGVmaW5lZFwiKTtcblxuICAgICAgZnVuY3Rpb24gbGluZWFyRGlzdGFuY2VGdW5jdGlvbihzLGUsIHRsZW4sYWxlbixzbGVuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHZhciBmMSA9IGFsZW4vdGxlbiwgZjIgPSAoYWxlbitzbGVuKS90bGVuLCBkID0gZS1zO1xuICAgICAgICAgIHJldHVybiB1dGlscy5tYXAodiwgMCwxLCBzK2YxKmQsIHMrZjIqZCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvLyBmb3JtIGN1cnZlIG91bGluZXNcbiAgICAgIHJlZHVjZWQuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgICAgIHNsZW4gPSBzZWdtZW50Lmxlbmd0aCgpO1xuICAgICAgICBpZiAoZ3JhZHVhdGVkKSB7XG4gICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoICBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKCBkMSwgZDMsIHRsZW4sYWxlbixzbGVuKSAgKSk7XG4gICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoICBsaW5lYXJEaXN0YW5jZUZ1bmN0aW9uKC1kMiwtZDQsIHRsZW4sYWxlbixzbGVuKSAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoIGQxKSk7XG4gICAgICAgICAgYmN1cnZlcy5wdXNoKHNlZ21lbnQuc2NhbGUoLWQyKSk7XG4gICAgICAgIH1cbiAgICAgICAgYWxlbiArPSBzbGVuO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHJldmVyc2UgdGhlIFwicmV0dXJuXCIgb3V0bGluZVxuICAgICAgYmN1cnZlcyA9IGJjdXJ2ZXMubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcCA9IHMucG9pbnRzO1xuICAgICAgICBpZihwWzNdKSB7IHMucG9pbnRzID0gW3BbM10scFsyXSxwWzFdLHBbMF1dOyB9XG4gICAgICAgIGVsc2UgeyBzLnBvaW50cyA9IFtwWzJdLHBbMV0scFswXV07IH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KS5yZXZlcnNlKCk7XG5cbiAgICAgIC8vIGZvcm0gdGhlIGVuZGNhcHMgYXMgbGluZXNcbiAgICAgIHZhciBmcyA9IGZjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuICAgICAgICAgIGZlID0gZmN1cnZlc1tsZW4tMV0ucG9pbnRzW2ZjdXJ2ZXNbbGVuLTFdLnBvaW50cy5sZW5ndGgtMV0sXG4gICAgICAgICAgYnMgPSBiY3VydmVzW2xlbi0xXS5wb2ludHNbYmN1cnZlc1tsZW4tMV0ucG9pbnRzLmxlbmd0aC0xXSxcbiAgICAgICAgICBiZSA9IGJjdXJ2ZXNbMF0ucG9pbnRzWzBdLFxuICAgICAgICAgIGxzID0gdXRpbHMubWFrZWxpbmUoYnMsZnMpLFxuICAgICAgICAgIGxlID0gdXRpbHMubWFrZWxpbmUoZmUsYmUpLFxuICAgICAgICAgIHNlZ21lbnRzID0gW2xzXS5jb25jYXQoZmN1cnZlcykuY29uY2F0KFtsZV0pLmNvbmNhdChiY3VydmVzKSxcbiAgICAgICAgICBzbGVuID0gc2VnbWVudHMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gbmV3IFBvbHlCZXppZXIoc2VnbWVudHMpO1xuICAgIH0sXG4gICAgb3V0bGluZXNoYXBlczogZnVuY3Rpb24oZDEsIGQyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgZDIgPSBkMiB8fCBkMTtcbiAgICAgIHZhciBvdXRsaW5lID0gdGhpcy5vdXRsaW5lKGQxLGQyKS5jdXJ2ZXM7XG4gICAgICB2YXIgc2hhcGVzID0gW107XG4gICAgICBmb3IodmFyIGk9MSwgbGVuPW91dGxpbmUubGVuZ3RoOyBpIDwgbGVuLzI7IGkrKykge1xuICAgICAgICB2YXIgc2hhcGUgPSB1dGlscy5tYWtlc2hhcGUob3V0bGluZVtpXSwgb3V0bGluZVtsZW4taV0sIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgc2hhcGUuc3RhcnRjYXAudmlydHVhbCA9IChpID4gMSk7XG4gICAgICAgIHNoYXBlLmVuZGNhcC52aXJ0dWFsID0gKGkgPCBsZW4vMi0xKTtcbiAgICAgICAgc2hhcGVzLnB1c2goc2hhcGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNoYXBlcztcbiAgICB9LFxuICAgIGludGVyc2VjdHM6IGZ1bmN0aW9uKGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgaWYoIWN1cnZlKSByZXR1cm4gdGhpcy5zZWxmaW50ZXJzZWN0cyhjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICBpZihjdXJ2ZS5wMSAmJiBjdXJ2ZS5wMikge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lSW50ZXJzZWN0cyhjdXJ2ZSk7XG4gICAgICB9XG4gICAgICBpZihjdXJ2ZSBpbnN0YW5jZW9mIEJlemllcikgeyBjdXJ2ZSA9IGN1cnZlLnJlZHVjZSgpOyB9XG4gICAgICByZXR1cm4gdGhpcy5jdXJ2ZWludGVyc2VjdHModGhpcy5yZWR1Y2UoKSwgY3VydmUsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICB9LFxuICAgIGxpbmVJbnRlcnNlY3RzOiBmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgbXggPSBtaW4obGluZS5wMS54LCBsaW5lLnAyLngpLFxuICAgICAgICAgIG15ID0gbWluKGxpbmUucDEueSwgbGluZS5wMi55KSxcbiAgICAgICAgICBNWCA9IG1heChsaW5lLnAxLngsIGxpbmUucDIueCksXG4gICAgICAgICAgTVkgPSBtYXgobGluZS5wMS55LCBsaW5lLnAyLnkpLFxuICAgICAgICAgIHNlbGY9dGhpcztcbiAgICAgIHJldHVybiB1dGlscy5yb290cyh0aGlzLnBvaW50cywgbGluZSkuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHAgPSBzZWxmLmdldCh0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJldHdlZW4ocC54LCBteCwgTVgpICYmIHV0aWxzLmJldHdlZW4ocC55LCBteSwgTVkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZWxmaW50ZXJzZWN0czogZnVuY3Rpb24oY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKTtcbiAgICAgIC8vIFwic2ltcGxlXCIgY3VydmVzIGNhbm5vdCBpbnRlcnNlY3Qgd2l0aCB0aGVpciBkaXJlY3RcbiAgICAgIC8vIG5laWdoYm91ciwgc28gZm9yIGVhY2ggc2VnbWVudCBYIHdlIGNoZWNrIHdoZXRoZXJcbiAgICAgIC8vIGl0IGludGVyc2VjdHMgWzA6eC0yXVt4KzI6bGFzdF0uXG4gICAgICB2YXIgaSxsZW49cmVkdWNlZC5sZW5ndGgtMixyZXN1bHRzPVtdLHJlc3VsdCxsZWZ0LHJpZ2h0O1xuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBsZWZ0ID0gcmVkdWNlZC5zbGljZShpLGkrMSk7XG4gICAgICAgIHJpZ2h0ID0gcmVkdWNlZC5zbGljZShpKzIpO1xuICAgICAgICByZXN1bHQgPSB0aGlzLmN1cnZlaW50ZXJzZWN0cyhsZWZ0LCByaWdodCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoIHJlc3VsdCApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSxcbiAgICBjdXJ2ZWludGVyc2VjdHM6IGZ1bmN0aW9uKGMxLCBjMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBwYWlycyA9IFtdO1xuICAgICAgLy8gc3RlcCAxOiBwYWlyIG9mZiBhbnkgb3ZlcmxhcHBpbmcgc2VnbWVudHNcbiAgICAgIGMxLmZvckVhY2goZnVuY3Rpb24obCkge1xuICAgICAgICBjMi5mb3JFYWNoKGZ1bmN0aW9uKHIpIHtcbiAgICAgICAgICBpZihsLm92ZXJsYXBzKHIpKSB7XG4gICAgICAgICAgICBwYWlycy5wdXNoKHsgbGVmdDogbCwgcmlnaHQ6IHIgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgLy8gc3RlcCAyOiBmb3IgZWFjaCBwYWlyaW5nLCBydW4gdGhyb3VnaCB0aGUgY29udmVyZ2VuY2UgYWxnb3JpdGhtLlxuICAgICAgdmFyIGludGVyc2VjdGlvbnMgPSBbXTtcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgaWYocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5jb25jYXQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgICB9LFxuICAgIGFyY3M6IGZ1bmN0aW9uKGVycm9yVGhyZXNob2xkKSB7XG4gICAgICBlcnJvclRocmVzaG9sZCA9IGVycm9yVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIHZhciBjaXJjbGVzID0gW107XG4gICAgICByZXR1cm4gdGhpcy5faXRlcmF0ZShlcnJvclRocmVzaG9sZCwgY2lyY2xlcyk7XG4gICAgfSxcbiAgICBfZXJyb3I6IGZ1bmN0aW9uKHBjLCBucDEsIHMsIGUpIHtcbiAgICAgIHZhciBxID0gKGUgLSBzKSAvIDQsXG4gICAgICAgICAgYzEgPSB0aGlzLmdldChzICsgcSksXG4gICAgICAgICAgYzIgPSB0aGlzLmdldChlIC0gcSksXG4gICAgICAgICAgcmVmID0gdXRpbHMuZGlzdChwYywgbnAxKSxcbiAgICAgICAgICBkMSAgPSB1dGlscy5kaXN0KHBjLCBjMSksXG4gICAgICAgICAgZDIgID0gdXRpbHMuZGlzdChwYywgYzIpO1xuICAgICAgcmV0dXJuIGFicyhkMS1yZWYpICsgYWJzKGQyLXJlZik7XG4gICAgfSxcbiAgICBfaXRlcmF0ZTogZnVuY3Rpb24oZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpIHtcbiAgICAgIHZhciBzID0gMCwgZSA9IDEsIHNhZmV0eTtcbiAgICAgIC8vIHdlIGRvIGEgYmluYXJ5IHNlYXJjaCB0byBmaW5kIHRoZSBcImdvb2QgYHRgIGNsb3Nlc3QgdG8gbm8tbG9uZ2VyLWdvb2RcIlxuICAgICAgZG8ge1xuICAgICAgICBzYWZldHk9MDtcblxuICAgICAgICAvLyBzdGVwIDE6IHN0YXJ0IHdpdGggdGhlIG1heGltdW0gcG9zc2libGUgYXJjXG4gICAgICAgIGUgPSAxO1xuXG4gICAgICAgIC8vIHBvaW50czpcbiAgICAgICAgdmFyIG5wMSA9IHRoaXMuZ2V0KHMpLCBucDIsIG5wMywgYXJjLCBwcmV2X2FyYztcblxuICAgICAgICAvLyBib29sZWFuczpcbiAgICAgICAgdmFyIGN1cnJfZ29vZCA9IGZhbHNlLCBwcmV2X2dvb2QgPSBmYWxzZSwgZG9uZTtcblxuICAgICAgICAvLyBudW1iZXJzOlxuICAgICAgICB2YXIgbSA9IGUsIHByZXZfZSA9IDEsIHN0ZXAgPSAwO1xuXG4gICAgICAgIC8vIHN0ZXAgMjogZmluZCB0aGUgYmVzdCBwb3NzaWJsZSBhcmNcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHByZXZfZ29vZCA9IGN1cnJfZ29vZDtcbiAgICAgICAgICBwcmV2X2FyYyA9IGFyYztcbiAgICAgICAgICBtID0gKHMgKyBlKS8yO1xuICAgICAgICAgIHN0ZXArKztcblxuICAgICAgICAgIG5wMiA9IHRoaXMuZ2V0KG0pO1xuICAgICAgICAgIG5wMyA9IHRoaXMuZ2V0KGUpO1xuXG4gICAgICAgICAgYXJjID0gdXRpbHMuZ2V0Y2NlbnRlcihucDEsIG5wMiwgbnAzKTtcbiAgICAgICAgICBcbiAgICAgICAgICAvL2Fsc28gc2F2ZSB0aGUgdCB2YWx1ZXNcbiAgICAgICAgICBhcmMuaW50ZXJ2YWwgPSB7XG4gICAgICAgICAgICBzdGFydDogcyxcbiAgICAgICAgICAgIGVuZDogZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLl9lcnJvcihhcmMsIG5wMSwgcywgZSk7XG4gICAgICAgICAgY3Vycl9nb29kID0gKGVycm9yIDw9IGVycm9yVGhyZXNob2xkKTtcblxuICAgICAgICAgIGRvbmUgPSBwcmV2X2dvb2QgJiYgIWN1cnJfZ29vZDtcbiAgICAgICAgICBpZighZG9uZSkgcHJldl9lID0gZTtcblxuICAgICAgICAgIC8vIHRoaXMgYXJjIGlzIGZpbmU6IHdlIGNhbiBtb3ZlICdlJyB1cCB0byBzZWUgaWYgd2UgY2FuIGZpbmQgYSB3aWRlciBhcmNcbiAgICAgICAgICBpZihjdXJyX2dvb2QpIHtcbiAgICAgICAgICAgIC8vIGlmIGUgaXMgYWxyZWFkeSBhdCBtYXgsIHRoZW4gd2UncmUgZG9uZSBmb3IgdGhpcyBhcmMuXG4gICAgICAgICAgICBpZiAoZSA+PSAxKSB7XG4gICAgICAgICAgICAgIHByZXZfZSA9IDE7XG4gICAgICAgICAgICAgIHByZXZfYXJjID0gYXJjO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG5vdCwgbW92ZSBpdCB1cCBieSBoYWxmIHRoZSBpdGVyYXRpb24gZGlzdGFuY2VcbiAgICAgICAgICAgIGUgPSBlICsgKGUtcykvMjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGlzIGlzIGEgYmFkIGFyYzogd2UgbmVlZCB0byBtb3ZlICdlJyBkb3duIHRvIGZpbmQgYSBnb29kIGFyY1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZSA9IG07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlKCFkb25lICYmIHNhZmV0eSsrPDEwMCk7XG5cbiAgICAgICAgaWYoc2FmZXR5Pj0xMDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiYXJjIGFic3RyYWN0aW9uIHNvbWVob3cgZmFpbGVkLi4uXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJbRl0gYXJjIGZvdW5kXCIsIHMsIHByZXZfZSwgcHJldl9hcmMueCwgcHJldl9hcmMueSwgcHJldl9hcmMucywgcHJldl9hcmMuZSk7XG5cbiAgICAgICAgcHJldl9hcmMgPSAocHJldl9hcmMgPyBwcmV2X2FyYyA6IGFyYyk7XG4gICAgICAgIGNpcmNsZXMucHVzaChwcmV2X2FyYyk7XG4gICAgICAgIHMgPSBwcmV2X2U7XG4gICAgICB9XG4gICAgICB3aGlsZShlIDwgMSk7XG4gICAgICByZXR1cm4gY2lyY2xlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciB1dGlscyA9IHJlcXVpcmUoOTEpO1xuXG4gIC8qKlxuICAgKiBQb2x5IEJlemllclxuICAgKiBAcGFyYW0ge1t0eXBlXX0gY3VydmVzIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHZhciBQb2x5QmV6aWVyID0gZnVuY3Rpb24oY3VydmVzKSB7XG4gICAgdGhpcy5jdXJ2ZXMgPSBbXTtcbiAgICB0aGlzLl8zZCA9IGZhbHNlO1xuICAgIGlmKCEhY3VydmVzKSB7XG4gICAgICB0aGlzLmN1cnZlcyA9IGN1cnZlcztcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5jdXJ2ZXNbMF0uXzNkO1xuICAgIH1cbiAgfVxuXG4gIFBvbHlCZXppZXIucHJvdG90eXBlID0ge1xuICAgIHZhbHVlT2Y6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5wb2ludHNUb1N0cmluZyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICBhZGRDdXJ2ZTogZnVuY3Rpb24oY3VydmUpIHtcbiAgICAgIHRoaXMuY3VydmVzLnB1c2goY3VydmUpO1xuICAgICAgdGhpcy5fM2QgPSB0aGlzLl8zZCB8fCBjdXJ2ZS5fM2Q7XG4gICAgfSxcbiAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VydmVzLm1hcChmdW5jdGlvbih2KSB7IHJldHVybiB2Lmxlbmd0aCgpOyB9KS5yZWR1Y2UoZnVuY3Rpb24oYSxiKSB7IHJldHVybiBhK2I7IH0pO1xuICAgIH0sXG4gICAgY3VydmU6IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VydmVzW2lkeF07XG4gICAgfSxcbiAgICBiYm94OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjID0gdGhpcy5jdXJ2ZXM7XG4gICAgICB2YXIgYmJveCA9IGNbMF0uYmJveCgpO1xuICAgICAgZm9yKHZhciBpPTE7IGk8Yy5sZW5ndGg7IGkrKykge1xuICAgICAgICB1dGlscy5leHBhbmRib3goYmJveCwgY1tpXS5iYm94KCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJib3g7XG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKGQpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBbXTtcbiAgICAgIHRoaXMuY3VydmVzLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQuY29uY2F0KHYub2Zmc2V0KGQpKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQb2x5QmV6aWVyKG9mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gUG9seUJlemllcjtcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIG1hdGgtaW5saW5pbmcuXG4gIHZhciBhYnMgPSBNYXRoLmFicyxcbiAgICAgIGNvcyA9IE1hdGguY29zLFxuICAgICAgc2luID0gTWF0aC5zaW4sXG4gICAgICBhY29zID0gTWF0aC5hY29zLFxuICAgICAgYXRhbjIgPSBNYXRoLmF0YW4yLFxuICAgICAgc3FydCA9IE1hdGguc3FydCxcbiAgICAgIHBvdyA9IE1hdGgucG93LFxuICAgICAgLy8gY3ViZSByb290IGZ1bmN0aW9uIHlpZWxkaW5nIHJlYWwgcm9vdHNcbiAgICAgIGNydCA9IGZ1bmN0aW9uKHYpIHsgcmV0dXJuICh2PDApID8gLXBvdygtdiwxLzMpIDogcG93KHYsMS8zKTsgfSxcbiAgICAgIC8vIHRyaWcgY29uc3RhbnRzXG4gICAgICBwaSA9IE1hdGguUEksXG4gICAgICB0YXUgPSAyKnBpLFxuICAgICAgcXVhcnQgPSBwaS8yLFxuICAgICAgLy8gZmxvYXQgcHJlY2lzaW9uIHNpZ25pZmljYW50IGRlY2ltYWxcbiAgICAgIGVwc2lsb24gPSAwLjAwMDAwMTtcblxuICAvLyBCZXppZXIgdXRpbGl0eSBmdW5jdGlvbnNcbiAgdmFyIHV0aWxzID0ge1xuICAgIC8vIExlZ2VuZHJlLUdhdXNzIGFic2Npc3NhZSB3aXRoIG49MjQgKHhfaSB2YWx1ZXMsIGRlZmluZWQgYXQgaT1uIGFzIHRoZSByb290cyBvZiB0aGUgbnRoIG9yZGVyIExlZ2VuZHJlIHBvbHlub21pYWwgUG4oeCkpXG4gICAgVHZhbHVlczogW1xuICAgICAgLTAuMDY0MDU2ODkyODYyNjA1NjI2MDg1MDQzMDgyNjI0NzQ1MDM4NTkwOSxcbiAgICAgICAwLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAtMC4xOTExMTg4Njc0NzM2MTYzMDkxNTg2Mzk4MjA3NTcwNjk2MzE4NDA0LFxuICAgICAgIDAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgIC0wLjMxNTA0MjY3OTY5NjE2MzM3NDM4Njc5MzI5MTMxOTgxMDI0MDc4NjQsXG4gICAgICAgMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgLTAuNDMzNzkzNTA3NjI2MDQ1MTM4NDg3MDg0MjMxOTEzMzQ5NzEyNDUyNCxcbiAgICAgICAwLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAtMC41NDU0MjE0NzEzODg4Mzk1MzU2NTgzNzU2MTcyMTgzNzIzNzAwMTA3LFxuICAgICAgIDAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgIC0wLjY0ODA5MzY1MTkzNjk3NTU2OTI1MjQ5NTc4NjkxMDc0NzYyNjY2OTYsXG4gICAgICAgMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgLTAuNzQwMTI0MTkxNTc4NTU0MzY0MjQzODI4MTAzMDk5OTc4NDI1NTIzMixcbiAgICAgICAwLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAtMC44MjAwMDE5ODU5NzM5MDI5MjE5NTM5NDk4NzI2Njk3NDUyMDgwNzYxLFxuICAgICAgIDAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgIC0wLjg4NjQxNTUyNzAwNDQwMTAzNDIxMzE1NDM0MTk4MjE5Njc1NTA4NzMsXG4gICAgICAgMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgLTAuOTM4Mjc0NTUyMDAyNzMyNzU4NTIzNjQ5MDAxNzA4NzIxNDQ5NjU0OCxcbiAgICAgICAwLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAtMC45NzQ3Mjg1NTU5NzEzMDk0OTgxOTgzOTE5OTMwMDgxNjkwNjE3NDExLFxuICAgICAgIDAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgIC0wLjk5NTE4NzIxOTk5NzAyMTM2MDE3OTk5NzQwOTcwMDczNjgxMTg3NDUsXG4gICAgICAgMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1XG4gICAgXSxcblxuICAgIC8vIExlZ2VuZHJlLUdhdXNzIHdlaWdodHMgd2l0aCBuPTI0ICh3X2kgdmFsdWVzLCBkZWZpbmVkIGJ5IGEgZnVuY3Rpb24gbGlua2VkIHRvIGluIHRoZSBCZXppZXIgcHJpbWVyIGFydGljbGUpXG4gICAgQ3ZhbHVlczogW1xuICAgICAgMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LFxuICAgICAgMC4xMjc5MzgxOTUzNDY3NTIxNTY5NzQwNTYxNjUyMjQ2OTUzNzE4NTE3LFxuICAgICAgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LFxuICAgICAgMC4xMjU4Mzc0NTYzNDY4MjgyOTYxMjEzNzUzODI1MTExODM2ODg3MjY0LFxuICAgICAgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcwLFxuICAgICAgMC4xMjE2NzA0NzI5Mjc4MDMzOTEyMDQ0NjMxNTM0NzYyNjI0MjU2MDcwLFxuICAgICAgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLFxuICAgICAgMC4xMTU1MDU2NjgwNTM3MjU2MDEzNTMzNDQ0ODM5MDY3ODM1NTk4NjIyLFxuICAgICAgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LFxuICAgICAgMC4xMDc0NDQyNzAxMTU5NjU2MzQ3ODI1NzczNDI0NDY2MDYyMjI3OTQ2LFxuICAgICAgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LFxuICAgICAgMC4wOTc2MTg2NTIxMDQxMTM4ODgyNjk4ODA2NjQ0NjQyNDcxNTQ0Mjc5LFxuICAgICAgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUwLFxuICAgICAgMC4wODYxOTAxNjE1MzE5NTMyNzU5MTcxODUyMDI5ODM3NDI2NjcxODUwLFxuICAgICAgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLFxuICAgICAgMC4wNzMzNDY0ODE0MTEwODAzMDU3MzQwMzM2MTUyNTMxMTY1MTgxMTkzLFxuICAgICAgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLFxuICAgICAgMC4wNTkyOTg1ODQ5MTU0MzY3ODA3NDYzNjc3NTg1MDAxMDg1ODQ1NDEyLFxuICAgICAgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLFxuICAgICAgMC4wNDQyNzc0Mzg4MTc0MTk4MDYxNjg2MDI3NDgyMTEzMzgyMjg4NTkzLFxuICAgICAgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLFxuICAgICAgMC4wMjg1MzEzODg2Mjg5MzM2NjMxODEzMDc4MTU5NTE4NzgyODY0NDkxLFxuICAgICAgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5LFxuICAgICAgMC4wMTIzNDEyMjk3OTk5ODcxOTk1NDY4MDU2NjcwNzAwMzcyOTE1NzU5XG4gICAgXSxcblxuICAgIGFyY2ZuOiBmdW5jdGlvbih0LCBkZXJpdmF0aXZlRm4pIHtcbiAgICAgIHZhciBkID0gZGVyaXZhdGl2ZUZuKHQpO1xuICAgICAgdmFyIGwgPSBkLngqZC54ICsgZC55KmQueTtcbiAgICAgIGlmKHR5cGVvZiBkLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbCArPSBkLnoqZC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNxcnQobCk7XG4gICAgfSxcblxuICAgIGJldHdlZW46IGZ1bmN0aW9uKHYsIG0sIE0pIHtcbiAgICAgIHJldHVybiAobSA8PSB2ICYmIHYgPD0gTSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBtKSB8fCB1dGlscy5hcHByb3hpbWF0ZWx5KHYsIE0pO1xuICAgIH0sXG5cbiAgICBhcHByb3hpbWF0ZWx5OiBmdW5jdGlvbihhLGIscHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4gYWJzKGEtYikgPD0gKHByZWNpc2lvbiB8fCBlcHNpbG9uKTtcbiAgICB9LFxuXG4gICAgbGVuZ3RoOiBmdW5jdGlvbihkZXJpdmF0aXZlRm4pIHtcbiAgICAgIHZhciB6PTAuNSxzdW09MCxsZW49dXRpbHMuVHZhbHVlcy5sZW5ndGgsaSx0O1xuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0geiAqIHV0aWxzLlR2YWx1ZXNbaV0gKyB6O1xuICAgICAgICBzdW0gKz0gdXRpbHMuQ3ZhbHVlc1tpXSAqIHV0aWxzLmFyY2ZuKHQsZGVyaXZhdGl2ZUZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6ICogc3VtO1xuICAgIH0sXG5cbiAgICBtYXA6IGZ1bmN0aW9uKHYsIGRzLGRlLCB0cyx0ZSkge1xuICAgICAgdmFyIGQxID0gZGUtZHMsIGQyID0gdGUtdHMsIHYyID0gIHYtZHMsIHIgPSB2Mi9kMTtcbiAgICAgIHJldHVybiB0cyArIGQyKnI7XG4gICAgfSxcblxuICAgIGxlcnA6IGZ1bmN0aW9uKHIsIHYxLCB2Mikge1xuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgeDogdjEueCArIHIqKHYyLngtdjEueCksXG4gICAgICAgIHk6IHYxLnkgKyByKih2Mi55LXYxLnkpXG4gICAgICB9O1xuICAgICAgaWYoISF2MS56ICYmICEhdjIueikge1xuICAgICAgICByZXQueiA9ICB2MS56ICsgcioodjIuei12MS56KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHBvaW50VG9TdHJpbmc6IGZ1bmN0aW9uKHApIHtcbiAgICAgIHZhciBzID0gcC54K1wiL1wiK3AueTtcbiAgICAgIGlmKHR5cGVvZiBwLnogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcyArPSBcIi9cIitwLno7XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgICB9LFxuXG4gICAgcG9pbnRzVG9TdHJpbmc6IGZ1bmN0aW9uKHBvaW50cykge1xuICAgICAgcmV0dXJuIFwiW1wiICsgcG9pbnRzLm1hcCh1dGlscy5wb2ludFRvU3RyaW5nKS5qb2luKFwiLCBcIikgKyBcIl1cIjtcbiAgICB9LFxuXG4gICAgY29weTogZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKG8sdjEsdjIpIHtcbiAgICAgIHZhciBkeDEgPSB2MS54IC0gby54LFxuICAgICAgICAgIGR5MSA9IHYxLnkgLSBvLnksXG4gICAgICAgICAgZHgyID0gdjIueCAtIG8ueCxcbiAgICAgICAgICBkeTIgPSB2Mi55IC0gby55LFxuICAgICAgICAgIGNyb3NzID0gZHgxKmR5MiAtIGR5MSpkeDIsXG4gICAgICAgICAgbTEgPSBzcXJ0KGR4MSpkeDErZHkxKmR5MSksXG4gICAgICAgICAgbTIgPSBzcXJ0KGR4MipkeDIrZHkyKmR5MiksXG4gICAgICAgICAgZG90O1xuICAgICAgZHgxLz1tMTsgZHkxLz1tMTsgZHgyLz1tMjsgZHkyLz1tMjtcbiAgICAgIGRvdCA9IGR4MSpkeDIgKyBkeTEqZHkyO1xuICAgICAgcmV0dXJuIGF0YW4yKGNyb3NzLCBkb3QpO1xuICAgIH0sXG5cbiAgICAvLyByb3VuZCBhcyBzdHJpbmcsIHRvIGF2b2lkIHJvdW5kaW5nIGVycm9yc1xuICAgIHJvdW5kOiBmdW5jdGlvbih2LCBkKSB7XG4gICAgICB2YXIgcyA9ICcnICsgdjtcbiAgICAgIHZhciBwb3MgPSBzLmluZGV4T2YoXCIuXCIpO1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocy5zdWJzdHJpbmcoMCxwb3MrMStkKSk7XG4gICAgfSxcblxuICAgIGRpc3Q6IGZ1bmN0aW9uKHAxLCBwMikge1xuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgICAgZHkgPSBwMS55IC0gcDIueTtcbiAgICAgIHJldHVybiBzcXJ0KGR4KmR4K2R5KmR5KTtcbiAgICB9LFxuXG4gICAgY2xvc2VzdDogZnVuY3Rpb24oTFVULCBwb2ludCkge1xuICAgICAgdmFyIG1kaXN0ID0gcG93KDIsNjMpLCBtcG9zLCBkO1xuICAgICAgTFVULmZvckVhY2goZnVuY3Rpb24ocCwgaWR4KSB7XG4gICAgICAgIGQgPSB1dGlscy5kaXN0KHBvaW50LCBwKTtcbiAgICAgICAgaWYgKGQ8bWRpc3QpIHtcbiAgICAgICAgICBtZGlzdCA9IGQ7XG4gICAgICAgICAgbXBvcyA9IGlkeDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBtZGlzdDptZGlzdCwgbXBvczptcG9zIH07XG4gICAgfSxcblxuICAgIGFiY3JhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgcmF0aW8odCkgbm90ZSBvbiBodHRwOi8vcG9tYXguZ2l0aHViLmlvL2JlemllcmluZm8vI2FiY1xuICAgICAgaWYgKG4hPT0yICYmIG4hPT0zKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0ID0gMC41O1xuICAgICAgfSBlbHNlIGlmICh0PT09MCB8fCB0PT09MSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICAgIH1cbiAgICAgIHZhciBib3R0b20gPSBwb3codCxuKSArIHBvdygxLXQsbiksIHRvcCA9IGJvdHRvbSAtIDE7XG4gICAgICByZXR1cm4gYWJzKHRvcC9ib3R0b20pO1xuICAgIH0sXG5cbiAgICBwcm9qZWN0aW9ucmF0aW86IGZ1bmN0aW9uKHQsIG4pIHtcbiAgICAgIC8vIHNlZSB1KHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgdG9wID0gcG93KDEtdCwgbiksIGJvdHRvbSA9IHBvdyh0LG4pICsgdG9wO1xuICAgICAgcmV0dXJuIHRvcC9ib3R0b207XG4gICAgfSxcblxuICAgIGxsaTg6IGZ1bmN0aW9uKHgxLHkxLHgyLHkyLHgzLHkzLHg0LHk0KSB7XG4gICAgICB2YXIgbng9KHgxKnkyLXkxKngyKSooeDMteDQpLSh4MS14MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBueT0oeDEqeTIteTEqeDIpKih5My15NCktKHkxLXkyKSooeDMqeTQteTMqeDQpLFxuICAgICAgICAgIGQ9KHgxLXgyKSooeTMteTQpLSh5MS15MikqKHgzLXg0KTtcbiAgICAgIGlmKGQ9PTApIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICByZXR1cm4geyB4OiBueC9kLCB5OiBueS9kIH07XG4gICAgfSxcblxuICAgIGxsaTQ6IGZ1bmN0aW9uKHAxLHAyLHAzLHA0KSB7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksXG4gICAgICAgICAgeDIgPSBwMi54LCB5MiA9IHAyLnksXG4gICAgICAgICAgeDMgPSBwMy54LCB5MyA9IHAzLnksXG4gICAgICAgICAgeDQgPSBwNC54LCB5NCA9IHA0Lnk7XG4gICAgICByZXR1cm4gdXRpbHMubGxpOCh4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCk7XG4gICAgfSxcblxuICAgIGxsaTogZnVuY3Rpb24odjEsIHYyKSB7XG4gICAgICByZXR1cm4gdXRpbHMubGxpNCh2MSx2MS5jLHYyLHYyLmMpO1xuICAgIH0sXG5cbiAgICBtYWtlbGluZTogZnVuY3Rpb24ocDEscDIpIHtcbiAgICAgIHZhciBCZXppZXIgPSByZXF1aXJlKDg5KTtcbiAgICAgIHZhciB4MSA9IHAxLngsIHkxID0gcDEueSwgeDIgPSBwMi54LCB5MiA9IHAyLnksIGR4ID0gKHgyLXgxKS8zLCBkeSA9ICh5Mi15MSkvMztcbiAgICAgIHJldHVybiBuZXcgQmV6aWVyKHgxLCB5MSwgeDErZHgsIHkxK2R5LCB4MSsyKmR4LCB5MSsyKmR5LCB4MiwgeTIpO1xuICAgIH0sXG5cbiAgICBmaW5kYmJveDogZnVuY3Rpb24oc2VjdGlvbnMpIHtcbiAgICAgIHZhciBteD05OTk5OTk5OSxteT1teCxNWD0tbXgsTVk9TVg7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgdmFyIGJib3ggPSBzLmJib3goKTtcbiAgICAgICAgaWYobXggPiBiYm94LngubWluKSBteCA9IGJib3gueC5taW47XG4gICAgICAgIGlmKG15ID4gYmJveC55Lm1pbikgbXkgPSBiYm94LnkubWluO1xuICAgICAgICBpZihNWCA8IGJib3gueC5tYXgpIE1YID0gYmJveC54Lm1heDtcbiAgICAgICAgaWYoTVkgPCBiYm94LnkubWF4KSBNWSA9IGJib3gueS5tYXg7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHsgbWluOiBteCwgbWlkOihteCtNWCkvMiwgbWF4OiBNWCwgc2l6ZTpNWC1teCB9LFxuICAgICAgICB5OiB7IG1pbjogbXksIG1pZDoobXkrTVkpLzIsIG1heDogTVksIHNpemU6TVktbXkgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaGFwZWludGVyc2VjdGlvbnM6IGZ1bmN0aW9uKHMxLCBiYm94MSwgczIsIGJib3gyLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgaWYoIXV0aWxzLmJib3hvdmVybGFwKGJib3gxLCBiYm94MikpIHJldHVybiBbXTtcbiAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gW107XG4gICAgICB2YXIgYTEgPSBbczEuc3RhcnRjYXAsIHMxLmZvcndhcmQsIHMxLmJhY2ssIHMxLmVuZGNhcF07XG4gICAgICB2YXIgYTIgPSBbczIuc3RhcnRjYXAsIHMyLmZvcndhcmQsIHMyLmJhY2ssIHMyLmVuZGNhcF07XG4gICAgICBhMS5mb3JFYWNoKGZ1bmN0aW9uKGwxKSB7XG4gICAgICAgIGlmKGwxLnZpcnR1YWwpIHJldHVybjtcbiAgICAgICAgYTIuZm9yRWFjaChmdW5jdGlvbihsMikge1xuICAgICAgICAgIGlmKGwyLnZpcnR1YWwpIHJldHVybjtcbiAgICAgICAgICB2YXIgaXNzID0gbDEuaW50ZXJzZWN0cyhsMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgICAgIGlmKGlzcy5sZW5ndGg+MCkge1xuICAgICAgICAgICAgaXNzLmMxID0gbDE7XG4gICAgICAgICAgICBpc3MuYzIgPSBsMjtcbiAgICAgICAgICAgIGlzcy5zMSA9IHMxO1xuICAgICAgICAgICAgaXNzLnMyID0gczI7XG4gICAgICAgICAgICBpbnRlcnNlY3Rpb25zLnB1c2goaXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgICB9LFxuXG4gICAgbWFrZXNoYXBlOiBmdW5jdGlvbihmb3J3YXJkLCBiYWNrLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCkge1xuICAgICAgdmFyIGJwbCA9IGJhY2sucG9pbnRzLmxlbmd0aDtcbiAgICAgIHZhciBmcGwgPSBmb3J3YXJkLnBvaW50cy5sZW5ndGg7XG4gICAgICB2YXIgc3RhcnQgID0gdXRpbHMubWFrZWxpbmUoYmFjay5wb2ludHNbYnBsLTFdLCBmb3J3YXJkLnBvaW50c1swXSk7XG4gICAgICB2YXIgZW5kICAgID0gdXRpbHMubWFrZWxpbmUoZm9yd2FyZC5wb2ludHNbZnBsLTFdLCBiYWNrLnBvaW50c1swXSk7XG4gICAgICB2YXIgc2hhcGUgID0ge1xuICAgICAgICBzdGFydGNhcDogc3RhcnQsXG4gICAgICAgIGZvcndhcmQ6IGZvcndhcmQsXG4gICAgICAgIGJhY2s6IGJhY2ssXG4gICAgICAgIGVuZGNhcDogZW5kLFxuICAgICAgICBiYm94OiB1dGlscy5maW5kYmJveChbc3RhcnQsIGZvcndhcmQsIGJhY2ssIGVuZF0pXG4gICAgICB9O1xuICAgICAgdmFyIHNlbGYgPSB1dGlscztcbiAgICAgIHNoYXBlLmludGVyc2VjdGlvbnMgPSBmdW5jdGlvbihzMikge1xuICAgICAgICByZXR1cm4gc2VsZi5zaGFwZWludGVyc2VjdGlvbnMoc2hhcGUsc2hhcGUuYmJveCxzMixzMi5iYm94LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHNoYXBlO1xuICAgIH0sXG5cbiAgICBnZXRtaW5tYXg6IGZ1bmN0aW9uKGN1cnZlLCBkLCBsaXN0KSB7XG4gICAgICBpZighbGlzdCkgcmV0dXJuIHsgbWluOjAsIG1heDowIH07XG4gICAgICB2YXIgbWluPTB4RkZGRkZGRkZGRkZGRkZGRiwgbWF4PS1taW4sdCxjO1xuICAgICAgaWYobGlzdC5pbmRleE9mKDApPT09LTEpIHsgbGlzdCA9IFswXS5jb25jYXQobGlzdCk7IH1cbiAgICAgIGlmKGxpc3QuaW5kZXhPZigxKT09PS0xKSB7IGxpc3QucHVzaCgxKTsgfVxuICAgICAgZm9yKHZhciBpPTAsbGVuPWxpc3QubGVuZ3RoOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgIHQgPSBsaXN0W2ldO1xuICAgICAgICBjID0gY3VydmUuZ2V0KHQpO1xuICAgICAgICBpZihjW2RdIDwgbWluKSB7IG1pbiA9IGNbZF07IH1cbiAgICAgICAgaWYoY1tkXSA+IG1heCkgeyBtYXggPSBjW2RdOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4geyBtaW46bWluLCBtaWQ6KG1pbittYXgpLzIsIG1heDptYXgsIHNpemU6bWF4LW1pbiB9O1xuICAgIH0sXG5cbiAgICBhbGlnbjogZnVuY3Rpb24ocG9pbnRzLCBsaW5lKSB7XG4gICAgICB2YXIgdHggPSBsaW5lLnAxLngsXG4gICAgICAgICAgdHkgPSBsaW5lLnAxLnksXG4gICAgICAgICAgYSA9IC1hdGFuMihsaW5lLnAyLnktdHksIGxpbmUucDIueC10eCksXG4gICAgICAgICAgZCA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHg6ICh2LngtdHgpKmNvcyhhKSAtICh2LnktdHkpKnNpbihhKSxcbiAgICAgICAgICAgICAgeTogKHYueC10eCkqc2luKGEpICsgKHYueS10eSkqY29zKGEpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG4gICAgICByZXR1cm4gcG9pbnRzLm1hcChkKTtcbiAgICB9LFxuXG4gICAgcm9vdHM6IGZ1bmN0aW9uKHBvaW50cywgbGluZSkge1xuICAgICAgbGluZSA9IGxpbmUgfHwge3AxOnt4OjAseTowfSxwMjp7eDoxLHk6MH19O1xuICAgICAgdmFyIG9yZGVyID0gcG9pbnRzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgcCA9IHV0aWxzLmFsaWduKHBvaW50cywgbGluZSk7XG4gICAgICB2YXIgcmVkdWNlID0gZnVuY3Rpb24odCkgeyByZXR1cm4gMDw9dCAmJiB0IDw9MTsgfTtcblxuICAgICAgaWYgKG9yZGVyID09PSAyKSB7XG4gICAgICAgIHZhciBhID0gcFswXS55LFxuICAgICAgICAgICAgYiA9IHBbMV0ueSxcbiAgICAgICAgICAgIGMgPSBwWzJdLnksXG4gICAgICAgICAgICBkID0gYSAtIDIqYiArIGM7XG4gICAgICAgIGlmKGQhPT0wKSB7XG4gICAgICAgICAgdmFyIG0xID0gLXNxcnQoYipiLWEqYyksXG4gICAgICAgICAgICAgIG0yID0gLWErYixcbiAgICAgICAgICAgICAgdjEgPSAtKCBtMSttMikvZCxcbiAgICAgICAgICAgICAgdjIgPSAtKC1tMSttMikvZDtcbiAgICAgICAgICByZXR1cm4gW3YxLCB2Ml0uZmlsdGVyKHJlZHVjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihiIT09YyAmJiBkPT09MCkge1xuICAgICAgICAgIHJldHVybiBbICgyKmItYykvMiooYi1jKSBdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudHJhbnM0bWluZC5jb20vcGVyc29uYWxfZGV2ZWxvcG1lbnQvbWF0aGVtYXRpY3MvcG9seW5vbWlhbHMvY3ViaWNBbGdlYnJhLmh0bVxuICAgICAgdmFyIHBhID0gcFswXS55LFxuICAgICAgICAgIHBiID0gcFsxXS55LFxuICAgICAgICAgIHBjID0gcFsyXS55LFxuICAgICAgICAgIHBkID0gcFszXS55LFxuICAgICAgICAgIGQgPSAoLXBhICsgMypwYiAtIDMqcGMgKyBwZCksXG4gICAgICAgICAgYSA9ICgzKnBhIC0gNipwYiArIDMqcGMpIC8gZCxcbiAgICAgICAgICBiID0gKC0zKnBhICsgMypwYikgLyBkLFxuICAgICAgICAgIGMgPSBwYSAvIGQsXG4gICAgICAgICAgcCA9ICgzKmIgLSBhKmEpLzMsXG4gICAgICAgICAgcDMgPSBwLzMsXG4gICAgICAgICAgcSA9ICgyKmEqYSphIC0gOSphKmIgKyAyNypjKS8yNyxcbiAgICAgICAgICBxMiA9IHEvMixcbiAgICAgICAgICBkaXNjcmltaW5hbnQgPSBxMipxMiArIHAzKnAzKnAzLFxuICAgICAgICAgIHUxLHYxLHgxLHgyLHgzO1xuICAgICAgIGlmIChkaXNjcmltaW5hbnQgPCAwKSB7XG4gICAgICAgIHZhciBtcDMgPSAtcC8zLFxuICAgICAgICAgICAgbXAzMyA9IG1wMyptcDMqbXAzLFxuICAgICAgICAgICAgciA9IHNxcnQoIG1wMzMgKSxcbiAgICAgICAgICAgIHQgPSAtcS8oMipyKSxcbiAgICAgICAgICAgIGNvc3BoaSA9IHQ8LTEgPyAtMSA6IHQ+MSA/IDEgOiB0LFxuICAgICAgICAgICAgcGhpID0gYWNvcyhjb3NwaGkpLFxuICAgICAgICAgICAgY3J0ciA9IGNydChyKSxcbiAgICAgICAgICAgIHQxID0gMipjcnRyO1xuICAgICAgICB4MSA9IHQxICogY29zKHBoaS8zKSAtIGEvMztcbiAgICAgICAgeDIgPSB0MSAqIGNvcygocGhpK3RhdSkvMykgLSBhLzM7XG4gICAgICAgIHgzID0gdDEgKiBjb3MoKHBoaSsyKnRhdSkvMykgLSBhLzM7XG4gICAgICAgIHJldHVybiBbeDEsIHgyLCB4M10uZmlsdGVyKHJlZHVjZSk7XG4gICAgICB9IGVsc2UgaWYoZGlzY3JpbWluYW50ID09PSAwKSB7XG4gICAgICAgIHUxID0gcTIgPCAwID8gY3J0KC1xMikgOiAtY3J0KHEyKTtcbiAgICAgICAgeDEgPSAyKnUxLWEvMztcbiAgICAgICAgeDIgPSAtdTEgLSBhLzM7XG4gICAgICAgIHJldHVybiBbeDEseDJdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNkID0gc3FydChkaXNjcmltaW5hbnQpO1xuICAgICAgICB1MSA9IGNydCgtcTIrc2QpO1xuICAgICAgICB2MSA9IGNydChxMitzZCk7XG4gICAgICAgIHJldHVybiBbdTEtdjEtYS8zXS5maWx0ZXIocmVkdWNlKTs7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRyb290czogZnVuY3Rpb24ocCkge1xuICAgICAgLy8gcXVhZHJhdGljIHJvb3RzIGFyZSBlYXN5XG4gICAgICBpZihwLmxlbmd0aCA9PT0gMykge1xuICAgICAgICB2YXIgYSA9IHBbMF0sXG4gICAgICAgICAgICBiID0gcFsxXSxcbiAgICAgICAgICAgIGMgPSBwWzJdLFxuICAgICAgICAgICAgZCA9IGEgLSAyKmIgKyBjO1xuICAgICAgICBpZihkIT09MCkge1xuICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIqYi1hKmMpLFxuICAgICAgICAgICAgICBtMiA9IC1hK2IsXG4gICAgICAgICAgICAgIHYxID0gLSggbTErbTIpL2QsXG4gICAgICAgICAgICAgIHYyID0gLSgtbTErbTIpL2Q7XG4gICAgICAgICAgcmV0dXJuIFt2MSwgdjJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYiE9PWMgJiYgZD09PTApIHtcbiAgICAgICAgICByZXR1cm4gWygyKmItYykvKDIqKGItYykpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIGxpbmVhciByb290cyBhcmUgZXZlbiBlYXNpZXJcbiAgICAgIGlmKHAubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHZhciBhID0gcFswXSwgYiA9IHBbMV07XG4gICAgICAgIGlmKGEhPT1iKSB7XG4gICAgICAgICAgcmV0dXJuIFthLyhhLWIpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICAgIGluZmxlY3Rpb25zOiBmdW5jdGlvbihwb2ludHMpIHtcbiAgICAgIGlmIChwb2ludHMubGVuZ3RoPDQpIHJldHVybiBbXTtcblxuICAgICAgLy8gRklYTUU6IFRPRE86IGFkZCBpbiBpbmZsZWN0aW9uIGFic3RyYWN0aW9uIGZvciBxdWFydGljKyBjdXJ2ZXM/XG5cbiAgICAgIHZhciBwID0gdXRpbHMuYWxpZ24ocG9pbnRzLCB7IHAxOiBwb2ludHNbMF0sIHAyOiBwb2ludHMuc2xpY2UoLTEpWzBdIH0pLFxuICAgICAgICAgIGEgPSBwWzJdLnggKiBwWzFdLnksXG4gICAgICAgICAgYiA9IHBbM10ueCAqIHBbMV0ueSxcbiAgICAgICAgICBjID0gcFsxXS54ICogcFsyXS55LFxuICAgICAgICAgIGQgPSBwWzNdLnggKiBwWzJdLnksXG4gICAgICAgICAgdjEgPSAxOCAqICgtMyphICsgMipiICsgMypjIC0gZCksXG4gICAgICAgICAgdjIgPSAxOCAqICgzKmEgLSBiIC0gMypjKSxcbiAgICAgICAgICB2MyA9IDE4ICogKGMgLSBhKTtcblxuICAgICAgaWYgKHV0aWxzLmFwcHJveGltYXRlbHkodjEsMCkpIHJldHVybiBbXTtcblxuICAgICAgdmFyIHRybSA9IHYyKnYyIC0gNCp2MSp2MyxcbiAgICAgICAgICBzcSA9IE1hdGguc3FydCh0cm0pLFxuICAgICAgICAgIGQgPSAyICogdjE7XG5cbiAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KGQsMCkpIHJldHVybiBbXTtcblxuICAgICAgcmV0dXJuIFsoc3EtdjIpL2QsIC0odjIrc3EpL2RdLmZpbHRlcihmdW5jdGlvbihyKSB7XG4gICAgICAgIHJldHVybiAoMCA8PSByICYmIHIgPD0gMSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgYmJveG92ZXJsYXA6IGZ1bmN0aW9uKGIxLGIyKSB7XG4gICAgICB2YXIgZGltcz1bJ3gnLCd5J10sbGVuPWRpbXMubGVuZ3RoLGksZGltLGwsdCxkXG4gICAgICBmb3IoaT0wOyBpPGxlbjsgaSsrKSB7XG4gICAgICAgIGRpbSA9IGRpbXNbaV07XG4gICAgICAgIGwgPSBiMVtkaW1dLm1pZDtcbiAgICAgICAgdCA9IGIyW2RpbV0ubWlkO1xuICAgICAgICBkID0gKGIxW2RpbV0uc2l6ZSArIGIyW2RpbV0uc2l6ZSkvMjtcbiAgICAgICAgaWYoYWJzKGwtdCkgPj0gZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGV4cGFuZGJveDogZnVuY3Rpb24oYmJveCwgX2Jib3gpIHtcbiAgICAgIGlmKF9iYm94LngubWluIDwgYmJveC54Lm1pbikgeyBiYm94LngubWluID0gX2Jib3gueC5taW47IH1cbiAgICAgIGlmKF9iYm94LnkubWluIDwgYmJveC55Lm1pbikgeyBiYm94LnkubWluID0gX2Jib3gueS5taW47IH1cbiAgICAgIGlmKF9iYm94LnogJiYgX2Jib3guei5taW4gPCBiYm94LnoubWluKSB7IGJib3guei5taW4gPSBfYmJveC56Lm1pbjsgfVxuICAgICAgaWYoX2Jib3gueC5tYXggPiBiYm94LngubWF4KSB7IGJib3gueC5tYXggPSBfYmJveC54Lm1heDsgfVxuICAgICAgaWYoX2Jib3gueS5tYXggPiBiYm94LnkubWF4KSB7IGJib3gueS5tYXggPSBfYmJveC55Lm1heDsgfVxuICAgICAgaWYoX2Jib3gueiAmJiBfYmJveC56Lm1heCA+IGJib3guei5tYXgpIHsgYmJveC56Lm1heCA9IF9iYm94LnoubWF4OyB9XG4gICAgICBiYm94LngubWlkID0gKGJib3gueC5taW4gKyBiYm94LngubWF4KS8yO1xuICAgICAgYmJveC55Lm1pZCA9IChiYm94LnkubWluICsgYmJveC55Lm1heCkvMjtcbiAgICAgIGlmKGJib3gueikgeyBiYm94LnoubWlkID0gKGJib3guei5taW4gKyBiYm94LnoubWF4KS8yOyB9XG4gICAgICBiYm94Lnguc2l6ZSA9IGJib3gueC5tYXggLSBiYm94LngubWluO1xuICAgICAgYmJveC55LnNpemUgPSBiYm94LnkubWF4IC0gYmJveC55Lm1pbjtcbiAgICAgIGlmKGJib3gueikgeyBiYm94Lnouc2l6ZSA9IGJib3guei5tYXggLSBiYm94LnoubWluOyB9XG4gICAgfSxcblxuICAgIHBhaXJpdGVyYXRpb246IGZ1bmN0aW9uKGMxLCBjMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBjMWIgPSBjMS5iYm94KCksXG4gICAgICAgICAgYzJiID0gYzIuYmJveCgpLFxuICAgICAgICAgIHIgPSAxMDAwMDAsXG4gICAgICAgICAgdGhyZXNob2xkID0gY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQgfHwgMC41O1xuICAgICAgaWYoYzFiLnguc2l6ZSArIGMxYi55LnNpemUgPCB0aHJlc2hvbGQgJiYgYzJiLnguc2l6ZSArIGMyYi55LnNpemUgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgcmV0dXJuIFsgKChyICogKGMxLl90MStjMS5fdDIpLzIpfDApL3IgKyBcIi9cIiArICgociAqIChjMi5fdDErYzIuX3QyKS8yKXwwKS9yIF07XG4gICAgICB9XG4gICAgICB2YXIgY2MxID0gYzEuc3BsaXQoMC41KSxcbiAgICAgICAgICBjYzIgPSBjMi5zcGxpdCgwLjUpLFxuICAgICAgICAgIHBhaXJzID0gW1xuICAgICAgICAgICAge2xlZnQ6IGNjMS5sZWZ0LCByaWdodDogY2MyLmxlZnQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEubGVmdCwgcmlnaHQ6IGNjMi5yaWdodCB9LFxuICAgICAgICAgICAge2xlZnQ6IGNjMS5yaWdodCwgcmlnaHQ6IGNjMi5yaWdodCB9LFxuICAgICAgICAgICAge2xlZnQ6IGNjMS5yaWdodCwgcmlnaHQ6IGNjMi5sZWZ0IH1dO1xuICAgICAgcGFpcnMgPSBwYWlycy5maWx0ZXIoZnVuY3Rpb24ocGFpcikge1xuICAgICAgICByZXR1cm4gdXRpbHMuYmJveG92ZXJsYXAocGFpci5sZWZ0LmJib3goKSxwYWlyLnJpZ2h0LmJib3goKSk7XG4gICAgICB9KTtcbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICBpZihwYWlycy5sZW5ndGggPT09IDApIHJldHVybiByZXN1bHRzO1xuICAgICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihwYWlyKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChcbiAgICAgICAgICB1dGlscy5wYWlyaXRlcmF0aW9uKHBhaXIubGVmdCwgcGFpci5yaWdodCwgdGhyZXNob2xkKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihmdW5jdGlvbih2LGkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMuaW5kZXhPZih2KSA9PT0gaTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSxcblxuICAgIGdldGNjZW50ZXI6IGZ1bmN0aW9uKHAxLHAyLHAzKSB7XG4gICAgICB2YXIgZHgxID0gKHAyLnggLSBwMS54KSxcbiAgICAgICAgICBkeTEgPSAocDIueSAtIHAxLnkpLFxuICAgICAgICAgIGR4MiA9IChwMy54IC0gcDIueCksXG4gICAgICAgICAgZHkyID0gKHAzLnkgLSBwMi55KTtcbiAgICAgIHZhciBkeDFwID0gZHgxICogY29zKHF1YXJ0KSAtIGR5MSAqIHNpbihxdWFydCksXG4gICAgICAgICAgZHkxcCA9IGR4MSAqIHNpbihxdWFydCkgKyBkeTEgKiBjb3MocXVhcnQpLFxuICAgICAgICAgIGR4MnAgPSBkeDIgKiBjb3MocXVhcnQpIC0gZHkyICogc2luKHF1YXJ0KSxcbiAgICAgICAgICBkeTJwID0gZHgyICogc2luKHF1YXJ0KSArIGR5MiAqIGNvcyhxdWFydCk7XG4gICAgICAvLyBjaG9yZCBtaWRwb2ludHNcbiAgICAgIHZhciBteDEgPSAocDEueCArIHAyLngpLzIsXG4gICAgICAgICAgbXkxID0gKHAxLnkgKyBwMi55KS8yLFxuICAgICAgICAgIG14MiA9IChwMi54ICsgcDMueCkvMixcbiAgICAgICAgICBteTIgPSAocDIueSArIHAzLnkpLzI7XG4gICAgICAvLyBtaWRwb2ludCBvZmZzZXRzXG4gICAgICB2YXIgbXgxbiA9IG14MSArIGR4MXAsXG4gICAgICAgICAgbXkxbiA9IG15MSArIGR5MXAsXG4gICAgICAgICAgbXgybiA9IG14MiArIGR4MnAsXG4gICAgICAgICAgbXkybiA9IG15MiArIGR5MnA7XG4gICAgICAvLyBpbnRlcnNlY3Rpb24gb2YgdGhlc2UgbGluZXM6XG4gICAgICB2YXIgYXJjID0gdXRpbHMubGxpOChteDEsbXkxLG14MW4sbXkxbiwgbXgyLG15MixteDJuLG15Mm4pLFxuICAgICAgICAgIHIgPSB1dGlscy5kaXN0KGFyYyxwMSksXG4gICAgICAgICAgLy8gYXJjIHN0YXJ0L2VuZCB2YWx1ZXMsIG92ZXIgbWlkIHBvaW50OlxuICAgICAgICAgIHMgPSBhdGFuMihwMS55IC0gYXJjLnksIHAxLnggLSBhcmMueCksXG4gICAgICAgICAgbSA9IGF0YW4yKHAyLnkgLSBhcmMueSwgcDIueCAtIGFyYy54KSxcbiAgICAgICAgICBlID0gYXRhbjIocDMueSAtIGFyYy55LCBwMy54IC0gYXJjLngpLFxuICAgICAgICAgIF87XG4gICAgICAvLyBkZXRlcm1pbmUgYXJjIGRpcmVjdGlvbiAoY3cvY2N3IGNvcnJlY3Rpb24pXG4gICAgICBpZiAoczxlKSB7XG4gICAgICAgIC8vIGlmIHM8bTxlLCBhcmMocywgZSlcbiAgICAgICAgLy8gaWYgbTxzPGUsIGFyYyhlLCBzICsgdGF1KVxuICAgICAgICAvLyBpZiBzPGU8bSwgYXJjKGUsIHMgKyB0YXUpXG4gICAgICAgIGlmIChzPm0gfHwgbT5lKSB7IHMgKz0gdGF1OyB9XG4gICAgICAgIGlmIChzPmUpIHsgXz1lOyBlPXM7IHM9XzsgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgZTxtPHMsIGFyYyhlLCBzKVxuICAgICAgICAvLyBpZiBtPGU8cywgYXJjKHMsIGUgKyB0YXUpXG4gICAgICAgIC8vIGlmIGU8czxtLCBhcmMocywgZSArIHRhdSlcbiAgICAgICAgaWYgKGU8bSAmJiBtPHMpIHsgXz1lOyBlPXM7IHM9XzsgfSBlbHNlIHsgZSArPSB0YXU7IH1cbiAgICAgIH1cbiAgICAgIC8vIGFzc2lnbiBhbmQgZG9uZS5cbiAgICAgIGFyYy5zID0gcztcbiAgICAgIGFyYy5lID0gZTtcbiAgICAgIGFyYy5yID0gcjtcbiAgICAgIHJldHVybiBhcmM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG59KCkpO1xuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgdmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gICAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG4gIH1cblxuICByZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbiAgcmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG59XG5cbmluaXQoKVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHBsYWNlSG9sZGVycyA9IGI2NFtsZW4gLSAyXSA9PT0gJz0nID8gMiA6IGI2NFtsZW4gLSAxXSA9PT0gJz0nID8gMSA6IDBcblxuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlblxuXG4gIHZhciBMID0gMFxuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9PSdcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz0nXG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dClcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNsb25lID0gcmVxdWlyZSg5Nyk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoMTAwKTtcbnZhciBzdHJpbmcgPSByZXF1aXJlKDEwMik7XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uIChvYmopIHtcblx0aWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmopO1xuXHR9XG5cblx0dGhpcy52YWx1ZXMgPSB7XG5cdFx0cmdiOiBbMCwgMCwgMF0sXG5cdFx0aHNsOiBbMCwgMCwgMF0sXG5cdFx0aHN2OiBbMCwgMCwgMF0sXG5cdFx0aHdiOiBbMCwgMCwgMF0sXG5cdFx0Y215azogWzAsIDAsIDAsIDBdLFxuXHRcdGFscGhhOiAxXG5cdH07XG5cblx0Ly8gcGFyc2UgQ29sb3IoKSBhcmd1bWVudFxuXHR2YXIgdmFscztcblx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFscyA9IHN0cmluZy5nZXRSZ2JhKG9iaik7XG5cdFx0aWYgKHZhbHMpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMgPSBzdHJpbmcuZ2V0SHNsYShvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEh3YihvYmopKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyArIG9iaiArICdcIicpO1xuXHRcdH1cblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuXHRcdHZhbHMgPSBvYmo7XG5cdFx0aWYgKHZhbHMuciAhPT0gdW5kZWZpbmVkIHx8IHZhbHMucmVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMubCAhPT0gdW5kZWZpbmVkIHx8IHZhbHMubGlnaHRuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudiAhPT0gdW5kZWZpbmVkIHx8IHZhbHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzdicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy53ICE9PSB1bmRlZmluZWQgfHwgdmFscy53aGl0ZW5lc3MgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscy5jICE9PSB1bmRlZmluZWQgfHwgdmFscy5jeWFuICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdjbXlrJywgdmFscyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cdH1cbn07XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0cmdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ3JnYicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGhzbDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdoc2wnLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc3Y6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHN2JywgYXJndW1lbnRzKTtcblx0fSxcblx0aHdiOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2h3YicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGNteWs6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnY215aycsIGFyZ3VtZW50cyk7XG5cdH0sXG5cblx0cmdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMucmdiO1xuXHR9LFxuXHRoc2xBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc2w7XG5cdH0sXG5cdGhzdkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmhzdjtcblx0fSxcblx0aHdiQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5od2IuY29uY2F0KFt0aGlzLnZhbHVlcy5hbHBoYV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiO1xuXHR9LFxuXHRjbXlrQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuY215aztcblx0fSxcblx0cmdiYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHRyZXR1cm4gcmdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0aHNsYUFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMudmFsdWVzLmhzbDtcblx0XHRyZXR1cm4gaHNsLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0fSxcblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlcy5hbHBoYTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdmFsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZWQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAwLCB2YWwpO1xuXHR9LFxuXHRncmVlbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ3JnYicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAyLCB2YWwpO1xuXHR9LFxuXHRodWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAodmFsKSB7XG5cdFx0XHR2YWwgJT0gMzYwO1xuXHRcdFx0dmFsID0gdmFsIDwgMCA/IDM2MCArIHZhbCA6IHZhbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHNsJywgMCwgdmFsKTtcblx0fSxcblx0c2F0dXJhdGlvbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDEsIHZhbCk7XG5cdH0sXG5cdGxpZ2h0bmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDIsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb252OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMSwgdmFsKTtcblx0fSxcblx0d2hpdGVuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMSwgdmFsKTtcblx0fSxcblx0YmxhY2tuZXNzOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHdiJywgMiwgdmFsKTtcblx0fSxcblx0dmFsdWU6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc3YnLCAyLCB2YWwpO1xuXHR9LFxuXHRjeWFuOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDAsIHZhbCk7XG5cdH0sXG5cdG1hZ2VudGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdjbXlrJywgMSwgdmFsKTtcblx0fSxcblx0eWVsbG93OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDIsIHZhbCk7XG5cdH0sXG5cdGJsYWNrOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDMsIHZhbCk7XG5cdH0sXG5cblx0aGV4U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKTtcblx0fSxcblx0cmdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHJnYmFTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGhzbFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRod2JTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0a2V5d29yZDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gKHRoaXMudmFsdWVzLnJnYlswXSA8PCAxNikgfCAodGhpcy52YWx1ZXMucmdiWzFdIDw8IDgpIHwgdGhpcy52YWx1ZXMucmdiWzJdO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGRhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMudmFsdWVzLnJnYjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0bGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuZGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gMjU1IC0gdGhpcy52YWx1ZXMucmdiW2ldO1xuXHRcdH1cblx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgcmdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gKz0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMl0gLT0gdGhpcy52YWx1ZXMuaHNsWzJdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmhzbFsxXSArPSB0aGlzLnZhbHVlcy5oc2xbMV0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdGhpcy52YWx1ZXMuaHNsKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gLT0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5od2JbMV0gKz0gdGhpcy52YWx1ZXMuaHdiWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHRoaXMudmFsdWVzLmh3Yik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzJdICs9IHRoaXMudmFsdWVzLmh3YlsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGdyZXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIFt2YWwsIHZhbCwgdmFsXSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xlYXJlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2FscGhhJywgdGhpcy52YWx1ZXMuYWxwaGEgLSAodGhpcy52YWx1ZXMuYWxwaGEgKiByYXRpbykpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhICsgKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGh1ZSA9IHRoaXMudmFsdWVzLmhzbFswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMF0gPSBodWU7XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0ICovXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdHZhciBjb2xvcjEgPSB0aGlzO1xuXHRcdHZhciBjb2xvcjIgPSBtaXhpbkNvbG9yO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gdGhpc1xuXHRcdFx0LnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKVxuXHRcdFx0KVxuXHRcdFx0LmFscGhhKGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmdiKCk7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgY29sID0gbmV3IENvbG9yKCk7XG5cdFx0Y29sLnZhbHVlcyA9IGNsb25lKHRoaXMudmFsdWVzKTtcblx0XHRyZXR1cm4gY29sO1xuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUuZ2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cdHZhciB2YWxzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdHZhbHNbc3BhY2UuY2hhckF0KGkpXSA9IHRoaXMudmFsdWVzW3NwYWNlXVtpXTtcblx0fVxuXG5cdGlmICh0aGlzLnZhbHVlcy5hbHBoYSAhPT0gMSkge1xuXHRcdHZhbHMuYSA9IHRoaXMudmFsdWVzLmFscGhhO1xuXHR9XG5cblx0Ly8ge3I6IDI1NSwgZzogMjU1LCBiOiAyNTUsIGE6IDAuNH1cblx0cmV0dXJuIHZhbHM7XG59O1xuXG5Db2xvci5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHNwYWNlLCB2YWxzKSB7XG5cdHZhciBzcGFjZXMgPSB7XG5cdFx0cmdiOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG5cdFx0aHNsOiBbJ2h1ZScsICdzYXR1cmF0aW9uJywgJ2xpZ2h0bmVzcyddLFxuXHRcdGhzdjogWydodWUnLCAnc2F0dXJhdGlvbicsICd2YWx1ZSddLFxuXHRcdGh3YjogWydodWUnLCAnd2hpdGVuZXNzJywgJ2JsYWNrbmVzcyddLFxuXHRcdGNteWs6IFsnY3lhbicsICdtYWdlbnRhJywgJ3llbGxvdycsICdibGFjayddXG5cdH07XG5cblx0dmFyIG1heGVzID0ge1xuXHRcdHJnYjogWzI1NSwgMjU1LCAyNTVdLFxuXHRcdGhzbDogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGhzdjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGh3YjogWzM2MCwgMTAwLCAxMDBdLFxuXHRcdGNteWs6IFsxMDAsIDEwMCwgMTAwLCAxMDBdXG5cdH07XG5cblx0dmFyIGk7XG5cdHZhciBhbHBoYSA9IDE7XG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdGFscGhhID0gdmFscztcblx0fSBlbHNlIGlmICh2YWxzLmxlbmd0aCkge1xuXHRcdC8vIFsxMCwgMTAsIDEwXVxuXHRcdHRoaXMudmFsdWVzW3NwYWNlXSA9IHZhbHMuc2xpY2UoMCwgc3BhY2UubGVuZ3RoKTtcblx0XHRhbHBoYSA9IHZhbHNbc3BhY2UubGVuZ3RoXTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlLmNoYXJBdCgwKV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyOiAxMCwgZzogMTAsIGI6IDEwfVxuXHRcdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gdmFsc1tzcGFjZS5jaGFyQXQoaSldO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hO1xuXHR9IGVsc2UgaWYgKHZhbHNbc3BhY2VzW3NwYWNlXVswXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIHtyZWQ6IDEwLCBncmVlbjogMTAsIGJsdWU6IDEwfVxuXHRcdHZhciBjaGFucyA9IHNwYWNlc1tzcGFjZV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbY2hhbnNbaV1dO1xuXHRcdH1cblxuXHRcdGFscGhhID0gdmFscy5hbHBoYTtcblx0fVxuXG5cdHRoaXMudmFsdWVzLmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKGFscGhhID09PSB1bmRlZmluZWQgPyB0aGlzLnZhbHVlcy5hbHBoYSA6IGFscGhhKSkpO1xuXG5cdGlmIChzcGFjZSA9PT0gJ2FscGhhJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBjYXBwZWQ7XG5cblx0Ly8gY2FwIHZhbHVlcyBvZiB0aGUgc3BhY2UgcHJpb3IgY29udmVydGluZyBhbGwgdmFsdWVzXG5cdGZvciAoaSA9IDA7IGkgPCBzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdGNhcHBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG1heGVzW3NwYWNlXVtpXSwgdGhpcy52YWx1ZXNbc3BhY2VdW2ldKSk7XG5cdFx0dGhpcy52YWx1ZXNbc3BhY2VdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHR9XG5cblx0Ly8gY29udmVydCB0byBhbGwgdGhlIG90aGVyIGNvbG9yIHNwYWNlc1xuXHRmb3IgKHZhciBzbmFtZSBpbiBzcGFjZXMpIHtcblx0XHRpZiAoc25hbWUgIT09IHNwYWNlKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzbmFtZV0gPSBjb252ZXJ0W3NwYWNlXVtzbmFtZV0odGhpcy52YWx1ZXNbc3BhY2VdKTtcblx0XHR9XG5cblx0XHQvLyBjYXAgdmFsdWVzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzbmFtZV1baV0sIHRoaXMudmFsdWVzW3NuYW1lXVtpXSkpO1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdW2ldID0gTWF0aC5yb3VuZChjYXBwZWQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlLCBhcmdzKSB7XG5cdHZhciB2YWxzID0gYXJnc1swXTtcblxuXHRpZiAodmFscyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmdiKClcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZXMoc3BhY2UpO1xuXHR9XG5cblx0Ly8gY29sb3IucmdiKDEwLCAxMCwgMTApXG5cdGlmICh0eXBlb2YgdmFscyA9PT0gJ251bWJlcicpIHtcblx0XHR2YWxzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG5cdH1cblxuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdmFscyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldENoYW5uZWwgPSBmdW5jdGlvbiAoc3BhY2UsIGluZGV4LCB2YWwpIHtcblx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gY29sb3IucmVkKClcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XTtcblx0fSBlbHNlIGlmICh2YWwgPT09IHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF0pIHtcblx0XHQvLyBjb2xvci5yZWQoY29sb3IucmVkKCkpXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvLyBjb2xvci5yZWQoMTAwKVxuXHR0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdID0gdmFsO1xuXHR0aGlzLnNldFZhbHVlcyhzcGFjZSwgdGhpcy52YWx1ZXNbc3BhY2VdKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJ2YXIgY2xvbmUgPSAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xvbmVzIChjb3BpZXMpIGFuIE9iamVjdCB1c2luZyBkZWVwIGNvcHlpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzdXBwb3J0cyBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3UgYXJlIGNlcnRhaW5cbiAqIHRoZXJlIGFyZSBubyBjaXJjdWxhciByZWZlcmVuY2VzIGluIHlvdXIgb2JqZWN0LCB5b3UgY2FuIHNhdmUgc29tZSBDUFUgdGltZVxuICogYnkgY2FsbGluZyBjbG9uZShvYmosIGZhbHNlKS5cbiAqXG4gKiBDYXV0aW9uOiBpZiBgY2lyY3VsYXJgIGlzIGZhbHNlIGFuZCBgcGFyZW50YCBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzLFxuICogeW91ciBwcm9ncmFtIG1heSBlbnRlciBhbiBpbmZpbml0ZSBsb29wIGFuZCBjcmFzaC5cbiAqXG4gKiBAcGFyYW0gYHBhcmVudGAgLSB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHBhcmFtIGBjaXJjdWxhcmAgLSBzZXQgdG8gdHJ1ZSBpZiB0aGUgb2JqZWN0IHRvIGJlIGNsb25lZCBtYXkgY29udGFpblxuICogICAgY2lyY3VsYXIgcmVmZXJlbmNlcy4gKG9wdGlvbmFsIC0gdHJ1ZSBieSBkZWZhdWx0KVxuICogQHBhcmFtIGBkZXB0aGAgLSBzZXQgdG8gYSBudW1iZXIgaWYgdGhlIG9iamVjdCBpcyBvbmx5IHRvIGJlIGNsb25lZCB0b1xuICogICAgYSBwYXJ0aWN1bGFyIGRlcHRoLiAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBJbmZpbml0eSlcbiAqIEBwYXJhbSBgcHJvdG90eXBlYCAtIHNldHMgdGhlIHByb3RvdHlwZSB0byBiZSB1c2VkIHdoZW4gY2xvbmluZyBhbiBvYmplY3QuXG4gKiAgICAob3B0aW9uYWwgLSBkZWZhdWx0cyB0byBwYXJlbnQgcHJvdG90eXBlKS5cbiovXG5mdW5jdGlvbiBjbG9uZShwYXJlbnQsIGNpcmN1bGFyLCBkZXB0aCwgcHJvdG90eXBlKSB7XG4gIHZhciBmaWx0ZXI7XG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT09ICdvYmplY3QnKSB7XG4gICAgZGVwdGggPSBjaXJjdWxhci5kZXB0aDtcbiAgICBwcm90b3R5cGUgPSBjaXJjdWxhci5wcm90b3R5cGU7XG4gICAgZmlsdGVyID0gY2lyY3VsYXIuZmlsdGVyO1xuICAgIGNpcmN1bGFyID0gY2lyY3VsYXIuY2lyY3VsYXJcbiAgfVxuICAvLyBtYWludGFpbiB0d28gYXJyYXlzIGZvciBjaXJjdWxhciByZWZlcmVuY2VzLCB3aGVyZSBjb3JyZXNwb25kaW5nIHBhcmVudHNcbiAgLy8gYW5kIGNoaWxkcmVuIGhhdmUgdGhlIHNhbWUgaW5kZXhcbiAgdmFyIGFsbFBhcmVudHMgPSBbXTtcbiAgdmFyIGFsbENoaWxkcmVuID0gW107XG5cbiAgdmFyIHVzZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgIT0gJ3VuZGVmaW5lZCc7XG5cbiAgaWYgKHR5cGVvZiBjaXJjdWxhciA9PSAndW5kZWZpbmVkJylcbiAgICBjaXJjdWxhciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBkZXB0aCA9PSAndW5kZWZpbmVkJylcbiAgICBkZXB0aCA9IEluZmluaXR5O1xuXG4gIC8vIHJlY3Vyc2UgdGhpcyBmdW5jdGlvbiBzbyB3ZSBkb24ndCByZXNldCBhbGxQYXJlbnRzIGFuZCBhbGxDaGlsZHJlblxuICBmdW5jdGlvbiBfY2xvbmUocGFyZW50LCBkZXB0aCkge1xuICAgIC8vIGNsb25pbmcgbnVsbCBhbHdheXMgcmV0dXJucyBudWxsXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICAgIHJldHVybiBudWxsO1xuXG4gICAgaWYgKGRlcHRoID09IDApXG4gICAgICByZXR1cm4gcGFyZW50O1xuXG4gICAgdmFyIGNoaWxkO1xuICAgIHZhciBwcm90bztcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmUuX19pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gW107XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzUmVnRXhwKHBhcmVudCkpIHtcbiAgICAgIGNoaWxkID0gbmV3IFJlZ0V4cChwYXJlbnQuc291cmNlLCBfX2dldFJlZ0V4cEZsYWdzKHBhcmVudCkpO1xuICAgICAgaWYgKHBhcmVudC5sYXN0SW5kZXgpIGNoaWxkLmxhc3RJbmRleCA9IHBhcmVudC5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChjbG9uZS5fX2lzRGF0ZShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBEYXRlKHBhcmVudC5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAodXNlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBCdWZmZXIocGFyZW50Lmxlbmd0aCk7XG4gICAgICBwYXJlbnQuY29weShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCk7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG4gICAgICAgIHByb3RvID0gcHJvdG90eXBlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaXJjdWxhcikge1xuICAgICAgdmFyIGluZGV4ID0gYWxsUGFyZW50cy5pbmRleE9mKHBhcmVudCk7XG5cbiAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICByZXR1cm4gYWxsQ2hpbGRyZW5baW5kZXhdO1xuICAgICAgfVxuICAgICAgYWxsUGFyZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICBhbGxDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIHBhcmVudCkge1xuICAgICAgdmFyIGF0dHJzO1xuICAgICAgaWYgKHByb3RvKSB7XG4gICAgICAgIGF0dHJzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgaSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhdHRycyAmJiBhdHRycy5zZXQgPT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNoaWxkW2ldID0gX2Nsb25lKHBhcmVudFtpXSwgZGVwdGggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH1cblxuICByZXR1cm4gX2Nsb25lKHBhcmVudCwgZGVwdGgpO1xufVxuXG4vKipcbiAqIFNpbXBsZSBmbGF0IGNsb25lIHVzaW5nIHByb3RvdHlwZSwgYWNjZXB0cyBvbmx5IG9iamVjdHMsIHVzZWZ1bGwgZm9yIHByb3BlcnR5XG4gKiBvdmVycmlkZSBvbiBGTEFUIGNvbmZpZ3VyYXRpb24gb2JqZWN0IChubyBuZXN0ZWQgcHJvcHMpLlxuICpcbiAqIFVTRSBXSVRIIENBVVRJT04hIFRoaXMgbWF5IG5vdCBiZWhhdmUgYXMgeW91IHdpc2ggaWYgeW91IGRvIG5vdCBrbm93IGhvdyB0aGlzXG4gKiB3b3Jrcy5cbiAqL1xuY2xvbmUuY2xvbmVQcm90b3R5cGUgPSBmdW5jdGlvbiBjbG9uZVByb3RvdHlwZShwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCA9PT0gbnVsbClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgYyA9IGZ1bmN0aW9uICgpIHt9O1xuICBjLnByb3RvdHlwZSA9IHBhcmVudDtcbiAgcmV0dXJuIG5ldyBjKCk7XG59O1xuXG4vLyBwcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIF9fb2JqVG9TdHIobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufTtcbmNsb25lLl9fb2JqVG9TdHIgPSBfX29ialRvU3RyO1xuXG5mdW5jdGlvbiBfX2lzRGF0ZShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufTtcbmNsb25lLl9faXNEYXRlID0gX19pc0RhdGU7XG5cbmZ1bmN0aW9uIF9faXNBcnJheShvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgX19vYmpUb1N0cihvKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5jbG9uZS5fX2lzQXJyYXkgPSBfX2lzQXJyYXk7XG5cbmZ1bmN0aW9uIF9faXNSZWdFeHAobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbmNsb25lLl9faXNSZWdFeHAgPSBfX2lzUmVnRXhwO1xuXG5mdW5jdGlvbiBfX2dldFJlZ0V4cEZsYWdzKHJlKSB7XG4gIHZhciBmbGFncyA9ICcnO1xuICBpZiAocmUuZ2xvYmFsKSBmbGFncyArPSAnZyc7XG4gIGlmIChyZS5pZ25vcmVDYXNlKSBmbGFncyArPSAnaSc7XG4gIGlmIChyZS5tdWx0aWxpbmUpIGZsYWdzICs9ICdtJztcbiAgcmV0dXJuIGZsYWdzO1xufTtcbmNsb25lLl9fZ2V0UmVnRXhwRmxhZ3MgPSBfX2dldFJlZ0V4cEZsYWdzO1xuXG5yZXR1cm4gY2xvbmU7XG59KSgpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjbG9uZTtcbn1cbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKDk5KTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV0uam9pbigpXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogM30sXG5cdGhzbDoge2NoYW5uZWxzOiAzfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDN9LFxuXHRod2I6IHtjaGFubmVsczogM30sXG5cdGNteWs6IHtjaGFubmVsczogNH0sXG5cdHh5ejoge2NoYW5uZWxzOiAzfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDN9LFxuXHRsY2g6IHtjaGFubmVsczogM30sXG5cdGhleDoge2NoYW5uZWxzOiAxfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDF9LFxuXHRoY2c6IHtjaGFubmVsczogM30sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDN9XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBwcm9wZXJ0eVxuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgdjtcblxuXHRpZiAobWF4ID09PSAwKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IChkZWx0YSAvIG1heCAqIDEwMDApIC8gMTA7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VLZXl3b3Jkc1tyZ2Iuam9pbigpXTtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KG1hdGNoWzBdLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0YWxpY2VibHVlOiBbMjQwLCAyNDgsIDI1NV0sXG5cdGFudGlxdWV3aGl0ZTogWzI1MCwgMjM1LCAyMTVdLFxuXHRhcXVhOiBbMCwgMjU1LCAyNTVdLFxuXHRhcXVhbWFyaW5lOiBbMTI3LCAyNTUsIDIxMl0sXG5cdGF6dXJlOiBbMjQwLCAyNTUsIDI1NV0sXG5cdGJlaWdlOiBbMjQ1LCAyNDUsIDIyMF0sXG5cdGJpc3F1ZTogWzI1NSwgMjI4LCAxOTZdLFxuXHRibGFjazogWzAsIDAsIDBdLFxuXHRibGFuY2hlZGFsbW9uZDogWzI1NSwgMjM1LCAyMDVdLFxuXHRibHVlOiBbMCwgMCwgMjU1XSxcblx0Ymx1ZXZpb2xldDogWzEzOCwgNDMsIDIyNl0sXG5cdGJyb3duOiBbMTY1LCA0MiwgNDJdLFxuXHRidXJseXdvb2Q6IFsyMjIsIDE4NCwgMTM1XSxcblx0Y2FkZXRibHVlOiBbOTUsIDE1OCwgMTYwXSxcblx0Y2hhcnRyZXVzZTogWzEyNywgMjU1LCAwXSxcblx0Y2hvY29sYXRlOiBbMjEwLCAxMDUsIDMwXSxcblx0Y29yYWw6IFsyNTUsIDEyNywgODBdLFxuXHRjb3JuZmxvd2VyYmx1ZTogWzEwMCwgMTQ5LCAyMzddLFxuXHRjb3Juc2lsazogWzI1NSwgMjQ4LCAyMjBdLFxuXHRjcmltc29uOiBbMjIwLCAyMCwgNjBdLFxuXHRjeWFuOiBbMCwgMjU1LCAyNTVdLFxuXHRkYXJrYmx1ZTogWzAsIDAsIDEzOV0sXG5cdGRhcmtjeWFuOiBbMCwgMTM5LCAxMzldLFxuXHRkYXJrZ29sZGVucm9kOiBbMTg0LCAxMzQsIDExXSxcblx0ZGFya2dyYXk6IFsxNjksIDE2OSwgMTY5XSxcblx0ZGFya2dyZWVuOiBbMCwgMTAwLCAwXSxcblx0ZGFya2dyZXk6IFsxNjksIDE2OSwgMTY5XSxcblx0ZGFya2toYWtpOiBbMTg5LCAxODMsIDEwN10sXG5cdGRhcmttYWdlbnRhOiBbMTM5LCAwLCAxMzldLFxuXHRkYXJrb2xpdmVncmVlbjogWzg1LCAxMDcsIDQ3XSxcblx0ZGFya29yYW5nZTogWzI1NSwgMTQwLCAwXSxcblx0ZGFya29yY2hpZDogWzE1MywgNTAsIDIwNF0sXG5cdGRhcmtyZWQ6IFsxMzksIDAsIDBdLFxuXHRkYXJrc2FsbW9uOiBbMjMzLCAxNTAsIDEyMl0sXG5cdGRhcmtzZWFncmVlbjogWzE0MywgMTg4LCAxNDNdLFxuXHRkYXJrc2xhdGVibHVlOiBbNzIsIDYxLCAxMzldLFxuXHRkYXJrc2xhdGVncmF5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmtzbGF0ZWdyZXk6IFs0NywgNzksIDc5XSxcblx0ZGFya3R1cnF1b2lzZTogWzAsIDIwNiwgMjA5XSxcblx0ZGFya3Zpb2xldDogWzE0OCwgMCwgMjExXSxcblx0ZGVlcHBpbms6IFsyNTUsIDIwLCAxNDddLFxuXHRkZWVwc2t5Ymx1ZTogWzAsIDE5MSwgMjU1XSxcblx0ZGltZ3JheTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkaW1ncmV5OiBbMTA1LCAxMDUsIDEwNV0sXG5cdGRvZGdlcmJsdWU6IFszMCwgMTQ0LCAyNTVdLFxuXHRmaXJlYnJpY2s6IFsxNzgsIDM0LCAzNF0sXG5cdGZsb3JhbHdoaXRlOiBbMjU1LCAyNTAsIDI0MF0sXG5cdGZvcmVzdGdyZWVuOiBbMzQsIDEzOSwgMzRdLFxuXHRmdWNoc2lhOiBbMjU1LCAwLCAyNTVdLFxuXHRnYWluc2Jvcm86IFsyMjAsIDIyMCwgMjIwXSxcblx0Z2hvc3R3aGl0ZTogWzI0OCwgMjQ4LCAyNTVdLFxuXHRnb2xkOiBbMjU1LCAyMTUsIDBdLFxuXHRnb2xkZW5yb2Q6IFsyMTgsIDE2NSwgMzJdLFxuXHRncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG5cdGdyZWVuOiBbMCwgMTI4LCAwXSxcblx0Z3JlZW55ZWxsb3c6IFsxNzMsIDI1NSwgNDddLFxuXHRncmV5OiBbMTI4LCAxMjgsIDEyOF0sXG5cdGhvbmV5ZGV3OiBbMjQwLCAyNTUsIDI0MF0sXG5cdGhvdHBpbms6IFsyNTUsIDEwNSwgMTgwXSxcblx0aW5kaWFucmVkOiBbMjA1LCA5MiwgOTJdLFxuXHRpbmRpZ286IFs3NSwgMCwgMTMwXSxcblx0aXZvcnk6IFsyNTUsIDI1NSwgMjQwXSxcblx0a2hha2k6IFsyNDAsIDIzMCwgMTQwXSxcblx0bGF2ZW5kZXI6IFsyMzAsIDIzMCwgMjUwXSxcblx0bGF2ZW5kZXJibHVzaDogWzI1NSwgMjQwLCAyNDVdLFxuXHRsYXduZ3JlZW46IFsxMjQsIDI1MiwgMF0sXG5cdGxlbW9uY2hpZmZvbjogWzI1NSwgMjUwLCAyMDVdLFxuXHRsaWdodGJsdWU6IFsxNzMsIDIxNiwgMjMwXSxcblx0bGlnaHRjb3JhbDogWzI0MCwgMTI4LCAxMjhdLFxuXHRsaWdodGN5YW46IFsyMjQsIDI1NSwgMjU1XSxcblx0bGlnaHRnb2xkZW5yb2R5ZWxsb3c6IFsyNTAsIDI1MCwgMjEwXSxcblx0bGlnaHRncmF5OiBbMjExLCAyMTEsIDIxMV0sXG5cdGxpZ2h0Z3JlZW46IFsxNDQsIDIzOCwgMTQ0XSxcblx0bGlnaHRncmV5OiBbMjExLCAyMTEsIDIxMV0sXG5cdGxpZ2h0cGluazogWzI1NSwgMTgyLCAxOTNdLFxuXHRsaWdodHNhbG1vbjogWzI1NSwgMTYwLCAxMjJdLFxuXHRsaWdodHNlYWdyZWVuOiBbMzIsIDE3OCwgMTcwXSxcblx0bGlnaHRza3libHVlOiBbMTM1LCAyMDYsIDI1MF0sXG5cdGxpZ2h0c2xhdGVncmF5OiBbMTE5LCAxMzYsIDE1M10sXG5cdGxpZ2h0c2xhdGVncmV5OiBbMTE5LCAxMzYsIDE1M10sXG5cdGxpZ2h0c3RlZWxibHVlOiBbMTc2LCAxOTYsIDIyMl0sXG5cdGxpZ2h0eWVsbG93OiBbMjU1LCAyNTUsIDIyNF0sXG5cdGxpbWU6IFswLCAyNTUsIDBdLFxuXHRsaW1lZ3JlZW46IFs1MCwgMjA1LCA1MF0sXG5cdGxpbmVuOiBbMjUwLCAyNDAsIDIzMF0sXG5cdG1hZ2VudGE6IFsyNTUsIDAsIDI1NV0sXG5cdG1hcm9vbjogWzEyOCwgMCwgMF0sXG5cdG1lZGl1bWFxdWFtYXJpbmU6IFsxMDIsIDIwNSwgMTcwXSxcblx0bWVkaXVtYmx1ZTogWzAsIDAsIDIwNV0sXG5cdG1lZGl1bW9yY2hpZDogWzE4NiwgODUsIDIxMV0sXG5cdG1lZGl1bXB1cnBsZTogWzE0NywgMTEyLCAyMTldLFxuXHRtZWRpdW1zZWFncmVlbjogWzYwLCAxNzksIDExM10sXG5cdG1lZGl1bXNsYXRlYmx1ZTogWzEyMywgMTA0LCAyMzhdLFxuXHRtZWRpdW1zcHJpbmdncmVlbjogWzAsIDI1MCwgMTU0XSxcblx0bWVkaXVtdHVycXVvaXNlOiBbNzIsIDIwOSwgMjA0XSxcblx0bWVkaXVtdmlvbGV0cmVkOiBbMTk5LCAyMSwgMTMzXSxcblx0bWlkbmlnaHRibHVlOiBbMjUsIDI1LCAxMTJdLFxuXHRtaW50Y3JlYW06IFsyNDUsIDI1NSwgMjUwXSxcblx0bWlzdHlyb3NlOiBbMjU1LCAyMjgsIDIyNV0sXG5cdG1vY2Nhc2luOiBbMjU1LCAyMjgsIDE4MV0sXG5cdG5hdmFqb3doaXRlOiBbMjU1LCAyMjIsIDE3M10sXG5cdG5hdnk6IFswLCAwLCAxMjhdLFxuXHRvbGRsYWNlOiBbMjUzLCAyNDUsIDIzMF0sXG5cdG9saXZlOiBbMTI4LCAxMjgsIDBdLFxuXHRvbGl2ZWRyYWI6IFsxMDcsIDE0MiwgMzVdLFxuXHRvcmFuZ2U6IFsyNTUsIDE2NSwgMF0sXG5cdG9yYW5nZXJlZDogWzI1NSwgNjksIDBdLFxuXHRvcmNoaWQ6IFsyMTgsIDExMiwgMjE0XSxcblx0cGFsZWdvbGRlbnJvZDogWzIzOCwgMjMyLCAxNzBdLFxuXHRwYWxlZ3JlZW46IFsxNTIsIDI1MSwgMTUyXSxcblx0cGFsZXR1cnF1b2lzZTogWzE3NSwgMjM4LCAyMzhdLFxuXHRwYWxldmlvbGV0cmVkOiBbMjE5LCAxMTIsIDE0N10sXG5cdHBhcGF5YXdoaXA6IFsyNTUsIDIzOSwgMjEzXSxcblx0cGVhY2hwdWZmOiBbMjU1LCAyMTgsIDE4NV0sXG5cdHBlcnU6IFsyMDUsIDEzMywgNjNdLFxuXHRwaW5rOiBbMjU1LCAxOTIsIDIwM10sXG5cdHBsdW06IFsyMjEsIDE2MCwgMjIxXSxcblx0cG93ZGVyYmx1ZTogWzE3NiwgMjI0LCAyMzBdLFxuXHRwdXJwbGU6IFsxMjgsIDAsIDEyOF0sXG5cdHJlYmVjY2FwdXJwbGU6IFsxMDIsIDUxLCAxNTNdLFxuXHRyZWQ6IFsyNTUsIDAsIDBdLFxuXHRyb3N5YnJvd246IFsxODgsIDE0MywgMTQzXSxcblx0cm95YWxibHVlOiBbNjUsIDEwNSwgMjI1XSxcblx0c2FkZGxlYnJvd246IFsxMzksIDY5LCAxOV0sXG5cdHNhbG1vbjogWzI1MCwgMTI4LCAxMTRdLFxuXHRzYW5keWJyb3duOiBbMjQ0LCAxNjQsIDk2XSxcblx0c2VhZ3JlZW46IFs0NiwgMTM5LCA4N10sXG5cdHNlYXNoZWxsOiBbMjU1LCAyNDUsIDIzOF0sXG5cdHNpZW5uYTogWzE2MCwgODIsIDQ1XSxcblx0c2lsdmVyOiBbMTkyLCAxOTIsIDE5Ml0sXG5cdHNreWJsdWU6IFsxMzUsIDIwNiwgMjM1XSxcblx0c2xhdGVibHVlOiBbMTA2LCA5MCwgMjA1XSxcblx0c2xhdGVncmF5OiBbMTEyLCAxMjgsIDE0NF0sXG5cdHNsYXRlZ3JleTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbm93OiBbMjU1LCAyNTAsIDI1MF0sXG5cdHNwcmluZ2dyZWVuOiBbMCwgMjU1LCAxMjddLFxuXHRzdGVlbGJsdWU6IFs3MCwgMTMwLCAxODBdLFxuXHR0YW46IFsyMTAsIDE4MCwgMTQwXSxcblx0dGVhbDogWzAsIDEyOCwgMTI4XSxcblx0dGhpc3RsZTogWzIxNiwgMTkxLCAyMTZdLFxuXHR0b21hdG86IFsyNTUsIDk5LCA3MV0sXG5cdHR1cnF1b2lzZTogWzY0LCAyMjQsIDIwOF0sXG5cdHZpb2xldDogWzIzOCwgMTMwLCAyMzhdLFxuXHR3aGVhdDogWzI0NSwgMjIyLCAxNzldLFxuXHR3aGl0ZTogWzI1NSwgMjU1LCAyNTVdLFxuXHR3aGl0ZXNtb2tlOiBbMjQ1LCAyNDUsIDI0NV0sXG5cdHllbGxvdzogWzI1NSwgMjU1LCAwXSxcblx0eWVsbG93Z3JlZW46IFsxNTQsIDIwNSwgNTBdXG59O1xuXG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKDk4KTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoMTAxKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSg5OCk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKDEwMyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgZ2V0UmdiYTogZ2V0UmdiYSxcbiAgIGdldEhzbGE6IGdldEhzbGEsXG4gICBnZXRSZ2I6IGdldFJnYixcbiAgIGdldEhzbDogZ2V0SHNsLFxuICAgZ2V0SHdiOiBnZXRId2IsXG4gICBnZXRBbHBoYTogZ2V0QWxwaGEsXG5cbiAgIGhleFN0cmluZzogaGV4U3RyaW5nLFxuICAgcmdiU3RyaW5nOiByZ2JTdHJpbmcsXG4gICByZ2JhU3RyaW5nOiByZ2JhU3RyaW5nLFxuICAgcGVyY2VudFN0cmluZzogcGVyY2VudFN0cmluZyxcbiAgIHBlcmNlbnRhU3RyaW5nOiBwZXJjZW50YVN0cmluZyxcbiAgIGhzbFN0cmluZzogaHNsU3RyaW5nLFxuICAgaHNsYVN0cmluZzogaHNsYVN0cmluZyxcbiAgIGh3YlN0cmluZzogaHdiU3RyaW5nLFxuICAga2V5d29yZDoga2V5d29yZFxufVxuXG5mdW5jdGlvbiBnZXRSZ2JhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBhYmJyID0gIC9eIyhbYS1mQS1GMC05XXszfSkkLyxcbiAgICAgICBoZXggPSAgL14jKFthLWZBLUYwLTldezZ9KSQvLFxuICAgICAgIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxcbiAgICAgICBrZXl3b3JkID0gLyhcXEQrKS87XG5cbiAgIHZhciByZ2IgPSBbMCwgMCwgMF0sXG4gICAgICAgYSA9IDEsXG4gICAgICAgbWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIG1hdGNoID0gbWF0Y2hbMV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpICogMiwgaSAqIDIgKyAyKSwgMTYpO1xuICAgICAgfVxuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0pO1xuICAgICAgfVxuICAgICAgYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgfVxuICAgZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuICAgICAgaWYgKG1hdGNoWzFdID09IFwidHJhbnNwYXJlbnRcIikge1xuICAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cbiAgICAgIHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuICAgICAgaWYgKCFyZ2IpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgIH1cblxuICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJnYltpXSA9IHNjYWxlKHJnYltpXSwgMCwgMjU1KTtcbiAgIH1cbiAgIGlmICghYSAmJiBhICE9IDApIHtcbiAgICAgIGEgPSAxO1xuICAgfVxuICAgZWxzZSB7XG4gICAgICBhID0gc2NhbGUoYSwgMCwgMSk7XG4gICB9XG4gICByZ2JbM10gPSBhO1xuICAgcmV0dXJuIHJnYjtcbn1cblxuZnVuY3Rpb24gZ2V0SHNsYShzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG4gICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuICAgICAgdmFyIGggPSBzY2FsZShwYXJzZUludChtYXRjaFsxXSksIDAsIDM2MCksXG4gICAgICAgICAgcyA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApLFxuICAgICAgICAgIGwgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKSxcbiAgICAgICAgICBhID0gc2NhbGUoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcbiAgICAgIHJldHVybiBbaCwgcywgbCwgYV07XG4gICB9XG59XG5cbmZ1bmN0aW9uIGdldEh3YihzdHJpbmcpIHtcbiAgIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICB9XG4gICB2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLztcbiAgIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuICAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICB3ID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgYiA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCB3LCBiLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmdiKHN0cmluZykge1xuICAgdmFyIHJnYmEgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICByZXR1cm4gcmdiYSAmJiByZ2JhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRIc2woc3RyaW5nKSB7XG4gIHZhciBoc2xhID0gZ2V0SHNsYShzdHJpbmcpO1xuICByZXR1cm4gaHNsYSAmJiBoc2xhLnNsaWNlKDAsIDMpO1xufVxuXG5mdW5jdGlvbiBnZXRBbHBoYShzdHJpbmcpIHtcbiAgIHZhciB2YWxzID0gZ2V0UmdiYShzdHJpbmcpO1xuICAgaWYgKHZhbHMpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxuICAgZWxzZSBpZiAodmFscyA9IGdldEhzbGEoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHdiKHN0cmluZykpIHtcbiAgICAgIHJldHVybiB2YWxzWzNdO1xuICAgfVxufVxuXG4vLyBnZW5lcmF0b3JzXG5mdW5jdGlvbiBoZXhTdHJpbmcocmdiKSB7XG4gICByZXR1cm4gXCIjXCIgKyBoZXhEb3VibGUocmdiWzBdKSArIGhleERvdWJsZShyZ2JbMV0pXG4gICAgICAgICAgICAgICsgaGV4RG91YmxlKHJnYlsyXSk7XG59XG5cbmZ1bmN0aW9uIHJnYlN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcInJnYihcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiByZ2JhU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAocmdiYVszXSAhPT0gdW5kZWZpbmVkID8gcmdiYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiYShcIiArIHJnYmFbMF0gKyBcIiwgXCIgKyByZ2JhWzFdICsgXCIsIFwiICsgcmdiYVsyXVxuICAgICAgICAgICArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHBlcmNlbnRTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKHJnYmFbM10gJiYgcmdiYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuXG4gICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSlcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudGFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdLzI1NSAqIDEwMCksXG4gICAgICAgZyA9IE1hdGgucm91bmQocmdiYVsxXS8yNTUgKiAxMDApLFxuICAgICAgIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0vMjU1ICogMTAwKTtcbiAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIlLCBcIiArIGcgKyBcIiUsIFwiICsgYiArIFwiJSwgXCIgKyAoYWxwaGEgfHwgcmdiYVszXSB8fCAxKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA8IDEgfHwgKGhzbGFbM10gJiYgaHNsYVszXSA8IDEpKSB7XG4gICAgICByZXR1cm4gaHNsYVN0cmluZyhoc2xhLCBhbHBoYSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2woXCIgKyBoc2xhWzBdICsgXCIsIFwiICsgaHNsYVsxXSArIFwiJSwgXCIgKyBoc2xhWzJdICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHNsYVszXSAhPT0gdW5kZWZpbmVkID8gaHNsYVszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHNsYShcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUsIFwiXG4gICAgICAgICAgICsgYWxwaGEgKyBcIilcIjtcbn1cblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmZ1bmN0aW9uIGh3YlN0cmluZyhod2IsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxwaGEgPSAoaHdiWzNdICE9PSB1bmRlZmluZWQgPyBod2JbM10gOiAxKTtcbiAgIH1cbiAgIHJldHVybiBcImh3YihcIiArIGh3YlswXSArIFwiLCBcIiArIGh3YlsxXSArIFwiJSwgXCIgKyBod2JbMl0gKyBcIiVcIlxuICAgICAgICAgICArIChhbHBoYSAhPT0gdW5kZWZpbmVkICYmIGFscGhhICE9PSAxID8gXCIsIFwiICsgYWxwaGEgOiBcIlwiKSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBrZXl3b3JkKHJnYikge1xuICByZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIHNjYWxlKG51bSwgbWluLCBtYXgpIHtcbiAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcbiAgdmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyBcIjBcIiArIHN0ciA6IHN0cjtcbn1cblxuXG4vL2NyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG4gICByZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmxpbmVhciA9IGxpbmVhcjtcbmV4cG9ydHMuZWFzZUluU2luZSA9IGVhc2VJblNpbmU7XG5leHBvcnRzLmVhc2VPdXRTaW5lID0gZWFzZU91dFNpbmU7XG5leHBvcnRzLmVhc2VJbk91dFNpbmUgPSBlYXNlSW5PdXRTaW5lO1xuZXhwb3J0cy5lYXNlSW5RdWFkID0gZWFzZUluUXVhZDtcbmV4cG9ydHMuZWFzZU91dFF1YWQgPSBlYXNlT3V0UXVhZDtcbmV4cG9ydHMuZWFzZUluT3V0UXVhZCA9IGVhc2VJbk91dFF1YWQ7XG5leHBvcnRzLmVhc2VJbkN1YmljID0gZWFzZUluQ3ViaWM7XG5leHBvcnRzLmVhc2VPdXRDdWJpYyA9IGVhc2VPdXRDdWJpYztcbmV4cG9ydHMuZWFzZUluT3V0Q3ViaWMgPSBlYXNlSW5PdXRDdWJpYztcbmV4cG9ydHMuZWFzZUluUXVhcnQgPSBlYXNlSW5RdWFydDtcbmV4cG9ydHMuZWFzZU91dFF1YXJ0ID0gZWFzZU91dFF1YXJ0O1xuZXhwb3J0cy5lYXNlSW5PdXRRdWFydCA9IGVhc2VJbk91dFF1YXJ0O1xuZXhwb3J0cy5lYXNlSW5RdWludCA9IGVhc2VJblF1aW50O1xuZXhwb3J0cy5lYXNlT3V0UXVpbnQgPSBlYXNlT3V0UXVpbnQ7XG5leHBvcnRzLmVhc2VJbk91dFF1aW50ID0gZWFzZUluT3V0UXVpbnQ7XG5leHBvcnRzLmVhc2VJbkV4cG8gPSBlYXNlSW5FeHBvO1xuZXhwb3J0cy5lYXNlT3V0RXhwbyA9IGVhc2VPdXRFeHBvO1xuZXhwb3J0cy5lYXNlSW5PdXRFeHBvID0gZWFzZUluT3V0RXhwbztcbmV4cG9ydHMuZWFzZUluQ2lyYyA9IGVhc2VJbkNpcmM7XG5leHBvcnRzLmVhc2VPdXRDaXJjID0gZWFzZU91dENpcmM7XG5leHBvcnRzLmVhc2VJbk91dENpcmMgPSBlYXNlSW5PdXRDaXJjO1xuZXhwb3J0cy5lYXNlSW5CYWNrID0gZWFzZUluQmFjaztcbmV4cG9ydHMuZWFzZU91dEJhY2sgPSBlYXNlT3V0QmFjaztcbmV4cG9ydHMuZWFzZUluT3V0QmFjayA9IGVhc2VJbk91dEJhY2s7XG5leHBvcnRzLmVhc2VJbkVsYXN0aWMgPSBlYXNlSW5FbGFzdGljO1xuZXhwb3J0cy5lYXNlT3V0RWxhc3RpYyA9IGVhc2VPdXRFbGFzdGljO1xuZXhwb3J0cy5lYXNlSW5PdXRFbGFzdGljID0gZWFzZUluT3V0RWxhc3RpYztcbmV4cG9ydHMuZWFzZU91dEJvdW5jZSA9IGVhc2VPdXRCb3VuY2U7XG5leHBvcnRzLmVhc2VJbkJvdW5jZSA9IGVhc2VJbkJvdW5jZTtcbmV4cG9ydHMuZWFzZUluT3V0Qm91bmNlID0gZWFzZUluT3V0Qm91bmNlO1xuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ3JlLzE2NTAyOTRcblxuLy8gTm8gZWFzaW5nLCBubyBhY2NlbGVyYXRpb25cbmZ1bmN0aW9uIGxpbmVhcih0KSB7XG4gICAgcmV0dXJuIHQ7XG59XG5cbi8vIFNsaWdodCBhY2NlbGVyYXRpb24gZnJvbSB6ZXJvIHRvIGZ1bGwgc3BlZWRcbmZ1bmN0aW9uIGVhc2VJblNpbmUodCkge1xuICAgIHJldHVybiAtMSAqIE1hdGguY29zKHQgKiAoTWF0aC5QSSAvIDIpKSArIDE7XG59XG5cbi8vIFNsaWdodCBkZWNlbGVyYXRpb24gYXQgdGhlIGVuZFxuZnVuY3Rpb24gZWFzZU91dFNpbmUodCkge1xuICAgIHJldHVybiBNYXRoLnNpbih0ICogKE1hdGguUEkgLyAyKSk7XG59XG5cbi8vIFNsaWdodCBhY2NlbGVyYXRpb24gYXQgYmVnaW5uaW5nIGFuZCBzbGlnaHQgZGVjZWxlcmF0aW9uIGF0IGVuZFxuZnVuY3Rpb24gZWFzZUluT3V0U2luZSh0KSB7XG4gICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG59XG5cbi8vIEFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VJblF1YWQodCkge1xuICAgIHJldHVybiB0ICogdDtcbn1cblxuLy8gRGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQpIHtcbiAgICByZXR1cm4gdCAqICgyIC0gdCk7XG59XG5cbi8vIEFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuZnVuY3Rpb24gZWFzZUluT3V0UXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdDtcbn1cblxuLy8gQWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZUluQ3ViaWModCkge1xuICAgIHJldHVybiB0ICogdCAqIHQ7XG59XG5cbi8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCkge1xuICAgIHZhciB0MSA9IHQgLSAxO1xuICAgIHJldHVybiB0MSAqIHQxICogdDEgKyAxO1xufVxuXG4vLyBBY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDQgKiB0ICogdCAqIHQgOiAodCAtIDEpICogKDIgKiB0IC0gMikgKiAoMiAqIHQgLSAyKSArIDE7XG59XG5cbi8vIEFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VJblF1YXJ0KHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdDtcbn1cblxuLy8gRGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VPdXRRdWFydCh0KSB7XG4gICAgdmFyIHQxID0gdCAtIDE7XG4gICAgcmV0dXJuIDEgLSB0MSAqIHQxICogdDEgKiB0MTtcbn1cblxuLy8gQWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG5mdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh0KSB7XG4gICAgdmFyIHQxID0gdCAtIDE7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyA4ICogdCAqIHQgKiB0ICogdCA6IDEgLSA4ICogdDEgKiB0MSAqIHQxICogdDE7XG59XG5cbi8vIEFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VJblF1aW50KHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG59XG5cbi8vIERlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlT3V0UXVpbnQodCkge1xuICAgIHZhciB0MSA9IHQgLSAxO1xuICAgIHJldHVybiAxICsgdDEgKiB0MSAqIHQxICogdDEgKiB0MTtcbn1cblxuLy8gQWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG5mdW5jdGlvbiBlYXNlSW5PdXRRdWludCh0KSB7XG4gICAgdmFyIHQxID0gdCAtIDE7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyAxNiAqIHQgKiB0ICogdCAqIHQgKiB0IDogMSArIDE2ICogdDEgKiB0MSAqIHQxICogdDEgKiB0MTtcbn1cblxuLy8gQWNjZWxlcmF0ZSBleHBvbmVudGlhbGx5IHVudGlsIGZpbmlzaFxuZnVuY3Rpb24gZWFzZUluRXhwbyh0KSB7XG5cbiAgICBpZiAodCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKTtcbn1cblxuLy8gSW5pdGlhbCBleHBvbmVudGlhbCBhY2NlbGVyYXRpb24gc2xvd2luZyB0byBzdG9wXG5mdW5jdGlvbiBlYXNlT3V0RXhwbyh0KSB7XG5cbiAgICBpZiAodCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMTtcbn1cblxuLy8gRXhwb25lbnRpYWwgYWNjZWxlcmF0aW9uIGFuZCBkZWNlbGVyYXRpb25cbmZ1bmN0aW9uIGVhc2VJbk91dEV4cG8odCkge1xuXG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgKiAyO1xuICAgIHZhciBzY2FsZWRUaW1lMSA9IHNjYWxlZFRpbWUgLSAxO1xuXG4gICAgaWYgKHNjYWxlZFRpbWUgPCAxKSB7XG4gICAgICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqIHNjYWxlZFRpbWUxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMC41ICogKC1NYXRoLnBvdygyLCAtMTAgKiBzY2FsZWRUaW1lMSkgKyAyKTtcbn1cblxuLy8gSW5jcmVhc2luZyB2ZWxvY2l0eSB1bnRpbCBzdG9wXG5mdW5jdGlvbiBlYXNlSW5DaXJjKHQpIHtcblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAvIDE7XG4gICAgcmV0dXJuIC0xICogKE1hdGguc3FydCgxIC0gc2NhbGVkVGltZSAqIHQpIC0gMSk7XG59XG5cbi8vIFN0YXJ0IGZhc3QsIGRlY3JlYXNpbmcgdmVsb2NpdHkgdW50aWwgc3RvcFxuZnVuY3Rpb24gZWFzZU91dENpcmModCkge1xuXG4gICAgdmFyIHQxID0gdCAtIDE7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gdDEgKiB0MSk7XG59XG5cbi8vIEZhc3QgaW5jcmVhc2UgaW4gdmVsb2NpdHksIGZhc3QgZGVjcmVhc2UgaW4gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VJbk91dENpcmModCkge1xuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0ICogMjtcbiAgICB2YXIgc2NhbGVkVGltZTEgPSBzY2FsZWRUaW1lIC0gMjtcblxuICAgIGlmIChzY2FsZWRUaW1lIDwgMSkge1xuICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHNjYWxlZFRpbWUgKiBzY2FsZWRUaW1lKSAtIDEpO1xuICAgIH1cblxuICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSBzY2FsZWRUaW1lMSAqIHNjYWxlZFRpbWUxKSArIDEpO1xufVxuXG4vLyBTbG93IG1vdmVtZW50IGJhY2t3YXJkcyB0aGVuIGZhc3Qgc25hcCB0byBmaW5pc2hcbmZ1bmN0aW9uIGVhc2VJbkJhY2sodCkge1xuICAgIHZhciBtYWduaXR1ZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxLjcwMTU4IDogYXJndW1lbnRzWzFdO1xuXG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgLyAxO1xuICAgIHJldHVybiBzY2FsZWRUaW1lICogc2NhbGVkVGltZSAqICgobWFnbml0dWRlICsgMSkgKiBzY2FsZWRUaW1lIC0gbWFnbml0dWRlKTtcbn1cblxuLy8gRmFzdCBzbmFwIHRvIGJhY2t3YXJkcyBwb2ludCB0aGVuIHNsb3cgcmVzb2x2ZSB0byBmaW5pc2hcbmZ1bmN0aW9uIGVhc2VPdXRCYWNrKHQpIHtcbiAgICB2YXIgbWFnbml0dWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMS43MDE1OCA6IGFyZ3VtZW50c1sxXTtcblxuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0IC8gMSAtIDE7XG5cbiAgICByZXR1cm4gc2NhbGVkVGltZSAqIHNjYWxlZFRpbWUgKiAoKG1hZ25pdHVkZSArIDEpICogc2NhbGVkVGltZSArIG1hZ25pdHVkZSkgKyAxO1xufVxuXG4vLyBTbG93IG1vdmVtZW50IGJhY2t3YXJkcywgZmFzdCBzbmFwIHRvIHBhc3QgZmluaXNoLCBzbG93IHJlc29sdmUgdG8gZmluaXNoXG5mdW5jdGlvbiBlYXNlSW5PdXRCYWNrKHQpIHtcbiAgICB2YXIgbWFnbml0dWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMS43MDE1OCA6IGFyZ3VtZW50c1sxXTtcblxuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0ICogMjtcbiAgICB2YXIgc2NhbGVkVGltZTIgPSBzY2FsZWRUaW1lIC0gMjtcblxuICAgIHZhciBzID0gbWFnbml0dWRlICogMS41MjU7XG5cbiAgICBpZiAoc2NhbGVkVGltZSA8IDEpIHtcblxuICAgICAgICByZXR1cm4gMC41ICogc2NhbGVkVGltZSAqIHNjYWxlZFRpbWUgKiAoKHMgKyAxKSAqIHNjYWxlZFRpbWUgLSBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMC41ICogKHNjYWxlZFRpbWUyICogc2NhbGVkVGltZTIgKiAoKHMgKyAxKSAqIHNjYWxlZFRpbWUyICsgcykgKyAyKTtcbn1cbi8vIEJvdW5jZXMgc2xvd2x5IHRoZW4gcXVpY2tseSB0byBmaW5pc2hcbmZ1bmN0aW9uIGVhc2VJbkVsYXN0aWModCkge1xuICAgIHZhciBtYWduaXR1ZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAwLjcgOiBhcmd1bWVudHNbMV07XG5cblxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0IC8gMTtcbiAgICB2YXIgc2NhbGVkVGltZTEgPSBzY2FsZWRUaW1lIC0gMTtcblxuICAgIHZhciBwID0gMSAtIG1hZ25pdHVkZTtcbiAgICB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEpO1xuXG4gICAgcmV0dXJuIC0oTWF0aC5wb3coMiwgMTAgKiBzY2FsZWRUaW1lMSkgKiBNYXRoLnNpbigoc2NhbGVkVGltZTEgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XG59XG5cbi8vIEZhc3QgYWNjZWxlcmF0aW9uLCBib3VuY2VzIHRvIHplcm9cbmZ1bmN0aW9uIGVhc2VPdXRFbGFzdGljKHQpIHtcbiAgICB2YXIgbWFnbml0dWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMC43IDogYXJndW1lbnRzWzFdO1xuXG5cbiAgICB2YXIgcCA9IDEgLSBtYWduaXR1ZGU7XG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0ICogMjtcblxuICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxKTtcbiAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogc2NhbGVkVGltZSkgKiBNYXRoLnNpbigoc2NhbGVkVGltZSAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApICsgMTtcbn1cblxuLy8gU2xvdyBzdGFydCBhbmQgZW5kLCB0d28gYm91bmNlcyBzYW5kd2ljaCBhIGZhc3QgbW90aW9uXG5mdW5jdGlvbiBlYXNlSW5PdXRFbGFzdGljKHQpIHtcbiAgICB2YXIgbWFnbml0dWRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMC42NSA6IGFyZ3VtZW50c1sxXTtcblxuXG4gICAgdmFyIHAgPSAxIC0gbWFnbml0dWRlO1xuXG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgKiAyO1xuICAgIHZhciBzY2FsZWRUaW1lMSA9IHNjYWxlZFRpbWUgLSAxO1xuXG4gICAgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxKTtcblxuICAgIGlmIChzY2FsZWRUaW1lIDwgMSkge1xuICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnBvdygyLCAxMCAqIHNjYWxlZFRpbWUxKSAqIE1hdGguc2luKChzY2FsZWRUaW1lMSAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5wb3coMiwgLTEwICogc2NhbGVkVGltZTEpICogTWF0aC5zaW4oKHNjYWxlZFRpbWUxIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKiAwLjUgKyAxO1xufVxuXG4vLyBCb3VuY2UgdG8gY29tcGxldGlvblxuZnVuY3Rpb24gZWFzZU91dEJvdW5jZSh0KSB7XG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgLyAxO1xuXG4gICAgaWYgKHNjYWxlZFRpbWUgPCAxIC8gMi43NSkge1xuXG4gICAgICAgIHJldHVybiA3LjU2MjUgKiBzY2FsZWRUaW1lICogc2NhbGVkVGltZTtcbiAgICB9IGVsc2UgaWYgKHNjYWxlZFRpbWUgPCAyIC8gMi43NSkge1xuXG4gICAgICAgIHZhciBzY2FsZWRUaW1lMiA9IHNjYWxlZFRpbWUgLSAxLjUgLyAyLjc1O1xuICAgICAgICByZXR1cm4gNy41NjI1ICogc2NhbGVkVGltZTIgKiBzY2FsZWRUaW1lMiArIDAuNzU7XG4gICAgfSBlbHNlIGlmIChzY2FsZWRUaW1lIDwgMi41IC8gMi43NSkge1xuXG4gICAgICAgIHZhciBfc2NhbGVkVGltZSA9IHNjYWxlZFRpbWUgLSAyLjI1IC8gMi43NTtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqIF9zY2FsZWRUaW1lICogX3NjYWxlZFRpbWUgKyAwLjkzNzU7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICB2YXIgX3NjYWxlZFRpbWUyID0gc2NhbGVkVGltZSAtIDIuNjI1IC8gMi43NTtcbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqIF9zY2FsZWRUaW1lMiAqIF9zY2FsZWRUaW1lMiArIDAuOTg0Mzc1O1xuICAgIH1cbn1cblxuLy8gQm91bmNlIGluY3JlYXNpbmcgaW4gdmVsb2NpdHkgdW50aWwgY29tcGxldGlvblxuZnVuY3Rpb24gZWFzZUluQm91bmNlKHQpIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXRCb3VuY2UoMSAtIHQpO1xufVxuXG4vLyBCb3VuY2UgaW4gYW5kIGJvdW5jZSBvdXRcbmZ1bmN0aW9uIGVhc2VJbk91dEJvdW5jZSh0KSB7XG5cbiAgICBpZiAodCA8IDAuNSkge1xuXG4gICAgICAgIHJldHVybiBlYXNlSW5Cb3VuY2UodCAqIDIpICogMC41O1xuICAgIH1cblxuICAgIHJldHVybiBlYXNlT3V0Qm91bmNlKHQgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG59XG4iLCIvLyByYW5kb21Db2xvciBieSBEYXZpZCBNZXJmaWVsZCB1bmRlciB0aGUgQ0MwIGxpY2Vuc2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZG1lcmZpZWxkL3JhbmRvbUNvbG9yL1xuXG47KGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblxuICAvLyBTdXBwb3J0IEFNRFxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcblxuICAvLyBTdXBwb3J0IENvbW1vbkpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuXG4gICAgLy8gU3VwcG9ydCBOb2RlSlMgJiBDb21wb25lbnQsIHdoaWNoIGFsbG93IG1vZHVsZS5leHBvcnRzIHRvIGJlIGEgZnVuY3Rpb25cbiAgICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByYW5kb21Db2xvcjtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IENvbW1vbkpTIDEuMS4xIHNwZWNcbiAgICBleHBvcnRzLnJhbmRvbUNvbG9yID0gcmFuZG9tQ29sb3I7XG5cbiAgLy8gU3VwcG9ydCB2YW5pbGxhIHNjcmlwdCBsb2FkaW5nXG4gIH0gZWxzZSB7XG4gICAgcm9vdC5yYW5kb21Db2xvciA9IGZhY3RvcnkoKTtcbiAgfVxuXG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuXG4gIC8vIFNlZWQgdG8gZ2V0IHJlcGVhdGFibGUgY29sb3JzXG4gIHZhciBzZWVkID0gbnVsbDtcblxuICAvLyBTaGFyZWQgY29sb3IgZGljdGlvbmFyeVxuICB2YXIgY29sb3JEaWN0aW9uYXJ5ID0ge307XG5cbiAgLy8gUG9wdWxhdGUgdGhlIGNvbG9yIGRpY3Rpb25hcnlcbiAgbG9hZENvbG9yQm91bmRzKCk7XG5cbiAgdmFyIHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBzZWVkIGFuZCBlbnN1cmUgaXQncyBhblxuICAgIC8vIGludGVnZXIuIE90aGVyd2lzZSwgcmVzZXQgdGhlIHNlZWQgdmFsdWUuXG4gICAgaWYgKG9wdGlvbnMuc2VlZCAmJiBvcHRpb25zLnNlZWQgPT09IHBhcnNlSW50KG9wdGlvbnMuc2VlZCwgMTApKSB7XG4gICAgICBzZWVkID0gb3B0aW9ucy5zZWVkO1xuXG4gICAgLy8gQSBzdHJpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLnNlZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWVkID0gc3RyaW5nVG9JbnRlZ2VyKG9wdGlvbnMuc2VlZCk7XG5cbiAgICAvLyBTb21ldGhpbmcgd2FzIHBhc3NlZCBhcyBhIHNlZWQgYnV0IGl0IHdhc24ndCBhbiBpbnRlZ2VyIG9yIHN0cmluZ1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zZWVkICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5zZWVkICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgc2VlZCB2YWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgb3Igc3RyaW5nJyk7XG5cbiAgICAvLyBObyBzZWVkLCByZXNldCB0aGUgdmFsdWUgb3V0c2lkZS5cbiAgICB9IGVsc2Uge1xuICAgICAgc2VlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIEgsUyxCO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBnZW5lcmF0ZSBtdWx0aXBsZSBjb2xvcnNcbiAgICBpZiAob3B0aW9ucy5jb3VudCAhPT0gbnVsbCAmJiBvcHRpb25zLmNvdW50ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgdmFyIHRvdGFsQ29sb3JzID0gb3B0aW9ucy5jb3VudCxcbiAgICAgICAgICBjb2xvcnMgPSBbXTtcblxuICAgICAgb3B0aW9ucy5jb3VudCA9IG51bGw7XG5cbiAgICAgIHdoaWxlICh0b3RhbENvbG9ycyA+IGNvbG9ycy5sZW5ndGgpIHtcblxuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBnZW5lcmF0aW5nIG11bHRpcGxlIGNvbG9ycyxcbiAgICAgICAgLy8gaW5jcmVtZW1lbnQgdGhlIHNlZWQuIE90aGVyd2lzZSB3ZSdkIGp1c3RcbiAgICAgICAgLy8gZ2VuZXJhdGUgdGhlIHNhbWUgY29sb3IgZWFjaCB0aW1lLi4uXG4gICAgICAgIGlmIChzZWVkICYmIG9wdGlvbnMuc2VlZCkgb3B0aW9ucy5zZWVkICs9IDE7XG5cbiAgICAgICAgY29sb3JzLnB1c2gocmFuZG9tQ29sb3Iob3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmNvdW50ID0gdG90YWxDb2xvcnM7XG5cbiAgICAgIHJldHVybiBjb2xvcnM7XG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgcGljayBhIGh1ZSAoSClcbiAgICBIID0gcGlja0h1ZShvcHRpb25zKTtcblxuICAgIC8vIFRoZW4gdXNlIEggdG8gZGV0ZXJtaW5lIHNhdHVyYXRpb24gKFMpXG4gICAgUyA9IHBpY2tTYXR1cmF0aW9uKEgsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgUyBhbmQgSCB0byBkZXRlcm1pbmUgYnJpZ2h0bmVzcyAoQikuXG4gICAgQiA9IHBpY2tCcmlnaHRuZXNzKEgsIFMsIG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB3ZSByZXR1cm4gdGhlIEhTQiBjb2xvciBpbiB0aGUgZGVzaXJlZCBmb3JtYXRcbiAgICByZXR1cm4gc2V0Rm9ybWF0KFtILFMsQl0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBpY2tIdWUgKG9wdGlvbnMpIHtcblxuICAgIHZhciBodWVSYW5nZSA9IGdldEh1ZVJhbmdlKG9wdGlvbnMuaHVlKSxcbiAgICAgICAgaHVlID0gcmFuZG9tV2l0aGluKGh1ZVJhbmdlKTtcblxuICAgIC8vIEluc3RlYWQgb2Ygc3RvcmluZyByZWQgYXMgdHdvIHNlcGVyYXRlIHJhbmdlcyxcbiAgICAvLyB3ZSBncm91cCB0aGVtLCB1c2luZyBuZWdhdGl2ZSBudW1iZXJzXG4gICAgaWYgKGh1ZSA8IDApIHtodWUgPSAzNjAgKyBodWU7fVxuXG4gICAgcmV0dXJuIGh1ZTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja1NhdHVyYXRpb24gKGh1ZSwgb3B0aW9ucykge1xuXG4gICAgaWYgKG9wdGlvbnMubHVtaW5vc2l0eSA9PT0gJ3JhbmRvbScpIHtcbiAgICAgIHJldHVybiByYW5kb21XaXRoaW4oWzAsMTAwXSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaHVlID09PSAnbW9ub2Nocm9tZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHZhciBzYXR1cmF0aW9uUmFuZ2UgPSBnZXRTYXR1cmF0aW9uUmFuZ2UoaHVlKTtcblxuICAgIHZhciBzTWluID0gc2F0dXJhdGlvblJhbmdlWzBdLFxuICAgICAgICBzTWF4ID0gc2F0dXJhdGlvblJhbmdlWzFdO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnYnJpZ2h0JzpcbiAgICAgICAgc01pbiA9IDU1O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIHNNaW4gPSBzTWF4IC0gMTA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIHNNYXggPSA1NTtcbiAgICAgICAgYnJlYWs7XG4gICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtzTWluLCBzTWF4XSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHBpY2tCcmlnaHRuZXNzIChILCBTLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgYk1pbiA9IGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpLFxuICAgICAgICBiTWF4ID0gMTAwO1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmx1bWlub3NpdHkpIHtcblxuICAgICAgY2FzZSAnZGFyayc6XG4gICAgICAgIGJNYXggPSBiTWluICsgMjA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdsaWdodCc6XG4gICAgICAgIGJNaW4gPSAoYk1heCArIGJNaW4pLzI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyYW5kb20nOlxuICAgICAgICBiTWluID0gMDtcbiAgICAgICAgYk1heCA9IDEwMDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbYk1pbiwgYk1heF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Rm9ybWF0IChoc3YsIG9wdGlvbnMpIHtcblxuICAgIHN3aXRjaCAob3B0aW9ucy5mb3JtYXQpIHtcblxuICAgICAgY2FzZSAnaHN2QXJyYXknOlxuICAgICAgICByZXR1cm4gaHN2O1xuXG4gICAgICBjYXNlICdoc2xBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b0hTTChoc3YpO1xuXG4gICAgICBjYXNlICdoc2wnOlxuICAgICAgICB2YXIgaHNsID0gSFNWdG9IU0woaHN2KTtcbiAgICAgICAgcmV0dXJuICdoc2woJytoc2xbMF0rJywgJytoc2xbMV0rJyUsICcraHNsWzJdKyclKSc7XG5cbiAgICAgIGNhc2UgJ2hzbGEnOlxuICAgICAgICB2YXIgaHNsQ29sb3IgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbGEoJytoc2xDb2xvclswXSsnLCAnK2hzbENvbG9yWzFdKyclLCAnK2hzbENvbG9yWzJdKyclLCAnICsgTWF0aC5yYW5kb20oKSArICcpJztcblxuICAgICAgY2FzZSAncmdiQXJyYXknOlxuICAgICAgICByZXR1cm4gSFNWdG9SR0IoaHN2KTtcblxuICAgICAgY2FzZSAncmdiJzpcbiAgICAgICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCAnKSArICcpJztcblxuICAgICAgY2FzZSAncmdiYSc6XG4gICAgICAgIHZhciByZ2JDb2xvciA9IEhTVnRvUkdCKGhzdik7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgcmdiQ29sb3Iuam9pbignLCAnKSArICcsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gSFNWdG9IZXgoaHN2KTtcbiAgICB9XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1pbmltdW1CcmlnaHRuZXNzKEgsIFMpIHtcblxuICAgIHZhciBsb3dlckJvdW5kcyA9IGdldENvbG9ySW5mbyhIKS5sb3dlckJvdW5kcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG93ZXJCb3VuZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cbiAgICAgIHZhciBzMSA9IGxvd2VyQm91bmRzW2ldWzBdLFxuICAgICAgICAgIHYxID0gbG93ZXJCb3VuZHNbaV1bMV07XG5cbiAgICAgIHZhciBzMiA9IGxvd2VyQm91bmRzW2krMV1bMF0sXG4gICAgICAgICAgdjIgPSBsb3dlckJvdW5kc1tpKzFdWzFdO1xuXG4gICAgICBpZiAoUyA+PSBzMSAmJiBTIDw9IHMyKSB7XG5cbiAgICAgICAgIHZhciBtID0gKHYyIC0gdjEpLyhzMiAtIHMxKSxcbiAgICAgICAgICAgICBiID0gdjEgLSBtKnMxO1xuXG4gICAgICAgICByZXR1cm4gbSpTICsgYjtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SHVlUmFuZ2UgKGNvbG9ySW5wdXQpIHtcblxuICAgIGlmICh0eXBlb2YgcGFyc2VJbnQoY29sb3JJbnB1dCkgPT09ICdudW1iZXInKSB7XG5cbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUludChjb2xvcklucHV0KTtcblxuICAgICAgaWYgKG51bWJlciA8IDM2MCAmJiBudW1iZXIgPiAwKSB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXJdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvcklucHV0ID09PSAnc3RyaW5nJykge1xuXG4gICAgICBpZiAoY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdKSB7XG4gICAgICAgIHZhciBjb2xvciA9IGNvbG9yRGljdGlvbmFyeVtjb2xvcklucHV0XTtcbiAgICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlKSB7cmV0dXJuIGNvbG9yLmh1ZVJhbmdlO31cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWzAsMzYwXTtcblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2F0dXJhdGlvblJhbmdlIChodWUpIHtcbiAgICByZXR1cm4gZ2V0Q29sb3JJbmZvKGh1ZSkuc2F0dXJhdGlvblJhbmdlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29sb3JJbmZvIChodWUpIHtcblxuICAgIC8vIE1hcHMgcmVkIGNvbG9ycyB0byBtYWtlIHBpY2tpbmcgaHVlIGVhc2llclxuICAgIGlmIChodWUgPj0gMzM0ICYmIGh1ZSA8PSAzNjApIHtcbiAgICAgIGh1ZS09IDM2MDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBjb2xvck5hbWUgaW4gY29sb3JEaWN0aW9uYXJ5KSB7XG4gICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9yTmFtZV07XG4gICAgICAgaWYgKGNvbG9yLmh1ZVJhbmdlICYmXG4gICAgICAgICAgIGh1ZSA+PSBjb2xvci5odWVSYW5nZVswXSAmJlxuICAgICAgICAgICBodWUgPD0gY29sb3IuaHVlUmFuZ2VbMV0pIHtcbiAgICAgICAgICByZXR1cm4gY29sb3JEaWN0aW9uYXJ5W2NvbG9yTmFtZV07XG4gICAgICAgfVxuICAgIH0gcmV0dXJuICdDb2xvciBub3QgZm91bmQnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZG9tV2l0aGluIChyYW5nZSkge1xuICAgIGlmIChzZWVkID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihyYW5nZVswXSArIE1hdGgucmFuZG9tKCkqKHJhbmdlWzFdICsgMSAtIHJhbmdlWzBdKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vU2VlZGVkIHJhbmRvbSBhbGdvcml0aG0gZnJvbSBodHRwOi8vaW5kaWVnYW1yLmNvbS9nZW5lcmF0ZS1yZXBlYXRhYmxlLXJhbmRvbS1udW1iZXJzLWluLWpzL1xuICAgICAgdmFyIG1heCA9IHJhbmdlWzFdIHx8IDE7XG4gICAgICB2YXIgbWluID0gcmFuZ2VbMF0gfHwgMDtcbiAgICAgIHNlZWQgPSAoc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICB2YXIgcm5kID0gc2VlZCAvIDIzMzI4MC4wO1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgcm5kICogKG1heCAtIG1pbikpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSGV4IChoc3Ype1xuXG4gICAgdmFyIHJnYiA9IEhTVnRvUkdCKGhzdik7XG5cbiAgICBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gICAgICAgIHZhciBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmV0dXJuIGhleC5sZW5ndGggPT0gMSA/ICcwJyArIGhleCA6IGhleDtcbiAgICB9XG5cbiAgICB2YXIgaGV4ID0gJyMnICsgY29tcG9uZW50VG9IZXgocmdiWzBdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsxXSkgKyBjb21wb25lbnRUb0hleChyZ2JbMl0pO1xuXG4gICAgcmV0dXJuIGhleDtcblxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5lQ29sb3IgKG5hbWUsIGh1ZVJhbmdlLCBsb3dlckJvdW5kcykge1xuXG4gICAgdmFyIHNNaW4gPSBsb3dlckJvdW5kc1swXVswXSxcbiAgICAgICAgc01heCA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzBdLFxuXG4gICAgICAgIGJNaW4gPSBsb3dlckJvdW5kc1tsb3dlckJvdW5kcy5sZW5ndGggLSAxXVsxXSxcbiAgICAgICAgYk1heCA9IGxvd2VyQm91bmRzWzBdWzFdO1xuXG4gICAgY29sb3JEaWN0aW9uYXJ5W25hbWVdID0ge1xuICAgICAgaHVlUmFuZ2U6IGh1ZVJhbmdlLFxuICAgICAgbG93ZXJCb3VuZHM6IGxvd2VyQm91bmRzLFxuICAgICAgc2F0dXJhdGlvblJhbmdlOiBbc01pbiwgc01heF0sXG4gICAgICBicmlnaHRuZXNzUmFuZ2U6IFtiTWluLCBiTWF4XVxuICAgIH07XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWRDb2xvckJvdW5kcyAoKSB7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdtb25vY2hyb21lJyxcbiAgICAgIG51bGwsXG4gICAgICBbWzAsMF0sWzEwMCwwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncmVkJyxcbiAgICAgIFstMjYsMThdLFxuICAgICAgW1syMCwxMDBdLFszMCw5Ml0sWzQwLDg5XSxbNTAsODVdLFs2MCw3OF0sWzcwLDcwXSxbODAsNjBdLFs5MCw1NV0sWzEwMCw1MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ29yYW5nZScsXG4gICAgICBbMTksNDZdLFxuICAgICAgW1syMCwxMDBdLFszMCw5M10sWzQwLDg4XSxbNTAsODZdLFs2MCw4NV0sWzcwLDcwXSxbMTAwLDcwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAneWVsbG93JyxcbiAgICAgIFs0Nyw2Ml0sXG4gICAgICBbWzI1LDEwMF0sWzQwLDk0XSxbNTAsODldLFs2MCw4Nl0sWzcwLDg0XSxbODAsODJdLFs5MCw4MF0sWzEwMCw3NV1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2dyZWVuJyxcbiAgICAgIFs2MywxNzhdLFxuICAgICAgW1szMCwxMDBdLFs0MCw5MF0sWzUwLDg1XSxbNjAsODFdLFs3MCw3NF0sWzgwLDY0XSxbOTAsNTBdLFsxMDAsNDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdibHVlJyxcbiAgICAgIFsxNzksIDI1N10sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg2XSxbNDAsODBdLFs1MCw3NF0sWzYwLDYwXSxbNzAsNTJdLFs4MCw0NF0sWzkwLDM5XSxbMTAwLDM1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncHVycGxlJyxcbiAgICAgIFsyNTgsIDI4Ml0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDg3XSxbNDAsNzldLFs1MCw3MF0sWzYwLDY1XSxbNzAsNTldLFs4MCw1Ml0sWzkwLDQ1XSxbMTAwLDQyXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAncGluaycsXG4gICAgICBbMjgzLCAzMzRdLFxuICAgICAgW1syMCwxMDBdLFszMCw5MF0sWzQwLDg2XSxbNjAsODRdLFs4MCw4MF0sWzkwLDc1XSxbMTAwLDczXV1cbiAgICApO1xuXG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b1JHQiAoaHN2KSB7XG5cbiAgICAvLyB0aGlzIGRvZXNuJ3Qgd29yayBmb3IgdGhlIHZhbHVlcyBvZiAwIGFuZCAzNjBcbiAgICAvLyBoZXJlJ3MgdGhlIGhhY2t5IGZpeFxuICAgIHZhciBoID0gaHN2WzBdO1xuICAgIGlmIChoID09PSAwKSB7aCA9IDE7fVxuICAgIGlmIChoID09PSAzNjApIHtoID0gMzU5O31cblxuICAgIC8vIFJlYmFzZSB0aGUgaCxzLHYgdmFsdWVzXG4gICAgaCA9IGgvMzYwO1xuICAgIHZhciBzID0gaHN2WzFdLzEwMCxcbiAgICAgICAgdiA9IGhzdlsyXS8xMDA7XG5cbiAgICB2YXIgaF9pID0gTWF0aC5mbG9vcihoKjYpLFxuICAgICAgZiA9IGggKiA2IC0gaF9pLFxuICAgICAgcCA9IHYgKiAoMSAtIHMpLFxuICAgICAgcSA9IHYgKiAoMSAtIGYqcyksXG4gICAgICB0ID0gdiAqICgxIC0gKDEgLSBmKSpzKSxcbiAgICAgIHIgPSAyNTYsXG4gICAgICBnID0gMjU2LFxuICAgICAgYiA9IDI1NjtcblxuICAgIHN3aXRjaChoX2kpIHtcbiAgICAgIGNhc2UgMDogciA9IHY7IGcgPSB0OyBiID0gcDsgIGJyZWFrO1xuICAgICAgY2FzZSAxOiByID0gcTsgZyA9IHY7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDI6IHIgPSBwOyBnID0gdjsgYiA9IHQ7ICBicmVhaztcbiAgICAgIGNhc2UgMzogciA9IHA7IGcgPSBxOyBiID0gdjsgIGJyZWFrO1xuICAgICAgY2FzZSA0OiByID0gdDsgZyA9IHA7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDU6IHIgPSB2OyBnID0gcDsgYiA9IHE7ICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gW01hdGguZmxvb3IocioyNTUpLCBNYXRoLmZsb29yKGcqMjU1KSwgTWF0aC5mbG9vcihiKjI1NSldO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBIU1Z0b0hTTCAoaHN2KSB7XG4gICAgdmFyIGggPSBoc3ZbMF0sXG4gICAgICBzID0gaHN2WzFdLzEwMCxcbiAgICAgIHYgPSBoc3ZbMl0vMTAwLFxuICAgICAgayA9ICgyLXMpKnY7XG5cbiAgICByZXR1cm4gW1xuICAgICAgaCxcbiAgICAgIE1hdGgucm91bmQocyp2IC8gKGs8MSA/IGsgOiAyLWspICogMTAwMDApIC8gMTAwLFxuICAgICAgay8yICogMTAwXG4gICAgXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ1RvSW50ZWdlciAoc3RyaW5nKSB7XG4gICAgdmFyIHRvdGFsID0gMFxuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0b3RhbCA+PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgYnJlYWs7XG4gICAgICB0b3RhbCArPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuICAgIH1cbiAgICByZXR1cm4gdG90YWxcbiAgfVxuXG4gIHJldHVybiByYW5kb21Db2xvcjtcbn0pKTtcbiJdfQ==
