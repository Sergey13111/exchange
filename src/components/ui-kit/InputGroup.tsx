import Image from 'next/image';

type InputGroupPropsType = {
  label: string;
};

const InputGroup: React.FC<InputGroupPropsType> = ({ label }) => {
  return (
    <div className='w-full'>
      <label className='block text-secondary leading-7	 text-[20px] font-robotoMedium font-medium mb-7'>
        {label}
      </label>
      <div className='flex gap-4 '>
        <input
          type='number'
          className='form-input border-1  border border-greySecondary rounded text-secondary font-robotoBold text-[20px] font-semibold leading-relaxed focus-visible:outline-none rounded max-w-[220px] max-h-[60px] px-4 py-2'
        />
        <div className='block relative'>
          <select className='form-select bg-transparent cursor-pointer  border-1 border border-greySecondary rounded text-secondary font-robotoBold text-[20px] font-semibold leading-relaxed focus-visible:outline-none rounded  max-h-[60px] h-full px-4 pr-5 py-2 appearance: none'>
            <option>UAH</option>
            <option>USD</option>
          </select>
          <div className='py-2 pr-2 bg-white right-[1px] top-3 absolute '>
            <Image
              alt='Select'
              src='/images/icon_arrow_down.svg'
              width={16}
              height={8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
