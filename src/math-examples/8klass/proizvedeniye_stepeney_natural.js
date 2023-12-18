import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);  
    let b = getRandomInt(12, 30);
    let variable = generateVariableName()

    const math = `${variable}^{${a}-${b}}`
    const answer = `\\frac{1}{${variable}^{${b-a}}}`
        
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
    let b = getRandomInt(-20, -6);
    let c = getRandomInt(-20, -6);;
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
    let b = getRandomInt(2, 10);
    let a = getRandomInt(-20, -12);
    let variable = generateVariableName()

    const math = `${variable}^{${a}}${variable}^{${b}}`
    const answer = `\\frac{1}{${variable}^{${-1*(a+b)}}}`;
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
    let b = getRandomInt(-20, -12);
    let variable = generateVariableName()

    const math = `${variable}^{${a}}${variable}^{${b}}`
    const answer = `\\frac{1}{${variable}^{${-1*(a+b)}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
  let a = getRandomInt(2, 8);
  let b = getRandomInt(-10, -5);
  let c = getRandomInt(-10, -5);
  let variable = generateVariableName()

  const math = `${variable}^{${b}}${variable}^{${a}}${variable}^{${c}}`
  const answer = `\\frac{1}{${variable}^{${-1*(b+a+c)}}}`
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
  let b = getRandomInt(-20, -12);
  let variable = generateVariableName()

  const math = `\\left(\\frac{${variable}}{k}\\right)^{${a}}\\left(\\frac {${variable}}{k}\\right)^{${b}}`
  const answer = `\\frac{k^{${-1*(a+b)}}}{${variable}^{${-1*(a+b)}}}`
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
  let a = getRandomInt(-20, -12);
  let variable = generateVariableName()

  const math = `(${variable}m)^{${a}}(${variable}m)^{${b}}`
  const answer = `\\frac{1}{(${variable}m)^{${-1*(a+b)}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let b = getRandomInt(-5, -1)*2;
  let a = getRandomInt(-5, -1)*2;
  let variable = generateVariableName()

  const math = `(-${variable})^{${a}}(-${variable})^{${b}}`
  const answer = `\\frac{1}{${variable}^{${-1*(a+b)}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let b = getRandomInt(-20, -12);
  let a = getRandomInt(2, 10);
  let variable = generateVariableName()

  const math = `(${variable}-k)^{${a}}(${variable}-k)^{${b}}`
  const answer = `\\frac{1}{(${variable}-k)^{${-1*(a+b)}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let b = getRandomInt(-10, -2);
  let a = getRandomInt(-10, -2);
  let c = getRandomInt(-30, 30, 0);
  if(c > 0) c = '+'+c;

  let variable = generateVariableName()

  const math = `(${variable}${c})^{${a}}(${variable}${c})^{${b}}`
  const answer = `\\frac{1}{(${variable}${c})^{${-1*(a+b)}}}`
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