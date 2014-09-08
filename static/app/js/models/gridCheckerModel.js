define(
  ['underscore'],
  function(_){
    function GridCheckerModel() {
      //map positions to rows, columns, and regions
      this.rows = [
        [0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1],
        [2,2,2,2,2,2,2,2,2],
        [3,3,3,3,3,3,3,3,3],
        [4,4,4,4,4,4,4,4,4],
        [5,5,5,5,5,5,5,5,5],
        [6,6,6,6,6,6,6,6,6],
        [7,7,7,7,7,7,7,7,7],
        [8,8,8,8,8,8,8,8,8]
      ]

      this.cols = [
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8],
        [0,1,2,3,4,5,6,7,8]
      ]

      this.regions = [
        [0,0,0,1,1,1,2,2,2],
        [0,0,0,1,1,1,2,2,2],
        [0,0,0,1,1,1,2,2,2],
        [3,3,3,4,4,4,5,5,5],
        [3,3,3,4,4,4,5,5,5],
        [3,3,3,4,4,4,5,5,5],
        [6,6,6,7,7,7,8,8,8],
        [6,6,6,7,7,7,8,8,8],
        [6,6,6,7,7,7,8,8,8]
      ]

      this.reset();
    }

    GridCheckerModel.prototype.reset = function() {
      // reset data structures for checking grid
      // rows correspond to row/column/region
      // columns correspond to value (1-9)

      this.rowVals = [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]
      ]

      this.colVals = [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]
      ]

      this.regionVals = [
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false]
      ]
    }

    // confirm a value is in a given location
    GridCheckerModel.prototype.confirm = function(x, y, value) {
      if ((x < 0) || (x > 8))
        return;
      if ((y < 0) || (y > 8))
        return;
      if ((value < 1) || (value > 9))
        return;

      value--;

      var row = this.rows[y][x];
      var col = this.cols[y][x];
      var region = this.regions[y][x];

      this.rowVals[row][value] = true;
      this.colVals[col][value] = true;
      this.regionVals[region][value] = true;
    }

    GridCheckerModel.prototype.check = function() {
      var rowsValid = (_.indexOf(_.flatten(this.rowVals), false) == -1);
      var colsValid = (_.indexOf(_.flatten(this.colVals), false) == -1);
      var regionsValid = (_.indexOf(_.flatten(this.regionVals), false) == -1);

      return (rowsValid && colsValid && regionsValid);
    }

    GridCheckerModel.prototype.isValid = function(cells) {
      for (var y=0; y<9; y++) {
        for (var x=0; x<9; x++) {
          var cell = cells[y][x];
          this.confirm(x, y, cell.getValue());
        }
      }
      var valid = this.check();
      this.reset();
      return valid;
    }

    return GridCheckerModel;
  }
);
