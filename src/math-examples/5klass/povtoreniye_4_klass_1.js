import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(2, 11, 10);
  let b = getRandomInt(2, 11, 10) ;

  const math = `${a}\\cdot ${b}`
  const answer = `${a*b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>   {
  let a = getRandomInt(2, 9);
  let b = getRandomInt(11, 20);

  const math = `${a}\\cdot ${b}`
  const answer = `${a*b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(2, 9);
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

const createExample4 = () => {
  let a = getRandomInt(21, 30);
  let b = getRandomInt(2, 5);

  const math = `${a}\\cdot ${b}`
  const answer = `${a*b}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let a = getRandomInt(2, 10);
  let b = a*10;

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
  let a = getRandomInt(2, 10);
  let b = a*11;

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

const createExample7 = () => {
  let a = getRandomInt(2, 99);

  const math = `${a}\\cdot 10`
  const answer = `${a*10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>{
  let a = getRandomInt(2, 99);


  const math = `${a}\\cdot 100`
  const answer = `${a*100}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
    let a = getRandomInt(50, 500);

    const math = `${a}:${a} \\cdot 1`
    const answer = `1` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
  let a = getRandomInt(50, 500);

  const math = `(${a}+${a}):2`
  const answer = `${a}` 
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