import React from 'react'

const ProtectedRoute = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.auth;
    const currentUser = user && JSON.parse(user).currentUser;
    const TOKEN = currentUser?.acessToken;
  
    return (
      TOKEN ? <Outlet /> : <Navigate to="/" replace />
    )
}

export default ProtectedRoute