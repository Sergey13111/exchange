import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href={'/'}>
      <Image
        src='/images/icon_logo.svg'
        width={147}
        height={23}
        alt='Logo'
      />
    </Link>
  );
};

export default Logo;
