import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {

    const { id } = useParams()

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
      axios.get(`${API_URL}/categories`)
      .then(res => {
        setCategories(res.data)
        
      })
    }, [])

    useEffect(() => {
      axios.get(`${API_URL}/books/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setUrl(res.data.url)
        setSoldCopies(res.data.soldCopies)
        setCategoryId(res.data.categoryId)
        setAuthorId(res.data.authorId)
      })
    }, [id])

    const navigator = useNavigate();
  
    const editBookHandler = (event) => {
      event.preventDefault()
    
        axios.put(`${API_URL}/books/${id}`, {
          authorId: Number(authorId),
          categoryId: Number(categoryId),
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
      <div className='form-wrapper'>
        <form onSubmit={editBookHandler}>
          <div className='inputBox'>
            <select value={authorId} id='authorId' name='authorId' onChange={authorIdHandler}>
              {authors.map(author => <option value={author.id} key={author.id}>{author.name}</option>)}
            </select>
            <span>Edit Author</span>
          </div>

          <div className="inputBox">
            <select value={categoryId} id='category' name='category' onChange={categoryIdHandler}>
              {categories.map(category => <option value={category.id} key={category.id}>{category.genre}</option>)}
            </select>
              <span>Edit book Genre</span>
          </div>

            <div className='inputBox'>
              <input value={title} type="text" name="title" id="title" onChange={titleHandler}></input>
              <span>Edit Book Title</span>
            </div>

            <div className='inputBox'>
              <input value={url} type="url" name="url" id="url" onChange={urlHandler}></input>
              <span>Edit Book Cover Url</span>
            </div>

            <div className='inputBox'>
              <input value={soldCopies} type="number" name="soldCopies" id="soldCopies" onChange={soldCopiesHandler}></input>
              <span>Edit Number of Copies Sold</span>
            </div>

            <button className='link-edit-margin' type="submit">Edit Book</button>
        </form>
      </div>
  </Container>
  )
}

export default EditBook