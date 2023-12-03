const Finance = () => {
  return (
    <div className="-mt-6">
      <div className="w-3/4 mx-auto py-20 flex flex-col justify-evenly gap-y-10 items-center bg-blue-800 rounded-3xl">
        <div className="flex flex-col justify-center gap-y-10">
          <h1 className="text-5xl font-semibold text-center text-blue-100">
            Your kid is talented, but it's hard to fund their talent growth.
          </h1>
          <h1 className="text-5xl font-semibold text-center text-teal-400">
            Need Financial Assistance?
          </h1>
        </div>
        <button className="w-1/2 bg-orange-500 hover:bg-orange-600 rounded-xl text-blue-100 text-2xl font-bold">
          Explore Options
        </button>
      </div>
    </div>
  );
};

export default Finance;
