export const dateFormatter = (date: Date | any) => {
  const formattedUtcDate = date?.replace(' UTC', 'Z'); // Convert to ISO 8601 format
  const newDate = new Date(formattedUtcDate);
  const formattedDate = newDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return formattedDate;
};

export const dateTimeFormatter = (date: Date | any) => {
  const formattedUtcDate = date?.replace(' UTC', 'Z'); // Convert to ISO 8601 format
  const newDate = new Date(formattedUtcDate);
  const formattedDate = newDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // second: 'numeric',
    hour12: true
  });
  return formattedDate;
};
export const capitalizeFirstLetter = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeEachFirstLetter = (str:any) => {
  // Split the string into words
  const words = str.split(" ");
  
  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  
  // Join the words back into a single string
  const capitalizedString = words.join(" ");
  
  return capitalizedString;
};