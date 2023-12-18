import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 5);
        let b = a*getRandomInt(1, 5);
        let variable = generateVariableName()
    
        const math = `${a}\\cdot ${variable}=${b}`
        const answer = `${variable}=${b/a}` 
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
    let b = a*getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${a}\\cdot ${variable}=${b}`
    const answer = `${variable}=${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(11, 20);
    let b = a*getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${variable}\\cdot ${a}=${b}`
    const answer = `${variable}=${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>  {
    let a = getRandomInt(6, 10);
    let b = a*getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `${variable}\\cdot ${a}=${b}`
    const answer = `${variable}=${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `${a}\\cdot ${b}=${variable}`
    const answer = `${variable}=${b*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample6 = () => {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${b}:${variable}=${a}`
    const answer = `${variable}=${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>  {
    let a = getRandomInt(6, 10);
    let b = a*getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${b}:${variable}=${a}`
    const answer = `${variable}=${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}:${a}=${b}`
    const answer = `${variable}=${b*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(6, 11);
    let b = getRandomInt(6, 11);
    let variable = generateVariableName()

    const math = `${variable}:${a}=${b}`
    const answer = `${variable}=${b*a}` 
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
    let b = a*getRandomInt(2, 6);
    let variable = generateVariableName()

    const math = `${b}:${a}=${variable}`
    const answer = `${variable}=${b/a}` 
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