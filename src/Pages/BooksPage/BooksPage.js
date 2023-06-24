import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';



const BookPage = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/books?_expand=author`)
    .then(res => setBooks(res.data))
    .catch(err => console.log(err.message))
}, [])

  return (
    <Container>
      <Link to='/books/create'>Add a new book</Link>

      {books.map(book => (
        <Link key={book.id} to={`/books/${book.id}`}>
            <h1>Title: {book.title}</h1>
            <h2>Author: {book.author.name}</h2>
        </Link>
      ))}
    </Container>
  )
}

export default BookPage