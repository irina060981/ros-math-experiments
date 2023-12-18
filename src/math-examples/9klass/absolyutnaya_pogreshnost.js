import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 15);
        let b = getRandomInt(2, 5);
        let variable = generateVariableName()
    
        const math = `${variable}=${a}\\pm${b}`
        const answer = `${a-b}\\leq ${variable}\\leq${a+b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
  let a = getRandomInt(2, 15);
  let b = getRandomInt(6, 20);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm${b}`
  const answer = `${a-b}\\leq ${variable}\\leq${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(2, 15);
  let b = getRandomInt(11, 29, 20);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm${b/10}`
  const answer = `${(a*10-b)/10}\\leq ${variable}\\leq${(a*10+b)/10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let a = getRandomInt(2, 15);
  let b = getRandomInt(31, 49, 40);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm${b/10}`
  const answer = `${(a*10-b)/10}\\leq ${variable}\\leq${(a*10+b)/10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(2, 15);
  let b = getRandomInt(2, 99, 20);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm${b/100}`
  const answer = `${(a*100-b)/100}\\leq ${variable}\\leq${(a*100+b)/100}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>{
  let a = getRandomInt(-15, -2);
  let b = getRandomInt(31, 49, 40);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm${b/10}`
  const answer = `${(a*10-b)/10}\\leq ${variable}\\leq${(a*10+b)/10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let a = getRandomInt(-25, -2);
  let b = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm${b}`
  const answer = `${a-b}\\leq ${variable}\\leq${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(2, 15, 10);
  let b = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm \\frac{1}{${b}}`
  const answer = `${a-1} \\frac{${b-1}}{${b}}\\leq ${variable}\\leq ${a} \\frac{${1}}{${b}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let a = getRandomInt(2, 15, 10);
  let b = getRandomInt(6, 15, 10);
  let variable = generateVariableName()

  const math = `${variable}=${a}\\pm \\frac{1}{${b}}`
  const answer = `${a-1} \\frac{${b-1}}{${b}}\\leq ${variable}\\leq ${a} \\frac{${1}}{${b}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(2, 15, 10);
  let b = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `${variable}=\\frac{${1}}{${a}}\\pm {${b}}`
  const answer = `-${b-1} \\frac{${a-1}}{${a}}\\leq ${variable}\\leq ${b} \\frac{${1}}{${a}}` 
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
