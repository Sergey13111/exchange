import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero: React.FC = () => {
  return (
    <div className='relative  overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-bg-hero bg-cover bg-no-repeat bg-center'></div>

      <div className='w-full max-w-868 mx-auto h-96 relative z-10 flex justify-between items-center'>
        <div className='text-white'>
          <h1 className='text-light font-bold font-robotoBold text-[54px] mb-4 leading-[normal]'>
            Чіп Чендж
          </h1>
          <p className='text-xl	text-grey font-robotoMedium fontmedium mb-7'>
            Обмінник валют - навчальний
          </p>

          <CustomButton
            bg='bg-light'
            width='w-[234px]'
            href='/currency-converter'>
            <span className='block text-center font-robotoMedium text-secondary text-lg'>
              Конвертер валют
            </span>
          </CustomButton>
        </div>

        <div className='max-w-sm'>
          <Image
            src='/images/card-debit.png'
            width={340}
            height={216}
            alt='Card'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
