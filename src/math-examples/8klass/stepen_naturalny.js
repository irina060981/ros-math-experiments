import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-20, -2);  

    const math = `1^{${a}}`
    const answer = `1`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
    let a = getRandomInt(-10, -1)*2;  

    const math = `(-1)^{${a}}`
    const answer = `1`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(-3, -2);  
    let b = getRandomInt(2, 5)
    const math = `${b}^{${a}}`
    const answer = `\\frac{1}{${b**(-1*a)}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(-2, -1);  
    let b = getRandomInt(6, 10)
    const math = `${b}^{${a}}`
    const answer = `\\frac{1}{${b**(-1*a)}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(31, 59)
    const math = `\\left(\\frac{${a}}{${b}}\\right)^{-1}`
    const answer = `\\frac{${b}}{${a}}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(31, 59)
    const math = `\\left(-\\frac{${a}}{${b}}\\right)^{-1}`
    const answer = `-\\frac{${b}}{${a}}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(2, 5);  
    const math = `\\left(\\frac{1}{${a}}\\right)^{-2}`
    const answer = `${a**2}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(6, 11);  
    const math = `\\left(\\frac{1}{${a}}\\right)^{-2}`
    const answer = `${a**2}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(20, 50);  
    let variable= generateVariableName()
    const math = `\\left(\\frac{1}{${variable}}\\right)^{-1}`
    const answer = `${a}`    
    const condition = `a=${a}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>  {
    let a = getRandomInt(2, 10);  
    let variable= generateVariableName()
    const math = `\\left(\\frac{1}{${variable}}\\right)^{-2}`
    const answer = `${a*a}`    
    const condition = `a=${a}`
  
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