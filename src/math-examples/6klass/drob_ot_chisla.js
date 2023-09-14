import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD } from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 10); 
    let c = getRandomInt(2, 5); 
    let n = NOD (a*c, b);

    const math = `\\frac{${a}}{${b}} ot ${c}`
    const answer = `\\frac{${a*c/n}}{${b/n}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>  {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(11, 20); 
    let c = getRandomInt(6, 10); 
    let n = NOD (a*c, b);

    const math = `\\frac{${a}}{${b}} ot ${c}`
    const answer = `\\frac{${a*c/n}}{${b/n}}`
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
    let b = getRandomInt(11, 20); 
    let c = getRandomInt(2, 5); 
    let n = NOD (a*c, b);

    const math = `\\frac{${a}}{${b}} ot ${c}`
    const answer = `\\frac{${a*c/n}}{${b/n}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample4 = () =>  {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(11, 20); 
    let c = getRandomInt(6, 10); 
    let n = NOD (a*c, b);

    const math = `\\frac{${a}}{${b}} ot  ${c}`
    const answer = `\\frac{${a*c/n}}{${b/n}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample5 = () =>  {
    let a = getRandomInt(21, 29);
    let b = getRandomInt(3, 11); 
    let c = getRandomInt(2, 5); 
    let n = NOD (a, b*c);

    const math = `\\frac{1}{${c}} ot \\frac{${a}}{${b}}`
    const answer = `\\frac{${a/n}}{${b*c/n}}`
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
    let b = getRandomInt(6, 11); 
    let c = getRandomInt(2, 5); 
    let d = getRandomInt(6, 11);
    let n = NOD (a*c, b*d); 

    const math = `\\frac{${a}}{${b}} ot \\frac{${c}}{${d}}`
    const answer = `\\frac{${a*c/n}}{${b*d/n}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>   {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 11); 
    let c = getRandomInt(2, 5); 
    let d = getRandomInt(6, 11); 
    let n = NOD (a*c, b*d); 

    const math = `\\frac{${a}}{${b}} ot \\frac{${c}}{${d}}`
    const answer = `\\frac{${a*c/n}}{${b*d/n}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = 11*getRandomInt(2, 5);
    let b = getRandomInt(6, 11); 
    let c = 11*getRandomInt(2, 5); 
    let d = getRandomInt(6, 11); 
    let n = NOD ((a/11)*d, b*(c/11)); 

    const math = `\\frac{${a}}{${b}} ot \\frac{${d}}{${c}}`
    const answer = `\\frac{${(a/11)*d}}{${b*(c/11)}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = 10*getRandomInt(2, 5);
    let b = getRandomInt(6, 11); 
    let c = 10*getRandomInt(2, 5); 
    let d = getRandomInt(6, 11); 
    let n = NOD ((a/10)*d, b*(c/10)); 

    const math = `\\frac{${a}}{${b}} ot \\frac{${d}}{${c}}`
    const answer = `\\frac{${(a/10)*d/n}}{${b*(c/10)/n}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>  {
    let a = 100*getRandomInt(2, 5);
    let b = getRandomInt(6, 11); 
    let c = 100*getRandomInt(2, 5); 
    let d = getRandomInt(6, 11); 
    let n = NOD ((a/100)*d, b*(c/100)); 

    const math = `\\frac{${a}}{${b}} ot \\frac{${d}}{${c}}`
    const answer = `\\frac{${(a/100)*d/n}}{${b*(c/100)/n}}`
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