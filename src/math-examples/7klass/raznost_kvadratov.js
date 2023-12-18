import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 15);
        let variable = generateVariableName()
    
        const math = `${variable}^2-${a}^2`
        const answer = `(${variable}-${a})(${variable}+${a})` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
    let a = getRandomInt(16, 40);
    let variable = generateVariableName()

    const math = `${variable}^2-${a}^2`
    const answer = `(${variable}-${a})(${variable}+${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let a = getRandomInt(1, 5)**2;
    let variable = generateVariableName()

    const math = `${variable}^2-${a}`
    const answer = `(${variable}-${a**0.5})(${variable}+${a**0.5})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(6, 10)**2;
    let variable = generateVariableName()

    const math = `${variable}^2-${a}`
    const answer = `(${variable}-${a**0.5})(${variable}+${a**0.5})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {
    let a = getRandomInt(2, 5)**2;
    let b = getRandomInt(1, 5)**2;
    let variable = generateVariableName()

    const math = `${a}${variable}^2-${b}`
    const answer = `(${a**0.5}${variable}-${b**0.5})(${a**0.5}${variable}+${b**0.5})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample6 = () =>  {
    let a = getRandomInt(5, 10)**2;
    let b = getRandomInt(6, 10)**2;
    let variable = generateVariableName()

    const math = `${a}${variable}^2-${b}`
    const answer = `(${a**0.5}${variable}-${b**0.5})(${a**0.5}${variable}+${b**0.5})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 5)**2;
    let variable = generateVariableName()

    const math = `${a}-${variable}^2`
    const answer = `(${a**0.5}-${variable})(${a**0.5}+${variable})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(6, 10)**2;
    let variable = generateVariableName()

    const math = `${a}-${variable}^2`
    const answer = `(${a**0.5}-${variable})(${a**0.5}+${variable})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 5)**2;
    let b = getRandomInt(1, 5)**2;
    let variable = generateVariableName()

    const math = `${b}-${a}${variable}^2`
    const answer = `(${b**0.5}-${a**0.5}${variable})(${b**0.5}+${a**0.5}${variable})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(5, 10)**2;
    let b = getRandomInt(6, 10)**2;
    let variable = generateVariableName()

    const math = `${b}-${a}${variable}^2`
    const answer = `(${b**0.5}-${a**0.5}${variable})(${b**0.5}+${a**0.5}${variable})` 
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