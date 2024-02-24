!function (w) {
  var e = w.document,
    t = e.documentElement,
    i = 750,
    o = "orientationchange" in w ? "orientationchange" : "resize",
    a = function () {
      var cw = t.clientWidth || document.body.clientWidth;

      if (cw > 750) {
        t.style.fontSize = "50px"
        return
      }
      t.style.fontSize = cw / i * 100 + "px"
    }
  e.addEventListener && (w.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window)
