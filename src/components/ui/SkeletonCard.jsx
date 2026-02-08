const SkeletonCard = () => (
  <div className="w-full h-80 rounded-2xl bg-gray-800/50 p-4 flex flex-col gap-4 animate-pulse border border-gray-700">
    <div className="w-full h-40 bg-gray-700 rounded-xl"></div>
    <div className="w-3/4 h-6 bg-gray-700 rounded-md"></div>
    <div className="w-1/2 h-6 bg-gray-700 rounded-md"></div>
    <div className="w-full h-10 bg-gray-700 rounded-lg mt-auto"></div>
  </div>
);

export default SkeletonCard;