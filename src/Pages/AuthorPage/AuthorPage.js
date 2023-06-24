import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AuthorPage = () => {

  const { id } = useParams();

  const [author, setAuthor] = useState(null)
  const [deleteAuthor, setDeleteAuthor] = useState(false)


  useEffect(() => {

  fetch(`${API_URL}/authors/${id}`)
      .then(res => res.json())
      .then(data => {
        setAuthor(data)
      })
    }, [id])

  if (!author) {
    return '';
  }

  const deleteHandler = () => {
    axios.delete(`${API_URL}/authors/${id}`)
      .then(() => setDeleteAuthor(true));
   
  }

  const authorInfo = deleteAuthor ? 
    <Link to={`/AuthorsPage`}>Author was deleted. Go back to authors List.</Link> : (
      <div>
        <button onClick={deleteHandler}>Delete Author</button>
        <h1>{author.nationality} citizen, born in {author.born} with estimated net worth of {author.netWorth}.</h1>
      </div>
    );


  return (
    <Container>
      {authorInfo}
    </Container>
  )
}

export default AuthorPage