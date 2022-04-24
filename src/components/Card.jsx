
import React from 'react'
// import logo from './kaffe.svg'
// import './App.css'

const Card=({name,email,id})=>{
    // const{name,email}=props
return(




        
     
       
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">

        <img className="" src={`https://robohash.org/${id}?10x10`} alt="robots" srcset="" />


        <div>

<h2>{name}</h2>
<p>{email}</p>
</div>

        </div>
    



);

}
export default Card;