import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1, 99);

    const math = `${a/100}\\cdot 10`
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
    let a = getRandomInt(1, 99);

    const math = `${a/100}\\cdot 100`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(1, 19, 10);

    const math = `${a/10}\\cdot 1000`
    const answer = `${a*100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample4 = () =>   {
    let a = getRandomInt(21, 39, 30);

    const math = `${a/10}\\cdot 100`
    const answer = `${a*10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample5 = () => {
    let a = getRandomInt(1, 99);

    const math = `${a/1000}\\cdot 10`
    const answer = `${a/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(1, 99);

    const math = `${a/100}\\cdot 0.1`
    const answer = `${a/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () =>  {
    let a = getRandomInt(11, 99);

    const math = `${a/10}\\cdot 0.1`
    const answer = `${a/100}`
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
    let c = 2*a

    const math = `${a/10}\\cdot 2`
    const answer = `${c/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(11, 99);

    const math = `${a}\\cdot 0.01`
    const answer = `${a/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(1, 19, 10);
    let c = 3*a

    const math = `${a/10}\\cdot 3`
    const answer = `${c/10}`
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