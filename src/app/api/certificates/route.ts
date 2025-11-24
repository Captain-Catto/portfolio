import { NextResponse } from 'next/server';
import { certificates } from '@/lib/data';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const issuer = searchParams.get('issuer');

    let data = [...certificates];

    // Filter by issuer
    if (issuer) {
      data = data.filter(cert =>
        cert.issuer.toLowerCase().includes(issuer.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data,
      count: data.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch certificates' },
      { status: 500 }
    );
  }
}
