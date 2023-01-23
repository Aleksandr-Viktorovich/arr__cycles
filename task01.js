'use strict';


const generate = (item) => {
  const result = [];
  for (let i=0; i < item; i++) {
    result.push(Math.round(Math.random() * 100));
  }
  return result;
}

console.log(generate(100))
