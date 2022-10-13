// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
//
// //Користувач ввів 2 і 2:
//
// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1

let number1;
let number2;

do {
    number1 = +prompt('Enter number 1');
} while (isNaN(number1))

do {
    number2 = +prompt('Enter number 2');
}
while (isNaN(number2))

const sum = number1 + number2;
const diff = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;

const result = `
Користувач ввів ${number1} і ${number2}
${number1}+${number2}=${sum}
${number1}-${number2}=${diff}
${number1}*${number2}=${mult}
${number1}/${number2}=${div}
`;

alert(result);