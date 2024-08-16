// src/utils/calendarUtils.js
export const generateGoogleCalendarLink = ({ title, description, location, startDateTime, endDateTime }) => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    const url = `${baseUrl}&text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;
    return url;
  };
  