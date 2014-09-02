define(
  ['jquery', 'underscore', 'templates/grid'],
  function($, _, grid){
    function BoardView(options) {
      validOptions = ['el', 'model']
      defaultOptions = {
        el : $('<div>')[0],
        model: {}
      }
      this.options = _.extend(defaultOptions, _.pick(options, validOptions));
      this.el = options.el;
      this.$el = $(options.el);
      this.model = options.model;
      this.template = grid;
    }

    BoardView.prototype.render = function() {
      context = {
        cells: this.model.getCells()
      }
      this.$el.html(this.template(context));
      return this;
    }

    return BoardView;
  }
);
