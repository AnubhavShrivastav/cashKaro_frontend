function Footer() {

  return (
    <footer className="bottom-0 w-full bg-neutral-500 py-6 px-1 sm:py-9">
      <div className="flex items-start justify-center text-white text-xs sm:text-sm sm:px-70 sm:gap-32">
        <div className="flex flex-col gap-3">
          <p className="text-base pr-3 sm:text-lg">About CashKaro</p>
          <a className="">About Us</a>
          <a>Press</a>
          <a> Blog </a>
          <a>Testimonials</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base pr-3 sm:text-lg">Useful Reads</p>
          <a>Terms and Conditions</a>
          <a>Privacy & Cookie Policy</a>
          <a>Anti-Spam Policy</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base pr-3 sm:text-lg">Special Pages</p>
          <a>Refer and Earn</a>
          <a>Careers</a>
          <a>Become our Partner</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base sm:text-lg">Connect With Us</p>
          <a>Help</a>
          <a>Contact Us</a>
        </div>
      </div>

      
      <p className="mt-40 flex justify-center text-white">
        Copyright 2025 CashKaro. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
