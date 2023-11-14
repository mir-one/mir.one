'use client'

import { useState, useEffect, ReactElement } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

import LIGHT from 'public/img/header/dark-mode.svg'
import DARK from 'public/img/header/light-mode.svg'
import s from './theme-switcher.module.scss'

export function ThemeSwitcher (): ReactElement | null {
    const [ mounted, setMounted ] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleClick = () => {
        if (theme === 'light') setTheme('dark')
        else setTheme('light')
    }

    return (
        <motion.button
            className={s.themeChangeBtn}
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            aria-label='theme switcher'
        >
            {theme === 'light' ? <LIGHT /> : <DARK />}
        </motion.button>
    )
}
