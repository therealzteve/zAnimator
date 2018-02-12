(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
define(["require", "exports", "./loop"], function (require, exports, loop_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

},{}]},{},[1]);
