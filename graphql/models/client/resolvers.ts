import prisma from 'config/prisma';

const ClientResolvers = {
  Query: {
    getClients: async (parent, args) => {
      return await prisma.client.findMany();
    },
  },
  Mutation: {
    createClient: async (parent, args) => {
      const nuevoCliente = await prisma.client.create({
        data: {
          name: args.name,
        },
      });
      return nuevoCliente;
    },
    updateClient: async (parent, args) => {
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
    deleteClient: async (parent, args) => {
      return await prisma.client.delete({
        where: {
          id: args.id,
        },
      });
    },
  },
};

export { ClientResolvers };
