/// <reference path='../typings/main.d.ts' />

import * as path from "path";

import {Cell, Matrix} from "./matrix";

var val = path.resolve('.');

var matrix = new Matrix(15);

console.log(matrix.toString());
