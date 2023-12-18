import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 30);
        let variable = generateVariableName()
    
        const math = `${variable}(${variable}-${a})=0`
        const answer = `${variable}_{1}=0, ${variable}_{2}=${a}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
    let a = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `${variable}(${variable}+${a})=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=-${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let a = getRandomInt(2, 30);
    let b = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `(${variable}-${b})(${variable}+${a})=0`
    const answer = `${variable}_{1}=${b}, ${variable}_{2}=-${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `${variable}^2-${a}${variable}=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `${variable}^2+${a}${variable}=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=-${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `-${variable}^2-${a}${variable}=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=-${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `-${variable}^2+${a}${variable}=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>  {
    let a = getRandomInt(2, 30);
    let variable = generateVariableName()

    const math = `${variable}^2=${a}${variable}`
    const answer = `${variable}_{1}=0, ${variable}_{2}=${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>   {
    let a = getRandomInt(2, 10);
    let b = a*getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${variable}(${a}${variable}-${b})=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=${b/a}` 
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
    let b = a*getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${a}${variable}^2+${b}${variable}=0`
    const answer = `${variable}_{1}=0, ${variable}_{2}=-${b/a}` 
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