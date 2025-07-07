import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-2 border-[#FFFFFF33] bg-[#151515] px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 text-white flex flex-col gap-10 sm:gap-16">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/assets/logo/designscook-logo.png"
          width={180}
          className="w-[180px] sm:w-[200px] md:w-[227px]"
          alt="DesignsCook Logo"
          loading="lazy"
        />
      </div>

      {/* Newsletter + Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-16">
        {/* Newsletter */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:max-w-[60%]">
          <h2 className="font-light text-[16px] sm:text-[18px] md:text-[20px] leading-snug tracking-normal text-center md:text-left">
            Join our newsletter to stay up to date on features and releases.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <input
              type="email"
              className="border border-white/30 bg-white/20 text-sm sm:text-base w-full sm:w-[70%] md:w-[352px] h-[50px] sm:h-[60px] px-4 sm:px-6 rounded-full placeholder-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Email Address"
            />
            <button className="uppercase text-sm sm:text-lg tracking-tight border border-white w-full sm:w-[30%] md:w-[158px] h-[50px] sm:h-[60px] rounded-full hover:bg-white/10 transition-colors duration-200">
              Subscribe
            </button>
          </div>

          <h5 className="tracking-normal text-xs sm:text-sm font-light leading-relaxed text-center md:text-left">
            By subscribing you agree to our{" "}
            <span className="font-medium hover:underline cursor-pointer">
              Privacy Policy
            </span>{" "}
            and consent to receive updates from our company.
          </h5>
        </div>

        {/* Pages & Socials */}
        <div className="flex flex-row justify-between sm:justify-start md:justify-between flex-wrap gap-8 sm:gap-10 w-full lg:w-auto">
          {/* Pages */}
          <div className="flex flex-col gap-2 sm:gap-3 min-w-[120px]">
            <h4 className="text-base sm:text-lg font-medium">Pages</h4>
            <ul className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm font-light">
              <li className="hover:underline cursor-pointer">
                <Link to="about">About</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="works">Work</Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="contacts">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-2 sm:gap-3 min-w-[120px]">
            <h4 className="text-base sm:text-lg font-medium">Socials</h4>
            <ul className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm font-light">
              <li className="hover:underline cursor-pointer">Instagram</li>
              <li className="hover:underline cursor-pointer">YouTube</li>
              <li className="hover:underline cursor-pointer">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 pt-4 sm:pt-6">
        <p className="text-xs sm:text-sm font-light tracking-normal text-center">
          © 2025 All Right Reserved to Copyright
        </p>
      </div>
    </div>
  );
};

export default Footer;
