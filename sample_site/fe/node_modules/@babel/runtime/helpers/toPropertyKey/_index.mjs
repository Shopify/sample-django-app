import _typeof from "@babel/runtime/helpers/typeof";
import toPrimitive from "@babel/runtime/helpers/toPrimitive";
export default function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}