import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Minus, Plus, Share2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductGallery from '../components/ProductGallery';
import ColorPicker from '../components/ColorPicker';
import SizePicker from '../components/SizePicker';

const ProductDetails = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite } = useShop();
  
  // This would normally come from an API
  const product = {
    id: '2',
    name: 'Burberry shine',
    brand: 'FENDI',
    price: 150,
    originalPrice: 300,
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
    ],
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    category: 'Shoes',
    rating: 4.8,
    inStock: true,
    description: 'Available in a wide range of colors, patterns, and patterns and themes to appeal to kids.',
    sizes: ['20', '25', '32', '37'],
    colors: ['#FFFFFF', '#000000', '#FF0000', '#0000FF']
  };

  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/cart');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        {/* Product Gallery */}
        <ProductGallery images={product.images} name={product.name} />

        {/* Product Info */}
        <div className="lg:max-w-lg">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-sm text-gray-500">Brand: {product.brand}</p>
            </div>
            <button
              onClick={() => toggleFavorite(product)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Heart className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <p className="text-3xl font-bold text-gray-900">${product.price}</p>
              {product.originalPrice && (
                <p className="ml-3 text-lg text-gray-500 line-through">
                  ${product.originalPrice}
                </p>
              )}
            </div>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-${
                      i < Math.floor(product.rating) ? 'yellow' : 'gray'
                    }-400`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating} rating
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-900">Size</h2>
            <SizePicker
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-900">Color</h2>
            <ColorPicker
              colors={product.colors}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
            />
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
            <div className="mt-2 flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="rounded-full p-1 text-gray-600 hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-purple-600 py-3 px-8 rounded-full text-white hover:bg-purple-700 transition-colors"
            >
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 py-3 px-8 rounded-full hover:bg-gray-50 transition-colors">
              Save for Later
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-sm text-gray-500">{product.description}</p>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;