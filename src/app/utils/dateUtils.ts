// Utility function to format a date
export const formatDate = (date: Date | string) => {
  // If date is a string, return it as is
  if (typeof date === 'string') {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  // If date is a Date object, format it using toLocaleDateString
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
  
// Utility function to format a session
export const formatSession = (session: { label: string; startDate: Date | string; endDate: Date | string; period: string; slots: number }) => {
  const formattedStartDate = formatDate(session.startDate);
  const formattedEndDate = formatDate(session.endDate);
  const sessionPeriod = session.period.toLowerCase();
  const time =
    sessionPeriod.toLowerCase() === 'morning'
      ? '8AM - 11AM'
      : sessionPeriod === 'afternoon'
      ? '5PM - 8PM'
      : '';
  const availableSlots = session.slots;

  return `${session.label}: ${formattedStartDate} - ${formattedEndDate} (${time})`;
};

  export const sessionPeriod = (period: string) => {
    const sessionPeriod = period.toLowerCase();
    return sessionPeriod === 'MORNING' ? '8AM - 11AM' : sessionPeriod === 'AFTERNOON' ? '2PM - 5PM' : '5PM - 8PM';
  }