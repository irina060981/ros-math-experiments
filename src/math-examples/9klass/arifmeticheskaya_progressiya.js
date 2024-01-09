import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 20);
    let b = getRandomInt(2, 20);
    
    const math = `a_1=${a},\\;d=${b},\\;a_{2}-?`
    const answer = `a_{2}=${a+b}` 
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
    let b = getRandomInt(2, 10);
    
    const math = `a_1=${a},\\;d=${b}, \\;a_{3}-?`
    const answer = `a_{2}=${a+2*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let a = getRandomInt(11, 20);
    let b = getRandomInt(1, 10);
    
    const math = `a_2=${a},\\; d=${b}, \\;a_{1}-?`
    const answer = `a_{1}=${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let a = getRandomInt(30, 50);
    let b = getRandomInt(2, 10);
    
    const math = `a_3=${a},\\;d=${b}, \\;a_{1}-?`
    const answer = `a_{1}=${a-2*b}` 
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
    let b = getRandomInt(2, 10);
    
    const math = `a_1=${a},\\; a_2=${b}, \\;d-?`
    const answer = `d=${b-a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(11, 20);
    let b = getRandomInt(11, 20);
    
    const math = `a_1=${a},\\; a_2=${b}, \\;d-?`
    const answer = `d=${b-a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(6, 15);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(1, 5);
    
    const math = `a_{1}=${b},\\; d=${d}, \\; a_{${a}}-?`
    const answer = `a_{${a}}=${b+d*(a-1)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(16, 20);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(1, 5);
    
    const math = `a_{1}=${b},\\; d=${d}, \\; a_{${a}}-?`
    const answer = `a_{${a}}=${b+d*(a-1)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(6, 15);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(2, 5);
    
    const math = `a_{${a-1}}=${b},\\; a_{${a+1}}=${b+2*d}, \\; a_{${a}}-?`
    const answer = `a_{${a}}=${b+d}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>{
    let a = getRandomInt(16, 20);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(2, 5);
    
    const math = `a_{${a-1}}=${b},\\; a_{${a+1}}=${b+2*d}, \\; a_{${a}}-?`
    const answer = `a_{${a}}=${b+d}` 
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
