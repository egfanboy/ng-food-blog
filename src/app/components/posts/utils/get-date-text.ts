const MONTH_MAPPING: { [key: string]: string } = {
  '0': 'January',
  '1': 'February',
  '2': 'March',
  '3': 'April',
  '4': 'May',
  '5': 'June',
  '6': 'July',
  '7': 'August',
  '8': 'September',
  '9': 'October',
  '10': 'November',
  '11': 'December',
};

export const getDateText = (date: number) => {
  const d = new Date(date);

  const month = MONTH_MAPPING[d.getMonth().toString()];
  const day = d.getDate();
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
};
