import { useState } from 'react'
import ProtectedRoute from './componets/Ruta'
import Login from './pages/Login'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Login />} />
             <Route path="/login" element={<Login />} />
          <Route path="/"
            element={
              <ProtectedRoute>
                < store/>
              </ProtectedRoute>
            }
          ></Route>
    </>
  )
};

export default App
