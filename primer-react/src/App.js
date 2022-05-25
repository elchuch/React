import React, {useState} from 'react';
 function App(){
   const[count,setCount]=useState(0)
  return <div className="container my-5">
    <div className="card text-center my-5 p-3 mb-2 bg-dark text-white">
       <div className="card-body">
       <h1>Contador de José De Jesús</h1>
       <div className="my-5">
        <h2 className="my-5">
          {count}
        </h2>
        <button className="btn btn-outline-primary mx-3 " onClick={()=>setCount(count+1)}>
            Increment
        </button>
        <button className="btn btn-outline-warning mx-3" onClick={()=>setCount(count-1)}>
            Decrement
        </button>
        <button className="btn  btn-outline-light mx-3"onClick={()=>setCount(0)}>
            Reset
        </button>
       </div>

       </div>

    </div>

  </div>;
 }
 export default App;