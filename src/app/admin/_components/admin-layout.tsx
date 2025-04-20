// // app/admin/_components/admin-layout.tsx
// import { verifyAdminAccess } from '@/app/lib/auth'
// import { AdminSidebar } from './admin-sidebar'

// export default async function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   await verifyAdminAccess()
  
//   return (
//     <div className="flex h-screen">
//       <AdminSidebar />
//       <div className="flex-1 overflow-auto p-6">
//         {children}
//       </div>
//     </div>
//   )
// }