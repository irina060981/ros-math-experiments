import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOK } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 9)/10;
    let b = getRandomInt(2, 9)/10; 
    let c
    if (a>b){c='>'}else{c='<'}
    if(a==b){c='='}

    const math = `${a}...${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(11, 21, 20)/10;
    let b = getRandomInt(11, 21, 20)/10; 
    let c
    if (a>b){c='>'}else{c='<'}
    if(a==b){c='='}

    const math = `${a}...${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(22, 99)/10;
    let b = getRandomInt(22, 99)/10; 
    let c
    if (a>b){c='>'}else{c='<'}
    if(a==b){c='='}

    const math = `${a}...${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(11, 99)/100;

    const math = `${a}...0`
    const answer = `${a}>0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(11, 99)/10;

    const math = `0...${a}`
    const answer = `0<${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(100, 350)/1000;
    let b = getRandomInt(100, 350)/1000; 
    let c
    if (a>b){c='>'}else{c='<'}
    if(a==b){c='='}

    const math = `${a}...${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let a = getRandomInt(350, 650);

    const math = `${(a-1)/10}...${a/10}`
    const answer = `${(a-1)/10}<${a/10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(350, 650);

    const math = `${(a-1)/100}...${a/100}`
    const answer = `${(a-1)/100}<${a/100}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let a = getRandomInt(350, 650);

    const math = `${(a-1)/100}...${a/1000}`
    const answer = `${(a-1)/100}>${a/1000}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () => {
    let a = getRandomInt(1001, 9999);

    const math = `${(a-1)/100}...${a/100}`
    const answer = `${(a-1)/100}<${a/100}`
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