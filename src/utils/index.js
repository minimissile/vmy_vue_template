//! 项目工具库

module.exports = {
  // 判断数据类型
  getType,
  // 将图片转化成base64格式
  convertImgToBase64,
  // 获取字节长度
  getByteLength,
  // 判断是否微信浏览器
  isWeiXin,
  // 从url中获取参数对象
  getParamFromUrl
}

/**
 * 将图片转化成base64格式
 * @param {IMG} img
 * @param {Function} callback
 * @param {String} format
 */
function convertImgToBase64(img, callback, quality = 1, format = 'jpg') {
  var w = img.naturalWidth || img.width
  var h = img.naturalHeight || img.height

  var canvas = document.createElement("canvas")
  var ctx = canvas.getContext("2d")

  canvas.width = w
  canvas.height = h
  ctx.drawImage(img, 0, 0, w, h)

  var dataURL = canvas.toDataURL(fixType(format), quality)

  callback && callback.call(this, dataURL)

  function fixType(type) {
    type = type.toLowerCase().replace(/jpg/i, "jpeg")
    var r = type.match(/png|jpeg|bmp|gif/)[0]
    return "image/" + r
  }
}

// 字节长度
function getByteLength(val) {
  let str = new String(val)
  let bytesCount = 0
  for (let i = 0, n = str.length; i < n; i++) {
    let c = str.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      bytesCount += 1
    } else {
      bytesCount += 2
    }
  }
  return bytesCount
}

// 判断是否微信浏览器
function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase()
  return /MicroMessenger/i.test(ua)
}

/**
 * 判断数据类型
 * @param data：需要判断的元素
 * @returns {blealen}
 */
function getType(data) {
  if (typeof data !== 'object' && typeof data !== 'function') {
    return typeof data;
  }
  // 走到下面的数据，包含null和对象，先把null过滤返回
  if (data === null) {
    return 'null';
  }
  // 现在剩下都是对象，使用toString返回他们的类型
  return toString.call(data).slice(8, -1);
}

/**
 * 从url中获取参数对象
 * @returns {{}}
 */
function getParamFromUrl() {
  var o = {};
  var url = location.search.substr(1);
  url = url.split('&');
  for (var i = 0; i < url.length; i++) {
    var param = url[i].split('=');
    o[param[0]] = param[1];
  }
  return o;
}
