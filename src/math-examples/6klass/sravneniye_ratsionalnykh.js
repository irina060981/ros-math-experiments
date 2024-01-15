import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(20, 55); 

    const math = `${a} \\text{ и } ${b}`
    const answer = `${a}<${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10); 

    const math = `${a} \\text{ и } -${b}`
    const answer = `${a}>-${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(30, 99);
    let b = getRandomInt(2, 5); 

    const math = `-${a} \\text{ и } ${b}`
    const answer = `-${a}<${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>{
    let a = getRandomInt(30, 99);

    const math = `-${a} \\text{ и } 0`
    const answer = `-${a}<0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(30, 99);

    const math = `${a} \\text{ и } 0`
    const answer = `${a}>0`
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
    let c
    if(a>b){c='<'} else{c='>'}
    if(a==b){c='='}
    
    const math = `-${a} \\text{ и } -${b}`
    const answer = `-${a}${c}-${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(11, 25);
    let b = getRandomInt(11, 25); 
    let c
    if(a>b){c='<'} else{c='>'}
    if(a==b){c='='}
    
    const math = `-${a} \\text{ и } -${b}`
    const answer = `-${a}${c}-${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(26, 50);
    let b = getRandomInt(26, 50); 
    let c
    if(a>b){c='<'} else{c='>'}
    if(a==b){c='='}
    
    const math = `-${a} \\text{ и } -${b}`
    const answer = `-${a}${c}-${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let a = getRandomInt(26, 50);
    let b = getRandomInt(26, 50); 

    const math = `\\left|-${a}\\right| \\text{ и } -${b}`
    const answer = `${a}>-${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(26, 50);
    let b = getRandomInt(2, 10); 

    const math = `\\left|-${a}\\right| \\text{ и } \\left|-${b}\\right|`
    const answer = `${a}>${b}`
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