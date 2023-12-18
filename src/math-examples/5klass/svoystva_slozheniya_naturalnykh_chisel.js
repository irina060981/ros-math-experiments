import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(1, 10);
        let b = 10*getRandomInt(1, 5);
        let c = getRandomInt(1, 5);
    
        const math = `${b-c}+${a}+${c}`
        const answer = `${a+b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
  let a = getRandomInt(11, 21);
  let b = 10*getRandomInt(1, 5);
  let c = getRandomInt(1, 5);

  const math = `${b-c}+${a}+${c}`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = 10*getRandomInt(1, 5);
  let b = 10*getRandomInt(1, 5);
  let c = getRandomInt(1, 5);
  let d = getRandomInt(1, 5);

  const math = `${b-c}+${a-d}+${c}+${d}`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () =>  {
  let a = 10*getRandomInt(1, 5);
  let b = 10*getRandomInt(1, 5);
  let c = getRandomInt(6, 9);
  let d = getRandomInt(6, 9);

  const math = `${b-c}+${a-d}+${c}+${d}`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let a = 10*getRandomInt(1, 5);
  let b = 10*getRandomInt(1, 5);
  let c = getRandomInt(1, 5);
  let d = getRandomInt(1, 5);

  const math = `${b-c}+${d}+${c}+${a-d}`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>   {
    let a = getRandomInt(2, 10);
    let b = 10*getRandomInt(2, 10);
    let c = getRandomInt(2, 5);

    const math = `(${b-c}+${a})+${c}`
    const answer = `${a+b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () =>  {
  let a = getRandomInt(11, 21);
  let b = 10*getRandomInt(2, 10);
  let c = getRandomInt(6, 10);

  const math = `(${b-c}+${a})+${c}`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(11, 21);
  let b = 100*getRandomInt(2, 10);
  let c = getRandomInt(50, 99);

  const math = `${c}+(${b-c}+${a})`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let a = getRandomInt(11, 21);
  let b = 100*getRandomInt(2, 10);
  let c = getRandomInt(50, 99);

  const math = `${c}+(${a}+${b-c})`
  const answer = `${a+b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let b = 100*getRandomInt(2, 10);
  let c = getRandomInt(50, 99);
  let variable = generateVariableName()

  const math = `(${b-c}+${variable})+${c}`
  const answer = `${variable}+${b}` 
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