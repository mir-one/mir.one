import { Inter } from 'next/font/google'
import { ReactElement } from 'react'

import s from './text.module.scss'

const inter = Inter({ subsets: [ 'latin' ] })

interface TextProps {
    variant?: 'base' | 'description';
    color?: string;
    className?: string;
    children: React.ReactNode;
}
export function Text ({
    variant = 'base',
    color,
    className,
    children
}: TextProps): ReactElement {
    return (
        <p
            className={`
        ${className || ''} 
        ${s.text} 
        ${variant === 'base' ? s.baseText : s.descriptionText} ${inter.className}`}
            style={{ color: color || '' }}
        >
            {children}
        </p>
    )
}
