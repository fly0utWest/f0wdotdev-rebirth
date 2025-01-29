const formatDate = (date: string): string => {
  const stringToDate = new Date(date);

  return `${stringToDate.getDate() < 10  ? "0" + (stringToDate.getDate() + 1) : stringToDate.getDate()}.${
    stringToDate.getMonth() < 10 ? "0" + (stringToDate.getMonth() + 1) : stringToDate.getMonth() + 1
  }.${stringToDate.getFullYear()}`;
};

export default formatDate;