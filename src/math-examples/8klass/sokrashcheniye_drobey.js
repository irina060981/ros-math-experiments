import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);
    let variable= generateVariableName()

    const math = `\\frac{${variable}}{${a}${variable}}`
    const answer = `\\frac{1}{${a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(2, 4)*a;
    let c = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let o, o1
    let nod = NOD(`${b}`, `${c}`);
    if (b/nod===1){o = ``} else {o = b/nod}
    if (c/nod===1){o1 = ``} else {o1 = c/nod}
    
    const math = `\\frac{${b}${variable1}}{${c}${variable2}}`
    const answer = `\\frac{${o}${variable1}}{${o1}${variable2}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 5);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let o, o1
    let nod = NOD(`${b}`, `${c}`);
    if (b/nod===1){o = ``} else {o = b/nod}
    if (c/nod===1){o1 = ``} else {o1 = c/nod}
    
    const math = `-\\frac{${b}${variable1}h}{${c}h${variable2}}`
    const answer = `-\\frac{${o}${variable1}}{${o1}${variable2}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(2, 5);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let o, o1
    let nod = NOD(`${b}`, `${c}`);
    if (b/nod===1){o = ``} else {o = b/nod}
    if (c/nod===1){o1 = ``} else {o1 = c/nod}
    
    const math = `\\frac{${b}${variable1}^{2}h}{${c}${variable2}${variable1}}`
    const answer = `\\frac{${o}${variable1}h}{${o1}${variable2}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 5);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let o, o1
    let nod = NOD(`${b}`, `${c}`);
    if (b/nod===1){o = ``} else {o = b/nod}
    if (c/nod===1){o1 = ``} else {o1 = c/nod}
    
    const math = `\\frac{${c}${variable2}${variable1}}{${b}${variable1}^{2}h}`
    const answer = `\\frac{${o1}${variable2}}{${o}${variable1}h}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 5);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let o, o1
    let nod = NOD(`${b}`, `${c}`);
    if (b/nod===1){o = ``} else {o = b/nod}
    if (c/nod===1){o1 = ``} else {o1 = c/nod}
    
    const math = `-\\frac{${b}${variable1}^{${a}}h}{${c}${variable2}${variable1}}`
    const answer = `-\\frac{${o}${variable1}^{${a-1}}h}{${o1}${variable2}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {
    let a = getRandomInt(3, 6);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let o, o1
    let nod = NOD(`${b}`, `${c}`);
    if (b/nod===1){o = ``} else {o = b/nod}
    if (c/nod===1){o1 = ``} else {o1 = c/nod}
    
    const math = `\\frac{-${b}${variable1}^{${a}}${variable2}^2}{-${c}${variable2}${variable1}}`
    const answer = `\\frac{${o}${variable1}^{${a-1}}h}{${o1}}`
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
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let nod = NOD(`${b}`, `${c}`);
    let o = b/nod
    let o1 = c/nod
    
    const math = `\\frac{${c}(${variable1}+${a})}{${b}(${variable1}+${a})}`
    const answer = `\\frac{${o1}}{${o}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let a = getRandomInt(2, 5);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let nod = NOD(`${b}`, `${c}`);
    let o = b/nod
    let o1 = c/nod
    
    const math = `\\frac{${c}(${variable1}+${variable2})}{${b}(${variable1}+${variable2})}`
    const answer = `\\frac{${o1}}{${o}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>{
    let a = getRandomInt(2, 5);
    let c = getRandomInt(2, 4)*a;
    let b = getRandomInt(5, 7)*a;
    let d = getRandomInt(10, 20);
    let e = getRandomInt(21, 30);
    let variable1= generateVariableNameOne()
    let variable2= generateVariableNameTwo()
    let nod = NOD(`${b}`, `${c}`);
    let o = b/nod
    let o1 = c/nod
    
    const math = `\\frac{${c}${variable2}^{${d}}(${variable1}+${a})}{${b}${variable2}^{${e}}(${variable1}+${a})}`
    const answer = `\\frac{${o1}}{${o}${variable2}^${e-d}}`
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