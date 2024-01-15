import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(21, 40);

  const math = `${a}^{log_{${a}}${b}}`
  const answer = `${b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () => {
  let a = getRandomInt(21, 40);  
  let b = getRandomInt(41, 50);

  const math = `${a}^{log_{${a}}${b}}`
  const answer = `${b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () =>  {
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(21, 40);

  const math = `${b}^{log_{${b}}${a}}-${a}^{log_{${a}}${b}}`
  const answer = `${a-b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample4 = () =>  {
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(21, 40);

  const math = `\\left(\\frac{1}{${a}}\\right)^{log_{\\frac{1}{${a}}}${b}}`
  const answer = `${b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let a = getRandomInt(1, 99)/100;  
  let b = getRandomInt(2, 50);

  const math = `${a}^{log_{${a}}${b}}`
  const answer = `${b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>{
  let a = getRandomInt(2, 10);  
  let b = getRandomInt(2, 10);

  const math = `${b}^{log_{${b}}${a}}\\cdot${a}^{log_{${a}}${b}}`
  const answer = `${a*b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}



const createExample7 = () => {
  let a = getRandomInt(2, 10);  
  let b = getRandomInt(2, 10);

  const math = `${b}^{log_{${b}}${a}}+${a}^{log_{${a}}${b}}`
  const answer = `${a*b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(21, 40);

    const math = `${a}^{-log_{${a}}${b}}`
    const answer = `\\frac{1}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);

    const math = `${c}\\cdot${a}^{log_{${a}}${b}}`
    const answer = `${c*b}`
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
    let b = getRandomInt(2, 10);

    const math = `${a**2}^{log_{${a}}${b}}`
    const answer = `${b**2}`
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