import prisma from 'config/prisma';

const RoleResolvers = {
  Query: {
    getRole: async (parent, args) => {
      return await prisma.role.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    getRoles: async (parent, args) => {
      return await prisma.role.findMany();
    },
  },
};

export { RoleResolvers };
