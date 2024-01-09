import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 10);
        let c = getRandomInt(2, 10);
    
        const math = `y=${a}x^2+${c}x`
        const answer = `\\uparrow` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(11, 20);
    let c = getRandomInt(11, 20);

    const math = `y=${a}x^2`
    const answer = `\\uparrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-10, -2);
    let c = getRandomInt(11, 20);
    let d = getRandomInt(-20, -2);

    const math = `y=${a}x^2+${c}x${d}`
    const answer = `\\downarrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let a = getRandomInt(-20, -11);
    let c = getRandomInt(-10, -2);

    const math = `y=${c}${a}x^2`
    const answer = `\\downarrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(-20, -11);

    const math = `y=-x^2${a}`
    const answer = `\\downarrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(2, 30);

    const math = `y=x^2+${a}`
    const answer = `\\uparrow` 
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
    let c = getRandomInt(2, 10);

    const math = `y=${c}+\\frac{1}{${a}}x^2`
    const answer = `\\uparrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(11, 30);
    let c = getRandomInt(2, 10);

    const math = `y=${c}-\\frac{x^2}{${a}}`
    const answer = `\\downarrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>   {
    let a = getRandomInt(2, 10);
    let c = getRandomInt(2, 9);

    const math = `y=${c/10}x^2+\\frac{1}{${a}}`
    const answer = `\\uparrow` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(11, 29, 20);

    const math = `y=-${c/10}x^2+${b}x+\\frac{1}{${a}}`
    const answer =  `\\downarrow` 
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
