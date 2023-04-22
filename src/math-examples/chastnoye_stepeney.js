import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(10, 20);  
    let b = getRandomInt(-8, -2);
    let variable = generateVariableName()

    const math = `${variable}^{${a}${b}}`
    const answer = `${variable}^{${a+b}}`
    
    
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(5, 20);
    let b = getRandomInt(2, 20);
    let c = getRandomInt(-6, -2);;
    let variable = generateVariableName()
    
    const math = `${variable}^{${a}+${b}${c}}`
    const answer = `${variable}^{${a+b+c}}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let b = getRandomInt(2, 20);
    let a = b*getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}^{${a}}:${variable}^{${b}}`
    const answer = `${variable}^{${a-b}}`;
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let b = getRandomInt(2, 20);
    let a = b*getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}^{${a}}:${variable}^{${b}}`
    const answer = `${variable}^{${a-b}}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
  let b = getRandomInt(20, 30);
  let a = getRandomInt(2, 10);
  let c = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `${variable}^{${b}}:${variable}^{${a}}:${variable}^{${c}}`
  const answer = `${variable}^{${b-a-c}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let b = getRandomInt(2, 20);
  let a = b*getRandomInt(1, 5);
  let variable = generateVariableName()

  const math = `\\left(\\frac{${variable}}{k}\\right)^{${a}}:\\left(\\frac {${variable}}{k}\\right)^{${b}}`
  const answer = `\\left(\\frac{${variable}}{k}\\right)^{${a-b}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let b = getRandomInt(2, 20);
  let a = b*getRandomInt(1, 5);
  let variable = generateVariableName()

  const math = `(${variable}m)^{${a}}:(${variable}m)^{${b}}`
  const answer = `(${variable}m)^{${a-b}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let b = getRandomInt(2, 20);
  let a = b*getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `(-${variable})^{${a}}:(-${variable})^{${b}}`
  const answer = `(-${variable})^{${a-b}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let b = getRandomInt(2, 20);
  let a = b*getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `(${variable}-k)^{${a}}:(${variable}-k)^{${b}}`
  const answer = `(${variable}-k)^{${a-b}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let b = getRandomInt(2, 6);
  let a = getRandomInt(7, 20);
  let c = getRandomInt(-30, 30, 0);
  if(c > 0) c = '+'+c;

  let variable = generateVariableName()

  const math = `(${variable}${c})^{${a}}:(${variable}${c})^{${b}}`
  const answer = `(${variable}${c})^{${a-b}}`
  const condition = ``

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