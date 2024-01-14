import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 10);
    let b = getRandomInt(2, 10);
    let d = getRandomInt(2, 10);
    let c
    if (a>b){c='>'}else{c='<'}
    if (a==b){c='='}

    const math = `${a}+${d} \\text{ и } ${b}+${d}`
    const answer = `${a}+${d}${c}${b}+${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () => {
    let a = getRandomInt(11, 21);
    let b = getRandomInt(11, 21); 
    let c
    if (a>b){c='>'}else{c='<'}
    if (a==b){c='='}

    const math = `${a} \\text{ и } ${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>  {
    let a = getRandomInt(22, 99);
    let b = getRandomInt(22, 99); 
    let c
    if (a>b){c='>'}else{c='<'}
    if (a==b){c='='}

    const math = `${a} \\text{ и } ${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(11, 99);

    const math = `${a} \\text{ и } 0`
    const answer = `${a}>0`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
  let a = getRandomInt(5001, 9999);

  const math = `${a} \\text{ и } ${a-100}`
  const answer = `${a}>${a-100}`
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample6 = () => {
    let a = getRandomInt(100, 350);
    let b = getRandomInt(100, 350); 
    let d = getRandomInt(2, 50); 
    let c
    if (a>b){c='>'}else{c='<'}
    if (a==b){c='='}

    const math = `${a}-${d} \\text{ и } ${b}-${d}`
    const answer = `${a}-${d} ${c} ${b}-${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>{
    let a = getRandomInt(350, 650);

    const math = `${a-10} \\text{ и } ${a}`
    const answer = `${a-10}<${a}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(650, 999);
    let b = getRandomInt(650, 999); 
    let c
    if (a>b){c='>'}else{c='<'}
    if (a==b){c='='}

    const math = `${a} \\text{ и } ${b}`
    const answer = `${a} ${c} ${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>  {
    let a = getRandomInt(1000, 5000);
    let b = getRandomInt(1000, 5000);
    let c
    if (a>b){c='>'}else{c='<'}
    if (a==b){c='='}

    const math = `${a} \\text{ и } ${b}`
    const answer = `${a}${c}${b}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>  {
    let a = getRandomInt(5001, 9999);

    const math = `${a} \\text{ и } ${a-1}`
    const answer = `${a}>${a-1}`
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