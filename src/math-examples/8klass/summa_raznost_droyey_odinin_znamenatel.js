import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let b = getRandomInt(10, 30);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}}{${b}}+\\frac{${variable2}}{${b}}`
    const answer = `\\frac{${variable1}+${variable2}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let b = getRandomInt(31, 70);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}}{${b}}-\\frac{${variable2}}{${b}}`
    const answer = `\\frac{${variable1}-${variable2}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let b = getRandomInt(31, 70);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `-\\frac{${variable1}}{${b}}+\\frac{${variable2}}{${b}}`
    const answer = `\\frac{${variable2}-${variable1}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let b = getRandomInt(31, 70);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `-\\frac{${variable1}}{${b}}-\\frac{${variable2}}{${b}}`
    const answer = `-\\frac{${variable1}+${variable2}}{${b}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample5 = () => {
    let b = getRandomInt(31, 70);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}+${variable2}}{${b}-t}-\\frac{${variable2}}{${b}-t}`
    const answer = `\\frac{${variable1}}{${b}-t}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let b = getRandomInt(31, 70);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}-${variable2}}{h+${b}}+\\frac{${variable2}}{h+${b}}`
    const answer = `\\frac{${variable1}}{h+${b}}`
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
    let b = getRandomInt(31, 70);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable1}+${variable2}+${a}}{${b}-h}+\\frac{${variable2}}{${b}-h}`
    const answer = `\\frac{${variable1}+2${variable2}+${a}}{${b}-h}`
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
    let b = getRandomInt(31, 70);
    let c = getRandomInt(2, 10);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable2}+${a}}{(${variable1}-${c})(${variable1}+${c})}+\\frac{${a}${variable2}+${b}}{(${variable1}-${c})(${variable1}+${c})}`
    const answer = `\\frac{${a+1}${variable2}+${a+b}}{(${variable1}-${c})(${variable1}+${c})}`
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
    let b = getRandomInt(31, 70);
    let c = getRandomInt(2, 10);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${variable2}+${a}}{(${variable1}-${c})(${variable1}+${c})}-\\frac{${a}${variable2}+${b}}{(${variable1}-${c})(${variable1}+${c})}`
    const answer = `\\frac{-${a-1}${variable2}${a-b}}{(${variable1}-${c})(${variable1}+${c})}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(10, 20);
    let b = getRandomInt(10, 20);
    let c = getRandomInt(10, 20);
    let d = getRandomInt(10, 20);
    let e = getRandomInt(10, 20);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()

    const math = `\\frac{${a}${variable1}+${b}${variable2}}{${c}+t}+\\frac{${d}${variable1}+${e}${variable2}}{${c}+t}`
    const answer = `\\frac{${a+d}${variable1}+${b+e}${variable2}}{${c}+t}`
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