import { getRandomInt, generateVariableNameOne, generateVariableNameTwo, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}>${a}\\\\${variable}>${b}\\end{array}\\right.`
    const answer = `${variable}\\in(${b};+\\infty)`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}<${b}\\\\${variable}<${a}\\end{array}\\right.`
    const answer = `${variable}\\in(-\\infty;${a})`   
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
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}>${a}\\\\${variable}<${b}\\end{array}\\right.`
    const answer = `${variable}\\in(${a};${b})`   
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
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}<${b}\\\\${variable}>${a}\\end{array}\\right.`
    const answer = `${variable}\\in(${a};${b})`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}>${a}\\\\${variable}\\leq${b}\\end{array}\\right.`
    const answer = `${variable}\\in(${a};${b}]`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}\\geq${a}\\\\${variable}\\leq${b}\\end{array}\\right.`
    const answer = `${variable}\\in[${a};${b}]`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}-${a}>0\\\\${variable}>${b}\\end{array}\\right.`
    const answer = `${variable}\\in(${b};+\\infty)`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 5)*a;
    let c = getRandomInt(40, 90);

    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${a}${variable}\\geq${b}\\\\${variable}<${c}\\end{array}\\right.`
    const answer = `${variable}\\in[${b/a};${c})`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let a = getRandomInt(2, 10); 
    let b = getRandomInt(11, 30);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}-${a}\\geq0\\\\${variable}-${b}\\leq0\\end{array}\\right.`
    const answer = `${variable}\\in[${a};${b}]`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 5)*a;
    let c = getRandomInt(40, 90);

    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${a}${variable}\\geq${b}\\\\${variable}-${c}<0\\end{array}\\right.`
    const answer = `${variable}\\in[${b/a};${c})`   
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