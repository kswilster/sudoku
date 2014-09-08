define(
  ['underscore'],
  function(_){
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

      //border radii
      if ((x == 0) && (y == 0))
        classes = classes.concat(' tlc');
      if ((x == 8) && (y == 0))
        classes = classes.concat(' trc');
      if ((x == 0) && (y == 8))
        classes = classes.concat(' blc');
      if ((x == 8) && (y == 8))
        classes = classes.concat(' brc');

      if (this.attributes.fixed)
        classes = classes.concat(' fixed');

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

    CellModel.prototype.getValue = function() {
      if (_.isUndefined(this.attributes.value))
        return 0;
      return this.attributes.value;
    }

    CellModel.prototype.set = function(attributes) {
      this.attributes = _.extend(this.attributes, attributes);
      this.attributes.classes = this.getClasses();
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
