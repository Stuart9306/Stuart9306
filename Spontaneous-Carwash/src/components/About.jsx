import aboutImg from "../assets/index.js";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-dark flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-20 gap-10"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={aboutImg}
          alt="Welcome to spontaneous carwash"
          className="w-full max-w-lg rounded-3xl shadow-lg object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-6 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold">
          Shaping the Future of clean and spackling vehicles
        </h2>
        <p className="text-slate-600 leading-relaxed">
          At <span className="font-semibold text-primary">Spontaneous Carwash</span>, 
          We believe that every vehicle should be as clean as possible, no matter where
          you are. Our cutting-edge smart carwash solutions bring convenience,
          efficiency, and eco-friendliness to your fingertips.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Our mission is to revolutionize the carwash experience through innovative
          technology that adapts to your lifestyle. With our smart carwash systems,
          you can enjoy a spotless vehicle without the hassle of traditional
          carwashes.
        </p>
        <p className="text-slate-600 leading-relaxed">
         With a focus on sustainability, we utilize water-saving techniques and
         eco-friendly cleaning agents to minimize our environmental impact while
         delivering exceptional results.
        </p>
        <a
          href="#products"
          className="inline-block font-semibold text-primary hover:underline"
        >
          Discover Our Technology →
        </a>
      </div>
    </section>
  );
};

export default About;