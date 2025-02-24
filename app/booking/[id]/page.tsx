import Link from 'next/link';
import BookingForm from '@/components/booking/BookingForm';
import { Metadata, ResolvingMetadata } from 'next';

// Define an interface for the teacher type
interface Teacher {
  id: number;
  name: string;
  title: string;
  subjects: string[];
  hourlyRate: number;
  availability: {
    monday: string[];
    tuesday: string[];
    wednesday: string[];
    thursday: string[];
    friday: string[];
    saturday: string[];
    sunday: string[];
  };
  online: boolean;
  inPerson: boolean;
  location: string;
}

// Mock data - in a real app, this would come from an API
const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Aisha Abdullah',
    title: 'Quran & Tajweed Specialist',
    subjects: ['Quran', 'Tajweed', 'Quran Memorization'],
    hourlyRate: 25,
    availability: {
      monday: ['09:00-10:00', '10:00-11:00', '14:00-15:00', '15:00-16:00'],
      tuesday: ['09:00-10:00', '10:00-11:00', '14:00-15:00', '15:00-16:00'],
      wednesday: ['09:00-10:00', '10:00-11:00', '14:00-15:00', '15:00-16:00'],
      thursday: ['09:00-10:00', '10:00-11:00', '14:00-15:00', '15:00-16:00'],
      friday: ['14:00-15:00', '15:00-16:00'],
      saturday: ['09:00-10:00', '10:00-11:00'],
      sunday: []
    },
    online: true,
    inPerson: true,
    location: 'Cape Town, South Africa'
  }
];

// Metadata generation
export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const teacherId = parseInt(params.id);
  const teacher = teachers.find(t => t.id === teacherId) || teachers[0];
  
  return {
    title: `Book Lesson with ${teacher.name}`,
    description: `Book a lesson with ${teacher.name}, ${teacher.title}`
  };
}

export default function BookingPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch the teacher data based on the ID
  const teacherId = parseInt(params.id);
  const teacher = teachers.find(t => t.id === teacherId) || teachers[0];
  
  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link href={`/teachers/${params.id}`} className="text-primary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Teacher Profile
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold mb-2">Book a Lesson with {teacher.name}</h1>
            <p className="text-gray-600 dark:text-gray-300">{teacher.title}</p>
          </div>
          
          <div className="p-6">
            <BookingForm teacher={teacher} />
          </div>
        </div>
      </div>
    </div>
  );
}