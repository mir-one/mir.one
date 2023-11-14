/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */

'use client'

import React, { useState, useEffect, ReactElement } from 'react'

import { Inter } from 'next/font/google'

import { v1 } from 'uuid'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { Container } from '@/components/container'
import { Title } from '@/components/ui/title'
import { Text } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { NavRef } from '@/components/header'

import { useCasesArr } from '@/mockup/use-cases'

import { useMediaQuery } from '@/hooks/use-media-query'

import 'swiper/css'
import 'swiper/css/pagination'

import s from './sales-info.module.scss'

export const casesRef: NavRef = { current: null }

const inter = Inter({ subsets: [ 'latin' ] })

export function SalesInfo (): ReactElement {
    const [ activeIndex, setActiveIndex ] = useState<number>(0)

    const totalSlides = useCasesArr.length

    useEffect(() => {
        const pagination = document.querySelector('.swiper-pagination')

        if (pagination) {
            const activeSlideNumber = (activeIndex + 1).toString().padStart(2, '0')
            const totalSlidesNumber = totalSlides.toString().padStart(2, '0')

            const beforeStyle = document.createElement('style')
            beforeStyle.textContent = `
            .swiper-pagination::before {
                font-family: ${inter.style.fontFamily}; 
              content: '${activeSlideNumber}';
            }
          `

            const afterStyle = document.createElement('style')
            afterStyle.textContent = `
            .swiper-pagination::after {
                font-family: ${inter.style.fontFamily}; 
              content: '${totalSlidesNumber}';
            }
          `

            pagination.appendChild(beforeStyle)
            pagination.appendChild(afterStyle)

            return () => {
                pagination.removeChild(beforeStyle)
                pagination.removeChild(afterStyle)
            }
        }
    }, [ activeIndex, totalSlides ])

    const isMobile = useMediaQuery(1024)
    const isTablet = useMediaQuery(768)

    return (
        <section className={s.useCasesSection} ref={casesRef}>
            <Container>
                <Swiper
                    modules={[ Pagination ]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onActiveIndexChange={index => setActiveIndex(index.activeIndex)}
                    className={s.useCasesSwiper}
                    direction={!isMobile ? 'vertical' : 'horizontal'}
                >
                    {useCasesArr.map(el => (
                        <SwiperSlide className={s.useCasesItem} key={v1()}>
                            <div className={s.useCasesBlockImg}>
                                {React.createElement(!isTablet ? el.img : el.imgMobile)}
                            </div>
                            <div>
                                <Title variant="h2" className={s.useCasesBlockTitle}>
                                    {el.title}
                                    <Text className={s.textBlue}>{el.subtitle}</Text>
                                </Title>
                                <Text className={s.useCasesBlockText}>{el.text}</Text>
                                <a href={el.link} className={s.useCasesBlockBtn}>
                                    <Button>Open API Docs</Button>
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    )
}
