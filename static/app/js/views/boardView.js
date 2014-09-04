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
      this.$el.on('click', '.options td', {self: this}, this.clickOption);
    }

    BoardView.prototype.render = function() {
      context = {
        cells: this.model.getCells()
      }
      this.$el.html(this.template(context));
      return this;
    }

    BoardView.prototype.clickCell = function(e) {
      e.preventDefault();
      var self = e.data.self;
      var target = $(e.currentTarget);

      self.$el.find('.cell.selected').removeClass('selected');

      if (target.hasClass('fixed'))
        return;

      target.addClass('selected');
      // TODO: remove
      console.log(target.attr('id'));
    }

    BoardView.prototype.clickOption = function(e) {
      e.preventDefault();
      var self = e.data.self;
      var target = $(e.currentTarget);
      var cellDOM = self.$el.find('.cell.selected');

      if (cellDOM.length == 0)
        return;

      // update cell model
      var id = parseInt(cellDOM.attr('id'));
      var cell = self.model.getCell(id);
      var value = parseInt(target.text());
      cell.set({value:value});

      // TODO: abstract behavior to cellView
      // update cell value
      cellDOM.find('a').html(value);

      // update selected classes
      self.$el.find('.options .selected').removeClass('selected');
      target.addClass('selected');
    }

    return BoardView;
  }
);
