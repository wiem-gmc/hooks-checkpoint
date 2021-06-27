import React from 'react'
import {Card} from 'react-bootstrap'
import '../App.css';
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {

    return (
        <div className="card">
          {/* <Route path="/:id"component={Details}/> */}
    <Card >
  <Card.Img variant="top" src={movie.img}/>
  <Card.Body className="mcard">
    <Card.Title style={{color:'black'}} >{movie.title}</Card.Title>
    <Card.Text style={{color:'black'}}>
      
    {movie.description}
    {movie.year}

    </Card.Text>
    <Link to={`/${movie.id}`} style={{fontSize:'85%',marginLeft:'5%'}}>
    <button variant="primary">More Details</button></Link>
  </Card.Body>
  
</Card>


<div style={{display:'flex', justifyContent:'center', marginBottom:'5%', marginTop:'5%'}}>
{
    [1,2,3,4,5].map( el => (
    
    el<=movie.rating ?

    <i key={el} class="fas fa-star" style={{color:"yellow"}}></i> : <i  key={el} class="fas fa-star"></i>  ) )

    }
    <Link to='/nav' style={{fontSize:'85%',marginLeft:'5%'}}>More Details</Link>
    </div>


{/* <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  /> */}
        </div>
    )
}

export default MovieCard