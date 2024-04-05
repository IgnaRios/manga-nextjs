const LikedCards = () => {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-20 pt-20 max-w-sm mx-auto mt-1">
        <img
          src="https://picsum.photos/180/250"
          alt="Nombre del Manga"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-0 text-m font-bold text-white max-w-4">
          {/* Como poner ... al final si el nombre es largo */}
          Nombre del manga
        </h3>
        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          Categoría
        </div>
      </article>
    </div>
  );
};

export default LikedCards;
