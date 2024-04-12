import HistoryItem from './HistoryItem';
import PrimaryButton from './ui-kit/PrimaryButton';

const conversionHistory = [
  {
    date: '25.11.2020',
    amount: '1000 UAH',
    amountConverted: '36,65 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '24.11.2020',
    amount: '500 UAH',
    amountConverted: '18,30 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '23.11.2020',
    amount: '750 UAH',
    amountConverted: '27,49 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '22.11.2020',
    amount: '1250 UAH',
    amountConverted: '45,81 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '21.11.2020',
    amount: '800 UAH',
    amountConverted: '29,32 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '20.11.2020',
    amount: '600 UAH',
    amountConverted: '22,00 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '19.11.2020',
    amount: '1100 UAH',
    amountConverted: '40,35 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '24.11.2020',
    amount: '500 UAH',
    amountConverted: '18,30 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '23.11.2020',
    amount: '750 UAH',
    amountConverted: '27,49 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '22.11.2020',
    amount: '1250 UAH',
    amountConverted: '45,81 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '21.11.2020',
    amount: '800 UAH',
    amountConverted: '29,32 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '20.11.2020',
    amount: '600 UAH',
    amountConverted: '22,00 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
  {
    date: '19.11.2020',
    amount: '1100 UAH',
    amountConverted: '40,35 USD',
    currencyFrom: 'UAH',
    currencyTo: 'USD',
  },
];
const limitedConversionHistory = conversionHistory.slice(0, 10);

const leftColumnItems = limitedConversionHistory.slice(0, 5);
const rightColumnItems = limitedConversionHistory.slice(5, 10);
const ConversionHistory: React.FC = () => {
  return (
    <div className='flex flex-wrap bg-light px-[65px] py-[60px]'>
      <div className='flex w-full justify-between mb-[32px]'>
        <h2 className='text-primary font-medium font-robotoMedium text-[28px]  leading-[3.5rem]'>
          Конвертер валют
        </h2>
        <PrimaryButton
          bg='bg-blue'
          width='w-[220px]'
          onClick={() => {}}>
          <span className='block text-center px-6 font-robotoMedium text-light text-lg'>
            Очистити історію
          </span>
        </PrimaryButton>
      </div>
      <div className='flex flex-row w-full gap-10 '>
        {/* left */}
        <div className='w-1/2  '>
          {leftColumnItems.map((item, index) => (
            <div
              key={index}
              className='p-2  '>
              <HistoryItem item={item} />
            </div>
          ))}
        </div>
        {/* right */}
        <div className='w-1/2'>
          {rightColumnItems.map((item, index) => (
            <ul
              key={index}
              className='p-2 '>
              <HistoryItem item={item} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionHistory;
