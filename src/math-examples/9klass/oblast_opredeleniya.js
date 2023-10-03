import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-30, 30, 0);  
    let b = getRandomInt(-30, 30, 0);

    const math = `\\mathcal f(x)=${b}x${a > 0 ? '+' : ''}${a}`
    const answer = `x \\in (-\\infty; +\\infty)`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 50);  
    let b = getRandomInt(-30, 30, 0);

    const math = `\\mathcal f(x)=\\frac{x${b > 0 ? '+' : ''}${b}}{${a}}`
    const answer = `x \\in (-\\infty; +\\infty)`;
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
  let b = getRandomInt(-30, 30, 0);

  const math = `\\mathcal f(x)=\\frac{${a}}{x${b > 0 ? '+' : ''}${b}}`
  const answer = `x \\in (-\\infty; ${-1*b}) \\cup (${-1*b}; +\\infty)`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => { 
  let b = getRandomInt(-30, 30, 0);

  const math = `\\mathcal f(x)=\\sqrt{x${b > 0 ? '+' : ''}${b}}`
  const answer = `x \\in [${-1*b};+\\infty)`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  { 
  let b = getRandomInt(-30, 30, 0);
  let a = getRandomInt(2, 50);

  const math = `\\mathcal f(x)=\\frac{${a}}{\\sqrt{x${b > 0 ? '+' : ''}${b}}}`
  const answer = `x \\in (${-1*b};+\\infty)`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>{ 
  let b = getRandomInt(2, 30);
  let a = getRandomInt(2, 50);

  const math = `\\mathcal f(x)=\\frac{${a}}{x^2+${b}}`
  const answer = `x \\in (-\\infty;+\\infty)`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => { 
  let b = getRandomInt(2, 50);

  const math = `\\mathcal f(x)=\\sqrt{x^2+${b}}`
  const answer = `x \\in (-\\infty;+\\infty)`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => { 
  let b = getRandomInt(2, 30);

  const math = `\\mathcal f(x)=\\sqrt{x-${b}}+\\sqrt{${b}-x}`
  const answer = `x \\in \\left\\{${b}\\right\\}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>{ 
  let b = getRandomInt(2, 30);

  const math = `\\mathcal f(x)=\\sqrt{${b}-x}+\\frac{${b+10}}{x^2+${b}}`
  const answer = `x \\in (-\\infty; ${b}]`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () => {
  let a = getRandomInt(2, 50);  
  let b = getRandomInt(-30, 30, 0);

  const math = `\\mathcal f(x)=\\frac{x-${a}}{x${b > 0 ? '+' : ''}${b}}`
  const answer = `x \\in (-\\infty; ${-1*b}) \\cup (${-1*b}; +\\infty)`;
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