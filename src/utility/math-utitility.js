// получает случайное целое - границы включены в выборку
const getRandomInt = (min, max, exp) => {
  let n;
  while(true){
    if((n = Math.floor(Math.random() * (max - min + 1)) + min) !== exp) return n;
  }  
};

// получает случайный элемент массива
const getRandomPeremen = (arr) => {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};

// генерирует имя для случайной переменной. f,i,o,g,j исключена 
const generateVariableName = () => {
    const variables = ['a', 'b', 'c', 'd', 'e', 'h', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return getRandomPeremen(variables)
}
// генерирует имя для случайной переменной f,i,o,g,h,j исключена 
const generateVariableNameOne = () => {
  const variables = ['a', 'b', 'c', 'd', 'e', 'k', 'l', 'm', 'n'];
  return getRandomPeremen(variables)
}
// генерирует имя для случайной переменной t исключена
const generateVariableNameTwo = () => {
  const variables = ['p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];
  return getRandomPeremen(variables)
}

// перемешиваем 2 массива

function shuffle(array, array1) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
      [array[i], array[j]] = [array[j], array[i]];
      [array1[i], array1[j]] = [array1[j], array1[i]];
    }
    return array
  }

// перемешиваем 1 массив
const shuffleSingle = (array) => {
   array.sort(() => Math.random() - 0.5);
   return array
}

// Наибольший общий делитель двух чисел для сокращения дробей
function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

// Наименьшее общее кратное двух чисел для приведения к общему знаменателю
function NOK (x, y) {
  let i;
	for (i=2; 1>0; i++)
  {if(i%x===0 && i%y===0){return i; break}}
}

export { getRandomInt, getRandomPeremen, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffle, shuffleSingle, NOD , NOK}