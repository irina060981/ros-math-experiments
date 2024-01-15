import { getRandomInt, generateVariableName, shuffleSingle, NOD } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(2, 5)*a;  

    const math = `\\frac{${a}}{${b}}`
    const answer = `\\frac{1}{${b/a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>{
    let a = getRandomInt(6, 10);  
    let b = getRandomInt(2, 5)*a;  

    const math = `\\frac{${a}}{${b}}`
    const answer = `\\frac{1}{${b/a}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5); 
    let d = NOD(a*c, b*c) 

    const math = `\\frac{${a*c}}{${b*c}}`
    const answer = `\\frac{${(a*c)/d}}{${(b*c)/d}}`
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
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5); 
    let d = NOD(a*c, b*c) 

    const math = `\\frac{${a*c}}{${b*c}}`
    const answer = `\\frac{${(a*c)/d}}{${(b*c)/d}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let a = getRandomInt(2, 5);  
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5); 
    let d = NOD(a*c, b*c) 
    let variable= generateVariableName()

    const math = `\\frac{${a*c}${variable}}{${b*c}${variable}}`
    const answer = `\\frac{${(a*c)/d}}{${(b*c)/d}}`
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
    let o
    let d = NOD(a, c) 
    if(c/d===1){o=`${a/d}`} else {o=`\\frac{${a/d}}{${c/d}}`}

    const math = `\\frac{${a}\\cdot${b}}{${b}\\cdot${c}}`
    const answer = `${o}`
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
    let c = getRandomInt(11, 20);
    let o
    let d = NOD(a, c) 
    if(c/d===1){o=`${a/d}`} else {o=`\\frac{${a/d}}{${c/d}}`}

    const math = `\\frac{${a}\\cdot${b}}{${b}\\cdot${c}}`
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(21, 30);  
    let b = getRandomInt(21, 30);
    let c = getRandomInt(21, 30);
    let o
    let d = NOD(a, c) 
    if(c/d===1){o=`${a/d}`} else {o=`\\frac{${a/d}}{${c/d}}`}

    const math = `\\frac{${a}\\cdot${b}}{${b}\\cdot${c}}`
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let m = getRandomInt(2, 5); 
    let a = getRandomInt(2, 10)*m;  
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10)*m;
    let f = getRandomInt(2, 10);
    let o
    let d = NOD(a*b, c*f) 
    if((c*f)/d===1){o=`${(a*b)/d}`} else {o=`\\frac{${(a*b)/d}}{${(c*f)/d}}`}

    const math = `\\frac{${a}\\cdot${b}}{${f}\\cdot${c}}`
    const answer = `${o}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let m = getRandomInt(2, 5); 
    let a = getRandomInt(2, 10)*m;  
    let b = getRandomInt(2, 10);
    let c = getRandomInt(2, 10)*m;
    let f = getRandomInt(2, 10);
    let o
    let d = NOD(a*b, c*f) 
    if((c*f)/d===1){o=`${(a*b)/d}`} else {o=`\\frac{${(a*b)/d}}{${(c*f)/d}}`}

    const math = `\\frac{${a}\\cdot${b}}{${f}\\cdot${c}}`
    const answer = `${o}`
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