// components/contact/Contacts.tsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contacts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      }}
      className="border-t lg:border-t-0 lg:border-l border-[#FFFFFF78] text-white pt-10 lg:pt-0"
    >
      <div className="pl-0 lg:pl-7 flex flex-col gap-8 lg:gap-[30px]">
        {/* Email */}
        <div className="flex items-center gap-[12px]">
          {/* Your SVG icon here */}
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16.5C1.45 16.5 0.979333 16.3043 0.588 15.913C0.196667 15.5217 0.000666667 15.0507 0 14.5V2.5C0 1.95 0.196 1.47933 0.588 1.088C0.98 0.696666 1.45067 0.500667 2 0.5H18C18.55 0.5 19.021 0.696 19.413 1.088C19.805 1.48 20.0007 1.95067 20 2.5V14.5C20 15.05 19.8043 15.521 19.413 15.913C19.0217 16.305 18.5507 16.5007 18 16.5H2ZM10 9.5L18 4.5V2.5L10 7.5L2 2.5V4.5L10 9.5Z"
              fill="white"
            />
          </svg>

          <h4 className="text-[20px] lg:text-[24px]">hello@designscook.com</h4>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-[12px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5559 11.406L12.1009 11.859C12.1009 11.859 11.0179 12.935 8.06288 9.99698C5.10788 7.05898 6.19088 5.98298 6.19088 5.98298L6.47688 5.69698C7.18388 4.99498 7.25088 3.86698 6.63388 3.04298L5.37388 1.35998C4.60988 0.339979 3.13488 0.20498 2.25988 1.07498L0.68988 2.63498C0.25688 3.06698 -0.0331206 3.62498 0.00187944 4.24498C0.0918794 5.83198 0.809879 9.24498 4.81388 13.227C9.06088 17.449 13.0459 17.617 14.6749 17.465C15.1909 17.417 15.6389 17.155 15.9999 16.795L17.4199 15.383C18.3799 14.43 18.1099 12.795 16.8819 12.128L14.9719 11.089C14.1659 10.652 13.1859 10.78 12.5559 11.406Z"
              fill="white"
            />
          </svg>

          <h4 className="text-[20px] lg:text-[24px]">+234 809 700 0092</h4>
        </div>

        {/* Address */}
        <div className="flex items-start gap-[12px]">
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
              fill="white"
            />
          </svg>

          <h4 className="text-[20px] lg:text-[24px] leading-[32px]">
            4, Obokun Close, Ikeja, Lagos,
            <br />
            Nigeria.
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Contacts;
