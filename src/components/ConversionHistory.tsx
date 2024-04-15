'use client';

import useConversionStore from '@/store/converter';
import HistoryItem from './HistoryItem';
import PrimaryButton from './ui-kit/PrimaryButton';

const ConversionHistory: React.FC = () => {
  const [history, clearHistory] = useConversionStore((state) => [
    state.history,
    state.clearHistory,
  ]);
  const leftColumnItems = history.slice(0, 5);
  const rightColumnItems = history.slice(5, 10);
  return (
    <div className='flex flex-wrap bg-light px-[65px] py-[60px]'>
      <div className='flex w-full justify-between mb-[32px]'>
        <h2 className='text-primary font-medium font-robotoMedium text-[28px]  leading-[3.5rem]'>
          Конвертер валют
        </h2>
        <PrimaryButton
          bg='bg-blue'
          width='w-[220px]'
          onClick={clearHistory}>
          <span className='block text-center px-6 font-robotoMedium text-light text-lg'>
            Очистити історію
          </span>
        </PrimaryButton>
      </div>
      <div className='flex flex-row w-full gap-10 '>
        {/* left */}
        <div className='w-1/2  '>
          {leftColumnItems.map((historyItem, index) => (
            <div
              key={index}
              className='p-2'>
              <HistoryItem historyItem={historyItem} />
            </div>
          ))}
        </div>
        {/* right */}
        <div className='w-1/2'>
          {rightColumnItems.map((historyItem, index) => (
            <ul
              key={index}
              className='p-2 '>
              <HistoryItem historyItem={historyItem} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionHistory;
