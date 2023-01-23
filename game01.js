'use strict';

const random = Math.floor(Math.random() * 100 + 1);
console.log(random)


const game = () => {
  while (true) {
    const user = +prompt('Введи число 1-100!')
    if (user === null || user < 1) {
      alert('Зря ты так!!!')
      break;
    }
    if (Number.isNaN(user)) {
      alert('Ты ввел не число!')
      continue;
    }
    if (user > random) {
      alert('Меньше-попробуй еще раз!')
      continue;
    }
    if (user < random) {
      alert('Больше-попробуй еще раз!')
      continue;
    }
    if (user === random) {
      alert('Ты молодец!')
      break;
    }
  }
}

game()











