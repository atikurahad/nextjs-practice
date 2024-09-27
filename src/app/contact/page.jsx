import React from 'react'

function Contact() {
  return (
    <>
       
       {/* <section className='h-48 w-64 bg-lime-950 font-bold text-xl text-white'>

       <h1>Phone: 0187567627287</h1>
       <h1>email: example@gmail.com</h1>

       </section> */}

<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/rHMJzhP/IMG-3341.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    </>
  )
}

export default Contact