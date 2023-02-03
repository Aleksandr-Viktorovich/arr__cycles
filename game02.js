'use strict';

const user = +prompt('Введи первое число 1-100!')
const user2 = +prompt('Введи второе число 1-100!')
const bot = [user, user2]
const num = Math.round(Math.abs((user2 - user) * 0.3))

console.log(bot)

const res = (one, two) => {
  let randomRes = one + Math.random() * (two - one);
  return Math.floor(randomRes);
}
const result = res(user, user2)
console.log(result);

let counter = '';
  if (result > 0 && result < 50) {
    counter = num;
  }
  if (result > 50 && result < 100) {
    counter = 15;
  };

  console.log(counter)




const game = () => {
    if (counter > 0) {
      const user3 = +prompt('Погнали')
      console.log(user3)


      if (user3 === 0) {
        alert('Игра закончена!')
        return;
      }
      if (user3 === result) {
        alert('Ты молодец!')
        return;
      }
      if (user3 > result) {
        alert('Меньше-попробуй еще раз!')
      }
      if (user3 < result) {
        alert('Больше-попробуй еще раз!')
      }
      counter = counter - 1;
    } else {
      alert('Ты проиграл!')
      return
    }

  return game()
}





game()


// const game = () => {
//   const res = (one, two) => {
//     let randomRes = one + Math.random() * (two - one);
//     return Math.floor(randomRes);
//   }
//   const ran = res(user, user2)
//   console.log(ran)
//   while (true) {
//     let user3 = +prompt('Погнали')
//     console.log(user3)
//     if (user3 === 0) {
//       alert('Зря ты так')
//       return;
//     }
//     if (user3 === ran) {
//       alert('Ты молодец!')
//       return;
//     }
    // if (user3 > num) {
    //   alert('Игра закончена')
    //   return;
    // }
//   }
// }



// console.log(num)
//
// game()









// const game = () => {
//   const res = (one, two) => {
//     let randomRes = one + Math.random() * (two - one);
//     return Math.floor(randomRes);
//   }
//     const ran = res(user, user2)
//   console.log(ran)
//   while (true) {
//     let user3 = +prompt('Погнали')
//     console.log(user3)
//     if (user3 === 0) {
//       alert('Зря ты так')
//       return;
//     }
//     if (user3 === ran) {
//       alert('Ты молодец!')
//       return;
//     }
//     // if (user3 > num) {
//     //   alert('Игра закончена')
//     //   return;
//     // }
//   }
// }





// console.log(num)

// game()











