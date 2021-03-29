const CustomError = require("../extensions/custom-error");

module.exports = function transform(a) {
    if (!Array.isArray(a)) {
      throw new Error('You shoud give me array, please :) ')
    } else if (a.length === 0) {
      return a
    };
    let arr = a.map(i => i)
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          if (i === arr.length - 1) {
            arr.splice(i, 1)
            break;
          }
          if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
            arr.splice(i, 3)
            break;
          }
          arr.splice(i, 2)
          i--;
          break;
        case '--discard-prev':
          if (i === 0) {
            arr.splice(i, 1)
            break;
          }
          arr.splice(i - 1, 2)
          i--;
          break;
        case '--double-next':
          if (i === arr.length - 1) {
            arr.splice(i, 1)
            break;
          }
          arr.splice(i, 1, arr[i + 1])
          break;
        case '--double-prev':
          if (i === 0) {
            arr.splice(i, 1)
            break;
          }
          arr.splice(i, 1, arr[i - 1])
          break;
      }
    }
    return arr
  };