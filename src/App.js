import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router/Router';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="App max-w-[1440] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
