import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let b = getRandomInt(2, 5); 
    let c = getRandomInt(2, 6)*b;
    let variable= generateVariableName()
  
    const math = `\\frac{${variable}+${c}}{${variable}}`
    const answer = `${variable}\\neq 0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }
  

const createExample2 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2,20);
    let variable= generateVariableName()

    const math = `\\frac{${variable}^2-${a}}{${variable}-${b}}`
    const answer = `${variable}\\neq ${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let b = getRandomInt(2,20);
    let variable= generateVariableName()

    const math = `\\frac{${variable}^2-${c}${variable}+${a}}{${b}+${variable}}`
    const answer = `${variable}\\neq -${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }
const createExample4 = () => {
    let a = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(2, 5)*b;
    let variable= generateVariableName()

    const math = `-\\frac{${variable}^2-${c}${variable}+${a}}{${b}${variable}-${d}}`
    const answer = `${variable}\\neq ${d/b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>{
    let a = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(2, 5)*b;
    let variable= generateVariableName()

    const math = `-\\frac{${variable}^2-${c}${variable}+${a}}{${b}${variable}+${d}}`
    const answer = `${variable}\\neq -${d/b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let a = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(2, 5)*b;
    let variable= generateVariableName()

    const math = `\\frac{${variable}^2-${c}${variable}+${a}}{${d}-${b}${variable}}`
    const answer = `${variable}\\neq ${d/b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {
    let c = getRandomInt(2, 30);
    let b = getRandomInt(2, 70); 
    let variable= generateVariableName()
  
    const math = `\\frac{${variable}-${b}}{(${variable}-${c})(${variable}+${c})}`
    const answer = `${variable}\\neq \\pm${c}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let c = getRandomInt(2, 30);
    let b = getRandomInt(2, 70); 
    let variable= generateVariableName()
  
    const math = `\\frac{${variable}-${b}}{(${variable}-${c})(${variable}+${c})}`
    const answer = `${variable}\\neq \\pm${c}`
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
    let b = getRandomInt(2, 5); 
    let c = getRandomInt(2, 6)*b;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `\\frac{${variable1}+${c}}{${variable1}}+\\frac{${variable2}^2-${a}}{${variable2}-${b}}`
    const answer = `${variable1}\\neq 0, ${variable2}\\neq ${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>{
    let a = getRandomInt(2, 5); 
    let b = getRandomInt(2, 5); 
    let c = getRandomInt(2, 6)*b;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `\\frac{${variable1}^2-${c}}{${variable1}-${b}}+\\frac{${variable2}^2-${a}}{${variable2}+${c}}`
    const answer = `${variable1}\\neq ${b}, ${variable2}\\neq -${c}`
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