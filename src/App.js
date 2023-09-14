import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
    </Route>
  ) 
  );

  return (
    
      <RouterProvider router={ router } />
      

  );
}

export default App;
