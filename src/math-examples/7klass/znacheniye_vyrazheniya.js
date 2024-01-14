import { getRandomInt, generateVariableName, shuffleSingle, generateVariableNameOne, generateVariableNameTwo  } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-10, 10, 0);  
    let b = getRandomInt(-30, 30, 0);
    let variable = generateVariableName()

    const math = `${variable}${a > 0 ? '+' : ''}${a}`
    const answer = `${b + a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(-5, 5, 0);  
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-5, 5, 0);
    let variable = generateVariableName()

    const math = `${c}${variable}${a > 0 ? '+' : ''}${a}`
    const answer = `${c*b + a}`;
    const condition = `${variable}=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-5, 5, 0);  
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-5, 5, 0);
    let variable = generateVariableName()

    const math = `${a}${c > 0 ? '+' : ''}${c}${variable}`
    const answer = `${c*b + a}`
    const condition = `${variable}=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}+${variable2}`
    const answer = `${a+b}`
    const condition = `${variable1}=${a}, ${variable2}=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
  let a = getRandomInt(-20, 20, 0);  
  let b = getRandomInt(-20, -2);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `${variable1}-${variable2}`
  const answer = `${a-b}`
  const condition = `${variable1}=${a},${variable2}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(-20, 20, 0);  
  let b = getRandomInt(-20, 20, 0);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `-${variable1}-${variable2}`
  const answer = `${-1*(a+b)}`
  const condition = `${variable1}=${a},${variable2}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let a = getRandomInt(-10, 10, 0);  
  let b = getRandomInt(-30, 30, 0);
  let variable = generateVariableName()
  
  const math = `-(${variable}${a > 0 ? '+' : ''}${a})`
  const answer = `${-1*(a+b)}`
  const condition = `${variable}=${b};`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(-20, 20, 0);  
  let b = getRandomInt(-20, 20, 0);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `-(${variable1}+${variable2})`
  const answer = `${-1*(a+b)}`
  const condition = `${variable1}=${a},${variable2}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  const a = getRandomInt(-5, 5, 0);  
  const b = getRandomInt(-20, 20, 0);
  const c = getRandomInt(-5, 5, 0);
  let variable = generateVariableName()

  const math = `${c}+${variable}${a > 0 ? '+' : ''}${a}`
  const answer = `${c+a+b}`
  const condition = `${variable}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  const a = getRandomInt(-10, 10, 0);  
  const b = getRandomInt(-30, 30, 0);
  let variable = generateVariableName()

  const math = `${variable}${a > 0 ? '+' : ''}${a}`
  const answer = `${b+a}`
  const condition = `${variable}=${b}`

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