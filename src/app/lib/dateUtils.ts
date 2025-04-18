// Utility function to format a date
export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  
  // Utility function to format a session
  export const formatSession = (session: { label: string; startDate: Date; endDate: Date; period: string }) => {
    const formattedStartDate = formatDate(session.startDate);
    const formattedEndDate = formatDate(session.endDate);
    const sessionPeriod = session.period.toLowerCase();
  
    return `${session.label}: ${formattedStartDate} - ${formattedEndDate} (${sessionPeriod})`;
  };
  