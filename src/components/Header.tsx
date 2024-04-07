import { listNavLink } from '@/helpers/constants';
import Logo from './ui-kit/Logo';
import Navigation from './ui-kit/Navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className='bg-light  text-grey'>
      <div className='container max-w-px-1200 mx-auto py-8 flex justify-between items-center'>
        <div className='flex items-center gap-20'>
          <Logo />
          <Navigation
            listNavLink={listNavLink}
            variant='horizontal'
          />
        </div>
        <div className='flex items-center hover:text-blue'>
          <Link
            href='/profile'
            className='flex items-center'>
            <Image
              className='  mr-3'
              src='/images/icon_entry_arrow.svg'
              width={20}
              height={22}
              alt='Icon entry arrow'
            />

            <span className='hover:text-hover text-primary'>Особистий кабінет</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
