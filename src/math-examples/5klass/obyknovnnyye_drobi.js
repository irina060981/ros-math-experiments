import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(3, 6); 
    let b = a*getRandomInt(2, 10);
    let c = a-1; 

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(7, 10); 
    let b = a*getRandomInt(2, 10);
    let c = a-1; 

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(3, 6); 
    let b = a*getRandomInt(2, 10);
    let c = a-2; 

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample4 = () =>  {
    let a = getRandomInt(7, 10); 
    let b = a*getRandomInt(2, 10);
    let c = a-2; 

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample5 = () =>  {
    let a = getRandomInt(3, 6); 
    let b = a*getRandomInt(2, 10);
    let c = a-1; 

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(7, 10); 
    let b = a*getRandomInt(2, 10);
    let c = a-1; 

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>   {
    let a = getRandomInt(3, 6); 
    let b = a*getRandomInt(2, 10);
    let c = a-getRandomInt(1, 2);

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>{
    let a = getRandomInt(7, 10); 
    let b = a*getRandomInt(2, 10);
    let c = a-getRandomInt(1, 3);

    const math = `\\frac{${c}}{${a}} ott ${b}`
    const answer = `${c*b/a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(1, 9); 

    const math = `\\frac{${a}}{10} ott 100`
    const answer = `${a*10}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = getRandomInt(1, 9); 

    const math = `\\frac{${a}}{10} ott 1000`
    const answer = `${a*100}`
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