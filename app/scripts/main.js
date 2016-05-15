/*global define */
define(function (require) {
    'use strict';
    var adapter = require('adapter');

    var flash = require('opacity/flasher');
    //Return the module value.
    return {
        version: '0.0.1',
        adapter: adapter,
        opacity: {
          flasher: flasher;
        }
    };
});
