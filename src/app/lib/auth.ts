//simple auth for the app
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export async function verifyAdminAccess() {
    const user = await currentUser()
    const { sessionClaims } = await auth()
    
    if (!user || !sessionClaims) {
      redirect('/sign-in')
    }
  
    if (sessionClaims.role !== 'admin') {
      redirect('/unauthorized')
    }
  
    return { user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emailAddresses[0]?.emailAddress ?? "unknown",
      imageUrl: user.imageUrl,
    } }
}