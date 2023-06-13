import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 5);
        let variable = generateVariableName()
    
        const math = `${variable}^{2}=${a*a}`
        const answer = `${variable}_{1,2}=\\pm${a}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
    let a = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `${variable}^{2}=${a*a}`
    const answer = `${variable}_{1,2}=\\pm${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(2, 7, 4);
    let variable = generateVariableName()

    const math = `${variable}^{2}-${a}=0`
    const answer = `${variable}_{1,2}=\\pm\\sqrt{${a}}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
  let a = getRandomInt(2, 30);
  let variable = generateVariableName()

  const math = `${a}${variable}^{2}=0`
  const answer = `${variable}=0` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let a = getRandomInt(9, 15, 12);
  let variable = generateVariableName()

  const math = `-${variable}^{2}+${a}=0`
  const answer = `${variable}_{1,2}=\\pm\\sqrt{${a}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `${variable}^{2}=-${a*a}`
  const answer = `\\text{Корней нет}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let a = getRandomInt(2, 20);
  let b = getRandomInt(2, 20);
  let variable = generateVariableName()

  const math = `${b}${variable}^{2}+${a}=0`
  const answer = `\\text{Корней нет}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {
  let variable = generateVariableName()
  let b = getRandomInt(2, 5);  
  let a = getRandomInt(6, 11); 

  const math = `${variable}^2-\\frac{${b*b}}{${a*a}}=0`
  const answer =`${variable}_{1,2}=\\pm\\frac{${b}}{${a}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>   {
  let variable = generateVariableName()
  let b = getRandomInt(2, 5);  
  let a = getRandomInt(6, 11); 

  const math = `-${variable}^2+\\frac{${b*b}}{${a*a}}=0`
  const answer =`${variable}_{1,2}=\\pm\\frac{${b}}{${a}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let variable = generateVariableName()
  let b = getRandomInt(2, 5);  
  let a = getRandomInt(6, 11); 

  const math = `${a*a}${variable}^2-\\frac{${a*a}}{${b*b}}=0`
  const answer =`${variable}_{1,2}=\\pm\\frac{1}{${b}}`
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