import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    return NextResponse.json({ error: 'Missing Facebook credentials' }, { status: 500 });
  }

  try {
    const response = await axios.get(`https://graph.facebook.com/v18.0/${pageId}/posts`, {
      params: {
        access_token: accessToken,
        fields: 'id,message,created_time,attachments{media,title,description,url}',
        limit: 10, // Adjust limit as needed
      },
    });

    return NextResponse.json({ data: response.data.data });
  } catch (error) {
    console.error('Error fetching Facebook posts:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
