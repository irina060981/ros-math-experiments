import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}}`
    const answer = `\\frac{${variable1}^{${a}}}{${variable2}^{${a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(11, 20);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}}`
    const answer = `\\frac{${variable1}^{${a}}}{${variable2}^{${a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(6, 10);
    let b = getRandomInt(-5, -1);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}${b}}`
    const answer = `\\frac{${variable1}^{${a+b}}}{${variable2}^{${a+b}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(6, 30);
    let b = getRandomInt(-5, - 1);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}${b}}`
    const answer = `\\frac{${variable1}^{${a+b}}}{${variable2}^{${a+b}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(3, 20);
    let b = getRandomInt(10, 30);  
    let variable = generateVariableName()
    let otv = '-'
    if(a%2===0) {otv = ''};
    const math = `\\left(-\\frac{${b}}{${variable}}\\right)^{${a}}`
    const answer = `${otv}\\frac{${b}^{${a}}}{${variable}^{${a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(3, 20);
    let b = (-1)*getRandomInt(-30, -2);  
    let variable = generateVariableName()
    let otv = '-'
    if(a%2===0) {otv = ''};
    const math = `\\left(-\\frac{${b}}{${variable}}\\right)^{${a}}`
    const answer = `${otv}\\frac{${b}^{${a}}}{${variable}^{${a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(3, 20);
    let b = getRandomInt(2, 10);  
    let variable = generateVariableName()
    const math = `(${b}:${variable})^{${a}}`
    const answer = `\\frac{${b}^{${a}}}{${variable}^{${a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(3, 20);
    let b = getRandomInt(-10, -2);  
    let variable = generateVariableName()
    let otv = '-'
    if(a%2===0) {otv = ''};
    const math = `(${b}:${variable})^{${a}}`
    const answer = `${otv}\\frac{${(-1)*b}^{${a}}}{${variable}^{${a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(2, 10);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}g}{${variable2}t}\\right)^{${a}}`
    const answer = `\\frac{(${variable1}g)^{${a}}}{(${variable2}t)^{${a}}}`
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
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}+g}{${variable2}+t}\\right)^{${a}}`
    const answer = `\\frac{(${variable1}+g)^{${a}}}{(${variable2}+t)^{${a}}}`
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