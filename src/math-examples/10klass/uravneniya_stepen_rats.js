import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `${a}^{${variable}}=${a}^{${b}}`
    const answer = `${variable}=${b}`
        
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
    let c = getRandomInt(2, 5)*2-1; 
    let b = getRandomInt(2, 5)*2; 

    let variable = generateVariableName()

    const math = `${a}^{${variable}}=${a}^{\\frac{${b}}{${c}}}`
    const answer = `${variable}=\\frac{${b}}{${c}}`
        
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

    const math = `${a}^{${b}${variable}}=${a}^{${c}}`
    const answer = `${variable}=${c/b}`
        
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

    const math = `${a}^{-${b}${variable}}=${a}^{${c}}`
    const answer = `${variable}=-${c/b}`
        
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

    const math = `\\left (\\frac{${a}}{${t}}\\right)^{${c}}=\\left (\\frac{${a}}{${t}}\\right)^{${b}${variable}}`
    const answer = `${variable}=${c/b}`
        
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

    const math = `${a}^{${variable}}=\\sqrt[${b}]{${a}}`
    const answer = `${variable}=\\frac{1}{${b}}`
        
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

    const math = `${a}^{${variable}}=\\sqrt[${b}]{${a}^{${c}}}`
    const answer = `${variable}=\\frac{${c}}{${b}}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(2, 5)*2;
    let t = getRandomInt(2, 5)*2-1;  
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `\\left (\\frac{${a}}{${t}}\\right)^{${b}${variable}}=1`
    const answer = `${variable}=0`
        
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
    let b = getRandomInt(2, 10);
    let c = b*getRandomInt(2, 5); 
    let variable = generateVariableName()
    let t = getRandomInt(2, 8, 4);

    const math = `(${a}\\sqrt{${t}})^{-${b}${variable}}=(${a}\\sqrt{${t}})^{-${c}}`
    const answer = `${variable}=${c/b}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(6, 10);
    let c = b*getRandomInt(2, 5); 
    let variable = generateVariableName()
    let t = getRandomInt(2, 8, 4);

    const math = `(${a}+\\sqrt{${t}})^{-${b}${variable}}=(${a}+\\sqrt{${t}})^{${c}}`
    const answer = `${variable}=-${c/b}`
        
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