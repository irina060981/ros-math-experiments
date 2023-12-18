import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}}{t}\\cdot\\frac{${variable2}}{h}`
    const answer = `\\frac{${variable1}${variable2}}{th}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
  let a = getRandomInt(2, 10);
  let b = getRandomInt(2, 10);

  let variable1= generateVariableNameOne()
  let variable2= generateVariableNameTwo()

  const math = `\\frac{${variable1}^{${b}}}{${variable2}}\\cdot\\frac{${variable1}^{${a}}}{${variable2}}`
  const answer = `\\frac{${variable1}^{${a+b}}}{${variable2}^{2}}`
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
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
  
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `\\frac{${variable1}^{${b}}}{${variable2}^{${c}}}\\cdot\\frac{${variable1}^{${a}}}{${variable2}^{${d}}}`
    const answer = `\\frac{${variable1}^{${a+b}}}{${variable2}^{${c+d}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(12, 20);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(12, 20);
  
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `\\frac{${variable1}^{${b}}}{${variable2}^{${d}}}\\cdot\\frac{${variable2}^{${c}}}{${variable1}^{${a}}}`
    const answer = `\\frac{${variable1}^{${b-a}}}{${variable2}^{${d-c}}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample5 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(12, 20);
    let d = getRandomInt(2, 5);
    let c = d*getRandomInt(2, 10);
    
    let variable1= generateVariableNameOne()
  
    const math = `\\frac{${variable1}^{${b}}}{${c}}\\cdot\\frac{${d}}{${variable1}^{${a}}}`
    const answer = `\\frac{${variable1}^{${b-a}}}{${c/d}}`
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
    let b = getRandomInt(12, 20);
    let d = getRandomInt(2, 5);
    let c = d*getRandomInt(2, 10);
    
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `\\frac{${variable1}^{${b}}}{${c}${variable2}}\\cdot\\frac{${d}${variable2}}{${variable1}^{${a}}}`
    const answer = `\\frac{${variable1}^{${b-a}}}{${c/d}}`
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
    let b = getRandomInt(12, 20);
    let d = getRandomInt(2, 5);
    let c = d*getRandomInt(2, 10);
    
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `(-\\frac{${variable1}^{${b}}}{${c}${variable2}})\\cdot(-\\frac{${d}${variable2}}{${variable1}^{${a}}})`
    const answer = `\\frac{${variable1}^{${b-a}}}{${c/d}}`
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
    let b = getRandomInt(12, 20);
    let d = getRandomInt(2, 5);
    let c = d*getRandomInt(2, 10);
    let e = getRandomInt(3, 10);
    
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
  
    const math = `\\frac{${variable1}^{${b}}}{${c}${variable2}^{${e}}}\\cdot(-\\frac{${d}${variable2}}{${variable1}^{${a}}})`
    const answer = `-\\frac{${variable1}^{${b-a}}}{${c/d}${variable2}^{${e-1}}}`
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
    let b = getRandomInt(2, 10);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable2}(${variable1}+${a})}{${b}}\\cdot\\frac{${variable2}}{${variable1}+${a}}`
    const answer = `\\frac{${variable2}^2}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{(${variable1}+${a})(${variable1}-${a})}{${b}}\\cdot\\frac{${b}}{${variable2}(${variable1}-${a})}`
    const answer = `\\frac{${variable1}+${a}}{${variable2}}`
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