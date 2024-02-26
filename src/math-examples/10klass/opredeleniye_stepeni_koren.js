import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let variable = generateVariableName()

    let a = getRandomInt(2, 5)*2-1;  

    const math = `${variable}^{\\frac{${a}}{2}}`
    const answer = `\\sqrt{${variable}^{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let variable = generateVariableName()

    let a = getRandomInt(2, 5)*2-1;  
    let b = getRandomInt(2, 5)*2;  

    const math = `${variable}^{\\frac{${b}}{${a}}}`
    const answer = `\\sqrt[${a}]{${variable}^{${b}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let variable = generateVariableName()

    let a = getRandomInt(3, 11);  

    const math = `${variable}^{\\frac{1}{${a}}}`
    const answer = `\\sqrt[${a}]{${variable}}` ;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let variable = generateVariableName()

    let a = getRandomInt(3, 11);  

    const math = `${variable}^{-\\frac{1}{${a}}}`
    const answer = `\\sqrt[${a}]{${variable}^{-1}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let variable = generateVariableName()

    let a = getRandomInt(-5, -2)*2+1;  

    const math = `${variable}^{-\\frac{${a*(-1)}}{2}}`
    const answer = `\\sqrt{${variable}^{${a}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let variable = generateVariableName()

    let a = getRandomInt(2, 5)*2-1;  
    let b = getRandomInt(-5, -2)*2;  

    const math = `${variable}^{-\\frac{${b*(-1)}}{${a}}}`
    const answer = `\\sqrt[${a}]{${variable}^{${b}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>
{
    let variable = generateVariableName()

    let a = getRandomInt(3, 11); 
    let b = getRandomInt(3, 20);   

    const math = `(${variable}+${b})^{\\frac{1}{${a}}}`
    const answer = `\\sqrt[${a}]{${variable}+${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(8, 15);
    let b = getRandomInt(2, 7);
    let variable = generateVariableName()  

    const math = `${variable}^{-\\frac{${b}}{${a}}}`
    const answer = `\\frac{1}{\\sqrt[${a}]{${variable}^{${b}}}}`;
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
    let b = getRandomInt(16, 30);
    let c = getRandomInt(2, 7);    

    const math = `\\left(\\frac{${a}}{${b}}\\right)^{-\\frac{${c}}{${a}}}`
    const answer = `\\sqrt[${a}]{\\left(\\frac{${a}}{${b}}\\right)^{-${c}}}`;
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(3, 15);
    let b = getRandomInt(3, 15);
    let c = getRandomInt(3, 15);   
    let variable = generateVariableName()  

    const math = `(${b}-${variable})^{\\frac{${c}}{${a}}}`
    const answer = `\\sqrt[${a}]{(${b}-${variable})^{${c}}}`;
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