import prisma from 'config/prisma';

const UserResolvers = {
  User: {
    role: async (parent, args) => {
      console.log(parent);
      return await prisma.role.findUnique({
        where: {
          id: parent.roleId,
        },
      });
    },
  },
  Query: {
    getUser: async (parent, args) => {
      return await prisma.user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    getUsers: async (parent, args) => {
      return await prisma.user.findMany();
    },
  },
};

export { UserResolvers };
