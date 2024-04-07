import Link from 'next/link';

type ButtonType = {
  children: React.ReactNode;
  bg: string;
  width: string;
  href: string;
};

const CustomButton: React.FC<ButtonType> = ({ children, bg, width, href }) => {
  const buttonClass = `${bg} ${width}  h-14  p-3  rounded shadow-lg`;
  const hoverClass = 'hover:bg-grey';

  return (
    <Link
      className={`${buttonClass} ${hoverClass}`}
      href={href}>
      {children}
    </Link>
  );
};

export default CustomButton;
