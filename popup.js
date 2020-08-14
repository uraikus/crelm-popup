module.exports = popup;

var crelm = require("crelm");
var zIndex = 10,
  cssLoaded;

function popup(children, closeClickOnBlur, maxWidth) {
  if (!cssLoaded) init();
  var blur = crelm({
    parent: document.body,
    clss: "c-blur",
    style: { zIndex: zIndex }
  });
  var dialog = crelm({
    parent: document.body,
    clss: "c-popup",
    children: children,
    style: { zIndex: zIndex },
    blur: blur,
    maxWidth: maxWidth || 300
  });
  dialog.close = function(callback) {
    dialog.style.opacity = "";
    blur.style.opacity = "";
    removeEventListener("resize", dialog.resize);
    setTimeout(function() {
      dialog.remove();
      blur.remove();
      if (typeof callback === "function") callback();
    }, 600);
  };
  if (closeClickOnBlur) blur.onclick = dialog.close;
  setTimeout(function() {
    dialog.style.opacity = "1";
    blur.style.opacity = "1";
  }, 5);
  dialog.resize = function() {
    var width = dialog.maxWidth;
    if (innerWidth + 40 < width) {
      dialog.style.width = innerWidth - 40 + "px";
      dialog.style.left = "20px";
    } else {
      dialog.style.width = width + "px";
      dialog.style.left = (innerWidth - width) / 2 + "px";
    }
  };
  dialog.setWidth = function(width) {
    dialog.maxWidth = width;
    dialog.resize();
  };
  dialog.resize();
  addEventListener("resize", dialog.resize);
  return dialog;
}

function init() {
  cssLoaded = true;
  crelm({
    parent: document.head,
    tag: "style",
    html:
      ".c-blur,.c-popup{opacity:0;position:fixed;box-sizing:border-box;transition:all 0.6s}.c-popup{border-radius:5px;height:auto;top:20px;max-height:calc(100% - 40px);box-shadow:0 0 4px #000;background-color:#c0c0c0;padding:4px;overflow:auto}.c-blur{top:0;height:100%;left:0;width:100%;background-color:rgba(0, 0, 0, 0.5);backdrop-filter: blur(4px)}"
  });
}
