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
  },
};

export { ClientResolvers };
