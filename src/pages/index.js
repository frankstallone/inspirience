import * as React from "react";
import Helmet from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "overflow-x-hidden",
        }}
      >
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Helmet>
      <header className="p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-br from-yellow-300 to-pink-600 flex flex-col flex-1 justify-center items-center">
        <h1 className="text-4xl md:text-6xl lg:text-9xl tracking-wider font-thin mix-blend-overlay">
          Inspirience
        </h1>
      </header>
      <figure className="p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-tr from-blue-300 to-green-600 flex flex-col flex-1 justify-center items-center">
        <blockquote className="text-3xl md:text-5xl lg:text-7xl tracking-wider font-thin mix-blend-overlay">
          Energy flows where attention goes
        </blockquote>
        <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
          Tony Robbins
        </figcaption>
      </figure>
      <figure className="p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-bl from-red-300 to-blue-600 flex flex-col flex-1 justify-center items-center">
        <blockquote className="text-3xl md:text-5xl lg:text-7xl tracking-wider font-thin mix-blend-overlay">
          Whether you think you can, or you think you can't--you're right
        </blockquote>
        <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
          Henry Ford
        </figcaption>
      </figure>
      <figure className="p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 flex flex-col flex-1 justify-center items-center">
        <blockquote className="text-3xl md:text-5xl lg:text-7xl tracking-wider font-thin mix-blend-overlay">
          If you have the choice between being right and being kind, choose
          being kind
        </blockquote>
        <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
          Dr. Wayne W. Dyer
        </figcaption>
      </figure>
      <figure className="p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex flex-col flex-1 justify-center items-center">
        <blockquote className="text-3xl md:text-5xl lg:text-7xl tracking-wider font-thin mix-blend-overlay">
          Everything will happen at just the right time, at just the right
          place, with just the right people
        </blockquote>
        <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
          Dr. Wayne W. Dyer
        </figcaption>
      </figure>
    </>
  );
};

export default IndexPage;
