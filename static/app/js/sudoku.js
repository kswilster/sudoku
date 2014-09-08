define(
  ['views/boardView', 'templates/layout', 'models/gridModel'],
  function(BoardView, layout, GridModel){
    function Sudoku() {
      this.name = 'Sudoku';
      this.init();
    }

    Sudoku.prototype.init = function() {
      $('body').append(layout());

      boardOptions = {
        el : $('.board'),
        model: new GridModel()
      }
      this.board = new BoardView(boardOptions);
      this.board.render();
    }

    window.s = new Sudoku();
  }
);