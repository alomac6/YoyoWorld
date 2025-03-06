'use client';
import { useState, useEffect } from 'react';

export default function PhotoDisplay() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchImagesList = async () => {
          try {
            setLoading(true);
            const response = await fetch('http://localhost:8080/api/files/list');
            
            if (!response.ok) {
              throw new Error(`Error code: ${response.status}`);
            }
            
            const data = await response.json();
            const randomImages = getRandomImages(data, 20);
            setImages(randomImages);
            } catch (error) {
            console.error('Failed to fetch random images:', error);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchImagesList();
        }, []);
        const getRandomImages = (imagesList, count) => {
            if (imagesList.length <= count) {
                return imagesList;
            }
            for (let i = imagesList.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [imagesList[i], imagesList[j]] = [imagesList[j], imagesList[i]];
              }
            return imagesList.slice(0, count);
        };
        return(
            <div className="w-4/5 h-[1800px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-9 lg:grid-cols-4 lg:grid-rows-7">
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden shadow-md">
                            <img 
                                src={`http://localhost:8080/api/files/${image.filename}`}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }