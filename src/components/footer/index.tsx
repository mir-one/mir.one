'use client'

import Link from 'next/link'
import { ReactElement } from 'react'

import { casesRef } from '@/sections/sales-info'
import { featuresRef } from '@/sections/features-block'
import { startRef } from '@/sections/instruction-block'

import { useMediaQuery } from '@/hooks/use-media-query'
import LOGO from 'public/img/header/logo.svg'
import LOGO_MOBILE from 'public/img/header/logo-mobile.svg'
import { Container } from '../container'
import { Button } from '../ui/button'

import s from './footer.module.scss'

interface NavRef {
    current: HTMLDivElement | null;
}

export function Footer (): ReactElement {
    const isMobile = useMediaQuery(768)

    const scroll = (ref: NavRef) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleLinkClick = (event: React.MouseEvent, ref: NavRef) => {
        event.preventDefault()
        scroll(ref)
    }

    return (
        <footer className={s.footer}>
            <Container>
                <div className={s.footerRow}>
                    <Link href="/" className={s.footerLogo}>
                        {!isMobile ? <LOGO /> : <LOGO_MOBILE />}
                    </Link>
                    <nav className={s.footerNav}>
                        <ul className={s.footerList}>
                            <li>
                                <Link className={s.footerLink} href="#" onClick={event => handleLinkClick(event, casesRef)}>
                                    Use cases
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} href="#" onClick={event => handleLinkClick(event, featuresRef)}>
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link className={s.footerLink} href="#" onClick={event => handleLinkClick(event, startRef)}>
                                    How to start
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Button style={{ color: 'white' }} variant="primary">
                        Getgems
                    </Button>
                </div>
                <div className={s.copyright}>🄯 CC0 Zero 2022-2023 TON Fingerprints</div>
            </Container>
        </footer>
    )
}
