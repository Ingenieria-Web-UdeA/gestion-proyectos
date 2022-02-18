import 'reflect-metadata';
import 'ts-tiny-invariant';
import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import prisma from 'config/prisma';
import Cors from 'micro-cors';
import { resolvers } from 'graphql/resolvers';
import { types } from 'graphql/types';

const cors = Cors({
  allowMethods: ['POST', 'OPTIONS', 'GET', 'HEAD'],
});

interface Context {
  prisma: PrismaClient;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const functionHandler = async (req, res) => {
  const apolloServer = new ApolloServer({
    context: (): Context => ({ prisma }),
    typeDefs: types,
    resolvers: resolvers,
    introspection: true,
  });

  const startServer = apolloServer.start();
  await startServer;
  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
};

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  return functionHandler(req, res);
});
