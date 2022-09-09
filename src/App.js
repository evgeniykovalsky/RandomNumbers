import React,{useState,useEffect} from "react";
import RandomOrg from "random-org";
import Numbers from "./components/Numbers";
import './style.css';

function App() {

  const [value,setValue]=useState([]);
  const [minValue,setMin]=useState(0);
  const [maxValue,setMax]=useState(0);
  const [amountValue,setAmount]=useState(0);
  

  useEffect(()=>{
    let random = new RandomOrg({ apiKey: 'fd0c34e1-c6fc-491d-9154-0fbb2a859f2a' });
    random.generateIntegers({ min: minValue, max: maxValue, n: amountValue })
    .then(function(result) {
          
   //myNumbers(result.random.data);
       setValue(result.random.data);
    });
},[amountValue]);
   
 
 

return (
  <>
   <input type="text" placeholder="Enter min" 
        onChange={event=>setMin(event.target.value)}/>
         <input type="text" placeholder="Enter max" 
        onChange={event=>setMax(event.target.value)}
       
        />
         <input type="text" placeholder="Enter amount" 
        onChange={event=>setAmount(event.target.value)}
        />

  <h1>Random Numbers</h1>
  <div className="res">
  {value.map((item)=><Numbers key={Math.random (). toString (36) .substr (2, 9)} data={item} />)}
 
  </div>
  </>
 );

}


export default App;
