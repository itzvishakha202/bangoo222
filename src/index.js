import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './home';
import Contact from './contact';
import About from './about';
import Navbar from './navbar';
import  './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const currentPath = window.location.pathname;

// if(currentPath == "/home"){
//   root.render(<Home />)
// }
// else if(currentPath == "/about"){
// root.render(<About />)
// }
// else if(currentPath == "/contact"){
//   root.render(<Contact/>)
// }
// else if(currentPath == "/navbar"){
//   root.render(<Navbar />)
// }
// else{
//   root.render(<h1>page not found</h1>)
// }
const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }
])
root.render(<RouterProvider router={router} />)