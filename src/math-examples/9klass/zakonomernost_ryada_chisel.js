import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(3, 20);
  
    const math = `${a},\\; ${a+2},\\; ${a+4},\\; ?`
    const answer = `${a+6}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample2 = () => {
    let a = getRandomInt(1, 6);
  
    const math = `${a**2},\\; ${(a+1)**2},\\; ${(a+2)**2},\\; ?`
    const answer = ` ${(a+3)**2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample3 = () =>  {
    let a = getRandomInt(2, 10);
  
    const math = `${a},\\; ${a*2},\\; ${a*4},\\; ?`
    const answer = `${a*8}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(3, 20);
  
    const math = `${a},\\; ${a*(-2)},\\; ${a*4},\\; ?`
    const answer = `${a*(-8)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>   {
    let a = getRandomInt(3, 10);
  
    const math = `${a*(-8)},\\; ${a*4},\\; ${a*(-2)},\\; ?`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(3, 20);
  
    const math = `${a+6},\\; ${a+4},\\; ${a+2},\\; ?`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>  {
  
    const math = `3,\\; 5,\\; 8,\\; 13, \\; ?`
    const answer = `21` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(3, 10);
  
    const math = `${a},\\; ${2*a},\\; ${3*a},\\; ?`
    const answer = `${4*a}` 
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
  
    const math = `\\frac{1}{${a}},\\; \\frac{1}{${a*3}},\\; \\frac{1}{${a*9}},\\; ?`
    const answer = `\\frac{1}{${a*27}}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>{
    let a = getRandomInt(2, 10);
  
    const math = `${a},\\; ${a*2+1},\\; ${(a*2+1)*2+1},\\; ?`
    const answer = `${((a*2+1)*2+1)*2+1}` 
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