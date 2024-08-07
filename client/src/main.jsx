import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SearchResults from './pages/SearchResults';
import RecipePage from './pages/RecipePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            }, {
                path: '/login',
                element: <Login/>
            }, {
                path: '/signup',
                element: <SignUp/>
            }, {
                path: '/recipes',
                element: <RecipePage/>
            },{
                path: '/search',
                element: <SearchResults/>
            }
        ]
    }
]);

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )