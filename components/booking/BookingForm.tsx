"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type TeacherAvailability = {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
  saturday: string[];
  sunday: string[];
};

type Teacher = {
  id: number;
  name: string;
  title: string;
  subjects: string[];
  hourlyRate: number;
  availability: TeacherAvailability;
  online: boolean;
  inPerson: boolean;
  location: string;
};

type BookingFormProps = {
  teacher: Teacher;
};

export default function BookingForm({ teacher }: BookingFormProps) {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    subject: teacher.subjects[0] || '',
    lessonType: teacher.online ? 'online' : 'in-person',
    date: '',
    timeSlot: '',
    numLessons: '1',
    notes: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  const dates = generateDates();
  
  const getAvailabilityForDate = (date: Date) => {
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayName = dayNames[date.getDay()];
    return teacher.availability[dayName as keyof TeacherAvailability];
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Reset time slot when date changes
    if (name === 'date') {
      setFormData(prev => ({
        ...prev,
        timeSlot: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real app, this would call an API to create the booking
      console.log('Booking data:', formData);
      
      // Redirect to confirmation page
      router.push('/booking/confirmation');
    }
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  // Get available time slots for selected date
  const availableTimeSlots = formData.date 
    ? getAvailabilityForDate(new Date(formData.date)) 
    : [];
  
  // Calculate total price
  const numLessons = parseInt(formData.numLessons) || 1;
  const totalPrice = teacher.hourlyRate * numLessons;
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
          <select
            id="subject"
            name="subject"
            className={`w-full p-2 border rounded-md dark:bg-neutral-700 ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            value={formData.subject}
            onChange={handleChange}
          >
            {teacher.subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Lesson Type</label>
          <div className="flex space-x-4">
            {teacher.online && (
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="lessonType"
                  value="online"
                  className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  checked={formData.lessonType === 'online'}
                  onChange={handleChange}
                />
                <span className="ml-2 text-sm">Online</span>
              </label>
            )}
            
            {teacher.inPerson && (
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="lessonType"
                  value="in-person"
                  className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                  checked={formData.lessonType === 'in-person'}
                  onChange={handleChange}
                />
                <span className="ml-2 text-sm">In-person ({teacher.location})</span>
              </label>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">Select Date</label>
          <select
            id="date"
            name="date"
            className={`w-full p-2 border rounded-md dark:bg-neutral-700 ${errors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
            value={formData.date}
            onChange={handleChange}
          >
            <option value="">Select a date</option>
            {dates.map((date, index) => {
              const availability = getAvailabilityForDate(date);
              if (availability.length === 0) return null;
              
              return (
                <option key={index} value={date.toISOString()}>
                  {formatDate(date)}
                </option>
              );
            }).filter(Boolean)}
          </select>
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>
        
        {formData.date && (
          <div>
            <label htmlFor="timeSlot" className="block text-sm font-medium mb-1">Select Time</label>
            <select
              id="timeSlot"
              name="timeSlot"
              className={`w-full p-2 border rounded-md dark:bg-neutral-700 ${errors.timeSlot ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
              value={formData.timeSlot}
              onChange={handleChange}
            >
              <option value="">Select a time</option>
              {availableTimeSlots.map((timeSlot, index) => (
                <option key={index} value={timeSlot}>{timeSlot}</option>
              ))}
            </select>
            {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>}
          </div>
        )}
        
        <div>
          <label htmlFor="numLessons" className="block text-sm font-medium mb-1">Number of Lessons</label>
          <select
            id="numLessons"
            name="numLessons"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-neutral-700"
            value={formData.numLessons}
            onChange={handleChange}
          >
            <option value="1">Single Lesson</option>
            <option value="4">Package (4 Lessons)</option>
            <option value="8">Package (8 Lessons)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md resize-none dark:bg-neutral-700"
            placeholder="Any specific topics, goals, or requirements for the teacher..."
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Booking Summary</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-sm">Teacher:</span>
              <span className="text-sm font-medium">{teacher.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Subject:</span>
              <span className="text-sm font-medium">{formData.subject}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Lesson Type:</span>
              <span className="text-sm font-medium">
                {formData.lessonType === 'online' ? 'Online' : 'In-person'}
              </span>
            </div>
            {formData.date && formData.timeSlot && (
              <div className="flex justify-between">
                <span className="text-sm">Schedule:</span>
                <span className="text-sm font-medium">
                  {formatDate(new Date(formData.date))}, {formData.timeSlot}
                </span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-sm">Number of Lessons:</span>
              <span className="text-sm font-medium">{numLessons}</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-medium">Total Price:</span>
                <span className="font-bold text-primary">R{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn-primary w-full py-2 text-center">
          Confirm Booking
        </button>
      </div>
    </form>
  );
}
