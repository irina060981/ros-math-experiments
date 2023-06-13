import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let variable1= generateVariableName()

    const math = `(\\sqrt{${variable1}})^2`
    const answer = `${variable1}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let variable1= generateVariableName()
    let a = getRandomInt(2, 30);

    const math = `(\\sqrt{${a}${variable1}})^2`
    const answer = `${a}${variable1}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let variable1= generateVariableName()

    const math = `\\sqrt{${variable1}^2}`
    const answer = `\\left|${variable1}\\right|`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>  {
    let a = getRandomInt(5, 50);

    const math = `\\sqrt{${a}^2}`
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
    let a = getRandomInt(-50, -5);

    const math = `\\sqrt{(${a})^2}`
    const answer = `${-1*a}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let variable1= generateVariableName()
    let a = getRandomInt(2, 30);

    const math = `${a}\\sqrt{${variable1}^2}`
    const answer = `${a}${variable1}`;
    const condition = `${variable1}>0`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let variable1= generateVariableName()
    let a = getRandomInt(2, 30);

    const math = `${a}\\sqrt{${variable1}^2}`
    const answer = `-${a}${variable1}`;
    const condition = `${variable1}<0`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>   {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(3, 10)*2;

    const math = `\\sqrt{${a}^{${b}}}`
    const answer = `${a}^{${b/2}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(-10, -2);
    let b = getRandomInt(11, 20)*2;

    const math = `\\sqrt{(${a})^{${b}}}`
    const answer = `${-1*a}^{${b/2}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
    let variable1= generateVariableName()
    let a = getRandomInt(2, 10);
    let b = getRandomInt(-10, -2);

    const math = `${a}\\sqrt{${variable1}^2}`
    const answer = `${-1*a*b}`;
    const condition = `${variable1}=${b}`
  
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