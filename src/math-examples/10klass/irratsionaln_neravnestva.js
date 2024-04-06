import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 7);
    let variable = generateVariableName();

    const math = `\\sqrt[]{${variable}}>${a}`
    const answer = `${variable}\\in\\left(${a**2};+\\infty\\right)`;
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

  const math = `\\sqrt[]{${variable}}>${a}`
  const answer = `${variable}\\in\\left(${a**2};+\\infty\\right)`;
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

  const math = `\\sqrt[3]{${variable}}<${a}`
  const answer = `${variable}\\in \\left(-\\infty; ${a**3}\\right)`;
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

  const math = `\\sqrt[3]{${variable}}>${a}`
  const answer = `${variable}\\in \\left(${a**3}; +\\infty\\right)`;
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

const createExample6 = () => {
  let a = getRandomInt(4, 7);
  let b = getRandomInt(2, 3);
  let variable = generateVariableName();

  const math = `\\sqrt[]{${variable}}+${b}>${a}`
  const answer = `${variable}\\in\\left(${(a-b)**2};+\\infty\\right)`;
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

  const math = `\\sqrt[]{${variable}}<\\frac{1}{${b}}`
  const answer = `${variable}=\\left(0;\\frac{1}{${b**2}}\\right)`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
 
  let b = getRandomInt(2, 10);
  let variable = generateVariableName();

  const math = `\\sqrt[]{${variable}}\\geq\\frac{1}{${b}}`
  const answer = `${variable}\\in \\left[\\frac{1}{${b**2}};+\\infty\\right)`;
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

  const math = `\\sqrt[]{${variable}+1}\\geq ${b}`
  const answer = `${variable}\\in \\left[${b**2-1}; +\\infty\\right)`;
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
  let variable = generateVariableName();

  const math = `\\sqrt[3]{${variable}+${a}}\\leq 1`
  const answer = `${variable}\\in \\left(-\\infty;${1-a}\\right]`;
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