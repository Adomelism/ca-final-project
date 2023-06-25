import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {

  const [authors, setAuthors] = useState([])
  const [categories, setCategories] = useState([])
  const [books, setBooks] = useState('')

  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [soldCopies, setSoldCopies] = useState('')

  const authorsHandler = (event) => setAuthor(event.target.value)
  const categoriesHandler = (event) => setCategory(event.target.value)
  const titleHandler = (event) => setTitle(event.target.value)
  const urlHandler = (event) => setUrl(event.target.value)
  const soldCopiesHandler = (event) => setSoldCopies(event.target.value)

  useEffect(() => {
    axios.get(`${API_URL}/authors`)
    .then(res => {
      setAuthors(res.data)
      setAuthor(res.data[0].id)
    })
  }, [])

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => {
      setCategories(res.data)
      setCategory(res.data[0].id)
    })
  }, [])

  useEffect(() => {
    axios.get(`${API_URL}/books`)
    .then(res => {
      setBooks(res.data)
    })
  }, [])

  const navigator = useNavigate();

  const createBookHandler = (event) => {
    event.preventDefault()
   
    const newBook = {
      authorId: Number(author),
      categoryId: Number(category),
      title,
      url,
      soldCopies,
    }
    axios.post(`${API_URL}/books`, newBook)
    .then(res => {
      toast.success('Book was added to the list.')
      navigator(`/BooksPage`);
    })
    .catch(err => toast.error(err.message))
  }
  
console.log(authors)
  return (
    <Container>
    <form onSubmit={createBookHandler}>
      <div className='form-control'>
        <label htmlFor='author'>Author: </label>
        <select value={author} id='author' name='author' onChange={authorsHandler}>
          {authors.map(author => <option value={author.id} key={author.id}>{author.name}</option>)}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="category">Genre: </label>
        <select value={category} id='category' name='category' onChange={categoriesHandler}>
          {categories.map(category => <option value={category.id} key={category.id}>{category.genre}</option>)}
        </select>
      </div>

        <div className='form-control'>
          <label htmlFor='title'>Book Title: </label>
          <input value={title} type="text" name="title" id="title" onChange={titleHandler}></input>
        </div>

        <div className='form-control'>
          <label htmlFor='url'>Book cover url: </label>
          <input value={url} type="url" name="url" id="url" onChange={urlHandler}></input>
        </div>

        <div className='form-control'>
          <label htmlFor='soldCopies'>Number of sold book copies: </label>
          <input value={soldCopies} type="number" name="soldCopies" id="soldCopies" onChange={soldCopiesHandler}></input>
        </div>

  <button type="submit">Submit Book</button>


    </form>

  </Container>
  )
}

export default CreateBook