import NavBarStart from './NavBar/NavBarStart';
import NavbarCenter from './NavBar/NavbarCenter';
import NavBarEnd from './NavBar/NavBarEnd';

const NavBar = () => {
  return (
    <div className="navbar mt-3">
      <NavBarStart />
      <NavbarCenter />
      <NavBarEnd />
    </div>
  );
};

export default NavBar;
