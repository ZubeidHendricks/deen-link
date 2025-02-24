import Link from 'next/link';
import DashboardStats from '@/components/dashboard/DashboardStats';
import UpcomingLessons from '@/components/dashboard/UpcomingLessons';
import RecentMessages from '@/components/dashboard/RecentMessages';

export default function Dashboard() {
  // In a real app, this would come from authentication context
  const userType = 'parent'; // or 'teacher'
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          
          {userType === 'parent' ? (
            <Link href="/teachers" className="btn-primary">
              Find a Teacher
            </Link>
          ) : (
            <Link href="/profile/edit" className="btn-primary">
              Edit Profile
            </Link>
          )}
        </div>
        
        <DashboardStats userType={userType} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <UpcomingLessons userType={userType} />
          </div>
          
          <div>
            <RecentMessages />
          </div>
        </div>
      </div>
    </div>
  );
}
