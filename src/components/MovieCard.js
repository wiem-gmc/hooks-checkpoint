import React from 'react'
import {Card} from 'react-bootstrap'
import '../App.css';
const MovieCard = ({movie}) => {

    return (
        <div className="card">
    <Card >
  <Card.Img variant="top" src={movie.img}/>
  <Card.Body className="mcard">
    <Card.Title style={{color:'black'}} >{movie.title}</Card.Title>
    <Card.Text style={{color:'black'}}>
      
    {movie.description}
    {movie.year}

    </Card.Text>
    <button variant="primary">Go somewhere</button>
  </Card.Body>
  
</Card>


<div>
{
    [1,2,3,4,5].map( el => (
    
    el<=movie.rating ?

    <i key={el} class="fas fa-star" style={{color:"yellow"}}></i> : <i  key={el} class="fas fa-star"></i>  ) )

    }
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