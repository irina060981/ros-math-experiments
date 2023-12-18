import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 3);

    const math = `\\sqrt{${a*a*b}}`
    const answer = `${a}\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
    let a = getRandomInt(6, 9);
    let b = getRandomInt(2, 3);

    const math = `\\sqrt{${a*a*b}}`
    const answer = `${a}\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let b = getRandomInt(2, 7, 4);

    const math = `\\sqrt{${100*b}}`
    const answer = `10\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let b = getRandomInt(2, 7, 4);
    let a = getRandomInt(2, 19, 10);

    const math = `${a/10}\\sqrt{${100*b}}`
    const answer = `${a}\\sqrt{${b}}`;
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

    const math = `\\sqrt{${a*a*2/100}}`
    const answer = `${a/10}\\sqrt{2}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 5);

    const math = `\\sqrt{${a*a*10}}`
    const answer = `${a}\\sqrt{${10}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {
    let a = getRandomInt(6, 10);

    const math = `\\sqrt{${a*a*10}}`
    const answer = `${a}\\sqrt{${10}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 3);

    const math = `\\frac{1}{${a}}\\sqrt{${a*a*b}}`
    const answer = `\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let variable1= generateVariableName()
    let a = getRandomInt(2, 5)*2-1;

    const math = `\\sqrt{${variable1}^{${a}}}`
    const answer = `${variable1}^{${(a-1)/2}}\\sqrt{${variable1}}`;
    const condition = `${variable1}>0`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
    let variable1= generateVariableName()
    let a = getRandomInt(6, 11)*2-1;

    const math = `\\sqrt{${variable1}^{${a}}}`
    const answer = `${variable1}^{${(a-1)/2}}\\sqrt{${variable1}}`;
    const condition = `${variable1}>0`
  
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