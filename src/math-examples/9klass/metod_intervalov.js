import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 15);
        let variable = generateVariableName()
    
        const math = `(${variable}-${a})(${variable}+${a})<0`
        const answer = `${variable}\\in (-${a};${a})` 
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 15);
    let variable = generateVariableName()

    const math = `(${variable}-${a})(${variable}+${a})>0`
    const answer = `${variable}\\in (-\\infty;-${a})\\cup(${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () => {
    let a = getRandomInt(2, 15);
    let variable = generateVariableName()

    const math = `${variable}(${variable}+${a})<0`
    const answer = `${variable}\\in (-${a};0)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(2, 15);
    let variable = generateVariableName()

    const math = `${variable}(${variable}-${a})>0`
    const answer = `${variable}\\in (-\\infty; 0)\\cup(${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let a = getRandomInt(1, 10);
    let b = getRandomInt(11, 19);
    let variable = generateVariableName()

    const math = `(${variable}-${a})(${variable}+${b})<0`
    const answer = `${variable}\\in (-${b};${a})` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>{
    let a = getRandomInt(2, 15);
    let b = getRandomInt(11, 19);
    let variable = generateVariableName()

    const math = `(${variable}-${a})(${variable}+${b})>0`
    const answer = `${variable}\\in (-\\infty;-${b})\\cup(${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(16, 29);
    let b = getRandomInt(20, 29);
    let variable = generateVariableName()

    const math = `(${variable}-${a})(${variable}+${b})>0`
    const answer = `${variable}\\in (-\\infty;-${b})\\cup(${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>   {
    let a = getRandomInt(2, 15);
    let variable = generateVariableName()

    const math = `${variable}(${variable}-${a})>0`
    const answer = `${variable}\\in (-\\infty; 0)\\cup(${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(2, 19);
    let variable = generateVariableName()

    const math = `(${a}-${variable})(${variable}+${a})<0`
    const answer = `${variable}\\in (-\\infty;-${a})\\cup(${a};+\\infty)` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(2, 19);
    let variable = generateVariableName()

    const math = `(${variable}+${a})(${a}-${variable})>0`
    const answer = `${variable}\\in (-${a};${a})` 
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
