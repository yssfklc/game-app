import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import Test from './components/Test.js';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route path='home' element={<Home/>} />
      <Route path='/' element={<Test/>} />
    </Route>
  ) 
  );

  return (
    
      <RouterProvider router={ router } />
      

  );
}

export default App;
