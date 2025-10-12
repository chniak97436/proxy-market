import { NextResponse } from 'next/server';

export async function GET() {
  // Code pour récupérer les posts Facebook
  return NextResponse.json({ message: 'API route pour les posts Facebook' });
}
