import { listNavLink } from '@/helpers/constants';
import Navigation from './ui-kit/Navigation';
import Logo from './ui-kit/Logo';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-light py-12 text-grey'>
      <div className='container  max-w-px-1200 mx-auto flex gap-12 '>
        <div className='flex-auto w-100 max-w-px-260 pr-5 text-left'>
          <Logo />
          <div className='flex flex-col   mt-4 text-sm text-secondary font-robotoRegular leading-4 font-normal'>
            <span className='whitespace-nowrap'>04128, м.Київ, вул. Хрещатик, 19</span>
            <span className='whitespace-nowrap'>Ліцензія НБУ №156</span>
            <span className='whitespace-nowrap'>Ⓒ ПАТ ЧіпЧендж, 2019-2023</span>
          </div>
        </div>
        <div className='flex-grow'>
          <div className='grid grid-cols-3 gap-4'>
            <Navigation listNavLink={listNavLink} />

            <div>
              <div className='flex gap-5 mb-1.5'>
                <Image
                  src='/images/icon_mobile.svg'
                  width={10}
                  height={16}
                  alt='Phone'
                />
                <a
                  href='tel:3773'
                  className='text-primary font-robotoMedium leading-4 font-medium'>
                  3773
                </a>
              </div>
              <span className='block pl-8 text-sm text-secondary font-robotoRegular leading-4 font-normal'>
                Цілодобова підтримка
              </span>
            </div>
            <div>
              <div className='flex gap-5 mb-1.5 '>
                <Image
                  src='/images/icon_phone.svg'
                  width={16}
                  height={16}
                  alt='Phone'
                />
                <a
                  href='tel:88001112233'
                  className='text-primary font-robotoMedium leading-4 font-medium'>
                  8 800 111 22 33
                </a>
              </div>
              <span className='block pl-9 w-48 text-sm text-secondary font-robotoRegular leading-4 font-normal'>
                Безкожтовно для дзвінків в межах України
              </span>
            </div>
          </div>
        </div>
        <div className='flex-auto flex justify-end '>
          <Link href={'/'}>
            <Image
              src='/images/icon_social_media.svg'
              width={102}
              height={16}
              alt='Social media'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
