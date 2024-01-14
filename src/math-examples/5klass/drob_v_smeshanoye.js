import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10); 
    let c = getRandomInt(1, 5);

    const math = `\\frac{${a*c+1}}{${a}}`
    const answer = `${c}\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
    let a = getRandomInt(11, 20); 
    let c = getRandomInt(1, 5);

    const math = `\\frac{${a*c+1}}{${a}}`
    const answer = `${c}\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(21, 31); 
    let c = getRandomInt(1, 5);

    const math = `\\frac{${a*c+1}}{${a}}`
    const answer = `${c}\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>   {
    let a = getRandomInt(2, 9); 
    let c = getRandomInt(1, 5);

    const math = `\\frac{${10*c+a}}{10}`
    const answer = `${c}\\frac{${a}}{10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(11, 50); 
    let c = getRandomInt(1, 5);

    const math = `\\frac{${100*c+a}}{100}`
    const answer = `${c}\\frac{${a}}{100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let a = getRandomInt(51, 99); 
    let c = getRandomInt(1, 5);

    const math = `\\frac{${100*c+a}}{100}`
    const answer = `${c}\\frac{${a}}{100}`
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
    let c = getRandomInt(6, 9);

    const math = `\\frac{${a*c+1}}{${a}}`
    const answer = `${c}\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(6, 11); 
    let b = getRandomInt(2, 5);
    let c = getRandomInt(1, 5);

    const math = `\\frac{${a*c+b}}{${a}}`
    const answer = `${c}\\frac{${b}}{${a}}`
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
    let c = getRandomInt(6, 9);

    const math = `\\frac{${a*c+b}}{${a}}`
    const answer = `${c}\\frac{${b}}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(6, 11); 
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 9);

    const math = `\\frac{${a*c+b}}{${a}}`
    const answer = `${c}\\frac{${b}}{${a}}`
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