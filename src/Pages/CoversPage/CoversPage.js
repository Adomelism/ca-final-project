import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { Link } from 'react-router-dom';
// import 'photoswipe/dist/photoswipe.css'
// import { Gallery, Item } from 'react-photoswipe-gallery'
// import { v4 as uuid } from 'uuid';

const CoversPage = () => {

  const [covers, setCovers] = useState([])

  // const photoElement = photos.map(photo => (
  //   <Item
  //   key={uuid()}
  //   original={photo.url}
  //   thumbnail={photo.thumbnailUrl}
  //   width="600"
  //   height="600"
  // >
  //   {({ ref, open }) => (
  //     <img ref={ref} onClick={open} src={photo.thumbnailUrl} alt='' />
  //   )}
  // </Item>
  // ))

  useEffect(() => {
    
    fetch(`${API_URL}/covers`)
        .then(res => res.json())
        .then(data => {
          setCovers(data)     
    })
}, [])
  return (
    <Container>


      {/* <Gallery>
            {photoElement}
          </Gallery> */}

      <div>        <Link to='/covers/create'>Add a new book cover</Link>
      </div>
        {covers.map(cover => <Link to={`/covers/${cover.id}`} key={cover.id}><img src={cover.url} alt={cover.title}></img></Link>)} 
    </Container>
  )
}

export default CoversPage