import { Carousel } from "antd";


const Hero = () => {
  return (
    <>
      <div className="relative w-full">
        <Carousel autoplay dots={false}>
          <div>
            <h3 className=" h-screen text-center bg-violet-600">1</h3>
          </div>
          <div>
            <h3 className=" h-screen text-center bg-violet-600">2</h3>
          </div>
          <div>
            <h3 className=" h-screen text-center bg-violet-600">3</h3>
          </div>
          <div>
            <h3 className=" h-screen text-center bg-violet-600">4</h3>
          </div>
        </Carousel>
        <div className="absolute flex justify-evenly h-96 w-full top-80">
          <button className="w-2/5 h-96 rounded-3xl bg-orange-500">
            Parent Section
          </button>
          <button className="w-2/5 h-96 rounded-3xl bg-orange-500">
            Child Section
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
