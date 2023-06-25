import React from 'react';
import Container from '../Components/Container/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'



const CoversPage = () => {

const images = [
  {
    original: 'https://m.media-amazon.com/images/I/71-++hbbERL.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/71-++hbbERL.jpg',
  },
  {
    original: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    original: 'https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    original: 'https://m.media-amazon.com/images/I/91C0MECqJ+L._AC_UF1000,1000_QL80_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/91C0MECqJ+L._AC_UF1000,1000_QL80_.jpg',
  },
  {
    original: 'https://m.media-amazon.com/images/I/41ybG235TcL._AC_UF1000,1000_QL80_.jpg',
    thumbnail: 'https://m.media-amazon.com/images/I/41ybG235TcL._AC_UF1000,1000_QL80_.jpg',
  },
];
  
  return (
  
  <Container>
    
    <div className='App'>
      <ImageGallery items={images} />;
    </div>

  </Container>
  )
}

export default CoversPage