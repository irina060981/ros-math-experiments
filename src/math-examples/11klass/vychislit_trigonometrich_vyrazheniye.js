import { getRandomInt, shuffleSingle, getRandomPeremen} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  const mass1=[`\\sin\\frac{\\mathrm\\pi}{4}`, `\\cos\\frac{\\mathrm\\pi}{4}`]
  const mass2=[`\\sin\\frac{3\\mathrm\\pi}{2}`, `\\cos\\mathrm\\pi`]

  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)

  const math = `\\sqrt{2}${variable1}+${variable2}`
  const answer = `0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {
  
  const mass1=[`\\mathrm{tg\\frac{\\mathrm\\pi}{6}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{3}}`]
  const mass2=[`\\mathrm{tg\\frac{\\mathrm\\pi}{3}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{6}}`]
  let a = getRandomInt(2, 50);
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

const createExample3 = () =>  {
  const mass1=[`\\sin\\frac{\\mathrm\\pi}{6}`, `\\cos\\frac{\\mathrm\\pi}{3}`]
  const mass2=[`\\sin^2\\frac{\\mathrm\\pi}{4}`, `\\cos^2\\frac{\\mathrm\\pi}{4}`]

  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)

  const math = `\\frac{1}{2}${variable1}-\\frac{1}{2}${variable2}`
  const answer = `0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  const mass1=[`\\mathrm{tg\\frac{\\mathrm\\pi}{6}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{3}}`]
  const mass2=[`\\mathrm{tg^2\\frac{\\mathrm\\pi}{3}}`, `\\mathrm{ctg^2\\frac{\\mathrm\\pi}{6}}`]

  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)

  const math = `\\frac{1}{\\sqrt{3}}${variable1}${variable2}`
  const answer = `1`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  const mass1=[`\\sin\\frac{3\\mathrm\\pi}{2}`, `\\cos\\mathrm\\pi`]
  const mass2=[`\\sin0`, `\\sin\\mathrm\\pi`, `\\sin2\\mathrm\\pi`, `\\cos\\frac{\\mathrm\\pi}{2}`, `\\cos\\frac{3\\mathrm\\pi}{2}`, 
  `\\mathrm{tg0}`,  `\\mathrm{tg\\mathrm\\pi}`,  `\\mathrm{tg2\\mathrm\\pi}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{2}}`, 
  `\\mathrm{ctg\\frac{3\\mathrm\\pi}{2}}`,]
  const mass3=[`\\mathrm{tg\\frac{\\mathrm\\pi}{4}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{4}}`, `\\cos0`, `\\sin\\frac{\\mathrm\\pi}{2}`, 
  `\\cos2\\mathrm\\pi`]

  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)
  let variable3 = getRandomPeremen(mass3)

  const math = `${variable1}+${variable2}+${variable3}`
  const answer = `0`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  const mass1=[`\\mathrm{tg\\frac{\\mathrm\\pi}{4}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{4}}`, `\\cos0`, `\\sin\\frac{\\mathrm\\pi}{2}`, 
  `\\cos2\\mathrm\\pi`]
  const mass2=[`\\sin\\frac{\\mathrm\\pi}{3}`, `\\cos\\frac{\\mathrm\\pi}{6}`]
  const mass3=[`\\mathrm{tg\\frac{\\mathrm\\pi}{6}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{3}}`]

  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)
  let variable3 = getRandomPeremen(mass3)

  const math = `${variable1}${variable2}:${variable3}`
  const answer = `1.5`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>   {
  const mass1=[`\\sin^2\\frac{\\mathrm\\pi}{4}`, `\\cos^2\\frac{\\mathrm\\pi}{4}`]
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

const createExample8 = () =>   {
  const mass2=[`\\sin\\frac{3\\mathrm\\pi}{2}`, `\\cos\\mathrm\\pi`]
  const mass1=[`\\mathrm{tg\\frac{\\mathrm\\pi}{4}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{4}}`, `\\cos0`, `\\sin\\frac{\\mathrm\\pi}{2}`, 
  `\\cos2\\mathrm\\pi`]
  const mass3=[`\\sin\\frac{\\mathrm\\pi}{6}`, `\\cos\\frac{\\mathrm\\pi}{3}`]

  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)
  let variable3 = getRandomPeremen(mass3)

  const math = `${variable1}${variable2}+${variable3}`
  const answer = `-\\frac{1}{2}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  const mass2=[`\\sin\\frac{\\mathrm\\pi}{3}`, `\\cos\\frac{\\mathrm\\pi}{6}`]
  const mass1=[`\\mathrm{tg\\frac{\\mathrm\\pi}{3}}`, `\\mathrm{ctg\\frac{\\mathrm\\pi}{6}}`]
  const mass3=[`\\sin\\frac{3\\mathrm\\pi}{2}`, `\\cos\\mathrm\\pi`]
  let variable1 = getRandomPeremen(mass1)
  let variable2 = getRandomPeremen(mass2)
  let variable3 = getRandomPeremen(mass3)

  const math = `${variable1}${variable2}+${variable3}`
  const answer = `\\frac{1}{2}`
      
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
  
  const math = `\\cos\\frac{\\mathrm\\pi}{${a}}${variable1}\\sin\\frac{\\mathrm\\pi}{${b}}`
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