import React from 'react'
import { IButtonProps } from '@/interfaces/interfaces'

 const Button: React.FC<IButtonProps> = ({text, onClick, type="submit", disabled= false}) => {
    return (
        <button type={type} 
        onClick={onClick}
        disabled={disabled}
        className="mx-auto bg-customBg text-customText py-2 px-4 shadow-md rounded hover:cursor-pointer hover:bg-customHoverButton hover:text-customHoverTextButton border">
            {text}
        </button>
    )
}
export default Button;




