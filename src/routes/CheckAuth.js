import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckAuth = props => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/signin');
    } else {
      navigate('/admin/dashboard');
    }
  }, []);

  return props.children;
};

export default CheckAuth;
