import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card';

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

  return (
    <Container>

      <Card 
      title={author.name}
      imageUrl={author.image}
      info={author.about}
      />

    </Container>
  )
}

export default AuthorPage