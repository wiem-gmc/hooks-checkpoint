import './App.css';
// import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from 'react';
import MovieList from './components/MovieList';

// import MovieList from './MovieList'
// import movieCard from MovieCard;



// const A = () => {
//   return (
//     <Modal show={true}>
//       <Modal.Header>Hi</Modal.Header>
//       <Modal.Body>asdfasdf</Modal.Body>
//       <Modal.Footer>This is the footer</Modal.Footer>
//     </Modal>
//   );
// };
class App extends Component{
    
  render()
  
  {
    return (
    <div className="App AppMovie">
      <header className="App-header">
        <MovieList/>     

      </header>
    </div>
  );
}
}
export default App;