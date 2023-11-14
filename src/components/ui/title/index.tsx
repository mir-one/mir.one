/* eslint-disable @typescript-eslint/no-shadow */
import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import s from './title.module.scss'

const inter = Inter({ subsets: [ 'latin' ] })

interface TitleProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4';
    fontFamily?: string;
    color?: string;
    className?: string;
    children: React.ReactNode;
}

export function Title ({
    variant = 'h1',
    fontFamily,
    color,
    className,
    children
}: TitleProps): ReactElement {
    const classNames = [
        s.h,
        s[`h-${variant}`],
        className
    ]
        .filter(className => className)
        .join(' ')

    let title
    switch (variant) {
        case 'h1':
            title = <h1 className={`${classNames || ''} ${s.h1} ${inter.className}`} style={{ color, fontFamily }}>{children}</h1>
            break
        case 'h2':
            title = <h2 className={`${classNames || ''} ${s.h2} ${inter.className}`} style={{ color, fontFamily }}>{children}</h2>
            break
        case 'h3':
            title = <h3 className={`${classNames || ''} ${s.h3} ${inter.className}`} style={{ color, fontFamily }}>{children}</h3>
            break
        case 'h4':
            title = <h4 className={`${classNames || ''} ${s.h4} ${inter.className}`} style={{ color, fontFamily }}>{children}</h4>
            break
        default:
            title = <h1 className={`${classNames || ''} ${s.h1} ${inter.className}`} style={{ color, fontFamily }}>{children}</h1>
    }

    return title
}
