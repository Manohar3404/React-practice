import './App.css';
import { useEffect, useState } from 'react';
function App() {
  let [posts,setPosts]=useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>setPosts(data),[]);
},[]);
return (
  <div className='text-center container '>
    <table className='table'>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {
        posts.map((post)=><tr key={posts.id}>
          <td>{post.userId}</td>
          <td>{post.id}</td>
          <td>{post.title}</td>
        </tr>)
}
      </tbody>
    </table>
  </div>
);
}

export default App;
