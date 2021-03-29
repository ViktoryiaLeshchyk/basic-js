const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: Array(),

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
      this.arr.push(String(value).trim());
      return this;
  },

  removeLink(position) {
    if(Number.isInteger(position) && position>0 && position<this.arr.length){
      this.arr = this.arr.slice(0, position-1).concat(this.arr.slice(position));
      return this;
    } else {
      this.arr = Array();
      throw new Error();
    }
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let result = '( '+this.arr.join(' )~~( ')+' )';
    // console.log( result )
    this.arr = Array()
    return result;

  }
};

module.exports = chainMaker;
