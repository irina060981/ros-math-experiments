import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(3, 15);
    let b = getRandomInt(3, 15);    

    const math = `\\sqrt[${a}]{${b}}`
    const answer = `${b}^{\\frac{1}{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
    let a = getRandomInt(3, 15);
    let b = getRandomInt(3, 15);
    let c = getRandomInt(3, 15);    

    const math = `\\sqrt[${a}]{${b}^{${c}}}`
    const answer = `${b}^{\\frac{${c}}{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(3, 15);
    let b = getRandomInt(3, 15);
    let c = getRandomInt(-15, -3);    

    const math = `\\sqrt[${a}]{${b}^{${c}}}`
    const answer = `${b}^{-\\frac{${-1*c}}{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}
const createExample4 = () => {
    let a = getRandomInt(3, 15);
    let b = getRandomInt(16, 30);
  

    const math = `\\sqrt[${a}]{\\frac{${a}}{${b}}}`
    const answer = `\\left(\\frac{${a}}{${b}}\\right)^{\\frac{1}{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(8, 15);
    let b = getRandomInt(15, 30);
    let c = getRandomInt(2, 7);    

    const math = `\\sqrt[${a}]{\\left(\\frac{${a}}{${b}}\\right)^{${c}}}`
    const answer = `\\left(\\frac{${a}}{${b}}\\right)^{\\frac{${c}}{${a}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(8, 15);
    let b = getRandomInt(16, 30);
    let c = getRandomInt(2, 7);    

    const math = `\\sqrt[${a}]{\\left(\\frac{${a}}{${b}}\\right)^{-${c}}}`
    const answer = `\\left(\\frac{${a}}{${b}}\\right)^{-\\frac{${c}}{${a}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>{
    let a = getRandomInt(3, 15);
    let b = getRandomInt(3, 15); 
    let variable = generateVariableName()   

    const math = `\\sqrt[${a}]{${variable}+${b}}`
    const answer = `(${variable}+${b})^{\\frac{1}{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(3, 15);
    let b = getRandomInt(3, 15);
    let c = getRandomInt(3, 15);   
    let variable = generateVariableName()  

    const math = `\\sqrt[${a}]{(${b}-${variable})^{${c}}}`
    const answer = `(${b}-${variable})^{\\frac{${c}}{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(8, 15);
    let variable = generateVariableName()  

    const math = `\\frac{1}{\\sqrt[${a}]{${variable}}}`
    const answer = `${variable}^{-\\frac{1}{${a}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample10 = () => {
    let a = getRandomInt(8, 15);
    let b = getRandomInt(2, 7);
    let variable = generateVariableName()  

    const math = `\\frac{1}{\\sqrt[${a}]{${variable}^{${b}}}}`
    const answer = `${variable}^{-\\frac{${b}}{${a}}}`;
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