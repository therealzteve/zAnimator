/*global define */
define(function(require) {
  'use strict';

  var factory = require('factory');
  var flasher = require('opacity/flasher');
  var loop = require('./loop');



  //Return the module value.
  return function(canvasId) {
    var mainContainer = factory.mainContainer(canvasId);
    loop.addAnimation(mainContainer);

    return {
      version: '0.0.1',
      mainContainer: mainContainer,
      factory: factory,
      opacity: {
        flasher: flasher
      }
    };
  };
});
