// Make nested array plane

const plane = function(arr, res = []) {
  let j = 0
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    j = i
    if (Array.isArray(value, typeof value) && [i, length]) {
      res.push(...plane(value));
      arr[i] = res[i - 1]
    } else {
      arr[i] = res[j - 1]
      res.push(value);
    };
  };
  return res
}

const result = const_plane([1, [[2]], [3, 4], [5], [6, [7, 8]]]);
console.log(result);