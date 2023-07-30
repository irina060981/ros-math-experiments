import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 20);
        let b = getRandomInt(2, 50);
        if (b%10===0) {b=(b+1)/10}
        else {b=b/10};
        const math = `${a}+${b}`;
        let o = a*10+b*10;
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
    let b = getRandomInt(2, 50);
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${b}+${a}`;
    let o = a*10+b*10;
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
    if (a%10===0) {a=(a+1)/100}
    else {a=a/100};
    if (b%10===0) {b=(b+1)/100}
    else {b=b/100};
    const math = `${a}+${b}`;
    let o = a*100+b*100
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
  let b = getRandomInt(2, 39);
  if (b%10===0) {b=(b+1)/10}
  else {b=b/10};
  const math = `${a}-${b}`;
  let o = a*10-b*10;
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
  let a = getRandomInt(31, 48);
  let b = getRandomInt(2, 28);
  if (a%10===0) {a=(a+1)/100}
  else {a=a/100};
  if (b%10===0) {b=(b+1)/100}
  else {b=b/100};
  const math = `${a}-${b}`;
  let o = a*100-b*100
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
  if (a%10===0) {a=(a+1)/10}
  else {a=a/10};
  const math = `${a}\\cdot 10`;
  let o = a*10
  const answer = `${o}` 
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>  {
  let a = getRandomInt(2, 9)/10;
  let b = getRandomInt(2, 9);
  const math = `${a}\\cdot${b}`;
  let o = a*10*b
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
  if (a%10===0) {a=(a+1)/10}
  else {a=a/10};
  const math = `${a}:10`;
  let o = a*10
  const answer = `${o/100}` 
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
  if (a%10===0) {a=(a+1)/10}
  else {a=a/10};
  const math = `${a}:2`;
  let o = a*10
  const answer = `${o/20}` 
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
  let c = (getRandomInt(2, 5)*a)/10;
  const math = `${c}:${a}`;
  let o = (c*10)/a
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