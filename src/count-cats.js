const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;
  backyard.forEach((element) => {
    element.forEach((item)=> {
      if (item == '^^') {
        result += 1;
      }

    })
  });
  return result;
};
