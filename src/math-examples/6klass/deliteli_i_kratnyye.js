import { getRandomInt, generateVariableName, generateVariableNameTwo, generateVariableNameOne, shuffleSingle, NOD, DEL} from '@utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2,6);
    let d = DEL(a)

    const math = `deliteli ${a}`
    const answer = `${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample2 = () =>   {
    let a = getRandomInt(7,12);
    let d = DEL(a)

    const math = `deliteli ${a}`
    const answer = `${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () =>    {
    let a = getRandomInt(13,21);
    let d = DEL(a)

    const math = `deliteli ${a}`
    const answer = `${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample4 = () =>  {
    let a = getRandomInt(22,31);
    let d = DEL(a)

    const math = `deliteli ${a}`
    const answer = `${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }



const createExample5 = () =>  {
    let a = getRandomInt(32,45);
    let d = DEL(a)

    const math = `deliteli ${a}`
    const answer = `${d}`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>  {
    let a = getRandomInt(2,6);

    const math = `kratnyye ${a}`
    const answer = `${a*2}, ${a*3}, ${a*4}...`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () =>  {
    let a = getRandomInt(7, 12);

    const math = `kratnyye ${a}`
    const answer = `${a*2}, ${a*3}, ${a*4}...`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(12, 21);

    const math = `kratnyye ${a}`
    const answer = `${a*2}, ${a*3}, ${a*4}...`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () =>   {
    let a = getRandomInt(22, 30);

    const math = `kratnyye ${a}`
    const answer = `${a*2}, ${a*3}, ${a*4}...`
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () =>   {
    let a = getRandomInt(31, 35);

    const math = `kratnyye ${a}`
    const answer = `${a*2}, ${a*3}, ${a*4}...`
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