export const formatDate = (inputDate: string) => {
  const parts = inputDate.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  const dateObj = new Date(year, month - 1, day);

  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const monthName = months[dateObj.getMonth()];
  const formattedDay = day.toString().padStart(2, "0");
  const formattedYear = year.toString();

  const formattedDate = `${dayOfWeek}, ${monthName} ${formattedDay}, ${formattedYear}`;

  return formattedDate;
};
