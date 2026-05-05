'use client';

import { useState, useEffect } from 'react';

export default function MobileMessage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth >= 750) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
      }
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  if (!showMessage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center mx-4 mb-4 bg-black bg-opacity-75 rounded-lg">
      <div className="max-w-sm p-6 mx-8 text-center rounded-lg shadow-lg bviolet">
        <h2 className="mb-8 text-xl font-bold tvert">Veuillez consulter sur mobile</h2>
        <p className="mb-4 tvert">
          Ce site est optimisé pour les appareils mobiles. Pour une meilleure expérience, veuillez utiliser un téléphone ou une tablette.
        </p>
      </div>
    </div>
  );
}
