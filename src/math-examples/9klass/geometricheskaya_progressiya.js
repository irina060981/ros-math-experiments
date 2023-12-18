import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 5);
    
    const math = `b_1=${a},\\;q=${b},\\;b_{2}-?`
    const answer = `b_{2}=${a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample2 = () =>{
    let a = getRandomInt(2, 10);
    let b = getRandomInt(6, 10);
    
    const math = `b_1=${a},\\;q=${b},\\;b_{2}-?`
    const answer = `b_{2}=${a*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let b = getRandomInt(2, 5);
    let a = b*getRandomInt(2, 10);
    
    
    const math = `b_2=${a},\\;q=${b},\\;b_{1}-?`
    const answer = `b_{1}=${a/b}` 
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
    let a = b*getRandomInt(2, 10);
    
    
    const math = `b_2=${a},\\;q=${b},\\;b_{1}-?`
    const answer = `b_{1}=${a/b}` 
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
    let q = getRandomInt(2, 5);
    let b = a*q
    
    const math = `b_1=${a},\\;b_2=${b},\\;q-?`
    const answer = `q=${q}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(6, 10);
    let q = getRandomInt(6, 10);
    let b = a*q
    
    const math = `b_1=${a},\\;b_2=${b},\\;q-?`
    const answer = `q=${q}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>  {
    let a = getRandomInt(2, 10);
    
    const math = `b_4=${a*8},\\;q=2,\\;b_1-?`
    const answer = `b_1=${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(2, 10);
    
    const math = `b_3=${a*9},\\;q=3,\\;b_1-?`
    const answer = `b_1=${a}` 
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
    let b = getRandomInt(2, 5);
    let d = getRandomInt(2, 3);
    
    const math = `b_{${a-1}}=${b},\\; b_{${a+1}}=${b*d*d}, \\; b_{${a}}-?`
    const answer = `a_{${a}}=${b*d}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>{
    let a = getRandomInt(12, 20);
    let b = getRandomInt(2, 5);
    let d = getRandomInt(4, 5);
    
    const math = `b_{${a-1}}=${b},\\; b_{${a+1}}=${b*d*d}, \\; b_{${a}}-?`
    const answer = `a_{${a}}=${b*d}` 
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
