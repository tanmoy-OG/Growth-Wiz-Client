import { Carousel } from "antd";

const Home = () => {
  return (
    <>
      <div className="w-screen">
        <Carousel autoplay dots={false}> 
          <div>
            <h3 className=" h-96 text-center bg-violet-600">1</h3>
          </div>
          <div>
            <h3 className=" h-96 text-center bg-violet-600">2</h3>
          </div>
          <div>
            <h3 className=" h-96 text-center bg-violet-600">3</h3>
          </div>
          <div>
            <h3 className=" h-96 text-center bg-violet-600">4</h3>
          </div>
        </Carousel>
      </div>
      <h1>Home</h1>
    </>
  );
};

export default Home;
