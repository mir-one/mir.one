/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */

'use client'

import { useTheme } from 'next-themes'
import { ReactElement } from 'react'

import { Container } from '@/components/container'
import { FeaturesCurrencies } from '@/components/features-currencies'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { NavRef } from '@/components/header'

import { useVideo } from '@/hooks/useVideo'

import s from './features-block.module.scss'

export const featuresRef: NavRef = { current: null }

interface VideoProps
    extends React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {
    url: string;
}

function Video ({ url, ...rest }: VideoProps): ReactElement | undefined {
    const video = useVideo(url)

    if (!video) return

    return <video src={video} {...rest} />
}

export function FeaturesBlock (): ReactElement {
    const { theme } = useTheme()

    return (
        <section className={s.features} ref={featuresRef}>
            <Container>
                <FeaturesCurrencies />
                <div className={s.featuresTopInner}>
                    <div className={s.featuresTop}>
                        <div className={s.start}>
                            <div className={s.startVideo}>
                                {theme === 'light' ? (
                                    <Video
                                        url="/videos/start.mp4"
                                        key="light"
                                        playsInline
                                        autoPlay
                                        loop
                                        muted
                                    />
                                ) : (
                                    <Video
                                        url="/videos/start-dark.mp4"
                                        key="dark"
                                        playsInline
                                        autoPlay
                                        loop
                                        muted
                                    />
                                )}
                            </div>
                            <Title variant="h3" className={s.startTitle}>
                                One click to start
                            </Title>
                            <Text className={s.text}>
                                Open{' '}
                                <a href="#" className={s.link}>
                                    @CryptoBot
                                </a>
                                , go to{' '}
                                <a href="#" className={s.link}>
                                    Crypto Pay
                                </a>{' '}
                                and tap Create App to get API Token
                            </Text>
                        </div>
                        <div className={s.exchange}>
                            <div className={s.exchangeVideo}>
                                {theme === 'light' ? (
                                    <Video
                                        url="/videos/exchange.mp4"
                                        key="light"
                                        playsInline
                                        autoPlay
                                        loop
                                        muted
                                    />
                                ) : (
                                    <Video
                                        url="/videos/exchange-dark.mp4"
                                        key="dark"
                                        playsInline
                                        autoPlay
                                        loop
                                        muted
                                    />
                                )}
                            </div>
                            <Title variant="h3" className={s.exchangeTitle}>
                                Real-time exchange rates
                            </Title>
                            <Text className={s.text}>
                                Request up to date currency rate with the{' '}
                                <a href="#" className={s.link}>
                                    getExchangeRates
                                </a>{' '}
                                API method
                            </Text>
                        </div>
                    </div>
                    <div className={s.stats}>
                        <div className={s.statsVideo}>
                            <Video url="/videos/stats.mp4" playsInline autoPlay loop muted />
                        </div>
                        <Title variant="h3" className={s.statsTitle}>
                            Payment statistics
                        </Title>
                        <Text className={s.text}>
                            Open{' '}
                            <a href="#" className={s.link}>
                                @CryptoBot
                            </a>
                            , go to Crypto Pay and{' '}
                            <a href="#" className={s.link}>
                                My Apps
                            </a>
                            , App Name to get Statistics
                        </Text>
                    </div>
                </div>
                <div className={s.featuresBottom}>
                    <div className={s.commission}>
                        <div className={s.commissionVideo}>
                            {theme === 'light' ? (
                                <Video
                                    url="/videos/send.mp4"
                                    key="light"
                                    playsInline
                                    autoPlay
                                    loop
                                    muted
                                />
                            ) : (
                                <Video
                                    url="/videos/send-black.mp4"
                                    key="dark"
                                    playsInline
                                    autoPlay
                                    loop
                                    muted
                                />
                            )}
                        </div>
                        <Title variant="h3" className={s.commissionTitle}>
                            Send coins to users
                        </Title>
                        <Text className={s.text}>
                            Automate payouts to users with{' '}
                            <a href="#" className={s.link}>
                                transfer
                            </a>{' '}
                            API method
                        </Text>
                    </div>
                    <div className={s.payments}>
                        <div className={s.paymentsVideo}>
                            <Video
                                url="/videos/payments.mp4"
                                playsInline
                                autoPlay
                                loop
                                muted
                            />
                        </div>
                        <Title variant="h3" className={s.paymentsTitle}>
                            Anonymous payments
                        </Title>
                        <Text className={s.text}>
                            Use allow_anonymous parameter in <a href="#">createInvoice</a> method to
                            give user an option to remain private
                        </Text>
                    </div>
                </div>
            </Container>
        </section>
    )
}
