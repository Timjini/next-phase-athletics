import { RoleBasedRoute } from '../../components/auth/RoleBasedRoute';
// import { UserRole } from '';

export default function AdminDashboard() {
  return (
    <RoleBasedRoute allowedRoles={['user']}>
      <div>
        <h1>User Dashboard</h1>
        <p>Welcome to the user panel!</p>
      </div>
    </RoleBasedRoute>
  );
}