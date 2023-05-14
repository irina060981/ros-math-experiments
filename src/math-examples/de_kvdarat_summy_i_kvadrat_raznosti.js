import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1, 5);  
    let variable1 = generateVariableName()

    const math = `${variable1}^2+${a*2}${variable1}+{${a*a}}`
    const answer = `(${variable1}+${a})^2`       
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
    let variable1 = generateVariableName()

    const math = `${variable1}^2+${a*2}${variable1}+${a*a}`
    const answer = `(${variable1}+${a})^2`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(1, 5);  
    let variable1 = generateVariableName()

    const math = `${variable1}^2-${a*2}${variable1}+${a*a}`
    const answer = `(${variable1}-${a})^2`       
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
    let variable1 = generateVariableName()

    const math = `${variable1}^2-${a*2}${variable1}+${a*a}`
    const answer = `(${variable1}-${a})^2`       
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
    let variable1 = generateVariableName()

    const math = `${a*a}${variable1}^2-${a*2}${variable1}+1`
    const answer = `(${a}${variable1}-1)^2`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 10);  
    let variable1 = generateVariableName()

    const math = `${a*a}${variable1}^2+${a*2}${variable1}+1`
    const answer = `(${a}${variable1}+1)^2`       
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
    let variable1 = generateVariableName()

    const math = `${a*a}${variable1}^2-${a*2*b}${variable1}+${b*b}`
    const answer = `(${a}${variable1}-${b})^2`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 10);  
    let variable1 = generateVariableName()

    const math = `${a*a}${variable1}^2+${a*2*b}${variable1}+${b*b}`
    const answer = `(${a}${variable1}+${b})^2`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(2, 7);  
    let b = getRandomInt(2, 7);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a*a}${variable1}^2+${a*2*b}${variable1}${variable2}+${b*b}${variable2}^2`
    const answer = `(${a}${variable1}+${b}${variable2})^2`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
  let a = getRandomInt(2, 7);  
  let b = getRandomInt(2, 7);  
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `${a*a}${variable1}^2-${a*2*b}${variable1}${variable2}+${b*b}${variable2}^2`
  const answer = `(${a}${variable1}-${b}${variable2})^2`       
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