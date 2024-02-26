import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 3);

    const math = `\\sqrt{${a*a*b}}`
    const answer = `${a}\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
    let a = getRandomInt(6, 9);
    let b = getRandomInt(2, 3);

    const math = `\\sqrt{${a*a*b}}`
    const answer = `${a}\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let b = getRandomInt(2, 9, 8);

    const math = `\\sqrt[3]{${1000*b}}`
    const answer = `10\\sqrt[3]{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
  let a = getRandomInt(2, 5);  

  const math = `\\sqrt[3]{${a*a*a*2}}`
  const answer = `${a}\\sqrt[3]{2}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
    let a = getRandomInt(1, 5);  

    const math = `\\sqrt[3]{${a*a*a*2/1000}}`
    const answer = `${a/10}\\sqrt[3]{2}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
  let t = getRandomInt(2, 3);
  let a = getRandomInt(2, 4)*3-1;
  let b = Math.floor(a/3);
  let c = a%3;
  {if (c===1) {c=''}}
  {if (b===1) {b=''}}

  const math = `\\sqrt[3]{${t}^{${a}}}`
  const answer = `${t**b}\\sqrt[3]{${t**c}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {
  let t = getRandomInt(2, 3);
  let a = getRandomInt(2, 4)*4-1;
  let b = Math.floor(a/4);
  let c = a%4;
  {if (c===1) {c=''}}
  {if (b===1) {b=''}}

  const math = `\\sqrt[4]{${t}^{${a}}}`
  const answer = `${t**b}\\sqrt[4]{${t**c}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 3);

    const math = `\\frac{1}{${a}}\\sqrt{${a*a*b}}`
    const answer = `\\sqrt{${b}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let variable1= generateVariableName()
    let a = getRandomInt(2, 4)*3-1;
    let b = Math.floor(a/3);
    let c = a%3;
    {if (c===1) {c=''}}
    {if (b===1) {b=''}}

    const math = `\\sqrt[3]{${variable1}^{${a}}}`
    const answer = `${variable1}^{${b}}\\sqrt[3]{${variable1}^{${c}}}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
  let variable1= generateVariableName()
  let a = getRandomInt(2, 4)*4-1;
  let b = Math.floor(a/4);
  let c = a%4;
  {if (c===1) {c=''}}
  {if (b===1) {b=''}}

    const math = `\\sqrt[4]{${variable1}^{${a}}}`
    const answer = `${variable1}^{${b}}\\sqrt[4]{${variable1}^{${c}}}`;
    const condition = `${variable1}\\geq0`
  
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