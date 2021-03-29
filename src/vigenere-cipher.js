const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction){
      if(direction === false){
          this.direction = 'reverse';
      } else {
          this.direction = 'direct';
      }
      this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(string, key) {
      let result = '';
      let key_index = 0;

      string = string.toUpperCase().split('')
      key = key.toUpperCase().split('')
      
      string.forEach(x => {
          let a = this.alphabet.indexOf(x);
          if (a == -1) {
              result += x;
          } else {
              let b = this.alphabet.indexOf(key[key_index]);
              key_index++;
              if (key_index >= key.length) {
                  key_index = 0;
              };
              if(a + b >= this.alphabet.length){
                  result += this.alphabet[(a+b)-26];
              } else {
                  result += this.alphabet[a+b];
              }


          }
      });
      if(this.direction == 'reverse'){
          return result.split('').reverse().join('');
      }
      return result;
  }

  decrypt(string, key) {
      let result = '';
      let key_index = 0;
      // console.log(':str_def:' +string)
      string = string.toUpperCase().split('')
      key = key.toUpperCase().split('')
      // console.log(':direction:' + this.direction)
      // console.log(':string:' +string)
      // console.log(':key:'+key)
      string.forEach(x => {
          let a = this.alphabet.indexOf(x);
          if (a == -1) {
              result += x;
          } else {
              let b = this.alphabet.indexOf(key[key_index]);
              key_index++;
              if (key_index >= key.length) {
                  key_index = 0;
              };
              if(a-b < 0){
                  result += this.alphabet[26  - (b-a)]
              } else {
                  result += this.alphabet[a-b]
              }
          }
      });
      if(this.direction == 'reverse'){
          return result.split('').reverse().join('');
      }
      // console.log(' : result :'+result)
      return result;
  }
}

module.exports = VigenereCipheringMachine;
