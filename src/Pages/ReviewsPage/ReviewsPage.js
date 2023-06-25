import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewsPage = () => {
    
    const [reviews, setReviews] = useState([])
    // const [review, setReview] = useState([]) galimai reikia dar vieno state istrynus review atnaujint state
    const [editReview, setEditReview] = useState(null)

    useEffect(() => {
        axios.get(`${API_URL}/reviews`)
        .then(res => setReviews(res.data))
        .catch(err => console.log(err.message))
    }, [])

    const deleteReviewHandler = (id) => {
        axios.delete(`${API_URL}/reviews/${id}`)
        .then(res => {
            const removeReviewIndex = reviews.findIndex(review => review.id === id);
            setReviews(prevState => prevState.toSpliced(removeReviewIndex, 1))
            toast.success('Review was deleted.')
        })
        .catch(err => toast.error(err.message))
    }


  return (
    <Container>
    <Link to='/reviews/create'>Add a new review</Link>

    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <Link to={`/reviews/${review.id}`}>{review.comment}</Link>
          <button onClick={() => deleteReviewHandler(review.id)}>Delete</button>
          <Link to={`/reviews/edit/${review.id}`}>Edit Review</Link>
        </li>
    ))}
    </ul>
  </Container>
  )
}

export default ReviewsPage