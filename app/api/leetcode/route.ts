import { NextResponse } from 'next/server';

export async function GET() {
    // Mock data - In a real app, fetch from LeetCode API (unofficial)
    return NextResponse.json({
        solved: 350,
        ranking: 150000,
        contestRating: 1650
    });
}
