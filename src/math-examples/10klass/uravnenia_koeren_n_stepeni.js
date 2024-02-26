import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(4, 9);
        let b = getRandomInt(-1, 1, 0);
        

        let variable = generateVariableName()

        const math = `${variable}^{${a}}=${b}`
        let c=`${variable}=${b}`
        {if (a%2===0 && b<0) {c=`\\text{Корней нет}`}}
        {if (a%2===0 && b>0) {c=`${variable}_{1,2}=\\pm ${b}`}}
        const answer = `${c}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
  let a = getRandomInt(3, 99);

  let variable = generateVariableName()

  const math = `${variable}^{${a}}=0`
  const answer = `${variable}=0` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(2, 4);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}=${a**3}`

  const answer = `${variable}=${a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let a = getRandomInt(-4, -2);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}=${a**3}`

  const answer = `${variable}=${a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(5, 7);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}-${a**3}=0`

  const answer = `${variable}=${a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(-7, -5);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}=${a**3}`

  const answer = `${variable}=${a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {
  let a = getRandomInt(2, 4);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}-${(a**3)*1000}=0`

  const answer = `${variable}=${a*10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {
  let a = getRandomInt(2, 3);
  let b = getRandomInt(-1, 1, 0);
  

  let variable = generateVariableName()

  const math = `${variable}^{4}=${(a**4)*b}`
  let c
  {if (b<0) {c=`\\text{Корней нет}`}}
  {if (b>0) {c=`${variable}_{1,2}=\\pm ${a}`}}
  const answer = `${c}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let a = getRandomInt(2, 4);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}-\\frac{1}{${a**3}}=0`

  const answer = `${variable}=\\frac{1}{${a}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(5, 7);
  let b = getRandomInt(2, 4);
  
  let variable = generateVariableName()

  const math = `${variable}^{3}+\\frac{${b**3}}{${a**3}}=0`

  const answer = `${variable}=-\\frac{${b}}{${a}}` 
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