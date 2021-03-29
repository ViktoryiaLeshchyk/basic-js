const CustomError = require("../extensions/custom-error");

    module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
      let turns_result = (2**disksNumber) -1
      let second_result = turns_result/(turnsSpeed/(3600));
      return {turns: turns_result, seconds: Math.floor(second_result)}
  }