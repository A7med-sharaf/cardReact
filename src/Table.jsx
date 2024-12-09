import { useState } from "react";
import barber from "./assets/barber.jpg";
 export default function Table() {
    const [counter,setcounter]=useState()
   return (
    <div className="col-12 col-sm-6 col-md-3 m-auto d-flex justify-content-center align-content-center">
    <div className="card" style={{width: "18rem"}}>
  <img src={barber} className="card-img-top" alt="..." />
  <div className="card-body d-flex align-content-center flex-column justify-content-center">
    <h5 className="card-title text-center" >Barber</h5>
   
    <h1 className="card-text text-center fs-1">{counter}</h1>
    <a href="#" className="btn btn-primary " onClick={()=>{setcounter(counter + 1)  }}>Book now </a>
  </div>
</div>
</div>
   )
 }
 