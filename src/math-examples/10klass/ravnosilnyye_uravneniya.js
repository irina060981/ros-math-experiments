import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 15);
        let b = getRandomInt(-10, 10, 0);
        let c =a*b;


        let variable = generateVariableName()
    
        const math = `${a-1}${variable}=${c}-${variable}`
        const answer = `${variable}=${b}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>{
    let a = getRandomInt(2, 15);
    let b = getRandomInt(-10, 10, 0);
    let c =a*b;


    let variable = generateVariableName()

    const math = `${a-1}${variable}=${c}-${variable}`
    const answer = `${variable}=${b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
  let a = getRandomInt(2, 10);
  let r = getRandomInt(2, 5);
  let t = getRandomInt(2, 5);

  let b = (a-1)*t;
  let c = (a-1)*r;

  let variable = generateVariableName()
  
  const math = `${a}${variable}-${b}=${variable}+${c}`
  const answer = `${variable}=${((b+c)/(a-1))}`
  const condition = undefined
  
  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
  }

const createExample4 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    if(a > 0) {a = '+'+a};
    let variable = generateVariableName()

    const math = `${variable}${a}=${b}`
    const answer = `${variable}=${b-a}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-6, 6, 0);
    let d = getRandomInt(2, 20);
    if(a > 0) {a = '+'+a};
    let variable = generateVariableName()

    const math = `\\frac{${variable}${a}}{${variable}^{${c}}-${d}}=\\frac{${b}}{${variable}^{${c}}-${d}}`
    const answer = `${variable}=${b-a}`
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
let b = getRandomInt(-20, 20, 0);
let d = getRandomInt(-20, 20, 0);
if(b > 0) {b = '+'+b};
let variable = generateVariableName()

const math = `${a}-${variable}^{${d}}=${variable}${b}-${variable}^{${d}}`
const answer = `${variable}=${a-b}`
const condition = undefined

return {
  id: uuidv4(),
  math: math, 
  condition: condition, 
  answer: answer
}
}

const createExample7 = () => {
    let a = getRandomInt(-30, -2);
    let b = getRandomInt(-30, 30, 0);
    let t = getRandomInt(2, 100);
    if(b > 0) {b = '+'+b};
    let variable = generateVariableName()
    
    const math = `\\sqrt{${t}}${a}=${variable}${b}+\\sqrt{${t}}`
    const answer = `${variable}=${a-b}`
    const condition = undefined
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample8 = () => {
    let a = getRandomInt(2, 10);
    let r = getRandomInt(2, 5);
    let t = getRandomInt(2, 5);

    let b = (a-1)*t;
    let c = (a-1)*r;

    let variable = generateVariableName()
    
    const math = `${a}${variable}+${b}=${variable}-${c}`
    const answer = `${variable}=${-1*((b+c)/(a-1))}`
    const condition = undefined
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample9 = () =>  {
  let a = getRandomInt(2, 10);
  let r = getRandomInt(2, 5);
  let t = getRandomInt(2, 5);

  let b = (a-1)*t;
  let c = (a-1)*r;

  let d = getRandomInt(6, 10);
  let variable = generateVariableName()

  const math = `\\frac{${a}${variable}+${b}}{(${variable}-${c})(${variable}+${d})}=\\frac{1}{${variable}+${d}}`
  const answer = `${variable}=${-1*((b+c)/(a-1))}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
    let a = getRandomInt(2, 15)**2;
    let b = getRandomInt(2, 5)
    let c = getRandomInt(2, 15)
    let d = getRandomInt(2, 30)
    let variable = generateVariableName()
    
    const math = `${variable}^2+\\frac{${c}}{${variable}^{${b}}-${d}}=${a}+\\frac{${c}}{${variable}^{${b}}-${d}}`
    const answer = `${variable}=\\pm${a**0.5}`
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