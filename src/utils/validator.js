// 数据校验
import regexp from './regexp'

module.exports = {
  verifyAvailablePhone
}

// 验证是否为有效手机号
export function verifyAvailablePhone(str) {
  var myreg = regexp.verifyAvailablePhone
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}
