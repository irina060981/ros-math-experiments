import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 50);
        let b = getRandomInt(2, 50);
        let c = getRandomInt(2, 50);
        let o
        if (a>b) {o=">"}  else {o="<"}
        if (a===b) {o="="}           
       

        if (b%10===0) {b=(b+1)/10}
        else {b=b/10};
        if (a%10===0) {a=(a+1)/10}
        else {a=a/10};
        const math = `${a}\\cdot ${c} \\ ... \\  ${b} \\cdot ${c}`;
        const answer = `${a}\\cdot ${c} ${o} ${b} \\cdot ${c}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>{
    let a = getRandomInt(2, 50);
    let b = getRandomInt(2, 50);
    let c = getRandomInt(2, 50);
    let o
    if (a>b) {o=">"}  else {o="<"}
    if (a===b) {o="="}           
   

    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    const math = `${a}\\cdot ${c} \\ ... \\  ${b} \\cdot ${c}`;
    const answer = `${a}\\cdot ${c} ${o} ${b} \\cdot ${c}` 
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
    let c = getRandomInt(2, 50);
    let o
    if (a>b) {o=">"}  else {o="<"}
    if (a===b) {o="="}           
   

    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    const math = `${a}+${c} \\ ... \\  ${b}+${c}`;
    const answer = `${a}+ ${c} ${o} ${b} + ${c}` 
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
    let c = getRandomInt(100, 999);
    let o
    if (a>b) {o=">"}  else {o="<"}
    if (a===b) {o="="}           
   

    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (c%10===0) {c=(c+1)/10}
    else {c=c/10};
    const math = `${a}+${c} \\ ... \\  ${b}+${c}`;
    const answer = `${a}+ ${c} ${o} ${b} + ${c}` 
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
    let c = getRandomInt(100, 999);
    let o
    if (a>b) {o=">"}  else {o="<"}
    if (a===b) {o="="}           
   

    if (b%10===0) {b=(b+1)/10}
    else {b=b/10};
    if (a%10===0) {a=(a+1)/10}
    else {a=a/10};
    if (c%10===0) {c=(c+1)/10}
    else {c=c/10};
    const math = `${a}+${c} \\ ... \\  ${b}+${c}`;
    const answer = `${a}+ ${c} ${o} ${b} + ${c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(100, 999);
    let b = getRandomInt(100, 999);
    let c = getRandomInt(20, 50);
    let o
    if (a<b) {o=">"}  else {o="<"}
    if (a===b) {o="="}           
   

    if (b%10===0) {b=(b+1)/100}
    else {b=b/100};
    if (a%10===0) {a=(a+1)/100}
    else {a=a/100};
    const math = `${c}-${a} \\ ... \\  ${c}-${b}`;
    const answer = `${c}-${a} ${o} ${c}-${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(100, 999);
    let b = getRandomInt(100, 999);
    let c = getRandomInt(20, 50);
    let o
    if (a<b) {o=">"}  else {o="<"}
    if (a===b) {o="="}           
   

    if (b%10===0) {b=(b+1)/100}
    else {b=b/100};
    if (a%10===0) {a=(a+1)/100}
    else {a=a/100};
    const math = `${c}-${a} \\ ... \\  ${c}-${b}`;
    const answer = `${c}-${a} ${o} ${c}-${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 15);
    let b = getRandomInt(16, 35);
    let c = getRandomInt(20, 50);

    const math = `${c}:\\frac{${b}}{${a}}\\ ... \\  ${c}\\cdot \\frac{${a}}{${b}}`;
    const answer = `${c}:\\frac{${a}}{${b}}\\ = \\  ${c}\\cdot \\frac{${a}}{${b}}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 15);
    let b = getRandomInt(16, 35);
    let c = getRandomInt(20, 50);

    const math = `${c}:\\frac{${a}}{${b}}\\ ... \\  ${c}\\cdot \\frac{${b}}{${a}}`;
    const answer = `${c}:\\frac{${a}}{${b}}\\ = \\  ${c}\\cdot \\frac{${b}}{${a}}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(2, 15);
    let b = getRandomInt(16, 35);
    let c = getRandomInt(20, 50);
    let d = getRandomInt(70, 99);

    const math = `(${d}+${c}) \\cdot \\frac{${a}}{${b}}\\ ... \\  (${d}+${c}):\\frac{${b}}{${a}}`;
    const answer = `(${d}+${c}) \\cdot \\frac{${a}}{${b}}\\ = \\  (${d}+${c}):\\frac{${b}}{${a}}` 
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