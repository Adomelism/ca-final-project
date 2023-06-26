import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EditAuthor = () => {

    const { id } = useParams();

    const [author, setAuthor] = useState('')
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [image, setImage] = useState('')
  
    const nameHandler = (event) => setName(event.target.value)
    const aboutHandler = (event) => setAbout(event.target.value)
    const imageHandler = (event) => setImage(event.target.value)
    
    const navigator = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/authors/${id}`)
        .then(res => {
            setName(res.data.name)
            setAbout(res.data.about)
            setImage(res.data.image)
        })
        }, [id])


    const editAuthorHandler = (event) => {
    event.preventDefault()
    axios.put(`${API_URL}/authors/${id}`, {
        id,
        name,
        about,
        image
    })
     .then(res => {
        toast.success('Selected author was edited.')
        navigator(`/AuthorsPage`)
    })
    .catch(err => toast.error(err.message))


}
  return (
    <Container>
      <div className='form-wrapper'>
        <form onSubmit={editAuthorHandler}>
        <div className='inputBox'>
            <input value={name} required="required" type="text" name="name" id="name" onChange={nameHandler}></input>
            <span>Author Name </span>
          </div>

          <div className='inputBox'>
            <textarea value={about} required="required" name="about" id="about" onChange={aboutHandler}></textarea>
            <span>About Author </span>
          </div>

          <div className='inputBox'>
            <input type="url" required="required" value={image} name="image" id="image" onChange={imageHandler}></input>
            <span>Author Image Link </span>
          </div>

            <button className='link-edit-margin' type="submit">Edit Author</button>

        </form>
      </div>

</Container>
  )
}

export default EditAuthor