import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 8, 4);
    let b = getRandomInt(2, 30);

    let variable = generateVariableName()

    const math = `${variable}^{\\sqrt{${a}}}${variable}^{${b}-\\sqrt{${a}}}`
    const answer = `${variable}^{${b}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample2 = () => {
    let a = getRandomInt(2, 8, 4);
    let b = getRandomInt(2, 30);

    let variable = generateVariableName()

    const math = `${variable}^{\\sqrt{${a}}-${b}}${variable}^{\\sqrt{${a}}+${b}}`
    const answer = `${variable}^{2\\sqrt{${a}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let a = getRandomInt(2, 8, 4);
    let b = getRandomInt(2, 30);

    let variable = generateVariableName()

    const math = `${variable}^{\\sqrt{${a}}+${b}}:${variable}^{\\sqrt{${a}}-${b}}`
    const answer = `${variable}^{{${2*b}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(2, 8, 4);
    let b = getRandomInt(9, 30);

    let variable = generateVariableName()

    const math = `\\left(${variable}^{\\sqrt{${a}}}\\right)^{\\sqrt{${a}}}:${variable}^{${b}}`
    const answer = `\\frac{1}{${variable}^{${(a-b)*(-1)}}}`;
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
    let b = getRandomInt(2, 5);
    let d = getRandomInt(26, 49);
    let variable = generateVariableName()
  
    const math = `${variable}^{\\frac{${a}}{${d}}}\\sqrt[${d}]{${variable}^{${b}}}`
    const answer = `${variable}^{\\frac{${a+b}}{${d}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
  let b = getRandomInt(2, 10);
  let a = getRandomInt(2, 10);
  let c = getRandomInt(21, 49);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{\\frac{${a}}{${c}}} \\left(\\frac{${variable2}}{${variable1}}\\right)^{-\\frac{${b}}{${c}}}`
  const answer = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{\\frac{${a+b}}{${c}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let b = getRandomInt(2, 10);
  let a = getRandomInt(2, 10);
  let c = getRandomInt(21, 49);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `(${variable1}${variable2})^{\\frac{${a}}{${c}}}${variable1}^{\\frac{${b}}{${c}}}`
  const answer = `${variable1}^{\\frac{${a+b}}{${c}}}${variable2}^{\\frac{${a}}{${c}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
    let a = getRandomInt(6, 11);
    let d = getRandomInt(6, 11);
    let c = getRandomInt(2, 10);
    let b = getRandomInt(26, 49);

    let variable = generateVariableName()

    const math = `\\frac{${variable}^{\\frac{{${a}}}{${b}}}${variable}^{\\frac{${d}}{${b}}}}{${variable}^{\\frac{${c}}{${b}}}}`
    const answer = `${variable}^{\\frac{${a+d-c}}{${b}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(3, 11);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\frac{${variable1}^{\\frac{1}{${a}}}-${variable2}^{\\frac{1}{${a}}}}{\\sqrt[${a}]{${variable1}}-\\sqrt[${a}]{${variable2}}}`
    const answer = `1`;
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
  let c = getRandomInt(2, 10);

  let variable = generateVariableName()

  const math = `(${variable}+${c})^{-\\frac{1}{${a}}}(${variable}^{2}+${c*2}${variable}+${c*c})^{\\frac{1}{${a}}}`
  const answer = `(${variable}+${c})^{\\frac{1}{${a}}}`
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