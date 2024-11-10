import { prisma } from '@/prisma/prisma-client';
import { ProfileForm } from '@/shared/components';
import { getUserSession } from '@/shared/lib/get-user-session';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session || !session.id || isNaN(Number(session.id))) {
    return redirect('/not-auth');
  }

  const userId = Number(session.id);
  const user = await prisma.user.findFirst({ where: { id: userId } });

  if (!user) {
    return redirect('/not-auth');
  }

  return <ProfileForm data={user} />;
}
