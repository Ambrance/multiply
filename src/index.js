module.exports = function multiply(first, second) {
  let firstArr = first
    .split('')
    .reverse()
    .map(el => Number(el));
  let secondArr = second
    .split('')
    .reverse()
    .map(el => Number(el));
  let res = [];
  for (let k = 0; k < firstArr.length; k++) {
    for (let i = 0; i < secondArr.length; i++) {
      let sum = firstArr[k] * secondArr[i];
      if (res[k + i]) {
        res[k + i] += sum;
      } else {
        res[k + i] = sum;
      }
    }
  }
  for (let j = 0; j < res.length; j++) {
    let p = res[j] % 10;
    let q = Math.floor(res[j] / 10);
    res[j] = p;
    if (res[j + 1]) {
      res[j + 1] += q;
    } else if (q) {
      res[j + 1] = q;
    }
  }
  return res.reverse().join('');
  /*let res = BigInt(first) * BigInt(second);
  return res.toString();*/
};
