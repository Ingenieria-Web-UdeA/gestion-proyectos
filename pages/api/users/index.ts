import prisma from 'config/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    res.status(200).json({ datos: users });
  }
}
