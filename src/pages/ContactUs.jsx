import "../assets/contact.css";
const ContactUs = () => {
  return (
    <div>
      <div className="">
        <div className="w-full h-1/2 p-10">
          <div class="textcenter" className="textcenter">
            <h1 className="text-3xl font-serif font-medium">
              Your Child deserves to be the <em>best version</em> of itself!
            </h1>
            <p className=" p-2 text-slate-800 ">
              We are there to assist you, take care of yoourself and your child
              bla bla bla. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Perspiciatis neque repellendus eius nostrum voluptatem
            </p>
            {/* <!-- <div class="button"><button >Explore More</button></div> --> */}
            <button className="mt-4 text-lg py-3 px-4 rounded-2xl bg-amber-100 text-black hover:bg-fuchsia-900 hover:text-amber-100 transition-all duration-150 hover:shadow-black hover:shadow-xl border-black hover:border-black">
              Explore More
            </button>
          </div>
          <img class="img1" src="/blogs/Top1-removebg-preview.png" alt=""></img>
          <img class="img2" src="blogs/Top2-removebg-preview.png" alt=""></img>
        </div>
        <div class="bottom">
          <div class="bottomtext">
            <h1 className=" font-serif">Three Easy Steps To Connect!</h1>
          </div>
          <div
            class="box"
            className="box items-center flex justify-evenly w-full text-slate-800"
          >
            <div class=" boxmain box1">
              <img src="/blogs/Doc1-removebg-preview (1).png" alt=""></img>
              <h2 className="text-2xl font-serif font-semibold">
                Search Your Expert
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                voluptatem nostrum? Sequi quia fugiat provident repellendus.
                Nulla laborum obcaecati repellat, eos odio possimus aut?
              </p>
            </div>
            <div class=" boxmain box2">
              <img src="/blogs/Doc2-removebg-preview.png" alt=""></img>
              <h2 className="text-2xl font-serif font-semibold">
                Check Availibilty
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                rerum, assumenda sed, repellat officiis rem nihil vero porro,
                soluta neque corporis similique voluptate ipsa.
              </p>
            </div>
            <div class="boxmain box3">
              <img src="/blogs/Doc3-removebg-preview.png" alt=""></img>
              <h2 className="text-2xl font-serif font-semibold">
                Book an Appointment
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                eaque fuga nihil sint perspiciatis suscipit. Reprehenderit
                distinctio omnis minus officia provident modi veniam
                repellendus!
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Third Section --> */}
        <div class="thirdnext">
          <div class=" sec section1">
            <img class="secimg" src="/blogs/secimg1.png" alt=""></img>
            <div class="caption1">
              <h2 className="text-2xl font-serif font-semibold">
                Quality health starts with Quality Doctors
              </h2>
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, velit distinctio error dolor qui adipisci.
                Reprehenderit ut nihil quibusdam veritatis, amet laborum sunt
                sequi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Rem quas perferendis eligendi quos illum. Quae, minus. Error
                veniam sunt culpa provident velit quos sed.
              </p>
              <button
                class="btn"
                className="mt-4 text-lg py-3 px-4 rounded-2xl bg-amber-100 text-black hover:bg-fuchsia-900 hover:text-amber-100 transition-all duration-150 hover:shadow-black hover:shadow-xl border-black hover:border-black"
              >
                Book Now!
              </button>
            </div>
          </div>
          <div class=" sec section2">
            <div class="caption2">
              <h2 className="text-2xl font-serif font-semibold">
                Find your Desired Therapist Anytime, Anywhere
              </h2>
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                deleniti, quibusdam laboriosam dicta ab minus, ex nihil vel modi
                nisi magnam placeat, molestias voluptatem. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Nihil voluptatum
                exercitationem necessitatibus assumenda reprehenderit fugiat
                excepturi, nulla, dicta sapiente quibusdam ab eligendi officia
                qui?
              </p>
              <button
                class="btn"
                className="mt-4 text-lg py-3 px-4 rounded-2xl bg-amber-100 text-black hover:bg-fuchsia-900 hover:text-amber-100 transition-all duration-150 hover:shadow-black hover:shadow-xl border-black hover:border-black"
              >
                Explore!
              </button>
            </div>
            <img class="secimg" src="/blogs/secimg2.png" alt=""></img>
          </div>
          <div class=" sec section3">
            <img class="secimg" src="blogs/secimg3.png" alt=""></img>
            <div class="caption3">
              <h2 className="text-2xl font-serif font-semibold">
                Talk with a Therpist with Just a click!
              </h2>
              <p className="text-slate-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                neque minima optio repudiandae nihil modi atque alias voluptate
                error. Debitis alias atque commodi maiores! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Quis vel dolorum aliquid
                nihil molestiae fugit hic nobis. Eligendi expedita enim illo
                nisi amet ipsam.
              </p>
              <button
                class="btn"
                className="mt-4 text-lg py-3 px-4 rounded-2xl bg-amber-100 text-black hover:bg-fuchsia-900 hover:text-amber-100 transition-all duration-150 hover:shadow-black hover:shadow-xl border-black hover:border-black"
              >
                Click Here!
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Fourth Section --> */}
        <div class="meet" className="meet text-slate-800 font-serif">
          <div class="meetcaption">
            <h1 className="text-4xl font-medium">
              Meet Your Experienced Therapists!
            </h1>
          </div>
          {/* <!-- Slider Section --> */}
          <div class="wrapper">
            <i id="left" class="fa-solid fa-angle-left"></i>
            <ul class="carousel">
              <li class="card">
                <div class="img">
                  <img src="/blogs/pf1.png" alt="img" draggable="false"></img>
                </div>
                <h2>Blanche Pearson</h2>
                <span>Sales Manager</span>
              </li>
              <li class="card">
                <div class="img">
                  <img src="/blogs/pf2.png" alt="img" draggable="false"></img>
                </div>
                <h2>Joenas Brauers</h2>
                <span>Web Developer</span>
              </li>
              <li class="card">
                <div class="img">
                  <img src="/blogs/pf7.png" alt="img" draggable="false"></img>
                </div>
                <h2>Lariach French</h2>
                <span>Online Teacher</span>
              </li>
              <li class="card">
                <div class="img">
                  <img src="/blogs/pf4.png" alt="img" draggable="false"></img>
                </div>
                <h2>James Khosravi</h2>
                <span>Freelancer</span>
              </li>
              <li class="card">
                <div class="img">
                  <img src="/blogs/pf5.png" alt="img" draggable="false"></img>
                </div>
                <h2>Kristina Zasiadko</h2>
                <span>Bank Manager</span>
              </li>
              <li class="card">
                <div class="img">
                  <img src="blogs/pf6.png" alt="img" draggable="false"></img>
                </div>
                <h2>Donald Horton</h2>
                <span>App Designer</span>
              </li>
            </ul>
            <i id="right" class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
