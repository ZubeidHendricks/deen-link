import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LessonCard from '@/components/lessons/LessonCard';

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
    status: 'upcoming',
    meetingLink: 'https://meet.google.com/abc-defg-hij'
  },
  {
    id: 2,
    date: '2025-02-26T15:30:00',
    duration: 45,
    subject: 'Arabic',
    teacher: { id: 2, name: 'Fatima Khan' },
    student: { id: 101, name: 'Sarah Mohamed' },
    online: true,
    status: 'upcoming'
  },
  {
    id: 3,
    date: '2025-02-22T14:00:00',
    duration: 60,
    subject: 'Quran',
    teacher: { id: 1, name: 'Aisha Abdullah' },
    student: { id: 101, name: 'Sarah Mohamed' },
    online: true,
    status: 'completed',
    notes: 'Covered Surah Al-Fatiha and first 5 verses of Surah Al-Baqarah. Practice tajweed rules for next lesson.'
  },
  {
    id: 4,
    date: '2025-02-15T11:00:00',
    duration: 60,
    subject: 'Arabic',
    teacher: { id: 2, name: 'Fatima Khan' },
    student: { id: 101, name: 'Sarah Mohamed' },
    online: false,
    status: 'completed',
    notes: 'Reviewed basic grammar. Homework: Complete exercises on page 25-26.'
  },
  {
    id: 5,
    date: '2025-02-28T18:00:00',
    duration: 60,
    subject: 'Tajweed',
    teacher: { id: 1, name: 'Aisha Abdullah' },
    student: { id: 102, name: 'Ahmed Ibrahim' },
    online: false,
    status: 'pending'
  }
];

export default function LessonsPage() {
  // In a real app, this would come from authentication context
  const userType = 'parent'; // or 'teacher'
  
  // Filter lessons based on status
  const upcomingLessons = lessons.filter(lesson => lesson.status === 'upcoming');
  const pendingLessons = lessons.filter(lesson => lesson.status === 'pending');
  const completedLessons = lessons.filter(lesson => lesson.status === 'completed');
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">My Lessons</h1>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">
              Upcoming
              {upcomingLessons.length > 0 && (
                <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                  {upcomingLessons.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingLessons.length > 0 && (
                <span className="ml-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {pendingLessons.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <div className="space-y-4">
              {upcomingLessons.length > 0 ? (
                upcomingLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} userType={userType} />
                ))
              ) : (
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">You don't have any upcoming lessons.</p>
                  <a href="/teachers" className="btn-primary inline-block">Find a Teacher</a>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="pending">
            <div className="space-y-4">
              {pendingLessons.length > 0 ? (
                pendingLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} userType={userType} />
                ))
              ) : (
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">You don't have any pending lessons.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="space-y-4">
              {completedLessons.length > 0 ? (
                completedLessons.map(lesson => (
                  <LessonCard key={lesson.id} lesson={lesson} userType={userType} />
                ))
              ) : (
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">You don't have any completed lessons yet.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
