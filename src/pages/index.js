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
      <div className="overflow-y-scroll snap-y-mandatory h-screen">
        <header className="snap-center p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-br from-yellow-300 to-pink-600 flex flex-col flex-1 justify-center items-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider sm:font-thin mix-blend-overlay">
            Inspirience
          </h1>
        </header>
        <figure className="snap-center p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-tr from-blue-300 to-green-600 flex flex-col flex-1 justify-center items-center">
          <blockquote className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider sm:font-thin mix-blend-overlay">
            Energy flows where attention goes
          </blockquote>
          <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
            Tony Robbins
          </figcaption>
        </figure>
        <figure className="snap-center p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-bl from-yellow-200 via-yellow-400 to-yellow-700 flex flex-col flex-1 justify-center items-center">
          <blockquote className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider sm:font-thin mix-blend-overlay">
            Whether you think you can, or you think you can't--you're right
          </blockquote>
          <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
            Henry Ford
          </figcaption>
        </figure>
        <figure className="snap-center p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 flex flex-col flex-1 justify-center items-center">
          <blockquote className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider sm:font-thin mix-blend-overlay">
            If you have the choice between being right and being kind, choose
            being kind
          </blockquote>
          <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
            Dr. Wayne W. Dyer
          </figcaption>
        </figure>
        <figure className="snap-center p-6 sm:px-24 md:px-40 xl:px-80 min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex flex-col flex-1 justify-center items-center">
          <blockquote className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider sm:font-thin mix-blend-overlay">
            Everything will happen at just the right time, at just the right
            place, with just the right people
          </blockquote>
          <figcaption className="mt-4 text-lg mix-blend-overlay italic opacity-50">
            Dr. Wayne W. Dyer
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default IndexPage;
