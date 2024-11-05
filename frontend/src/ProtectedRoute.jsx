import React from 'react';
import { Navigate } from 'react-router-dom';

// `ProtectedRoute` will check if the user's role matches the allowed roles
const ProtectedRoute = ({ element, userRole, allowedRoles }) => {
  console.log('UserRole in protected Routes',userRole);
  console.log('allowedRoles in protected Routes',allowedRoles);
  if (allowedRoles.includes(userRole)) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
