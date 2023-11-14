/* eslint-disable no-nested-ternary */

'use client'

import { useEffect, useState, createElement, ReactElement } from 'react'

import { motion } from 'framer-motion'

import { useTheme } from 'next-themes'

import { useMediaQuery } from '@/hooks/use-media-query'
import { currencies } from '@/mockup/features'
import { Title } from '../ui/title'
import { Text } from '../ui/text'

import s from './features-currencies.module.scss'

export function FeaturesCurrencies (): ReactElement {
    const [ active, setActive ] = useState<number>(0)

    const { theme } = useTheme()

    const isMobile = useMediaQuery(550)
    const isTablet = useMediaQuery(768)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => (prev === currencies.length - 1 ? 0 : prev + 1))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={s.sectionCurrencies}>
            <div className={s.content}>
                <Title variant="h3" className={s.contentTitle}>
                    Accept a wide range of cryptocurrencies
                </Title>
                <Text className={s.contentDescription}>
                    Bill any supported cryptocurrencies with asset parameter in{' '}
                    <a href="#" className={s.contentDescriptionLink}>
                        GetInvoice
                    </a>{' '}
                    method
                </Text>
            </div>

            <div className={s.currencies}>
                {currencies.map((currency, index) => (
                    <motion.div key={index} className={s.curr}>
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={
                                !isMobile && { scale: active === index ? 1.1 : 1 }
                            }
                            transition={{ duration: 0.7 }}
                        >
                            {createElement(!isTablet ? currency.icon : currency.iconMobile)}
                        </motion.div>
                        <motion.p
                            initial={{ color: 'rgba(17, 17, 17, 0.40)' }}
                            animate={
                                !isMobile && {
                                    color:
                                        active === index
                                            ? theme === 'light'
                                                ? 'rgba(17, 17, 17, 0.90)'
                                                : '#FFF'
                                            : theme === 'light'
                                                ? 'rgba(17, 17, 17, 0.40)'
                                                : '#b8bbbf'
                                }
                            }
                            transition={{ duration: 0.7 }}
                            className={s.currTitle}
                        >
                            {currency.title}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
