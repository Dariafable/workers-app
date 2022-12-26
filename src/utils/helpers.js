export const sortData = (sort, items) => {
  if (sort !== 'alphabet') {
    const sortedDate = getUpcomingBirthdays([...items]);
    return sortedDate;
  }

  const sortedDate = [...items].sort((a, b) => {
    const nameA = a.firstName.toLowerCase();
    const nameB = b.firstName.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return sortedDate;
};

const getNextBirthday = (date) => {
  const currentDate = new Date();

  const birthday = new Date(date);
  birthday.setFullYear(currentDate.getFullYear());

  if (birthday - currentDate < 0) {
    birthday.setFullYear(currentDate.getFullYear() + 1);
  }

  return birthday;
};

const getUpcomingBirthdays = (birthdays) => {
  return birthdays.sort((a, b) => {
    return getNextBirthday(a.birthday) - getNextBirthday(b.birthday);
  });
};
