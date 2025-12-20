import { NextResponse } from 'next/server';

export async function GET() {
    // Mock data - In a real app, fetch from GitHub API
    return NextResponse.json({
        commits: 1200,
        repos: 15,
        stars: 45
    });
}
