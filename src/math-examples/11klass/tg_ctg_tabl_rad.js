import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

  const math = `\\mathrm{tg\\frac{\\mathrm\\pi}{6}}`
  const answer = `\\frac{\\sqrt{3}}{3}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {

  const math = `\\mathrm{ctg\\frac{\\mathrm\\pi}{4}}`
  const answer = `1`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {

  const math = `\\mathrm{tg\\frac{\\mathrm\\pi}{3}}`
  const answer = `\\sqrt{3}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {

  const math = `\\mathrm{ctg\\frac{\\mathrm\\pi}{6}}`
  const answer = `\\sqrt{3}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {

  const math = `\\mathrm{tg\\frac{\\mathrm\\pi}{4}}`
  const answer = `1`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {

  const math = `\\mathrm{ctg\\frac{\\mathrm\\pi}{3}}`
  const answer = `\\frac{\\sqrt{3}}{3}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample7 = () =>   {

  const math = `\\mathrm{tg\\frac{\\mathrm\\pi}{4}+ctg\\frac{\\mathrm\\pi}{4}}`
  const answer = `2`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {

  const math = `\\mathrm{tg\\mathrm\\pi+ctg\\frac{\\mathrm\\pi}{2}}`
  const answer = `0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {

  const math = `\\mathrm{ctg\\mathrm\\pi+tg\\frac{\\mathrm\\pi}{2}}`
  const answer = `\\text{Не существует}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () =>   {

  const math = `\\mathrm{tg2\\mathrm\\pi}`
  const answer = `0`
      
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