import { getRandomInt, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(21, 999);
       
        const math = `${a}:${a}`
        const answer = `1` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(21, 999);
   
    const math = `${a}:1`
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
    let a = getRandomInt(21, 999);
    let b = getRandomInt(21, 99); 
    const math = `(${b}-${b}):${a}`
    const answer = `0` 
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
    let b = a*getRandomInt(2, 5);
   
    const math = `${b}:${a}`
    const answer = `${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample5 = () =>  {
    let a = getRandomInt(2, 11);
    let b = a*getRandomInt(6, 10);
   
    const math = `${b}:${a}`
    const answer = `${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample6 = () =>  {
    let a = 10*getRandomInt(11, 55);
   
    const math = `${a}:10`
    const answer = `${a/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () =>  {
    let a = 1000*getRandomInt(11, 55);
   
    const math = `${a}:100`
    const answer = `${a/100}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample8 = () => {
    let a = 1000*getRandomInt(56, 99);
   
    const math = `${a}:10`
    const answer = `${a/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>   {
    let a = 2*getRandomInt(51, 555);
   
    const math = `${a}:2`
    const answer = `${a/10}` 
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
    let b = a*getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}:${variable2}`
    const answer = `${b/a}`;
    const condition = `${variable1}=${b};${variable2}=${a}`
  
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