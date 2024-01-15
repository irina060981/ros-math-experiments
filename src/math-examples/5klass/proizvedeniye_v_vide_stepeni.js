import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, repeatStr} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(3, 7);

    const math = repeatStr(`${a}\\cdot`, `${b}`)+`${a}`
    const answer = `${a}^{${b+1}}`       
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
    let b = getRandomInt(3, 7);

    const math = repeatStr(`${a}\\cdot`, `${b}`)+`${a}`
    const answer = `${a}^{${b+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
  let b = getRandomInt(3, 7);
  let a = getRandomInt(2, 20);
  let variable = generateVariableName()
  if(a > 0) a = '+'+a;

  const math = repeatStr(`(${variable}${a})\\cdot`, `${b}`)+`(${variable}${a})`
  const answer = `(${variable}${a})^{${b+1}}`       
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () =>{
  let a = getRandomInt(51, 99);
  let variable = generateVariableName()

  const math = `\\underbrace{${variable}\\cdot ${variable} \\cdot ${variable} \\cdot...\\cdot ${variable}}_{${a}}`
  const answer = `${variable}^{${a}}`       
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
    let a = getRandomInt(3, 7);  
    let b = getRandomInt(2, 7);
    let variable = generateVariableName()

    const math = repeatStr(`(${a}${variable})\\cdot`, `${b}`)+`(${a}${variable})`
    const answer = `(${a}${variable})^{${b+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let b = getRandomInt(2, 7);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = repeatStr(`(${variable1}${variable2})\\cdot`, `${b}`)+`(${variable1}${variable2})`
    const answer = `(${variable1}${variable2})^{${b+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let b = getRandomInt(3, 7);
    let a = getRandomInt(2, 10);
    let variable = generateVariableName()
    if(a > 0) a = '+'+a;

    const math = repeatStr(`(${variable}${a})\\cdot`, `${b}`)+`(${variable}${a})`
    const answer = `(${variable}${a})^{${b+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let b = getRandomInt(3, 7);
    let a = getRandomInt(11, 20);
    let variable = generateVariableName()

    const math = repeatStr(`(${a}${variable})\\cdot`, `${b}`)+`(${a}${variable})`
    const answer = `(${a}${variable})^{${b+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(5, 50);
    let variable = generateVariableName()

    const math = `\\underbrace{${variable}\\cdot ${variable} \\cdot ${variable} \\cdot...\\cdot ${variable}}_{${a}}`
    const answer = `${variable}^{${a}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let b = getRandomInt(3, 7);
    let variable = generateVariableName()

    const math = repeatStr(`(${variable}^{2})\\cdot`, `${b}`)+`(${variable}^{2})`
    const answer = `(${variable}^{2})^{${b+1}}`       
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