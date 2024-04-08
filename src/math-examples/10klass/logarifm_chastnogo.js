import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

    let a = getRandomInt(2, 10);
    let b = getRandomInt(11, 50);
 

    const math = `\\log_{${a}}{${b}}-\\log_{${a}}{${b}}`
    const answer = `0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {

  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  if(a===b) {b = b+1};
  let c = b*a;
  
  const math = `\\log_{${a}}{${b}}-\\log_{${a}}{${c}}`
  const answer = `-1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () =>   {

  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  if(a===b) {b = b+1};
  let c = b*a;
  
  const math = `\\log_{${a}}{${c}}-\\log_{${a}}{${b}}`
  const answer = `1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {

  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  if(a===b) {b = b+1};
  let c = b*a*a;
  
  const math = `\\log_{${a}}{${c}}-\\log_{${a}}{${b}}`
  const answer = `2`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {

  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 3);
  if(a===b) {b = b+1};
  let c = b*a*a*a;
  
  const math = `\\log_{${a}}{${c}}-\\log_{${a}}{${b}}`
  const answer = `3`
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
  
  const math = `\\log_{${a/10}}{${a}}-\\log_{${a/10}}{10}`
  const answer = `1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {

  let a = getRandomInt(2, 9);
  let b = 2*a-1;
  
  const math = `\\log_{\\frac{${a}}{${b}}}{${a}}-\\log_{\\frac{${a}}{${b}}}{${b}}`
  const answer = `1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>   {

  let a = getRandomInt(2, 9);
  let b = 2*a-1;
  
  const math = `\\log_{\\frac{${a}}{${b}}}{\\frac{${b}}{${a}}}-\\log_{\\frac{${a}}{${b}}}{\\frac{${b}}{${a}}}`
  const answer = `0`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample9 = () =>  {

  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  if(a===b) {b = b+1};
  let c = b*a*a;
  
  const math = `\\log_{${a}}{\\sqrt{${c}}}-\\log_{${a}}{\\sqrt{${b}}}`
  const answer = `1`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () =>  {

  let c = getRandomInt(20, 50);
  let a = getRandomInt(2, 9);
  let b = 2*a-1;
  
  const math = `\\log_{${c}}{${a}}-\\log_{${c}}{${b}}`
  const answer = `\\log_{${c}}{\\frac{${a}}{${b}}}`
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