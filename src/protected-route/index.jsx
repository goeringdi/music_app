import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


export const ProtectedRoute = ({ children, redirectPath = "/", isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    redirectPath: PropTypes.node.isRequired,
    isAllowed: PropTypes.node.isRequired,
    };