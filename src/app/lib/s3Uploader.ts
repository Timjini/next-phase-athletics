import { S3 } from 'aws-sdk';
import path from 'path';
import fs from 'fs';
import formidable from 'formidable';

const s3 = new S3({
  accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION,
  s3ForcePathStyle: true,
});

export const uploadToS3 = async (file: formidable.File) => {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  const extension = path.extname(file.originalFilename || '');
  const uniqueFilename = `${uniqueSuffix}${extension}`;

  const params: S3.PutObjectRequest = {
    Bucket: process.env.NEW_BUCKET_NAME as string,
    Key: uniqueFilename,
    Body: fs.createReadStream(file.filepath),
    ContentType: file.mimetype || undefined,
  };

  const result = await s3.upload(params).promise();

  return {
    originalname: file.originalFilename,
    file_name: uniqueFilename,
    url: result.Location,
  };
};
