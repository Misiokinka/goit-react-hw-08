import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>

  </React.StrictMode>,
)

