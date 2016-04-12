"use strict";
(function (CellType) {
    CellType[CellType["normal"] = 0] = "normal";
    CellType[CellType["doubleWordScore"] = 1] = "doubleWordScore";
    CellType[CellType["doubleLetterScore"] = 2] = "doubleLetterScore";
    CellType[CellType["trippleLetterScore"] = 3] = "trippleLetterScore";
    CellType[CellType["trippleWordScore"] = 4] = "trippleWordScore";
})(exports.CellType || (exports.CellType = {}));
var CellType = exports.CellType;
var Cell = (function () {
    function Cell(x, y) {
        this.x = x;
        this.y = y;
        this.cellType = CellType.normal;
    }
    Cell.prototype.toString = function (opt) {
        if (opt) {
        }
        else {
            return '(' + this.x + ',' + this.y + ')';
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Matrix = (function () {
    function Matrix(size) {
        this.size = size;
        var cells = [];
        for (var i = 0; i < size; i++) {
            cells[i] = [];
            for (var j = 0; j < size; j++) {
                cells[i][j] = new Cell(i, j);
            }
        }
        this.cells = cells;
    }
    Matrix.prototype.toString = function () {
        var size = this.size;
        var result = '';
        for (var i = 0; i < size; i++) {
            var arr = [];
            for (var j = 0; j < size; j++) {
                arr.push(this.cells[i][j]);
            }
            result += arr.join('\t') + '\n';
        }
        return result;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=index.js.map