define(function () {
    'use strict';
    return function(id) {
      var stage = new createjs.Stage(id);
      return stage;
    };
});
