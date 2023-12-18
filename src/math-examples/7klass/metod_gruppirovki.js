import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 20);
        let variable1 = generateVariableNameOne()
        let variable2 = generateVariableNameTwo()
    
        const math = `h(${variable1}+${variable2})+${a}(${variable1}+${variable2})`
        const answer = `(${variable1}+${variable2})(h+${a})` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `h(${variable1}+${variable2})-${a}(${variable1}+${variable2})`
    const answer = `(${variable1}+${variable2})(h-${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `h(${variable1}+${variable2})+${a}${variable1}+${a}${variable2}`
    const answer = `(${variable1}+${variable2})(h+${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `t(${variable1}-${variable2})+${a}${variable1}-${a}${variable2}`
    const answer = `(${variable1}-${variable2})(t+${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>{
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}-${a}${variable2}+t(${variable1}-${variable2})`
    const answer = `(${variable1}-${variable2})(t+${a})` 
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

    const math = `${variable1}(t-${variable2})+t-${variable2}`
    const answer = `(t-${variable2})(${variable1}+1)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${variable1}(${a}-${variable2})+${variable2}-${a}`
    const answer = `(${a}-${variable2})(${variable1}-1)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () => {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}+${a}${variable2}+${variable1}h+${variable2}h`
    const answer = `(${variable1}+${variable2})(${a}+h)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}-${a}${variable2}+${variable1}t-${variable2}t`
    const answer = `(${variable1}-${variable2})(${a}+t)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}-${a}${variable2}-${variable1}h+${variable2}h`
    const answer = `(${variable1}-${variable2})(${a}-h)` 
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