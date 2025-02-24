"use client";

import { useState } from 'react';

type DayAvailability = string[];

type TeacherAvailability = {
  monday: DayAvailability;
  tuesday: DayAvailability;
  wednesday: DayAvailability;
  thursday: DayAvailability;
  friday: DayAvailability;
  saturday: DayAvailability;
  sunday: DayAvailability;
};

type BookingCalendarProps = {
  teacherId: number;
  availability: TeacherAvailability;
};

export default function BookingCalendar({ teacherId, availability }: BookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // Generate an array of dates for the next 14 days
  const getNext14Days = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  // Map day number to day name
  const getDayName = (dayNumber: number) => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[dayNumber];
  };
  
  // Check if a date has any available time slots
  const hasAvailability = (date: Date) => {
    const dayName = getDayName(date.getDay());
    return availability[dayName as keyof TeacherAvailability].length > 0;
  };
  
  // Get available time slots for the selected date
  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];
    
    const dayName = getDayName(selectedDate.getDay());
    return availability[dayName as keyof TeacherAvailability];
  };
  
  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const dates = getNext14Days();
  const timeSlots = selectedDate ? getAvailableTimeSlots() : [];
  
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-2">Select Date</h3>
        <div className="grid grid-cols-2 gap-2">
          {dates.slice(0, 6).map((date, index) => (
            <button
              key={index}
              className={`py-2 px-3 text-sm border rounded-md ${hasAvailability(date) ? 'hover:border-primary' : 'opacity-50 cursor-not-allowed'} ${
                selectedDate && selectedDate.toDateString() === date.toDateString() 
                  ? 'border-primary bg-primary/5' 
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              disabled={!hasAvailability(date)}
              onClick={() => {
                setSelectedDate(date);
                setSelectedTime(null);
              }}
            >
              {formatDate(date)}
            </button>
          ))}
        </div>
      </div>
      
      {selectedDate && (
        <div>
          <h3 className="text-sm font-medium mb-2">Select Time</h3>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((timeSlot, index) => (
              <button
                key={index}
                className={`py-2 px-3 text-sm border rounded-md hover:border-primary ${
                  selectedTime === timeSlot 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}
                onClick={() => setSelectedTime(timeSlot)}
              >
                {timeSlot}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {selectedDate && timeSlots.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-2">No available time slots for this date.</p>
      )}
    </div>
  );
}
