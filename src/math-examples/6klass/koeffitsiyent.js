import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `${a}\\cdot ${b}${variable1}`
    const answer = `${a*b}${variable1}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `-${a}\\cdot${b}\\cdot ${variable1}`
    const answer = `-${a*b}${variable1}`       
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
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `-${a}\\cdot (${b}${variable1})`
    const answer = `-${a*b}${variable1}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>  {
    let a = getRandomInt(9, 99);
    let c = a/100;
    let variable1 = generateVariableName()

    const math = `${c}\\cdot(-10${variable1})`
    const answer = `-${(a/10)}${variable1}`       
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
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `-${a}\\cdot (-${variable1})\\cdot (-${b})`
    const answer = `-${a*b}${variable1}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `-${a}${variable1}${variable2}\\cdot (-${b})`
  const answer = `${a*b}${variable1}${variable2}`       
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

  const math = `-${a}\\cdot (-${b}) \\cdot (-${variable1})`
  const answer = `-${a*b}${variable1}`       
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>   {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `${a}${variable1}\\cdot (-${b}${variable2})`
  const answer = `-${a*b}${variable1}${variable2}`       
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let a = getRandomInt(10, 20);
  let b = getRandomInt(2, 10);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `-${a}${variable1}\\cdot (-${b}${variable2})`
  const answer = `${a*b}${variable1}${variable2}`       
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () =>  {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `${variable1}\\cdot ${b}${variable2} \\cdot ${a}t`
  const answer = `${a*b}${variable1}${variable2}t`       
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