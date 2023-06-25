import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/categories`)
    .then(res => setCategories(res.data))
    .catch(err => console.log(err.message))
}, [])


  return (
    <Container>
      <Link to='/categories/create'>Add a new category</Link>

      <ul>Genres: 
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.genre}</Link>
          </li>
      ))}
      </ul>
    </Container>
  )
}

export default CategoriesPage