import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let variable1 = generateVariableNameOne()
        let variable2 = generateVariableNameTwo()
    
        const math = `(${variable1}+${variable2})(h+t)`
        const answer = `${variable1}h+${variable1}t+${variable2}h+${variable2}t` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}+t)(h-${variable2})`
    const answer = `${variable1}h-${variable1}${variable2}+th-t${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(t-${variable1})(${variable2}-h)`
    const answer = `t${variable2}-th-${variable1}${variable2}+${variable1}h` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${a}-${variable1})(${variable2}-${b})`
    const answer = `${a}${variable2}-${a*b}-${variable1}${variable2}+${b}${variable1}` 
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
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}+${a})(${b}-${variable2})`
    const answer = `${b}${variable1}-${variable1}${variable2}+${a*b}-${a}${variable2}` 
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
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}-${a})(${variable2}+${b})`
    const answer = `${variable1}${variable2}+${b}${variable1}-${a}${variable2}-${a*b}` 
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
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}^{${a}}+${variable2})(${variable2}^{${b}}+${variable1})`
    const answer = `${variable1}^{${a}}${variable2}^{${b}}+${variable1}^{${a+1}}+${variable2}^{${b+1}}+${variable1}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}^{${a}}-${variable2})(${variable1}-${variable2}^{${b}})`
    const answer = `${variable1}^{${a+1}}-${variable1}^{${a}}${variable2}^{${b}}-${variable2}${variable1}+${variable2}^{${b+1}}` 
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
    let variable1 = generateVariableName()

    const math = `(${a}-${variable1})(${variable1}-${b})`
    const answer = `${a}${variable1}-${a*b}-${variable1}^{2}+${b}${variable1}` 
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
    let variable1 = generateVariableName()

    const math = `(${a}+${variable1})(${variable1}-${b})`
    const answer = `${a}${variable1}-${a*b}+${variable1}^{2}-${b}${variable1}` 
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