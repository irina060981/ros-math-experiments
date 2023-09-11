import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 10);
        let variable1 = generateVariableNameOne()
        let variable2 = generateVariableNameTwo()

        const math = `${a}${variable1}+${a}${variable2}`
        const answer = `${a}(${variable1}+${variable2})` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}-${a}${variable2}`
    const answer = `${a}(${variable1}-${variable2})` 
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
    let b = getRandomInt(-10, -2);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}${a*b}${variable2}`
    const answer = `${a}(${variable1}${b}${variable2})` 
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
    let b = getRandomInt(-10, -2);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}${a*b}${variable2}`
    const answer = `${a}(${variable1}${b}${variable2})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(-10, -2);
    let b = getRandomInt(-10, -2);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}-${a*b}${variable2}`
    const answer = `${a}(${variable1}+${-1*b}${variable2})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `i${variable1}-${variable2}i`
    const answer = `i(${variable1}-${variable2})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}${variable2}+${variable2}`
    const answer = `${variable2}(${variable1}+1)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>  {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(2, 20);

    const math = `${a}${variable1}${variable2}+${a}${variable2}i`
    const answer = `${a}${variable2}(${variable1}+i)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(-20, -2);

    const math = `${a}${variable1}${variable2}${a}${variable2}t`
    const answer = `${a}${variable2}(${variable1}+t)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
  let a = getRandomInt(11, 20);
  let variable1 = generateVariableNameOne()
  let variable2 = generateVariableNameTwo()

  const math = `${a}${variable1}+${a}${variable2}`
  const answer = `${a}(${variable1}+${variable2})` 
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