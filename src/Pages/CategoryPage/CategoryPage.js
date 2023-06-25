import Container from '../Components/Container/Container';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
// import axios from 'axios';

const CategoryPage = () => {

  const { id } = useParams();

  const [category, setCategory] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/categories/${id}?_embed=books`)
    .then(res => res.json())
    .then(data => {
      setCategory(data)
    })
  }, [id])

  console.log(category)

  return (
    <Container>

      {category && category.books ? (
         <ul>

         {category.books.map(item => <li key={item.id}>{item.title}</li>)}
   
         </ul>
      ) : ''}
     
    
    </Container>
  )
}

export default CategoryPage