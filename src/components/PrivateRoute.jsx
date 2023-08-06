import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux"
import { selectIsAuthLoading, selectIsLoggedIn } from "../redux/auth/selectorauth";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsAuthLoading);
  // const { isLoggedIn, isLoading } = useSelector((state)=>state.auth);
  const shouldRedirect = !isLoggedIn && !isLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};