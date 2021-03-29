const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth) {
      if(!depth){
          depth = 1;
      }

      let rabbit_hole = depth;
      arr.forEach(x => {
          if(Array.isArray(x)){
              let a = this.calculateDepth(x,depth+1);
              if(a> rabbit_hole){
                  rabbit_hole = a;
              }
          }
      });
      return rabbit_hole;
  }
};
