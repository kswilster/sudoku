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
      this.$el.on('click', '.check-game', {self: this}, this.checkGame);
      $(document).on('keypress', null, {self: this}, this.handleKey);
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
      var value = parseInt(target.text());

      self.$el.find('.cell.selected').removeClass('selected');

      if (target.hasClass('fixed'))
        return;

      // update options value
      var selected = self.$el.find('.options #'+value);
      self.$el.find('.options .selected').removeClass('selected');
      selected.addClass('selected');

      target.addClass('selected');
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

    BoardView.prototype.checkGame = function(e) {
      e.preventDefault();
      var self = e.data.self;
      var target = $(e.currentTarget);

      if (!self.model.checkGame()) {
        console.log("Keep trying!");
        return;
      }

      console.log('Won the game!');
    }

    BoardView.prototype.handleKey = function(e) {
      var val = parseInt(String.fromCharCode(e.charCode));
      var self = e.data.self;

      if ((val > 0) && (val < 10)) {
        self.$el.find('.options #'+val).click();
      }
    }

    return BoardView;
  }
);
