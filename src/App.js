import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import LoadChartData from './Components/LoadChartData/LoadChartData';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
            return fetch('https://restcountries.com/v3.1/all')
          },
          element: <Home></Home> 
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/details/:countryName',
          loader: async ({params}) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
          },
          element: <CountryDetails></CountryDetails>,
        },
        {
          path: '/chart',
          loader: async () => {
            return fetch('https://restcountries.com/v3.1/all')
          },
          element: <LoadChartData></LoadChartData>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
