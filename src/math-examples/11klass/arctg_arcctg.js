import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

  const math = `\\mathrm{arctg\\frac{\\sqrt{3}}{3}}`
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

  const math = `\\mathrm{arcctg1}`
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

  const math = `\\mathrm{arctg\\sqrt{3}}`
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

  const math = `\\mathrm{arcctg\\sqrt{3}}`
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

  const math = `\\mathrm{arctg}1`
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

  const math = `\\mathrm{arcctg\\frac{\\sqrt{3}}{3}}`
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

  const math = `\\mathrm{arctg}1+\\mathrm{arcctg}(-1)`
  const answer = `0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {

    const math = `\\mathrm{arctg\\left(-\\sqrt{3}\\right)}`
    const answer = `-\\frac{\\mathrm\\pi}{3}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {

    const math = `\\mathrm{arcctg\\left(-\\frac{\\sqrt{3}}{3}\\right)}`
    const answer = `-\\frac{\\mathrm\\pi}{3}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>   {

    const math = `\\mathrm{arctg}(-1)`
    const answer = `-\\frac{\\mathrm\\pi}{4}`
        
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