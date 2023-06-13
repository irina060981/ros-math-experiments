import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-10, -2);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}}`
    const answer = `\\frac{${variable2}^{${-1*a}}}{${variable1}^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(-20, -11);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}}`
    const answer = `\\frac{${variable2}^{${-1*a}}}{${variable1}^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(-10, -6);
    let b = getRandomInt(1, 4);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${b}${a}}`
    const answer = `\\frac{${variable2}^{${-1*(a+b)}}}{${variable1}^{${-1*(a+b)}}}`
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
    let b = getRandomInt(-5, -2);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${a}${b}}`
    const answer = `\\frac{${variable2}^{${-1*(a+b)}}}{${variable1}^{${-1*(a+b)}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(-20, -5);
    let b = getRandomInt(10, 30);  
    let variable = generateVariableName()
    let otv = '-'
    if(a%2===0) {otv = ''};
    const math = `\\left(-\\frac{${b}}{${variable}}\\right)^{${a}}`
    const answer = `${otv}\\frac{${variable}^{${-1*a}}}{${b}^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(-20, -5);
    let b = (-1)*getRandomInt(-30, -10);  
    let variable = generateVariableName()
    let otv = '-'
    if(a%2===0) {otv = ''};
    const math = `\\left(-\\frac{${b}}{${variable}}\\right)^{${a}}`
    const answer = `${otv}\\frac{${variable}^{${-1*a}}}{${b}^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(-20, -5);
    let b = getRandomInt(2, 10);  
    let variable = generateVariableName()
    const math = `(${b}:${variable})^{${a}}`
    const answer = `\\frac{${variable}^{${-1*a}}}{${b}^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(-20, -5);
    let b = getRandomInt(-10, -2);  
    let variable = generateVariableName()
    let otv = '-'
    if(a%2===0) {otv = ''};
    const math = `(${b}:${variable})^{${a}}`
    const answer = `${otv}\\frac{${variable}^{${-1*a}}}{${(-1)*b}^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(-10, -2);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}g}{${variable2}t}\\right)^{${a}}`
    const answer = `\\frac{(${variable2}t)^{${-1*a}}}{(${variable1}g)^{${-1*a}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(-10, -2);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left(\\frac{${variable1}+g}{${variable2}+t}\\right)^{${a}}`
    const answer = `\\frac{(${variable2}+t)^{${-1*a}}}{(${variable1}+g)^{${-1*a}}}`
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