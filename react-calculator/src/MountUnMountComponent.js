// import { useEffect } from "react";

// function MountUnMountComponent(props){
//     useEffect(()=>{
//         console.log('DidMount');
//         const id = setInterval(()=>{
//             console.log('From Interval');
//         }, 3000);
//         return()=> {
//             console.log('Unmount');
//             clearInterval(id);
//         }
//     },[]);
//     console.log(props);
//     return <h1>MountUnMountComponent</h1>
// }
// export default MountUnMountComponent;