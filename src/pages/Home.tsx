import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { categories, collections } from '../data/product';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Hero from '../components/Hero';
import SummerCollection from '../components/SummerCollection';

const Home = () => {
  const { toggleFavorite, addToCart } = useShop();
  const [activeCategoryId, setActiveCategoryId] = useState(2);

  const filteredCollections = collections.filter(collection => collection.categoryId === activeCategoryId);

  const featuredProducts = [
    {
      id: '1',
      name: 'French Kiss Bag',
      brand: 'ALDO',
      price: 500,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      category: 'Bags',
      rating: 4.5,
      inStock: true,
      description: 'A stylish bag perfect for any occasion.'
    },
    {
      id: '2',
      name: 'Burberry shine',
      brand: 'FENDI',
      price: 150,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      category: 'Shoes',
      rating: 4.8,
      inStock: true,
      description: 'Elegant shoes that shine with every step.'
    },
    {
      id: '3',
      name: 'Alvero Gown',
      brand: 'DIVINE',
      price: 300,
      image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      category: 'Dresses',
      rating: 4.7,
      inStock: true,
      description: 'A stunning gown for special occasions.'
    },
    {
      id: '4',
      name: 'Classic White Sneakers',
      brand: 'Nike',
      price: 120,
      image: 'https://images.unsplash.com/photo-1521774971864-62e842046145?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Shoes',
      rating: 4.6,
      inStock: true,
      description: 'Timeless sneakers that go with any outfit.'
    },
    {
      id: '5',
      name: 'Elegant Evening Dress',
      brand: 'Zara',
      price: 250,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlZ2FudCUyMEV2ZW5pbmclMjBEcmVzc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Dresses',
      rating: 4.9,
      inStock: true,
      description: 'A beautiful dress for your special night out.'
    },
    {
      id: '6',
      name: 'Stylish Leather Jacket',
      brand: 'AllSaints',
      price: 350,
      image: 'https://images.unsplash.com/photo-1551283279-166ab6d719af?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Jackets',
      rating: 4.8,
      inStock: true,
      description: 'A classic leather jacket that never goes out of style.'
    }
  ];

  const categories_1 = [
    { id: 'casual-wear', name: 'Casual wear', image: 'https://www.bing.com/images/blob?bcid=RAzd0kYUyMsH9fyMpCsVWhVNASk1......c', count: 20 },
    { id: 'vintage', name: 'Vintage', image: 'https://www.bing.com/images/blob?bcid=RE1x9UoSwMsH9fyMpCsVWhVNASk1.....8E', count: 31 },
    { id: 'beauty-products', name: 'Beauty products', image: 'https://www.bing.com/images/blob?bcid=RAVUk7Q-EMsH9fyMpCsVWhVNASk1.....1A', count: 24 },
    { id: 'gym-wear', name: 'Gym wears', image: 'https://www.bing.com/images/blob?bcid=ROyA9qNVucsH9fyMpCsVWhVNASk1.....1w', count: 62 },
    { id: 'formal-wear', name: 'Formal wear', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fGZvcm1hbCUyMHdlYXJ8ZW58MHx8fHwxNjYyMjY0MjY0&ixlib=rb-1.2.1&q=80&w=400', count: 15 },
    { id: 'accessories', name: 'Accessories', image: 'https://plus.unsplash.com/premium_photo-1674255466836-f38d1cc6fd0d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWNjZXNzb3J5fGVufDB8fDB8fHww', count: 40 },
    { id: 'footwear', name: 'Footwear', image: 'https://plus.unsplash.com/premium_photo-1673367751771-f13597abadf3?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D', count: 50 },
    { id: 'outerwear', name: 'Outerwear', image: 'https://images.unsplash.com/photo-1695150089018-f9e2ad8adb47?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', count: 30 },
  ];

  const scroll = (direction: number) => {
    const slider = document.getElementById('product-slider');
    const scrollAmount = slider ? slider.clientWidth / 3 : 0; // Scroll by one-third of the slider width
    if (slider) {
      const currentScroll = slider.scrollLeft; // Get current scroll position
      slider.scrollTo({
        left: currentScroll + direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollCategories = (direction: number) => {
    const slider = document.getElementById('category-slider');
    const scrollAmount = slider ? slider.clientWidth / 3 : 0; // Scroll by one-third of the slider width
    if (slider) {
      const currentScroll = slider.scrollLeft; // Get current scroll position
      slider.scrollTo({
        left: currentScroll + direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero/>

      {/* Latest Collections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Latest Collections</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll(-1)}
              className="p-2 rounded-full bg-orange-500 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scroll(1)}
              className="p-2 rounded-full bg-orange-500 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300" id="product-slider">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg p-4 min-w-[300px] product-item"
                onClick={() => {
                  const slider = document.getElementById('product-slider');
                  if (slider) {
                    const nextScroll = (index + 1) * (slider.clientWidth / 3); // Calculate next scroll position
                    slider.scrollTo({
                      left: nextScroll,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => toggleFavorite(product)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  {product.inStock && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                      In Stock
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.brand}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-[#FF9500] text-white px-4 py-2 rounded-full text-sm hover:bg-[#FF8500] transition-colors"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    

      <div className="flex items-center justify-center space-x-4 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategoryId(category.id);
              categories.forEach(cat => cat.active = cat.id === category.id);
            }}
            className={`px-6 py-2 rounded-full border-2 ${
              category.id === activeCategoryId
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            } transition duration-300`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCollections.map(collection => (
          <div key={collection.id} className="text-center border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <div className="bg-gray-100 rounded-t-lg p-4 mb-2">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
            </div>
            <h3 className="font-semibold mb-1">{collection.name}</h3>
            <p className="text-sm text-gray-600">{collection.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg">
          See more ≫
        </button>
      </div>

      {/* Summer Collection */}
      <SummerCollection/>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scrollCategories(-1)}
              className="p-2 rounded-full bg-orange-500 text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => scrollCategories(1)}
              className="p-2 rounded-full bg-orange-500 text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div className="flex transition-transform duration-300" id="category-slider">
            {categories_1.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group bg-white p-4 rounded-lg text-center min-w-[200px] mx-2"
              >
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">Over {category.count} categories in stock</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;