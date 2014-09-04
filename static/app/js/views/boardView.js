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

      // bind events
      this.$el.on('click', '.cell', {self: this}, this.clickCell);
    }

    BoardView.prototype.render = function() {
      context = {
        cells: this.model.getCells()
      }
      this.$el.html(this.template(context));
      return this;
    }

    BoardView.prototype.clickCell = function(e) {
      var self = e.data.self;
      var target = $(e.currentTarget);

      self.$el.find('.selected').removeClass('selected');

      if (target.hasClass('fixed'))
        return;

      target.addClass('selected');
    }

    return BoardView;
  }
);
