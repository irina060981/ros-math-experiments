// получает случайное целое
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

// генерирует имя для случайной переменной
const generateVariableName = () => {
    const variables = ['q','e','t','y','u','p','a','s','d','h','l','x','c','v','n','m'];
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

export { getRandomInt, getRandomPeremen, generateVariableName, shuffle, shuffleSingle }