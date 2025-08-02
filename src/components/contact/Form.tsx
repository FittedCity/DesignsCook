import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const {
    register,
    handleSubmit,
    watch,
  } = useForm();

  const watchRole = watch("role");

  const roleOptions = [
    "Architect",
    "Interior Designer",
    "Event Planner",
    "Real Estate Developer",
    "Others",
  ];

  const serviceOptions = [
    "Rendering",
    "3D Animation",
    "Product Design",
    "Marketing",
  ];

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const onSubmit = (data: any) => {
    const finalData = {
      ...data,
      role: data.role === "Others" ? data.customRole : data.role,
    };
    console.log("Form Data:", finalData);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
      className="w-full max-w-4xl border border-[#FFFFFF73] text-white rounded-[8px] p-6 sm:p-10 lg:p-[5%]"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[32px] sm:text-[40px] lg:text-[55px] font-semibold leading-tight tracking-tight">
          Let&apos;s start
        </h1>
        <p className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.5]">
          Please feel free to shoot us a message and we will be in touch
          shortly.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="py-12 flex flex-col gap-12"
      >
        {/* First + Last Name */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <label htmlFor="firstName" className="text-lg">
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName")}
              placeholder="John"
              className="bg-transparent border rounded-full border-white w-full py-4 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <label htmlFor="lastName" className="text-lg">
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName")}
              placeholder="Doe"
              className="bg-transparent border rounded-full border-white w-full py-4 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">
            Email Address
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="bg-transparent border rounded-full border-white w-full py-4 px-4 text-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Role Dropdown */}
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-lg">
            Select Your Role
          </label>
          <select
            id="role"
            {...register("role")}
            className="bg-transparent border rounded-full w-full py-4 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-white appearance-none pr-10 relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.5rem center",
              backgroundSize: "2rem",
            }}
          >
            <option value="" disabled>
              Select a role
            </option>
            {roleOptions.map((role) => (
              <option key={role} value={role} className="text-black bg-white">
                {role}
              </option>
            ))}
          </select>

          {watchRole === "Others" && (
            <input
              type="text"
              {...register("customRole")}
              placeholder="Enter your role"
              className="mt-3 bg-transparent border rounded-full border-white w-full py-4 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
            />
          )}
        </div>

        {/* Services Dropdown */}
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className="text-lg">
            Select a Service
          </label>
          <select
            id="service"
            {...register("service")}
            className="bg-transparent border rounded-full w-full py-4 px-5 text-lg focus:outline-none focus:ring-2 focus:ring-white appearance-none pr-10 relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.5rem center",
              backgroundSize: "2rem",
            }}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((service) => (
              <option
                key={service}
                value={service}
                className="text-black bg-white"
              >
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Write your message here..."
            className="bg-transparent border rounded-[44px] border-white w-full py-7 px-5 text-lg h-[260px] resize-none focus:outline-none focus:ring-2 focus:ring-white"
            style={{ boxShadow: "0px 20.8px #0000001A" }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="rounded-full w-full bg-white text-[#151515] py-5 text-lg sm:text-[20px] lg:text-[24px] font-medium hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Form;
