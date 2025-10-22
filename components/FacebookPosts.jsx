'use client';

import React, { useEffect } from 'react';

const FacebookPosts = () => {
  useEffect(() => {
    // Load Facebook SDK if not already loaded
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v18.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Initialize Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
        xfbml: true,
        version: 'v18.0'
      });

      // Parse XFBML after SDK loads
      window.FB.XFBML.parse();
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto facebook-posts sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576088153701&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''}`}
        className="w-full h-96 sm:h-[500px] md:h-[600px] border-none overflow-hidden"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Page Plugin"
      ></iframe>
    </div>
  );
};

export default FacebookPosts;
