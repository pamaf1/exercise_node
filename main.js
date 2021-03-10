const math = require('./node_modules/math/index.js');

let arr = [];

// Заповнення масиву рандомними значеннями
for(let i = 0; i<30 ;i++)
{
       arr[i] = getRandomNumber();
}

const minElem = math.findMin(arr),
    sumValues = math.Summ(arr),
    abs = math.findAbs(-getRandomNumber());


// Функція видає рандомне число
function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Функція виводить повідомлення
function showMessage() {
    console.log(`Найменший елемент з масиву: ${minElem}`);
    console.log(`Сума всіх елементів масиву: ${sumValues}`);
    console.log(`Число по модулю: ${abs}`);
}

showMessage();

