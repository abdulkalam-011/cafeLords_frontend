

const Loader = () => {
  return (
    <>
      <div className="w-[100vw] p-8 flex justify-center items-center h-[100vh]">
        <div className="w-20">
          <div className="loader animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500"></div>
          <p>loading.....</p>
        </div>
      </div>
    </>
  );
};

export default Loader;
