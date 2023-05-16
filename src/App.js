
import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';
import Grandpa from './components/Grandpa/Grandpa';
import Common from './components/TickateBooking/Common';
import TicketBookngTwo from './components/TickateBooking/TicketBookngTwo';
import Userdata from './components/UserInfo/Userdata';
import Dashboard from './components/Dashboard/Dashboard';
import Newdashboard from './components/Dashboard/Newdashboard';
import Product from './components/Product/Product';
import RamdonSearching from './components/Product/RamdonSearching';

//https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => { return fetch('tshirts.json') },
          element: <Home></Home>
        },
        { path: '/order', element: <Order></Order> },
        { path: '/grandpa', element: <Grandpa></Grandpa> },
        {
          path: '/common', element: <Common></Common>
        }, {
          path: '/ticketBooking', element: <TicketBookngTwo></TicketBookngTwo>
        },
        {
          path: '/userdata', element: <Userdata></Userdata>
        },
        {
          path: '/dashboard', element: <Dashboard />
        },
        {
          path: '/new-dashboard', element: <Newdashboard />
        },
        {
          path: '/products', element: <Product />
        },
        {
          path: '/random', element: <RamdonSearching />
        }
      ]
    },
    {
      path: '*', element: <div>
        <h1>Error-404</h1>
        <h3>Error Port Number : 401-499</h3>
        <p>Something Is Wrong Please Try Again</p>
      </div>
    }
  ])
  return (
    <div className="App">


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
