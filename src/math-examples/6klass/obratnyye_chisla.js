import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2,50);

    const math = `${a}`
    const answer = `\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>   {
    let a = getRandomInt(2,10);
    let b = getRandomInt(11,20);

    const math = `\\frac{${a}}{${b}}`
    const answer = `\\frac{${b}}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>   {
    let a = getRandomInt(51,99);

    const math = `${a}`
    const answer = `\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample4 = () =>   {
    let a = getRandomInt(11,20);
    let b = getRandomInt(21,31);

    const math = `\\frac{${a}}{${b}}`
    const answer = `\\frac{${b}}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample5 = () =>  {
    let a = getRandomInt(2,9)/10;

    const math = `${a}`
    const answer = `\\frac{10}{${a*10}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(11,29, 20)/10;

    const math = `${a}`
    const answer = `\\frac{10}{${a*10}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {
    let a = getRandomInt(2,50)/100;

    const math = `${a}`
    const answer = `\\frac{100}{${a*100}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `\\frac{${variable1}}{${variable2}}`
    const answer = `\\frac{${variable2}}{${variable1}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let variable1 = generateVariableName()

    const math = `${variable1}`
    const answer = `\\frac{1}{${variable1}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>   {
    let a = getRandomInt(2,5);
    let b = getRandomInt(11,20);

    const math = `${a}\\frac{1}{${b}}`
    const answer = `\\frac{${b}}{${(a*b)+1}}`
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