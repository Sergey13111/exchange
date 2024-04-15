import { IFormData } from '@/helpers/validation';
import Image from 'next/image';
import { Control, Controller } from 'react-hook-form';

const InputDate: React.FC<{
  control: Control<IFormData>;
  name: string;
}> = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name='date'
      render={({ field }) => (
        <div className='date-picker block relative w-[220px] h-[60px]'>
          <input
            type='date'
            {...field}
            name={name}
            className=' form-input focus-visible:outline-none text-[20px] border-1 border border-greySecondary rounded text-secondary font-robotoBold  font-semibold leading-relaxed w-full h-full px-4 py-3 relative appearance-none'
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
          />
          <Image
            alt='Calendar'
            src='/images/icon_calendar.svg'
            width={25}
            height={28}
            style={{ position: 'absolute', top: '15px', right: '15px', pointerEvents: 'none' }}
          />
        </div>
      )}
    />
  );
};

export default InputDate;
