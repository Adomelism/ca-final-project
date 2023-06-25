import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthorsPage = () => {

  const { id } = useParams()

  const [authors, setAuthors] = useState([])

useEffect(() => {
  axios.get(`${API_URL}/authors`)
  .then(res => setAuthors(res.data))
  .catch(err => toast.error(err.message))
}, [])

const deleteAuthorHandler = (id) => {
  axios.delete(`${API_URL}/authors/${id}`)
    .then(res => {
      const removeAuthorIndex = authors.findIndex(author => author.id === id);
      setAuthors(prevState => prevState.toSpliced(removeAuthorIndex, 1))
      toast.success('Author was deleted.')
      
    })
    .catch(err => toast.error(err.message))
}



  return (
    <Container>
      <Link to='/authors/create'>Add a New Author</Link>
        <h1>Authors:</h1>
        <ul>
            {authors.map(author => (
                <li key={author.id}>
                <Link to ={`/authors/${author.id}`}>{author.name}</Link> 
                <button onClick={() => deleteAuthorHandler(author.id)}>Delete</button>
                <Link to={`/authors/edit/${author.id}`}>Edit Author</Link>
                </li>))} 
        </ul>
    </Container>
  )
}

export default AuthorsPage