function template(locals) {
var jade_debug = [{ lineno: 1, filename: "static/app/jade/layout.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined) {
jade_debug.unshift({ lineno: 0, filename: "static/app/jade/layout.jade" });
jade_debug.unshift({ lineno: 1, filename: "static/app/jade/layout.jade" });
buf.push("<div class=\"menu\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "static/app/jade/layout.jade" });
buf.push("<div class=\"board\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, ".menu\n.board");
}
}