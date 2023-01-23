'use strict';


const generate3 = (item, n, m, str) => {
  const result = [];
  for (let i=0; i < item; i++) {
    result.push(Math.round(Math.random() * (m - n) + n));
  }
  if (str === 'even') {
    const newNum = result.filter((items) => items >= 0);
    return newNum
  }
   if
     (str === 'odd') {
    const newNum = result.filter((item) => item < 0);
    return newNum
  }


}

console.log(generate3(100, -100, 100, 'even'))
