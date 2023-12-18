import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 99);
        let variable = generateVariableName()

        const math = `${variable}>${a}`
        const answer = `${variable}\\in (${a};+\\infty)` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 99);
    let variable = generateVariableName()

    const math = `${variable}<${a}`
    const answer = `${variable}\\in (-\\infty; ${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample3 = () =>  {
    let a = getRandomInt(-99, -2);
    let variable = generateVariableName()

    const math = `${variable}>${a}`
    const answer = `${variable}\\in (${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(-99, -2);
    let variable = generateVariableName()

    const math = `${variable}<${a}`
    const answer = `${variable}\\in (-\\infty; ${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {
    let a = getRandomInt(-99, 99);
    let variable = generateVariableName()

    const math = `${variable}\\geq${a}`
    const answer = `${variable}\\in [${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(-99, 99);
    let variable = generateVariableName()

    const math = `${variable}\\leq${a}`
    const answer = `${variable}\\in (-\\infty;${a}]` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 99);
    let b = getRandomInt(-99, -2);
    let variable = generateVariableName()

    const math = `${b}<${variable}<${a}`
    const answer = `${variable}\\in (${b};${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(2, 99);
    let b = getRandomInt(-99, -2);
    let variable = generateVariableName()

    const math = `${b}\\leq ${variable}<${a}`
    const answer = `${variable}\\in [${b};${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 99);
    let b = getRandomInt(-99, -2);
    let variable = generateVariableName()

    const math = `${a}>${variable}\\geq ${b}`
    const answer = `${variable}\\in [${b};${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>{
    let a = getRandomInt(2, 99);
    let b = getRandomInt(-99, -2);
    let variable = generateVariableName()

    const math = `${a}\\geq ${variable}\\geq ${b}`
    const answer = `${variable}\\in [${b};${a}]` 
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