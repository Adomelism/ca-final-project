import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoriesPage = () => {

  const [categories, setCategories] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => setCategories(res.data))
    .catch(err => toast.error(err.message))
}, [])

const deleteCategoryHandler = (id) => {
  axios.delete(`${API_URL}/categories/${id}`)
        .then(res => {
            const removeCategoryIndex = categories.findIndex(category => category.id === id);
            setCategories(prevState => prevState.toSpliced(removeCategoryIndex, 1))
            toast.success('Book genre was deleted.')
        })
        .catch(err => toast.error(err.message))
}


  return (
    <Container>
      <Link to='/categories/create'>Add a new book Genre!</Link>

      <ul>Genres: 
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.genre}</Link>
            <button onClick={() => deleteCategoryHandler(category.id)}>Delete</button>
          <Link to={`/categories/edit/${category.id}`}>Edit Category</Link>
          </li>
      ))}
      </ul>
    </Container>
  )
}

export default CategoriesPage