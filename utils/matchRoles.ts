import prisma from 'config/prisma';
import { getSession } from 'next-auth/react';

const matchRoles = async (context) => {
  const data: any = await getSession({ req: context.req });
  const userRole = data?.user?.role?.name;
  let url = context.resolvedUrl.split('?')[0];
  const { id } = context.query;

  if (id) {
    url = url.replace(id, '[id]');
  }

  const page = await prisma.page.findUnique({
    where: {
      path: url,
    },
    include: {
      roles: true,
    },
  });

  return {
    auth: page.roles.map((rol) => rol.name).includes(userRole),
    name: page.name,
  };
};
export { matchRoles };
