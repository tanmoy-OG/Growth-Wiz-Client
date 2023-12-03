import { Carousel } from "antd";
import Features from "./Features";

const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <Carousel autoplay dots={true}>
          <div className="">
            <div className="flex">
              <div className="bg-blue-800 mx-auto p-20 flex flex-col gap-y-10 basis-2/3">
                <h1 className="text-blue-100 text-3xl font-semibold">
                  Do you know how your{" "}
                  <h1 className="inline-block text-3xl font-semibold text-teal-400">
                    Relationship
                  </h1>{" "}
                  with your child effect's their behavior and motivations?
                </h1>
                <h1 className="text-blue-100 text-3xl font-semibold">
                  Take our insightful test to to strengthen the bond and nurture
                  a thriving future together!
                </h1>
                <button className="w-1/2 bg-orange-500 hover:bg-orange-600 rounded-xl text-blue-100 text-3xl font-bold">
                  Take the Test
                </button>
              </div>
              <img
                className="basis-1/3 object-cover"
                src="/homepageProp/banner1.webp"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="flex">
              <div className="bg-blue-800 mx-auto p-20 flex flex-col gap-y-10 basis-2/3">
                <h1 className="text-blue-100 text-3xl font-semibold">
                  Uncover the{" "}
                  <h1 className="inline-block text-3xl font-semibold text-teal-400">
                    Wonders Within
                  </h1>{" "}
                  :
                </h1>
                <h1 className="text-blue-100 text-3xl font-semibold">
                  Delve into your child's unique{" "}
                  <h1 className="inline-block text-3xl font-semibold text-teal-400">
                    Personality
                  </h1>{" "}
                  with our interactive test, guide them towards a world of
                  endless possibilities.
                </h1>
                <button className="w-2/3 bg-orange-500 hover:bg-orange-600 rounded-xl text-blue-100 text-3xl font-bold">
                  Unlock their true potential!
                </button>
              </div>
              <img
                className="basis-1/3 object-cover"
                src="/homepageProp/banner2.webp"
                alt=""
              />
            </div>
          </div>
          {/* <div>
            <img src="/homepageProp/banner1.png" alt="" />
          </div>
          <div>
            <img src="/homepageProp/banner1.png" alt="" />
          </div>
          <div>
            <img src="/homepageProp/banner1.png" alt="" />
          </div> */}
        </Carousel>

        <Features />
      </div>
    </>
  );
};

export default Hero;
