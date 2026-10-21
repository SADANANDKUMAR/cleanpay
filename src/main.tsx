import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initializeAnalytics } from './analytics'
import { captureAttribution } from './lib/leads'
import App from './App'

initializeAnalytics();
// Record the campaign that brought this visitor in, before they navigate.
captureAttribution();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
