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

export const pluralize = (value) => {
  const str = String(value);
  const char = Number(str[str.length - 1]);

  if (char === 1) {
    return `${value} год`;
  }
  if (char >= 2 && char < 5) {
    return `${value} года`;
  }
  return `${value} лет`;
};

export const formatNumber = (phoneNumber) => {
  const countryCode = phoneNumber.slice(0, 2);
  const cityCode = phoneNumber.slice(2, 5);
  const firstPart = phoneNumber.slice(5, 8);
  const secondPart = phoneNumber.slice(8, 10);
  const thirdPart = phoneNumber.slice(10, 12);
  return `${countryCode} (${cityCode}) ${firstPart} ${secondPart} ${thirdPart}`;
};

export const debaunced = (fn, delay) => {
  setTimeout(() => fn(), delay);
};
