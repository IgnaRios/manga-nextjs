'use client';
import { badgeList } from '@/badgeList';
//import Link from 'next/link';

const UploadManga = () => {
  const badgeClass = 'badge badge-primary badge-outline mx-1';

  const handlerButton = (e) => {
    e.preventDefault();
  };

  const handleChangebadge = (e) => {
    const nameBadgeSelected = e.target.attributes[1].value;
    const badgeValue = document.getElementsByName(nameBadgeSelected.toString());

    const valueBadge = badgeValue[0].attributes[0].value.toString();

    if (valueBadge === badgeClass) {
      badgeValue[0].setAttribute('class', 'badge badge-primary mx-1');
    } else {
      badgeValue[0].setAttribute('class', badgeClass);
    }
  };

  return (
    <div className="h-full">
      <form className="flex flex-col items-center justify-center w-full">
        <label className="input input-bordered flex items-center gap-2  mt-3">
          <input
            type="text"
            placeholder="Nombre del Manga"
            name="name"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2  mt-3">
          <input
            type="text"
            placeholder="Descripción"
            name="description"
            className="grow"
          />
        </label>
        <div className="mt-10 flex-col col-span-8">
          {badgeList.map((badge, index) => {
            return (
              <span key={index}>
                <button
                  className="btn bg-transparent border-none shadow-none hover:bg-transparent"
                  onClick={handlerButton}
                >
                  <div
                    className={badgeClass}
                    onClick={handleChangebadge}
                    name={badge.name}
                  >
                    {badge.name}
                  </div>
                </button>
              </span>
            );
          })}
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-5"
        >
          Cargar
        </button>
      </form>
    </div>
  );
};

export default UploadManga;
