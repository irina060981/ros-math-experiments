import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 5);

  const math = `\\log_{${a}}{${a}^{${b}}}`
  const answer = `${b}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample2 = () =>  {
    
  let a = getRandomInt(11, 30);
  let b = getRandomInt(-11, -6);
  let c = getRandomInt(2, 20);

  const math = `\\log_{${a}}{${a}^{${b}}}+${c}`
  const answer = `${b+c}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () =>  {
    
  let a = getRandomInt(2, 5);

  const math = `\\log_{${a}}{\\frac{1}{${a**3}}}`
  const answer = `-3`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
    
  let a = getRandomInt(6, 10);

  const math = `\\log_{${a}}{\\frac{1}{${a**2}}}`
  const answer = `-2`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
    
  let a = getRandomInt(2, 5);
  let b = a**2

  const math = `2\\log_{${b}}{${a}}`
  const answer = `1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>   {
    
  let a = getRandomInt(2, 5);
  let b = a**2

  const math = `4\\log_{${b}}{${a}}`
  const answer = `2`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample7 = () =>  {
    
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);

  const math = `\\log_{${a}}{\\sqrt[${b}]{${a}}}`
  const answer = `\\frac{1}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {
    
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);

    const math = `\\log_{${a}}{\\sqrt[${b}]{${a**2}}}`
    const answer = `\\frac{2}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample9 = () =>  {

  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 5);


  const math = `\\frac{\\log_{${a}}{${b**2}}}{\\log_{${a}}{${b**3}}}`
  const answer = `\\frac{2}{3}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () =>  {

    let a = getRandomInt(2, 10);
    let b = getRandomInt(6, 10);


    const math = `\\frac{\\log_{${a}}{${b**2}}}{\\log_{${a}}{${b**3}}}`
    const answer = `\\frac{2}{3}`
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