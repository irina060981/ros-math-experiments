import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 7);
    let variable = generateVariableName();

    const math = `\\sqrt[]{${variable}}=${a}`
    const answer = `${variable}=${a**2}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
  let a = getRandomInt(8, 15);
  let variable = generateVariableName();

  const math = `\\sqrt[]{${variable}}=${a}`
  const answer = `${variable}=${a**2}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(2, 5);
  let variable = generateVariableName();

  const math = `\\sqrt[3]{${variable}}=${a}`
  const answer = `${variable}=${a**3}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let a = getRandomInt(-5, -2);
  let variable = generateVariableName();

  const math = `\\sqrt[3]{${variable}}=${a}`
  const answer = `${variable}=${a**3}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let a = getRandomInt(2, 100);
  let variable = generateVariableName();

  const math = `\\sqrt[3]{${variable}-${a}}=0`
  const answer = `${variable}=${a}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>{
  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  let variable = generateVariableName();

  const math = `\\sqrt[3]{${a}${variable}-${a*b}}=0`
  const answer = `${variable}=${b}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
 
  let b = getRandomInt(2, 10);
  let variable = generateVariableName();

  const math = `\\sqrt[]{${variable}}=\\frac{1}{${b}}`
  const answer = `${variable}=\\frac{1}{${b**2}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  let variable = generateVariableName();

  const math = `\\sqrt[]{${variable}-${a}}=${b}`
  const answer = `${variable}=${b**2+a}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>{
  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  let variable = generateVariableName();

  const math = `\\sqrt[]{${variable}+${a}}=${b}`
  const answer = `${variable}=${b**2-a}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () => {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 4);
  let variable = generateVariableName();

  const math = `\\sqrt[3]{${variable}+${a}}=${b}`
  const answer = `${variable}=${b**3-a}`;
  const condition = undefined

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