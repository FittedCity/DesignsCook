const Images = () => {
  return (
    <div className="py-[6%] px-4 sm:px-6 md:px-[5%]">
      <div className="w-full max-w-[1240px] mx-auto overflow-hidden relative">
        <div
          className="flex animate-scroll-x items-center gap-6 sm:gap-8 md:gap-10 w-max"
          style={{ animation: "scrollX 10s linear infinite" }}
        >
          {/* Center */}
          <div
            className="bg-cover bg-center
              w-[280px] h-[160px] sm:w-[360px] sm:h-[200px] 
              md:w-[440px] md:h-[240px] lg:w-[580px] lg:h-[319px]"
            style={{ backgroundImage: "url(/assets/about/center.jpg)" }}
          />

          {/* Left */}
          <div
            className="bg-cover bg-center
              w-[280px] h-[160px] sm:w-[360px] sm:h-[200px] 
              md:w-[440px] md:h-[240px] lg:w-[580px] lg:h-[319px]"
            style={{ backgroundImage: "url(/assets/about/left.jpg)" }}
          />

          {/* Right */}
          <div
            className="bg-cover bg-center
              w-[280px] h-[240px] sm:w-[360px] sm:h-[300px] 
              md:w-[440px] md:h-[380px] lg:w-[609px] lg:h-[472px]"
            style={{ backgroundImage: "url(/assets/about/right.jpg)" }}
          />

          {/* Duplicates for loop */}
          <div
            className="bg-cover bg-center
              w-[280px] h-[160px] sm:w-[360px] sm:h-[200px] 
              md:w-[440px] md:h-[240px] lg:w-[580px] lg:h-[319px]"
            style={{ backgroundImage: "url(/assets/about/center.jpg)" }}
          />
          <div
            className="bg-cover bg-center
              w-[280px] h-[160px] sm:w-[360px] sm:h-[200px] 
              md:w-[440px] md:h-[240px] lg:w-[580px] lg:h-[319px]"
            style={{ backgroundImage: "url(/assets/about/left.jpg)" }}
          />
          <div
            className="bg-cover bg-center
              w-[280px] h-[240px] sm:w-[360px] sm:h-[300px] 
              md:w-[440px] md:h-[380px] lg:w-[609px] lg:h-[472px]"
            style={{ backgroundImage: "url(/assets/about/right.jpg)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
