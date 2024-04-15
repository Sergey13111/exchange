import { parse, format, isValid } from 'date-fns';

export const formatDate = (dateStr: string) => {
  if (/^\d{8}$/.test(dateStr)) {
    const dateObj = parse(dateStr, 'yyyyMMdd', new Date());
    return isValid(dateObj) ? format(dateObj, 'dd.MM.yyyy') : 'Неверная дата';
  } else {
    try {
      const dateObj = new Date(dateStr);
      return isValid(dateObj) ? format(dateObj, 'dd.MM.yyyy') : 'Неверная дата';
    } catch (error) {
      return 'Неверная дата';
    }
  }
};
