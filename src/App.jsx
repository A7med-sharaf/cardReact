import { useState } from "react";
import Table from "./Table";


export default function App() {
  const [product,setproduct] =useState([1,2])
  return (
    <div >   
    {product.map(()=>{
      return  <Table/>

    })}
    </div>
   
   
  )
}
