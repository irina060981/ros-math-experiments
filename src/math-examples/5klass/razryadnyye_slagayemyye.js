import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 4);
        let b = getRandomInt(1, 4);
    
        const math = `${a}${b}`
        const answer = `${a*10}+${b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(5, 9);
    let b = getRandomInt(5, 9);

    const math = `${a}${b}`
    const answer = `${a*10}+${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(1, 4);
    let b = getRandomInt(1, 4);
    let c = getRandomInt(1, 4);

    const math = `${a}${b}${c}`
    const answer = `${a*100}+${b*10}+${c}`  
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let a = getRandomInt(5, 9);
    let b = getRandomInt(5, 9);
    let c = getRandomInt(5, 9);

    const math = `${a}${b}${c}`
    const answer = `${a*100}+${b*10}+${c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(5, 9);
    let b = getRandomInt(1, 9);
    let c = getRandomInt(5, 9);

    const math = `${a}${b}${c}`
    const answer = `${a*100}+${b*10}+${c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(1, 5);
    let b = getRandomInt(1, 5);
    let c = getRandomInt(1, 5);
    let d = getRandomInt(1, 5);

    const math = `${a}${b}${c}${d}`
    const answer = `${a*1000}+${b*100}+${c*10}+${d}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>{
    let a = getRandomInt(6, 9);
    let b = getRandomInt(6, 9);
    let c = getRandomInt(6, 9);
    let d = getRandomInt(6, 9);

    const math = `${a}${b}${c}${d}`
    const answer = `${a*1000}+${b*100}+${c*10}+${d}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(6, 9);
    let b = getRandomInt(1, 5);
    let c = getRandomInt(6, 9);
    let d = getRandomInt(1, 5);

    const math = `${a}${b}${c}${d}`
    const answer = `${a*1000}+${b*100}+${c*10}+${d}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(1, 5);
    let b = getRandomInt(6, 9);
    let c = getRandomInt(1, 5);
    let d = getRandomInt(6, 9);

    const math = `${a}${b}${c}${d}`
    const answer = `${a*1000}+${b*100}+${c*10}+${d}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(1, 9);
    let b = getRandomInt(1, 9);
    let c = getRandomInt(1, 9);
    let d = getRandomInt(1, 9);

    const math = `${a}${b}${c}${d}`
    const answer = `${a*1000}+${b*100}+${c*10}+${d}` 
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