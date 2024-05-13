import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(1, 6);  

  const math = `${a}^\\circ`
  const answer = `\\frac{\\mathrm\\pi}{${180/a}}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {
  let a = getRandomInt(9, 10);  

  const math = `${a}^\\circ`
  const answer = `\\frac{\\mathrm\\pi}{${180/a}}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(2, 6, 5)*15;  

  const math = `${a}^\\circ`
  const answer = `\\frac{\\mathrm\\pi}{${180/a}}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {

  const math = `180^\\circ`
  const answer = `\\mathrm\\pi`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(2, 4)*180;  

  const math = `${a}^\\circ`
  const answer = `${a/180}\\mathrm\\pi`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(4, 6)*3;  

  const math = `${a}^\\circ`
  const answer = `\\frac{\\mathrm\\pi}{${180/a}}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {

  const math = `20^\\circ`
  const answer = `\\frac{\\mathrm\\pi}{9}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {

  const math = `36^\\circ`
  const answer = `\\frac{\\mathrm\\pi}{5}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let a = getRandomInt(2, 4)*180;  
  let b = getRandomInt(2, 5)

  const math = `${a}^{\\circ}+${b}\\mathrm\\pi`
  const answer = `${(a/180)+b}\\mathrm\\pi`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () =>  {
  let a = getRandomInt(2, 4)*180;  
  let b = getRandomInt(2, 5)

  const math = `\\mathrm\\pi-${a}^{\\circ}`
  const answer = `${1-(a/180)}\\mathrm\\pi`
      
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