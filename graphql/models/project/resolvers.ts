import prisma from 'config/prisma';

const ProjectResolvers = {
  Project: {
    // reports: async (parent, args) => {
    //   return await prisma.report.findMany({
    //     where: {
    //       projectId: parent.id,
    //     },
    //   });
    // },
    // client: async (parent, args) => {
    //   return await prisma.client.findUnique({
    //     where: {
    //       id: parent.clientId,
    //     },
    //   });
    // },
  },
  Query: {
    getProjects: async () => {
      return await prisma.project.findMany({});
    },
    getProject: async (parent, args) => {
      return await prisma.project.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createProject: async (parent, args) => {
      return await prisma.project.create({
        data: {
          ...args.data,
          // dueDate: new Date(args.data.dueDate),
        },
      });
    },
    updateProject: async (parent, args) => {
      return await prisma.project.update({
        where: { ...args.where },
        data: {
          ...args.data,
          ...(args.data.dueDate && {
            dueDate: {
              set: new Date(args.data.dueDate.set),
            },
          }),
        },
      });
    },
    deleteProject: async (parent, args) => {
      return await prisma.project.delete({
        where: { ...args.where },
      });
    },
  },
};

export { ProjectResolvers };
