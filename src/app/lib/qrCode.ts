import QRCode from 'qrcode';
import { uploadBufferToS3 } from './s3Uploader';

export async function generateAndUploadQRCode(data: string) {
  try {
    // Generate QR code as a buffer
    const qrBuffer = await QRCode.toBuffer(data, {
      errorCorrectionLevel: 'H',
      type: 'png',
      width: 500,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    // Upload to S3
    const s3Key = await uploadBufferToS3(qrBuffer, 'qr-codes');
    
    return {
      qrCodeData: s3Key.file_name,
      qrCodeUrl: `/api/qr-code/${encodeURIComponent(s3Key.file_name)}`
    };
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}