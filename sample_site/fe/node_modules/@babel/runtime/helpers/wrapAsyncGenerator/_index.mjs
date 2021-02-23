import AsyncGenerator from "@babel/runtime/helpers/AsyncGenerator";
export default function _wrapAsyncGenerator(fn) {
  return function () {
    return new AsyncGenerator(fn.apply(this, arguments));
  };
}