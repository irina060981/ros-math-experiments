import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
        let a = getRandomInt(2, 20);
        let b = getRandomInt(2, 10);
        let c = getRandomInt(2, 10);
        let variable = generateVariableName()
    
        const math = `${a}${variable}+${b}${variable}+${c}${variable}`
        const answer = `${a+b+c}${variable}` 
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
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 20);
    let variable = generateVariableName()

    const math = `${a}${variable}+${b}${variable}-${c}${variable}`
    const answer = `${a+b-c}${variable}` 
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
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 20);
    let variable = generateVariableName()

    const math = `-${a}${variable}+${b}${variable}+${c}${variable}`
    const answer = `${-a+b+c}${variable}` 
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
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 9);
    let d = getRandomInt(10, 20);
    let variable = generateVariableName()

    const math = `${a}${variable}-${d}+${b}${variable}+${c}`
    const answer = `${a+b}${variable}${c-d}` 
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
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}+${b}${variable2}+${d}${variable1}+${c}${variable2}`
    const answer = `${a+d}${variable1}+${c+b}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () => {
    let a = getRandomInt(2, 20);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 20);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `${a}${variable1}-${b}${variable2}+${d}${variable1}-${c}${variable2}`
    const answer = `${a+d}${variable1}-${c+b}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(11, 20);
    let b = getRandomInt(11, 20);
    let c = getRandomInt(2, 9);
    let d = getRandomInt(2, 9);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `-${a}${variable1}-${b}${variable2}+${d}${variable1}+${c}${variable2}`
    const answer = `-${a-d}${variable1}-${b-c}${variable2}` 
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
    let c = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()

    const math = `-${a}${variable1}-${b}${variable2}-${d}${variable1}-${c}${variable2}`
    const answer = `-${a+d}${variable1}-${b+c}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let a = getRandomInt(11, 29, 20)/10;
    let b = getRandomInt(11, 29, 20)/10;
    let c = getRandomInt(11, 29, 20)/10;
    let o = (a*10+b*10+c*10)/10;
    let variable = generateVariableName()

    const math = `${a}${variable}+${b}${variable}+${c}${variable}`
    const answer = `${o}${variable}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let a = getRandomInt(11, 29, 20)/10;
    let b = getRandomInt(11, 29, 20)/10;
    let c = getRandomInt(11, 29, 20)/10;
    let o = (a*10+b*10+c*10)/10;
    let variable = generateVariableName()

    const math = `${a}${variable}+${b}${variable}+${c}${variable}`
    const answer = `${o}${variable}` 
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