import React from 'react';
import LikedCards from './Dashboard/LikedCards';
import ReadingCards from './Dashboard/ReadingCards';
import UploadedCards from './Dashboard/UploadedCards';

const Home = () => {
  return (
    <div className="h-full">
      <h1 className="text-center mt-10">Home</h1>
      <div className="block">
        <div className="grid grid-cols-2 gap-5 ">
          <section className="my-5  overflow-auto">
            <h3 className="">Más Vistos</h3>
            <LikedCards />
          </section>

          <div className="my-5 overflow-auto">
            <h3>Leyendo</h3>
            <ReadingCards />
          </div>
        </div>
        <div className="divider"></div>
        <section>
          <h3>Recién Cargados</h3>
          <UploadedCards />
        </section>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default Home;
