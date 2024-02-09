import './App.css';
import {useState} from 'react';
import Test1 from './components/Test1';
function App() {
  //state
let username='Manohar';
let getdata=(data)=>{
  console.log('recieved data is ',data);
}

let city='Kurnool';
  return (
    <div className='text-center'>
      <Test1 username={username} city={city} getdata={getdata} />
     
    </div>
  );
}

export default App;
