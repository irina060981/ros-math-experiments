import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOK } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5); 
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5); 
    let d
    if (b>c){d='>'}else{d='<'}
    if (b==c) {d='='}

    const math = `\\frac{${b}}{${a}}...\\frac{${c}}{${a}}`
    const answer = `\\frac{${b}}{${a}}${d}\\frac{${c}}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>{
  let a = getRandomInt(6, 11); 
  let b = getRandomInt(6, 11);
  let c = getRandomInt(6, 11); 
  let d
  if (b>c){d='>'}else{d='<'}
  if (b==c) {d='='}

  const math = `\\frac{${b}}{${a}}...\\frac{${c}}{${a}}`
  const answer = `\\frac{${b}}{${a}}${d}\\frac{${c}}{${a}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(12, 22); 
  let b = getRandomInt(12, 22);
  let c = getRandomInt(12, 22); 
  let d
  if (b>c){d='>'}else{d='<'}
  if (b==c) {d='='}

  const math = `\\frac{${b}}{${a}}...\\frac{${c}}{${a}}`
  const answer = `\\frac{${b}}{${a}}${d}\\frac{${c}}{${a}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () =>{
  let a = getRandomInt(2, 5); 
  let b = getRandomInt(2, 5);
  let c = getRandomInt(2, 5); 
  let d
  if (b>c){d='<'}else{d='>'}
  if (b==c) {d='='}

  const math = `\\frac{${a}}{${b}}...\\frac{${a}}{${c}}`
  const answer = `\\frac{${a}}{${b}}${d}\\frac{${a}}{${c}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(6, 11); 
  let b = getRandomInt(6, 11);
  let c = getRandomInt(6, 11); 
  let d
  if (b>c){d='<'}else{d='>'}
  if (b==c) {d='='}

  const math = `\\frac{${a}}{${b}}...\\frac{${a}}{${c}}`
  const answer = `\\frac{${a}}{${b}}${d}\\frac{${a}}{${c}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(12, 22); 
  let b = getRandomInt(12, 22);
  let c = getRandomInt(12, 22); 
  let d
  if (b>c){d='<'}else{d='>'}
  if (b==c) {d='='}

  const math = `\\frac{${a}}{${b}}...\\frac{${a}}{${c}}`
  const answer = `\\frac{${a}}{${b}}${d}\\frac{${a}}{${c}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let a = getRandomInt(2, 22); 
  let b = getRandomInt(23, 99);

  const math = `\\frac{${a}}{${b}}...1`
  const answer = `\\frac{${a}}{${b}}<1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(2, 22); 
  let b = getRandomInt(23, 99);

  const math = `\\frac{${b}}{${a}}...1`
  const answer = `\\frac{${b}}{${a}}>1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>   {
  let a = getRandomInt(22, 99); 

  const math = `\\frac{${a}}{${a}}...1`
  const answer = `\\frac{${a}}{${a}}=1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(2, 99); 
  let b = getRandomInt(22, 99);
  let c = getRandomInt(22, 99); 
  let d
  if (b>c){d='<'}else{d='>'}
  if (b==c) {d='='}

  const math = `\\frac{${a}}{${b}}...\\frac{${a}}{${c}}`
  const answer = `\\frac{${a}}{${b}}${d}\\frac{${a}}{${c}}`
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