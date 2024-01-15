import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1, 10);  
    let b = getRandomInt(1, 10);
    let variable = generateVariableName()

    const math = `${variable}+${a}`
    const answer = `${b+a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(11, 21);  
    let b = getRandomInt(11, 21);
    let variable = generateVariableName()

    const math = `${variable}+${a}`
    const answer = `${b+a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>{
    let a = getRandomInt(22, 32);  
    let b = getRandomInt(22, 32);
    let variable = generateVariableName()

    const math = `${a}+${variable}`
    const answer = `${b+a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>{
    let a = 10*getRandomInt(1, 10);  
    let b = getRandomInt(1, 10);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${a-c}+${variable}+${c}`
    const answer = `${b+a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(10, 49);  
    let b = getRandomInt(50, 99);
    let variable = generateVariableName()

    const math = `${variable}-${a}`
    const answer = `${b - a}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(30, 50);  
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let variable = generateVariableName()

    const math = `${a}-${c}${variable}`
    const answer = `${a-b*c}`;
    const condition = `${variable}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
  let a = getRandomInt(2, 20);  
  let b = getRandomInt(2, 20);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()
  
  const math = `${variable1}+${variable2}`
  const answer = `${a+b}`
  const condition = `${variable1}=${a}, ${variable2}=${b}`

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {
    let a = getRandomInt(21, 50);  
    let b = getRandomInt(21, 50);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    
    const math = `${variable1}+${variable2}`
    const answer = `${a+b}`
    const condition = `${variable1}=${a}, ${variable2}=${b}`
  
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
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    
    const math = `${variable1}+${variable2}+${c}`
    const answer = `${a+b+c}`
    const condition = `${variable1}=${a}, ${variable2}=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(11, 20);  
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    
    const math = `${variable1}-${c}+${variable2}`
    const answer = `${a-c+b}`
    const condition = `${variable1}=${a}, ${variable2}=${b}`
  
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