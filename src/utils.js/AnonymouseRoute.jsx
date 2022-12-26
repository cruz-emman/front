import React from 'react'

const AnonymouseRoute = () => {
    const user = JSON.parse(localStorage.getItem("persist:root"))?.auth;
    const currentUser = user && JSON.parse(user).currentUser;
    const TOKEN = currentUser?.acessToken;
    
      return (
        TOKEN ? <Navigate to="/" replace /> : <Outlet />
      )
}

export default AnonymouseRoute