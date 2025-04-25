import { S3 } from 'aws-sdk';
import { NextRequest } from 'next/server';

const s3 = new S3({
  accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY,
  region: process.env.AWS_BUCKET_REGION,
  s3ForcePathStyle: true,
});

export async function GET(req: NextRequest, { params }: { params: { imageName: string } }) {
  console.log('Fetching image from S3', process.env.AWS_BUCKET_SECRET_KEY);
  const { imageName } = await params;
  console.log('Image name:', imageName);
  console.log('AWS Bucket Access Key:', process.env.AWS_BUCKET_ACCESS_KEY);

  console.log('Fetching image:', imageName);
  console.log('Bucket name:', process.env.NEW_BUCKET_NAME);
  const s3Params = {
    Bucket: process.env.NEW_BUCKET_NAME as string,
    Key: imageName,
  };

  try {
    const s3Object = await s3.getObject(s3Params).promise();

    return new Response(s3Object.Body as Buffer, {
      headers: {
        'Content-Type': s3Object.ContentType || 'application/octet-stream',
      },
    });
  } catch (error: any) {
    console.error('Error fetching from S3:', error);
    return new Response(JSON.stringify({ error: 'Image not found' }), {
      status: 404,
    });
  }
}
