import Footer from './Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6">
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6 rounded-lg shadow mt-5 mb-1">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 text-lg">Let’s build something extraordinary together.</p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
