import { getRandomInt, shuffleSingle, getRandomPeremen} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(90^\\circ-\\alpha\\right)`, `\\left(90^\\circ+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\sin`){ o=`\\cos\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(90^\\circ-\\alpha\\right)`){ o=`\\sin\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(90^\\circ+\\alpha\\right)`){ o=`-\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {

    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(180^\\circ-\\alpha\\right)`, `\\left(180^\\circ+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\cos`){ o=`-\\cos\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(180^\\circ-\\alpha\\right)`){ o=`\\sin\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(180^\\circ+\\alpha\\right)`){ o=`-\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>   {

    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(270^\\circ-\\alpha\\right)`, `\\left(270^\\circ+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\sin`){ o=`-\\cos\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(270^\\circ-\\alpha\\right)`){ o=`-\\sin\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(270^\\circ+\\alpha\\right)`){ o=`\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {

    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(360^\\circ-\\alpha\\right)`, `\\left(360^\\circ+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\cos`){ o=`\\cos\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(360^\\circ-\\alpha\\right)`){ o=`-\\sin\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(360^\\circ+\\alpha\\right)`){ o=`\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(\\frac{\\mathrm\\pi}{2}-\\alpha\\right)`, `\\left(\\frac{\\mathrm\\pi}{2}+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\sin`){ o=`\\cos\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(\\frac{\\mathrm\\pi}{2}-\\alpha\\right)`){ o=`\\sin\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(\\frac{\\mathrm\\pi}{2}+\\alpha\\right)`){ o=`-\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {

    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(\\mathrm\\pi-\\alpha\\right)`, `\\left(\\mathrm\\pi+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\cos`){ o=`-\\cos\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(\\mathrm\\pi-\\alpha\\right)`){ o=`\\sin\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(\\mathrm\\pi+\\alpha\\right)`){ o=`-\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>   {

    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(\\frac{3\\mathrm\\pi}{2}-\\alpha\\right)`, `\\left(\\frac{3\\mathrm\\pi}{2}+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\sin`){ o=`-\\cos\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(\\frac{3\\mathrm\\pi}{2}-\\alpha\\right)`){ o=`-\\sin\\alpha`}
    if (variable1==`\\cos` &&  variable2==`\\left(\\frac{3\\mathrm\\pi}{2}+\\alpha\\right)`){ o=`\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {

    const mass1=[`\\sin`, `\\cos`]
    const mass2=[`\\left(2\\mathrm\\pi-\\alpha\\right)`, `\\left(2\\mathrm\\pi+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\cos`){ o=`\\cos\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(2\\mathrm\\pi-\\alpha\\right)`){ o=`-\\sin\\alpha`}
    if (variable1==`\\sin` &&  variable2==`\\left(2\\mathrm\\pi+\\alpha\\right)`){ o=`\\sin\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    const mass1=[`\\mathrm{tg}`, `\\mathrm{ctg}`]
    const mass2=[`\\left(\\frac{\\mathrm\\pi}{2}-\\alpha\\right)`, `\\left(\\frac{\\mathrm\\pi}{2}+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\mathrm{tg}` && variable2==`\\left(\\frac{\\mathrm\\pi}{2}-\\alpha\\right)`){ o=`\\mathrm{ctg}\\alpha`}
    if (variable1==`\\mathrm{tg}` && variable2==`\\left(\\frac{\\mathrm\\pi}{2}+\\alpha\\right)`){ o=`-\\mathrm{ctg}\\alpha`}
    if (variable1==`\\mathrm{ctg}` && variable2==`\\left(\\frac{\\mathrm\\pi}{2}-\\alpha\\right)`){ o=`\\mathrm{tg}\\alpha`}
    if (variable1==`\\mathrm{ctg}` && variable2==`\\left(\\frac{\\mathrm\\pi}{2}+\\alpha\\right)`){ o=`-\\mathrm{tg}\\alpha`}
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>    {
    const mass1=[`\\mathrm{tg}`, `\\mathrm{ctg}`]
    const mass2=[`\\left(\\mathrm\\pi-\\alpha\\right)`, `\\left(\\mathrm\\pi+\\alpha\\right)`]
    
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
    let o
    const math = `${variable1}${variable2}`
  
    if (variable1==`\\mathrm{tg}` && variable2==`\\left(\\mathrm\\pi-\\alpha\\right)`){ o=`-\\mathrm{tg}\\alpha`}
    if (variable1==`\\mathrm{tg}` && variable2==`\\left(\\mathrm\\pi+\\alpha\\right)`){ o=`\\mathrm{tg}\\alpha`}
    if (variable1==`\\mathrm{ctg}` && variable2==`\\left(\\mathrm\\pi-\\alpha\\right)`){ o=`-\\mathrm{ctg}\\alpha`}
    if (variable1==`\\mathrm{ctg}` && variable2==`\\left(\\mathrm\\pi+\\alpha\\right)`){ o=`\\mathrm{ctg}\\alpha`}
    const answer = `${o}`
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