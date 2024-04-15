import { API_URL_BANK } from '@/helpers/constants';

export const getAllCurrencies = async (date: string) => {
  try {
    const url = date && `${API_URL_BANK}?date=${date}&json`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
