import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { v4 as uuid } from 'uuid';


const CoversPage = () => {

  const [covers, setCovers] = useState([])

  const photoElement = covers.map(cover => (
    <Item
    key={uuid()}
    original={cover.url}
    thumbnail={cover.url}
    width="600"
    height="600"
  >
    {({ ref, open }) => (
      <img ref={ref} onClick={open} src={cover.url} alt={cover.title} />
    )}
  </Item>
  ))

  useEffect(() => {
    axios.get(`${API_URL}/books/`)
    .then(res => {
      console.log(res.data)
        setCovers(res.data)
    })
    }, [])

  return (
    <Container>


      <Gallery>
            {photoElement}
          </Gallery>

  
    </Container>
  )
}

export default CoversPage