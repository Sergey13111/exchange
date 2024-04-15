import { ListNavLinkType } from '@/types/ListNavLinkType';

export const listNavLink: ListNavLinkType[] = [
  { nameLink: 'Послуги', path: '/services' },
  { nameLink: 'Конвертер валют', path: '/currency-converter' },
  { nameLink: 'Контакти', path: '/contacts' },
  { nameLink: 'Задати питання', path: '/questions' },
];

export const API_URL_BANK = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange';
