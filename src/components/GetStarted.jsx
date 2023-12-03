const GetStarted = () => {
  return (
    <div className="-mt-6">
      <div className="w-3/4 mx-auto py-20 flex flex-col justify-evenly gap-y-10 items-center bg-blue-800 rounded-3xl">
        <div className="flex justify-center gap-2">
          <h1 className="text-5xl font-semibold text-blue-100">
            Ready to secure your Child's
          </h1>
          <h1 className="text-5xl font-semibold text-teal-400">Future</h1>
          <h1 className="text-5xl font-semibold text-blue-100">?</h1>
        </div>
        <button className="w-1/2 bg-orange-500 hover:bg-orange-600 rounded-xl text-blue-100 text-2xl font-bold">
          Get Started at only Rs 1500
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
