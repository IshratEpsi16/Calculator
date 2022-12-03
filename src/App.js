import React, { useState } from 'react';
import './App.css';

function App() {

  const [output, resultFun] = useState('')
  let clickFun = (event) => {
    resultFun(output.concat(event.target.value))
  }
  let clearFun = () => {
    resultFun('')
  }
  let calculate = () => {
    resultFun(eval(output).toString())
  }

  return (
    <div className="App">
      <h1 className=" text-slate-200 p-5 mt-5 font-bold text-4xl text-center">Welcome to Calculator App</h1>
      <div className='cal-body'>
        <input type='text' className='display' placeholder='0' value={output} />
        <input className='btn' value='7' onClick={clickFun} />
        <input className='btn' value='8' onClick={clickFun} />
        <input className='btn' value='9' onClick={clickFun} />
        <input className='btn' value='+' onClick={clickFun} />
        <input className='btn' value='4' onClick={clickFun} />
        <input className='btn' value='5' onClick={clickFun} />
        <input className='btn' value='6' onClick={clickFun} />
        <input className='btn' value='-' onClick={clickFun} />
        <input className='btn' value='1' onClick={clickFun} />
        <input className='btn' value='2' onClick={clickFun} />
        <input className='btn' value='3' onClick={clickFun} />
        <input className='btn' value='*' onClick={clickFun} />
        <input className='btn' value='.' onClick={clickFun} />
        <input className='btn' value='0' onClick={clickFun} />
        <input className='btn' value='%' onClick={clickFun} />
        <input className='btn' value='/' onClick={clickFun} />
        <input className='btn btn2' value='DEL' onClick={clearFun} />
        <input className='btn btn2' value='=' onClick={calculate} />



      </div>


    </div>
  );
}

export default App;
