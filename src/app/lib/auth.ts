import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

type VerifyAdminOptions = {
  allowRedirect?: boolean;
};

export async function verifyAdminAccess(options: VerifyAdminOptions = { allowRedirect: true }) {
  const user = await currentUser();
  const { sessionClaims } = await auth();

  const isAdmin = sessionClaims?.role === 'admin';

  if (!user || !sessionClaims || !isAdmin) {
    if (options.allowRedirect) {
      redirect(!user ? '/sign-in' : '/unauthorized');
    } else {
      return { user: null };
    }
  }

  return {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emailAddresses[0]?.emailAddress ?? 'unknown',
      imageUrl: user.imageUrl,
    },
  };
}
