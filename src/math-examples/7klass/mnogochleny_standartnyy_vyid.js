import { getRandomInt, generateVariableName, generateVariableNameOne, generateVariableNameTwo, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(2, 15);
    let b = getRandomInt(2, 15);
    let c = getRandomInt(2, 15);

    const math = `${a}${variable1}+${b}${variable1}${variable2}+${c}${variable1}${variable2}`
    const answer = `${a}${variable1}+${b+c}${variable1}${variable2}` 
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
    let a = getRandomInt(2, 15);
    let b = getRandomInt(-20, -10);
    let c = getRandomInt(2, 9);

    const math = `${a}${variable2}${b}${variable1}${variable2}+${c}${variable1}${variable2}`
    const answer = `${a}${variable2}${b+c}${variable1}${variable2}` 
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
    let a = getRandomInt(2, 15);
    let b = getRandomInt(-20, -10);
    let c = getRandomInt(2, 9);
    let d = getRandomInt(2, 9);

    const math = `${b}${variable1}${variable2}+${c}${variable1}${variable2}+${a}${variable2}^{${d}}`
    const answer = `${a}${variable2}^{${d}}${b+c}${variable1}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(2, 15);
    let b = getRandomInt(-20, -10);
    let c = getRandomInt(2, 9);
    let d = getRandomInt(2, 9);

    const math = `${c}${variable1}${variable2}${b}${variable1}${variable2}+${a}${variable2}^{${d}}`
    const answer = `${a}${variable2}^{${d}}${b+c}${variable1}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(2, 15);
    let b = getRandomInt(2, 15);
    let c = getRandomInt(2, 9);
    
    const math = `${a}${variable1}^{${c}}+${variable1}${variable2}+${b}${variable1}^{${c}}+${variable1}${variable2}`
    const answer = `${a+b}${variable1}^{${c}}+2${variable1}${variable2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>{
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(2, 15);
    let b = getRandomInt(2, 15);
    let c = getRandomInt(2, 9);
    let d = getRandomInt(3, 9);

    const math = `${a}${variable1}^{${c}}+${d}${variable1}${variable2}+${b}${variable1}^{${c}}-${variable1}${variable2}`
    const answer = `${a+b}${variable1}^{${c}}+${d-1}${variable1}${variable2}` 
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
    let a = getRandomInt(-15, -2);
    let b = getRandomInt(-15, -2);
    let c = getRandomInt(2, 9);
    let d = getRandomInt(3, 9);
    let e = getRandomInt(3, 9);

    const math = `${a}${variable1}^{${c}}+${d}${variable1}${variable2}${b}${variable1}^{${c}}+${e}${variable1}${variable2}`
    const answer = `${a+b}${variable1}^{${c}}+${d+e}${variable1}${variable2}` 
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
    let b = getRandomInt(2, 20);
    let c = getRandomInt(3, 10);
    const math = `${a}${variable1}^{2}+${variable1}${variable2}^{2}+${variable1}^{${c}}+${variable1}^{2}+${b}${variable1}${variable2}^{2}`
    const answer = `${variable1}^{${c}}+${a+1}${variable1}^{2}+${b+1}${variable1}${variable2}^{2}` 
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
    let a = getRandomInt(2, 20);
    let b = getRandomInt(3, 20);
    let c = getRandomInt(3, 10);
    const math = `${a}${variable1}^{2}-${variable1}${variable2}^{2}+${variable1}^{${c}}+${variable1}^{2}+${b}${variable1}${variable2}^{2}`
    const answer = `${variable1}^{${c}}+${a+1}${variable1}^{2}+${b-1}${variable1}${variable2}^{2}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () => {
    let variable1 = generateVariableNameOne()
    let variable2 = generateVariableNameTwo()
    let a = getRandomInt(2, 20);
    let b = getRandomInt(3, 20);
    let c = getRandomInt(3, 10);
    const math = `${a}${variable1}^{2}-${variable1}${variable2}^{2}-${variable1}^{${c}}+${variable1}^{2}+${b}${variable1}${variable2}^{2}`
    const answer = `-${variable1}^{${c}}+${a+1}${variable1}^{2}+${b-1}${variable1}${variable2}^{2}` 
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