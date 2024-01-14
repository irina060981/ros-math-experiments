import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 10);
        let b = getRandomInt(-20, -11);
    
        const math = `${a}${b}`
        const answer = `${a+b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(-10, -1);
    let b = getRandomInt(-10, -1);

    const math = `${a}${b}`
    const answer = `${a+b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-20, -11);
    let b = getRandomInt(-20, -11);

    const math = `${a}${b}`
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
    let a = getRandomInt(-10, -1);
    let b = getRandomInt(-10, -1);

    const math = `${a}-(${b})`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample5 = () =>  {
    let a = getRandomInt(-20, -11);
    let b = getRandomInt(-20, -11);

    const math = `${a}-(${b})`
    const answer = `${a-b}` 
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
    let b = getRandomInt(-10, -1);

    const math = `${a}-(${b})`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(10, 20);
    let b = getRandomInt(-20, -11);

    const math = `${a}-(${b})`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(-200, -100);

    const math = `0-(${a})`
    const answer = `${-1*a}` 
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
    let b = getRandomInt(-20, -11);

    const math = `${a/10}${b/10}`
    const answer = `${(a+b)/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(-20, -11);
    let b = getRandomInt(-20, -11);

    const math = `${a/10}-(${b/10})`
    const answer = `${(a-b)/10}` 
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