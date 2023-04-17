import { getRandomInt, generateVariableName, preformat, shuffleSingle } from '@utility/math-utitility.js'

const createExample1 = () => {
    let a = getRandomInt(-10, 10, 0);  
    let b = getRandomInt(-30, 30, 0);
    let variable = generateVariableName()
  
    const answer = b + a;
  
    const math = `${variable}${a > 0 ? '+' : ''}${a}`
    const condition = `${variable}=${b}`
  
    return {
      id: 'math-1-5',
      math: preformat(math), 
      condition: preformat(condition), 
      answer: preformat(answer)
    }
  }

const createExample2 = () => {
    let a = getRandomInt(-5, 5, 0);  
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-5, 5, 0);
    let variable = generateVariableName()

    const answer = c*b + a;

    const math = `${c}${variable}${a > 0 ? '+' : ''}${a}`
    const condition = `${variable}=${b}`

    return {
      id: 'math-1-2',
      math: preformat(math), 
      condition: preformat(condition), 
      answer: preformat(answer)
    }
}

const createExample3 = () => {
    let a = getRandomInt(-5, 5, 0);  
    let b = getRandomInt(-20, 20, 0);
    let c = getRandomInt(-5, 5, 0);
    let variable = generateVariableName()

    const answer = c*b + a;

    const math = `${a}${c > 0 ? '+' : ''}${c}${variable}`
    const condition = `${variable}=${b}`

    return {
      id: 'math-1-3',
      math: preformat(math), 
      condition: preformat(condition), 
      answer: preformat(answer)
    }
}

const createExample4 = () => {
    let a = getRandomInt(-20, 20, 0);
    let b = getRandomInt(-20, 20, 0);
    let variable = generateVariableName()

    const answer = a+b

    const math = `${variable}+k`
    const condition = `${variable}=${a}; k=${b}`

    return {
      id: 'math-1-4',
      math: preformat(math), 
      condition: preformat(condition), 
      answer: preformat(answer)
    }
}

const createExamples = () => {
  const examples = [
    createExample1(),
    createExample2(),
    createExample3(),
    createExample4()
  ]
  return shuffleSingle(examples)
}
export { createExamples }