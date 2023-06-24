import Container from '../Components/Container/Container';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';

const BookPage = () => {

  const { id } = useParams()

  const [book, setBook] = useState(null)
  const [bookDeleted, setBookDeleted] = useState(false)
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState('')
  const [soldCopies, setSoldCopies] = useState('')
  // const [author, setAuthor] = useState('')

  const titleHandler = (e) => setTitle(e.target.value)
  const soldCopiesHandler = (e) => setSoldCopies(e.target.value)
  // const authorHandler = (e) => setAuthor(e.target.value)

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

  const deleteHandler = () => {
    fetch(`${API_URL}/books/${id}`, {
        method: 'DELETE',
})
    .then(res => res.json())
    .then(data => {
      setBookDeleted(true)
    })
  }

  const editHandler = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/books/${id}?_expand=author`, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        soldCopies,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  }

  const booksInfo = bookDeleted ?
  <Link to={`/BooksPage`}>Book was deleted. Back to Books List.</Link> : (
    <div>
      <h1>Title: {book.title}</h1>
      <h2> Author: {book.author.name}</h2>
      <h3> Copies Sold: {book.soldCopies}</h3>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={() => setEdit(true)}>Edit</button>
    </div>
);

const bookForm = (
  <form onSubmit={editHandler}>
    <div className='form-control'>
      <label htmlFor='title'>Title: </label>
      <input value={title} onChange={titleHandler} type ='text' id='title' name='title'></input>
    </div>

    <div className='form-control'>
      <label htmlFor='sold-copies'>Sold Copies: </label>
      <input value={soldCopies} onChange={soldCopiesHandler} type ='number' id='sold-copies' name='sold-copies'></input>
    </div>

    <button>Save</button>
  </form>
)


  return (
    <Container>
      {edit ? bookForm : booksInfo}  
    </Container>
  )
}

export default BookPage