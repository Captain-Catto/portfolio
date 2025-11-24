import { NextResponse } from 'next/server';
import { statistics } from '@/lib/data';

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: statistics
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
