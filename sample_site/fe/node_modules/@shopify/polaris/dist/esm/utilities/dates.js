const WEEK_LENGTH = 7;
function getWeeksForMonth(month, year, weekStartsOn = 0) {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstOfMonth.getDay();
  const weeks = [[]];
  let currentWeek = weeks[0];
  let currentDate = firstOfMonth;
  const orderedWeekday = getOrderedWeekdays(weekStartsOn);

  for (let i = 0; i < orderedWeekday.indexOf(firstDayOfWeek); i++) {
    currentWeek.push(null);
  }

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  return weeks;
}
function dateIsInRange(day, range) {
  if (day == null) {
    return false;
  }

  const {
    start,
    end
  } = range;
  return Boolean(start && day > start && end && day < end);
}
function dateIsSelected(day, range) {
  if (day == null) {
    return false;
  }

  const {
    start,
    end
  } = range;
  return Boolean(start && isSameDay(start, day) || end && isSameDay(end, day));
}
function isSameDay(day1, day2) {
  return day1.getDate() === day2.getDate() && day1.getMonth() === day2.getMonth() && day1.getFullYear() === day2.getFullYear();
}
function getNewRange(range, selected) {
  if (range == null) {
    return {
      start: selected,
      end: selected
    };
  }

  const {
    start,
    end
  } = range;

  if (end && (isDateAfter(start, end) || isDateBefore(start, end))) {
    return {
      start: selected,
      end: selected
    };
  }

  if (start) {
    if (isDateBefore(selected, start)) {
      return {
        start: selected,
        end: selected
      };
    }

    return {
      start,
      end: selected
    };
  }

  if (end) {
    if (isDateBefore(selected, end)) {
      return {
        start: selected,
        end
      };
    }

    return {
      start: start || end,
      end: selected
    };
  }

  return {
    start: selected,
    end: selected
  };
}
function getNextDisplayMonth(month) {
  if (month === 11) {
    return 0;
  }

  return month + 1;
}
function getNextDisplayYear(month, year) {
  if (month === 11) {
    return year + 1;
  }

  return year;
}
function getPreviousDisplayMonth(month) {
  if (month === 0) {
    return 11;
  }

  return month - 1;
}
function getPreviousDisplayYear(month, year) {
  if (month === 0) {
    return year - 1;
  }

  return year;
}
function isDateAfter(date, dateToCompare) {
  return date.getTime() > dateToCompare.getTime();
}
function isDateBefore(date, dateToCompare) {
  return date.getTime() < dateToCompare.getTime();
}
const WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
function getOrderedWeekdays(weekStartsOn) {
  const weekDays = [...WEEKDAYS];
  const restOfDays = weekDays.splice(weekStartsOn);
  return [...restOfDays, ...weekDays];
}

export { dateIsInRange, dateIsSelected, getNewRange, getNextDisplayMonth, getNextDisplayYear, getOrderedWeekdays, getPreviousDisplayMonth, getPreviousDisplayYear, getWeeksForMonth, isDateAfter, isDateBefore, isSameDay };
