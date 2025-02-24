import Link from 'next/link';

export default function RecentMessages() {
  // Mock data - in a real app, this would come from an API
  const messages = [
    {
      id: 101,
      sender: { id: 1, name: 'Aisha Abdullah', role: 'teacher' },
      preview: 'I've shared some resources for our next Quran lesson...',
      time: '2025-02-24T10:23:00',
      unread: true
    },
    {
      id: 102,
      sender: { id: 2, name: 'Fatima Khan', role: 'teacher' },
      preview: 'Great progress in today's Arabic lesson! For homework...',
      time: '2025-02-23T18:45:00',
      unread: false
    },
    {
      id: 103,
      sender: { id: 3, name: 'Khadija Omar', role: 'teacher' },
      preview: 'Thank you for your payment. Our next session is...',
      time: '2025-02-22T09:12:00',
      unread: false
    }
  ];
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };
  
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold">Messages</h2>
        <Link href="/messages" className="text-primary hover:text-primary-dark text-sm">
          View All
        </Link>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {messages.length > 0 ? (
          messages.map(message => (
            <Link key={message.id} href={`/messages/${message.id}`}>
              <div className={`p-4 hover:bg-gray-50 dark:hover:bg-neutral-700 ${message.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''}`}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`text-sm ${message.unread ? 'font-semibold' : 'font-medium'}`}>{message.sender.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{formatTime(message.time)}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{message.preview}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-6 text-center text-gray-500 dark:text-gray-400">
            No messages
          </div>
        )}
      </div>
    </div>
  );
}
