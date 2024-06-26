import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);

    const math = `\\log_{${a}}${b}+\\log_{${a}}${c}`
    const answer = `\\log_{${a}}${b*c}`
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
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10);

    const math = `\\log_{${a}}${b}+\\log_{${a}}${c}`
    const answer = `\\log_{${a}}${b*c}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {

    let a = getRandomInt(2, 10);
    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10);

    const math = `\\log_{${a}}${b}+\\log_{${a}}${c}`
    const answer = `\\log_{${a}}${b*c}`
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
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let d = getRandomInt(2, 5);

    const math = `\\log_{${a}}${b}+\\log_{${a}}${c}+\\log_{${a}}${d}`
    const answer = `\\log_{${a}}${b*c*d}`
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
    let b = getRandomInt(11, 50);


    const math = `\\log_{${a}}{\\frac{1}{${b}}}+\\log_{${a}}${b}`
    const answer = `0`
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
    let b = getRandomInt(2, 10);


    const math = `\\log_{${a}}{\\frac{1}{${a}}}+\\log_{${a}}{${a**2}}`
    const answer = `1`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {

    let b = getRandomInt(2, 3);
    let c = getRandomInt(1, 3);

    const math = `\\log_{${c*b}}${b**2}+\\log_{${c*b}}${c**2}`
    const answer = `2`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {

    let b = getRandomInt(2, 3);
    let c = getRandomInt(1, 3);
    let a = getRandomInt(2, 3);

    const math = `\\log_{${c*b}}${a*(b**2)}+\\log_{${c*b}}{\\frac{${c**2}}{${a}}}`
    const answer = `2`
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
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);

    const math = `\\frac{\\log_{${a}}{${c}}+\\log_{${a}}${b}}{\\log_{${a}}{${c*b}}}`
    const answer = `1`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {

    let a = getRandomInt(2, 10);
    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10);
    let d = getRandomInt(2, 10);

    const math = `\\frac{\\log_{${a}}{${c}}+\\log_{${a}}${b}}{${d}\\log_{${a}}{${c*b}}}`
    const answer = `\\frac{1}{${d}}`
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