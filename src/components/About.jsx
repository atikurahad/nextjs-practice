import React from "react";

function About() {
  return (
    <>
      <h1 className="text-6xl text-center font-bold my-6">About Me</h1>

      <section className="grid grid-cols-3 mx-12">
        <section>
          <img  src="https://i.ibb.co.com/wsRwyrH/image.png" className="h-full w-full" alt="img" />
        </section>
        <section className="mx-4">
          <p className="text-4xl text-white text-center mb-4">
            Designing With Passion While Exploring The World
          </p>
          <p  className="text-bold text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste
            nobis aut eveniet dolorum dicta cum et excepturi non ipsa in
            repellat laboriosam est explicabo labore eligendi, dolore nisi. Hic
            voluptas sequi doloremque aspernatur cupiditate veritatis adipisci
            culpa dolorem facere excepturi. Quidem aliquam totam quam delectus
            laborum itaque ab libero.
          </p>
        </section>
        <section className="mx-4">
          <p className="text-4xl text-white text-center mb-4">
          I Create Products Not Just Arts
          </p>
          <p  className="text-bold text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste
            nobis aut eveniet dolorum dicta cum et excepturi non ipsa in
            repellat laboriosam est explicabo labore eligendi, dolore nisi. Hic
            voluptas sequi doloremque aspernatur cupiditate veritatis adipisci
            culpa dolorem facere excepturi. Quidem aliquam totam quam delectus
            laborum itaque ab libero.
          </p>
        </section>
        
      </section>
    </>
  );
}

export default About;
