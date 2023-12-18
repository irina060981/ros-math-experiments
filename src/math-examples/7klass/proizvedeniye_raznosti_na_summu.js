import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 5);
        let variable = generateVariableName()
    
        const math = `(${variable}-${a})(${variable}+${a})`
        const answer = `${variable}^2-${a*a}` 
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
    let variable = generateVariableName()

    const math = `(${variable}-${a})(${variable}+${a})`
    const answer = `${variable}^2-${a*a}` 
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
    let variable = generateVariableName()

    const math = `(${variable}+${a})(${variable}-${a})`
    const answer = `${variable}^2-${a*a}` 
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
    let variable = generateVariableName()

    const math = `(${a}+${variable})(${variable}-${a})`
    const answer = `${variable}^2-${a*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `(${a}${variable}-1)(${a}${variable}+1)`
    const answer = `${a*a}${variable}^2-1` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample6 = () => {
    let a = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `(${a}${variable}-1)(${a}${variable}+1)`
    const answer = `${a*a}${variable}^2-1` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `(${a}${variable}-${b})(${a}${variable}+${b})`
    const answer = `${a*a}${variable}^2-${b*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(6, 10);
    let b = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `(${a}${variable}-${b})(${a}${variable}+${b})`
    const answer = `${a*a}${variable}^2-${b*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `(${b}-${a}${variable})(${a}${variable}+${b})`
    const answer = `${b*b}-${a*a}${variable}^2` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(6, 10);
    let b = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `(${a}${variable}+${b})(${b}-${a}${variable})`
    const answer = `${b*b}-${a*a}${variable}^2` 
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