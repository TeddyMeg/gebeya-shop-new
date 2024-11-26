import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid gap-4">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={selectedImage}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square overflow-hidden rounded-lg ${
              selectedImage === image ? 'ring-2 ring-purple-600' : ''
            }`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;