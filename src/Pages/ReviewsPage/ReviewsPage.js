import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const ReviewsPage = () => {
    
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/reviews`)
        .then(res => setReviews(res.data))
        .catch(err => console.log(err.message))
    }, [])

    console.log(reviews)

  return (
    <Container>
    <Link to='/reviews/create'>Add a new review</Link>

    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <Link to={`/reviews/${review.id}`}>{review.comment}</Link>
        </li>
    ))}
    </ul>
  </Container>
  )
}

export default ReviewsPage