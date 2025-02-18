import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Send form data to an API or handle submission logic
    console.log(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12">Get in Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
