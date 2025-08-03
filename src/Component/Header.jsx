import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md top-0 left-0 z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-14 flex justify-between items-center h-20">
        <div className="flex items-center md:space-x-4 cursor-pointer">
          <img src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/mobile_toggle.svg" alt="menu" className="mr-2 w-6 md:mr-5" />
         <Link to="/"> 
         <img
            src="/img/CashKaro.svg"
            alt="logo"
            className="w-20 sm:w-auto"
          />
          </Link>
        </div>

        <div className="md:flex flex-grow justify-center md:left-10 md:mx-10">
          <input
            type="text"
            className="w-44 h-10 p-4 ml-2 rounded-xl outline-none sm:ml-4 sm:w-xs md:w-xl md:h-12 md:px-4 bg-gray-100"
            placeholder="Search for any brand or products"
          />
        </div>

        <div className="flex items-center">
          <p className="text-xs m-1 font-medium md:text-base md:mr-3 cursor-pointer">
            Help
          </p>

          <div className="h-6 w-px bg-gray-300 md:mr-3" />
          <img
            src="https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/account_circle.svg"
            alt="login"
            height={26}
            width={26}
            className=" m-1 cursor-pointer inline"
          />
          <p className="text-xs font-medium md:text-base sm:ml-1 cursor-pointer">
            Login / Sign up
          </p>
        </div>
      </div>
    </header>
  );
}
export default Header;
