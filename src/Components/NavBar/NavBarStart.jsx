import Link from 'next/link';
import { navLinks } from '@/navLinks';

const NavBarStart = () => {
  return (
    <div className="navbar-start">
      <ul className="menu menu-horizontal px-1">
        {navLinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
            >
              <li className="text-lg py-2 px-4 lg:-ml-2 active:translate-y-px active:translate-x-px">
                {link.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBarStart;
