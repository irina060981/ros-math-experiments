import { getRandomInt, shuffleSingle, getRandomPeremen} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(2, 6, 5);
  let o
  
  if (a==2) {o=1}
  if (a==3) {o=`\\frac{\\sqrt{3}}{2}`}
  if (a==4) {o=`\\frac{\\sqrt{2}}{2}`}
  if (a==6) {o=`\\frac{1}{2}`}

  const math = `\\sin\\left(-\\frac{\\mathrm\\pi}{${a}}\\right)`
  const answer = `-${o}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {
    
    let a = getRandomInt(2, 6, 5);
    let o
    
    if (a==2) {o=0}
    if (a==3) {o=`\\frac{1}{2}`}
    if (a==4) {o=`\\frac{\\sqrt{2}}{2}`}
    if (a==6) {o=`\\frac{\\sqrt{3}}{2}`}

  const math = `\\cos\\left(-\\frac{\\mathrm\\pi}{${a}}\\right)`
  const answer = `${o}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
    
    let a = getRandomInt(3, 6, 5);
    let o

    if (a==3) {o=`\\sqrt{3}`}
    if (a==4) {o=1}
    if (a==6) {o=`\\frac{\\sqrt{3}}{3}`}

    const math = `\\mathrm{tg\\left(-\\frac{\\mathrm\\pi}{${a}}\\right)}`
    const answer = `-${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }
  
  const createExample4 = () => {
    let a = getRandomInt(3, 6, 5);
    let o

    if (a==3) {o=`\\frac{\\sqrt{3}}{3}`}
    if (a==4) {o=1}
    if (a==6) {o=`\\sqrt{3}`}

    const math = `\\mathrm{ctg\\left(-\\frac{\\mathrm\\pi}{${a}}\\right)}`
    const answer = `-${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(2, 50);
    const mass1=[`\\mathrm{tg\\left(-\\frac{\\mathrm\\pi}{6}\\right)}`, `\\mathrm{ctg\\left(-\\frac{\\mathrm\\pi}{3}\\right)}`]
    const mass2=[`\\mathrm{tg\\left(-\\frac{\\mathrm\\pi}{3}\\right)}`, `\\mathrm{ctg\\left(-\\frac{\\mathrm\\pi}{6}\\right)}`]
  
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
  
    const math = `${a}${variable1}${variable2}`
    const answer = `${a}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    const mass1=[`\\sin^2\\left(-\\frac{\\mathrm\\pi}{4}\\right)`, `\\cos^2\\left(-\\frac{\\mathrm\\pi}{4}\\right)`]
    const mass2=[`\\sin\\frac{\\mathrm\\pi}{6}`, `\\cos\\frac{\\mathrm\\pi}{3}`]
  
    let variable1 = getRandomPeremen(mass1)
    let variable2 = getRandomPeremen(mass2)
  
    const math = `${variable1}+${variable2}`
    const answer = `1`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () =>   {
  let a = getRandomInt(2, 50);
  
  const math = `${a}\\mathrm{tg(-\\alpha)}\\cdot\\cos\\alpha-${a}\\sin(-\\alpha)`
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
    let a = getRandomInt(2, 50);

    const math = `${a}\\cos(-\\alpha)-${a}\\mathrm{ctg(-\\alpha)}\\cdot\\sin(-\\alpha)`
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

  const math = `\\sin(-\\mathrm\\pi)+\\cos(-2\\mathrm\\pi)`
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
  const mass1=[`\\sin0`, `\\sin\\mathrm\\pi`, `\\sin2\\mathrm\\pi`, `\\cos\\frac{\\mathrm\\pi}{2}`, `\\cos\\frac{3\\mathrm\\pi}{2}`, 
  `\\mathrm{tg0}`,  `\\mathrm{tg\\mathrm\\pi}`,  `\\mathrm{tg2\\mathrm\\pi}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{2}}`, 
  `\\mathrm{ctg\\frac{3\\mathrm\\pi}{2}}`,]
  let variable1 = getRandomPeremen(mass1)
  let a = getRandomInt(7, 20)
  let b = getRandomInt(7, 20)
  
  const math = `\\cos\\left(-\\frac{\\mathrm\\pi}{${a}}\\right)${variable1}\\sin\\left(-\\frac{\\mathrm\\pi}{${b}}\\right)`
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