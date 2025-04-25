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

export const uploadBufferToS3 = async (
  buffer: Buffer,
  keyPrefix: string = 'qr-codes',
  contentType: string = 'image/png'
) => {
  console.log('Buffer:', process.env.AWS_BUCKET_ACCESS_KEY);
  const uniqueFilename = `${keyPrefix}/${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

  const params: S3.PutObjectRequest = {
    Bucket: process.env.NEW_BUCKET_NAME as string,
    Key: uniqueFilename,
    Body: buffer,
    ContentType: contentType,
    // ACL: 'public-read',
  };

  const result = await s3.upload(params).promise();

  return {
    file_name: uniqueFilename,
    url: result.Location,
  };
};

// read image from s3
export const getImageFromS3 = async (imageName: string) => {
  const params = {
    Bucket: process.env.NEW_BUCKET_NAME as string,
    Key: imageName,
  };

  try {
    const s3Object = await s3.getObject(params).promise();
    return s3Object.Body;
  } catch (error) {
    console.error('Error fetching from S3:', error);
    throw new Error('Image not found');
  }
};