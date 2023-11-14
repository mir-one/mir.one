'use client'

import React, { ReactElement } from 'react'

import { v1 } from 'uuid'

import { Container } from '@/components/container'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

import { useMediaQuery } from '@/hooks/use-media-query'

import { communityData } from '@/mockup/community'

import s from './community-block.module.scss'

export function CommunityBlock (): ReactElement {
    const isMobile = useMediaQuery(768)

    return (
        <section className={s.community}>
            <Container>
                <Title variant="h2" className={s.title}>
                    Join dev community
                </Title>
                <Text className={s.text}>
                    Connect with bot developers and explore the possibilities our crypto payments
                    service unlocks.
                </Text>
                <div className={s.communityItems}>
                    {communityData.map(el => (
                        <div key={v1()} className={s.communityItem}>
                            {React.createElement(!isMobile ? el.img : el.imgMobile)}
                            <a href="#" className={s.communityItemTitle}>
                                {el.title}
                            </a>
                        </div>
                    ))}
                </div>
                <div className={s.communityActions}>
                    <Button className={s.communityBtn}>Open Devs chat</Button>
                </div>
            </Container>
        </section>
    )
}
