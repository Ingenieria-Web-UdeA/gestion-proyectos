import { NextApiRequest, NextApiResponse } from 'next/types';
import formidable from 'formidable';
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
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      cloudinary.v2.config({
        cloud_name: 'danyel117',
        api_key: '739535791529797',
        api_secret: 'j44WjCfvSjC6pcs68LHpBBuN6Ro',
      });
      cloudinary.v2.uploader.upload_stream(files.file.PersistentFile);
    });
    res.send(200);
  }
}
