import Container from '../Components/Container/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import Card from '../Components/Card/Card';

const BookPage = () => {

  const { id } = useParams()

  const [book, setBook] = useState(null)
  const [title, setTitle] = useState('')


  useEffect(() => {
    fetch(`${API_URL}/books/${id}?_expand=author`)
    .then(res => res.json())
    .then(data => {
      setBook(data)
      setTitle(data.title)
    })
  }, [id])

  if (!book) {
    return '';
  }

  const infoElement = `${book.soldCopies} sold copies of the book.`

  return (
    <Container>
      <Card 
      title={book.title}
      author={book.author.name}
      imageUrl={book.url}
      info={infoElement}
      />
    
    </Container>
  )
}

export default BookPage