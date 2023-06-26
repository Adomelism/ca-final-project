import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateReview = () => {

  const [books, setBooks] = useState([])
  const [review, setReview] = useState('')
  const [book, setBook] = useState('')

  useEffect(() => {
    axios.get(`${API_URL}/books`)
    .then(res => {
      setBooks(res.data)
      setBook(res.data[0].id)
    })
  }, [])
  
const bookHandler = (event) => setBook(event.target.value);
const reviewHandler = (event) => setReview(event.target.value);

const navigator = useNavigate();

const createReviewHandler = (event) => {
  event.preventDefault();
  const newReview = {
    comment: review,
    bookId: Number(book),
  }
  axios.post(`${API_URL}/reviews`, newReview)
  .then(res => {
    toast.success('Review was added to the selected book.')
    navigator(`/reviewsPage`);
  })
  .catch(err => toast.error(err.message))
}
  return (
    <Container>
      <div className='form-wrapper'>
        <form onSubmit={createReviewHandler}>
          <div className='inputBox'>
            <textarea required="required" name="comment" id="comment" onChange={reviewHandler}></textarea>
            <span>Your Review</span>
          </div>

          <div className="inputBoxReviews">
            <select value={book} id='book' name='book' onChange={bookHandler}>
            {books.map(book => <option value={book.id} key={book.id}>{book.title}</option>)}
            </select>
            <span>Book</span>

            <button className='link-add-margin' type="submit">Submit Review</button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default CreateReview