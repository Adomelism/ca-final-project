import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import AuthorsPage from './Pages/AuthorsPage/AuthorsPage';
import AuthorPage from './Pages/AuthorPage/AuthorPage';
import CreateAuthor from './Pages/CreateAuthor/CreateAuthor';
import BooksPage from './Pages/BooksPage/BooksPage';
import BookPage from './Pages/BookPage/BookPage';
import CreateBook from './Pages/CreateBook/CreateBook';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import CreateCategory from './Pages/CreateCategory/CreateCategory';
import CoversPage from './Pages/CoversPage/CoversPage';
import CoverPage from './Pages/CoverPage/CoverPage';
import CreateCover from './Pages/CreateCover/CreateCover';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';
import ReviewPage from './Pages/ReviewPage/ReviewPage';
import CreateReview from './Pages/CreateReview/CreateReview';

function App() {
  return (
    <div className="App">

<nav className='main-navigation'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/AuthorsPage' className='nav-link'>Authors</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/BooksPage' className='nav-link'>Books</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/CategoriesPage' className='nav-link'>Categories</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/ReviewsPage' className='nav-link'>Reviews</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/CoversPage' className='nav-link'>Available Books Cover</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
            <Route path='/AuthorsPage' element={<AuthorsPage />} />
            <Route path='/authors/:id' element={<AuthorPage />} />
            <Route path='/authors/create' element={<CreateAuthor />} />

            <Route path='/BooksPage' element={<BooksPage />} />
            <Route path='/books/:id' element={<BookPage />} />
            <Route path='/books/create' element={<CreateBook />} />

            <Route path='/CategoriesPage' element={<CategoriesPage />} />
            <Route path='/categories/:id' element={<CategoryPage />} />
            <Route path='/categories/create' element={<CreateCategory />} />

            <Route path='/ReviewsPage' element={<ReviewsPage />} />
            <Route path='/reviews/:id' element={<ReviewPage />} />
            <Route path='/reviews/create' element={<CreateReview />} />

            <Route path='/CoversPage' element={<CoversPage />} />
            <Route path='/covers/:id' element={<CoverPage />} />
            <Route path='/covers/create' element={<CreateCover />} />
        

            <Route path='/' element={ 
              <div className='content'>
                <h1>HomePage</h1>
                <p>This is Home Page under construction...</p>
              </div>
              } />
            <Route path='*' element={
              <div className='content'>
                <h1>404 error. Page not found.</h1>
                <Link to='/'>Go Back to HomePage</Link>
              </div>
              } />
        </Routes>

    </div>
  );
}

export default App;
