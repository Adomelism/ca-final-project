import Container from '../Components/Container/Container';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const CoverPage = () => {
  const { id } = useParams();
  const [cover, setCover] = useState(null)
  const [coverDeleted, setCoverDeleted] = useState(false)

  useEffect(() => {
      fetch(`${API_URL}/covers/${id}`)
      .then(res => res.json())
      .then(data => {
        setCover(data)
      })
    }, [id])

    const deleteHandler = () => {
      fetch(`${API_URL}/covers/${id}`, {
          method: 'DELETE',
  })
      .then(res => res.json())
      .then(data => {
        setCoverDeleted(true)
      })
    }


  if (!cover) {
      return '';
  }


  return (
    <Container>
      {coverDeleted ? <h1><Link to={`/CoversPage`}>Book Cover was deleted. Back to list of book covers:</Link></h1> : (
            <div>
                <button onClick={deleteHandler}>Delete</button>
                <h1>{cover.title}</h1>
                <img src={cover.url} alt={cover.title}></img>
            </div>
        )}
    </Container>
  )
}

export default CoverPage