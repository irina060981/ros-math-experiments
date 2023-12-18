import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 10);
        let b = getRandomInt(1, 10);
        let variable = generateVariableName()

        const math = `${a}+(${b}+${variable})`
        const answer = `${a+b}+${variable}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `${a}+(${b}-${variable})`
    const answer = `${a+b}-${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let b = getRandomInt(1, 10);
    let c = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `(${b}+${c})-${variable}`
    const answer = `${b+c}-${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `-${a}+(${b}+${variable})`
    const answer = `${-a+b}+${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample5 = () =>  {
    let a = getRandomInt(1, 10);
    let c = getRandomInt(1, 10);
    let variable = generateVariableName()
    
    const math = `${a}-(${variable}+${c})`
    const answer = `${a-c}-${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(1, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}-(${variable1}-${variable2})`
    const answer = `${a}-${variable1}+${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () =>  {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let c = getRandomInt(1, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `-${variable1}-(${variable2}-${c})`
    const answer = `${c}-${variable1}-${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let c = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `-${a}-(${b}-${c}+${variable})`
    const answer = `${-a-b+c}-${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let c = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `${a}-(${b}-${c}-${variable})`
    const answer = `${a-b+c}+${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);
    let c = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `${a}-(${c}-${variable})-${b}`
    const answer = `${a-b-c}+${variable}` 
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