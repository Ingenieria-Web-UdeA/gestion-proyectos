import prisma from 'config/prisma';

const ClientResolvers = {
  Client: {
    createdAt: async (parent, _, context) => {
      if (context.session.user.role.name === 'Admin') {
        return parent.createdAt;
      }

      return null;
    },
  },
  Query: {
    getClients: async () => {
      return await prisma.client.findMany();
    },
  },
  Mutation: {
    createClient: async (_, args) => {
      const nuevoCliente = await prisma.client.create({
        data: {
          name: args.name,
        },
      });
      return nuevoCliente;
    },
    updateClient: async (_, args) => {
      return await prisma.client.update({
        where: {
          id: args.id,
        },
        data: {
          name: {
            set: args.name,
          },
        },
      });
    },
    deleteClient: async (_, args, context) => {
      if (context.session.user.role.name === 'Admin') {
        return await prisma.client.delete({
          where: {
            id: args.id,
          },
        });
      }
      return null;
    },
  },
};

export { ClientResolvers };
