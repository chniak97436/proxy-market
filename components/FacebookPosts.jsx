'use client';

import React, { useState, useEffect } from 'react';

const FacebookPosts = () => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [iframeWidth, setIframeWidth] = useState(500);

  useEffect(() => {
    // voir si fb est bloqué en essayant de fetch la page fb
    const checkFacebookAccess = async () => {
      try {
        const response = await fetch('https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576088153701&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        console.log(response);
        // si on arrive la fb est accesible
      } catch (error) {
        setIsBlocked(true);
        console.log("erreur : ",error);
      }
    };

    checkFacebookAccess();
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      setIframeWidth(window.innerWidth < 640 ? window.innerWidth : 500);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  // Si Facebook est bloqué, afficher un message.
  if (isBlocked) {
    return (
      <div className="w-full p-4 mx-auto text-center bg-gray-100 rounded-lg facebook-posts ">
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
    <div className="flex justify-center w-full mx-auto facebook-posts">
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576088153701&tabs=timeline&width=${iframeWidth}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''}`}
        className="w-full max-w-[500px] overflow-hidden border-none rounded-lg h-[600px]"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Page Plugin"
        onError={() => setIsBlocked(true)}
      ></iframe>
    </div>
  );
};

export default FacebookPosts;
