import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(0, 5);  

    const math = `\\sqrt{${a*a}}`
    const answer = `${a}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(6, 11);  

    const math = `\\sqrt{${a*a}}`
    const answer = `${a}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(1, 5)*10;  

    const math = `\\sqrt{${a*a}}`
    const answer = `${a}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(6, 10)*10;  

    const math = `\\sqrt{${a*a}}`
    const answer = `${a}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(1, 5);  

    const math = `\\sqrt{${a*a/100}}`
    const answer = `${a/10}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(6, 9);  

    const math = `\\sqrt{${a*a/100}}`
    const answer = `${a/10}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(1, 5);  
    let b = getRandomInt(6, 11); 

    const math = `\\sqrt{\\frac{${a*a}}{${b*b}}}`
    const answer = `\\frac{${a}}{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(0, 5);  
    let b = getRandomInt(6, 11);

    const math = `\\sqrt{${b*b}}+\\sqrt{${a*a}}`
    const answer = `${a+b}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(0, 5);  
    let b = getRandomInt(6, 11);

    const math = `\\sqrt{${b*b}}-\\sqrt{${a*a}}`
    const answer = `${b-a}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
    let a = getRandomInt(1, 5);  
    let b = getRandomInt(6, 11);  

    const math = `\\sqrt{${a*a/100}}-\\sqrt{${b*b/100}}`
    const answer = `${(a-b)/10}`;
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