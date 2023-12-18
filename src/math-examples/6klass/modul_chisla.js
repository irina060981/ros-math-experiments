import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 10);
        let b = getRandomInt(-10, -1);
    
        const math = `\\left|${a}\\right|+\\left|${b}\\right|`
        const answer = `${a-b}` 
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
    let b = getRandomInt(-10, -1);

    const math = `\\left|${b}\\right|+\\left|${a}\\right|`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(1, 10);

    const math = `\\left|-${b}\\right|+\\left|-${a}\\right|`
    const answer = `${a+b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(11, 30);
    let b = getRandomInt(2, 9);

    const math = `\\left|-${a}\\right|-${b}`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(11, 30);
    let b = getRandomInt(2, 9);

    const math = `\\left|-${a}\\right|-\\left|-${b}\\right|`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>   {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(-10, -1);

    const math = `\\left|${a}\\right|\\cdot \\left|${b}\\right|`
    const answer = `${-a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () =>  {
    let a = getRandomInt(-10, -1);
    let b = getRandomInt(-10, -1);

    const math = `\\left|${a}\\right|\\cdot \\left|${b}\\right|`
    const answer = `${a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(9, 99)/100;
    let b = getRandomInt(9, 99)/100;

    const math = `\\left|-${a}\\right|+\\left|${b}\\right|`
    const answer = `${(a*100+b*100)/100}` 
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
    let b = getRandomInt(31, 79);
    let c = getRandomInt(2, 10);

    const math = `\\left|-\\frac{${a}}{${b}}\\right|+\\left|-\\frac{${c}}{${b}}\\right|`
    const answer = `\\frac{${a+c}}{${b}}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(2, 99);

    const math = `\\left|-${a}\\right|:\\left|-10\\right|`
    const answer = `${a/10}` 
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