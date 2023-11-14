/* eslint-disable import/no-default-export */
import { SalesInfo } from '@/sections/sales-info'
import { InstructionBlock } from '@/sections/instruction-block'
import { HeroBlock } from '@/sections/hero-block'
import { CommunityBlock } from '@/sections/community-block'
import { FeaturesBlock } from '@/sections/features-block'
import { ApiBlock } from '@/sections/api-block'
import { ReactElement } from 'react'

export default function Home (): ReactElement {
    return (
        <>
            <HeroBlock />
            <SalesInfo />
            <FeaturesBlock />
            <InstructionBlock />
            <ApiBlock />
            <CommunityBlock />
        </>
    )
}
