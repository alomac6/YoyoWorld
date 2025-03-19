'use client';
export default function ImageSetUp({ 
  src,
  isLoaded = false,
  onLoad,
  onError
}) {
  return (
    <div className="aspect-square relative overflow-hidden shadow-md bg-gray-100">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={src}
        className="absolute h-full w-full object-cover object-center"
        loading="lazy"
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
}