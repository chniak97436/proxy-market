'use client';

import React, { useState, useEffect } from 'react';

const FacebookPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/facebook/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="facebook-posts">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="p-4 mb-4 border rounded post">
            {post.message && <p className="mb-2">{post.message}</p>}
            {post.attachments && post.attachments.data && post.attachments.data.length > 0 && (
              <div className="attachments">
                {post.attachments.data.map((attachment, index) => (
                  <div key={index} className="mb-2 attachment">
                    {attachment.media && attachment.media.image && (
                      <img
                        src={attachment.media.image.src}
                        alt={attachment.title || 'Attachment'}
                        className="h-auto max-w-full"
                      />
                    )}
                    {attachment.title && <h4>{attachment.title}</h4>}
                    {attachment.description && <p>{attachment.description}</p>}
                    {attachment.url && (
                      <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                        View on Facebook
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
            <small className="text-gray-500">
              {new Date(post.created_time).toLocaleDateString('fr-FR')}
            </small>
          </div>
        ))
      )}
    </div>
  );
};

export default FacebookPosts;
