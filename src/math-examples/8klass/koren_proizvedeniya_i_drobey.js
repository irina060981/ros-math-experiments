import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 11);    

    const math = `\\sqrt{${a*a}\\cdot${b*b}}`
    const answer = `${a*b}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let b = getRandomInt(2, 5);
    let a = getRandomInt(6, 11, 10);    

    const math = `\\sqrt{${a*a}\\cdot${b*b}}`
    const answer = `${a*b}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(1, 5);  
    let b = getRandomInt(2, 5);

    const math = `\\sqrt{${(a*a)/100}\\cdot ${b*b}}`
    const answer = `${(a*b)/10}`;
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>{
  let a = getRandomInt(6, 9);  
  let b = getRandomInt(2, 5);

  const math = `\\sqrt{${b*b}\\cdot${(a*a)/100}}`
  const answer = `${(a*b)/10}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>   {
  let a = getRandomInt(1, 5);  
  let b = getRandomInt(6, 11, 10);  

  const math = `\\sqrt{${a*a/100}\\cdot ${b*b/100}}`
  const answer = `${(a*b)/100}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let b = getRandomInt(2, 5);  
  let a = getRandomInt(6, 11); 

  const math = `\\sqrt{\\frac{${b*b}}{${a*a}}}`
  const answer = `\\frac{${b}}{${a}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let a = getRandomInt(2, 5);
  let b = getRandomInt(2, 5);  
  let c = getRandomInt(2, 5);   

  const math = `\\sqrt{${a*a}\\cdot${b*b}\\cdot${c*c}}`
  const answer = `${a*b*c}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () =>   {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);  
  let c = getRandomInt(2, 5);  
  let d = getRandomInt(2, 5);   

  const math = `\\sqrt{(${a*a-c}+${c})\\cdot(${b*b+d}-${d})}`
  const answer = `${a*b}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample9 = () => {
  let a = getRandomInt(2, 5);  
  let b = getRandomInt(6, 11); 

  const math = `\\sqrt{{${a*a}}:{${b*b}}}`
  const answer = `\\frac{${a}}{${b}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample10 = () =>{
  let a = getRandomInt(2, 5);  
  let b = getRandomInt(6, 9); 
  if (b%a===0){a+=1}
  if ((b*b)%(a*a)===0){a+=1}
  let o1=(b*b)%(a*a)
  let o = parseInt(`${(b*b)/(a*a)}`)
  if ((b*b)%(a*a)===0){a+=1}
  
  const math = `\\sqrt{${o}\\frac{${o1}}{${a*a}}}`
  const answer = `\\frac{${b}}{${a}}`;
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