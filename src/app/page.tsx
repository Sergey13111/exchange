import CustomButton from '@/components/ui-kit/CustomButton';
import Hero from '@/components/ui-kit/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />

      <section className='w-full max-w-868 mx-auto py-[120px] flex justify-between items-center'>
        <div className='flex flex-col justify-between'>
          <div>
            <h2 className='text-primary font-bold font-robotoBold text-[40px] mb-6 leading-[3.5rem]'>
              Конвертер валют
            </h2>
            <p className='max-w-[340px] text-secondary font-medium font-robotoMedium text-[20px] mb-6 leading-7'>
              Переважна діяльність банківської групи за останні чотири звітні квартали становить 50
              і більше відсотків.
            </p>
          </div>
          <CustomButton
            bg='bg-blue'
            width='w-[250px]'
            href='/currency-converter'>
            <span className='block text-center px-6 font-robotoMedium text-light text-lg'>
              Конвертувати валюту
            </span>
          </CustomButton>
        </div>
        <div className='w-1/2'>
          <Image
            src='/images/img_converter.png'
            width={436}
            height={314}
            alt='Card'
          />
        </div>
      </section>
    </>
  );
}
