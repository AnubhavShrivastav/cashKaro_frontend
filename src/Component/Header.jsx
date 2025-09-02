import { Link } from "react-router-dom"
import Sidebar from "./Sidebar";

function Header() {
  return (
    <header className="w-full bg-white shadow-md sm:fixed top-0 left-0 z-50">
      <div className="max-w-9xl mx-auto flex justify-between items-center h-20">
        <div className="flex items-center md:space-x-4 cursor-pointer">
          <Sidebar />

          <Link to="/">
            <img
              src="/img/CashKaro.svg"
              alt="logo"
              className="w-15 ml-16 sm:ml-20 sm:w-auto"
            />
          </Link>
        </div>

        <div className="md:flex flex-grow justify-center md:left-5 md:mx-2">
          <input
            type="text"
            className="w-44 h-10 p-4 ml-2 rounded-xl outline-none sm:ml-4 sm:w-xs md:w-xl md:h-12 md:px-4 bg-gray-100"
            placeholder="Search for any brand or products"
          />
        </div>

        <div className="flex items-center">
          <p className="text-xs m-1 font-medium sm:text-sm md:text-base md:mr-3 cursor-pointer">
            Help
          </p>

          <div className="h-6 w-px bg-gray-300 md:mr-3" />
          <img
            src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/account_circle.svg"
            alt="login"
            height={26}
            width={26}
            className="m-1 cursor-pointer inline"
          />
          <Link to={"/login"} className="text-xs font-medium sm:text-sm md:text-base sm:ml-1 sm:mr-5 cursor-pointer">
            Login / Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
