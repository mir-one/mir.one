'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect, ReactElement } from 'react'

interface ProvidersType {
    children: React.ReactNode;
}

export function Providers ({ children }: ProvidersType): ReactElement {
    const [ mounted, setMounted ] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <ThemeProvider themes={[ 'light', 'dark' ]} defaultTheme='light'>{children}</ThemeProvider>
}
