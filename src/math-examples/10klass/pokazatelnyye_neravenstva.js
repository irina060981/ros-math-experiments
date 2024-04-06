import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `${a}^{${variable}}>${a}^{${b}}`
    const answer = `${variable}\\in \\left(${b};+\\infty\\right)`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 20); 
    let b = getRandomInt(2, 5);  
    let c = b*2-1; 
    

    let variable = generateVariableName()

    const math = `${a}^{${variable}}<${a}^{\\frac{${b}}{${c}}}`
    const answer = `${variable}\\in \\left(-\\infty;\\frac{${b}}{${c}}\\right)`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 5);
    let c = b*getRandomInt(2, 5); 
    let variable = generateVariableName()

    const math = `${a}^{${b}${variable}}\\leq${a}^{${c}}`
    const answer = `${variable}\\in \\left(-\\infty;${c/b}\\right]`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(6, 10);
    let c = b*getRandomInt(2, 5); 
    let variable = generateVariableName()

    const math = `${a}^{-${b}${variable}}\\geq${a}^{${c}}`
    const answer = `${variable}\\in \\left[-\\infty;-${c/b}\\right)`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 5)*2;
    let t = getRandomInt(2, 5)*2-1;  
    let b = getRandomInt(2, 10);
    let c = b*getRandomInt(2, 5); 
    let variable = generateVariableName()

    const math = `\\left (\\frac{${a}}{${t}}\\right)^{${c}}<\\left (\\frac{${a}}{${t}}\\right)^{${b}${variable}}`
    const answer = `${variable}\\in \\left(${c/b};+\\infty\\right)`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(3, 20);
    let variable = generateVariableName()

    const math = `${a}^{${variable}}<\\sqrt[${b}]{${a}}`
    const answer = `${variable}\\in \\left(-\\infty;\\frac{1}{${b}}\\right)`
        
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
    let b = getRandomInt(11, 20);
    let c = getRandomInt(3, 10);
    let variable = generateVariableName()

    const math = `${a}^{${variable}}\\geq\\sqrt[${b}]{${a}^{${c}}}`
    const answer = `${variable}\\in \\left[\\frac{${c}}{${b}};+\\infty\\right)`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(2, 10);
  let variable = generateVariableName()

  const math = `${a}^{${variable}-${b}}\\leq 1`
  const answer = `${variable}\\in \\left(-\\infty;${b}\\right]`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>{
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(2, 5);
  let c = getRandomInt(7, 11);
  let variable = generateVariableName()

  const math = `${a}^{${variable}+${b}}>${a}^{${c}}`
  const answer = `${variable}\\in \\left(${c-b};+\\infty\\right)`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () =>  {
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(2, 10);
  let variable = generateVariableName()

  const math = `${a}^{${variable}-${b}}<${a}`
  const answer = `${variable}\\in \\left(-\\infty; ${b+1}\\right)`
      
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