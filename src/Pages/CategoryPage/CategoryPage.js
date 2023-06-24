import Container from '../Components/Container/Container';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';

const CategoryPage = () => {

  const { id } = useParams();

  const [category, setCategory] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/books?_expand=category`)
    .then(res => res.json())
    .then(data => {
      setCategory(data)
    })
  }, [id])

  if (!category) {
    return '';
  }

// console.log(category.category.genre)
// console.log(category.title)
// axios.get(`${API_URL}/books?_expand=category`)

  return (
    <Container>

    
    </Container>
  )
}

export default CategoryPage