"use strict";

window.addEventListener("load", function() {
  var svgObject = this.document.getElementById("svg-object");
  svgObject = svgObject.contentDocument || svgObject.contentWindow;

  if (svgObject) {
    var poly = svgObject.getElementsByClassName("hoverable")[0];
    var group = poly.classList.item(1);
    poly.addEventListener("mouseenter", show(group));
    poly.addEventListener("mouseleave", show(group, false));
    var shapes = svgObject.getElementsByClassName(group);

  } else {
    console.log(
      'svg not found, did you forgot to add id="svg-object" to object element?'
    );
  }

  function show(className, show = true) {
    var shapes = svgObject.getElementsByClassName(className);
    if (shapes) {
      for (var i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        if (shape.classList.contains("fixed")) {
          continue;
        } else {
          if (show) {
            shape.style.display = "block";
          } else {
            shape.style.display = "none";
          }
        }
      }
    }
  }
});
