
const WhatWeOffer = () => {
  return (
    <>
      <div className=" mt-14 flex flex-col gap-y-20">
        <div className=" mx-24 px-40 flex flex-col gap-y-8 items-center">
          <h1 className=" text-6xl font-semibold text-pink-600">
            Monthly Report
          </h1>
          <h1 className=" text-4xl font-semibold text-purple-600">
            Bringing out the Full Potential of your Child
          </h1>
          <p className="text-xl font-medium text-justify text-slate-800">
            Get a comprehensive monthly report on the initial assessment of your
            Child and the monthly progress, put together by experts on the
            field. Some key area of this report are:
          </p>
        </div>
        <div className="px-20 flex flex-row flex-wrap justify-evenly gap-1 gap-y-16">
          <div className="flex flex-col items-center w-1/4 gap-4">
            <img
              className="w-1/4 h-fit my-auto"
              src="/homepageProp/prop1.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-green-500">
              Learning Dimensions
            </h1>
            <p className="text-lg font-medium text-justify text-slate-800">
              Get a deeper insight on how your child learns the best and most
              efficient.
            </p>
          </div>
          <div className="flex flex-col items-center w-1/4 gap-4">
            <img
              className="w-1/4 h-fit my-auto"
              src="/homepageProp/prop2.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-cyan-500">
              Personality Type
            </h1>
            <p className="text-lg font-medium text-justify text-slate-800">
              Introvert or Social Butterfly? Analytical or Hoilistic? Understand
              your child's inherent personality.
            </p>
          </div>
          <div className="flex flex-col items-center w-1/4 gap-4">
            <img
              className="w-1/4 h-fit my-auto"
              src="/homepageProp/prop3.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-red-500">
              Talent Discovery & Growth
            </h1>
            <p className="text-lg font-medium text-justify text-slate-800">
              Have a knack for creativity? Good at Mathematical Reasoning?
              Athletic? Know your child's innate talents.
            </p>
          </div>
          <div className="flex flex-col items-center w-1/4 gap-4">
            <img
              className="w-1/4 h-fit my-auto"
              src="/homepageProp/prop4.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-violet-500">
              Interests
            </h1>
            <p className="text-lg font-medium text-justify text-slate-800">
              Learn what your child is naturally interested at. Because when
              talent meets interest, Passion is born.
            </p>
          </div>
          <div className="flex flex-col items-center w-1/4 gap-4">
            <img
              className="w-1/4 h-fit my-auto"
              src="/homepageProp/prop5.png"
              alt=""
            />
            <h1 className="text-2xl font-semibold text-blue-800">
              Curated Guides
            </h1>
            <p className="text-lg font-medium text-justify text-slate-800">
              Get curated guides on efficient and fluent development of your
              child based on analysed data.
            </p>
          </div>
        </div>
        {/* <EachOfferRight
          url={"/homepageProp/prop1.png"}
          heading={"Learning Dimensions"}
          para1={
            "Different individuals have different learning patterns, some learn faster reading books, some learn faster when personally guided by a mentor, some learn faster with audio visuals, etc."
          }
          para2={
            "Get a deeper insight on how your child learns the best and most efficient."
          }
          para3={""}
        />
        <EachOfferLeft
          url={"/homepageProp/prop1.png"}
          heading={"Personality Type"}
          para1={
            "Is your child introvert or social butterflies? The curious kind or fun loving? Detail analyser or sees a broader picture? Innate personality traits exposes many key areas of strengths and weaknesses in a child, pointing out early leadership abilities, social awkwardness, critical thinking skills, disciplinary attitudes, etc."
          }
          para2={
            "Having an understanding of your child\’s personality traits will help you to parent them the correct way while helping them overcome their weak areas and polish their strong areas."
          }
          para3={""} 
        />*/}
      </div>
    </>
  );
};

// const EachOfferRight = ({ url, heading, para1, para2, para3 }) => {
//   return (
//     <>
//       <div className="mx-24 px-40 flex flex-row gap-10 bg-white">
//         <img className="w-1/4 h-fit my-auto" src={url} alt="" />
//         <div className="w-3/4 flex flex-col gap-y-8">
//           <h1 className="text-4xl font-semibold text-orange-500">{heading}</h1>
//           <p className="text-xl font-medium text-justify text-slate-800">
//             {para1}
//           </p>
//           <p className="text-xl font-medium text-justify text-slate-800">
//             {para2}
//           </p>
//           <p className="text-xl font-medium text-justify text-slate-800">
//             {para3}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// const EachOfferLeft = ({ url, heading, para1, para2, para3 }) => {
//   return (
//     <>
//       <div className="mx-24 px-40 flex flex-row gap-10 bg-white">
//         <div className="w-3/4 flex flex-col gap-y-8">
//           <h1 className="text-4xl font-semibold text-orange-500">{heading}</h1>
//           <p className="text-xl font-medium text-justify text-slate-800">
//             {para1}
//           </p>
//           <p className="text-xl font-medium text-justify text-slate-800">
//             {para2}
//           </p>
//           <p className="text-xl font-medium text-justify text-slate-800">
//             {para3}
//           </p>
//         </div>
//         <img className="w-1/4 h-fit my-auto" src={url} alt="" />
//       </div>
//     </>
//   );
// };

export default WhatWeOffer;
