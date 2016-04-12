export enum CellType {
  normal,
  doubleWordScore,
  doubleLetterScore,
  trippleLetterScore,
  trippleWordScore
}

export class Cell {
  cellType: CellType;

  letter: string;
  constructor(
    public x: number,
    public y: number) {
      //constructor is empty
      this.cellType = CellType.normal;
    }
  toString(opt: string) {
    if(opt) {

    }
    else {
      return '(' + this.x + ',' + this.y + ')';
    }
  }
}

export class Matrix {

  cells: Cell[][];

  constructor(public size: number) {
    let cells = [];
    for(let i = 0; i < size; i++) {
      cells[i] = [];
      for(let j = 0; j < size; j++) {
        cells[i][j] = new Cell(i, j);
      }
    }
    this.cells = cells;
  }

  toString() {
    var size = this.size;
    var result = '';
    for(let i = 0; i < size; i++) {
      let arr : Cell[] = [];
      for(let j = 0; j < size; j++) {
        arr.push(this.cells[i][j])
      }
      result += arr.join('\t') + '\n';
    }
    return result;
  }
}
