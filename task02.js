'use strict';


const generate2 = (item, n, m) => {
  const result = [];
  for (let i=0; i < item; i++) {
    result.push(Math.round(Math.random() * (m - n) + n));
  }
  return result;
}

console.log(generate2(100, -100, 100))
