import React from "react";
import { FaSquareFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-white text-black font-bold p-4 ">
        <section className="flex flex-row">
          <Link href="/" className="text-blue-600 text-4xl "> 
            {" "}
            <FaSquareFacebook />
          </Link>
          <Link href="/" className="text-red-600 text-4xl ">
            {" "}
            <FaInstagram />
          </Link>
          <Link href="/" className="text-black text-4xl ">
            {" "}
            <FaGithub />
          </Link>
          <Link href="/" className="text-black text-4xl ">
            {" "}
            <FaXTwitter />
          </Link>
        </section>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Atikur R. Ahad
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
