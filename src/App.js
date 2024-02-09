import './App.css';
import { useState } from 'react';
import Card from './components/Card.js';

function App() {
 const userDetails = [
  {
    username: 'Manohar',
    age: 20,
    city: 'Kurnool',
  },
  {
    username: 'Tagore',
    age: 20,
    city: 'Atmakur',
  },
  {
    username: 'Kavitha',
    age: 20,
    city: 'Julekal',
  },
 ];

 let [user, setDetails] = useState(userDetails);

 return (
  <div className='text-center bg-info '>
    <h1>User Details</h1>
    {
      user.map((obj,ind)=><Card user={obj} key={ind}/>)
    }
    
  </div>
 );
}

export default App;
