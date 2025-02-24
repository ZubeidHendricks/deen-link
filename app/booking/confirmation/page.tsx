import Link from 'next/link';

export default function BookingConfirmationPage() {
  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your lesson has been successfully booked. The teacher will be notified and you'll receive a confirmation email shortly.
            </p>
            
            <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-md mb-6 text-left">
              <h3 className="text-lg font-medium mb-2">Booking Details</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Teacher:</span>
                  <span className="text-sm font-medium">Aisha Abdullah</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Subject:</span>
                  <span className="text-sm font-medium">Quran</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Lesson Type:</span>
                  <span className="text-sm font-medium">Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Schedule:</span>
                  <span className="text-sm font-medium">Mon, Feb 26, 2025, 10:00-11:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Lessons:</span>
                  <span className="text-sm font-medium">Single Lesson</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Paid:</span>
                    <span className="font-bold text-primary">R25</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Link href="/lessons" className="btn-primary py-2 text-center">
                View My Lessons
              </Link>
              <Link href="/dashboard" className="text-primary hover:text-primary-dark">
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
