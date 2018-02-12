"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/@types/easeljs/index.d.ts" />
var loop_1 = require("./loop");
function create(canvasId) {
    //let stage = new createjs.Stage(canvasId);
    //loop.init(stage);
    var createjsTickerContainer = {
        execute: function (func, scope) {
            createjs.Ticker.setFPS(60);
            createjs.Ticker.on('tick', func, scope);
        }
    };
    var _loop = new loop_1.default(createjsTickerContainer);
    return {
        version: '0.0.1',
        loop: loop_1.default
    };
}
exports.create = create;
