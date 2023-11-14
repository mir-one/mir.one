'use client'

import React, { ReactElement } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { Title } from '@/components/ui/title'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Container } from '@/components/container'

import { bots } from '@/mockup/hero'

import { useMediaQuery } from '@/hooks/use-media-query'

import PHONE from 'public/img/hero-block/phone-screen.svg'
import SCREEN from 'public/img/hero-block/screen2.webp'

import PHONE_MOBILE from 'public/img/hero-block/phone-screen-mobile.svg'
import s from './hero-block.module.scss'

export function HeroBlock (): ReactElement {
    const isMobile = useMediaQuery(768)

    return (
        <motion.section className={s.heroBlock}>
            <Container>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className={s.heroBlockRow}
                >
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className={s.heroBlockLeft}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.3 }}
                        >
                            <Title className={s.heroBlockTitle} variant="h1">
                                digital fingerprints <span>on The Open Network</span>
                            </Title>
                        </motion.div>
                        <Text className={s.heroBlockSubtitle} variant="base">
                            This is a collection of 10 000 unique digital fingerprints.
                        </Text>
                        <Button variant="general">Getgems</Button>
                        <div className={s.bots}>
                            <div className={s.botsList}>
                                {bots.map((bot, index) => (
                                    <motion.div
                                        key={bot.alt}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: index * 0.2 }}
                                        className={s.botsListItem}
                                    >
                                        <Image
                                            src={bot.src}
                                            alt={bot.alt}
                                            width={isMobile ? 63 : 96 }
                                            height={isMobile ? 63 : 96 }
                                            loading={'eager'}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <Text variant="base" className={s.info}>
                                Popular bots use Crypto Pay
                            </Text>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className={s.heroBlockRight}
                    >
                        <div className={s.phone}>
                            {!isMobile ? (
                                <>
                                    <PHONE />
                                    <Image
                                        src={SCREEN}
                                        className={s.phoneScreen}
                                        alt="screen"
                                        width={304}
                                        height={663}
                                        loading={'eager'}
                                        priority={true}
                                    />
                                </>
                            ) : (
                                <>
                                    <PHONE_MOBILE />
                                    <Image
                                        src={SCREEN}
                                        className={s.phoneScreen}
                                        alt="screen"
                                        width={280}
                                        height={612}
                                        loading={'eager'}
                                        priority={true}
                                    />
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </motion.section>
    )
}
