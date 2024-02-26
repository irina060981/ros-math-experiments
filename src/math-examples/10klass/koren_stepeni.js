import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
  let c = getRandomInt(3, 5); 
  let a = getRandomInt(2, 5); 

  const math = `\\sqrt[${c}]{${a}^{${2*c}}}`
  const answer = `${a**2}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () => {
  let c = getRandomInt(3, 5); 
  let a = getRandomInt(2, 5); 

  const math = `\\sqrt[${2*c-1}]{(-${a})^{${6*c-3}}}`
  const answer = `-${a**3}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample3 = () =>  {
  let c = getRandomInt(2, 5);
  let a = getRandomInt(2, 10);

  const math = `(\\sqrt[${2*c}]{${a}})^{${2*c}}`
  const answer = `${a}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let c = getRandomInt(2, 5);
  let a = getRandomInt(-10, -2);

  const math = `(\\sqrt[${2*c-1}]{${a}})^{${2*c-1}}`
  const answer = `${a}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let c = getRandomInt(2, 9); 
  let a = getRandomInt(2, 5); 
  let b = getRandomInt(2, 5); 

  const math = `\\sqrt[${c}]{${a}^{${c}}\\cdot ${b}^{${c}}}`
  const answer = `${a*b}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () =>  {
    let variable1= generateVariableName()
    let a = getRandomInt(2, 30);
    let c = getRandomInt(2, 5);

    const math = `${a}\\sqrt[${2*c}]{${variable1}^{${2*c}}}`
    const answer = `${a}${variable1}`;
    const condition = `${variable1}\\geq0`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let variable1= generateVariableName()
    let a = getRandomInt(2, 30);
    let c = getRandomInt(2, 5);

    const math = `${a}\\sqrt[${2*c}]{${variable1}^{${2*c}}}`
    const answer = `-${a}${variable1}`;
    const condition = `${variable1}<0`
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>   {
    let c = getRandomInt(2, 3);
    let a = getRandomInt(2, 5);
    let b = a*c;

    const math = `(\\sqrt[${a}]{${a}})^{${b}}`
    const answer = `${a**c}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
  let variable1= generateVariableName()
  let d = getRandomInt(2, 5);
  let c = getRandomInt(2, 3);
  let a = getRandomInt(2, 5);
  let b = a*c;

  const math = `(\\sqrt[${a}]{${variable1}^${d}})^{${b}}`
  const answer = `${variable1}^{${c*d}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () => {
    let variable1= generateVariableName()
    let c = getRandomInt(2, 5);
    let a = getRandomInt(2, 10);
    let b = getRandomInt(-10, -2);

    const math = `${a}\\sqrt[${2*c-1}]{${variable1}^${2*c-1}}`
    const answer = `${a*b}`;
    const condition = `${variable1}=${b}`
  
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