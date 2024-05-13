import { getRandomInt, shuffleSingle, getRandomPeremen} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

  let a = getRandomInt(2, 44, 30);
  let b = getRandomInt(2, 25)*2;
  
  const math = `\\frac{${b}\\sin${a}^\\circ\\cos${a}^\\circ}{\\sin${2*a}^\\circ}`
  const answer = `${b/2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>   {

    let a = getRandomInt(46, 89, 60);
    let b = getRandomInt(26, 50)*2;
    
    const math = `\\frac{${b}\\sin${a}^\\circ\\cos${a}^\\circ}{\\sin${2*a}^\\circ}`
    const answer = `${b/2}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample3 = () =>  {

    let a = getRandomInt(2, 44, 30);
    let b = getRandomInt(2, 25);
    
    const math = `\\frac{${b}(\\cos^{2}${a}^\\circ-\\sin^{2}${a}^\\circ)}{\\cos${2*a}^\\circ}`
    const answer = `${b}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {

    let a = getRandomInt(46, 89, 60);
    let b = getRandomInt(26, 50);
    
    const math = `\\frac{${b}(\\cos^{2}${a}^\\circ-\\sin^{2}${a}^\\circ)}{\\cos${2*a}^\\circ}`
    const answer = `${b}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>   {

    const mass1=[`\\frac{\\mathrm\\pi}{8}`, `\\frac{\\mathrm\\pi}{12}`]
    let variable1 = getRandomPeremen(mass1)
    let o
    if (variable1 ==`\\frac{\\mathrm\\pi}{12}`) {o=`\\frac{\\sqrt{3}}{2}`}
    if (variable1 ==`\\frac{\\mathrm\\pi}{8}`) {o=`\\frac{\\sqrt{2}}{2}`}

    const math = `2\\cos^{2}${variable1}-1`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>   {

    const mass1=[`\\frac{\\mathrm\\pi}{8}`, `\\frac{\\mathrm\\pi}{12}`]
    let variable1 = getRandomPeremen(mass1)
    let o
    if (variable1 ==`\\frac{\\mathrm\\pi}{12}`) {o=`\\frac{\\sqrt{3}}{2}`}
    if (variable1 ==`\\frac{\\mathrm\\pi}{8}`) {o=`\\frac{\\sqrt{2}}{2}`}

    const math = `1-2\\sin^{2}${variable1}`
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

    const mass1=[`\\frac{\\mathrm\\pi}{8}`, `\\frac{\\mathrm\\pi}{12}`]
    let variable1 = getRandomPeremen(mass1)
    let o
    if (variable1 ==`\\frac{\\mathrm\\pi}{12}`) {o=`\\frac{\\sqrt{3}}{3}`}
    if (variable1 ==`\\frac{\\mathrm\\pi}{8}`) {o=`1`}

    const math = `\\frac{\\mathrm{2tg${variable1}}}{1-\\mathrm{tg^{2}${variable1}}}`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>   {

    const mass1=[`\\frac{\\mathrm\\pi}{8}`, `\\frac{\\mathrm\\pi}{12}`]
    let variable1 = getRandomPeremen(mass1)
    let o
    if (variable1 ==`\\frac{\\mathrm\\pi}{12}`) {o=`\\frac{\\sqrt{3}}{2}`}
    if (variable1 ==`\\frac{\\mathrm\\pi}{8}`) {o=`\\frac{\\sqrt{2}}{2}`}

    const math = `\\cos^{2}${variable1}-\\sin^{2}${variable1}`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {

    const mass1=[`\\frac{\\mathrm\\pi}{8}`, `\\frac{\\mathrm\\pi}{12}`]
    let variable1 = getRandomPeremen(mass1)
    let o
    let a = getRandomInt(2, 25)*4;

    if (variable1 ==`\\frac{\\mathrm\\pi}{12}`) {o=`${a/4}`}
    if (variable1 ==`\\frac{\\mathrm\\pi}{8}`) {o=`${a/4}\\sqrt{2}`}

    const math = `${a}\\sin${variable1}\\cos${variable1}`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>  {

    const mass1=[`\\frac{\\mathrm\\pi}{8}`, `\\frac{\\mathrm\\pi}{12}`]
    let variable1 = getRandomPeremen(mass1)
    let o

    if (variable1 ==`\\frac{\\mathrm\\pi}{12}`) {o=`\\frac{1}{4}`}
    if (variable1 ==`\\frac{\\mathrm\\pi}{8}`) {o=`\\frac{\\sqrt{2}}{4}`}


    const math = `\\sin${variable1}\\cos${variable1}`
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