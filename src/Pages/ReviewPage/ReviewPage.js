import Container from '../Components/Container/Container';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';


const ReviewPage = () => {

  const { id } = useParams()
  const [bookId, setBookId] = useState('')

  useEffect(() => {
   axios.get(`${API_URL}/reviews/${id}`)
   .then(res => setBookId(res.data.bookId))
  }, [])
  

  return (
    <Container>
      If you were intrigued by the review, you should consider reading <Link to={`/books/${bookId}`}>THIS BOOK</Link>
    </Container>
  )
}

export default ReviewPage