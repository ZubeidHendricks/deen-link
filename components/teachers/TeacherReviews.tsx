// Mock reviews data
const reviews = [
  {
    id: 101,
    teacherId: 1,
    user: 'Sarah M.',
    rating: 5,
    date: '2023-12-15',
    comment: 'Aisha is an amazing Quran teacher. Her patience and knowledge made learning tajweed rules so much easier. My children have improved their recitation significantly in just a few months.',
  },
  {
    id: 102,
    teacherId: 1,
    user: 'Ahmed K.',
    rating: 5,
    date: '2023-11-28',
    comment: 'We started online Quran lessons for our daughter during the pandemic, and Aisha has been a blessing. She makes the lessons engaging and explains concepts clearly. Highly recommended!',
  },
  {
    id: 103,
    teacherId: 1,
    user: 'Fatima J.',
    rating: 4,
    date: '2023-10-05',
    comment: 'Great teacher who is knowledgeable and punctual. My son enjoys his lessons and has made good progress with his memorization.',
  },
];

type TeacherReviewsProps = {
  teacherId: number;
};

export default function TeacherReviews({ teacherId }: TeacherReviewsProps) {
  // Filter reviews for this teacher
  const teacherReviews = reviews.filter(review => review.teacherId === teacherId);
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Reviews ({teacherReviews.length})</h2>
        
        {teacherReviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-6">
            {teacherReviews.map(review => (
              <div key={review.id} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{review.user}</p>
                    <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8">
          <button className="btn-outline w-full">See All Reviews</button>
        </div>
      </div>
    </div>
  );
}
