import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const createReviewHandler = (event) => {
  event.preventDefault();
  console.log(review)
  console.log(book)
  const newReview = {
    comment: review,
    bookId: Number(book),
  }
  axios.post(`${API_URL}/reviews`, newReview)
  .then(res => toast.success('Review was added to the selected book.'))
  .catch(err => toast.error(err.message))
}

  return (
    <Container>
      <form onSubmit={createReviewHandler}>
        <div className='form-control'>
          <label htmlFor='comment'>Your review: </label>
          <textarea name="comment" id="comment" onChange={reviewHandler}></textarea>
        </div>

        <div className="form-control">
          <label htmlFor="book">Book: </label>
          <select value={book} id='book' name='book' onChange={bookHandler}>
          {books.map(book => <option value={book.id} key={book.id}>{book.title}</option>)}
    </select>

    <button type="submit">Submit Review</button>
</div>

      </form>

    </Container>
  )
}

export default CreateReview