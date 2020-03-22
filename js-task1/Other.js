export function makeLooper(str) {
  let index = 0;
  return () => {
    index = index === str.length ? 0 : index;
    return str[index += 1];
  };
}

export function search(files) {
  let path = '';
  function isHere(file) {
    for (const key in file) {
      const addPath = key;
      if (typeof (file[key]) === 'object') {
        if (isHere(file[key])) {
          path = `${addPath}/${path}`;
          return true;
        }
        continue;
      } else {
        path = key;
        return true;
      }
    }
    return false;
  }
  if (!isHere(files)) { throw new Error('No files!'); }
  return path;
}

export function deepCount(arr) {
  let count = 0;
  arr.forEach((item) => {
    if (Array.isArray(item)) count += deepCount(item);
    count += 1;
  });
  return count;
}
