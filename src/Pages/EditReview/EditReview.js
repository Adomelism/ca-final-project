import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const EditReview = () => {

const { id } = useParams();

const [books, setBooks] = useState([])
const [book, setBook] = useState('')
const [review, setReview] = useState('')

useEffect(() => {
axios.get(`${API_URL}/books/`)
.then(res => {
    setBooks(res.data)
})
}, [])

useEffect(() => {
    axios.get(`${API_URL}/reviews/${id}`)
    .then(res => {
        setReview(res.data.comment)
        setBook(res.data.bookId)
    })
    }, [id])
  
const bookHandler = (event) => setBook(event.target.value);
const reviewHandler = (event) => setReview(event.target.value);

const navigator = useNavigate();

const editReviewHandler = (event) => {
    event.preventDefault();  
    
    axios.put(`${API_URL}/reviews/${id}`, {
        comment: review,
        id,
        bookId: Number(book)
    })
     .then(res => navigator(`/reviewsPage`))
    .catch(err => toast.error(err.message))
}

  return (
    <Container>
      <div className='form-wrapper'>
        <form onSubmit={editReviewHandler}>
          <div className='inputBox'>
            <textarea value={review} required="required" name="comment" id="comment" onChange={reviewHandler}></textarea>
            <span>Your Review </span>
          </div>

          <div className="inputBoxReviews">
            <select value={book} id='book' name='book' onChange={bookHandler}>
            {books.map(book => <option value={book.id} key={book.id}>{book.title}</option>)}
            </select>
            <span>Book</span>

          <button className='link-edit-margin' type="submit">Edit Review</button>
          </div>
        </form>
      </div>
  </Container>
  )
}

export default EditReview