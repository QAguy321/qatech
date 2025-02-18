const Services = () => {
    return (
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Premium QA Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Manual Testing</h3>
              <p>Thorough and detailed manual testing to ensure your product performs under real-world conditions.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Automation Testing</h3>
              <p>Efficient and scalable automated tests to speed up the development lifecycle while ensuring quality.</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Performance Testing</h3>
              <p>Ensure your application can handle heavy loads and scale seamlessly without any issues.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  