import { InputGroupPropsType } from '@/types/InputGroupPropsType';
import Image from 'next/image';
import { Controller } from 'react-hook-form';

const InputGroup: React.FC<InputGroupPropsType> = ({
  label,
  name,
  nameSelect,
  error,
  control,
  options,
  onAmountChange,
}) => {
  return (
    <div className='w-full'>
      <label className='block text-secondary leading-7 text-start	 text-[20px] font-robotoMedium font-medium mb-7'>
        {label}
      </label>
      <div className='flex gap-4 '>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type='number'
              {...field}
              placeholder='Введіть значення'
              onChange={(e) => {
                field.onChange(e);
                onAmountChange && onAmountChange(e.target.value);
              }}
              className='form-input border-1  border border-greySecondary rounded text-secondary font-robotoBold text-[20px] font-semibold leading-relaxed focus-visible:outline-none rounded max-w-[220px] max-h-[60px] px-4 py-2'
            />
          )}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <div className='block relative'>
          <Controller
            control={control}
            name={nameSelect}
            render={({ field }) => (
              <select
                {...field}
                className='form-select bg-transparent cursor-pointer  border-1 border border-greySecondary rounded text-secondary font-robotoBold text-[20px] font-semibold leading-relaxed focus-visible:outline-none rounded  max-h-[60px] h-full px-4 pr-5 py-2 appearance: none'>
                {options &&
                  options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            )}
          />
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
