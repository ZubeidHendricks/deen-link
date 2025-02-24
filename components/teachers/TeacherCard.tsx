import Link from 'next/link';

type TeacherProps = {
  teacher: {
    id: number;
    name: string;
    title: string;
    rating: number;
    ratingCount: number;
    image: string;
    subjects: string[];
    hourlyRate: number;
    location: string;
    online: boolean;
  }
};

export default function TeacherCard({ teacher }: TeacherProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-neutral-100 dark:bg-neutral-700">
        {/* Placeholder for the teacher's image */}
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
          <span className="font-medium text-primary">{teacher.name.charAt(0)}</span>
        </div>
        {teacher.online && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Online Teaching
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{teacher.name}</h3>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 font-medium">{teacher.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({teacher.ratingCount})</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-3">{teacher.title}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {teacher.subjects.map((subject, index) => (
            <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
              {subject}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {teacher.location}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            R{teacher.hourlyRate}<span className="text-sm font-normal">/hour</span>
          </div>
          
          <Link href="/teachers/profile" className="btn-primary text-sm py-1 px-3">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
