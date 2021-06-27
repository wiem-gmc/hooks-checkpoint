import React from 'react'
import {useHistory} from 'react-router-dom'
import Moviesdata from '../moviesData'



const Navbar = ({match}) => {
     
    const filtredList = Moviesdata.filter(el => el.id == match.params.id)
    const history=useHistory()
    return (
    <div>
        <div style={{display:'flex', justifyContent:'center'}}>
            
            <h2 onClick={()=>history.push('/')} style={{color:'white', cursor:'pointer'}}>Go Back</h2>
                </div>
            
        <div >
                <p style={{color:'white', textAlign:'center'}}>Movie Title: {filtredList[0].title}</p>
                <br></br>
                <p style={{color:'white', textAlign:'center'}}>Movie Description: {filtredList[0].description}</p>
                </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <iframe width="560" height="315" 
            src={filtredList[0].video} title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
            </div>
            
            

           
    )
}

export default Navbar