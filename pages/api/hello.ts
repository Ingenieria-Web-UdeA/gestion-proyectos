// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    // console.log('hicieron un get');
    const users = await prisma.user.findMany();
    res.status(200).json({ datos: users });
  } else if (req.method === 'POST') {
    const data = req.body;
    // console.log(data);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.nombre,
        role: {
          connect: {
            id: data.rol,
          },
        },
      },
    });
    res.status(200).json({ datos: user });
  }
}
