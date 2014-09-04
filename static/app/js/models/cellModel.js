define(
  ['jquery', 'underscore'],
  function($, _){
    function CellModel(attributes) {
      defaultAttributes = {
        fixed: false,
        value: 0,
        id: this.uniqueID()
      }

      this.attributes = _.extend({}, defaultAttributes, attributes);
      this.attributes.classes = this.getClasses();
    }

    CellModel.prototype.getClasses = function() {
      // TODO: model shouldn't be responsible for classes
      var x = this.getX();
      var y = this.getY();
      var classes = ""

      //determine borders
      var borders = [];
      var left = [0, 3, 6]
      var right = [8]
      var top = [0, 3, 6]
      var bottom = [8]

      if (_.contains(left, x))
        classes = classes.concat(' bl');
      if (_.contains(right, x))
        classes = classes.concat(' br');
      if (_.contains(top, y))
        classes = classes.concat(' bt');
      if (_.contains(bottom, y))
        classes = classes.concat(' bb');

      return classes;
    }

    CellModel.prototype.getX = function() {
      if (_.isUndefined(this.attributes.x))
        return -1;
      return this.attributes.x;
    }

    CellModel.prototype.getY = function() {
      if (_.isUndefined(this.attributes.y))
        return -1;
      return this.attributes.y;
    }

    CellModel.prototype.uniqueID = (
      function() {
        var id = 0;
        return function() {
          return id++;
        };
    })();

    return CellModel;
  }
);
