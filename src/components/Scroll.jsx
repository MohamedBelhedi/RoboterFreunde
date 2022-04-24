import React from 'react'
 const Scroll=(props)=>{
    //  children nimmt alle Elemente und zeigt sie an

    // mit jsx object kann man CSS style direkt aufrufen

    return(
  <div style={{overflowY:'scroll',border:'3px solid black',height:'500px'}}> 

    {props.children};

  </div>

 )
 
    };




 export default Scroll;