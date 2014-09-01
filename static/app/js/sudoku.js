define(
  ['jquery'],
  function($){
    function Sudoku() {
      this.name = 'Sudoku';
      this.init();
    }

    Sudoku.prototype.init = function() {
      $('body').append('<p>' + this.name + '</p>');
    }

    return new Sudoku();
  }
);