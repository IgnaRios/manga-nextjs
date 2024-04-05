import Link from 'next/link';

const NavbarCenter = () => {
  return (
    <div className="navbar-center">
      <Link
        className="btn btn-ghost text-xl"
        href={'/'}
      >
        LatinManga
      </Link>
    </div>
  );
};

export default NavbarCenter;
