import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectAuthIsSignedIn } from 'redux/authSelectors'

const PrivateRoute = ({children, redirectTo ='/contacts'}) => {
    const isSignedIn = useSelector(selectAuthIsSignedIn)
    return isSignedIn ? children  : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
