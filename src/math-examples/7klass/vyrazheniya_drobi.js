import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
    const answer = `\\frac{${a+c}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
    const answer = `\\frac{${a+c}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{${c}}{${b}}-\\frac{${a}}{${b}}`
    const answer = `\\frac{${c-a}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}
const createExample4 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{${a}}{${b}}-\\frac{${c}}{${b}}`
    const answer = `-\\frac{${-1*(a-c)}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = a*getRandomInt(2, 5);  

    const math = `\\frac{${a}}{${b}}\\cdot\\frac{${b}}{${c}}`
    const answer = `\\frac{${1}}{${c/a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = a*getRandomInt(2, 5);  

    const math = `-\\frac{${a}}{${b}}\\cdot\\frac{${b}}{${c}}`
    const answer = `-\\frac{${1}}{${c/a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = a*getRandomInt(2, 5);  

    const math = `\\frac{${a}}{${b}}:\\frac{${c}}{${b}}`
    const answer = `\\frac{${1}}{${c/a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(40, 80);
    let c = a*getRandomInt(2, 5);  

    const math = `-\\frac{${a}}{${b}}:\\frac{${c}}{${b}}`
    const answer = `-\\frac{${1}}{${c/a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 10);
    let c = a*getRandomInt(2, 5);  
    let d = b*getRandomInt(2, 5); 
    const math = `\\frac{${a}}{${d}}\\cdot(-\\frac{${b}}{${c}})`
    const answer = `-\\frac{${1}}{${c*d/(a*b)}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 10);
    let c = a*getRandomInt(2, 5);  
    let d = b*getRandomInt(2, 5); 
    const math = `-\\frac{${a}}{${d}}\\cdot(-\\frac{${b}}{${c}})`
    const answer = `\\frac{${1}}{${c*d/(a*b)}}`
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