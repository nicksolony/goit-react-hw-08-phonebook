import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
    
      if (isLoggedIn) {
    return <Outlet />
  } else {
  return <Navigate to={redirectTo} />
  }

};


// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
  
//   console.log(shouldRedirect);
//   if (shouldRedirect) {
//    console.log('should redirect');
//   return <Navigate to={redirectTo} />
//  }
//  return children ? children : <Outlet />
// }