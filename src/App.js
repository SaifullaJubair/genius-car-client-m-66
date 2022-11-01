import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router/Routes';

function App() {
  return (
    <div data-theme="fantasy" className='max-w-screen-xl mx-auto' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
