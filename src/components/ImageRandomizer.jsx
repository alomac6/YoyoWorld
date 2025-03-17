export function RandomizeImages(imagesList, count) {
    if (!imagesList || imagesList.length === 0) {
      return [];
    }
  
    if (imagesList.length <= count) {
      return imagesList;
    }
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
  }