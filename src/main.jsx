import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import store from './Store/index.js';
import { Provider } from "react-redux";
import Home from './Components/Home.jsx';
import Result from './Components/Result.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/", element: <Home />
        },
        {
          path: "/result",
          element: <Result></Result>,
        }

      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
