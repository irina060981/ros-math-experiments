import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(50, 99);
        let b = getRandomInt(10, 20);

        const math = `${a}-${b}`
        const answer = `${a-b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
    let a = getRandomInt(50, 99);
    let b = getRandomInt(21, 49);

    const math = `${a}-${b}`
    const answer = `${a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(50, 99);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);

    const math = `${a}-${b}-${c}`
    const answer = `${a-b-c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(50, 99);
    let b = getRandomInt(11, 20);
    let c = getRandomInt(11, 20);

    const math = `${a}-${b}-${c}`
    const answer = `${a-b-c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(1, 9);
    let b = 10*getRandomInt(1, 5);
    let c = getRandomInt(1, 5);

    const math = `${b-c}-${a}+${c}`
    const answer = `${b-a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>   {
    let a = getRandomInt(11, 21);
    let b = 10*getRandomInt(2, 5);
    let c = getRandomInt(1, 5);
  
    const math = `${b-c}-${a}+${c}`
    const answer = `${b-a}` 
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () =>  {
  let c = getRandomInt(1, 5);
  let a = 10*getRandomInt(5, 9)+c;
  let b = 10*getRandomInt(1, 3)+c;


  const math = `${a}-(${b}+${c})`
  const answer = `${a-b-c}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
    let c = getRandomInt(6, 9);
    let a = 10*getRandomInt(5, 9)+c;
    let b = 10*getRandomInt(1, 3)+c;
  
  
    const math = `${a}-(${b}+${c})`
    const answer = `${a-b-c}` 
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let c = getRandomInt(1, 5);
    let a = 10*getRandomInt(5, 9)+c;
    let b = 10*getRandomInt(1, 3)+c;
  
  
    const math = `(${a}+${c})-${b}`
    const answer = `${a-b+c}` 
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let c = getRandomInt(6, 9);
    let a = 10*getRandomInt(5, 9)+c;
    let b = 10*getRandomInt(1, 3)+c;
  
  
    const math = `(${a}+${c})-${b}`
    const answer = `${a-b+c}` 
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