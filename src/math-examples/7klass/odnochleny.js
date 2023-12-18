import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(20, 40);
    let variable1 = generateVariableName()

    const math = `${b}${variable1}${variable1}^{${a}}`
    const answer = `${b}${variable1}^{${a+1}}`       
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
    let b = getRandomInt(-20, -2);
    let variable1 = generateVariableName()

    const math = `${b}${variable1}${variable1}^{${a}}${variable1}^{0}`
    const answer = `${b}${variable1}^{${a+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `${b}${variable1}^{${a}}${variable1}^{${b}}${c}`
    const answer = `${b*c}${variable1}^{${a+b}}`       
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
    let b = getRandomInt(-10, -2);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `${b}${variable1}^{${a}}${variable1}^{${-1*b}}${c}`
    const answer = `${b*c}${variable1}^{${a+b*(-1)}}`       
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
    let b = getRandomInt(-10, -2);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `${variable1}^{${a}}(${b})${variable1}^{${-1*b}}${c}`
    const answer = `${b*c}${variable1}^{${a+b*(-1)}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(-10, -2);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `${variable1}^{${a}}(${b}${variable1}^{${-1*b}})${c}`
    const answer = `${b*c}${variable1}^{${a+b*(-1)}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `\\frac{1}{${b}}${variable1}^{${d}}(-\\frac{1}{${c}}${variable1})`
    const answer = `-\\frac{1}{${b*c}}${variable1}^{${d+1}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let variable1 = generateVariableName()

    const math = `(-\\frac{1}{${c}}${variable1})\\frac{1}{${b}}${variable1}^{${d}}${variable1}`
    const answer = `-\\frac{1}{${b*c}}${variable1}^{${d+2}}`       
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}^{${a}}${b}${variable2}^{${c}}${variable1}${d}${variable2}`
    const answer = `${b*d}${variable1}^{${a+1}}${variable2}^{${c+1}}`       
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
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}^{${a}}${b}${variable2}^{${c}}${variable1}(-${d}${variable2})`
    const answer = `-${b*d}${variable1}^{${a+1}}${variable2}^{${c+1}}`       
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