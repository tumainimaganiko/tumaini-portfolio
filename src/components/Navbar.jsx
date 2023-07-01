import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-center p-4 border border-slate-800 items-center">
      <h1 className="text-3xl italic tablet:text-4xl">Tumaini Maganiko</h1>
      <GiHamburgerMenu className="text-2xl tablet:text-4xl" />
    </nav>
  );
};

export default Navbar;
