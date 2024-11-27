import DecorationDots from './DecorationDots';
import ContentSection from './ContentSection';
import ImageSection from './ImageSection';

const SummerCollection = () => {
  return (
    <div className="relative bg-gray-100 rounded-lg overflow-hidden h-[500px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <ImageSection />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-transparent">
        <DecorationDots />
      </div>
      <div className="relative z-20 h-full p-8 md:p-12 flex items-center">
        <ContentSection />
      </div>
    </div>
  );
};

export default SummerCollection;