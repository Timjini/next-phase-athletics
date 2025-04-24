import { verifyAdminAccess } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import { SafeUser } from '@/app/types/user';

type AdminRouteHandler = (user: SafeUser) => Promise<Response>;

export async function handleAdminRoute(handler: AdminRouteHandler) {
  try {
    const { user } = await verifyAdminAccess({ allowRedirect: false });

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return await handler(user);
  } catch (error) {
    console.error('Admin route error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
