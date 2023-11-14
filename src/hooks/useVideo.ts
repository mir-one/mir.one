'use client'

import { useEffect, useState } from 'react'

const cache = {} as any

export async function getCachedVideo (url: string): Promise<string> {
    if (cache[url]) {
        return cache[url]
    }

    const res = await fetch(url)
    const blob = await res.blob()
    const videoUrl = URL.createObjectURL(blob)

    cache[url] = videoUrl

    return videoUrl
}

export function useVideo (url: string): string | null {
    const [ video, setVideo ] = useState<string | null>(null)

    useEffect(() => {
        const load = async () => {
            const cached = await getCachedVideo(url)
            setVideo(cached)
        }
        load()
    }, [ url ])

    return video
}
