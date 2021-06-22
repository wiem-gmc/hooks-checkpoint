import React, {useState} from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// eslint-disable-next-line

function AddModal({isOpen, closeModal, addMovie}){

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [year, setYear] = useState(null)
  const [img, setImg] = useState('')
  const [rating, setRating] = useState(0)

    return (
      <div>
        
        <Modal
          isOpen={isOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >

<form onSubmit={(e)=>{
  e.preventDefault();
  addMovie({title,description,img,year,rating})
  closeModal()
  setTitle(''); setYear(null); setDescription(''); setImg(''); setRating(0)
}

}>
  <div class="form-group">
    <label for="exampleInputEmail1">Movie Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Movie Title" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Movie description</label>
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter Movie description" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail3">Year</label>
    <input type="number" min="1990" max="2021" class="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" onChange={(e)=>setYear(e.target.value)} placeholder="Enter Year"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail4">Movie URL</label>
    <input type="text" class="form-control" id="exampleInputEmail4" aria-describedby="emailHelp" onChange={(e)=>setImg(e.target.value)} placeholder="Enter Movie URL"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail5">Movie Rating</label>
    <input type="number" min="1" max="5" class="form-control" id="exampleInputEmail5" aria-describedby="emailHelp" onChange={(e)=>setRating(e.target.value)} placeholder="Enter Movie Rating" required/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          <button onClick={closeModal}>close</button>
         
        </Modal>
      </div>
    );
}

export default AddModal