import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';

const CoversPage = () => {

  const [covers, setCovers] = useState([])

  useEffect(() => {
    
    fetch(`${API_URL}/covers`)
        .then(res => res.json())
        .then(data => {
          setCovers(data)     
    })
}, [])
  return (
    <Container>

      <div>        <Link to='/covers/create'>Add a new book cover</Link>
      </div>
        {covers.map(cover => <Link to={`/covers/${cover.id}`} key={cover.id}><img src={cover.url} alt={cover.title}></img></Link>)} 
    </Container>
  )
}

export default CoversPage