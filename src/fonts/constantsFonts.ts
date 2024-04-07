import localFont from 'next/font/local';

export const robotoRegular = localFont({
    src: '../fonts/Roboto-Regular.woff2',
    display: 'swap',
    weight: '500',
    variable: '--font-roboto-regular',
  });
  
 export const robotoMedium = localFont({
    src: '../fonts/Roboto-Medium.woff2',
    display: 'swap',
    weight: '500',
    variable: '--font-roboto-medium',
  });
  
 export const robotoBold = localFont({
    src: '../fonts/Roboto-Bold.woff2',
    display: 'swap',
    weight: '700',
    variable: '--font-roboto-bold',
  });
  
 export const workSans = localFont({
    src: '../fonts/WorkSans-Bold.woff2',
    display: 'swap',
    variable: '--font-work-sans',
  });