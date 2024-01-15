import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 10);
        let b = getRandomInt(2, 10);
        let c = getRandomInt(2, 10);
    
        const math = `${a}+${b}+${c}`
        const answer = `${a+b+c}` 
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
    let b = getRandomInt(11, 20);

    const math = `${a}+${b}`
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
    let a = getRandomInt(21, 30);
    let b = getRandomInt(21, 30);

    const math = `${a}+${b}`
    const answer = `${a+b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
  let a = getRandomInt(10, 21);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(2, 10);

  const math = `${a}-${b}+${c}`
  const answer = `${a-b+c}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(21, 30);
  let b = getRandomInt(11, 21);

  const math = `${a}-${b}`
  const answer = `${a-b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(30, 50);
  let b = getRandomInt(21, 30);

  const math = `${a}-${b}`
  const answer = `${a-b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample7 = () =>  {
  let a = getRandomInt(11, 30);
  let b = getRandomInt(11, 30);
  let c = getRandomInt(2, 10);

  const math = `(${a}+${b})+${c}`
  const answer = `${a+b+c}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(11, 30);
  let b = getRandomInt(11, 30);
  let c = getRandomInt(2, 10);

  const math = `(${a}+${b})-${c}`
  const answer = `${a+b-c}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let a = getRandomInt(11, 30);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(2, 10);

  const math = `${c}+(${a}-${b})`
  const answer = `${c+a-b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(11, 20);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(11, 20);
  let d = getRandomInt(2, 10);

  const math = `(${c}-${d})+(${a}-${b})`
  const answer = `${c-d+a-b}` 
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