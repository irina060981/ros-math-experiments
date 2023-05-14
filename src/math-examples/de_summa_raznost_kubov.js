import { getRandomInt, generateVariableName, shuffleSingle } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 5);
        let variable = generateVariableName()
    
        const math = `(${variable}^2+${a}${variable}+${a*a})(${variable}-${a})` 
        const answer = `${variable}^3-${a*a*a}`
        const condition = undefined
    
        return {
          id: uuidv4(),
          math: math, 
          condition: condition, 
          answer: answer
        }
  }

const createExample2 = () =>  {
    let a = getRandomInt(6, 10);
    let variable = generateVariableName()

    const math = `(${variable}^2-${a}${variable}+${a*a})(${variable}+${a})`
    const answer =  `${variable}^3+${a*a*a}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample3 = () =>  {
    let c =  getRandomInt(1, 5);
    let variable = generateVariableName()

    const math = `(${variable}-${c})(${variable}^2+${c}${variable}+${c*c})` 
    const answer = `${variable}^3-${c*c*c}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
  let c =  getRandomInt(6, 10);
  let variable = generateVariableName()

  const math = `(${variable}+${c})(${variable}^2-${c}${variable}+${c*c})`
  const answer =  `${variable}^3+${c*c*c}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample5 = () =>  {
  let a = getRandomInt(1, 5);
  let variable = generateVariableName()

  const math = `(${a*a}+${a}${variable}+${variable}^2)(${a}-${variable})` 
  const answer = `${a*a*a}-${variable}^3`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}


const createExample6 = () =>  {
  let a = getRandomInt(6, 10);
  let variable = generateVariableName()

  const math = `(${a*a}-${a}${variable}+${variable}^2)(${a}+${variable})` 
  const answer = `${a*a*a}+${variable}^3`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample7 = () => {
  let c =  getRandomInt(1, 5);
  let variable = generateVariableName()

  const math = `(${c}-${variable})(${c*c}+${c}${variable}+${variable}^2)` 
  const answer = `${c*c*c}-${variable}^3`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample8 = () => {
  let c =  getRandomInt(6, 10);
  let variable = generateVariableName()

  const math = `(${c}+${variable})(${c*c}-${c}${variable}+${variable}^2)` 
  const answer = `${c*c*c}+${variable}^3`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample9 = () =>  {
  let c =  getRandomInt(1, 5);
  let d =  getRandomInt(2, 5);
  let variable = generateVariableName()

  const math = `(${d}${variable}-${c})(${d*d}${variable}^2+${c*d}${variable}+${c*c})`
  const answer =  `${d*d*d}${variable}^3-${c*c*c}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample10 = () => {
  let c =  getRandomInt(6, 10);
  let d =  getRandomInt(6, 10);
  let variable = generateVariableName()

  const math = `(${d}${variable}+${c})(${d*d}${variable}^2-${c*d}${variable}+${c*c})` 
  const answer = `${d*d*d}${variable}^3+${c*c*c}`
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