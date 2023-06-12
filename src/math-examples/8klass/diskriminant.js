import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let b = getRandomInt(2, 5);
        let c = getRandomInt(-5, -2);
        let variable = generateVariableName()
    
        const math = `${variable}^2+${b}${variable}${c}=0`
        const answer = `D=${b*b-(4*c)}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}^2+${b}${variable}+${c}=0`
    const answer = `D=${b*b-(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `${variable}^2+${b}${variable}+${c}=0`
    const answer = `D=${b*b-(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let b = getRandomInt(6, 10);
    let c = getRandomInt(-10, -6);
    let variable = generateVariableName()

    const math = `${variable}^2+${b}${variable}${c}=0`
    const answer = `D=${b*b-(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(-5, -2);
    let variable = generateVariableName()

    const math = `${variable}^2-${b}${variable}${c}=0`
    const answer = `D=${b*b-(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}^2-${b}${variable}+${c}=0`
    const answer = `D=${b*b-(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `-${variable}^2-${b}${variable}+${c}=0`
    const answer = `D=${b*b+(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>  {
    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `-${variable}^2-${b}${variable}-${c}=0`
    const answer = `D=${b*b-(4*c)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>   {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${a}${variable}^2-${b}${variable}-${c}=0`
    const answer = `D=${b*b+(4*c*a)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${a}${variable}^2-${b}${variable}-${c}=0`
    const answer = `D=${b*b+(4*c*a)}` 
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