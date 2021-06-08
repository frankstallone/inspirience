import * as React from "react";
import Helmet from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "overflow-x-hidden",
        }}
      ></Helmet>
      <header className="min-h-screen bg-gradient-to-br from-yellow-300 to-pink-600 flex flex-col flex-1 justify-center items-center">
        <h1 className="text-9xl tracking-wider font-thin mix-blend-overlay">
          Inspirience
        </h1>
      </header>
    </>
  );
};

export default IndexPage;
