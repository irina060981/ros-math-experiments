import { getRandomInt, repeatStr, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

    let a = getRandomInt(3, 5);
    let b = repeatStr(`10\\cdot`, `${a-2}`)+`10`
  
    const math = `\\sqrt[${a}]{${b}} \\cdot \\sqrt[${a}]{10}`
    const answer = `10`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
  let a = (getRandomInt(2, 4)**3)  
  let c = Math.ceil(Math.pow(a, 1/3));

  const math = `\\sqrt[3]{${a}\\cdot 1000}`
  const answer = `${c*10}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(-5, 5, 0);  

  const math = `\\sqrt[3]{${(a*a*a)}:1000}`
  const answer = `${a/10}`;
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

    let b = getRandomInt(5, 7)**3; 
    let d = Math.ceil(b**(1/3)) 

    const math = `\\sqrt[3]{${a}\\cdot ${b}}`
    const answer = `${c*d}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
  let a = getRandomInt(2, 4)**3; 
  let c = Math.ceil(a**(1/3))  

  let b = getRandomInt(5, 7)**3; 
  let d = Math.ceil(b**(1/3)) 

  const math = `\\sqrt[3]{-${a}\\cdot ${b}}`
  const answer = `-${c*d}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
    let a = getRandomInt(2, 4)**2;  
    let c = Math.ceil(Math.pow(a*a, 1/4));

    const math = `\\sqrt[4]{${a}}\\cdot \\sqrt[4]{${a}}`
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

    const math = `\\sqrt[4]{${a}\\cdot 216}`
    const answer = `${(a**0.25)*4}`;
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

    const math = `\\sqrt[3]{${(a*a*a)} \\cdot 0,001}`
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

    const math = `\\sqrt[3]{\\frac{${b*b*b}}{${a*a*a}}}`
    const answer = `\\frac{${b}}{${a}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
  let a = getRandomInt(2, 5);  

  const math = `\\frac{\\sqrt[5]{${a*32}}}{\\sqrt[5]{${a}}}`
  const answer = `2`;
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