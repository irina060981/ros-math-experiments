import { getRandomInt, shuffleSingle } from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 20);
    let c = getRandomInt(2, 20);
    let d = getRandomInt(2, 20);

    if (b%10===0){b+=1}
    if (d%10===0){d+=1}

    const math = `${b/10}+${(10*c-d)/10}+${(a*10-b)/10}+${d/10}`
    const answer = `${a+c}`;
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
    let c = getRandomInt(2, 20);
    let d = getRandomInt(2, 20);

    if (b%10===0){b+=1}
    if (d%10===0){d+=1}

    const math = `${b/10}+${(10*c-d)/10}+${d/10}+${(10*a-b)/10}`
    const answer = `${a+c}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample3 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 20);
    let c = getRandomInt(2, 20);
    let d = getRandomInt(2, 20);

    if (b%10===0){b+=1}
    if (d%10===0){d+=1}

    const math = `${(10*a+b)/10}+${(10*c+d)/10}-${b/10}-${d/10}`
    const answer = `${a+c}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 20);
    let c = getRandomInt(2, 20);
    let d = getRandomInt(2, 20);

    if (b%10===0){b+=1}
    if (d%10===0){d+=1}

    const math = `-${b/10}+${(10*c+d)/10}+${(10*a+b)/10}-${d/10}`
    const answer = `${a+c}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () => {
    let a = getRandomInt(2, 20);  
    let b = getRandomInt(2, 20);
    let c = getRandomInt(2, 20);
    let d = getRandomInt(2, 20);

    if (b%10===0){b+=1}
    if (d%10===0){d+=1}

    const math = `-${b/10}-${d/10}+${(10*c+d)/10}+${(10*a+b)/10}`
    const answer = `${a+c}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () => {
    let a = getRandomInt(2, 40);

    if (a%10===0){a=(a+1)/10} else{a/=10}

    const math = `0.2 \\cdot  ${a}\\cdot 5`
    const answer = `${a}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample7 = () => {
    let a = getRandomInt(2, 40); 

    if (a%10===0){a=(a+1)/10} else{a/=10}

    const math = `0.25 \\cdot  ${a}\\cdot 4`
    const answer = `${a}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () => {
    let a = getRandomInt(2, 40);  
    
    if (a%10===0){a=(a+1)/10} else{a/=10}

    const math = `2.5 \\cdot  ${a}\\cdot 4`
    const answer = `${a*10}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {
    let a = getRandomInt(2, 20); 

    const math = `1.5 \\cdot  ${a}\\cdot 2`
    const answer = `${a*3}`;
    const condition = undefined
  
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample10 = () => {
    let a = getRandomInt(2, 40);  
    
    if (a%10===0){a=(a+1)/10} else{a/=10}
    
    const math = `2 \\cdot  ${a}\\cdot 5`
    const answer = `${Math.floor(a*10)}`;
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