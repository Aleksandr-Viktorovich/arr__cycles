'use strict';

const user = +prompt('Введи первое число 1-100!')
const user2 = +prompt('Введи второе число 1-100!')
const bot = []
const num = Math.round(Math.abs((user2 - user) * 0.3))

bot.push(user, user2)
console.log(bot)


const game = () => {
  const res = (one, two) => {
    let randomRes = one + Math.random() * (two - one);
    return Math.floor(randomRes);
  }
    const ran = res(user, user2)
  console.log(ran)
  while (true) {
    let user3 = +prompt('Погнали')
    console.log(user3)
    if (user3 === 0) {
      alert('Зря ты так')
      return;
    }
    if (user3 === ran) {
      alert('Ты молодец!')
      return;
    }
    // if (user3 > num) {
    //   alert('Игра закончена')
    //   return;
    // }
  }
}



console.log(num)

game()











