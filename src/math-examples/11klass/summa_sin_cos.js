import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {//sin+sin

  let a = getRandomInt(10, 20)*2;
  let b = getRandomInt(1, 9)*2;

  const math = `\\sin${a}\\alpha+\\sin${b}\\alpha`
  const answer = `2\\sin${(a+b)/2}\\alpha\\cos${(a-b)/2}\\alpha`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>   {//sin-sin

    let a = getRandomInt(10, 20)*2;
    let b = getRandomInt(1, 9)*2;
  
    const math = `\\sin${a}\\alpha-\\sin${b}\\alpha`
    const answer = `2\\sin${(a-b)/2}\\alpha\\cos${(a+b)/2}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample3 = () =>  {//cos+cos

    let a = getRandomInt(1, 20)*2;
    let b = getRandomInt(1, 20)*2;
    let o = Math.abs((a-b)/2)

    const math = `\\cos${a}\\alpha+\\cos${b}\\alpha`
    const answer = `2\\cos${(a+b)/2}\\alpha\\cos${o}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>  {//cos-cos

    let a = getRandomInt(10, 20)*2-1;
    let b = getRandomInt(1, 9)*2-1;

    const math = `\\cos${a}\\alpha-\\cos${b}\\alpha`
    const answer = `-2\\sin${(a+b)/2}\\alpha\\sin${(a-b)/2}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>    {//cos-cos

    let a = getRandomInt(10, 20)*2-1;
    let b = getRandomInt(1, 9)*2-1;

    const math = `\\cos${b}\\alpha-\\cos${a}\\alpha`
    const answer = `2\\sin${(a+b)/2}\\alpha\\sin${(a-b)/2}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {//cos+cos

    let a = getRandomInt(1, 20)*2-1;
    let b = getRandomInt(1, 20)*2-1;
    let o = Math.abs((a-b)/2)

    const math = `\\cos${a}\\alpha+\\cos${b}\\alpha`
    const answer = `2\\cos${(a+b)/2}\\alpha\\cos${o}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () =>   {//sin+sin

    let a = getRandomInt(10, 20)*2-1;
    let b = getRandomInt(1, 9)*2-1;
  
    const math = `\\sin${b}\\alpha+\\sin${a}\\alpha`
    const answer = `2\\sin${(a+b)/2}\\alpha\\cos${(a-b)/2}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {//sin-sin

    let a = getRandomInt(10, 20)*2-1;
    let b = getRandomInt(1, 9)*2-1;
  
    const math = `\\sin${b}\\alpha-\\sin${a}\\alpha`
    const answer = `-2\\sin${(a-b)/2}\\alpha\\cos${(a+b)/2}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {//cos+cos

    let a = getRandomInt(1, 20)*2-1;


    const math = `\\cos${a}\\alpha+\\sin\\left(\\frac{\\pi}{2}-\\alpha\\right)`
    const answer = `2\\cos${(a+1)/2}\\alpha\\cos${(a-1)/2}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>  {//sin+sin

    let a = getRandomInt(1, 10)*2-1;
  
    const math = `\\sin${a}\\alpha+\\cos\\left(\\frac{\\pi}{2}-\\alpha\\right)`
    const answer = `2\\sin${(a+1)/2}\\alpha\\cos${(a-1)/2}\\alpha`
        
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