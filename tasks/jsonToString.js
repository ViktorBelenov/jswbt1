function objectToString(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return String(obj);
  }

  let result = '{';
  let isFirst = true;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (!isFirst) {
        result += ',';
      }
      isFirst = false;

      result += `"${key}":${objectToString(obj[key])}`;
    }
  }

  result += '}';
  return result;
}


// function stringify(data) {
//   if (data === undefined)
//     return undefined
//   if (data === null)
//     return 'null'
//   if (data.toString() === "NaN")
//     return 'null'
//   if (data === Infinity)
//     return 'null'
//   if (data.constructor === String)
//     return '"' + data.replace(/"/g, '\\"') + '"'
//   if (data.constructor === Number)
//     return String(data)
//   if (data.constructor === Boolean)
//     return data ? 'true' : 'false'
//   if (data.constructor === Array)
//     return '[' + data.reduce((acc, v) => {
//       if (v === undefined || v === NaN || v === Infinity)
//         return [...acc, 'null']
//       else
//         return [...acc, stringify(v)]
//     }, []).join(',') + ']'
//   if (data.constructor === Object)
//     return '{' + Object.keys(data).reduce((acc, k) => {
//       if (data[k] === undefined)
//         return acc
//       else
//         return [...acc, stringify(k) + ':' + stringify(data[k])]
//     }, []).join(',') + '}'

//     return '{}'
// }

export { objectToString };