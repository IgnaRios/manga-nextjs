import LikedCards from '@/Components/Dashboard/LikedCards';
import ReadingCards from '@/Components/Dashboard/ReadingCards';
import UploadCards from '@/Components/Dashboard/UploadedCards';
import Link from 'next/link';

export default function Panel() {
  return (
    <div className="h-full">
      <h1 className="text-center mt-10">Dashboard</h1>

      <div className="block">
        <div className="grid grid-cols-2 gap-5 ">
          <div>
            <h3 className="">Más Vistos</h3>
            <section className="my-5  overflow-auto">
              <LikedCards />
            </section>
          </div>
          <div>
            <h3>Leyendo</h3>
            <div className="my-5 overflow-auto">
              <ReadingCards />
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <section>
          <h3>Mis mangas cargados</h3>
          <UploadCards />
        </section>

        <div className="divider"></div>

        <section className="text-center">
          <h3 className="m-5">Cargar Manga</h3>
          <Link href={'/mipanel/upload'}>
            <button className="btn btn-primary mb-4">Cargar</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
