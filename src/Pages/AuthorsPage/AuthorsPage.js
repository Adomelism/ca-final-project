import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthorsPage = () => {

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

if (!authors) {
  return '';
}

  return (
    <Container>
      <Link to='/authors/create' className='link-add'>Add a New Author</Link>
        <h1>List of available authors:</h1>
        <ul className='ul-element'>
            {authors.map(author => (
                <li className='li-element' key={author.id}>
                <Link to ={`/authors/${author.id}`} className='link-to-item'>{author.name}</Link> 
                <div>
                  <button className="button" onClick={() => deleteAuthorHandler(author.id)}>Delete</button>
                  <Link to={`/authors/edit/${author.id}`} className='link-edit'>Edit Author</Link>
                </div>
                </li>))} 
        </ul>
    </Container>
  )
}

export default AuthorsPage