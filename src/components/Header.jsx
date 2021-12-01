import { HiSearch } from "react-icons/hi";
import { GiNewspaper } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 mx-auto text-textColorAlt bg-secondary min-w-screen">
      {/* Left */}
      <div className="flex items-center gap-4 font-serif text-xl">
        <GiNewspaper size="32" />
        <h1>Diaries Confessions</h1>
      </div>

      {/* Center */}
      <div className="flex items-center p-2 ml-2 rounded-full w-96 bg-primary">
        <HiSearch size="24" className="mx-1" />

        {/* Search Text Box */}
        <input
          className="items-center ml-2 bg-transparent outline-none"
          type="text"
          placeholder="Search"
        ></input>
      </div>

      {/* Right */}
      <div className="flex">Made with ❤️ by DevCom</div>
    </div>
  );
};

export default Header;
