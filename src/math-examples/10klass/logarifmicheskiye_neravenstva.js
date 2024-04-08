import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {

        let t = getRandomInt(2, 10);
        let variable = generateVariableName()
    
        const math = `\\log_{${t}}{${variable}}>0`
        const answer = `${variable}\\in (1;+\\infty)` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {

    let t = getRandomInt(2, 20);
    let variable = generateVariableName()

    const math = `\\log_{${t}}{${variable}}<0`
    const answer = `${variable}\\in (0; 1)`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(2, 20);
    if(a > 0) {a = '+'+a};
    let variable = generateVariableName()
    let t = getRandomInt(2, 20);

    const math = `\\log_{${t}}{(${variable}${a})}<\\log_{${t}}{${b}}`
    const answer = `${variable}\\in (${a*(-1)}; ${b-a})`
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
    let b = getRandomInt(2, 20);
    if(a > 0) {a = '+'+a};
    let variable = generateVariableName()
    let t = getRandomInt(2, 20);

    const math = `\\log_{${t}}{(${variable}${a})}\\geq\\log_{${t}}{${b}}`
    const answer = `${variable}\\in [${b-a};+\\infty)`
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
    let b = getRandomInt(2, 20, 0);
    if(a > 0) {a = '+'+a};
    let variable = generateVariableName()
    let t = getRandomInt(2, 20);

    const math = `\\log_{${t}}{(${variable}${a})}\\leq\\log_{${t}}{${b}}`
    const answer = `${variable}\\in (${a*(-1)};${b-a}]`
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
if(b > 0) {b = '+'+b};
let variable = generateVariableName()
let t = getRandomInt(2, 20);

const math = `\\log_{${t}}{${a}}>\\log_{${t}}{(${variable}${b})}`
const answer = `${variable}\\in (${b*(-1)};${a-b})`
const condition = undefined

return {
  id: uuidv4(),
  math: math, 
  condition: condition, 
  answer: answer
}
}

const createExample7 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(2, 20);
    if(a > 0) {a = '+'+a};
    let variable = generateVariableName()
    let t = getRandomInt(2, 20);

    const math = `\\log_{${t}}{(${variable}${a})}\\geq1`
    const answer = `${variable}\\in [${t-a};+\\infty)`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(-20, -2);
    let b = getRandomInt(-5, -2);
    let c =a*b;
    let variable = generateVariableName()
    let t = getRandomInt(2, 20);

    const math = `\\log_{${t}}{(${a}${variable})}>\\log_{${t}}{${c}}`
    const answer = `${variable}\\in (-\\infty; ${b})`
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
    let b = getRandomInt(2, 10, 0);
    let c =a*b;
    let t = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `\\log_{${t}}{(${a}${variable})}>\\log_{${t}}{${c}}`
    const answer = `${variable}\\in (${b};+\\infty)` 
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
    let b = getRandomInt(2, 10, 0);
    let c =a*b;
    let t = getRandomInt(2, 10);
    let variable = generateVariableName()

    const math = `\\log_{${t}}{(${a}${variable})}>\\log_{${t}}{${c}}`
    const answer = `${variable}\\in (${b};+\\infty)` 
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