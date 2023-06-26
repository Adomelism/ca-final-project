import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
const ReviewsPage = () => {
    
    const [reviews, setReviews] = useState([])

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
    <Link to='/reviews/create' className='link-add'>Add a new review</Link>
    <div className='swiper-section'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
            <ul>
              {reviews.map(review => (
                <SwiperSlide key={review.id}><li className='reviews-list' >
                  <button className='button' onClick={() => deleteReviewHandler(review.id)}>Delete</button>
                  <Link to={`/reviews/edit/${review.id}`} className='link-edit'>Edit Review</Link>
                  <Link to={`/reviews/${review.id}`}>
                  {review.comment} <FontAwesomeIcon icon={faComments} bounce/></Link>
                </li></SwiperSlide>
            ))}
            </ul>

    </Swiper>
    </div>
  </Container>
  )
}

export default ReviewsPage