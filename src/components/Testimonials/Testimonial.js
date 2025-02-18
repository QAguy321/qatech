import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>
        <div className="flex overflow-x-auto space-x-6">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 p-6 bg-white shadow-lg rounded-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <p className="text-lg italic mb-4">
                "This agency delivered top-notch testing and helped us streamline our product's performance."
              </p>
              <div className="text-lg font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">CTO, Example Corp</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
