define(
  ['jquery', 'views/boardView', 'templates/layout'],
  function($, BoardView, layout){
    function Sudoku() {
      this.name = 'Sudoku';
      this.init();
    }

    Sudoku.prototype.init = function() {
      $('body').append(layout());

      boardOptions = {
        el : $('.board')
      }
      this.board = new BoardView(boardOptions);
      this.board.render();
    }

    return new Sudoku();
  }
);