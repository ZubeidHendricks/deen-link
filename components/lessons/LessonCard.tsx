import Link from 'next/link';

type Lesson = {
  id: number;
  date: string;
  duration: number;
  subject: string;
  teacher: { id: number; name: string };
  student: { id: number; name: string };
  online: boolean;
  status: 'upcoming' | 'pending' | 'completed';
  meetingLink?: string;
  notes?: string;
};

type LessonCardProps = {
  lesson: Lesson;
  userType: 'parent' | 'teacher';
};

export default function LessonCard({ lesson, userType }: LessonCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  
  const isUpcoming = new Date(lesson.date) > new Date();
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="font-medium text-lg">{lesson.subject} Lesson</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {formatDate(lesson.date)} ({lesson.duration} mins)
            </p>
          </div>
          
          <div className="mt-2 md:mt-0">
            {lesson.status === 'upcoming' && (
              <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                Upcoming
              </span>
            )}
            {lesson.status === 'pending' && (
              <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">
                Pending Confirmation
              </span>
            )}
            {lesson.status === 'completed' && (
              <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                Completed
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center mr-3">
            <span className="text-primary text-sm font-medium">
              {userType === 'parent' ? lesson.teacher.name.charAt(0) : lesson.student.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium">
              {userType === 'parent' ? lesson.teacher.name : lesson.student.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {lesson.online ? 'Online Lesson' : 'In-person Lesson'}
            </p>
          </div>
        </div>
        
        {lesson.notes && lesson.status === 'completed' && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1">Lesson Notes:</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-neutral-700 p-3 rounded-md">
              {lesson.notes}
            </p>
          </div>
        )}
        
        <div className="flex justify-end space-x-2">
          {lesson.status === 'upcoming' && lesson.online && lesson.meetingLink && (
            <a 
              href={lesson.meetingLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-primary-dark transition-colors"
            >
              Join Meeting
            </a>
          )}
          
          {lesson.status === 'pending' && userType === 'teacher' && (
            <button className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-primary-dark transition-colors">
              Confirm
            </button>
          )}
          
          <Link 
            href={`/lessons/${lesson.id}`}
            className="border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
