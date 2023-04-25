import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `(${variable}^{${a}})^{${b}}`
    const answer = `${variable}^{${a*b}}` 
    const condition = ``
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(10, 20);
    let variable = generateVariableName()
    
    const math = `(${variable}^{${a}})^{${b}}`
    const answer = `${variable}^{${a*b}}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(2, 20);
    let variable = generateVariableName()

    const math = `(${variable}^{${a}})^{10}`
    const answer = `${variable}^{${a*10}}`;
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(21, 50);
    let variable = generateVariableName()

    const math = `(${variable}^{${a}})^{10}`
    const answer = `${variable}^{${a*10}}`
    const condition = ``

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
  let b = getRandomInt(2, 5);
  let a = getRandomInt(2, 10);
  let c = '-';
  let variable = generateVariableName()

  const math = `(${c}${variable}^{${b}})^{${a}}`
  if ((a*b)%2==0) c = "";
  const answer = `${c}${variable}^{${b*a}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let b = getRandomInt(2, 10);
  let a = getRandomInt(5, 10);
  let c = '-';
  let variable = generateVariableName()

  const math = `(${c}${variable}^{${b}})^{${a}}`
  if ((a*b)%2==0) c = "";
  const answer = `${c}${variable}^{${b*a}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let b = getRandomInt(2, 5);
  let a = getRandomInt(2, 10);

  const math = `(${b}^{${a}})^{${b}}`
  const answer = `${b}^{${a*b}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let b = getRandomInt(2, 5);
  let a = getRandomInt(2, 5);
  let c = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `((${variable}^{${b}})^{${a}})^{${c}}`
  const answer = `${variable}^{${b*a*c}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let b = getRandomInt(2, 5);
  let a = getRandomInt(2, 5);
  let c = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `((${variable}^{${b}})^{${a}})^{${c}}`
  const answer = `${variable}^{${b*a*c}}`
  const condition = ``

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);
  let c = getRandomInt(2, 5);
  let d = '-';
  let variable = generateVariableName()

  const math = `((${d}${variable}^{${b}})^{${a}})^{${c}}`
  if ((a*c)%2==0) d = "";
  const answer = `${d}${variable}^{${a*b*c}}`
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