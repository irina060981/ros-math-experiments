import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5); 

    const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
    const answer = `\\frac{${a+c}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
  let a = getRandomInt(6, 11);
  let b = getRandomInt(6, 11);
  let c = getRandomInt(6, 11); 

  const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
  const answer = `\\frac{${a+c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(12, 32);
  let b = getRandomInt(12, 32);
  let c = getRandomInt(12, 32); 

  const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
  const answer = `\\frac{${a+c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () =>{
  let a = getRandomInt(33, 55);
  let b = getRandomInt(33, 55);
  let c = getRandomInt(33, 55); 

  const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
  const answer = `\\frac{${a+c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(55, 99);
  let b = getRandomInt(55, 99);
  let c = getRandomInt(55, 99); 

  const math = `\\frac{${a}}{${b}}+\\frac{${c}}{${b}}`
  const answer = `\\frac{${a+c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);

  const math = `\\frac{${a}}{${b}}-\\frac{1}{${b}}`
  const answer = `\\frac{${a-1}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {
  let a = getRandomInt(6, 11);
  let b = getRandomInt(6, 11);
  let c = getRandomInt(2, 5); 

  const math = `\\frac{${a}}{${b}}-\\frac{${c}}{${b}}`
  const answer = `\\frac{${a-c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(12, 22);
  let b = getRandomInt(12, 22);
  let c = getRandomInt(6, 11); 

  const math = `\\frac{${a}}{${b}}-\\frac{${c}}{${b}}`
  const answer = `\\frac{${a-c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>   {
  let a = getRandomInt(23, 55);
  let b = getRandomInt(23, 55);
  let c = getRandomInt(12, 22); 

  const math = `\\frac{${a}}{${b}}-\\frac{${c}}{${b}}`
  const answer = `\\frac{${a-c}}{${b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(56, 99);
  let b = getRandomInt(56, 99);
  let c = getRandomInt(23, 39); 

  const math = `\\frac{${a}}{${b}}-\\frac{${c}}{${b}}`
  const answer = `\\frac{${a-c}}{${b}}`
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