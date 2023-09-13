import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

function repeatStr(str, n) {
    var new_str = '';
    while (n-- > 0) new_str += str;
    return new_str;
};

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(3, 6);

    const math = repeatStr(`${a}+`, `${b}`)+`${a}`
    const answer = `${a*(b+1)}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(7, 9);

    const math = repeatStr(`${a}+`, `${b}`)+`${a}`
    const answer = `${a*(b+1)}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  { 
    let b = getRandomInt(3, 6);
    let variable1 = generateVariableName()

    const math = repeatStr(`${variable1}+`, `${b}`)+`${variable1}`
    const answer = `${(b+1)}${variable1}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>{
    let a = getRandomInt(5, 50);
    let variable = generateVariableName()

    const math = `\\underbrace{${variable}+${variable}+${variable}+...+${variable}}_{${a}}`
    const answer = `${a}${variable}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(11, 999);

    const math = `${a}\\cdot 1`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(11, 999);
    let b = getRandomInt(2, 999);

    const math = `${a}\\cdot(${b}-${b})`
    const answer = `0` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(11, 30);
    let b = getRandomInt(2, 5);

    const math = `${a}\\cdot ${b}`
    const answer = `${a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(11, 30);
    let b = getRandomInt(6, 10);

    const math = `${a}\\cdot ${b}`
    const answer = `${a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `${variable}\\cdot ${a}`
    const answer = `${b*a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}\\cdot ${variable2}`
    const answer = `${b*a}`;
    const condition = `${variable1}=${b};${variable2}=${a}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const examplesFn = [
  createExample1,
  createExample2,
  createExample3,
  createExample4,
  createExample5,
  createExample6,
  createExample7,
  createExample8,
  createExample9,
  createExample10
]

const createExamples = () => {
  const examples = examplesFn.map(fn => fn())
  return shuffleSingle(examples)
}
export { createExamples }