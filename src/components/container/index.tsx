import { ReactElement } from 'react'
import s from './container.module.scss'

interface ContainerProps {
    children: React.ReactNode;
}

export function Container ({ children }: ContainerProps): ReactElement {
    return <div className={s.container}>{children}</div>
}
