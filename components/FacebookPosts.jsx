'use client';

import React, { useState, useEffect } from 'react';

const FacebookPosts = () => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Check if Facebook is blocked
    const checkFacebookAccess = async () => {
      try {
        const response = await fetch('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576088153701&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        // If we get here, Facebook is accessible
      } catch (error) {
        setIsBlocked(true);
      }
    };

    checkFacebookAccess();
  }, []);

  if (isBlocked) {
    return (
      <div className="w-full max-w-md p-4 mx-auto text-center bg-gray-100 rounded-lg facebook-posts sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h3 className="mb-2 text-lg font-semibold">Contenu Facebook non disponible</h3>
        <p className="mb-4 text-gray-600">
          Facebook semble être bloqué ou inaccessible depuis votre réseau.
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=61576088153701"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-white transition-colors bg-blue-600 rounded hover:bg-blue-700"
        >
          Voir sur Facebook
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto facebook-posts sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576088153701&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''}`}
        className="w-full h-96 sm:h-[500px] md:h-[600px] border-none overflow-hidden rounded-lg"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Page Plugin"
        onError={() => setIsBlocked(true)}
      ></iframe>
    </div>
  );
};

export default FacebookPosts;
