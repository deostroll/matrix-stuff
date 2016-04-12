"use strict";
var matrix_1 = require('../src/matrix');
var assert = require('assert');
describe('matrix tests', function () {
    it('should initialize', function () {
        var matrix = new matrix_1.Matrix(5);
        assert(matrix != null);
    });
});
//# sourceMappingURL=matrix.js.map