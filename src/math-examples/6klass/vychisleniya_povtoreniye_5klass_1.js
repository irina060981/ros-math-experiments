import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 20);
        let b = getRandomInt(10, 50);
        
        if (b%10===0) {b=b+1};
        let o = 10*a+b;

        const math = `${a}+${b/10}`
        const answer = `${o/10}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 20);
    let b = getRandomInt(10, 50);
    
    if (b%10===0) {b=b+1};
    let o = 10*a+b;

    const math = `${b/10}+${a}`;
    const answer = `${o/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(2, 48);
    let b = getRandomInt(2, 48);
    
    if (a%10===0) {a=(a+1)};
    if (b%10===0) {b=(b+1)};
    let o = a+b;

    const math = `${a/100}+${b/100}`;
    const answer = `${o/100}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
  let a = getRandomInt(5, 30);
  let b = getRandomInt(10, 39);
  
  if (b%10===0) {b=(b+1)};
  let o = a*10-b;

  const math = `${a}-${b/10}`;
  const answer = `${o/10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () => {
  let a = getRandomInt(31, 48, 40);
  let b = getRandomInt(10, 28);

  if (a%10===0) {a=(a+1)};
  if (b%10===0) {b=(b+1)};
  let o = a-b;

  const math = `${a/100}-${b/100}`;
  const answer = `${o/100}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(2, 50);

  if (a%10===0) {a=(a+1)};
  
  const math = `${a/10}\\cdot 10`;
  const answer = `${a}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {
  let a = getRandomInt(2, 9);
  let b = getRandomInt(2, 9);
  let o = a*b
  
  const math = `${a/10}\\cdot${b}`;
  const answer = `${o/10}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let a = getRandomInt(2, 50);
 
  if (a%10===0) {a=(a+1)};

  const math = `${a/10}:10`;
  const answer = `${a/100}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let a = getRandomInt(2, 50);
  
  if (a%10===0) {a=(a+1)};
  
  const math = `${a/10}:2`;
  const answer = `${a/20}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () =>  {
  let a = getRandomInt(2, 5);
  let c = getRandomInt(2, 5)*a;

  if (c%10===0) {c=(c+1)};
  let o = c/a

  const math = `${c/10}:${a}`;
  const answer = `${o/10}` 
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