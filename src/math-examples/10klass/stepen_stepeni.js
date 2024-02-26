import { getRandomInt, generateVariableName, shuffleSingle, NOD } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(2, 5);
    let c = a*b; 

    let variable = generateVariableName()

    const math = `(${variable}^{\\frac{1}{${c}}})^{${b}}`
    const answer = `${variable}^{\\frac{1}{${a}}}` 
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
  let b = getRandomInt(-5, -2);
  let c = a*b*(-1); 

  let variable = generateVariableName()

  const math = `(${variable}^{\\frac{1}{${c}}})^{${b}}`
  const answer = `${variable}^{-\\frac{1}{${a}}}` 
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

  let variable = generateVariableName()

  const math = `(${variable}^{\\frac{1}{${a}}})^{\\frac{1}{${b}}}`
  const answer = `${variable}^{\\frac{1}{${a*b}}}` 
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
  let c = getRandomInt(2, 5);

  let variable = generateVariableName()

  const math = `((${variable}^{\\frac{1}{${a}}})^{\\frac{1}{${b}}})^{\\frac{1}{${c}}}`
  const answer = `${variable}^{\\frac{1}{${a*b*c}}}` 
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
  let c = getRandomInt(2, 5);
  let d = getRandomInt(2, 5);
  let t = getRandomInt(2, 3);

  let variable = generateVariableName()

  const math = `((${variable}^{\\frac{${t}}{${a}}})^{\\frac{${d}}{${b}}})^{-\\frac{1}{${c}}}`
  const answer = `${variable}^{-\\frac{${t*d}}{${a*b*c}}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(2, 5);  
  let b = getRandomInt(2, 5);

  let variable = generateVariableName()

  const math = `(${variable}^{-\\frac{1}{${a}}})^{-\\frac{1}{${b}}}`
  const answer = `${variable}^{\\frac{1}{${a*b}}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let a = getRandomInt(10, 24, 16);  

  let variable = generateVariableName()

  const math = `(${variable}^{\\sqrt{${a}}})^{\\sqrt{${a}}}`
  const answer = `${variable}^{${a}}` 
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
  let b = getRandomInt(2, 5);
  let c = a*b; 

  let variable = generateVariableName()

  const math = `(\\sqrt[${c}]{${variable}})^{${b}}`
  const answer = `${variable}^{\\frac{1}{${a}}}` 
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
  let b = getRandomInt(6, 11); 
  let c = getRandomInt(2, 5); 
  let d = getRandomInt(6, 11);
  let n = NOD (a*c, b*d); 

  let variable = generateVariableName()

  const math = `(${variable}^{\\frac{${a}}{${b}}})^{\\frac{${c}}{${d}}}`
  const answer = `${variable}^{\\frac{${a*c/n}}{${b*d/n}}}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(2, 5);
  let b = getRandomInt(6, 11); 
  let c = getRandomInt(2, 5); 
  let d = getRandomInt(6, 11); 
  let n = NOD (a*c, b*d); 

  let variable = generateVariableName()

  const math = `(${variable}^{-\\frac{${a}}{${b}}})^{\\frac{${c}}{${d}}}`
  const answer = `${variable}^{-\\frac{${a*c/n}}{${b*d/n}}}` 
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