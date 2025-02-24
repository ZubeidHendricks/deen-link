import Link from 'next/link';

type UpcomingLessonsProps = {
  userType: 'parent' | 'teacher';
};

export default function UpcomingLessons({ userType }: UpcomingLessonsProps) {
  // Mock data - in a real app, this would come from an API
  const lessons = [
    {
      id: 1,
      date: '2025-02-25T10:00:00',
      duration: 60,
      subject: 'Quran',
      teacher: { id: 1, name: 'Aisha Abdullah' },
      student: { id: 101, name: 'Sarah Mohamed' },
      online: true,
      status: 'confirmed'
    },
    {
      id: 2,
      date: '2025-02-26T15:30:00',
      duration: 45,
      subject: 'Arabic',
      teacher: { id: 2, name: 'Fatima Khan' },
      student: { id: 101, name: 'Sarah Mohamed' },
      online: true,
      status: 'confirmed'
    },
    {
      id: 3,
      date: '2025-02-28T18:00:00',
      duration: 60,
      subject: 'Tajweed',
      teacher: { id: 1, name: 'Aisha Abdullah' },
      student: { id: 102, name: 'Ahmed Ibrahim' },
      online: false,
      status: 'pending'
    }
  ];
  
  // Filter lessons based on user type
  const filteredLessons = userType === 'parent'
    ? lessons // For simplicity, not filtering in this example
    : lessons;
  
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
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold">Upcoming Lessons</h2>
        <Link href="/lessons" className="text-primary hover:text-primary-dark text-sm">
          View All
        </Link>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {filteredLessons.length > 0 ? (
          filteredLessons.map(lesson => (
            <div key={lesson.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{lesson.subject} Lesson</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {formatDate(lesson.date)} ({lesson.duration} mins)
                  </p>
                </div>
                <div className="flex items-center">
                  <span 
                    className={`text-xs px-2 py-1 rounded-full ${lesson.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}
                  >
                    {lesson.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center mr-2">
                    <span className="text-primary text-sm font-medium">
                      {userType === 'parent' ? lesson.teacher.name.charAt(0) : lesson.student.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm">
                      {userType === 'parent' ? 'Teacher: ' + lesson.teacher.name : 'Student: ' + lesson.student.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {lesson.online ? 'Online Lesson' : 'In-person Lesson'}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {lesson.online && lesson.status === 'confirmed' && (
                    <button className="text-xs bg-primary text-white px-3 py-1 rounded-md hover:bg-primary-dark transition-colors">
                      Join
                    </button>
                  )}
                  <Link 
                    href={`/lessons/${lesson.id}`}
                    className="text-xs border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            No upcoming lessons
          </div>
        )}
      </div>
    </div>
  );
}
