import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

    let a = getRandomInt(2, 10)*2-1;  
    let b = getRandomInt(2, 10)*2;

    const math = `0^{\\frac{${b}}{${a}}}`
    const answer = `0`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {

    let a = getRandomInt(2, 10)*2-1;  
    let b = getRandomInt(2, 10)*2;

    const math = `1^{\\frac{${b}}{${a}}}`
    const answer = `1`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {

    let a = getRandomInt(2, 10)*2-1;  
    let b = getRandomInt(2, 10)*2;

    const math = `(-1)^{\\frac{${b}}{${a}}}`
    const answer = `1`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(2, 4)**3; 
    let c = Math.ceil(a**(1/3))  

    const math = `${a}^{\\frac{1}{3}}`
    const answer = `${c}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(5, 7)**3; 
    let c = Math.ceil(a**(1/3)) 

    const math = `(-${a})^{\\frac{1}{3}}`
    const answer = `-${c}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = (getRandomInt(2, 4)**3)*1000;  
    let c = Math.ceil(Math.pow(a, 1/3));

    const math = `${a}^{\\frac{1}{3}}`
    const answer = `${c}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let a = getRandomInt(2, 3)**4;  

    const math = `${a}^{\\frac{1}{4}}`
    const answer = `${a**0.25}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {
    let a = getRandomInt(-5, 5, 0);  

    const math = `${(a*a*a)/1000}^{\\frac{1}{3}}`
    const answer = `${a/10}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(4, 5);  
    let b = getRandomInt(2, 3); 

    const math = `\\left ( {\\frac{${b*b*b}}{${a*a*a}}} \\right)^{\\frac{1}{3}}`
    const answer = `\\frac{${b}}{${a}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>{
    let a = getRandomInt(4, 5);  
    let b = getRandomInt(2, 3); 

    const math = `\\left ( {\\frac{${b*b*b}}{${a*a*a}}} \\right)^{\\frac{2}{3}}`
    const answer = `\\frac{${b*b}}{${a*a}}`;
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