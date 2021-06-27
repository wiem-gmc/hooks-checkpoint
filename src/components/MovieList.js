import data from '../moviesData';
import MovieCard from './MovieCard';
import '../App.css'
import{useState} from 'react'
import AddModal from './AddModal'
// import Data from './Data'


const MovieList = (props) => {
    console.log(props)
    const [movies, setMovies]= useState(data)
    const [isOpen, setIsOpen]= useState(false)
    const closeModal= ()=>setIsOpen(false)
    const addMovie = (w) => setMovies([...movies, w])
    const [filter, setFilter]=useState('')
    const [rate, setRate]=useState(null)
    const showList=movies.filter(el=> rate!==null? el.title.toLowerCase().includes(filter.toLowerCase()) && el.rating === rate:el.title.toLowerCase().includes(filter.toLowerCase()))

  

    return (
        <div >
            <div>
             <nav class="navbar navbar-light bg-light" style={{display:'flex', justifyContent:'center'}}>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" onChange={(e)=>(setFilter(e.target.value))} placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  
  {[1,2,3,4,5].map ( el=> 
  <i key={el} className="fas fa-star" style={{color: el<=rate ?  "yellow":"black", cursor:'pointer'}} onClick={()=>( setRate(el))}></i>)}

</nav>
</div>
            <div style={{display:'flex', justifyContent:'center', marginBottom:'2%', marginTop:'2%'}}>
           
            {/* <Data movie={movies}/> */}
            <button onClick={()=> setIsOpen(true)}>Add Movie</button>
            <AddModal isOpen={isOpen} closeModal={closeModal} addMovie={addMovie}/>
            </div>
      <div className="AppMovie" style={{display:"flex" ,justifyContent:"space-around", flexWrap:"wrap", paddingTop:'space-around'}}>
        {showList.map((el, i) => ( <div style={{SmarginBottom:'5%', marginTop:'5%'}} key={i}> <MovieCard movie={el} idd={el.id}/></div> 
        )
        )
        }
      
       </div>
       </div>
    )

}

export default MovieList