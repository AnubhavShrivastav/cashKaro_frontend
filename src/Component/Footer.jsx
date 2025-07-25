function Footer() {

  return (
    <footer className="bottom-0 w-full bg-neutral-500 pt-7 pb-10">
      <div className="flex items-start justify-center text-white text-sm px-70 gap-32">
        <div className="flex flex-col gap-3">
          <p className="text-lg">About CashKaro</p>
          <a className="">About Us</a>
          <a>Press</a>
          <a> Blog </a>
          <a>Testimonials</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-lg">Useful Reads</p>
          <a>Terms and Conditions</a>
          <a>Privacy & Cookie Policy</a>
          <a>Anti-Spam Policy</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-lg">Special Pages</p>
          <a>Refer and Earn</a>
          <a>Careers</a>
          <a>Become our Partner</a>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-lg">Connect With Us</p>
          <a>Help</a>
          <a>Contact Us</a>
        </div>
      </div>

      <div className="mt-8 pl-76">
        <p className="text-white">Let’s Get Social</p>

        <a href="">
          <img className="mt-2 inline mr-3" src="Images/instagram.svg" alt="" />
        </a>
        <a href="">
          <img className="mt-2 inline mr-3" src="Images/facebook.svg" alt="" />
        </a>
        <a href="">
          <img className="mt-2 inline mr-3" src="Images/youtube.svg" alt="" />
        </a>
        <a href="">
          <img className="mt-2 inline mr-3" src="Images/twitter.svg" alt="" />
        </a>
        <a href="">
          <img className="mt-2 inline mr-3" src="Images/linkedin.svg" alt="" />
        </a>
      </div>

      <p className="mt-40 flex justify-center text-white">
        Copyright 2025 CashKaro. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
