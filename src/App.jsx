
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AppLayout from './appLayout';
import Movies from './Pages/Movies/Movies';
import Favorites from './Pages/Favorites/Favorites';
import Details from './Components/Details/Details';
import store from './store/store';
import Home from './Pages/Home/Home';
import  {ThemeProvider}  from './context/theme';
import { useState } from 'react';
const routes = createBrowserRouter([
  {path:"/",element:<AppLayout/>,children:[
    {path:"/",element:<Movies/>},
    {path:"/Favorites",element:<Favorites/>},
    {path:"/Home",element:<Home/>},
    {path:"/Details/:id",element:<Details/>},
    {path:"/Login",element:<Login/>},
    {path:"/Register",element:<Register/>},
    
  ]},
  {path:"*",element:<NotFound/>},
 
]);
function App() {
  const [theme,setTheme]=useState('light')

 
  return (
<ThemeProvider value={{theme,setTheme}}>
<Provider store={store}>
       <RouterProvider router={routes}/>
    </Provider>
</ThemeProvider>
    
   
  );
}

export default App;
