import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let a = getRandomInt(2, 10);  
  let b = getRandomInt(11, 20);
  let c = getRandomInt(31, 59);
  let t = Math.abs(a-b);

  let variable = generateVariableName()

  const math = `${variable}^{\\frac{${a}}{${c}}-\\frac{${b}}{${c}}}`
  const answer = `${variable}^{-\\frac{${t}}{${c}}}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {
  let a = getRandomInt(5, 20);
  let b = getRandomInt(2, 20);
  let c = getRandomInt(2, 6);
  let d = getRandomInt(21, 49);
  let variable = generateVariableName()
  
  const math = `${variable}^{\\frac{${a}}{${d}}+\\frac{${b}}{${d}}-\\frac{${c}}{${d}}}`
  const answer = `${variable}^{\\frac{${a+b-c}}{${d}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () => {
  let a = getRandomInt(11, 20);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(31, 59);
  let variable = generateVariableName()

  const math = `${variable}^{\\frac{${a}}{${c}}}:${variable}^{\\frac{${b}}{${c}}}`
  const answer = `${variable}^{\\frac{${a-b}}{${c}}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let a = getRandomInt(11, 20);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(21, 49);
  let variable = generateVariableName()

  const math = `${variable}^{\\frac{${a}}{${c}}}:${variable}^{-\\frac{${b}}{${c}}}`
  const answer = `${variable}^{\\frac{${a+b}}{${c}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(2, 12);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(2, 12);
  let d = getRandomInt(26, 49);
  let t = Math.abs(-a+b-c);
  let o =''
  {if(-a+b-c<0) {o='-'}}
  let variable = generateVariableName()

  const math = `${variable}^{\\frac{${a}}{${d}}}:${variable}^{-\\frac{${b}}{${d}}}:${variable}^{\\frac{${c}}{${d}}}`
  const answer = `${variable}^{${o}\\frac{${t}}{${d}}}`
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
  let b = getRandomInt(2, 10);
  let c = getRandomInt(21, 49);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{-\\frac{${a}}{${c}}}:\\left(\\frac {${variable1}}{${variable2}}\\right)^{-\\frac{${b}}{${c}}}`
  const answer = `\\left(\\frac{${variable1}}{${variable2}}\\right)^{\\frac{${b-a}}{${c}}}`
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
  let b = getRandomInt(11, 21);
  let c = getRandomInt(21, 49);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `(${variable1}${variable2})^{\\frac{${a}}{${c}}}:(${variable1}${variable2})^{\\frac{${b}}{${c}}}`
  const answer = `(${variable1}${variable2})^{-\\frac{${b-a}}{${c}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(6, 9);
  let b = getRandomInt(2, 5);
  let c = getRandomInt(2, 5);
  let t = Math.abs(c-b);
  let o =''
  {if(c-b<0) {o='-'}}

  let variable = generateVariableName()

  const math = `${variable}^{\\frac{1}{${a}}}:${variable}^{\\frac{${b}}{${a*c}}}`
  const answer = `${variable}^{${o}\\frac{${t}}{${a*c}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () => {
  let a = getRandomInt(6, 9);
  let b = getRandomInt(2, 5);
  let c = getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `${variable}^{\\frac{1}{${a}}}:${variable}^{-\\frac{${b}}{${a*c}}}`
  const answer = `${variable}^{\\frac{${c+b}}{${a*c}}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let a = getRandomInt(2, 3);
  let b = getRandomInt(2, 4);
  let d = getRandomInt(5, 7);
  let c = getRandomInt(-30, 30, 0);
  if(c > 0) c = '+'+c;
  let n = NOK(a*b, a*d)
  let o =''
  {if((n/(a*d)-n/(a*b))<0) {o='-'}}
  
  let t = Math.abs(n/(a*d)-n/(a*b));


  let variable = generateVariableName()

  const math = `(${variable}${c})^{\\frac{1}{${a*d}}}:(${variable}${c})^{\\frac{1}{${a*b}}}`
  const answer = `(${variable}${c})^{${o}\\frac{${t}}{${n}}}`
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