export async function fetchGitHubStats() {
    try {
        const res = await fetch('/api/github');
        return await res.json();
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        return null;
    }
}

export async function fetchLeetCodeStats() {
    try {
        const res = await fetch('/api/leetcode');
        return await res.json();
    } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        return null;
    }
}
