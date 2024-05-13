import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

  const math = `\\sin\\frac{\\mathrm\\pi}{6}`
  const answer = `\\frac{1}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {

  const math = `\\cos\\frac{\\mathrm\\pi}{4}`
  const answer = `\\frac{\\sqrt{2}}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {

  const math = `\\sin\\frac{\\mathrm\\pi}{3}`
  const answer = `\\frac{\\sqrt{3}}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {

  const math = `\\cos\\frac{\\mathrm\\pi}{6}`
  const answer = `\\frac{\\sqrt{3}}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {

  const math = `\\sin\\frac{\\mathrm\\pi}{4}`
  const answer = `\\frac{\\sqrt{2}}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {

  const math = `\\cos\\frac{\\mathrm\\pi}{3}`
  const answer = `\\frac{1}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample7 = () =>   {

  const math = `\\cos\\frac{\\mathrm\\pi}{4}+\\sin\\frac{\\mathrm\\pi}{4}`
  const answer = `\\sqrt{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {

  const math = `\\cos\\mathrm\\pi+\\sin\\frac{\\mathrm\\pi}{2}`
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

  const math = `\\sin\\mathrm\\pi+\\cos0`
  const answer = `1`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () =>   {

  const math = `\\sin2\\mathrm\\pi`
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