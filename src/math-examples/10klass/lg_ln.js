import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5); 

    const math = `\\lg_{}${10**a}`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 5); 

    const math = `\\lg_{}${1/(10**a)}`
    const answer = `-${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(10, 20); 

    const math = `${a}\\ln_{}1`
    const answer = `0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(10, 20); 

    const math = `\\ln_{}e \\cdot \\lg_{}1`
    const answer = `0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(0, 2); 

    const math = `\\lg_{}25+\\lg_{}${4*(10**a)}`
    const answer = `${a+2}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let a = getRandomInt(2, 15); 

    const math = `\\ln_{}{\\frac{1}{e^{${a}}}}`
    const answer = `-${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () => {
    let a = getRandomInt(2, 9); 
    let b = getRandomInt(2, 4); 

    const math = `\\lg_{}{${a*(10**b)}}-\\lg_{}${a}`
    const answer = `${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {

    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10);
    let d = getRandomInt(2, 10);

    const math = `\\frac{\\lg_{}{${c}}+\\lg_{}${b}}{${d}\\lg_{}{${c*b}}}`
    const answer = `\\frac{1}{${d}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {

    let b = getRandomInt(2, 5);
  
  
    const math = `\\frac{\\ln_{}{${b**2}}}{\\ln_{}{${b**3}}}`
    const answer = `\\frac{2}{3}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => { 
    let b = getRandomInt(21, 40);
  
    const math = `e^{ln_{}${b}}`
    const answer = `${b}`
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