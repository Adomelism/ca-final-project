import './App.scss';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthorsPage from './Pages/AuthorsPage/AuthorsPage';
import AuthorPage from './Pages/AuthorPage/AuthorPage';
import CreateAuthor from './Pages/CreateAuthor/CreateAuthor';
import EditAuthor from './Pages/EditAuthor/EditAuthor';
import BooksPage from './Pages/BooksPage/BooksPage';
import BookPage from './Pages/BookPage/BookPage';
import CreateBook from './Pages/CreateBook/CreateBook';
import EditBook from './Pages/EditBook/EditBook';
import CategoriesPage from './Pages/CategoriesPage/CategoriesPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import CreateCategory from './Pages/CreateCategory/CreateCategory';
import EditCategory from './Pages/EditCategory/EditCategory';
import CoversPage from './Pages/CoversPage/CoversPage';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';
import ReviewPage from './Pages/ReviewPage/ReviewPage';
import CreateReview from './Pages/CreateReview/CreateReview';
import EditReview from './Pages/EditReview/EditReview';


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
            <Route path='/authors/edit/:id' element={<EditAuthor />} />

            <Route path='/BooksPage' element={<BooksPage />} />
            <Route path='/books/:id' element={<BookPage />} />
            <Route path='/books/create' element={<CreateBook />} />
            <Route path='/books/edit/:id' element={<EditBook />} />

            <Route path='/CategoriesPage' element={<CategoriesPage />} />
            <Route path='/categories/:id' element={<CategoryPage />} />
            <Route path='/categories/create' element={<CreateCategory />} />
            <Route path='/categories/edit/:id' element={<EditCategory />} />


            <Route path='/ReviewsPage' element={<ReviewsPage />} />
            <Route path='/reviews/:id' element={<ReviewPage />} />
            <Route path='/reviews/create' element={<CreateReview />} />
            <Route path='/reviews/edit/:id' element={<EditReview />} />

            <Route path='/CoversPage' element={<CoversPage />} />

        

            <Route path='/' element={ 
              <div className='content'>
                <div className='animatedContainer'>
                  <span className='text1'>Welcome to</span>
                  <span className='text2'>e-book-library</span>
                </div>
              </div>
              } />
            <Route path='*' element={
              <div className='content'>
                <h1>404 error. Page not found.</h1>
                <Link to='/'>Go Back to HomePage</Link>
              </div>
              } />
        </Routes>

        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

    </div>
  );
}

export default App;
