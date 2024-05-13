import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

  const math = `\\text{arcsin}\\frac{1}{2}`
  const answer = `\\frac{\\mathrm\\pi}{6}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {

  const math = `\\text{arccos}\\frac{\\sqrt{2}}{2}`
  const answer = `\\frac{\\mathrm\\pi}{4}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {

  const math = `\\text{arcsin}\\frac{\\sqrt{3}}{2}`
  const answer = `\\frac{\\mathrm\\pi}{3}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {

  const math = `\\text{arccos}\\frac{\\sqrt{3}}{2}`
  const answer = `\\frac{\\mathrm\\pi}{6}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {

  const math = `\\text{arcsin}\\frac{\\sqrt{2}}{2}`
  const answer = `\\frac{\\mathrm\\pi}{4}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {

  const math = `\\text{arccos}\\frac{1}{2}`
  const answer = `\\frac{\\mathrm\\pi}{3}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample7 = () =>   {

  const math = `\\text{arccos}\\frac{\\sqrt{2}}{2}+\\text{arcsin}\\frac{\\sqrt{2}}{2}`
  const answer = `\\frac{\\mathrm\\pi}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {

  const math = `\\text{arccos}0+\\text{arcsin}1`
  const answer = `\\mathrm\\pi`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {

    const math = `\\text{arccos}1+\\text{arcsin}0`
    const answer = `0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () =>   {

    const math = `\\text{arccos}\\left(-\\frac{1}{2}\\right)`
    const answer = `\\frac{2\\mathrm\\pi}{3}`
        
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