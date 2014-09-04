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

buf.push("<td" + (jade.attr("id", cell.attributes.id, true, false)) + (jade.cls(['cell',cell.attributes.classes], [null,true])) + "><a>");
if ( cell.attributes.value)
{
buf.push("" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "");
}
buf.push("</a></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var cell = $$obj[$index];

buf.push("<td" + (jade.attr("id", cell.attributes.id, true, false)) + (jade.cls(['cell',cell.attributes.classes], [null,true])) + "><a>");
if ( cell.attributes.value)
{
buf.push("" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "");
}
buf.push("</a></td>");
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

buf.push("<td" + (jade.attr("id", cell.attributes.id, true, false)) + (jade.cls(['cell',cell.attributes.classes], [null,true])) + "><a>");
if ( cell.attributes.value)
{
buf.push("" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "");
}
buf.push("</a></td>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var cell = $$obj[$index];

buf.push("<td" + (jade.attr("id", cell.attributes.id, true, false)) + (jade.cls(['cell',cell.attributes.classes], [null,true])) + "><a>");
if ( cell.attributes.value)
{
buf.push("" + (jade.escape((jade_interp = cell.attributes.value) == null ? '' : jade_interp)) + "");
}
buf.push("</a></td>");
    }

  }
}).call(this);

buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</tbody></table><table><tbody><tr class=\"options\"><td id=\"1\"><a>1</a></td><td id=\"2\"><a>2</a></td><td id=\"3\"><a>3</a></td><td id=\"4\"><a>4</a></td><td id=\"5\"><a>5</a></td><td id=\"6\"><a>6</a></td><td id=\"7\"><a>7</a></td><td id=\"8\"><a>8</a></td><td id=\"9\"><a>9</a></td></tr></tbody></table>");}.call(this,"cells" in locals_for_with?locals_for_with.cells:typeof cells!=="undefined"?cells:undefined));;return buf.join("");
};
});
