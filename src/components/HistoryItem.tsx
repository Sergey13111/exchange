import { HistoryItemPropsType } from '@/types/HistoryItemPropsType';
import Image from 'next/image';
import { formatDate } from '@/helpers/formatDate';

const HistoryItem: React.FC<HistoryItemPropsType> = ({ historyItem }) => {
  const date = historyItem && formatDate(historyItem.date);
  const amountFrom = parseFloat(historyItem.amountFrom).toFixed(2);
  const amountTo = parseFloat(historyItem.amountTo).toFixed(2);

  return (
    <li className='flex justify-between items-center  bg-white p-4 '>
      <span className='text-greySecondary font-robotoRegular text-[18px] '>{date}</span>
      <span className='text-secondary font-robotoBold text-[18px] font-semibold leading-relaxed'>
        {amountFrom} {historyItem.currencyFrom}
      </span>
      <Image
        src='/images/icon_arrow_right.svg'
        width={16}
        height={12}
        alt='Arrow'
      />
      <span className='text-secondary font-robotoBold text-[18px] font-semibold leading-relaxed'>
        {amountTo} {historyItem.currencyTo}
      </span>
    </li>
  );
};

export default HistoryItem;
