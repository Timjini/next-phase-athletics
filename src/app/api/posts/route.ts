import { postRepository } from '@/app/repositories/postRepository';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const posts = await postRepository.findAll();
    if (posts.length === 0 || posts == null) {
      return NextResponse.json({ message: 'No posts found' }, { status: 404 });
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
