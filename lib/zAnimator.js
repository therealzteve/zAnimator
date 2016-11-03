(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zAnimator = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path_magic = require(4);

var _path_magic2 = _interopRequireDefault(_path_magic);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pathMagic: _path_magic2.default
};


},{"4":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swinging_line = require(3);

var _swinging_line2 = _interopRequireDefault(_swinging_line);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  swingingLine: _swinging_line2.default
};


},{"3":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var swingLine = {};

  swingLine.length = options.length;
  swingLine.amplitude = options.amplitude;
  swingLine.time = options.time;
  swingLine.pulsar = (0, _transition_loop2.default)(swingLine.time, 0.5);
  swingLine.view = (0, _container2.default)();
  swingLine.bezierCurve = (0, _bezier_curve2.default)({ x: 0, y: 0 }, { x: swingLine.length, y: 0 }, { x: swingLine.length / 2, y: 0 });
  swingLine.pathView = (0, _path2.default)(swingLine.bezierCurve);

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

var _path = require(14);

var _path2 = _interopRequireDefault(_path);

var _container = require(9);

var _container2 = _interopRequireDefault(_container);

var _bezier_curve = require(42);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

var _transition_loop = require(59);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"14":14,"42":42,"59":59,"9":9}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transition_path_drawer = require(6);

var _transition_path_drawer2 = _interopRequireDefault(_transition_path_drawer);

var _random_part_path_drawer = require(5);

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


},{"2":2,"5":5,"6":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (path) {
  var pathDrawer = {};
  pathDrawer.path = path;
  pathDrawer.pathView = (0, _path2.default)(pathDrawer.path, '#000');
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

var _loop = require(52);

var _loop2 = _interopRequireDefault(_loop);

var _path = require(14);

var _path2 = _interopRequireDefault(_path);

var _container = require(9);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"14":14,"52":52,"9":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (path, options) {
  var pathDrawer = {};
  pathDrawer.pulsar = (0, _transition_loop2.default)(1000, 1);
  pathDrawer.path = path;
  pathDrawer.pathView = (0, _path2.default)(pathDrawer.path, options);
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

var _transition_loop = require(59);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

var _path = require(14);

var _path2 = _interopRequireDefault(_path);

var _container = require(9);

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"14":14,"59":59,"9":9}],7:[function(require,module,exports){
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


},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (circleShape, color) {

      var circle = (0, _abstract_component2.default)();
      circle.circleShape = circleShape;
      circle.color = color;

      circle.draw = function () {
            circle.view.graphics.clear();
            circle.view.graphics.beginFill(circle.color).drawCircle(0, 0, circle.circleShape.radius * circle.scale);
      };

      circle.draw();
      return circle;
};

var _abstract_component = require(7);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"7":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return new createjs.Container();
};


},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (customShape, color) {

      var custom = (0, _abstract_component2.default)();
      custom.customShape = customShape;
      custom.color = color;

      custom.draw = function () {
            custom.view.graphics.clear();
            custom.view.graphics.beginFill(custom.color).beginStroke('#00F').moveTo(0, 0);
            var current = { x: 0, y: 0 };
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

var _abstract_component = require(7);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(11);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(36);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"11":11,"36":36,"7":7}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angle_to_radians = require(38);

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


},{"38":38}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (linePath, thickness, color) {

      var line = (0, _abstract_component2.default)();
      line.path = linePath;
      line.color = color;
      line.thickness = thickness;

      line.draw = function () {
            line.view.graphics.beginStroke(line.color).setStrokeStyle(line.thickness * line.scale).moveTo(line.path.start.x * line.scale, line.path.start.y * line.scale).lineTo(line.path.end.x * line.scale, line.path.end.y * line.scale);
      };

      line.draw();
      return line;
};

var _abstract_component = require(7);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"7":7}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (id) {
      var stage = new createjs.Stage(id);
      return stage;
};


},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (completePath, options) {
      if (!options) {
            options = {};
      }
      var custom = (0, _abstract_component2.default)();
      custom.completePath = completePath;
      custom.color = options.color ? options.color : '#000';
      custom.width = options.width ? options.width : 1;

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

var _abstract_component = require(7);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

var _path_drawer = require(11);

var _path_drawer2 = _interopRequireDefault(_path_drawer);

var _add_up_points = require(36);

var _add_up_points2 = _interopRequireDefault(_add_up_points);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"11":11,"36":36,"7":7}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (rectangle, color) {

      var rect = (0, _abstract_component2.default)();
      rect.width = rectangle.width;
      rect.height = rectangle.height;
      rect.color = color;

      rect.draw = function () {
            rect.view.graphics.clear();
            rect.view.graphics.beginFill(rect.color).drawRect(0, 0, rect.width * rect.scale, rect.height * rect.scale);
      };

      rect.draw();
      return rect;
};

var _abstract_component = require(7);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"7":7}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

exports.default = function (squareGeometry, color) {

      var square = (0, _abstract_component2.default)();
      square.sideLength = squareGeometry.sidelength;
      square.color = color;

      square.draw = function () {
            square.view.graphics.clear();
            square.view.graphics.beginFill(square.color).drawRect(0, 0, square.sideLength * square.scale, square.sideLength * square.scale);
      };

      square.draw();
      return square;
};

var _abstract_component = require(7);

var _abstract_component2 = _interopRequireDefault(_abstract_component);

function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
}


},{"7":7}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _container = require(9);

var _container2 = _interopRequireDefault(_container);

var _square = require(16);

var _square2 = _interopRequireDefault(_square);

var _circle = require(8);

var _circle2 = _interopRequireDefault(_circle);

var _rectangle = require(15);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _main_container = require(13);

var _main_container2 = _interopRequireDefault(_main_container);

var _line = require(12);

var _line2 = _interopRequireDefault(_line);

var _custom_object = require(10);

var _custom_object2 = _interopRequireDefault(_custom_object);

var _path = require(14);

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
    path: _path2.default
};


},{"10":10,"12":12,"13":13,"14":14,"15":15,"16":16,"8":8,"9":9}],18:[function(require,module,exports){
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

var _loop = require(52);

var _loop2 = _interopRequireDefault(_loop);

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"52":52}],19:[function(require,module,exports){
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

var _abstract_filter = require(18);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"18":18}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children, options) {
    var centerGroup = (0, _abstract_group2.default)(children);

    /* Params and defaults */
    centerGroup.width = options.width ? options.width : false;
    centerGroup.height = options.height ? options.height : false;

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

var _abstract_group = require(19);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"19":19}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children, radius) {
    var circleGroup = (0, _abstract_group2.default)(children);

    /* Params and defaults */
    circleGroup.radius = radius ? radius : 10;

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

var _abstract_group = require(19);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"19":19}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle_group = require(25);

var _rectangle_group2 = _interopRequireDefault(_rectangle_group);

var _random_rectangle_group = require(24);

var _random_rectangle_group2 = _interopRequireDefault(_random_rectangle_group);

var _circle_group = require(21);

var _circle_group2 = _interopRequireDefault(_circle_group);

var _spiral_circle_group = require(26);

var _spiral_circle_group2 = _interopRequireDefault(_spiral_circle_group);

var _random_circle_group = require(23);

var _random_circle_group2 = _interopRequireDefault(_random_circle_group);

var _center_group = require(20);

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


},{"20":20,"21":21,"23":23,"24":24,"25":25,"26":26}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children, radius, randomRange) {
    var circleGroup = (0, _abstract_group2.default)(children);

    /* Params and defaults */
    circleGroup.radius = radius ? radius : 10;
    circleGroup.randomRange = randomRange ? randomRange : 10;

    var angle = 360 / circleGroup.children.length;
    for (var i = 0; i < circleGroup.children.length; i++) {
        var container = _factory2.default.container();
        var innerContainer = _factory2.default.container();
        container.rotation = angle * i;
        innerContainer.y = -circleGroup.radius + Math.floor(Math.random() * randomRange - randomRange * 0.5);
        innerContainer.addChild(circleGroup.children[i].view);
        container.addChild(innerContainer);
        circleGroup.view.addChild(container);
    }

    return circleGroup;
};

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(19);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"19":19}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children, width, height) {
    var rectangleGroup = (0, _abstract_group2.default)(children);

    /* Params and defaults */
    rectangleGroup.width = width ? width : 10;
    rectangleGroup.height = height ? height : 10;

    for (var i = 0; i < rectangleGroup.children.length; i++) {
        var container = _factory2.default.container();
        container.addChild(rectangleGroup.children[i].view);
        container.x = Math.floor(rectangleGroup.width * Math.random());
        container.y = Math.floor(rectangleGroup.height * Math.random());
        rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
};

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(19);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"19":19}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children, spacing, columns) {
    var rectangleGroup = (0, _abstract_group2.default)(children);

    /* Params and defaults */
    rectangleGroup.columns = columns ? columns : 3;

    for (var i = 0; i < rectangleGroup.children.length; i++) {
        var container = _factory2.default.container();
        container.addChild(rectangleGroup.children[i].view);
        container.x = i % rectangleGroup.columns * spacing;
        container.y = Math.floor(i / rectangleGroup.columns) * spacing;
        rectangleGroup.view.addChild(container);
    }

    return rectangleGroup;
};

var _abstract_group = require(19);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"19":19}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (children, startRadius, endRadius, rounds) {
    var spiralCircleGroup = (0, _abstract_group2.default)(children);

    /* Params and defaults */
    spiralCircleGroup.startRadius = startRadius ? startRadius : 10;
    spiralCircleGroup.endRadius = endRadius ? endRadius : 10;

    var angle = 360 * rounds / spiralCircleGroup.children.length;
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

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

var _abstract_group = require(19);

var _abstract_group2 = _interopRequireDefault(_abstract_group);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"17":17,"19":19}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (child, progressRate, path) {

  var pathMover = (0, _abstract_filter2.default)();
  pathMover.view.addChild(child.view);
  pathMover.currentProgress = 0;
  pathMover.progressRate = progressRate;

  pathMover.handle = function (event) {
    pathMover.currentProgress += pathMover.progressRate * (event.delta / 1000);
    if (pathMover.currentProgress > 1) {
      pathMover.currentProgress -= 1;
    }
    var point = path.getPoint(pathMover.currentProgress);
    pathMover.view.x = point.x;
    pathMover.view.y = point.y;
  };

  return pathMover;
};

var _abstract_filter = require(18);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"18":18}],28:[function(require,module,exports){
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

var _abstract_filter = require(18);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _normalize = require(40);

var _normalize2 = _interopRequireDefault(_normalize);

var _distance = require(37);

var _distance2 = _interopRequireDefault(_distance);

var _to_vector = require(51);

var _to_vector2 = _interopRequireDefault(_to_vector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"18":18,"37":37,"40":40,"51":51}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (child, speed) {
    var inOutQuadMover = (0, _abstractMover2.default)(child, speed);

    inOutQuadMover.handleMove = function () {
        var value = (0, _easingUtils.easeInOutBack)(inOutQuadMover.progress);
        inOutQuadMover.view.x = inOutQuadMover.startPoint.x + inOutQuadMover.distance * inOutQuadMover.direction[0] * value;
        inOutQuadMover.view.y = inOutQuadMover.startPoint.y + inOutQuadMover.distance * inOutQuadMover.direction[1] * value;
    };

    return inOutQuadMover;
};

var _abstractMover = require(28);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _easingUtils = require(76);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"76":76}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (child, speed) {
    var inOutQuadMover = (0, _abstractMover2.default)(child, speed);

    inOutQuadMover.handleMove = function () {
        var value = (0, _easingUtils.easeInOutQuad)(inOutQuadMover.progress);
        console.log(value);
        inOutQuadMover.view.x = inOutQuadMover.startPoint.x + inOutQuadMover.distance * inOutQuadMover.direction[0] * value;
        inOutQuadMover.view.y = inOutQuadMover.startPoint.y + inOutQuadMover.distance * inOutQuadMover.direction[1] * value;
    };

    return inOutQuadMover;
};

var _abstractMover = require(28);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _easingUtils = require(76);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"76":76}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (child, speed, easingName) {
    var linearP2PMover = (0, _abstractMover2.default)(child, speed);
    var easingHandler = (0, _easing2.default)();

    linearP2PMover.easingName = easingName ? easingName : 'linear';

    linearP2PMover.handleMove = function () {
        linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
        linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * easingHandler.getValueOf(linearP2PMover.progress, linearP2PMover.easingName);
    };

    return linearP2PMover;
};

var _abstractMover = require(28);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

var _easing = require(58);

var _easing2 = _interopRequireDefault(_easing);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28,"58":58}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (child, speed, shakeFactor) {
  var linearP2PMover = (0, _abstractMover2.default)(child, speed);
  linearP2PMover.shakeFactor = shakeFactor ? shakeFactor : 1;

  linearP2PMover.handleMove = function () {
    var randomFactor = Math.random() * linearP2PMover.shakeFactor - linearP2PMover.shakeFactor / 2;
    linearP2PMover.view.x = linearP2PMover.startPoint.x + linearP2PMover.distance * linearP2PMover.direction[0] * linearP2PMover.progress + randomFactor * linearP2PMover.direction[0];
    linearP2PMover.view.y = linearP2PMover.startPoint.y + linearP2PMover.distance * linearP2PMover.direction[1] * linearP2PMover.progress + randomFactor * linearP2PMover.direction[1];
  };

  return linearP2PMover;
};

var _abstractMover = require(28);

var _abstractMover2 = _interopRequireDefault(_abstractMover);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"28":28}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (child, speed, increase) {
    var fader = (0, _abstract_filter2.default)();

    /* Params and defaults */
    fader.speed = speed ? speed : 1000;
    fader.view.addChild(child.view);
    fader.pulsar = (0, _transition_loop2.default)(fader.speed, 0.5);

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

var _abstract_filter = require(18);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

var _transition_loop = require(59);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"18":18,"59":59}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (child) {
    var flasher = (0, _abstract_filter2.default)();

    flasher.view.addChild(child.view);
    flasher.handle = function () {
        flasher.view.visible = Math.random() > 0.5;
    };

    return flasher;
};

var _abstract_filter = require(18);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


},{"18":18}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (child, speed) {
  var linearRotator = (0, _abstract_filter2.default)();

  linearRotator.speed = speed ? speed : 1;
  linearRotator.view.addChild(child.view);

  function handle(event) {
    linearRotator.view.rotation = linearRotator.view.rotation + linearRotator.speed * (event.delta / 1000);
  }

  linearRotator.handle = handle;

  return linearRotator;
};

var _abstract_filter = require(18);

var _abstract_filter2 = _interopRequireDefault(_abstract_filter);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"18":18}],36:[function(require,module,exports){
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


},{}],37:[function(require,module,exports){
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


},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (angle) {
  return angle * Math.PI / 180;
};


},{}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (calculateFunction, start, end, step) {
    var internalStep = step ? step : 0.01;

    var total = 0;

    for (var x = start; x < end; x += internalStep) {
        var currentY = calculateFunction(x);
        var nextStepY = calculateFunction(x + internalStep);
        var distanceY = currentY - nextStepY;

        var distance = Math.sqrt(internalStep * internalStep + distanceY * distanceY);
        total += distance;
    }

    return total;
};


},{}],40:[function(require,module,exports){
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


},{}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arcConstructor;

var _angle_to_radians = require(38);

var _angle_to_radians2 = _interopRequireDefault(_angle_to_radians);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function arcConstructor(start, degrees, radius) {
  var arc = {};

  arc.start = start ? start : { x: 0, y: 0 };
  arc.degrees = degrees;
  arc.radius = radius;
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
    return arcConstructor(start, partOfDegrees, radius);
  };

  return arc;
}


},{"38":38}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (start, end, cpoint1, cpoint2) {
  var bezierCurve = {};
  bezierCurve.start = start ? start : { x: 0, y: 0 };
  bezierCurve.end = end;
  bezierCurve.cpoint1 = cpoint1;
  bezierCurve.cpoint2 = cpoint2;
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

  return bezierCurve;
};

var _bezierJs = require(60);

var _bezierJs2 = _interopRequireDefault(_bezierJs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"60":60}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lineConstructor;

var _to_vector = require(51);

var _to_vector2 = _interopRequireDefault(_to_vector);

var _distance = require(37);

var _distance2 = _interopRequireDefault(_distance);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function lineConstructor(start, end) {
  var line = {};
  line.start = start ? start : { x: 0, y: 0 };
  line.end = end;
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
    var newEnd = { x: end.x * progress, y: end.y * progress };
    var pathPart = lineConstructor(start, newEnd);
    return pathPart;
  };

  return line;
}


},{"37":37,"51":51}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathConstructor;

var _add_up_points = require(36);

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


},{"36":36}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arc = require(41);

var _arc2 = _interopRequireDefault(_arc);

var _line = require(43);

var _line2 = _interopRequireDefault(_line);

var _path = require(44);

var _path2 = _interopRequireDefault(_path);

var _sine_wave = require(46);

var _sine_wave2 = _interopRequireDefault(_sine_wave);

var _bezier_curve = require(42);

var _bezier_curve2 = _interopRequireDefault(_bezier_curve);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  arc: _arc2.default,
  line: _line2.default,
  path: _path2.default,
  sineWave: _sine_wave2.default,
  bezierCurve: _bezier_curve2.default
};


},{"41":41,"42":42,"43":43,"44":44,"46":46}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (start, end, frequency, amplitude) {
  var line = {};
  line.start = start ? start : { x: 0, y: 0 };
  line.end = end;
  line.frequency = frequency ? frequency : 1;
  line.amplitude = amplitude ? amplitude : 1;
  line.internalFunc = function (x) {
    return line.amplitude * Math.sin(line.frequency * Math.PI * 2 * x);
  };
  line.type = 'sine_wave';

  line.getEdgePoint = function () {
    return line.end;
  };

  line.getLength = function () {
    return (0, _length_of_function2.default)(line.internalFunc, start.x, end.x);
  };

  line.getPoint = function (progress) {
    return {
      x: line.start.x + (line.end.x - line.start.x) * progress,
      y: line.internalFunc(line.start.x + (line.end.x - line.start.x) * progress)
    };
  };

  return line;
};

var _length_of_function = require(39);

var _length_of_function2 = _interopRequireDefault(_length_of_function);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"39":39}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (radius) {

  var circle = {};
  circle.radius = radius;

  circle.path = (0, _path2.default)();
  circle.path.subPaths.push((0, _arc2.default)({ x: 0, y: -circle.radius }, 360, circle.radius));

  return circle;
};

var _path = require(44);

var _path2 = _interopRequireDefault(_path);

var _arc = require(41);

var _arc2 = _interopRequireDefault(_arc);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"41":41,"44":44}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (width, height) {

  var rectangle = {};
  rectangle.width = width;
  rectangle.height = height;

  rectangle.path = (0, _path2.default)();
  rectangle.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: width, y: 0 }));
  rectangle.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: 0, y: height }));
  rectangle.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: -width, y: 0 }));
  rectangle.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: 0, y: -height }));

  return rectangle;
};

var _path = require(44);

var _path2 = _interopRequireDefault(_path);

var _line = require(43);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"43":43,"44":44}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rectangle = require(48);

var _rectangle2 = _interopRequireDefault(_rectangle);

var _square = require(50);

var _square2 = _interopRequireDefault(_square);

var _circle = require(47);

var _circle2 = _interopRequireDefault(_circle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  rectangle: _rectangle2.default,
  square: _square2.default,
  circle: _circle2.default
};


},{"47":47,"48":48,"50":50}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sidelength) {

  var square = {};
  square.sidelength = sidelength;

  square.path = (0, _path2.default)();
  square.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: sidelength, y: 0 }));
  square.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: 0, y: sidelength }));
  square.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: -sidelength, y: 0 }));
  square.path.subPaths.push((0, _line2.default)({ x: 0, y: 0 }, { x: 0, y: -sidelength }));

  return square;
};

var _path = require(44);

var _path2 = _interopRequireDefault(_path);

var _line = require(43);

var _line2 = _interopRequireDefault(_line);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"43":43,"44":44}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (point) {
  return [point.x, point.y];
};


},{}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  addAnimation: function addAnimation(handle) {
    createjs.Ticker.addEventListener('tick', handle);
  },
  removeAnimation: function removeAnimation(handle) {
    createjs.Ticker.removeEventListener('tick', handle);
  }
};


},{}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;

var _factory = require(17);

var _factory2 = _interopRequireDefault(_factory);

var _flasher = require(34);

var _flasher2 = _interopRequireDefault(_flasher);

var _fader = require(33);

var _fader2 = _interopRequireDefault(_fader);

var _linear = require(31);

var _linear2 = _interopRequireDefault(_linear);

var _in_out_quad = require(30);

var _in_out_quad2 = _interopRequireDefault(_in_out_quad);

var _in_out_back = require(29);

var _in_out_back2 = _interopRequireDefault(_in_out_back);

var _linear_shake = require(32);

var _linear_shake2 = _interopRequireDefault(_linear_shake);

var _group = require(22);

var _group2 = _interopRequireDefault(_group);

var _linear_rotator = require(35);

var _linear_rotator2 = _interopRequireDefault(_linear_rotator);

var _random_color_changer = require(55);

var _random_color_changer2 = _interopRequireDefault(_random_color_changer);

var _color_fader = require(54);

var _color_fader2 = _interopRequireDefault(_color_fader);

var _linear_pulsar = require(57);

var _linear_pulsar2 = _interopRequireDefault(_linear_pulsar);

var _exponential_pulsar = require(56);

var _exponential_pulsar2 = _interopRequireDefault(_exponential_pulsar);

var _randomColor = require(77);

var _randomColor2 = _interopRequireDefault(_randomColor);

var _loop = require(52);

var _loop2 = _interopRequireDefault(_loop);

var _shapes = require(49);

var _shapes2 = _interopRequireDefault(_shapes);

var _paths = require(45);

var _paths2 = _interopRequireDefault(_paths);

var _pathMover = require(27);

var _pathMover2 = _interopRequireDefault(_pathMover);

var _compositions = require(1);

var _compositions2 = _interopRequireDefault(_compositions);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function create(canvasId) {
  var mainContainer = _factory2.default.mainContainer(canvasId);
  _loop2.default.addAnimation(mainContainer);
  createjs.Ticker.setFPS(60);
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
          linearShake: _linear_shake2.default,
          inOutQuad: _in_out_quad2.default,
          inOutBack: _in_out_back2.default
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
        linearPulsar: _linear_pulsar2.default,
        exponentialPulsar: _exponential_pulsar2.default
      }
    },
    compositions: _compositions2.default
  };
}


},{"1":1,"17":17,"22":22,"27":27,"29":29,"30":30,"31":31,"32":32,"33":33,"34":34,"35":35,"45":45,"49":49,"52":52,"54":54,"55":55,"56":56,"57":57,"77":77}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (subject, speed, color1, color2) {
  var colorFader = {};
  colorFader.subject = subject;
  colorFader.speed = speed;
  colorFader.color1 = (0, _color2.default)(color1);
  colorFader.color2 = (0, _color2.default)(color2);
  colorFader.currentColor = (0, _color2.default)(color1);
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
    colorFader.subject.color = colorFader.currentColor.rgbString();
    colorFader.subject.draw();
  };

  return colorFader;
};

var _color = require(68);

var _color2 = _interopRequireDefault(_color);

var _transition_loop = require(59);

var _transition_loop2 = _interopRequireDefault(_transition_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"59":59,"68":68}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (subject) {
  var randomColorChanger = {};
  randomColorChanger.subject = subject;

  randomColorChanger.start = function () {
    _loop2.default.addAnimation(randomColorChanger.handle);
  };

  randomColorChanger.stop = function () {
    _loop2.default.removeAnimation(randomColorChanger.handle);
  };

  randomColorChanger.handle = function () {
    randomColorChanger.subject.color = (0, _randomColor2.default)();
    randomColorChanger.subject.draw();
  };

  return randomColorChanger;
};

var _loop = require(52);

var _loop2 = _interopRequireDefault(_loop);

var _randomColor = require(77);

var _randomColor2 = _interopRequireDefault(_randomColor);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"52":52,"77":77}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (subject, speed, limit) {
  var linearPulsar = {};
  linearPulsar.subject = subject;
  linearPulsar.speed = speed;
  linearPulsar.limit = limit;
  linearPulsar.current = 1;

  if (limit < linearPulsar.current) {
    linearPulsar.increment = false;
    linearPulsar.progress = 1;
  } else {
    linearPulsar.increment = true;
    linearPulsar.progress = 0;
  }

  linearPulsar.start = function () {
    _loop2.default.addAnimation(linearPulsar.handle);
  };

  linearPulsar.stop = function () {
    _loop2.default.removeAnimation(linearPulsar.handle);
  };

  linearPulsar.handle = function (event) {
    if (linearPulsar.increment) {
      handleIncrement(event);
    } else {
      handleDecrement(event);
    }
    linearPulsar.subject.scale = 1 + (0, _easingUtils.easeInOutExpo)(linearPulsar.progress) * (linearPulsar.limit - 1);
    linearPulsar.subject.draw();
  };

  function handleIncrement(event) {
    linearPulsar.progress = linearPulsar.progress + event.delta / 1000 * (speed / (linearPulsar.limit - 1));
    if (linearPulsar.progress >= 1) {
      linearPulsar.progress = 1;
      linearPulsar.increment = false;
    }
  }

  function handleDecrement(event) {
    linearPulsar.progress = linearPulsar.progress - event.delta / 1000 * (speed / (linearPulsar.limit - 1));
    if (linearPulsar.progress <= 0) {
      linearPulsar.progress = 0;
      linearPulsar.increment = true;
    }
  }

  return linearPulsar;
};

var _loop = require(52);

var _loop2 = _interopRequireDefault(_loop);

var _easingUtils = require(76);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}


},{"52":52,"76":76}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (subject, speed, limit) {
  var linearPulsar = {};
  linearPulsar.subject = subject;
  linearPulsar.speed = speed;
  linearPulsar.limit = limit;
  linearPulsar.pulsar = (0, _transition_loop.pulsarTransition)(linearPulsar.speed);

  linearPulsar.start = function () {
    linearPulsar.pulsar.start(linearPulsar.handle);
  };

  linearPulsar.stop = function () {
    linearPulsar.pulsar.stop();
  };

  linearPulsar.handle = function (current) {
    linearPulsar.subject.scale = 1 + current * linearPulsar.limit;
    linearPulsar.subject.draw();
  };

  return linearPulsar;
};

var _transition_loop = require(59);


},{"59":59}],58:[function(require,module,exports){
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

var _easingUtils = require(76);


},{"76":76}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.risingTransition = risingTransition;
exports.pulsarTransition = pulsarTransition;

var _loop = require(52);

var _loop2 = _interopRequireDefault(_loop);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function transitionLoop(time, steepness, current) {
  var pulsar = {};
  pulsar.time = time;
  pulsar.steepness = typeof steepness !== 'undefined' ? steepness : 0.5;
  pulsar.current = current ? current : 0;
  pulsar.increment = true;
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

    var relativeCurrent = pulsar.currentMseconds / pulsar.time;
    if (relativeCurrent <= pulsar.steepness) {
      pulsar.current = relativeCurrent / pulsar.steepness;
    } else {
      pulsar.current = 1 - (relativeCurrent - pulsar.steepness) / (1 - pulsar.steepness);
    }

    if (pulsar.callback) {
      pulsar.callback(pulsar.current, event);
    }
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


},{"52":52}],60:[function(require,module,exports){
module.exports = require(61);

},{"61":61}],61:[function(require,module,exports){
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
  var utils = require(63);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = require(62);

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

},{"62":62,"63":63}],62:[function(require,module,exports){
(function() {
  "use strict";

  var utils = require(63);

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

},{"63":63}],63:[function(require,module,exports){
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
      var Bezier = require(61);
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

},{"61":61}],64:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require(65)
var ieee754 = require(66)
var isArray = require(67)

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

},{"65":65,"66":66,"67":67}],65:[function(require,module,exports){
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

},{}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],68:[function(require,module,exports){
/* MIT license */
var clone = require(69);
var convert = require(72);
var string = require(74);

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

},{"69":69,"72":72,"74":74}],69:[function(require,module,exports){
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

}).call(this,require(64).Buffer)

},{"64":64}],70:[function(require,module,exports){
/* MIT license */
var cssKeywords = require(71);

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

},{"71":71}],71:[function(require,module,exports){
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


},{}],72:[function(require,module,exports){
var conversions = require(70);
var route = require(73);

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

},{"70":70,"73":73}],73:[function(require,module,exports){
var conversions = require(70);

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


},{"70":70}],74:[function(require,module,exports){
/* MIT license */
var colorNames = require(75);

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

},{"75":75}],75:[function(require,module,exports){
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
},{}],76:[function(require,module,exports){
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

},{}],77:[function(require,module,exports){
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

},{}]},{},[53])(53)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXGNvbXBvc2l0aW9ucy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xcYmV6aWVyXFxiZXppZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXGJlemllclxcc3dpbmdpbmdfbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xccGF0aF9tYWdpYy5qcyIsIi50bXBcXHNjcmlwdHNcXGNvbXBvc2l0aW9uc1xccGF0aF9tYWdpY1xccmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxjb21wb3NpdGlvbnNcXHBhdGhfbWFnaWNcXHRyYW5zaXRpb25fcGF0aF9kcmF3ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxhYnN0cmFjdF9jb21wb25lbnQuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjaXJjbGUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjb250YWluZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxjdXN0b21fb2JqZWN0LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmFjdG9yaWVzXFxjcmVhdGVqc1xcY29tcG9uZW50c1xcaGVscGVyXFxwYXRoX2RyYXdlci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXGxpbmUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxtYWluX2NvbnRhaW5lci5qcyIsIi50bXBcXHNjcmlwdHNcXGZhY3Rvcmllc1xcY3JlYXRlanNcXGNvbXBvbmVudHNcXHBhdGguanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxyZWN0YW5nbGUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxjb21wb25lbnRzXFxzcXVhcmUuanMiLCIudG1wXFxzY3JpcHRzXFxmYWN0b3JpZXNcXGNyZWF0ZWpzXFxmYWN0b3J5LmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcYWJzdHJhY3RfZmlsdGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGFic3RyYWN0X2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXGNlbnRlcl9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxjaXJjbGVfZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxcZ3JvdXAuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxncm91cFxccmFuZG9tX2NpcmNsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxyYW5kb21fcmVjdGFuZ2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcZ3JvdXBcXHJlY3RhbmdsZV9ncm91cC5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXGdyb3VwXFxzcGlyYWxfY2lyY2xlX2dyb3VwLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBhdGhcXHBhdGgtbW92ZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGFic3RyYWN0LW1vdmVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcbW92ZXJcXHBvaW50MnBvaW50XFxpbl9vdXRfYmFjay5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcaW5fb3V0X3F1YWQuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxtb3ZlclxccG9pbnQycG9pbnRcXGxpbmVhci5qcyIsIi50bXBcXHNjcmlwdHNcXGZpbHRlcnNcXG1vdmVyXFxwb2ludDJwb2ludFxcbGluZWFyX3NoYWtlLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xcb3BhY2l0eVxcZmFkZXIuanMiLCIudG1wXFxzY3JpcHRzXFxmaWx0ZXJzXFxvcGFjaXR5XFxmbGFzaGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcZmlsdGVyc1xccm90YXRvclxcbGluZWFyX3JvdGF0b3IuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcYWRkX3VwX3BvaW50cy5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxkaXN0YW5jZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxoZWxwZXJcXGFuZ2xlX3RvX3JhZGlhbnMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcaGVscGVyXFxsZW5ndGhfb2ZfZnVuY3Rpb24uanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxcbm9ybWFsaXplLmpzIiwiLnRtcFxcc2NyaXB0c1xcZ2VvbWV0cnlcXHBhdGhzXFxhcmMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXGJlemllcl9jdXJ2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xcbGluZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aC5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxwYXRoc1xccGF0aHMuanMiLCIudG1wXFxzY3JpcHRzXFxnZW9tZXRyeVxccGF0aHNcXHNpbmVfd2F2ZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxzaGFwZXNcXGNpcmNsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxzaGFwZXNcXHJlY3RhbmdsZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxzaGFwZXNcXHNoYXBlcy5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFxzaGFwZXNcXHNxdWFyZS5qcyIsIi50bXBcXHNjcmlwdHNcXGdlb21ldHJ5XFx0b192ZWN0b3IuanMiLCIudG1wXFxzY3JpcHRzXFxsb29wLmpzIiwiLnRtcFxcc2NyaXB0c1xcbWFpbi5qcyIsIi50bXBcXHNjcmlwdHNcXG1vZGlmaWNhdG9yc1xcY29sb3JcXGNvbG9yX2ZhZGVyLmpzIiwiLnRtcFxcc2NyaXB0c1xcbW9kaWZpY2F0b3JzXFxjb2xvclxccmFuZG9tX2NvbG9yX2NoYW5nZXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxleHBvbmVudGlhbF9wdWxzYXIuanMiLCIudG1wXFxzY3JpcHRzXFxtb2RpZmljYXRvcnNcXHNjYWxlXFxsaW5lYXJfcHVsc2FyLmpzIiwiLnRtcFxcc2NyaXB0c1xcdHJhbnNpdGlvbnNcXGVhc2luZy5qcyIsIi50bXBcXHNjcmlwdHNcXHRyYW5zaXRpb25zXFx0cmFuc2l0aW9uX2xvb3AuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvYmV6aWVyLmpzIiwibm9kZV9tb2R1bGVzL2Jlemllci1qcy9saWIvcG9seS1iZXppZXIuanMiLCJub2RlX21vZHVsZXMvYmV6aWVyLWpzL2xpYi91dGlscy5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb2xvci9ub2RlX21vZHVsZXMvY2xvbmUvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMiLCJub2RlX21vZHVsZXMvY29sb3Ivbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY3NzLWtleXdvcmRzLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvY29sb3Itc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvbG9yL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzaW5nLXV0aWxzL2xpYi9lYXNpbmcuanMiLCJub2RlX21vZHVsZXMvcmFuZG9tQ29sb3IvcmFuZG9tQ29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFFQSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0MsU0FBTztBQURvQyxDQUE3Qzs7QUFJQSxJQUFJLGNBQWMsUUFBUSx5QkFBUixDQUFsQjs7QUFFQSxJQUFJLGVBQWUsdUJBQXVCLFdBQXZCLENBQW5COztBQUVBLFNBQVMsc0JBQVQsQ0FBZ0MsR0FBaEMsRUFBcUM7QUFBRSxTQUFPLE9BQU8sSUFBSSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCLEVBQUUsU0FBUyxHQUFYLEVBQXJDO0FBQXdEOztBQUUvRixRQUFRLE9BQVIsR0FBa0I7QUFDaEIsYUFBVyxh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QUExQixFQUFnQyxPQUFoQyxFQUF5QztBQUN2QyxTQUFPLGVBQWUsSUFBZixFQUFxQixDQUFyQixFQUF3QixPQUF4QixDQUFQO0FBQ0Q7O0FBRUQsU0FBUyxnQkFBVCxDQUEwQixJQUExQixFQUFnQyxPQUFoQyxFQUF5QztBQUN2QyxTQUFPLGVBQWUsSUFBZixFQUFxQixDQUFyQixFQUF3QixPQUF4QixDQUFQO0FBQ0Q7O0FBRUQsUUFBUSxPQUFSLEdBQWtCLGNBQWxCOzs7O0FDN0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2gxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4eUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wYXRoX21hZ2ljID0gcmVxdWlyZSgnLi9wYXRoX21hZ2ljL3BhdGhfbWFnaWMnKTtcblxudmFyIF9wYXRoX21hZ2ljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhfbWFnaWMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHBhdGhNYWdpYzogX3BhdGhfbWFnaWMyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb3NpdGlvbnMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc3dpbmdpbmdfbGluZSA9IHJlcXVpcmUoJy4vc3dpbmdpbmdfbGluZScpO1xuXG52YXIgX3N3aW5naW5nX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3dpbmdpbmdfbGluZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgc3dpbmdpbmdMaW5lOiBfc3dpbmdpbmdfbGluZTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJlemllci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgdmFyIHN3aW5nTGluZSA9IHt9O1xuXG4gIHN3aW5nTGluZS5sZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgc3dpbmdMaW5lLmFtcGxpdHVkZSA9IG9wdGlvbnMuYW1wbGl0dWRlO1xuICBzd2luZ0xpbmUudGltZSA9IG9wdGlvbnMudGltZTtcbiAgc3dpbmdMaW5lLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShzd2luZ0xpbmUudGltZSwgMC41KTtcbiAgc3dpbmdMaW5lLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcbiAgc3dpbmdMaW5lLmJlemllckN1cnZlID0gKDAsIF9iZXppZXJfY3VydmUyLmRlZmF1bHQpKHsgeDogMCwgeTogMCB9LCB7IHg6IHN3aW5nTGluZS5sZW5ndGgsIHk6IDAgfSwgeyB4OiBzd2luZ0xpbmUubGVuZ3RoIC8gMiwgeTogMCB9KTtcbiAgc3dpbmdMaW5lLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShzd2luZ0xpbmUuYmV6aWVyQ3VydmUpO1xuXG4gIHN3aW5nTGluZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0YXJ0KHN3aW5nTGluZS5oYW5kbGUpO1xuICAgIHN3aW5nTGluZS52aWV3LmFkZENoaWxkKHN3aW5nTGluZS5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBzd2luZ0xpbmUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzd2luZ0xpbmUucHVsc2FyLnN0b3AoKTtcbiAgICBzd2luZ0xpbmUudmlldy5yZW1vdmVDaGlsZChzd2luZ0xpbmUucGF0aFZpZXcudmlldyk7XG4gIH07XG5cbiAgc3dpbmdMaW5lLmhhbmRsZSA9IGZ1bmN0aW9uIChjdXJyZW50KSB7XG4gICAgc3dpbmdMaW5lLmJlemllckN1cnZlLmNwb2ludDEueSA9IChjdXJyZW50IC0gMC41KSAqIHN3aW5nTGluZS5hbXBsaXR1ZGU7XG4gICAgc3dpbmdMaW5lLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gc3dpbmdMaW5lO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2NvbXBvbmVudHMvY29udGFpbmVyJyk7XG5cbnZhciBfY29udGFpbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnRhaW5lcik7XG5cbnZhciBfYmV6aWVyX2N1cnZlID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvcGF0aHMvYmV6aWVyX2N1cnZlJyk7XG5cbnZhciBfYmV6aWVyX2N1cnZlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jlemllcl9jdXJ2ZSk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2luZ2luZ19saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25fcGF0aF9kcmF3ZXInKTtcblxudmFyIF90cmFuc2l0aW9uX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9yYW5kb21fcGFydF9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbV9wYXJ0X3BhdGhfZHJhd2VyKTtcblxudmFyIF9iZXppZXIgPSByZXF1aXJlKCcuL2Jlemllci9iZXppZXInKTtcblxudmFyIF9iZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0cmFuc2l0aW9uUGF0aERyYXdlcjogX3RyYW5zaXRpb25fcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIHJhbmRvbVBhcnRQYXRoRHJhd2VyOiBfcmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIyLmRlZmF1bHQsXG4gIGJlemllcjogX2JlemllcjIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfbWFnaWMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG4gIHBhdGhEcmF3ZXIucGF0aCA9IHBhdGg7XG4gIHBhdGhEcmF3ZXIucGF0aFZpZXcgPSAoMCwgX3BhdGgyLmRlZmF1bHQpKHBhdGhEcmF3ZXIucGF0aCwgJyMwMDAnKTtcbiAgcGF0aERyYXdlci52aWV3ID0gKDAsIF9jb250YWluZXIyLmRlZmF1bHQpKCk7XG5cbiAgcGF0aERyYXdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocGF0aERyYXdlci5oYW5kbGUpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5hZGRDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5yZW1vdmVBbmltYXRpb24ocGF0aERyYXdlci5oYW5kbGUpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5yZW1vdmVDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucGF0aFZpZXcuY29tcGxldGVQYXRoID0gcGF0aERyYXdlci5wYXRoLmdldFBhcnRQYXRoKE1hdGgucmFuZG9tKCkpO1xuICAgIHBhdGhEcmF3ZXIucGF0aFZpZXcuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBwYXRoRHJhd2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tX3BhcnRfcGF0aF9kcmF3ZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBwYXRoRHJhd2VyID0ge307XG4gIHBhdGhEcmF3ZXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AyLmRlZmF1bHQpKDEwMDAsIDEpO1xuICBwYXRoRHJhd2VyLnBhdGggPSBwYXRoO1xuICBwYXRoRHJhd2VyLnBhdGhWaWV3ID0gKDAsIF9wYXRoMi5kZWZhdWx0KShwYXRoRHJhd2VyLnBhdGgsIG9wdGlvbnMpO1xuICBwYXRoRHJhd2VyLnZpZXcgPSAoMCwgX2NvbnRhaW5lcjIuZGVmYXVsdCkoKTtcblxuICBwYXRoRHJhd2VyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHBhdGhEcmF3ZXIucHVsc2FyLnN0YXJ0KHBhdGhEcmF3ZXIuaGFuZGxlKTtcbiAgICBwYXRoRHJhd2VyLnZpZXcuYWRkQ2hpbGQocGF0aERyYXdlci5wYXRoVmlldy52aWV3KTtcbiAgfTtcblxuICBwYXRoRHJhd2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGF0aERyYXdlci5wdWxzYXIuc3RvcCgpO1xuICAgIHBhdGhEcmF3ZXIudmlldy5yZW1vdmVDaGlsZChwYXRoRHJhd2VyLnBhdGhWaWV3LnZpZXcpO1xuICB9O1xuXG4gIHBhdGhEcmF3ZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBwYXRoRHJhd2VyLnBhdGhWaWV3LmNvbXBsZXRlUGF0aCA9IHBhdGhEcmF3ZXIucGF0aC5nZXRQYXJ0UGF0aChjdXJyZW50KTtcbiAgICBwYXRoRHJhd2VyLnBhdGhWaWV3LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcGF0aERyYXdlcjtcbn07XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wID0gcmVxdWlyZSgnLi4vLi4vdHJhbnNpdGlvbnMvdHJhbnNpdGlvbl9sb29wJyk7XG5cbnZhciBfdHJhbnNpdGlvbl9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25fbG9vcCk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG52YXIgX2NvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbl9wYXRoX2RyYXdlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgY29tcG9uZW50ID0ge307XG4gICAgICBjb21wb25lbnQudmlldyA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpO1xuICAgICAgY29tcG9uZW50LnNjYWxlID0gMTtcblxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdF9jb21wb25lbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY2lyY2xlU2hhcGUsIGNvbG9yKSB7XG5cbiAgICAgIHZhciBjaXJjbGUgPSAoMCwgX2Fic3RyYWN0X2NvbXBvbmVudDIuZGVmYXVsdCkoKTtcbiAgICAgIGNpcmNsZS5jaXJjbGVTaGFwZSA9IGNpcmNsZVNoYXBlO1xuICAgICAgY2lyY2xlLmNvbG9yID0gY29sb3I7XG5cbiAgICAgIGNpcmNsZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2lyY2xlLnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIGNpcmNsZS52aWV3LmdyYXBoaWNzLmJlZ2luRmlsbChjaXJjbGUuY29sb3IpLmRyYXdDaXJjbGUoMCwgMCwgY2lyY2xlLmNpcmNsZVNoYXBlLnJhZGl1cyAqIGNpcmNsZS5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICBjaXJjbGUuZHJhdygpO1xuICAgICAgcmV0dXJuIGNpcmNsZTtcbn07XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9jb21wb25lbnQnKTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfY29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IGNyZWF0ZWpzLkNvbnRhaW5lcigpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRhaW5lci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjdXN0b21TaGFwZSwgY29sb3IpIHtcblxuICAgICAgdmFyIGN1c3RvbSA9ICgwLCBfYWJzdHJhY3RfY29tcG9uZW50Mi5kZWZhdWx0KSgpO1xuICAgICAgY3VzdG9tLmN1c3RvbVNoYXBlID0gY3VzdG9tU2hhcGU7XG4gICAgICBjdXN0b20uY29sb3IgPSBjb2xvcjtcblxuICAgICAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdXN0b20udmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKGN1c3RvbS5jb2xvcikuYmVnaW5TdHJva2UoJyMwMEYnKS5tb3ZlVG8oMCwgMCk7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBjdXN0b20uY3VzdG9tU2hhcGUucGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXRoX2RyYXdlcjIuZGVmYXVsdFtwYXRoLnR5cGVdKGN1c3RvbS52aWV3LmdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGN1cnJlbnQsIHBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY3VzdG9tLmRyYXcoKTtcbiAgICAgIHJldHVybiBjdXN0b207XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbnZhciBfcGF0aF9kcmF3ZXIgPSByZXF1aXJlKCcuL2hlbHBlci9wYXRoX2RyYXdlcicpO1xuXG52YXIgX3BhdGhfZHJhd2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGhfZHJhd2VyKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvYWRkX3VwX3BvaW50cycpO1xuXG52YXIgX2FkZF91cF9wb2ludHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRkX3VwX3BvaW50cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdXN0b21fb2JqZWN0LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9nZW9tZXRyeS9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlKi9cbmZ1bmN0aW9uIHBhdGhEcmF3ZXIoKSB7fVxuXG5wYXRoRHJhd2VyLmxpbmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubGluZVRvKGN1cnJlbnQueCArIHBhdGguZ2V0RWRnZVBvaW50KCkueCwgY3VycmVudC55ICsgcGF0aC5nZXRFZGdlUG9pbnQoKS55KTtcbn07XG5cbnBhdGhEcmF3ZXIuYXJjID0gZnVuY3Rpb24gKGdyYXBoaWNzLCBwYXRoLCBjdXJyZW50KSB7XG4gIGdyYXBoaWNzLm1vdmVUbyhjdXJyZW50LnggKyBwYXRoLnN0YXJ0LngsIGN1cnJlbnQueSArIHBhdGguc3RhcnQueSk7XG4gIGdyYXBoaWNzLmFyYyhwYXRoLnN0YXJ0LngsIHBhdGguc3RhcnQueSArIHBhdGgucmFkaXVzLCBwYXRoLnJhZGl1cywgKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KSgtOTApLCAoMCwgX2FuZ2xlX3RvX3JhZGlhbnMyLmRlZmF1bHQpKHBhdGguZGVncmVlcyAtIDkwKSk7XG59O1xuXG5wYXRoRHJhd2VyLnNpbmVfd2F2ZSA9IGZ1bmN0aW9uIChncmFwaGljcywgcGF0aCwgY3VycmVudCkge1xuICBncmFwaGljcy5tb3ZlVG8oY3VycmVudC54ICsgcGF0aC5zdGFydC54LCBjdXJyZW50LnkgKyBwYXRoLnN0YXJ0LnkpO1xuICBmb3IgKHZhciB4ID0gMDsgeCA8IHBhdGguZ2V0TGVuZ3RoKCk7IHggKz0gNSkge1xuICAgIHZhciBwb2ludCA9IHBhdGguZ2V0UG9pbnQoeCAvIHBhdGguZ2V0TGVuZ3RoKCkpO1xuICAgIGdyYXBoaWNzLmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgfVxufTtcblxucGF0aERyYXdlci5iZXppZXJfY3VydmUgPSBmdW5jdGlvbiAoZ3JhcGhpY3MsIHBhdGgsIGN1cnJlbnQpIHtcbiAgZ3JhcGhpY3MubW92ZVRvKGN1cnJlbnQueCArIHBhdGguc3RhcnQueCwgY3VycmVudC55ICsgcGF0aC5zdGFydC55KTtcbiAgaWYgKHBhdGguY3BvaW50Mikge1xuICAgIGdyYXBoaWNzLmJlemllckN1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmNwb2ludDIueCwgcGF0aC5jcG9pbnQyLnksIHBhdGguZW5kLngsIHBhdGguZW5kLnkpO1xuICB9IGVsc2Uge1xuICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8ocGF0aC5jcG9pbnQxLngsIHBhdGguY3BvaW50MS55LCBwYXRoLmVuZC54LCBwYXRoLmVuZC55KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aERyYXdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdGhfZHJhd2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGxpbmVQYXRoLCB0aGlja25lc3MsIGNvbG9yKSB7XG5cbiAgICAgIHZhciBsaW5lID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICAgICBsaW5lLnBhdGggPSBsaW5lUGF0aDtcbiAgICAgIGxpbmUuY29sb3IgPSBjb2xvcjtcbiAgICAgIGxpbmUudGhpY2tuZXNzID0gdGhpY2tuZXNzO1xuXG4gICAgICBsaW5lLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaW5lLnZpZXcuZ3JhcGhpY3MuYmVnaW5TdHJva2UobGluZS5jb2xvcikuc2V0U3Ryb2tlU3R5bGUobGluZS50aGlja25lc3MgKiBsaW5lLnNjYWxlKS5tb3ZlVG8obGluZS5wYXRoLnN0YXJ0LnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguc3RhcnQueSAqIGxpbmUuc2NhbGUpLmxpbmVUbyhsaW5lLnBhdGguZW5kLnggKiBsaW5lLnNjYWxlLCBsaW5lLnBhdGguZW5kLnkgKiBsaW5lLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIGxpbmUuZHJhdygpO1xuICAgICAgcmV0dXJuIGxpbmU7XG59O1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfY29tcG9uZW50Jyk7XG5cbnZhciBfYWJzdHJhY3RfY29tcG9uZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2NvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHZhciBzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShpZCk7XG4gICAgICByZXR1cm4gc3RhZ2U7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFpbl9jb250YWluZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY29tcGxldGVQYXRoLCBvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHZhciBjdXN0b20gPSAoMCwgX2Fic3RyYWN0X2NvbXBvbmVudDIuZGVmYXVsdCkoKTtcbiAgICAgIGN1c3RvbS5jb21wbGV0ZVBhdGggPSBjb21wbGV0ZVBhdGg7XG4gICAgICBjdXN0b20uY29sb3IgPSBvcHRpb25zLmNvbG9yID8gb3B0aW9ucy5jb2xvciA6ICcjMDAwJztcbiAgICAgIGN1c3RvbS53aWR0aCA9IG9wdGlvbnMud2lkdGggPyBvcHRpb25zLndpZHRoIDogMTtcblxuICAgICAgY3VzdG9tLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdXN0b20udmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgY3VzdG9tLnZpZXcuZ3JhcGhpY3MuYmVnaW5TdHJva2UoY3VzdG9tLmNvbG9yKS5zZXRTdHJva2VTdHlsZShjdXN0b20ud2lkdGgpLm1vdmVUbygwLCAwKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgICAgICB2YXIgaSA9IDE7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGN1c3RvbS5jb21wbGV0ZVBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfcGF0aF9kcmF3ZXIyLmRlZmF1bHRbcGF0aC50eXBlXShjdXN0b20udmlldy5ncmFwaGljcywgcGF0aCwgY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gKDAsIF9hZGRfdXBfcG9pbnRzMi5kZWZhdWx0KShjdXJyZW50LCBwYXRoLmdldEVkZ2VQb2ludCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGN1c3RvbS5kcmF3KCk7XG4gICAgICByZXR1cm4gY3VzdG9tO1xufTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG52YXIgX3BhdGhfZHJhd2VyID0gcmVxdWlyZSgnLi9oZWxwZXIvcGF0aF9kcmF3ZXInKTtcblxudmFyIF9wYXRoX2RyYXdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoX2RyYXdlcik7XG5cbnZhciBfYWRkX3VwX3BvaW50cyA9IHJlcXVpcmUoJy4uLy4uLy4uL2dlb21ldHJ5L2FkZF91cF9wb2ludHMnKTtcblxudmFyIF9hZGRfdXBfcG9pbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZF91cF9wb2ludHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChyZWN0YW5nbGUsIGNvbG9yKSB7XG5cbiAgICAgIHZhciByZWN0ID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICAgICByZWN0LndpZHRoID0gcmVjdGFuZ2xlLndpZHRoO1xuICAgICAgcmVjdC5oZWlnaHQgPSByZWN0YW5nbGUuaGVpZ2h0O1xuICAgICAgcmVjdC5jb2xvciA9IGNvbG9yO1xuXG4gICAgICByZWN0LmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWN0LnZpZXcuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHJlY3Qudmlldy5ncmFwaGljcy5iZWdpbkZpbGwocmVjdC5jb2xvcikuZHJhd1JlY3QoMCwgMCwgcmVjdC53aWR0aCAqIHJlY3Quc2NhbGUsIHJlY3QuaGVpZ2h0ICogcmVjdC5zY2FsZSk7XG4gICAgICB9O1xuXG4gICAgICByZWN0LmRyYXcoKTtcbiAgICAgIHJldHVybiByZWN0O1xufTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNxdWFyZUdlb21ldHJ5LCBjb2xvcikge1xuXG4gICAgICB2YXIgc3F1YXJlID0gKDAsIF9hYnN0cmFjdF9jb21wb25lbnQyLmRlZmF1bHQpKCk7XG4gICAgICBzcXVhcmUuc2lkZUxlbmd0aCA9IHNxdWFyZUdlb21ldHJ5LnNpZGVsZW5ndGg7XG4gICAgICBzcXVhcmUuY29sb3IgPSBjb2xvcjtcblxuICAgICAgc3F1YXJlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzcXVhcmUudmlldy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAgICAgc3F1YXJlLnZpZXcuZ3JhcGhpY3MuYmVnaW5GaWxsKHNxdWFyZS5jb2xvcikuZHJhd1JlY3QoMCwgMCwgc3F1YXJlLnNpZGVMZW5ndGggKiBzcXVhcmUuc2NhbGUsIHNxdWFyZS5zaWRlTGVuZ3RoICogc3F1YXJlLnNjYWxlKTtcbiAgICAgIH07XG5cbiAgICAgIHNxdWFyZS5kcmF3KCk7XG4gICAgICByZXR1cm4gc3F1YXJlO1xufTtcblxudmFyIF9hYnN0cmFjdF9jb21wb25lbnQgPSByZXF1aXJlKCcuL2Fic3RyYWN0X2NvbXBvbmVudCcpO1xuXG52YXIgX2Fic3RyYWN0X2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9jb21wb25lbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3F1YXJlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2NvbnRhaW5lcicpO1xuXG52YXIgX2NvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb250YWluZXIpO1xuXG52YXIgX3NxdWFyZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2lyY2xlJyk7XG5cbnZhciBfY2lyY2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NpcmNsZSk7XG5cbnZhciBfcmVjdGFuZ2xlID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JlY3RhbmdsZScpO1xuXG52YXIgX3JlY3RhbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWN0YW5nbGUpO1xuXG52YXIgX21haW5fY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW5fY29udGFpbmVyJyk7XG5cbnZhciBfbWFpbl9jb250YWluZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFpbl9jb250YWluZXIpO1xuXG52YXIgX2xpbmUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfY3VzdG9tX29iamVjdCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jdXN0b21fb2JqZWN0Jyk7XG5cbnZhciBfY3VzdG9tX29iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21fb2JqZWN0KTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3BhdGgnKTtcblxudmFyIF9wYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY29udGFpbmVyOiBfY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHNxdWFyZTogX3NxdWFyZTIuZGVmYXVsdCxcbiAgICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHQsXG4gICAgcmVjdGFuZ2xlOiBfcmVjdGFuZ2xlMi5kZWZhdWx0LFxuICAgIGxpbmU6IF9saW5lMi5kZWZhdWx0LFxuICAgIGN1c3RvbU9iamVjdDogX2N1c3RvbV9vYmplY3QyLmRlZmF1bHQsXG4gICAgbWFpbkNvbnRhaW5lcjogX21haW5fY29udGFpbmVyMi5kZWZhdWx0LFxuICAgIHBhdGg6IF9wYXRoMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFjdG9yeS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpbHRlciA9IHt9O1xuXG4gICAgZmlsdGVyLnZpZXcgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcblxuICAgIC8qIFB1YmxpYyBmdW5jdGlvbnMgKi9cbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKGZpbHRlci5oYW5kbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihmaWx0ZXIuaGFuZGxlKTtcbiAgICB9XG5cbiAgICBmaWx0ZXIuc3RhcnQgPSBzdGFydDtcbiAgICBmaWx0ZXIuc3RvcCA9IHN0b3A7XG5cbiAgICByZXR1cm4gZmlsdGVyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2ZpbHRlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgICB2YXIgYWJzdHJhY3RHcm91cCA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuXG4gICAgYWJzdHJhY3RHcm91cC5jaGlsZHJlbiA9IGNoaWxkcmVuID8gY2hpbGRyZW4gOiBbXTtcblxuICAgIGFic3RyYWN0R3JvdXAuYWRkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGFic3RyYWN0R3JvdXAuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGFic3RyYWN0R3JvdXAucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBhYnN0cmFjdEdyb3VwLnJlbW92ZSA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLnNwbGljZShhYnN0cmFjdEdyb3VwLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpLCAxKTtcbiAgICAgICAgYWJzdHJhY3RHcm91cC5yZWZyZXNoKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBhYnN0cmFjdEdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0X2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgb3B0aW9ucykge1xuICAgIHZhciBjZW50ZXJHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKGNoaWxkcmVuKTtcblxuICAgIC8qIFBhcmFtcyBhbmQgZGVmYXVsdHMgKi9cbiAgICBjZW50ZXJHcm91cC53aWR0aCA9IG9wdGlvbnMud2lkdGggPyBvcHRpb25zLndpZHRoIDogZmFsc2U7XG4gICAgY2VudGVyR3JvdXAuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgPyBvcHRpb25zLmhlaWdodCA6IGZhbHNlO1xuXG4gICAgY2VudGVyR3JvdXAucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2VudGVyR3JvdXAudmlldy5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNlbnRlckdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoY2VudGVyR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG5cbiAgICAgICAgICAgIGlmIChjZW50ZXJHcm91cC53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci54ID0gY29udGFpbmVyLnggPSAoaSArIDEpICogY2VudGVyR3JvdXAud2lkdGggLyAoY2VudGVyR3JvdXAuY2hpbGRyZW4ubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZW50ZXJHcm91cC5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIueSA9IGNvbnRhaW5lci54ID0gKGkgKyAxKSAqIGNlbnRlckdyb3VwLmhlaWdodCAvIChjZW50ZXJHcm91cC5jaGlsZHJlbi5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2VudGVyR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNlbnRlckdyb3VwLnJlZnJlc2goKTtcbiAgICByZXR1cm4gY2VudGVyR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2VudGVyX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgcmFkaXVzKSB7XG4gICAgdmFyIGNpcmNsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkoY2hpbGRyZW4pO1xuXG4gICAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xuICAgIGNpcmNsZUdyb3VwLnJhZGl1cyA9IHJhZGl1cyA/IHJhZGl1cyA6IDEwO1xuXG4gICAgdmFyIGFuZ2xlID0gMzYwIC8gY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLWNpcmNsZUdyb3VwLnJhZGl1cztcbiAgICAgICAgaW5uZXJDb250YWluZXIuYWRkQ2hpbGQoY2lyY2xlR3JvdXAuY2hpbGRyZW5baV0udmlldyk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChpbm5lckNvbnRhaW5lcik7XG4gICAgICAgIGNpcmNsZUdyb3VwLnZpZXcuYWRkQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2lyY2xlR3JvdXA7XG59O1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lyY2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlX2dyb3VwJyk7XG5cbnZhciBfcmVjdGFuZ2xlX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfcmFuZG9tX3JlY3RhbmdsZV9ncm91cCA9IHJlcXVpcmUoJy4vcmFuZG9tX3JlY3RhbmdsZV9ncm91cCcpO1xuXG52YXIgX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZG9tX3JlY3RhbmdsZV9ncm91cCk7XG5cbnZhciBfY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9jaXJjbGVfZ3JvdXAnKTtcblxudmFyIF9jaXJjbGVfZ3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2lyY2xlX2dyb3VwKTtcblxudmFyIF9zcGlyYWxfY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9zcGlyYWxfY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfc3BpcmFsX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zcGlyYWxfY2lyY2xlX2dyb3VwKTtcblxudmFyIF9yYW5kb21fY2lyY2xlX2dyb3VwID0gcmVxdWlyZSgnLi9yYW5kb21fY2lyY2xlX2dyb3VwJyk7XG5cbnZhciBfcmFuZG9tX2NpcmNsZV9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY2lyY2xlX2dyb3VwKTtcblxudmFyIF9jZW50ZXJfZ3JvdXAgPSByZXF1aXJlKCcuL2NlbnRlcl9ncm91cCcpO1xuXG52YXIgX2NlbnRlcl9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jZW50ZXJfZ3JvdXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlY3RhbmdsZUdyb3VwOiBfcmVjdGFuZ2xlX2dyb3VwMi5kZWZhdWx0LFxuICByYW5kb21SZWN0YW5nbGVHcm91cDogX3JhbmRvbV9yZWN0YW5nbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIGNpcmNsZUdyb3VwOiBfY2lyY2xlX2dyb3VwMi5kZWZhdWx0LFxuICBzcGlyYWxDaXJjbGVHcm91cDogX3NwaXJhbF9jaXJjbGVfZ3JvdXAyLmRlZmF1bHQsXG4gIHJhbmRvbUNpcmNsZUdyb3VwOiBfcmFuZG9tX2NpcmNsZV9ncm91cDIuZGVmYXVsdCxcbiAgY2VudGVyR3JvdXA6IF9jZW50ZXJfZ3JvdXAyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY2hpbGRyZW4sIHJhZGl1cywgcmFuZG9tUmFuZ2UpIHtcbiAgICB2YXIgY2lyY2xlR3JvdXAgPSAoMCwgX2Fic3RyYWN0X2dyb3VwMi5kZWZhdWx0KShjaGlsZHJlbik7XG5cbiAgICAvKiBQYXJhbXMgYW5kIGRlZmF1bHRzICovXG4gICAgY2lyY2xlR3JvdXAucmFkaXVzID0gcmFkaXVzID8gcmFkaXVzIDogMTA7XG4gICAgY2lyY2xlR3JvdXAucmFuZG9tUmFuZ2UgPSByYW5kb21SYW5nZSA/IHJhbmRvbVJhbmdlIDogMTA7XG5cbiAgICB2YXIgYW5nbGUgPSAzNjAgLyBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIHZhciBpbm5lckNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIucm90YXRpb24gPSBhbmdsZSAqIGk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLnkgPSAtY2lyY2xlR3JvdXAucmFkaXVzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tUmFuZ2UgLSByYW5kb21SYW5nZSAqIDAuNSk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKGNpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBjaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkcmVuLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIHJlY3RhbmdsZUdyb3VwID0gKDAsIF9hYnN0cmFjdF9ncm91cDIuZGVmYXVsdCkoY2hpbGRyZW4pO1xuXG4gICAgLyogUGFyYW1zIGFuZCBkZWZhdWx0cyAqL1xuICAgIHJlY3RhbmdsZUdyb3VwLndpZHRoID0gd2lkdGggPyB3aWR0aCA6IDEwO1xuICAgIHJlY3RhbmdsZUdyb3VwLmhlaWdodCA9IGhlaWdodCA/IGhlaWdodCA6IDEwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLnggPSBNYXRoLmZsb29yKHJlY3RhbmdsZUdyb3VwLndpZHRoICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGNvbnRhaW5lci55ID0gTWF0aC5mbG9vcihyZWN0YW5nbGVHcm91cC5oZWlnaHQgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgcmVjdGFuZ2xlR3JvdXAudmlldy5hZGRDaGlsZChjb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiByZWN0YW5nbGVHcm91cDtcbn07XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yYW5kb21fcmVjdGFuZ2xlX2dyb3VwLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgc3BhY2luZywgY29sdW1ucykge1xuICAgIHZhciByZWN0YW5nbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKGNoaWxkcmVuKTtcblxuICAgIC8qIFBhcmFtcyBhbmQgZGVmYXVsdHMgKi9cbiAgICByZWN0YW5nbGVHcm91cC5jb2x1bW5zID0gY29sdW1ucyA/IGNvbHVtbnMgOiAzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWN0YW5nbGVHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gX2ZhY3RvcnkyLmRlZmF1bHQuY29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChyZWN0YW5nbGVHcm91cC5jaGlsZHJlbltpXS52aWV3KTtcbiAgICAgICAgY29udGFpbmVyLnggPSBpICUgcmVjdGFuZ2xlR3JvdXAuY29sdW1ucyAqIHNwYWNpbmc7XG4gICAgICAgIGNvbnRhaW5lci55ID0gTWF0aC5mbG9vcihpIC8gcmVjdGFuZ2xlR3JvdXAuY29sdW1ucykgKiBzcGFjaW5nO1xuICAgICAgICByZWN0YW5nbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3RhbmdsZUdyb3VwO1xufTtcblxudmFyIF9hYnN0cmFjdF9ncm91cCA9IHJlcXVpcmUoJy4vYWJzdHJhY3RfZ3JvdXAnKTtcblxudmFyIF9hYnN0cmFjdF9ncm91cDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9ncm91cCk7XG5cbnZhciBfZmFjdG9yeSA9IHJlcXVpcmUoJy4uLy4uL2ZhY3Rvcmllcy9jcmVhdGVqcy9mYWN0b3J5Jyk7XG5cbnZhciBfZmFjdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlY3RhbmdsZV9ncm91cC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY2hpbGRyZW4sIHN0YXJ0UmFkaXVzLCBlbmRSYWRpdXMsIHJvdW5kcykge1xuICAgIHZhciBzcGlyYWxDaXJjbGVHcm91cCA9ICgwLCBfYWJzdHJhY3RfZ3JvdXAyLmRlZmF1bHQpKGNoaWxkcmVuKTtcblxuICAgIC8qIFBhcmFtcyBhbmQgZGVmYXVsdHMgKi9cbiAgICBzcGlyYWxDaXJjbGVHcm91cC5zdGFydFJhZGl1cyA9IHN0YXJ0UmFkaXVzID8gc3RhcnRSYWRpdXMgOiAxMDtcbiAgICBzcGlyYWxDaXJjbGVHcm91cC5lbmRSYWRpdXMgPSBlbmRSYWRpdXMgPyBlbmRSYWRpdXMgOiAxMDtcblxuICAgIHZhciBhbmdsZSA9IDM2MCAqIHJvdW5kcyAvIHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgcmFkaXVzSW5jcmVhc2VBbW91bnQgPSAoc3BpcmFsQ2lyY2xlR3JvdXAuZW5kUmFkaXVzIC0gc3BpcmFsQ2lyY2xlR3JvdXAuc3RhcnRSYWRpdXMpIC8gc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3BpcmFsQ2lyY2xlR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9mYWN0b3J5Mi5kZWZhdWx0LmNvbnRhaW5lcigpO1xuICAgICAgICB2YXIgaW5uZXJDb250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5jb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLnJvdGF0aW9uID0gYW5nbGUgKiBpO1xuICAgICAgICBpbm5lckNvbnRhaW5lci55ID0gLShzcGlyYWxDaXJjbGVHcm91cC5zdGFydFJhZGl1cyArIHJhZGl1c0luY3JlYXNlQW1vdW50ICogaSk7XG4gICAgICAgIGlubmVyQ29udGFpbmVyLmFkZENoaWxkKHNwaXJhbENpcmNsZUdyb3VwLmNoaWxkcmVuW2ldLnZpZXcpO1xuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoaW5uZXJDb250YWluZXIpO1xuICAgICAgICBzcGlyYWxDaXJjbGVHcm91cC52aWV3LmFkZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwaXJhbENpcmNsZUdyb3VwO1xufTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi4vLi4vZmFjdG9yaWVzL2NyZWF0ZWpzL2ZhY3RvcnknKTtcblxudmFyIF9mYWN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZhY3RvcnkpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwID0gcmVxdWlyZSgnLi9hYnN0cmFjdF9ncm91cCcpO1xuXG52YXIgX2Fic3RyYWN0X2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2dyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwaXJhbF9jaXJjbGVfZ3JvdXAuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgcHJvZ3Jlc3NSYXRlLCBwYXRoKSB7XG5cbiAgdmFyIHBhdGhNb3ZlciA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuICBwYXRoTW92ZXIudmlldy5hZGRDaGlsZChjaGlsZC52aWV3KTtcbiAgcGF0aE1vdmVyLmN1cnJlbnRQcm9ncmVzcyA9IDA7XG4gIHBhdGhNb3Zlci5wcm9ncmVzc1JhdGUgPSBwcm9ncmVzc1JhdGU7XG5cbiAgcGF0aE1vdmVyLmhhbmRsZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHBhdGhNb3Zlci5jdXJyZW50UHJvZ3Jlc3MgKz0gcGF0aE1vdmVyLnByb2dyZXNzUmF0ZSAqIChldmVudC5kZWx0YSAvIDEwMDApO1xuICAgIGlmIChwYXRoTW92ZXIuY3VycmVudFByb2dyZXNzID4gMSkge1xuICAgICAgcGF0aE1vdmVyLmN1cnJlbnRQcm9ncmVzcyAtPSAxO1xuICAgIH1cbiAgICB2YXIgcG9pbnQgPSBwYXRoLmdldFBvaW50KHBhdGhNb3Zlci5jdXJyZW50UHJvZ3Jlc3MpO1xuICAgIHBhdGhNb3Zlci52aWV3LnggPSBwb2ludC54O1xuICAgIHBhdGhNb3Zlci52aWV3LnkgPSBwb2ludC55O1xuICB9O1xuXG4gIHJldHVybiBwYXRoTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uLy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC1tb3Zlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkLCBzcGVlZCkge1xuICB2YXIgcDJQTW92ZXIgPSAoMCwgX2Fic3RyYWN0X2ZpbHRlcjIuZGVmYXVsdCkoKTtcbiAgcDJQTW92ZXIudmlldy5hZGRDaGlsZChjaGlsZC52aWV3KTtcblxuICAvKiBQYXJhbXMgYW5kIGRlZmF1bHRzICovXG4gIHAyUE1vdmVyLmdvYWxQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuICBwMlBNb3Zlci5zcGVlZCA9IHNwZWVkID8gc3BlZWQgOiAxO1xuICBwMlBNb3Zlci5wcm9ncmVzcyA9IDA7XG4gIHAyUE1vdmVyLmZpbmlzaGVkID0gdHJ1ZTtcbiAgcDJQTW92ZXIucGVyc3BlY3RpdmUgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAvKlxyXG4gICAgICBTZXRzIGluZm9ybWF0aW9ucyBpbiB0aGUgcGVyc3BlY3RpdmUgb2JqZWN0XHJcbiAgICAgIGRldGVybXMgaWYgdGhlIGdvYWwgcG9pbnQgaXNcclxuICAgICAgbGVmdCwgcmlnaHQsIHRvcCBvciBkb3duIG9mIHRoZSBjdXJyZW50IHBvaW50XHJcbiAgICovXG4gIGZ1bmN0aW9uIHNldFBlcnNwZWN0aXZlSW5mb3JtYXRpb24oKSB7XG4gICAgaWYgKHAyUE1vdmVyLmdvYWxQb2ludC54IC0gcDJQTW92ZXIudmlldy54ID49IDApIHtcbiAgICAgIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnggPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS54ID0gLTE7XG4gICAgfVxuXG4gICAgaWYgKHAyUE1vdmVyLmdvYWxQb2ludC55IC0gcDJQTW92ZXIudmlldy55ID49IDApIHtcbiAgICAgIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnkgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBwMlBNb3Zlci5wZXJzcGVjdGl2ZS55ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLyogUHVibGljIGZ1bmN0aW9ucyAqL1xuICBmdW5jdGlvbiBoYW5kbGUoZXZlbnQpIHtcbiAgICBwMlBNb3Zlci5wcm9ncmVzcyArPSBldmVudC5kZWx0YSAvIDEwMDAgKiBwMlBNb3Zlci5zdGVwO1xuXG4gICAgaWYgKHAyUE1vdmVyLnByb2dyZXNzIDw9IDEpIHtcbiAgICAgIHAyUE1vdmVyLmhhbmRsZU1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcDJQTW92ZXIuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgcDJQTW92ZXIudmlldy54ID0gcDJQTW92ZXIuZ29hbFBvaW50Lng7XG4gICAgICBwMlBNb3Zlci52aWV3LnkgPSBwMlBNb3Zlci5nb2FsUG9pbnQueTtcbiAgICAgIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnggPSAwO1xuICAgICAgcDJQTW92ZXIucGVyc3BlY3RpdmUueSA9IDA7XG4gICAgICBpZiAocDJQTW92ZXIuY2FsbGJhY2spIHtcbiAgICAgICAgcDJQTW92ZXIuY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlVG8oZ29hbFBvaW50LCBjYWxsYmFjaykge1xuICAgIHAyUE1vdmVyLmRpcmVjdGlvbiA9ICgwLCBfbm9ybWFsaXplMi5kZWZhdWx0KShbZ29hbFBvaW50LnggLSBwMlBNb3Zlci52aWV3LngsIGdvYWxQb2ludC55IC0gcDJQTW92ZXIudmlldy55XSk7XG4gICAgcDJQTW92ZXIuc3RhcnRQb2ludCA9IHsgeDogcDJQTW92ZXIudmlldy54LCB5OiBwMlBNb3Zlci52aWV3LnkgfTtcbiAgICBwMlBNb3Zlci5nb2FsUG9pbnQgPSBnb2FsUG9pbnQ7XG4gICAgcDJQTW92ZXIuZGlzdGFuY2UgPSAoMCwgX2Rpc3RhbmNlMi5kZWZhdWx0KSgoMCwgX3RvX3ZlY3RvcjIuZGVmYXVsdCkocDJQTW92ZXIuc3RhcnRQb2ludCksICgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KShwMlBNb3Zlci5nb2FsUG9pbnQpKTtcbiAgICBwMlBNb3Zlci5zdGVwID0gcDJQTW92ZXIuc3BlZWQgLyBwMlBNb3Zlci5kaXN0YW5jZTtcbiAgICBwMlBNb3Zlci5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHAyUE1vdmVyLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgc2V0UGVyc3BlY3RpdmVJbmZvcm1hdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShkaXJlY3Rpb24pIHtcbiAgICBwMlBNb3Zlci5maW5pc2hlZCA9IGZhbHNlO1xuICAgIHAyUE1vdmVyLmdvYWxQb2ludCA9IG51bGw7XG4gICAgcDJQTW92ZXIuZGlyZWN0aW9uID0gKDAsIF9ub3JtYWxpemUyLmRlZmF1bHQpKFtkaXJlY3Rpb24ueCwgZGlyZWN0aW9uLnldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUG9pbnRSZWFjaGVkKCkge1xuICAgIGlmICghcDJQTW92ZXIuZ29hbFBvaW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICgocDJQTW92ZXIuZ29hbFBvaW50LnggLSBwMlBNb3Zlci52aWV3LngpICogcDJQTW92ZXIucGVyc3BlY3RpdmUueCA+IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoKHAyUE1vdmVyLmdvYWxQb2ludC55IC0gcDJQTW92ZXIudmlldy55KSAqIHAyUE1vdmVyLnBlcnNwZWN0aXZlLnkgPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwMlBNb3Zlci5oYW5kbGUgPSBoYW5kbGU7XG4gIHAyUE1vdmVyLm1vdmVUbyA9IG1vdmVUbztcbiAgcDJQTW92ZXIubW92ZSA9IG1vdmU7XG4gIHAyUE1vdmVyLmlzUG9pbnRSZWFjaGVkID0gaXNQb2ludFJlYWNoZWQ7XG4gIHJldHVybiBwMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vYWJzdHJhY3RfZmlsdGVyJyk7XG5cbnZhciBfYWJzdHJhY3RfZmlsdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0X2ZpbHRlcik7XG5cbnZhciBfbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vLi4vLi4vZ2VvbWV0cnkvbm9ybWFsaXplJyk7XG5cbnZhciBfbm9ybWFsaXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vcm1hbGl6ZSk7XG5cbnZhciBfZGlzdGFuY2UgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxudmFyIF90b192ZWN0b3IgPSByZXF1aXJlKCcuLi8uLi8uLi9nZW9tZXRyeS90b192ZWN0b3InKTtcblxudmFyIF90b192ZWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdG9fdmVjdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0LW1vdmVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgc3BlZWQpIHtcbiAgICB2YXIgaW5PdXRRdWFkTW92ZXIgPSAoMCwgX2Fic3RyYWN0TW92ZXIyLmRlZmF1bHQpKGNoaWxkLCBzcGVlZCk7XG5cbiAgICBpbk91dFF1YWRNb3Zlci5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSAoMCwgX2Vhc2luZ1V0aWxzLmVhc2VJbk91dEJhY2spKGluT3V0UXVhZE1vdmVyLnByb2dyZXNzKTtcbiAgICAgICAgaW5PdXRRdWFkTW92ZXIudmlldy54ID0gaW5PdXRRdWFkTW92ZXIuc3RhcnRQb2ludC54ICsgaW5PdXRRdWFkTW92ZXIuZGlzdGFuY2UgKiBpbk91dFF1YWRNb3Zlci5kaXJlY3Rpb25bMF0gKiB2YWx1ZTtcbiAgICAgICAgaW5PdXRRdWFkTW92ZXIudmlldy55ID0gaW5PdXRRdWFkTW92ZXIuc3RhcnRQb2ludC55ICsgaW5PdXRRdWFkTW92ZXIuZGlzdGFuY2UgKiBpbk91dFF1YWRNb3Zlci5kaXJlY3Rpb25bMV0gKiB2YWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGluT3V0UXVhZE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdE1vdmVyID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1tb3ZlcicpO1xuXG52YXIgX2Fic3RyYWN0TW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RNb3Zlcik7XG5cbnZhciBfZWFzaW5nVXRpbHMgPSByZXF1aXJlKCdlYXNpbmctdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluX291dF9iYWNrLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgc3BlZWQpIHtcbiAgICB2YXIgaW5PdXRRdWFkTW92ZXIgPSAoMCwgX2Fic3RyYWN0TW92ZXIyLmRlZmF1bHQpKGNoaWxkLCBzcGVlZCk7XG5cbiAgICBpbk91dFF1YWRNb3Zlci5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSAoMCwgX2Vhc2luZ1V0aWxzLmVhc2VJbk91dFF1YWQpKGluT3V0UXVhZE1vdmVyLnByb2dyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBpbk91dFF1YWRNb3Zlci52aWV3LnggPSBpbk91dFF1YWRNb3Zlci5zdGFydFBvaW50LnggKyBpbk91dFF1YWRNb3Zlci5kaXN0YW5jZSAqIGluT3V0UXVhZE1vdmVyLmRpcmVjdGlvblswXSAqIHZhbHVlO1xuICAgICAgICBpbk91dFF1YWRNb3Zlci52aWV3LnkgPSBpbk91dFF1YWRNb3Zlci5zdGFydFBvaW50LnkgKyBpbk91dFF1YWRNb3Zlci5kaXN0YW5jZSAqIGluT3V0UXVhZE1vdmVyLmRpcmVjdGlvblsxXSAqIHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gaW5PdXRRdWFkTW92ZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0TW92ZXIgPSByZXF1aXJlKCcuL2Fic3RyYWN0LW1vdmVyJyk7XG5cbnZhciBfYWJzdHJhY3RNb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdE1vdmVyKTtcblxudmFyIF9lYXNpbmdVdGlscyA9IHJlcXVpcmUoJ2Vhc2luZy11dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5fb3V0X3F1YWQuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkLCBzcGVlZCwgZWFzaW5nTmFtZSkge1xuICAgIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfYWJzdHJhY3RNb3ZlcjIuZGVmYXVsdCkoY2hpbGQsIHNwZWVkKTtcbiAgICB2YXIgZWFzaW5nSGFuZGxlciA9ICgwLCBfZWFzaW5nMi5kZWZhdWx0KSgpO1xuXG4gICAgbGluZWFyUDJQTW92ZXIuZWFzaW5nTmFtZSA9IGVhc2luZ05hbWUgPyBlYXNpbmdOYW1lIDogJ2xpbmVhcic7XG5cbiAgICBsaW5lYXJQMlBNb3Zlci5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnggPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnggKyBsaW5lYXJQMlBNb3Zlci5kaXN0YW5jZSAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblswXSAqIGVhc2luZ0hhbmRsZXIuZ2V0VmFsdWVPZihsaW5lYXJQMlBNb3Zlci5wcm9ncmVzcywgbGluZWFyUDJQTW92ZXIuZWFzaW5nTmFtZSk7XG4gICAgICAgIGxpbmVhclAyUE1vdmVyLnZpZXcueSA9IGxpbmVhclAyUE1vdmVyLnN0YXJ0UG9pbnQueSArIGxpbmVhclAyUE1vdmVyLmRpc3RhbmNlICogbGluZWFyUDJQTW92ZXIuZGlyZWN0aW9uWzFdICogZWFzaW5nSGFuZGxlci5nZXRWYWx1ZU9mKGxpbmVhclAyUE1vdmVyLnByb2dyZXNzLCBsaW5lYXJQMlBNb3Zlci5lYXNpbmdOYW1lKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpbmVhclAyUE1vdmVyO1xufTtcblxudmFyIF9hYnN0cmFjdE1vdmVyID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1tb3ZlcicpO1xuXG52YXIgX2Fic3RyYWN0TW92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RNb3Zlcik7XG5cbnZhciBfZWFzaW5nID0gcmVxdWlyZSgnLi4vLi4vLi4vdHJhbnNpdGlvbnMvZWFzaW5nJyk7XG5cbnZhciBfZWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Vhc2luZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lYXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgc3BlZWQsIHNoYWtlRmFjdG9yKSB7XG4gIHZhciBsaW5lYXJQMlBNb3ZlciA9ICgwLCBfYWJzdHJhY3RNb3ZlcjIuZGVmYXVsdCkoY2hpbGQsIHNwZWVkKTtcbiAgbGluZWFyUDJQTW92ZXIuc2hha2VGYWN0b3IgPSBzaGFrZUZhY3RvciA/IHNoYWtlRmFjdG9yIDogMTtcblxuICBsaW5lYXJQMlBNb3Zlci5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByYW5kb21GYWN0b3IgPSBNYXRoLnJhbmRvbSgpICogbGluZWFyUDJQTW92ZXIuc2hha2VGYWN0b3IgLSBsaW5lYXJQMlBNb3Zlci5zaGFrZUZhY3RvciAvIDI7XG4gICAgbGluZWFyUDJQTW92ZXIudmlldy54ID0gbGluZWFyUDJQTW92ZXIuc3RhcnRQb2ludC54ICsgbGluZWFyUDJQTW92ZXIuZGlzdGFuY2UgKiBsaW5lYXJQMlBNb3Zlci5kaXJlY3Rpb25bMF0gKiBsaW5lYXJQMlBNb3Zlci5wcm9ncmVzcyArIHJhbmRvbUZhY3RvciAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblswXTtcbiAgICBsaW5lYXJQMlBNb3Zlci52aWV3LnkgPSBsaW5lYXJQMlBNb3Zlci5zdGFydFBvaW50LnkgKyBsaW5lYXJQMlBNb3Zlci5kaXN0YW5jZSAqIGxpbmVhclAyUE1vdmVyLmRpcmVjdGlvblsxXSAqIGxpbmVhclAyUE1vdmVyLnByb2dyZXNzICsgcmFuZG9tRmFjdG9yICogbGluZWFyUDJQTW92ZXIuZGlyZWN0aW9uWzFdO1xuICB9O1xuXG4gIHJldHVybiBsaW5lYXJQMlBNb3Zlcjtcbn07XG5cbnZhciBfYWJzdHJhY3RNb3ZlciA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtbW92ZXInKTtcblxudmFyIF9hYnN0cmFjdE1vdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fic3RyYWN0TW92ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluZWFyX3NoYWtlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCwgc3BlZWQsIGluY3JlYXNlKSB7XG4gICAgdmFyIGZhZGVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgICAvKiBQYXJhbXMgYW5kIGRlZmF1bHRzICovXG4gICAgZmFkZXIuc3BlZWQgPSBzcGVlZCA/IHNwZWVkIDogMTAwMDtcbiAgICBmYWRlci52aWV3LmFkZENoaWxkKGNoaWxkLnZpZXcpO1xuICAgIGZhZGVyLnB1bHNhciA9ICgwLCBfdHJhbnNpdGlvbl9sb29wMi5kZWZhdWx0KShmYWRlci5zcGVlZCwgMC41KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZShjdXJyZW50KSB7XG4gICAgICAgIGZhZGVyLnZpZXcuYWxwaGEgPSBjdXJyZW50O1xuICAgIH1cblxuICAgIGZhZGVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmYWRlci5wdWxzYXIuc3RhcnQoaGFuZGxlKTtcbiAgICB9O1xuXG4gICAgZmFkZXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmFkZXIucHVsc2FyLnN0b3AoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhZGVyO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbl9sb29wKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhZGVyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciBmbGFzaGVyID0gKDAsIF9hYnN0cmFjdF9maWx0ZXIyLmRlZmF1bHQpKCk7XG5cbiAgICBmbGFzaGVyLnZpZXcuYWRkQ2hpbGQoY2hpbGQudmlldyk7XG4gICAgZmxhc2hlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZsYXNoZXIudmlldy52aXNpYmxlID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZsYXNoZXI7XG59O1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlciA9IHJlcXVpcmUoJy4uL2Fic3RyYWN0X2ZpbHRlcicpO1xuXG52YXIgX2Fic3RyYWN0X2ZpbHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hYnN0cmFjdF9maWx0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zmxhc2hlci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGNoaWxkLCBzcGVlZCkge1xuICB2YXIgbGluZWFyUm90YXRvciA9ICgwLCBfYWJzdHJhY3RfZmlsdGVyMi5kZWZhdWx0KSgpO1xuXG4gIGxpbmVhclJvdGF0b3Iuc3BlZWQgPSBzcGVlZCA/IHNwZWVkIDogMTtcbiAgbGluZWFyUm90YXRvci52aWV3LmFkZENoaWxkKGNoaWxkLnZpZXcpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZShldmVudCkge1xuICAgIGxpbmVhclJvdGF0b3Iudmlldy5yb3RhdGlvbiA9IGxpbmVhclJvdGF0b3Iudmlldy5yb3RhdGlvbiArIGxpbmVhclJvdGF0b3Iuc3BlZWQgKiAoZXZlbnQuZGVsdGEgLyAxMDAwKTtcbiAgfVxuXG4gIGxpbmVhclJvdGF0b3IuaGFuZGxlID0gaGFuZGxlO1xuXG4gIHJldHVybiBsaW5lYXJSb3RhdG9yO1xufTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIgPSByZXF1aXJlKCcuLi9hYnN0cmFjdF9maWx0ZXInKTtcblxudmFyIF9hYnN0cmFjdF9maWx0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWJzdHJhY3RfZmlsdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9yb3RhdG9yLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwb2ludDEsIHBvaW50Mikge1xuICB2YXIgcG9pbnQgPSB7fTtcbiAgcG9pbnQueCA9IHBvaW50MS54ICsgcG9pbnQyLng7XG4gIHBvaW50LnkgPSBwb2ludDEueSArIHBvaW50Mi55O1xuICByZXR1cm4gcG9pbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRkX3VwX3BvaW50cy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZlY3RvcjEsIHZlY3RvcjIpIHtcbiAgaWYgKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCkge1xuICAgIHRocm93ICdDYW5ub3QgY2FsY3VsYXRlIGRpc3RhbmNlIG9mIHZlY3RvcnMgd2l0aCBkaWZmZXJlbnQgbnVtYmVycyBvZiBkaW1lbnNpb25zJztcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICBkaXN0YW5jZSArPSBNYXRoLnBvdyh2ZWN0b3IxW2ldIC0gdmVjdG9yMltpXSwgMik7XG4gIH1cbiAgcmV0dXJuIE1hdGguc3FydChkaXN0YW5jZSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlzdGFuY2UuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFuZ2xlKSB7XG4gIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5nbGVfdG9fcmFkaWFucy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChjYWxjdWxhdGVGdW5jdGlvbiwgc3RhcnQsIGVuZCwgc3RlcCkge1xuICAgIHZhciBpbnRlcm5hbFN0ZXAgPSBzdGVwID8gc3RlcCA6IDAuMDE7XG5cbiAgICB2YXIgdG90YWwgPSAwO1xuXG4gICAgZm9yICh2YXIgeCA9IHN0YXJ0OyB4IDwgZW5kOyB4ICs9IGludGVybmFsU3RlcCkge1xuICAgICAgICB2YXIgY3VycmVudFkgPSBjYWxjdWxhdGVGdW5jdGlvbih4KTtcbiAgICAgICAgdmFyIG5leHRTdGVwWSA9IGNhbGN1bGF0ZUZ1bmN0aW9uKHggKyBpbnRlcm5hbFN0ZXApO1xuICAgICAgICB2YXIgZGlzdGFuY2VZID0gY3VycmVudFkgLSBuZXh0U3RlcFk7XG5cbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGludGVybmFsU3RlcCAqIGludGVybmFsU3RlcCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XG4gICAgICAgIHRvdGFsICs9IGRpc3RhbmNlO1xuICAgIH1cblxuICAgIHJldHVybiB0b3RhbDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sZW5ndGhfb2ZfZnVuY3Rpb24uanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRWZWN0b3IgPSBbXTtcbiAgICB2YXIgc3F1YXJlU3VtID0gMDtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdmVjdG9yW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgIHNxdWFyZVN1bSArPSBlbnRyeSAqIGVudHJ5O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHNxdWFyZVN1bSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICBub3JtYWxpemVkVmVjdG9yW2ldID0gdmVjdG9yW2ldIC8gbGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBub3JtYWxpemVkVmVjdG9yO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFyY0NvbnN0cnVjdG9yO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMgPSByZXF1aXJlKCcuLi9oZWxwZXIvYW5nbGVfdG9fcmFkaWFucycpO1xuXG52YXIgX2FuZ2xlX3RvX3JhZGlhbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGVfdG9fcmFkaWFucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFyY0NvbnN0cnVjdG9yKHN0YXJ0LCBkZWdyZWVzLCByYWRpdXMpIHtcbiAgdmFyIGFyYyA9IHt9O1xuXG4gIGFyYy5zdGFydCA9IHN0YXJ0ID8gc3RhcnQgOiB7IHg6IDAsIHk6IDAgfTtcbiAgYXJjLmRlZ3JlZXMgPSBkZWdyZWVzO1xuICBhcmMucmFkaXVzID0gcmFkaXVzO1xuICBhcmMudHlwZSA9ICdhcmMnO1xuXG4gIGFyYy5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyYy5nZXRQb2ludCgxKTtcbiAgfTtcblxuICBhcmMuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAyICogTWF0aC5QSSAqIGFyYy5yYWRpdXMgKiAoYXJjLmRlZ3JlZXMgLyAzNjApO1xuICB9O1xuXG4gIGFyYy5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBvcmlnaW4gPSB7IHg6IDAsIHk6IGFyYy5zdGFydC55ICsgYXJjLnJhZGl1cyB9O1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcbiAgICByZXR1cm4ge1xuICAgICAgeDogb3JpZ2luLnggKyBhcmMucmFkaXVzICogTWF0aC5zaW4oKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSksXG4gICAgICB5OiBvcmlnaW4ueSArIGFyYy5yYWRpdXMgKiAtTWF0aC5jb3MoKDAsIF9hbmdsZV90b19yYWRpYW5zMi5kZWZhdWx0KShwYXJ0T2ZEZWdyZWVzKSlcbiAgICB9O1xuICB9O1xuXG4gIGFyYy5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBwYXJ0T2ZEZWdyZWVzID0gYXJjLmRlZ3JlZXMgKiBwcm9ncmVzcztcbiAgICByZXR1cm4gYXJjQ29uc3RydWN0b3Ioc3RhcnQsIHBhcnRPZkRlZ3JlZXMsIHJhZGl1cyk7XG4gIH07XG5cbiAgcmV0dXJuIGFyYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFyYy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIGNwb2ludDEsIGNwb2ludDIpIHtcbiAgdmFyIGJlemllckN1cnZlID0ge307XG4gIGJlemllckN1cnZlLnN0YXJ0ID0gc3RhcnQgPyBzdGFydCA6IHsgeDogMCwgeTogMCB9O1xuICBiZXppZXJDdXJ2ZS5lbmQgPSBlbmQ7XG4gIGJlemllckN1cnZlLmNwb2ludDEgPSBjcG9pbnQxO1xuICBiZXppZXJDdXJ2ZS5jcG9pbnQyID0gY3BvaW50MjtcbiAgYmV6aWVyQ3VydmUudHlwZSA9ICdiZXppZXJfY3VydmUnO1xuICBpZiAoYmV6aWVyQ3VydmUuY3BvaW50Mikge1xuICAgIGJlemllckN1cnZlLmludGVybmFsQmV6aWVyID0gbmV3IF9iZXppZXJKczIuZGVmYXVsdChiZXppZXJDdXJ2ZS5zdGFydCwgYmV6aWVyQ3VydmUuY3BvaW50MSwgYmV6aWVyQ3VydmUuY3BvaW50MiwgYmV6aWVyQ3VydmUuZW5kKTtcbiAgfSBlbHNlIHtcbiAgICBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllciA9IG5ldyBfYmV6aWVySnMyLmRlZmF1bHQoYmV6aWVyQ3VydmUuc3RhcnQsIGJlemllckN1cnZlLmNwb2ludDEsIGJlemllckN1cnZlLmVuZCk7XG4gIH1cblxuICBiZXppZXJDdXJ2ZS5zdWJQYXRocyA9IFtiZXppZXJDdXJ2ZV07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0RWRnZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5lbmQ7XG4gIH07XG5cbiAgYmV6aWVyQ3VydmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5sZW5ndGgoKTtcbiAgfTtcblxuICBiZXppZXJDdXJ2ZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBiZXppZXJDdXJ2ZS5pbnRlcm5hbEJlemllci5nZXQocHJvZ3Jlc3MpO1xuICB9O1xuXG4gIHJldHVybiBiZXppZXJDdXJ2ZTtcbn07XG5cbnZhciBfYmV6aWVySnMgPSByZXF1aXJlKCdiZXppZXItanMnKTtcblxudmFyIF9iZXppZXJKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJKcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iZXppZXJfY3VydmUuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBsaW5lQ29uc3RydWN0b3I7XG5cbnZhciBfdG9fdmVjdG9yID0gcmVxdWlyZSgnLi4vdG9fdmVjdG9yJyk7XG5cbnZhciBfdG9fdmVjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RvX3ZlY3Rvcik7XG5cbnZhciBfZGlzdGFuY2UgPSByZXF1aXJlKCcuLi9kaXN0YW5jZScpO1xuXG52YXIgX2Rpc3RhbmNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gbGluZUNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxpbmUgPSB7fTtcbiAgbGluZS5zdGFydCA9IHN0YXJ0ID8gc3RhcnQgOiB7IHg6IDAsIHk6IDAgfTtcbiAgbGluZS5lbmQgPSBlbmQ7XG4gIGxpbmUudHlwZSA9ICdsaW5lJztcblxuICBsaW5lLmdldEVkZ2VQb2ludCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbGluZS5lbmQ7XG4gIH07XG5cbiAgbGluZS5nZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfZGlzdGFuY2UyLmRlZmF1bHQpKCgwLCBfdG9fdmVjdG9yMi5kZWZhdWx0KShsaW5lLnN0YXJ0KSwgKDAsIF90b192ZWN0b3IyLmRlZmF1bHQpKGxpbmUuZW5kKSk7XG4gIH07XG5cbiAgbGluZS5nZXRQb2ludCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBsaW5lLnN0YXJ0LnggKyAobGluZS5lbmQueCAtIGxpbmUuc3RhcnQueCkgKiBwcm9ncmVzcyxcbiAgICAgIHk6IGxpbmUuc3RhcnQueSArIChsaW5lLmVuZC55IC0gbGluZS5zdGFydC55KSAqIHByb2dyZXNzXG4gICAgfTtcbiAgfTtcblxuICBsaW5lLmdldFBhcnRQYXRoID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIG5ld0VuZCA9IHsgeDogZW5kLnggKiBwcm9ncmVzcywgeTogZW5kLnkgKiBwcm9ncmVzcyB9O1xuICAgIHZhciBwYXRoUGFydCA9IGxpbmVDb25zdHJ1Y3RvcihzdGFydCwgbmV3RW5kKTtcbiAgICByZXR1cm4gcGF0aFBhcnQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5lLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGF0aENvbnN0cnVjdG9yO1xuXG52YXIgX2FkZF91cF9wb2ludHMgPSByZXF1aXJlKCcuLi9hZGRfdXBfcG9pbnRzJyk7XG5cbnZhciBfYWRkX3VwX3BvaW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGRfdXBfcG9pbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGF0aENvbnN0cnVjdG9yKCkge1xuXG4gIHZhciBwYXRoID0ge307XG5cbiAgcGF0aC5zdWJQYXRocyA9IFtdO1xuXG4gIHBhdGguZ2V0RWRnZVBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWRnZVBvaW50cyA9IFtdO1xuICAgIGVkZ2VQb2ludHMucHVzaCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwYXRoLnN1YlBhdGhzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgc3ViUGF0aCA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGVkZ2VQb2ludHMucHVzaCgoMCwgX2FkZF91cF9wb2ludHMyLmRlZmF1bHQpKGVkZ2VQb2ludHNbZWRnZVBvaW50cy5sZW5ndGggLSAxXSwgc3ViUGF0aC5nZXRFZGdlUG9pbnQoKSkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlZGdlUG9pbnRzO1xuICB9O1xuXG4gIHBhdGguZ2V0U3RhcnRQb2ludE9mID0gZnVuY3Rpb24gKHN1YlBhdGgpIHtcbiAgICB2YXIgc3RhcnRQb2ludCA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMiA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gcGF0aC5zdWJQYXRoc1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgICB2YXIgY3VycmVudFBhdGggPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQYXRoID09PSBzdWJQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0UG9pbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRQb2ludCA9ICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoc3RhcnRQb2ludCwgY3VycmVudFBhdGguZ2V0RWRnZVBvaW50KCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjIgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMi5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwYXRoLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIGxlbmd0aFBvaW50ID0gcHJvZ3Jlc3MgKiBwYXRoLmdldExlbmd0aCgpO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yMyA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjMgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IHBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgaWYgKGxlbmd0aFBvaW50ID4gc3ViUGF0aC5nZXRMZW5ndGgoKSkge1xuICAgICAgICAgIGxlbmd0aFBvaW50IC09IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfYWRkX3VwX3BvaW50czIuZGVmYXVsdCkoc3ViUGF0aC5nZXRQb2ludChsZW5ndGhQb2ludCAvIHN1YlBhdGguZ2V0TGVuZ3RoKCkpLCBwYXRoLmdldFN0YXJ0UG9pbnRPZihzdWJQYXRoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yMyA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvcjMgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgJiYgX2l0ZXJhdG9yMy5yZXR1cm4pIHtcbiAgICAgICAgICBfaXRlcmF0b3IzLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IzKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHBhdGguZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yNCA9IGZhbHNlO1xuICAgIHZhciBfaXRlcmF0b3JFcnJvcjQgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IHBhdGguc3ViUGF0aHNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDQ7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjQgPSAoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uNCA9IHRydWUpIHtcbiAgICAgICAgdmFyIHN1YlBhdGggPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgbGVuZ3RoICs9IHN1YlBhdGguZ2V0TGVuZ3RoKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjQgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3I0ID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb240ICYmIF9pdGVyYXRvcjQucmV0dXJuKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yNC5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yNCkge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yNDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH07XG5cbiAgcGF0aC5nZXRQYXJ0UGF0aCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBuZXdTdWJQYXRocyA9IFtdO1xuICAgIHZhciBsZW5ndGhQb2ludCA9IHByb2dyZXNzICogcGF0aC5nZXRMZW5ndGgoKTtcbiAgICB2YXIgc3ViUGF0aHNSZXRyaWV2ZWQgPSBmYWxzZTtcbiAgICB2YXIgY3VycmVudFBhdGggPSAwO1xuXG4gICAgd2hpbGUgKCFzdWJQYXRoc1JldHJpZXZlZCkge1xuICAgICAgaWYgKGxlbmd0aFBvaW50ID4gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCkpIHtcbiAgICAgICAgbGVuZ3RoUG9pbnQgLT0gcGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0TGVuZ3RoKCk7XG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2gocGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgoMSkpO1xuICAgICAgICBjdXJyZW50UGF0aCA9IGN1cnJlbnRQYXRoICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N1YlBhdGhzLnB1c2gocGF0aC5zdWJQYXRoc1tjdXJyZW50UGF0aF0uZ2V0UGFydFBhdGgobGVuZ3RoUG9pbnQgLyBwYXRoLnN1YlBhdGhzW2N1cnJlbnRQYXRoXS5nZXRMZW5ndGgoKSkpO1xuICAgICAgICBzdWJQYXRoc1JldHJpZXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBhcnRQYXRoID0gcGF0aENvbnN0cnVjdG9yKCk7XG4gICAgcGFydFBhdGguc3ViUGF0aHMgPSBuZXdTdWJQYXRocztcbiAgICByZXR1cm4gcGFydFBhdGg7XG4gIH07XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2FyYyA9IHJlcXVpcmUoJy4vYXJjJyk7XG5cbnZhciBfYXJjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FyYyk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJy4vbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbnZhciBfcGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfc2luZV93YXZlID0gcmVxdWlyZSgnLi9zaW5lX3dhdmUnKTtcblxudmFyIF9zaW5lX3dhdmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZV93YXZlKTtcblxudmFyIF9iZXppZXJfY3VydmUgPSByZXF1aXJlKCcuL2Jlemllcl9jdXJ2ZScpO1xuXG52YXIgX2Jlemllcl9jdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iZXppZXJfY3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFyYzogX2FyYzIuZGVmYXVsdCxcbiAgbGluZTogX2xpbmUyLmRlZmF1bHQsXG4gIHBhdGg6IF9wYXRoMi5kZWZhdWx0LFxuICBzaW5lV2F2ZTogX3NpbmVfd2F2ZTIuZGVmYXVsdCxcbiAgYmV6aWVyQ3VydmU6IF9iZXppZXJfY3VydmUyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRocy5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIGZyZXF1ZW5jeSwgYW1wbGl0dWRlKSB7XG4gIHZhciBsaW5lID0ge307XG4gIGxpbmUuc3RhcnQgPSBzdGFydCA/IHN0YXJ0IDogeyB4OiAwLCB5OiAwIH07XG4gIGxpbmUuZW5kID0gZW5kO1xuICBsaW5lLmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeSA/IGZyZXF1ZW5jeSA6IDE7XG4gIGxpbmUuYW1wbGl0dWRlID0gYW1wbGl0dWRlID8gYW1wbGl0dWRlIDogMTtcbiAgbGluZS5pbnRlcm5hbEZ1bmMgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBsaW5lLmFtcGxpdHVkZSAqIE1hdGguc2luKGxpbmUuZnJlcXVlbmN5ICogTWF0aC5QSSAqIDIgKiB4KTtcbiAgfTtcbiAgbGluZS50eXBlID0gJ3NpbmVfd2F2ZSc7XG5cbiAgbGluZS5nZXRFZGdlUG9pbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGxpbmUuZW5kO1xuICB9O1xuXG4gIGxpbmUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX2xlbmd0aF9vZl9mdW5jdGlvbjIuZGVmYXVsdCkobGluZS5pbnRlcm5hbEZ1bmMsIHN0YXJ0LngsIGVuZC54KTtcbiAgfTtcblxuICBsaW5lLmdldFBvaW50ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGxpbmUuc3RhcnQueCArIChsaW5lLmVuZC54IC0gbGluZS5zdGFydC54KSAqIHByb2dyZXNzLFxuICAgICAgeTogbGluZS5pbnRlcm5hbEZ1bmMobGluZS5zdGFydC54ICsgKGxpbmUuZW5kLnggLSBsaW5lLnN0YXJ0LngpICogcHJvZ3Jlc3MpXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gbGluZTtcbn07XG5cbnZhciBfbGVuZ3RoX29mX2Z1bmN0aW9uID0gcmVxdWlyZSgnLi4vaGVscGVyL2xlbmd0aF9vZl9mdW5jdGlvbicpO1xuXG52YXIgX2xlbmd0aF9vZl9mdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sZW5ndGhfb2ZfZnVuY3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2luZV93YXZlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocmFkaXVzKSB7XG5cbiAgdmFyIGNpcmNsZSA9IHt9O1xuICBjaXJjbGUucmFkaXVzID0gcmFkaXVzO1xuXG4gIGNpcmNsZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICBjaXJjbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfYXJjMi5kZWZhdWx0KSh7IHg6IDAsIHk6IC1jaXJjbGUucmFkaXVzIH0sIDM2MCwgY2lyY2xlLnJhZGl1cykpO1xuXG4gIHJldHVybiBjaXJjbGU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9hcmMgPSByZXF1aXJlKCcuLi9wYXRocy9hcmMnKTtcblxudmFyIF9hcmMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXJjKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNpcmNsZS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcblxuICB2YXIgcmVjdGFuZ2xlID0ge307XG4gIHJlY3RhbmdsZS53aWR0aCA9IHdpZHRoO1xuICByZWN0YW5nbGUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gIHJlY3RhbmdsZS5wYXRoID0gKDAsIF9wYXRoMi5kZWZhdWx0KSgpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyB4OiAwLCB5OiAwIH0sIHsgeDogd2lkdGgsIHk6IDAgfSkpO1xuICByZWN0YW5nbGUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogaGVpZ2h0IH0pKTtcbiAgcmVjdGFuZ2xlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgeDogMCwgeTogMCB9LCB7IHg6IC13aWR0aCwgeTogMCB9KSk7XG4gIHJlY3RhbmdsZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHg6IDAsIHk6IDAgfSwgeyB4OiAwLCB5OiAtaGVpZ2h0IH0pKTtcblxuICByZXR1cm4gcmVjdGFuZ2xlO1xufTtcblxudmFyIF9wYXRoID0gcmVxdWlyZSgnLi4vcGF0aHMvcGF0aCcpO1xuXG52YXIgX3BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGF0aCk7XG5cbnZhciBfbGluZSA9IHJlcXVpcmUoJy4uL3BhdGhzL2xpbmUnKTtcblxudmFyIF9saW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xpbmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVjdGFuZ2xlLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlY3RhbmdsZSA9IHJlcXVpcmUoJy4vcmVjdGFuZ2xlJyk7XG5cbnZhciBfcmVjdGFuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlY3RhbmdsZSk7XG5cbnZhciBfc3F1YXJlID0gcmVxdWlyZSgnLi9zcXVhcmUnKTtcblxudmFyIF9zcXVhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3F1YXJlKTtcblxudmFyIF9jaXJjbGUgPSByZXF1aXJlKCcuL2NpcmNsZScpO1xuXG52YXIgX2NpcmNsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaXJjbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHJlY3RhbmdsZTogX3JlY3RhbmdsZTIuZGVmYXVsdCxcbiAgc3F1YXJlOiBfc3F1YXJlMi5kZWZhdWx0LFxuICBjaXJjbGU6IF9jaXJjbGUyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGFwZXMuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzaWRlbGVuZ3RoKSB7XG5cbiAgdmFyIHNxdWFyZSA9IHt9O1xuICBzcXVhcmUuc2lkZWxlbmd0aCA9IHNpZGVsZW5ndGg7XG5cbiAgc3F1YXJlLnBhdGggPSAoMCwgX3BhdGgyLmRlZmF1bHQpKCk7XG4gIHNxdWFyZS5wYXRoLnN1YlBhdGhzLnB1c2goKDAsIF9saW5lMi5kZWZhdWx0KSh7IHg6IDAsIHk6IDAgfSwgeyB4OiBzaWRlbGVuZ3RoLCB5OiAwIH0pKTtcbiAgc3F1YXJlLnBhdGguc3ViUGF0aHMucHVzaCgoMCwgX2xpbmUyLmRlZmF1bHQpKHsgeDogMCwgeTogMCB9LCB7IHg6IDAsIHk6IHNpZGVsZW5ndGggfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyB4OiAwLCB5OiAwIH0sIHsgeDogLXNpZGVsZW5ndGgsIHk6IDAgfSkpO1xuICBzcXVhcmUucGF0aC5zdWJQYXRocy5wdXNoKCgwLCBfbGluZTIuZGVmYXVsdCkoeyB4OiAwLCB5OiAwIH0sIHsgeDogMCwgeTogLXNpZGVsZW5ndGggfSkpO1xuXG4gIHJldHVybiBzcXVhcmU7XG59O1xuXG52YXIgX3BhdGggPSByZXF1aXJlKCcuLi9wYXRocy9wYXRoJyk7XG5cbnZhciBfcGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoKTtcblxudmFyIF9saW5lID0gcmVxdWlyZSgnLi4vcGF0aHMvbGluZScpO1xuXG52YXIgX2xpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcXVhcmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9fdmVjdG9yLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBhZGRBbmltYXRpb246IGZ1bmN0aW9uIGFkZEFuaW1hdGlvbihoYW5kbGUpIHtcbiAgICBjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcigndGljaycsIGhhbmRsZSk7XG4gIH0sXG4gIHJlbW92ZUFuaW1hdGlvbjogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uKGhhbmRsZSkge1xuICAgIGNyZWF0ZWpzLlRpY2tlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0aWNrJywgaGFuZGxlKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvb3AuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcblxudmFyIF9mYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3JpZXMvY3JlYXRlanMvZmFjdG9yeScpO1xuXG52YXIgX2ZhY3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmFjdG9yeSk7XG5cbnZhciBfZmxhc2hlciA9IHJlcXVpcmUoJy4vZmlsdGVycy9vcGFjaXR5L2ZsYXNoZXInKTtcblxudmFyIF9mbGFzaGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsYXNoZXIpO1xuXG52YXIgX2ZhZGVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL29wYWNpdHkvZmFkZXInKTtcblxudmFyIF9mYWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mYWRlcik7XG5cbnZhciBfbGluZWFyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL3BvaW50MnBvaW50L2xpbmVhcicpO1xuXG52YXIgX2xpbmVhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9saW5lYXIpO1xuXG52YXIgX2luX291dF9xdWFkID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL3BvaW50MnBvaW50L2luX291dF9xdWFkJyk7XG5cbnZhciBfaW5fb3V0X3F1YWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5fb3V0X3F1YWQpO1xuXG52YXIgX2luX291dF9iYWNrID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL3BvaW50MnBvaW50L2luX291dF9iYWNrJyk7XG5cbnZhciBfaW5fb3V0X2JhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5fb3V0X2JhY2spO1xuXG52YXIgX2xpbmVhcl9zaGFrZSA9IHJlcXVpcmUoJy4vZmlsdGVycy9tb3Zlci9wb2ludDJwb2ludC9saW5lYXJfc2hha2UnKTtcblxudmFyIF9saW5lYXJfc2hha2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3NoYWtlKTtcblxudmFyIF9ncm91cCA9IHJlcXVpcmUoJy4vZmlsdGVycy9ncm91cC9ncm91cCcpO1xuXG52YXIgX2dyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyb3VwKTtcblxudmFyIF9saW5lYXJfcm90YXRvciA9IHJlcXVpcmUoJy4vZmlsdGVycy9yb3RhdG9yL2xpbmVhcl9yb3RhdG9yJyk7XG5cbnZhciBfbGluZWFyX3JvdGF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3JvdGF0b3IpO1xuXG52YXIgX3JhbmRvbV9jb2xvcl9jaGFuZ2VyID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvY29sb3IvcmFuZG9tX2NvbG9yX2NoYW5nZXInKTtcblxudmFyIF9yYW5kb21fY29sb3JfY2hhbmdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYW5kb21fY29sb3JfY2hhbmdlcik7XG5cbnZhciBfY29sb3JfZmFkZXIgPSByZXF1aXJlKCcuL21vZGlmaWNhdG9ycy9jb2xvci9jb2xvcl9mYWRlcicpO1xuXG52YXIgX2NvbG9yX2ZhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yX2ZhZGVyKTtcblxudmFyIF9saW5lYXJfcHVsc2FyID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvc2NhbGUvbGluZWFyX3B1bHNhcicpO1xuXG52YXIgX2xpbmVhcl9wdWxzYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGluZWFyX3B1bHNhcik7XG5cbnZhciBfZXhwb25lbnRpYWxfcHVsc2FyID0gcmVxdWlyZSgnLi9tb2RpZmljYXRvcnMvc2NhbGUvZXhwb25lbnRpYWxfcHVsc2FyJyk7XG5cbnZhciBfZXhwb25lbnRpYWxfcHVsc2FyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4cG9uZW50aWFsX3B1bHNhcik7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBfbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb29wKTtcblxudmFyIF9zaGFwZXMgPSByZXF1aXJlKCcuL2dlb21ldHJ5L3NoYXBlcy9zaGFwZXMnKTtcblxudmFyIF9zaGFwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhcGVzKTtcblxudmFyIF9wYXRocyA9IHJlcXVpcmUoJy4vZ2VvbWV0cnkvcGF0aHMvcGF0aHMnKTtcblxudmFyIF9wYXRoczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRocyk7XG5cbnZhciBfcGF0aE1vdmVyID0gcmVxdWlyZSgnLi9maWx0ZXJzL21vdmVyL3BhdGgvcGF0aC1tb3ZlcicpO1xuXG52YXIgX3BhdGhNb3ZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXRoTW92ZXIpO1xuXG52YXIgX2NvbXBvc2l0aW9ucyA9IHJlcXVpcmUoJy4vY29tcG9zaXRpb25zL2NvbXBvc2l0aW9ucycpO1xuXG52YXIgX2NvbXBvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzSWQpIHtcbiAgdmFyIG1haW5Db250YWluZXIgPSBfZmFjdG9yeTIuZGVmYXVsdC5tYWluQ29udGFpbmVyKGNhbnZhc0lkKTtcbiAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKG1haW5Db250YWluZXIpO1xuICBjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcbiAgcmV0dXJuIHtcbiAgICB2ZXJzaW9uOiAnMC4wLjEnLFxuICAgIG1haW5Db250YWluZXI6IG1haW5Db250YWluZXIsXG4gICAgZmFjdG9yeTogX2ZhY3RvcnkyLmRlZmF1bHQsXG4gICAgbG9vcDogX2xvb3AyLmRlZmF1bHQsXG4gICAgdXRpbHM6IHtcbiAgICAgIHJhbmRvbUNvbG9yOiBfcmFuZG9tQ29sb3IyLmRlZmF1bHRcbiAgICB9LFxuICAgIGdlb21ldHJ5OiB7XG4gICAgICBzaGFwZXM6IF9zaGFwZXMyLmRlZmF1bHQsXG4gICAgICBwYXRoczogX3BhdGhzMi5kZWZhdWx0XG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIGZsYXNoZXI6IF9mbGFzaGVyMi5kZWZhdWx0LFxuICAgICAgICBmYWRlcjogX2ZhZGVyMi5kZWZhdWx0XG4gICAgICB9LFxuICAgICAgbW92ZXI6IHtcbiAgICAgICAgcG9pbnQycG9pbnQ6IHtcbiAgICAgICAgICBsaW5lYXI6IF9saW5lYXIyLmRlZmF1bHQsXG4gICAgICAgICAgbGluZWFyU2hha2U6IF9saW5lYXJfc2hha2UyLmRlZmF1bHQsXG4gICAgICAgICAgaW5PdXRRdWFkOiBfaW5fb3V0X3F1YWQyLmRlZmF1bHQsXG4gICAgICAgICAgaW5PdXRCYWNrOiBfaW5fb3V0X2JhY2syLmRlZmF1bHRcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgIHBhdGhNb3ZlcjogX3BhdGhNb3ZlcjIuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ3JvdXA6IF9ncm91cDIuZGVmYXVsdCxcbiAgICAgIHJvdGF0b3I6IHtcbiAgICAgICAgbGluZWFyUm90YXRvcjogX2xpbmVhcl9yb3RhdG9yMi5kZWZhdWx0XG4gICAgICB9XG4gICAgfSxcbiAgICBtb2RpZmljYXRvcnM6IHtcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHJhbmRvbUNvbG9yQ2hhbmdlcjogX3JhbmRvbV9jb2xvcl9jaGFuZ2VyMi5kZWZhdWx0LFxuICAgICAgICBjb2xvckZhZGVyOiBfY29sb3JfZmFkZXIyLmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICBzY2FsZToge1xuICAgICAgICBsaW5lYXJQdWxzYXI6IF9saW5lYXJfcHVsc2FyMi5kZWZhdWx0LFxuICAgICAgICBleHBvbmVudGlhbFB1bHNhcjogX2V4cG9uZW50aWFsX3B1bHNhcjIuZGVmYXVsdFxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcG9zaXRpb25zOiBfY29tcG9zaXRpb25zMi5kZWZhdWx0XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViamVjdCwgc3BlZWQsIGNvbG9yMSwgY29sb3IyKSB7XG4gIHZhciBjb2xvckZhZGVyID0ge307XG4gIGNvbG9yRmFkZXIuc3ViamVjdCA9IHN1YmplY3Q7XG4gIGNvbG9yRmFkZXIuc3BlZWQgPSBzcGVlZDtcbiAgY29sb3JGYWRlci5jb2xvcjEgPSAoMCwgX2NvbG9yMi5kZWZhdWx0KShjb2xvcjEpO1xuICBjb2xvckZhZGVyLmNvbG9yMiA9ICgwLCBfY29sb3IyLmRlZmF1bHQpKGNvbG9yMik7XG4gIGNvbG9yRmFkZXIuY3VycmVudENvbG9yID0gKDAsIF9jb2xvcjIuZGVmYXVsdCkoY29sb3IxKTtcbiAgY29sb3JGYWRlci5wdWxzYXIgPSAoMCwgX3RyYW5zaXRpb25fbG9vcDIuZGVmYXVsdCkoY29sb3JGYWRlci5zcGVlZCwgMC41KTtcblxuICBjb2xvckZhZGVyLmNvbG9yUmFuZ2UgPSB7XG4gICAgcjogY29sb3JGYWRlci5jb2xvcjIucmVkKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5yZWQoKSxcbiAgICBnOiBjb2xvckZhZGVyLmNvbG9yMi5ncmVlbigpIC0gY29sb3JGYWRlci5jb2xvcjEuZ3JlZW4oKSxcbiAgICBiOiBjb2xvckZhZGVyLmNvbG9yMi5ibHVlKCkgLSBjb2xvckZhZGVyLmNvbG9yMS5ibHVlKClcbiAgfTtcblxuICBjb2xvckZhZGVyLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbG9yRmFkZXIucHVsc2FyLnN0YXJ0KGNvbG9yRmFkZXIuaGFuZGxlKTtcbiAgfTtcblxuICBjb2xvckZhZGVyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29sb3JGYWRlci5wdWxzYXIuc3RvcCgpO1xuICB9O1xuXG4gIGNvbG9yRmFkZXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBjb2xvckZhZGVyLmN1cnJlbnRDb2xvci5yZWQoY29sb3JGYWRlci5jb2xvcjEucmVkKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLnIpO1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLmdyZWVuKGNvbG9yRmFkZXIuY29sb3IxLmdyZWVuKCkgKyBjdXJyZW50ICogY29sb3JGYWRlci5jb2xvclJhbmdlLmcpO1xuICAgIGNvbG9yRmFkZXIuY3VycmVudENvbG9yLmJsdWUoY29sb3JGYWRlci5jb2xvcjEuYmx1ZSgpICsgY3VycmVudCAqIGNvbG9yRmFkZXIuY29sb3JSYW5nZS5iKTtcbiAgICBjb2xvckZhZGVyLnN1YmplY3QuY29sb3IgPSBjb2xvckZhZGVyLmN1cnJlbnRDb2xvci5yZ2JTdHJpbmcoKTtcbiAgICBjb2xvckZhZGVyLnN1YmplY3QuZHJhdygpO1xuICB9O1xuXG4gIHJldHVybiBjb2xvckZhZGVyO1xufTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJ2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcCA9IHJlcXVpcmUoJy4uLy4uL3RyYW5zaXRpb25zL3RyYW5zaXRpb25fbG9vcCcpO1xuXG52YXIgX3RyYW5zaXRpb25fbG9vcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9uX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sb3JfZmFkZXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gIHZhciByYW5kb21Db2xvckNoYW5nZXIgPSB7fTtcbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QgPSBzdWJqZWN0O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocmFuZG9tQ29sb3JDaGFuZ2VyLmhhbmRsZSk7XG4gIH07XG5cbiAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHJhbmRvbUNvbG9yQ2hhbmdlci5oYW5kbGUpO1xuICB9O1xuXG4gIHJhbmRvbUNvbG9yQ2hhbmdlci5oYW5kbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmFuZG9tQ29sb3JDaGFuZ2VyLnN1YmplY3QuY29sb3IgPSAoMCwgX3JhbmRvbUNvbG9yMi5kZWZhdWx0KSgpO1xuICAgIHJhbmRvbUNvbG9yQ2hhbmdlci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gcmFuZG9tQ29sb3JDaGFuZ2VyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfcmFuZG9tQ29sb3IgPSByZXF1aXJlKCdyYW5kb21Db2xvcicpO1xuXG52YXIgX3JhbmRvbUNvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JhbmRvbUNvbG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmRvbV9jb2xvcl9jaGFuZ2VyLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViamVjdCwgc3BlZWQsIGxpbWl0KSB7XG4gIHZhciBsaW5lYXJQdWxzYXIgPSB7fTtcbiAgbGluZWFyUHVsc2FyLnN1YmplY3QgPSBzdWJqZWN0O1xuICBsaW5lYXJQdWxzYXIuc3BlZWQgPSBzcGVlZDtcbiAgbGluZWFyUHVsc2FyLmxpbWl0ID0gbGltaXQ7XG4gIGxpbmVhclB1bHNhci5jdXJyZW50ID0gMTtcblxuICBpZiAobGltaXQgPCBsaW5lYXJQdWxzYXIuY3VycmVudCkge1xuICAgIGxpbmVhclB1bHNhci5pbmNyZW1lbnQgPSBmYWxzZTtcbiAgICBsaW5lYXJQdWxzYXIucHJvZ3Jlc3MgPSAxO1xuICB9IGVsc2Uge1xuICAgIGxpbmVhclB1bHNhci5pbmNyZW1lbnQgPSB0cnVlO1xuICAgIGxpbmVhclB1bHNhci5wcm9ncmVzcyA9IDA7XG4gIH1cblxuICBsaW5lYXJQdWxzYXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQuYWRkQW5pbWF0aW9uKGxpbmVhclB1bHNhci5oYW5kbGUpO1xuICB9O1xuXG4gIGxpbmVhclB1bHNhci5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIF9sb29wMi5kZWZhdWx0LnJlbW92ZUFuaW1hdGlvbihsaW5lYXJQdWxzYXIuaGFuZGxlKTtcbiAgfTtcblxuICBsaW5lYXJQdWxzYXIuaGFuZGxlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGxpbmVhclB1bHNhci5pbmNyZW1lbnQpIHtcbiAgICAgIGhhbmRsZUluY3JlbWVudChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZURlY3JlbWVudChldmVudCk7XG4gICAgfVxuICAgIGxpbmVhclB1bHNhci5zdWJqZWN0LnNjYWxlID0gMSArICgwLCBfZWFzaW5nVXRpbHMuZWFzZUluT3V0RXhwbykobGluZWFyUHVsc2FyLnByb2dyZXNzKSAqIChsaW5lYXJQdWxzYXIubGltaXQgLSAxKTtcbiAgICBsaW5lYXJQdWxzYXIuc3ViamVjdC5kcmF3KCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5jcmVtZW50KGV2ZW50KSB7XG4gICAgbGluZWFyUHVsc2FyLnByb2dyZXNzID0gbGluZWFyUHVsc2FyLnByb2dyZXNzICsgZXZlbnQuZGVsdGEgLyAxMDAwICogKHNwZWVkIC8gKGxpbmVhclB1bHNhci5saW1pdCAtIDEpKTtcbiAgICBpZiAobGluZWFyUHVsc2FyLnByb2dyZXNzID49IDEpIHtcbiAgICAgIGxpbmVhclB1bHNhci5wcm9ncmVzcyA9IDE7XG4gICAgICBsaW5lYXJQdWxzYXIuaW5jcmVtZW50ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGVjcmVtZW50KGV2ZW50KSB7XG4gICAgbGluZWFyUHVsc2FyLnByb2dyZXNzID0gbGluZWFyUHVsc2FyLnByb2dyZXNzIC0gZXZlbnQuZGVsdGEgLyAxMDAwICogKHNwZWVkIC8gKGxpbmVhclB1bHNhci5saW1pdCAtIDEpKTtcbiAgICBpZiAobGluZWFyUHVsc2FyLnByb2dyZXNzIDw9IDApIHtcbiAgICAgIGxpbmVhclB1bHNhci5wcm9ncmVzcyA9IDA7XG4gICAgICBsaW5lYXJQdWxzYXIuaW5jcmVtZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGluZWFyUHVsc2FyO1xufTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi4vLi4vbG9vcCcpO1xuXG52YXIgX2xvb3AyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9vcCk7XG5cbnZhciBfZWFzaW5nVXRpbHMgPSByZXF1aXJlKCdlYXNpbmctdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4cG9uZW50aWFsX3B1bHNhci5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YmplY3QsIHNwZWVkLCBsaW1pdCkge1xuICB2YXIgbGluZWFyUHVsc2FyID0ge307XG4gIGxpbmVhclB1bHNhci5zdWJqZWN0ID0gc3ViamVjdDtcbiAgbGluZWFyUHVsc2FyLnNwZWVkID0gc3BlZWQ7XG4gIGxpbmVhclB1bHNhci5saW1pdCA9IGxpbWl0O1xuICBsaW5lYXJQdWxzYXIucHVsc2FyID0gKDAsIF90cmFuc2l0aW9uX2xvb3AucHVsc2FyVHJhbnNpdGlvbikobGluZWFyUHVsc2FyLnNwZWVkKTtcblxuICBsaW5lYXJQdWxzYXIuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGluZWFyUHVsc2FyLnB1bHNhci5zdGFydChsaW5lYXJQdWxzYXIuaGFuZGxlKTtcbiAgfTtcblxuICBsaW5lYXJQdWxzYXIuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsaW5lYXJQdWxzYXIucHVsc2FyLnN0b3AoKTtcbiAgfTtcblxuICBsaW5lYXJQdWxzYXIuaGFuZGxlID0gZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICBsaW5lYXJQdWxzYXIuc3ViamVjdC5zY2FsZSA9IDEgKyBjdXJyZW50ICogbGluZWFyUHVsc2FyLmxpbWl0O1xuICAgIGxpbmVhclB1bHNhci5zdWJqZWN0LmRyYXcoKTtcbiAgfTtcblxuICByZXR1cm4gbGluZWFyUHVsc2FyO1xufTtcblxudmFyIF90cmFuc2l0aW9uX2xvb3AgPSByZXF1aXJlKCcuLi8uLi90cmFuc2l0aW9ucy90cmFuc2l0aW9uX2xvb3AnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmVhcl9wdWxzYXIuanMubWFwXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVhc2luZyA9IHt9O1xuXG4gIGVhc2luZy5lYXNlSW5PdXRRdWFkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICgwLCBfZWFzaW5nVXRpbHMuZWFzZUluT3V0UXVhZCkodmFsdWUpO1xuICB9O1xuXG4gIGVhc2luZy5lYXNlSW5PdXRCYWNrID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICgwLCBfZWFzaW5nVXRpbHMuZWFzZUluT3V0QmFjaykodmFsdWUpO1xuICB9O1xuXG4gIGVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgZWFzaW5nLmdldFZhbHVlT2YgPSBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZWFzaW5nW3R5cGVdKHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gZWFzaW5nO1xufTtcblxudmFyIF9lYXNpbmdVdGlscyA9IHJlcXVpcmUoJ2Vhc2luZy11dGlscycpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZWFzaW5nLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yaXNpbmdUcmFuc2l0aW9uID0gcmlzaW5nVHJhbnNpdGlvbjtcbmV4cG9ydHMucHVsc2FyVHJhbnNpdGlvbiA9IHB1bHNhclRyYW5zaXRpb247XG5cbnZhciBfbG9vcCA9IHJlcXVpcmUoJy4uL2xvb3AnKTtcblxudmFyIF9sb29wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uTG9vcCh0aW1lLCBzdGVlcG5lc3MsIGN1cnJlbnQpIHtcbiAgdmFyIHB1bHNhciA9IHt9O1xuICBwdWxzYXIudGltZSA9IHRpbWU7XG4gIHB1bHNhci5zdGVlcG5lc3MgPSB0eXBlb2Ygc3RlZXBuZXNzICE9PSAndW5kZWZpbmVkJyA/IHN0ZWVwbmVzcyA6IDAuNTtcbiAgcHVsc2FyLmN1cnJlbnQgPSBjdXJyZW50ID8gY3VycmVudCA6IDA7XG4gIHB1bHNhci5pbmNyZW1lbnQgPSB0cnVlO1xuICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gY3VycmVudCA/IGN1cnJlbnQgKiB0aW1lIDogMDtcblxuICBwdWxzYXIuc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBwdWxzYXIuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICBfbG9vcDIuZGVmYXVsdC5hZGRBbmltYXRpb24ocHVsc2FyLmhhbmRsZSk7XG4gIH07XG5cbiAgcHVsc2FyLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2xvb3AyLmRlZmF1bHQucmVtb3ZlQW5pbWF0aW9uKHB1bHNhci5oYW5kbGUpO1xuICB9O1xuXG4gIHB1bHNhci5oYW5kbGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBwdWxzYXIuY3VycmVudE1zZWNvbmRzID0gcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyArIGV2ZW50LmRlbHRhO1xuXG4gICAgdmFyIGxpbWl0VGltZUZhY3RvciA9IE1hdGguZmxvb3IocHVsc2FyLmN1cnJlbnRNc2Vjb25kcyAvIHB1bHNhci50aW1lKTtcblxuICAgIHB1bHNhci5jdXJyZW50TXNlY29uZHMgPSBwdWxzYXIuY3VycmVudE1zZWNvbmRzIC0gcHVsc2FyLnRpbWUgKiBsaW1pdFRpbWVGYWN0b3I7XG5cbiAgICB2YXIgcmVsYXRpdmVDdXJyZW50ID0gcHVsc2FyLmN1cnJlbnRNc2Vjb25kcyAvIHB1bHNhci50aW1lO1xuICAgIGlmIChyZWxhdGl2ZUN1cnJlbnQgPD0gcHVsc2FyLnN0ZWVwbmVzcykge1xuICAgICAgcHVsc2FyLmN1cnJlbnQgPSByZWxhdGl2ZUN1cnJlbnQgLyBwdWxzYXIuc3RlZXBuZXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdWxzYXIuY3VycmVudCA9IDEgLSAocmVsYXRpdmVDdXJyZW50IC0gcHVsc2FyLnN0ZWVwbmVzcykgLyAoMSAtIHB1bHNhci5zdGVlcG5lc3MpO1xuICAgIH1cblxuICAgIGlmIChwdWxzYXIuY2FsbGJhY2spIHtcbiAgICAgIHB1bHNhci5jYWxsYmFjayhwdWxzYXIuY3VycmVudCwgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcHVsc2FyO1xufVxuXG5mdW5jdGlvbiByaXNpbmdUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQpIHtcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDEsIGN1cnJlbnQpO1xufVxuXG5mdW5jdGlvbiBwdWxzYXJUcmFuc2l0aW9uKHRpbWUsIGN1cnJlbnQpIHtcbiAgcmV0dXJuIHRyYW5zaXRpb25Mb29wKHRpbWUsIDAsIGN1cnJlbnQpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uTG9vcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25fbG9vcC5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSg2MSk7XG4iLCIvKipcbiAgQSBqYXZhc2NyaXB0IEJlemllciBjdXJ2ZSBsaWJyYXJ5IGJ5IFBvbWF4LlxuXG4gIEJhc2VkIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mb1xuXG4gIFRoaXMgY29kZSBpcyBNSVQgbGljZW5zZWQuXG4qKi9cbihmdW5jdGlvbigpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgLy8gbWF0aC1pbmxpbmluZy5cbiAgdmFyIGFicyA9IE1hdGguYWJzLFxuICAgICAgbWluID0gTWF0aC5taW4sXG4gICAgICBtYXggPSBNYXRoLm1heCxcbiAgICAgIGFjb3MgPSBNYXRoLmFjb3MsXG4gICAgICBzcXJ0ID0gTWF0aC5zcXJ0LFxuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgLy8gYSB6ZXJvIGNvb3JkaW5hdGUsIHdoaWNoIGlzIHN1cnByaXNpbmdseSB1c2VmdWxcbiAgICAgIFpFUk8gPSB7eDowLHk6MCx6OjB9O1xuXG4gIC8vIHF1aXRlIG5lZWRlZFxuICB2YXIgdXRpbHMgPSByZXF1aXJlKDYzKTtcblxuICAvLyBub3QgcXVpdGUgbmVlZGVkLCBidXQgZXZlbnR1YWxseSB0aGlzJ2xsIGJlIHVzZWZ1bC4uLlxuICB2YXIgUG9seUJlemllciA9IHJlcXVpcmUoNjIpO1xuXG4gIC8qKlxuICAgKiBCZXppZXIgY3VydmUgY29uc3RydWN0b3IuIFRoZSBjb25zdHJ1Y3RvciBhcmd1bWVudCBjYW4gYmUgb25lIG9mIHRocmVlIHRoaW5nczpcbiAgICpcbiAgICogMS4gYXJyYXkvNCBvZiB7eDouLi4sIHk6Li4uLCB6Oi4uLn0sIHogb3B0aW9uYWxcbiAgICogMi4gbnVtZXJpY2FsIGFycmF5Lzggb3JkZXJlZCB4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NFxuICAgKiAzLiBudW1lcmljYWwgYXJyYXkvMTIgb3JkZXJlZCB4MSx5MSx6MSx4Mix5Mix6Mix4Myx5Myx6Myx4NCx5NCx6NFxuICAgKlxuICAgKi9cbiAgdmFyIEJlemllciA9IGZ1bmN0aW9uKGNvb3Jkcykge1xuICAgIHZhciBhcmdzID0gKGNvb3JkcyAmJiBjb29yZHMuZm9yRWFjaCkgPyBjb29yZHMgOiBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgdmFyIGNvb3JkbGVuID0gZmFsc2U7XG4gICAgaWYodHlwZW9mIGFyZ3NbMF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvb3JkbGVuID0gYXJncy5sZW5ndGg7XG4gICAgICB2YXIgbmV3YXJncyA9IFtdO1xuICAgICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50KSB7XG4gICAgICAgIFsneCcsJ3knLCd6J10uZm9yRWFjaChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgaWYodHlwZW9mIHBvaW50W2RdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBuZXdhcmdzLnB1c2gocG9pbnRbZF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGFyZ3MgPSBuZXdhcmdzO1xuICAgIH1cbiAgICB2YXIgaGlnaGVyID0gZmFsc2U7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIGlmIChjb29yZGxlbikge1xuICAgICAgaWYoY29vcmRsZW4+NCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgbmV3IEJlemllcihwb2ludFtdKSBpcyBhY2NlcHRlZCBmb3IgNHRoIGFuZCBoaWdoZXIgb3JkZXIgY3VydmVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hlciA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGxlbiE9PTYgJiYgbGVuIT09OCAmJiBsZW4hPT05ICYmIGxlbiE9PTEyKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiT25seSBuZXcgQmV6aWVyKHBvaW50W10pIGlzIGFjY2VwdGVkIGZvciA0dGggYW5kIGhpZ2hlciBvcmRlciBjdXJ2ZXNcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIF8zZCA9ICghaGlnaGVyICYmIChsZW4gPT09IDkgfHwgbGVuID09PSAxMikpIHx8IChjb29yZHMgJiYgY29vcmRzWzBdICYmIHR5cGVvZiBjb29yZHNbMF0ueiAhPT0gXCJ1bmRlZmluZWRcIik7XG4gICAgdGhpcy5fM2QgPSBfM2Q7XG4gICAgdmFyIHBvaW50cyA9IFtdO1xuICAgIGZvcih2YXIgaWR4PTAsIHN0ZXA9KF8zZCA/IDMgOiAyKTsgaWR4PGxlbjsgaWR4Kz1zdGVwKSB7XG4gICAgICB2YXIgcG9pbnQgPSB7XG4gICAgICAgIHg6IGFyZ3NbaWR4XSxcbiAgICAgICAgeTogYXJnc1tpZHgrMV1cbiAgICAgIH07XG4gICAgICBpZihfM2QpIHsgcG9pbnQueiA9IGFyZ3NbaWR4KzJdIH07XG4gICAgICBwb2ludHMucHVzaChwb2ludCk7XG4gICAgfVxuICAgIHRoaXMub3JkZXIgPSBwb2ludHMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcbiAgICB2YXIgZGltcyA9IFsneCcsJ3knXTtcbiAgICBpZihfM2QpIGRpbXMucHVzaCgneicpO1xuICAgIHRoaXMuZGltcyA9IGRpbXM7XG4gICAgdGhpcy5kaW1sZW4gPSBkaW1zLmxlbmd0aDtcblxuICAgIChmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgdmFyIG9yZGVyID0gY3VydmUub3JkZXI7XG4gICAgICB2YXIgcG9pbnRzID0gY3VydmUucG9pbnRzO1xuICAgICAgdmFyIGEgPSB1dGlscy5hbGlnbihwb2ludHMsIHtwMTpwb2ludHNbMF0sIHAyOnBvaW50c1tvcmRlcl19KTtcbiAgICAgIGZvcih2YXIgaT0wOyBpPGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoYWJzKGFbaV0ueSkgPiAwLjAwMDEpIHtcbiAgICAgICAgICBjdXJ2ZS5fbGluZWFyID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdXJ2ZS5fbGluZWFyID0gdHJ1ZTtcbiAgICB9KHRoaXMpKTtcblxuICAgIHRoaXMuX3QxID0gMDtcbiAgICB0aGlzLl90MiA9IDE7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfTtcblxuICBCZXppZXIuZnJvbVNWRyA9IGZ1bmN0aW9uKHN2Z1N0cmluZykge1xuICAgIHZhciBsaXN0ID0gc3ZnU3RyaW5nLm1hdGNoKC9bLStdP1xcZCpcXC4/XFxkKyg/OltlRV1bLStdP1xcZCspPy9nKS5tYXAocGFyc2VGbG9hdCk7XG4gICAgdmFyIHJlbGF0aXZlID0gL1tjcV0vLnRlc3Qoc3ZnU3RyaW5nKTtcbiAgICBpZighcmVsYXRpdmUpIHJldHVybiBuZXcgQmV6aWVyKGxpc3QpO1xuICAgIGxpc3QgPSBsaXN0Lm1hcChmdW5jdGlvbih2LGkpIHtcbiAgICAgIHJldHVybiBpIDwgMiA/IHYgOiB2ICsgbGlzdFtpICUgMl07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBCZXppZXIobGlzdCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QUJDKG4sUyxCLEUsdCkge1xuICAgIGlmKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7IHQgPSAwLjU7IH1cbiAgICB2YXIgdSA9IHV0aWxzLnByb2plY3Rpb25yYXRpbyh0LG4pLFxuICAgICAgICB1bSA9IDEtdSxcbiAgICAgICAgQyA9IHtcbiAgICAgICAgICB4OiB1KlMueCArIHVtKkUueCxcbiAgICAgICAgICB5OiB1KlMueSArIHVtKkUueVxuICAgICAgICB9LFxuICAgICAgICBzID0gdXRpbHMuYWJjcmF0aW8odCxuKSxcbiAgICAgICAgQSA9IHtcbiAgICAgICAgICB4OiBCLnggKyAoQi54LUMueCkvcyxcbiAgICAgICAgICB5OiBCLnkgKyAoQi55LUMueSkvc1xuICAgICAgICB9O1xuICAgIHJldHVybiB7IEE6QSwgQjpCLCBDOkMgfTtcbiAgfVxuXG4gIEJlemllci5xdWFkcmF0aWNGcm9tUG9pbnRzID0gZnVuY3Rpb24ocDEscDIscDMsIHQpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgLy8gc2hvcnRjdXRzLCBhbHRob3VnaCB0aGV5J3JlIHJlYWxseSBkdW1iXG4gICAgaWYodD09PTApIHsgcmV0dXJuIG5ldyBCZXppZXIocDIscDIscDMpOyB9XG4gICAgaWYodD09PTEpIHsgcmV0dXJuIG5ldyBCZXppZXIocDEscDIscDIpOyB9XG4gICAgLy8gcmVhbCBmaXR0aW5nLlxuICAgIHZhciBhYmMgPSBnZXRBQkMoMixwMSxwMixwMyx0KTtcbiAgICByZXR1cm4gbmV3IEJlemllcihwMSwgYWJjLkEsIHAzKTtcbiAgfTtcblxuICBCZXppZXIuY3ViaWNGcm9tUG9pbnRzID0gZnVuY3Rpb24oUyxCLEUsIHQsZDEpIHtcbiAgICBpZih0eXBlb2YgdCA9PT0gXCJ1bmRlZmluZWRcIikgeyB0ID0gMC41OyB9XG4gICAgdmFyIGFiYyA9IGdldEFCQygzLFMsQixFLHQpO1xuICAgIGlmKHR5cGVvZiBkMSA9PT0gXCJ1bmRlZmluZWRcIikgeyBkMSA9IHV0aWxzLmRpc3QoQixhYmMuQyk7IH1cbiAgICB2YXIgZDIgPSBkMSAqICgxLXQpL3Q7XG5cbiAgICB2YXIgc2VsZW4gPSB1dGlscy5kaXN0KFMsRSksXG4gICAgICAgIGx4ID0gKEUueC1TLngpL3NlbGVuLFxuICAgICAgICBseSA9IChFLnktUy55KS9zZWxlbixcbiAgICAgICAgYngxID0gZDEgKiBseCxcbiAgICAgICAgYnkxID0gZDEgKiBseSxcbiAgICAgICAgYngyID0gZDIgKiBseCxcbiAgICAgICAgYnkyID0gZDIgKiBseTtcbiAgICAvLyBkZXJpdmF0aW9uIG9mIG5ldyBodWxsIGNvb3JkaW5hdGVzXG4gICAgdmFyIGUxICA9IHsgeDogQi54IC0gYngxLCB5OiBCLnkgLSBieTEgfSxcbiAgICAgICAgZTIgID0geyB4OiBCLnggKyBieDIsIHk6IEIueSArIGJ5MiB9LFxuICAgICAgICBBID0gYWJjLkEsXG4gICAgICAgIHYxICA9IHsgeDogQS54ICsgKGUxLngtQS54KS8oMS10KSwgeTogQS55ICsgKGUxLnktQS55KS8oMS10KSB9LFxuICAgICAgICB2MiAgPSB7IHg6IEEueCArIChlMi54LUEueCkvKHQpLCB5OiBBLnkgKyAoZTIueS1BLnkpLyh0KSB9LFxuICAgICAgICBuYzEgPSB7IHg6IFMueCArICh2MS54LVMueCkvKHQpLCB5OiBTLnkgKyAodjEueS1TLnkpLyh0KSB9LFxuICAgICAgICBuYzIgPSB7IHg6IEUueCArICh2Mi54LUUueCkvKDEtdCksIHk6IEUueSArICh2Mi55LUUueSkvKDEtdCkgfTtcbiAgICAvLyAuLi5kb25lXG4gICAgcmV0dXJuIG5ldyBCZXppZXIoUyxuYzEsbmMyLEUpO1xuICB9O1xuXG4gIHZhciBnZXRVdGlscyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB1dGlscztcbiAgfTtcblxuICBCZXppZXIuZ2V0VXRpbHMgPSBnZXRVdGlscztcblxuICBCZXppZXIucHJvdG90eXBlID0ge1xuICAgIGdldFV0aWxzOiBnZXRVdGlscyxcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgdG9TVkc6IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gICAgICBpZih0aGlzLl8zZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHAgPSB0aGlzLnBvaW50cyxcbiAgICAgICAgICB4ID0gcFswXS54LFxuICAgICAgICAgIHkgPSBwWzBdLnksXG4gICAgICAgICAgcyA9IFtcIk1cIiwgeCwgeSwgKHRoaXMub3JkZXI9PT0yID8gXCJRXCI6XCJDXCIpXTtcbiAgICAgIGZvcih2YXIgaT0xLCBsYXN0PXAubGVuZ3RoOyBpPGxhc3Q7IGkrKykge1xuICAgICAgICBzLnB1c2gocFtpXS54KTtcbiAgICAgICAgcy5wdXNoKHBbaV0ueSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcy5qb2luKFwiIFwiKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAvLyBvbmUtdGltZSBjb21wdXRlIGRlcml2YXRpdmUgY29vcmRpbmF0ZXNcbiAgICAgIHRoaXMuZHBvaW50cyA9IFtdO1xuICAgICAgZm9yKHZhciBwPXRoaXMucG9pbnRzLCBkPXAubGVuZ3RoLCBjPWQtMTsgZD4xOyBkLS0sIGMtLSkge1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IodmFyIGo9MCwgZHB0OyBqPGM7IGorKykge1xuICAgICAgICAgIGRwdCA9IHtcbiAgICAgICAgICAgIHg6IGMgKiAocFtqKzFdLnggLSBwW2pdLngpLFxuICAgICAgICAgICAgeTogYyAqIChwW2orMV0ueSAtIHBbal0ueSlcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgICAgICBkcHQueiA9IGMgKiAocFtqKzFdLnogLSBwW2pdLnopO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0LnB1c2goZHB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRwb2ludHMucHVzaChsaXN0KTtcbiAgICAgICAgcCA9IGxpc3Q7XG4gICAgICB9O1xuICAgICAgdGhpcy5jb21wdXRlZGlyZWN0aW9uKCk7XG4gICAgfSxcbiAgICBjb21wdXRlZGlyZWN0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwb2ludHMgPSB0aGlzLnBvaW50cztcbiAgICAgIHZhciBhbmdsZSA9IHV0aWxzLmFuZ2xlKHBvaW50c1swXSwgcG9pbnRzW3RoaXMub3JkZXJdLCBwb2ludHNbMV0pO1xuICAgICAgdGhpcy5jbG9ja3dpc2UgPSBhbmdsZSA+IDA7XG4gICAgfSxcbiAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHV0aWxzLmxlbmd0aCh0aGlzLmRlcml2YXRpdmUuYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBfbHV0OiBbXSxcbiAgICBnZXRMVVQ6IGZ1bmN0aW9uKHN0ZXBzKSB7XG4gICAgICBzdGVwcyA9IHN0ZXBzIHx8IDEwMDtcbiAgICAgIGlmICh0aGlzLl9sdXQubGVuZ3RoID09PSBzdGVwcykgeyByZXR1cm4gdGhpcy5fbHV0OyB9XG4gICAgICB0aGlzLl9sdXQgPSBbXTtcbiAgICAgIGZvcih2YXIgdD0wOyB0PD1zdGVwczsgdCsrKSB7XG4gICAgICAgIHRoaXMuX2x1dC5wdXNoKHRoaXMuY29tcHV0ZSh0L3N0ZXBzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fbHV0O1xuICAgIH0sXG4gICAgb246IGZ1bmN0aW9uKHBvaW50LCBlcnJvcikge1xuICAgICAgZXJyb3IgPSBlcnJvciB8fCA1O1xuICAgICAgdmFyIGx1dCA9IHRoaXMuZ2V0TFVUKCksIGhpdHMgPSBbXSwgYywgdD0wO1xuICAgICAgZm9yKHZhciBpPTA7IGk8bHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGMgPSBsdXRbaV07XG4gICAgICAgIGlmICh1dGlscy5kaXN0KGMscG9pbnQpIDwgZXJyb3IpIHtcbiAgICAgICAgICBoaXRzLnB1c2goYylcbiAgICAgICAgICB0ICs9IGkgLyBsdXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZighaGl0cy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0IC89IGhpdHMubGVuZ3RoO1xuICAgIH0sXG4gICAgcHJvamVjdDogZnVuY3Rpb24ocG9pbnQpIHtcbiAgICAgIC8vIHN0ZXAgMTogY29hcnNlIGNoZWNrXG4gICAgICB2YXIgTFVUID0gdGhpcy5nZXRMVVQoKSwgbCA9IExVVC5sZW5ndGgtMSxcbiAgICAgICAgICBjbG9zZXN0ID0gdXRpbHMuY2xvc2VzdChMVVQsIHBvaW50KSxcbiAgICAgICAgICBtZGlzdCA9IGNsb3Nlc3QubWRpc3QsXG4gICAgICAgICAgbXBvcyA9IGNsb3Nlc3QubXBvcztcbiAgICAgIGlmIChtcG9zPT09MCB8fCBtcG9zPT09bCkge1xuICAgICAgICB2YXIgdCA9IG1wb3MvbCwgcHQgPSB0aGlzLmNvbXB1dGUodCk7XG4gICAgICAgIHB0LnQgPSB0O1xuICAgICAgICBwdC5kID0gbWRpc3Q7XG4gICAgICAgIHJldHVybiBwdDtcbiAgICAgIH1cblxuICAgICAgLy8gc3RlcCAyOiBmaW5lIGNoZWNrXG4gICAgICB2YXIgZnQsIHQsIHAsIGQsXG4gICAgICAgICAgdDEgPSAobXBvcy0xKS9sLFxuICAgICAgICAgIHQyID0gKG1wb3MrMSkvbCxcbiAgICAgICAgICBzdGVwID0gMC4xL2w7XG4gICAgICBtZGlzdCArPSAxO1xuICAgICAgZm9yKHQ9dDEsZnQ9dDsgdDx0MitzdGVwOyB0Kz1zdGVwKSB7XG4gICAgICAgIHAgPSB0aGlzLmNvbXB1dGUodCk7XG4gICAgICAgIGQgPSB1dGlscy5kaXN0KHBvaW50LCBwKTtcbiAgICAgICAgaWYgKGQ8bWRpc3QpIHtcbiAgICAgICAgICBtZGlzdCA9IGQ7XG4gICAgICAgICAgZnQgPSB0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwID0gdGhpcy5jb21wdXRlKGZ0KTtcbiAgICAgIHAudCA9IGZ0O1xuICAgICAgcC5kID0gbWRpc3Q7XG4gICAgICByZXR1cm4gcDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24odCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZSh0KTtcbiAgICB9LFxuICAgIHBvaW50OiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvaW50c1tpZHhdO1xuICAgIH0sXG4gICAgY29tcHV0ZTogZnVuY3Rpb24odCkge1xuICAgICAgLy8gc2hvcnRjdXRzXG4gICAgICBpZih0PT09MCkgeyByZXR1cm4gdGhpcy5wb2ludHNbMF07IH1cbiAgICAgIGlmKHQ9PT0xKSB7IHJldHVybiB0aGlzLnBvaW50c1t0aGlzLm9yZGVyXTsgfVxuXG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzO1xuICAgICAgdmFyIG10ID0gMS10O1xuXG4gICAgICAvLyBsaW5lYXI/XG4gICAgICBpZih0aGlzLm9yZGVyPT09MSkge1xuICAgICAgICByZXQgPSB7XG4gICAgICAgICAgeDogbXQqcFswXS54ICsgdCpwWzFdLngsXG4gICAgICAgICAgeTogbXQqcFswXS55ICsgdCpwWzFdLnlcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuXzNkKSB7IHJldC56ID0gbXQqcFswXS56ICsgdCpwWzFdLno7IH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgICAgLy8gcXVhZHJhdGljL2N1YmljIGN1cnZlP1xuICAgICAgaWYodGhpcy5vcmRlcjw0KSB7XG4gICAgICAgIHZhciBtdDIgPSBtdCptdCxcbiAgICAgICAgICAgIHQyID0gdCp0LFxuICAgICAgICAgICAgYSxiLGMsZCA9IDA7XG4gICAgICAgIGlmKHRoaXMub3JkZXI9PT0yKSB7XG4gICAgICAgICAgcCA9IFtwWzBdLCBwWzFdLCBwWzJdLCBaRVJPXTtcbiAgICAgICAgICBhID0gbXQyO1xuICAgICAgICAgIGIgPSBtdCp0KjI7XG4gICAgICAgICAgYyA9IHQyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5vcmRlcj09PTMpIHtcbiAgICAgICAgICBhID0gbXQyKm10O1xuICAgICAgICAgIGIgPSBtdDIqdCozO1xuICAgICAgICAgIGMgPSBtdCp0MiozO1xuICAgICAgICAgIGQgPSB0KnQyO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgeDogYSpwWzBdLnggKyBiKnBbMV0ueCArIGMqcFsyXS54ICsgZCpwWzNdLngsXG4gICAgICAgICAgeTogYSpwWzBdLnkgKyBiKnBbMV0ueSArIGMqcFsyXS55ICsgZCpwWzNdLnlcbiAgICAgICAgfTtcbiAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICByZXQueiA9IGEqcFswXS56ICsgYipwWzFdLnogKyBjKnBbMl0ueiArIGQqcFszXS56O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGhpZ2hlciBvcmRlciBjdXJ2ZXM6IHVzZSBkZSBDYXN0ZWxqYXUncyBjb21wdXRhdGlvblxuICAgICAgdmFyIGRDcHRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBvaW50cykpO1xuICAgICAgd2hpbGUoZENwdHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8ZENwdHMubGVuZ3RoLTE7IGkrKykge1xuICAgICAgICAgIGRDcHRzW2ldID0ge1xuICAgICAgICAgICAgeDogZENwdHNbaV0ueCArIChkQ3B0c1tpKzFdLnggLSBkQ3B0c1tpXS54KSAqIHQsXG4gICAgICAgICAgICB5OiBkQ3B0c1tpXS55ICsgKGRDcHRzW2krMV0ueSAtIGRDcHRzW2ldLnkpICogdFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHR5cGVvZiBkQ3B0c1tpXS56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBkQ3B0c1tpXSA9IGRDcHRzW2ldLnogKyAoZENwdHNbaSsxXS56IC0gZENwdHNbaV0ueikgKiB0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRDcHRzLnNwbGljZShkQ3B0cy5sZW5ndGgtMSwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZENwdHNbMF07XG4gICAgfSxcbiAgICByYWlzZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcCA9IHRoaXMucG9pbnRzLCBucCA9IFtwWzBdXSwgaSwgaz1wLmxlbmd0aCwgcGksIHBpbTtcbiAgICAgIGZvciAodmFyIGk9MTsgaTxrOyBpKyspIHtcbiAgICAgICAgcGkgPSBwW2ldO1xuICAgICAgICBwaW0gPSBwW2ktMV07XG4gICAgICAgIG5wW2ldID0ge1xuICAgICAgICAgIHg6IChrLWkpL2sgKiBwaS54ICsgaS9rICogcGltLngsXG4gICAgICAgICAgeTogKGstaSkvayAqIHBpLnkgKyBpL2sgKiBwaW0ueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgbnBba10gPSBwW2stMV07XG4gICAgICByZXR1cm4gbmV3IEJlemllcihucCk7XG4gICAgfSxcbiAgICBkZXJpdmF0aXZlOiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgbXQgPSAxLXQsXG4gICAgICAgICAgYSxiLGM9MCxcbiAgICAgICAgICBwID0gdGhpcy5kcG9pbnRzWzBdO1xuICAgICAgaWYodGhpcy5vcmRlcj09PTIpIHsgcCA9IFtwWzBdLCBwWzFdLCBaRVJPXTsgYSA9IG10OyBiID0gdDsgfVxuICAgICAgaWYodGhpcy5vcmRlcj09PTMpIHsgYSA9IG10Km10OyBiID0gbXQqdCoyOyBjID0gdCp0OyB9XG4gICAgICB2YXIgcmV0ID0ge1xuICAgICAgICB4OiBhKnBbMF0ueCArIGIqcFsxXS54ICsgYypwWzJdLngsXG4gICAgICAgIHk6IGEqcFswXS55ICsgYipwWzFdLnkgKyBjKnBbMl0ueVxuICAgICAgfTtcbiAgICAgIGlmKHRoaXMuXzNkKSB7XG4gICAgICAgIHJldC56ID0gYSpwWzBdLnogKyBiKnBbMV0ueiArIGMqcFsyXS56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGluZmxlY3Rpb25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB1dGlscy5pbmZsZWN0aW9ucyh0aGlzLnBvaW50cyk7XG4gICAgfSxcbiAgICBub3JtYWw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0aGlzLl8zZCA/IHRoaXMuX19ub3JtYWwzKHQpIDogdGhpcy5fX25vcm1hbDIodCk7XG4gICAgfSxcbiAgICBfX25vcm1hbDI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBkID0gdGhpcy5kZXJpdmF0aXZlKHQpO1xuICAgICAgdmFyIHEgPSBzcXJ0KGQueCpkLnggKyBkLnkqZC55KVxuICAgICAgcmV0dXJuIHsgeDogLWQueS9xLCB5OiBkLngvcSB9O1xuICAgIH0sXG4gICAgX19ub3JtYWwzOiBmdW5jdGlvbih0KSB7XG4gICAgICAvLyBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNTQ1MzE1OVxuICAgICAgdmFyIHIxID0gdGhpcy5kZXJpdmF0aXZlKHQpLFxuICAgICAgICAgIHIyID0gdGhpcy5kZXJpdmF0aXZlKHQrMC4wMSksXG4gICAgICAgICAgcTEgPSBzcXJ0KHIxLngqcjEueCArIHIxLnkqcjEueSArIHIxLnoqcjEueiksXG4gICAgICAgICAgcTIgPSBzcXJ0KHIyLngqcjIueCArIHIyLnkqcjIueSArIHIyLnoqcjIueik7XG4gICAgICByMS54IC89IHExOyByMS55IC89IHExOyByMS56IC89IHExO1xuICAgICAgcjIueCAvPSBxMjsgcjIueSAvPSBxMjsgcjIueiAvPSBxMjtcbiAgICAgIC8vIGNyb3NzIHByb2R1Y3RcbiAgICAgIHZhciBjID0ge1xuICAgICAgICB4OiByMi55KnIxLnogLSByMi56KnIxLnksXG4gICAgICAgIHk6IHIyLnoqcjEueCAtIHIyLngqcjEueixcbiAgICAgICAgejogcjIueCpyMS55IC0gcjIueSpyMS54XG4gICAgICB9O1xuICAgICAgdmFyIG0gPSBzcXJ0KGMueCpjLnggKyBjLnkqYy55ICsgYy56KmMueik7XG4gICAgICBjLnggLz0gbTsgYy55IC89IG07IGMueiAvPSBtO1xuICAgICAgLy8gcm90YXRpb24gbWF0cml4XG4gICAgICB2YXIgUiA9IFsgICBjLngqYy54LCAgIGMueCpjLnktYy56LCBjLngqYy56K2MueSxcbiAgICAgICAgICAgICAgICBjLngqYy55K2MueiwgICBjLnkqYy55LCAgIGMueSpjLnotYy54LFxuICAgICAgICAgICAgICAgIGMueCpjLnotYy55LCBjLnkqYy56K2MueCwgICBjLnoqYy56ICAgIF07XG4gICAgICAvLyBub3JtYWwgdmVjdG9yOlxuICAgICAgdmFyIG4gPSB7XG4gICAgICAgIHg6IFJbMF0gKiByMS54ICsgUlsxXSAqIHIxLnkgKyBSWzJdICogcjEueixcbiAgICAgICAgeTogUlszXSAqIHIxLnggKyBSWzRdICogcjEueSArIFJbNV0gKiByMS56LFxuICAgICAgICB6OiBSWzZdICogcjEueCArIFJbN10gKiByMS55ICsgUls4XSAqIHIxLnpcbiAgICAgIH07XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuICAgIGh1bGw6IGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciBwID0gdGhpcy5wb2ludHMsXG4gICAgICAgICAgX3AgPSBbXSxcbiAgICAgICAgICBwdCxcbiAgICAgICAgICBxID0gW10sXG4gICAgICAgICAgaWR4ID0gMCxcbiAgICAgICAgICBpPTAsXG4gICAgICAgICAgbD0wO1xuICAgICAgcVtpZHgrK10gPSBwWzBdO1xuICAgICAgcVtpZHgrK10gPSBwWzFdO1xuICAgICAgcVtpZHgrK10gPSBwWzJdO1xuICAgICAgaWYodGhpcy5vcmRlciA9PT0gMykgeyBxW2lkeCsrXSA9IHBbM107IH1cbiAgICAgIC8vIHdlIGxlcnAgYmV0d2VlbiBhbGwgcG9pbnRzIGF0IGVhY2ggaXRlcmF0aW9uLCB1bnRpbCB3ZSBoYXZlIDEgcG9pbnQgbGVmdC5cbiAgICAgIHdoaWxlKHAubGVuZ3RoPjEpIHtcbiAgICAgICAgX3AgPSBbXTtcbiAgICAgICAgZm9yKGk9MCwgbD1wLmxlbmd0aC0xOyBpPGw7IGkrKykge1xuICAgICAgICAgIHB0ID0gdXRpbHMubGVycCh0LHBbaV0scFtpKzFdKTtcbiAgICAgICAgICBxW2lkeCsrXSA9IHB0O1xuICAgICAgICAgIF9wLnB1c2gocHQpO1xuICAgICAgICB9XG4gICAgICAgIHAgPSBfcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBxO1xuICAgIH0sXG4gICAgc3BsaXQ6IGZ1bmN0aW9uKHQxLCB0Mikge1xuICAgICAgLy8gc2hvcnRjdXRzXG4gICAgICBpZih0MT09PTAgJiYgISF0MikgeyByZXR1cm4gdGhpcy5zcGxpdCh0MikubGVmdDsgfVxuICAgICAgaWYodDI9PT0xKSB7IHJldHVybiB0aGlzLnNwbGl0KHQxKS5yaWdodDsgfVxuXG4gICAgICAvLyBubyBzaG9ydGN1dDogdXNlIFwiZGUgQ2FzdGVsamF1XCIgaXRlcmF0aW9uLlxuICAgICAgdmFyIHEgPSB0aGlzLmh1bGwodDEpO1xuICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgbGVmdDogdGhpcy5vcmRlciA9PT0gMiA/IG5ldyBCZXppZXIoW3FbMF0scVszXSxxWzVdXSkgOiBuZXcgQmV6aWVyKFtxWzBdLHFbNF0scVs3XSxxWzldXSksXG4gICAgICAgIHJpZ2h0OiB0aGlzLm9yZGVyID09PSAyID8gbmV3IEJlemllcihbcVs1XSxxWzRdLHFbMl1dKSA6IG5ldyBCZXppZXIoW3FbOV0scVs4XSxxWzZdLHFbM11dKSxcbiAgICAgICAgc3BhbjogcVxuICAgICAgfTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlIGJpbmQgX3QxL190MiBpbmZvcm1hdGlvbiFcbiAgICAgIHJlc3VsdC5sZWZ0Ll90MSAgPSB1dGlscy5tYXAoMCwgIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuICAgICAgcmVzdWx0LmxlZnQuX3QyICA9IHV0aWxzLm1hcCh0MSwgMCwxLCB0aGlzLl90MSx0aGlzLl90Mik7XG4gICAgICByZXN1bHQucmlnaHQuX3QxID0gdXRpbHMubWFwKHQxLCAwLDEsIHRoaXMuX3QxLHRoaXMuX3QyKTtcbiAgICAgIHJlc3VsdC5yaWdodC5fdDIgPSB1dGlscy5tYXAoMSwgIDAsMSwgdGhpcy5fdDEsdGhpcy5fdDIpO1xuXG4gICAgICAvLyBpZiB3ZSBoYXZlIG5vIHQyLCB3ZSdyZSBkb25lXG4gICAgICBpZighdDIpIHsgcmV0dXJuIHJlc3VsdDsgfVxuXG4gICAgICAvLyBpZiB3ZSBoYXZlIGEgdDIsIHNwbGl0IGFnYWluOlxuICAgICAgdDIgPSB1dGlscy5tYXAodDIsdDEsMSwwLDEpO1xuICAgICAgdmFyIHN1YnNwbGl0ID0gcmVzdWx0LnJpZ2h0LnNwbGl0KHQyKTtcbiAgICAgIHJldHVybiBzdWJzcGxpdC5sZWZ0O1xuICAgIH0sXG4gICAgZXh0cmVtYTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGltcyA9IHRoaXMuZGltcyxcbiAgICAgICAgICByZXN1bHQ9e30sXG4gICAgICAgICAgcm9vdHM9W10sXG4gICAgICAgICAgcCwgbWZuO1xuICAgICAgZGltcy5mb3JFYWNoKGZ1bmN0aW9uKGRpbSkge1xuICAgICAgICBtZm4gPSBmdW5jdGlvbih2KSB7IHJldHVybiB2W2RpbV07IH07XG4gICAgICAgIHAgPSB0aGlzLmRwb2ludHNbMF0ubWFwKG1mbik7XG4gICAgICAgIHJlc3VsdFtkaW1dID0gdXRpbHMuZHJvb3RzKHApO1xuICAgICAgICBpZih0aGlzLm9yZGVyID09PSAzKSB7XG4gICAgICAgICAgcCA9IHRoaXMuZHBvaW50c1sxXS5tYXAobWZuKTtcbiAgICAgICAgICByZXN1bHRbZGltXSA9IHJlc3VsdFtkaW1dLmNvbmNhdCh1dGlscy5kcm9vdHMocCkpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtkaW1dID0gcmVzdWx0W2RpbV0uZmlsdGVyKGZ1bmN0aW9uKHQpIHsgcmV0dXJuICh0Pj0wICYmIHQ8PTEpOyB9KTtcbiAgICAgICAgcm9vdHMgPSByb290cy5jb25jYXQocmVzdWx0W2RpbV0uc29ydCgpKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICByb290cyA9IHJvb3RzLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24odixpZHgpIHsgcmV0dXJuIChyb290cy5pbmRleE9mKHYpID09PSBpZHgpOyB9KTtcbiAgICAgIHJlc3VsdC52YWx1ZXMgPSByb290cztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBiYm94OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBleHRyZW1hID0gdGhpcy5leHRyZW1hKCksIHJlc3VsdCA9IHt9O1xuICAgICAgdGhpcy5kaW1zLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgICByZXN1bHRbZF0gPSB1dGlscy5nZXRtaW5tYXgodGhpcywgZCwgZXh0cmVtYVtkXSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIG92ZXJsYXBzOiBmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgdmFyIGxiYm94ID0gdGhpcy5iYm94KCksXG4gICAgICAgICAgdGJib3ggPSBjdXJ2ZS5iYm94KCk7XG4gICAgICByZXR1cm4gdXRpbHMuYmJveG92ZXJsYXAobGJib3gsdGJib3gpO1xuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbih0LCBkKSB7XG4gICAgICBpZih0eXBlb2YgZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0KHQpO1xuICAgICAgICB2YXIgbiA9IHRoaXMubm9ybWFsKHQpO1xuICAgICAgICB2YXIgcmV0ID0ge1xuICAgICAgICAgIGM6IGMsXG4gICAgICAgICAgbjogbixcbiAgICAgICAgICB4OiBjLnggKyBuLnggKiBkLFxuICAgICAgICAgIHk6IGMueSArIG4ueSAqIGRcbiAgICAgICAgfTtcbiAgICAgICAgaWYodGhpcy5fM2QpIHtcbiAgICAgICAgICByZXQueiA9IGMueiArIG4ueiAqIGQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgICBpZih0aGlzLl9saW5lYXIpIHtcbiAgICAgICAgdmFyIG52ID0gdGhpcy5ub3JtYWwoMCk7XG4gICAgICAgIHZhciBjb29yZHMgPSB0aGlzLnBvaW50cy5tYXAoZnVuY3Rpb24ocCkge1xuICAgICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgICB4OiBwLnggKyB0ICogbnYueCxcbiAgICAgICAgICAgIHk6IHAueSArIHQgKiBudi55XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZihwLnogJiYgbi56KSB7IHJldC56ID0gcC56ICsgdCAqIG52Lno7IH1cbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtuZXcgQmV6aWVyKGNvb3JkcyldO1xuICAgICAgfVxuICAgICAgdmFyIHJlZHVjZWQgPSB0aGlzLnJlZHVjZSgpO1xuICAgICAgcmV0dXJuIHJlZHVjZWQubWFwKGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIHMuc2NhbGUodCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNpbXBsZTogZnVuY3Rpb24oKSB7XG4gICAgICBpZih0aGlzLm9yZGVyPT09Mykge1xuICAgICAgICB2YXIgYTEgPSB1dGlscy5hbmdsZSh0aGlzLnBvaW50c1swXSwgdGhpcy5wb2ludHNbM10sIHRoaXMucG9pbnRzWzFdKTtcbiAgICAgICAgdmFyIGEyID0gdXRpbHMuYW5nbGUodGhpcy5wb2ludHNbMF0sIHRoaXMucG9pbnRzWzNdLCB0aGlzLnBvaW50c1syXSk7XG4gICAgICAgIGlmKGExPjAgJiYgYTI8MCB8fCBhMTwwICYmIGEyPjApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBuMSA9IHRoaXMubm9ybWFsKDApO1xuICAgICAgdmFyIG4yID0gdGhpcy5ub3JtYWwoMSk7XG4gICAgICB2YXIgcyA9IG4xLngqbjIueCArIG4xLnkqbjIueTtcbiAgICAgIGlmKHRoaXMuXzNkKSB7IHMgKz0gbjEueipuMi56OyB9XG4gICAgICB2YXIgYW5nbGUgPSBhYnMoYWNvcyhzKSk7XG4gICAgICByZXR1cm4gYW5nbGUgPCBwaS8zO1xuICAgIH0sXG4gICAgcmVkdWNlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpLCB0MT0wLCB0Mj0wLCBzdGVwPTAuMDEsIHNlZ21lbnQsIHBhc3MxPVtdLCBwYXNzMj1bXTtcbiAgICAgIC8vIGZpcnN0IHBhc3M6IHNwbGl0IG9uIGV4dHJlbWFcbiAgICAgIHZhciBleHRyZW1hID0gdGhpcy5leHRyZW1hKCkudmFsdWVzO1xuICAgICAgaWYoZXh0cmVtYS5pbmRleE9mKDApPT09LTEpIHsgZXh0cmVtYSA9IFswXS5jb25jYXQoZXh0cmVtYSk7IH1cbiAgICAgIGlmKGV4dHJlbWEuaW5kZXhPZigxKT09PS0xKSB7IGV4dHJlbWEucHVzaCgxKTsgfVxuXG4gICAgICBmb3IodDE9ZXh0cmVtYVswXSwgaT0xOyBpPGV4dHJlbWEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdDIgPSBleHRyZW1hW2ldO1xuICAgICAgICBzZWdtZW50ID0gdGhpcy5zcGxpdCh0MSx0Mik7XG4gICAgICAgIHNlZ21lbnQuX3QxID0gdDE7XG4gICAgICAgIHNlZ21lbnQuX3QyID0gdDI7XG4gICAgICAgIHBhc3MxLnB1c2goc2VnbWVudCk7XG4gICAgICAgIHQxID0gdDI7XG4gICAgICB9XG5cbiAgICAgIC8vIHNlY29uZCBwYXNzOiBmdXJ0aGVyIHJlZHVjZSB0aGVzZSBzZWdtZW50cyB0byBzaW1wbGUgc2VnbWVudHNcbiAgICAgIHBhc3MxLmZvckVhY2goZnVuY3Rpb24ocDEpIHtcbiAgICAgICAgdDE9MDtcbiAgICAgICAgdDI9MDtcbiAgICAgICAgd2hpbGUodDIgPD0gMSkge1xuICAgICAgICAgIGZvcih0Mj10MStzdGVwOyB0Mjw9MStzdGVwOyB0Mis9c3RlcCkge1xuICAgICAgICAgICAgc2VnbWVudCA9IHAxLnNwbGl0KHQxLHQyKTtcbiAgICAgICAgICAgIGlmKCFzZWdtZW50LnNpbXBsZSgpKSB7XG4gICAgICAgICAgICAgIHQyIC09IHN0ZXA7XG4gICAgICAgICAgICAgIGlmKGFicyh0MS10Mik8c3RlcCkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGNhbiBuZXZlciBmb3JtIGEgcmVkdWN0aW9uXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSx0Mik7XG4gICAgICAgICAgICAgIHNlZ21lbnQuX3QxID0gdXRpbHMubWFwKHQxLDAsMSxwMS5fdDEscDEuX3QyKTtcbiAgICAgICAgICAgICAgc2VnbWVudC5fdDIgPSB1dGlscy5tYXAodDIsMCwxLHAxLl90MSxwMS5fdDIpO1xuICAgICAgICAgICAgICBwYXNzMi5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICB0MSA9IHQyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYodDE8MSkge1xuICAgICAgICAgIHNlZ21lbnQgPSBwMS5zcGxpdCh0MSwxKTtcbiAgICAgICAgICBzZWdtZW50Ll90MSA9IHV0aWxzLm1hcCh0MSwwLDEscDEuX3QxLHAxLl90Mik7XG4gICAgICAgICAgc2VnbWVudC5fdDIgPSBwMS5fdDI7XG4gICAgICAgICAgcGFzczIucHVzaChzZWdtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcGFzczI7XG4gICAgfSxcbiAgICBzY2FsZTogZnVuY3Rpb24oZCkge1xuICAgICAgdmFyIG9yZGVyID0gdGhpcy5vcmRlcjtcbiAgICAgIHZhciBkaXN0YW5jZUZuID0gZmFsc2VcbiAgICAgIGlmKHR5cGVvZiBkID09PSBcImZ1bmN0aW9uXCIpIHsgZGlzdGFuY2VGbiA9IGQ7IH1cbiAgICAgIGlmKGRpc3RhbmNlRm4gJiYgb3JkZXIgPT09IDIpIHsgcmV0dXJuIHRoaXMucmFpc2UoKS5zY2FsZShkaXN0YW5jZUZuKTsgfVxuXG4gICAgICAvLyBUT0RPOiBhZGQgc3BlY2lhbCBoYW5kbGluZyBmb3IgZGVnZW5lcmF0ZSAoPWxpbmVhcikgY3VydmVzLlxuICAgICAgdmFyIGNsb2Nrd2lzZSA9IHRoaXMuY2xvY2t3aXNlO1xuICAgICAgdmFyIHIxID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oMCkgOiBkO1xuICAgICAgdmFyIHIyID0gZGlzdGFuY2VGbiA/IGRpc3RhbmNlRm4oMSkgOiBkO1xuICAgICAgdmFyIHYgPSBbIHRoaXMub2Zmc2V0KDAsMTApLCB0aGlzLm9mZnNldCgxLDEwKSBdO1xuICAgICAgdmFyIG8gPSB1dGlscy5sbGk0KHZbMF0sIHZbMF0uYywgdlsxXSwgdlsxXS5jKTtcbiAgICAgIGlmKCFvKSB7IHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBzY2FsZSB0aGlzIGN1cnZlLiBUcnkgcmVkdWNpbmcgaXQgZmlyc3QuXCIpOyB9XG4gICAgICAvLyBtb3ZlIGFsbCBwb2ludHMgYnkgZGlzdGFuY2UgJ2QnIHdydCB0aGUgb3JpZ2luICdvJ1xuICAgICAgdmFyIHBvaW50cz10aGlzLnBvaW50cywgbnA9W107XG5cbiAgICAgIC8vIG1vdmUgZW5kIHBvaW50cyBieSBmaXhlZCBkaXN0YW5jZSBhbG9uZyBub3JtYWwuXG4gICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHAgPSBucFt0Km9yZGVyXSA9IHV0aWxzLmNvcHkocG9pbnRzW3Qqb3JkZXJdKTtcbiAgICAgICAgcC54ICs9ICh0P3IyOnIxKSAqIHZbdF0ubi54O1xuICAgICAgICBwLnkgKz0gKHQ/cjI6cjEpICogdlt0XS5uLnk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICBpZiAoIWRpc3RhbmNlRm4pIHtcbiAgICAgICAgLy8gbW92ZSBjb250cm9sIHBvaW50cyB0byBsaWUgb24gdGhlIGludGVyc2VjdGlvbiBvZiB0aGUgb2Zmc2V0XG4gICAgICAgIC8vIGRlcml2YXRpdmUgdmVjdG9yLCBhbmQgdGhlIG9yaWdpbi10aHJvdWdoLWNvbnRyb2wgdmVjdG9yXG4gICAgICAgIFswLDFdLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgIGlmKHRoaXMub3JkZXI9PT0yICYmICEhdCkgcmV0dXJuO1xuICAgICAgICAgIHZhciBwID0gbnBbdCpvcmRlcl07XG4gICAgICAgICAgdmFyIGQgPSB0aGlzLmRlcml2YXRpdmUodCk7XG4gICAgICAgICAgdmFyIHAyID0geyB4OiBwLnggKyBkLngsIHk6IHAueSArIGQueSB9O1xuICAgICAgICAgIG5wW3QrMV0gPSB1dGlscy5sbGk0KHAsIHAyLCBvLCBwb2ludHNbdCsxXSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICAgIH1cblxuICAgICAgLy8gbW92ZSBjb250cm9sIHBvaW50cyBieSBcImhvd2V2ZXIgbXVjaCBuZWNlc3NhcnkgdG9cbiAgICAgIC8vIGVuc3VyZSB0aGUgY29ycmVjdCB0YW5nZW50IHRvIGVuZHBvaW50XCIuXG4gICAgICBbMCwxXS5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYodGhpcy5vcmRlcj09PTIgJiYgISF0KSByZXR1cm47XG4gICAgICAgIHZhciBwID0gcG9pbnRzW3QrMV07XG4gICAgICAgIHZhciBvdiA9IHtcbiAgICAgICAgICB4OiBwLnggLSBvLngsXG4gICAgICAgICAgeTogcC55IC0gby55XG4gICAgICAgIH07XG4gICAgICAgIHZhciByYyA9IGRpc3RhbmNlRm4gPyBkaXN0YW5jZUZuKCh0KzEpL29yZGVyKSA6IGQ7XG4gICAgICAgIGlmKGRpc3RhbmNlRm4gJiYgIWNsb2Nrd2lzZSkgcmMgPSAtcmM7XG4gICAgICAgIHZhciBtID0gc3FydChvdi54Km92LnggKyBvdi55Km92LnkpO1xuICAgICAgICBvdi54IC89IG07XG4gICAgICAgIG92LnkgLz0gbTtcbiAgICAgICAgbnBbdCsxXSA9IHtcbiAgICAgICAgICB4OiBwLnggKyByYypvdi54LFxuICAgICAgICAgIHk6IHAueSArIHJjKm92LnlcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybiBuZXcgQmV6aWVyKG5wKTtcbiAgICB9LFxuICAgIG91dGxpbmU6IGZ1bmN0aW9uKGQxLCBkMiwgZDMsIGQ0KSB7XG4gICAgICBkMiA9ICh0eXBlb2YgZDIgPT09IFwidW5kZWZpbmVkXCIpID8gZDEgOiBkMjtcbiAgICAgIHZhciByZWR1Y2VkID0gdGhpcy5yZWR1Y2UoKSxcbiAgICAgICAgICBsZW4gPSByZWR1Y2VkLmxlbmd0aCxcbiAgICAgICAgICBmY3VydmVzID0gW10sXG4gICAgICAgICAgYmN1cnZlcyA9IFtdLFxuICAgICAgICAgIHAsXG4gICAgICAgICAgYWxlbiA9IDAsXG4gICAgICAgICAgdGxlbiA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIHZhciBncmFkdWF0ZWQgPSAodHlwZW9mIGQzICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBkNCAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgICAgIGZ1bmN0aW9uIGxpbmVhckRpc3RhbmNlRnVuY3Rpb24ocyxlLCB0bGVuLGFsZW4sc2xlbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICB2YXIgZjEgPSBhbGVuL3RsZW4sIGYyID0gKGFsZW4rc2xlbikvdGxlbiwgZCA9IGUtcztcbiAgICAgICAgICByZXR1cm4gdXRpbHMubWFwKHYsIDAsMSwgcytmMSpkLCBzK2YyKmQpO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLy8gZm9ybSBjdXJ2ZSBvdWxpbmVzXG4gICAgICByZWR1Y2VkLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICBzbGVuID0gc2VnbWVudC5sZW5ndGgoKTtcbiAgICAgICAgaWYgKGdyYWR1YXRlZCkge1xuICAgICAgICAgIGZjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKCAgbGluZWFyRGlzdGFuY2VGdW5jdGlvbiggZDEsIGQzLCB0bGVuLGFsZW4sc2xlbikgICkpO1xuICAgICAgICAgIGJjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKCAgbGluZWFyRGlzdGFuY2VGdW5jdGlvbigtZDIsLWQ0LCB0bGVuLGFsZW4sc2xlbikgICkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKCBkMSkpO1xuICAgICAgICAgIGJjdXJ2ZXMucHVzaChzZWdtZW50LnNjYWxlKC1kMikpO1xuICAgICAgICB9XG4gICAgICAgIGFsZW4gKz0gc2xlbjtcbiAgICAgIH0pO1xuXG4gICAgICAvLyByZXZlcnNlIHRoZSBcInJldHVyblwiIG91dGxpbmVcbiAgICAgIGJjdXJ2ZXMgPSBiY3VydmVzLm1hcChmdW5jdGlvbihzKSB7XG4gICAgICAgIHAgPSBzLnBvaW50cztcbiAgICAgICAgaWYocFszXSkgeyBzLnBvaW50cyA9IFtwWzNdLHBbMl0scFsxXSxwWzBdXTsgfVxuICAgICAgICBlbHNlIHsgcy5wb2ludHMgPSBbcFsyXSxwWzFdLHBbMF1dOyB9XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSkucmV2ZXJzZSgpO1xuXG4gICAgICAvLyBmb3JtIHRoZSBlbmRjYXBzIGFzIGxpbmVzXG4gICAgICB2YXIgZnMgPSBmY3VydmVzWzBdLnBvaW50c1swXSxcbiAgICAgICAgICBmZSA9IGZjdXJ2ZXNbbGVuLTFdLnBvaW50c1tmY3VydmVzW2xlbi0xXS5wb2ludHMubGVuZ3RoLTFdLFxuICAgICAgICAgIGJzID0gYmN1cnZlc1tsZW4tMV0ucG9pbnRzW2JjdXJ2ZXNbbGVuLTFdLnBvaW50cy5sZW5ndGgtMV0sXG4gICAgICAgICAgYmUgPSBiY3VydmVzWzBdLnBvaW50c1swXSxcbiAgICAgICAgICBscyA9IHV0aWxzLm1ha2VsaW5lKGJzLGZzKSxcbiAgICAgICAgICBsZSA9IHV0aWxzLm1ha2VsaW5lKGZlLGJlKSxcbiAgICAgICAgICBzZWdtZW50cyA9IFtsc10uY29uY2F0KGZjdXJ2ZXMpLmNvbmNhdChbbGVdKS5jb25jYXQoYmN1cnZlcyksXG4gICAgICAgICAgc2xlbiA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICAgICAgcmV0dXJuIG5ldyBQb2x5QmV6aWVyKHNlZ21lbnRzKTtcbiAgICB9LFxuICAgIG91dGxpbmVzaGFwZXM6IGZ1bmN0aW9uKGQxLCBkMiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGQyID0gZDIgfHwgZDE7XG4gICAgICB2YXIgb3V0bGluZSA9IHRoaXMub3V0bGluZShkMSxkMikuY3VydmVzO1xuICAgICAgdmFyIHNoYXBlcyA9IFtdO1xuICAgICAgZm9yKHZhciBpPTEsIGxlbj1vdXRsaW5lLmxlbmd0aDsgaSA8IGxlbi8yOyBpKyspIHtcbiAgICAgICAgdmFyIHNoYXBlID0gdXRpbHMubWFrZXNoYXBlKG91dGxpbmVbaV0sIG91dGxpbmVbbGVuLWldLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIHNoYXBlLnN0YXJ0Y2FwLnZpcnR1YWwgPSAoaSA+IDEpO1xuICAgICAgICBzaGFwZS5lbmRjYXAudmlydHVhbCA9IChpIDwgbGVuLzItMSk7XG4gICAgICAgIHNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGFwZXM7XG4gICAgfSxcbiAgICBpbnRlcnNlY3RzOiBmdW5jdGlvbihjdXJ2ZSwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGlmKCFjdXJ2ZSkgcmV0dXJuIHRoaXMuc2VsZmludGVyc2VjdHMoY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgaWYoY3VydmUucDEgJiYgY3VydmUucDIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUludGVyc2VjdHMoY3VydmUpO1xuICAgICAgfVxuICAgICAgaWYoY3VydmUgaW5zdGFuY2VvZiBCZXppZXIpIHsgY3VydmUgPSBjdXJ2ZS5yZWR1Y2UoKTsgfVxuICAgICAgcmV0dXJuIHRoaXMuY3VydmVpbnRlcnNlY3RzKHRoaXMucmVkdWNlKCksIGN1cnZlLCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgfSxcbiAgICBsaW5lSW50ZXJzZWN0czogZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIG14ID0gbWluKGxpbmUucDEueCwgbGluZS5wMi54KSxcbiAgICAgICAgICBteSA9IG1pbihsaW5lLnAxLnksIGxpbmUucDIueSksXG4gICAgICAgICAgTVggPSBtYXgobGluZS5wMS54LCBsaW5lLnAyLngpLFxuICAgICAgICAgIE1ZID0gbWF4KGxpbmUucDEueSwgbGluZS5wMi55KSxcbiAgICAgICAgICBzZWxmPXRoaXM7XG4gICAgICByZXR1cm4gdXRpbHMucm9vdHModGhpcy5wb2ludHMsIGxpbmUpLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBwID0gc2VsZi5nZXQodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5iZXR3ZWVuKHAueCwgbXgsIE1YKSAmJiB1dGlscy5iZXR3ZWVuKHAueSwgbXksIE1ZKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2VsZmludGVyc2VjdHM6IGZ1bmN0aW9uKGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgcmVkdWNlZCA9IHRoaXMucmVkdWNlKCk7XG4gICAgICAvLyBcInNpbXBsZVwiIGN1cnZlcyBjYW5ub3QgaW50ZXJzZWN0IHdpdGggdGhlaXIgZGlyZWN0XG4gICAgICAvLyBuZWlnaGJvdXIsIHNvIGZvciBlYWNoIHNlZ21lbnQgWCB3ZSBjaGVjayB3aGV0aGVyXG4gICAgICAvLyBpdCBpbnRlcnNlY3RzIFswOngtMl1beCsyOmxhc3RdLlxuICAgICAgdmFyIGksbGVuPXJlZHVjZWQubGVuZ3RoLTIscmVzdWx0cz1bXSxyZXN1bHQsbGVmdCxyaWdodDtcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgbGVmdCA9IHJlZHVjZWQuc2xpY2UoaSxpKzEpO1xuICAgICAgICByaWdodCA9IHJlZHVjZWQuc2xpY2UoaSsyKTtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5jdXJ2ZWludGVyc2VjdHMobGVmdCwgcmlnaHQsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KCByZXN1bHQgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG4gICAgY3VydmVpbnRlcnNlY3RzOiBmdW5jdGlvbihjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICAgIC8vIHN0ZXAgMTogcGFpciBvZmYgYW55IG92ZXJsYXBwaW5nIHNlZ21lbnRzXG4gICAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgYzIuZm9yRWFjaChmdW5jdGlvbihyKSB7XG4gICAgICAgICAgaWYobC5vdmVybGFwcyhyKSkge1xuICAgICAgICAgICAgcGFpcnMucHVzaCh7IGxlZnQ6IGwsIHJpZ2h0OiByIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIC8vIHN0ZXAgMjogZm9yIGVhY2ggcGFpcmluZywgcnVuIHRocm91Z2ggdGhlIGNvbnZlcmdlbmNlIGFsZ29yaXRobS5cbiAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gW107XG4gICAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHV0aWxzLnBhaXJpdGVyYXRpb24ocGFpci5sZWZ0LCBwYWlyLnJpZ2h0LCBjdXJ2ZUludGVyc2VjdGlvblRocmVzaG9sZCk7XG4gICAgICAgIGlmKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuY29uY2F0KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gICAgfSxcbiAgICBhcmNzOiBmdW5jdGlvbihlcnJvclRocmVzaG9sZCkge1xuICAgICAgZXJyb3JUaHJlc2hvbGQgPSBlcnJvclRocmVzaG9sZCB8fCAwLjU7XG4gICAgICB2YXIgY2lyY2xlcyA9IFtdO1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZXJhdGUoZXJyb3JUaHJlc2hvbGQsIGNpcmNsZXMpO1xuICAgIH0sXG4gICAgX2Vycm9yOiBmdW5jdGlvbihwYywgbnAxLCBzLCBlKSB7XG4gICAgICB2YXIgcSA9IChlIC0gcykgLyA0LFxuICAgICAgICAgIGMxID0gdGhpcy5nZXQocyArIHEpLFxuICAgICAgICAgIGMyID0gdGhpcy5nZXQoZSAtIHEpLFxuICAgICAgICAgIHJlZiA9IHV0aWxzLmRpc3QocGMsIG5wMSksXG4gICAgICAgICAgZDEgID0gdXRpbHMuZGlzdChwYywgYzEpLFxuICAgICAgICAgIGQyICA9IHV0aWxzLmRpc3QocGMsIGMyKTtcbiAgICAgIHJldHVybiBhYnMoZDEtcmVmKSArIGFicyhkMi1yZWYpO1xuICAgIH0sXG4gICAgX2l0ZXJhdGU6IGZ1bmN0aW9uKGVycm9yVGhyZXNob2xkLCBjaXJjbGVzKSB7XG4gICAgICB2YXIgcyA9IDAsIGUgPSAxLCBzYWZldHk7XG4gICAgICAvLyB3ZSBkbyBhIGJpbmFyeSBzZWFyY2ggdG8gZmluZCB0aGUgXCJnb29kIGB0YCBjbG9zZXN0IHRvIG5vLWxvbmdlci1nb29kXCJcbiAgICAgIGRvIHtcbiAgICAgICAgc2FmZXR5PTA7XG5cbiAgICAgICAgLy8gc3RlcCAxOiBzdGFydCB3aXRoIHRoZSBtYXhpbXVtIHBvc3NpYmxlIGFyY1xuICAgICAgICBlID0gMTtcblxuICAgICAgICAvLyBwb2ludHM6XG4gICAgICAgIHZhciBucDEgPSB0aGlzLmdldChzKSwgbnAyLCBucDMsIGFyYywgcHJldl9hcmM7XG5cbiAgICAgICAgLy8gYm9vbGVhbnM6XG4gICAgICAgIHZhciBjdXJyX2dvb2QgPSBmYWxzZSwgcHJldl9nb29kID0gZmFsc2UsIGRvbmU7XG5cbiAgICAgICAgLy8gbnVtYmVyczpcbiAgICAgICAgdmFyIG0gPSBlLCBwcmV2X2UgPSAxLCBzdGVwID0gMDtcblxuICAgICAgICAvLyBzdGVwIDI6IGZpbmQgdGhlIGJlc3QgcG9zc2libGUgYXJjXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBwcmV2X2dvb2QgPSBjdXJyX2dvb2Q7XG4gICAgICAgICAgcHJldl9hcmMgPSBhcmM7XG4gICAgICAgICAgbSA9IChzICsgZSkvMjtcbiAgICAgICAgICBzdGVwKys7XG5cbiAgICAgICAgICBucDIgPSB0aGlzLmdldChtKTtcbiAgICAgICAgICBucDMgPSB0aGlzLmdldChlKTtcblxuICAgICAgICAgIGFyYyA9IHV0aWxzLmdldGNjZW50ZXIobnAxLCBucDIsIG5wMyk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy9hbHNvIHNhdmUgdGhlIHQgdmFsdWVzXG4gICAgICAgICAgYXJjLmludGVydmFsID0ge1xuICAgICAgICAgICAgc3RhcnQ6IHMsXG4gICAgICAgICAgICBlbmQ6IGVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGVycm9yID0gdGhpcy5fZXJyb3IoYXJjLCBucDEsIHMsIGUpO1xuICAgICAgICAgIGN1cnJfZ29vZCA9IChlcnJvciA8PSBlcnJvclRocmVzaG9sZCk7XG5cbiAgICAgICAgICBkb25lID0gcHJldl9nb29kICYmICFjdXJyX2dvb2Q7XG4gICAgICAgICAgaWYoIWRvbmUpIHByZXZfZSA9IGU7XG5cbiAgICAgICAgICAvLyB0aGlzIGFyYyBpcyBmaW5lOiB3ZSBjYW4gbW92ZSAnZScgdXAgdG8gc2VlIGlmIHdlIGNhbiBmaW5kIGEgd2lkZXIgYXJjXG4gICAgICAgICAgaWYoY3Vycl9nb29kKSB7XG4gICAgICAgICAgICAvLyBpZiBlIGlzIGFscmVhZHkgYXQgbWF4LCB0aGVuIHdlJ3JlIGRvbmUgZm9yIHRoaXMgYXJjLlxuICAgICAgICAgICAgaWYgKGUgPj0gMSkge1xuICAgICAgICAgICAgICBwcmV2X2UgPSAxO1xuICAgICAgICAgICAgICBwcmV2X2FyYyA9IGFyYztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBub3QsIG1vdmUgaXQgdXAgYnkgaGFsZiB0aGUgaXRlcmF0aW9uIGRpc3RhbmNlXG4gICAgICAgICAgICBlID0gZSArIChlLXMpLzI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gdGhpcyBpcyBhIGJhZCBhcmM6IHdlIG5lZWQgdG8gbW92ZSAnZScgZG93biB0byBmaW5kIGEgZ29vZCBhcmNcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGUgPSBtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aGlsZSghZG9uZSAmJiBzYWZldHkrKzwxMDApO1xuXG4gICAgICAgIGlmKHNhZmV0eT49MTAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcImFyYyBhYnN0cmFjdGlvbiBzb21laG93IGZhaWxlZC4uLlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiW0ZdIGFyYyBmb3VuZFwiLCBzLCBwcmV2X2UsIHByZXZfYXJjLngsIHByZXZfYXJjLnksIHByZXZfYXJjLnMsIHByZXZfYXJjLmUpO1xuXG4gICAgICAgIHByZXZfYXJjID0gKHByZXZfYXJjID8gcHJldl9hcmMgOiBhcmMpO1xuICAgICAgICBjaXJjbGVzLnB1c2gocHJldl9hcmMpO1xuICAgICAgICBzID0gcHJldl9lO1xuICAgICAgfVxuICAgICAgd2hpbGUoZSA8IDEpO1xuICAgICAgcmV0dXJuIGNpcmNsZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgdXRpbHMgPSByZXF1aXJlKDYzKTtcblxuICAvKipcbiAgICogUG9seSBCZXppZXJcbiAgICogQHBhcmFtIHtbdHlwZV19IGN1cnZlcyBbZGVzY3JpcHRpb25dXG4gICAqL1xuICB2YXIgUG9seUJlemllciA9IGZ1bmN0aW9uKGN1cnZlcykge1xuICAgIHRoaXMuY3VydmVzID0gW107XG4gICAgdGhpcy5fM2QgPSBmYWxzZTtcbiAgICBpZighIWN1cnZlcykge1xuICAgICAgdGhpcy5jdXJ2ZXMgPSBjdXJ2ZXM7XG4gICAgICB0aGlzLl8zZCA9IHRoaXMuY3VydmVzWzBdLl8zZDtcbiAgICB9XG4gIH1cblxuICBQb2x5QmV6aWVyLnByb3RvdHlwZSA9IHtcbiAgICB2YWx1ZU9mOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdXRpbHMucG9pbnRzVG9TdHJpbmcodGhpcy5wb2ludHMpO1xuICAgIH0sXG4gICAgYWRkQ3VydmU6IGZ1bmN0aW9uKGN1cnZlKSB7XG4gICAgICB0aGlzLmN1cnZlcy5wdXNoKGN1cnZlKTtcbiAgICAgIHRoaXMuXzNkID0gdGhpcy5fM2QgfHwgY3VydmUuXzNkO1xuICAgIH0sXG4gICAgbGVuZ3RoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlcy5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi5sZW5ndGgoKTsgfSkucmVkdWNlKGZ1bmN0aW9uKGEsYikgeyByZXR1cm4gYStiOyB9KTtcbiAgICB9LFxuICAgIGN1cnZlOiBmdW5jdGlvbihpZHgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnZlc1tpZHhdO1xuICAgIH0sXG4gICAgYmJveDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuY3VydmVzO1xuICAgICAgdmFyIGJib3ggPSBjWzBdLmJib3goKTtcbiAgICAgIGZvcih2YXIgaT0xOyBpPGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXRpbHMuZXhwYW5kYm94KGJib3gsIGNbaV0uYmJveCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYm94O1xuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihkKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gW107XG4gICAgICB0aGlzLmN1cnZlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0LmNvbmNhdCh2Lm9mZnNldChkKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUG9seUJlemllcihvZmZzZXQpO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFBvbHlCZXppZXI7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBtYXRoLWlubGluaW5nLlxuICB2YXIgYWJzID0gTWF0aC5hYnMsXG4gICAgICBjb3MgPSBNYXRoLmNvcyxcbiAgICAgIHNpbiA9IE1hdGguc2luLFxuICAgICAgYWNvcyA9IE1hdGguYWNvcyxcbiAgICAgIGF0YW4yID0gTWF0aC5hdGFuMixcbiAgICAgIHNxcnQgPSBNYXRoLnNxcnQsXG4gICAgICBwb3cgPSBNYXRoLnBvdyxcbiAgICAgIC8vIGN1YmUgcm9vdCBmdW5jdGlvbiB5aWVsZGluZyByZWFsIHJvb3RzXG4gICAgICBjcnQgPSBmdW5jdGlvbih2KSB7IHJldHVybiAodjwwKSA/IC1wb3coLXYsMS8zKSA6IHBvdyh2LDEvMyk7IH0sXG4gICAgICAvLyB0cmlnIGNvbnN0YW50c1xuICAgICAgcGkgPSBNYXRoLlBJLFxuICAgICAgdGF1ID0gMipwaSxcbiAgICAgIHF1YXJ0ID0gcGkvMixcbiAgICAgIC8vIGZsb2F0IHByZWNpc2lvbiBzaWduaWZpY2FudCBkZWNpbWFsXG4gICAgICBlcHNpbG9uID0gMC4wMDAwMDE7XG5cbiAgLy8gQmV6aWVyIHV0aWxpdHkgZnVuY3Rpb25zXG4gIHZhciB1dGlscyA9IHtcbiAgICAvLyBMZWdlbmRyZS1HYXVzcyBhYnNjaXNzYWUgd2l0aCBuPTI0ICh4X2kgdmFsdWVzLCBkZWZpbmVkIGF0IGk9biBhcyB0aGUgcm9vdHMgb2YgdGhlIG50aCBvcmRlciBMZWdlbmRyZSBwb2x5bm9taWFsIFBuKHgpKVxuICAgIFR2YWx1ZXM6IFtcbiAgICAgIC0wLjA2NDA1Njg5Mjg2MjYwNTYyNjA4NTA0MzA4MjYyNDc0NTAzODU5MDksXG4gICAgICAgMC4wNjQwNTY4OTI4NjI2MDU2MjYwODUwNDMwODI2MjQ3NDUwMzg1OTA5LFxuICAgICAgLTAuMTkxMTE4ODY3NDczNjE2MzA5MTU4NjM5ODIwNzU3MDY5NjMxODQwNCxcbiAgICAgICAwLjE5MTExODg2NzQ3MzYxNjMwOTE1ODYzOTgyMDc1NzA2OTYzMTg0MDQsXG4gICAgICAtMC4zMTUwNDI2Nzk2OTYxNjMzNzQzODY3OTMyOTEzMTk4MTAyNDA3ODY0LFxuICAgICAgIDAuMzE1MDQyNjc5Njk2MTYzMzc0Mzg2NzkzMjkxMzE5ODEwMjQwNzg2NCxcbiAgICAgIC0wLjQzMzc5MzUwNzYyNjA0NTEzODQ4NzA4NDIzMTkxMzM0OTcxMjQ1MjQsXG4gICAgICAgMC40MzM3OTM1MDc2MjYwNDUxMzg0ODcwODQyMzE5MTMzNDk3MTI0NTI0LFxuICAgICAgLTAuNTQ1NDIxNDcxMzg4ODM5NTM1NjU4Mzc1NjE3MjE4MzcyMzcwMDEwNyxcbiAgICAgICAwLjU0NTQyMTQ3MTM4ODgzOTUzNTY1ODM3NTYxNzIxODM3MjM3MDAxMDcsXG4gICAgICAtMC42NDgwOTM2NTE5MzY5NzU1NjkyNTI0OTU3ODY5MTA3NDc2MjY2Njk2LFxuICAgICAgIDAuNjQ4MDkzNjUxOTM2OTc1NTY5MjUyNDk1Nzg2OTEwNzQ3NjI2NjY5NixcbiAgICAgIC0wLjc0MDEyNDE5MTU3ODU1NDM2NDI0MzgyODEwMzA5OTk3ODQyNTUyMzIsXG4gICAgICAgMC43NDAxMjQxOTE1Nzg1NTQzNjQyNDM4MjgxMDMwOTk5Nzg0MjU1MjMyLFxuICAgICAgLTAuODIwMDAxOTg1OTczOTAyOTIxOTUzOTQ5ODcyNjY5NzQ1MjA4MDc2MSxcbiAgICAgICAwLjgyMDAwMTk4NTk3MzkwMjkyMTk1Mzk0OTg3MjY2OTc0NTIwODA3NjEsXG4gICAgICAtMC44ODY0MTU1MjcwMDQ0MDEwMzQyMTMxNTQzNDE5ODIxOTY3NTUwODczLFxuICAgICAgIDAuODg2NDE1NTI3MDA0NDAxMDM0MjEzMTU0MzQxOTgyMTk2NzU1MDg3MyxcbiAgICAgIC0wLjkzODI3NDU1MjAwMjczMjc1ODUyMzY0OTAwMTcwODcyMTQ0OTY1NDgsXG4gICAgICAgMC45MzgyNzQ1NTIwMDI3MzI3NTg1MjM2NDkwMDE3MDg3MjE0NDk2NTQ4LFxuICAgICAgLTAuOTc0NzI4NTU1OTcxMzA5NDk4MTk4MzkxOTkzMDA4MTY5MDYxNzQxMSxcbiAgICAgICAwLjk3NDcyODU1NTk3MTMwOTQ5ODE5ODM5MTk5MzAwODE2OTA2MTc0MTEsXG4gICAgICAtMC45OTUxODcyMTk5OTcwMjEzNjAxNzk5OTc0MDk3MDA3MzY4MTE4NzQ1LFxuICAgICAgIDAuOTk1MTg3MjE5OTk3MDIxMzYwMTc5OTk3NDA5NzAwNzM2ODExODc0NVxuICAgIF0sXG5cbiAgICAvLyBMZWdlbmRyZS1HYXVzcyB3ZWlnaHRzIHdpdGggbj0yNCAod19pIHZhbHVlcywgZGVmaW5lZCBieSBhIGZ1bmN0aW9uIGxpbmtlZCB0byBpbiB0aGUgQmV6aWVyIHByaW1lciBhcnRpY2xlKVxuICAgIEN2YWx1ZXM6IFtcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI3OTM4MTk1MzQ2NzUyMTU2OTc0MDU2MTY1MjI0Njk1MzcxODUxNyxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTI1ODM3NDU2MzQ2ODI4Mjk2MTIxMzc1MzgyNTExMTgzNjg4NzI2NCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTIxNjcwNDcyOTI3ODAzMzkxMjA0NDYzMTUzNDc2MjYyNDI1NjA3MCxcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTE1NTA1NjY4MDUzNzI1NjAxMzUzMzQ0NDgzOTA2NzgzNTU5ODYyMixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMTA3NDQ0MjcwMTE1OTY1NjM0NzgyNTc3MzQyNDQ2NjA2MjIyNzk0NixcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDk3NjE4NjUyMTA0MTEzODg4MjY5ODgwNjY0NDY0MjQ3MTU0NDI3OSxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDg2MTkwMTYxNTMxOTUzMjc1OTE3MTg1MjAyOTgzNzQyNjY3MTg1MCxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDczMzQ2NDgxNDExMDgwMzA1NzM0MDMzNjE1MjUzMTE2NTE4MTE5MyxcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDU5Mjk4NTg0OTE1NDM2NzgwNzQ2MzY3NzU4NTAwMTA4NTg0NTQxMixcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDQ0Mjc3NDM4ODE3NDE5ODA2MTY4NjAyNzQ4MjExMzM4MjI4ODU5MyxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDI4NTMxMzg4NjI4OTMzNjYzMTgxMzA3ODE1OTUxODc4Mjg2NDQ5MSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OSxcbiAgICAgIDAuMDEyMzQxMjI5Nzk5OTg3MTk5NTQ2ODA1NjY3MDcwMDM3MjkxNTc1OVxuICAgIF0sXG5cbiAgICBhcmNmbjogZnVuY3Rpb24odCwgZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgZCA9IGRlcml2YXRpdmVGbih0KTtcbiAgICAgIHZhciBsID0gZC54KmQueCArIGQueSpkLnk7XG4gICAgICBpZih0eXBlb2YgZC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGwgKz0gZC56KmQuejtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzcXJ0KGwpO1xuICAgIH0sXG5cbiAgICBiZXR3ZWVuOiBmdW5jdGlvbih2LCBtLCBNKSB7XG4gICAgICByZXR1cm4gKG0gPD0gdiAmJiB2IDw9IE0pIHx8IHV0aWxzLmFwcHJveGltYXRlbHkodiwgbSkgfHwgdXRpbHMuYXBwcm94aW1hdGVseSh2LCBNKTtcbiAgICB9LFxuXG4gICAgYXBwcm94aW1hdGVseTogZnVuY3Rpb24oYSxiLHByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIGFicyhhLWIpIDw9IChwcmVjaXNpb24gfHwgZXBzaWxvbik7XG4gICAgfSxcblxuICAgIGxlbmd0aDogZnVuY3Rpb24oZGVyaXZhdGl2ZUZuKSB7XG4gICAgICB2YXIgej0wLjUsc3VtPTAsbGVuPXV0aWxzLlR2YWx1ZXMubGVuZ3RoLGksdDtcbiAgICAgIGZvcihpPTA7IGk8bGVuOyBpKyspIHtcbiAgICAgICAgdCA9IHogKiB1dGlscy5UdmFsdWVzW2ldICsgejtcbiAgICAgICAgc3VtICs9IHV0aWxzLkN2YWx1ZXNbaV0gKiB1dGlscy5hcmNmbih0LGRlcml2YXRpdmVGbik7XG4gICAgICB9XG4gICAgICByZXR1cm4geiAqIHN1bTtcbiAgICB9LFxuXG4gICAgbWFwOiBmdW5jdGlvbih2LCBkcyxkZSwgdHMsdGUpIHtcbiAgICAgIHZhciBkMSA9IGRlLWRzLCBkMiA9IHRlLXRzLCB2MiA9ICB2LWRzLCByID0gdjIvZDE7XG4gICAgICByZXR1cm4gdHMgKyBkMipyO1xuICAgIH0sXG5cbiAgICBsZXJwOiBmdW5jdGlvbihyLCB2MSwgdjIpIHtcbiAgICAgIHZhciByZXQgPSB7XG4gICAgICAgIHg6IHYxLnggKyByKih2Mi54LXYxLngpLFxuICAgICAgICB5OiB2MS55ICsgcioodjIueS12MS55KVxuICAgICAgfTtcbiAgICAgIGlmKCEhdjEueiAmJiAhIXYyLnopIHtcbiAgICAgICAgcmV0LnogPSAgdjEueiArIHIqKHYyLnotdjEueik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0sXG5cbiAgICBwb2ludFRvU3RyaW5nOiBmdW5jdGlvbihwKSB7XG4gICAgICB2YXIgcyA9IHAueCtcIi9cIitwLnk7XG4gICAgICBpZih0eXBlb2YgcC56ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHMgKz0gXCIvXCIrcC56O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSxcblxuICAgIHBvaW50c1RvU3RyaW5nOiBmdW5jdGlvbihwb2ludHMpIHtcbiAgICAgIHJldHVybiBcIltcIiArIHBvaW50cy5tYXAodXRpbHMucG9pbnRUb1N0cmluZykuam9pbihcIiwgXCIpICsgXCJdXCI7XG4gICAgfSxcblxuICAgIGNvcHk6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgfSxcblxuICAgIGFuZ2xlOiBmdW5jdGlvbihvLHYxLHYyKSB7XG4gICAgICB2YXIgZHgxID0gdjEueCAtIG8ueCxcbiAgICAgICAgICBkeTEgPSB2MS55IC0gby55LFxuICAgICAgICAgIGR4MiA9IHYyLnggLSBvLngsXG4gICAgICAgICAgZHkyID0gdjIueSAtIG8ueSxcbiAgICAgICAgICBjcm9zcyA9IGR4MSpkeTIgLSBkeTEqZHgyLFxuICAgICAgICAgIG0xID0gc3FydChkeDEqZHgxK2R5MSpkeTEpLFxuICAgICAgICAgIG0yID0gc3FydChkeDIqZHgyK2R5MipkeTIpLFxuICAgICAgICAgIGRvdDtcbiAgICAgIGR4MS89bTE7IGR5MS89bTE7IGR4Mi89bTI7IGR5Mi89bTI7XG4gICAgICBkb3QgPSBkeDEqZHgyICsgZHkxKmR5MjtcbiAgICAgIHJldHVybiBhdGFuMihjcm9zcywgZG90KTtcbiAgICB9LFxuXG4gICAgLy8gcm91bmQgYXMgc3RyaW5nLCB0byBhdm9pZCByb3VuZGluZyBlcnJvcnNcbiAgICByb3VuZDogZnVuY3Rpb24odiwgZCkge1xuICAgICAgdmFyIHMgPSAnJyArIHY7XG4gICAgICB2YXIgcG9zID0gcy5pbmRleE9mKFwiLlwiKTtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHMuc3Vic3RyaW5nKDAscG9zKzErZCkpO1xuICAgIH0sXG5cbiAgICBkaXN0OiBmdW5jdGlvbihwMSwgcDIpIHtcbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnk7XG4gICAgICByZXR1cm4gc3FydChkeCpkeCtkeSpkeSk7XG4gICAgfSxcblxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKExVVCwgcG9pbnQpIHtcbiAgICAgIHZhciBtZGlzdCA9IHBvdygyLDYzKSwgbXBvcywgZDtcbiAgICAgIExVVC5mb3JFYWNoKGZ1bmN0aW9uKHAsIGlkeCkge1xuICAgICAgICBkID0gdXRpbHMuZGlzdChwb2ludCwgcCk7XG4gICAgICAgIGlmIChkPG1kaXN0KSB7XG4gICAgICAgICAgbWRpc3QgPSBkO1xuICAgICAgICAgIG1wb3MgPSBpZHg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgbWRpc3Q6bWRpc3QsIG1wb3M6bXBvcyB9O1xuICAgIH0sXG5cbiAgICBhYmNyYXRpbzogZnVuY3Rpb24odCwgbikge1xuICAgICAgLy8gc2VlIHJhdGlvKHQpIG5vdGUgb24gaHR0cDovL3BvbWF4LmdpdGh1Yi5pby9iZXppZXJpbmZvLyNhYmNcbiAgICAgIGlmIChuIT09MiAmJiBuIT09Mykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdCA9IDAuNTtcbiAgICAgIH0gZWxzZSBpZiAodD09PTAgfHwgdD09PTEpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgICB9XG4gICAgICB2YXIgYm90dG9tID0gcG93KHQsbikgKyBwb3coMS10LG4pLCB0b3AgPSBib3R0b20gLSAxO1xuICAgICAgcmV0dXJuIGFicyh0b3AvYm90dG9tKTtcbiAgICB9LFxuXG4gICAgcHJvamVjdGlvbnJhdGlvOiBmdW5jdGlvbih0LCBuKSB7XG4gICAgICAvLyBzZWUgdSh0KSBub3RlIG9uIGh0dHA6Ly9wb21heC5naXRodWIuaW8vYmV6aWVyaW5mby8jYWJjXG4gICAgICBpZiAobiE9PTIgJiYgbiE9PTMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHQgPSAwLjU7XG4gICAgICB9IGVsc2UgaWYgKHQ9PT0wIHx8IHQ9PT0xKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfVxuICAgICAgdmFyIHRvcCA9IHBvdygxLXQsIG4pLCBib3R0b20gPSBwb3codCxuKSArIHRvcDtcbiAgICAgIHJldHVybiB0b3AvYm90dG9tO1xuICAgIH0sXG5cbiAgICBsbGk4OiBmdW5jdGlvbih4MSx5MSx4Mix5Mix4Myx5Myx4NCx5NCkge1xuICAgICAgdmFyIG54PSh4MSp5Mi15MSp4MikqKHgzLXg0KS0oeDEteDIpKih4Myp5NC15Myp4NCksXG4gICAgICAgICAgbnk9KHgxKnkyLXkxKngyKSooeTMteTQpLSh5MS15MikqKHgzKnk0LXkzKng0KSxcbiAgICAgICAgICBkPSh4MS14MikqKHkzLXk0KS0oeTEteTIpKih4My14NCk7XG4gICAgICBpZihkPT0wKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgcmV0dXJuIHsgeDogbngvZCwgeTogbnkvZCB9O1xuICAgIH0sXG5cbiAgICBsbGk0OiBmdW5jdGlvbihwMSxwMixwMyxwNCkge1xuICAgICAgdmFyIHgxID0gcDEueCwgeTEgPSBwMS55LFxuICAgICAgICAgIHgyID0gcDIueCwgeTIgPSBwMi55LFxuICAgICAgICAgIHgzID0gcDMueCwgeTMgPSBwMy55LFxuICAgICAgICAgIHg0ID0gcDQueCwgeTQgPSBwNC55O1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTgoeDEseTEseDIseTIseDMseTMseDQseTQpO1xuICAgIH0sXG5cbiAgICBsbGk6IGZ1bmN0aW9uKHYxLCB2Mikge1xuICAgICAgcmV0dXJuIHV0aWxzLmxsaTQodjEsdjEuYyx2Mix2Mi5jKTtcbiAgICB9LFxuXG4gICAgbWFrZWxpbmU6IGZ1bmN0aW9uKHAxLHAyKSB7XG4gICAgICB2YXIgQmV6aWVyID0gcmVxdWlyZSg2MSk7XG4gICAgICB2YXIgeDEgPSBwMS54LCB5MSA9IHAxLnksIHgyID0gcDIueCwgeTIgPSBwMi55LCBkeCA9ICh4Mi14MSkvMywgZHkgPSAoeTIteTEpLzM7XG4gICAgICByZXR1cm4gbmV3IEJlemllcih4MSwgeTEsIHgxK2R4LCB5MStkeSwgeDErMipkeCwgeTErMipkeSwgeDIsIHkyKTtcbiAgICB9LFxuXG4gICAgZmluZGJib3g6IGZ1bmN0aW9uKHNlY3Rpb25zKSB7XG4gICAgICB2YXIgbXg9OTk5OTk5OTksbXk9bXgsTVg9LW14LE1ZPU1YO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihzKSB7XG4gICAgICAgIHZhciBiYm94ID0gcy5iYm94KCk7XG4gICAgICAgIGlmKG14ID4gYmJveC54Lm1pbikgbXggPSBiYm94LngubWluO1xuICAgICAgICBpZihteSA+IGJib3gueS5taW4pIG15ID0gYmJveC55Lm1pbjtcbiAgICAgICAgaWYoTVggPCBiYm94LngubWF4KSBNWCA9IGJib3gueC5tYXg7XG4gICAgICAgIGlmKE1ZIDwgYmJveC55Lm1heCkgTVkgPSBiYm94LnkubWF4O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiB7IG1pbjogbXgsIG1pZDoobXgrTVgpLzIsIG1heDogTVgsIHNpemU6TVgtbXggfSxcbiAgICAgICAgeTogeyBtaW46IG15LCBtaWQ6KG15K01ZKS8yLCBtYXg6IE1ZLCBzaXplOk1ZLW15IH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcGVpbnRlcnNlY3Rpb25zOiBmdW5jdGlvbihzMSwgYmJveDEsIHMyLCBiYm94MiwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIGlmKCF1dGlscy5iYm94b3ZlcmxhcChiYm94MSwgYmJveDIpKSByZXR1cm4gW107XG4gICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFtdO1xuICAgICAgdmFyIGExID0gW3MxLnN0YXJ0Y2FwLCBzMS5mb3J3YXJkLCBzMS5iYWNrLCBzMS5lbmRjYXBdO1xuICAgICAgdmFyIGEyID0gW3MyLnN0YXJ0Y2FwLCBzMi5mb3J3YXJkLCBzMi5iYWNrLCBzMi5lbmRjYXBdO1xuICAgICAgYTEuZm9yRWFjaChmdW5jdGlvbihsMSkge1xuICAgICAgICBpZihsMS52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgIGEyLmZvckVhY2goZnVuY3Rpb24obDIpIHtcbiAgICAgICAgICBpZihsMi52aXJ0dWFsKSByZXR1cm47XG4gICAgICAgICAgdmFyIGlzcyA9IGwxLmludGVyc2VjdHMobDIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKTtcbiAgICAgICAgICBpZihpc3MubGVuZ3RoPjApIHtcbiAgICAgICAgICAgIGlzcy5jMSA9IGwxO1xuICAgICAgICAgICAgaXNzLmMyID0gbDI7XG4gICAgICAgICAgICBpc3MuczEgPSBzMTtcbiAgICAgICAgICAgIGlzcy5zMiA9IHMyO1xuICAgICAgICAgICAgaW50ZXJzZWN0aW9ucy5wdXNoKGlzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGludGVyc2VjdGlvbnM7XG4gICAgfSxcblxuICAgIG1ha2VzaGFwZTogZnVuY3Rpb24oZm9yd2FyZCwgYmFjaywgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBicGwgPSBiYWNrLnBvaW50cy5sZW5ndGg7XG4gICAgICB2YXIgZnBsID0gZm9yd2FyZC5wb2ludHMubGVuZ3RoO1xuICAgICAgdmFyIHN0YXJ0ICA9IHV0aWxzLm1ha2VsaW5lKGJhY2sucG9pbnRzW2JwbC0xXSwgZm9yd2FyZC5wb2ludHNbMF0pO1xuICAgICAgdmFyIGVuZCAgICA9IHV0aWxzLm1ha2VsaW5lKGZvcndhcmQucG9pbnRzW2ZwbC0xXSwgYmFjay5wb2ludHNbMF0pO1xuICAgICAgdmFyIHNoYXBlICA9IHtcbiAgICAgICAgc3RhcnRjYXA6IHN0YXJ0LFxuICAgICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgICBiYWNrOiBiYWNrLFxuICAgICAgICBlbmRjYXA6IGVuZCxcbiAgICAgICAgYmJveDogdXRpbHMuZmluZGJib3goW3N0YXJ0LCBmb3J3YXJkLCBiYWNrLCBlbmRdKVxuICAgICAgfTtcbiAgICAgIHZhciBzZWxmID0gdXRpbHM7XG4gICAgICBzaGFwZS5pbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oczIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuc2hhcGVpbnRlcnNlY3Rpb25zKHNoYXBlLHNoYXBlLmJib3gsczIsczIuYmJveCwgY3VydmVJbnRlcnNlY3Rpb25UaHJlc2hvbGQpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBzaGFwZTtcbiAgICB9LFxuXG4gICAgZ2V0bWlubWF4OiBmdW5jdGlvbihjdXJ2ZSwgZCwgbGlzdCkge1xuICAgICAgaWYoIWxpc3QpIHJldHVybiB7IG1pbjowLCBtYXg6MCB9O1xuICAgICAgdmFyIG1pbj0weEZGRkZGRkZGRkZGRkZGRkYsIG1heD0tbWluLHQsYztcbiAgICAgIGlmKGxpc3QuaW5kZXhPZigwKT09PS0xKSB7IGxpc3QgPSBbMF0uY29uY2F0KGxpc3QpOyB9XG4gICAgICBpZihsaXN0LmluZGV4T2YoMSk9PT0tMSkgeyBsaXN0LnB1c2goMSk7IH1cbiAgICAgIGZvcih2YXIgaT0wLGxlbj1saXN0Lmxlbmd0aDsgaTxsZW47IGkrKykge1xuICAgICAgICB0ID0gbGlzdFtpXTtcbiAgICAgICAgYyA9IGN1cnZlLmdldCh0KTtcbiAgICAgICAgaWYoY1tkXSA8IG1pbikgeyBtaW4gPSBjW2RdOyB9XG4gICAgICAgIGlmKGNbZF0gPiBtYXgpIHsgbWF4ID0gY1tkXTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgbWluOm1pbiwgbWlkOihtaW4rbWF4KS8yLCBtYXg6bWF4LCBzaXplOm1heC1taW4gfTtcbiAgICB9LFxuXG4gICAgYWxpZ246IGZ1bmN0aW9uKHBvaW50cywgbGluZSkge1xuICAgICAgdmFyIHR4ID0gbGluZS5wMS54LFxuICAgICAgICAgIHR5ID0gbGluZS5wMS55LFxuICAgICAgICAgIGEgPSAtYXRhbjIobGluZS5wMi55LXR5LCBsaW5lLnAyLngtdHgpLFxuICAgICAgICAgIGQgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4OiAodi54LXR4KSpjb3MoYSkgLSAodi55LXR5KSpzaW4oYSksXG4gICAgICAgICAgICAgIHk6ICh2LngtdHgpKnNpbihhKSArICh2LnktdHkpKmNvcyhhKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9O1xuICAgICAgcmV0dXJuIHBvaW50cy5tYXAoZCk7XG4gICAgfSxcblxuICAgIHJvb3RzOiBmdW5jdGlvbihwb2ludHMsIGxpbmUpIHtcbiAgICAgIGxpbmUgPSBsaW5lIHx8IHtwMTp7eDowLHk6MH0scDI6e3g6MSx5OjB9fTtcbiAgICAgIHZhciBvcmRlciA9IHBvaW50cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIHAgPSB1dGlscy5hbGlnbihwb2ludHMsIGxpbmUpO1xuICAgICAgdmFyIHJlZHVjZSA9IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIDA8PXQgJiYgdCA8PTE7IH07XG5cbiAgICAgIGlmIChvcmRlciA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0ueSxcbiAgICAgICAgICAgIGIgPSBwWzFdLnksXG4gICAgICAgICAgICBjID0gcFsyXS55LFxuICAgICAgICAgICAgZCA9IGEgLSAyKmIgKyBjO1xuICAgICAgICBpZihkIT09MCkge1xuICAgICAgICAgIHZhciBtMSA9IC1zcXJ0KGIqYi1hKmMpLFxuICAgICAgICAgICAgICBtMiA9IC1hK2IsXG4gICAgICAgICAgICAgIHYxID0gLSggbTErbTIpL2QsXG4gICAgICAgICAgICAgIHYyID0gLSgtbTErbTIpL2Q7XG4gICAgICAgICAgcmV0dXJuIFt2MSwgdjJdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoYiE9PWMgJiYgZD09PTApIHtcbiAgICAgICAgICByZXR1cm4gWyAoMipiLWMpLzIqKGItYykgXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnRyYW5zNG1pbmQuY29tL3BlcnNvbmFsX2RldmVsb3BtZW50L21hdGhlbWF0aWNzL3BvbHlub21pYWxzL2N1YmljQWxnZWJyYS5odG1cbiAgICAgIHZhciBwYSA9IHBbMF0ueSxcbiAgICAgICAgICBwYiA9IHBbMV0ueSxcbiAgICAgICAgICBwYyA9IHBbMl0ueSxcbiAgICAgICAgICBwZCA9IHBbM10ueSxcbiAgICAgICAgICBkID0gKC1wYSArIDMqcGIgLSAzKnBjICsgcGQpLFxuICAgICAgICAgIGEgPSAoMypwYSAtIDYqcGIgKyAzKnBjKSAvIGQsXG4gICAgICAgICAgYiA9ICgtMypwYSArIDMqcGIpIC8gZCxcbiAgICAgICAgICBjID0gcGEgLyBkLFxuICAgICAgICAgIHAgPSAoMypiIC0gYSphKS8zLFxuICAgICAgICAgIHAzID0gcC8zLFxuICAgICAgICAgIHEgPSAoMiphKmEqYSAtIDkqYSpiICsgMjcqYykvMjcsXG4gICAgICAgICAgcTIgPSBxLzIsXG4gICAgICAgICAgZGlzY3JpbWluYW50ID0gcTIqcTIgKyBwMypwMypwMyxcbiAgICAgICAgICB1MSx2MSx4MSx4Mix4MztcbiAgICAgICBpZiAoZGlzY3JpbWluYW50IDwgMCkge1xuICAgICAgICB2YXIgbXAzID0gLXAvMyxcbiAgICAgICAgICAgIG1wMzMgPSBtcDMqbXAzKm1wMyxcbiAgICAgICAgICAgIHIgPSBzcXJ0KCBtcDMzICksXG4gICAgICAgICAgICB0ID0gLXEvKDIqciksXG4gICAgICAgICAgICBjb3NwaGkgPSB0PC0xID8gLTEgOiB0PjEgPyAxIDogdCxcbiAgICAgICAgICAgIHBoaSA9IGFjb3MoY29zcGhpKSxcbiAgICAgICAgICAgIGNydHIgPSBjcnQociksXG4gICAgICAgICAgICB0MSA9IDIqY3J0cjtcbiAgICAgICAgeDEgPSB0MSAqIGNvcyhwaGkvMykgLSBhLzM7XG4gICAgICAgIHgyID0gdDEgKiBjb3MoKHBoaSt0YXUpLzMpIC0gYS8zO1xuICAgICAgICB4MyA9IHQxICogY29zKChwaGkrMip0YXUpLzMpIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLCB4MiwgeDNdLmZpbHRlcihyZWR1Y2UpO1xuICAgICAgfSBlbHNlIGlmKGRpc2NyaW1pbmFudCA9PT0gMCkge1xuICAgICAgICB1MSA9IHEyIDwgMCA/IGNydCgtcTIpIDogLWNydChxMik7XG4gICAgICAgIHgxID0gMip1MS1hLzM7XG4gICAgICAgIHgyID0gLXUxIC0gYS8zO1xuICAgICAgICByZXR1cm4gW3gxLHgyXS5maWx0ZXIocmVkdWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzZCA9IHNxcnQoZGlzY3JpbWluYW50KTtcbiAgICAgICAgdTEgPSBjcnQoLXEyK3NkKTtcbiAgICAgICAgdjEgPSBjcnQocTIrc2QpO1xuICAgICAgICByZXR1cm4gW3UxLXYxLWEvM10uZmlsdGVyKHJlZHVjZSk7O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBkcm9vdHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgIC8vIHF1YWRyYXRpYyByb290cyBhcmUgZWFzeVxuICAgICAgaWYocC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgdmFyIGEgPSBwWzBdLFxuICAgICAgICAgICAgYiA9IHBbMV0sXG4gICAgICAgICAgICBjID0gcFsyXSxcbiAgICAgICAgICAgIGQgPSBhIC0gMipiICsgYztcbiAgICAgICAgaWYoZCE9PTApIHtcbiAgICAgICAgICB2YXIgbTEgPSAtc3FydChiKmItYSpjKSxcbiAgICAgICAgICAgICAgbTIgPSAtYStiLFxuICAgICAgICAgICAgICB2MSA9IC0oIG0xK20yKS9kLFxuICAgICAgICAgICAgICB2MiA9IC0oLW0xK20yKS9kO1xuICAgICAgICAgIHJldHVybiBbdjEsIHYyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGIhPT1jICYmIGQ9PT0wKSB7XG4gICAgICAgICAgcmV0dXJuIFsoMipiLWMpLygyKihiLWMpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBsaW5lYXIgcm9vdHMgYXJlIGV2ZW4gZWFzaWVyXG4gICAgICBpZihwLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB2YXIgYSA9IHBbMF0sIGIgPSBwWzFdO1xuICAgICAgICBpZihhIT09Yikge1xuICAgICAgICAgIHJldHVybiBbYS8oYS1iKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpbmZsZWN0aW9uczogZnVuY3Rpb24ocG9pbnRzKSB7XG4gICAgICBpZiAocG9pbnRzLmxlbmd0aDw0KSByZXR1cm4gW107XG5cbiAgICAgIC8vIEZJWE1FOiBUT0RPOiBhZGQgaW4gaW5mbGVjdGlvbiBhYnN0cmFjdGlvbiBmb3IgcXVhcnRpYysgY3VydmVzP1xuXG4gICAgICB2YXIgcCA9IHV0aWxzLmFsaWduKHBvaW50cywgeyBwMTogcG9pbnRzWzBdLCBwMjogcG9pbnRzLnNsaWNlKC0xKVswXSB9KSxcbiAgICAgICAgICBhID0gcFsyXS54ICogcFsxXS55LFxuICAgICAgICAgIGIgPSBwWzNdLnggKiBwWzFdLnksXG4gICAgICAgICAgYyA9IHBbMV0ueCAqIHBbMl0ueSxcbiAgICAgICAgICBkID0gcFszXS54ICogcFsyXS55LFxuICAgICAgICAgIHYxID0gMTggKiAoLTMqYSArIDIqYiArIDMqYyAtIGQpLFxuICAgICAgICAgIHYyID0gMTggKiAoMyphIC0gYiAtIDMqYyksXG4gICAgICAgICAgdjMgPSAxOCAqIChjIC0gYSk7XG5cbiAgICAgIGlmICh1dGlscy5hcHByb3hpbWF0ZWx5KHYxLDApKSByZXR1cm4gW107XG5cbiAgICAgIHZhciB0cm0gPSB2Mip2MiAtIDQqdjEqdjMsXG4gICAgICAgICAgc3EgPSBNYXRoLnNxcnQodHJtKSxcbiAgICAgICAgICBkID0gMiAqIHYxO1xuXG4gICAgICBpZiAodXRpbHMuYXBwcm94aW1hdGVseShkLDApKSByZXR1cm4gW107XG5cbiAgICAgIHJldHVybiBbKHNxLXYyKS9kLCAtKHYyK3NxKS9kXS5maWx0ZXIoZnVuY3Rpb24ocikge1xuICAgICAgICByZXR1cm4gKDAgPD0gciAmJiByIDw9IDEpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGJib3hvdmVybGFwOiBmdW5jdGlvbihiMSxiMikge1xuICAgICAgdmFyIGRpbXM9Wyd4JywneSddLGxlbj1kaW1zLmxlbmd0aCxpLGRpbSxsLHQsZFxuICAgICAgZm9yKGk9MDsgaTxsZW47IGkrKykge1xuICAgICAgICBkaW0gPSBkaW1zW2ldO1xuICAgICAgICBsID0gYjFbZGltXS5taWQ7XG4gICAgICAgIHQgPSBiMltkaW1dLm1pZDtcbiAgICAgICAgZCA9IChiMVtkaW1dLnNpemUgKyBiMltkaW1dLnNpemUpLzI7XG4gICAgICAgIGlmKGFicyhsLXQpID49IGQpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBleHBhbmRib3g6IGZ1bmN0aW9uKGJib3gsIF9iYm94KSB7XG4gICAgICBpZihfYmJveC54Lm1pbiA8IGJib3gueC5taW4pIHsgYmJveC54Lm1pbiA9IF9iYm94LngubWluOyB9XG4gICAgICBpZihfYmJveC55Lm1pbiA8IGJib3gueS5taW4pIHsgYmJveC55Lm1pbiA9IF9iYm94LnkubWluOyB9XG4gICAgICBpZihfYmJveC56ICYmIF9iYm94LnoubWluIDwgYmJveC56Lm1pbikgeyBiYm94LnoubWluID0gX2Jib3guei5taW47IH1cbiAgICAgIGlmKF9iYm94LngubWF4ID4gYmJveC54Lm1heCkgeyBiYm94LngubWF4ID0gX2Jib3gueC5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnkubWF4ID4gYmJveC55Lm1heCkgeyBiYm94LnkubWF4ID0gX2Jib3gueS5tYXg7IH1cbiAgICAgIGlmKF9iYm94LnogJiYgX2Jib3guei5tYXggPiBiYm94LnoubWF4KSB7IGJib3guei5tYXggPSBfYmJveC56Lm1heDsgfVxuICAgICAgYmJveC54Lm1pZCA9IChiYm94LngubWluICsgYmJveC54Lm1heCkvMjtcbiAgICAgIGJib3gueS5taWQgPSAoYmJveC55Lm1pbiArIGJib3gueS5tYXgpLzI7XG4gICAgICBpZihiYm94LnopIHsgYmJveC56Lm1pZCA9IChiYm94LnoubWluICsgYmJveC56Lm1heCkvMjsgfVxuICAgICAgYmJveC54LnNpemUgPSBiYm94LngubWF4IC0gYmJveC54Lm1pbjtcbiAgICAgIGJib3gueS5zaXplID0gYmJveC55Lm1heCAtIGJib3gueS5taW47XG4gICAgICBpZihiYm94LnopIHsgYmJveC56LnNpemUgPSBiYm94LnoubWF4IC0gYmJveC56Lm1pbjsgfVxuICAgIH0sXG5cbiAgICBwYWlyaXRlcmF0aW9uOiBmdW5jdGlvbihjMSwgYzIsIGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkKSB7XG4gICAgICB2YXIgYzFiID0gYzEuYmJveCgpLFxuICAgICAgICAgIGMyYiA9IGMyLmJib3goKSxcbiAgICAgICAgICByID0gMTAwMDAwLFxuICAgICAgICAgIHRocmVzaG9sZCA9IGN1cnZlSW50ZXJzZWN0aW9uVGhyZXNob2xkIHx8IDAuNTtcbiAgICAgIGlmKGMxYi54LnNpemUgKyBjMWIueS5zaXplIDwgdGhyZXNob2xkICYmIGMyYi54LnNpemUgKyBjMmIueS5zaXplIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiBbICgociAqIChjMS5fdDErYzEuX3QyKS8yKXwwKS9yICsgXCIvXCIgKyAoKHIgKiAoYzIuX3QxK2MyLl90MikvMil8MCkvciBdO1xuICAgICAgfVxuICAgICAgdmFyIGNjMSA9IGMxLnNwbGl0KDAuNSksXG4gICAgICAgICAgY2MyID0gYzIuc3BsaXQoMC41KSxcbiAgICAgICAgICBwYWlycyA9IFtcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEubGVmdCwgcmlnaHQ6IGNjMi5sZWZ0IH0sXG4gICAgICAgICAgICB7bGVmdDogY2MxLmxlZnQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIucmlnaHQgfSxcbiAgICAgICAgICAgIHtsZWZ0OiBjYzEucmlnaHQsIHJpZ2h0OiBjYzIubGVmdCB9XTtcbiAgICAgIHBhaXJzID0gcGFpcnMuZmlsdGVyKGZ1bmN0aW9uKHBhaXIpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmJib3hvdmVybGFwKHBhaXIubGVmdC5iYm94KCkscGFpci5yaWdodC5iYm94KCkpO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgaWYocGFpcnMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzdWx0cztcbiAgICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24ocGFpcikge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQoXG4gICAgICAgICAgdXRpbHMucGFpcml0ZXJhdGlvbihwYWlyLmxlZnQsIHBhaXIucmlnaHQsIHRocmVzaG9sZClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoZnVuY3Rpb24odixpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmluZGV4T2YodikgPT09IGk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG5cbiAgICBnZXRjY2VudGVyOiBmdW5jdGlvbihwMSxwMixwMykge1xuICAgICAgdmFyIGR4MSA9IChwMi54IC0gcDEueCksXG4gICAgICAgICAgZHkxID0gKHAyLnkgLSBwMS55KSxcbiAgICAgICAgICBkeDIgPSAocDMueCAtIHAyLngpLFxuICAgICAgICAgIGR5MiA9IChwMy55IC0gcDIueSk7XG4gICAgICB2YXIgZHgxcCA9IGR4MSAqIGNvcyhxdWFydCkgLSBkeTEgKiBzaW4ocXVhcnQpLFxuICAgICAgICAgIGR5MXAgPSBkeDEgKiBzaW4ocXVhcnQpICsgZHkxICogY29zKHF1YXJ0KSxcbiAgICAgICAgICBkeDJwID0gZHgyICogY29zKHF1YXJ0KSAtIGR5MiAqIHNpbihxdWFydCksXG4gICAgICAgICAgZHkycCA9IGR4MiAqIHNpbihxdWFydCkgKyBkeTIgKiBjb3MocXVhcnQpO1xuICAgICAgLy8gY2hvcmQgbWlkcG9pbnRzXG4gICAgICB2YXIgbXgxID0gKHAxLnggKyBwMi54KS8yLFxuICAgICAgICAgIG15MSA9IChwMS55ICsgcDIueSkvMixcbiAgICAgICAgICBteDIgPSAocDIueCArIHAzLngpLzIsXG4gICAgICAgICAgbXkyID0gKHAyLnkgKyBwMy55KS8yO1xuICAgICAgLy8gbWlkcG9pbnQgb2Zmc2V0c1xuICAgICAgdmFyIG14MW4gPSBteDEgKyBkeDFwLFxuICAgICAgICAgIG15MW4gPSBteTEgKyBkeTFwLFxuICAgICAgICAgIG14Mm4gPSBteDIgKyBkeDJwLFxuICAgICAgICAgIG15Mm4gPSBteTIgKyBkeTJwO1xuICAgICAgLy8gaW50ZXJzZWN0aW9uIG9mIHRoZXNlIGxpbmVzOlxuICAgICAgdmFyIGFyYyA9IHV0aWxzLmxsaTgobXgxLG15MSxteDFuLG15MW4sIG14MixteTIsbXgybixteTJuKSxcbiAgICAgICAgICByID0gdXRpbHMuZGlzdChhcmMscDEpLFxuICAgICAgICAgIC8vIGFyYyBzdGFydC9lbmQgdmFsdWVzLCBvdmVyIG1pZCBwb2ludDpcbiAgICAgICAgICBzID0gYXRhbjIocDEueSAtIGFyYy55LCBwMS54IC0gYXJjLngpLFxuICAgICAgICAgIG0gPSBhdGFuMihwMi55IC0gYXJjLnksIHAyLnggLSBhcmMueCksXG4gICAgICAgICAgZSA9IGF0YW4yKHAzLnkgLSBhcmMueSwgcDMueCAtIGFyYy54KSxcbiAgICAgICAgICBfO1xuICAgICAgLy8gZGV0ZXJtaW5lIGFyYyBkaXJlY3Rpb24gKGN3L2NjdyBjb3JyZWN0aW9uKVxuICAgICAgaWYgKHM8ZSkge1xuICAgICAgICAvLyBpZiBzPG08ZSwgYXJjKHMsIGUpXG4gICAgICAgIC8vIGlmIG08czxlLCBhcmMoZSwgcyArIHRhdSlcbiAgICAgICAgLy8gaWYgczxlPG0sIGFyYyhlLCBzICsgdGF1KVxuICAgICAgICBpZiAocz5tIHx8IG0+ZSkgeyBzICs9IHRhdTsgfVxuICAgICAgICBpZiAocz5lKSB7IF89ZTsgZT1zOyBzPV87IH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIGU8bTxzLCBhcmMoZSwgcylcbiAgICAgICAgLy8gaWYgbTxlPHMsIGFyYyhzLCBlICsgdGF1KVxuICAgICAgICAvLyBpZiBlPHM8bSwgYXJjKHMsIGUgKyB0YXUpXG4gICAgICAgIGlmIChlPG0gJiYgbTxzKSB7IF89ZTsgZT1zOyBzPV87IH0gZWxzZSB7IGUgKz0gdGF1OyB9XG4gICAgICB9XG4gICAgICAvLyBhc3NpZ24gYW5kIGRvbmUuXG4gICAgICBhcmMucyA9IHM7XG4gICAgICBhcmMuZSA9IGU7XG4gICAgICBhcmMuciA9IHI7XG4gICAgICByZXR1cm4gYXJjO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xufSgpKTtcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIER1ZSB0byB2YXJpb3VzIGJyb3dzZXIgYnVncywgc29tZXRpbWVzIHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkIGV2ZW5cbiAqIHdoZW4gdGhlIGJyb3dzZXIgc3VwcG9ydHMgdHlwZWQgYXJyYXlzLlxuICpcbiAqIE5vdGU6XG4gKlxuICogICAtIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcyxcbiAqICAgICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleVxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgYmVoYXZlcyBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlQgIT09IHVuZGVmaW5lZFxuICA/IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gIDogdHlwZWRBcnJheVN1cHBvcnQoKVxuXG4vKlxuICogRXhwb3J0IGtNYXhMZW5ndGggYWZ0ZXIgdHlwZWQgYXJyYXkgc3VwcG9ydCBpcyBkZXRlcm1pbmVkLlxuICovXG5leHBvcnRzLmtNYXhMZW5ndGggPSBrTWF4TGVuZ3RoKClcblxuZnVuY3Rpb24gdHlwZWRBcnJheVN1cHBvcnQgKCkge1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGFyci5fX3Byb3RvX18gPSB7X19wcm90b19fOiBVaW50OEFycmF5LnByb3RvdHlwZSwgZm9vOiBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9fVxuICAgIHJldHVybiBhcnIuZm9vKCkgPT09IDQyICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIGFyci5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBrTWF4TGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUXG4gICAgPyAweDdmZmZmZmZmXG4gICAgOiAweDNmZmZmZmZmXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAodGhhdCwgbGVuZ3RoKSB7XG4gIGlmIChrTWF4TGVuZ3RoKCkgPCBsZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0eXBlZCBhcnJheSBsZW5ndGgnKVxuICB9XG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpXG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIGlmICh0aGF0ID09PSBudWxsKSB7XG4gICAgICB0aGF0ID0gbmV3IEJ1ZmZlcihsZW5ndGgpXG4gICAgfVxuICAgIHRoYXQubGVuZ3RoID0gbGVuZ3RoXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnSWYgZW5jb2RpbmcgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnXG4gICAgICApXG4gICAgfVxuICAgIHJldHVybiBhbGxvY1Vuc2FmZSh0aGlzLCBhcmcpXG4gIH1cbiAgcmV0dXJuIGZyb20odGhpcywgYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG4vLyBUT0RPOiBMZWdhY3ksIG5vdCBuZWVkZWQgYW55bW9yZS4gUmVtb3ZlIGluIG5leHQgbWFqb3IgdmVyc2lvbi5cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiBmcm9tICh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgcmV0dXJuIGZyb21PYmplY3QodGhhdCwgdmFsdWUpXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20obnVsbCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuX19wcm90b19fID0gVWludDhBcnJheS5wcm90b3R5cGVcbiAgQnVmZmVyLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXlcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC5zcGVjaWVzICYmXG4gICAgICBCdWZmZXJbU3ltYm9sLnNwZWNpZXNdID09PSBCdWZmZXIpIHtcbiAgICAvLyBGaXggc3ViYXJyYXkoKSBpbiBFUzIwMTYuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC85N1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0U2l6ZSAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH0gZWxzZSBpZiAoc2l6ZSA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJzaXplXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgbmVnYXRpdmUnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jICh0aGF0LCBzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldHRlZCBhcyBhIHN0YXJ0IG9mZnNldC5cbiAgICByZXR1cm4gdHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJ1xuICAgICAgPyBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsLCBlbmNvZGluZylcbiAgICAgIDogY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbClcbiAgfVxuICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmaWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogYWxsb2Moc2l6ZVssIGZpbGxbLCBlbmNvZGluZ11dKVxuICoqL1xuQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBhbGxvYyhudWxsLCBzaXplLCBmaWxsLCBlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmUgKHRoYXQsIHNpemUpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUgPCAwID8gMCA6IGNoZWNrZWQoc2l6ZSkgfCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgIHRoYXRbaV0gPSAwXG4gICAgfVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUobnVsbCwgc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAodGhhdCwgc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICB2YXIgbGVuZ3RoID0gYnl0ZUxlbmd0aChzdHJpbmcsIGVuY29kaW5nKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG5cbiAgdmFyIGFjdHVhbCA9IHRoYXQud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIHRoYXQgPSB0aGF0LnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKHRoYXQsIGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGggPCAwID8gMCA6IGNoZWNrZWQoYXJyYXkubGVuZ3RoKSB8IDBcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW5ndGgpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGF0W2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKHRoYXQsIGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpIHtcbiAgYXJyYXkuYnl0ZUxlbmd0aCAvLyB0aGlzIHRocm93cyBpZiBgYXJyYXlgIGlzIG5vdCBhIHZhbGlkIEFycmF5QnVmZmVyXG5cbiAgaWYgKGJ5dGVPZmZzZXQgPCAwIHx8IGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCArIChsZW5ndGggfHwgMCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlLCBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIHRoYXQgPSBhcnJheVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICB0aGF0ID0gZnJvbUFycmF5TGlrZSh0aGF0LCBhcnJheSlcbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0ICh0aGF0LCBvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgdmFyIGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBsZW4pXG5cbiAgICBpZiAodGhhdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGF0XG4gICAgfVxuXG4gICAgb2JqLmNvcHkodGhhdCwgMCwgMCwgbGVuKVxuICAgIHJldHVybiB0aGF0XG4gIH1cblxuICBpZiAob2JqKSB7XG4gICAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHwgJ2xlbmd0aCcgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9iai5sZW5ndGggIT09ICdudW1iZXInIHx8IGlzbmFuKG9iai5sZW5ndGgpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgMClcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iailcbiAgICB9XG5cbiAgICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmouZGF0YSlcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJylcbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IGtNYXhMZW5ndGgoKWAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBrTWF4TGVuZ3RoKCkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aCgpLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICB2YXIgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBidWYgPSBsaXN0W2ldXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9XG4gICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgcG9zICs9IGJ1Zi5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdHJpbmcpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5sZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAoQXJyYXlCdWZmZXIuaXNWaWV3KHN0cmluZykgfHwgc3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmdcbiAgfVxuXG4gIHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gbGVuICogMlxuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGxlbiA+Pj4gMVxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgcmV0dXJuIHV0ZjhUb0J5dGVzKHN0cmluZykubGVuZ3RoIC8vIGFzc3VtZSB1dGY4XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcnNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIHByb3BlcnR5IGlzIHVzZWQgYnkgYEJ1ZmZlci5pc0J1ZmZlcmAgYW5kIGBpcy1idWZmZXJgIChpbiBTYWZhcmkgNS03KSB0byBkZXRlY3Rcbi8vIEJ1ZmZlciBpbnN0YW5jZXMuXG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICB2YXIgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDIgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDE2LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAxKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDMyID0gZnVuY3Rpb24gc3dhcDMyICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoIHwgMFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KSBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIHZhciB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICB2YXIgeSA9IGVuZCAtIHN0YXJ0XG4gIHZhciBsZW4gPSBNYXRoLm1pbih4LCB5KVxuXG4gIHZhciB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICB2YXIgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgIC8vIENvZXJjZSB0byBOdW1iZXIuXG4gIGlmIChpc05hTihieXRlT2Zmc2V0KSkge1xuICAgIC8vIGJ5dGVPZmZzZXQ6IGl0IGl0J3MgdW5kZWZpbmVkLCBudWxsLCBOYU4sIFwiZm9vXCIsIGV0Yywgc2VhcmNoIHdob2xlIGJ1ZmZlclxuICAgIGJ5dGVPZmZzZXQgPSBkaXIgPyAwIDogKGJ1ZmZlci5sZW5ndGggLSAxKVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXQ6IG5lZ2F0aXZlIG9mZnNldHMgc3RhcnQgZnJvbSB0aGUgZW5kIG9mIHRoZSBidWZmZXJcbiAgaWYgKGJ5dGVPZmZzZXQgPCAwKSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCArIGJ5dGVPZmZzZXRcbiAgaWYgKGJ5dGVPZmZzZXQgPj0gYnVmZmVyLmxlbmd0aCkge1xuICAgIGlmIChkaXIpIHJldHVybiAtMVxuICAgIGVsc2UgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggLSAxXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IDApIHtcbiAgICBpZiAoZGlyKSBieXRlT2Zmc2V0ID0gMFxuICAgIGVsc2UgcmV0dXJuIC0xXG4gIH1cblxuICAvLyBOb3JtYWxpemUgdmFsXG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEJ1ZmZlci5mcm9tKHZhbCwgZW5jb2RpbmcpXG4gIH1cblxuICAvLyBGaW5hbGx5LCBzZWFyY2ggZWl0aGVyIGluZGV4T2YgKGlmIGRpciBpcyB0cnVlKSBvciBsYXN0SW5kZXhPZlxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAvLyBTcGVjaWFsIGNhc2U6IGxvb2tpbmcgZm9yIGVtcHR5IHN0cmluZy9idWZmZXIgYWx3YXlzIGZhaWxzXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMHhGRiAvLyBTZWFyY2ggZm9yIGEgYnl0ZSB2YWx1ZSBbMC0yNTVdXG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmXG4gICAgICAgIHR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoZGlyKSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIFsgdmFsIF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIHZhciBpbmRleFNpemUgPSAxXG4gIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIHZhciB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIHZhciBpXG4gIGlmIChkaXIpIHtcbiAgICB2YXIgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGxhdGluMVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgICBpZiAoaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgbGVuZ3RoID0gbGVuZ3RoIHwgMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIC8vIGxlZ2FjeSB3cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aCkgLSByZW1vdmUgaW4gdjAuMTNcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQnXG4gICAgKVxuICB9XG5cbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICB2YXIgcmVzID0gW11cblxuICB2YXIgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgdmFyIGZpcnN0Qnl0ZSA9IGJ1ZltpXVxuICAgIHZhciBjb2RlUG9pbnQgPSBudWxsXG4gICAgdmFyIGJ5dGVzUGVyU2VxdWVuY2UgPSAoZmlyc3RCeXRlID4gMHhFRikgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKSA/IDNcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpID8gMlxuICAgICAgOiAxXG5cbiAgICBpZiAoaSArIGJ5dGVzUGVyU2VxdWVuY2UgPD0gZW5kKSB7XG4gICAgICB2YXIgc2Vjb25kQnl0ZSwgdGhpcmRCeXRlLCBmb3VydGhCeXRlLCB0ZW1wQ29kZVBvaW50XG5cbiAgICAgIHN3aXRjaCAoYnl0ZXNQZXJTZXF1ZW5jZSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaWYgKGZpcnN0Qnl0ZSA8IDB4ODApIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGZpcnN0Qnl0ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweDFGKSA8PCAweDYgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0YpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHhDIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAodGhpcmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3RkYgJiYgKHRlbXBDb2RlUG9pbnQgPCAweEQ4MDAgfHwgdGVtcENvZGVQb2ludCA+IDB4REZGRikpIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgc2Vjb25kQnl0ZSA9IGJ1ZltpICsgMV1cbiAgICAgICAgICB0aGlyZEJ5dGUgPSBidWZbaSArIDJdXG4gICAgICAgICAgZm91cnRoQnl0ZSA9IGJ1ZltpICsgM11cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKGZvdXJ0aEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4MTIgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4QyB8ICh0aGlyZEJ5dGUgJiAweDNGKSA8PCAweDYgfCAoZm91cnRoQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4RkZGRiAmJiB0ZW1wQ29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgICAgY29kZVBvaW50ID0gdGVtcENvZGVQb2ludFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29kZVBvaW50ID09PSBudWxsKSB7XG4gICAgICAvLyB3ZSBkaWQgbm90IGdlbmVyYXRlIGEgdmFsaWQgY29kZVBvaW50IHNvIGluc2VydCBhXG4gICAgICAvLyByZXBsYWNlbWVudCBjaGFyIChVK0ZGRkQpIGFuZCBhZHZhbmNlIG9ubHkgMSBieXRlXG4gICAgICBjb2RlUG9pbnQgPSAweEZGRkRcbiAgICAgIGJ5dGVzUGVyU2VxdWVuY2UgPSAxXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPiAweEZGRkYpIHtcbiAgICAgIC8vIGVuY29kZSB0byB1dGYxNiAoc3Vycm9nYXRlIHBhaXIgZGFuY2UpXG4gICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMFxuICAgICAgcmVzLnB1c2goY29kZVBvaW50ID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKVxuICAgICAgY29kZVBvaW50ID0gMHhEQzAwIHwgY29kZVBvaW50ICYgMHgzRkZcbiAgICB9XG5cbiAgICByZXMucHVzaChjb2RlUG9pbnQpXG4gICAgaSArPSBieXRlc1BlclNlcXVlbmNlXG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29kZVBvaW50c0FycmF5KHJlcylcbn1cblxuLy8gQmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjI3NDcyNzIvNjgwNzQyLCB0aGUgYnJvd3NlciB3aXRoXG4vLyB0aGUgbG93ZXN0IGxpbWl0IGlzIENocm9tZSwgd2l0aCAweDEwMDAwIGFyZ3MuXG4vLyBXZSBnbyAxIG1hZ25pdHVkZSBsZXNzLCBmb3Igc2FmZXR5XG52YXIgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIHZhciBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIHZhciByZXMgPSAnJ1xuICB2YXIgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIHNsaWNlIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIHZhciBuZXdCdWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgbmV3QnVmID0gdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKVxuICAgIG5ld0J1Zi5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgKytpKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50TEUgPSBmdW5jdGlvbiByZWFkVUludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuICB9XG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXVxuICB2YXIgbXVsID0gMVxuICB3aGlsZSAoYnl0ZUxlbmd0aCA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gcmVhZFVJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRMRSA9IGZ1bmN0aW9uIHJlYWRJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aFxuICB2YXIgbXVsID0gMVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiByZWFkSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gcmVhZEludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiByZWFkRG91YmxlTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludEJFID0gZnVuY3Rpb24gd3JpdGVVSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IDBcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIGxpbWl0ID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGggLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICB2YXIgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gY29weSAodGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0U3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aCkgdGFyZ2V0U3RhcnQgPSB0YXJnZXQubGVuZ3RoXG4gIGlmICghdGFyZ2V0U3RhcnQpIHRhcmdldFN0YXJ0ID0gMFxuICBpZiAoZW5kID4gMCAmJiBlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVybiAwXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKHRhcmdldFN0YXJ0IDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgfVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuICB2YXIgaVxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgc3RhcnQgPCB0YXJnZXRTdGFydCAmJiB0YXJnZXRTdGFydCA8IGVuZCkge1xuICAgIC8vIGRlc2NlbmRpbmcgY29weSBmcm9tIGVuZFxuICAgIGZvciAoaSA9IGxlbiAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIGFzY2VuZGluZyBjb3B5IGZyb20gc3RhcnRcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdmFyIGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKGNvZGUgPCAyNTYpIHtcbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmlzQnVmZmVyKHZhbClcbiAgICAgID8gdmFsXG4gICAgICA6IHV0ZjhUb0J5dGVzKG5ldyBCdWZmZXIodmFsLCBlbmNvZGluZykudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICB2YXIgY29kZVBvaW50XG4gIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIHZhciBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICB2YXIgYnl0ZXMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb2RlUG9pbnQgPSBzdHJpbmcuY2hhckNvZGVBdChpKVxuXG4gICAgLy8gaXMgc3Vycm9nYXRlIGNvbXBvbmVudFxuICAgIGlmIChjb2RlUG9pbnQgPiAweEQ3RkYgJiYgY29kZVBvaW50IDwgMHhFMDAwKSB7XG4gICAgICAvLyBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCFsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAgIC8vIG5vIGxlYWQgeWV0XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweERCRkYpIHtcbiAgICAgICAgICAvLyB1bmV4cGVjdGVkIHRyYWlsXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIGlmIChpICsgMSA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgLy8gdW5wYWlyZWQgbGVhZFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZCBsZWFkXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcblxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyIGxlYWRzIGluIGEgcm93XG4gICAgICBpZiAoY29kZVBvaW50IDwgMHhEQzAwKSB7XG4gICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIHZhbGlkIHN1cnJvZ2F0ZSBwYWlyXG4gICAgICBjb2RlUG9pbnQgPSAobGVhZFN1cnJvZ2F0ZSAtIDB4RDgwMCA8PCAxMCB8IGNvZGVQb2ludCAtIDB4REMwMCkgKyAweDEwMDAwXG4gICAgfSBlbHNlIGlmIChsZWFkU3Vycm9nYXRlKSB7XG4gICAgICAvLyB2YWxpZCBibXAgY2hhciwgYnV0IGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICB9XG5cbiAgICBsZWFkU3Vycm9nYXRlID0gbnVsbFxuXG4gICAgLy8gZW5jb2RlIHV0ZjhcbiAgICBpZiAoY29kZVBvaW50IDwgMHg4MCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAxKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKGNvZGVQb2ludClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4ODAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgfCAweEMwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAzKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDIHwgMHhFMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHgxMTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gNCkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4MTIgfCAweEYwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHhDICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gaXNuYW4gKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSB2YWwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIHBsYWNlSG9sZGVyc0NvdW50IChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHJldHVybiBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgcmV0dXJuIGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVyc0NvdW50KGI2NClcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBwbGFjZUhvbGRlcnMgPSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG5cbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlblxuXG4gIHZhciBMID0gMFxuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9PSdcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz0nXG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dClcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNsb25lID0gcmVxdWlyZSg2OSk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoNzIpO1xudmFyIHN0cmluZyA9IHJlcXVpcmUoNzQpO1xuXG52YXIgQ29sb3IgPSBmdW5jdGlvbiAob2JqKSB7XG5cdGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHJldHVybiBvYmo7XG5cdH1cblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqKTtcblx0fVxuXG5cdHRoaXMudmFsdWVzID0ge1xuXHRcdHJnYjogWzAsIDAsIDBdLFxuXHRcdGhzbDogWzAsIDAsIDBdLFxuXHRcdGhzdjogWzAsIDAsIDBdLFxuXHRcdGh3YjogWzAsIDAsIDBdLFxuXHRcdGNteWs6IFswLCAwLCAwLCAwXSxcblx0XHRhbHBoYTogMVxuXHR9O1xuXG5cdC8vIHBhcnNlIENvbG9yKCkgYXJndW1lbnRcblx0dmFyIHZhbHM7XG5cdGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhbHMgPSBzdHJpbmcuZ2V0UmdiYShvYmopO1xuXHRcdGlmICh2YWxzKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzID0gc3RyaW5nLmdldEhzbGEob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHZhbHMpO1xuXHRcdH0gZWxzZSBpZiAodmFscyA9IHN0cmluZy5nZXRId2Iob2JqKSkge1xuXHRcdFx0dGhpcy5zZXRWYWx1ZXMoJ2h3YicsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcIicgKyBvYmogKyAnXCInKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcblx0XHR2YWxzID0gb2JqO1xuXHRcdGlmICh2YWxzLnIgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnJlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygncmdiJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLmwgIT09IHVuZGVmaW5lZCB8fCB2YWxzLmxpZ2h0bmVzcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnaHNsJywgdmFscyk7XG5cdFx0fSBlbHNlIGlmICh2YWxzLnYgIT09IHVuZGVmaW5lZCB8fCB2YWxzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdoc3YnLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMudyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMud2hpdGVuZXNzICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB2YWxzKTtcblx0XHR9IGVsc2UgaWYgKHZhbHMuYyAhPT0gdW5kZWZpbmVkIHx8IHZhbHMuY3lhbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNldFZhbHVlcygnY215aycsIHZhbHMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHJnYjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdyZ2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRoc2w6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRTcGFjZSgnaHNsJywgYXJndW1lbnRzKTtcblx0fSxcblx0aHN2OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2hzdicsIGFyZ3VtZW50cyk7XG5cdH0sXG5cdGh3YjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnNldFNwYWNlKCdod2InLCBhcmd1bWVudHMpO1xuXHR9LFxuXHRjbXlrOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0U3BhY2UoJ2NteWsnLCBhcmd1bWVudHMpO1xuXHR9LFxuXG5cdHJnYkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLnJnYjtcblx0fSxcblx0aHNsQXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHNsO1xuXHR9LFxuXHRoc3ZBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHVlcy5oc3Y7XG5cdH0sXG5cdGh3YkFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMudmFsdWVzLmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuaHdiLmNvbmNhdChbdGhpcy52YWx1ZXMuYWxwaGFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmh3Yjtcblx0fSxcblx0Y215a0FycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzLmNteWs7XG5cdH0sXG5cdHJnYmFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0cmV0dXJuIHJnYi5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdGhzbGFBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBoc2wgPSB0aGlzLnZhbHVlcy5oc2w7XG5cdFx0cmV0dXJuIGhzbC5jb25jYXQoW3RoaXMudmFsdWVzLmFscGhhXSk7XG5cdH0sXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZXMuYWxwaGE7XG5cdFx0fVxuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHZhbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMCwgdmFsKTtcblx0fSxcblx0Z3JlZW46IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdyZ2InLCAxLCB2YWwpO1xuXHR9LFxuXHRibHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgncmdiJywgMiwgdmFsKTtcblx0fSxcblx0aHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0dmFsICU9IDM2MDtcblx0XHRcdHZhbCA9IHZhbCA8IDAgPyAzNjAgKyB2YWwgOiB2YWw7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzbCcsIDAsIHZhbCk7XG5cdH0sXG5cdHNhdHVyYXRpb246IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAxLCB2YWwpO1xuXHR9LFxuXHRsaWdodG5lc3M6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXRDaGFubmVsKCdoc2wnLCAyLCB2YWwpO1xuXHR9LFxuXHRzYXR1cmF0aW9udjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2hzdicsIDEsIHZhbCk7XG5cdH0sXG5cdHdoaXRlbmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2h3YicsIDEsIHZhbCk7XG5cdH0sXG5cdGJsYWNrbmVzczogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2h3YicsIDIsIHZhbCk7XG5cdH0sXG5cdHZhbHVlOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnaHN2JywgMiwgdmFsKTtcblx0fSxcblx0Y3lhbjogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAwLCB2YWwpO1xuXHR9LFxuXHRtYWdlbnRhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbCgnY215aycsIDEsIHZhbCk7XG5cdH0sXG5cdHllbGxvdzogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAyLCB2YWwpO1xuXHR9LFxuXHRibGFjazogZnVuY3Rpb24gKHZhbCkge1xuXHRcdHJldHVybiB0aGlzLnNldENoYW5uZWwoJ2NteWsnLCAzLCB2YWwpO1xuXHR9LFxuXG5cdGhleFN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaGV4U3RyaW5nKHRoaXMudmFsdWVzLnJnYik7XG5cdH0sXG5cdHJnYlN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcucmdiU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRyZ2JhU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5yZ2JhU3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5wZXJjZW50U3RyaW5nKHRoaXMudmFsdWVzLnJnYiwgdGhpcy52YWx1ZXMuYWxwaGEpO1xuXHR9LFxuXHRoc2xTdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmhzbFN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHNsYVN0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzdHJpbmcuaHNsYVN0cmluZyh0aGlzLnZhbHVlcy5oc2wsIHRoaXMudmFsdWVzLmFscGhhKTtcblx0fSxcblx0aHdiU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN0cmluZy5od2JTdHJpbmcodGhpcy52YWx1ZXMuaHdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc3RyaW5nLmtleXdvcmQodGhpcy52YWx1ZXMucmdiLCB0aGlzLnZhbHVlcy5hbHBoYSk7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICh0aGlzLnZhbHVlcy5yZ2JbMF0gPDwgMTYpIHwgKHRoaXMudmFsdWVzLnJnYlsxXSA8PCA4KSB8IHRoaXMudmFsdWVzLnJnYlsyXTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRkYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnZhbHVlcy5yZ2I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGxpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmRhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IDI1NSAtIHRoaXMudmFsdWVzLnJnYltpXTtcblx0XHR9XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ3JnYicsIHJnYik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzJdICs9IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzJdIC09IHRoaXMudmFsdWVzLmhzbFsyXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnZhbHVlcy5oc2xbMV0gKz0gdGhpcy52YWx1ZXMuaHNsWzFdICogcmF0aW87XG5cdFx0dGhpcy5zZXRWYWx1ZXMoJ2hzbCcsIHRoaXMudmFsdWVzLmhzbCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzFdIC09IHRoaXMudmFsdWVzLmhzbFsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dGhpcy52YWx1ZXMuaHdiWzFdICs9IHRoaXMudmFsdWVzLmh3YlsxXSAqIHJhdGlvO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdod2InLCB0aGlzLnZhbHVlcy5od2IpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMudmFsdWVzLmh3YlsyXSArPSB0aGlzLnZhbHVlcy5od2JbMl0gKiByYXRpbztcblx0XHR0aGlzLnNldFZhbHVlcygnaHdiJywgdGhpcy52YWx1ZXMuaHdiKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRncmV5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy52YWx1ZXMucmdiO1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdyZ2InLCBbdmFsLCB2YWwsIHZhbF0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNsZWFyZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdhbHBoYScsIHRoaXMudmFsdWVzLmFscGhhIC0gKHRoaXMudmFsdWVzLmFscGhhICogcmF0aW8pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR0aGlzLnNldFZhbHVlcygnYWxwaGEnLCB0aGlzLnZhbHVlcy5hbHBoYSArICh0aGlzLnZhbHVlcy5hbHBoYSAqIHJhdGlvKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBodWUgPSB0aGlzLnZhbHVlcy5oc2xbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0dGhpcy52YWx1ZXMuaHNsWzBdID0gaHVlO1xuXHRcdHRoaXMuc2V0VmFsdWVzKCdoc2wnLCB0aGlzLnZhbHVlcy5oc2wpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBQb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0ICogaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdCAqL1xuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHR2YXIgY29sb3IxID0gdGhpcztcblx0XHR2YXIgY29sb3IyID0gbWl4aW5Db2xvcjtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKClcblx0XHRcdClcblx0XHRcdC5hbHBoYShjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJnYigpO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGNvbCA9IG5ldyBDb2xvcigpO1xuXHRcdGNvbC52YWx1ZXMgPSBjbG9uZSh0aGlzLnZhbHVlcyk7XG5cdFx0cmV0dXJuIGNvbDtcblx0fVxufTtcblxuQ29sb3IucHJvdG90eXBlLmdldFZhbHVlcyA9IGZ1bmN0aW9uIChzcGFjZSkge1xuXHR2YXIgdmFscyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHR2YWxzW3NwYWNlLmNoYXJBdChpKV0gPSB0aGlzLnZhbHVlc1tzcGFjZV1baV07XG5cdH1cblxuXHRpZiAodGhpcy52YWx1ZXMuYWxwaGEgIT09IDEpIHtcblx0XHR2YWxzLmEgPSB0aGlzLnZhbHVlcy5hbHBoYTtcblx0fVxuXG5cdC8vIHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1LCBhOiAwLjR9XG5cdHJldHVybiB2YWxzO1xufTtcblxuQ29sb3IucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIChzcGFjZSwgdmFscykge1xuXHR2YXIgc3BhY2VzID0ge1xuXHRcdHJnYjogWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddLFxuXHRcdGhzbDogWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnXSxcblx0XHRoc3Y6IFsnaHVlJywgJ3NhdHVyYXRpb24nLCAndmFsdWUnXSxcblx0XHRod2I6IFsnaHVlJywgJ3doaXRlbmVzcycsICdibGFja25lc3MnXSxcblx0XHRjbXlrOiBbJ2N5YW4nLCAnbWFnZW50YScsICd5ZWxsb3cnLCAnYmxhY2snXVxuXHR9O1xuXG5cdHZhciBtYXhlcyA9IHtcblx0XHRyZ2I6IFsyNTUsIDI1NSwgMjU1XSxcblx0XHRoc2w6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRoc3Y6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRod2I6IFszNjAsIDEwMCwgMTAwXSxcblx0XHRjbXlrOiBbMTAwLCAxMDAsIDEwMCwgMTAwXVxuXHR9O1xuXG5cdHZhciBpO1xuXHR2YXIgYWxwaGEgPSAxO1xuXHRpZiAoc3BhY2UgPT09ICdhbHBoYScpIHtcblx0XHRhbHBoYSA9IHZhbHM7XG5cdH0gZWxzZSBpZiAodmFscy5sZW5ndGgpIHtcblx0XHQvLyBbMTAsIDEwLCAxMF1cblx0XHR0aGlzLnZhbHVlc1tzcGFjZV0gPSB2YWxzLnNsaWNlKDAsIHNwYWNlLmxlbmd0aCk7XG5cdFx0YWxwaGEgPSB2YWxzW3NwYWNlLmxlbmd0aF07XG5cdH0gZWxzZSBpZiAodmFsc1tzcGFjZS5jaGFyQXQoMCldICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyB7cjogMTAsIGc6IDEwLCBiOiAxMH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IHZhbHNbc3BhY2UuY2hhckF0KGkpXTtcblx0XHR9XG5cblx0XHRhbHBoYSA9IHZhbHMuYTtcblx0fSBlbHNlIGlmICh2YWxzW3NwYWNlc1tzcGFjZV1bMF1dICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyB7cmVkOiAxMCwgZ3JlZW46IDEwLCBibHVlOiAxMH1cblx0XHR2YXIgY2hhbnMgPSBzcGFjZXNbc3BhY2VdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLnZhbHVlc1tzcGFjZV1baV0gPSB2YWxzW2NoYW5zW2ldXTtcblx0XHR9XG5cblx0XHRhbHBoYSA9IHZhbHMuYWxwaGE7XG5cdH1cblxuXHR0aGlzLnZhbHVlcy5hbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIChhbHBoYSA9PT0gdW5kZWZpbmVkID8gdGhpcy52YWx1ZXMuYWxwaGEgOiBhbHBoYSkpKTtcblxuXHRpZiAoc3BhY2UgPT09ICdhbHBoYScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgY2FwcGVkO1xuXG5cdC8vIGNhcCB2YWx1ZXMgb2YgdGhlIHNwYWNlIHByaW9yIGNvbnZlcnRpbmcgYWxsIHZhbHVlc1xuXHRmb3IgKGkgPSAwOyBpIDwgc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRjYXBwZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXhlc1tzcGFjZV1baV0sIHRoaXMudmFsdWVzW3NwYWNlXVtpXSkpO1xuXHRcdHRoaXMudmFsdWVzW3NwYWNlXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcblx0fVxuXG5cdC8vIGNvbnZlcnQgdG8gYWxsIHRoZSBvdGhlciBjb2xvciBzcGFjZXNcblx0Zm9yICh2YXIgc25hbWUgaW4gc3BhY2VzKSB7XG5cdFx0aWYgKHNuYW1lICE9PSBzcGFjZSkge1xuXHRcdFx0dGhpcy52YWx1ZXNbc25hbWVdID0gY29udmVydFtzcGFjZV1bc25hbWVdKHRoaXMudmFsdWVzW3NwYWNlXSk7XG5cdFx0fVxuXG5cdFx0Ly8gY2FwIHZhbHVlc1xuXHRcdGZvciAoaSA9IDA7IGkgPCBzbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y2FwcGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4ZXNbc25hbWVdW2ldLCB0aGlzLnZhbHVlc1tzbmFtZV1baV0pKTtcblx0XHRcdHRoaXMudmFsdWVzW3NuYW1lXVtpXSA9IE1hdGgucm91bmQoY2FwcGVkKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRTcGFjZSA9IGZ1bmN0aW9uIChzcGFjZSwgYXJncykge1xuXHR2YXIgdmFscyA9IGFyZ3NbMF07XG5cblx0aWYgKHZhbHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIGNvbG9yLnJnYigpXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWVzKHNwYWNlKTtcblx0fVxuXG5cdC8vIGNvbG9yLnJnYigxMCwgMTAsIDEwKVxuXHRpZiAodHlwZW9mIHZhbHMgPT09ICdudW1iZXInKSB7XG5cdFx0dmFscyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xuXHR9XG5cblx0dGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHZhbHMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbkNvbG9yLnByb3RvdHlwZS5zZXRDaGFubmVsID0gZnVuY3Rpb24gKHNwYWNlLCBpbmRleCwgdmFsKSB7XG5cdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIGNvbG9yLnJlZCgpXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzW3NwYWNlXVtpbmRleF07XG5cdH0gZWxzZSBpZiAodmFsID09PSB0aGlzLnZhbHVlc1tzcGFjZV1baW5kZXhdKSB7XG5cdFx0Ly8gY29sb3IucmVkKGNvbG9yLnJlZCgpKVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Ly8gY29sb3IucmVkKDEwMClcblx0dGhpcy52YWx1ZXNbc3BhY2VdW2luZGV4XSA9IHZhbDtcblx0dGhpcy5zZXRWYWx1ZXMoc3BhY2UsIHRoaXMudmFsdWVzW3NwYWNlXSk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuIiwidmFyIGNsb25lID0gKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsb25lcyAoY29waWVzKSBhbiBPYmplY3QgdXNpbmcgZGVlcCBjb3B5aW5nLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gc3VwcG9ydHMgY2lyY3VsYXIgcmVmZXJlbmNlcyBieSBkZWZhdWx0LCBidXQgaWYgeW91IGFyZSBjZXJ0YWluXG4gKiB0aGVyZSBhcmUgbm8gY2lyY3VsYXIgcmVmZXJlbmNlcyBpbiB5b3VyIG9iamVjdCwgeW91IGNhbiBzYXZlIHNvbWUgQ1BVIHRpbWVcbiAqIGJ5IGNhbGxpbmcgY2xvbmUob2JqLCBmYWxzZSkuXG4gKlxuICogQ2F1dGlvbjogaWYgYGNpcmN1bGFyYCBpcyBmYWxzZSBhbmQgYHBhcmVudGAgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlcyxcbiAqIHlvdXIgcHJvZ3JhbSBtYXkgZW50ZXIgYW4gaW5maW5pdGUgbG9vcCBhbmQgY3Jhc2guXG4gKlxuICogQHBhcmFtIGBwYXJlbnRgIC0gdGhlIG9iamVjdCB0byBiZSBjbG9uZWRcbiAqIEBwYXJhbSBgY2lyY3VsYXJgIC0gc2V0IHRvIHRydWUgaWYgdGhlIG9iamVjdCB0byBiZSBjbG9uZWQgbWF5IGNvbnRhaW5cbiAqICAgIGNpcmN1bGFyIHJlZmVyZW5jZXMuIChvcHRpb25hbCAtIHRydWUgYnkgZGVmYXVsdClcbiAqIEBwYXJhbSBgZGVwdGhgIC0gc2V0IHRvIGEgbnVtYmVyIGlmIHRoZSBvYmplY3QgaXMgb25seSB0byBiZSBjbG9uZWQgdG9cbiAqICAgIGEgcGFydGljdWxhciBkZXB0aC4gKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gSW5maW5pdHkpXG4gKiBAcGFyYW0gYHByb3RvdHlwZWAgLSBzZXRzIHRoZSBwcm90b3R5cGUgdG8gYmUgdXNlZCB3aGVuIGNsb25pbmcgYW4gb2JqZWN0LlxuICogICAgKG9wdGlvbmFsIC0gZGVmYXVsdHMgdG8gcGFyZW50IHByb3RvdHlwZSkuXG4qL1xuZnVuY3Rpb24gY2xvbmUocGFyZW50LCBjaXJjdWxhciwgZGVwdGgsIHByb3RvdHlwZSkge1xuICB2YXIgZmlsdGVyO1xuICBpZiAodHlwZW9mIGNpcmN1bGFyID09PSAnb2JqZWN0Jykge1xuICAgIGRlcHRoID0gY2lyY3VsYXIuZGVwdGg7XG4gICAgcHJvdG90eXBlID0gY2lyY3VsYXIucHJvdG90eXBlO1xuICAgIGZpbHRlciA9IGNpcmN1bGFyLmZpbHRlcjtcbiAgICBjaXJjdWxhciA9IGNpcmN1bGFyLmNpcmN1bGFyXG4gIH1cbiAgLy8gbWFpbnRhaW4gdHdvIGFycmF5cyBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcywgd2hlcmUgY29ycmVzcG9uZGluZyBwYXJlbnRzXG4gIC8vIGFuZCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGluZGV4XG4gIHZhciBhbGxQYXJlbnRzID0gW107XG4gIHZhciBhbGxDaGlsZHJlbiA9IFtdO1xuXG4gIHZhciB1c2VCdWZmZXIgPSB0eXBlb2YgQnVmZmVyICE9ICd1bmRlZmluZWQnO1xuXG4gIGlmICh0eXBlb2YgY2lyY3VsYXIgPT0gJ3VuZGVmaW5lZCcpXG4gICAgY2lyY3VsYXIgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZGVwdGggPT0gJ3VuZGVmaW5lZCcpXG4gICAgZGVwdGggPSBJbmZpbml0eTtcblxuICAvLyByZWN1cnNlIHRoaXMgZnVuY3Rpb24gc28gd2UgZG9uJ3QgcmVzZXQgYWxsUGFyZW50cyBhbmQgYWxsQ2hpbGRyZW5cbiAgZnVuY3Rpb24gX2Nsb25lKHBhcmVudCwgZGVwdGgpIHtcbiAgICAvLyBjbG9uaW5nIG51bGwgYWx3YXlzIHJldHVybnMgbnVsbFxuICAgIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgICByZXR1cm4gbnVsbDtcblxuICAgIGlmIChkZXB0aCA9PSAwKVxuICAgICAgcmV0dXJuIHBhcmVudDtcblxuICAgIHZhciBjaGlsZDtcbiAgICB2YXIgcHJvdG87XG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKGNsb25lLl9faXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IFtdO1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc1JlZ0V4cChwYXJlbnQpKSB7XG4gICAgICBjaGlsZCA9IG5ldyBSZWdFeHAocGFyZW50LnNvdXJjZSwgX19nZXRSZWdFeHBGbGFncyhwYXJlbnQpKTtcbiAgICAgIGlmIChwYXJlbnQubGFzdEluZGV4KSBjaGlsZC5sYXN0SW5kZXggPSBwYXJlbnQubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAoY2xvbmUuX19pc0RhdGUocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgRGF0ZShwYXJlbnQuZ2V0VGltZSgpKTtcbiAgICB9IGVsc2UgaWYgKHVzZUJ1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIocGFyZW50KSkge1xuICAgICAgY2hpbGQgPSBuZXcgQnVmZmVyKHBhcmVudC5sZW5ndGgpO1xuICAgICAgcGFyZW50LmNvcHkoY2hpbGQpO1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHByb3RvdHlwZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpO1xuICAgICAgICBjaGlsZCA9IE9iamVjdC5jcmVhdGUocHJvdG8pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpO1xuICAgICAgICBwcm90byA9IHByb3RvdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2lyY3VsYXIpIHtcbiAgICAgIHZhciBpbmRleCA9IGFsbFBhcmVudHMuaW5kZXhPZihwYXJlbnQpO1xuXG4gICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGFsbENoaWxkcmVuW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGFsbFBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgYWxsQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSBpbiBwYXJlbnQpIHtcbiAgICAgIHZhciBhdHRycztcbiAgICAgIGlmIChwcm90bykge1xuICAgICAgICBhdHRycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXR0cnMgJiYgYXR0cnMuc2V0ID09IG51bGwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjaGlsZFtpXSA9IF9jbG9uZShwYXJlbnRbaV0sIGRlcHRoIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgcmV0dXJuIF9jbG9uZShwYXJlbnQsIGRlcHRoKTtcbn1cblxuLyoqXG4gKiBTaW1wbGUgZmxhdCBjbG9uZSB1c2luZyBwcm90b3R5cGUsIGFjY2VwdHMgb25seSBvYmplY3RzLCB1c2VmdWxsIGZvciBwcm9wZXJ0eVxuICogb3ZlcnJpZGUgb24gRkxBVCBjb25maWd1cmF0aW9uIG9iamVjdCAobm8gbmVzdGVkIHByb3BzKS5cbiAqXG4gKiBVU0UgV0lUSCBDQVVUSU9OISBUaGlzIG1heSBub3QgYmVoYXZlIGFzIHlvdSB3aXNoIGlmIHlvdSBkbyBub3Qga25vdyBob3cgdGhpc1xuICogd29ya3MuXG4gKi9cbmNsb25lLmNsb25lUHJvdG90eXBlID0gZnVuY3Rpb24gY2xvbmVQcm90b3R5cGUocGFyZW50KSB7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIGMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgYy5wcm90b3R5cGUgPSBwYXJlbnQ7XG4gIHJldHVybiBuZXcgYygpO1xufTtcblxuLy8gcHJpdmF0ZSB1dGlsaXR5IGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBfX29ialRvU3RyKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn07XG5jbG9uZS5fX29ialRvU3RyID0gX19vYmpUb1N0cjtcblxuZnVuY3Rpb24gX19pc0RhdGUobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IERhdGVdJztcbn07XG5jbG9uZS5fX2lzRGF0ZSA9IF9faXNEYXRlO1xuXG5mdW5jdGlvbiBfX2lzQXJyYXkobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIF9fb2JqVG9TdHIobykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuY2xvbmUuX19pc0FycmF5ID0gX19pc0FycmF5O1xuXG5mdW5jdGlvbiBfX2lzUmVnRXhwKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBfX29ialRvU3RyKG8pID09PSAnW29iamVjdCBSZWdFeHBdJztcbn07XG5jbG9uZS5fX2lzUmVnRXhwID0gX19pc1JlZ0V4cDtcblxuZnVuY3Rpb24gX19nZXRSZWdFeHBGbGFncyhyZSkge1xuICB2YXIgZmxhZ3MgPSAnJztcbiAgaWYgKHJlLmdsb2JhbCkgZmxhZ3MgKz0gJ2cnO1xuICBpZiAocmUuaWdub3JlQ2FzZSkgZmxhZ3MgKz0gJ2knO1xuICBpZiAocmUubXVsdGlsaW5lKSBmbGFncyArPSAnbSc7XG4gIHJldHVybiBmbGFncztcbn07XG5jbG9uZS5fX2dldFJlZ0V4cEZsYWdzID0gX19nZXRSZWdFeHBGbGFncztcblxucmV0dXJuIGNsb25lO1xufSkoKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY2xvbmU7XG59XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSg3MSk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogM30sXG5cdGhzbDoge2NoYW5uZWxzOiAzfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDN9LFxuXHRod2I6IHtjaGFubmVsczogM30sXG5cdGNteWs6IHtjaGFubmVsczogNH0sXG5cdHh5ejoge2NoYW5uZWxzOiAzfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDN9LFxuXHRsY2g6IHtjaGFubmVsczogM30sXG5cdGhleDoge2NoYW5uZWxzOiAxfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDF9LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDF9LFxuXHRoY2c6IHtjaGFubmVsczogM30sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDN9XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBwcm9wZXJ0eVxuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgdjtcblxuXHRpZiAobWF4ID09PSAwKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IChkZWx0YSAvIG1heCAqIDEwMDApIC8gMTA7XG5cdH1cblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdHYgPSAoKG1heCAvIDI1NSkgKiAxMDAwKSAvIDEwO1xuXG5cdHJldHVybiBbaCwgcywgdl07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn0vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChtYXRjaFswXSwgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGFsaWNlYmx1ZTogWzI0MCwgMjQ4LCAyNTVdLFxuXHRhbnRpcXVld2hpdGU6IFsyNTAsIDIzNSwgMjE1XSxcblx0YXF1YTogWzAsIDI1NSwgMjU1XSxcblx0YXF1YW1hcmluZTogWzEyNywgMjU1LCAyMTJdLFxuXHRhenVyZTogWzI0MCwgMjU1LCAyNTVdLFxuXHRiZWlnZTogWzI0NSwgMjQ1LCAyMjBdLFxuXHRiaXNxdWU6IFsyNTUsIDIyOCwgMTk2XSxcblx0YmxhY2s6IFswLCAwLCAwXSxcblx0YmxhbmNoZWRhbG1vbmQ6IFsyNTUsIDIzNSwgMjA1XSxcblx0Ymx1ZTogWzAsIDAsIDI1NV0sXG5cdGJsdWV2aW9sZXQ6IFsxMzgsIDQzLCAyMjZdLFxuXHRicm93bjogWzE2NSwgNDIsIDQyXSxcblx0YnVybHl3b29kOiBbMjIyLCAxODQsIDEzNV0sXG5cdGNhZGV0Ymx1ZTogWzk1LCAxNTgsIDE2MF0sXG5cdGNoYXJ0cmV1c2U6IFsxMjcsIDI1NSwgMF0sXG5cdGNob2NvbGF0ZTogWzIxMCwgMTA1LCAzMF0sXG5cdGNvcmFsOiBbMjU1LCAxMjcsIDgwXSxcblx0Y29ybmZsb3dlcmJsdWU6IFsxMDAsIDE0OSwgMjM3XSxcblx0Y29ybnNpbGs6IFsyNTUsIDI0OCwgMjIwXSxcblx0Y3JpbXNvbjogWzIyMCwgMjAsIDYwXSxcblx0Y3lhbjogWzAsIDI1NSwgMjU1XSxcblx0ZGFya2JsdWU6IFswLCAwLCAxMzldLFxuXHRkYXJrY3lhbjogWzAsIDEzOSwgMTM5XSxcblx0ZGFya2dvbGRlbnJvZDogWzE4NCwgMTM0LCAxMV0sXG5cdGRhcmtncmF5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtncmVlbjogWzAsIDEwMCwgMF0sXG5cdGRhcmtncmV5OiBbMTY5LCAxNjksIDE2OV0sXG5cdGRhcmtraGFraTogWzE4OSwgMTgzLCAxMDddLFxuXHRkYXJrbWFnZW50YTogWzEzOSwgMCwgMTM5XSxcblx0ZGFya29saXZlZ3JlZW46IFs4NSwgMTA3LCA0N10sXG5cdGRhcmtvcmFuZ2U6IFsyNTUsIDE0MCwgMF0sXG5cdGRhcmtvcmNoaWQ6IFsxNTMsIDUwLCAyMDRdLFxuXHRkYXJrcmVkOiBbMTM5LCAwLCAwXSxcblx0ZGFya3NhbG1vbjogWzIzMywgMTUwLCAxMjJdLFxuXHRkYXJrc2VhZ3JlZW46IFsxNDMsIDE4OCwgMTQzXSxcblx0ZGFya3NsYXRlYmx1ZTogWzcyLCA2MSwgMTM5XSxcblx0ZGFya3NsYXRlZ3JheTogWzQ3LCA3OSwgNzldLFxuXHRkYXJrc2xhdGVncmV5OiBbNDcsIDc5LCA3OV0sXG5cdGRhcmt0dXJxdW9pc2U6IFswLCAyMDYsIDIwOV0sXG5cdGRhcmt2aW9sZXQ6IFsxNDgsIDAsIDIxMV0sXG5cdGRlZXBwaW5rOiBbMjU1LCAyMCwgMTQ3XSxcblx0ZGVlcHNreWJsdWU6IFswLCAxOTEsIDI1NV0sXG5cdGRpbWdyYXk6IFsxMDUsIDEwNSwgMTA1XSxcblx0ZGltZ3JleTogWzEwNSwgMTA1LCAxMDVdLFxuXHRkb2RnZXJibHVlOiBbMzAsIDE0NCwgMjU1XSxcblx0ZmlyZWJyaWNrOiBbMTc4LCAzNCwgMzRdLFxuXHRmbG9yYWx3aGl0ZTogWzI1NSwgMjUwLCAyNDBdLFxuXHRmb3Jlc3RncmVlbjogWzM0LCAxMzksIDM0XSxcblx0ZnVjaHNpYTogWzI1NSwgMCwgMjU1XSxcblx0Z2FpbnNib3JvOiBbMjIwLCAyMjAsIDIyMF0sXG5cdGdob3N0d2hpdGU6IFsyNDgsIDI0OCwgMjU1XSxcblx0Z29sZDogWzI1NSwgMjE1LCAwXSxcblx0Z29sZGVucm9kOiBbMjE4LCAxNjUsIDMyXSxcblx0Z3JheTogWzEyOCwgMTI4LCAxMjhdLFxuXHRncmVlbjogWzAsIDEyOCwgMF0sXG5cdGdyZWVueWVsbG93OiBbMTczLCAyNTUsIDQ3XSxcblx0Z3JleTogWzEyOCwgMTI4LCAxMjhdLFxuXHRob25leWRldzogWzI0MCwgMjU1LCAyNDBdLFxuXHRob3RwaW5rOiBbMjU1LCAxMDUsIDE4MF0sXG5cdGluZGlhbnJlZDogWzIwNSwgOTIsIDkyXSxcblx0aW5kaWdvOiBbNzUsIDAsIDEzMF0sXG5cdGl2b3J5OiBbMjU1LCAyNTUsIDI0MF0sXG5cdGtoYWtpOiBbMjQwLCAyMzAsIDE0MF0sXG5cdGxhdmVuZGVyOiBbMjMwLCAyMzAsIDI1MF0sXG5cdGxhdmVuZGVyYmx1c2g6IFsyNTUsIDI0MCwgMjQ1XSxcblx0bGF3bmdyZWVuOiBbMTI0LCAyNTIsIDBdLFxuXHRsZW1vbmNoaWZmb246IFsyNTUsIDI1MCwgMjA1XSxcblx0bGlnaHRibHVlOiBbMTczLCAyMTYsIDIzMF0sXG5cdGxpZ2h0Y29yYWw6IFsyNDAsIDEyOCwgMTI4XSxcblx0bGlnaHRjeWFuOiBbMjI0LCAyNTUsIDI1NV0sXG5cdGxpZ2h0Z29sZGVucm9keWVsbG93OiBbMjUwLCAyNTAsIDIxMF0sXG5cdGxpZ2h0Z3JheTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodGdyZWVuOiBbMTQ0LCAyMzgsIDE0NF0sXG5cdGxpZ2h0Z3JleTogWzIxMSwgMjExLCAyMTFdLFxuXHRsaWdodHBpbms6IFsyNTUsIDE4MiwgMTkzXSxcblx0bGlnaHRzYWxtb246IFsyNTUsIDE2MCwgMTIyXSxcblx0bGlnaHRzZWFncmVlbjogWzMyLCAxNzgsIDE3MF0sXG5cdGxpZ2h0c2t5Ymx1ZTogWzEzNSwgMjA2LCAyNTBdLFxuXHRsaWdodHNsYXRlZ3JheTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHNsYXRlZ3JleTogWzExOSwgMTM2LCAxNTNdLFxuXHRsaWdodHN0ZWVsYmx1ZTogWzE3NiwgMTk2LCAyMjJdLFxuXHRsaWdodHllbGxvdzogWzI1NSwgMjU1LCAyMjRdLFxuXHRsaW1lOiBbMCwgMjU1LCAwXSxcblx0bGltZWdyZWVuOiBbNTAsIDIwNSwgNTBdLFxuXHRsaW5lbjogWzI1MCwgMjQwLCAyMzBdLFxuXHRtYWdlbnRhOiBbMjU1LCAwLCAyNTVdLFxuXHRtYXJvb246IFsxMjgsIDAsIDBdLFxuXHRtZWRpdW1hcXVhbWFyaW5lOiBbMTAyLCAyMDUsIDE3MF0sXG5cdG1lZGl1bWJsdWU6IFswLCAwLCAyMDVdLFxuXHRtZWRpdW1vcmNoaWQ6IFsxODYsIDg1LCAyMTFdLFxuXHRtZWRpdW1wdXJwbGU6IFsxNDcsIDExMiwgMjE5XSxcblx0bWVkaXVtc2VhZ3JlZW46IFs2MCwgMTc5LCAxMTNdLFxuXHRtZWRpdW1zbGF0ZWJsdWU6IFsxMjMsIDEwNCwgMjM4XSxcblx0bWVkaXVtc3ByaW5nZ3JlZW46IFswLCAyNTAsIDE1NF0sXG5cdG1lZGl1bXR1cnF1b2lzZTogWzcyLCAyMDksIDIwNF0sXG5cdG1lZGl1bXZpb2xldHJlZDogWzE5OSwgMjEsIDEzM10sXG5cdG1pZG5pZ2h0Ymx1ZTogWzI1LCAyNSwgMTEyXSxcblx0bWludGNyZWFtOiBbMjQ1LCAyNTUsIDI1MF0sXG5cdG1pc3R5cm9zZTogWzI1NSwgMjI4LCAyMjVdLFxuXHRtb2NjYXNpbjogWzI1NSwgMjI4LCAxODFdLFxuXHRuYXZham93aGl0ZTogWzI1NSwgMjIyLCAxNzNdLFxuXHRuYXZ5OiBbMCwgMCwgMTI4XSxcblx0b2xkbGFjZTogWzI1MywgMjQ1LCAyMzBdLFxuXHRvbGl2ZTogWzEyOCwgMTI4LCAwXSxcblx0b2xpdmVkcmFiOiBbMTA3LCAxNDIsIDM1XSxcblx0b3JhbmdlOiBbMjU1LCAxNjUsIDBdLFxuXHRvcmFuZ2VyZWQ6IFsyNTUsIDY5LCAwXSxcblx0b3JjaGlkOiBbMjE4LCAxMTIsIDIxNF0sXG5cdHBhbGVnb2xkZW5yb2Q6IFsyMzgsIDIzMiwgMTcwXSxcblx0cGFsZWdyZWVuOiBbMTUyLCAyNTEsIDE1Ml0sXG5cdHBhbGV0dXJxdW9pc2U6IFsxNzUsIDIzOCwgMjM4XSxcblx0cGFsZXZpb2xldHJlZDogWzIxOSwgMTEyLCAxNDddLFxuXHRwYXBheWF3aGlwOiBbMjU1LCAyMzksIDIxM10sXG5cdHBlYWNocHVmZjogWzI1NSwgMjE4LCAxODVdLFxuXHRwZXJ1OiBbMjA1LCAxMzMsIDYzXSxcblx0cGluazogWzI1NSwgMTkyLCAyMDNdLFxuXHRwbHVtOiBbMjIxLCAxNjAsIDIyMV0sXG5cdHBvd2RlcmJsdWU6IFsxNzYsIDIyNCwgMjMwXSxcblx0cHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuXHRyZWJlY2NhcHVycGxlOiBbMTAyLCA1MSwgMTUzXSxcblx0cmVkOiBbMjU1LCAwLCAwXSxcblx0cm9zeWJyb3duOiBbMTg4LCAxNDMsIDE0M10sXG5cdHJveWFsYmx1ZTogWzY1LCAxMDUsIDIyNV0sXG5cdHNhZGRsZWJyb3duOiBbMTM5LCA2OSwgMTldLFxuXHRzYWxtb246IFsyNTAsIDEyOCwgMTE0XSxcblx0c2FuZHlicm93bjogWzI0NCwgMTY0LCA5Nl0sXG5cdHNlYWdyZWVuOiBbNDYsIDEzOSwgODddLFxuXHRzZWFzaGVsbDogWzI1NSwgMjQ1LCAyMzhdLFxuXHRzaWVubmE6IFsxNjAsIDgyLCA0NV0sXG5cdHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuXHRza3libHVlOiBbMTM1LCAyMDYsIDIzNV0sXG5cdHNsYXRlYmx1ZTogWzEwNiwgOTAsIDIwNV0sXG5cdHNsYXRlZ3JheTogWzExMiwgMTI4LCAxNDRdLFxuXHRzbGF0ZWdyZXk6IFsxMTIsIDEyOCwgMTQ0XSxcblx0c25vdzogWzI1NSwgMjUwLCAyNTBdLFxuXHRzcHJpbmdncmVlbjogWzAsIDI1NSwgMTI3XSxcblx0c3RlZWxibHVlOiBbNzAsIDEzMCwgMTgwXSxcblx0dGFuOiBbMjEwLCAxODAsIDE0MF0sXG5cdHRlYWw6IFswLCAxMjgsIDEyOF0sXG5cdHRoaXN0bGU6IFsyMTYsIDE5MSwgMjE2XSxcblx0dG9tYXRvOiBbMjU1LCA5OSwgNzFdLFxuXHR0dXJxdW9pc2U6IFs2NCwgMjI0LCAyMDhdLFxuXHR2aW9sZXQ6IFsyMzgsIDEzMCwgMjM4XSxcblx0d2hlYXQ6IFsyNDUsIDIyMiwgMTc5XSxcblx0d2hpdGU6IFsyNTUsIDI1NSwgMjU1XSxcblx0d2hpdGVzbW9rZTogWzI0NSwgMjQ1LCAyNDVdLFxuXHR5ZWxsb3c6IFsyNTUsIDI1NSwgMF0sXG5cdHllbGxvd2dyZWVuOiBbMTU0LCAyMDUsIDUwXVxufTtcblxuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSg3MCk7XG52YXIgcm91dGUgPSByZXF1aXJlKDczKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSg3MCk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG4vLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKDc1KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICBnZXRSZ2JhOiBnZXRSZ2JhLFxuICAgZ2V0SHNsYTogZ2V0SHNsYSxcbiAgIGdldFJnYjogZ2V0UmdiLFxuICAgZ2V0SHNsOiBnZXRIc2wsXG4gICBnZXRId2I6IGdldEh3YixcbiAgIGdldEFscGhhOiBnZXRBbHBoYSxcblxuICAgaGV4U3RyaW5nOiBoZXhTdHJpbmcsXG4gICByZ2JTdHJpbmc6IHJnYlN0cmluZyxcbiAgIHJnYmFTdHJpbmc6IHJnYmFTdHJpbmcsXG4gICBwZXJjZW50U3RyaW5nOiBwZXJjZW50U3RyaW5nLFxuICAgcGVyY2VudGFTdHJpbmc6IHBlcmNlbnRhU3RyaW5nLFxuICAgaHNsU3RyaW5nOiBoc2xTdHJpbmcsXG4gICBoc2xhU3RyaW5nOiBoc2xhU3RyaW5nLFxuICAgaHdiU3RyaW5nOiBod2JTdHJpbmcsXG4gICBrZXl3b3JkOiBrZXl3b3JkXG59XG5cbmZ1bmN0aW9uIGdldFJnYmEoc3RyaW5nKSB7XG4gICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgfVxuICAgdmFyIGFiYnIgPSAgL14jKFthLWZBLUYwLTldezN9KSQvLFxuICAgICAgIGhleCA9ICAvXiMoW2EtZkEtRjAtOV17Nn0pJC8sXG4gICAgICAgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLFxuICAgICAgIGtleXdvcmQgPSAvKFxcRCspLztcblxuICAgdmFyIHJnYiA9IFswLCAwLCAwXSxcbiAgICAgICBhID0gMSxcbiAgICAgICBtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgbWF0Y2ggPSBtYXRjaFsxXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICByZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG4gICAgICBtYXRjaCA9IG1hdGNoWzFdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkgKiAyLCBpICogMiArIDIpLCAxNik7XG4gICAgICB9XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgIHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSk7XG4gICAgICB9XG4gICAgICBhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICB9XG4gICBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgcmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcbiAgICAgIH1cbiAgICAgIGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgIH1cbiAgIGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG4gICAgICBpZiAobWF0Y2hbMV0gPT0gXCJ0cmFuc3BhcmVudFwiKSB7XG4gICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xuICAgICAgfVxuICAgICAgcmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG4gICAgICBpZiAoIXJnYikge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgfVxuXG4gICBmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmdiW2ldID0gc2NhbGUocmdiW2ldLCAwLCAyNTUpO1xuICAgfVxuICAgaWYgKCFhICYmIGEgIT0gMCkge1xuICAgICAgYSA9IDE7XG4gICB9XG4gICBlbHNlIHtcbiAgICAgIGEgPSBzY2FsZShhLCAwLCAxKTtcbiAgIH1cbiAgIHJnYlszXSA9IGE7XG4gICByZXR1cm4gcmdiO1xufVxuXG5mdW5jdGlvbiBnZXRIc2xhKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS87XG4gICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcbiAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG4gICAgICB2YXIgaCA9IHNjYWxlKHBhcnNlSW50KG1hdGNoWzFdKSwgMCwgMzYwKSxcbiAgICAgICAgICBzID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCksXG4gICAgICAgICAgbCA9IHNjYWxlKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApLFxuICAgICAgICAgIGEgPSBzY2FsZShpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuICAgICAgcmV0dXJuIFtoLCBzLCBsLCBhXTtcbiAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0SHdiKHN0cmluZykge1xuICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgIH1cbiAgIHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvO1xuICAgdmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG4gICBpZiAobWF0Y2gpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcbiAgICAgIHZhciBoID0gc2NhbGUocGFyc2VJbnQobWF0Y2hbMV0pLCAwLCAzNjApLFxuICAgICAgICAgIHcgPSBzY2FsZShwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKSxcbiAgICAgICAgICBiID0gc2NhbGUocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCksXG4gICAgICAgICAgYSA9IHNjYWxlKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG4gICAgICByZXR1cm4gW2gsIHcsIGIsIGFdO1xuICAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZ2Ioc3RyaW5nKSB7XG4gICB2YXIgcmdiYSA9IGdldFJnYmEoc3RyaW5nKTtcbiAgIHJldHVybiByZ2JhICYmIHJnYmEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEhzbChzdHJpbmcpIHtcbiAgdmFyIGhzbGEgPSBnZXRIc2xhKHN0cmluZyk7XG4gIHJldHVybiBoc2xhICYmIGhzbGEuc2xpY2UoMCwgMyk7XG59XG5cbmZ1bmN0aW9uIGdldEFscGhhKHN0cmluZykge1xuICAgdmFyIHZhbHMgPSBnZXRSZ2JhKHN0cmluZyk7XG4gICBpZiAodmFscykge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG4gICBlbHNlIGlmICh2YWxzID0gZ2V0SHNsYShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gdmFsc1szXTtcbiAgIH1cbiAgIGVsc2UgaWYgKHZhbHMgPSBnZXRId2Ioc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHZhbHNbM107XG4gICB9XG59XG5cbi8vIGdlbmVyYXRvcnNcbmZ1bmN0aW9uIGhleFN0cmluZyhyZ2IpIHtcbiAgIHJldHVybiBcIiNcIiArIGhleERvdWJsZShyZ2JbMF0pICsgaGV4RG91YmxlKHJnYlsxXSlcbiAgICAgICAgICAgICAgKyBoZXhEb3VibGUocmdiWzJdKTtcbn1cblxuZnVuY3Rpb24gcmdiU3RyaW5nKHJnYmEsIGFscGhhKSB7XG4gICBpZiAoYWxwaGEgPCAxIHx8IChyZ2JhWzNdICYmIHJnYmFbM10gPCAxKSkge1xuICAgICAgcmV0dXJuIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpO1xuICAgfVxuICAgcmV0dXJuIFwicmdiKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIHJnYmFTdHJpbmcocmdiYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChyZ2JhWzNdICE9PSB1bmRlZmluZWQgPyByZ2JhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiYVswXSArIFwiLCBcIiArIHJnYmFbMV0gKyBcIiwgXCIgKyByZ2JhWzJdXG4gICAgICAgICAgICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbn1cblxuZnVuY3Rpb24gcGVyY2VudFN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAocmdiYVszXSAmJiByZ2JhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSk7XG4gICB9XG4gICB2YXIgciA9IE1hdGgucm91bmQocmdiYVswXS8yNTUgKiAxMDApLFxuICAgICAgIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0vMjU1ICogMTAwKSxcbiAgICAgICBiID0gTWF0aC5yb3VuZChyZ2JhWzJdLzI1NSAqIDEwMCk7XG5cbiAgIHJldHVybiBcInJnYihcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlKVwiO1xufVxuXG5mdW5jdGlvbiBwZXJjZW50YVN0cmluZyhyZ2JhLCBhbHBoYSkge1xuICAgdmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0vMjU1ICogMTAwKSxcbiAgICAgICBnID0gTWF0aC5yb3VuZChyZ2JhWzFdLzI1NSAqIDEwMCksXG4gICAgICAgYiA9IE1hdGgucm91bmQocmdiYVsyXS8yNTUgKiAxMDApO1xuICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiUsIFwiICsgZyArIFwiJSwgXCIgKyBiICsgXCIlLCBcIiArIChhbHBoYSB8fCByZ2JhWzNdIHx8IDEpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbFN0cmluZyhoc2xhLCBhbHBoYSkge1xuICAgaWYgKGFscGhhIDwgMSB8fCAoaHNsYVszXSAmJiBoc2xhWzNdIDwgMSkpIHtcbiAgICAgIHJldHVybiBoc2xhU3RyaW5nKGhzbGEsIGFscGhhKTtcbiAgIH1cbiAgIHJldHVybiBcImhzbChcIiArIGhzbGFbMF0gKyBcIiwgXCIgKyBoc2xhWzFdICsgXCIlLCBcIiArIGhzbGFbMl0gKyBcIiUpXCI7XG59XG5cbmZ1bmN0aW9uIGhzbGFTdHJpbmcoaHNsYSwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChoc2xhWzNdICE9PSB1bmRlZmluZWQgPyBoc2xhWzNdIDogMSk7XG4gICB9XG4gICByZXR1cm4gXCJoc2xhKFwiICsgaHNsYVswXSArIFwiLCBcIiArIGhzbGFbMV0gKyBcIiUsIFwiICsgaHNsYVsyXSArIFwiJSwgXCJcbiAgICAgICAgICAgKyBhbHBoYSArIFwiKVwiO1xufVxuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuZnVuY3Rpb24gaHdiU3RyaW5nKGh3YiwgYWxwaGEpIHtcbiAgIGlmIChhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbHBoYSA9IChod2JbM10gIT09IHVuZGVmaW5lZCA/IGh3YlszXSA6IDEpO1xuICAgfVxuICAgcmV0dXJuIFwiaHdiKFwiICsgaHdiWzBdICsgXCIsIFwiICsgaHdiWzFdICsgXCIlLCBcIiArIGh3YlsyXSArIFwiJVwiXG4gICAgICAgICAgICsgKGFscGhhICE9PSB1bmRlZmluZWQgJiYgYWxwaGEgIT09IDEgPyBcIiwgXCIgKyBhbHBoYSA6IFwiXCIpICsgXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGtleXdvcmQocmdiKSB7XG4gIHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn1cblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gc2NhbGUobnVtLCBtaW4sIG1heCkge1xuICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/IFwiMFwiICsgc3RyIDogc3RyO1xufVxuXG5cbi8vY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcbiAgIHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubGluZWFyID0gbGluZWFyO1xuZXhwb3J0cy5lYXNlSW5TaW5lID0gZWFzZUluU2luZTtcbmV4cG9ydHMuZWFzZU91dFNpbmUgPSBlYXNlT3V0U2luZTtcbmV4cG9ydHMuZWFzZUluT3V0U2luZSA9IGVhc2VJbk91dFNpbmU7XG5leHBvcnRzLmVhc2VJblF1YWQgPSBlYXNlSW5RdWFkO1xuZXhwb3J0cy5lYXNlT3V0UXVhZCA9IGVhc2VPdXRRdWFkO1xuZXhwb3J0cy5lYXNlSW5PdXRRdWFkID0gZWFzZUluT3V0UXVhZDtcbmV4cG9ydHMuZWFzZUluQ3ViaWMgPSBlYXNlSW5DdWJpYztcbmV4cG9ydHMuZWFzZU91dEN1YmljID0gZWFzZU91dEN1YmljO1xuZXhwb3J0cy5lYXNlSW5PdXRDdWJpYyA9IGVhc2VJbk91dEN1YmljO1xuZXhwb3J0cy5lYXNlSW5RdWFydCA9IGVhc2VJblF1YXJ0O1xuZXhwb3J0cy5lYXNlT3V0UXVhcnQgPSBlYXNlT3V0UXVhcnQ7XG5leHBvcnRzLmVhc2VJbk91dFF1YXJ0ID0gZWFzZUluT3V0UXVhcnQ7XG5leHBvcnRzLmVhc2VJblF1aW50ID0gZWFzZUluUXVpbnQ7XG5leHBvcnRzLmVhc2VPdXRRdWludCA9IGVhc2VPdXRRdWludDtcbmV4cG9ydHMuZWFzZUluT3V0UXVpbnQgPSBlYXNlSW5PdXRRdWludDtcbmV4cG9ydHMuZWFzZUluRXhwbyA9IGVhc2VJbkV4cG87XG5leHBvcnRzLmVhc2VPdXRFeHBvID0gZWFzZU91dEV4cG87XG5leHBvcnRzLmVhc2VJbk91dEV4cG8gPSBlYXNlSW5PdXRFeHBvO1xuZXhwb3J0cy5lYXNlSW5DaXJjID0gZWFzZUluQ2lyYztcbmV4cG9ydHMuZWFzZU91dENpcmMgPSBlYXNlT3V0Q2lyYztcbmV4cG9ydHMuZWFzZUluT3V0Q2lyYyA9IGVhc2VJbk91dENpcmM7XG5leHBvcnRzLmVhc2VJbkJhY2sgPSBlYXNlSW5CYWNrO1xuZXhwb3J0cy5lYXNlT3V0QmFjayA9IGVhc2VPdXRCYWNrO1xuZXhwb3J0cy5lYXNlSW5PdXRCYWNrID0gZWFzZUluT3V0QmFjaztcbmV4cG9ydHMuZWFzZUluRWxhc3RpYyA9IGVhc2VJbkVsYXN0aWM7XG5leHBvcnRzLmVhc2VPdXRFbGFzdGljID0gZWFzZU91dEVsYXN0aWM7XG5leHBvcnRzLmVhc2VJbk91dEVsYXN0aWMgPSBlYXNlSW5PdXRFbGFzdGljO1xuZXhwb3J0cy5lYXNlT3V0Qm91bmNlID0gZWFzZU91dEJvdW5jZTtcbmV4cG9ydHMuZWFzZUluQm91bmNlID0gZWFzZUluQm91bmNlO1xuZXhwb3J0cy5lYXNlSW5PdXRCb3VuY2UgPSBlYXNlSW5PdXRCb3VuY2U7XG4vLyBCYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ncmUvMTY1MDI5NFxuXG4vLyBObyBlYXNpbmcsIG5vIGFjY2VsZXJhdGlvblxuZnVuY3Rpb24gbGluZWFyKHQpIHtcbiAgICByZXR1cm4gdDtcbn1cblxuLy8gU2xpZ2h0IGFjY2VsZXJhdGlvbiBmcm9tIHplcm8gdG8gZnVsbCBzcGVlZFxuZnVuY3Rpb24gZWFzZUluU2luZSh0KSB7XG4gICAgcmV0dXJuIC0xICogTWF0aC5jb3ModCAqIChNYXRoLlBJIC8gMikpICsgMTtcbn1cblxuLy8gU2xpZ2h0IGRlY2VsZXJhdGlvbiBhdCB0aGUgZW5kXG5mdW5jdGlvbiBlYXNlT3V0U2luZSh0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKHQgKiAoTWF0aC5QSSAvIDIpKTtcbn1cblxuLy8gU2xpZ2h0IGFjY2VsZXJhdGlvbiBhdCBiZWdpbm5pbmcgYW5kIHNsaWdodCBkZWNlbGVyYXRpb24gYXQgZW5kXG5mdW5jdGlvbiBlYXNlSW5PdXRTaW5lKHQpIHtcbiAgICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbn1cblxuLy8gQWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZUluUXVhZCh0KSB7XG4gICAgcmV0dXJuIHQgKiB0O1xufVxuXG4vLyBEZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZU91dFF1YWQodCkge1xuICAgIHJldHVybiB0ICogKDIgLSB0KTtcbn1cblxuLy8gQWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG5mdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDIgKiB0ICogdCA6IC0xICsgKDQgLSAyICogdCkgKiB0O1xufVxuXG4vLyBBY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG5mdW5jdGlvbiBlYXNlSW5DdWJpYyh0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbn1cblxuLy8gRGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VPdXRDdWJpYyh0KSB7XG4gICAgdmFyIHQxID0gdCAtIDE7XG4gICAgcmV0dXJuIHQxICogdDEgKiB0MSArIDE7XG59XG5cbi8vIEFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModCkge1xuICAgIHJldHVybiB0IDwgMC41ID8gNCAqIHQgKiB0ICogdCA6ICh0IC0gMSkgKiAoMiAqIHQgLSAyKSAqICgyICogdCAtIDIpICsgMTtcbn1cblxuLy8gQWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZUluUXVhcnQodCkge1xuICAgIHJldHVybiB0ICogdCAqIHQgKiB0O1xufVxuXG4vLyBEZWNlbGVyYXRpbmcgdG8gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHQpIHtcbiAgICB2YXIgdDEgPSB0IC0gMTtcbiAgICByZXR1cm4gMSAtIHQxICogdDEgKiB0MSAqIHQxO1xufVxuXG4vLyBBY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbmZ1bmN0aW9uIGVhc2VJbk91dFF1YXJ0KHQpIHtcbiAgICB2YXIgdDEgPSB0IC0gMTtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDggKiB0ICogdCAqIHQgKiB0IDogMSAtIDggKiB0MSAqIHQxICogdDEgKiB0MTtcbn1cblxuLy8gQWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZUluUXVpbnQodCkge1xuICAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbn1cblxuLy8gRGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbmZ1bmN0aW9uIGVhc2VPdXRRdWludCh0KSB7XG4gICAgdmFyIHQxID0gdCAtIDE7XG4gICAgcmV0dXJuIDEgKyB0MSAqIHQxICogdDEgKiB0MSAqIHQxO1xufVxuXG4vLyBBY2NlbGVyYXRpb24gdW50aWwgaGFsZndheSwgdGhlbiBkZWNlbGVyYXRpb25cbmZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHQpIHtcbiAgICB2YXIgdDEgPSB0IC0gMTtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDE2ICogdCAqIHQgKiB0ICogdCAqIHQgOiAxICsgMTYgKiB0MSAqIHQxICogdDEgKiB0MSAqIHQxO1xufVxuXG4vLyBBY2NlbGVyYXRlIGV4cG9uZW50aWFsbHkgdW50aWwgZmluaXNoXG5mdW5jdGlvbiBlYXNlSW5FeHBvKHQpIHtcblxuICAgIGlmICh0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xufVxuXG4vLyBJbml0aWFsIGV4cG9uZW50aWFsIGFjY2VsZXJhdGlvbiBzbG93aW5nIHRvIHN0b3BcbmZ1bmN0aW9uIGVhc2VPdXRFeHBvKHQpIHtcblxuICAgIGlmICh0ID09PSAxKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAtTWF0aC5wb3coMiwgLTEwICogdCkgKyAxO1xufVxuXG4vLyBFeHBvbmVudGlhbCBhY2NlbGVyYXRpb24gYW5kIGRlY2VsZXJhdGlvblxuZnVuY3Rpb24gZWFzZUluT3V0RXhwbyh0KSB7XG5cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAqIDI7XG4gICAgdmFyIHNjYWxlZFRpbWUxID0gc2NhbGVkVGltZSAtIDE7XG5cbiAgICBpZiAoc2NhbGVkVGltZSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KDIsIDEwICogc2NhbGVkVGltZTEpO1xuICAgIH1cblxuICAgIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIHNjYWxlZFRpbWUxKSArIDIpO1xufVxuXG4vLyBJbmNyZWFzaW5nIHZlbG9jaXR5IHVudGlsIHN0b3BcbmZ1bmN0aW9uIGVhc2VJbkNpcmModCkge1xuXG4gICAgdmFyIHNjYWxlZFRpbWUgPSB0IC8gMTtcbiAgICByZXR1cm4gLTEgKiAoTWF0aC5zcXJ0KDEgLSBzY2FsZWRUaW1lICogdCkgLSAxKTtcbn1cblxuLy8gU3RhcnQgZmFzdCwgZGVjcmVhc2luZyB2ZWxvY2l0eSB1bnRpbCBzdG9wXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh0KSB7XG5cbiAgICB2YXIgdDEgPSB0IC0gMTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSB0MSAqIHQxKTtcbn1cblxuLy8gRmFzdCBpbmNyZWFzZSBpbiB2ZWxvY2l0eSwgZmFzdCBkZWNyZWFzZSBpbiB2ZWxvY2l0eVxuZnVuY3Rpb24gZWFzZUluT3V0Q2lyYyh0KSB7XG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgKiAyO1xuICAgIHZhciBzY2FsZWRUaW1lMSA9IHNjYWxlZFRpbWUgLSAyO1xuXG4gICAgaWYgKHNjYWxlZFRpbWUgPCAxKSB7XG4gICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gc2NhbGVkVGltZSAqIHNjYWxlZFRpbWUpIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtIHNjYWxlZFRpbWUxICogc2NhbGVkVGltZTEpICsgMSk7XG59XG5cbi8vIFNsb3cgbW92ZW1lbnQgYmFja3dhcmRzIHRoZW4gZmFzdCBzbmFwIHRvIGZpbmlzaFxuZnVuY3Rpb24gZWFzZUluQmFjayh0KSB7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEuNzAxNTggOiBhcmd1bWVudHNbMV07XG5cblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAvIDE7XG4gICAgcmV0dXJuIHNjYWxlZFRpbWUgKiBzY2FsZWRUaW1lICogKChtYWduaXR1ZGUgKyAxKSAqIHNjYWxlZFRpbWUgLSBtYWduaXR1ZGUpO1xufVxuXG4vLyBGYXN0IHNuYXAgdG8gYmFja3dhcmRzIHBvaW50IHRoZW4gc2xvdyByZXNvbHZlIHRvIGZpbmlzaFxuZnVuY3Rpb24gZWFzZU91dEJhY2sodCkge1xuICAgIHZhciBtYWduaXR1ZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxLjcwMTU4IDogYXJndW1lbnRzWzFdO1xuXG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgLyAxIC0gMTtcblxuICAgIHJldHVybiBzY2FsZWRUaW1lICogc2NhbGVkVGltZSAqICgobWFnbml0dWRlICsgMSkgKiBzY2FsZWRUaW1lICsgbWFnbml0dWRlKSArIDE7XG59XG5cbi8vIFNsb3cgbW92ZW1lbnQgYmFja3dhcmRzLCBmYXN0IHNuYXAgdG8gcGFzdCBmaW5pc2gsIHNsb3cgcmVzb2x2ZSB0byBmaW5pc2hcbmZ1bmN0aW9uIGVhc2VJbk91dEJhY2sodCkge1xuICAgIHZhciBtYWduaXR1ZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxLjcwMTU4IDogYXJndW1lbnRzWzFdO1xuXG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgKiAyO1xuICAgIHZhciBzY2FsZWRUaW1lMiA9IHNjYWxlZFRpbWUgLSAyO1xuXG4gICAgdmFyIHMgPSBtYWduaXR1ZGUgKiAxLjUyNTtcblxuICAgIGlmIChzY2FsZWRUaW1lIDwgMSkge1xuXG4gICAgICAgIHJldHVybiAwLjUgKiBzY2FsZWRUaW1lICogc2NhbGVkVGltZSAqICgocyArIDEpICogc2NhbGVkVGltZSAtIHMpO1xuICAgIH1cblxuICAgIHJldHVybiAwLjUgKiAoc2NhbGVkVGltZTIgKiBzY2FsZWRUaW1lMiAqICgocyArIDEpICogc2NhbGVkVGltZTIgKyBzKSArIDIpO1xufVxuLy8gQm91bmNlcyBzbG93bHkgdGhlbiBxdWlja2x5IHRvIGZpbmlzaFxuZnVuY3Rpb24gZWFzZUluRWxhc3RpYyh0KSB7XG4gICAgdmFyIG1hZ25pdHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDAuNyA6IGFyZ3VtZW50c1sxXTtcblxuXG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgLyAxO1xuICAgIHZhciBzY2FsZWRUaW1lMSA9IHNjYWxlZFRpbWUgLSAxO1xuXG4gICAgdmFyIHAgPSAxIC0gbWFnbml0dWRlO1xuICAgIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMSk7XG5cbiAgICByZXR1cm4gLShNYXRoLnBvdygyLCAxMCAqIHNjYWxlZFRpbWUxKSAqIE1hdGguc2luKChzY2FsZWRUaW1lMSAtIHMpICogKDIgKiBNYXRoLlBJKSAvIHApKTtcbn1cblxuLy8gRmFzdCBhY2NlbGVyYXRpb24sIGJvdW5jZXMgdG8gemVyb1xuZnVuY3Rpb24gZWFzZU91dEVsYXN0aWModCkge1xuICAgIHZhciBtYWduaXR1ZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAwLjcgOiBhcmd1bWVudHNbMV07XG5cblxuICAgIHZhciBwID0gMSAtIG1hZ25pdHVkZTtcbiAgICB2YXIgc2NhbGVkVGltZSA9IHQgKiAyO1xuXG4gICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEpO1xuICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiBzY2FsZWRUaW1lKSAqIE1hdGguc2luKChzY2FsZWRUaW1lIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyAxO1xufVxuXG4vLyBTbG93IHN0YXJ0IGFuZCBlbmQsIHR3byBib3VuY2VzIHNhbmR3aWNoIGEgZmFzdCBtb3Rpb25cbmZ1bmN0aW9uIGVhc2VJbk91dEVsYXN0aWModCkge1xuICAgIHZhciBtYWduaXR1ZGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAwLjY1IDogYXJndW1lbnRzWzFdO1xuXG5cbiAgICB2YXIgcCA9IDEgLSBtYWduaXR1ZGU7XG5cbiAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAqIDI7XG4gICAgdmFyIHNjYWxlZFRpbWUxID0gc2NhbGVkVGltZSAtIDE7XG5cbiAgICB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEpO1xuXG4gICAgaWYgKHNjYWxlZFRpbWUgPCAxKSB7XG4gICAgICAgIHJldHVybiAtMC41ICogKE1hdGgucG93KDIsIDEwICogc2NhbGVkVGltZTEpICogTWF0aC5zaW4oKHNjYWxlZFRpbWUxIC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnBvdygyLCAtMTAgKiBzY2FsZWRUaW1lMSkgKiBNYXRoLnNpbigoc2NhbGVkVGltZTEgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIDAuNSArIDE7XG59XG5cbi8vIEJvdW5jZSB0byBjb21wbGV0aW9uXG5mdW5jdGlvbiBlYXNlT3V0Qm91bmNlKHQpIHtcblxuICAgIHZhciBzY2FsZWRUaW1lID0gdCAvIDE7XG5cbiAgICBpZiAoc2NhbGVkVGltZSA8IDEgLyAyLjc1KSB7XG5cbiAgICAgICAgcmV0dXJuIDcuNTYyNSAqIHNjYWxlZFRpbWUgKiBzY2FsZWRUaW1lO1xuICAgIH0gZWxzZSBpZiAoc2NhbGVkVGltZSA8IDIgLyAyLjc1KSB7XG5cbiAgICAgICAgdmFyIHNjYWxlZFRpbWUyID0gc2NhbGVkVGltZSAtIDEuNSAvIDIuNzU7XG4gICAgICAgIHJldHVybiA3LjU2MjUgKiBzY2FsZWRUaW1lMiAqIHNjYWxlZFRpbWUyICsgMC43NTtcbiAgICB9IGVsc2UgaWYgKHNjYWxlZFRpbWUgPCAyLjUgLyAyLjc1KSB7XG5cbiAgICAgICAgdmFyIF9zY2FsZWRUaW1lID0gc2NhbGVkVGltZSAtIDIuMjUgLyAyLjc1O1xuICAgICAgICByZXR1cm4gNy41NjI1ICogX3NjYWxlZFRpbWUgKiBfc2NhbGVkVGltZSArIDAuOTM3NTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIHZhciBfc2NhbGVkVGltZTIgPSBzY2FsZWRUaW1lIC0gMi42MjUgLyAyLjc1O1xuICAgICAgICByZXR1cm4gNy41NjI1ICogX3NjYWxlZFRpbWUyICogX3NjYWxlZFRpbWUyICsgMC45ODQzNzU7XG4gICAgfVxufVxuXG4vLyBCb3VuY2UgaW5jcmVhc2luZyBpbiB2ZWxvY2l0eSB1bnRpbCBjb21wbGV0aW9uXG5mdW5jdGlvbiBlYXNlSW5Cb3VuY2UodCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dEJvdW5jZSgxIC0gdCk7XG59XG5cbi8vIEJvdW5jZSBpbiBhbmQgYm91bmNlIG91dFxuZnVuY3Rpb24gZWFzZUluT3V0Qm91bmNlKHQpIHtcblxuICAgIGlmICh0IDwgMC41KSB7XG5cbiAgICAgICAgcmV0dXJuIGVhc2VJbkJvdW5jZSh0ICogMikgKiAwLjU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhc2VPdXRCb3VuY2UodCAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbn1cbiIsIi8vIHJhbmRvbUNvbG9yIGJ5IERhdmlkIE1lcmZpZWxkIHVuZGVyIHRoZSBDQzAgbGljZW5zZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkbWVyZmllbGQvcmFuZG9tQ29sb3IvXG5cbjsoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuXG4gIC8vIFN1cHBvcnQgQU1EXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuXG4gIC8vIFN1cHBvcnQgQ29tbW9uSlNcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcmFuZG9tQ29sb3IgPSBmYWN0b3J5KCk7XG5cbiAgICAvLyBTdXBwb3J0IE5vZGVKUyAmIENvbXBvbmVudCwgd2hpY2ggYWxsb3cgbW9kdWxlLmV4cG9ydHMgdG8gYmUgYSBmdW5jdGlvblxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUNvbG9yO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgQ29tbW9uSlMgMS4xLjEgc3BlY1xuICAgIGV4cG9ydHMucmFuZG9tQ29sb3IgPSByYW5kb21Db2xvcjtcblxuICAvLyBTdXBwb3J0IHZhbmlsbGEgc2NyaXB0IGxvYWRpbmdcbiAgfSBlbHNlIHtcbiAgICByb290LnJhbmRvbUNvbG9yID0gZmFjdG9yeSgpO1xuICB9XG5cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbiAgLy8gU2VlZCB0byBnZXQgcmVwZWF0YWJsZSBjb2xvcnNcbiAgdmFyIHNlZWQgPSBudWxsO1xuXG4gIC8vIFNoYXJlZCBjb2xvciBkaWN0aW9uYXJ5XG4gIHZhciBjb2xvckRpY3Rpb25hcnkgPSB7fTtcblxuICAvLyBQb3B1bGF0ZSB0aGUgY29sb3IgZGljdGlvbmFyeVxuICBsb2FkQ29sb3JCb3VuZHMoKTtcblxuICB2YXIgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNlZWQgYW5kIGVuc3VyZSBpdCdzIGFuXG4gICAgLy8gaW50ZWdlci4gT3RoZXJ3aXNlLCByZXNldCB0aGUgc2VlZCB2YWx1ZS5cbiAgICBpZiAob3B0aW9ucy5zZWVkICYmIG9wdGlvbnMuc2VlZCA9PT0gcGFyc2VJbnQob3B0aW9ucy5zZWVkLCAxMCkpIHtcbiAgICAgIHNlZWQgPSBvcHRpb25zLnNlZWQ7XG5cbiAgICAvLyBBIHN0cmluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuc2VlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlZWQgPSBzdHJpbmdUb0ludGVnZXIob3B0aW9ucy5zZWVkKTtcblxuICAgIC8vIFNvbWV0aGluZyB3YXMgcGFzc2VkIGFzIGEgc2VlZCBidXQgaXQgd2Fzbid0IGFuIGludGVnZXIgb3Igc3RyaW5nXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNlZWQgIT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLnNlZWQgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBzZWVkIHZhbHVlIG11c3QgYmUgYW4gaW50ZWdlciBvciBzdHJpbmcnKTtcblxuICAgIC8vIE5vIHNlZWQsIHJlc2V0IHRoZSB2YWx1ZSBvdXRzaWRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBzZWVkID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgSCxTLEI7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGdlbmVyYXRlIG11bHRpcGxlIGNvbG9yc1xuICAgIGlmIChvcHRpb25zLmNvdW50ICE9PSBudWxsICYmIG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICB2YXIgdG90YWxDb2xvcnMgPSBvcHRpb25zLmNvdW50LFxuICAgICAgICAgIGNvbG9ycyA9IFtdO1xuXG4gICAgICBvcHRpb25zLmNvdW50ID0gbnVsbDtcblxuICAgICAgd2hpbGUgKHRvdGFsQ29sb3JzID4gY29sb3JzLmxlbmd0aCkge1xuXG4gICAgICAgIC8vIFNpbmNlIHdlJ3JlIGdlbmVyYXRpbmcgbXVsdGlwbGUgY29sb3JzLFxuICAgICAgICAvLyBpbmNyZW1lbWVudCB0aGUgc2VlZC4gT3RoZXJ3aXNlIHdlJ2QganVzdFxuICAgICAgICAvLyBnZW5lcmF0ZSB0aGUgc2FtZSBjb2xvciBlYWNoIHRpbWUuLi5cbiAgICAgICAgaWYgKHNlZWQgJiYgb3B0aW9ucy5zZWVkKSBvcHRpb25zLnNlZWQgKz0gMTtcblxuICAgICAgICBjb2xvcnMucHVzaChyYW5kb21Db2xvcihvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuY291bnQgPSB0b3RhbENvbG9ycztcblxuICAgICAgcmV0dXJuIGNvbG9ycztcbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBwaWNrIGEgaHVlIChIKVxuICAgIEggPSBwaWNrSHVlKG9wdGlvbnMpO1xuXG4gICAgLy8gVGhlbiB1c2UgSCB0byBkZXRlcm1pbmUgc2F0dXJhdGlvbiAoUylcbiAgICBTID0gcGlja1NhdHVyYXRpb24oSCwgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHVzZSBTIGFuZCBIIHRvIGRldGVybWluZSBicmlnaHRuZXNzIChCKS5cbiAgICBCID0gcGlja0JyaWdodG5lc3MoSCwgUywgb3B0aW9ucyk7XG5cbiAgICAvLyBUaGVuIHdlIHJldHVybiB0aGUgSFNCIGNvbG9yIGluIHRoZSBkZXNpcmVkIGZvcm1hdFxuICAgIHJldHVybiBzZXRGb3JtYXQoW0gsUyxCXSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcGlja0h1ZSAob3B0aW9ucykge1xuXG4gICAgdmFyIGh1ZVJhbmdlID0gZ2V0SHVlUmFuZ2Uob3B0aW9ucy5odWUpLFxuICAgICAgICBodWUgPSByYW5kb21XaXRoaW4oaHVlUmFuZ2UpO1xuXG4gICAgLy8gSW5zdGVhZCBvZiBzdG9yaW5nIHJlZCBhcyB0d28gc2VwZXJhdGUgcmFuZ2VzLFxuICAgIC8vIHdlIGdyb3VwIHRoZW0sIHVzaW5nIG5lZ2F0aXZlIG51bWJlcnNcbiAgICBpZiAoaHVlIDwgMCkge2h1ZSA9IDM2MCArIGh1ZTt9XG5cbiAgICByZXR1cm4gaHVlO1xuXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrU2F0dXJhdGlvbiAoaHVlLCBvcHRpb25zKSB7XG5cbiAgICBpZiAob3B0aW9ucy5sdW1pbm9zaXR5ID09PSAncmFuZG9tJykge1xuICAgICAgcmV0dXJuIHJhbmRvbVdpdGhpbihbMCwxMDBdKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5odWUgPT09ICdtb25vY2hyb21lJykge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgdmFyIHNhdHVyYXRpb25SYW5nZSA9IGdldFNhdHVyYXRpb25SYW5nZShodWUpO1xuXG4gICAgdmFyIHNNaW4gPSBzYXR1cmF0aW9uUmFuZ2VbMF0sXG4gICAgICAgIHNNYXggPSBzYXR1cmF0aW9uUmFuZ2VbMV07XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdicmlnaHQnOlxuICAgICAgICBzTWluID0gNTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgc01pbiA9IHNNYXggLSAxMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgc01heCA9IDU1O1xuICAgICAgICBicmVhaztcbiAgIH1cblxuICAgIHJldHVybiByYW5kb21XaXRoaW4oW3NNaW4sIHNNYXhdKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gcGlja0JyaWdodG5lc3MgKEgsIFMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBiTWluID0gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUyksXG4gICAgICAgIGJNYXggPSAxMDA7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMubHVtaW5vc2l0eSkge1xuXG4gICAgICBjYXNlICdkYXJrJzpcbiAgICAgICAgYk1heCA9IGJNaW4gKyAyMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2xpZ2h0JzpcbiAgICAgICAgYk1pbiA9IChiTWF4ICsgYk1pbikvMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3JhbmRvbSc6XG4gICAgICAgIGJNaW4gPSAwO1xuICAgICAgICBiTWF4ID0gMTAwO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gcmFuZG9tV2l0aGluKFtiTWluLCBiTWF4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRGb3JtYXQgKGhzdiwgb3B0aW9ucykge1xuXG4gICAgc3dpdGNoIChvcHRpb25zLmZvcm1hdCkge1xuXG4gICAgICBjYXNlICdoc3ZBcnJheSc6XG4gICAgICAgIHJldHVybiBoc3Y7XG5cbiAgICAgIGNhc2UgJ2hzbEFycmF5JzpcbiAgICAgICAgcmV0dXJuIEhTVnRvSFNMKGhzdik7XG5cbiAgICAgIGNhc2UgJ2hzbCc6XG4gICAgICAgIHZhciBoc2wgPSBIU1Z0b0hTTChoc3YpO1xuICAgICAgICByZXR1cm4gJ2hzbCgnK2hzbFswXSsnLCAnK2hzbFsxXSsnJSwgJytoc2xbMl0rJyUpJztcblxuICAgICAgY2FzZSAnaHNsYSc6XG4gICAgICAgIHZhciBoc2xDb2xvciA9IEhTVnRvSFNMKGhzdik7XG4gICAgICAgIHJldHVybiAnaHNsYSgnK2hzbENvbG9yWzBdKycsICcraHNsQ29sb3JbMV0rJyUsICcraHNsQ29sb3JbMl0rJyUsICcgKyBNYXRoLnJhbmRvbSgpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JBcnJheSc6XG4gICAgICAgIHJldHVybiBIU1Z0b1JHQihoc3YpO1xuXG4gICAgICBjYXNlICdyZ2InOlxuICAgICAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHJnYi5qb2luKCcsICcpICsgJyknO1xuXG4gICAgICBjYXNlICdyZ2JhJzpcbiAgICAgICAgdmFyIHJnYkNvbG9yID0gSFNWdG9SR0IoaHN2KTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyByZ2JDb2xvci5qb2luKCcsICcpICsgJywgJyArIE1hdGgucmFuZG9tKCkgKyAnKSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBIU1Z0b0hleChoc3YpO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWluaW11bUJyaWdodG5lc3MoSCwgUykge1xuXG4gICAgdmFyIGxvd2VyQm91bmRzID0gZ2V0Q29sb3JJbmZvKEgpLmxvd2VyQm91bmRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb3dlckJvdW5kcy5sZW5ndGggLSAxOyBpKyspIHtcblxuICAgICAgdmFyIHMxID0gbG93ZXJCb3VuZHNbaV1bMF0sXG4gICAgICAgICAgdjEgPSBsb3dlckJvdW5kc1tpXVsxXTtcblxuICAgICAgdmFyIHMyID0gbG93ZXJCb3VuZHNbaSsxXVswXSxcbiAgICAgICAgICB2MiA9IGxvd2VyQm91bmRzW2krMV1bMV07XG5cbiAgICAgIGlmIChTID49IHMxICYmIFMgPD0gczIpIHtcblxuICAgICAgICAgdmFyIG0gPSAodjIgLSB2MSkvKHMyIC0gczEpLFxuICAgICAgICAgICAgIGIgPSB2MSAtIG0qczE7XG5cbiAgICAgICAgIHJldHVybiBtKlMgKyBiO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRIdWVSYW5nZSAoY29sb3JJbnB1dCkge1xuXG4gICAgaWYgKHR5cGVvZiBwYXJzZUludChjb2xvcklucHV0KSA9PT0gJ251bWJlcicpIHtcblxuICAgICAgdmFyIG51bWJlciA9IHBhcnNlSW50KGNvbG9ySW5wdXQpO1xuXG4gICAgICBpZiAobnVtYmVyIDwgMzYwICYmIG51bWJlciA+IDApIHtcbiAgICAgICAgcmV0dXJuIFtudW1iZXIsIG51bWJlcl07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9ySW5wdXQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgIGlmIChjb2xvckRpY3Rpb25hcnlbY29sb3JJbnB1dF0pIHtcbiAgICAgICAgdmFyIGNvbG9yID0gY29sb3JEaWN0aW9uYXJ5W2NvbG9ySW5wdXRdO1xuICAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UpIHtyZXR1cm4gY29sb3IuaHVlUmFuZ2U7fVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbMCwzNjBdO1xuXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXR1cmF0aW9uUmFuZ2UgKGh1ZSkge1xuICAgIHJldHVybiBnZXRDb2xvckluZm8oaHVlKS5zYXR1cmF0aW9uUmFuZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb2xvckluZm8gKGh1ZSkge1xuXG4gICAgLy8gTWFwcyByZWQgY29sb3JzIHRvIG1ha2UgcGlja2luZyBodWUgZWFzaWVyXG4gICAgaWYgKGh1ZSA+PSAzMzQgJiYgaHVlIDw9IDM2MCkge1xuICAgICAgaHVlLT0gMzYwO1xuICAgIH1cblxuICAgIGZvciAodmFyIGNvbG9yTmFtZSBpbiBjb2xvckRpY3Rpb25hcnkpIHtcbiAgICAgICB2YXIgY29sb3IgPSBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICBpZiAoY29sb3IuaHVlUmFuZ2UgJiZcbiAgICAgICAgICAgaHVlID49IGNvbG9yLmh1ZVJhbmdlWzBdICYmXG4gICAgICAgICAgIGh1ZSA8PSBjb2xvci5odWVSYW5nZVsxXSkge1xuICAgICAgICAgIHJldHVybiBjb2xvckRpY3Rpb25hcnlbY29sb3JOYW1lXTtcbiAgICAgICB9XG4gICAgfSByZXR1cm4gJ0NvbG9yIG5vdCBmb3VuZCc7XG4gIH1cblxuICBmdW5jdGlvbiByYW5kb21XaXRoaW4gKHJhbmdlKSB7XG4gICAgaWYgKHNlZWQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKHJhbmdlWzBdICsgTWF0aC5yYW5kb20oKSoocmFuZ2VbMV0gKyAxIC0gcmFuZ2VbMF0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9TZWVkZWQgcmFuZG9tIGFsZ29yaXRobSBmcm9tIGh0dHA6Ly9pbmRpZWdhbXIuY29tL2dlbmVyYXRlLXJlcGVhdGFibGUtcmFuZG9tLW51bWJlcnMtaW4tanMvXG4gICAgICB2YXIgbWF4ID0gcmFuZ2VbMV0gfHwgMTtcbiAgICAgIHZhciBtaW4gPSByYW5nZVswXSB8fCAwO1xuICAgICAgc2VlZCA9IChzZWVkICogOTMwMSArIDQ5Mjk3KSAlIDIzMzI4MDtcbiAgICAgIHZhciBybmQgPSBzZWVkIC8gMjMzMjgwLjA7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBybmQgKiAobWF4IC0gbWluKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gSFNWdG9IZXggKGhzdil7XG5cbiAgICB2YXIgcmdiID0gSFNWdG9SR0IoaHN2KTtcblxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgICAgICAgdmFyIGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICAgICAgICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gJzAnICsgaGV4IDogaGV4O1xuICAgIH1cblxuICAgIHZhciBoZXggPSAnIycgKyBjb21wb25lbnRUb0hleChyZ2JbMF0pICsgY29tcG9uZW50VG9IZXgocmdiWzFdKSArIGNvbXBvbmVudFRvSGV4KHJnYlsyXSk7XG5cbiAgICByZXR1cm4gaGV4O1xuXG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVDb2xvciAobmFtZSwgaHVlUmFuZ2UsIGxvd2VyQm91bmRzKSB7XG5cbiAgICB2YXIgc01pbiA9IGxvd2VyQm91bmRzWzBdWzBdLFxuICAgICAgICBzTWF4ID0gbG93ZXJCb3VuZHNbbG93ZXJCb3VuZHMubGVuZ3RoIC0gMV1bMF0sXG5cbiAgICAgICAgYk1pbiA9IGxvd2VyQm91bmRzW2xvd2VyQm91bmRzLmxlbmd0aCAtIDFdWzFdLFxuICAgICAgICBiTWF4ID0gbG93ZXJCb3VuZHNbMF1bMV07XG5cbiAgICBjb2xvckRpY3Rpb25hcnlbbmFtZV0gPSB7XG4gICAgICBodWVSYW5nZTogaHVlUmFuZ2UsXG4gICAgICBsb3dlckJvdW5kczogbG93ZXJCb3VuZHMsXG4gICAgICBzYXR1cmF0aW9uUmFuZ2U6IFtzTWluLCBzTWF4XSxcbiAgICAgIGJyaWdodG5lc3NSYW5nZTogW2JNaW4sIGJNYXhdXG4gICAgfTtcblxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZENvbG9yQm91bmRzICgpIHtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ21vbm9jaHJvbWUnLFxuICAgICAgbnVsbCxcbiAgICAgIFtbMCwwXSxbMTAwLDBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdyZWQnLFxuICAgICAgWy0yNiwxOF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkyXSxbNDAsODldLFs1MCw4NV0sWzYwLDc4XSxbNzAsNzBdLFs4MCw2MF0sWzkwLDU1XSxbMTAwLDUwXV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnb3JhbmdlJyxcbiAgICAgIFsxOSw0Nl0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkzXSxbNDAsODhdLFs1MCw4Nl0sWzYwLDg1XSxbNzAsNzBdLFsxMDAsNzBdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICd5ZWxsb3cnLFxuICAgICAgWzQ3LDYyXSxcbiAgICAgIFtbMjUsMTAwXSxbNDAsOTRdLFs1MCw4OV0sWzYwLDg2XSxbNzAsODRdLFs4MCw4Ml0sWzkwLDgwXSxbMTAwLDc1XV1cbiAgICApO1xuXG4gICAgZGVmaW5lQ29sb3IoXG4gICAgICAnZ3JlZW4nLFxuICAgICAgWzYzLDE3OF0sXG4gICAgICBbWzMwLDEwMF0sWzQwLDkwXSxbNTAsODVdLFs2MCw4MV0sWzcwLDc0XSxbODAsNjRdLFs5MCw1MF0sWzEwMCw0MF1dXG4gICAgKTtcblxuICAgIGRlZmluZUNvbG9yKFxuICAgICAgJ2JsdWUnLFxuICAgICAgWzE3OSwgMjU3XSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODZdLFs0MCw4MF0sWzUwLDc0XSxbNjAsNjBdLFs3MCw1Ml0sWzgwLDQ0XSxbOTAsMzldLFsxMDAsMzVdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwdXJwbGUnLFxuICAgICAgWzI1OCwgMjgyXSxcbiAgICAgIFtbMjAsMTAwXSxbMzAsODddLFs0MCw3OV0sWzUwLDcwXSxbNjAsNjVdLFs3MCw1OV0sWzgwLDUyXSxbOTAsNDVdLFsxMDAsNDJdXVxuICAgICk7XG5cbiAgICBkZWZpbmVDb2xvcihcbiAgICAgICdwaW5rJyxcbiAgICAgIFsyODMsIDMzNF0sXG4gICAgICBbWzIwLDEwMF0sWzMwLDkwXSxbNDAsODZdLFs2MCw4NF0sWzgwLDgwXSxbOTAsNzVdLFsxMDAsNzNdXVxuICAgICk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvUkdCIChoc3YpIHtcblxuICAgIC8vIHRoaXMgZG9lc24ndCB3b3JrIGZvciB0aGUgdmFsdWVzIG9mIDAgYW5kIDM2MFxuICAgIC8vIGhlcmUncyB0aGUgaGFja3kgZml4XG4gICAgdmFyIGggPSBoc3ZbMF07XG4gICAgaWYgKGggPT09IDApIHtoID0gMTt9XG4gICAgaWYgKGggPT09IDM2MCkge2ggPSAzNTk7fVxuXG4gICAgLy8gUmViYXNlIHRoZSBoLHMsdiB2YWx1ZXNcbiAgICBoID0gaC8zNjA7XG4gICAgdmFyIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgICB2ID0gaHN2WzJdLzEwMDtcblxuICAgIHZhciBoX2kgPSBNYXRoLmZsb29yKGgqNiksXG4gICAgICBmID0gaCAqIDYgLSBoX2ksXG4gICAgICBwID0gdiAqICgxIC0gcyksXG4gICAgICBxID0gdiAqICgxIC0gZipzKSxcbiAgICAgIHQgPSB2ICogKDEgLSAoMSAtIGYpKnMpLFxuICAgICAgciA9IDI1NixcbiAgICAgIGcgPSAyNTYsXG4gICAgICBiID0gMjU2O1xuXG4gICAgc3dpdGNoKGhfaSkge1xuICAgICAgY2FzZSAwOiByID0gdjsgZyA9IHQ7IGIgPSBwOyAgYnJlYWs7XG4gICAgICBjYXNlIDE6IHIgPSBxOyBnID0gdjsgYiA9IHA7ICBicmVhaztcbiAgICAgIGNhc2UgMjogciA9IHA7IGcgPSB2OyBiID0gdDsgIGJyZWFrO1xuICAgICAgY2FzZSAzOiByID0gcDsgZyA9IHE7IGIgPSB2OyAgYnJlYWs7XG4gICAgICBjYXNlIDQ6IHIgPSB0OyBnID0gcDsgYiA9IHY7ICBicmVhaztcbiAgICAgIGNhc2UgNTogciA9IHY7IGcgPSBwOyBiID0gcTsgIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBbTWF0aC5mbG9vcihyKjI1NSksIE1hdGguZmxvb3IoZyoyNTUpLCBNYXRoLmZsb29yKGIqMjU1KV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIEhTVnRvSFNMIChoc3YpIHtcbiAgICB2YXIgaCA9IGhzdlswXSxcbiAgICAgIHMgPSBoc3ZbMV0vMTAwLFxuICAgICAgdiA9IGhzdlsyXS8xMDAsXG4gICAgICBrID0gKDItcykqdjtcblxuICAgIHJldHVybiBbXG4gICAgICBoLFxuICAgICAgTWF0aC5yb3VuZChzKnYgLyAoazwxID8gayA6IDItaykgKiAxMDAwMCkgLyAxMDAsXG4gICAgICBrLzIgKiAxMDBcbiAgICBdO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5nVG9JbnRlZ2VyIChzdHJpbmcpIHtcbiAgICB2YXIgdG90YWwgPSAwXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgIT09IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRvdGFsID49IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSBicmVhaztcbiAgICAgIHRvdGFsICs9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG4gICAgfVxuICAgIHJldHVybiB0b3RhbFxuICB9XG5cbiAgcmV0dXJuIHJhbmRvbUNvbG9yO1xufSkpO1xuIl19
