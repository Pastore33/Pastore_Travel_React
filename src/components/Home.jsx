// import React from 'react';
import { Button } from "../layouts/Button";
import { Link } from "react-scroll";
import img from "../assets/img/home.avif";

export const Home = () => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div className="min-h-screen lg:min-h-[90vh] flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-5">
      <div className="flex flex-col text-center lg:text-start gap-5">
        <h1 className="font-semibold text-5xl leading-tight">
          Descubra os melhores Destinos
        </h1>

        <p>
          Com a PassViagens você poderá vivenciar novas viagens e os melhores
          destinos turísticos que temos para oferecer
        </p>
        <div className="lg:pl-24">
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button title="Destinations" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
      <div className="mt-14 lg:mt-0 w-full lg:w-4/5">
        <img
          src={img}
          alt="Imagem ilustrativa de muitos destinos para viajar."
        />
      </div>
    </div>
  );
};
