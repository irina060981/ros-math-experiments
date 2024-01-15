import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 9);
    let b = getRandomInt(2, 9);
    let c = a+b

    const math = `${a/10}+${b/10}`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(11, 19);
    let b = getRandomInt(11, 19);
    let c = a+b

    const math = `${a/10}+${b/10}`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(21, 39, 30);
    let b = getRandomInt(21, 39, 30);
    let c = a+b

    const math = `${a/10}+${b/10}`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(21, 39, 30);
    let b = getRandomInt(2, 9);
    let c = a-b

    const math = `${a/10}-${b/10}`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(41, 59, 50);
    let b = getRandomInt(11, 19);
    let c = a-b

    const math = `${a/10}-${b/10}`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 9);
    let b = getRandomInt(2, 9);
    let c = 10*a+b

    const math = `${a/10}+${b/100}`
    const answer = `${c/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let a = getRandomInt(2, 9);
    let b = getRandomInt(2, 9); 
    let c = 10*a-b

    const math = `${a/10}-${b/100}`
    const answer = `${c/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(101, 999);
    let b = getRandomInt(11, 21); 
    let c = a+10*b

    const math = `${a/1000}+${b/100}`
    const answer = `${c/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(1001, 9999);
    let b = getRandomInt(11, 21); 
    let c = a-b

    const math = `${a/10}-${b/10}`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
    let a = getRandomInt(51, 99);
    let b = getRandomInt(51, 149); 
    let c = 10*a-b

    const math = `${a/10}-${b/100}`
    const answer = `${c/100}`
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