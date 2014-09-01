define(
  ['jquery', 'views/boardView', 'text!templates/layout'],
  function($, BoardView){
    function Sudoku() {
      this.name = 'Sudoku';
      this.init();
    }

    Sudoku.prototype.init = function() {
      $('body').append('<p>' + this.name + '</p>');
    }

    window.BoardView = BoardView
    return new Sudoku();
  }
);