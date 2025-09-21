import { Link } from "react-router-dom"

function Footer() {

  return (
    <footer className="bottom-0 w-full bg-neutral-600 py-6 px-1 sm:py-9">
      <div className="flex items-start justify-center text-white text-xs sm:text-sm sm:px-70 sm:gap-30">
        <div className="flex flex-col gap-3">
          <p className="text-base pr-3 sm:text-lg">About CashKaro</p>
          <Link className="hover:underline hover:text-cyan-300">About Us</Link>
          <Link className="hover:underline hover:text-cyan-300">Press</Link>
          <Link className="hover:underline hover:text-cyan-300"> Blog </Link>
          <Link className="hover:underline hover:text-cyan-300">Testimonials</Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base pr-3 sm:text-lg">Useful Reads</p>
          <Link className="hover:underline hover:text-cyan-300">Terms and Conditions</Link>
          <Link className="hover:underline hover:text-cyan-300">Privacy & Cookie Policy</Link>
          <Link className="hover:underline hover:text-cyan-300">Anti-Spam Policy</Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base pr-3 sm:text-lg">Special Pages</p>
          <Link className="hover:underline hover:text-cyan-300">Refer and Earn</Link>
          <Link className="hover:underline hover:text-cyan-300">Careers</Link>
          <Link className="hover:underline hover:text-cyan-300">Become our Partner</Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base sm:text-lg">Connect With Us</p>
          <Link className="hover:underline hover:text-cyan-300">Help</Link>
          <Link className="hover:underline hover:text-cyan-300">Contact Us</Link>
        </div>
      </div>


      <p className="mt-40 flex justify-center text-white">
        Copyright 2025 CashKaro. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
