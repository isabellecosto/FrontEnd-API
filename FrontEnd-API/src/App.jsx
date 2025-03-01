import { RouterProvider } from 'react-router';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import router from './router';
import './App.css';

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  )
}

export default App
