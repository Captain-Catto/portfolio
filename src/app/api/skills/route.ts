import { NextResponse } from 'next/server';
import { skills } from '@/lib/data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let data = [...skills];

    // Filter by category
    if (category) {
      data = data.filter(skill => skill.category === category);
    }

    return NextResponse.json({
      success: true,
      data,
      count: data.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}
