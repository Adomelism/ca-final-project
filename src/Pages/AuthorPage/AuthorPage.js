import Container from '../Components/Container/Container';
import { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';




const AuthorPage = () => {

  const { id } = useParams();
  console.log(id)


  return (
    <Container>

      <div>AuthorPage</div>
    </Container>
  )
}

export default AuthorPage