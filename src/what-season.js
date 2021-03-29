const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(result) {
  if (result === undefined){
    return 'Unable to determine the time of year!'
  }
  if (!result.getTime()){
    throw new Error('Error');
  }
  else if (result.getMonth() < 2){
    return 'winter';
  }
  else if (result.getMonth() < 5) {
    return 'spring';
  }
  else if (result.getMonth() < 8) {
    return 'summer';
  }
  else if (result.getMonth() < 11) {
    return 'autumn';
  }
  else {return 'winter';}
};
