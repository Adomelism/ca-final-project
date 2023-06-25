import { useState, useEffect } from 'react';
import Container from '../Components/Container/Container';
import { API_URL } from '../../config';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreateCategory = () => {
  
  const [categories, setCategories] = useState('')
  const [category, setCategory] = useState('')
  const categoryHandler = (event) => setCategory(event.target.value)

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => {
      setCategories(res.data)
      
    })
  }, [])

  const navigator = useNavigate();


  const createCategoryHandler = (event) => {
    event.preventDefault();

    const newCategory = {
      genre: category,
    }
    axios.post(`${API_URL}/categories`, newCategory)
    .then(res => {
    toast.success('Book genre was added to the list.')
    navigator(`/CategoriesPage`);
  })
  .catch(err => toast.error(err.message))

  }

  return (
    <Container>
      <form onSubmit={createCategoryHandler}>
        <div className='form-control'>
          <label htmlFor='category'>Add a book Genre: </label>
          <input type="text" name="category" id="category" onChange={categoryHandler}></input>
        </div>


    <button type="submit">Submit Genre</button>


      </form>

    </Container>
  )
}

export default CreateCategory