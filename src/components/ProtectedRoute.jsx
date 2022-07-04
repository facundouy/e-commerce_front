import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user);
  if (!user.user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
