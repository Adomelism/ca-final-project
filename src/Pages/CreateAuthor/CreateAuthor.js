import { useState, useEffect } from 'react';
import Container from '../Components/Container/Container';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAuthor = () => {

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [image, setImage] = useState('')

  const nameHandler = (event) => setName(event.target.value)
  const aboutHandler = (event) => setAbout(event.target.value)
  const imageHandler = (event) => setImage(event.target.value)
  
  const navigator = useNavigate();

  const createAuthorHandler = (event) => {
    event.preventDefault();

    const newAuthor = {
      name,
      about,
      image
    }
    axios.post(`${API_URL}/authors`, newAuthor)
    .then(res => {
    toast.success('Author was added to the list.')
    navigator(`/AuthorsPage`);
  })
  .catch(err => toast.error(err.message))
  }
  return (
    <Container>
      <div className='form-wrapper'>
        <form onSubmit={createAuthorHandler}>
          <div className='inputBox'>
            <input value={name} type="text" required="required" name="name" id="name" onChange={nameHandler}></input>
            <span>Author Name </span>
          </div>

          <div className='inputBox'>
            <textarea value={about} required="required" name="about" id="about" onChange={aboutHandler}></textarea>
            <span>About Author </span>
          </div>

          <div className='inputBox'>
            <input type="url" value={image} required="required" name="image" id="image" onChange={imageHandler}></input>
            <span>Author Image Link </span>
          </div>
          
          <button className='link-add-margin' type="submit">Add Author</button>
        </form>
      </div>



  </Container>
  )
}

export default CreateAuthor