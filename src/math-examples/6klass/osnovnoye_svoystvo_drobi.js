import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);  

    const math = `\\frac{${a}}{${b}}=\\frac{?}{${b*c}}`
    const answer = `${a*c}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(6, 10);  
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10);  

    const math = `\\frac{${a}}{${b}}=\\frac{?}{${b*c}}`
    const answer = `${a*c}`
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
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);  

    const math = `\\frac{${a}}{${b}}=\\frac{${a*c}}{?}`
    const answer = `${b*c}`
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
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10);  

    const math = `\\frac{${a}}{${b}}=\\frac{${a*c}}{?}`
    const answer = `${b*c}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);  

    const math = `\\frac{?}{${b}}=\\frac{${a*c}}{${b*c}}`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);  

    const math = `\\frac{${a*c}}{${b*c}}=\\frac{?}{${b}}`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(6, 10);  
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10);  

    const math = `\\frac{${a*c}}{${b*c}}=\\frac{?}{${b}}`
    const answer = `${a}`
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
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);  

    const math = `\\frac{${a*c}}{${b*c}}=\\frac{${a}}{?}`
    const answer = `${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let a = getRandomInt(6, 10);  
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10);  

    const math = `\\frac{${a*c}}{${b*c}}=\\frac{${a}}{?}`
    const answer = `${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);  

    const math = `\\frac{${a*c}}{?}=\\frac{${a}}{${b}}`
    const answer = `${b*c}`
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