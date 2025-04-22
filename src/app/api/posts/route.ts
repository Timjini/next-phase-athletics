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

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    const newPost = await postRepository.create(data);

    return NextResponse.json(newPost);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
export async function DELETE(request: Request) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    const deletedPost = await postRepository.delete(data.id);

    return NextResponse.json(deletedPost);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
export async function PUT(request: Request) {
  try {
    const data = await request.json();

    if (!data) {
      return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
    }

    const updatedPost = await postRepository.update(data.id, data);

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}