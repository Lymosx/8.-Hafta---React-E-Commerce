import './App.css'
import Navbar from './components/layout/navbar'
import BodyLayout from './components/layout/body'
import React, { useState } from 'react';
import SiteRoutes from './SiteRoutes';


function App() {
  const [value, setValue] = useState(0);
  function increaseValue() {
    setValue(value + 1);
  }

  function reduceValue() {
    setValue(value - 1);
  }

  function getValue() {
    return value;
  }
  return (
    <>
      <Navbar />

      <div className='container'>
        {/* <main className="mt-5">
          <div className="bg-body-tertiary p-5 rounded">
            <button className='btn btn-primary' onClick={increaseValue}>Arttır</button>
            <h1>{getValue()}</h1>
            <button className='btn btn-danger' onClick={reduceValue}>Azalt</button>
          </div>
        </main> */}
        <SiteRoutes />
        {/* <BodyLayout /> */}
      </div>
    </>

  )

}



export default App
