import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookPage = () => {

  const { id } = useParams()
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/books?_expand=author`)
    .then(res => setBooks(res.data))
    .catch(err => console.log(err.message))
}, [])

const deleteBookHandler = (id) => {
  axios.delete(`${API_URL}/books/${id}`)
        .then(res => {
            const removeBookIndex = books.findIndex(book => book.id === id);
            setBooks(prevState => prevState.toSpliced(removeBookIndex, 1))
            toast.success('Book genre was deleted.')
        })
        .catch(err => toast.error(err.message))
}

  return (
    <Container>
        <Link to='/books/create'>Add a new book</Link>

        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title} by {book.author.name}</Link>
              <button onClick={() => deleteBookHandler(book.id)}>Delete</button>
              <Link to={`/books/edit/${book.id}`}>Edit a book</Link>
            </li>
          ))}
        </ul>

    </Container>
  )
}

export default BookPage