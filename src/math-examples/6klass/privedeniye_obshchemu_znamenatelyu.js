import { getRandomInt, shuffleSingle, NOK } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5); 

    const math = `\\frac{1}{${b}} \\text{ и } \\frac{1}{${b*c}}`
    const answer = `\\frac{${c}}{${b*c}} \\text{ и }  \\frac{1}{${b*c}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5); 

    const math = `\\frac{1}{${b*c}} \\text{ и }  \\frac{1}{${b}}`
    const answer = `\\frac{1}{${b*c}} \\text{ и }  \\frac{${c}}{${b*c}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10); 

    const math = `\\frac{1}{${b}} \\text{ и }  \\frac{1}{${b*c}}`
    const answer = `\\frac{${c}}{${b*c}} \\text{ и }  \\frac{1}{${b*c}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }
const createExample4 = () => {
    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10); 

    const math = `\\frac{1}{${b*c}} \\text{ и }  \\frac{1}{${b}}`
    const answer = `\\frac{1}{${b*c}} \\text{ и }  \\frac{${c}}{${b*c}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>  {
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let d = getRandomInt(6, 9); 
    let n = NOK(b*d, b*c)

    const math = `\\frac{1}{${b*d}} \\text{ и }  \\frac{1}{${b*c}}`
    const answer = `\\frac{${n/(b*d)}}{${n}} \\text{ и }  \\frac{${n/(b*c)}}{${n}}`
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
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5); 
    let d = getRandomInt(2, 5);

    const math = `\\frac{${a}}{${b}} \\text{ и }  \\frac{${d}}{${b*c}}`
    const answer = `\\frac{${a*c}}{${b*c}} \\text{ и }  \\frac{${d}}{${b*c}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(2, 5);
    let b = getRandomInt(6, 10);
    let c = getRandomInt(2, 5); 
    let d = getRandomInt(2, 5);

    const math = `\\frac{${a}}{${b*c}} \\text{ и }  \\frac{${d}}{${b}}`
    const answer = `\\frac{${a}}{${b*c}} \\text{ и }  \\frac{${d*c}}{${b*c}}`
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
    let b = getRandomInt(2, 5);
    let c = getRandomInt(6, 10); 
    let d = getRandomInt(2, 5);

    const math = `\\frac{${a}}{${b}} \\text{ и }  \\frac{${d}}{${b*c}}`
    const answer = `\\frac{${a*c}}{${b*c}} \\text{ и }  \\frac{${d}}{${b*c}}`
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
    let b = getRandomInt(6, 10);
    let c = getRandomInt(6, 10); 
    let d = getRandomInt(2, 5);

    const math = `\\frac{${a}}{${b*c}} \\text{ и }  \\frac{${d}}{${b}}`
    const answer = `\\frac{${a}}{${b*c}} \\text{ и }  \\frac{${d*c}}{${b*c}}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 5);
    let f = getRandomInt(2, 5);
    let b = getRandomInt(2, 5);
    let c = getRandomInt(2, 5);
    let d = getRandomInt(2, 5); 
    let n = NOK(b*d, b*c)

    const math = `\\frac{${a}}{${b*d}} \\text{ и }  \\frac{${f}}{${b*c}}`
    const answer = `\\frac{${(a*n)/(b*d)}}{${n}} \\text{ и }  \\frac{${(f*n)/(b*c)}}{${n}}`
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