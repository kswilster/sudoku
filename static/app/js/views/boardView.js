define(
  ['jquery', 'underscore', 'templates/grid'],
  function($, _, grid){
    function BoardView(options) {
      validOptions = ['el']
      defaultOptions = {
        el : $('<div>')[0]
      }
      this.options = _.extend(defaultOptions, _.pick(options, validOptions));
      this.el = options.el;
      this.$el = $(options.el);

      this.template = grid;

      this.cells = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
      ];
    }

    BoardView.prototype.render = function() {
      context = {
        cells: this.cells
      }
      this.$el.html(this.template(context));
      return this;
    }

    return BoardView;
  }
);
