import React from "react";

function Hero() {
  return (
    <>
      <section>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co.com/3v3vj2N/IMG-3341-removebg-preview.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-[#C0C0C0] font-bold">
                I'm <span className="text-red-900">MERN</span> Developer
              </h1>
              <h1 className="text-5xl text-white font-bold">Atikur R. Ahad</h1>
              <p className="py-6">
                Detail-oriented junior ReactJS developer with a solid foundation
                in front-end technologies, including HTML, CSS, and JavaScript.
                Eager to contribute to dynamic web applications and enhance user
                experiences through innovative design and efficient coding
                practices. Passionate about collaborating with teams to solve
                problems and learn new technologies in a fast-paced environment.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}

export default Hero;
