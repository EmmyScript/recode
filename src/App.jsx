//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useState } from 'react';
import './index.css'

const message = [
  "learn react",
  "Apply for jobs  { isOpen && ? (",
  "invest your new income",
  "invest in bb",
];

/*
function App() {
 const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(true)

 function handlePrevious(){
 if(step > 1) setStep(step -1);
 }
 function handleNext(){
 if (step < 4) setStep(step + 1);

 }
  return(
    <>
      <button className='close'onClick={()=>setIsOpen(!isOpen)}>&times;</button>
{isOpen && (
    <div className='step'> 
    <div className='numbers'>
      <div className={step >= 1 ? 'active' : ''}>1</div>
      <div className={step >= 2 ? 'active' : ''}>2</div>
      <div className={step >= 3 ? 'active' : ''}>3</div>
      <div className={step >= 4 ? 'active' : ''}>4</div>
    </div>

    <p className='message'>
      step {step}: {message[step -1]}
    
    </p>

    <div className='buttons'>
      <button style={{ backgroundColor :'#7950f2', color: '#fff'}} onClick={handlePrevious}>previous</button>
      <button style={{ backgroundColor :'#7950f2', color: '#fff'}} onClick={handleNext}>Next</button>
    </div>
    </div>
    )}
    </>
    
  );
}

export default App
*/

// test morning



function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  function handlePrevious(){
     if(step  > 1)setStep(step-1)
  }
  function handleNext(){
     if(step < 4)setStep(step +1)
  }
  

  return (
    <>
    <button className='close' onClick={()=> setIsOpen(!isOpen)}>&times;</button>
    {isOpen && (
    <div className='step'>
      <div className='numbers'>
        <div className={ step >=1 ? 'active': ''}>1</div>
        <div className={step >=2 ?'active': ''}>2</div>
        <div className={ step >=3 ?'active': ''}>3</div>
        <div className={ step >=4 ?'active': ''}>4</div>
        
      </div>
      <p className='message'>
        step{step}: {message[step-1]}
      </p>
      <div className='buttons'>
        <button style={{backgroundColor:'blue', color:'#fff'}} onClick={handlePrevious}>previous</button>
        <button style={{backgroundColor:'blue', color:'#fff'}} onClick={handleNext}>Next</button>
       
      </div>
    </div>
    )}
    </>
  )
}

export default App





// start from 14 in pg 4