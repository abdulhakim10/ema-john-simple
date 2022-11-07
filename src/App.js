import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import PrivetRoute from './routes/PrivetRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/products'),
          element: <Shop></Shop>,
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: '/inventory',
          element: <PrivetRoute><Inventory></Inventory></PrivetRoute>
        },
        {
          path: '/shipping',
          element: <PrivetRoute><Shipping></Shipping></PrivetRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ], 
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
