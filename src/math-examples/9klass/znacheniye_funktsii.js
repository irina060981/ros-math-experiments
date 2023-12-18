import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-10, 10, 0);  
    let b = getRandomInt(-30, 30, 0);

    const math = `\\mathcal f(x)=x${a > 0 ? '+' : ''}${a}`
    const answer = `\\mathcal f(${b})=${b + a}`;
    const condition = `x=${b}`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(-5, 5, 0);  
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-5, 5, 0);

    const math = `\\mathcal f(x)=${c}x${a > 0 ? '+' : ''}${a}`
    const answer = `\\mathcal f(${b})=${c*b + a}`;
    const condition = `x=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-5, 5, 0);  
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-5, 5, 0);

    const math = `\\mathcal f(x)=${a}${c > 0 ? '+' : ''}${c}x`
    const answer = `\\mathcal f(${b})=${c*b + a}`
    const condition = `x=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-3, 3);

    const math = `\\mathcal f(x)=x^2${a > 0 ? '+' : ''}${a}`
    const answer = `\\mathcal f(${b})=${b*b+a}`
    const condition = `x=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {
    let a = getRandomInt(-10, 10, 0);
    let b = getRandomInt(-3, 3);

    const math = `\\mathcal f(x)=x^2${a > 0 ? '+' : ''}${a}x`
    const answer = `\\mathcal f(${b})=${b*b+a*b}`
    const condition = `x=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>{
    let a = getRandomInt(-10, 10, 0);
    let b = getRandomInt(-3, 3);

    const math = `\\mathcal f(x)=-x^2${a > 0 ? '+' : ''}${a}x`
    const answer = `\\mathcal f(${b})=${-1*b*b+a*b}`
    const condition = `x=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () =>{
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-3, 3);

    const math = `\\mathcal f(x)=-x^2${a > 0 ? '+' : ''}${a}`
    const answer = `\\mathcal f(${b})=${-1*b*b+a}`
    const condition = `x=${b}`

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    const a = getRandomInt(-5, 5, 0);  
    const b = getRandomInt(-20, 20, 0);
    const c = getRandomInt(-5, 5, 0);
  
    const math = `\\mathcal f(x)=${c}+x${a > 0 ? '+' : ''}${a}`
    const answer = `\\mathcal f(${b})=${c+a+b}`
    const condition = `x=${b};`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    const a = getRandomInt(-20, 20, 0);  
    const b = getRandomInt(-20, 20, 0);
    const c = getRandomInt(-20, 20, 0);
  
    const math = `\\mathcal f(x)=${c}+x${a > 0 ? '+' : ''}${a}`
    const answer = `\\mathcal f(${b})=${c+a+b}`
    const condition = `x=${b};`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
  const a = getRandomInt(-10, 10, 0);  
  const b = getRandomInt(-30, 30, 0);
  let variable = generateVariableName()

  const math = `\\mathcal f(x)=x${a > 0 ? '+' : ''}${a}`
  const answer = `\\mathcal f(${b})=${b+a}`
  const condition = `x=${b};`

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