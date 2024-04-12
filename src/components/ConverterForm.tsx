import Image from 'next/image';
import InputDate from './ui-kit/InputDate';
import InputGroup from './ui-kit/InputGroup';
import PrimaryButton from './ui-kit/PrimaryButton';

const ConverterForm: React.FC = () => {
  return (
    <div className='flex w-full  flex-row justify-between gap-4 mb-4'>
      <div className='space-y-6'>
        <InputGroup label='В мене є:' />
        <div className='flex items-center'>
          <InputDate />
        </div>
      </div>

      <div className='flex  pb-[30px] '>
        <Image
          src='/images/icon_convert.svg'
          width={22}
          height={22}
          alt='Converter'
        />
      </div>

      <div className='space-y-6 text-end'>
        <InputGroup label='Хочу придбати:' />
        <PrimaryButton
          bg='bg-blue'
          width='w-[220px]'
          onClick={() => {}}>
          <span className='block text-center px-6 font-robotoMedium text-light text-lg'>
            Зберегти результат
          </span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ConverterForm;
