import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const AuthorsPage = () => {

  const [authors, setAuthors] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/authors`)
        .then(res => res.json())
        .then(data => {
          setAuthors(data)        
    })
}, [])

  return (
    <Container>
      <Link to='/authors/create'>Add a New Author</Link>
        <h1>Authors:</h1>
        <ul>
            {authors.map(author => (
                <li key={author.id}>
                 <Link to ={`/authors/${author.id}`}>{author.name}</Link> 
                </li>))} 
        </ul>
    </Container>
  )
}

export default AuthorsPage