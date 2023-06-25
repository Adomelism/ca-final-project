import Container from '../Components/Container/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';

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

  return (
    <Container>
      <div>
        <h1>Title: {book.title}</h1>
        <h2> Author: {book.author.name}</h2>
        <h3> Copies Sold: {book.soldCopies}</h3>
        <img src={book.url} alt={book.title}></img>
      </div>
    </Container>
  )
}

export default BookPage