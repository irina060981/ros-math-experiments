import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 3);

    let variable = generateVariableName()

    const math = `\\log_{${a}}${variable}=${b}`
    const answer = `${variable}=${a**b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 3);
 
    let variable = generateVariableName()

    const math = `\\log_{${variable}}${a**b}=${b}`
    const answer = `${variable}=${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 3);

    let variable = generateVariableName()

    const math = `\\log_{${a}}${variable}=${-1*b}`
    const answer = `${variable}=\\frac{1}{${a**b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 3);
 
    let variable = generateVariableName()

    const math = `\\log_{${variable}}${a**b}=${-1*b}`
    const answer = `${variable}=\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(10, 50);

    let variable = generateVariableName()

    const math = `\\log_{${a}}${variable}=\\log_{${a}}{${b}}`
    const answer = `${variable}=${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 3);

    let variable = generateVariableName()

    const math = `\\log_{${a}}${variable}=${c}\\log_{${a}}{${b}}`
    const answer = `${variable}=${b**c}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample7 = () => {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 10);

    let variable = generateVariableName()

    const math = `\\log_{${a}}{${variable}^2}-\\log_{${a}}{${b**2}}=0`
    const answer = `${variable}=\\pm${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>   {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 30);

    let variable = generateVariableName()

    const math = `\\log_{${a}}{(2${variable}-${b})}=\\log_{${a}}{${variable}}`
    const answer = `${variable}=${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(2, 9);  
    let b = getRandomInt(2, 5);

    let variable = generateVariableName()

    const math = `\\log_{${a}}{${variable}^3}=\\log_{${a}}{${b**3}}`
    const answer = `${variable}=${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(2, 30);  
    let c = getRandomInt(2, 3);
 
    let variable = generateVariableName()

    const math = `\\log_{${variable}-${c}}${a}=1`
    const answer = `${variable}=${a+c}`
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