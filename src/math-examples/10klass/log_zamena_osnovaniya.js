import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 6);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{\\log_{${c}}${2**a}}{\\log_{${c}}{2}}`
    const answer = `${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 6);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{\\log_{${c}}{\\frac{1}{${2**a}}}}{\\log_{${c}}{2}}`
    const answer = `-${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 6);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{\\log_{${c}}{\\sqrt{${a}}}}{\\log_{${c}}{${a}}}`
    const answer = `\\frac{1}{2}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {

    let a = getRandomInt(11, 20);
    let b = getRandomInt(2, 4);

    const math = `\\frac{\\log_{${a}}{${3**b}}-\\log_{${a}}3}{\\log_{${a}}{3}}`
    const answer = `${b-1}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {

    let a = getRandomInt(11, 20);
    let b = getRandomInt(2, 4);

    const math = `\\frac{\\log_{${a}}{${2**b}}+\\log_{${a}}2}{\\log_{${a}}{2}}`
    const answer = `${b+1}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {

    let a = getRandomInt(11, 20);
    let b = getRandomInt(2, 10);

    const math = `\\log_{${a}}{${b}}-\\frac{1}{\\log_{${b}}{${a}}} `
    const answer = `0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {

    let a = getRandomInt(21, 40);
    let b = getRandomInt(11, 20);
    let d = getRandomInt(2, 20);

    const math = `\\log_{${a}}{${b}^{${d}}}-\\frac{${d}}{\\log_{${b}}{${a}}} `
    const answer = `0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {

    let a = getRandomInt(11, 20);
    let b = getRandomInt(2, 10);

    const math = `\\log_{${a}}{${b}} \\cdot \\log_{${b}}{${a}}`
    const answer = `1`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {

    let a = getRandomInt(11, 20);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 5);
    let d = getRandomInt(2, 5);

    const math = `\\log_{${a}}{${b}^{${c}}} \\cdot \\log_{${b}}{${a}^{${d}}}`
    const answer = `${c*d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 4);
    let c = getRandomInt(11, 20);  

    const math = `\\frac{\\log_{${c}}${4**a}}{\\log_{${c}}{4}}`
    const answer = `${a}`
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