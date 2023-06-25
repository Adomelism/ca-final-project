import Container from '../Components/Container/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const EditCategory = () => {
    
    const { id } = useParams();

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')

    const categoryHandler = (event) => setCategory(event.target.value)

    useEffect(() => {
        axios.get(`${API_URL}/categories/`)
        .then(res => {
            setCategories(res.data)
        })
        }, [])

    useEffect(() => {
        axios.get(`${API_URL}/categories/${id}`)
        .then(res => {
            setCategory(res.data.genre)
        })
        }, [id])

    const navigator = useNavigate();

    const editCategoryHandler = (event) => {
        event.preventDefault();  
        
        axios.put(`${API_URL}/categories/${id}`, {
            genre: category,
            id
        })
         .then(res => {
            toast.success('Selected genre was edited.')
            navigator(`/CategoriesPage`)
        })
        .catch(err => toast.error(err.message))
    }

  return (
    <Container>
        <form onSubmit={editCategoryHandler}>
            <div className='form-control'>
                <label htmlFor='category'>Edit selected book Genre: </label>
                <input type="text" value={category} name="category" id="category" onChange={categoryHandler}></input>
            </div>
            <button type="submit">Edit Genre</button>

         </form>

  </Container>
  )
}

export default EditCategory