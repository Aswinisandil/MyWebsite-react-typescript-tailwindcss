import Footer from "./Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">About Us</h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Contrary to popular belief, <strong>Lorem Ipsum</strong> is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
          <em> consectetur</em>, from a Lorem Ipsum passage, and going through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
          <em> "de Finibus Bonorum et Malorum"</em> (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
          book is a treatise on the theory of ethics, very popular during the Renaissance.
        </p>

        <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600 mb-6">
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..." is more than just placeholder—it’s a
          literary time capsule.
        </blockquote>

        <p className="text-gray-700 text-lg leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
          reasonable.
        </p>
        <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-600 mb-6">
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..." is more than just placeholder—it’s a
          literary time capsule.
        </blockquote>

        <p className="text-gray-700 text-lg leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          in some form, by injected humour, or randomised words which don't look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
          reasonable.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
