import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';

function Hero() {
  return (
    <div className="min-h-min bg-[#8A2BE2] relative overflow-hidden px-4 md:px-8">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col relative h-screen">
        <h1 className="text-white text-7xl font-bold mt-4 mb-4">
          Gebeya
        </h1>
        
        {/* Center Image */}
        <div className="w-56 h-56 mx-auto mt-[-40px] rounded-full overflow-hidden border-4 border-white">
          <img
            src={image1}
            alt="Stylish man in coat"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h2 className="text-white text-7xl font-bold mt-4 mb-4 self-end">
          SHOP
        </h2>
        
        <p className="text-white text-left max-w-md mb-2">
          Discover a world of convenience with our user-friendly platform, curated
          collections, and exceptional customer service
        </p>
        
        <button className="w-full max-w-md mx-auto bg-[#FF8C00] text-white py-4 text-lg font-semibold rounded">
          Explore Now
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block relative" style={{ height: 'calc(100vh - 350px)' }}>
        {/* Left Title */}
        <h1 className="text-white text-[100px] font-bold absolute left-1/4 top-20 mb-4">
          Gebeya
        </h1>

        {/* Center Image */}
        <div className="absolute top-1/3 left-1/2 ml-10 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full overflow-hidden border-4 border-white">
          <img
            src={image1}
            alt="Stylish man in coat"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="absolute right-80 top-32 flex flex-col items-start">
          <p className="text-white text-left max-w-md mb-2">
            Discover a world of convenience with our user-friendly platform, curated
            collections, and exceptional customer service
          </p>
          
          <h2 className="text-white text-[100px] text-left font-bold mb-2">
            SHOP
          </h2>
          
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white">
            <img
              src={image3}
              alt="White t-shirt with accessories"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Side Image */}
        <div className="absolute bottom-44 left-1/4 w-64 h-64 rounded-full overflow-hidden border-4 border-white">
          <img
            src={image2}
            alt="White sneaker"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Button */}
        <button className="absolute bottom-28 left-1/2 transform -translate-x-1/2 bg-[#FF8C00] text-white px-20 py-4 text-lg font-semibold rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Hero;