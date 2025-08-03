import { useState } from "react";
import "./App.css"

function App() {
 const product = [
    {
      ModelName: "Douge Challenger",
      desc: "A powerful muscle car",
      price: "100090",
      img: "/images/douge.jpg",
    },
     {
      ModelName: "Toyota Legender",
      desc: "Stylish and premium SUV",
      price: "50000",
      img: "/images/legender.jpg",
    },
    {
      ModelName: "BMW M5",
      desc: "Performance meets luxury",
      price: "90000",
      img: "/images/m5.jpg",
    },
    {
      ModelName: "Vintage Car",
      desc: "Classic and timeless",
      price: "120000",
      img: "/images/vintage.jpg",
    } 

  ];

const addTocart = (product)=>{
fetch("http://localhost:5000/api/v1/product/addto",{

method:"POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(product)
})
.then(res=>res.json())
.then(data=>console.log("data saved to db",data))
  .catch(error => {
      console.error("Error saving product:", error);
    });

}


  
const [CartItem,ItemNO] =  useState(0) 

  return(

<>
<nav className="navbar">
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Cart</a></li>
</ul>
<button className="cartNo" >{CartItem}</button>

</nav>
<section className='main-container'>




      {product.map((item,index)=>{

        return(

        <div className="card" key={index}>

        <img src={item.img} alt="img"/>
        <h1>{item.ModelName}</h1>
        <p>{item.desc}</p>
        <p>price : {item.price}</p>
          <button className="btn" onClick={()=>{
            
            ItemNO(CartItem+1)
            addTocart(item)
          }}>
            
            Add To Cart</button>
        </div>

      )})}

  

           


</section>

</>

  )
  
}

export default App;
