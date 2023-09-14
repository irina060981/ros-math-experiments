import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1,9);

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

const createExample2 = () =>  {
    let a = getRandomInt(11,19,20);

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

const createExample3 = () =>  {
    let a = getRandomInt(21,39,30);

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


const createExample4 = () =>  {
    let a = getRandomInt(1,9);

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



const createExample5 = () =>   {
    let a = getRandomInt(2,99);

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

const createExample6 = () => {
    let a = getRandomInt(1,9);

    const math = `\\frac{${a}}{20}`
    const answer = `${(a*5)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {
    let a = getRandomInt(10,19);

    const math = `\\frac{${a}}{20}`
    const answer = `${(a*5)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(1,9);

    const math = `\\frac{${a}}{25}`
    const answer = `${(a*4)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>    {
    let a = getRandomInt(1, 9, 5);

    const math = `\\frac{${a}}{5}`
    const answer = `${(a*2)/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>    {
    let a = getRandomInt(2, 99);

    const math = `\\frac{${a}}{200}`
    const answer = `${(a*5)/1000}`
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