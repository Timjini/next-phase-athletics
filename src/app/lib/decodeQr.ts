import { Jimp } from "jimp";
import QrCode from "qrcode-reader";

export const decodeQrCodeFromBase64 = async (base64: string) => {
  const buffer = Buffer.from(base64, "base64");
  const image = await Jimp.read(buffer);

  const qr = new QrCode();

  return new Promise<string>((resolve, reject) => {
    qr.callback = (err: any, value: { result: string }) => {
      if (err) return reject(err);
      resolve(value.result);
    };
    qr.decode(image.bitmap);
  });
};
