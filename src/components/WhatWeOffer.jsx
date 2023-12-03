const WhatWeOffer = () => {
  return (
    <div className="flex flex-col gap-y-20">
      <div className=" mx-24 px-40 flex flex-col gap-y-8 items-center">
        <h1 className=" text-6xl font-semibold text-orange-400">
          Monthly Report
        </h1>
        <h1 className=" text-4xl font-semibold text-teal-400">
          Bringing out the Full Potential of your Child
        </h1>
        <p className="text-xl font-medium text-justify text-blue-950">
          Get a comprehensive monthly report on the initial assessment of your
          Child and the monthly progress, put together by experts on the field.
          Some key area of this report are:
        </p>
      </div>
      <div className="px-20 flex flex-row flex-wrap justify-evenly gap-1 gap-y-16">
        <Offer
          link={"/homepageProp/prop1.png"}
          heading={"Learning Dimensions"}
          desc={
            "Get a deeper insight on how your child learns the best and most efficient."
          }
          col={"green-500"}
        />
        <Offer
          link={"/homepageProp/prop2.png"}
          heading={"Personality Type"}
          desc={
            "Introvert or Social Butterfly? Analytical or Hoilistic? Understand your child's inherent personality."
          }
          col={"cyan-500"}
        />
        <Offer
          link={"/homepageProp/prop3.png"}
          heading={"Talent Discovery"}
          desc={
            "Have a knack for creativity? Good at Mathematical Reasoning? Athletic? Know your child's innate talents."
          }
          col={"red-500"}
        />
        <Offer
          link={"/homepageProp/prop4.png"}
          heading={"Interests"}
          desc={
            "Learn what your child is naturally interested at. Because when talent meets interest, Passion is born."
          }
          col={"violet-500"}
        />
        <Offer
          link={"/homepageProp/prop5.png"}
          heading={"Curated Guides"}
          desc={
            "Get curated guides on efficient and fluent development of your child based on analysed data."
          }
          col={"blue-800"}
        />
      </div>
    </div>
  );
};

const Offer = ({ link, heading, desc, col }) => {
  return (
    <div className="flex flex-col items-center w-1/4 gap-4">
      <img className="w-1/4 h-fit my-auto" src={link} alt="" />
      <h1 className={`text-2xl font-semibold text-${col}`}>{heading}</h1>
      <p className="text-lg font-medium text-justify text-blue-950">{desc}</p>
    </div>
  );
};

export default WhatWeOffer;
