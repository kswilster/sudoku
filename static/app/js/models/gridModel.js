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

      //TODO: load games from other files
      var game = [
        [3,0,0,0,0,5,0,6,7],
        [0,7,4,0,0,3,0,0,5],
        [6,0,0,4,8,0,0,2,0],
        [0,0,2,5,0,0,0,3,1],
        [0,0,0,0,0,6,5,0,2],
        [4,3,0,2,7,0,0,0,0],
        [0,9,0,0,1,0,0,5,3],
        [1,0,0,0,0,0,6,9,0],
        [0,2,8,6,0,9,0,0,0]
      ]

      this.loadGame(game);

    }

    GridModel.prototype.getCells = function() {
      return this.cells;
    }

    GridModel.prototype.loadGame = function(game) {
      // assuming game is 9x9
      for (var y=0; y<9; y++) {
        for (var x=0; x<9; x++) {
          var value = game[y][x];
          var fixed = (value != 0);
          cellAttrs = {
            fixed: fixed,
            value: value
          }
          this.cells[y][x].set(cellAttrs);
        }
      }
    }

    return GridModel;
  }
);
