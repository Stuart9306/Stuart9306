import Button from "../common/Button.jsx";

const products = [
  {
      title: "Exterior Wash",
          description:
                "Professional exterior wash with high-pressure rinse, foam soap, and spotless shine.",
                    image: "https://images.unsplash.com/photo-1605164598708-25701594473e?w=500&auto=format&fit=crop&w=600&q=80",
                      },
                           {
                           title: "Interior Wash",
                               description:
                                     "Deep interior cleaning including vacuuming, dashboard wipe, mat cleaning, and upholstery care.",
                                         image:
                                               "https://images.unsplash.com/photo-1608259243654-70c070e0f6ed?w=500&auto=format&fit=crop&w=800&q=80",
                                                 },
                                                   {
                                                       title: "Full Body Wash",
                                                           description:
                                                                 "Complete inside-out wash including exterior, interior, wheels, and detailing for a premium finish.",
                                                                     image: "https://images.unsplash.com/photo-1709346501471-491c684db831?w=500&auto=format&fit=crop&w=800&q=80",
                                                                       },
                                                                         {
                                                                             title: "Engine Wash",
                                                                                 description:
                                                                                       "Safe engine bay cleaning to remove grease, dirt, and grime while protecting electrical components.",
                                                                                           image: "https://images.unsplash.com/photo-1597156776667-501b49b1f3d8?w=500auto=format&fit=crop&w=800&q=80",
                                                                                             },
                                                                                             ];

                                                                                             export default function Products() {
                                                                                               return (
                                                                                                   <section
                                                                                                         id="products"
                                                                                                               className="bg-[--color-light] text-[--color-dark] py-20 px-6"
                                                                                                                   >
                                                                                                                         <div className="max-w-6xl mx-auto text-center">
                                                                                                                                 <h2 className="text-4xl font-[--font-heading] font-bold mb-4">
                                                                                                                                           Our Services
                                                                                                                                                   </h2>

                                                                                                                                                           <p className="text-lg text-gray-600 mb-12">
                                                                                                                                                                     Affordable and professional car care services designed to give your
                                                                                                                                                                               vehicle a fresh new look.
                                                                                                                                                                                       </p>

                                                                                                                                                                                               <div className="grid gap-8 md:grid-cols-4">
                                                                                                                                                                                                         {products.map((product, index) => (
                                                                                                                                                                                                                     <div
                                                                                                                                                                                                                                   key={index}
                                                                                                                                                                                                                                                 className="bg-white rounded-2xl shadow-md overflow-hidden 
                                                                                                                                                                                                                                                                          transition-transform hover:-translate-y-2"
                                                                                                                                                                                                                                                                                      >
                                                                                                                                                                                                                                                                                                    <img
                                                                                                                                                                                                                                                                                                                    src={product.image}
                                                                                                                                                                                                                                                                                                                                    alt={product.title}
                                                                                                                                                                                                                                                                                                                                                    className="h-48 w-full object-cover"
                                                                                                                                                                                                                                                                                                                                                                  />

                                                                                                                                                                                                                                                                                                                                                                                <div className="p-6">
                                                                                                                                                                                                                                                                                                                                                                                                <h3 className="text-2xl font-[--font-heading] mb-2 text-[--color-primary]">
                                                                                                                                                                                                                                                                                                                                                                                                                  {product.title}
                                                                                                                                                                                                                                                                                                                                                                                                                                  </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                  <p className="text-gray-700 mb-4">{product.description}</p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <Button>Learn More</Button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }
