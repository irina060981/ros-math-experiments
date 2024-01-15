import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 10);
        let c = getRandomInt(2, 10);
    
        const math = `y=${a}x+${c}`
        const answer = `\\text{Возрастает}` 
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

    const math = `y=${a}x+${c}`
    const answer = `\\text{Возрастает}` 
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

    const math = `y=${a}x+${c}`
    const answer = `\\text{Убывает}`  
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

    const math = `y=${a}x${c}`
    const answer = `\\text{Убывает}`  
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {

    const math = `y=-x`
    const answer = `\\text{Убывает}`  
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(11, 20);

    const math = `y=${a}x`
    const answer = `\\text{Возрастает}` 
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

    const math = `y=${c}+\\frac{1}{${a}}x`
    const answer = `\\text{Возрастает}` 
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

    const math = `y=${c}-\\frac{x}{${a}}`
    const answer = `\\text{Убывает}`  
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

    const math = `y=${c/10}x+\\frac{1}{${a}}`
    const answer = `\\text{Возрастает}` 
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
    let c = getRandomInt(11, 29, 20);

    const math = `y=-${c/10}x+\\frac{1}{${a}}`
    const answer =  `\\text{Убывает}`  
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
