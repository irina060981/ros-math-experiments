import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 10);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>{
    let a = getRandomInt(11, 21);  
    let b = getRandomInt(11, 21);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>{
    let a = getRandomInt(22, 42);  
    let b = getRandomInt(22, 42);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>{
    let a = getRandomInt(43, 63);  
    let b = getRandomInt(43, 63);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>{
    let a = getRandomInt(64, 99);  
    let b = getRandomInt(64, 99);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>{
    let a = getRandomInt(100, 130);  
    let b = getRandomInt(100, 130);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let a = getRandomInt(131, 151);  
    let b = getRandomInt(131, 151);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(152, 199);  
    let b = getRandomInt(152, 199);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>{
    let a = getRandomInt(200, 250);  
    let b = getRandomInt(200, 250);

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(250, 300);  
    let b = getRandomInt(250, 300); 

    const math = `${a}:${b}`
    const answer = `\\frac{${a}}{${b}}`;
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