import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 15, 0);
        let b = getRandomInt(-10, 10, 0);
        let c =a*b;
        let variable = generateVariableName()
    
        const math = `${a}${variable}=${c}`
        const answer = `${b}` 
        const condition = ``
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(-20, 2, 0);
    let b = getRandomInt(-5, 5, 0);
    let c =a*b;
    let variable = generateVariableName()

    const math = `${a}${variable}=${c}`
    const answer = `${b}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    if(a > 0) a = '+'+a;
    let variable = generateVariableName()

    const math = `${variable}${a}=${b}`
    const answer = `${b-a}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    if(a > 0) a = '+'+a;
    let variable = generateVariableName()

    const math = `${variable}${a}=${b}`
    const answer = `${b-a}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    if(a > 0) a = '+'+a;
    let variable = generateVariableName()

    const math = `${variable}${a}=${b}`
    const answer = `${b-a}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
let a = getRandomInt(2, 30, 0);
let b = getRandomInt(-20, 20, 0);
if(b > 0) b = '+'+b;
let variable = generateVariableName()

const math = `${a}=${variable}${b}`
const answer = `${a-b}`
const condition = ``

return {
  id: uuidv4(),
  math: math, 
  condition: condition, 
  answer: answer
}
}

const createExample7 = () => {
    let a = getRandomInt(-30, -2, 0);
    let b = getRandomInt(-30, 30, 0);
    if(b > 0) b = '+'+b;
    let variable = generateVariableName()
    
    const math = `${a}=${variable}${b}`
    const answer = `${a-b}`
    const condition = ``
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample8 = () => {
    let a = getRandomInt(2, 10, 0);
    let b = a*getRandomInt(-10, -2, 0);
    if(b > 0) b = '+'+b;
    let variable = generateVariableName()
    
    const math = `${a}${variable}${b}=0`
    const answer = `${-1*b/a}`
    const condition = ``
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample9 = () =>  {
    let a = getRandomInt(2, 10, 0);
    let b = a*getRandomInt(2, 11, 0);
    if(b > 0) b = '+'+b;
    let variable = generateVariableName()
    
    const math = `${a}${variable}${b}=0`
    const answer = `${-1*b/a}`
    const condition = ``
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample10 = () => {
    let a = getRandomInt(2, 10, 0);
    let b = a*getRandomInt(1, 5, 0);
    let c = a*getRandomInt(5, 10, 0);
    let variable = generateVariableName()
    
    const math = `${a}${variable}-${b}=${c}`
    const answer = `${(c+b)/a}`
    const condition = ``
    
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