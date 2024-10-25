// components/Button.tsx
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className, disabled }) => {
  return (
    <button type={type} onClick={onClick} className={`custom-button ${className}`} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustomButton;
