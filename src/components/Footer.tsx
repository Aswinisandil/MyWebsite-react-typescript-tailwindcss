import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start flex justify-center">
        {/* Brand Info */}
        <div className='w-m'>
          <h3 className="text-xl font-bold mb-2">My Website</h3>
          <p className="text-sm text-gray-400">
            Creating modern web experiences with heart, hustle, and React.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>

        {/* Navigation */}
        <div className='w-3xl'>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='w-3xl'>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4 text-gray-300">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
