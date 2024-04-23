/*
 * @Date: 2024-04-23 16:12:14
 * @Description: 功能：
 */
import { S3Client,PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const S3 = new S3Client({
      region: 'auto',
      endpoint: process.env.AWS_S3_ENDPOINT,
      credentials: {
        accessKeyId: process.env.APP_AWS_ACCESS_KEY!,
        secretAccessKey: process.env.APP_AWS_SECRET_KEY!,
      },
    });
    const post = await getSignedUrl(S3, new PutObjectCommand({Bucket: process.env.AWS_S3_BUCKET_NAME, Key: req.query.file as string}), { expiresIn: 3600 })
    return res.status(200).json({
      url: post,
    });
  } catch (error) {
    console.log(error);
  }
}
