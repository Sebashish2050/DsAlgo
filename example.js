function Calculator() {
  const add = (v1, v2) => v1 + v2;
  const subs = (v1, v2) => v1 - v2;
  const mul = (v1, v2) => v1 * v2;
  const div = (v1, v2) => v1 / v2;

  this.calc = (op, v1, v2) => {
    switch(op) {
      case 'add':
        return add(v1, v2);
      case 'subs':
        return subs(v1, v2);
      case 'mul':
        return mul(v1, v2);
      case 'div':
        return div(v1, v2);
    }
    
  }
}

const calcObj = new Calculator();

console.log(calcObj.calc('div', 1,2));
