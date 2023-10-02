import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Aboutus from './components/Aboutus.js';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='home' element={<Home/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Login/>} />
      <Route path='/aboutus' element={<Aboutus/>} />
      <Route path='/products' element={<Home/>} />
      <Route path='/games' element={<Home/>} />
    </Route>
  ) 
  );

  return (
    
      <RouterProvider router={ router } />
      

  );
}

export default App;
