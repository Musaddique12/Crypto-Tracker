import './App.css';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import CoinDetails from './Components/CoindDetail';
import Navbar from './Components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './Components/Start';
import Home from './Components/Home';
import FAQ from './Components/Faq';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start/>,children:([
        {path:'/',element:<Home/>},
        {path:'faq',element:<FAQ/>},
       {path:'coin',element:<Coins/>},
        {
      path: "exchanges",
      element: <Exchanges />, // Exchanges component
    },
    {
      path: "coin/:id", // Dynamic route for coin details
      element: <CoinDetails />, // CoinDetails component
    }
      ]) // Home page (default to Coins)
    },
   
  ]);

  return (
    <div>
      {/* Navbar Component */}
      {/* Router Provider */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
