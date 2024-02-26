import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10)*2;
    let b = getRandomInt(2, 10)*2-1;   

    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}} \\right)^{\\frac{${a}}{${b}}}`
    const answer = `\\frac{${variable1}^{\\frac{${a}}{${b}}}}{${variable2}^{\\frac{${a}}{${b}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
  let a = getRandomInt(2, 10)*2;
  let b = getRandomInt(2, 10)*2-1; 

    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{-\\frac{${a}}{${b}}}`
    const answer = `\\frac{${variable2}^{\\frac{${a}}{${b}}}}{${variable1}^{\\frac{${a}}{${b}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(21, 49); 
    let c = getRandomInt(2, 10); 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{{\\frac{${a}}{${b}}}+\\frac{${c}}{${b}}}`
    const answer = `\\frac{${variable1}^{\\frac{${a+c}}{${b}}}}{${variable2}^{\\frac{${a+c}}{${b}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let c = getRandomInt(2, 10); 
    let a = getRandomInt(2, 10)*2; 
    let b = getRandomInt(2, 10)*2-1; 
    let variable1 = generateVariableName()

    const math = `(${c}:${variable1})^{\\frac{${a}}{${b}}}`
    const answer = `\\frac{${c}^{\\frac{${a}}{${b}}}}{${variable1}^{\\frac{${a}}{${b}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(10, 30);
    let variable1 = generateVariableName()

    const math = `(${b}:${variable1})^{-\\frac{1}{${a}}}`
    const answer = `\\frac{${variable1}^{\\frac{1}{${a}}}}{${b}^{\\frac{1}{${a}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 10)*2-1;

    let b = getRandomInt(2, 30);
    let variable1 = generateVariableName()

    const math = `\\left(-\\frac{${b}}{${variable1}}\\right)^{\\frac{1}{${a}}}`
    const answer = `-\\frac{${b}^{\\frac{1}{${a}}}}{${variable1}^{\\frac{1}{${a}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(2, 5)*2-1; 
    let b = getRandomInt(2, 5)*2; 
    let t = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left ( -\\frac{${t}${variable1}}{${variable2}} \\right)^{\\frac{${b}}{${a}}}`
    const answer = `\\frac{(${t}${variable1})^{\\frac{${b}}{${a}}}}{${variable2}^{\\frac{${b}}{${a}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(2, 50); 
    let t = getRandomInt(2, 10);
    
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${t}}{${variable1}${variable2}}\\right)^{-\\frac{1}{${a}}}`
    const answer = `\\frac{(${variable1}${variable2})^{\\frac{1}{${a}}}}{${t}^{\\frac{1}{${a}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(3, 20)*2; 
    let b = getRandomInt(3, 20)*2-1; 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left (\\frac{${variable2}${variable1}}{gt}\\right)^{\\frac{${b}}{${a}}}`
    const answer = `\\frac{(${variable2}${variable1})^{\\frac{${b}}{${a}}}}{(gt)^{\\frac{${b}}{${a}}}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(3, 20)*2; 
    let b = getRandomInt(3, 20)*2-1; 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left (\\frac{${variable2}+${variable1}}{t+g} \\right )^{\\frac{${b}}{${a}}}`
    const answer = `\\frac{(${variable2}+${variable1})^{\\frac{${b}}{${a}}}}{(t+g)^{\\frac{${b}}{${a}}}}`       
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