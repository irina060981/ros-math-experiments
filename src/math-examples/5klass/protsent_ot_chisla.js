import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1, 5);
    let b = getRandomInt(1, 20);

    const math = `${a}\\%ot${b}`
    const answer = `${(a*b)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(1, 5);
    let b = getRandomInt(21, 41);

    const math = `${a}\\%ot${b}`
    const answer = `${(a*b)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(1, 5);
    let b = getRandomInt(42, 62);

    const math = `${a}\\%ot${b}`
    const answer = `${(a*b)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample4 = () =>   {
    let a = getRandomInt(1, 5);
    let b = getRandomInt(63, 99);

    const math = `${a}\\%ot${b}`
    const answer = `${(a*b)/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample5 = () =>  {
    let b = getRandomInt(1, 99);

    const math = `50\\%ot${b}`
    const answer = `${(b)/2}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let b = getRandomInt(101, 999);

    const math = `50\\%ot${b}`
    const answer = `${b/2}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () =>  {
    let b = 3*getRandomInt(10, 33);

    const math = `30\\%ot${b}`
    const answer = `${(b*3)/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample8 = () =>{
    let b = 5*getRandomInt(2, 20);

    const math = `20\\%ot${b}`
    const answer = `${(b*2)/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let b = 4*getRandomInt(3, 30);

    const math = `25\\%ot${b}`
    const answer = `${b/4}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let b = getRandomInt(2, 100);

    const math = `150\\%ot${b}`
    const answer = `${b*1.5}`
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