import { IButtonProps } from "@/interfaces/interfaces";

const ButtonAdvert: React.FC<IButtonProps> = ({text, onClick, type="button"}) => {
    return (
        <button type={type} 
        onClick={onClick}
        className="w-40  bg-red-600 text-customText py-2 px-4 shadow-md rounded hover:cursor-pointer hover:bg-slate-700 hover:text-customText border ">
            {text}
        </button>
    )
}

export default ButtonAdvert;