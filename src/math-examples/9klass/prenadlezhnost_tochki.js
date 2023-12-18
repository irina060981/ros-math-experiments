import { getRandomInt, generateVariableName, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(-20, -2);
    let b = getRandomInt(2, 5, 0);
    let c =a*b;

    const math = `y=${a}x${c},\\; A(0;${c})`
    const answer = `A\\in y=${a}x${c}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample2 = () => {
    let a = getRandomInt(2, 10);
    
    const math = `y=${a}x,\\; B(0;0)`
    const answer = `B\\in y=${a}x`
    const condition = undefined
    
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
    }

const createExample3 = () =>  {
    let a = getRandomInt(-20, -2);
    let b = getRandomInt(-5, 5, 0);
    if(b > 0) {b = '+'+b};
    let e = getRandomInt(-5, 5, 0);
    let f = getRandomInt(-20, 20, 0);
    let t
    if(f===a*e+b){t = `\\in`} else {t=`\\not\\in`}

    const math = `y=${a}x${b},\\; C(${e};${f})`
    const answer = `C ${t} y=${a}x${b}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample4 = () =>{
    let a = getRandomInt(-20, -2);
    let b = getRandomInt(-5, 5, 0);
    if(b > 0) {b = '+'+b};
    let e = getRandomInt(-5, 5, 0);
    let f = getRandomInt(-20, 20, 0);
    let t
    if(f===a*e+b){t = `\\in`} else {t=`\\not\\in`}

    const math = `y=${a}x${b},\\; D(${e};${f})`
    const answer = `C ${t} y=${a}x${b}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample5 = () =>  {

    let e = getRandomInt(-10, 10, 0);

    const math = `y=x^2,\\; E(${e};${e*e})`
    const answer = `E \\in y=x^2`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample6 = () =>  {

    let e = getRandomInt(-5, 5, 0);
    let d = getRandomInt(2, 5, 0);

    const math = `y=${d}x^2,\\; F(${e};${d*e*e})`
    const answer = `F \\in y=${d}x^2`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample7 = () => {
    let e = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let d = (e+1)*c

    const math = `y= \\frac{${d}}{x+1},\\; H(${e};${c})`
    const answer = `H \\in y=\\frac{${d}}{x+1}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample8 = () =>  {
    let e = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let k = getRandomInt(2, 10);
    let d = e*c

    const math = `y= \\frac{${d}}{x+${k}},\\; G(${e};${c})`
    const answer = `G \\not\\in y=\\frac{${d}}{x+${k}}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample9 = () =>  {
    let e = getRandomInt(2, 10);
    let c = getRandomInt(2, 10);
    let k = getRandomInt(2, 10);
    let t
    if(k+e===c**0.5){t = `\\in`} else {t=`\\not\\in`}

    const math = `y= \\sqrt{${k}+x},\\; K(${e};${c})`
    const answer = `K ${t} y= \\sqrt{${k}+x}`
    const condition = undefined

    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
}

const createExample10 = () =>  {
    let e = getRandomInt(11, 20);
    let c = getRandomInt(11, 20);
    let k = getRandomInt(11, 20);
    let t
    if(k-e===c**0.5){t = `\\in`} else {t=`\\not\\in`}

    const math = `y= \\sqrt{${k}-x},\\; T(${e};${c})`
    const answer = `T ${t} y= \\sqrt{${k}+x}`
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
