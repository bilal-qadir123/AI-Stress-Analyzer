import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EmailProvider } from './EmailContext';
import App from './App.jsx'
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailProvider>
    <App />
    </EmailProvider>
  </StrictMode>,
)
