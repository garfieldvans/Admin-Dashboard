import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ProtectedRoute = props => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('accessToken');

  // console.log('cek auth');
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, []);

  return props.children;
};

export default ProtectedRoute;
