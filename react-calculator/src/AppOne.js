
// import React, { useState } from 'react';
// import './App.css';
// import MountUnMountComponent from './MountUnMountComponent';
// const App = () => {
//   const [result, setResult] = useState(true);
import axios from "axios";
import { useEffect, useState } from "react";

  
//   return (
//     <>
//     <div className="App">
//       <h1>App.js</h1>
//       <button onClick={() => setToggle(!toggleState)}>Toggle Component</button>
//       {toggleState ? <MountUnMountComponent/>: null}
//     </div>
//     </>
//   );
// }

// export default App;

function AppOne() {
    const [data, setData] =useState([])
    const Obj = {
        name: "Osama",Age: 22 
    };
        
        

useEffect(()=>{
    console.log("Did Mount");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((e)=>{
        setData(e.data);
        console.log("Data:", data);
    });
},[]);
console.log("Data:", data);
return(
    <div>
        <h1>User's posts</h1>
        <p>Number of posts {data.length}</p>
       <ul>
        {data.map((value)=>{
            return <li>{Obj.name} {Obj.Age}</li>;
        })}
        </ul>
    </div>
);
}
export default AppOne;
