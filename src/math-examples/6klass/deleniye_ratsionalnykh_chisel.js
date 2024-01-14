import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let c = getRandomInt(2, 5);
        let a = c*getRandomInt(-20, -10);
        
        const math = `${a}:${c}`
        const answer = `${a/c}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
  let a = getRandomInt(-2, -5);
  let c = a*getRandomInt(-20, -10);
  
  const math = `${c}:(${a})`
  const answer = `${c/a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () =>  {
  let a = getRandomInt(-2, -5);
  let c = a*getRandomInt(2, 10);
  
  const math = `${c}:(${a})`
  const answer = `${c/a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let a = getRandomInt(-99, -11);
  
  const math = `${a}:10`
  const answer = `${a/10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(-99, -10);
  
  const math = `${a}:(-100)`
  const answer = `${a/(-100)}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>  {
    let a = getRandomInt(20, 50);
    let b = getRandomInt(2, 10);

    const math = `${a}:(-\\frac{${a}}{${b}})`
    const answer = `${-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>  {
    let a = getRandomInt(-50, -20);
    let b = getRandomInt(2, 10);

    const math = `${a}:(-\\frac{${-1*a}}{${b}})`
    const answer = `${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 30);
    let b = getRandomInt(2, 30);

    const math = `-\\frac{${a}}{${b}}:(-\\frac{${a}}{${b}})`
    const answer = `1` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
  let a = getRandomInt(-99, -11);
  
  const math = `${a}:0,1`
  const answer = `${a*10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(11, 99);
  
  const math = `${a/100}:(-0,01)`
  const answer = `${-a}` 
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