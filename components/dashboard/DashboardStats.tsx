import React from 'react';

type DashboardStatsProps = {
  userType: 'parent' | 'teacher';
};

export default function DashboardStats({ userType }: DashboardStatsProps) {
  // Mock data - in a real app, this would come from an API
  const stats = userType === 'parent' 
    ? [
        { label: 'Scheduled Lessons', value: '5' },
        { label: 'Completed Lessons', value: '12' },
        { label: 'Total Teachers', value: '3' },
        { label: 'Hours Learned', value: '18' }
      ]
    : [
        { label: 'Active Students', value: '8' },
        { label: 'Completed Lessons', value: '45' },
        { label: 'Hours Taught', value: '62' },
        { label: 'Earnings', value: 'R 4,560' }
      ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
          <p className="text-2xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
