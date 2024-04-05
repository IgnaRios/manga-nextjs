import Link from 'next/link';

const NavBarEnd = () => {
  return (
    <div className="navbar-end">
      <div>
        <button className="btn btn-primary mx-2">
          <Link href={'/login'}>Log in</Link>
        </button>
        <button className="btn btn-accent">
          <Link href={'/register'}>Registro</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBarEnd;
