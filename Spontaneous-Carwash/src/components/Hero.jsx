import Button from "../common/Button.jsx";
const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-light text-dark flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Dusty and dirty vehicles  , <span className="text-primary">made spotless</span>
        </h1>
        <p className="text-slate-600 text-lg md:text-xl">
         Spontaneous Carwash provides your car with a spotless glow.
         It leaves your car with a blemishless look and awesome appearance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary">Explore Products</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={"https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH"}
          alt="Spontaneous Carwash Hero Image"

          className="w-full max-w-md md:max-w-lg rounded-3xl shadow-lg object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
