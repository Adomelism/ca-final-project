import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AuthorPage = () => {

  const { id } = useParams();

  const [author, setAuthor] = useState(null)

  useEffect(() => {

  fetch(`${API_URL}/authors/${id}?_embed=books`)
      .then(res => res.json())
      .then(data => {
        setAuthor(data)
      })
    }, [id])

  if (!author) {
    return '';
  }


  const authorInfo = 
      <div>
        <h1>{author.name}</h1>
        <img src={author.image} alt={author.name}></img>
        <p>{author.about}</p>
        <span>If you are fascinated by this author, check list of available <Link to={`/books/${author.id}`}>books!</Link></span>
      </div>


  return (
    <Container>
      {authorInfo}
    </Container>
  )
}

export default AuthorPage