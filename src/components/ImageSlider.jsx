import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images, alt, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Jika hanya 1 gambar atau tidak ada array images, tampilkan gambar tunggal
  if (!images || images.length <= 1) {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img
          src={images?.[0] || images}
          alt={alt}
          className="w-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
          }}
        />
      </div>
    );
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
      {/* Main Image */}
      <div className="relative aspect-video">
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${isDark ? 'bg-black/50 hover:bg-black/70' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110`}
            aria-label="Previous image"
          >
            <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full ${isDark ? 'bg-black/50 hover:bg-black/70' : 'bg-white/50 hover:bg-white/70'} backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110`}
            aria-label="Next image"
          >
            <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 w-8'
                  : `${isDark ? 'bg-white/50 hover:bg-white/70' : 'bg-slate-900/50 hover:bg-slate-900/70'}`
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full ${isDark ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-sm text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
