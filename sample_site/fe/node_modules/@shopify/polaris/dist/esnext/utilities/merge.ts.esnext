// Unfortunately, this is how we have to type this at the moment.
// There is currently a proposal to support variadic kinds.
// https://github.com/Microsoft/TypeScript/issues/5453
function merge(...objs) {
  let final = {};

  for (const obj of objs) {
    final = mergeRecursively(final, obj);
  }

  return final;
}

function mergeRecursively(inputObjA, objB) {
  const objA = Array.isArray(inputObjA) ? [...inputObjA] : { ...inputObjA
  };

  for (const key in objB) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      continue;
    } else if (isMergeableValue(objB[key]) && isMergeableValue(objA[key])) {
      objA[key] = mergeRecursively(objA[key], objB[key]);
    } else {
      objA[key] = objB[key];
    }
  }

  return objA;
}

function isMergeableValue(value) {
  return value !== null && typeof value === 'object';
}

export { merge };
