import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(1, 5); 
    let b = getRandomInt(1, 5);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}_{1}+${variable}_{2}=${a+b}\\\\${variable}_{1}${variable}_{2}=${a*b}\\end{array}\\right.`
    const answer = `${variable}_{1}=${a}, ${variable}_{2}=${b}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(-5, -1); 
    let b = getRandomInt(-5, -1);  
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}_{1}+${variable}_{2}=${a+b}\\\\${variable}_{1}${variable}_{2}=${a*b}\\end{array}\\right.`
    const answer = `${variable}_{1}=${a}, ${variable}_{2}=${b}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(1, 5); 
    let b = getRandomInt(-5, -1);
    if (a===-1*b) {b+=1}
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}_{1}+${variable}_{2}=${a+b}\\\\${variable}_{1}${variable}_{2}=${a*b}\\end{array}\\right.`
    const answer = `${variable}_{1}=${a}, ${variable}_{2}=${b}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>  {
    let a = getRandomInt(-5, -1); 
    let b = getRandomInt(1, 5);
    if (a===-1*b) {b+=1}
    let variable = generateVariableName()

    const math = `\\left\\{\\begin{array}{l}${variable}_{1}+${variable}_{2}=${a+b}\\\\${variable}_{1}${variable}_{2}=${a*b}\\end{array}\\right.`
    const answer = `${variable}_{1}=${a}, ${variable}_{2}=${b}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let x1 = getRandomInt(1, 5);
    let x2 = getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${variable}^2-${x1+x2}${variable}+${x1*x2}=0`
    const answer = `${variable}_{1}=${x1}, ${variable}_{2}=${x2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>{
    let x1 = getRandomInt(-5, -1);
    let x2 = getRandomInt(-5, -1);
    let variable = generateVariableName()

    const math = `${variable}^2+${-1*(x1+x2)}${variable}+${x1*x2}=0`
    const answer = `${variable}_{1}=${x1}, ${variable}_{2}=${x2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let x1 = getRandomInt(-9, -6);
    let x2 = getRandomInt(-5, -1);
    let variable = generateVariableName()

    const math = `${variable}^2+${-1*(x1+x2)}${variable}+${x1*x2}=0`
    const answer = `${variable}_{1}=${x1}, ${variable}_{2}=${x2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let x1 = getRandomInt(-5, -1);
    let x2 = getRandomInt(-9, -6);
    let variable = generateVariableName()

    const math = `${variable}^2+${-1*(x1+x2)}${variable}+${x1*x2}=0`
    const answer = `${variable}_{1}=${x1}, ${variable}_{2}=${x2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>    {
    let x1 = getRandomInt(6, 9);
    let x2 = getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `${variable}^2-${x1+x2}${variable}+${x1*x2}=0`
    const answer = `${variable}_{1}=${x1}, ${variable}_{2}=${x2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>   {
    let x1 = getRandomInt(1, 5);
    let x2 = getRandomInt(6, 9);
    let variable = generateVariableName()

    const math = `${variable}^2-${x1+x2}${variable}+${x1*x2}=0`
    const answer = `${variable}_{1}=${x1}, ${variable}_{2}=${x2}` 
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