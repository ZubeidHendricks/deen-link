import Link from 'next/link';
import BookingCalendar from '@/components/teachers/BookingCalendar';
import TeacherReviews from '@/components/teachers/TeacherReviews';

// Mock data for a teacher
const teacher = {
  id: 1,
  name: 'Aisha Abdullah',
  title: 'Quran & Tajweed Specialist',
  bio: 'I am a passionate Quran and Tajweed teacher with over 8 years of experience teaching students of all ages. I have an Ijazah in Hafs from Asim and a degree in Islamic Studies from International Islamic University. I specialize in helping students improve their Quran recitation with proper tajweed rules and also offer courses in Quran memorization.',
  rating: 4.9,
  ratingCount: 56,
  image: '/teachers/teacher1.jpg',
  subjects: ['Quran', 'Tajweed', 'Quran Memorization'],
  hourlyRate: 25,
  location: 'Cape Town, South Africa',
  languages: ['English', 'Arabic', 'Urdu'],
  education: [
    'Ijazah in Hafs from Asim',
    'Bachelor of Islamic Studies, International Islamic University',
    'Certificate in Arabic Language'  
  ],
  experience: '8+ years',
  online: true,
  inPerson: true,
  availability: {
    monday: ['09:00-12:00', '14:00-17:00'],
    tuesday: ['09:00-12:00', '14:00-17:00'],
    wednesday: ['09:00-12:00', '14:00-17:00'],
    thursday: ['09:00-12:00', '14:00-17:00'],
    friday: ['14:00-17:00'],
    saturday: ['09:00-12:00'],
    sunday: []
  }
};

export default function TeacherProfile() {  
  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link href="/teachers" className="text-primary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Teachers
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Teacher Info */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="relative h-32 w-32 rounded-full bg-primary/10 mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">{teacher.name.charAt(0)}</span>
                  </div>
                  
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{teacher.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{teacher.title}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-medium">{teacher.rating}</span>
                        <span className="ml-1 text-sm text-gray-500">({teacher.ratingCount} reviews)</span>
                      </div>
                      
                      <div className="ml-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {teacher.location}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, index) => (
                        <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{teacher.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Education & Qualifications</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                      {teacher.education.map((item, index) => (
                        <li key={index} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {teacher.languages.map((language, index) => (
                        <span key={index} className="bg-neutral-100 dark:bg-neutral-700 text-xs px-2 py-1 rounded-full">
                          {language}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="font-semibold mb-2">Teaching Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">{teacher.experience}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-6">Teaching Methods</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {teacher.online && (
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Online Lessons</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Via Zoom, Google Meet, or other platforms</p>
                      </div>
                    </div>
                  )}
                  
                  {teacher.inPerson && (
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">In-Person Lessons</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">At your home or specified location in {teacher.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <TeacherReviews teacherId={teacher.id} />
          </div>
          
          {/* Right Column - Booking & Contact */}
          <div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden mb-8 sticky top-8">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Book a Lesson</h2>
                  <div className="text-2xl font-bold text-primary">
                    R{teacher.hourlyRate}<span className="text-sm font-normal text-gray-500">/hour</span>
                  </div>
                </div>
                
                <BookingCalendar availability={teacher.availability} />
                
                <Link href="/booking" className="btn-primary w-full mt-6 block text-center">Book Now</Link>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full flex items-center justify-center text-primary hover:text-primary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Message Teacher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}