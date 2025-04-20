import { verifyAdminAccess } from '@/app/lib/auth'

export default async function AdminPage() {
  try {
    const { user } = await verifyAdminAccess()
    
    return (
      <section className='py-12 bg-gradient-to-b from-[#0046CC] to-[#09131D] min-h-screen'>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p>Welcome, {user.firstName}!</p>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Admin page error:', error)
    return <div>An error occurred. Please try again later.</div>
  }
}