import arrayWithHoles from "@babel/runtime/helpers/arrayWithHoles";
import iterableToArrayLimit from "@babel/runtime/helpers/iterableToArrayLimit";
import unsupportedIterableToArray from "@babel/runtime/helpers/unsupportedIterableToArray";
import nonIterableRest from "@babel/runtime/helpers/nonIterableRest";
export default function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}