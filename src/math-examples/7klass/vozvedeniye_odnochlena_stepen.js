import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `(2${variable1}^{${c}})^{${b}}`
    const answer = `${2**b}${variable1}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}^{${a}}${variable2}^{${b}})^{${c}}`
    const answer = `${variable1}^{${a*c}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}^{${a}}${variable2}^{${b}})^{${c}}`
    const answer = `${variable1}^{${a*c}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample4 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 10);
    let d = "";
    if (c%2!==0) {d="-"};
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(-${variable1}^{${a}}${variable2}^{${b}})^{${c}}`
    const answer = `${d}${variable1}^{${a*c}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 10);
    let d = "";
    if (c%2!==0) {d="-"};
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(-${variable1}^{${a}}${variable2}^{${b}})^{${c}}`
    const answer = `${d}${variable1}^{${a*c}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 3);
    let d = getRandomInt(2, 3);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${d}${variable1}^{${a}}${variable2}^{${b}})^{${c}}`
    const answer = `${d**c}${variable1}^{${a*c}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 3);
    let d = getRandomInt(-3, -2);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${d}${variable1}^{${a}}${variable2}^{${b}})^{${c}}`
    const answer = `${(d)**c}${variable1}^{${a*c}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 3);
    let d = getRandomInt(2, 3);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${d}${variable1}^{${a}}${variable2}^{${b}}h)^{${c}}`
    const answer = `${d**c}${variable1}^{${a*c}}${variable2}^{${b*c}}h^{${c}}`       
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
    let c = getRandomInt(2, 3);
    let d = getRandomInt(-3, -2);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${d}${variable1}^{${a}}h^2${variable2}^{${b}})^{${c}}`
    const answer = `${(d)**c}${variable1}^{${a*c}}h^{${c*2}}${variable2}^{${b*c}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }
const createExample10 = () =>  {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 3);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(\\frac{1}{${b}}${variable1}^{${c}}${variable2})^{${3}}`
    const answer = `\\frac{1}{${b**d}}${variable1}^{${c*d}}${variable2}^{${d}}`       
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