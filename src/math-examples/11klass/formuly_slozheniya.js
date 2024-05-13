import { getRandomInt, shuffleSingle} from '@/utility/math-utitility.js'
import { v4 as uuidv4 } from 'uuid'

const createExample1 = () => {//sin+

  let a = getRandomInt(2, 6, 5)*15;
  let b = getRandomInt(5, a-5);
  let o
  if (a==30) {o=`\\frac{1}{2}`}
  if (a==45) {o=`\\frac{\\sqrt{2}}{2}`}
  if (a==60) {o=`\\frac{\\sqrt{3}}{2}`}
  if (a==90) {o=`1`}
  
  const math = `\\sin${b}^\\circ\\cos${a-b}^\\circ+\\cos${b}^\\circ\\sin${a-b}^\\circ`
  const answer = `${o}`
      
  const condition = undefined

  return {
    id: uuidv4(),
    math: math, 
    condition: condition, 
    answer: answer
  }
}

const createExample2 = () =>  {//sin-

    let a = getRandomInt(2, 6, 5)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\frac{1}{2}`}
    if (a==45) {o=`\\frac{\\sqrt{2}}{2}`}
    if (a==60) {o=`\\frac{\\sqrt{3}}{2}`}
    if (a==90) {o=`1`}
    
    const math = `\\sin${a+b}^\\circ\\cos${b}^\\circ-\\cos${a+b}^\\circ\\sin${b}^\\circ`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample3 = () =>  {//cos+

    let a = getRandomInt(2, 6, 5)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\frac{\\sqrt{3}}{2}`}
    if (a==45) {o=`\\frac{\\sqrt{2}}{2}`}
    if (a==60) {o=`\\frac{1}{2}`}
    if (a==90) {o=`0`}
    
    const math = `\\cos${b}^\\circ\\cos${a-b}^\\circ-\\sin${b}^\\circ\\sin${a-b}^\\circ`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample4 = () => {//cos-

    let a = getRandomInt(2, 6, 5)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\frac{\\sqrt{3}}{2}`}
    if (a==45) {o=`\\frac{\\sqrt{2}}{2}`}
    if (a==60) {o=`\\frac{1}{2}`}
    if (a==90) {o=`0`}

    const math = `\\cos${a+b}^\\circ\\cos${b}^\\circ+\\sin${a+b}^\\circ\\sin${b}^\\circ`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample5 = () =>   {//sin+

    let a = getRandomInt(2, 20);
    let b = getRandomInt(21, 50);
    
    const math = `\\sin${b}\\alpha\\cos${a}\\alpha+\\cos${b}\\alpha\\sin${a}\\alpha`
    const answer = `\\sin${a+b}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample6 = () =>   {//cos-

    let a = getRandomInt(2, 20);
    let b = getRandomInt(2, 20);
    if(a==b){b=b+1}
    
    const math = `\\cos${b}\\alpha\\cos${a}\\alpha+\\sin${b}\\alpha\\sin${a}\\alpha`
    const answer = `\\cos${a-b}\\alpha`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample7 = () =>   {//tg+

    let a = getRandomInt(2, 4)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\frac{\\sqrt{3}}{3}`}
    if (a==45) {o=`1`}
    if (a==60) {o=`\\sqrt{3}`}
    
    const math = `\\frac{\\mathrm{tg${b}^\\circ+tg${a-b}^\\circ}}{1-\\mathrm{tg${b}^\\circ tg${a-b}^\\circ}}`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample8 = () =>  {//tg-

    let a = getRandomInt(2, 4)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\frac{\\sqrt{3}}{3}`}
    if (a==45) {o=`1`}
    if (a==60) {o=`\\sqrt{3}`}
    
    const math = `\\frac{\\mathrm{tg${a+b}^\\circ-tg${b}^\\circ}}{1+\\mathrm{tg${a+b}^\\circ tg${b}^\\circ}}`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }

const createExample9 = () => {//ctg+

    let a = getRandomInt(2, 4)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\sqrt{3}`}
    if (a==45) {o=`1`}
    if (a==60) {o=`\\frac{\\sqrt{3}}{3}`}
    
    const math = `\\frac{\\mathrm{ctg${b}^\\circ ctg${a-b}^\\circ-1}}{\\mathrm{ctg${b}^\\circ+ctg${a-b}^\\circ}}`
    const answer = `${o}`
        
    const condition = undefined
  
    return {
      id: uuidv4(),
      math: math, 
      condition: condition, 
      answer: answer
    }
  }


const createExample10 = () =>  {//ctg-

    let a = getRandomInt(2, 4)*15;
    let b = getRandomInt(5, a-5);
    let o
    if (a==30) {o=`\\sqrt{3}`}
    if (a==45) {o=`1`}
    if (a==60) {o=`\\frac{\\sqrt{3}}{3}`}
    
    const math = `\\frac{\\mathrm{ctg${a+b}^\\circ ctg${b}^\\circ+1}}{\\mathrm{ctg${a+b}^\\circ-ctg${b}^\\circ}}`
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