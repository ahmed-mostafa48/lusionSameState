
import s1 from './Photos/s1.jpg'
import s2 from './Photos/s2.jpg'
import s3 from './Photos/s3.jpg'
import s4 from './Photos/s4.jpg'

import t1 from './Photos/t1.jpg'
import t2 from './Photos/t2.jpg'
import t3 from './Photos/t3.jpg'
import t4 from './Photos/t4.jpg'

import fifth1 from './Photos/fifth1.jpg'
import fifth2 from './Photos/fifth2.jpg'
import fifth3 from './Photos/fifth3.jpg'
import fifth4 from './Photos/fifth4.jpg'
import fifth5 from './Photos/fifth5.jpg'
import fifth6 from './Photos/fifth6.jpg'

import shopC1 from './Photos/shopC1.jpg'
import shopC2 from './Photos/shopC2.jpg'
import shopC3 from './Photos/shopC3.jpg'
import shopC4 from './Photos/shopC4.jpg'
import shopC5 from './Photos/shopC5.jpg'
import shopC6 from './Photos/shopC6.jpg'
import shopC7 from './Photos/shopC7.jpg'
import shopC8 from './Photos/shopC8.jpg'

import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";
import './Style/App.css'



function App() {


  const [homeProducts2] = useState([
    {id : 1 , type : 'Clothing', items : 5 , photo : s1},
    {id : 2 , type : 'Bag Brand', items : 20  , photo : s2},
    {id : 3 , type : 'Accessories', items : 6  , photo : s3},
    {id : 4 , type : 'Shoes', items : 8  , photo : s4},
  ])

  const [bestSellProducts] = useState([
    {id : 1 , type : 'Quilted Gilet With Hood' , price : 150 , photo : t1 },
    {id : 2 , type : 'Quilted Gilet With Hood' , price : 110 , photo : t2 },
    {id : 3 , type : 'Quilted Gilet With Hood' , price : 200 , photo : t3 },
    {id : 4 , type : 'Quilted Gilet With Hood' , price : 250 , photo : t4 },
  ])

  const [styleProducts] = useState([
    {id : 1 , photo : fifth1 },
    {id : 2 , photo : fifth2 },
    {id : 3 , photo : fifth3 },
    {id : 4 , photo : fifth4 },
    {id : 5 , photo : fifth5 },
    {id : 6 , photo : fifth6 },
  ])

  


  const [shopProducts , setShopProducts] = useState([
    {id : 1 , type : 'Hood' , price : 100 , photo : shopC1 , count : 0 , avalibale :20},
    {id : 2 , type : 'Shirt ' , price : 120 , photo : shopC2 , count : 0 , avalibale :5},
    {id : 3 , type : 'Shirt ' , price : 150 , photo : shopC3 , count : 0 , avalibale :14},
    {id : 4 , type : 'shirt' , price : 210 , photo : shopC4 , count : 0 , avalibale :9},
    {id : 5 , type : 'shirt' , price : 200 , photo : shopC5 , count : 0 , avalibale :3},
    {id : 6 , type : 'shirt' , price : 250 , photo : shopC6 , count : 0 , avalibale :8},
    {id : 7 , type : 'Jeans' , price : 320 , photo : shopC7 , count : 0 , avalibale :20},
    {id : 8 , type : 'Jeans' , price : 350 , photo : shopC8 , count : 0 , avalibale :7},
    {id : 9 , type : 'Hood' , price : 105 , photo : shopC1 , count : 0 , avalibale :20},

  ])

 
 
 
  function addProduct (e){
    // console.log(e);
    let updateProducts = shopProducts.map((shopProd)=>{
        if(e.id === shopProd.id && shopProd.avalibale > 0 ) 
        {  
          
          shopProd.count === 0 && (shopProd.stock = shopProd.avalibale);
          
          shopProd.count ++ 
          shopProd.avalibale --
        }

        return shopProd
    })
   
    setShopProducts(
      updateProducts
    )
  }


  // function addProduct (e){
  //   // console.log(e);
  //   let updateProducts = shopProducts.map((shopProd)=>{
  //       if(e.id === shopProd.id && shopProd.avalibale > 0 ) 
  //       {  shopProd.count ++ 
  //         shopProd.avalibale --
  //       }

  //       return shopProd
  //   })
   
  //   setShopProducts(
  //     updateProducts
  //   )
  // }

  
  function decrementProduct (e){
    // console.log(e);
    let updateProducts = shopProducts.map((shopProd)=>{
      if(e.id === shopProd.id && shopProd.count > 1 ) 
        {  shopProd.count -- 
          shopProd.avalibale ++
        }
      return shopProd
    })
   
    setShopProducts(
      updateProducts
    )
  }

  function removeProduct (e){
    // console.log(e);
    let updateProducts = shopProducts.map((shopProd)=>{
      if(e.id === shopProd.id )
      { 
        shopProd.count = 0
        shopProd.avalibale = shopProd.stock
      }
      return shopProd
    })
   
    setShopProducts(
      updateProducts
    )
  }




  function showLength (){
    let newProducts = shopProducts.filter((shopProd)=>{
      return shopProd.count > 0 
    })
      
    return newProducts.length
  }




     /////////way 1 by click on button//////

     const [total , setTotal] = useState(0)

     function getTotal(){
       let totalPrice =  shopProducts.map((p)=>p.count * p.price).reduce((acc,cur)=> acc+cur )
   
       setTotal(totalPrice)
     }




  /////////way 2 direct//////
  function getTotalPrice(){
    let totalPrice =  shopProducts.map((p)=>p.count * p.price).reduce((acc,cur)=> acc+cur )
  
      return totalPrice
    }


   




  return(
    <Fragment>
        <NavBar shopProducts={shopProducts} showLength={showLength} />


    <Routes>
      <Route path="/" element={<Home  homeProducts2={homeProducts2} bestSellProducts={bestSellProducts} styleProducts={styleProducts}  />} />
      <Route path="/Shop" element={<Shop shopProducts={shopProducts} addProduct={addProduct}  />} />
      <Route path="/Cart" element={<Cart shopProducts={shopProducts} addProduct={addProduct} decrementProduct={decrementProduct} removeProduct={removeProduct}  getTotalPrice={getTotalPrice}  getTotal={getTotal} total={total}   showLength={showLength} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
     
    </Fragment>
  )
}


export default App;
