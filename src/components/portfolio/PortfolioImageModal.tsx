
import React from 'react';
import { PortfolioItem } from './PortfolioData';

interface PortfolioImageModalProps {
  selectedImage: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioImageModal: React.FC<PortfolioImageModalProps> = ({ 
  selectedImage, 
  onClose 
}) => {
  if (!selectedImage) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full">
        <button 
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={selectedImage.image} 
          alt={selectedImage.title} 
          className="w-full h-auto rounded-md animate-scale-in"
        />
        <div className="text-white text-center mt-4">
          <p className="text-xl font-serif">{selectedImage.title}</p>
          <p className="text-sm capitalize text-white/80">{selectedImage.category}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageModal;
