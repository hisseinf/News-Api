

import React, { useEffect, useState }  from 'react'
 
import axios from 'axios' 





 export default function Home() {

    const [business, setBusiness] = useState([])
    const [health, setHealth] = useState([])
    const [sports, setSports] = useState([])
    const [technology, setTechnology] = useState([])

useEffect(()=> {
    getNew("business" , setBusiness)   
    getNew("health" ,setHealth)   
    getNew("sports" ,setSports)   
    getNew("technology" ,setTechnology)   
},[])


 async function getNew(category , callback) {
    let {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=185cfcc240b04102802893ceb099579d`)
    callback(data.articles.slice(0,10))
  
    
}


   return (
 <>
 
<div className=' py-3 text-center titil'> <h1>News Api</h1></div>

<div className='container w-75 my-5 ' >

<div className="row  d-flex justify-content-center align-items-center gy-4 py-5">
<div className=' col-lg-4 '>
<div className=" col-lg-4 bord w-50"></div>

   
    <h2 className='py-5 h1'>This is News Business</h2>
   
 
  <div className="col-lg-4 bord w-100"></div>
</div>
{business.map((el , i )=><div key={i} className=' col-lg-2 '>
  <div className=' '>
   <a target="_blank" href={el.url}><img src={el.urlToImage} className=" rounded-3 w-100" alt="" /></a> 
    <h5 className=''>{el.source.name}</h5>
   
   

  </div>
</div>)}

</div>



<div className="row  d-flex justify-content-center align-items-center gy-4 py-5">
<div className=' col-lg-4 '>
<div className=" col-lg-4 bord w-50"></div>

   
    <h2 className='py-5 h1'>This is News <br/> Health</h2>
   
 
  <div className="col-lg-4 bord w-100"></div>
</div>
{health.map((el , i )=><div key={i} className=' col-lg-2 '>
  <div className=' '>
  <a target="_blank" href={el.url}><img src={el.urlToImage} className=" rounded-3 w-100" alt="" /></a>
    <h5 className=''>{el.source.name}</h5>
   
   

  </div>
</div>)}

</div>


<div className="row  d-flex justify-content-center align-items-center gy-4 py-5">
<div className=' col-lg-4 '>
<div className=" col-lg-4 bord w-50"></div>

   
    <h2 className='py-5 h1'>This is News <br/> Sports</h2>
   
 
  <div className="col-lg-4 bord w-100"></div>
</div>
{sports.map((el , i )=><div key={i} className=' col-lg-2 '>
  <div className=' '>
  <a target="_blank" href={el.url}><img src={el.urlToImage} className=" rounded-3 w-100" alt="" /></a>
    <h5 className=''>{el.source.name}</h5>
   
   

  </div>
</div>)}

</div>


<div className="row  d-flex justify-content-center align-items-center gy-4 py-5">
<div className=' col-lg-4 '>
<div className=" col-lg-4 bord w-50"></div>

   
    <h2 className='py-5 h1'>This is News Technology</h2>
   
 
  <div className="col-lg-4 bord w-100"></div>
</div>
{technology.map((el , i )=><div key={i} className=' col-lg-2 '>
  <div className=' '>
  <a target="_blank" href={el.url}><img src={el.urlToImage} className=" rounded-3 w-100" alt="" /></a>
    <h5 className=''>{el.source.name}</h5>
   
   

  </div>
</div>)}

</div>
</div>
 </>
   )
 }
 