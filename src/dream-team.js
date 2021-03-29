const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)){
    members.forEach(element => {
      if (typeof element == 'string'){
        element = element.trim();
        if(/^[A-Za-z]{1}/.test(element[0])){
        result.push(element[0].toUpperCase());  
        }
      }
    });

  } else 
  {
    return false;
  }
  return result.sort().join('');
};
