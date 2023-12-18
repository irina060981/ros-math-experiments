import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 12);
    let o = NOK(a,b)
    let c,d
    if (o/a===1){c=''} else {c=o/a}
    if (o/b===1){d=''} else {d=o/b}
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}}{${a}}+\\frac{${variable2}}{${b}}`
    const answer = `\\frac{${c}${variable1}+${d}${variable2}}{${o}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
  let a = getRandomInt(6, 12);
  let b = getRandomInt(2, 5);
  let o = NOK(a,b)
  let c,d
  if (o/a===1){c=''} else {c=o/a}
  if (o/b===1){d=''} else {d=o/b}
  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${variable1}}{${a}}-\\frac{${variable2}}{${b}}`
  const answer = `\\frac{${c}${variable1}-${d}${variable2}}{${o}}`
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
  let b = getRandomInt(2, 10);
  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${a}${variable1}}{${variable2}}+\\frac{${variable2}}{${variable1}}`
  const answer = `\\frac{${a}${variable1}^2+${variable2}^2}{${variable1}${variable2}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample4 = () => {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);
  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `-\\frac{${a}${variable1}}{${variable2}}+\\frac{${variable2}}{${variable1}}`
  const answer = `\\frac{${variable2}^2-${a}${variable1}^2}{${variable1}${variable2}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample5 = () => {
  let a = getRandomInt(2, 5);
  let b = getRandomInt(6, 12);
  let o = NOK(a,b)
  let c,d
  if (o/a===1){c=b} else {c=(o*b)/a}
  if (o/b===1){d=a} else {d=(o*a)/b}
  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${b}}{${a}${variable1}}+\\frac{${a}${variable2}}{${b}${variable1}}`
  const answer = `\\frac{${c}+${d}${variable2}}{${o}${variable1}}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(2, 6);
  let d = getRandomInt(8, 14);
  let variable1= generateVariableNameOne()

  const math = `\\frac{${a}}{${variable1}^{${c}}}+\\frac{${b}}{${variable1}^{${d}}}`;
  const answer = `\\frac{${a}${variable1}^{${d-c}}+${b}}{${variable1}^{${d}}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () =>   {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);
  let c = getRandomInt(2, 6);
  let d = getRandomInt(8, 14);
  let variable1= generateVariableNameOne()

  const math = `\\frac{${a}}{${variable1}^{${d}}}-\\frac{${b}}{${variable1}^{${c}}}`;
  const answer = `\\frac{${a}-${b}${variable1}^{${d-c}}}{${variable1}^{${d}}}`;
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
  let b = getRandomInt(2, 10);
  let c = getRandomInt(2, 6);
  let d = getRandomInt(8, 14);
  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${a}}{${variable1}^{${c}}${variable2}}+\\frac{${b}}{${variable1}^{${d}}${variable2}}`;
  const answer = `\\frac{${a}${variable1}^{${d-c}}+${b}}{${variable1}^{${d}}${variable2}}`;
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let c = getRandomInt(2, 20);
  let d = getRandomInt(2, 10);

  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${variable2}}{${variable1}+${c}}+\\frac{1}{${d}(${variable1}+${c})}`
  const answer = `\\frac{${d}${variable2}+1}{${d}(${variable1}+${c})}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
    let c = getRandomInt(2, 20);
    let variable1= generateVariableNameOne()
  
    const math = `\\frac{1}{${c}+${variable1}}+\\frac{1}{${c}-${variable1}}`
    const answer = `\\frac{${c*2}}{(${c}+${variable1})(${c}-${variable1})}`
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