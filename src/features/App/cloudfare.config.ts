import { S3Client } from "@aws-sdk/client-s3";

export const generateS3Client = (): S3Client => {
  return new S3Client({
    region: process.env.NEXT_PUBLIC_S3_REGION,
    endpoint:
      `https://${process.env.NEXT_PUBLIC_S3_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: `${process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY}`,
    },
  });
};
