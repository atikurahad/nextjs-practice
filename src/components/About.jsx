import React from "react";

function About() {
  return (
    <>
      <h1 className="text-6xl text-center font-extrabold my-6">About Me</h1>

      <section className="grid grid-cols-2 mx-12">
        <section className="mx-4">
          <p className="text-4xl font-extrabold text-white text-center mb-4">
            Passionate Full Stack Developer
          </p>
          <p className="text-bold text-xl  font-semibold">
            A passionate MERN developer is an expert in building web
            applications using the MERN stack, which consists of MongoDB,
            Express.js, React, and Node.js. They thrive on creating dynamic,
            responsive user interfaces and robust backend services. Their
            enthusiasm for coding often drives them to stay updated with the
            latest trends and best practices in web development. These
            developers typically enjoy problem-solving and collaborating with
            others, valuing clean code and efficient workflows. They often
            engage with the developer community, contributing to open-source
            projects or sharing knowledge through blogs and forums. Their
            passion fuels continuous learning, whether through online courses,
            tutorials, or personal projects, making them adaptable and
            innovative in their approach to development.
          </p>
          <button className="btn btn-warning my-6">Contact Me</button>
        </section>

        <section>
          <img
            src="https://i.ibb.co.com/PMdpryr/image.png"
            className="h-full w-full"
            alt="img"
          />
        </section>
      </section>
    </>
  );
}

export default About;
