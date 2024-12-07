
import './App.css';
import Singup from './signup/Signup';
import Login from './login/Login' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() 
{
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Login />,
    },
    {
      path: "/sign_up",
      element: < Singup />,
    },
 
  ]);
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
