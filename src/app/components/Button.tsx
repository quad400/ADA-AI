interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <div className="rounded-md ease-in-out transition-all px-4 cursor-pointer bg-secondary text-white font-medium text-sm justify-center items-center text-center hover:bg-darkSecondary hover:text-[15px] py-3">
      {children}
    </div>
  );
};

export default Button