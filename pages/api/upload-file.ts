import { NextApiRequest, NextApiResponse } from 'next/types';
import multiparty from 'multiparty';
import cloudinary from 'cloudinary';

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const form = new multiparty.Form();

    form.parse(req, (err, fields, files) => {
      console.log(files.file[0]);
      cloudinary.v2.config();
      cloudinary.v2.uploader.upload_stream(
        files.file[0].path,
        (error, result) => {
          if (error) {
            console.log('Error in cloudinary.uploader.upload_stream\n', error);
          } else {
            console.log('Cloudinary audio info: ', result);
          }
        }
      );
    });

    // form.keepExtensions = true;
    // form.parse(req, (err, fields, files) => {
    // });
    res.send(200);
  }
}
