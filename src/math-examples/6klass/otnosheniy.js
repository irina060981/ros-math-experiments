import { getRandomInt, generateVariableName, shuffleSingle, NOD } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 5);
        let b = a*getRandomInt(2, 5);
        
        const math = `${a}:${b}`
        const answer = `1:${b/a}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>{
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(6, 10);
    
    const math = `${a}:${b}`
    const answer = `1:${b/a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let a = 2*getRandomInt(2, 5);
    let b = 3*(a/2);
    
    const math = `${b}:${a}`
    const answer = `3:2` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>  {
    let a = 2*getRandomInt(2, 5);
    let b = 3*(a/2);
    
    const math = `${a}:${b}`
    const answer = `2:3` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample5 = () =>   {
    let a = getRandomInt(2, 5);
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


const createExample6 = () =>   {
    let a = getRandomInt(2, 5);
    let b = a*10;
    let c = getRandomInt(6, 10);
    let d = c*10;
    let e = NOD(a, c)

    const math = `${d}:${b}`
    const answer = `${c/e}:${a/e}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () => {
    let a = 3*getRandomInt(2, 5);
    let b = 5*(a/3);
    
    const math = `${a}:${b}`
    const answer = `3:5` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = 3*getRandomInt(2, 5);
    let b = 5*(a/3);
    
    const math = `${b}:${a}`
    const answer = `5:3` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>   {
    let a = getRandomInt(6, 11);
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

const createExample10 = () =>  {
    let a = getRandomInt(6, 10);
    let b = a*10;
    let c = getRandomInt(2, 5);
    let d = c*10;
    let e = NOD(a, c)

    const math = `${d}:${b}`
    const answer = `${c/e}:${a/e}` 
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