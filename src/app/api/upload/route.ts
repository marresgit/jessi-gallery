import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const route = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});


const uploadMiddleware = route.single('file');

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    uploadMiddleware(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ data: 'success' });
    });
  } else {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};

export default handler;