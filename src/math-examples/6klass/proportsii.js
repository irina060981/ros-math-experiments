import { getRandomInt, generateVariableName, shuffleSingle, NOD } from '@utility/math-utitility.js'
import { v4 as uuidv4, validate } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 5);
        let b = a*getRandomInt(2, 5);
        let variable = generateVariableName()
        
        const math = `${a}:${b}=${a}:${variable}`
        const answer = `${b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>{
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let variable = generateVariableName()
    
    const math = `${a}:${variable}=${a}:${b}`
    const answer = `${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>{
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let variable = generateVariableName()
    
    const math = `${variable}:${a}=${b}:${a}`
    const answer = `${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>  {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let variable = generateVariableName()
    
    const math = `\\frac{${a}}{${b}}=\\frac{${a}}{${variable}}`
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
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let variable = generateVariableName()
    
    const math = `\\frac{${variable}}{${b}}=\\frac{${a}}{${b}}`
    const answer = `${a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample6 = () =>   {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let c = getRandomInt(2, 5);

    let variable = generateVariableName()
    
    const math = `${a}:${b}=${variable}:${b*c}`
    const answer = `${a*c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample7 = () =>  {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let c = getRandomInt(2, 5);

    let variable = generateVariableName()
    
    const math = `${a}:${b}=${variable}:${b*c}`
    const answer = `${a*c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let c = getRandomInt(2, 5);

    let variable = generateVariableName()
    
    const math = `${a}:${b}=\\frac{${variable}}{${b*c}}`
    const answer = `${a*c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let variable = generateVariableName()
    
    const math = `${a}:${variable}=${a}:${b}`
    const answer = `${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>  {
    let a = getRandomInt(2, 5);
    let b = a*getRandomInt(2, 5);
    let c = getRandomInt(2, 5);

    let variable = generateVariableName()
    
    const math = `\\frac{${variable}}{${b*c}}=${a}:${b}`
    const answer = `${a*c}` 
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