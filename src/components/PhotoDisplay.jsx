'use client';
import { useQuery } from '@tanstack/react-query';
import QueryProvider from './QueryProvider';
import { api } from './QueryProvider';
import { RandomizeImages } from './ImageRandomizer';
import { ImageLoadState} from './ImageState';
import ImageSetUp from './ImageSetUp';
export default function PhotoDisplay() {
    return(
        <QueryProvider>
        <PhotoDisplayContent />
        </QueryProvider>
    );
}
    function PhotoDisplayContent() {
        const imageCount = 24;
        const { data: imageList, isLoading, error } = useQuery({
            queryKey: ['gallery-images', imageCount],
            queryFn: async () => {
            const response = await api.get('/api/files/list');
            return RandomizeImages(response.data, imageCount);
            }
        });
        const imageUrls = imageList?.map(image => {
            const imageName = image.split(/[\/\\]/).pop();
            return `http://localhost:8080/api/files/download/${imageName}`;
        }) || [];
        const { handleImageLoad, handleImageError, isImageLoaded } = ImageLoadState(imageUrls);
        if (isLoading) {
            return (
            <div className="w-4/5 mx-auto pt-10">
                <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            </div>
            );
        }
        if (error) {
            return (
            <div className="w-4/5 mx-auto pt-10">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>Error loading images: {error.message}</p>
                </div>
            </div>
            );
        }
        return (
            <div className="w-3/5 mx-auto pt-25 z-0">
            <div className="grid gap-x-1 gap-y-2 grid-cols-1 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
                {imageUrls.map((imageUrl, index) => (
                <ImageSetUp
                    key={index}
                    src={imageUrl}
                    isLoaded={isImageLoaded(index)}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                />
                ))}
            </div>
            </div>
        );
    }