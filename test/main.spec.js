"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var chai_1 = require("chai");
require("mocha");
describe('Hello function', function () {
    it('should return hello world', function () {
        var result = main_1.create("some_fake_id");
        chai_1.expect(result.version).to.equal('1.0.0');
    });
});
