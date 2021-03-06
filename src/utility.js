const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const formatDate = date => (
  `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
);

export {
  formatDate
};
