import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Elevating Your Quality Assurance to New Heights
        </motion.h1>
        <motion.p
          className="mt-4 text-xl sm:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our premium services ensure top-tier performance and reliability for your products.
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-full text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
