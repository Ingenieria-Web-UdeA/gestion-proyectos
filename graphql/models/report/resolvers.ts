import prisma from 'config/prisma';

const ReportResolvers = {
  Report: {
    user: async (parent, args) => {
      return await prisma.user.findUnique({
        where: {
          id: parent.userId,
        },
      });
    },
    project: async (parent, args) => {
      return await prisma.project.findUnique({
        where: {
          id: parent.projectId,
        },
      });
    },
  },
  Query: {
    getReports: async (parent, args) => {
      return await prisma.report.findMany({});
    },
    getReport: async (parent, args) => {
      return await prisma.report.findUnique({
        where: {
          ...args.where,
        },
      });
    },
  },
  Mutation: {
    createReport: async (parent, args) => {
      return await prisma.report.create({
        data: {
          ...args.data,
          date: new Date(args.data.date),
        },
      });
    },
    updateReport: async (parent, args) => {
      return await prisma.report.update({
        where: { ...args.where },
        data: {
          ...args.data,
          ...(args.data.date && {
            date: {
              set: new Date(args.data.date.set),
            },
          }),
        },
      });
    },
    deleteReport: async (parent, args) => {
      return await prisma.report.delete({
        where: { ...args.where },
      });
    },
  },
};

export { ReportResolvers };
