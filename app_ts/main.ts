/// <reference path="../node_modules/@types/easeljs/index.d.ts" />
import loop from './loop';

//TODO Organize imports

export function create(canvasId) {
    let stage = new createjs.Stage(canvasId);
    loop.init(stage);
    return {
      version: '0.0.1',
      loop: loop
    };
  }
