import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(1, 89);  

  const math = `\\sin${a}^\\circ`
  const answer = `\\text{1 четверть}, \\sin${a}^\\circ>0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>   {
    let a = getRandomInt(91, 179);  
  
    const math = `\\cos${a}^\\circ`
    const answer = `\\text{2 четверть}, \\cos${a}^\\circ<0`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(181, 269);  
  
    const math = `\\sin${a}^\\circ`
    const answer = `\\text{3 четверть}, \\sin${a}^\\circ<0`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>  {
    let a = getRandomInt(271, 359);  
  
    const math = `\\cos${a}^\\circ`
    const answer = `\\text{4 четверть}, \\cos${a}^\\circ>0`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample5 = () =>   {
    let a = getRandomInt(3, 10);  
  
    const math = `\\cos\\frac{\\mathrm\\pi}{${a}}`
    const answer = `\\text{1 четверть}, \\cos\\frac{\\mathrm\\pi}{${a}}>0`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(3, 10);  
  
    const math = `\\sin\\frac{${a+1}\\mathrm\\pi}{${a}}`
    const answer = `\\text{2 четверть}, \\sin\\frac{${a+1}\\mathrm\\pi}{${a}}>0`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
  
    const math = `\\cos\\left(\\frac{{\\mathrm\\pi}}{2}-\\alpha\\right)`
    const answer = `\\text{1 четверть}, \\cos\\left(\\frac{{\\mathrm\\pi}}{2}-\\alpha\\right)>0`
        
    const condition = `0<\\alpha<\\frac{\\mathrm\\pi}{2}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(3, 10);  
  
    const math = `\\sin\\left(\\frac{3\\mathrm\\pi}{2}+\\alpha\\right)`
    const answer = `\\text{4 четверть}, \\sin\\left(\\frac{3\\mathrm\\pi}{2}+\\alpha\\right)<0`
        
    const condition = `0<\\alpha<\\frac{\\mathrm\\pi}{2}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(3, 10);  
  
    const math = `\\cos\\left(2\\mathrm\\pi+\\alpha\\right)`
    const answer = `\\text{1 четверть}, \\cos\\left(2\\mathrm\\pi+\\alpha\\right)>0`
        
    const condition = `0<\\alpha<\\frac{\\mathrm\\pi}{2}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(3, 10);  
  
    const math = `\\cos\\left(\\mathrm\\pi-\\alpha\\right)`
    const answer = `\\text{2 четверть}, \\cos\\left(\\mathrm\\pi-\\alpha\\right)<0`
        
    const condition = `0<\\alpha<\\frac{\\mathrm\\pi}{2}`
  
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