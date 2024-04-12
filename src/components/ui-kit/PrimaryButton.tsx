
type ButtonType = {
  children: React.ReactNode;
  bg: string;
  width: string;
  onClick: () => void;
};

const PrimaryButton: React.FC<ButtonType> = ({ children, bg, width, onClick }) => {
  const buttonClass = `${bg} ${width}  h-14  p-3  rounded shadow-lg`;
  const hoverClass = 'hover:bg-[#222bbb]';

  return <button className={`${buttonClass} ${hoverClass}`}>{children}</button>;
};

export default PrimaryButton;
