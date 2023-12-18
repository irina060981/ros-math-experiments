import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let b = getRandomInt(2, 10);
    let a = getRandomInt(2, 5)*b;  
    let c = getRandomInt(2, 5)*b;
    let variable= generateVariableName()

    const math = `\\frac{${variable}+${a}}{${b}}`
    const answer = `${(c+a)/b}`
    const condition = `${variable}=${c}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
  let b = getRandomInt(2, 10);
  let a = getRandomInt(2, 5)*b;  
  let c = getRandomInt(2, 5)*b;
  let variable= generateVariableName()

  const math = `\\frac{${variable}-${a}}{${b}}`
  const answer = `${(c-a)/b}`
  const condition = `${variable}=${c}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let b = getRandomInt(2, 10);
  let a = getRandomInt(2, 6)*b;  
  let c = getRandomInt(2, 6)*b;
  let variable= generateVariableName()

  const math = `-\\frac{${variable}+${a}}{${b}}`
  const answer = `-${(c+a)/b}`
  const condition = `${variable}=${c}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}
const createExample4 = () => {
  let b = getRandomInt(2, 10);
  let a = getRandomInt(2, 6)*b;  
  let c = getRandomInt(2, 6)*b;
  let variable= generateVariableName()

  const math = `-\\frac{${variable}-${a}}{${b}}`
  const answer = `${(-1)*(c-a)/b}`
  const condition = `${variable}=${c}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let b = getRandomInt(2, 5); 
  let c = getRandomInt(2, 6)*b;
  let variable= generateVariableName()

  const math = `\\frac{${variable}+${c}}{${variable}}`
  const answer = `${(c+b)/b}`
  const condition = `${variable}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>  {
  let b = getRandomInt(2, 8); 
  let c = getRandomInt(2, 6)*b;
  let variable= generateVariableName()

  const math = `\\frac{${variable}-${c}}{${variable}}`
  const answer = `${(b-c)/b}`
  const condition = `${variable}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {
  let b = getRandomInt(2, 8); 
  let c = getRandomInt(2, 6)*b;
  let variable= generateVariableName()

  const math = `-\\frac{${variable}-${c}}{${variable}}`
  const answer = `${(-1)*(b-c)/b}`
  const condition = `${variable}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let c = getRandomInt(2, 5);
  let b = getRandomInt(2, 5)*c; 
  let variable= generateVariableName()

  const math = `\\frac{(${variable}-${c})(${variable}+${c})}{${variable}-${c}}`
  const answer = `${(c+b)}`
  const condition = `${variable}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let c = getRandomInt(2, 5);
  let b = getRandomInt(2, 5)*c; 
  let variable= generateVariableName()

  const math = `\\frac{${variable}-${c}}{(${variable}-${c})(${variable}+${c})}`
  const answer = `\\frac{1}{${c+b}}`
  const condition = `${variable}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () =>{
  let a = getRandomInt(2, 10);
  let c = getRandomInt(2, 5)*a; 

  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${variable1}+${variable2}}{${variable1}}`
  const answer = `${(a+c)/a}`
  const condition = `${variable1}=${a}, ${variable2}=${c}`

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