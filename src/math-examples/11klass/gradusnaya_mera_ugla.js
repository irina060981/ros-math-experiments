import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(1, 6);  

  const math = `\\frac{\\mathrm\\pi}{${180/a}}`
  const answer = `${a}^\\circ`
      
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

  const math = `\\frac{\\mathrm\\pi}{${180/a}}`
  const answer = `${a}^\\circ`
      
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

  const math = `\\frac{\\mathrm\\pi}{${180/a}}`
  const answer = `${a}^\\circ`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {

  const math = `\\mathrm\\pi`
  const answer = `180^\\circ`
      
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

  const math = `${a/180}\\mathrm\\pi`
  const answer = `${a}^\\circ`
      
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

  const math = `\\frac{\\mathrm\\pi}{${180/a}}`
  const answer = `${a}^\\circ`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {

  const math = `\\frac{3\\mathrm\\pi}{4}`
  const answer = `135^\\circ`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {

  const math = `\\frac{2\\mathrm\\pi}{3}`
  const answer = `120^\\circ`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => { 

  const math = `\\frac{3\\mathrm\\pi}{2}`
  const answer = `270^\\circ`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () =>  {

  const math = `\\frac{2\\mathrm\\pi}{3}`
  const answer = `120^\\circ`
      
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