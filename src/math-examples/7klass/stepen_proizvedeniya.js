import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}${variable2})^{${a}}`
    const answer = `${variable1}^{${a}}${variable2}^{${a}}`       
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

    const math = `(${variable1}${variable2})^{${a}}`
    const answer = `${variable1}^{${a}}${variable2}^{${a}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(6, 20); 
    let b = getRandomInt(-5, -1); 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}${variable2})^{${a}${b}}`
    const answer = `${variable1}^{${a+b}}${variable2}^{${a+b}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(6, 20); 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}${variable2}t)^{${a}}`
    const answer = `${variable1}^{${a}}${variable2}^{${a}}t^{${a}}`       
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
    let variable1 = generateVariableName()

    const math = `(${b}${variable1})^{${a}}`
    const answer = `${b}^{${a}}${variable1}^{${a}}`       
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
    let b = getRandomInt(-30, -2);
    let variable1 = generateVariableName()

    const math = `(${b}${variable1})^{${a}}`
    if (a%2===0) {b=`${-1*b}`}
    const answer = `${b}^{${a}}${variable1}^{${a}}`       
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
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${b}${variable1}${variable2})^{${a}}`
    const answer = `${b}^{${a}}${variable1}^{${a}}${variable2}^{${a}}`       
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
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${b}${variable1}${variable2})^{${a}}`
    if (a%2===0) {b=`${-1*b}`}
    const answer = `${b}^{${a}}${variable1}^{${a}}${variable2}^{${a}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(3, 20); 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `((${variable2}${variable1})(gt))^{${a}}`
    const answer = `(${variable2}${variable1})^{${a}}(gt)^{${a}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(3, 20); 
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `((${variable2}+${variable1})(t+g))^{${a}}`
    const answer = `(${variable2}+${variable1})^{${a}}(t+g)^{${a}}`       
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