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
    <form onSubmit={createAuthorHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Author name: </label>
        <input value={name} type="text" name="name" id="name" onChange={nameHandler}></input>
      </div>

      <div className='form-control'>
        <label htmlFor='about'>About author: </label>
        <textarea value={about} name="about" id="about" onChange={aboutHandler}></textarea>
      </div>

      <div className='form-control'>
        <label htmlFor='image'>Author Image: </label>
        <input type="url" value={image} name="image" id="image" onChange={imageHandler}></input>
      </div>


  <button type="submit">Add Author</button>


    </form>

  </Container>
  )
}

export default CreateAuthor