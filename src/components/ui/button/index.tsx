/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

import { Inter } from 'next/font/google'

import s from './button.module.scss'

const inter = Inter({ subsets: [ 'latin' ] })

const buttonVariant = {
    general: s.generalVariant,
    secondary: s.secondaryVariant,
    primary: s.primaryVariant
}

interface ButtonProps
    extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * startIcon
     */
    startIcon?: string;
    /**
     * endIcon
     */
    endIcon?: string;
    /**
     * variant button
     */
    variant?: 'general' | 'secondary' | 'primary';
    /**
     * className button
     */
    className?: string;
    /**
     * children
     */
    children?: ReactNode;
    /**
     * disabled
     */
    disabled?: boolean;
}

export function Button ({
    variant = 'general',
    className,
    children,
    disabled,
    startIcon,
    endIcon,
    ...restProps
}: ButtonProps): ReactElement {
    return (
        <button
            className={`
        ${s.btn}
        ${buttonVariant[variant]}
        ${disabled ? s.disabled : ''}
        ${inter.className}
      `}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    )
}
