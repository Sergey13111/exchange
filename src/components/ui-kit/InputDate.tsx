import Image from 'next/image';

const InputDate: React.FC = () => {
  return (
    <div className='date-picker block relative w-[220px] h-[60px]'>
      <input
        type='date'
        className=' form-input focus-visible:outline-none text-[20px] border-1 border border-greySecondary rounded text-secondary font-robotoBold  font-semibold leading-relaxed w-full h-full px-4 py-3 relative appearance-none'
      />
      <Image
        alt='Calendar'
        src='/images/icon_calendar.svg'
        width={25}
        height={28}
        style={{ position: 'absolute', top: '15px', right: '15px', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default InputDate;
