import css from "./Button.module.css"

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    width?: number;
};

export default function Button({ children, onClick, disabled, className, width }: Props) {
    return (
        <button
            type="button"
            className={`${css.button}${className ? " " + className : ""}`}
            onClick={onClick}
            disabled={disabled}
            style={width ? { width: `${width}px` } : undefined}
        >
            {children}
        </button>
    )
    
}