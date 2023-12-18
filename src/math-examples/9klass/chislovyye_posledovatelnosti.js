import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 20);
    let b = getRandomInt(2, 20);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=n+${b},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${a+b}` 
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
    let b = getRandomInt(2, 20);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=${b}-n,\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${b-a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}


const createExample3 = () =>  {
    let a = getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=n^{2},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${a*a}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=n^{2}-${b},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${a*a-b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 20);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=${b}n-${c},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${b*a-c}` 
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
    let c = getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=${b}n+${c},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${b*a+c}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let a = getRandomInt(9, 99);
    let b = getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=(-1)^{n}\\cdot${b},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${((-1)**a)*b}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>{
    let a = getRandomInt(2, 10);
    let b = a*getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=\\frac{${b}}{n},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${b/a}` 
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
    let b = a*getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=${c}+\\frac{${b}}{n},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${c+(b/a)}` 
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>{
    let a = getRandomInt(2, 20);
    let b = getRandomInt(11, 50);
    let c = getRandomInt(2, 10);
    let variable = generateVariableName()
    
    const math = `${variable}_{n}=(-1)^{n+${c}}\\cdot${b},\\;\\;${variable}_{${a}}-?`
    const answer = `${variable}_{${a}}=${((-1)**a)*b}` 
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