import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Route.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import AuthProvider from './AuthProvider/AuthProvider.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <div className="inter-font w-full md:max-w-7xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
