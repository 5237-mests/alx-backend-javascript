const Utils = {
  calculateNumber(type, a, b) {
    let res;
  
    if (type === 'SUM'){
      res = (Math.round(a) + Math.round(b));
    } else if (type === 'SUBSTRACT'){
      res = (Math.round(a) - Math.round(b));
    } else if(type === 'DIVIDE'){
      if (Math.round(b) == 0){
        return('Error');
      } 
      res = (Math.round(a) / Math.round(b));
    }
    return res;
  }
}

module.exports = Utils;
