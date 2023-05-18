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

const createExample3 = () => {
    let a = getRandomInt(2, 50);
    let b = getRandomInt(2, 50);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${a}+${b}`;
    let o = a*10+b*10
    const answer = `${o/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(2, 50);
    let b = getRandomInt(2, 50);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${a}-${b}`;
    let o = a*10-b*10
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
    let a = getRandomInt(2, 50);
    let b = getRandomInt(2, 50);
    let c = getRandomInt(1, 10);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${a}+${b}+${c}`;
    let o = a*10+b*10+c*10;
    const answer = `${o/10}` 
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
    let b = getRandomInt(2, 50);
    let c = getRandomInt(1, 10);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${a}+${b}-${c}`;
    let o = a*10+b*10-c*10;
    const answer = `${o/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 50);
    let b = getRandomInt(2, 50);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${a}\\cdot 10+${b}`;
    let o = Math.floor(a*100+b*10);
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
    let b = getRandomInt(2, 50);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `${a}\\cdot 10-${b}`;
    let o = Math.floor(a*100-b*10);
    const answer = `${o/10}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(1, 9);
    let b = getRandomInt(1, 9);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `(-${a})\\cdot (-${b})`;
    let o = Math.floor((a*10)*(b*10));
    const answer = `${o/100}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(1, 9);
    let b = getRandomInt(1, 9);
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    const math = `(-${a})\\cdot(${b})`;
    let o = Math.floor((a*10)*(b*10));
    const answer = `${-o/100}` 
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