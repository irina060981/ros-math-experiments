import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 10);
        let b = getRandomInt(-10, -1);
    
        const math = `${b/10}+${a/10}+${(-1*b)/10}`
        const answer = `${a/10}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
    let a = getRandomInt(11, 29, 20);
    let b = getRandomInt(-29, -11, -20);

    const math = `${b/10}+${a/10}+${(-1*b)/10}`
    const answer = `${a/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(1, 9);
    let b = getRandomInt(-30, -11);
    let c = getRandomInt(11, 30);

    const math = `${a}+(${b})+(-${a})+${c}`
    const answer = `${b+c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(1, 9);
    let b = getRandomInt(-30, -11);
    let c = getRandomInt(11, 30);

    const math = `${a/10}+(${b/10})+(-${a/10})+${c/10}`
    const answer = `${(b+c)/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(100, 900);
    let b = getRandomInt(-30, -11);
    let c = getRandomInt(11, 30);

    const math = `${a/100}+(${b/100})+(-${a/100})+${c/100}`
    const answer = `${(b+c)/100}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>   {
    let a = getRandomInt(10, 50);
    let b = getRandomInt(-50, -10);

    const math = `(${b}+${a})+${-1*b}`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () => {
    let a = getRandomInt(10, 50);
    let b = getRandomInt(-50, -10);

    const math = `(${a}+(${b}))+${-1*b}`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(10, 50);
    let b = getRandomInt(-50, -10);

    const math = `${-1*b}+(${b}+${a})`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(10, 50);
    let b = getRandomInt(-50, -10);

    const math = `${-1*b}+(${a}+(${b}))`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(-29, -11, 20);
    let b = getRandomInt(-29, -11, 20);
    let c = getRandomInt(1, 10);

    const math = `${c}+(${b/10})+(${a/10})+(-${c})`
    const answer = `${(b+a)/10}` 
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