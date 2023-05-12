import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2,10, 0);
        let b = getRandomInt(2, 10, 0);
        let variable = generateVariableName()
    
        const math = `${a}${variable}(${variable}+${b})`
        const answer = `${a}${variable}^2+${a*b}${variable}` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(2,10, 0);
    let b = getRandomInt(-10, -1, 0);
    let variable = generateVariableName()

    const math = `${a}${variable}(${variable}${b})`
    const answer = `${a}${variable}^{2}${a*b}${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(-10,-2, 0);
    let b = getRandomInt(-10, -1, 0);
    let variable = generateVariableName()

    const math = `${a}${variable}(${variable}${b})`
    const answer = `${a}${variable}^2+${a*b}${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let a = getRandomInt(-10,-2, 0);
    let b = getRandomInt(-10,-2, 0);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable2}(${b}${variable1}+${variable2})`
    const answer = `${a*b}${variable1}${variable2}${a}${variable2}^2` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(2, 30);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}${variable2}(${variable1}+${variable2})`
    const answer = `${a}${variable1}^2${variable2}+${a}${variable1}${variable2}^2` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(-10,-2, 0);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}+${variable2})\\cdot(${a}${variable2})`
    const answer = `${a}${variable1}${variable2}${a}${variable2}^2` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 30);
    let b = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${variable1}^{${b}}-${variable2})\\cdot ${a}${variable1}`
    const answer = `${a}${variable1}^{${b+1}}-${a}${variable2}${variable1}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(-10,-2, 0);
    let b = getRandomInt(2,10, 0);
    let c = getRandomInt(2,10, 0);
    let variable1 = generateVariableName()

    const math = `${a}${variable1}(${variable1}^{${c}}+${variable1}+${b})`
    const answer = `${a}${variable1}^{${c+1}}${a}${variable1}^{2}${a*b}${variable1}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2,10, 0);
    let b = getRandomInt(2,10, 0);
    let c = getRandomInt(6,10, 0);
    let d = getRandomInt(2,5, 0);
    let variable1 = generateVariableName()

    const math = `(${variable1}^{${c}}+${variable1}^{${d}}+${b})\\cdot ${a}${variable1}`
    const answer = `${a}${variable1}^{${c+1}}+${a}${variable1}^${d+1}+${a*b}${variable1}` 
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
    let c = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `(${b}${variable1}-${c}${variable2})\\cdot ${a}${variable1}^{${c}}${variable2}`
    const answer = `${a*b}${variable1}^{${c+1}}${variable2}-${a*c}${variable1}^{${c}}${variable2}^2` 
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