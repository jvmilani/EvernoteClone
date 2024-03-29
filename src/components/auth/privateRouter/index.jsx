import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const auth = localStorage.getItem('user');    
    return auth ? children : <Navigate to="/login" />;

}

export default PrivateRoute;