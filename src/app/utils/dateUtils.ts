// Utility function to format a date
export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  
  // Utility function to format a session
  export const formatSession = (session: { label: string; startDate: Date; endDate: Date; period: string , slots: number }) => {
    const formattedStartDate = formatDate(session.startDate);
    const formattedEndDate = formatDate(session.endDate);
    const sessionPeriod = session.period.toLowerCase();
    console.log(sessionPeriod);
    const time =
    sessionPeriod.toLowerCase() === 'morning'
      ? '8AM - 11AM'
      : sessionPeriod === 'afternoon'
      ? '5PM - 8PM'
      : '';
    const availableSlots = session.slots;
  
    return `${session.label}: ${formattedStartDate} - ${formattedEndDate} (${time})`;
  };
  