import React from "react";

type ButtonType = "primary" | "default";

export interface ButtonProps {
    className?: any;
    disabled?: boolean;
    loading?: boolean;
    size?: "small" | "middle" | "large";
    id?: string;
    buttonType?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    id,
    onClick,
    buttonType,
    ...props
}) => {
    return (
        <>
            <div className="buttonWrapper">
                <button
                    className={`${className} ${"button"}`}
                    id={id}
                    {...props}
                    onClick={onClick}
                >
                    {props.children}
                </button>
            </div>
            <style jsx>
                {`
                .buttonWrapper {
                    padding: 10px;
                }
                .button {
                    padding: 20px;
                    background:  ${buttonType === "next" ? `#32a852` : `#33598f`};
                    color: #ffffff;
                    border: 1px solid #ffffff;
                    border-radius: 15px;
                    cursor: pointer;
                    font-size: 20px;
                }
                `}
            </style>
        </>
    )
}

