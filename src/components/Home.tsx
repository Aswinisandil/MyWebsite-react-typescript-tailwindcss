import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const Home = () => {

const navigate = useNavigate();

const handleContactClick = () => {
    navigate('/contact');
  };
const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our World</h1>
        <p className="text-lg md:text-xl mb-6">
          Crafting clean code, pixel-perfect designs, and delightful experiences.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition" onClick={handleAboutClick}>
          Explore Now
        </button>
      </section>

      {/* Features Section */}

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Responsive Design', desc: 'Optimized for all screens and devices.' },
            { title: 'Clean Code', desc: 'Readable, maintainable, scalable.' },
            { title: 'Fast Performance', desc: 'Because milliseconds matter.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <img src={`https://picsum.photos/seed/${i + 1}/100/100`} className="mx-auto mb-4 rounded-full" alt="feature" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://picsum.photos/seed/about/500/350"
              alt="About"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 text-lg mb-4">
              We are a team of passionate developers, designers, and dreamers. Our mission is
              to deliver exceptional web experiences through creativity and code.
            </p>
            <p className="text-gray-600">
              From startups to enterprises, we build with purpose and precision — making your
              digital presence stand out in the crowd.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}

      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <img
              key={i}
              src={`https://picsum.photos/seed/gallery${i}/400/300`}
              alt={`Gallery ${i}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* CTA Section  */}

      <section className="bg-indigo-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 text-lg">Let’s build something extraordinary together.</p>
         <button
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;

