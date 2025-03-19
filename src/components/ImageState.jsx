'use client';
import { useState, useEffect } from 'react';
export function ImageLoadState(images) {
  const [loadedImages, setLoadedImages] = useState({});
  useEffect(() => {
    setLoadedImages({});
  }, [images]);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({...prev, [index]: true}));
  };
  const handleImageError = (index) => {
    setLoadedImages(prev => ({...prev, [index]: true}));
  };
  const isImageLoaded = (index) => {
    return loadedImages[index] === true;
  };

  return {
    handleImageLoad,
    handleImageError,
    isImageLoaded
  };
}