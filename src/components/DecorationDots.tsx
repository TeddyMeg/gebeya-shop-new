const DecorationDots = () => {
  return (
    <div className="absolute inset-0 z-10">
      <div className="absolute top-[10%] left-[20%] w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute top-[30%] left-[40%] w-6 h-6 bg-purple-300 rounded-full animate-pulse"></div>
      <div className="absolute top-[50%] left-[15%] w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
      <div className="absolute top-[70%] left-[35%] w-5 h-5 bg-orange-300 rounded-full animate-pulse"></div>
      <div className="absolute top-[20%] left-[60%] w-4 h-4 bg-pink-300 rounded-full animate-pulse"></div>
      <div className="absolute top-[60%] left-[25%] w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
    </div>
  );
};

export default DecorationDots;