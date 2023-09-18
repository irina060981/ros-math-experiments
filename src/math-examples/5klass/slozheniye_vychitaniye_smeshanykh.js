import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOK } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5); 

    const math = `${c}+\\frac{${a}}{${b}}`
    const answer = `${c}\\frac{${a}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>{
    let a = getRandomInt(6, 10);
    let b = getRandomInt(11, 21);
    let c = getRandomInt(6, 10); 

    const math = `${c}+\\frac{${a}}{${b}}`
    const answer = `${c}\\frac{${a}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>{
    let a = getRandomInt(11, 21);
    let b = getRandomInt(22, 51);
    let c = getRandomInt(11, 21); 

    const math = `\\frac{${a}}{${b}}+${c}`
    const answer = `${c}\\frac{${a}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>{
    let a = getRandomInt(11, 21);
    let b = getRandomInt(22, 51);
    let c = getRandomInt(22, 99); 

    const math = `\\frac{${a}}{${b}}+${c}`
    const answer = `${c}\\frac{${a}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>{
    let a = getRandomInt(2, 5);
    let b = getRandomInt(11, 21);
    let c = getRandomInt(2, 5); 
    let d = getRandomInt(2, 5);
    let e = getRandomInt(2, 5);

    const math = `${c}\\frac{${a}}{${b}}+${d}\\frac{${e}}{${b}}`
    const answer = `${c+d}\\frac{${a+e}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>{
    let a = getRandomInt(6, 11);
    let b = getRandomInt(22, 33);
    let c = getRandomInt(6, 11); 
    let d = getRandomInt(6, 11);
    let e = getRandomInt(6, 11);

    const math = `${c}\\frac{${a}}{${b}}+${d}\\frac{${e}}{${b}}`
    const answer = `${c+d}\\frac{${a+e}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(12, 22);
    let b = getRandomInt(50, 99);
    let c = getRandomInt(12, 22); 
    let d = getRandomInt(12, 22);
    let e = getRandomInt(12, 22);

    const math = `${c}\\frac{${a}}{${b}}+${d}\\frac{${e}}{${b}}`
    const answer = `${c+d}\\frac{${a+e}}{${b}}`
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
    let b = getRandomInt(11, 50);
    let c = getRandomInt(51, 99); 
    let d = getRandomInt(2, 50);

    const math = `${c}\\frac{${a}}{${b}}-${d}`
    const answer = `${c-d}\\frac{${a}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(6, 11);
    let b = getRandomInt(11, 21);
    let c = getRandomInt(6, 11); 
    let d = getRandomInt(2, 5);
    let e = getRandomInt(2, 5);

    const math = `${c}\\frac{${a}}{${b}}-${d}\\frac{${e}}{${b}}`
    const answer = `${c-d}\\frac{${a-e}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(12, 22);
    let b = getRandomInt(22, 99);
    let c = getRandomInt(12, 22); 
    let d = getRandomInt(6, 11);
    let e = getRandomInt(6, 11);

    const math = `${c}\\frac{${a}}{${b}}-${d}\\frac{${e}}{${b}}`
    const answer = `${c-d}\\frac{${a-e}}{${b}}`
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