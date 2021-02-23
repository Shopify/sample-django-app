import arrayWithHoles from "@babel/runtime/helpers/arrayWithHoles";
import iterableToArrayLimitLoose from "@babel/runtime/helpers/iterableToArrayLimitLoose";
import unsupportedIterableToArray from "@babel/runtime/helpers/unsupportedIterableToArray";
import nonIterableRest from "@babel/runtime/helpers/nonIterableRest";
export default function _slicedToArrayLoose(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}