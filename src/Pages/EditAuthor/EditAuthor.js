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
            // console.log(res.data)
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
    <form onSubmit={editAuthorHandler}>
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

        <button className='link-edit' type="submit">Edit Genre</button>

     </form>

</Container>
  )
}

export default EditAuthor