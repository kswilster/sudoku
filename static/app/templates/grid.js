define(['jadeRuntime'], function(jade) {
return function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (cells) {
buf.push("<table><tbody>");
// iterate cells
;(function(){
  var $$obj = cells;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var row = $$obj[$index];

buf.push("<tr>");
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var cell = $$obj[$index];

buf.push("<td><button" + (jade.attr("id", cell.attributes.id, true, false)) + " class=\"cell\">" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "</button></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var cell = $$obj[$index];

buf.push("<td><button" + (jade.attr("id", cell.attributes.id, true, false)) + " class=\"cell\">" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "</button></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var row = $$obj[$index];

buf.push("<tr>");
// iterate row
;(function(){
  var $$obj = row;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var cell = $$obj[$index];

buf.push("<td><button" + (jade.attr("id", cell.attributes.id, true, false)) + " class=\"cell\">" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "</button></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var cell = $$obj[$index];

buf.push("<td><button" + (jade.attr("id", cell.attributes.id, true, false)) + " class=\"cell\">" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "</button></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table>");}.call(this,"cells" in locals_for_with?locals_for_with.cells:typeof cells!=="undefined"?cells:undefined));;return buf.join("");
};
});
