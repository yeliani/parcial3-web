import { useState } from 'react'
import ProtectedRoute from './componets/Ruta'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <store />
              </ProtectedRoute>
            }
          ></Route>
          </>
  )
}

export default App
