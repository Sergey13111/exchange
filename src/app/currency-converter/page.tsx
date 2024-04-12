import ConversionHistory from '@/components/ConversionHistory';
import ConverterForm from '@/components/ConverterForm';

const page: React.FC = () => {
  return (
    <>
      <section className='bg-light  py-[80px]'>
        <div className='bg-white p-14  rounded-lg  mx-auto max-w-[962px]'>
          <h2 className='text-primary font-bold font-robotoBold text-[40px] mb-[70px] leading-[3.5rem]'>
            Конвертер валют
          </h2>
          <ConverterForm />
        </div>
      </section>
      <section className='mx-auto max-w-[982px] px-2.5	 py-[80px]'>
        <ConversionHistory />
      </section>
    </>
  );
};

export default page;
