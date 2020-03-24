//File Finder
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
//Array deep count
export function deepCount(arr) {
  let count = 0;
  arr.forEach((item) => {
    if (Array.isArray(item)) count += deepCount(item);
    count += 1;
  });
  return count;
}
//Make looper
export function makeLooper(str) {
  let index = 0;
  return () => {
    index = index === str.length ? 0 : index;
    return str[index++];
  };
}
//Type checking
export function type(val) {
  if(typeof val === 'undefined'){return 'Undefined'}
  if(val === null){return 'Null'}
  const str = val.constructor.toString()
  let result = str.slice(9, str.indexOf('('))
  if(result === 'String'){
  return !isNaN(Number(val)) ? result + ' Numeric' : result
  }
  if(result === 'Number'){
    switch(true) {
      case isNaN(val):
      return result + ' NaN'
      case !isFinite(val):
      return result + ' Infinite'
      case Number.isInteger(val):
      return result + ' Integer'
      default: return result + ' Float'
    }
  }
  return result
}