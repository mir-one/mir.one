import { FC } from 'react'

import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'

import s from './api-block.module.scss'

interface ApiBlockProps {}

export const ApiBlock: FC<ApiBlockProps> = () => (
    <section className={s.api}>
        <Container>
            <div className={s.apiInner}>
                <div className={s.apiContent}>
                    <Title variant="h2" className={s.apiContentTitle}>
                            Crypto Pay API
                    </Title>
                    <Text variant="base" className={s.apiContentDescription}>
                            Explore available methods and types and integrate them in any
                            programming language.
                    </Text>
                    <Button variant="primary" className={s.apiButton} style={{ color: '#fff' }}>
                            Open API Docs
                    </Button>
                </div>
            </div>
        </Container>
    </section>
)
