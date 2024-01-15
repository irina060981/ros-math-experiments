import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-20, -2);
    let b = getRandomInt(-5, 5, 0);
    let c =a*b;
    if(c > 0) {c = '+'+c};

    const math = `y=${a}x${c}`
    const answer = `(${-b};0)`
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
    let b = a*getRandomInt(-10, -2);
    if(b > 0) {b = '+'+b};
    
    const math = `y=${a}x${b}`
    const answer = `(${-1*(b/a)};0)`
    const condition = undefined
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample3 = () =>  {
    let a = getRandomInt(2, 10);
    let b = a*getRandomInt(2, 11);
    if(b > 0) {b = '+'+b};
    
    const math = `y=${a}x${b}`
    const answer = `(${-1*(b/a)};0)`
    const condition = undefined
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample4 = () =>{
    let a = getRandomInt(2, 5);

    const math = `y=x^{2}-${a*a}`
    const answer = `(${a};0) \\text{ и } (-${a};0)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {
    let a = getRandomInt(2, 30);
  
    const math = `y=${a}x^{2}`
    const answer = `(0;0)` 
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let a = getRandomInt(2, 30);

    const math = `y=x(x-${a})`
    const answer = `(0;0) \\text{ и } (${a};0)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 30);

    const math = `y=x^2-${a}x`
    const answer =  `(0;0) \\text{ и } (${a};0)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 20);
    let b = getRandomInt(21, 30);

    const math = `y= \\frac{x+${a}}{x-${b}}`
    const answer =  `(-${a};0)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 20);

    const math = `y=\\frac{1}{${a}}x`
    const answer =  `(0;0)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>  {
    let a = getRandomInt(2, 20);

    const math = `y=\\sqrt{x-${a}}`
    const answer =  `(${a};0)` 
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
