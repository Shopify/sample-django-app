import arrayLikeToArray from "@babel/runtime/helpers/arrayLikeToArray";
export default function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}