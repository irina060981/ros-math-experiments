import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1, 9);

    const math = `\\frac{${a}}{10}`
    const answer = `${a/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>{
    let a = getRandomInt(11, 99); 

    const math = `\\frac{${a}}{100}`
    const answer = `${a/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(101, 999); 

    const math = `\\frac{${a}}{1000}`
    const answer = `${a/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample4 = () =>    {
    let a = getRandomInt(1, 9);
    let b = getRandomInt(1, 9); 


    const math = `${b}\\frac{${a}}{10}`
    const answer = `${b+(a/10)}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample5 = () => {
    let a = getRandomInt(11, 99);
    let b = getRandomInt(2, 50); 


    const math = `${b}\\frac{${a}}{100}`
    const answer = `${b+(a/100)}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(101, 500);
    let b = getRandomInt(2, 50); 


    const math = `${b}\\frac{${a}}{100}`
    const answer = `${b+(a/100)}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>   {
    let a = getRandomInt(1001, 1500);

    const math = `\\frac{${a}}{1000}`
    const answer = `${a/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample8 = () =>{
    let a = getRandomInt(11, 99);

    const math = `\\frac{${a}}{100}`
    const answer = `${a/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(1501, 1999);
    let b = getRandomInt(2, 50); 


    const math = `\\frac{${a}}{1000}`
    const answer = `${a/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(500, 999);
    let b = getRandomInt(2, 50); 


    const math = `${b}\\frac{${a}}{100}`
    const answer = `${b+(a/100)}`
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