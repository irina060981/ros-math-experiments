import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let b = getRandomInt(-20, -11);
        let a = getRandomInt(-2, -1);
    
        const math = `${a}\\cdot(${b})`
        const answer = `${a*b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(-40, -21);
    let b = getRandomInt(-2, -1);

    const math = `${a}\\cdot(${b})`
    const answer = `${b*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(10, 20);
    let b = getRandomInt(-2, -1);

    const math = `${a}\\cdot(${b})`
    const answer = `${b*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let b = getRandomInt(11, 20);
    let a = getRandomInt(-2, -1);

    const math = `${a}\\cdot${b}`
    const answer = `${a*b}` 
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
    let b = getRandomInt(-10, -2);

    const math = `${a}\\cdot(${b})`
    const answer = `${a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(20, 50);
    let b = getRandomInt(2, 10);

    const math = `${a}\\cdot(-\\frac{${b}}{${a}})`
    const answer = `${-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () =>  {
    let a = getRandomInt(-50, -20);
    let b = getRandomInt(2, 10);

    const math = `${a}\\cdot(-\\frac{${b}}{${-1*a}})`
    const answer = `${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 30);
    let b = getRandomInt(2, 30);

    const math = `-\\frac{${a}}{${b}}\\cdot(-\\frac{${b}}{${a}})`
    const answer = `1` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(-10, -2);

    const math = `(${a})^2`
    const answer = `${a*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(-5, -2);

    const math = `(${a})^3`
    const answer = `${a*a*a}` 
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