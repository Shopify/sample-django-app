const OBJECT_NOTATION_MATCHER = /\[(.*?)\]|(\w+)/g;
function get(obj, keypath, defaultValue) {
  if (obj == null) return undefined;
  const keys = Array.isArray(keypath) ? keypath : getKeypath(keypath);
  let acc = obj; // eslint-disable-next-line @typescript-eslint/prefer-for-of

  for (let i = 0; i < keys.length; i++) {
    const val = acc[keys[i]];
    if (val === undefined) return defaultValue;
    acc = val;
  }

  return acc;
}

function getKeypath(str) {
  const path = [];
  let result;

  while (result = OBJECT_NOTATION_MATCHER.exec(str)) {
    const [, first, second] = result;
    path.push(first || second);
  }

  return path;
}

export { get };
