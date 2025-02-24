export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Amina Patel',
      role: 'Parent',
      comment: 'Finding a qualified Mualima for my daughters was always a challenge until I discovered Deen Link. The platform made it easy to connect with a teacher who understands our needs and provides excellent Quran lessons.',
      rating: 5
    },
    {
      id: 2,
      name: 'Layla Mohammed',
      role: 'Adult Student',
      comment: 'As someone who wanted to improve my tajweed, Deen Link helped me find the perfect teacher. The flexible scheduling allows me to fit lessons around my busy work schedule.',
      rating: 5
    },
    {
      id: 3,
      name: 'Kareema Singh',
      role: 'Mualima',
      comment: 'Deen Link has revolutionized how I connect with students. The platform handles scheduling and payments, allowing me to focus on what I love most - teaching.',
      rating: 5
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Hear from parents, students, and teachers about their experiences with Deen Link.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.comment}"</p>
              
              <div className="font-medium">
                <p className="text-lg">{testimonial.name}</p>
                <p className="text-primary">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
