import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
});

export const config = {
  matcher: ['/((?!_next).*)'], // Adjust the matcher as needed
};