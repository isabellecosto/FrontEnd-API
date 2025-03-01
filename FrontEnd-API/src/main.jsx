import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider value={{ unstyled: true }}>
    <App />
  </PrimeReactProvider>,
)
