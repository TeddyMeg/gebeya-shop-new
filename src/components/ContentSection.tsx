import Button from './Button.tsx';

const ContentSection = () => {
  return (
    <div className="max-w-xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Our Curated Summer Collection
      </h2>
      <p className="text-lg md:text-xl text-white mb-8">
        Explore our curated summer collection featuring trending styles, vibrant colors and 
        lightweight fabrics perfect for long days and nights.
      </p>
      <Button onClick={() => console.log('Button clicked!')}>Explore Now</Button>
    </div>
  );
};

export default ContentSection;