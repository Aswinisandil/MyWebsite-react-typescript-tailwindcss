import { FaQuoteLeft } from "react-icons/fa";
import Footer from "./Footer";

const testimonials = [
  {
    name: "Aanya Kapoor",
    role: "Product Manager @ Zentech",
    feedback:
      "Working with this team was a breeze. Deadlines were met, expectations exceeded, and the results were stunning.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Verma",
    role: "CTO @ CodeNest",
    feedback:
      "They built our MVP in record time. The quality of code and UX thinking was top-notch. Highly recommend.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Leah Fernandes",
    role: "Design Lead @ PixelPush",
    feedback:
      "Elegant designs, smart implementation, and great communication. I’d collaborate again in a heartbeat.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <>
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">What People Are Saying</h2>
        <p className="text-gray-600 text-lg mb-12">
          A few words from clients, mentors, and humans I've worked with.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden hover:shadow-lg transition"
            >
              <FaQuoteLeft className="text-indigo-200 text-5xl absolute top-0 left-0 m-4 -z-10" />
              <p className="text-gray-700 italic mb-4">&ldquo;{t.feedback}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4">Want to collaborate?</h3>
          <p className="text-gray-600 mb-6">
            I’m currently open to freelance, contract, or full-time opportunities.
          </p>
          <a
            href="/contact"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Testimonials;
