/* eslint-disable import/no-default-export */
import type { Metadata } from 'next'
import { ReactElement } from 'react'
import { Inter } from 'next/font/google'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { Providers } from '@/providers/provider'

import '../styles/globals.scss'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
    title: 'Crypto payments for telegram bots',
    description: 'Seamlessly accept crypto payments in your Telegram bots and services.'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): ReactElement {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Providers>
                    <div className='wrapper'>
                        <Header />
                        <main className='main'>{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
