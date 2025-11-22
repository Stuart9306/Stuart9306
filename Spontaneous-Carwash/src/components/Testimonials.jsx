import testimonialImg from "../assets/index.js";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-light text-dark py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted by Thousands Nationally
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          From saloon cars to large trucks and lorries, Spontaneous Carwash has transformed
          vehicles through our innovative carwash solutions. But don't just take our word for it—hear what our satisfied clients have to say about their experiences with us.
        </p>

        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={testimonialImg}
            alt="Client portrait"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            loading="lazy"
          />

          {/* Quote */}
          <div className="text-left space-y-4">
            <p className="text-lg italic text-slate-700">
              Spontaneous Carwash's smart carwash solution has completely transformed our fleet maintenance. The convenience and efficiency are unmatched, and our vehicles have never looked better!
            </p>
            <div>
              <h4 className="font-semibold text-primary">Miles Monroe</h4>
              <p className="text-slate-500 text-sm">
               Operations Manager, FleetCo Logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;