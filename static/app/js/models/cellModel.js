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
    }

    CellModel.prototype.getX = function() {
      if (_.undefined(this.attributes.x))
        return -1;
      return this.attributes.x;
    }

    CellModel.prototype.getY = function() {
      if (_.undefined(this.attributes.y))
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
