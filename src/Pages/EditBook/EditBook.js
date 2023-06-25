import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {

    const { id } = useParams()
    // const { bId, cId } = useParams()

    const [authors, setAuthors] = useState([])
    const [categories, setCategories] = useState([])


    const [authorId, setAuthorId] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [soldCopies, setSoldCopies] = useState('')


    const authorIdHandler = (event) => setAuthorId(event.target.value)
    const categoryIdHandler = (event) => setCategoryId(event.target.value)
    const titleHandler = (event) => setTitle(event.target.value)
    const urlHandler = (event) => setUrl(event.target.value)
    const soldCopiesHandler = (event) => setSoldCopies(event.target.value)

  
    useEffect(() => {
      axios.get(`${API_URL}/authors`)
      .then(res => {
        setAuthors(res.data)
      })
    }, [])
    
    useEffect(() => {
      axios.get(`${API_URL}/authors/${id}`)
      .then(res => {
        setAuthorId(res.data.id)
      })
    }, [id])

    useEffect(() => {
      axios.get(`${API_URL}/categories`)
      .then(res => {
        console.log(res.data)
        setCategories(res.data)
        
      })
    }, [])

    useEffect(() => {
      axios.get(`${API_URL}/categories/${id}`)
      .then(res => {
        console.log(res.data)
        setCategoryId(res.data.id)
      })
    }, [id])
  
    useEffect(() => {
      axios.get(`${API_URL}/books/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setUrl(res.data.url)
        setSoldCopies(res.data.soldCopies)
      })
    }, [id])

  
    const navigator = useNavigate();
  
    const editBookHandler = (event) => {
      event.preventDefault()
    
        axios.put(`${API_URL}/books/${id}`, {
          authorId: Number(authorId),
          categoryId: Number(authorId),
          id,
          title,
          url,
          soldCopies: Number(soldCopies)
      })
       .then(res => {
          toast.success('Selected book was edited.')
          navigator(`/BooksPage`)
      })
      .catch(err => toast.error(err.message))
    }

  return (
    <Container>
    <form onSubmit={editBookHandler}>
      <div className='form-control'>
        <label htmlFor='authorId'>Edit Author: </label>
        <select value={authorId} id='authorId' name='authorId' onChange={authorIdHandler}>
          {authors.map(author => <option value={author.id} key={author.id}>{author.name}</option>)}
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="category">Edit Genre: </label>
        <select value={categoryId} id='category' name='category' onChange={categoryIdHandler}>
          {categories.map(category => <option value={category.id} key={category.id}>{category.genre}</option>)}
        </select>
      </div>

        <div className='form-control'>
          <label htmlFor='title'>Edit Book Title: </label>
          <input value={title} type="text" name="title" id="title" onChange={titleHandler}></input>
        </div>

        <div className='form-control'>
          <label htmlFor='url'>Edit Book cover url: </label>
          <input value={url} type="url" name="url" id="url" onChange={urlHandler}></input>
        </div>

        <div className='form-control'>
          <label htmlFor='soldCopies'>Edit Number of sold book copies: </label>
          <input value={soldCopies} type="number" name="soldCopies" id="soldCopies" onChange={soldCopiesHandler}></input>
        </div>

  <button type="submit">Edit Book</button>


    </form>

  </Container>
  )
}

export default EditBook