import React from 'react';
import { IButtonProps } from '@/interfaces/interfaces';

const Button: React.FC<IButtonProps> = ({
  text,
  onClick,
  type = 'submit',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mx-auto w-full sm:w-auto mt-4 py-3 px-6 rounded border 
        transition-all duration-300 text-base sm:text-lg
        bg-customBg text-customText shadow-[2px_2px_0px_#0a0a0a]
        hover:cursor-pointer hover:bg-customHoverButton hover:text-customHoverTextButton 
        hover:shadow-[4px_4px_0px_#c4df63] 
        active:shadow-[1px_1px_0px_#c4df63] 
        disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
};

export default Button;
