import { getRandomInt, shuffleSingle, getRandomPeremen} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(3, 50);

  const math = `${a}\\sin^2\\alpha+\\cos^2\\alpha-${a-1}\\sin^2\\alpha`
  const answer = `1`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {
  const mass1=[`\\sin\\alpha`, `\\cos\\alpha`]

  let variable1 = getRandomPeremen(mass1)
  let o
  const math = `(1-${variable1})(1+${variable1})`

  if (variable1==`\\sin\\alpha`){ o=`\\cos^2\\alpha`}
  if (variable1==`\\cos\\alpha`){ o=`\\sin^2\\alpha`}
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
    const mass1=[`\\mathrm{ctg\\alpha}`, `\\frac{\\cos\\alpha}{\\sin\\alpha}`]
  
    let variable1 = getRandomPeremen(mass1)
    let a = getRandomInt(2, 50);
    const math = `${a}\\mathrm{tg\\alpha} \\cdot ${variable1}`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    const mass1=[`\\mathrm{tg^2\\alpha}`, `\\left(\\frac{\\cos\\alpha}{\\sin\\alpha}\\right)^2`]
  
    let variable1 = getRandomPeremen(mass1)
    let a = getRandomInt(2, 50);
    const math = `${a}${variable1}+${a}`
    const answer = `\\frac{${a}}{\\cos^2\\alpha}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    const mass1=[`\\sin^2\\alpha`, `\\cos^2\\alpha`]
  
    let variable1 = getRandomPeremen(mass1)
    let o
    const math = `\\frac{${variable1}}{1-${variable1}}`
  
    if (variable1==`\\sin^2\\alpha`){ o=`\\mathrm{tg^2\\alpha}`}
    if (variable1==`\\cos^2\\alpha`){ o=`\\mathrm{ctg^2\\alpha}`}
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
    const mass1=[`\\mathrm{tg^2\\alpha}`, `\\mathrm{ctg^2\\alpha}`]
    let a = getRandomInt(2, 50);
    let variable1 = getRandomPeremen(mass1)
    let variable2
    if (variable1==`\\mathrm{tg^2\\alpha}`){ variable2=`\\sin^2\\alpha`}
    if (variable1==`\\mathrm{ctg^2\\alpha}`){ variable2=`\\cos^2\\alpha`}
    
    const math = `${a}(1+${variable1})(1-${variable2})`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>   {

    const math = `(1+\\mathrm{tg^2\\alpha})+(\\mathrm{ctg^2\\alpha}+1)`
    const answer = `\\frac{1}{\\sin^2\\alpha\\cos^2\\alpha}`
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
    const math = `${a}\\mathrm{tg\\alpha}\\left(\\frac{\\cos\\alpha}{${a}}+\\mathrm{ctg\\alpha}\\right)`
    const answer = `\\sin\\alpha+${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {

    const math = `\\frac{\\sin^4\\alpha-\\cos^4\\alpha}{\\sin^2\\alpha-\\cos^2\\alpha}`
    const answer = `1`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>    {
    const mass1=[`\\sin\\alpha`, `\\cos\\alpha`]
    let variable1 = getRandomPeremen(mass1)
    let variable2
    if (variable1==`\\sin\\alpha`){ variable2=`\\cos^2\\alpha`}
    if (variable1==`\\cos\\alpha`){ variable2=`\\sin^2\\alpha`}

    const math = `\\frac{1}{1-${variable1}}+\\frac{1}{1+${variable1}}`
    const answer = `\\frac{2}{${variable2}}`
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