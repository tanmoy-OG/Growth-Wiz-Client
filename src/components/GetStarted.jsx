
const GetStarted = () => {
  return (
    <div className="-mt-6">
      <div className="w-3/4 mx-auto py-20 flex flex-col justify-evenly gap-y-10 items-center bg-indigo-800 rounded-3xl">
        <div className="flex justify-center gap-2">
          <h1 className="text-5xl font-semibold text-indigo-200">
            Ready to secure your Child's
          </h1>
          <h1 className="text-5xl font-semibold text-amber-400">Future</h1>
          <h1 className="text-5xl font-semibold text-indigo-200">?</h1>
        </div>
        <button className="w-1/2 bg-pink-600 hover:bg-rose-500 rounded-xl text-pink-100 text-2xl font-bold">
          Get Started at only Rs 1500
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
