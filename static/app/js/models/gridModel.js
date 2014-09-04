define(
  ['jquery', 'underscore', 'models/cellModel'],
  function($, _, CellModel){
    function GridModel() {
      this.width = 9;
      this.height = 9;

      // build cells
      this.cells = Array(this.height);

      for (var y=0; y<this.height; y++) {
        this.cells[y] = Array(this.width);
        for (var x=0; x<this.height; x++) {
          cellAttrs = {
            x : x,
            y : y
          }
          this.cells[y][x] = new CellModel(cellAttrs);
        }
      }

    }

    GridModel.prototype.getCells = function() {
      return this.cells;
    }

    return GridModel;
  }
);
