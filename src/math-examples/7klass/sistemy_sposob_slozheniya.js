import { getRandomInt, generateVariableNameOne, generateVariableNameTwo, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = 2*getRandomInt(-10, 10, 0); 
    let b = 2*getRandomInt(-10, 10, 0);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${variable1}+${variable2}=${a}\\\\${variable1}-${variable2}=${b}\\end{array}\\right.`
    const answer = `${variable1}={${(a+b)/2}}, ${variable2}={${(a+b)/2-b}}`    
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = 2*getRandomInt(-20, 20, 0); 
    let b = 2*getRandomInt(-20, 20, 0);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${variable1}+${variable2}=${a}\\\\${variable1}-${variable2}=${b}\\end{array}\\right.`
    const answer = `${variable1}={${(a+b)/2}}, ${variable2}={${(a+b)/2-b}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = 2*getRandomInt(-10, 10, 0); 
    let b = 2*getRandomInt(-10, 10, 0);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${variable2}-${variable1}=${a}\\\\${variable1}+${variable2}=${b}\\end{array}\\right.`
    const answer = `${variable2}={${(a+b)/2}}, ${variable1}={${b-(a+b)/2}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = 2*getRandomInt(-20, 20, 0); 
    let b = 2*getRandomInt(-20, 20, 0);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${variable2}-${variable1}=${a}\\\\${variable1}+${variable2}=${b}\\end{array}\\right.`
    const answer = `${variable2}={${(a+b)/2}}, ${variable1}={${b-(a+b)/2}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(2, 10, 0); 
    let t = getRandomInt(-10, 10, 0); 
    let b = t*(a+1);  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${a}${variable1}+${variable2}=${b}\\\\${variable1}-${variable2}=0\\end{array}\\right.`
    const answer = `${variable1}={${b/(a+1)}}, ${variable2}={${b/(a+1)}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(-10, 10, 0); 
    let t = getRandomInt(2, 6); 
    let e = getRandomInt(2, 6); 
    let b = t*e;  
    let c = (a+t)*e;  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${a}${variable1}+${b}${variable2}=${c}\\\\${variable1}-${e}${variable2}=0\\end{array}\\right.`
    const answer = `${variable1}={${e}}, ${variable2}={${1}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(-10, 10, 0); 
    let t = getRandomInt(2, 10); 
    let e = getRandomInt(2, 6); 
    let b = (t+a)*e;  
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${variable1}-${variable2}=0\\\\${a}${variable1}+${t}${variable2}=${b}\\end{array}\\right.`
    const answer = `${variable1}={${e}}, ${variable2}={${e}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(-10, 10, 0); 
    let t = getRandomInt(-20, 20, 0); 
    let e = -1*a; 
    let b = a*getRandomInt(-5, 5, 0);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${a}${variable1}=${b}\\\\${e}${variable1}+${variable2}=${t}\\end{array}\\right.`
    const answer = `${variable1}={${b/a}}, ${variable2}={${t-e*b/a}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(-10, 10, 0); 
    let t = getRandomInt(2, 10, 0); 
    let e = getRandomInt(2, 6);
    let b = (t+a)*e;
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${a}${variable1}+${t}${variable2}=${b}\\\\${variable1}-${variable2}=0\\end{array}\\right.`
    const answer = `${variable1}={${e}}, ${variable2}={${e}}`   
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(-10, 10, 0); 
    let t = getRandomInt(-20, 20, 0); 
    let e = -1*a;
    let b = a*getRandomInt(-5, 5, 0);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\left\\{\\begin{array}{l}${e}${variable1}+${variable2}=${t}\\\\${a}${variable1}=${b}\\end{array}\\right.`
    const answer = `${variable1}={${b/a}}, ${variable2}={${t-e*b/a}}`   
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