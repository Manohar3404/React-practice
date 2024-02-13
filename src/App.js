import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  let [posts,setPosts]=useState([]);
  useEffect(()=>{
  //fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>setPosts(data),[]);
 // axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setPosts(res.data));
//  const fetchData= async()=>{
//   let res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   let posts = await res.json();
//   setPosts(posts);
const fetchData = async() => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  let data = res.data;
  setPosts(data);
  console.log(data);
}

 
 fetchData();

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
