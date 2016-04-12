/// <reference path="./../typings/main.d.ts"/>

import {Matrix} from '../src/matrix';
// import * as Mocha from 'mocha';
import * as assert from 'assert';

describe('matrix tests', function() {
  it('should initialize', function() {
    var matrix = new Matrix(5);
    assert(matrix != null);
  });
})
