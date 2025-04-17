import { RoleBasedRoute } from '../../components/auth/RoleBasedRoute';
// import { UserRole } from '';

export default function AdminDashboard() {
  return (
    <RoleBasedRoute allowedRoles={['admin']}>
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin panel!</p>
      </div>
    </RoleBasedRoute>
  );
}