import { HistoryItemPropsType } from '@/types/HistoryItemPropsType';
import Image from 'next/image';

const HistoryItem: React.FC<HistoryItemPropsType> = ({ item }) => {
  return (
    <li className='flex justify-between items-center  bg-white p-4 '>
      <span className='text-greySecondary font-robotoRegular text-[18px] '>{item.date}</span>
      <span className='text-secondary font-robotoBold text-[18px] font-semibold leading-relaxed'>
        {item.amount}
      </span>
      <Image
        src='/images/icon_arrow_right.svg'
        width={16}
        height={12}
        alt='Arrow'
      />
      <span className='text-secondary font-robotoBold text-[18px] font-semibold leading-relaxed'>
        {item.amountConverted}
      </span>
    </li>
  );
};

export default HistoryItem;
