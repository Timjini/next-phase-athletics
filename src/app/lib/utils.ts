export const images = {
  basketBall: '/images/basketball-illustration.png',
};

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const validateImage = (image: string) => {
  const root = process.env.NEXT_PUBLIC_BUCKET_URL!;

  if (image.length === 0 ){
      return '/images/user.png';
  }
  return root + image;
}

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};
