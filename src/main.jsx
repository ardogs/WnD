import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { KticketApp } from './KticketApp'
import { Provider } from 'react-redux';

// import { BrowserRouter } from 'react-router-dom'
import "./main.css"
import { store } from './store';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <KticketApp />
    </Provider>
  </StrictMode>
)
