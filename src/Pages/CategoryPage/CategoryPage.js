import Container from '../Components/Container/Container';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

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

  if (!category) {
    return '';
  }

  if (category.books.length < 1) {
    return <h1 className='item-not-found'>There are no books currently in this category.</h1>
  }

  return (
    <Container>

      {category && category.books ? (
         <ul className='category-ul'>
          {category.books.map(item => 
          <li className='category-li' key={item.id}><FontAwesomeIcon icon={faBookmark} flip/>{item.title}</li>)}
         </ul>
      ) : ''}
     
    
    </Container>
  )
}

export default CategoryPage