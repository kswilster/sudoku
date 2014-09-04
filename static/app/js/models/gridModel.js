define(
  ['jquery', 'underscore', 'models/cellModel'],
  function($, _, CellModel){
    function GridModel() {
      this.width = 9;
      this.height = 9;

      // build cells
      this.cells = Array(this.widths);

      for (var x=0; x<this.width; x++) {
        this.cells[x] = Array(this.height);
        for (var y=0; y<this.height; y++) {
          cellAttrs = {
            x : x,
            y : y
          }
          this.cells[x][y] = new CellModel(cellAttrs);
        }
      }

    }

    GridModel.prototype.getCells = function() {
      return this.cells;
    }

    return GridModel;
  }
);
