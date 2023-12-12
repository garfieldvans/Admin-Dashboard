import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ChecAuth from './CheckAuth';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import Signin from '../pages/signin/Signin';
import Student from '../pages/student/Student';
import UnderContruction from '../components/UnderConstruction';
import Course from '../pages/course/Course';
import Payment from '../pages/payment/Payment';
import Setting from '../pages/settings/settings';
import Reports from '../pages/reports/Reports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<UnderContruction />} />
      <Route path="/" element={<ChecAuth />} />
      <Route
        path="signin"
        element={
          <ChecAuth>
            <Signin />
          </ChecAuth>
        }
      />
      <Route
        path="admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="*" element={<UnderContruction />} />
        <Route path="course" element={<Course />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Student />} />
        <Route path="payment" element={<Payment />} />
        <Route path="report" element={<Reports />} />
        <Route path="settings" element={<Setting/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
