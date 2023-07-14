import React, { useState } from 'react';
import './index.css';
const App=()=>{
  let newTime;
  const[ctime,setCtime]=useState(newTime);

  function UpdateTime(){
    newTime=new Date().toLocaleTimeString();
    setCtime(newTime);
  }
setInterval(UpdateTime,1000);
  return (
<><div className='container'>
<h1 id='time'>{ctime}</h1>
</div>
</>
  );
};
export default App;
