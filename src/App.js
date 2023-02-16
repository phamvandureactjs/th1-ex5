import React, {useState} from 'react';
import './App.css';

function App({setUserInput}, {userInput}) {
  const handleChange = (e) =>{
    setUserInput(e.target.value);
}
return (
    <div>
        Name: <input type= "text" placeholder="Please type name" onChange={handleChange} />
        <p>Xin chào {userInput}</p>
    </div>
);

}

export default App;
