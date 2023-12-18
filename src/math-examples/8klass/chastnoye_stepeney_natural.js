import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-20, -10);  
    let b = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}^{${a}+${b}}`
    const answer = `\\frac{1}{${variable}^{${-1*(a+b)}}}`
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
    let b = getRandomInt(-20, -5);
    let c = getRandomInt(-6, -2);;
    let variable = generateVariableName()
    
    const math = `${variable}^{${a}${b}${c}}`
    const answer = `\\frac{1}{${variable}^{${-1*(a+b+c)}}}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let b = getRandomInt(-20, -10);
    let a = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${variable}^{${a}}:${variable}^{${b}}`
    const answer = `${variable}^{${a-b}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let b = getRandomInt(-5, -1);
    let a = getRandomInt(-20, -10);
    let variable = generateVariableName()

    const math = `${variable}^{${a}}:${variable}^{${b}}`
    const answer = `\\frac{1}{${variable}^{${-1*(a-b)}}}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
  let b = getRandomInt(-5, -2);
  let a = getRandomInt(2, 5);
  let c = getRandomInt(-5, -2);
  let variable = generateVariableName()

  const math = `${variable}^{${a}}:${variable}^{${b}}:${variable}^{${c}}`
  const answer = `${variable}^{${a-b-c}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let b = getRandomInt(2, 5);
  let a = getRandomInt(10, 20);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{${b}}:\\left(\\frac {${variable1}}{${variable2}}\\right)^{${a}}`
  const answer = `\\left(\\frac{${variable2}}{${variable1}}\\right)^{${a-b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let b = getRandomInt(-20, -10);
  let a = getRandomInt(2, 5);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `(${variable1}${variable2})^{${a}}:(${variable1}${variable2})^{${b}}`
  const answer = `(${variable1}${variable2})^{${a-b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let b = getRandomInt(10, 20);
  let a = getRandomInt(2, 5);
  let variable = generateVariableName()
  let o ="-"
  if ((a-b)%2===0){o=""}
  const math = `(-${variable})^{${a}}:(-${variable})^{${b}}`
  const answer = `${o}\\frac{1}{${variable}^{${b-a}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let b = getRandomInt(-20, -10);
  let a = getRandomInt(2, 5);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `(${variable1}-${variable2})^{${a}}:(${variable1}-${variable2})^{${b}}`
  const answer = `(${variable1}-${variable2})^{${a-b}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let b = getRandomInt(15, 30);
  let a = getRandomInt(2, 10);
  let c = getRandomInt(-30, 30, 0);
  if(c > 0) {c = '+'+c};

  let variable = generateVariableName()

  const math = `(${variable}${c})^{${a}}:(${variable}${c})^{${b}}`
  const answer = `\\frac{1}{(${variable}${c})^{${b-a}}}`
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