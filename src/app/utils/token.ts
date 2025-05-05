
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_KEY || 'TOKEN';

export function generateBookingToken(bookingId: string) {
  return jwt.sign({ bookingId }, secret, { expiresIn: '7d' });
}

export function decodeBookingToken(token: string): { bookingId: string } | null {
  try {
    return jwt.verify(token, secret) as { bookingId: string };
  } catch (err) {
    console.error('Invalid or expired token:', err);
    return null;
  }
}
